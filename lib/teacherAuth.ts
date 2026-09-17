import 'server-only'
import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'
import { createClient } from '@supabase/supabase-js'

/**
 * Mode enseignant, côté serveur.
 *
 * Le mot de passe est vérifié ici, jamais dans le navigateur :
 *  1. TEACHER_PASSWORD (variable d'environnement serveur, recommandé)
 *  2. sinon, le hash stocké dans Supabase `teacher_config` (compatibilité
 *     avec l'ancien mécanisme).
 *
 * Un jeton HMAC est posé en cookie httpOnly ; c'est lui qui autorise l'accès
 * aux corrections via /api/correction.
 */

export const TOKEN_COOKIE = 'teacher_token'
export const UI_COOKIE = 'teacher_ui'
const TOKEN_TTL_DAYS = 30

function legacyHash(password: string): string {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash.toString()
}

async function supabaseHash(): Promise<string | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  try {
    const client = createClient(url, key, { auth: { persistSession: false } })
    const { data } = await client.from('teacher_config').select('password_hash').single()
    return data?.password_hash ?? null
  } catch {
    return null
  }
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ba.length !== bb.length) return false
  return timingSafeEqual(ba, bb)
}

async function secret(): Promise<string> {
  if (process.env.TEACHER_SECRET) return process.env.TEACHER_SECRET
  if (process.env.TEACHER_PASSWORD) return `pw:${process.env.TEACHER_PASSWORD}`
  const h = await supabaseHash()
  return `legacy:${h ?? 'none'}:${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`
}

export async function verifyPassword(password: string): Promise<boolean> {
  if (!password) return false
  const envPassword = process.env.TEACHER_PASSWORD
  if (envPassword) return safeEqual(password, envPassword)
  const stored = await supabaseHash()
  if (!stored) return false
  return safeEqual(legacyHash(password), stored)
}

function sign(payload: string, key: string): string {
  return createHmac('sha256', key).update(payload).digest('base64url')
}

export async function issueToken(): Promise<string> {
  const exp = Date.now() + TOKEN_TTL_DAYS * 24 * 3600 * 1000
  const payload = `teacher.${exp}`
  return `${payload}.${sign(payload, await secret())}`
}

export async function verifyToken(token: string | undefined): Promise<boolean> {
  if (!token) return false
  const parts = token.split('.')
  if (parts.length !== 3) return false
  const [role, exp, sig] = parts
  if (role !== 'teacher') return false
  if (Number(exp) < Date.now()) return false
  const expected = sign(`${role}.${exp}`, await secret())
  return safeEqual(sig, expected)
}

/** Vrai si la requête courante porte un jeton enseignant valide. */
export async function isTeacherRequest(): Promise<boolean> {
  const token = cookies().get(TOKEN_COOKIE)?.value
  return verifyToken(token)
}

export function cookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    sameSite: 'lax' as const,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: maxAgeSeconds,
  }
}

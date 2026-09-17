import 'server-only'
import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

/**
 * Mode enseignant, côté serveur.
 *
 * Le mot de passe est vérifié ici, jamais dans le navigateur, contre la variable
 * d'environnement TEACHER_PASSWORD. Sans cette variable, le mode enseignant est fermé.
 *
 * Un jeton HMAC est posé en cookie httpOnly ; c'est lui qui autorise l'accès
 * aux corrections via /api/correction.
 */

export const TOKEN_COOKIE = 'teacher_token'
export const UI_COOKIE = 'teacher_ui'
const TOKEN_TTL_DAYS = 30

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ba.length !== bb.length) return false
  return timingSafeEqual(ba, bb)
}

async function secret(): Promise<string> {
  if (process.env.TEACHER_SECRET) return process.env.TEACHER_SECRET
  if (process.env.TEACHER_PASSWORD) return `pw:${process.env.TEACHER_PASSWORD}`
  throw new Error('TEACHER_PASSWORD manquant : le mode enseignant est désactivé')
}

export async function verifyPassword(password: string): Promise<boolean> {
  const envPassword = process.env.TEACHER_PASSWORD
  if (!password || !envPassword) {
    if (!envPassword) console.warn('[teacher] TEACHER_PASSWORD non défini : connexion enseignant refusée')
    return false
  }
  return safeEqual(password, envPassword)
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
  if (!token || !process.env.TEACHER_PASSWORD) return false
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

import { NextResponse } from 'next/server'
import { verifyPassword, issueToken, cookieOptions, TOKEN_COOKIE, UI_COOKIE } from '@/lib/teacherAuth'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  let password = ''
  try {
    const body = await request.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    return NextResponse.json({ ok: false, error: 'Requête invalide' }, { status: 400 })
  }

  const ok = await verifyPassword(password)
  if (!ok) {
    // Petite latence pour décourager la force brute
    await new Promise((r) => setTimeout(r, 400))
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  const token = await issueToken()
  const res = NextResponse.json({ ok: true })
  const ttl = 30 * 24 * 3600
  res.cookies.set(TOKEN_COOKIE, token, cookieOptions(ttl))
  res.cookies.set(UI_COOKIE, '1', { ...cookieOptions(ttl), httpOnly: false })
  return res
}

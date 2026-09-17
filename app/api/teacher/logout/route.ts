import { NextResponse } from 'next/server'
import { cookieOptions, TOKEN_COOKIE, UI_COOKIE } from '@/lib/teacherAuth'

export const dynamic = 'force-dynamic'

export async function POST() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(TOKEN_COOKIE, '', cookieOptions(0))
  res.cookies.set(UI_COOKIE, '', { ...cookieOptions(0), httpOnly: false })
  return res
}

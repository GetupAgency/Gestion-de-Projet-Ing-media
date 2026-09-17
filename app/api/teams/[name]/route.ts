import { NextResponse } from 'next/server'
import { isTeacherRequest } from '@/lib/teacherAuth'
import { setTeamPoints, deleteTeam } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Correction d'un score par l'enseignant (anti-triche). */
export async function PATCH(request: Request, { params }: { params: { name: string } }) {
  if (!(await isTeacherRequest())) return NextResponse.json({ ok: false, error: 'Réservé à l’enseignant' }, { status: 403 })
  const body = await request.json().catch(() => ({}))
  const points = Number(body?.points)
  if (!Number.isFinite(points)) return NextResponse.json({ ok: false, error: 'Points invalides' }, { status: 400 })
  const ok = setTeamPoints(decodeURIComponent(params.name), Math.max(0, Math.round(points)))
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 })
}

export async function DELETE(_request: Request, { params }: { params: { name: string } }) {
  if (!(await isTeacherRequest())) return NextResponse.json({ ok: false, error: 'Réservé à l’enseignant' }, { status: 403 })
  const ok = deleteTeam(decodeURIComponent(params.name))
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 })
}

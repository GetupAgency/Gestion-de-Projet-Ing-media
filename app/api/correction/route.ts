import { NextResponse } from 'next/server'
import { isTeacherRequest } from '@/lib/teacherAuth'
import { getCorrection } from '@/lib/content'

export const dynamic = 'force-dynamic'

/** Correction d'un cas pratique : servie uniquement à un enseignant authentifié. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const moduleId = searchParams.get('module') ?? ''
  const sectionId = searchParams.get('section') ?? ''
  const caseIndex = Math.max(0, Number(searchParams.get('case') ?? 0) || 0)

  if (!(await isTeacherRequest())) {
    return NextResponse.json({ ok: false, error: 'Réservé à l’enseignant' }, { status: 403 })
  }

  const html = getCorrection(moduleId, sectionId, caseIndex)
  if (!html) return NextResponse.json({ ok: false, error: 'Correction introuvable' }, { status: 404 })
  return NextResponse.json({ ok: true, html })
}

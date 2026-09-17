import { NextResponse } from 'next/server'
import { isTeacherRequest } from '@/lib/teacherAuth'
import { updateOral } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Mise à jour d'un oral (chrono, notes, commentaires) : enseignant uniquement. */
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  if (!(await isTeacherRequest())) return NextResponse.json({ ok: false, error: 'Réservé à l’enseignant' }, { status: 403 })
  const id = Number(params.id)
  if (!Number.isInteger(id)) return NextResponse.json({ ok: false, error: 'Identifiant invalide' }, { status: 400 })
  const patch = await request.json().catch(() => null)
  if (!patch || typeof patch !== 'object') return NextResponse.json({ ok: false, error: 'Requête invalide' }, { status: 400 })
  for (const k of ['note_comprehension', 'note_technique', 'note_justification', 'note_presentation']) {
    if (k in patch && patch[k] !== null && patch[k] !== '') {
      const n = Number(patch[k])
      if (!Number.isFinite(n) || n < 0 || n > 20) return NextResponse.json({ ok: false, error: `${k} doit être entre 0 et 20` }, { status: 400 })
      patch[k] = n
    }
  }
  const row = updateOral(id, patch)
  return NextResponse.json({ ok: Boolean(row), oral: row }, { status: row ? 200 : 404 })
}

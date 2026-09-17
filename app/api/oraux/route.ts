import { NextResponse } from 'next/server'
import { listOraux } from '@/lib/db'

export const dynamic = 'force-dynamic'

/** Ordre de passage et état des oraux (lecture ouverte, comme avant). */
export async function GET() {
  return NextResponse.json({ ok: true, oraux: listOraux() })
}

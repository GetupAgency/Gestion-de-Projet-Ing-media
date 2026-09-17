import { NextResponse } from 'next/server'
import { listTeams, upsertTeam } from '@/lib/db'
import type { TeamData } from '@/data/teamTypes'

export const dynamic = 'force-dynamic'

/** Classement des équipes (lecture publique, comme l'ancien accès anonyme). */
export async function GET() {
  return NextResponse.json({ ok: true, teams: listTeams() })
}

/** Une équipe publie son propre score depuis la mission. */
export async function POST(request: Request) {
  let body: { team?: Partial<TeamData>; projectId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Requête invalide' }, { status: 400 })
  }
  const t = body.team
  if (!t || typeof t.teamName !== 'string' || !t.teamName.trim() || typeof t.points !== 'number' || !Number.isFinite(t.points)) {
    return NextResponse.json({ ok: false, error: 'Équipe invalide' }, { status: 400 })
  }
  const team: TeamData = {
    teamName: t.teamName.trim().slice(0, 60),
    points: Math.max(0, Math.round(t.points)),
    badges: Array.isArray(t.badges) ? t.badges.slice(0, 100).map(String) : [],
    easterEggs: Array.isArray(t.easterEggs) ? t.easterEggs.slice(0, 100).map(String) : [],
    tokens: t.tokens && typeof t.tokens === 'object' ? t.tokens : { expertQuestions: 3, revelations: 2, joker: 1 },
    lastActivity: new Date().toISOString(),
  }
  const { created } = upsertTeam(team, typeof body.projectId === 'string' ? body.projectId.slice(0, 60) : null)
  return NextResponse.json({ ok: true, created, points: team.points })
}

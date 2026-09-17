import { getTeamData } from './gameSystem'
import type { TeamData } from '@/data/teamTypes'

/**
 * Synchronisation des scores d'équipe avec le serveur (SQLite via /api/teams).
 * Les noms historiques (syncToSupabase, getAllScoresFromSupabase) sont conservés
 * comme alias pour ne pas casser les appels existants.
 */

export async function syncToServer(): Promise<{ success: boolean; message: string }> {
  const teamData = getTeamData()
  if (!teamData) return { success: false, message: 'Créez d’abord votre équipe.' }
  const projectId = localStorage.getItem('selectedMissionProject') || 'unknown'
  try {
    const res = await fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ team: teamData, projectId }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || !data.ok) return { success: false, message: data.error || 'Erreur de synchronisation.' }
    return { success: true, message: data.created ? `Équipe créée dans la base : ${teamData.points} points` : `Score synchronisé : ${teamData.points} points` }
  } catch {
    return { success: false, message: 'Problème de connexion au serveur.' }
  }
}
export const syncToSupabase = syncToServer

export async function testServerConnection(): Promise<boolean> {
  try {
    const res = await fetch('/api/teams', { method: 'GET', cache: 'no-store' })
    return res.ok
  } catch {
    return false
  }
}

export async function getAllScores(): Promise<TeamData[]> {
  try {
    const res = await fetch('/api/teams', { cache: 'no-store' })
    const data = await res.json()
    return (data.teams || []) as TeamData[]
  } catch (error) {
    console.error('Erreur récupération scores :', error)
    return []
  }
}
export const getAllScoresFromSupabase = getAllScores

/** « Temps réel » par interrogation régulière du serveur (toutes les 5 s). */
export function subscribeToScores(callback: (teams: TeamData[]) => void, intervalMs = 5000): () => void {
  let stopped = false
  const tick = async () => {
    if (stopped) return
    const teams = await getAllScores()
    if (!stopped) callback(teams)
  }
  const id = setInterval(tick, intervalMs)
  return () => {
    stopped = true
    clearInterval(id)
  }
}

/** Correction d'un score par l'enseignant. */
export async function setTeamPointsOnServer(teamName: string, points: number): Promise<boolean> {
  const res = await fetch(`/api/teams/${encodeURIComponent(teamName)}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ points }),
  })
  return res.ok
}

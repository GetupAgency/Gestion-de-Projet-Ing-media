import { BADGES, EASTER_EGGS } from './gameSystem'
import type { TeamData } from './gameSystem'

// Calculer le score maximum théorique d'une équipe
export function calculateMaxLegitimateScore(team: TeamData): number {
  let maxScore = 0

  // Points des badges (uniquement ceux qu'ils ont)
  team.badges.forEach(badgeId => {
    const badge = BADGES.find(b => b.id === badgeId)
    if (badge) {
      maxScore += badge.points
    }
  })

  // Points des énigmes (uniquement celles qu'ils ont résolues)
  team.easterEggs.forEach(eggId => {
    const allEggs = [...EASTER_EGGS.eventeo, ...EASTER_EGGS.mediconnect]
    const egg = allEggs.find(e => e.id === eggId)
    if (egg) {
      maxScore += egg.points
    }
  })

  // Marge généreuse pour mini-jeux et easter eggs techniques
  // Quiz (80) + Memory (60) + Order (70) + Easter eggs techniques (~200) = ~400
  const margin = 400

  return maxScore + margin
}

// Détecter si une équipe a triché
export function detectCheat(team: TeamData): boolean {
  const maxLegit = calculateMaxLegitimateScore(team)
  return team.points > maxLegit + 100 // Marge supplémentaire de 100
}

// Corriger le score d'une équipe tricheur
export function correctCheatScore(team: TeamData): number {
  const maxLegit = calculateMaxLegitimateScore(team)
  
  // Plafonner au max légitime
  return Math.min(team.points, maxLegit)
}

// Analyser tout le leaderboard
export function analyzeLeaderboard(teams: TeamData[]): {
  team: TeamData
  legitimate: boolean
  maxScore: number
  excess: number
}[] {
  return teams.map(team => {
    const maxLegit = calculateMaxLegitimateScore(team)
    const isLegit = !detectCheat(team)
    const excess = Math.max(0, team.points - maxLegit)
    
    return {
      team,
      legitimate: isLegit,
      maxScore: maxLegit,
      excess
    }
  })
}


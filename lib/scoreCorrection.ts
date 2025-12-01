import { getTeamData, updateTeamData, BADGES, EASTER_EGGS } from './gameSystem'

// Corriger les scores gonflés automatiquement
export function fixInflatedScores(): { fixed: boolean, oldScore: number, newScore: number } {
  const team = getTeamData()
  if (!team) {
    return { fixed: false, oldScore: 0, newScore: 0 }
  }

  const oldScore = team.points

  // Calculer le score maximum légitime basé sur ce qu'ils ont vraiment fait
  let legitimateScore = 0

  // Points des badges
  team.badges.forEach(badgeId => {
    const badge = BADGES.find(b => b.id === badgeId)
    if (badge) {
      legitimateScore += badge.points
    }
  })

  // Points des énigmes résolues
  team.easterEggs.forEach(eggId => {
    const allEggs = [...EASTER_EGGS.eventeo, ...EASTER_EGGS.mediconnect]
    const egg = allEggs.find(e => e.id === eggId)
    if (egg) {
      legitimateScore += egg.points
    }
  })

  // Si le score est trop élevé, le corriger
  if (team.points > legitimateScore + 100) { // Marge de 100 pts pour les mini-jeux
    updateTeamData({ points: legitimateScore })
    
    // Nettoyer aussi les triggers pour éviter les duplicatas futurs
    localStorage.removeItem('triggeredEvents')
    localStorage.removeItem('console-triggered')
    
    return { 
      fixed: true, 
      oldScore, 
      newScore: legitimateScore 
    }
  }

  return { fixed: false, oldScore, newScore: oldScore }
}

// Auto-correction au démarrage (si score aberrant)
export function autoCorrectOnLoad(): void {
  const team = getTeamData()
  if (!team) return

  // Si score > 1000, c'est suspect (max théorique ~820)
  if (team.points > 1000) {
    const result = fixInflatedScores()
    if (result.fixed) {
      console.log(`Score corrigé automatiquement : ${result.oldScore} → ${result.newScore} points`)
    }
  }
}


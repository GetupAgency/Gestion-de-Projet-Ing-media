// Système de gamification pour la mission

export interface TeamData {
  teamName: string
  points: number
  badges: string[]
  tokens: {
    expertQuestions: number
    revelations: number
    joker: number
  }
  easterEggs: string[]
  lastActivity: string
  loutreMessage: boolean
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  points: number
}

// Badges disponibles
export const BADGES: Badge[] = [
  {
    id: 'first-blood',
    name: 'Premiers sur le Pont',
    description: 'Première équipe à démarrer le projet',
    icon: '⚡',
    points: 50
  },
  {
    id: 'detective',
    name: 'Détective en Herbe',
    description: 'Trouvé 3 énigmes',
    icon: '🔍',
    points: 100
  },
  {
    id: 'master-detective',
    name: 'Sherlock Holmes',
    description: 'Toutes les énigmes résolues',
    icon: '🎩',
    points: 200
  },
  {
    id: 'konami-master',
    name: 'Geek Confirmé',
    description: 'Code Konami découvert',
    icon: '👾',
    points: 75
  },
  {
    id: 'console-master',
    name: 'Plongeur de Console',
    description: 'Message secret découvert',
    icon: '🦦',
    points: 50
  },
  {
    id: 'speed-demon',
    name: 'Vitesse Grand V',
    description: 'Rendu en moins de 48h',
    icon: '⚡',
    points: 150
  },
  {
    id: 'strategist',
    name: 'Stratège',
    description: 'Gestion optimale des jetons',
    icon: '🎯',
    points: 80
  }
]

// Easter eggs disponibles
export const EASTER_EGGS = {
  eventeo: [
    {
      id: 'eventeo-budget',
      hint: 'Le chiffre 120 apparaît étrangement souvent dans ce projet. Budget max en milliers ?',
      solution: '120',
      reward: 'Budget maximal : 120 000€',
      points: 30
    },
    {
      id: 'eventeo-sprints',
      hint: 'Deux semaines, c\'est le rythme parfait pour un sprint. Combien de jours exactement ?',
      solution: '14',
      reward: 'Durée optimale d\'un sprint : 14 jours',
      points: 20
    },
    {
      id: 'eventeo-mobile',
      hint: 'Le framework qui rime avec "act" et qui "nativise" les apps mobiles ?',
      solution: 'react native',
      reward: 'Framework mobile recommandé : React Native',
      points: 40
    },
    {
      id: 'eventeo-participants',
      hint: 'Le nombre maximum de participants qui fait rêver les organisateurs... commence par 5 et finit par 000',
      solution: '5000',
      reward: 'Capacité max : 5000 participants simultanés',
      points: 25
    },
    {
      id: 'eventeo-matching',
      hint: 'L\'algorithme qui connecte les participants intelligemment... ça "matche" bien !',
      solution: 'matching',
      reward: 'Feature prioritaire : Algorithme de matching intelligent',
      points: 35
    }
  ],
  mediconnect: [
    {
      id: 'medi-hds',
      hint: 'Trois lettres magiques pour héberger des données de santé en France...',
      solution: 'hds',
      reward: 'Hébergement obligatoire : Certification HDS',
      points: 30
    },
    {
      id: 'medi-sla',
      hint: 'Un site médical doit être disponible... presque tout le temps. Trois chiffres avec des 9 ?',
      solution: '99.9',
      reward: 'SLA requis : 99.9% de disponibilité',
      points: 25
    },
    {
      id: 'medi-video',
      hint: 'Pour téléconsulter, il faut voir le patient. Quelle feature est critique ?',
      solution: 'video',
      reward: 'Feature critique : Module de visioconférence',
      points: 30
    },
    {
      id: 'medi-rpps',
      hint: 'Quatre lettres pour identifier un professionnel de santé en France (R_P_)',
      solution: 'rpps',
      reward: 'Vérification obligatoire : Numéro RPPS des praticiens',
      points: 35
    },
    {
      id: 'medi-budget',
      hint: 'Le budget minimum commence par 150 et se termine par trois zéros. En euros ?',
      solution: '150000',
      reward: 'Budget minimum : 150 000€',
      points: 25
    }
  ]
}

// Gestion de l'équipe
export function getTeamData(): TeamData | null {
  if (typeof window === 'undefined') return null
  
  const data = localStorage.getItem('teamData')
  if (!data) return null
  
  return JSON.parse(data)
}

export function initTeam(teamName: string): TeamData {
  const teamData: TeamData = {
    teamName,
    points: 0,
    badges: [],
    tokens: {
      expertQuestions: 3,
      revelations: 2,
      joker: 1
    },
    easterEggs: [],
    lastActivity: new Date().toISOString()
  }
  
  localStorage.setItem('teamData', JSON.stringify(teamData))
  
  // Badge "First Blood" si première équipe
  const allTeams = getAllTeams()
  if (allTeams.length === 1) {
    awardBadge('first-blood')
  }
  
  return teamData
}

export function updateTeamData(updates: Partial<TeamData>): void {
  const current = getTeamData()
  if (!current) return
  
  const updated = {
    ...current,
    ...updates,
    lastActivity: new Date().toISOString()
  }
  
  localStorage.setItem('teamData', JSON.stringify(updated))
}

export function addPoints(points: number, reason?: string): void {
  const team = getTeamData()
  if (!team) return
  
  updateTeamData({ points: team.points + points })
  
  if (reason && typeof window !== 'undefined') {
    showNotification(`+${points} points : ${reason}`)
  }
}

export function useToken(type: 'expertQuestions' | 'revelations' | 'joker'): boolean {
  const team = getTeamData()
  if (!team || team.tokens[type] <= 0) return false
  
  const newTokens = { ...team.tokens }
  newTokens[type]--
  
  updateTeamData({ tokens: newTokens })
  return true
}

export function unlockEasterEgg(eggId: string): void {
  const team = getTeamData()
  if (!team) return
  
  if (team.easterEggs.includes(eggId)) {
    showNotification('Easter egg déjà découvert !')
    return
  }
  
  // Trouver l'easter egg
  const allEggs = [...EASTER_EGGS.eventeo, ...EASTER_EGGS.mediconnect]
  const egg = allEggs.find(e => e.id === eggId)
  
  if (!egg) return
  
  // Ajouter l'easter egg
  const newEasterEggs = [...team.easterEggs, eggId]
  updateTeamData({ easterEggs: newEasterEggs })
  
  // Ajouter les points
  addPoints(egg.points, `Easter egg découvert : ${egg.reward}`)
  
  // Vérifier les badges
  if (newEasterEggs.length >= 3 && !team.badges.includes('detective')) {
    awardBadge('detective')
  }
  
  const projectEggs = egg.id.startsWith('eventeo') ? EASTER_EGGS.eventeo : EASTER_EGGS.mediconnect
  if (newEasterEggs.filter(e => e.startsWith(egg.id.split('-')[0])).length === projectEggs.length) {
    awardBadge('master-detective')
  }
  
  showNotification(`🎉 Easter egg débloqué : ${egg.reward}`, 'success')
}

export function awardBadge(badgeId: string): void {
  const team = getTeamData()
  if (!team) return
  
  if (team.badges.includes(badgeId)) return
  
  const badge = BADGES.find(b => b.id === badgeId)
  if (!badge) return
  
  const newBadges = [...team.badges, badgeId]
  updateTeamData({ 
    badges: newBadges,
    points: team.points + badge.points
  })
  
  showNotification(`🏅 Badge débloqué : ${badge.name} (+${badge.points} pts)`, 'success')
}

export function getAllTeams(): TeamData[] {
  if (typeof window === 'undefined') return []
  
  const teams: TeamData[] = []
  
  // Récupérer toutes les équipes (dans un vrai système, ce serait en DB)
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('team-')) {
      const data = localStorage.getItem(key)
      if (data) teams.push(JSON.parse(data))
    }
  }
  
  // Trier par points
  return teams.sort((a, b) => b.points - a.points)
}

export function showNotification(message: string, type: 'info' | 'success' | 'warning' = 'info'): void {
  if (typeof window === 'undefined') return
  
  // Créer une notification custom
  const notification = document.createElement('div')
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 animate-slide-in ${
    type === 'success' ? 'bg-green-600' : type === 'warning' ? 'bg-orange-600' : 'bg-blue-600'
  } text-white max-w-md`
  notification.textContent = message
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.classList.add('animate-slide-out')
    setTimeout(() => notification.remove(), 300)
  }, 3000)
}

// Easter eggs techniques
export function initEasterEggListeners(): void {
  if (typeof window === 'undefined') return
  
  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let konamiIndex = 0
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++
      if (konamiIndex === konamiCode.length) {
        awardBadge('konami-master')
        addPoints(75, 'Code Konami')
        showNotification('Code Konami ! Respect.', 'success')
        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  })
  
  // Loutre easter egg  
  let consoleSequence = ''
  document.addEventListener('keypress', (e) => {
    consoleSequence += e.key
    if (consoleSequence.includes('loutre')) {
      console.log(`%c
🦦 Les loutres vous saluent !

Indice : Les chiffres ronds (120, 5000, 150) sont des réponses...
`, 'color: #3b82f6; font-size: 14px; font-weight: bold;')
      showNotification('Indice loutre ! Regarde la console.', 'success')
      addPoints(25, 'Message loutre')
      consoleSequence = ''
    }
    if (consoleSequence.length > 20) consoleSequence = ''
  })
  
  // Double-clic sur les badges
  document.addEventListener('dblclick', (e) => {
    const target = e.target as HTMLElement
    if (target.textContent?.includes('Badge') || target.textContent?.includes('badge')) {
      addPoints(15, 'Double-clic mystère')
      showNotification('Curieux ! +15 points', 'info')
    }
  })
  
  // Scroll rapide = easter egg
  let scrollCount = 0
  let scrollTimeout: NodeJS.Timeout
  
  window.addEventListener('scroll', () => {
    scrollCount++
    clearTimeout(scrollTimeout)
    
    scrollTimeout = setTimeout(() => {
      if (scrollCount > 50) {
        addPoints(20, 'Scroll intensif')
        showNotification('Défilement olympique ! +20 points', 'success')
      }
      scrollCount = 0
    }, 2000)
  })
  
  // Survol prolongé sur titre
  let hoverTimeout: NodeJS.Timeout
  document.addEventListener('mouseover', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'H1' || target.tagName === 'H2') {
      hoverTimeout = setTimeout(() => {
        addPoints(10, 'Patience')
        showNotification('La patience est une vertu ! +10 points', 'info')
      }, 3000)
    }
  })
  
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'H1' || target.tagName === 'H2') {
      clearTimeout(hoverTimeout)
    }
  })
}

// Vérifier une solution d'easter egg
export function checkEasterEggSolution(eggId: string, solution: string): boolean {
  const allEggs = [...EASTER_EGGS.eventeo, ...EASTER_EGGS.mediconnect]
  const egg = allEggs.find(e => e.id === eggId)
  
  if (!egg) return false
  
  const normalized = solution.toLowerCase().trim().replace(/[^a-z0-9.]/g, '')
  const expectedNormalized = egg.solution.toLowerCase().trim().replace(/[^a-z0-9.]/g, '')
  
  if (normalized === expectedNormalized) {
    unlockEasterEgg(eggId)
    return true
  }
  
  // Donner un indice si presque bon
  if (normalized.includes(expectedNormalized.substring(0, 3)) && normalized.length > 2) {
    showNotification('Vous chauffez ! Continuez dans cette direction...', 'warning')
  }
  
  return false
}


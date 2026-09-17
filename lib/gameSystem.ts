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
    description: 'Trouvé 5 énigmes',
    icon: '🔍',
    points: 100
  },
  {
    id: 'master-detective',
    name: 'Sherlock Holmes',
    description: 'Toutes les énigmes résolues',
    icon: '🎩',
    points: 250
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
  },
  {
    id: 'gamer',
    name: 'Joueur Compulsif',
    description: 'Joué aux 3 mini-jeux',
    icon: '🎮',
    points: 100
  },
  {
    id: 'perfect-quiz',
    name: 'Sans Faute',
    description: 'Quiz réussi avec 100%',
    icon: '💯',
    points: 80
  },
  {
    id: 'easter-hunter',
    name: 'Chasseur de Pâques',
    description: 'Trouvé 5 easter eggs techniques',
    icon: '🥚',
    points: 120
  },
  {
    id: 'curious-cat',
    name: 'Chat Curieux',
    description: 'Exploré tous les onglets',
    icon: '🐱',
    points: 60
  },
  {
    id: 'team-player',
    name: 'Esprit d\'Équipe',
    description: 'Utilisé intelligemment les jetons',
    icon: '🤝',
    points: 70
  },
  {
    id: 'night-owl',
    name: 'Oiseau de Nuit',
    description: 'Travaillé après 22h',
    icon: '🦉',
    points: 50
  },
  {
    id: 'early-bird',
    name: 'Lève-Tôt',
    description: 'Travaillé avant 7h',
    icon: '🐦',
    points: 50
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
      hint: 'Le nombre maximum de participants qui fait rêver... commence par 5 et finit par 000',
      solution: '5000',
      reward: 'Capacité max : 5000 participants simultanés',
      points: 25
    },
    {
      id: 'eventeo-matching',
      hint: 'L\'algorithme qui connecte les participants... ça "matche" bien !',
      solution: 'matching',
      reward: 'Feature prioritaire : Algorithme de matching intelligent',
      points: 35
    },
    {
      id: 'eventeo-badge-qr',
      hint: 'Deux lettres pour identifier quelqu\'un à un événement. C\'est rapide à scanner !',
      solution: 'qr',
      reward: 'Technologie badges : QR Code',
      points: 25
    },
    {
      id: 'eventeo-mvp',
      hint: 'Trois lettres pour désigner la première version minimale d\'un produit...',
      solution: 'mvp',
      reward: 'Stratégie recommandée : MVP (Minimum Viable Product)',
      points: 30
    },
    {
      id: 'eventeo-persona',
      hint: 'Le persona qui participe à 15+ événements par an est une Business... ?',
      solution: 'developer',
      reward: 'Persona clé identifié : Business Developer',
      points: 35
    },
    {
      id: 'eventeo-agile',
      hint: 'La méthodologie la plus utilisée en startup, commence par S...',
      solution: 'scrum',
      reward: 'Méthodologie recommandée : Scrum',
      points: 30
    },
    {
      id: 'eventeo-api',
      hint: 'Trois lettres pour connecter différents systèmes entre eux...',
      solution: 'api',
      reward: 'Intégration clé : API REST',
      points: 25
    },
    {
      id: 'eventeo-ux',
      hint: 'Deux lettres pour l\'expérience utilisateur en anglais...',
      solution: 'ux',
      reward: 'Focus prioritaire : User Experience',
      points: 20
    },
    {
      id: 'eventeo-roi',
      hint: 'Trois lettres qui mesurent le retour sur investissement...',
      solution: 'roi',
      reward: 'KPI clé : Return On Investment',
      points: 30
    },
    {
      id: 'eventeo-Sophie',
      hint: 'Le prénom de la Business Developer qui va à 15+ événements par an...',
      solution: 'sophie',
      reward: 'Persona identifié : Sophie, la networkeuse',
      points: 35
    },
    {
      id: 'eventeo-calculation',
      hint: 'Calcul : Si un sprint dure 14 jours et le projet dure 6 mois, combien de sprints ? (arrondi)',
      solution: '13',
      reward: 'Calcul sprint : ~13 sprints sur 6 mois',
      points: 50
    },
    {
      id: 'eventeo-stripe',
      hint: 'Six lettres, solution de paiement en ligne très populaire, commence par S...',
      solution: 'stripe',
      reward: 'Solution paiement recommandée : Stripe',
      points: 35
    },
    {
      id: 'eventeo-push',
      hint: 'Quatre lettres pour les notifications qui arrivent automatiquement sur mobile...',
      solution: 'push',
      reward: 'Feature importante : Push notifications',
      points: 30
    },
    {
      id: 'eventeo-reverse',
      hint: 'Le mot "NETWORKING" à l\'envers donne... ?',
      solution: 'gnikrowten',
      reward: 'Tu es observateur ! Bravo',
      points: 45
    },
    {
      id: 'eventeo-postgres',
      hint: 'Base de données relationnelle, commence par Post... 8 lettres',
      solution: 'postgresql',
      reward: 'Base de données recommandée : PostgreSQL',
      points: 35
    },
    {
      id: 'eventeo-aws',
      hint: 'Trois lettres, leader du cloud computing, commence par A...',
      solution: 'aws',
      reward: 'Infrastructure cloud : AWS',
      points: 30
    },
    {
      id: 'eventeo-riddle',
      hint: 'Je suis léger comme une plume mais même les meilleurs développeurs ne peuvent me tenir longtemps. Qui suis-je ? (en anglais)',
      solution: 'breath',
      reward: 'Énigme résolue ! (La respiration)',
      points: 60
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
    },
    {
      id: 'medi-rgpd',
      hint: 'Quatre lettres pour la protection des données en Europe...',
      solution: 'rgpd',
      reward: 'Conformité obligatoire : RGPD',
      points: 30
    },
    {
      id: 'medi-https',
      hint: 'Protocole sécurisé pour le web, le S veut dire Secure...',
      solution: 'https',
      reward: 'Sécurité minimale : HTTPS obligatoire',
      points: 20
    },
    {
      id: 'medi-ars',
      hint: 'Trois lettres pour l\'Agence Régionale de... ?',
      solution: 'ars',
      reward: 'Organisme de validation : ARS',
      points: 30
    },
    {
      id: 'medi-jwt',
      hint: 'Trois lettres pour sécuriser l\'authentification avec des tokens...',
      solution: 'jwt',
      reward: 'Authentification recommandée : JWT',
      points: 35
    },
    {
      id: 'medi-hipaa',
      hint: 'Cinq lettres, standard américain de protection des données médicales...',
      solution: 'hipaa',
      reward: 'Standard international : HIPAA',
      points: 40
    },
    {
      id: 'medi-dmp',
      hint: 'Trois lettres pour le Dossier Médical... (français)',
      solution: 'dmp',
      reward: 'Intégration importante : DMP (Dossier Médical Partagé)',
      points: 35
    },
    {
      id: 'medi-teleconsult',
      hint: 'Le mot "téléconsultation" contient combien de lettres ?',
      solution: '16',
      reward: 'Observation ! (Téléconsultation = 16 lettres)',
      points: 25
    },
    {
      id: 'medi-doctor',
      hint: 'Prénom du Dr. Martin, le médecin généraliste de 48 ans...',
      solution: 'martin',
      reward: 'Persona médecin identifié',
      points: 30
    },
    {
      id: 'medi-2fa',
      hint: 'Trois caractères pour l\'authentification à deux facteurs...',
      solution: '2fa',
      reward: 'Sécurité renforcée : 2FA',
      points: 35
    },
    {
      id: 'medi-gdpr',
      hint: 'RGPD en anglais, quatre lettres...',
      solution: 'gdpr',
      reward: 'RGPD en anglais : GDPR',
      points: 30
    },
    {
      id: 'medi-webrtc',
      hint: 'Six lettres, technologie pour la vidéo en temps réel dans le navigateur...',
      solution: 'webrtc',
      reward: 'Technologie vidéo : WebRTC',
      points: 45
    },
    {
      id: 'medi-calculation',
      hint: 'Si le budget minimum est 150k et qu\'on ajoute 50k, on obtient ? (en milliers)',
      solution: '200',
      reward: 'Budget maximum : 200 000€',
      points: 35
    },
    {
      id: 'medi-audit',
      hint: 'Cinq lettres, examen approfondi de la sécurité...',
      solution: 'audit',
      reward: 'Obligatoire : Audit de sécurité',
      points: 30
    },
    {
      id: 'medi-react',
      hint: 'Framework frontend, cinq lettres, créé par Facebook...',
      solution: 'react',
      reward: 'Frontend recommandé : React',
      points: 30
    },
    {
      id: 'medi-reverse',
      hint: 'Le mot "SANTE" à l\'envers donne... ?',
      solution: 'etnas',
      reward: 'Observation inversée ! Bravo',
      points: 40
    },
    {
      id: 'medi-riddle',
      hint: 'Je peux voyager dans le monde entier en restant dans un coin. Qui suis-je ? (en anglais)',
      solution: 'stamp',
      reward: 'Énigme résolue ! (Un timbre)',
      points: 60
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

export function addPoints(points: number, reason?: string, eventId?: string): boolean {
  const team = getTeamData()
  if (!team) return false
  
  // Si c'est un événement avec ID, vérifier qu'il n'a pas déjà été donné
  if (eventId) {
    const triggeredEvents = JSON.parse(localStorage.getItem('triggeredEvents') || '[]')
    if (triggeredEvents.includes(eventId)) {
      // Événement déjà déclenché : ni points ni notification
      return false
    }
    // Marquer l'événement comme déclenché
    triggeredEvents.push(eventId)
    localStorage.setItem('triggeredEvents', JSON.stringify(triggeredEvents))
  }
  
  updateTeamData({ points: team.points + points })
  
  if (reason && typeof window !== 'undefined') {
    showNotification(`+${points} points : ${reason}`)
  }
  return true
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
  
  // Vérifier les badges basés sur énigmes
  if (newEasterEggs.length >= 5 && !team.badges.includes('detective')) {
    awardBadge('detective')
  }
  
  const projectEggs = egg.id.startsWith('eventeo') ? EASTER_EGGS.eventeo : EASTER_EGGS.mediconnect
  const projectEggsCount = newEasterEggs.filter(e => e.startsWith(egg.id.split('-')[0])).length
  if (projectEggsCount === projectEggs.length) {
    awardBadge('master-detective')
  }
  
  // Badge chasseur d'easter eggs (5 easter eggs techniques)
  const technicalEggs = ['console-open', 'loutre-typed', 'konami-code', 'triple-click-logo', 'scroll-olympic']
  const foundTechnical = technicalEggs.filter(eggId => 
    localStorage.getItem('triggeredEvents')?.includes(eggId)
  ).length
  
  if (foundTechnical >= 5) {
    awardBadge('easter-hunter')
  }
  
  showNotification(`🎉 Easter egg débloqué : ${egg.reward}`, 'success')
}

export function awardBadge(badgeId: string): void {
  const team = getTeamData()
  if (!team) return
  
  // Vérifier si déjà obtenu
  if (team.badges.includes(badgeId)) return
  
  const badge = BADGES.find(b => b.id === badgeId)
  if (!badge) return
  
  const newBadges = [...team.badges, badgeId]
  updateTeamData({ 
    badges: newBadges,
    points: team.points + badge.points
  })
  
  showNotification(`Badge débloqué : ${badge.name} (+${badge.points} pts)`, 'success')
}

export function getAllTeams(): TeamData[] {
  if (typeof window === 'undefined') return []
  
  const teams: TeamData[] = []
  
  // L'équipe locale est stockée sous `teamData` ; les clés `team-*` restent lues par compatibilité
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key === 'teamData' || key?.startsWith('team-')) {
      const data = localStorage.getItem(key)
      if (data) {
        try {
          const parsed = JSON.parse(data)
          if (parsed?.teamName && !teams.some((t) => t.teamName === parsed.teamName)) teams.push(parsed)
        } catch {
          /* entrée corrompue : ignorée */
        }
      }
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
let easterEggsInstalled = false

export function initEasterEggListeners(): void {
  if (typeof window === 'undefined') return
  // Les écouteurs sont globaux : on ne les installe qu'une fois par chargement de page
  if (easterEggsInstalled) return
  easterEggsInstalled = true
  
  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let konamiIndex = 0
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++
      if (konamiIndex === konamiCode.length) {
        awardBadge('konami-master')
        addPoints(75, 'Code Konami, respect', 'konami-code')
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
      addPoints(25, 'Indice loutre, regarde la console', 'loutre-typed')
      consoleSequence = ''
    }
    if (consoleSequence.length > 20) consoleSequence = ''
  })
  
  // Double-clic sur les badges
  document.addEventListener('dblclick', (e) => {
    const target = e.target as HTMLElement
    if (target.textContent?.includes('Badge') || target.textContent?.includes('badge')) {
      addPoints(15, 'Double-clic curieux', 'double-click-badge')
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
        addPoints(20, 'Défilement olympique', 'scroll-olympic')
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
        addPoints(10, 'La patience est une vertu', 'hover-patience')
      }, 3000)
    }
  })
  
  document.addEventListener('mouseout', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'H1' || target.tagName === 'H2') {
      clearTimeout(hoverTimeout)
    }
  })
  
  // Secouer la fenêtre (mobile ou drag)
  let shakeCount = 0
  let lastX = 0, lastY = 0
  
  window.addEventListener('devicemotion', (e) => {
    const acc = e.accelerationIncludingGravity
    if (acc && (Math.abs(acc.x || 0) > 15 || Math.abs(acc.y || 0) > 15)) {
      shakeCount++
      if (shakeCount > 3) {
        addPoints(40, 'Tu as secoué ton téléphone', 'shake-device')
        shakeCount = 0
      }
    }
  })
  
  // Sélectionner du texte spécifique
  document.addEventListener('selectionchange', () => {
    const selection = window.getSelection()?.toString().toLowerCase()
    if (selection?.includes('gestion de projet')) {
      addPoints(15, 'Tu lis attentivement', 'text-selection-gp')
    }
  })
  
  // Clic droit (contextmenu)
  document.addEventListener('contextmenu', (e) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'IMG') {
      addPoints(20, 'Curieux des images', 'right-click-img')
    }
  })
  
  // Rester longtemps sur la page (5 min)
  setTimeout(() => {
    addPoints(50, '5 minutes sur la page, bravo pour ta concentration', 'stay-5min')
    awardBadge('night-owl')
  }, 300000)
  
  // Vérifier l'heure pour badges
  const hour = new Date().getHours()
  if (hour >= 22 || hour < 6) {
    setTimeout(() => {
      awardBadge('night-owl')
      addPoints(50, 'Travail nocturne', 'work-night')
    }, 60000)
  } else if (hour < 7) {
    setTimeout(() => {
      awardBadge('early-bird')
      addPoints(50, 'Lève-tôt', 'work-early')
    }, 60000)
  }
  
  // Copier du texte
  let copyCount = 0
  document.addEventListener('copy', () => {
    copyCount++
    if (copyCount === 5) {
      addPoints(25, '5 copies, tu prends des notes', 'copy-5-times')
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


// Système de mode enseignant avec mot de passe dynamique

// Génère le mot de passe du jour (jour de la semaine en français)
function getDailyPassword(): string {
  const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  const today = new Date().getDay()
  return days[today]
}

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Vérifier localStorage avec hash du mot de passe du jour
  const stored = localStorage.getItem('teacherMode')
  const hash = localStorage.getItem('teacherHash')
  const today = new Date().toDateString()
  const storedDate = localStorage.getItem('teacherDate')
  
  // Vérifier que c'est le bon jour ET le bon hash
  if (stored === 'true' && hash === hashPassword(getDailyPassword()) && storedDate === today) {
    return true
  }
  
  // Si la date a changé, désactiver le mode
  if (storedDate && storedDate !== today) {
    disableTeacherMode()
  }
  
  return false
}

export function enableTeacherMode(password: string): boolean {
  if (typeof window === 'undefined') return false
  
  const dailyPassword = getDailyPassword()
  
  if (password.toLowerCase().trim() === dailyPassword) {
    localStorage.setItem('teacherMode', 'true')
    localStorage.setItem('teacherHash', hashPassword(password))
    localStorage.setItem('teacherDate', new Date().toDateString())
    return true
  }
  
  return false
}

export function disableTeacherMode(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('teacherMode')
  localStorage.removeItem('teacherHash')
  localStorage.removeItem('teacherDate')
}

export function checkAndEnableTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Si déjà en mode enseignant, vérifier la validité
  if (isTeacherMode()) {
    return true
  }
  
  // Vérifier URL avec mot de passe
  const params = new URLSearchParams(window.location.search)
  const urlPassword = params.get('key')
  
  if (urlPassword) {
    return enableTeacherMode(urlPassword)
  }
  
  return false
}

export function promptTeacherPassword(): boolean {
  if (typeof window === 'undefined') return false
  
  const password = window.prompt('Mot de passe enseignant :')
  if (!password) return false
  
  if (enableTeacherMode(password)) {
    window.location.reload()
    return true
  } else {
    alert('Bien essayé bande de loutres 🦦')
    return false
  }
}

// Hash simple (pas crypto-sécurisé mais suffisant pour ce contexte)
function hashPassword(password: string): string {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString()
}


// Système de mode enseignant avec mot de passe

// ⚠️ IMPORTANT : Changez ce mot de passe avant de déployer !
const TEACHER_PASSWORD = 'Grosac4Ever!'

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Vérifier localStorage avec hash du mot de passe
  const stored = localStorage.getItem('teacherMode')
  const hash = localStorage.getItem('teacherHash')
  
  if (stored === 'true' && hash === hashPassword(TEACHER_PASSWORD)) {
    return true
  }
  
  return false
}

export function enableTeacherMode(password: string): boolean {
  if (typeof window === 'undefined') return false
  
  if (password === TEACHER_PASSWORD) {
    localStorage.setItem('teacherMode', 'true')
    localStorage.setItem('teacherHash', hashPassword(password))
    return true
  }
  
  return false
}

export function disableTeacherMode(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('teacherMode')
  localStorage.removeItem('teacherHash')
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
    alert('Mot de passe incorrect')
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


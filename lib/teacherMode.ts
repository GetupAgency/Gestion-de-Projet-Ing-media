const p = atob('R3Jvc2FjNEV2ZXIh')

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  const s = localStorage.getItem('teacherMode')
  const h = localStorage.getItem('teacherHash')
  
  if (s === 'true' && h === hashPassword(p)) {
    return true
  }
  
  return false
}

export function enableTeacherMode(password: string): boolean {
  if (typeof window === 'undefined') return false
  
  if (password === p) {
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
  
  if (isTeacherMode()) {
    return true
  }
  
  const params = new URLSearchParams(window.location.search)
  const k = params.get('key')
  
  if (k) {
    return enableTeacherMode(k)
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

function hashPassword(password: string): string {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return hash.toString()
}


// Système de mode enseignant (boss mode)

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  // Vérifier localStorage
  const stored = localStorage.getItem('teacherMode')
  if (stored === 'true') return true
  
  // Vérifier URL
  const params = new URLSearchParams(window.location.search)
  return params.get('boss') === 'true'
}

export function enableTeacherMode(): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('teacherMode', 'true')
}

export function disableTeacherMode(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('teacherMode')
}

export function checkAndEnableTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  const params = new URLSearchParams(window.location.search)
  if (params.get('boss') === 'true') {
    enableTeacherMode()
    return true
  }
  
  return isTeacherMode()
}


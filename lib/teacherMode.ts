/**
 * Mode enseignant, côté navigateur.
 * L'autorisation réelle vit dans un cookie httpOnly posé par /api/teacher/login ;
 * ici on ne lit qu'un drapeau d'affichage (cookie `teacher_ui`).
 */

const UI_COOKIE = 'teacher_ui'

function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.split('; ').find((c) => c.startsWith(`${name}=`))
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null
}

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  return readCookie(UI_COOKIE) === '1'
}

export async function enableTeacherMode(password: string): Promise<boolean> {
  if (typeof window === 'undefined') return false
  try {
    const res = await fetch('/api/teacher/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (!res.ok) return false
    // Nettoyage de l'ancien mécanisme localStorage
    localStorage.removeItem('teacherMode')
    localStorage.removeItem('teacherHash')
    return true
  } catch (error) {
    console.error('Erreur vérification enseignant :', error)
    return false
  }
}

export async function disableTeacherMode(): Promise<void> {
  if (typeof window === 'undefined') return
  try {
    await fetch('/api/teacher/logout', { method: 'POST' })
  } catch {
    /* le cookie UI est effacé ci-dessous quoi qu'il arrive */
  }
  document.cookie = `${UI_COOKIE}=; Max-Age=0; path=/`
  localStorage.removeItem('teacherMode')
  localStorage.removeItem('teacherHash')
}

/** Active le mode enseignant si l'URL porte ?key=<mot de passe>. */
export async function checkAndEnableTeacherMode(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  if (isTeacherMode()) return true
  const params = new URLSearchParams(window.location.search)
  const k = params.get('key')
  if (k) return enableTeacherMode(k)
  return false
}

export async function promptTeacherPassword(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  const password = window.prompt('Mot de passe enseignant :')
  if (!password) return false
  const success = await enableTeacherMode(password)
  if (success) {
    window.location.reload()
    return true
  }
  alert('Bien essayé bande de loutres 🦦')
  return false
}

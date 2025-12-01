import { supabase } from './supabase'

export function isTeacherMode(): boolean {
  if (typeof window === 'undefined') return false
  
  const s = localStorage.getItem('teacherMode')
  const h = localStorage.getItem('teacherHash')
  
  if (s === 'true' && h) {
    return true
  }
  
  return false
}

export async function enableTeacherMode(password: string): Promise<boolean> {
  if (typeof window === 'undefined') return false
  
  const hash = hashPassword(password)
  
  try {
    if (supabase) {
      const { data } = await supabase
        .from('teacher_config')
        .select('password_hash')
        .single()
      
      if (data && data.password_hash === hash) {
        localStorage.setItem('teacherMode', 'true')
        localStorage.setItem('teacherHash', hash)
        return true
      }
    }
  } catch (error) {
    console.error('Erreur vérification:', error)
  }
  
  return false
}

export function disableTeacherMode(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('teacherMode')
  localStorage.removeItem('teacherHash')
}

export async function checkAndEnableTeacherMode(): Promise<boolean> {
  if (typeof window === 'undefined') return false
  
  if (isTeacherMode()) {
    return true
  }
  
  const params = new URLSearchParams(window.location.search)
  const k = params.get('key')
  
  if (k) {
    return await enableTeacherMode(k)
  }
  
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


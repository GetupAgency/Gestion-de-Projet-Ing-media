'use client'

import { useEffect, useState, ReactNode } from 'react'
import { Eye, Lock } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'

interface TeacherOnlyProps {
  children: ReactNode
  /**
   * Bandeau d'invitation affiché aux étudiants pour signaler la présence
   * d'un contenu enseignant (sans rien révéler du fond).
   */
  preview?: string
}

export default function TeacherOnly({ children, preview }: TeacherOnlyProps) {
  const [mounted, setMounted] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  if (!mounted) return null

  if (!isTeacher) {
    if (!preview) return null
    return (
      <div className="sa-teacher-locked">
        <Lock className="w-4 h-4" />
        <span>{preview}</span>
      </div>
    )
  }

  return (
    <div className="sa-teacher-block">
      <div className="sa-teacher-ribbon">
        <Eye className="w-3.5 h-3.5" />
        <span>Mode enseignant</span>
      </div>
      {children}
    </div>
  )
}

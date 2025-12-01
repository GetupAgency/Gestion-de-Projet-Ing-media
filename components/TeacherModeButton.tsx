'use client'

import { useState, useEffect } from 'react'
import { Key } from 'lucide-react'
import { isTeacherMode, promptTeacherPassword } from '@/lib/teacherMode'

export default function TeacherModeButton() {
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setIsTeacher(isTeacherMode())
  }, [])

  if (isTeacher) return null

  return (
    <button
      onClick={() => {
        if (promptTeacherPassword()) {
          setIsTeacher(true)
        }
      }}
      className="fixed bottom-4 left-4 z-[35] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:scale-105"
      title="Mode enseignant"
    >
      <Key className="w-4 h-4" />
      <span className="text-sm font-semibold">Enseignant</span>
    </button>
  )
}


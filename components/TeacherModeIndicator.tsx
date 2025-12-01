'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { isTeacherMode, disableTeacherMode } from '@/lib/teacherMode'

export default function TeacherModeIndicator() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  if (!mounted || !isTeacher) return null

  return (
    <div className="fixed bottom-16 left-4 z-[35]">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <Eye className="w-4 h-4" />
        <span className="text-sm font-semibold">Mode Enseignant</span>
        <button
          onClick={() => {
            disableTeacherMode()
            setIsTeacher(false)
            window.location.reload()
          }}
          className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
          title="Désactiver le mode enseignant"
        >
          <EyeOff className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}


'use client'

import { useEffect, useState } from 'react'
import { KeyRound, LogOut } from 'lucide-react'
import { isTeacherMode, promptTeacherPassword, disableTeacherMode, checkAndEnableTeacherMode } from '@/lib/teacherMode'

/** Commutateur du mode enseignant : coin bas-gauche, discret, jamais un dégradé. */
export default function TeacherSwitch() {
  const [mounted, setMounted] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
    checkAndEnableTeacherMode().then((ok) => {
      if (ok && !isTeacherMode()) window.location.reload()
      else if (ok) setIsTeacher(true)
    })
  }, [])

  if (!mounted) return null

  if (isTeacher) {
    return (
      <div className="fixed bottom-4 left-4 z-40 flex items-stretch border border-copy-pink-ink bg-copy-pink text-copy-pink-ink">
        <span className="label flex items-center gap-2 px-3 text-copy-pink-ink">
          <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
          Mode enseignant
        </span>
        <button
          type="button"
          onClick={async () => {
            await disableTeacherMode()
            setIsTeacher(false)
            window.location.reload()
          }}
          className="flex min-h-[2.5rem] items-center gap-1.5 border-l border-copy-pink-ink px-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] hover:bg-copy-pink-ink hover:text-copy-pink"
          aria-label="Désactiver le mode enseignant"
        >
          <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
          Quitter
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={async () => {
        if (await promptTeacherPassword()) setIsTeacher(true)
      }}
      className="btn btn--sm fixed bottom-4 left-4 z-40 bg-paper"
      aria-label="Activer le mode enseignant"
    >
      <KeyRound className="h-3.5 w-3.5" aria-hidden="true" />
      Enseignant
    </button>
  )
}

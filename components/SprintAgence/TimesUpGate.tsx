'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import TimesUpGame from './TimesUpGame'

/**
 * Gate côté client : montre Time's Up uniquement en mode enseignant.
 * Les étudiants tombant sur l'URL voient un message d'attente.
 */
export default function TimesUpGate() {
  const [mounted, setMounted] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  if (!mounted) return null

  if (!isTeacher) {
    return (
      <div className="sa-brain-gate">
        <div className="sa-brain-gate-icon">
          <Lock className="w-7 h-7" />
        </div>
        <h2>Pause détente, pilotée par votre enseignant</h2>
        <p>
          Time's Up démarre quand votre enseignant lance la partie. En attendant, profitez du temps pour respirer un peu.
        </p>
        <Link href="/sprint-agence" className="sa-cta-secondary">
          <ArrowLeft className="w-4 h-4" />
          Retour au sommaire
        </Link>
      </div>
    )
  }

  return <TimesUpGame />
}

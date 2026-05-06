'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import BrainstormBoard from './BrainstormBoard'

/**
 * Garde-fou côté client autour du board de brainstorming.
 * En mode étudiant : message d'attente, pas d'accès à la liste de mots-clés.
 * En mode enseignant : board complet pour piloter l'activité au tableau.
 *
 * Note : la vérification est côté client uniquement. Suffisant ici, l'enjeu
 * étant pédagogique (effet de surprise) et non sécuritaire.
 */
export default function BrainstormGate() {
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
        <h2>Atelier piloté par votre enseignant</h2>
        <p>
          Le brainstorming d'ouverture se déroule en plénière, au tableau. Concentrez-vous sur les idées qui vous viennent : c'est votre enseignant qui les capture pour la classe.
        </p>
        <Link href="/sprint-agence" className="sa-cta-secondary">
          <ArrowLeft className="w-4 h-4" />
          Retour au sommaire
        </Link>
      </div>
    )
  }

  return <BrainstormBoard />
}

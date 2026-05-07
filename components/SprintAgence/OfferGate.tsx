'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import OfferDocument from './OfferDocument'

export default function OfferGate() {
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
        <h2>Modèle de référence réservé à l'enseignant</h2>
        <p>
          Cette offre commerciale est un corrigé que votre enseignant projettera en débrief, après que vous ayez produit la vôtre.
        </p>
        <Link href="/sprint-agence" className="sa-cta-secondary">
          <ArrowLeft className="w-4 h-4" />
          Retour au sommaire
        </Link>
      </div>
    )
  }

  return <OfferDocument />
}

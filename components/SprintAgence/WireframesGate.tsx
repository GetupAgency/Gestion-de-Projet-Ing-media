'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Lock } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import WireframesGallery from './WireframesGallery'

export default function WireframesGate() {
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
        <h2>Wireframes de référence réservés à l'enseignant</h2>
        <p>
          Ces wireframes servent de corrigé en débrief. Vous, vous produisez les vôtres pendant l'atelier.
        </p>
        <Link href="/sprint-agence" className="sa-cta-secondary">
          <ArrowLeft className="w-4 h-4" />
          Retour au sommaire
        </Link>
      </div>
    )
  }

  return <WireframesGallery />
}

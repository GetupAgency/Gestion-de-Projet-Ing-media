import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SprintStep } from '@/data/sprintAgence'

interface StepNavProps {
  current: SprintStep
  prev?: SprintStep
  next?: SprintStep
}

export default function StepNav({ current, prev, next }: StepNavProps) {
  return (
    <nav className="sa-stepnav" aria-label="Navigation du sprint">
      <div className="sa-stepnav-side">
        {prev ? (
          <Link href={`/sprint-agence/${prev.slug}`} className="sa-stepnav-link">
            <ArrowLeft className="w-4 h-4" />
            <div className="sa-stepnav-meta">
              <span className="sa-stepnav-eyebrow">Précédent</span>
              <span className="sa-stepnav-title">{prev.title}</span>
            </div>
          </Link>
        ) : (
          <Link href="/sprint-agence" className="sa-stepnav-link">
            <ArrowLeft className="w-4 h-4" />
            <div className="sa-stepnav-meta">
              <span className="sa-stepnav-eyebrow">Sommaire</span>
              <span className="sa-stepnav-title">Vue d'ensemble de la journée</span>
            </div>
          </Link>
        )}
      </div>

      <div className="sa-stepnav-center">
        <span className="sa-stepnav-eyebrow">{current.eyebrow}</span>
        <span className="sa-stepnav-now">Étape {current.order} sur 6</span>
      </div>

      <div className="sa-stepnav-side sa-stepnav-side-end">
        {next ? (
          <Link href={`/sprint-agence/${next.slug}`} className="sa-stepnav-link sa-stepnav-link-end">
            <div className="sa-stepnav-meta">
              <span className="sa-stepnav-eyebrow">Suivant</span>
              <span className="sa-stepnav-title">{next.title}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link href="/sprint-agence" className="sa-stepnav-link sa-stepnav-link-end">
            <div className="sa-stepnav-meta">
              <span className="sa-stepnav-eyebrow">Retour</span>
              <span className="sa-stepnav-title">Vue d'ensemble</span>
            </div>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </nav>
  )
}

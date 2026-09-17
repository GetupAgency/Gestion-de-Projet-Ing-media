import Link from 'next/link'
import { ArrowLeft, Clock, Users2 } from 'lucide-react'
import { SprintStep } from '@/data/sprintAgence'

interface StepHeaderProps {
  step: SprintStep
}

const formatLabel: Record<SprintStep['format'], string> = {
  plénière: 'Plénière',
  équipes: 'En équipe',
  pause: 'Pause',
}

export default function StepHeader({ step }: StepHeaderProps) {
  return (
    <header className="sa-step-header">
      <div className="sa-step-header-inner">
        <Link href="/sprint-agence" className="sa-back-link">
          <ArrowLeft className="w-4 h-4" />
          Sommaire de la journée
        </Link>

        <div className="sa-step-eyebrow">{step.eyebrow}</div>
        <h1 className="sa-step-title">{step.title}</h1>
        <p className="sa-step-pitch">{step.pitch}</p>

        <div className="sa-step-meta">
          <span className="sa-step-meta-item">
            <Clock className="w-4 h-4" /> {step.schedule} · {step.duration}
          </span>
          <span className="sa-step-meta-item">
            <Users2 className="w-4 h-4" /> {formatLabel[step.format]}
          </span>
        </div>

        <div className="sa-step-intent">
          <span className="sa-step-intent-label">Intention pédagogique</span>
          <p>{step.intent}</p>
        </div>
      </div>
    </header>
  )
}

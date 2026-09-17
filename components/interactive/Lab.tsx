import type { ReactNode } from 'react'

interface LabProps {
  title: string
  kicker?: string
  duration?: string
  children: ReactNode
  foot?: ReactNode
}

/** Cadre commun des ateliers interactifs : un poste de travail réglé, pas une carte. */
export default function Lab({ title, kicker = 'Atelier', duration, children, foot }: LabProps) {
  return (
    <section className="lab" aria-label={title}>
      <div className="lab__head">
        <div>
          <h3 className="lab__title">{title}</h3>
          <p className="mt-1 text-xs text-ink-3">
            {kicker}
            {duration && <span className="num"> · ≈ {duration}</span>}
          </p>
        </div>
      </div>
      <div className="lab__body">{children}</div>
      {foot && <div className="lab__foot">{foot}</div>}
    </section>
  )
}

export function Verdict({ tone = 'ink', children }: { tone?: 'ink' | 'stamp' | 'red'; children: ReactNode }) {
  const color = tone === 'stamp' ? 'border-stamp text-stamp' : tone === 'red' ? 'border-red-ink text-red-ink' : 'border-ink'
  return <div className={`mt-4 border-l-0 border-t-2 ${color} pt-3 text-[0.97rem]`}>{children}</div>
}

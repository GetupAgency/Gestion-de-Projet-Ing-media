'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const BASE = { scope: 20, budget: 40, weeks: 16 }
const COST_PER_FEATURE = 2 // k€
const WEEKS_PER_FEATURE = 0.8

/** Triangle qualité-coût-délai : trois curseurs liés, aucune quatrième option. */
export default function QcdTriangle() {
  const [scope, setScope] = useState(BASE.scope)
  const [budget, setBudget] = useState(BASE.budget)
  const [weeks, setWeeks] = useState(BASE.weeks)

  // Capacité : ce que budget et délai permettent de livrer
  const capacity = Math.min(budget / COST_PER_FEATURE, weeks / WEEKS_PER_FEATURE)
  const gap = scope - capacity
  const quality = Math.max(0, Math.min(100, Math.round(100 - gap * 12)))

  let verdict: { tone: 'stamp' | 'ink' | 'red'; text: string }
  if (gap <= 0) verdict = { tone: 'stamp', text: 'Périmètre tenable : budget et délai couvrent les fonctionnalités demandées. Le triangle est équilibré.' }
  else if (gap <= 3) verdict = { tone: 'ink', text: `Il manque de quoi livrer ${Math.ceil(gap)} fonctionnalité${gap > 1 ? 's' : ''}. Ça se règle en réunion : retirer ${Math.ceil(gap)} feature, ou ajouter ${Math.ceil(gap * COST_PER_FEATURE)} k€, ou ${Math.ceil(gap * WEEKS_PER_FEATURE)} semaine(s).` }
  else verdict = { tone: 'red', text: `Le client demande la quatrième option. Avec ${budget} k€ et ${weeks} semaines, on livre ${Math.floor(capacity)} fonctionnalités, pas ${scope}. Ce qui cède sans qu'on le décide, c'est la qualité : ${quality} % de tests, de finitions, de sommeil.` }

  return (
    <Lab kicker="Simulateur" title="Le triangle qualité · coût · délai" duration="3 min">
      <p className="mb-5 text-sm text-ink-2">Point de départ : 20 fonctionnalités, 40 k€, 16 semaines. Bougez un côté : au moins un autre doit bouger, sinon c’est la qualité qui paie.</p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <label className="block">
          <span className="label">Périmètre</span>
          <span className="num mt-1 block text-2xl font-bold">{scope} <span className="text-sm text-ink-3">fonctionnalités</span></span>
          <input className="slider mt-3" type="range" min={8} max={32} value={scope} onChange={(e) => setScope(Number(e.target.value))} />
        </label>
        <label className="block">
          <span className="label">Budget</span>
          <span className="num mt-1 block text-2xl font-bold">{budget} <span className="text-sm text-ink-3">k€</span></span>
          <input className="slider mt-3" type="range" min={16} max={64} step={2} value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
        </label>
        <label className="block">
          <span className="label">Délai</span>
          <span className="num mt-1 block text-2xl font-bold">{weeks} <span className="text-sm text-ink-3">semaines</span></span>
          <input className="slider mt-3" type="range" min={6} max={26} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} />
        </label>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <span className="label">Qualité résultante</span>
          <span className={`num text-sm font-bold ${quality < 60 ? 'text-red-ink' : quality < 90 ? 'text-ink' : 'text-stamp'}`}>{quality} %</span>
        </div>
        <div className={`ruler mt-2 ${quality >= 90 ? 'ruler--stamp' : ''}`}>
          <div className="ruler__fill" style={{ width: `${quality}%`, background: quality < 60 ? 'var(--red)' : undefined }} />
        </div>
      </div>

      <Verdict tone={verdict.tone}>{verdict.text}</Verdict>
    </Lab>
  )
}

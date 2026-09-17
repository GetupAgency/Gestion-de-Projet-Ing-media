'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'
import { ArrowDown, ArrowUp } from 'lucide-react'

const correct = ['Cadrage et cahier des charges', 'Planification et budget', 'Conception (wireframes, maquettes)', 'Développement', 'Tests et recette', 'Mise en production', 'Suivi et bilan']
const scrambled = ['Développement', 'Suivi et bilan', 'Cadrage et cahier des charges', 'Mise en production', 'Conception (wireframes, maquettes)', 'Tests et recette', 'Planification et budget']

/** Remettre les sept phases dans l'ordre (flèches, clavier, aucune lib). */
export default function PhaseOrder() {
  const [order, setOrder] = useState(scrambled)
  const [checked, setChecked] = useState(false)
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= order.length) return
    setOrder((o) => {
      const n = [...o]
      ;[n[i], n[j]] = [n[j], n[i]]
      return n
    })
    setChecked(false)
  }
  const good = order.filter((p, i) => p === correct[i]).length

  return (
    <Lab kicker="Remise en ordre" title="Les 7 phases, dans le bon ordre" duration="2 min">
      <ol className="border-t-2 border-ink">
        {order.map((p, i) => {
          const ok = checked && p === correct[i]
          const bad = checked && !ok
          return (
            <li key={p} className={`flex items-center gap-3 border-b border-rule py-2 ${ok ? 'bg-stamp-soft' : bad ? 'bg-red-soft' : ''}`}>
              <span className="num w-8 text-xs text-ink-3">{String(i + 1).padStart(2, '0')}</span>
              <span className="flex-1 text-[0.95rem] font-semibold">{p}</span>
              <button type="button" className="btn btn--sm btn--ghost" aria-label={`Monter ${p}`} disabled={i === 0} onClick={() => move(i, -1)}>
                <ArrowUp className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" className="btn btn--sm btn--ghost" aria-label={`Descendre ${p}`} disabled={i === order.length - 1} onClick={() => move(i, 1)}>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ol>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" onClick={() => setChecked(true)}>Vérifier</button>
        <button type="button" className="btn" onClick={() => { setOrder(scrambled); setChecked(false) }}>Mélanger</button>
      </div>
      {checked && (
        <Verdict tone={good === 7 ? 'stamp' : 'ink'}>
          {good}/7 phases à la bonne place. {good < 7 && 'Inversion la plus fréquente : la recette vient avant la mise en production, jamais après. On ne fait pas tester au client un site déjà en ligne.'}
        </Verdict>
      )}
    </Lab>
  )
}

'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const tasks = [
  { id: 'maquettes', name: 'Maquettes des 5 pages', o: 3, m: 5, p: 10 },
  { id: 'paiement', name: 'Intégration paiement Stripe', o: 2, m: 4, p: 12 },
  { id: 'import', name: 'Import des 200 produits', o: 1, m: 3, p: 8 },
]

/** PERT : l'estimation spontanée est presque toujours l'optimiste. */
export default function PertCalculator() {
  const [values, setValues] = useState(() => Object.fromEntries(tasks.map((t) => [t.id, { o: t.o, m: t.m, p: t.p }])))
  const pert = (v: { o: number; m: number; p: number }) => (v.o + 4 * v.m + v.p) / 6
  const totalSpontane = tasks.reduce((n, t) => n + values[t.id].o, 0)
  const totalPert = tasks.reduce((n, t) => n + pert(values[t.id]), 0)
  const totalPess = tasks.reduce((n, t) => n + values[t.id].p, 0)

  const set = (id: string, key: 'o' | 'm' | 'p', val: number) => {
    setValues((v) => {
      const cur = { ...v[id], [key]: val }
      if (cur.m < cur.o) cur.m = cur.o
      if (cur.p < cur.m) cur.p = cur.m
      return { ...v, [id]: cur }
    })
  }

  return (
    <Lab kicker="Calculateur" title="PERT : trois chiffres valent mieux qu’un" duration="2 min">
      <p className="mb-4 text-sm text-ink-2">Pour chaque tâche, donnez une durée optimiste (O), probable (M) et pessimiste (P), en jours. La formule PERT : (O + 4M + P) / 6.</p>
      <table className="ledger text-sm">
        <thead>
          <tr>
            <th>Tâche</th>
            <th className="w-20 text-right">O</th>
            <th className="w-20 text-right">M</th>
            <th className="w-20 text-right">P</th>
            <th className="w-24 text-right">PERT</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td className="font-semibold">{t.name}</td>
              {(['o', 'm', 'p'] as const).map((k) => (
                <td key={k} className="text-right">
                  <input
                    type="number"
                    min={0.5}
                    max={60}
                    step={0.5}
                    value={values[t.id][k]}
                    aria-label={`${t.name}, durée ${k === 'o' ? 'optimiste' : k === 'm' ? 'probable' : 'pessimiste'}`}
                    onChange={(e) => set(t.id, k, Number(e.target.value))}
                    className="field w-16 px-1 py-1 text-right"
                  />
                </td>
              ))}
              <td className="num text-right font-bold">{pert(values[t.id]).toFixed(1)} j</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="pt-4 font-semibold">Total projet</td>
            <td className="num pt-4 text-right text-ink-3">{totalSpontane}</td>
            <td />
            <td className="num pt-4 text-right text-ink-3">{totalPess}</td>
            <td className="num pt-4 text-right text-xl font-bold text-stamp">{totalPert.toFixed(1)} j</td>
          </tr>
        </tfoot>
      </table>
      <Verdict tone="ink">
        L’estimation « au feeling » qu’on annonce au client est presque toujours la colonne O : {totalSpontane} jours. PERT dit {totalPert.toFixed(1)}. L’écart, {Math.round(((totalPert - totalSpontane) / totalSpontane) * 100)} %, c’est le retard que vous auriez annoncé au client le mois prochain.
      </Verdict>
    </Lab>
  )
}

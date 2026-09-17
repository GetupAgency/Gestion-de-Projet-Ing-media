'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Risk {
  id: string
  name: string
  p: 1 | 2 | 3
  i: 1 | 2 | 3
  why: string
}

const risks: Risk[] = [
  { id: 'dev', name: 'Le développeur clé démissionne', p: 2, i: 3, why: 'Probable sur 6 mois, et sans documentation le projet s’arrête : à mitiger (pair programming, doc) avant que ça arrive.' },
  { id: 'api', name: 'L’API du partenaire est livrée en retard', p: 3, i: 2, why: 'Les dépendances tierces sont presque toujours en retard : prévoir un bouchon (mock) pour continuer sans elle.' },
  { id: 'valid', name: 'Le client valide tard', p: 3, i: 2, why: 'Certain. On l’inscrit dans le planning et dans le contrat (« réputé validé après 5 jours ouvrés »).' },
  { id: 'scope', name: 'Scope creep', p: 3, i: 3, why: 'Le risque n°1 des projets web : probable et coûteux. Un processus de demande de changement chiffrée est obligatoire.' },
  { id: 'hebergeur', name: 'Panne de l’hébergeur', p: 1, i: 2, why: 'Rare chez un hébergeur sérieux, impact limité si des sauvegardes existent : on accepte et on surveille.' },
  { id: 'faille', name: 'Faille de sécurité', p: 1, i: 3, why: 'Peu probable si les bonnes pratiques sont suivies, mais catastrophique : on mitige (audit, mises à jour) sans y passer le budget.' },
  { id: 'budget', name: 'Le client coupe le budget', p: 2, i: 3, why: 'Ça arrive à mi-parcours plus souvent qu’on ne croit : une classification MoSCoW prête à l’avance transforme la crise en réunion.' },
  { id: 'maquettes', name: 'Les maquettes sont refusées', p: 2, i: 1, why: 'Fréquent mais peu grave si les wireframes ont été validés avant : c’est une itération, pas une crise.' },
]

const scale = ['Faible', 'Moyen', 'Fort']

/** Matrice probabilité × impact : placer huit risques, voir où concentrer l'énergie. */
export default function RiskMatrix() {
  const [placed, setPlaced] = useState<Record<string, { p: number; i: number }>>({})
  const [selected, setSelected] = useState<string | null>(risks[0].id)
  const [checked, setChecked] = useState(false)

  const remaining = risks.filter((r) => !placed[r.id])
  const place = (p: number, i: number) => {
    if (!selected) return
    setPlaced((pl) => ({ ...pl, [selected]: { p, i } }))
    const next = risks.find((r) => r.id !== selected && !placed[r.id])
    setSelected(next?.id ?? null)
    setChecked(false)
  }

  const score = risks.filter((r) => placed[r.id] && Math.abs(placed[r.id].p - r.p) <= 1 && Math.abs(placed[r.id].i - r.i) <= 1 && !(placed[r.id].p !== r.p && placed[r.id].i !== r.i)).length
  const done = remaining.length === 0

  return (
    <Lab kicker="Matrice des risques" title="Probabilité × impact : où mettre l’énergie ?" duration="4 min">
      <p className="mb-4 text-sm text-ink-2">Sélectionnez un risque, puis cliquez sur la case de la matrice où vous le placez. Il n’y a pas de réponse unique, mais il y a des placements indéfendables.</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[14rem_1fr]">
        <div>
          <p className="label mb-2">Risques à placer ({remaining.length})</p>
          <ul className="space-y-1">
            {risks.map((r) => (
              <li key={r.id}>
                <button
                  type="button"
                  disabled={Boolean(placed[r.id]) && !checked}
                  onClick={() => setSelected(r.id)}
                  aria-pressed={selected === r.id}
                  className={`chip w-full justify-start text-left ${placed[r.id] ? 'opacity-50 line-through' : ''}`}
                >
                  {r.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-[3rem_repeat(3,1fr)] gap-px border border-ink bg-ink">
            <div className="bg-paper-2 p-1 text-[0.6rem] leading-tight text-ink-3">
              <span className="block">Proba ↓</span>
              <span className="block">Impact →</span>
            </div>
            {scale.map((s) => (
              <div key={s} className="label bg-paper-2 p-2 text-center text-ink">
                {s}
              </div>
            ))}
            {[3, 2, 1].map((p) => (
              <div key={`row-${p}`} className="contents">
                <div className="label flex items-center justify-center bg-paper-2 p-1 text-center text-ink">{scale[p - 1]}</div>
                {[1, 2, 3].map((i) => {
                  const here = risks.filter((r) => placed[r.id]?.p === p && placed[r.id]?.i === i)
                  const hot = p * i >= 6
                  return (
                    <button
                      key={`${p}-${i}`}
                      type="button"
                      onClick={() => place(p, i)}
                      disabled={!selected}
                      className={`drop min-h-[4.5rem] bg-white text-left text-xs ${hot ? 'bg-red-soft' : p * i <= 2 ? 'bg-paper' : ''} ${selected ? 'hover:bg-stamp-soft' : ''}`}
                      aria-label={`Probabilité ${scale[p - 1]}, impact ${scale[i - 1]}`}
                    >
                      {here.map((r) => {
                        const ok = checked && Math.abs(r.p - p) + Math.abs(r.i - i) <= 1
                        const bad = checked && !ok
                        return (
                          <span key={r.id} className={`mb-1 block border px-1 py-0.5 ${bad ? 'border-red-ink text-red-ink' : ok ? 'border-stamp text-stamp' : 'border-ink'}`}>
                            {r.name}
                          </span>
                        )
                      })}
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-3">Zone rouge : à mitiger ou éviter. Zone claire : à accepter et surveiller.</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="btn btn--primary" disabled={!done} onClick={() => setChecked(true)}>
          Vérifier mes placements
        </button>
        <button type="button" className="btn" onClick={() => { setPlaced({}); setSelected(risks[0].id); setChecked(false) }}>
          Recommencer
        </button>
      </div>

      {checked && (
        <Verdict tone={score >= 6 ? 'stamp' : 'ink'}>
          <p className="mb-2 font-semibold">{score} placements défendables sur 8.</p>
          <ul className="space-y-1 text-sm">
            {risks.map((r) => (
              <li key={r.id}>
                <span className="font-semibold">{r.name}</span> : {r.why}
              </li>
            ))}
          </ul>
        </Verdict>
      )}
    </Lab>
  )
}

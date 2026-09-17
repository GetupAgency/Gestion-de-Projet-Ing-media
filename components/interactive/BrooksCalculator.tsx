'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

/** Loi de Brooks : les canaux de communication montent en n², la productivité chute avant de remonter. */
export default function BrooksCalculator() {
  const [n, setN] = useState(3)
  const [added, setAdded] = useState(false)
  const channels = (k: number) => (k * (k - 1)) / 2

  // Vélocité par sprint (points), équipe de départ n, renfort +2 au sprint 3
  const base = n * 8
  const sprints = [1, 2, 3, 4, 5, 6].map((s) => {
    if (!added || s < 3) return base
    const m = n + 2
    const overhead = 1 - Math.min(0.35, (channels(m) - channels(n)) * 0.02)
    if (s === 3) return Math.round(base * 0.8)
    if (s === 4) return Math.round(base * 0.95)
    return Math.round(m * 8 * overhead)
  })
  const maxV = Math.max(...sprints) * 1.1

  // Positions des nœuds sur un cercle (graphe des canaux)
  const nodesCount = added ? n + 2 : n
  const nodes = Array.from({ length: nodesCount }, (_, i) => {
    const a = (i / nodesCount) * Math.PI * 2 - Math.PI / 2
    return { x: 60 + 46 * Math.cos(a), y: 60 + 46 * Math.sin(a) }
  })

  return (
    <Lab kicker="Calculateur" title="La loi de Brooks : ajouter des gens à un projet en retard" duration="2 min">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[10rem_1fr]">
        <div>
          <label className="block">
            <span className="label">Taille de l’équipe</span>
            <span className="num mt-1 block text-3xl font-bold">{n}</span>
            <input className="slider mt-2" type="range" min={2} max={10} value={n} onChange={(e) => { setN(Number(e.target.value)); setAdded(false) }} />
          </label>
          <p className="num mt-3 text-sm">
            {channels(n)} canaux de communication
          </p>
          <button type="button" className="btn btn--sm btn--primary mt-4" aria-pressed={added} onClick={() => setAdded((a) => !a)}>
            {added ? 'Retirer le renfort' : '+2 personnes au sprint 3'}
          </button>
          {added && (
            <p className="num mt-2 text-sm text-red-ink">
              → {channels(n + 2)} canaux
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[8rem_1fr]">
          <svg viewBox="0 0 120 120" className="h-32 w-32" role="img" aria-label={`Graphe de ${nodesCount} personnes et ${channels(nodesCount)} canaux`}>
            {nodes.map((a, i) => nodes.slice(i + 1).map((b, j) => <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={i >= n || i + j + 1 >= n ? 'var(--red)' : 'var(--ink)'} strokeWidth="0.8" />))}
            {nodes.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="5" fill={i >= n ? 'var(--red)' : 'var(--ink)'} />
            ))}
          </svg>
          <div>
            <p className="label mb-2">Vélocité par sprint (points livrés)</p>
            <div className="flex h-28 items-end gap-1 border-b border-ink">
              {sprints.map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center justify-end">
                  <span className="num text-[0.65rem]">{v}</span>
                  <div className={`w-full ${added && i >= 2 ? 'bg-red-ink' : 'bg-ink'}`} style={{ height: `${(v / maxV) * 100}%` }} />
                  <span className="num mt-1 text-[0.6rem] text-ink-3">S{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Verdict tone={added ? 'red' : 'ink'}>
        {added
          ? `Sprint 3 : les nouveaux lisent le code et posent des questions, les anciens répondent au lieu de coder. Sprint 4 : on revient à peine au niveau d’avant. Le gain réel n’arrive qu’au sprint 5, avec ${channels(n + 2)} canaux à entretenir au lieu de ${channels(n)}. Ajouter des gens ne marche que si le travail est découpable et l’onboarding préparé.`
          : `Une équipe de ${n} entretient ${channels(n)} canaux. Chaque personne en plus ajoute ${n} canaux d’un coup. Cliquez sur le renfort pour voir ce que ça fait à la vélocité.`}
      </Verdict>
    </Lab>
  )
}

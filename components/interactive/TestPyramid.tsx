'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

/** Pyramide des tests : pourquoi beaucoup d'unitaires et peu de bout-en-bout. */
export default function TestPyramid() {
  const [e2e, setE2e] = useState(8)
  const [integ, setInteg] = useState(40)
  const unit = 200

  const duration = unit * 0.01 + integ * 0.75 + e2e * 75 // secondes
  const minutes = Math.round(duration / 60)
  const maintenance = Math.round(unit * 0.05 + integ * 0.5 + e2e * 4) // heures / mois
  const tiers = [
    { name: 'Bout-en-bout (E2E)', n: e2e, each: '75 s', note: 'un navigateur qui clique comme un humain' },
    { name: 'Intégration', n: integ, each: '0,75 s', note: 'plusieurs briques ensemble, sans navigateur' },
    { name: 'Unitaires', n: unit, each: '10 ms', note: 'une fonction, une règle, un cas' },
  ]
  const max = Math.max(unit, integ, e2e)

  return (
    <Lab kicker="Pyramide animée" title="Combien de tests, à quel étage ?" duration="2 min">
      <p className="mb-5 text-sm text-ink-2">Le socle est fixé à 200 tests unitaires. Ajoutez des tests de bout-en-bout et regardez le temps du pipeline s’allonger.</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <label className="block">
            <span className="label">Tests bout-en-bout</span>
            <span className="num mt-1 block text-2xl font-bold">{e2e}</span>
            <input className="slider mt-2" type="range" min={0} max={80} value={e2e} onChange={(e) => setE2e(Number(e.target.value))} />
          </label>
          <label className="block">
            <span className="label">Tests d’intégration</span>
            <span className="num mt-1 block text-2xl font-bold">{integ}</span>
            <input className="slider mt-2" type="range" min={0} max={200} value={integ} onChange={(e) => setInteg(Number(e.target.value))} />
          </label>
        </div>
        <div className="flex flex-col justify-end gap-1">
          {tiers.map((t) => (
            <div key={t.name} className="flex items-center gap-3">
              <div className="w-full">
                <div className="mx-auto border border-ink bg-white px-2 py-1 text-center text-xs" style={{ width: `${Math.max(18, (t.n / max) * 100)}%` }}>
                  <span className="font-semibold">{t.name}</span> <span className="num text-ink-3">×{t.n}</span>
                </div>
                <p className="mt-0.5 text-center text-[0.65rem] text-ink-3">
                  {t.each} chacun · {t.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-px border border-ink bg-ink">
        <div className="bg-white p-3">
          <p className="label">Durée du pipeline</p>
          <p className={`num mt-1 text-2xl font-bold ${minutes > 15 ? 'text-red-ink' : 'text-stamp'}`}>{minutes} min</p>
        </div>
        <div className="bg-white p-3">
          <p className="label">Maintenance des tests</p>
          <p className={`num mt-1 text-2xl font-bold ${maintenance > 60 ? 'text-red-ink' : ''}`}>{maintenance} h / mois</p>
        </div>
      </div>

      <Verdict tone={minutes > 15 ? 'red' : 'stamp'}>
        {minutes > 15
          ? 'Plus de 15 minutes par exécution : les développeurs arrêtent de lancer les tests avant de pousser leur code, et la pyramide ne protège plus rien. Les E2E sont précieux, mais chers : gardez-les pour les 5 à 10 parcours qui font gagner de l’argent (inscription, panier, paiement).'
          : 'Pipeline rapide : les tests tournent à chaque modification, les régressions sont attrapées dans la minute. C’est la forme d’une pyramide, pas d’un cornet de glace.'}
      </Verdict>
    </Lab>
  )
}

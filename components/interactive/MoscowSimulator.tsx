'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

type Prio = 'M' | 'S' | 'C' | 'W'
const labels: Record<Prio, string> = { M: 'Must', S: 'Should', C: 'Could', W: 'Won’t' }
const order: Prio[] = ['M', 'S', 'C', 'W']

const features = [
  { id: 'catalogue', name: 'Catalogue produits', days: 8, ideal: 'M' as Prio },
  { id: 'panier', name: 'Panier et tunnel de commande', days: 6, ideal: 'M' as Prio },
  { id: 'paiement', name: 'Paiement CB (Stripe)', days: 5, ideal: 'M' as Prio },
  { id: 'compte', name: 'Compte client et historique', days: 4, ideal: 'S' as Prio },
  { id: 'recherche', name: 'Recherche et filtres', days: 4, ideal: 'S' as Prio },
  { id: 'avis', name: 'Avis clients', days: 3, ideal: 'C' as Prio },
  { id: 'fidelite', name: 'Programme de fidélité', days: 4, ideal: 'C' as Prio },
  { id: 'blog', name: 'Blog', days: 3, ideal: 'C' as Prio },
  { id: 'multidevise', name: 'Multi-devises', days: 4, ideal: 'W' as Prio },
  { id: 'chat', name: 'Chat en direct', days: 3, ideal: 'W' as Prio },
  { id: 'app', name: 'Application mobile', days: 15, ideal: 'W' as Prio },
  { id: 'wishlist', name: 'Liste d’envies', days: 2, ideal: 'C' as Prio },
]

const TJM = 500
const FULL = features.reduce((n, f) => n + f.days, 0) * TJM

/** Simulateur MoSCoW : le budget est coupé, tout ne rentre plus, il faut renoncer explicitement. */
export default function MoscowSimulator() {
  const [cut, setCut] = useState(30)
  const [prio, setPrio] = useState<Record<string, Prio>>(() => Object.fromEntries(features.map((f) => [f.id, 'M'])))
  const [checked, setChecked] = useState(false)

  const budget = Math.round(FULL * (1 - cut / 100))
  const kept = features.filter((f) => prio[f.id] === 'M' || prio[f.id] === 'S')
  const cost = kept.reduce((n, f) => n + f.days * TJM, 0)
  const over = cost - budget
  const fmt = (n: number) => new Intl.NumberFormat('fr-FR').format(n)

  const cycle = (id: string) => {
    setChecked(false)
    setPrio((p) => ({ ...p, [id]: order[(order.indexOf(p[id]) + 1) % order.length] }))
  }

  const mistakes = features.filter((f) => (prio[f.id] === 'M' && f.ideal === 'W') || (prio[f.id] === 'W' && f.ideal === 'M'))

  return (
    <Lab kicker="Simulateur" title="Budget coupé : que gardez-vous ?" duration="4 min">
      <p className="mb-4 text-sm text-ink-2">
        Projet e-commerce complet chiffré à {fmt(FULL)} € HT. Le client coupe le budget. Cliquez sur une fonctionnalité pour changer sa priorité (Must → Should → Could → Won’t). Seuls Must et Should sont livrés.
      </p>
      <label className="block">
        <span className="label">Coupe budgétaire</span>
        <span className="num mt-1 block text-2xl font-bold">
          −{cut} % <span className="text-sm text-ink-3">→ budget {fmt(budget)} €</span>
        </span>
        <input className="slider mt-3" type="range" min={10} max={60} step={5} value={cut} onChange={(e) => { setCut(Number(e.target.value)); setChecked(false) }} />
      </label>

      <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f.id}>
            <button
              type="button"
              onClick={() => cycle(f.id)}
              className="flex w-full items-center justify-between gap-3 border border-ink bg-white px-3 py-2 text-left text-sm hover:bg-paper-2"
              aria-label={`${f.name}, priorité ${labels[prio[f.id]]}, cliquer pour changer`}
            >
              <span>
                <span className="font-semibold">{f.name}</span>
                <span className="num ml-2 text-xs text-ink-3">{f.days} j</span>
              </span>
              <span className={`num w-16 border px-1.5 py-0.5 text-center text-xs font-bold ${prio[f.id] === 'W' ? 'border-ink-3 text-ink-3 line-through' : prio[f.id] === 'M' ? 'border-stamp bg-stamp text-white' : 'border-ink'}`}>
                {labels[prio[f.id]]}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <div className="flex items-baseline justify-between text-sm">
          <span className="label">Coût des Must + Should</span>
          <span className={`num font-bold ${over > 0 ? 'text-red-ink' : 'text-stamp'}`}>
            {fmt(cost)} € / {fmt(budget)} €
          </span>
        </div>
        <div className="ruler mt-2">
          <div className="ruler__fill" style={{ width: `${Math.min(100, (cost / budget) * 100)}%`, background: over > 0 ? 'var(--red)' : 'var(--stamp)' }} />
        </div>
      </div>

      <button type="button" className="btn btn--primary mt-5" onClick={() => setChecked(true)}>
        Présenter le scénario au client
      </button>

      {checked && (
        <Verdict tone={over > 0 ? 'red' : mistakes.length ? 'ink' : 'stamp'}>
          {over > 0
            ? `Votre scénario dépasse le budget de ${fmt(over)} €. Le client entend « on ne coupe rien » : vous repartez faire le travail que vous avez refusé de faire, c’est-à-dire choisir.`
            : 'Le scénario tient dans le budget. '}
          {over <= 0 && mistakes.length > 0 && (
            <span>
              Mais {mistakes.map((m) => `« ${m.name} » en ${labels[prio[m.id]]}`).join(', ')} : {mistakes.some((m) => m.ideal === 'M') ? 'un e-commerce sans catalogue, panier ou paiement n’est pas un e-commerce.' : 'une app mobile ou un chat ne sont jamais indispensables à une V1.'}
            </span>
          )}
          {over <= 0 && mistakes.length === 0 && 'Priorités cohérentes : le cœur de la vente est protégé, le reste est reporté en lot 2, explicitement. C’est exactement ce qu’un client attend : pas un refus, un scénario.'}
        </Verdict>
      )}
    </Lab>
  )
}

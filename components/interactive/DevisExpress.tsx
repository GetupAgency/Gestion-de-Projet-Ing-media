'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'
import Stamp from '@/components/Stamp'

interface Role {
  id: string
  name: string
  tjm: number
  ref: number
  max: number
}

const briefs: { id: string; name: string; brief: string; roles: Role[]; conseil: string }[] = [
  {
    id: 'vitrine',
    name: 'Site vitrine · studio de tatouage',
    brief: '8 pages, galerie, prise de rendez-vous en ligne, WordPress. Client : un studio à Toulon.',
    roles: [
      { id: 'cp', name: 'Chef·fe de projet', tjm: 450, ref: 4, max: 15 },
      { id: 'design', name: 'UX / UI designer', tjm: 450, ref: 4, max: 15 },
      { id: 'dev', name: 'Intégrateur·rice WordPress', tjm: 400, ref: 6, max: 25 },
      { id: 'test', name: 'Tests et recette', tjm: 400, ref: 1.5, max: 8 },
    ],
    conseil: 'La ligne « gestion de projet » est celle que les juniors oublient : un CP suit le projet 1 à 2 jours par semaine, même sur un petit site.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce · 200 produits',
    brief: 'Boutique WooCommerce, 200 références à importer, paiement CB, livraison Colissimo, 4 mois.',
    roles: [
      { id: 'cp', name: 'Chef·fe de projet', tjm: 450, ref: 20, max: 40 },
      { id: 'design', name: 'UX / UI designer', tjm: 450, ref: 12, max: 30 },
      { id: 'dev', name: 'Développeur·se', tjm: 500, ref: 45, max: 80 },
      { id: 'integ', name: 'Intégration produits', tjm: 350, ref: 10, max: 25 },
    ],
    conseil: 'Sur un e-commerce, l’import et la mise en forme des 200 fiches produits est un poste à part entière. Personne ne le prévoit, tout le monde le paie.',
  },
  {
    id: 'saas',
    name: 'SaaS MVP · 3 mois',
    brief: 'Application métier B2B, authentification, tableau de bord, exports, 2 développeurs, 3 mois.',
    roles: [
      { id: 'cp', name: 'Chef·fe de projet', tjm: 400, ref: 40, max: 60 },
      { id: 'dev1', name: 'Dev senior', tjm: 500, ref: 41, max: 65 },
      { id: 'dev2', name: 'Dev', tjm: 450, ref: 40, max: 65 },
      { id: 'design', name: 'UX / UI designer', tjm: 450, ref: 20, max: 40 },
    ],
    conseil: 'Trois mois à temps plein, ce sont environ 60 jours ouvrés par personne. Un dev « à 40 jours » sur 3 mois, c’est déjà un dev partagé avec un autre projet.',
  },
]

const fmt = (n: number) => new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 }).format(n)

/** Devis express : des curseurs de jours par rôle, une marge, et la comparaison avec l'estimation d'un senior. */
export default function DevisExpress() {
  const [briefId, setBriefId] = useState(briefs[0].id)
  const brief = briefs.find((b) => b.id === briefId)!
  const [days, setDays] = useState<Record<string, number>>(() => Object.fromEntries(briefs.flatMap((b) => b.roles.map((r) => [`${b.id}:${r.id}`, Math.max(1, Math.round(r.ref * 0.6))]))))
  const [margin, setMargin] = useState(5)
  const [compared, setCompared] = useState(false)

  const lines = brief.roles.map((r) => ({ ...r, days: days[`${brief.id}:${r.id}`] ?? r.ref, amount: (days[`${brief.id}:${r.id}`] ?? r.ref) * r.tjm }))
  const subtotal = lines.reduce((n, l) => n + l.amount, 0)
  const reserve = Math.round((subtotal * margin) / 100)
  const total = subtotal + reserve
  const refSubtotal = brief.roles.reduce((n, r) => n + r.ref * r.tjm, 0)
  const refTotal = Math.round(refSubtotal * 1.12)
  const delta = Math.round(((total - refTotal) / refTotal) * 100)

  return (
    <Lab kicker="Devis express" title="Chiffrez le projet, puis comparez à un senior" duration="4 min">
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Brief">
        {briefs.map((b) => (
          <button key={b.id} role="tab" aria-selected={b.id === briefId} className="chip" aria-pressed={b.id === briefId} onClick={() => { setBriefId(b.id); setCompared(false) }}>
            {b.name}
          </button>
        ))}
      </div>
      <p className="mb-5 text-sm text-ink-2">{brief.brief}</p>

      <table className="ledger text-sm">
        <thead>
          <tr>
            <th>Poste</th>
            <th className="w-24 text-right">TJM</th>
            <th className="w-44">Jours</th>
            <th className="w-28 text-right">Montant HT</th>
            {compared && <th className="w-24 text-right">Senior</th>}
          </tr>
        </thead>
        <tbody>
          {lines.map((l) => (
            <tr key={l.id}>
              <td className="font-semibold">{l.name}</td>
              <td className="num text-right">{l.tjm} €</td>
              <td>
                <div className="flex items-center gap-2">
                  <input
                    className="slider"
                    type="range"
                    min={0.5}
                    max={l.max}
                    step={0.5}
                    value={l.days}
                    aria-label={`Jours ${l.name}`}
                    onChange={(e) => setDays((d) => ({ ...d, [`${brief.id}:${l.id}`]: Number(e.target.value) }))}
                  />
                  <span className="num w-10 text-right">{l.days}</span>
                </div>
              </td>
              <td className="num text-right">{fmt(l.amount)} €</td>
              {compared && (
                <td className={`num text-right ${Math.abs(l.days - l.ref) / l.ref > 0.3 ? 'text-red-ink' : 'text-stamp'}`}>{l.ref} j</td>
              )}
            </tr>
          ))}
          <tr>
            <td className="font-semibold">Réserve pour imprévus</td>
            <td />
            <td>
              <div className="flex items-center gap-2">
                <input className="slider" type="range" min={0} max={25} value={margin} aria-label="Réserve en pourcentage" onChange={(e) => setMargin(Number(e.target.value))} />
                <span className="num w-10 text-right">{margin} %</span>
              </div>
            </td>
            <td className="num text-right">{fmt(reserve)} €</td>
            {compared && <td className="num text-right text-stamp">10-15 %</td>}
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="pt-4">
              <span className="label">Total devis HT</span>
              {margin < 10 && (
                <span className="ml-3">
                  <Stamp tone="red" tilt={-4}>Réserve insuffisante</Stamp>
                </span>
              )}
            </td>
            <td className="num pt-4 text-right text-2xl font-bold">{fmt(total)} €</td>
            {compared && <td className="num pt-4 text-right text-lg font-bold text-stamp">{fmt(refTotal)} €</td>}
          </tr>
        </tfoot>
      </table>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn--primary" onClick={() => setCompared(true)}>
          Comparer à l’estimation d’un senior
        </button>
        {compared && (
          <span className="text-sm">
            Écart : <span className={`num font-bold ${Math.abs(delta) <= 15 ? 'text-stamp' : 'text-red-ink'}`}>{delta > 0 ? '+' : ''}{delta} %</span>
          </span>
        )}
      </div>

      {compared && (
        <Verdict tone={Math.abs(delta) <= 15 ? 'stamp' : 'red'}>
          {Math.abs(delta) <= 15 ? 'Dans la fourchette (± 15 %). Un devis n’est jamais exact, il est défendable.' : delta < 0 ? `Sous-estimé de ${Math.abs(delta)} %. C’est le devis qui gagne l’appel d’offres et perd de l’argent : chaque jour non prévu sera travaillé gratuitement.` : `Sur-estimé de ${delta} %. Défendable si vous savez expliquer chaque ligne ; sinon le client ira voir l’agence d’à côté.`}
          <br />
          <span className="text-ink-2">{brief.conseil}</span>
        </Verdict>
      )}
    </Lab>
  )
}

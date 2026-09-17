'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const rows = [
  { page: '/accueil', visits: 18400, mobile: 71, bounce: 62, load: 5.8 },
  { page: '/horaires-et-tarifs', visits: 12900, mobile: 78, bounce: 31, load: 6.1 },
  { page: '/inscription', visits: 9600, mobile: 80, bounce: 74, load: 7.4 },
  { page: '/actualites', visits: 2100, mobile: 55, bounce: 58, load: 4.2 },
  { page: '/galerie-photos', visits: 1800, mobile: 60, bounce: 40, load: 9.9 },
  { page: '/le-mot-du-president', visits: 210, mobile: 48, bounce: 88, load: 3.9 },
  { page: '/partenaires', visits: 160, mobile: 52, bounce: 90, load: 4.0 },
  { page: '/archives-2019', visits: 40, mobile: 45, bounce: 95, load: 4.5 },
]
const total = rows.reduce((n, r) => n + r.visits, 0)
const expected = ['/accueil', '/horaires-et-tarifs', '/inscription']

/** Niveau 2 · Un export Google Analytics d'un club de sport étudiant : choisir où mettre l'argent de la refonte. */
export default function DatasetAnalytics() {
  const [pick, setPick] = useState<string[]>([])
  const [mobile, setMobile] = useState<boolean | null>(null)
  const [done, setDone] = useState(false)
  const toggle = (p: string) => setPick((s) => (s.includes(p) ? s.filter((x) => x !== p) : s.length < 3 ? [...s, p] : s))
  const hits = pick.filter((p) => expected.includes(p)).length

  return (
    <Lab kicker="Niveau 2 · Artefact : un export Analytics" title="Le club de boxe qui veut « refaire tout le site »" duration="4 min">
      <p className="mb-3 text-sm text-ink-2">Le président veut refondre les 8 pages « parce que tout est vieux ». Budget : 4 000 €. Voici l’export GA4 des 90 derniers jours. Cochez les trois pages qui méritent le budget, puis répondez à la question mobile.</p>
      <div className="overflow-x-auto">
        <table className="ledger text-sm">
          <thead><tr><th></th><th>Page</th><th className="r">Visites</th><th className="r">Part</th><th className="r">Mobile</th><th className="r">Rebond</th><th className="r">Chargement</th></tr></thead>
          <tbody>
            {rows.map((r) => {
              const on = pick.includes(r.page)
              const good = done && expected.includes(r.page)
              return (
                <tr key={r.page} className={done ? (good ? 'bg-stamp-soft' : on ? 'bg-red-soft' : '') : on ? 'bg-copy-yellow/40' : ''}>
                  <td><input type="checkbox" className="check" checked={on} disabled={done || (!on && pick.length >= 3)} aria-label={`Prioriser ${r.page}`} onChange={() => toggle(r.page)} /></td>
                  <td className="num">{r.page}</td>
                  <td className="num r">{r.visits.toLocaleString('fr-FR')}</td>
                  <td className="num r">{Math.round((r.visits / total) * 100)} %</td>
                  <td className="num r">{r.mobile} %</td>
                  <td className={`num r ${r.bounce >= 70 ? 'text-red-ink' : ''}`}>{r.bounce} %</td>
                  <td className={`num r ${r.load >= 6 ? 'text-red-ink' : ''}`}>{r.load} s</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="label mt-5 mb-2">Approche de conception</p>
      <div className="flex gap-2">
        <button type="button" className="chip" aria-pressed={mobile === true} disabled={done} onClick={() => setMobile(true)}>Mobile-first</button>
        <button type="button" className="chip" aria-pressed={mobile === false} disabled={done} onClick={() => setMobile(false)}>Desktop-first, adapté mobile ensuite</button>
      </div>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={pick.length < 3 || mobile === null || done} onClick={() => setDone(true)}>Présenter au président</button>
        <button type="button" className="btn" onClick={() => { setPick([]); setMobile(null); setDone(false) }}>Recommencer</button>
      </div>
      {done && (
        <Verdict tone={hits === 3 && mobile ? 'stamp' : 'ink'}>
          {hits}/3 pages bien ciblées{mobile ? ', mobile-first justifié' : ', mais 71 à 80 % de mobile sur les pages clés : la conception commence sur téléphone'}. Trois pages font 90 % du trafic ; « inscription » perd 74 % de ses visiteurs sur mobile avec 7,4 s de chargement. Refaire « le mot du président » et les archives 2019, c’est dépenser pour 250 visites. Le président entendra « on ne refait pas tout », il faut donc lui montrer ces chiffres, pas les lui dire.
        </Verdict>
      )}
    </Lab>
  )
}

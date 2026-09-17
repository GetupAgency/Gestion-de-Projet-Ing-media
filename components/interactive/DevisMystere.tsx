'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const quote = [
  { id: 'q1', line: 'Design de l’application (12 écrans)', amount: '3 200 €' },
  { id: 'q2', line: 'Développement iOS + Android (React Native)', amount: '9 800 €' },
  { id: 'q3', line: 'Lecteur audio et intégration API Spotify', amount: '2 400 €' },
  { id: 'q4', line: 'Backend, comptes utilisateurs, base de données', amount: '3 600 €' },
  { id: 'q5', line: 'Publication sur l’App Store et Google Play', amount: '600 €' },
  { id: 'q6', line: 'Total', amount: '19 600 € HT' },
]
const missing: { id: string; text: string; real: boolean; why: string }[] = [
  { id: 'm1', text: 'Gestion de projet, réunions, comptes rendus', real: true, why: 'Jamais moins de 10 à 15 % d’un projet. Absente, elle sera faite gratuitement ou pas du tout.' },
  { id: 'm2', text: 'Tests, recette, corrections', real: true, why: 'Une app mobile sans phase de tests sur vrais appareils sort cassée. C’est un poste, pas une intention.' },
  { id: 'm3', text: 'Hébergement et coûts récurrents (serveur, comptes développeur Apple 99 $/an et Google 25 $)', real: true, why: 'Le devis vend une app sans dire ce qu’elle coûte chaque mois pour exister.' },
  { id: 'm4', text: 'Maintenance et mises à jour des stores (iOS et Android changent chaque année)', real: true, why: 'Une app non maintenue est retirée des stores en un à deux ans.' },
  { id: 'm5', text: 'Conditions de l’API Spotify (quota, mode développement limité à 25 utilisateurs, validation par Spotify)', real: true, why: 'Le devis « intègre Spotify » sans dire que l’accès étendu doit être demandé et peut être refusé : le risque n°1 du projet n’est pas chiffré.' },
  { id: 'm6', text: 'Un module de chat entre membres', real: false, why: 'Ce n’est pas un oubli : ce n’est pas dans le besoin. Piège.' },
  { id: 'm7', text: 'Une version montre connectée', real: false, why: 'Piège aussi : on cherche ce qui manque au périmètre demandé, pas ce qu’on pourrait ajouter.' },
  { id: 'm8', text: 'Le calendrier de paiement et les conditions de validation', real: true, why: 'Sans échéancier ni jalons de validation, l’asso ne sait ni quand elle paie, ni ce qu’elle valide.' },
]

/** Niveau 2 · Le devis du concurrent pour l'app playlist du BDE : trouver ce qui manque. */
export default function DevisMystere() {
  const [sel, setSel] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  const found = sel.filter((id) => missing.find((m) => m.id === id)!.real).length
  const traps = sel.filter((id) => !missing.find((m) => m.id === id)!.real).length
  const realCount = missing.filter((m) => m.real).length

  return (
    <Lab kicker="Niveau 2 · Artefact : un devis" title="Le devis à 19 600 € pour « l’app playlist du BDE »" duration="4 min">
      <p className="mb-3 text-sm text-ink-2">Le BDE a reçu ce devis d’une agence pour une app qui partage les playlists des soirées, avec connexion Spotify. Le trésorier vous demande : « ça vous paraît complet ? » Cochez ce qui manque.</p>
      <table className="ledger text-sm">
        <thead><tr><th>Devis reçu · Agence Pixel&amp;Co</th><th className="r">Montant</th></tr></thead>
        <tbody>{quote.map((q) => <tr key={q.id} className={q.id === 'q6' ? 'sub' : ''}><td>{q.line}</td><td className="num r">{q.amount}</td></tr>)}</tbody>
      </table>
      <p className="label mt-5 mb-2">Ce qui manque, selon vous</p>
      <ul className="grid grid-cols-1 gap-1 md:grid-cols-2">
        {missing.map((m) => {
          const on = sel.includes(m.id)
          return (
            <li key={m.id}>
              <button type="button" className={`chip w-full justify-start text-left ${done ? (m.real && on ? 'chip--stamp is-on' : !m.real && on ? '!border-red-ink !bg-red-soft !text-red-ink' : m.real && !on ? '!border-dashed' : '') : ''}`} aria-pressed={on} disabled={done} onClick={() => toggle(m.id)}>{m.text}</button>
              {done && <p className="mb-2 px-2 pt-1 text-sm text-ink-2">{m.why}</p>}
            </li>
          )
        })}
      </ul>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={sel.length === 0 || done} onClick={() => setDone(true)}>Répondre au trésorier</button>
        <button type="button" className="btn" onClick={() => { setSel([]); setDone(false) }}>Recommencer</button>
      </div>
      {done && <Verdict tone={found === realCount && traps === 0 ? 'stamp' : 'ink'}>{found}/{realCount} manques trouvés{traps ? `, ${traps} fausse${traps > 1 ? 's' : ''} piste${traps > 1 ? 's' : ''}` : ''}. Un devis se lit par ce qu’il ne dit pas : gestion de projet, tests, récurrent, maintenance, risques externes, paiement. Réponse au trésorier : « incomplet, comptez plutôt 26 à 28 k€ sur deux ans, et posez la question Spotify avant de signer ».</Verdict>}
    </Lab>
  )
}

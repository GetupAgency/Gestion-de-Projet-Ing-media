'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const people = ['Inès (CP)', 'Yanis (dev)', 'Chloé (design)', 'Client (Maxime)']
const dates = ['Ce vendredi', 'Lundi prochain', 'Fin du sprint (J+14)', 'Avant la recette']

const actions: { id: string; text: string; who: string; when: string; why: string }[] = [
  { id: 'a1', text: 'Maquette de la page « Programme » à refaire avec le nouveau logo', who: 'Chloé (design)', when: 'Ce vendredi', why: 'Tâche design, bloquante pour l’intégration de lundi : vendredi au plus tard.' },
  { id: 'a2', text: 'Envoyer les textes définitifs des 12 fiches artistes', who: 'Client (Maxime)', when: 'Lundi prochain', why: 'Les contenus sont au client. Sans date, ils arrivent la veille de la recette.' },
  { id: 'a3', text: 'Brancher la billetterie sur l’API du prestataire de paiement', who: 'Yanis (dev)', when: 'Fin du sprint (J+14)', why: 'Développement de fond, planifié dans le sprint en cours.' },
  { id: 'a4', text: 'Chiffrer la demande « playlist Spotify intégrée » et la présenter au client', who: 'Inès (CP)', when: 'Ce vendredi', why: 'Une demande hors périmètre se chiffre vite, avant que le client la considère acquise.' },
  { id: 'a5', text: 'Rédiger le cahier de recette', who: 'Inès (CP)', when: 'Avant la recette', why: 'Livrable du CP, à remettre en amont de la phase de recette (CCTP-style).' },
  { id: 'a6', text: 'Valider le choix du bleu du header (deux variantes envoyées)', who: 'Client (Maxime)', when: 'Ce vendredi', why: 'Une validation client sans date bloque tout. On la date, et on écrit « réputée validée passé ce délai ».' },
]

/** Niveau 2 · Le compte rendu de réunion sans propriétaire ni date : qui fait quoi, pour quand. */
export default function CompteRendu() {
  const [who, setWho] = useState<Record<string, string>>({})
  const [when, setWhen] = useState<Record<string, string>>({})
  const [done, setDone] = useState(false)
  const complete = actions.every((x) => who[x.id] && when[x.id])
  const score = actions.reduce((n, x) => n + (who[x.id] === x.who ? 1 : 0) + (when[x.id] === x.when ? 1 : 0), 0)

  return (
    <Lab kicker="Niveau 2 · Artefact : un compte rendu" title="Le compte rendu qui ne dit ni qui, ni quand" duration="5 min">
      <div className="border border-ink bg-paper-2 px-4 py-3 text-sm">
        <p className="label mb-1">Compte rendu · Réunion d’avancement · Festival étudiant « Nuit Sonore Campus » · mardi 10 h</p>
        <p>Présents : Inès (cheffe de projet), Yanis (développeur), Chloé (designer), Maxime (client, président de l’asso). Points abordés : refonte du logo livrée, retard sur les textes des artistes, question de la billetterie, demande d’une playlist Spotify sur la page d’accueil, couleur du header. <b>Actions :</b> voir ci-dessous. <i>Aucun responsable ni date n’a été noté.</i></p>
      </div>
      <p className="mt-4 text-sm text-ink-2">Attribuez à chaque action un responsable et une échéance. Règle : une action sans nom et sans date n’existe pas.</p>
      <ol className="mt-3 border-t-2 border-ink">
        {actions.map((x) => {
          const okW = done && who[x.id] === x.who, okD = done && when[x.id] === x.when
          return (
            <li key={x.id} className="border-b border-rule py-3">
              <p className="text-[0.95rem] font-semibold">{x.text}</p>
              <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-2">
                <select className={`field !min-h-[2.2rem] !py-1 text-sm ${done ? (okW ? '!border-stamp' : '!border-red-ink') : ''}`} value={who[x.id] ?? ''} disabled={done} aria-label="Responsable" onChange={(e) => setWho((s) => ({ ...s, [x.id]: e.target.value }))}>
                  <option value="">Qui ?</option>
                  {people.map((p) => <option key={p}>{p}</option>)}
                </select>
                <select className={`field !min-h-[2.2rem] !py-1 text-sm ${done ? (okD ? '!border-stamp' : '!border-red-ink') : ''}`} value={when[x.id] ?? ''} disabled={done} aria-label="Échéance" onChange={(e) => setWhen((s) => ({ ...s, [x.id]: e.target.value }))}>
                  <option value="">Pour quand ?</option>
                  {dates.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              {done && <p className="mt-2 text-sm text-ink-2"><b className="text-ink">{x.who} · {x.when}.</b> {x.why}</p>}
            </li>
          )
        })}
      </ol>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={!complete || done} onClick={() => setDone(true)}>Vérifier</button>
        <button type="button" className="btn" onClick={() => { setWho({}); setWhen({}); setDone(false) }}>Recommencer</button>
      </div>
      {done && <Verdict tone={score >= 10 ? 'stamp' : 'ink'}>{score}/12. Le compte rendu se lit en trois colonnes : action, responsable, date. Tout le reste est du contexte. Celui-ci est envoyé dans les 24 h, sinon chacun garde sa version de la réunion.</Verdict>}
    </Lab>
  )
}

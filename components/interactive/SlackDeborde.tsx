'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const thread = [
  { who: 'Léo · dev', t: '09:02', text: 'le module de paiement Stripe renvoie une erreur 400 depuis ce matin, je regarde' },
  { who: 'Maëlle · design', t: '09:05', text: 'au fait le client a envoyé un message insta hier soir, il veut changer toutes les icônes 🙃' },
  { who: 'Client · Thibault', t: '09:11', text: 'Bonjour ! Petite question, on est toujours bons pour la démo de jeudi ? Le CA de l’asso sera là' },
  { who: 'Léo · dev', t: '09:20', text: 'c’est la clé API de test qui a expiré, mais y a aussi un truc bizarre : les commandes de la nuit sont en double en base' },
  { who: 'Maëlle · design', t: '09:22', text: 'je fais quoi pour les icônes ? j’ai 2 jours dessus si on dit oui' },
  { who: 'Client · Thibault', t: '09:30', text: '@Léo tu peux m’appeler ? le président a vu une erreur sur la page paiement' },
  { who: 'Léo · dev', t: '09:31', text: 'je peux pas maintenant je suis sur le bug' },
  { who: 'Stagiaire · Nour', t: '09:40', text: 'je peux aider sur quelque chose ?' },
]

const actions: { id: string; text: string; rank: number; why: string }[] = [
  { id: 'x1', text: 'Répondre à Thibault dans les 15 min : « on a un incident paiement, je vous rappelle à 11 h avec l’état ; la démo de jeudi est maintenue sauf avis contraire à 11 h »', rank: 1, why: 'Le client ne doit jamais découvrir l’incident par un autre canal, et le CP est le seul canal. On rassure par un rendez-vous daté, pas par des mots.' },
  { id: 'x2', text: 'Demander à Léo de traiter les commandes en double avant la clé API, et de ne parler à personne d’autre', rank: 2, why: 'Des commandes dupliquées, c’est de l’argent client : plus grave qu’une clé de test expirée. Et on protège le dev des sollicitations.' },
  { id: 'x3', text: 'Mettre Nour sur la vérification des commandes de la nuit dans Stripe (liste, montants, doublons)', rank: 3, why: 'Un stagiaire disponible + une tâche isolée et utile : on découpe, on ne laisse pas Léo tout porter.' },
  { id: 'x4', text: 'Dire à Maëlle : les icônes, on ne fait rien avant chiffrage ; je réponds au client sur ce point vendredi', rank: 4, why: 'Demande hors périmètre reçue en DM Instagram : on la canalise, on la chiffre, on ne la lance pas.' },
  { id: 'x5', text: 'Appeler le président de l’asso pour lui expliquer techniquement la clé API', rank: 9, why: 'Piège : le président n’a pas besoin de technique, et ce n’est pas au CP de court-circuiter Thibault, l’interlocuteur désigné.' },
  { id: 'x6', text: 'Demander à Maëlle de commencer les nouvelles icônes puisqu’elle a le temps', rank: 9, why: 'Piège : deux jours de travail non chiffrés, non validés, sur une demande arrivée par Instagram.' },
]

/** Niveau 3 · Un fil Slack un lundi matin : choisir et ordonner les trois premières actions du chef de projet. */
export default function SlackDeborde() {
  const [order, setOrder] = useState<string[]>([])
  const [done, setDone] = useState(false)
  const pickable = actions.filter((a) => !order.includes(a.id))
  const good = ['x1', 'x2', 'x3']
  const score = order.filter((id, i) => good[i] === id).length
  const trapped = order.some((id) => ['x5', 'x6'].includes(id))

  return (
    <Lab kicker="Niveau 3 · Artefact : un fil Slack" title="Lundi 9 h, le canal #projet déborde" duration="5 min">
      <div className="border border-ink bg-white text-sm">
        <div className="border-b border-ink bg-paper-2 px-4 py-2 label">#billetterie-asso-theatre · lundi</div>
        <ul className="divide-y divide-rule">
          {thread.map((m, i) => (
            <li key={i} className="grid grid-cols-[3.2rem_1fr] gap-x-3 px-4 py-2">
              <span className="num text-xs text-ink-3">{m.t}</span>
              <span><b>{m.who}</b> · {m.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-sm text-ink-2">Vous êtes la cheffe de projet, vous arrivez à 9 h 45. Choisissez vos trois premières actions, dans l’ordre.</p>
      <ol className="mt-3 space-y-1">
        {order.map((id, i) => (
          <li key={id} className="flex items-center gap-3 border border-ink bg-stamp-soft px-3 py-2 text-sm">
            <span className="num font-bold">{i + 1}.</span>
            <span className="flex-1">{actions.find((a) => a.id === id)!.text}</span>
            {!done && <button type="button" className="btn btn--sm btn--ghost" onClick={() => setOrder((o) => o.filter((x) => x !== id))}>Retirer</button>}
          </li>
        ))}
      </ol>
      {!done && order.length < 3 && (
        <div className="mt-2 grid gap-1">
          {pickable.map((a) => (
            <button key={a.id} type="button" className="chip justify-start text-left" onClick={() => setOrder((o) => [...o, a.id])}>{a.text}</button>
          ))}
        </div>
      )}
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={order.length < 3 || done} onClick={() => setDone(true)}>Valider mon ordre</button>
        <button type="button" className="btn" onClick={() => { setOrder([]); setDone(false) }}>Recommencer</button>
      </div>
      {done && (
        <Verdict tone={score === 3 ? 'stamp' : trapped ? 'red' : 'ink'}>
          <p className="mb-2 font-semibold">{score}/3 dans le bon ordre.{trapped ? ' Vous êtes tombé dans un piège.' : ''}</p>
          <ul className="space-y-1 text-sm">{actions.map((a) => <li key={a.id}><b>{a.rank <= 4 ? `#${a.rank}` : 'Piège'} ·</b> {a.text.split(' : ')[0].split(' (')[0]} : {a.why}</li>)}</ul>
        </Verdict>
      )}
    </Lab>
  )
}

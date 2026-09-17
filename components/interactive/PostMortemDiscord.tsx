'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'
import { ArrowDown, ArrowUp } from 'lucide-react'

const events = [
  { id: 'e1', text: 'Lancement du projet de site pour le festival de courts-métrages, 5 étudiants, 6 semaines' },
  { id: 'e2', text: '« On fait un Figma d’abord ou on code direct ? » · personne ne répond, Malik commence à coder' },
  { id: 'e3', text: 'Sarah livre des maquettes deux semaines plus tard, incompatibles avec ce que Malik a codé' },
  { id: 'e4', text: 'Réunion houleuse : on garde le code, on adapte les maquettes' },
  { id: 'e5', text: 'Semaine 5 : le prof demande la version mobile, « c’était dans la consigne »' },
  { id: 'e6', text: 'Nuit blanche collective la veille du rendu, le formulaire d’inscription ne marche pas' },
  { id: 'e7', text: 'Rendu en retard de 6 heures, note moyenne, chacun accuse l’autre sur Discord' },
]
const scrambled = ['e5', 'e2', 'e7', 'e1', 'e4', 'e3', 'e6']
const causes = [
  { id: 'k1', text: 'Malik a codé trop tôt', good: false, why: 'Un symptôme. Il a codé parce que personne n’a décidé.' },
  { id: 'k2', text: 'Aucune décision de méthode ni de rôle au démarrage : pas de cadrage, pas de responsable, pas de jalon', good: true, why: 'La cause racine : tout le reste en découle (maquettes tardives, mobile oublié, nuit blanche).' },
  { id: 'k3', text: 'Sarah a été trop lente sur les maquettes', good: false, why: 'Sans date fixée, « lente » ne veut rien dire.' },
  { id: 'k4', text: 'Le prof a changé la consigne', good: false, why: 'Le mobile était dans la consigne : personne ne l’a relue en semaine 1.' },
]

/** Niveau 3 · Le post-mortem d'un projet de groupe raconté par un serveur Discord. */
export default function PostMortemDiscord() {
  const [order, setOrder] = useState(scrambled)
  const [cause, setCause] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const move = (i: number, d: -1 | 1) => { const j = i + d; if (j < 0 || j >= order.length) return; setOrder((o) => { const n = [...o]; [n[i], n[j]] = [n[j], n[i]]; return n }) }
  const okOrder = order.filter((id, i) => events[i].id === id).length
  const good = cause === 'k2'

  return (
    <Lab kicker="Niveau 3 · Artefact : un serveur Discord" title="Post-mortem : ce projet de groupe a mal fini" duration="5 min">
      <p className="mb-3 text-sm text-ink-2">Voici les messages clés du serveur Discord du groupe, dans le désordre. Remettez la chronologie, puis désignez la cause racine.</p>
      <ol className="border-t-2 border-ink">
        {order.map((id, i) => {
          const ev = events.find((e) => e.id === id)!; const ok = done && events[i].id === id
          return (
            <li key={id} className={`flex items-center gap-2 border-b border-rule py-2 ${done ? (ok ? 'bg-stamp-soft' : 'bg-red-soft') : ''}`}>
              <span className="num w-6 text-xs text-ink-3">{i + 1}</span>
              <span className="flex-1 text-[0.93rem]">{ev.text}</span>
              <button type="button" className="btn btn--sm btn--ghost" aria-label="Monter" disabled={i === 0 || done} onClick={() => move(i, -1)}><ArrowUp className="h-4 w-4" aria-hidden="true" /></button>
              <button type="button" className="btn btn--sm btn--ghost" aria-label="Descendre" disabled={i === order.length - 1 || done} onClick={() => move(i, 1)}><ArrowDown className="h-4 w-4" aria-hidden="true" /></button>
            </li>
          )
        })}
      </ol>
      <p className="label mt-5 mb-2">La cause racine, selon vous</p>
      <div className="grid gap-1">
        {causes.map((c) => (
          <div key={c.id}>
            <button type="button" className={`chip w-full justify-start text-left ${done ? (c.good ? 'chip--stamp is-on' : cause === c.id ? '!border-red-ink !bg-red-soft !text-red-ink' : '') : ''}`} aria-pressed={cause === c.id} disabled={done} onClick={() => setCause(c.id)}>{c.text}</button>
            {done && <p className="mb-2 px-2 pt-1 text-sm text-ink-2">{c.why}</p>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={!cause || done} onClick={() => setDone(true)}>Rendre le post-mortem</button>
        <button type="button" className="btn" onClick={() => { setOrder(scrambled); setCause(null); setDone(false) }}>Recommencer</button>
      </div>
      {done && <Verdict tone={okOrder === 7 && good ? 'stamp' : 'ink'}>{okOrder}/7 événements en place{good ? ', cause racine trouvée' : ', cause racine manquée'}. Un post-mortem cherche le premier maillon, pas le dernier coupable. Ici, tout se joue le jour 1 : personne n’a dit qui décide, comment on travaille, et quand on vérifie la consigne. La leçon actionnable : « kick-off d’une heure, rôles écrits, consigne relue à deux ».</Verdict>}
    </Lab>
  )
}

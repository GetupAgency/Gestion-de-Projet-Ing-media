'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

type Quad = 'do' | 'plan' | 'delegate' | 'drop'
const quads: { id: Quad; label: string; sub: string }[] = [
  { id: 'do', label: 'Urgent et important', sub: 'Faire maintenant' },
  { id: 'plan', label: 'Important, pas urgent', sub: 'Planifier' },
  { id: 'delegate', label: 'Urgent, pas important', sub: 'Déléguer ou expédier' },
  { id: 'drop', label: 'Ni urgent ni important', sub: 'Reporter ou refuser' },
]
const items: { id: string; text: string; expected: Quad[]; why: string }[] = [
  { id: 'i1', text: 'Bug de paiement en production', expected: ['do'], why: 'Chaque minute coûte des ventes.' },
  { id: 'i2', text: 'Le client veut changer la couleur d’un bouton', expected: ['delegate', 'drop'], why: 'Deux minutes pour un intégrateur, ou un ticket pour la prochaine livraison.' },
  { id: 'i3', text: 'Préparer le COPIL de jeudi', expected: ['plan'], why: 'Important, pas urgent lundi matin : bloquer un créneau mercredi.' },
  { id: 'i4', text: 'Relancer le devis de l’hébergeur', expected: ['delegate', 'plan'], why: 'Un mail de deux lignes, à expédier ou déléguer.' },
  { id: 'i5', text: 'Mail furieux d’un client, non lu', expected: ['do'], why: 'On ne sait pas ce qu’il contient : lire et répondre dans l’heure.' },
  { id: 'i6', text: 'La designer est malade ce matin', expected: ['do', 'plan'], why: 'Vérifier ce qui est bloqué aujourd’hui, réorganiser la semaine.' },
  { id: 'i7', text: 'Mettre à jour les dépendances du projet', expected: ['plan'], why: 'Important pour la sécurité, jamais urgent… jusqu’au jour où ça l’est.' },
  { id: 'i8', text: 'Café d’accueil avec le nouveau développeur', expected: ['plan', 'do'], why: 'L’intégration d’un nouveau est importante ; à caler aujourd’hui, pas à 9 h 02.' },
]

/** Matrice d'Eisenhower du lundi matin. */
export default function Eisenhower() {
  const [sel, setSel] = useState<string | null>(items[0].id)
  const [placed, setPlaced] = useState<Record<string, Quad>>({})
  const [checked, setChecked] = useState(false)
  const remaining = items.filter((i) => !placed[i.id])
  const place = (q: Quad) => {
    if (!sel) return
    setPlaced((p) => ({ ...p, [sel]: q }))
    setSel(items.find((i) => i.id !== sel && !placed[i.id])?.id ?? null)
  }
  const score = items.filter((i) => placed[i.id] && i.expected.includes(placed[i.id])).length

  return (
    <Lab kicker="Priorisation" title="Lundi 9 h : huit choses à faire, une matinée" duration="3 min">
      <div className="mb-4 flex flex-wrap gap-1">
        {items.map((i) => (
          <button key={i.id} type="button" className={`chip text-xs ${placed[i.id] ? 'opacity-40 line-through' : ''}`} aria-pressed={sel === i.id} disabled={Boolean(placed[i.id])} onClick={() => setSel(i.id)}>
            {i.text}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-px border border-ink bg-ink">
        {quads.map((q) => (
          <button key={q.id} type="button" disabled={!sel} onClick={() => place(q.id)} className={`drop min-h-[7rem] bg-white text-left ${q.id === 'do' ? 'bg-red-soft' : q.id === 'plan' ? 'bg-stamp-soft' : ''}`}>
            <span className="label block text-ink">{q.label}</span>
            <span className="block text-xs text-ink-3">{q.sub}</span>
            <span className="mt-2 block space-y-1">
              {items.filter((i) => placed[i.id] === q.id).map((i) => (
                <span key={i.id} className={`block border px-1 py-0.5 text-xs ${checked ? (i.expected.includes(q.id) ? 'border-stamp text-stamp' : 'border-red-ink text-red-ink') : 'border-ink'}`}>{i.text}</span>
              ))}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={remaining.length > 0 || checked} onClick={() => setChecked(true)}>Vérifier</button>
        <button type="button" className="btn" onClick={() => { setPlaced({}); setSel(items[0].id); setChecked(false) }}>Recommencer</button>
      </div>
      {checked && (
        <Verdict tone={score >= 6 ? 'stamp' : 'ink'}>
          {score}/8. Première action de la matinée : le bug de paiement, puis le mail furieux. Le quadrant « important, pas urgent » est celui qui évite les crises du mois prochain : c’est le seul qu’on ne traite jamais si on ne le planifie pas.
          <ul className="mt-2 space-y-1 text-sm">{items.map((i) => <li key={i.id}><span className="font-semibold">{i.text}</span> : {i.why}</li>)}</ul>
        </Verdict>
      )}
    </Lab>
  )
}

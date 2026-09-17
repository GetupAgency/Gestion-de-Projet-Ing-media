'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

type Cat = 'objectif' | 'contrainte' | 'fonction' | 'question' | 'bruit'
const cats: { id: Cat; label: string; hint: string }[] = [
  { id: 'objectif', label: 'Objectif', hint: 'ce que le projet doit changer' },
  { id: 'contrainte', label: 'Contrainte', hint: 'budget, délai, obligation' },
  { id: 'fonction', label: 'Fonctionnalité', hint: 'ce que le site doit faire' },
  { id: 'question', label: 'Question à poser', hint: 'flou, à clarifier au kick-off' },
  { id: 'bruit', label: 'Hors sujet', hint: 'sympathique, sans effet sur le projet' },
]

const lines: { id: string; text: string; expected: Cat[]; why: string }[] = [
  { id: 'l1', text: 'Salut ! Comme promis au forum des assos, voici ce qu’on a en tête pour le site du BDE.', expected: ['bruit'], why: 'Politesse, contexte. Rien à cadrer.' },
  { id: 'l2', text: 'Aujourd’hui les gens ratent nos soirées parce que l’info est noyée dans le groupe WhatsApp de 400 personnes.', expected: ['objectif'], why: 'Le vrai problème à résoudre : la visibilité des événements. C’est l’objectif n°1, même s’il n’est pas formulé comme tel.' },
  { id: 'l3', text: 'On veut vendre les places en ligne, comme sur Shotgun, avec un QR code à l’entrée.', expected: ['fonction'], why: 'Billetterie + contrôle d’accès : deux fonctionnalités, avec une référence claire.' },
  { id: 'l4', text: 'Il faut que ce soit prêt pour le gala du 14 novembre, c’est non négociable.', expected: ['contrainte'], why: 'Un jalon daté et ferme : il structure tout le planning.' },
  { id: 'l5', text: 'On a 1 200 € de budget, peut-être un peu plus si la fac nous suit.', expected: ['contrainte', 'question'], why: 'Contrainte budgétaire, et un flou à lever : « peut-être un peu plus », c’est combien, décidé quand ?' },
  { id: 'l6', text: 'Ce serait cool que ce soit beau, un peu comme le site de la Fête de l’Huma mais en plus étudiant.', expected: ['question'], why: '« Beau » et « plus étudiant » ne se testent pas. À transformer en références validées et en critères.' },
  { id: 'l7', text: 'Ah et le trésorier veut pouvoir exporter les ventes pour sa compta.', expected: ['fonction'], why: 'Export des ventes : fonctionnalité précise, souvent oubliée, avec un utilisateur identifié.' },
  { id: 'l8', text: 'Léa, la vice-présidente, gérera le site ensuite, elle est en L2 info mais pas trop dispo.', expected: ['contrainte', 'question'], why: 'Contrainte d’autonomie (un CMS simple), et une question : quel temps Léa peut-elle réellement y consacrer ?' },
  { id: 'l9', text: 'On pourrait aussi mettre un shop avec des sweats, un forum, une app… on verra !', expected: ['question'], why: 'Le « on verra » est le début du scope creep. À poser clairement : dans la V1 ou pas ?' },
  { id: 'l10', text: 'Merci d’avance, tu gères ! On se voit jeudi au Delirium ?', expected: ['bruit'], why: 'Relation client. À garder chaleureuse, hors cadrage.' },
]

/** Niveau 1 · Le mail du président du BDE : transformer un brief chaleureux et flou en éléments de cadrage. */
export default function MailPresident() {
  const [a, setA] = useState<Record<string, Cat>>({})
  const [done, setDone] = useState(false)
  const remaining = lines.filter((l) => !a[l.id]).length
  const score = lines.filter((l) => a[l.id] && l.expected.includes(a[l.id])).length

  return (
    <Lab kicker="Niveau 1 · Artefact : un e-mail" title="Le mail du président du BDE" duration="4 min">
      <div className="border border-ink bg-white">
        <div className="grid grid-cols-[5rem_1fr] gap-x-3 border-b border-rule px-4 py-3 text-sm">
          <span className="label">De</span><span>Sami · Président du BDE</span>
          <span className="label">Objet</span><span className="font-semibold">Site du BDE — nos idées !!</span>
          <span className="label">Reçu</span><span className="num">Dimanche 23 h 12</span>
        </div>
        <ol className="divide-y divide-rule">
          {lines.map((l) => {
            const v = a[l.id]
            const ok = done && v && l.expected.includes(v)
            const bad = done && v && !l.expected.includes(v)
            return (
              <li key={l.id} className={`px-4 py-3 ${ok ? 'bg-stamp-soft' : bad ? 'bg-red-soft' : ''}`}>
                <p className="text-[0.97rem]">{l.text}</p>
                <div className="mt-2 flex flex-wrap gap-1" role="radiogroup">
                  {cats.map((c) => (
                    <button key={c.id} type="button" role="radio" aria-checked={v === c.id} className={`chip !min-h-[1.9rem] px-2 text-xs ${v === c.id ? 'is-on' : ''}`} aria-pressed={v === c.id} disabled={done} title={c.hint} onClick={() => setA((s) => ({ ...s, [l.id]: c.id }))}>
                      {c.label}
                    </button>
                  ))}
                </div>
                {done && <p className="mt-2 text-sm text-ink-2">{l.why}</p>}
              </li>
            )
          })}
        </ol>
      </div>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={remaining > 0 || done} onClick={() => setDone(true)}>{remaining > 0 ? `${remaining} phrase${remaining > 1 ? 's' : ''} à classer` : 'Vérifier'}</button>
        <button type="button" className="btn" onClick={() => { setA({}); setDone(false) }}>Recommencer</button>
      </div>
      {done && (
        <Verdict tone={score >= 8 ? 'stamp' : 'ink'}>
          {score}/10. Un brief de client, c’est ça : trois lignes utiles noyées dans dix. Le métier consiste à trier avant de répondre, et à repartir vers le client avec des questions, pas avec un devis.
        </Verdict>
      )}
    </Lab>
  )
}

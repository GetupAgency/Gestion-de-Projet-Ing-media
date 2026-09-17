'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

const lessons: { id: string; text: string; good: boolean; why: string }[] = [
  { id: 'l1', text: 'Exiger la livraison des contenus (textes, photos) avant le démarrage du développement, avec une date dans le contrat.', good: true, why: 'Actionnable, datée, contractuelle : c’est une règle pour le prochain projet.' },
  { id: 'l2', text: 'Les clients sont toujours en retard.', good: false, why: 'Vrai en général, inutile en particulier : ça ne dit pas quoi changer.' },
  { id: 'l3', text: 'Le développeur qui est parti n’était pas bon.', good: false, why: 'Du blâme, pas une leçon. Et il n’est plus là pour répondre.' },
  { id: 'l4', text: 'Prévoir 15 % de réserve dans le budget et l’afficher au client dès le devis.', good: true, why: 'Chiffré, applicable dès le prochain devis.' },
  { id: 'l5', text: 'Mieux communiquer.', good: false, why: 'Trop vague : mieux comment, avec qui, à quelle fréquence ?' },
  { id: 'l6', text: 'Point client de 15 minutes chaque mardi 9 h, avec un compte rendu de 5 lignes envoyé avant midi.', good: true, why: 'Voilà ce que « mieux communiquer » veut dire quand on le rend actionnable.' },
  { id: 'l7', text: 'On aurait dû choisir Shopify.', good: false, why: 'Peut-être, mais sans dire pourquoi ni pour quel type de projet, ce n’est pas transférable.' },
  { id: 'l8', text: 'Tester l’intégration du paiement dès le sprint 2, pas au sprint 6, parce que c’est la brique la plus risquée.', good: true, why: 'Une règle de priorisation avec sa justification.' },
  { id: 'l9', text: 'Ne plus jamais accepter de projet avec ce client.', good: false, why: 'Une émotion, pas une leçon. Le prochain client posera les mêmes problèmes si rien ne change chez vous.' },
]

/** Bilan : trier les vraies leçons des faux constats. */
export default function BilanLessons() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [checked, setChecked] = useState(false)
  const remaining = lessons.filter((l) => answers[l.id] === undefined)
  const score = lessons.filter((l) => answers[l.id] === l.good).length

  return (
    <Lab kicker="Tri" title="Bilan de projet : bonne ou mauvaise leçon ?" duration="3 min">
      <p className="mb-4 text-sm text-ink-2">Projet livré avec 3 semaines de retard et 5 000 € de dépassement. Voici neuf « leçons » notées en réunion de bilan. Lesquelles sont actionnables ?</p>
      <ol className="border-t-2 border-ink">
        {lessons.map((l) => {
          const a = answers[l.id]
          const ok = checked && a === l.good
          const bad = checked && a !== undefined && a !== l.good
          return (
            <li key={l.id} className={`flex flex-col gap-2 border-b border-rule py-3 sm:flex-row sm:items-center ${ok ? 'bg-stamp-soft' : bad ? 'bg-red-soft' : ''}`}>
              <span className="flex-1 text-[0.95rem]">
                {l.text}
                {checked && <span className="mt-1 block text-sm text-ink-2">{l.why}</span>}
              </span>
              <div className="flex gap-1" role="radiogroup">
                <button type="button" role="radio" aria-checked={a === true} className={`chip !min-h-[1.9rem] text-xs ${a === true ? 'chip--stamp' : ''}`} aria-pressed={a === true} disabled={checked} onClick={() => setAnswers((s) => ({ ...s, [l.id]: true }))}>Bonne leçon</button>
                <button type="button" role="radio" aria-checked={a === false} className={`chip !min-h-[1.9rem] text-xs ${a === false ? 'is-on' : ''}`} aria-pressed={a === false} disabled={checked} onClick={() => setAnswers((s) => ({ ...s, [l.id]: false }))}>Mauvaise</button>
              </div>
            </li>
          )
        })}
      </ol>
      <div className="mt-4 flex gap-3">
        <button type="button" className="btn btn--primary" disabled={remaining.length > 0 || checked} onClick={() => setChecked(true)}>
          {remaining.length > 0 ? `${remaining.length} à trier` : 'Vérifier'}
        </button>
        <button type="button" className="btn" onClick={() => { setAnswers({}); setChecked(false) }}>Recommencer</button>
      </div>
      {checked && (
        <Verdict tone={score >= 8 ? 'stamp' : 'ink'}>
          {score}/9. Une bonne leçon a un verbe, un chiffre ou une date, et elle survit au changement de client. Une mauvaise leçon désigne quelqu’un ou reste vague.
        </Verdict>
      )}
    </Lab>
  )
}

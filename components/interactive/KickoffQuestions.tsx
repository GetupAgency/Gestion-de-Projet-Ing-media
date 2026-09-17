'use client'

import { useEffect, useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Q {
  id: string
  text: string
  value: 3 | 1 | 0 | -1
  answer: string
}

const questions: Q[] = [
  { id: 'q1', text: 'Comment gagnez-vous de l’argent avec cette application ?', value: 3, answer: '« Euh… on prendra une commission, je crois ? On n’a pas encore décidé. » → Pas de modèle économique : le chiffrage doit rester minimal.' },
  { id: 'q2', text: 'Que se passe-t-il si un chien blesse un promeneur ?', value: 3, answer: '« On n’a pas d’assurance. » → Contrainte juridique bloquante à régler avant toute ligne de code.' },
  { id: 'q3', text: 'Quel est votre budget maximal, tout compris ?', value: 3, answer: '« 15 000 €, et pas un de plus. » → Application native double plateforme impossible : web app responsive.' },
  { id: 'q4', text: 'Qui sont vos trois premiers clients, avec leur nom ?', value: 3, answer: '« Ma voisine, et… je vais demander autour de moi. » → Le besoin n’est pas validé : proposer un test avec une page + un formulaire avant l’app.' },
  { id: 'q5', text: 'Combien de promeneurs avez-vous déjà recrutés ?', value: 3, answer: '« Zéro, mais avec l’app ils viendront. » → Problème de l’œuf et de la poule : l’app ne crée pas l’offre.' },
  { id: 'q6', text: 'Y a-t-il une date impérative de lancement ?', value: 1, answer: '« Avant l’été, pour la saison des vacances. » → Utile pour le planning, pas structurant.' },
  { id: 'q7', text: 'Avez-vous regardé les applications concurrentes ?', value: 1, answer: '« Oui, Rover et Yoopies. Mais nous, ce sera mieux. » → Bon signe : on peut s’appuyer sur leurs parcours.' },
  { id: 'q8', text: 'Qui, chez vous, validera les maquettes ?', value: 1, answer: '« Moi, et mon associé qui est à Lyon. » → Deux décideurs : prévoir des délais de validation.' },
  { id: 'q9', text: 'Voulez-vous une application iOS, Android ou les deux ?', value: 0, answer: '« Les deux, évidemment. » → Question prématurée : le budget y répondra tout seul.' },
  { id: 'q10', text: 'Quelle couleur pour le logo ?', value: -1, answer: 'Le client parle couleur pendant vingt minutes. Vous avez perdu le cadrage.' },
  { id: 'q11', text: 'Avez-vous pensé à la blockchain pour tracer les promenades ?', value: -1, answer: 'Le client note « blockchain » sur son carnet. Vous venez de créer une exigence.' },
  { id: 'q12', text: 'Préférez-vous React Native ou Flutter ?', value: -1, answer: '« C’est quoi ? » → Vous parlez à un client, pas à un développeur.' },
  { id: 'q13', text: 'Les promeneurs seront-ils salariés, auto-entrepreneurs, ou bénévoles ?', value: 3, answer: '« Bénévoles au début. » → Statut flou = risque URSSAF et responsabilité : à clarifier avec un juriste avant le devis.' },
  { id: 'q14', text: 'Souhaitez-vous un mode sombre ?', value: 0, answer: '« Pourquoi pas. » → Ni utile ni nuisible à ce stade.' },
  { id: 'q15', text: 'Comment les propriétaires trouvent-ils un promeneur aujourd’hui ?', value: 1, answer: '« Sur Facebook, dans des groupes locaux. » → Le concurrent réel, c’est un groupe Facebook gratuit.' },
  { id: 'q16', text: 'Voulez-vous que je vous envoie un devis d’ici vendredi ?', value: -1, answer: 'Vous n’avez pas encore compris le projet. Le devis sera faux, et signé.' },
]

const MAX = 6
const DURATION = 120

/** Kick-off : six questions en deux minutes face à un brief flou. */
export default function KickoffQuestions() {
  const [picked, setPicked] = useState<string[]>([])
  const [started, setStarted] = useState(false)
  const [left, setLeft] = useState(DURATION)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!started || done) return
    if (left <= 0) {
      setDone(true)
      return
    }
    const t = setTimeout(() => setLeft((l) => l - 1), 1000)
    return () => clearTimeout(t)
  }, [started, done, left])

  const toggle = (id: string) => {
    if (done) return
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length < MAX ? [...p, id] : p))
  }
  const score = picked.reduce((n, id) => n + (questions.find((q) => q.id === id)?.value ?? 0), 0)
  const essentialsMissed = questions.filter((q) => q.value === 3 && !picked.includes(q.id))
  const mm = String(Math.floor(left / 60))
  const ss = String(left % 60).padStart(2, '0')

  return (
    <Lab kicker="Kick-off" title="« Un Uber pour les chiens » : les bonnes questions" duration="3 min">
      <p className="mb-4 text-sm text-ink-2">
        Brief reçu : « On veut faire un Uber pour les chiens : les gens commandent un promeneur en un clic. » Vous avez deux minutes et six questions. Les questions essentielles débloquent une réponse du client qui change le projet.
      </p>
      {!started ? (
        <button type="button" className="btn btn--primary" onClick={() => setStarted(true)}>Lancer le chrono</button>
      ) : (
        <div className="flex items-center justify-between">
          <span className={`num text-2xl font-bold ${left < 20 && !done ? 'text-red-ink' : ''}`} aria-live="polite">
            {mm}:{ss}
          </span>
          <span className="num text-sm">{picked.length} / {MAX} questions</span>
        </div>
      )}
      {started && (
        <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
          {questions.map((q) => {
            const on = picked.includes(q.id)
            return (
              <li key={q.id}>
                <button
                  type="button"
                  className={`chip w-full justify-start text-left ${done && on ? (q.value === 3 ? 'chip--stamp' : q.value < 0 ? '!border-red-ink !bg-red-soft !text-red-ink' : '') : ''}`}
                  aria-pressed={on}
                  disabled={done || (!on && picked.length >= MAX)}
                  onClick={() => toggle(q.id)}
                >
                  {q.text}
                </button>
                {done && on && <p className="mb-2 px-2 pt-1 text-sm text-ink-2">{q.answer}</p>}
              </li>
            )
          })}
        </ul>
      )}
      {started && !done && (
        <button type="button" className="btn btn--primary mt-4" disabled={picked.length === 0} onClick={() => setDone(true)}>
          Fin du rendez-vous
        </button>
      )}
      {done && (
        <>
          <Verdict tone={score >= 12 ? 'stamp' : score >= 6 ? 'ink' : 'red'}>
            Score {score} / 18. {essentialsMissed.length > 0 ? `Essentielles manquées : ${essentialsMissed.map((q) => `« ${q.text} »`).join(' ')} Sans la question du modèle économique, vous chiffrez une app à 60 000 € pour un client qui n’a pas de revenu ; sans la question de l’assurance, vous livrez une app qu’il ne pourra jamais lancer.` : 'Toutes les questions essentielles sont posées : le projet est devenu une page web à 8 000 € avec un test de marché, au lieu d’une app à 60 000 € sans clients.'}
          </Verdict>
          <button type="button" className="btn btn--sm mt-4" onClick={() => { setPicked([]); setStarted(false); setLeft(DURATION); setDone(false) }}>Rejouer</button>
        </>
      )}
    </Lab>
  )
}

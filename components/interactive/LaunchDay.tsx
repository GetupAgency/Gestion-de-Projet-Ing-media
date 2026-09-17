'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Option {
  text: string
  minutes: number
  lost: number
  trust: number
  outcome: string
}
interface Step {
  time: string
  situation: string
  options: Option[]
}

const steps: Step[] = [
  {
    time: '09:40',
    situation: 'Mise en production faite à 9 h. Un client écrit : « Impossible de payer, page blanche. » Vous faites quoi ?',
    options: [
      { text: 'Tester vous-même le paiement en préprod et en prod', minutes: 5, lost: 3, trust: 0, outcome: 'Confirmé : erreur 500 au clic sur « Payer » en production seulement.' },
      { text: 'Répondre au client que ça vient sûrement de sa carte', minutes: 15, lost: 9, trust: -20, outcome: 'Trois autres clients écrivent la même chose. Vous avez perdu un quart d’heure.' },
      { text: 'Demander au développeur de regarder « quand il a un moment »', minutes: 30, lost: 18, trust: -10, outcome: 'Il regarde à 10 h 10. Le problème est réel.' },
    ],
  },
  {
    time: '09:45',
    situation: 'Le paiement est cassé en prod. La cause n’est pas évidente. Rollback ou hotfix ?',
    options: [
      { text: 'Rollback vers la version d’hier, puis chercher la cause au calme', minutes: 10, lost: 6, trust: 5, outcome: 'Paiement rétabli à 9 h 55. Cause trouvée plus tard : une clé Stripe de test restée dans la config de prod.' },
      { text: 'Hotfix à chaud : le dev cherche et corrige directement en prod', minutes: 45, lost: 27, trust: -10, outcome: 'Il trouve à 10 h 30. Entre-temps il a cassé le formulaire de contact.' },
      { text: 'Attendre de comprendre avant d’agir', minutes: 40, lost: 24, trust: -15, outcome: '40 minutes de panne pendant que vous réfléchissez.' },
    ],
  },
  {
    time: '10:00',
    situation: 'Le paiement remarche. Que faites-vous des commandes tentées pendant la panne ?',
    options: [
      { text: 'Exporter les paniers abandonnés de la période et préparer une relance', minutes: 10, lost: 0, trust: 10, outcome: '11 paniers identifiés. Le client pourra les relancer avec un mot d’excuse et un code.' },
      { text: 'Rien : ils reviendront s’ils veulent vraiment acheter', minutes: 0, lost: 6, trust: -10, outcome: 'La moitié ne reviendra pas.' },
      { text: 'Les appeler un par un', minutes: 60, lost: 0, trust: 5, outcome: 'Louable, mais ce n’est pas votre rôle et ça vous immobilise une heure.' },
    ],
  },
  {
    time: '10:15',
    situation: 'Le client (le gérant) n’est pas encore au courant. Il a une newsletter programmée à 11 h.',
    options: [
      { text: 'L’appeler maintenant : faits, durée, ce qui est fait, ce qui reste', minutes: 10, lost: 0, trust: 15, outcome: '« Merci de m’avoir appelé avant que je le découvre. » La newsletter part à 11 h sur un site qui marche.' },
      { text: 'Lui envoyer un mail détaillé en fin de journée', minutes: 0, lost: 0, trust: -25, outcome: 'Il l’apprend à 10 h 40 par un client mécontent. Il vous appelle, furieux.' },
      { text: 'Ne rien dire : c’est réparé, inutile de l’inquiéter', minutes: 0, lost: 0, trust: -40, outcome: 'Il le découvrira dans Stripe. La confiance ne s’en remettra pas.' },
    ],
  },
  {
    time: '10:30',
    situation: 'Faut-il afficher quelque chose aux visiteurs ?',
    options: [
      { text: 'Un bandeau discret : « Un incident a perturbé les paiements ce matin, tout est rétabli. Un souci ? Écrivez-nous. »', minutes: 10, lost: 0, trust: 5, outcome: 'Transparent, rassurant, deux clients écrivent pour dire merci.' },
      { text: 'Rien : moins on en parle, mieux c’est', minutes: 0, lost: 2, trust: 0, outcome: 'Acceptable, mais les clients qui ont eu la page blanche restent sur une mauvaise impression.' },
      { text: 'Une pop-up d’excuses plein écran', minutes: 15, lost: 3, trust: -5, outcome: 'Vous alertez 95 % de visiteurs qui n’ont rien vu.' },
    ],
  },
  {
    time: '14:00',
    situation: 'L’après-midi. Que faites-vous ?',
    options: [
      { text: 'Un post-mortem de 30 min : chronologie, cause, ce qui a marché, deux actions (smoke test paiement à 1 € avant chaque mise en prod ; checklist des clés de config)', minutes: 30, lost: 0, trust: 10, outcome: 'Le prochain déploiement aura un test de paiement réel dans sa checklist.' },
      { text: 'Chercher qui a laissé la clé de test dans la config', minutes: 30, lost: 0, trust: -5, outcome: 'Vous trouvez un coupable, pas une solution. La prochaine fois, personne ne dira rien.' },
      { text: 'Passer à autre chose, c’est réglé', minutes: 0, lost: 0, trust: 0, outcome: 'Dans trois mois, une autre clé de test finira en prod.' },
    ],
  },
]

/** Jour J : le site crash. Six décisions, trois compteurs. */
export default function LaunchDay() {
  const [step, setStep] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [lost, setLost] = useState(0)
  const [trust, setTrust] = useState(70)
  const [log, setLog] = useState<string[]>([])
  const done = step >= steps.length

  const choose = (o: Option) => {
    setMinutes((m) => m + o.minutes)
    setLost((l) => l + o.lost)
    setTrust((t) => Math.max(0, Math.min(100, t + o.trust)))
    setLog((l) => [...l, `${steps[step].time} · ${o.text} → ${o.outcome}`])
    setStep((s) => s + 1)
  }
  const reset = () => { setStep(0); setMinutes(0); setLost(0); setTrust(70); setLog([]) }
  const downtime = log.length >= 2 ? Math.min(minutes, 60) : minutes

  return (
    <Lab kicker="Simulation" title="Jour J : le site crash à 9 h 40" duration="5 min">
      <div className="grid grid-cols-3 gap-px border border-ink bg-ink">
        <div className="bg-white p-3"><p className="label">Minutes de panne</p><p className={`num mt-1 text-2xl font-bold ${downtime > 30 ? 'text-red-ink' : ''}`}>{downtime}</p></div>
        <div className="bg-white p-3"><p className="label">Commandes perdues</p><p className={`num mt-1 text-2xl font-bold ${lost > 15 ? 'text-red-ink' : ''}`}>{lost}</p></div>
        <div className="bg-white p-3"><p className="label">Confiance client</p><p className={`num mt-1 text-2xl font-bold ${trust < 50 ? 'text-red-ink' : trust >= 80 ? 'text-stamp' : ''}`}>{trust} %</p></div>
      </div>

      {!done ? (
        <div className="mt-5">
          <p className="label">
            <span className="num">{steps[step].time}</span> · décision {step + 1} / {steps.length}
          </p>
          <p className="mt-2 text-[1rem] font-semibold">{steps[step].situation}</p>
          <div className="mt-3 grid gap-2">
            {steps[step].options.map((o, i) => (
              <button key={i} type="button" className="btn justify-start text-left normal-case tracking-normal" onClick={() => choose(o)}>
                <span className="quiz-option__index !mr-2 !h-7 !w-7 !text-xs">{String.fromCharCode(65 + i)}</span>
                {o.text}
              </button>
            ))}
          </div>
          {log.length > 0 && <p className="mt-4 border-t border-dashed border-ink pt-3 text-sm text-ink-2">{log[log.length - 1].split(' → ')[1]}</p>}
        </div>
      ) : (
        <>
          <Verdict tone={downtime <= 30 && trust >= 70 ? 'stamp' : 'red'}>
            {downtime <= 30 && trust >= 70
              ? 'Panne courte, client prévenu avant sa newsletter, post-mortem fait : c’est le déroulé d’un chef de projet senior. Le secret n’est pas d’éviter les incidents, c’est de les avoir déjà répétés.'
              : `${downtime} minutes de panne et ${trust} % de confiance. Un senior aurait fait : tester soi-même (5 min), rollback immédiat (10 min), relance des paniers, appel au client avant 10 h 30, post-mortem l’après-midi. Ce qui coûte cher, ce n’est jamais le bug : c’est le temps passé à espérer qu’il se règle tout seul.`}
          </Verdict>
          <details className="mt-4 text-sm">
            <summary className="label cursor-pointer text-ink">Votre chronologie</summary>
            <ol className="mt-2 space-y-1">{log.map((l, i) => <li key={i} className="num text-xs">{l}</li>)}</ol>
          </details>
          <div className="mt-4 border border-dashed border-ink bg-paper-2 p-4 text-sm">
            <p className="label mb-1">À retenir pour la checklist</p>
            Smoke test du paiement avec une vraie carte à 1 € juste après chaque mise en production. Jamais de mise en prod le jour d’une campagne. Un plan de rollback écrit avant, pas pendant.
          </div>
          <button type="button" className="btn btn--sm mt-4" onClick={reset}>Rejouer</button>
        </>
      )}
    </Lab>
  )
}

'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Ask {
  id: string
  text: string
  days: number
}

const asks: Ask[] = [
  { id: 'wishlist', text: '« Ah et il faudrait une liste d’envies, comme sur Amazon, c’est trois fois rien. »', days: 2 },
  { id: 'langue', text: '« On a des clients italiens l’été, on peut mettre le site en italien ? »', days: 6 },
  { id: 'chat', text: '« Un petit chat en direct en bas à droite, tous les sites en ont. »', days: 3 },
  { id: 'bouton', text: '« Juste un petit bouton “Recommander” sur chaque commande passée. »', days: 2 },
  { id: 'logo', text: '« Pendant qu’on y est, vous pourriez refaire notre logo ? »', days: 4 },
]

type Choice = 'oui' | 'non' | 'chiffre'
const labels: Record<Choice, string> = {
  oui: '« Oui bien sûr, on ajoute ça. »',
  non: '« Non, ce n’est pas prévu au contrat. »',
  chiffre: '« Bonne idée, je note. Je vous chiffre ça et on priorise ensemble jeudi. »',
}
const effects: Record<Choice, { rel: number; budget: (d: number) => number }> = {
  oui: { rel: +5, budget: (d) => -d * 500 },
  non: { rel: -25, budget: () => 0 },
  chiffre: { rel: +2, budget: () => 0 },
}

/** Dire non au scope creep : cinq demandes, deux jauges, une seule voie qui tient. */
export default function ScopeCreep() {
  const [turn, setTurn] = useState(0)
  const [rel, setRel] = useState(70)
  const [budget, setBudget] = useState(6000)
  const [log, setLog] = useState<{ ask: Ask; choice: Choice }[]>([])
  const done = turn >= asks.length

  const answer = (c: Choice) => {
    const ask = asks[turn]
    setRel((r) => Math.max(0, Math.min(100, r + effects[c].rel)))
    setBudget((b) => b + effects[c].budget(ask.days))
    setLog((l) => [...l, { ask, choice: c }])
    setTurn((t) => t + 1)
  }
  const reset = () => { setTurn(0); setRel(70); setBudget(6000); setLog([]) }
  const fmt = (n: number) => new Intl.NumberFormat('fr-FR').format(n)
  const given = log.filter((l) => l.choice === 'oui').reduce((n, l) => n + l.ask.days, 0)

  return (
    <Lab kicker="Simulation" title="Dire non au scope creep (sans dire non)" duration="3 min">
      <p className="mb-4 text-sm text-ink-2">Appel client, cinq demandes hors cahier des charges. Votre réserve pour imprévus est de 6 000 €. Chaque réponse bouge deux jauges.</p>
      <div className="grid grid-cols-2 gap-px border border-ink bg-ink">
        <div className="bg-white p-3">
          <p className="label">Relation client</p>
          <p className={`num mt-1 text-2xl font-bold ${rel < 40 ? 'text-red-ink' : ''}`}>{rel} %</p>
          <div className="ruler mt-2 h-2"><div className="ruler__fill" style={{ width: `${rel}%`, background: rel < 40 ? 'var(--red)' : undefined }} /></div>
        </div>
        <div className="bg-white p-3">
          <p className="label">Réserve restante</p>
          <p className={`num mt-1 text-2xl font-bold ${budget < 0 ? 'text-red-ink' : ''}`}>{fmt(budget)} €</p>
          <div className="ruler mt-2 h-2"><div className="ruler__fill" style={{ width: `${Math.max(0, (budget / 6000) * 100)}%`, background: budget < 2000 ? 'var(--red)' : undefined }} /></div>
        </div>
      </div>

      {!done ? (
        <div className="mt-5">
          <p className="label">Demande {turn + 1} / {asks.length} · coût réel {asks[turn].days} jours</p>
          <p className="mt-2 border border-ink bg-paper-2 px-4 py-3 text-[1rem] italic">{asks[turn].text}</p>
          <div className="mt-3 grid gap-2">
            {(Object.keys(labels) as Choice[]).map((c) => (
              <button key={c} type="button" className="btn justify-start text-left normal-case tracking-normal" onClick={() => answer(c)}>
                {labels[c]}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <Verdict tone={rel >= 60 && budget >= 4000 ? 'stamp' : 'red'}>
            {rel >= 60 && budget >= 4000
              ? 'Les deux jauges tiennent : vous avez transformé cinq demandes en une réunion de priorisation. Le client se sent écouté, le budget est intact, et chaque demande a maintenant un prix.'
              : budget < 4000
                ? `Vous avez offert ${given} jours de travail (${fmt(given * 500)} €). Le client est ravi, l’agence travaille gratuitement. C’est comme ça qu’un projet rentable devient déficitaire sans qu’aucune décision n’ait été prise.`
                : 'La réserve est intacte mais la relation est en miettes. Un « non » sec est entendu comme « je ne vous écoute pas ». Le client cherchera une agence qui dit « oui », et il la trouvera.'}
          </Verdict>
          <div className="mt-4 border border-dashed border-ink bg-paper-2 p-4 text-sm">
            <p className="label mb-2">Modèle de mail « demande de changement »</p>
            <p>
              Objet : Demande de changement n°1 – liste d’envies<br />
              Bonjour, suite à notre échange, voici le chiffrage de la liste d’envies : 2 jours, soit 1 000 € HT, livrable en lot 2 (juin) ou en remplacement du module « avis clients » à coût constant. Merci de m’indiquer votre choix d’ici jeudi pour que je mette le planning à jour.
            </p>
          </div>
          <button type="button" className="btn btn--sm mt-4" onClick={reset}>Rejouer</button>
        </>
      )}
    </Lab>
  )
}

'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

interface Reply {
  text: string
  scores: [number, number, number] // factuel, empathie, engagement (0-2)
  reaction: string
}

interface Situation {
  id: string
  subject: string
  from: string
  time: string
  body: string
  replies: Reply[]
  ideal: string
}

const situations: Situation[] = [
  {
    id: 'retard',
    subject: 'RE: RE: Point projet — vous vous moquez de moi ?',
    from: 'Karim B., gérant',
    time: 'Vendredi 18 h 42',
    body: 'Je viens d’apprendre par votre développeur que le site a trois semaines de retard. Trois semaines. Et personne ne m’a rien dit. J’ai une campagne Instagram qui part le 12. Expliquez-moi.',
    replies: [
      { text: 'Bonjour Karim, je suis désolé, on a eu beaucoup de projets en même temps. On va faire au mieux. Bon week-end.', scores: [0, 1, 0], reaction: 'Karim transfère votre mail à son associé avec « Ils n’ont même pas de plan ». Lundi, il demande un rendez-vous pour « faire le point sur la collaboration ».' },
      { text: 'Bonjour, le retard vient de l’API de votre transporteur qui a changé de version. Ce n’est pas de notre fait. Nous vous tiendrons informé.', scores: [1, 0, 0], reaction: 'Karim lit « ce n’est pas de notre faute ». Il répond : « Je ne vous ai pas demandé qui est responsable, je vous ai demandé quand. »' },
      { text: 'Bonjour Karim, vous avez raison, vous auriez dû l’apprendre par moi et je vous appelle lundi 9 h. État réel : 14 fonctionnalités sur 20 livrées, retard estimé à 8 jours ouvrés, cause : l’API du transporteur. Pour le 12 : la boutique peut ouvrir sans le programme de fidélité, qui arrivera le 20. Je vous envoie dimanche un planning jour par jour.', scores: [2, 2, 2], reaction: 'Karim répond en dix minutes : « Ok pour ouvrir sans la fidélité. 9 h lundi. » La confiance n’est pas intacte, mais elle n’est plus en chute libre.' },
      { text: 'Bonjour, je comprends votre frustration. Nous mettons tout en œuvre pour livrer au plus vite. N’hésitez pas si vous avez des questions.', scores: [0, 1, 0], reaction: 'Karim : « Justement, j’ai une question : QUAND ? » Le ton monte d’un cran.' },
    ],
    ideal: 'Reconnaître le défaut d’information (sans se flageller), donner l’état factuel chiffré, la cause en une ligne, une option pour la date qui compte, et une prochaine étape datée. Rien sur la charge de travail de l’agence : le client s’en moque, à raison.',
  },
  {
    id: 'paiement',
    subject: 'URGENT — paiement cassé depuis samedi',
    from: 'Sophie L., e-commerçante',
    time: 'Lundi 8 h 05',
    body: 'Le paiement ne marche plus depuis samedi matin. J’ai 40 commandes abandonnées dans Stripe. Vous étiez où ? Je perds de l’argent à chaque minute.',
    replies: [
      { text: 'Bonjour Sophie, on regarde tout de suite. Ça vient sûrement de Stripe, pas de nous.', scores: [0, 0, 1], reaction: 'Sophie : « Je me fiche d’où ça vient. » Elle appelle une autre agence dans la matinée « pour un second avis ».' },
      { text: 'Bonjour Sophie, priorité absolue. 8 h 10 : diagnostic en cours, je vous rappelle avant 9 h avec la cause et l’heure de rétablissement. Ensuite : on relance les 40 paniers abandonnés par mail avec un code -10 %, et je vous propose une astreinte week-end pour que ça ne se reproduise plus.', scores: [2, 2, 2], reaction: 'Sophie : « Ok. 9 h. » À 8 h 50 vous rappelez : certificat SSL expiré, rétabli à 8 h 35. Elle relance ses paniers dans l’après-midi.' },
      { text: 'Bonjour, désolé pour la gêne occasionnée. Nous n’avons pas d’astreinte le week-end, c’est indiqué dans le contrat. Nous traitons votre demande.', scores: [1, 0, 0], reaction: 'Sophie relit le contrat, puis vous écrit : « Vous avez raison. Je ne renouvellerai pas. »' },
      { text: 'Bonjour Sophie, c’est réparé, vous pouvez vérifier. Désolé.', scores: [1, 1, 0], reaction: 'Sophie vérifie : ça marche. Puis : « Et les 40 commandes ? Et pourquoi c’est arrivé ? » Vous avez réparé, pas géré.' },
    ],
    ideal: 'En incident, l’ordre est : rassurer par une action datée (pas par des mots), diagnostiquer, rétablir, puis réparer le préjudice (les paniers perdus) et prévenir la récidive. La clause du contrat est vraie mais ce n’est pas le moment de la brandir.',
  },
  {
    id: 'avenant',
    subject: 'Avenant n°3 — hors de question',
    from: 'Marc D., directeur',
    time: 'Mercredi 14 h 20',
    body: 'Je ne paierai pas votre avenant de 2 400 € pour l’export PDF. C’était évident qu’un back-office devait exporter en PDF. Vous auriez dû le prévoir.',
    replies: [
      { text: 'Bonjour Marc, très bien, on le fait sans avenant, pas de souci.', scores: [0, 1, 0], reaction: 'Marc est content. Trois semaines plus tard, il refuse l’avenant n°4 avec le même argument. Votre projet est maintenant déficitaire.' },
      { text: 'Bonjour Marc, l’export PDF n’est pas dans le cahier des charges signé le 12 mars (section 4.2, page 9). Nous ne pouvons pas le réaliser gratuitement.', scores: [2, 0, 0], reaction: 'Marc : « Donc vous vous cachez derrière un document. » Vous avez raison sur le fond, et vous venez de perdre un client.' },
      { text: 'Bonjour Marc, je comprends : pour vous c’est évident, et c’est un vrai besoin. Le CDC du 12 mars ne le prévoit pas, d’où le chiffrage. Deux pistes : soit on le glisse dans le lot 2 en échange du module « statistiques » qui semble moins prioritaire, à coût constant ; soit on réduit à un export CSV (600 €) qui couvre 80 % de l’usage. Je vous appelle demain 10 h pour choisir ?', scores: [2, 2, 2], reaction: 'Marc choisit l’échange avec le module statistiques. Il paiera l’avenant n°4, parce que cette fois il a compris le mécanisme.' },
      { text: 'Bonjour Marc, nous avons bien noté votre refus. Le projet se poursuit sans l’export PDF.', scores: [1, 0, 1], reaction: 'Marc rumine. À la recette, il refuse de signer le PV « tant que le PDF n’est pas là ».' },
    ],
    ideal: 'Valider le besoin sans valider la gratuité. Rappeler le périmètre signé comme un fait, pas comme une arme. Ouvrir deux portes chiffrées (échange à coût constant, version réduite) et fixer la décision dans le temps.',
  },
]

const axes = ['Factuel', 'Empathie', 'Engagement daté']

/** Le mail du client furieux : choisir une réponse, voir la réaction, comparer à l'idéal. */
export default function ClientMail() {
  const [sid, setSid] = useState(situations[0].id)
  const s = situations.find((x) => x.id === sid)!
  const [chosen, setChosen] = useState<number | null>(null)
  const reply = chosen !== null ? s.replies[chosen] : null
  const total = reply ? reply.scores.reduce((a, b) => a + b, 0) : 0

  return (
    <Lab kicker="Mise en situation" title="Le mail du client furieux" duration="4 min">
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Situation">
        {situations.map((x, i) => (
          <button key={x.id} role="tab" aria-selected={x.id === sid} className="chip" aria-pressed={x.id === sid} onClick={() => { setSid(x.id); setChosen(null) }}>
            Situation {i + 1}
          </button>
        ))}
      </div>

      <div className="border border-ink bg-white">
        <div className="grid grid-cols-[6rem_1fr] gap-x-3 border-b border-rule px-4 py-3 text-sm">
          <span className="label">De</span>
          <span>{s.from}</span>
          <span className="label">Objet</span>
          <span className="font-semibold">{s.subject}</span>
          <span className="label">Reçu</span>
          <span className="num">{s.time}</span>
        </div>
        <p className="px-4 py-4 text-[0.97rem]">{s.body}</p>
      </div>

      <p className="label mt-6 mb-2">Choisissez votre réponse</p>
      <div>
        {s.replies.map((r, i) => (
          <button
            key={i}
            type="button"
            className={`quiz-option ${chosen === i ? 'selected' : ''}`}
            onClick={() => setChosen(i)}
            disabled={chosen !== null}
            aria-pressed={chosen === i}
          >
            <span className="quiz-option__index">{String.fromCharCode(65 + i)}</span>
            <span className="text-[0.95rem]">{r.text}</span>
          </button>
        ))}
      </div>

      {reply && (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-[12rem_1fr]">
          <div>
            <p className="label mb-2">Votre réponse sur 3 axes</p>
            {axes.map((a, i) => (
              <div key={a} className="mb-2">
                <div className="flex justify-between text-xs">
                  <span>{a}</span>
                  <span className="num">{reply.scores[i]}/2</span>
                </div>
                <div className="ruler mt-1 h-2">
                  <div className="ruler__fill" style={{ width: `${(reply.scores[i] / 2) * 100}%`, background: reply.scores[i] === 2 ? 'var(--stamp)' : reply.scores[i] === 0 ? 'var(--red)' : undefined }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="label">Réaction du client</p>
            <p className="mt-1 border border-dashed border-ink bg-paper-2 px-3 py-2 text-[0.95rem]">{reply.reaction}</p>
            <Verdict tone={total >= 5 ? 'stamp' : total >= 3 ? 'ink' : 'red'}>
              <span className="font-semibold">Ce que fait la réponse idéale : </span>
              {s.ideal}
            </Verdict>
            <button type="button" className="btn btn--sm mt-4" onClick={() => setChosen(null)}>
              Réessayer
            </button>
          </div>
        </div>
      )}
    </Lab>
  )
}

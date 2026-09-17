'use client'

import { useState } from 'react'
import Lab, { Verdict } from './Lab'

type Grade = 'ideal' | 'ok' | 'non'
const stacks = ['WordPress', 'Shopify', 'WooCommerce', 'Webflow', 'Next.js + Node', 'CMS headless + React', 'React Native', 'Sur-mesure PHP / Symfony']

const briefs: { id: string; name: string; text: string; grades: Record<string, Grade>; why: string }[] = [
  {
    id: 'boulanger',
    name: 'Boulangerie · click & collect',
    text: '8 000 € HT, 6 semaines, commandes en ligne avec retrait, la boulangère gère seule le catalogue.',
    grades: { WordPress: 'ok', Shopify: 'ideal', WooCommerce: 'ideal', Webflow: 'non', 'Next.js + Node': 'non', 'CMS headless + React': 'non', 'React Native': 'non', 'Sur-mesure PHP / Symfony': 'non' },
    why: 'Shopify et WooCommerce sont tous deux défendables : paiement, catalogue et autonomie du client en quelques semaines. WordPress seul manque le paiement ; tout ce qui est sur-mesure explose le budget.',
  },
  {
    id: 'saas',
    name: 'SaaS B2B · temps réel',
    text: 'Tableau de bord collaboratif, données mises à jour en direct, 80 000 €, équipe interne de 3 développeurs.',
    grades: { WordPress: 'non', Shopify: 'non', WooCommerce: 'non', Webflow: 'non', 'Next.js + Node': 'ideal', 'CMS headless + React': 'ok', 'React Native': 'non', 'Sur-mesure PHP / Symfony': 'ok' },
    why: 'Du temps réel et une logique métier riche : un framework applicatif (Next.js + Node ou Symfony) s’impose. Un CMS, même headless, n’a rien à gérer ici.',
  },
  {
    id: 'blog',
    name: 'Blog personnel',
    text: 'Une journaliste veut publier deux articles par semaine, budget 1 500 €, aucune compétence technique.',
    grades: { WordPress: 'ideal', Shopify: 'non', WooCommerce: 'non', Webflow: 'ok', 'Next.js + Node': 'non', 'CMS headless + React': 'non', 'React Native': 'non', 'Sur-mesure PHP / Symfony': 'non' },
    why: 'WordPress est né pour ça. Webflow se défend pour le design. Le reste est un marteau-piqueur pour planter un clou.',
  },
  {
    id: 'marketplace',
    name: 'Marketplace · 3 profils',
    text: 'Vendeurs, acheteurs, administrateurs ; commissions, litiges, paiements séquestrés ; 80 000 € et 8 mois.',
    grades: { WordPress: 'non', Shopify: 'non', WooCommerce: 'non', Webflow: 'non', 'Next.js + Node': 'ideal', 'CMS headless + React': 'non', 'React Native': 'non', 'Sur-mesure PHP / Symfony': 'ideal' },
    why: 'Trois rôles, des paiements séquestrés, des litiges : c’est du sur-mesure, en JavaScript ou en PHP selon l’équipe. React Native n’est qu’une couche mobile, jamais une réponse complète.',
  },
]

/** Choisir la stack selon le brief : il y a souvent deux bonnes réponses, et beaucoup de mauvaises. */
export default function StackChooser() {
  const [bid, setBid] = useState(briefs[0].id)
  const b = briefs.find((x) => x.id === bid)!
  const [choice, setChoice] = useState<string | null>(null)
  const g = choice ? b.grades[choice] : null

  return (
    <Lab kicker="Décision" title="Quelle stack pour ce brief ?" duration="3 min">
      <div className="mb-4 flex flex-wrap gap-2" role="tablist" aria-label="Brief">
        {briefs.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === bid} className="chip" aria-pressed={x.id === bid} onClick={() => { setBid(x.id); setChoice(null) }}>
            {x.name}
          </button>
        ))}
      </div>
      <p className="border border-ink bg-paper-2 px-4 py-3 text-[0.97rem]">{b.text}</p>
      <p className="label mt-5 mb-2">Votre recommandation</p>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-4">
        {stacks.map((s) => {
          const grade = b.grades[s]
          const shown = choice !== null
          return (
            <button
              key={s}
              type="button"
              className={`chip justify-center text-center ${shown ? (grade === 'ideal' ? 'chip--stamp is-on' : grade === 'ok' ? '!border-stamp' : 'opacity-40') : ''} ${choice === s ? 'ring-2 ring-ink ring-offset-2' : ''}`}
              aria-pressed={choice === s}
              disabled={shown}
              onClick={() => setChoice(s)}
            >
              {s}
            </button>
          )
        })}
      </div>
      {g && (
        <Verdict tone={g === 'ideal' ? 'stamp' : g === 'ok' ? 'ink' : 'red'}>
          <span className="font-semibold">{g === 'ideal' ? 'Choix idéal.' : g === 'ok' ? 'Défendable, pas idéal.' : 'Mauvaise pioche.'} </span>
          {b.why}
          <button type="button" className="btn btn--sm mt-3 block" onClick={() => setChoice(null)}>Rejouer ce brief</button>
        </Verdict>
      )}
    </Lab>
  )
}

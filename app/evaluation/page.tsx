import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Évaluation orale' }

const themes = [
  { title: 'Concepts fondamentaux', items: ['Types de projets web', 'Valeur pour le client', 'Livrables clés', 'Les 7 phases', 'ROI, conversion, KPI'] },
  { title: 'Cahier des charges et cadrage', items: ['Rôle et structure d’un CDC', 'User stories et personas', 'Cartographie de l’existant', 'Étude des cibles', 'Équipe projet'] },
  { title: 'Planification et budget', items: ['Gantt, Agile', 'Jalons et dépendances', 'Estimation et devis', 'Risques', 'Scope creep et arbitrages'] },
  { title: 'Technologies et CMS', items: ['Frontend, backend, API', 'WordPress, Shopify…', 'Choix de stack', 'CMS ou sur-mesure', 'Hébergement'] },
  { title: 'Tests et recette', items: ['Types de tests', 'Recette et PV', 'Classification des anomalies', 'Lighthouse, Cypress…', 'Go / no-go'] },
  { title: 'Déploiement et suivi', items: ['Stratégies de déploiement', 'SSL, DNS', 'Rollback', 'Maintenance corrective / évolutive', 'Bilan de projet'] },
  { title: 'Gestion de crise', items: ['Budget coupé', 'Départ d’un membre', 'Retard', 'Communication de crise', 'Post-mortem'] },
  { title: 'Compétences et lexique', items: ['Soft skills', 'Savoir-être', 'Vocabulaire métier', 'Outils'] },
]

const criteres = [
  { titre: 'Connaissances théoriques', poids: 40, items: ['Concepts fondamentaux', 'Vocabulaire technique', 'Méthodes et outils', 'Définitions du lexique'] },
  { titre: 'Compréhension pratique', poids: 35, items: ['Exemples concrets', 'Application des concepts', 'Analyse critique personnelle', 'Liens théorie / pratique'] },
  { titre: 'Expression et argumentation', poids: 25, items: ['Clarté', 'Argumentation', 'Structure de la pensée', 'Réactivité', 'Sans jargon inutile'] },
]

const exemples = [
  { type: 'Définition', q: ['« Qu’est-ce qu’un backlog ? »', '« Expliquez-moi ce qu’est une user story. »'] },
  { type: 'Comparaison', q: ['« Site vitrine ou e-commerce : quelle différence ? »', '« WordPress ou sur-mesure pour un site de 20 pages ? »'] },
  { type: 'Situation', q: ['« Un bug bloquant en recette, vous faites quoi ? »', '« Le client demande une fonctionnalité hors périmètre. »'] },
  { type: 'Méthode', q: ['« Combien de phases dans un projet web ? »', '« Quelle durée pour un sprint Scrum ? »'] },
  { type: 'Posture', q: ['« Les qualités d’un chef de projet ? »', '« Comment gérez-vous un imprévu ? »'] },
]

export default function EvaluationPage() {
  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Évaluation orale"
        lead="Un entretien individuel de 10 à 15 minutes, sans présentation préparée. L’enseignant pioche des questions dans les quiz, le lexique et les situations vues en cours."
        meta={[
          { label: 'Réf.', value: 'Annexe A3 · Entretien individuel' },
          { label: 'Durée', value: '10 à 15 min' },
          { label: 'Préparation', value: 'Aucun support' },
          { label: 'Attendu', value: 'Comprendre, illustrer, argumenter' },
        ]}
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-14" aria-labelledby="bareme">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="bareme" className="display-narrow text-2xl">Barème</h2>
            <p className="label">Trois critères</p>
          </div>
          <div className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-3">
            {criteres.map((c) => (
              <div key={c.titre} className="border-b border-rule py-5 md:border-r md:pr-6 md:last:border-r-0">
                <p className="num display text-5xl leading-none">{c.poids}<span className="text-xl text-ink-3"> %</span></p>
                <h3 className="mt-3 font-semibold">{c.titre}</h3>
                <ul className="mt-2 space-y-1 text-sm text-ink-2">
                  {c.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-measure border border-ink px-4 py-3 text-[0.97rem]">
            <span className="label mr-2 text-ink">Ce qui compte</span>
            La compréhension d’ensemble, pas la récitation. Expliquer un concept avec vos mots et un exemple vaut mieux qu’une définition apprise par cœur.
          </p>
        </section>

        <section className="mb-14" aria-labelledby="themes">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="themes" className="display-narrow text-2xl">Thèmes possibles</h2>
            <p className="label">Tirés au sort</p>
          </div>
          <ol className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2 lg:grid-cols-4">
            {themes.map((t, i) => (
              <li key={t.title} className="border-b border-rule p-4 md:[&:nth-child(odd)]:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:not(:nth-child(4n))]:border-r">
                <span className="num text-xs text-ink-3">T{i + 1}</span>
                <h3 className="mt-1 font-semibold">{t.title}</h3>
                <ul className="mt-2 space-y-0.5 text-sm text-ink-2">
                  {t.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-2" aria-label="Conseils">
          <div>
            <h2 className="display-narrow text-2xl">À faire</h2>
            <ul className="mt-3 border-t-2 border-ink">
              {['Refaire tous les contrôles de poste des modules', 'Relire le lexique, surtout les termes essentiels', 'Préparer un exemple concret par grand thème', 'Rejouer le quiz global plusieurs fois : le tirage change', 'Comprendre plutôt que mémoriser'].map((x) => (
                <li key={x} className="flex gap-3 border-b border-rule py-2.5 text-[0.97rem]"><span className="mt-2 h-2.5 w-2.5 shrink-0 bg-stamp" aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display-narrow text-2xl">À éviter</h2>
            <ul className="mt-3 border-t-2 border-ink">
              {['Apprendre par cœur sans comprendre', 'Rester vague', 'Dire « je ne sais pas » sans réfléchir à voix haute', 'Du jargon sans l’expliquer', 'Paniquer parce qu’on ne sait pas tout'].map((x) => (
                <li key={x} className="flex gap-3 border-b border-rule py-2.5 text-[0.97rem]"><span className="mt-2 h-2.5 w-2.5 shrink-0 border border-red-ink" aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14" aria-labelledby="exemples">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="exemples" className="display-narrow text-2xl">Exemples de questions</h2>
            <p className="label">Cinq registres</p>
          </div>
          <dl className="border-t-2 border-ink">
            {exemples.map((e) => (
              <div key={e.type} className="grid grid-cols-1 gap-x-6 border-b border-rule py-3 md:grid-cols-[10rem_1fr]">
                <dt className="label pt-1 text-ink">{e.type}</dt>
                <dd className="text-[0.97rem] italic text-ink-2">{e.q.map((q) => <span key={q} className="block">{q}</span>)}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-label="Ressources" className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-3">
          {[
            { href: '/quiz', t: 'Quiz global', d: 'Le meilleur entraînement : ce sont ces questions qui reviendront à l’oral.' },
            { href: '/lexique', t: 'Lexique', d: 'Concentrez-vous sur les termes essentiels la veille.' },
            { href: '/competences', t: 'Compétences', d: 'Pour les questions de posture.' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group border-b border-rule p-5 no-underline hover:bg-paper-2 md:border-r md:last:border-r-0">
              <h3 className="display-narrow text-xl">{r.t}</h3>
              <p className="mt-2 text-sm text-ink-2">{r.d}</p>
              <span className="label mt-4 inline-flex items-center gap-2 text-ink group-hover:text-stamp">Ouvrir <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

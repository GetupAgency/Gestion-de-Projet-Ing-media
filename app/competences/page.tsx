import type { Metadata } from 'next'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Compétences du chef de projet' }

const softSkills = [
  { skill: 'Communication claire', description: 'Expliquer simplement des choses compliquées, à l’écrit comme à l’oral.' },
  { skill: 'Écoute active', description: 'Entendre le vrai besoin derrière la demande.' },
  { skill: 'Gestion du stress', description: 'Rester calme quand tout le monde s’agite.' },
  { skill: 'Organisation', description: 'Structurer son travail et celui de l’équipe.' },
  { skill: 'Diplomatie', description: 'Régler les conflits sans brusquer.' },
  { skill: 'Leadership positif', description: 'Motiver sans autorité hiérarchique.' },
  { skill: 'Arbitrage', description: 'Trancher quand deux bonnes options se contredisent.' },
  { skill: 'Pédagogie client', description: 'Former et accompagner, pas seulement livrer.' },
  { skill: 'Savoir dire non', description: 'Refuser avec une alternative.' },
  { skill: 'Curiosité', description: 'S’intéresser aux technologies et aux méthodes sans en être esclave.' },
  { skill: 'Adaptabilité', description: 'Accueillir l’imprévu comme une donnée du problème.' },
  { skill: 'Priorisation', description: 'Distinguer l’important de l’urgent.' },
  { skill: 'Décision', description: 'Décider vite avec une information incomplète.' },
]

const hardSkills = [
  'Comprendre les technologies web (HTML, CSS, JavaScript, PHP…)',
  'Lire un cahier des charges technique',
  'Rédiger un cahier des charges fonctionnel',
  'Construire un planning (Gantt, Kanban)',
  'Animer une réunion et la conclure par des décisions',
  'Rédiger un compte rendu structuré',
  'Écrire des user stories avec critères d’acceptation',
  'Maîtriser les outils (Figma, Notion, Trello, Slack, GitHub)',
  'Chiffrer un projet',
  'Bases de SEO',
  'Bases d’UX',
  'Gérer un registre des risques',
  'Organiser une recette client',
  'Cadrer une maintenance',
  'Lire des métriques (KPI, analytics)',
]

const savoirEtre = [
  { principe: 'Être le facilitateur, pas le chef autoritaire', description: 'Le rôle est d’aider l’équipe à avancer, pas d’imposer.' },
  { principe: 'Rester factuel, même dans le conflit', description: 'Les faits, pas les émotions, surtout quand c’est tendu.' },
  { principe: 'Protéger l’équipe des dérives du client', description: 'Dire non aux demandes irréalistes ou hors périmètre.' },
  { principe: 'Protéger le client des dérives techniques', description: 'Éviter la sur-ingénierie, rester pragmatique.' },
  { principe: 'Communiquer avant que les problèmes n’arrivent', description: 'Anticiper et prévenir plutôt que gérer la crise.' },
  { principe: 'Incarner la fiabilité : on dit, on fait', description: 'Vos engagements sont votre crédibilité.' },
  { principe: 'Expliquer sans jargon', description: 'Le client n’est pas technique ; adaptez le discours.' },
  { principe: 'Anticiper plutôt que réagir', description: 'Prévoir les risques, préparer des plans B.' },
  { principe: 'Ne jamais surprendre le client', description: 'Une mauvaise nouvelle s’annonce le plus tôt possible.' },
  { principe: 'Être stable, calme et structuré', description: 'Vous êtes le point fixe de l’équipe, surtout dans la tempête.' },
]

export default function CompetencesPage() {
  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title="Compétences du chef de projet"
        lead="Un profil d’interface : autant de compétences relationnelles que techniques, et une posture qui fait la différence quand le projet tangue."
        meta={[
          { label: 'Réf.', value: `Annexe A5 · ${softSkills.length} soft skills` },
          { label: 'Hard skills', value: `${hardSkills.length}` },
          { label: 'Savoir-être', value: `${savoirEtre.length} principes` },
          { label: 'Usage', value: 'Grille d’auto-évaluation' },
        ]}
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        <section className="mb-14" aria-labelledby="soft">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="soft" className="display-narrow text-2xl">Soft skills</h2>
            <p className="label">Relationnel et posture</p>
          </div>
          <ol className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2">
            {softSkills.map((s, i) => (
              <li key={s.skill} className="flex gap-4 border-b border-rule py-3 md:odd:border-r md:odd:pr-6 md:even:pl-6">
                <span className="num mt-1 w-6 shrink-0 text-xs text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-semibold">{s.skill}</p>
                  <p className="text-sm text-ink-2">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-14" aria-labelledby="hard">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="hard" className="display-narrow text-2xl">Hard skills</h2>
            <p className="label">Technique et méthode</p>
          </div>
          <ul className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2">
            {hardSkills.map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-rule py-3 text-[0.97rem] md:odd:border-r md:odd:pr-6 md:even:pl-6">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 border border-ink" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="etre">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 id="etre" className="display-narrow text-2xl">Savoir-être</h2>
            <p className="label">Dix principes</p>
          </div>
          <ol className="border-t-2 border-ink">
            {savoirEtre.map((s, i) => (
              <li key={s.principe} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-4 md:grid-cols-[2.5rem_20rem_1fr]">
                <span className="num text-sm text-ink-3">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-semibold">{s.principe}</p>
                <p className="col-start-2 text-sm text-ink-2 md:col-start-3">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <blockquote className="mt-16 max-w-measure border-t-2 border-ink pt-6">
          <p className="display-narrow text-2xl leading-tight">« Un bon chef de projet n’est pas celui qui sait tout faire, mais celui qui sait faire faire et créer les conditions de la réussite. »</p>
          <footer className="label mt-3">Principe de la gestion de projet</footer>
        </blockquote>
      </main>

      <Footer />
    </div>
  )
}

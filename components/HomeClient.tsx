'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, RotateCcw } from 'lucide-react'
import Cartouche from '@/components/Cartouche'
import Stamp from '@/components/Stamp'
import Footer from '@/components/Footer'
import type { ModuleSummary } from '@/lib/content'
import { getQuizProgress, getCategoryScores, getOverallScore, categoryLabels, type QuizProgress } from '@/lib/quizProgress'

type Status = 'not-started' | 'in-progress' | 'completed'

const annexes = [
  { href: '/quiz', title: 'Quiz global', detail: 'Toutes les questions du cours, filtrables par thème, difficulté et format.' },
  { href: '/sprint-agence', title: 'Sprint Agence : RoadTrip Squad', detail: 'Journée immersive avec Gaspard Vasseur : brief, cadrage, équipe, périmètre, planning, et un Gantt défendable le soir.' },
  { href: '/entrainement', title: 'Terrain d’entraînement', detail: 'Vingt-six ateliers sur de vrais artefacts : mails, comptes rendus, données, devis, Slack, Discord.' },
  { href: '/mission', title: 'Mission cahier des charges', detail: 'Répondre à un appel d’offres complet, en équipe, avec jeux et scores.' },
  { href: '/evaluation', title: 'Évaluation orale', detail: 'Format de l’entretien, thèmes, critères et conseils de préparation.' },
  { href: '/lexique', title: 'Lexique', detail: 'Les termes du métier, avec recherche et filtre par importance.' },
  { href: '/competences', title: 'Compétences du chef de projet', detail: 'Soft skills, hard skills et savoir-être attendus.' },
]

export default function HomeClient({ modules }: { modules: ModuleSummary[] }) {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState<Record<string, Status>>({})
  const [lastSections, setLastSections] = useState<Record<string, number>>({})
  const [quizProgress, setQuizProgress] = useState<QuizProgress | null>(null)
  const [justCompleted, setJustCompleted] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('courseProgress')
      setProgress(saved ? JSON.parse(saved) : {})
      const ls: Record<string, number> = {}
      for (const m of modules) {
        const v = localStorage.getItem(`lastSection:${m.id}`)
        if (v !== null) ls[m.id] = Number(v)
      }
      setLastSections(ls)
      const qp = getQuizProgress()
      setQuizProgress(qp.totalQuizzes > 0 ? qp : null)
      const jc = sessionStorage.getItem('justCompleted')
      if (jc) {
        setJustCompleted(jc)
        sessionStorage.removeItem('justCompleted')
      }
    } catch {
      /* stockage indisponible : la page reste utilisable sans progression */
    }
  }, [modules])

  const totalPostes = modules.reduce((n, m) => n + m.sectionCount, 0)
  const totalQuestions = modules.reduce((n, m) => n + m.quizCount, 0)
  const completed = modules.filter((m) => progress[m.id] === 'completed').length
  const inProgress = modules.filter((m) => progress[m.id] === 'in-progress').length
  const percent = Math.round((completed / modules.length) * 100)
  const current = modules.find((m) => progress[m.id] === 'in-progress') ?? modules.find((m) => !progress[m.id])
  const today = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })

  const overallScore = mounted ? getOverallScore() : 0
  const categoryScores = mounted ? getCategoryScores() : {}

  return (
    <div className="min-h-screen">
      <Cartouche
        title="Gestion de projet web"
        lead="Onze modules, du brief client au bilan de projet. Chaque module est une ligne du dossier : ouvrez-la, faites les postes, validez le contrôle, tamponnez."
        meta={[
          { label: 'Dossier n°', value: 'GPW-2026-01' },
          { label: 'Client', value: 'Étudiant·e Ingémedia' },
          { label: 'Date', value: mounted ? today : '—' },
          { label: 'Réf.', value: `Formation · ${modules.length} modules · ${totalPostes} postes · ${totalQuestions} questions de contrôle` },
        ]}
        aside={
          current && (
            <Link href={`/module/${current.id}`} className="btn btn--primary">
              {progress[current.id] === 'in-progress' ? 'Reprendre' : 'Commencer'} : {current.title}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )
        }
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="display-narrow text-2xl">Désignation des modules</h2>
          <p className="label">Ordre conseillé de lecture</p>
        </div>

        <div>
          <table className="ledger ledger--stack">
            <thead>
              <tr>
                <th className="w-12">N°</th>
                <th>Désignation</th>
                <th className="w-24 text-right c-hide">Postes</th>
                <th className="w-24 text-right c-hide">Quiz</th>
                <th className="w-32">État</th>
                <th className="w-40 text-right">Accès</th>
              </tr>
            </thead>
            <tbody>
              {modules.map((m, i) => {
                const status: Status = progress[m.id] ?? 'not-started'
                const last = lastSections[m.id]
                const resume = status === 'in-progress' && last !== undefined
                return (
                  <tr key={m.id} className={status === 'in-progress' ? 'bg-copy-yellow/40' : ''}>
                    <td className="num text-sm font-semibold text-ink-3">{String(i + 1).padStart(2, '0')}</td>
                    <td>
                      <Link href={`/module/${m.id}`} className="font-semibold no-underline hover:underline">
                        {m.title}
                      </Link>
                      <p className="mt-0.5 text-sm text-ink-2">{m.description}</p>
                    </td>
                    <td className="num text-right text-sm c-hide">{m.sectionCount}</td>
                    <td className="num text-right text-sm c-hide">{m.quizCount}</td>
                    <td>
                      {status === 'completed' && (
                        <Stamp tone="done" size="lg" tilt={-7 + (i % 3) * 3} press={justCompleted === m.id}>
                          Validé
                        </Stamp>
                      )}
                      {status === 'in-progress' && (
                        <Stamp tone="progress" size="lg" tilt={4 - (i % 2) * 6}>
                          En cours
                        </Stamp>
                      )}
                      {status === 'not-started' && <span className="num text-ink-3" aria-label="À faire">—</span>}
                    </td>
                    <td className="text-right c-action">
                      <Link href={`/module/${m.id}`} className={`btn btn--sm whitespace-nowrap ${resume ? 'btn--stamp' : ''}`}>
                        {resume ? `Reprendre ${i + 1}.${last + 1}` : status === 'completed' ? 'Revoir' : 'Ouvrir'}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2} className="pt-5">
                  <p className="label">Total avancement</p>
                  <p className="mt-1 text-sm text-ink-2">
                    {completed} validé{completed > 1 ? 's' : ''} · {inProgress} en cours · {modules.length - completed - inProgress} à faire
                  </p>
                </td>
                <td colSpan={4} className="pt-5 text-right">
                  <span className="num text-5xl font-bold leading-none">{mounted ? percent : 0}</span>
                  <span className="num ml-1 text-2xl text-ink-3">%</span>
                  <div className="ruler mt-3 ml-auto max-w-xs">
                    <div className="ruler__fill" style={{ width: `${mounted ? percent : 0}%` }} />
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {quizProgress && (
          <section className="mt-16" aria-labelledby="releve">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="releve" className="display-narrow text-2xl">Relevé de notes</h2>
              <p className="label">
                {quizProgress.totalQuizzes} quiz passé{quizProgress.totalQuizzes > 1 ? 's' : ''} · moyenne <span className="num">{overallScore} %</span>
              </p>
            </div>
            <div className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2">
              {Object.entries(categoryScores).map(([cat, score]) => (
                <div key={cat} className="flex items-center gap-4 border-b border-rule py-3 md:odd:border-r md:odd:pr-6 md:even:pl-6">
                  <span className="w-40 shrink-0 text-sm">{categoryLabels[cat] || cat}</span>
                  <div className="ruler ruler--stamp flex-1">
                    <div className="ruler__fill" style={{ width: `${score}%` }} />
                  </div>
                  <span className="num w-12 text-right text-sm font-semibold">{score} %</span>
                </div>
              ))}
            </div>
            {quizProgress.wrongQuestionIds.length > 0 && (
              <Link href="/quiz" className="btn btn--sm mt-5">
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                {quizProgress.wrongQuestionIds.length} question{quizProgress.wrongQuestionIds.length > 1 ? 's' : ''} à revoir
              </Link>
            )}
          </section>
        )}

        <section className="mt-16" aria-labelledby="annexes">
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2 id="annexes" className="display-narrow text-2xl">Annexes du dossier</h2>
            <p className="label">Outils et ressources</p>
          </div>
          <ul className="grid grid-cols-1 border-t-2 border-ink md:grid-cols-2 lg:grid-cols-3">
            {annexes.map((a, i) => (
              <li key={a.href} className="border-b border-rule md:[&:nth-child(odd)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r">
                <Link href={a.href} className="group flex h-full flex-col justify-between gap-6 p-5 no-underline hover:bg-paper-2">
                  <div>
                    <span className="num text-xs text-ink-3">A{i + 1}</span>
                    <h3 className="display-narrow mt-2 text-xl">{a.title}</h3>
                    <p className="mt-2 text-sm text-ink-2">{a.detail}</p>
                  </div>
                  <span className="label inline-flex items-center gap-2 text-ink group-hover:text-stamp">
                    Ouvrir <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  )
}

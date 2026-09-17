'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check, ClipboardCheck } from 'lucide-react'
import Cartouche from '@/components/Cartouche'
import Stamp from '@/components/Stamp'
import Footer from '@/components/Footer'
import CasPratique from '@/components/CasPratique'
import QuizWithCorrection from '@/components/QuizWithCorrection'
import { getInteractives } from '@/components/interactive/registry'
import type { PublicModule } from '@/lib/content'

interface Props {
  module: PublicModule
  index: number
  total: number
  next: { id: string; title: string } | null
}

type Status = 'not-started' | 'in-progress' | 'completed'

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

/** Le HTML injecté provient exclusivement des fichiers data/*.ts du dépôt. */
export default function ModuleClient({ module: mod, index, total, next }: Props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [done, setDone] = useState<number[]>([])
  const [status, setStatus] = useState<Status>('not-started')
  const contentRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)

  const num = String(index + 1).padStart(2, '0')
  const section = mod.sections[current]
  const interactives = useMemo(() => getInteractives(section.id), [section.id])
  const extraCases = section.extraCases ?? []

  useEffect(() => {
    setMounted(true)
    const progress = readJSON<Record<string, Status>>('courseProgress', {})
    const st = progress[mod.id] ?? 'not-started'
    if (st === 'not-started') {
      progress[mod.id] = 'in-progress'
      try {
        localStorage.setItem('courseProgress', JSON.stringify(progress))
      } catch {
        /* ignore */
      }
      setStatus('in-progress')
    } else {
      setStatus(st)
    }
    setDone(readJSON<number[]>(`sectionProgress:${mod.id}`, []))
    const last = Number(localStorage.getItem(`lastSection:${mod.id}`) ?? 0)
    if (Number.isFinite(last) && last > 0 && last < mod.sections.length) setCurrent(last)
  }, [mod.id, mod.sections.length])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem(`lastSection:${mod.id}`, String(current))
    } catch {
      /* ignore */
    }
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [current, mounted, mod.id])

  const markDone = useCallback(
    (i: number) => {
      setDone((d) => {
        if (d.includes(i)) return d
        const nd = [...d, i]
        try {
          localStorage.setItem(`sectionProgress:${mod.id}`, JSON.stringify(nd))
        } catch {
          /* ignore */
        }
        return nd
      })
    },
    [mod.id],
  )

  const goTo = (i: number) => {
    if (i < 0 || i >= mod.sections.length) return
    setCurrent(i)
  }

  const nextPoste = () => {
    markDone(current)
    goTo(current + 1)
  }

  const closeDossier = () => {
    markDone(current)
    const progress = readJSON<Record<string, Status>>('courseProgress', {})
    progress[mod.id] = 'completed'
    try {
      localStorage.setItem('courseProgress', JSON.stringify(progress))
      sessionStorage.setItem('justCompleted', mod.id)
    } catch {
      /* ignore */
    }
    setStatus('completed')
    router.push('/')
  }

  const isLast = current === mod.sections.length - 1
  const doneCount = done.length
  const percent = Math.round((doneCount / mod.sections.length) * 100)

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/', label: 'Retour au dossier' }}
        title={mod.title}
        lead={mod.description}
        meta={[
          { label: 'Réf.', value: `Module ${num} / ${String(total).padStart(2, '0')}` },
          { label: 'Postes', value: mounted ? `${doneCount} / ${mod.sections.length} terminés` : `${mod.sections.length}` },
          { label: 'Contrôle', value: `${mod.sections.reduce((n, s) => n + (s.quiz?.length ?? 0), 0)} questions` },
          {
            label: 'État',
            value:
              status === 'completed' ? (
                <Stamp tone="done" size="lg" tilt={-5}>Validé</Stamp>
              ) : status === 'in-progress' ? (
                <Stamp tone="progress" size="lg" tilt={3}>En cours</Stamp>
              ) : (
                <span className="num text-ink-3">—</span>
              ),
          },
        ]}
      />

      <div className="mx-auto grid max-w-page grid-cols-1 gap-x-10 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)] lg:px-8 lg:py-12">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <p className="label mb-3">Postes du module</p>
          <ol className="border-t-2 border-ink">
            {mod.sections.map((s, i) => {
              const active = i === current
              const isDone = done.includes(i)
              return (
                <li key={s.id} className="border-b border-rule">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={active ? 'step' : undefined}
                    className={`flex w-full items-start gap-3 px-2 py-3 text-left transition-colors hover:bg-paper-2 ${active ? 'bg-ink text-paper hover:bg-ink' : ''}`}
                  >
                    <span className={`num mt-0.5 text-xs font-semibold ${active ? 'text-paper/80' : 'text-ink-3'}`}>
                      {num}.{i + 1}
                    </span>
                    <span className="flex-1 text-[0.95rem] font-semibold leading-snug">{s.title}</span>
                    {isDone && <Check className={`mt-0.5 h-4 w-4 shrink-0 ${active ? 'text-paper' : 'text-stamp'}`} aria-label="Poste terminé" />}
                  </button>
                </li>
              )
            })}
          </ol>
          <div className="mt-4 hidden lg:block">
            <div className="ruler">
              <div className="ruler__fill" style={{ width: `${mounted ? percent : 0}%` }} />
            </div>
            <p className="num mt-2 text-xs text-ink-3">
              {doneCount} / {mod.sections.length} postes
            </p>
          </div>
        </aside>

        <main ref={contentRef} className="min-w-0 scroll-mt-6">
          {interactives.before.length > 0 && (
            <div className="mb-10 max-w-measure">
              {interactives.before.map((Cmp, i) => (
                <Cmp key={`${section.id}-b${i}`} />
              ))}
            </div>
          )}

          <article className="doc" dangerouslySetInnerHTML={{ __html: section.content }} />

          {interactives.after.length > 0 && (
            <div className="mt-10 max-w-measure">
              {interactives.after.map((Cmp, i) => (
                <Cmp key={`${section.id}-a${i}`} />
              ))}
            </div>
          )}

          {section.casePratique && (
            <div className="mt-10 max-w-measure">
              <CasPratique
                moduleId={mod.id}
                sectionId={section.id}
                title={section.casePratique.title}
                description={section.casePratique.description}
                exercice={section.casePratique.exercice}
                hasCorrection={section.casePratique.hasCorrection}
              />
            </div>
          )}

          {extraCases.map((c, i) => (
            <div key={`${section.id}-case-${i + 1}`} className="mt-10 max-w-measure">
              <CasPratique
                moduleId={mod.id}
                sectionId={section.id}
                caseIndex={i + 1}
                title={c.title}
                description={c.description}
                exercice={c.exercice}
                hasCorrection={c.hasCorrection}
              />
            </div>
          ))}

          {section.quiz && section.quiz.length > 0 && (
            <div className="mt-12 max-w-measure">
              <QuizWithCorrection questions={section.quiz} sectionTitle={section.title} onCorrected={() => markDone(current)} />
            </div>
          )}

          <nav className="mt-12 flex max-w-measure flex-wrap items-center justify-between gap-3 border-t-2 border-ink pt-6" aria-label="Navigation entre postes">
            <button type="button" className="btn" onClick={() => goTo(current - 1)} disabled={current === 0}>
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Poste précédent
            </button>
            {isLast ? (
              <button type="button" className="btn btn--primary" onClick={closeDossier}>
                <ClipboardCheck className="h-4 w-4" aria-hidden="true" />
                Clôturer le module
              </button>
            ) : (
              <button type="button" className="btn btn--primary" onClick={nextPoste}>
                Poste suivant
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </nav>

          {isLast && next && (
            <p className="mt-4 max-w-measure text-sm text-ink-2">
              Module suivant :{' '}
              <Link href={`/module/${next.id}`} className="font-semibold">
                {next.title}
              </Link>
            </p>
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

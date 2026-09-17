'use client'

import { useEffect, useMemo, useState } from 'react'
import { Eye, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from '@/data/modules'
import { shuffleArray } from '@/lib/shuffleUtils'
import Stamp from '@/components/Stamp'

interface QuizWithCorrectionProps {
  questions: QuizQuestion[]
  sectionTitle: string
  onCorrected?: (score: number, total: number) => void
}

interface Prepared extends QuizQuestion {
  order: number[]
}

const difficultyLabel: Record<string, string> = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' }

/**
 * Contrôle de poste : toutes les questions d'une section, correction en un coup.
 * Les réponses sont mélangées au montage (le biais « la bonne réponse est en B »
 * disparaît) ; Vrai/Faux garde son ordre.
 */
export default function QuizWithCorrection({ questions, sectionTitle, onCorrected }: QuizWithCorrectionProps) {
  const [prepared, setPrepared] = useState<Prepared[]>(() => questions.map((q) => ({ ...q, order: q.options.map((_, i) => i) })))
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [showCorrection, setShowCorrection] = useState(false)

  useEffect(() => {
    setPrepared(
      questions.map((q) => {
        const base = q.options.map((_, i) => i)
        const order = q.type === 'true-false' ? base : shuffleArray(base)
        return { ...q, order }
      }),
    )
    setAnswers({})
    setShowCorrection(false)
  }, [questions])

  const allAnswered = prepared.every((_, i) => answers[i] !== undefined && answers[i] !== null)

  const score = useMemo(
    () => prepared.reduce((n, q, i) => n + (answers[i] === q.correctAnswer ? 1 : 0), 0),
    [prepared, answers],
  )

  const choose = (qi: number, original: number) => {
    if (showCorrection) return
    setAnswers((a) => ({ ...a, [qi]: original }))
  }

  const reveal = () => {
    setShowCorrection(true)
    onCorrected?.(score, prepared.length)
  }

  const restart = () => {
    setAnswers({})
    setShowCorrection(false)
    setPrepared((p) => p.map((q) => ({ ...q, order: q.type === 'true-false' ? q.order : shuffleArray(q.order) })))
  }

  const percent = prepared.length ? Math.round((score / prepared.length) * 100) : 0

  return (
    <section className="border border-ink bg-white" aria-labelledby="controle">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-ink bg-paper-2 px-5 py-4">
        <div>
          <h3 id="controle" className="display-narrow text-xl">
            Contrôle du poste
          </h3>
          <p className="mt-1 text-sm text-ink-2">{sectionTitle}</p>
        </div>
        <p className="num text-sm text-ink-2">
          {prepared.length} question{prepared.length > 1 ? 's' : ''}
        </p>
      </div>

      <ol className="divide-y divide-rule">
        {prepared.map((q, qi) => {
          const selected = answers[qi]
          const isCorrect = selected === q.correctAnswer
          const blank = q.type === 'fill-blank'
          return (
            <li key={q.id} className="px-5 py-6">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="num text-xs font-semibold text-ink-3">Q{String(qi + 1).padStart(2, '0')}</span>
                {q.difficulty && <span className={`quiz-difficulty-${q.difficulty}`}>{difficultyLabel[q.difficulty]}</span>}
                {q.type === 'true-false' && <span className="quiz-category-badge">Vrai / Faux</span>}
                {q.type === 'scenario' && <span className="quiz-category-badge">Scénario</span>}
                {blank && <span className="quiz-category-badge">Texte à trous</span>}
                {showCorrection && (
                  <span className="ml-auto">
                    {isCorrect ? (
                      <Stamp tone="done" tilt={-4} press>
                        Juste
                      </Stamp>
                    ) : (
                      <Stamp tone="red" tilt={3} press>
                        Faux
                      </Stamp>
                    )}
                  </span>
                )}
              </div>

              {q.scenarioContext && (
                <div className="doc mb-4">
                  <div className="quiz-scenario-context">{q.scenarioContext}</div>
                </div>
              )}

              <p className="mb-4 text-[1.05rem] font-semibold leading-snug">
                {blank && q.question.includes('___')
                  ? q.question.split('___').map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="quiz-fill-blank-highlight">{selected !== undefined && selected !== null ? q.options[selected] : '…'}</span>
                        )}
                      </span>
                    ))
                  : q.question}
              </p>

              {q.type === 'true-false' ? (
                <div className="flex gap-3">
                  {q.order.map((orig) => {
                    const isSel = selected === orig
                    const isRight = orig === q.correctAnswer
                    let cls = 'quiz-true-false-btn'
                    if (isSel && !showCorrection) cls += ' selected'
                    if (showCorrection && isRight) cls += ' correct'
                    if (showCorrection && isSel && !isRight) cls += ' incorrect'
                    return (
                      <button key={orig} type="button" className={cls} onClick={() => choose(qi, orig)} disabled={showCorrection} aria-pressed={isSel}>
                        {q.options[orig]}
                      </button>
                    )
                  })}
                </div>
              ) : blank ? (
                <div className="flex flex-wrap gap-2">
                  {q.order.map((orig) => {
                    const isSel = selected === orig
                    const isRight = orig === q.correctAnswer
                    let cls = 'quiz-fill-blank-chip'
                    if (isSel) cls += ' selected'
                    return (
                      <button
                        key={orig}
                        type="button"
                        className={cls}
                        onClick={() => choose(qi, orig)}
                        disabled={showCorrection}
                        aria-pressed={isSel}
                        style={showCorrection && isRight ? { outline: '2px solid var(--stamp)', outlineOffset: 2 } : undefined}
                      >
                        {q.options[orig]}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div>
                  {q.order.map((orig, pos) => {
                    const isSel = selected === orig
                    const isRight = orig === q.correctAnswer
                    let cls = 'quiz-option'
                    if (isSel && !showCorrection) cls += ' selected'
                    if (showCorrection && isRight) cls += ' correct'
                    if (showCorrection && isSel && !isRight) cls += ' incorrect'
                    return (
                      <button key={orig} type="button" className={cls} onClick={() => choose(qi, orig)} disabled={showCorrection} aria-pressed={isSel}>
                        <span className="quiz-option__index">{String.fromCharCode(65 + pos)}</span>
                        <span className="quiz-option__text flex-1 text-left">{q.options[orig]}</span>
                      </button>
                    )
                  })}
                </div>
              )}

              {showCorrection && (
                <div className="mt-4 border border-dashed border-ink bg-paper-2 px-4 py-3 text-[0.97rem]">
                  <span className="label mr-2 text-ink">Explication</span>
                  {q.explanation}
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink px-5 py-4">
        <div>
          {showCorrection ? (
            <p className="flex items-baseline gap-2">
              <span className="label">Score</span>
              <span className="num text-3xl font-bold leading-none">
                {score}/{prepared.length}
              </span>
              <span className={`num text-sm ${percent >= 80 ? 'text-stamp' : percent >= 50 ? 'text-ink-2' : 'text-red-ink'}`}>{percent} %</span>
            </p>
          ) : (
            <p className="text-sm text-ink-2">{allAnswered ? 'Toutes les questions ont une réponse.' : 'Répondez à toutes les questions pour voir la correction.'}</p>
          )}
        </div>
        {showCorrection ? (
          <button type="button" className="btn" onClick={restart}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Recommencer
          </button>
        ) : (
          <button type="button" className="btn btn--primary" onClick={reveal} disabled={!allAnswered}>
            <Eye className="h-4 w-4" aria-hidden="true" />
            Voir la correction
          </button>
        )}
      </div>
    </section>
  )
}

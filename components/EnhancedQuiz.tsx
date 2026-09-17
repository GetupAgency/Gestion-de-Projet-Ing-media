'use client'

import { useState, useCallback } from 'react'
import { Play, RotateCcw, BookOpen, Zap } from 'lucide-react'
import type { QuizQuestion, QuizCategory, DifficultyLevel, QuestionType } from '@/data/modules'
import { selectFilteredRandomQuestions } from '@/lib/shuffleUtils'
import { updateQuizProgress, type QuizResult, categoryLabels } from '@/lib/quizProgress'
import Stamp from '@/components/Stamp'

interface EnhancedQuizProps {
  questions: QuizQuestion[]
  onComplete: () => void
}

const difficultyPoints: Record<string, number> = { facile: 1, moyen: 2, difficile: 3 }
const difficultyLabels: Record<string, string> = { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' }
const typeLabels: Record<string, string> = { mcq: 'QCM', 'true-false': 'Vrai / Faux', 'fill-blank': 'Texte à trous', scenario: 'Scénario' }

type Phase = 'config' | 'quiz' | 'results'

/** Quiz global : configuration, passage question par question, relevé de résultats. */
export default function EnhancedQuiz({ questions, onComplete }: EnhancedQuizProps) {
  const [selectedCategories, setSelectedCategories] = useState<QuizCategory[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyLevel[]>([])
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([])
  const [questionCount, setQuestionCount] = useState(20)

  const [phase, setPhase] = useState<Phase>('config')
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [scorePopup, setScorePopup] = useState<{ show: boolean; points: number }>({ show: false, points: 0 })
  const [results, setResults] = useState<QuizResult[]>([])
  const [wrongAnswers, setWrongAnswers] = useState<{ question: QuizQuestion; selectedAnswer: number }[]>([])

  const availableCategories = Array.from(new Set(questions.map((q) => q.category || 'gestion-projet'))) as QuizCategory[]
  const availableDifficulties = Array.from(new Set(questions.map((q) => q.difficulty || 'moyen'))) as DifficultyLevel[]
  const availableTypes = Array.from(new Set(questions.map((q) => q.type || 'mcq'))) as QuestionType[]

  const filteredCount = questions.filter((q) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(q.category || 'gestion-projet')) return false
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(q.difficulty || 'moyen')) return false
    if (selectedTypes.length > 0 && !selectedTypes.includes(q.type || 'mcq')) return false
    return true
  }).length

  const toggle = <T,>(list: T[], v: T, set: (f: (p: T[]) => T[]) => void) => set((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]))

  const resetRun = (qs: QuizQuestion[]) => {
    setQuizQuestions(qs)
    setPhase('quiz')
    setCurrentQuestion(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setResults([])
    setWrongAnswers([])
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const startQuiz = () => {
    resetRun(
      selectFilteredRandomQuestions(questions, questionCount, {
        categories: selectedCategories.length > 0 ? selectedCategories : undefined,
        difficulties: selectedDifficulties.length > 0 ? selectedDifficulties : undefined,
        types: selectedTypes.length > 0 ? selectedTypes : undefined,
      }),
    )
  }

  const question = quizQuestions[currentQuestion]
  const questionType = question?.type || 'mcq'
  const questionDifficulty = question?.difficulty || 'moyen'
  const questionCategory = question?.category || 'gestion-projet'

  const handleValidate = useCallback(() => {
    if (selectedAnswer === null) return
    setShowExplanation(true)
    const isCorrect = selectedAnswer === question.correctAnswer
    const points = isCorrect ? difficultyPoints[questionDifficulty] : 0
    if (isCorrect) {
      setScore((prev) => prev + points)
      setStreak((prev) => {
        const s = prev + 1
        setMaxStreak((m) => Math.max(m, s))
        return s
      })
      setScorePopup({ show: true, points })
      setTimeout(() => setScorePopup({ show: false, points: 0 }), 900)
    } else {
      setStreak(0)
      setWrongAnswers((prev) => [...prev, { question, selectedAnswer }])
    }
    setResults((prev) => [...prev, { questionId: question.id, correct: isCorrect, category: question.category, difficulty: question.difficulty }])
  }, [selectedAnswer, question, questionDifficulty])

  const totalPossible = () => quizQuestions.reduce((sum, q) => sum + difficultyPoints[q.difficulty || 'moyen'], 0)
  const scorePercent = () => (totalPossible() > 0 ? Math.round((score / totalPossible()) * 100) : 0)

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((p) => p + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      updateQuizProgress(results, scorePercent())
      setPhase('results')
    }
  }

  // ================= CONFIG =================
  if (phase === 'config') {
    const max = Math.max(5, Math.min(50, filteredCount))
    return (
      <div className="border border-ink bg-white">
        <div className="border-b border-ink bg-paper-2 px-6 py-5">
          <h2 className="display-narrow text-2xl">Composez votre quiz</h2>
          <p className="num mt-2 text-sm text-ink-2">
            {questions.length} questions au catalogue · {filteredCount} correspondent à vos filtres
          </p>
        </div>

        <div className="divide-y divide-rule">
          <div className="px-6 py-5" role="group">
            <p className="label mb-3">Thèmes (tous si aucune sélection)</p>
            <div className="flex flex-wrap gap-2">
              {availableCategories.map((cat) => (
                <button key={cat} type="button" className="chip" aria-pressed={selectedCategories.includes(cat)} onClick={() => toggle(selectedCategories, cat, setSelectedCategories)}>
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-5" role="group">
            <p className="label mb-3">Difficulté (toutes si aucune sélection)</p>
            <div className="flex flex-wrap gap-2">
              {availableDifficulties.map((diff) => (
                <button key={diff} type="button" className="chip" aria-pressed={selectedDifficulties.includes(diff)} onClick={() => toggle(selectedDifficulties, diff, setSelectedDifficulties)}>
                  {difficultyLabels[diff]} <span className="num text-xs opacity-70">{difficultyPoints[diff]} pt{difficultyPoints[diff] > 1 ? 's' : ''}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-5" role="group">
            <p className="label mb-3">Formats (tous si aucune sélection)</p>
            <div className="flex flex-wrap gap-2">
              {availableTypes.map((type) => (
                <button key={type} type="button" className="chip" aria-pressed={selectedTypes.includes(type)} onClick={() => toggle(selectedTypes, type, setSelectedTypes)}>
                  {typeLabels[type]}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-5">
            <label htmlFor="qcount" className="label">Quantité</label>
            <div className="mt-2 flex items-center gap-4">
              <input id="qcount" type="range" min={5} max={max} value={Math.min(questionCount, max)} onChange={(e) => setQuestionCount(Number(e.target.value))} className="slider" />
              <span className="num w-16 text-right text-2xl font-bold">{Math.min(questionCount, max)}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-ink px-6 py-5">
          <p className="text-sm text-ink-2">Questions et réponses mélangées à chaque passage.</p>
          <button type="button" onClick={startQuiz} disabled={filteredCount < 1} className="btn btn--primary">
            <Play className="h-4 w-4" aria-hidden="true" />
            Commencer
          </button>
        </div>
      </div>
    )
  }

  // ================= RESULTS =================
  if (phase === 'results') {
    const pct = scorePercent()
    const correctCount = results.filter((r) => r.correct).length
    const catResults: Record<string, { correct: number; total: number }> = {}
    results.forEach((r) => {
      const cat = r.category || 'gestion-projet'
      catResults[cat] ??= { correct: 0, total: 0 }
      catResults[cat].total += 1
      if (r.correct) catResults[cat].correct += 1
    })
    const message = pct === 100 ? 'Sans faute. Le dossier est propre.' : pct >= 80 ? 'Solide. Quelques points à consolider et c’est plié.' : pct >= 60 ? 'Correct. Les explications ci-dessous valent une relecture.' : 'Le relevé est honnête : rejouez sur les questions ratées, c’est là que ça s’apprend.'

    return (
      <div className="border border-ink bg-white">
        <div className="grid grid-cols-1 border-b-2 border-ink md:grid-cols-[1fr_auto]">
          <div className="px-6 py-6">
            <p className="label">Relevé de résultats</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="num display text-6xl leading-none">{score}</span>
              <span className="num text-xl text-ink-3">/ {totalPossible()} pts</span>
              <span className="num text-lg">
                {correctCount}/{quizQuestions.length} justes · {pct} %
              </span>
            </div>
            <p className="mt-3 text-[1.02rem]">{message}</p>
            {maxStreak > 1 && (
              <p className="mt-3">
                <span className="quiz-streak">
                  <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Meilleure série : {maxStreak} d’affilée
                </span>
              </p>
            )}
          </div>
          <div className="flex items-center justify-center border-t border-ink px-10 py-6 md:border-l md:border-t-0">
            {pct >= 80 ? (
              <Stamp tone="done" size="xl" tilt={-8} press>Validé</Stamp>
            ) : pct >= 60 ? (
              <Stamp tone="ink" size="xl" tilt={-8} press>À revoir</Stamp>
            ) : (
              <Stamp tone="red" size="xl" tilt={-8} press>Insuffisant</Stamp>
            )}
          </div>
        </div>

        {Object.keys(catResults).length > 0 && (
          <div className="border-b border-rule px-6 py-5">
            <p className="label mb-3">Par thème</p>
            <div className="space-y-2">
              {Object.entries(catResults).map(([cat, d]) => {
                const p = Math.round((d.correct / d.total) * 100)
                return (
                  <div key={cat} className="flex items-center gap-4 text-sm">
                    <span className="w-40 shrink-0">{categoryLabels[cat] || cat}</span>
                    <div className="category-progress-bar flex-1">
                      <div className="category-progress-fill" style={{ width: `${p}%`, background: p < 50 ? 'var(--red)' : undefined }} />
                    </div>
                    <span className="num w-20 text-right">
                      {d.correct}/{d.total} · {p} %
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {wrongAnswers.length > 0 && (
          <div className="border-b border-rule px-6 py-5">
            <p className="label mb-3">Questions à revoir ({wrongAnswers.length})</p>
            <ol className="max-h-96 space-y-3 overflow-y-auto pr-2">
              {wrongAnswers.map(({ question: q, selectedAnswer: sa }, i) => (
                <li key={i} className="border border-ink p-4 text-sm">
                  <p className="font-semibold">{q.question}</p>
                  <p className="mt-2 text-red-ink">
                    <span className="label mr-2 text-red-ink">Votre réponse</span>
                    <span className="line-through">{q.options[sa]}</span>
                  </p>
                  <p className="mt-1 text-stamp">
                    <span className="label mr-2 text-stamp">Bonne réponse</span>
                    {q.options[q.correctAnswer]}
                  </p>
                  <p className="mt-2 border-t border-dashed border-ink pt-2 text-ink-2">{q.explanation}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="flex flex-wrap gap-3 px-6 py-5">
          <button type="button" onClick={() => setPhase('config')} className="btn btn--primary">
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Nouveau quiz
          </button>
          {wrongAnswers.length > 0 && (
            <button type="button" onClick={() => resetRun(wrongAnswers.map((w) => w.question))} className="btn btn--stamp">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Rejouer les erreurs ({wrongAnswers.length})
            </button>
          )}
          <button type="button" onClick={onComplete} className="btn">
            Retour à l’accueil
          </button>
        </div>
      </div>
    )
  }

  // ================= QUIZ =================
  if (!question) return null
  const isCorrectOpt = (i: number) => i === question.correctAnswer
  const optionClass = (base: string, i: number) => {
    let c = base
    if (selectedAnswer === i && !showExplanation) c += ' selected'
    if (showExplanation && isCorrectOpt(i)) c += ' correct'
    if (showExplanation && selectedAnswer === i && !isCorrectOpt(i)) c += ' incorrect'
    return c
  }

  return (
    <div className="relative border border-ink bg-white">
      {scorePopup.show && (
        <div className="quiz-score-popup correct" style={{ right: '1.5rem', top: '1rem' }}>
          +{scorePopup.points}
        </div>
      )}

      <div className="border-b border-ink bg-paper-2 px-6 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="num text-sm font-bold">
            Q{String(currentQuestion + 1).padStart(2, '0')} / {quizQuestions.length}
          </span>
          <span className={`quiz-difficulty-${questionDifficulty}`}>{difficultyLabels[questionDifficulty]}</span>
          <span className="quiz-category-badge">{categoryLabels[questionCategory] || questionCategory}</span>
          <span className="quiz-category-badge">{typeLabels[questionType]}</span>
          <span className="ml-auto flex items-center gap-3">
            {streak >= 3 && (
              <span className="quiz-streak">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" /> {streak} de suite
              </span>
            )}
            <span className="num font-bold">{score} pts</span>
          </span>
        </div>
        <div className="ruler mt-3 h-2">
          <div className="ruler__fill" style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }} />
        </div>
      </div>

      <div className="px-6 py-6">
        {questionType === 'scenario' && question.scenarioContext && (
          <div className="doc mb-5">
            <div className="quiz-scenario-context">{question.scenarioContext}</div>
          </div>
        )}

        <h3 className="mb-6 text-[1.15rem] font-semibold leading-snug">
          {questionType === 'fill-blank'
            ? question.question.split('_____').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="quiz-fill-blank-highlight">{showExplanation ? question.options[question.correctAnswer] : selectedAnswer !== null ? question.options[selectedAnswer] : '…'}</span>}
                </span>
              ))
            : question.question}
        </h3>

        {questionType === 'true-false' ? (
          <div className="flex gap-3">
            {question.options.map((option, i) => (
              <button key={i} type="button" onClick={() => !showExplanation && setSelectedAnswer(i)} className={optionClass('quiz-true-false-btn', i)} disabled={showExplanation} aria-pressed={selectedAnswer === i}>
                {option}
              </button>
            ))}
          </div>
        ) : questionType === 'fill-blank' ? (
          <div className="flex flex-wrap gap-2">
            {question.options.map((option, i) => (
              <button
                key={i}
                type="button"
                onClick={() => !showExplanation && setSelectedAnswer(i)}
                className={`quiz-fill-blank-chip ${selectedAnswer === i && !showExplanation ? 'selected' : ''}`}
                style={showExplanation && isCorrectOpt(i) ? { outline: '2px solid var(--stamp)', outlineOffset: 2 } : showExplanation && selectedAnswer === i ? { outline: '2px solid var(--red)', outlineOffset: 2, textDecoration: 'line-through' } : undefined}
                disabled={showExplanation}
                aria-pressed={selectedAnswer === i}
              >
                {option}
              </button>
            ))}
          </div>
        ) : (
          <div>
            {question.options.map((option, i) => (
              <button key={i} type="button" onClick={() => !showExplanation && setSelectedAnswer(i)} className={optionClass('quiz-option', i)} disabled={showExplanation} aria-pressed={selectedAnswer === i}>
                <span className="quiz-option__index">{String.fromCharCode(65 + i)}</span>
                <span className="quiz-option__text flex-1 text-left">{option}</span>
              </button>
            ))}
          </div>
        )}

        {showExplanation && (
          <div className="mt-5 flex flex-wrap items-start gap-4 border border-dashed border-ink bg-paper-2 px-4 py-3 text-[0.97rem]">
            <span className="shrink-0">
              {selectedAnswer === question.correctAnswer ? (
                <Stamp tone="done" tilt={-5} press>Juste</Stamp>
              ) : (
                <Stamp tone="red" tilt={4} press>Faux</Stamp>
              )}
            </span>
            <p className="flex-1">{question.explanation}</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t-2 border-ink px-6 py-4">
        <span className="num text-sm text-ink-3">
          {difficultyLabels[questionDifficulty]} · {difficultyPoints[questionDifficulty]} pt{difficultyPoints[questionDifficulty] > 1 ? 's' : ''}
        </span>
        {!showExplanation ? (
          <button type="button" onClick={handleValidate} disabled={selectedAnswer === null} className="btn btn--primary">
            Valider
          </button>
        ) : (
          <button type="button" onClick={handleNext} className="btn btn--primary">
            {currentQuestion < quizQuestions.length - 1 ? 'Question suivante' : 'Voir le relevé'}
          </button>
        )}
      </div>
    </div>
  )
}

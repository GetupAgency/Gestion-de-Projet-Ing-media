'use client'

import { useState, useCallback, useEffect } from 'react'
import { CheckCircle, XCircle, Award, Filter, Play, RotateCcw, BookOpen, Zap, Trophy, Target } from 'lucide-react'
import { QuizQuestion, QuizCategory, DifficultyLevel, QuestionType } from '@/data/modules'
import { selectFilteredRandomQuestions } from '@/lib/shuffleUtils'
import { updateQuizProgress, QuizResult, categoryLabels } from '@/lib/quizProgress'

interface EnhancedQuizProps {
  questions: QuizQuestion[]
  onComplete: () => void
}

const difficultyPoints: Record<string, number> = {
  facile: 1,
  moyen: 2,
  difficile: 3
}

const difficultyLabels: Record<string, string> = {
  facile: 'Facile',
  moyen: 'Moyen',
  difficile: 'Difficile'
}

const typeLabels: Record<string, string> = {
  mcq: 'QCM',
  'true-false': 'Vrai/Faux',
  'fill-blank': 'Texte à trous',
  scenario: 'Scénario'
}

type Phase = 'config' | 'quiz' | 'results'

export default function EnhancedQuiz({ questions, onComplete }: EnhancedQuizProps) {
  // Config state
  const [selectedCategories, setSelectedCategories] = useState<QuizCategory[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<DifficultyLevel[]>([])
  const [selectedTypes, setSelectedTypes] = useState<QuestionType[]>([])
  const [questionCount, setQuestionCount] = useState(20)

  // Quiz state
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

  // Available options from the question pool
  const availableCategories = [...new Set(questions.map(q => q.category || 'gestion-projet'))] as QuizCategory[]
  const availableDifficulties = [...new Set(questions.map(q => q.difficulty || 'moyen'))] as DifficultyLevel[]
  const availableTypes = [...new Set(questions.map(q => q.type || 'mcq'))] as QuestionType[]

  const filteredCount = questions.filter(q => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(q.category || 'gestion-projet')) return false
    if (selectedDifficulties.length > 0 && !selectedDifficulties.includes(q.difficulty || 'moyen')) return false
    if (selectedTypes.length > 0 && !selectedTypes.includes(q.type || 'mcq')) return false
    return true
  }).length

  const toggleCategory = (cat: QuizCategory) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const toggleDifficulty = (diff: DifficultyLevel) => {
    setSelectedDifficulties(prev =>
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    )
  }

  const toggleType = (type: QuestionType) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const startQuiz = () => {
    const selected = selectFilteredRandomQuestions(questions, questionCount, {
      categories: selectedCategories.length > 0 ? selectedCategories : undefined,
      difficulties: selectedDifficulties.length > 0 ? selectedDifficulties : undefined,
      types: selectedTypes.length > 0 ? selectedTypes : undefined
    })
    setQuizQuestions(selected)
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

  const question = quizQuestions[currentQuestion]
  const questionType = question?.type || 'mcq'
  const questionDifficulty = question?.difficulty || 'moyen'
  const questionCategory = question?.category || 'gestion-projet'

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleValidate = useCallback(() => {
    if (selectedAnswer === null) return
    setShowExplanation(true)

    const isCorrect = selectedAnswer === question.correctAnswer
    const points = isCorrect ? difficultyPoints[questionDifficulty] : 0

    if (isCorrect) {
      setScore(prev => prev + points)
      setStreak(prev => {
        const newStreak = prev + 1
        setMaxStreak(current => Math.max(current, newStreak))
        return newStreak
      })
      setScorePopup({ show: true, points })
      setTimeout(() => setScorePopup({ show: false, points: 0 }), 1000)
    } else {
      setStreak(0)
      setWrongAnswers(prev => [...prev, { question, selectedAnswer }])
    }

    setResults(prev => [...prev, {
      questionId: question.id,
      correct: isCorrect,
      category: question.category,
      difficulty: question.difficulty
    }])
  }, [selectedAnswer, question, questionDifficulty])

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      // Calculate final score
      const totalPossible = quizQuestions.reduce((sum, q) => sum + difficultyPoints[q.difficulty || 'moyen'], 0)
      const scorePercent = totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0
      updateQuizProgress(results, scorePercent)
      setPhase('results')
    }
  }

  const getScorePercent = () => {
    const totalPossible = quizQuestions.reduce((sum, q) => sum + difficultyPoints[q.difficulty || 'moyen'], 0)
    return totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0
  }

  const getCorrectCount = () => results.filter(r => r.correct).length

  const getCategoryResults = () => {
    const catResults: Record<string, { correct: number; total: number }> = {}
    results.forEach(r => {
      const cat = r.category || 'gestion-projet'
      if (!catResults[cat]) catResults[cat] = { correct: 0, total: 0 }
      catResults[cat].total += 1
      if (r.correct) catResults[cat].correct += 1
    })
    return catResults
  }

  // ========== CONFIG SCREEN ==========
  if (phase === 'config') {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Filter className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Configurez votre quiz</h2>
          <p className="text-gray-600">{questions.length} questions disponibles, {filteredCount} correspondent à vos filtres</p>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Catégories (toutes si aucune sélection)</h3>
          <div className="flex flex-wrap gap-2">
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategories.includes(cat)
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {categoryLabels[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulties */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Difficulté (toutes si aucune sélection)</h3>
          <div className="flex flex-wrap gap-2">
            {availableDifficulties.map(diff => (
              <button
                key={diff}
                onClick={() => toggleDifficulty(diff)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulties.includes(diff)
                    ? `quiz-difficulty-${diff} shadow-md ring-2 ring-offset-1 ring-gray-300`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {difficultyLabels[diff]} {diff === 'facile' ? '(1pt)' : diff === 'moyen' ? '(2pts)' : '(3pts)'}
              </button>
            ))}
          </div>
        </div>

        {/* Types */}
        <div className="mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Types de questions (tous si aucune sélection)</h3>
          <div className="flex flex-wrap gap-2">
            {availableTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleType(type)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTypes.includes(type)
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        {/* Question count */}
        <div className="mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">Nombre de questions : {questionCount}</h3>
          <input
            type="range"
            min="5"
            max={Math.min(50, filteredCount)}
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>5</span>
            <span>{Math.min(50, filteredCount)}</span>
          </div>
        </div>

        {/* Start button */}
        <div className="text-center">
          <button
            onClick={startQuiz}
            disabled={filteredCount < 1}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 text-lg font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Play className="w-6 h-6" />
            Commencer le quiz
          </button>
        </div>
      </div>
    )
  }

  // ========== RESULTS SCREEN ==========
  if (phase === 'results') {
    const scorePercent = getScorePercent()
    const correctCount = getCorrectCount()
    const catResults = getCategoryResults()

    const getMessage = () => {
      if (scorePercent === 100) return 'Score parfait ! Vous maîtrisez le sujet !'
      if (scorePercent >= 80) return 'Excellent ! Vous avez de solides connaissances !'
      if (scorePercent >= 60) return 'Bien ! Quelques révisions et ce sera parfait !'
      return 'Continuez vos efforts ! Révisez et réessayez.'
    }

    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Score principal */}
        <div className="text-center mb-8">
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz terminé !</h2>
          <div className={`inline-block rounded-2xl px-8 py-4 mb-4 ${
            scorePercent >= 80 ? 'bg-green-50' : scorePercent >= 60 ? 'bg-yellow-50' : 'bg-red-50'
          }`}>
            <p className="text-5xl font-black mb-1" style={{
              background: scorePercent >= 80 ? 'linear-gradient(135deg, #10b981, #059669)' :
                         scorePercent >= 60 ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                         'linear-gradient(135deg, #ef4444, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {score} pts
            </p>
            <p className="text-lg text-gray-700">{correctCount}/{quizQuestions.length} correct ({scorePercent}%)</p>
          </div>
          <p className="text-lg text-gray-700">{getMessage()}</p>
          {maxStreak > 1 && (
            <div className="mt-3">
              <span className="quiz-streak">
                <Zap className="w-4 h-4 mr-1" /> Meilleure série : {maxStreak} d&apos;affilée
              </span>
            </div>
          )}
        </div>

        {/* Score par catégorie */}
        {Object.keys(catResults).length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" /> Résultats par catégorie
            </h3>
            <div className="space-y-3">
              {Object.entries(catResults).map(([cat, data]) => {
                const pct = Math.round((data.correct / data.total) * 100)
                return (
                  <div key={cat}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{categoryLabels[cat] || cat}</span>
                      <span className="font-medium">{data.correct}/{data.total} ({pct}%)</span>
                    </div>
                    <div className="category-progress-bar">
                      <div className="category-progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Questions ratées */}
        {wrongAnswers.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Questions à revoir ({wrongAnswers.length})
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {wrongAnswers.map(({ question: q, selectedAnswer: sa }, i) => (
                <div key={i} className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <p className="font-medium text-gray-900 mb-2">{q.question}</p>
                  <p className="text-sm text-red-700 mb-1">
                    Votre réponse : {q.options[sa]}
                  </p>
                  <p className="text-sm text-green-700 mb-2">
                    Bonne réponse : {q.options[q.correctAnswer]}
                  </p>
                  <p className="text-sm text-blue-800 bg-blue-50 rounded-lg p-2">
                    {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => setPhase('config')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 font-semibold transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Nouveau quiz
          </button>
          {wrongAnswers.length > 0 && (
            <button
              onClick={() => {
                const wrongQs = wrongAnswers.map(wa => wa.question)
                setQuizQuestions(wrongQs)
                setPhase('quiz')
                setCurrentQuestion(0)
                setScore(0)
                setStreak(0)
                setMaxStreak(0)
                setResults([])
                setWrongAnswers([])
                setSelectedAnswer(null)
                setShowExplanation(false)
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 font-semibold transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Réviser les erreurs ({wrongAnswers.length})
            </button>
          )}
          <button
            onClick={onComplete}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 font-semibold transition-all"
          >
            Retour à l&apos;accueil
          </button>
        </div>
      </div>
    )
  }

  // ========== QUIZ SCREEN ==========
  if (!question) return null

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 relative">
      {/* Score popup */}
      {scorePopup.show && (
        <div className="quiz-score-popup correct" style={{ right: '2rem', top: '2rem' }}>
          +{scorePopup.points}
        </div>
      )}

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-gray-900">
              Question {currentQuestion + 1}/{quizQuestions.length}
            </h2>
            <span className={`quiz-difficulty-${questionDifficulty}`}>
              {difficultyLabels[questionDifficulty]}
            </span>
            <span className="quiz-category-badge">
              {categoryLabels[questionCategory] || questionCategory}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {streak >= 3 && (
              <span className="quiz-streak">
                <Zap className="w-3 h-3 mr-1" /> {streak} de suite !
              </span>
            )}
            <span className="font-bold text-primary-600">{score} pts</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="progress-bar"
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Scenario context */}
      {questionType === 'scenario' && question.scenarioContext && (
        <div className="quiz-scenario-context">
          {question.scenarioContext}
        </div>
      )}

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {questionType === 'fill-blank'
            ? question.question.split('_____').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className="quiz-fill-blank-highlight">
                      {showExplanation ? question.options[question.correctAnswer] : '?????'}
                    </span>
                  )}
                </span>
              ))
            : question.question
          }
        </h3>

        {/* Options rendering by type */}
        {questionType === 'true-false' ? (
          <div className="flex gap-4">
            {question.options.map((option, index) => {
              let className = `quiz-true-false-btn ${index === 0 ? 'true-btn' : 'false-btn'}`
              if (selectedAnswer === index && !showExplanation) className += ' selected'
              if (showExplanation) {
                if (index === question.correctAnswer) className += ' correct'
                else if (selectedAnswer === index) className += ' incorrect'
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={className}
                  disabled={showExplanation}
                >
                  {option === 'Vrai' ? '✓ ' : '✗ '}{option}
                </button>
              )
            })}
          </div>
        ) : questionType === 'fill-blank' ? (
          <div className="flex flex-wrap gap-3">
            {question.options.map((option, index) => {
              let className = 'quiz-fill-blank-chip'
              if (selectedAnswer === index && !showExplanation) className += ' selected'
              if (showExplanation) {
                if (index === question.correctAnswer) className += ' correct'
                else if (selectedAnswer === index) className += ' incorrect'
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`${className} ${showExplanation && index === question.correctAnswer ? '!border-green-500 !bg-green-50' : ''} ${showExplanation && selectedAnswer === index && index !== question.correctAnswer ? '!border-red-500 !bg-red-50' : ''}`}
                  disabled={showExplanation}
                >
                  {option}
                  {showExplanation && index === question.correctAnswer && (
                    <CheckCircle className="inline w-4 h-4 ml-1 text-green-600" />
                  )}
                  {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                    <XCircle className="inline w-4 h-4 ml-1 text-red-600" />
                  )}
                </button>
              )
            })}
          </div>
        ) : (
          /* MCQ and Scenario: standard options */
          <div className="space-y-3">
            {question.options.map((option, index) => {
              let className = 'quiz-option'
              if (selectedAnswer === index && !showExplanation) className += ' selected'
              if (showExplanation) {
                if (index === question.correctAnswer) className += ' correct'
                else if (selectedAnswer === index) className += ' incorrect'
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={className}
                  disabled={showExplanation}
                >
                  <div className="flex items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-left flex-1">{option}</span>
                    </div>
                    {showExplanation && index === question.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    )}
                    {showExplanation && selectedAnswer === index && index !== question.correctAnswer && (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-blue-900">
              <strong>Explication :</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {difficultyLabels[questionDifficulty]} : {difficultyPoints[questionDifficulty]} pt{difficultyPoints[questionDifficulty] > 1 ? 's' : ''}
        </div>

        {!showExplanation ? (
          <button
            onClick={handleValidate}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all"
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 font-semibold transition-all"
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
          </button>
        )}
      </div>
    </div>
  )
}

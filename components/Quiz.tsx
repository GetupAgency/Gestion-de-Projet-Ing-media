'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Award } from 'lucide-react'
import { QuizQuestion } from '@/data/modules'

interface QuizProps {
  questions: QuizQuestion[]
  onComplete: () => void
  sectionTitle: string
}

export default function Quiz({ questions, onComplete, sectionTitle }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const question = questions[currentQuestion]

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleValidate = () => {
    if (selectedAnswer === null) return
    
    setShowExplanation(true)
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setCompleted(true)
    }
  }

  const getScorePercentage = () => {
    return Math.round((score / questions.length) * 100)
  }

  const getScoreMessage = () => {
    const percentage = getScorePercentage()
    if (percentage === 100) return 'Excellent ! Score parfait ! 🎉'
    if (percentage >= 80) return 'Très bien ! Vous maîtrisez le sujet ! 👏'
    if (percentage >= 60) return 'Bien ! Quelques révisions et ce sera parfait ! 📚'
    return 'Continuez vos efforts ! Relisez le cours et réessayez. 💪'
  }

  if (completed) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quiz terminé !</h2>
          <div className="bg-primary-50 rounded-lg p-6 mb-6">
            <p className="text-5xl font-bold text-primary-600 mb-2">
              {score}/{questions.length}
            </p>
            <p className="text-xl text-gray-700">{getScorePercentage()}%</p>
          </div>
          <p className="text-lg text-gray-700 mb-8">{getScoreMessage()}</p>
          <button
            onClick={onComplete}
            className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-lg font-semibold"
          >
            Continuer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Quiz : {sectionTitle}</h2>
          <span className="text-gray-600">
            Question {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {question.question}
        </h3>

        <div className="space-y-4">
          {question.options.map((option, index) => {
            let className = 'quiz-option'
            if (selectedAnswer === index && !showExplanation) {
              className += ' selected'
            }
            if (showExplanation) {
              if (index === question.correctAnswer) {
                className += ' correct'
              } else if (selectedAnswer === index) {
                className += ' incorrect'
              }
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
                  {showExplanation && (
                    <>
                      {index === question.correctAnswer && (
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      )}
                      {selectedAnswer === index && index !== question.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                    </>
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-900">
              <strong>Explication :</strong> {question.explanation}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="text-gray-600">
          Score actuel : {score}/{currentQuestion + (showExplanation ? 1 : 0)}
        </div>
        
        {!showExplanation ? (
          <button
            onClick={handleValidate}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Valider
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
          </button>
        )}
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react'
import { QuizQuestion } from '@/data/modules'

interface QuizWithCorrectionProps {
  questions: QuizQuestion[]
  sectionTitle: string
}

export default function QuizWithCorrection({ questions, sectionTitle }: QuizWithCorrectionProps) {
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({})
  const [showCorrection, setShowCorrection] = useState(false)

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    if (showCorrection) return // Ne pas permettre de changer si la correction est affichée
    
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex
    })
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const allAnswered = questions.every((_, index) => answers[index] !== undefined && answers[index] !== null)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Mini-quiz : {sectionTitle}</h2>
        <p className="text-gray-600">{questions.length} questions</p>
      </div>

      <div className="space-y-8">
        {questions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex]
          const isCorrect = selectedAnswer === question.correctAnswer
          
          return (
            <div key={question.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Question {questionIndex + 1} : {question.question}
              </h3>

              <div className="space-y-4">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswer === optionIndex
                  const isCorrectOption = optionIndex === question.correctAnswer
                  
                  let className = 'quiz-option'
                  if (isSelected && !showCorrection) {
                    className += ' selected'
                  }
                  if (showCorrection) {
                    if (isCorrectOption) {
                      className += ' correct'
                    } else if (isSelected && !isCorrect) {
                      className += ' incorrect'
                    }
                  }

                  return (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswer(questionIndex, optionIndex)}
                      className={className}
                      disabled={showCorrection}
                    >
                      <div className="flex items-center justify-between w-full gap-4">
                        <div className="flex items-center gap-3 flex-1">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700 text-sm">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="text-left flex-1">{option}</span>
                        </div>
                        {showCorrection && (
                          <>
                            {isCorrectOption && (
                              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                            )}
                            {isSelected && !isCorrect && (
                              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                            )}
                          </>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {showCorrection && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-900">
                    <strong className="font-semibold">Explication :</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="mt-8 flex items-center justify-between">
        <div>
          {showCorrection && (
            <div className="text-lg">
              <span className="font-semibold text-gray-900">Score : </span>
              <span className={`font-bold text-xl ${
                calculateScore() / questions.length >= 0.8 ? 'text-green-600' :
                calculateScore() / questions.length >= 0.6 ? 'text-orange-600' :
                'text-red-600'
              }`}>
                {calculateScore()}/{questions.length}
              </span>
              <span className="text-gray-600 ml-2">
                ({Math.round((calculateScore() / questions.length) * 100)}%)
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (showCorrection) {
              // Réinitialiser le quiz
              setAnswers({})
              setShowCorrection(false)
            } else {
              // Afficher la correction
              setShowCorrection(true)
            }
          }}
          disabled={!showCorrection && !allAnswered}
          className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {showCorrection ? (
            <>
              <EyeOff className="w-5 h-5" />
              Recommencer le quiz
            </>
          ) : (
            <>
              <Eye className="w-5 h-5" />
              Voir la correction
            </>
          )}
        </button>
      </div>

      {!showCorrection && !allAnswered && (
        <p className="mt-4 text-sm text-gray-600 text-center">
          Veuillez répondre à toutes les questions pour voir la correction
        </p>
      )}
    </div>
  )
}


'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trophy } from 'lucide-react'
import { allModules, bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions } from '@/data/allModules'
import Quiz from '@/components/Quiz'
import Footer from '@/components/Footer'
import { selectRandomQuestions } from '@/lib/shuffleUtils'

export default function QuizPage() {
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)

  // Collecter toutes les questions : modules + bonus + lexique + lexique étendu + compétences
  const allQuestions = [
    ...allModules
      .flatMap(module => module.sections)
      .flatMap(section => section.quiz || [])
      .filter(q => q !== undefined),
    ...bonusQuizQuestions,
    ...lexiqueQuizQuestions,
    ...extendedLexiqueQuizQuestions,
    ...competencesQuizQuestions
  ]

  // Mélanger et prendre exactement 20 questions aléatoires avec l'algorithme Fisher-Yates
  // + mélanger aussi l'ordre des réponses pour éviter les patterns
  const [quizQuestions] = useState(() => {
    return selectRandomQuestions(allQuestions, 20)
  })

  const handleComplete = () => {
    setCompleted(true)
  }

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Félicitations !
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Vous avez terminé le quiz global. Continuez à explorer les modules pour approfondir vos connaissances !
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Retour à l'accueil
            </Link>
            <button
              onClick={() => {
                setStarted(false)
                setCompleted(false)
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Recommencer le quiz
            </button>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
            <h1 className="text-3xl font-bold text-white">Quiz Global</h1>
            <p className="text-ingemedia-cyan mt-1">
              Testez vos connaissances sur l'ensemble de la formation
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Êtes-vous prêt ?
              </h2>
              <p className="text-gray-600 mb-6">
                Ce quiz contient {quizQuestions.length} questions sélectionnées aléatoirement 
                parmi tous les modules de la formation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-blue-900 mb-3">À propos de ce quiz :</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✓ 20 questions sélectionnées aléatoirement</li>
                <li>✓ Questions issues des modules, du lexique et des compétences</li>
                <li>✓ Pool de plus de 230 questions disponibles</li>
                <li>✓ Algorithme de mélange amélioré (chaque quiz est vraiment unique)</li>
                <li>✓ Ordre des réponses mélangé pour éviter les patterns</li>
                <li>✓ Explications détaillées pour chaque réponse</li>
                <li>✓ Pas de limite de temps</li>
                <li>✓ Score final à la fin du quiz</li>
                <li>✓ Refaites le quiz pour vous entraîner (questions différentes à chaque fois !)</li>
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={() => setStarted(true)}
                className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 text-lg font-semibold"
              >
                Commencer le quiz
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Quiz Global</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Quiz
          questions={quizQuestions}
          onComplete={handleComplete}
          sectionTitle="Quiz Global"
        />
      </div>

      <Footer />
    </div>
  )
}


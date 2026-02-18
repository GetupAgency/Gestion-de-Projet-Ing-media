'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { allModules, bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions, diverseQuizQuestions } from '@/data/allModules'
import EnhancedQuiz from '@/components/EnhancedQuiz'
import Footer from '@/components/Footer'

export default function QuizPage() {
  const [completed, setCompleted] = useState(false)

  // Collecter toutes les questions : modules + bonus + lexique + lexique étendu + compétences + diversifiées
  const allQuestions = useMemo(() => [
    ...allModules
      .flatMap(module => module.sections)
      .flatMap(section => section.quiz || [])
      .filter(q => q !== undefined),
    ...bonusQuizQuestions,
    ...lexiqueQuizQuestions,
    ...extendedLexiqueQuizQuestions,
    ...competencesQuizQuestions,
    ...diverseQuizQuestions
  ], [])

  const handleComplete = () => {
    setCompleted(false) // Reset to config screen for new quiz
  }

  if (completed) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l&apos;accueil
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">Quiz Global</h1>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </div>
          <p className="text-ingemedia-cyan mt-1">
            {allQuestions.length} questions disponibles — QCM, Vrai/Faux, Textes à trous, Scénarios
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <EnhancedQuiz
          questions={allQuestions}
          onComplete={handleComplete}
        />
      </div>

      <Footer />
    </div>
  )
}

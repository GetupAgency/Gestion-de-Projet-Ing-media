'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight } from 'lucide-react'
import { allModules } from '@/data/allModules'
import QuizWithCorrection from '@/components/QuizWithCorrection'
import CasPratique from '@/components/CasPratique'
import Footer from '@/components/Footer'

export default function ModulePage() {
  const params = useParams()
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [progress, setProgress] = useState<any>({})

  const module = allModules.find(m => m.id === params.id)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('courseProgress')
      if (saved) {
        setProgress(JSON.parse(saved))
      }
      
      // Marquer comme "en cours"
      const newProgress = { ...progress }
      if (!newProgress[params.id as string]) {
        newProgress[params.id as string] = 'in-progress'
        localStorage.setItem('courseProgress', JSON.stringify(newProgress))
        setProgress(newProgress)
      }
    }
  }, [params.id])

  if (!module) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Module introuvable</h1>
          <Link href="/" className="text-primary-600 hover:text-primary-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const section = module.sections[currentSection]

  const handleNext = () => {
    if (showQuiz && section.quiz) {
      // Passer à la section suivante après le quiz
      if (currentSection < module.sections.length - 1) {
        setCurrentSection(currentSection + 1)
        setShowQuiz(false)
      } else {
        // Module terminé
        markModuleComplete()
      }
    } else if (section.quiz) {
      setShowQuiz(true)
    } else {
      if (currentSection < module.sections.length - 1) {
        setCurrentSection(currentSection + 1)
      } else {
        markModuleComplete()
      }
    }
  }

  const markModuleComplete = () => {
    const newProgress = { ...progress }
    newProgress[module.id] = 'completed'
    localStorage.setItem('courseProgress', JSON.stringify(newProgress))
    setProgress(newProgress)
    router.push('/')
  }

  const progressPercent = ((currentSection + 1) / module.sections.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-ingemedia-blue to-primary-900 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-ingemedia-cyan mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux modules
          </Link>
          <h1 className="text-3xl font-bold text-white mt-2">{module.title}</h1>
          <p className="text-ingemedia-cyan mt-1">{module.description}</p>
          
          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-white mb-2">
              <span>Section {currentSection + 1} sur {module.sections.length}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-500" 
                style={{ 
                  width: `${progressPercent}%`,
                  background: 'linear-gradient(90deg, #009AD4, white)'
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showQuiz ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>

            <div className="mb-8">
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>

            {section.casePratique && (
              <CasPratique
                title={section.casePratique.title}
                description={section.casePratique.description}
                exercice={section.casePratique.exercice}
                correction={section.casePratique.correction}
              />
            )}

            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={() => currentSection > 0 && setCurrentSection(currentSection - 1)}
                disabled={currentSection === 0}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center"
              >
                {section.quiz ? 'Passer au quiz' : 
                 currentSection === module.sections.length - 1 ? 'Terminer le module' : 'Suivant'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <QuizWithCorrection
              questions={section.quiz || []}
              sectionTitle={section.title}
            />
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold"
              >
                {currentSection === module.sections.length - 1 ? 'Terminer le module' : 'Continuer'}
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}


'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Target, Users, Calendar, Lightbulb, Code, TestTube, Rocket, Settings, CheckCircle, BarChart3, RefreshCw, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react'
import { allModules as modules } from '@/data/allModules'
import { getQuizProgress, getCategoryScores, getOverallScore, categoryLabels } from '@/lib/quizProgress'
import Footer from '@/components/Footer'

export default function Home() {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('courseProgress')
      return saved ? JSON.parse(saved) : {}
    }
    return {}
  })

  const [quizProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      return getQuizProgress()
    }
    return null
  })

  const overallQuizScore = typeof window !== 'undefined' ? getOverallScore() : 0
  const categoryScores = typeof window !== 'undefined' ? getCategoryScores() : {}

  const getModuleIcon = (id: string) => {
    const icons: { [key: string]: any } = {
      'intro': BookOpen,
      'lancement': Rocket,
      'planification': Calendar,
      'conception': Lightbulb,
      'developpement': Code,
      'test': TestTube,
      'lancement-prod': Rocket,
      'suivi': Settings,
      'conclusion': CheckCircle,
      'gestion-crise': AlertTriangle
    }
    return icons[id] || BookOpen
  }

  const calculateOverallProgress = () => {
    const totalModules = modules.length
    const completedModules = Object.values(progress).filter(p => p === 'completed').length
    return Math.round((completedModules / totalModules) * 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-ingemedia-cyan">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Image 
                src="/logo-ingemedia.png" 
                alt="Ingémedia UFR" 
                width={240} 
                height={72}
                className="h-16 w-auto"
              />
              <div className="border-l-2 border-ingemedia-cyan pl-6">
                <h1 className="text-3xl font-bold text-ingemedia-blue">
                  Gestion de Projet Web
                </h1>
                <p className="mt-1 text-lg text-gray-700">
                  Formation complète avec théorie, pratique et mission projet
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-ingemedia-blue">Votre progression</h2>
            <span className="text-2xl font-bold text-ingemedia-cyan">{calculateOverallProgress()}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="progress-bar" 
              style={{ width: `${calculateOverallProgress()}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quiz Results */}
      {quizProgress && quizProgress.totalQuizzes > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-ingemedia-blue" />
                <h2 className="text-xl font-semibold text-ingemedia-blue">Vos résultats quiz</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">{quizProgress.totalQuizzes} quiz passé{quizProgress.totalQuizzes > 1 ? 's' : ''}</span>
                <span className="text-2xl font-bold text-ingemedia-cyan">{overallQuizScore}%</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {Object.entries(categoryScores).map(([cat, score]) => (
                <div key={cat} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-36 truncate">{categoryLabels[cat] || cat}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full transition-all"
                      style={{
                        width: `${score}%`,
                        backgroundColor: score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444'
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 w-10 text-right">{score}%</span>
                </div>
              ))}
            </div>

            {quizProgress.wrongQuestionIds.length > 0 && (
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 text-sm font-medium text-ingemedia-blue hover:text-ingemedia-cyan transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                {quizProgress.wrongQuestionIds.length} question{quizProgress.wrongQuestionIds.length > 1 ? 's' : ''} à revoir
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Sprint Agence - Journée immersive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Link href="/sprint-agence" className="sa-home-card block">
          <span className="sa-home-card-eyebrow inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Journée immersive
          </span>
          <div className="flex flex-wrap items-baseline gap-3">
            <h3 className="sa-home-card-title">Sprint Agence : RoadTrip Squad</h3>
            <span className="text-sm text-stone-500">avec Gaspard Vasseur</span>
          </div>
          <p className="sa-home-card-pitch">
            Une journée pour vivre la chaîne brief, cadrage, équipe, périmètre, planning. En binômes ou trinômes,
            vous répondez à un vrai porteur de projet et vous livrez un Gantt défendable à la fin de la journée.
          </p>
          <span className="sa-home-card-foot">
            Démarrer la journée
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/mission" className="bg-gradient-to-r from-ingemedia-blue to-primary-800 rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105">
            <Target className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Mission Projet</h3>
            <p className="text-blue-100">Créez un cahier des charges complet</p>
          </Link>

          <Link href="/quiz" className="bg-gradient-to-r from-ingemedia-cyan to-primary-600 rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105">
            <CheckCircle className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Quiz Global</h3>
            <p className="text-cyan-100">Testez vos connaissances</p>
          </Link>

          <Link href="/evaluation" className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105">
            <Users className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Évaluation</h3>
            <p className="text-orange-100">Préparez votre oral (10-15min)</p>
          </Link>

          <Link href="/lexique" className="bg-gradient-to-r from-ingemedia-blue to-ingemedia-cyan rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105">
            <BookOpen className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Lexique</h3>
            <p className="text-blue-100">Tous les termes essentiels</p>
          </Link>

          <Link href="/competences" className="bg-gradient-to-r from-ingemedia-cyan to-primary-700 rounded-lg shadow-lg p-6 text-white hover:shadow-xl transition-all hover:scale-105">
            <Users className="w-12 h-12 mb-3" />
            <h3 className="text-2xl font-bold mb-2">Compétences</h3>
            <p className="text-cyan-100">Skills du chef de projet</p>
          </Link>
        </div>
      </div>

      {/* Modules */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Modules de formation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = getModuleIcon(module.id)
            const moduleProgress = progress[module.id] || 'not-started'
            
            return (
              <Link href={`/module/${module.id}`} key={module.id}>
                <div className={`module-card ${moduleProgress === 'completed' ? 'completed' : moduleProgress === 'in-progress' ? 'in-progress' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-100 rounded-lg p-3">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      Module {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      {module.sections.length} sections
                    </span>
                    {moduleProgress === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <Footer />
    </div>
  )
}


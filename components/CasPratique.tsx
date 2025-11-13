'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Lightbulb, Lock } from 'lucide-react'
import { checkAndEnableTeacherMode } from '@/lib/teacherMode'

interface CasPratiqueProps {
  title: string
  description: string
  exercice: string
  correction?: string
}

export default function CasPratique({ title, description, exercice, correction }: CasPratiqueProps) {
  const [showCorrection, setShowCorrection] = useState(false)
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    setIsTeacher(checkAndEnableTeacherMode())
  }, [])

  return (
    <div className="mt-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      {/* Effet décoratif */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-200 rounded-full opacity-20 -ml-12 -mb-12" />
      
      <div className="relative">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-purple-600 p-2 rounded-lg shadow-md">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-900">
              Cas pratique : {title}
            </h3>
            <p className="text-purple-700 text-sm mt-1">{description}</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mt-4 shadow-md">
          <h4 className="font-semibold text-purple-900 mb-3 text-lg">Énoncé</h4>
          <div dangerouslySetInnerHTML={{ __html: exercice }} />
        </div>

        {correction && isTeacher && (
          <div className="mt-4">
            <button
              onClick={() => setShowCorrection(!showCorrection)}
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 font-medium"
            >
              {showCorrection ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Masquer la correction
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Voir la correction proposée
                </>
              )}
            </button>
          </div>
        )}

        {correction && !isTeacher && (
          <div className="mt-4">
            <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-300 text-gray-500 rounded-xl shadow-md font-medium cursor-not-allowed">
              <Lock className="w-4 h-4" />
              Correction réservée à l'enseignant
            </div>
          </div>
        )}

            {showCorrection && isTeacher && (
              <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow-md border-2 border-purple-300 animate-in fade-in slide-in-from-top-2 duration-300">
                <h4 className="font-semibold text-purple-900 mb-3 text-lg flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Proposition de correction
                </h4>
                <div dangerouslySetInnerHTML={{ __html: correction }} />
              </div>
            )}
      </div>
    </div>
  )
}


'use client'

import { useState } from 'react'
import { Users, Zap } from 'lucide-react'
import { initTeam } from '@/lib/gameSystem'

interface TeamSetupProps {
  onComplete: () => void
}

export default function TeamSetup({ onComplete }: TeamSetupProps) {
  const [teamName, setTeamName] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (teamName.trim().length < 3) {
      alert('Le nom doit faire au moins 3 caractères')
      return
    }
    
    setIsCreating(true)
    initTeam(teamName.trim())
    
    setTimeout(() => {
      onComplete()
    }, 300)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 flex items-center justify-center p-4 z-[60]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue dans la compétition
          </h2>
          <p className="text-gray-600">
            Choisissez un nom d'équipe original pour commencer
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-2">
              Nom de votre équipe
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Les Loutres Agiles, Code Warriors, Team Rocket..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              autoFocus
              maxLength={30}
            />
            <p className="text-xs text-gray-500 mt-2">
              {teamName.length}/30 caractères
            </p>
          </div>

          <button
            type="submit"
            disabled={teamName.trim().length < 3 || isCreating}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg flex items-center justify-center gap-2"
          >
            {isCreating ? (
              'Création en cours...'
            ) : (
              <>
                <Zap className="w-5 h-5" />
                C'est parti !
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Vous accumulerez des points en résolvant les énigmes et en progressant dans votre réponse.
          </p>
        </div>
      </div>
    </div>
  )
}


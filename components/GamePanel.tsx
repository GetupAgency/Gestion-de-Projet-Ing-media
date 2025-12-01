'use client'

import { useState, useEffect } from 'react'
import { Trophy, Star, Lightbulb, Zap, HelpCircle } from 'lucide-react'
import { getTeamData, initTeam, BADGES, useToken, addPoints, checkEasterEggSolution, EASTER_EGGS } from '@/lib/gameSystem'

export default function GamePanel({ projectId }: { projectId: string }) {
  const [team, setTeam] = useState(getTeamData())
  const [showEasterEggPanel, setShowEasterEggPanel] = useState(false)
  const [easterEggInput, setEasterEggInput] = useState('')
  const [selectedEgg, setSelectedEgg] = useState<string | null>(null)

  useEffect(() => {
    // Rafraîchir les données toutes les 5 secondes
    const interval = setInterval(() => {
      setTeam(getTeamData())
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  if (!team) return null

  const projectEggs = projectId === 'eventeo' ? EASTER_EGGS.eventeo : EASTER_EGGS.mediconnect
  const unlockedCount = team.easterEggs.filter(e => 
    projectEggs.some(pe => pe.id === e)
  ).length

  const handleTokenUse = (type: 'expertQuestions' | 'revelations' | 'joker') => {
    const labels = {
      expertQuestions: 'Question Expert',
      revelations: 'Indice',
      joker: 'Joker'
    }
    
    if (confirm(`Utiliser un jeton "${labels[type]}" ?\n\nIl vous en reste ${team.tokens[type]}`)) {
      if (useToken(type)) {
        if (type === 'expertQuestions') {
          alert('Jeton Question utilisé.\n\nVous pouvez maintenant solliciter l\'enseignant pour une question précise.\nPréparez bien votre question avant.')
        } else if (type === 'revelations') {
          alert('Jeton Indice utilisé.\n\nUn conseil : regardez bien les chiffres ronds dans les briefs.\nIls cachent souvent des informations importantes.')
          addPoints(10, 'Indice utilisé')
        } else {
          alert('Joker utilisé.\n\nVous pouvez demander une aide significative à l\'enseignant sur un point bloquant.')
        }
        setTeam(getTeamData())
      }
    }
  }

  const handleEasterEggSubmit = (eggId: string) => {
    if (checkEasterEggSolution(eggId, easterEggInput)) {
      setEasterEggInput('')
      setSelectedEgg(null)
      setTeam(getTeamData())
    } else {
      alert('Mauvaise réponse ! Réfléchissez bien à l\'indice...')
    }
  }

  const earnedBadges = BADGES.filter(b => team.badges.includes(b.id))

  return (
    <div className="fixed bottom-4 right-4 z-[30]">
      {/* Bouton flottant */}
      <button
        onClick={() => setShowEasterEggPanel(!showEasterEggPanel)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 relative"
      >
        <Trophy className="w-6 h-6" />
        {unlockedCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {unlockedCount}
          </span>
        )}
      </button>

      {/* Panel */}
      {showEasterEggPanel && (
        <div className="absolute bottom-16 right-0 w-96 bg-white rounded-xl shadow-2xl border-2 border-purple-200 max-h-[600px] overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 sticky top-0 z-10">
            <h3 className="font-bold text-lg">{team.teamName}</h3>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="font-bold">{team.points} pts</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>{earnedBadges.length} badges</span>
              </div>
            </div>
          </div>

          {/* Jetons */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
            <h4 className="font-semibold text-gray-900 mb-3">Jetons Ressources</h4>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleTokenUse('expertQuestions')}
                disabled={team.tokens.expertQuestions === 0}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <HelpCircle className="w-6 h-6 text-blue-600 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-gray-700">Question</span>
                <span className="text-lg font-bold text-blue-600">{team.tokens.expertQuestions}</span>
              </button>
              
              <button
                onClick={() => handleTokenUse('revelations')}
                disabled={team.tokens.revelations === 0}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Lightbulb className="w-6 h-6 text-yellow-600 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-gray-700">Indice</span>
                <span className="text-lg font-bold text-yellow-600">{team.tokens.revelations}</span>
              </button>
              
              <button
                onClick={() => handleTokenUse('joker')}
                disabled={team.tokens.joker === 0}
                className="flex flex-col items-center p-3 bg-white rounded-lg shadow hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <Zap className="w-6 h-6 text-purple-600 mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-gray-700">Joker</span>
                <span className="text-lg font-bold text-purple-600">{team.tokens.joker}</span>
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 italic">
              Utilisez vos jetons stratégiquement pour débloquer des aides
            </p>
          </div>

          {/* Easter Eggs */}
          <div className="p-4">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
              <span>Énigmes à Résoudre</span>
              <span className="text-sm text-gray-600">
                {unlockedCount}/{projectEggs.length}
              </span>
            </h4>
            
            <div className="space-y-3">
              {projectEggs.map((egg) => {
                const isUnlocked = team.easterEggs.includes(egg.id)
                
                return (
                  <div
                    key={egg.id}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      isUnlocked
                        ? 'bg-green-50 border-green-500'
                        : 'bg-gray-50 border-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {isUnlocked ? (
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-green-900">{egg.reward}</p>
                          <p className="text-xs text-green-700 mt-1">+{egg.points} points</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                          {egg.hint}
                        </p>
                        {selectedEgg === egg.id ? (
                          <div className="flex gap-2 mt-2">
                            <input
                              type="text"
                              value={easterEggInput}
                              onChange={(e) => setEasterEggInput(e.target.value)}
                              placeholder="Votre réponse..."
                              className="flex-1 px-3 py-2 border-2 border-purple-300 rounded-lg text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleEasterEggSubmit(egg.id)
                                }
                              }}
                              autoFocus
                            />
                            <button
                              onClick={() => handleEasterEggSubmit(egg.id)}
                              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 font-medium"
                            >
                              Valider
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setSelectedEgg(egg.id)}
                            className="text-sm text-purple-600 hover:text-purple-800 font-medium hover:underline"
                          >
                            Tenter de résoudre
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Badges */}
          {earnedBadges.length > 0 && (
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-t">
              <h4 className="font-semibold text-gray-900 mb-3">Badges Débloqués</h4>
              <div className="grid grid-cols-2 gap-2">
                {earnedBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-2 p-2 bg-white rounded-lg shadow-sm"
                  >
                    <span className="text-2xl">{badge.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">{badge.name}</p>
                      <p className="text-xs text-gray-600">+{badge.points}pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}


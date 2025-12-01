'use client'

import { useState, useEffect } from 'react'
import { Trophy, Star, Lightbulb, Zap, HelpCircle, MessageCircle, Gamepad2, Brain, ListOrdered, Cloud, CloudOff } from 'lucide-react'
import { getTeamData, initTeam, BADGES, useToken, addPoints, checkEasterEggSolution, EASTER_EGGS } from '@/lib/gameSystem'
import { TeamScoreExport } from './TeamScoreExport'
import { MiniGame } from './MiniGames'
import { syncToSupabase } from '@/lib/syncSystem'
import { isSupabaseConfigured } from '@/lib/supabase'

// FAQ / Questions fréquentes
const FAQ_ITEMS = [
  {
    q: "Comment gagner plus de points ?",
    a: "Résolvez les énigmes, jouez aux mini-jeux, trouvez les easter eggs cachés (clics, survols, console). Soyez curieux !"
  },
  {
    q: "À quoi servent les jetons ?",
    a: "Question = Poser une question à l'enseignant | Indice = Obtenir un conseil | Joker = Aide majeure. Utilisez-les intelligemment !"
  },
  {
    q: "Comment trouver les easter eggs ?",
    a: "Explorez ! Cliquez sur des éléments, survolez des titres, scrollez, double-cliquez, ouvrez la console, tapez 'loutre'... Soyez créatifs !"
  },
  {
    q: "Le leaderboard est-il en temps réel ?",
    a: "Non, les scores sont locaux. Utilisez le bouton 'Partager' pour envoyer votre score à l'enseignant."
  },
  {
    q: "Peut-on jouer plusieurs fois aux mini-jeux ?",
    a: "Oui ! Mais les points ne sont donnés qu'une seule fois par jeu réussi."
  },
  {
    q: "Combien d'énigmes au total ?",
    a: "5 énigmes par projet (10 au total). Elles sont toutes résolvables avec les infos du brief !"
  }
]

export default function GamePanel({ projectId }: { projectId: string }) {
  const [team, setTeam] = useState(getTeamData())
  const [showEasterEggPanel, setShowEasterEggPanel] = useState(false)
  const [easterEggInput, setEasterEggInput] = useState('')
  const [selectedEgg, setSelectedEgg] = useState<string | null>(null)
  const [showFAQ, setShowFAQ] = useState(false)
  const [activeGame, setActiveGame] = useState<string | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)
  const [supabaseEnabled] = useState(isSupabaseConfigured())

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

  const handleSync = async () => {
    setIsSyncing(true)
    const result = await syncToSupabase()
    setIsSyncing(false)
    
    if (result.success) {
      alert(`✅ ${result.message}\n\nVos données sont maintenant visibles sur le tableau de l'enseignant !`)
    } else {
      alert(`❌ ${result.message}`)
    }
  }

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
                              className="flex-1 px-3 py-2 border-2 border-purple-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
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

          {/* FAQ */}
          <div className="p-4 border-t bg-gray-50">
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Questions Fréquentes</h4>
              </div>
              <span className="text-gray-400">{showFAQ ? '▼' : '▶'}</span>
            </button>
            
            {showFAQ && (
              <div className="mt-4 space-y-3">
                {FAQ_ITEMS.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{item.q}</p>
                    <p className="text-xs text-gray-600">{item.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mini-jeux */}
          <div className="p-4 border-t bg-gradient-to-r from-green-50 to-blue-50">
            <h4 className="font-semibold text-gray-900 mb-3">Mini-Jeux</h4>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveGame('quiz')}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
              >
                <Brain className="w-5 h-5 text-blue-600 mb-1" />
                <span className="text-xs font-medium text-gray-700">Quiz</span>
              </button>
              
              <button
                onClick={() => setActiveGame('memory')}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
              >
                <Gamepad2 className="w-5 h-5 text-green-600 mb-1" />
                <span className="text-xs font-medium text-gray-700">Memory</span>
              </button>
              
              <button
                onClick={() => setActiveGame('order')}
                className="flex flex-col items-center p-2 bg-white rounded-lg shadow hover:shadow-md transition-all"
              >
                <ListOrdered className="w-5 h-5 text-orange-600 mb-1" />
                <span className="text-xs font-medium text-gray-700">Ordre</span>
              </button>
            </div>
          </div>

          {/* Sync Supabase */}
          {supabaseEnabled && (
            <div className="p-4 border-t bg-gradient-to-r from-cyan-50 to-blue-50">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-blue-600" />
                Synchronisation
              </h4>
              <button
                onClick={handleSync}
                disabled={isSyncing}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSyncing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Synchronisation...
                  </>
                ) : (
                  <>
                    <Cloud className="w-5 h-5" />
                    Synchro BDD
                  </>
                )}
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Envoie ton score sur le tableau de l'enseignant
              </p>
            </div>
          )}

          {/* Export manuel si pas de Supabase */}
          {!supabaseEnabled && (
            <>
              <div className="p-4 border-t bg-orange-50">
                <div className="flex items-center gap-2 text-orange-700 mb-2">
                  <CloudOff className="w-5 h-5" />
                  <span className="text-sm font-medium">Mode hors ligne</span>
                </div>
                <p className="text-xs text-orange-600">
                  Base de données non configurée. Utilisez l'export manuel ci-dessous.
                </p>
              </div>
              <TeamScoreExport />
            </>
          )}
        </div>
      )}

      {/* Mini-jeux modals */}
      {activeGame && (
        <MiniGame
          gameType={activeGame as any}
          onClose={() => setActiveGame(null)}
        />
      )}
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Trophy, Award, RefreshCw, TrendingUp, Users, Zap } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import { getAllScoresFromSupabase, subscribeToScores } from '@/lib/syncSystem'
import { isSupabaseConfigured } from '@/lib/supabase'
import Footer from '@/components/Footer'
import type { TeamData } from '@/lib/gameSystem'

export default function DashboardLivePage() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [teams, setTeams] = useState<TeamData[]>([])
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  useEffect(() => {
    if (!mounted || !isTeacher) return

    // Charger les scores initiaux
    loadScores()

    // S'abonner aux changements en temps réel
    const unsubscribe = subscribeToScores((newTeams) => {
      setTeams(newTeams)
      setLastUpdate(new Date())
    })

    // Rafraîchir toutes les 10 secondes en backup
    const interval = setInterval(loadScores, 10000)

    return () => {
      unsubscribe()
      clearInterval(interval)
    }
  }, [mounted, isTeacher])

  const loadScores = async () => {
    setLoading(true)
    const scores = await getAllScoresFromSupabase()
    setTeams(scores)
    setLastUpdate(new Date())
    setLoading(false)
  }

  if (!mounted) {
    return <div>Chargement...</div>
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Supabase Non Configuré</h1>
          <p className="text-gray-600 mb-6">
            Le dashboard live nécessite Supabase. 
            Consultez le fichier <code className="bg-gray-100 px-2 py-1 rounded">SETUP_SUPABASE.md</code> pour la configuration.
          </p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  if (!isTeacher) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Accès Réservé</h1>
          <p className="text-gray-600 mb-6">Cette page est réservée aux enseignants.</p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const totalPoints = teams.reduce((sum, t) => sum + t.points, 0)
  const totalBadges = teams.reduce((sum, t) => sum + t.badges.length, 0)
  const totalEasterEggs = teams.reduce((sum, t) => sum + t.easterEggs.length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="inline-flex items-center text-white hover:text-purple-200 mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard Live - Mode Enseignant</h1>
              <p className="text-purple-100 mt-1 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Mise à jour temps réel
              </p>
            </div>
            <button
              onClick={loadScores}
              disabled={loading}
              className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats globales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Équipes Actives</p>
                <p className="text-3xl font-bold text-purple-600">{teams.length}</p>
              </div>
              <Users className="w-10 h-10 text-purple-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Points Totaux</p>
                <p className="text-3xl font-bold text-blue-600">{totalPoints}</p>
              </div>
              <TrendingUp className="w-10 h-10 text-blue-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Badges Débloqués</p>
                <p className="text-3xl font-bold text-yellow-600">{totalBadges}</p>
              </div>
              <Trophy className="w-10 h-10 text-yellow-200" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Énigmes Résolues</p>
                <p className="text-3xl font-bold text-green-600">{totalEasterEggs}</p>
              </div>
              <Zap className="w-10 h-10 text-green-200" />
            </div>
          </div>
        </div>

        {/* Dernière mise à jour */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mb-8">
          <p className="text-sm text-blue-900">
            Dernière mise à jour : {lastUpdate.toLocaleTimeString('fr-FR')}
            <span className="ml-2 text-blue-600">• Rafraîchissement automatique toutes les 10s</span>
          </p>
        </div>

        {/* Podium et Classement */}
        {teams.length > 0 ? (
          <>
            {/* Podium */}
            {teams.length >= 3 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Podium</h2>
                <div className="flex items-end justify-center gap-6">
                  {/* 2nd Place */}
                  <div className="text-center">
                    <Award className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <div className="bg-gray-200 rounded-t-lg px-8 py-6" style={{ height: '140px' }}>
                      <div className="text-5xl font-bold text-gray-600 mb-2">2</div>
                      <div className="font-bold text-gray-900">{teams[1].teamName}</div>
                      <div className="text-sm text-gray-600 mt-1">{teams[1].points} pts</div>
                      <div className="text-xs text-gray-500 mt-1">{teams[1].badges.length} badges</div>
                    </div>
                  </div>

                  {/* 1st Place */}
                  <div className="text-center">
                    <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2 animate-bounce" />
                    <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-lg px-8 py-6 shadow-xl" style={{ height: '180px' }}>
                      <div className="text-6xl font-bold text-white mb-2">1</div>
                      <div className="font-bold text-white text-lg">{teams[0].teamName}</div>
                      <div className="text-sm text-yellow-100 mt-1">{teams[0].points} pts</div>
                      <div className="text-xs text-yellow-100 mt-1">{teams[0].badges.length} badges • {teams[0].easterEggs.length} énigmes</div>
                    </div>
                  </div>

                  {/* 3rd Place */}
                  <div className="text-center">
                    <Award className="w-10 h-10 text-orange-600 mx-auto mb-2" />
                    <div className="bg-orange-200 rounded-t-lg px-8 py-6" style={{ height: '120px' }}>
                      <div className="text-5xl font-bold text-orange-700 mb-2">3</div>
                      <div className="font-bold text-gray-900">{teams[2].teamName}</div>
                      <div className="text-sm text-gray-600 mt-1">{teams[2].points} pts</div>
                      <div className="text-xs text-gray-500 mt-1">{teams[2].badges.length} badges</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tableau détaillé */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600">
                <h2 className="text-2xl font-bold text-white">Classement Complet</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Rang</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Équipe</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Points</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Badges</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Énigmes</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">Jetons</th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-900">Dernière Activité</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {teams.map((team, index) => {
                      const isTop3 = index < 3
                      const timeSince = new Date(team.lastActivity).toLocaleString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })
                      
                      return (
                        <tr key={index} className={`${isTop3 ? 'bg-yellow-50' : 'hover:bg-gray-50'} transition-colors`}>
                          <td className="px-6 py-4">
                            <span className={`text-xl font-bold ${
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-gray-400' :
                              index === 2 ? 'text-orange-600' :
                              'text-gray-400'
                            }`}>
                              #{index + 1}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-bold text-gray-900">{team.teamName}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-lg font-bold text-purple-600">{team.points}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-gray-700">{team.badges.length}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-gray-700">{team.easterEggs.length}/10</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-xs text-gray-600">
                              {team.tokens.expertQuestions}Q • {team.tokens.revelations}I • {team.tokens.joker}J
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-xs text-gray-500">{timeSince}</span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {loading ? 'Chargement...' : 'Aucune Équipe Synchronisée'}
            </h3>
            <p className="text-gray-600 mb-4">
              {loading ? 'Récupération des données...' : 'Les équipes doivent cliquer sur "Synchro BDD" dans leur GamePanel.'}
            </p>
            <button
              onClick={loadScores}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700"
            >
              Actualiser
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}


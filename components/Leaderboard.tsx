'use client'

import { useState, useEffect } from 'react'
import { Trophy, Medal, Award } from 'lucide-react'
import { getAllTeams, getTeamData } from '@/lib/gameSystem'

export default function Leaderboard() {
  const [teams, setTeams] = useState(getAllTeams())
  const [myTeam, setMyTeam] = useState(getTeamData())
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTeams(getAllTeams())
      setMyTeam(getTeamData())
    }, 10000) // Refresh toutes les 10s

    return () => clearInterval(interval)
  }, [])

  if (teams.length === 0) return null

  const myTeamRank = myTeam ? teams.findIndex(t => t.teamName === myTeam.teamName) + 1 : null

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-[25] bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
      >
        <Trophy className="w-5 h-5" />
        <span className="font-bold">Classement</span>
        {myTeamRank && (
          <span className="bg-white text-orange-600 px-2 py-0.5 rounded-full text-xs font-bold">
            #{myTeamRank}
          </span>
        )}
      </button>

      {/* Modal Leaderboard */}
      {isOpen && (
        <div className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/50" onClick={() => setIsOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8" />
                  <h2 className="text-2xl font-bold">Classement des Équipes</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-yellow-100 text-sm mt-2">
                Compétition en direct • Mis à jour toutes les 10s
              </p>
            </div>

            {/* Podium */}
            {teams.length >= 3 && (
              <div className="flex items-end justify-center gap-4 p-6 bg-gradient-to-b from-yellow-50 to-white">
                {/* 2nd Place */}
                <div className="flex flex-col items-center">
                  <Medal className="w-8 h-8 text-gray-400 mb-2" />
                  <div className="bg-gray-200 rounded-t-lg px-6 py-4 text-center" style={{ height: '120px' }}>
                    <div className="text-4xl font-bold text-gray-600 mb-1">2</div>
                    <div className="font-semibold text-gray-900 text-sm">{teams[1].teamName}</div>
                    <div className="text-gray-600 text-xs mt-1">{teams[1].points} pts</div>
                  </div>
                </div>

                {/* 1st Place */}
                <div className="flex flex-col items-center">
                  <Trophy className="w-10 h-10 text-yellow-500 mb-2 animate-bounce" />
                  <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-lg px-6 py-4 text-center shadow-lg" style={{ height: '160px' }}>
                    <div className="text-5xl font-bold text-white mb-1">1</div>
                    <div className="font-bold text-white text-sm">{teams[0].teamName}</div>
                    <div className="text-yellow-100 text-xs mt-1">{teams[0].points} pts</div>
                    <div className="text-yellow-100 text-xs mt-1">{teams[0].badges.length} badges</div>
                  </div>
                </div>

                {/* 3rd Place */}
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-orange-600 mb-2" />
                  <div className="bg-orange-200 rounded-t-lg px-6 py-4 text-center" style={{ height: '100px' }}>
                    <div className="text-4xl font-bold text-orange-700 mb-1">3</div>
                    <div className="font-semibold text-gray-900 text-sm">{teams[2].teamName}</div>
                    <div className="text-gray-600 text-xs mt-1">{teams[2].points} pts</div>
                  </div>
                </div>
              </div>
            )}

            {/* Liste complète */}
            <div className="overflow-y-auto max-h-80">
              <div className="divide-y">
                {teams.map((team, index) => {
                  const isMyTeam = myTeam?.teamName === team.teamName
                  const rank = index + 1

                  return (
                    <div
                      key={team.teamName}
                      className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                        isMyTeam ? 'bg-purple-50 border-l-4 border-purple-600' : ''
                      }`}
                    >
                      {/* Rang */}
                      <div className={`text-2xl font-bold w-12 text-center ${
                        rank === 1 ? 'text-yellow-500' :
                        rank === 2 ? 'text-gray-400' :
                        rank === 3 ? 'text-orange-600' :
                        'text-gray-400'
                      }`}>
                        {rank}
                      </div>

                      {/* Info équipe */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${isMyTeam ? 'text-purple-900' : 'text-gray-900'}`}>
                            {team.teamName}
                          </span>
                          {isMyTeam && (
                            <span className="text-xs bg-purple-600 text-white px-2 py-0.5 rounded-full">
                              Vous
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-xs text-gray-600">
                          <span>{team.points} points</span>
                          <span>{team.badges.length} badges</span>
                          <span>{team.easterEggs.length} énigmes</span>
                        </div>
                      </div>

                      {/* Badges */}
                      {rank <= 3 && (
                        <div>
                          {rank === 1 && <span className="text-2xl">🥇</span>}
                          {rank === 2 && <span className="text-2xl">🥈</span>}
                          {rank === 3 && <span className="text-2xl">🥉</span>}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-600">
                Que la meilleure équipe gagne ! 🚀
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


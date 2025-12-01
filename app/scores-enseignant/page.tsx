'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Upload, Trophy, Award, Download } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import Footer from '@/components/Footer'
import type { TeamData } from '@/lib/gameSystem'

export default function TeacherScoresPage() {
  const [isTeacher, setIsTeacher] = useState(false)
  const [teams, setTeams] = useState<TeamData[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsTeacher(isTeacherMode())
  }, [])

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    Array.from(files).forEach(file => {
      const reader = new FileReader()
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target?.result as string)
          // Vérifier que c'est bien des données d'équipe
          if (data.teamName && data.points !== undefined) {
            setTeams(prev => {
              // Remplacer si équipe existe déjà
              const filtered = prev.filter(t => t.teamName !== data.teamName)
              return [...filtered, data].sort((a, b) => b.points - a.points)
            })
          }
        } catch (err) {
          alert(`Erreur lors de la lecture de ${file.name}`)
        }
      }
      reader.readAsText(file)
    })
  }

  const handleTextImport = () => {
    const text = prompt('Collez le score d\'une équipe (format texte) :')
    if (!text) return
    
    // Parser le format texte
    const teamMatch = text.match(/SCORE - (.+)/)
    const pointsMatch = text.match(/Points : (\d+)/)
    const badgesMatch = text.match(/Badges : (\d+)/)
    const enigmesMatch = text.match(/Énigmes : (\d+)/)
    
    if (teamMatch && pointsMatch) {
      const teamData: TeamData = {
        teamName: teamMatch[1].trim(),
        points: parseInt(pointsMatch[1]),
        badges: [],
        tokens: { expertQuestions: 0, revelations: 0, joker: 0 },
        easterEggs: [],
        lastActivity: new Date().toISOString()
      }
      
      setTeams(prev => {
        const filtered = prev.filter(t => t.teamName !== teamData.teamName)
        return [...filtered, teamData].sort((a, b) => b.points - a.points)
      })
    } else {
      alert('Format invalide. Utilisez le bouton "Copier" du GamePanel.')
    }
  }

  const exportAllScores = () => {
    const csv = [
      'Rang,Équipe,Points,Badges,Énigmes',
      ...teams.map((team, index) => 
        `${index + 1},${team.teamName},${team.points},${team.badges.length},${team.easterEggs.length}`
      )
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `classement-mission-${new Date().toLocaleDateString('fr-FR')}.csv`
    a.click()
  }

  if (!mounted) {
    return <div>Chargement...</div>
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
              <h1 className="text-3xl font-bold text-white">Suivi des Scores - Mode Enseignant</h1>
              <p className="text-purple-100 mt-1">
                Importez les scores des équipes pour suivre la compétition
              </p>
            </div>
            <Trophy className="w-12 h-12 text-purple-200" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instructions */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-blue-900 mb-2">Comment ça marche ?</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
            <li>Les équipes cliquent sur "Partager" dans leur GamePanel</li>
            <li>Elles copient leur score et vous l'envoient (chat, email, Discord...)</li>
            <li>Vous importez les scores ici via bouton "Import Texte" ou fichiers JSON</li>
            <li>Le classement s'affiche automatiquement</li>
          </ol>
        </div>

        {/* Import */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Importer des Scores</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Fichiers JSON (une ou plusieurs équipes)
              </label>
              <input
                type="file"
                accept=".json"
                multiple
                onChange={handleFileImport}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Texte copié-collé
              </label>
              <button
                onClick={handleTextImport}
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center justify-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Import Texte
              </button>
            </div>
          </div>
        </div>

        {/* Classement */}
        {teams.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Classement Actuel</h2>
              <button
                onClick={exportAllScores}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
              >
                <Download className="w-4 h-4" />
                Export CSV
              </button>
            </div>

            {/* Podium */}
            {teams.length >= 3 && (
              <div className="flex items-end justify-center gap-4 mb-8">
                {/* 2nd */}
                <div className="text-center">
                  <Award className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <div className="bg-gray-200 rounded-t-lg px-6 py-4" style={{ height: '100px' }}>
                    <div className="text-3xl font-bold text-gray-600">2</div>
                    <div className="text-sm font-semibold text-gray-900">{teams[1].teamName}</div>
                    <div className="text-xs text-gray-600">{teams[1].points} pts</div>
                  </div>
                </div>

                {/* 1st */}
                <div className="text-center">
                  <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-2 animate-bounce" />
                  <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-lg px-6 py-4" style={{ height: '140px' }}>
                    <div className="text-4xl font-bold text-white">1</div>
                    <div className="text-sm font-bold text-white">{teams[0].teamName}</div>
                    <div className="text-xs text-yellow-100">{teams[0].points} pts</div>
                  </div>
                </div>

                {/* 3rd */}
                <div className="text-center">
                  <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="bg-orange-200 rounded-t-lg px-6 py-4" style={{ height: '80px' }}>
                    <div className="text-3xl font-bold text-orange-700">3</div>
                    <div className="text-sm font-semibold text-gray-900">{teams[2].teamName}</div>
                    <div className="text-xs text-gray-600">{teams[2].points} pts</div>
                  </div>
                </div>
              </div>
            )}

            {/* Liste */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rang</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Équipe</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Points</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Badges</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Énigmes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {teams.map((team, index) => (
                    <tr key={index} className={index < 3 ? 'bg-yellow-50' : ''}>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900">
                        #{index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {team.teamName}
                      </td>
                      <td className="px-4 py-3 text-sm text-center font-bold text-purple-600">
                        {team.points}
                      </td>
                      <td className="px-4 py-3 text-sm text-center text-gray-700">
                        {team.badges.length}
                      </td>
                      <td className="px-4 py-3 text-sm text-center text-gray-700">
                        {team.easterEggs.length}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">
              Aucun score importé pour le moment.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Demandez aux équipes d'exporter leurs scores.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}


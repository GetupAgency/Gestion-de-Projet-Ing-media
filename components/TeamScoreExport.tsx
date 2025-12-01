'use client'

import { useState } from 'react'
import { Download, Upload, Share2 } from 'lucide-react'
import { getTeamData, type TeamData } from '@/lib/gameSystem'

export function TeamScoreExport() {
  const [showExport, setShowExport] = useState(false)
  const team = getTeamData()

  if (!team) return null

  const exportData = () => {
    const data = {
      ...team,
      exportedAt: new Date().toISOString(),
      exportedBy: team.teamName
    }
    
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `score-${team.teamName.replace(/\s/g, '-')}.json`
    a.click()
  }

  const copyToClipboard = () => {
    const summary = `
🏆 SCORE - ${team.teamName}
━━━━━━━━━━━━━━━━━━━━━━━━
Points : ${team.points}
Badges : ${team.badges.length}
Énigmes : ${team.easterEggs.length}
Jetons restants : ${team.tokens.expertQuestions}Q + ${team.tokens.revelations}I + ${team.tokens.joker}J
━━━━━━━━━━━━━━━━━━━━━━━━
Exporté le : ${new Date().toLocaleString('fr-FR')}
    `.trim()
    
    navigator.clipboard.writeText(summary)
    alert('Score copié ! Collez-le dans le chat de la classe.')
  }

  return (
    <div className="border-t pt-4 mt-4">
      <h4 className="font-semibold text-gray-900 mb-3">Partager votre score</h4>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Copier
        </button>
        <button
          onClick={exportData}
          className="flex items-center justify-center gap-2 px-3 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">
        Partagez votre score avec l'enseignant
      </p>
    </div>
  )
}

// Pour l'enseignant : Import des scores
export function TeacherScoreImport() {
  const [allScores, setAllScores] = useState<TeamData[]>([])

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string)
        setAllScores([...allScores, data])
      } catch (err) {
        alert('Fichier invalide')
      }
    }
    reader.readAsText(file)
  }

  const sortedScores = [...allScores].sort((a, b) => b.points - a.points)

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Import des Scores (Enseignant)</h3>
      
      <label className="block">
        <input
          type="file"
          accept=".json"
          onChange={handleFileImport}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
        />
      </label>

      {sortedScores.length > 0 && (
        <div className="mt-6">
          <h4 className="font-semibold mb-3">Classement :</h4>
          <div className="space-y-2">
            {sortedScores.map((team, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="font-bold text-gray-900">#{index + 1} {team.teamName}</span>
                  <span className="text-sm text-gray-600 ml-2">
                    {team.points} pts • {team.badges.length} badges • {team.easterEggs.length} énigmes
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


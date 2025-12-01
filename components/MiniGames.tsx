'use client'

import { useState } from 'react'
import { X, Trophy, Zap, Timer } from 'lucide-react'
import { addPoints } from '@/lib/gameSystem'

// Quiz rapide
const QUICK_QUIZ = [
  {
    question: "Un sprint dure combien de temps en général ?",
    answers: ["1 semaine", "2 semaines", "1 mois", "3 jours"],
    correct: 1,
    points: 15
  },
  {
    question: "Quelle méthode est la plus agile ?",
    answers: ["Cascade", "Scrum", "Cycle en V", "PERT"],
    correct: 1,
    points: 15
  },
  {
    question: "RGPD signifie ?",
    answers: ["Règlement Général Protection Données", "Réseau Général Public", "Registre Géré", "Rien"],
    correct: 0,
    points: 20
  },
  {
    question: "SLA c'est quoi ?",
    answers: ["Super Long Algo", "Service Level Agreement", "Système Linux Apache", "Sécurité Level A"],
    correct: 1,
    points: 15
  },
  {
    question: "Un wireframe c'est ?",
    answers: ["Un câble", "Un bug", "Un schéma d'interface", "Un serveur"],
    correct: 2,
    points: 15
  }
]

// Memory game - matching technos
const TECH_PAIRS = [
  { id: 1, name: 'React', match: 'Frontend' },
  { id: 2, name: 'Node.js', match: 'Backend' },
  { id: 3, name: 'PostgreSQL', match: 'Database' },
  { id: 4, name: 'Figma', match: 'Design' }
]

// Jeu de tri
const PROJECT_PHASES = [
  { id: 1, name: 'Lancement', order: 5 },
  { id: 2, name: 'Tests', order: 4 },
  { id: 3, name: 'Conception', order: 2 },
  { id: 4, name: 'Développement', order: 3 },
  { id: 5, name: 'Cadrage', order: 1 }
]

interface MiniGameProps {
  onClose: () => void
  gameType: 'quiz' | 'memory' | 'order' | 'speed'
}

export function MiniGame({ onClose, gameType }: MiniGameProps) {
  if (gameType === 'quiz') {
    return <QuickQuiz onClose={onClose} />
  } else if (gameType === 'memory') {
    return <TechMemory onClose={onClose} />
  } else if (gameType === 'order') {
    return <PhaseOrder onClose={onClose} />
  } else if (gameType === 'speed') {
    return <SpeedClick onClose={onClose} />
  }
  
  return null
}

// Quiz rapide
function QuickQuiz({ onClose }: { onClose: () => void }) {
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const question = QUICK_QUIZ[currentQ]
  const isLastQuestion = currentQ === QUICK_QUIZ.length - 1

  const handleAnswer = (index: number) => {
    if (answered) return
    
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (index === question.correct) {
      setScore(score + question.points)
    }
    
    setTimeout(() => {
      if (isLastQuestion) {
        // Fin du quiz
        addPoints(score + (index === question.correct ? question.points : 0), 'Quiz rapide complété')
        alert(`Quiz terminé ! Score : ${score + (index === question.correct ? question.points : 0)} points`)
        onClose()
      } else {
        setCurrentQ(currentQ + 1)
        setAnswered(false)
        setSelectedAnswer(null)
      }
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Quiz Express</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm text-gray-600">Question {currentQ + 1}/{QUICK_QUIZ.length}</span>
          <span className="text-sm font-bold text-purple-600">{score} pts</span>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg mb-6">
          <p className="text-lg font-semibold text-gray-900">{question.question}</p>
        </div>

        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              className={`w-full p-4 rounded-lg text-left transition-all ${
                answered
                  ? index === question.correct
                    ? 'bg-green-500 text-white'
                    : index === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-500'
                  : 'bg-gray-100 hover:bg-purple-100 text-gray-900'
              }`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Memory game - Matching
function TechMemory({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<{id: number, type: 'tech' | 'category'} | null>(null)
  const [matched, setMatched] = useState<number[]>([])
  const [score, setScore] = useState(0)

  const allItems = [
    ...TECH_PAIRS.map(p => ({ ...p, type: 'tech' as const })),
    ...TECH_PAIRS.map(p => ({ id: p.id + 100, name: p.match, type: 'category' as const }))
  ].sort(() => Math.random() - 0.5)

  const handleSelect = (item: any) => {
    if (matched.includes(item.id)) return
    
    if (!selected) {
      setSelected({ id: item.id, type: item.type })
    } else {
      // Vérifier le match
      const selectedItem = allItems.find(i => i.id === selected.id)
      if (!selectedItem) return
      
      let isMatch = false
      if (selected.type === 'tech' && item.type === 'category') {
        const tech = TECH_PAIRS.find(p => p.id === selected.id)
        isMatch = tech?.match === item.name
      } else if (selected.type === 'category' && item.type === 'tech') {
        const tech = TECH_PAIRS.find(p => p.id === item.id)
        isMatch = tech?.match === selectedItem.name
      }
      
      if (isMatch) {
        const newMatched = [...matched, selected.id, item.id]
        setMatched(newMatched)
        setScore(score + 20)
        
        if (newMatched.length === allItems.length) {
          setTimeout(() => {
            addPoints(80, 'Memory game réussi !')
            alert('Bravo ! Toutes les paires trouvées ! +80 points')
            onClose()
          }, 500)
        }
      }
      
      setSelected(null)
    }
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Memory Tech</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-4">Associe chaque technologie à sa catégorie !</p>
        <p className="text-sm font-bold text-purple-600 mb-6">Score : {score} pts</p>

        <div className="grid grid-cols-4 gap-3">
          {allItems.map((item) => {
            const isMatched = matched.includes(item.id)
            const isSelected = selected?.id === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                disabled={isMatched}
                className={`p-4 rounded-lg text-sm font-medium transition-all ${
                  isMatched
                    ? 'bg-green-500 text-white'
                    : isSelected
                    ? 'bg-purple-600 text-white scale-105'
                    : 'bg-gray-100 hover:bg-purple-100 text-gray-900'
                }`}
              >
                {item.name}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Remettre dans l'ordre
function PhaseOrder({ onClose }: { onClose: () => void }) {
  const [phases, setPhases] = useState([...PROJECT_PHASES].sort(() => Math.random() - 0.5))
  const [attempts, setAttempts] = useState(0)

  const checkOrder = () => {
    const isCorrect = phases.every((phase, index) => phase.order === index + 1)
    setAttempts(attempts + 1)
    
    if (isCorrect) {
      const points = Math.max(50 - (attempts * 10), 20)
      addPoints(points, 'Phases remises dans l\'ordre')
      alert(`Bravo ! Les phases sont dans le bon ordre !\n+${points} points`)
      onClose()
    } else {
      alert('Pas encore correct... Réessayez !')
    }
  }

  const movePhase = (index: number, direction: 'up' | 'down') => {
    const newPhases = [...phases]
    const newIndex = direction === 'up' ? index - 1 : index + 1
    
    if (newIndex < 0 || newIndex >= phases.length) return
    
    [newPhases[index], newPhases[newIndex]] = [newPhases[newIndex], newPhases[index]]
    setPhases(newPhases)
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Phases du Projet</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-6">Remets les phases dans le bon ordre chronologique !</p>

        <div className="space-y-3 mb-6">
          {phases.map((phase, index) => (
            <div key={phase.id} className="flex items-center gap-2">
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => movePhase(index, 'up')}
                  disabled={index === 0}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-30 text-xs"
                >
                  ↑
                </button>
                <button
                  onClick={() => movePhase(index, 'down')}
                  disabled={index === phases.length - 1}
                  className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-30 text-xs"
                >
                  ↓
                </button>
              </div>
              <div className="flex-1 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                <span className="font-medium text-gray-900">{phase.name}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={checkOrder}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700"
        >
          Vérifier l'ordre
        </button>
        
        {attempts > 0 && (
          <p className="text-sm text-gray-500 text-center mt-3">
            Tentatives : {attempts}
          </p>
        )}
      </div>
    </div>
  )
}

// Speed click challenge
function SpeedClick({ onClose }: { onClose: () => void }) {
  const [clicks, setClicks] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const [started, setStarted] = useState(false)

  const startGame = () => {
    setStarted(true)
    setClicks(0)
    setTimeLeft(10)
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          // Calcul des points selon performance
          const points = Math.floor(clicks * 2)
          addPoints(points, `${clicks} clics en 10 secondes`)
          setTimeout(() => {
            alert(`Terminé ! ${clicks} clics en 10 secondes.\n+${points} points`)
            onClose()
          }, 100)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Speed Click</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        {!started ? (
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Clique le plus vite possible pendant 10 secondes !
            </p>
            <button
              onClick={startGame}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700"
            >
              Démarrer
            </button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="text-6xl font-bold text-purple-600 mb-2">{timeLeft}</div>
              <div className="text-gray-600">secondes restantes</div>
            </div>
            
            <button
              onClick={() => setClicks(clicks + 1)}
              className="w-full h-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-4xl font-bold hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-transform"
            >
              CLIC !
            </button>
            
            <div className="mt-6 text-3xl font-bold text-gray-900">
              {clicks} clics
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Tech Memory
function TechMemory({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  
  const cards = [
    ...TECH_PAIRS.map(p => ({ id: p.id, text: p.name, pairId: p.id })),
    ...TECH_PAIRS.map(p => ({ id: p.id + 10, text: p.match, pairId: p.id }))
  ].sort(() => Math.random() - 0.5)

  const handleCardClick = (card: any) => {
    if (matched.includes(card.id) || selected.includes(card.id)) return
    if (selected.length >= 2) return
    
    const newSelected = [...selected, card.id]
    setSelected(newSelected)
    
    if (newSelected.length === 2) {
      const [first, second] = newSelected
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)
      
      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Match !
        setTimeout(() => {
          setMatched([...matched, first, second])
          setSelected([])
          
          if (matched.length + 2 === cards.length) {
            addPoints(60, 'Memory game réussi')
            setTimeout(() => {
              alert('Toutes les paires trouvées ! +60 points')
              onClose()
            }, 300)
          }
        }, 500)
      } else {
        // Pas match
        setTimeout(() => {
          setSelected([])
        }, 1000)
      }
    }
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Memory Tech</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-6">Retrouve les paires technologie/catégorie !</p>

        <div className="grid grid-cols-4 gap-3">
          {cards.map((card) => {
            const isMatched = matched.includes(card.id)
            const isSelected = selected.includes(card.id)
            
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(card)}
                disabled={isMatched}
                className={`h-20 rounded-lg text-sm font-medium transition-all ${
                  isMatched
                    ? 'bg-green-500 text-white'
                    : isSelected
                    ? 'bg-purple-600 text-white'
                    : 'bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-gray-900'
                }`}
              >
                {isSelected || isMatched ? card.text : '?'}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Phase Order
function PhaseOrder({ onClose }: { onClose: () => void }) {
  const [currentPhases, setCurrentPhases] = useState(
    [...PROJECT_PHASES].sort(() => Math.random() - 0.5)
  )

  const movePhase = (index: number, direction: 'up' | 'down') => {
    const newPhases = [...currentPhases]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    
    if (targetIndex < 0 || targetIndex >= newPhases.length) return
    
    [newPhases[index], newPhases[targetIndex]] = [newPhases[targetIndex], newPhases[index]]
    setCurrentPhases(newPhases)
  }

  const checkOrder = () => {
    const isCorrect = currentPhases.every((phase, index) => phase.order === index + 1)
    
    if (isCorrect) {
      addPoints(70, 'Phases ordonnées correctement')
      alert('Parfait ! Les phases sont dans le bon ordre chronologique.\n+70 points')
      onClose()
    } else {
      alert('Pas encore ! Réfléchis à l\'ordre logique d\'un projet...')
    }
  }

  return (
    <div className="fixed inset-0 z-[55] bg-black/70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Ordre des Phases</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-600 mb-6">Remets les phases dans l'ordre chronologique !</p>

        <div className="space-y-2 mb-6">
          {currentPhases.map((phase, index) => (
            <div key={phase.id} className="flex items-center gap-2">
              <div className="flex flex-col">
                <button
                  onClick={() => movePhase(index, 'up')}
                  disabled={index === 0}
                  className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded-t disabled:opacity-30 text-xs"
                >
                  ▲
                </button>
                <button
                  onClick={() => movePhase(index, 'down')}
                  disabled={index === currentPhases.length - 1}
                  className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded-b disabled:opacity-30 text-xs"
                >
                  ▼
                </button>
              </div>
              <div className="flex-1 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg text-center">
                <span className="font-semibold text-gray-900">{phase.name}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={checkOrder}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700"
        >
          Vérifier
        </button>
      </div>
    </div>
  )
}

// Bouton pour lancer les mini-jeux
export function MiniGameLauncher() {
  const [activeGame, setActiveGame] = useState<string | null>(null)

  return (
    <>
      <div className="fixed left-4 top-20 z-[25] space-y-2">
        <button
          onClick={() => setActiveGame('quiz')}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          title="Quiz Express"
        >
          <Zap className="w-4 h-4" />
          Quiz
        </button>
        
        <button
          onClick={() => setActiveGame('memory')}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          title="Memory Tech"
        >
          <Trophy className="w-4 h-4" />
          Memory
        </button>
        
        <button
          onClick={() => setActiveGame('order')}
          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          title="Ordre des Phases"
        >
          <Timer className="w-4 h-4" />
          Ordre
        </button>
      </div>

      {activeGame && (
        <MiniGame
          gameType={activeGame as any}
          onClose={() => setActiveGame(null)}
        />
      )}
    </>
  )
}


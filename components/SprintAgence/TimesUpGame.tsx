'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronRight, Pause, Play, RotateCcw, SkipForward, Trophy, X } from 'lucide-react'
import { drawHand, timesUpRounds, type TimesUpCard } from '@/data/timesUp'

type Phase =
  | 'setup' // saisie noms d'équipes + taille du paquet + durée du tour
  | 'round-intro' // règle de la manche, bouton démarrer
  | 'turn-ready' // au tour de l'équipe X, bouton lancer
  | 'playing' // chronomètre actif, on parcourt les cartes
  | 'turn-end' // récap des cartes trouvées/passées du tour
  | 'round-end' // scores de la manche
  | 'game-end' // scores finaux

type TeamId = 'A' | 'B'

interface TeamState {
  name: string
  // un score par manche pour pouvoir afficher la décomposition
  perRound: [number, number, number]
}

const DEFAULT_TURN_SECONDS = 30
const DEFAULT_HAND_SIZE = 40

export default function TimesUpGame() {
  // --- Setup state -------------------------------------------------
  const [phase, setPhase] = useState<Phase>('setup')
  const [teamA, setTeamA] = useState<TeamState>({ name: 'Équipe Bleue', perRound: [0, 0, 0] })
  const [teamB, setTeamB] = useState<TeamState>({ name: 'Équipe Ambre', perRound: [0, 0, 0] })
  const [handSize, setHandSize] = useState(DEFAULT_HAND_SIZE)
  const [turnSeconds, setTurnSeconds] = useState(DEFAULT_TURN_SECONDS)

  // --- Game state --------------------------------------------------
  const [hand, setHand] = useState<TimesUpCard[]>([])
  const [roundIdx, setRoundIdx] = useState<0 | 1 | 2>(0)
  const [remaining, setRemaining] = useState<TimesUpCard[]>([])
  const [currentTeam, setCurrentTeam] = useState<TeamId>('A')
  const [currentCard, setCurrentCard] = useState<TimesUpCard | null>(null)
  const [foundThisTurn, setFoundThisTurn] = useState<TimesUpCard[]>([])
  const [passedThisTurn, setPassedThisTurn] = useState<TimesUpCard[]>([])
  const [timeLeft, setTimeLeft] = useState(turnSeconds)
  const [paused, setPaused] = useState(false)

  // --- Timer -------------------------------------------------------
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (phase !== 'playing' || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          // Le useEffect ci-dessous transitionne quand timeLeft passe à 0.
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [phase, paused])

  // Quand le timer atteint 0 pendant qu'on joue, on clôt le tour.
  useEffect(() => {
    if (phase === 'playing' && timeLeft === 0) {
      endTurn()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase])

  // --- Helpers -----------------------------------------------------

  const startGame = () => {
    const newHand = drawHand(handSize)
    setHand(newHand)
    setRoundIdx(0)
    setTeamA(t => ({ ...t, perRound: [0, 0, 0] }))
    setTeamB(t => ({ ...t, perRound: [0, 0, 0] }))
    setCurrentTeam('A')
    setRemaining(newHand)
    setPhase('round-intro')
  }

  const startRound = () => {
    // mélange à nouveau les mêmes cartes du paquet pour la nouvelle manche
    const reshuffled = [...hand].sort(() => Math.random() - 0.5)
    setRemaining(reshuffled)
    setPhase('turn-ready')
  }

  const startTurn = () => {
    const [first, ...rest] = remaining
    setCurrentCard(first ?? null)
    setRemaining(rest)
    setFoundThisTurn([])
    setPassedThisTurn([])
    setTimeLeft(turnSeconds)
    setPaused(false)
    setPhase('playing')
  }

  const handleFound = () => {
    if (!currentCard) return
    setFoundThisTurn(arr => [...arr, currentCard])
    addScore(currentTeam, 1)
    advanceCard()
  }

  const handlePass = () => {
    if (!currentCard) return
    // la carte passée retourne à la fin du paquet de la manche en cours
    setPassedThisTurn(arr => [...arr, currentCard])
    setRemaining(arr => [...arr, currentCard])
    advanceCard(true)
  }

  const advanceCard = (_wasPassed = false) => {
    setRemaining(arr => {
      if (arr.length === 0) {
        // plus aucune carte disponible : fin de manche immédiate
        finishRound()
        return arr
      }
      const [next, ...rest] = arr
      setCurrentCard(next)
      return rest
    })
  }

  const addScore = (team: TeamId, delta: number) => {
    const setter = team === 'A' ? setTeamA : setTeamB
    setter(t => {
      const updated: [number, number, number] = [...t.perRound] as [number, number, number]
      updated[roundIdx] = updated[roundIdx] + delta
      return { ...t, perRound: updated }
    })
  }

  const endTurn = () => {
    setPhase('turn-end')
  }

  const continueAfterTurn = () => {
    if (remaining.length === 0) {
      finishRound()
      return
    }
    setCurrentTeam(t => (t === 'A' ? 'B' : 'A'))
    setPhase('turn-ready')
  }

  const finishRound = () => {
    setPhase('round-end')
  }

  const goNextRound = () => {
    if (roundIdx === 2) {
      setPhase('game-end')
      return
    }
    const nextIdx = (roundIdx + 1) as 0 | 1 | 2
    setRoundIdx(nextIdx)
    setCurrentTeam(t => (t === 'A' ? 'B' : 'A'))
    setPhase('round-intro')
  }

  const resetGame = () => {
    if (!confirm('Recommencer une partie ?')) return
    setPhase('setup')
    setHand([])
    setRemaining([])
    setCurrentCard(null)
    setFoundThisTurn([])
    setPassedThisTurn([])
    setTimeLeft(turnSeconds)
    setRoundIdx(0)
    setCurrentTeam('A')
    setTeamA(t => ({ ...t, perRound: [0, 0, 0] }))
    setTeamB(t => ({ ...t, perRound: [0, 0, 0] }))
  }

  // --- Helpers de rendu --------------------------------------------

  const totals = {
    A: teamA.perRound[0] + teamA.perRound[1] + teamA.perRound[2],
    B: teamB.perRound[0] + teamB.perRound[1] + teamB.perRound[2],
  }
  const round = timesUpRounds[roundIdx]
  const activeTeam = currentTeam === 'A' ? teamA : teamB

  // --- Render ------------------------------------------------------

  return (
    <div className="tu-root">
      {/* Bandeau scores permanent dès qu'une partie est lancée */}
      {phase !== 'setup' && (
        <div className="tu-scoreboard">
          <TeamScore
            team={teamA}
            isActive={phase === 'playing' && currentTeam === 'A'}
            total={totals.A}
            color="blue"
          />
          <div className="tu-scoreboard-center">
            <span className="tu-round-label">{round.emoji} {round.shortLabel}</span>
            <span className="tu-round-progress">Manche {roundIdx + 1} / 3</span>
          </div>
          <TeamScore
            team={teamB}
            isActive={phase === 'playing' && currentTeam === 'B'}
            total={totals.B}
            color="amber"
            alignRight
          />
        </div>
      )}

      <div className="tu-stage">
        {phase === 'setup' && (
          <Setup
            teamA={teamA}
            teamB={teamB}
            handSize={handSize}
            turnSeconds={turnSeconds}
            onTeamA={n => setTeamA(t => ({ ...t, name: n }))}
            onTeamB={n => setTeamB(t => ({ ...t, name: n }))}
            onHandSize={setHandSize}
            onTurnSeconds={setTurnSeconds}
            onStart={startGame}
          />
        )}

        {phase === 'round-intro' && (
          <RoundIntro
            roundIdx={roundIdx}
            handSize={hand.length}
            onStart={startRound}
          />
        )}

        {phase === 'turn-ready' && (
          <TurnReady team={activeTeam} remaining={remaining.length} onStart={startTurn} />
        )}

        {phase === 'playing' && currentCard && (
          <Playing
            card={currentCard}
            timeLeft={timeLeft}
            turnSeconds={turnSeconds}
            paused={paused}
            onFound={handleFound}
            onPass={handlePass}
            onPause={() => setPaused(p => !p)}
          />
        )}

        {phase === 'turn-end' && (
          <TurnEnd
            team={activeTeam}
            found={foundThisTurn}
            passed={passedThisTurn}
            remaining={remaining.length}
            onContinue={continueAfterTurn}
          />
        )}

        {phase === 'round-end' && (
          <RoundEnd
            roundIdx={roundIdx}
            teamA={teamA}
            teamB={teamB}
            onNext={goNextRound}
          />
        )}

        {phase === 'game-end' && (
          <GameEnd
            teamA={teamA}
            teamB={teamB}
            totals={totals}
            onReset={resetGame}
          />
        )}
      </div>
    </div>
  )
}

// =====================================================================
// Sub-composants
// =====================================================================

function TeamScore({
  team,
  isActive,
  total,
  color,
  alignRight,
}: {
  team: TeamState
  isActive: boolean
  total: number
  color: 'blue' | 'amber'
  alignRight?: boolean
}) {
  return (
    <div className={`tu-team tu-team-${color} ${isActive ? 'is-active' : ''} ${alignRight ? 'is-right' : ''}`}>
      <span className="tu-team-name">{team.name}</span>
      <div className="tu-team-scores">
        <span className="tu-team-total">{total}</span>
        <span className="tu-team-rounds">
          {team.perRound.map((s, i) => (
            <span key={i} className="tu-team-round">{s}</span>
          ))}
        </span>
      </div>
    </div>
  )
}

function Setup({
  teamA,
  teamB,
  handSize,
  turnSeconds,
  onTeamA,
  onTeamB,
  onHandSize,
  onTurnSeconds,
  onStart,
}: {
  teamA: TeamState
  teamB: TeamState
  handSize: number
  turnSeconds: number
  onTeamA: (n: string) => void
  onTeamB: (n: string) => void
  onHandSize: (n: number) => void
  onTurnSeconds: (n: number) => void
  onStart: () => void
}) {
  return (
    <div className="tu-setup">
      <header className="tu-setup-head">
        <span className="tu-setup-eyebrow">Time's Up du PM</span>
        <h2>Pause détente, en équipes</h2>
        <p>Trois manches sur le même paquet : libre, trois mots, mime. Le rire prime, le score suit.</p>
      </header>

      <div className="tu-setup-grid">
        <label className="tu-field">
          <span className="tu-field-label">Équipe A</span>
          <input
            type="text"
            value={teamA.name}
            onChange={e => onTeamA(e.target.value)}
            className="tu-input"
          />
        </label>
        <label className="tu-field">
          <span className="tu-field-label">Équipe B</span>
          <input
            type="text"
            value={teamB.name}
            onChange={e => onTeamB(e.target.value)}
            className="tu-input"
          />
        </label>
      </div>

      <div className="tu-setup-grid">
        <label className="tu-field">
          <span className="tu-field-label">Taille du paquet</span>
          <select
            value={handSize}
            onChange={e => onHandSize(Number(e.target.value))}
            className="tu-input"
          >
            <option value={20}>20 cartes (rapide)</option>
            <option value={30}>30 cartes</option>
            <option value={40}>40 cartes (classique)</option>
            <option value={50}>50 cartes (long)</option>
          </select>
        </label>
        <label className="tu-field">
          <span className="tu-field-label">Durée d'un tour</span>
          <select
            value={turnSeconds}
            onChange={e => onTurnSeconds(Number(e.target.value))}
            className="tu-input"
          >
            <option value={30}>30 secondes (classique)</option>
            <option value={45}>45 secondes</option>
            <option value={60}>60 secondes (cool)</option>
          </select>
        </label>
      </div>

      <button onClick={onStart} className="tu-btn tu-btn-primary">
        Distribuer le paquet
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function RoundIntro({
  roundIdx,
  handSize,
  onStart,
}: {
  roundIdx: 0 | 1 | 2
  handSize: number
  onStart: () => void
}) {
  const round = timesUpRounds[roundIdx]
  return (
    <div className="tu-round-intro">
      <span className="tu-round-emoji">{round.emoji}</span>
      <h2>{round.label}</h2>
      <p className="tu-round-rule">{round.rule}</p>
      <p className="tu-round-meta">{handSize} cartes dans le paquet, on les fait toutes deviner.</p>
      <button onClick={onStart} className="tu-btn tu-btn-primary">
        Démarrer la manche
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function TurnReady({
  team,
  remaining,
  onStart,
}: {
  team: TeamState
  remaining: number
  onStart: () => void
}) {
  return (
    <div className="tu-turn-ready">
      <span className="tu-turn-eyebrow">À leur tour</span>
      <h2>{team.name}</h2>
      <p>{remaining} cartes restantes dans la manche.</p>
      <p className="tu-turn-tip">Désignez un porte-parole, posez le téléphone vers vous, et lancez le chrono quand vous êtes prêts.</p>
      <button onClick={onStart} className="tu-btn tu-btn-primary">
        Lancer le chrono
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function Playing({
  card,
  timeLeft,
  turnSeconds,
  paused,
  onFound,
  onPass,
  onPause,
}: {
  card: TimesUpCard
  timeLeft: number
  turnSeconds: number
  paused: boolean
  onFound: () => void
  onPass: () => void
  onPause: () => void
}) {
  const pct = Math.max(0, Math.min(100, (timeLeft / turnSeconds) * 100))
  const urgent = timeLeft <= 5

  return (
    <div className={`tu-playing ${urgent ? 'is-urgent' : ''} ${paused ? 'is-paused' : ''}`}>
      <div className="tu-timer">
        <div className="tu-timer-bar" style={{ width: `${pct}%` }} />
        <span className="tu-timer-value">{timeLeft}s</span>
        <button onClick={onPause} className="tu-timer-pause" type="button" aria-label={paused ? 'Reprendre' : 'Pause'}>
          {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
      </div>

      <div className={`tu-card tu-card-level-${card.level}`}>
        <span className="tu-card-level">Niveau {card.level}</span>
        <h2 className="tu-card-label">{card.label}</h2>
      </div>

      <div className="tu-actions">
        <button onClick={onPass} className="tu-btn tu-btn-pass" type="button">
          <SkipForward className="w-5 h-5" />
          Passer
        </button>
        <button onClick={onFound} className="tu-btn tu-btn-found" type="button">
          <Check className="w-5 h-5" />
          Trouvé !
        </button>
      </div>
    </div>
  )
}

function TurnEnd({
  team,
  found,
  passed,
  remaining,
  onContinue,
}: {
  team: TeamState
  found: TimesUpCard[]
  passed: TimesUpCard[]
  remaining: number
  onContinue: () => void
}) {
  return (
    <div className="tu-turn-end">
      <span className="tu-turn-eyebrow">Tour terminé</span>
      <h2>+{found.length} pour {team.name}</h2>

      <div className="tu-recap-grid">
        <section>
          <h3 className="tu-recap-title tu-recap-found">
            <Check className="w-4 h-4" /> Trouvées ({found.length})
          </h3>
          {found.length === 0 ? (
            <p className="tu-recap-empty">Aucune cette fois.</p>
          ) : (
            <ul className="tu-recap-list">
              {found.map(c => <li key={c.id}>{c.label}</li>)}
            </ul>
          )}
        </section>
        <section>
          <h3 className="tu-recap-title tu-recap-passed">
            <X className="w-4 h-4" /> Passées ({passed.length})
          </h3>
          {passed.length === 0 ? (
            <p className="tu-recap-empty">Pas une seule passe.</p>
          ) : (
            <ul className="tu-recap-list">
              {passed.map(c => <li key={c.id}>{c.label}</li>)}
            </ul>
          )}
        </section>
      </div>

      <p className="tu-turn-meta">{remaining} cartes encore à faire deviner dans la manche.</p>
      <button onClick={onContinue} className="tu-btn tu-btn-primary">
        {remaining === 0 ? 'Voir les scores de la manche' : 'Tour suivant'}
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function RoundEnd({
  roundIdx,
  teamA,
  teamB,
  onNext,
}: {
  roundIdx: 0 | 1 | 2
  teamA: TeamState
  teamB: TeamState
  onNext: () => void
}) {
  const round = timesUpRounds[roundIdx]
  const a = teamA.perRound[roundIdx]
  const b = teamB.perRound[roundIdx]
  const isLast = roundIdx === 2
  return (
    <div className="tu-round-end">
      <span className="tu-round-emoji">{round.emoji}</span>
      <h2>Fin de la {round.label.toLowerCase()}</h2>

      <div className="tu-round-scores">
        <div className="tu-round-team tu-team-blue">
          <span className="tu-round-team-name">{teamA.name}</span>
          <span className="tu-round-team-points">+{a}</span>
        </div>
        <div className="tu-round-team tu-team-amber">
          <span className="tu-round-team-name">{teamB.name}</span>
          <span className="tu-round-team-points">+{b}</span>
        </div>
      </div>

      <button onClick={onNext} className="tu-btn tu-btn-primary">
        {isLast ? 'Voir le classement final' : `Aller à la ${timesUpRounds[(roundIdx + 1) as 0 | 1 | 2].label.toLowerCase()}`}
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

function GameEnd({
  teamA,
  teamB,
  totals,
  onReset,
}: {
  teamA: TeamState
  teamB: TeamState
  totals: { A: number; B: number }
  onReset: () => void
}) {
  const winner = totals.A === totals.B ? null : totals.A > totals.B ? teamA : teamB
  return (
    <div className="tu-game-end">
      <Trophy className="w-12 h-12 text-amber-500" />
      <h2>{winner ? `Bravo ${winner.name} !` : 'Match nul, on rejoue ?'}</h2>

      <div className="tu-final-grid">
        <FinalTeam team={teamA} total={totals.A} color="blue" />
        <FinalTeam team={teamB} total={totals.B} color="amber" />
      </div>

      <button onClick={onReset} className="tu-btn tu-btn-secondary">
        <RotateCcw className="w-4 h-4" />
        Refaire une partie
      </button>
    </div>
  )
}

function FinalTeam({
  team,
  total,
  color,
}: {
  team: TeamState
  total: number
  color: 'blue' | 'amber'
}) {
  return (
    <div className={`tu-final-team tu-team-${color}`}>
      <span className="tu-final-name">{team.name}</span>
      <span className="tu-final-total">{total}</span>
      <ul className="tu-final-detail">
        {team.perRound.map((s, i) => (
          <li key={i}>
            <span>Manche {i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

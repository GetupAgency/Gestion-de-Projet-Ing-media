'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, RotateCcw } from 'lucide-react'
import lexiqueData from '@/data/lexique.json'
import Cartouche from '@/components/Cartouche'
import Footer from '@/components/Footer'
import Stamp from '@/components/Stamp'

/**
 * Time’s Up du lexique : la classe en trois équipes, un terme à deviner parmi quatre,
 * un premier indice, un second quelques secondes plus tard, un chrono. Série par équipe, score à la fin.
 * Pensé pour être projeté : gros texte, réponses au clavier (1 à 4), l’enseignant tient la souris.
 */

interface Term { term: string; definition: string; importance: number }
interface Section { id: string; label: string; terms: Term[] }
interface Question { term: string; section: string; clue1: string; clue2: string; options: string[]; correct: number }
interface Team { id: 'rouge' | 'bleu' | 'vert'; label: string; color: string }
type Phase = 'setup' | 'handoff' | 'question' | 'reveal' | 'end'
type Outcome = { kind: 'early' | 'late' | 'wrong' | 'timeout'; points: number; chosen: number | null }

const TEAMS: Team[] = [
  { id: 'rouge', label: 'Équipe rouge', color: '#c8321e' },
  { id: 'bleu', label: 'Équipe bleue', color: '#2b41e5' },
  { id: 'vert', label: 'Équipe verte', color: '#1f7a3a' },
]
const POINTS = { early: 3, late: 2, wrong: -1, timeout: 0 }
const KEYS = ['1', '2', '3', '4']

const sections = (lexiqueData as { sections: Section[] }).sections

function shuffle<T>(a: T[]): T[] {
  const s = [...a]
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[s[i], s[j]] = [s[j], s[i]]
  }
  return s
}

/** Masque le terme s'il apparaît dans sa propre définition. */
function mask(text: string, term: string): string {
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(new RegExp(esc, 'gi'), '▒▒▒')
}

function buildQuestions(sectionIds: string[], count: number): Question[] {
  const pool = sections.filter((s) => sectionIds.includes(s.id))
  const all = pool.flatMap((s) => s.terms.map((t) => ({ ...t, section: s.label, sectionId: s.id })))
  const picked = shuffle(all).slice(0, count)
  return picked.map((t) => {
    const same = all.filter((o) => o.sectionId === t.sectionId && o.term !== t.term)
    const others = all.filter((o) => o.sectionId !== t.sectionId)
    const distractors = shuffle(same).slice(0, 3)
    if (distractors.length < 3) distractors.push(...shuffle(others).slice(0, 3 - distractors.length))
    const options = shuffle([t.term, ...distractors.map((d) => d.term)])
    const def = mask(t.definition, t.term)
    const words = def.split(' ')
    const half = Math.max(4, Math.ceil(words.length / 2))
    return {
      term: t.term,
      section: t.section,
      clue1: `${words.slice(0, half).join(' ')}…`,
      clue2: def,
      options,
      correct: options.indexOf(t.term),
    }
  })
}

export default function TimesUpLexique() {
  const [phase, setPhase] = useState<Phase>('setup')
  const [selected, setSelected] = useState<string[]>(sections.map((s) => s.id))
  const [teamCount, setTeamCount] = useState(3)
  const [perTeam, setPerTeam] = useState(10)
  const [clueDelay, setClueDelay] = useState(5)
  const [total, setTotal] = useState(10)

  const [questions, setQuestions] = useState<Question[]>([])
  const [teamIdx, setTeamIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [scores, setScores] = useState<number[]>([0, 0, 0])
  const [rights, setRights] = useState<number[]>([0, 0, 0])
  const [elapsed, setElapsed] = useState(0)
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const startRef = useRef(0)
  const answeredRef = useRef(false)

  const teams = TEAMS.slice(0, teamCount)
  const team = teams[teamIdx]
  const question = questions[teamIdx * perTeam + qIdx]
  const available = useMemo(() => sections.filter((s) => selected.includes(s.id)).reduce((n, s) => n + s.terms.length, 0), [selected])
  const needed = teamCount * perTeam

  const start = () => {
    setQuestions(buildQuestions(selected, needed))
    setScores([0, 0, 0])
    setRights([0, 0, 0])
    setTeamIdx(0)
    setQIdx(0)
    setPhase('handoff')
  }

  const launch = () => {
    answeredRef.current = false
    setOutcome(null)
    setElapsed(0)
    startRef.current = performance.now()
    setPhase('question')
  }

  const settle = useCallback(
    (chosen: number | null) => {
      if (answeredRef.current || !question) return
      answeredRef.current = true
      const t = (performance.now() - startRef.current) / 1000
      let kind: Outcome['kind']
      if (chosen === null) kind = 'timeout'
      else if (chosen !== question.correct) kind = 'wrong'
      else kind = t < clueDelay ? 'early' : 'late'
      const points = POINTS[kind]
      setScores((s) => s.map((v, i) => (i === teamIdx ? v + points : v)))
      if (kind === 'early' || kind === 'late') setRights((r) => r.map((v, i) => (i === teamIdx ? v + 1 : v)))
      setOutcome({ kind, points, chosen })
      setPhase('reveal')
    },
    [question, clueDelay, teamIdx],
  )

  // Chrono
  useEffect(() => {
    if (phase !== 'question') return
    const id = setInterval(() => {
      const t = (performance.now() - startRef.current) / 1000
      setElapsed(t)
      if (t >= total) settle(null)
    }, 100)
    return () => clearInterval(id)
  }, [phase, total, settle])

  // Enchaînement après la révélation
  useEffect(() => {
    if (phase !== 'reveal') return
    const id = setTimeout(() => {
      if (qIdx + 1 < perTeam) {
        setQIdx((i) => i + 1)
        launch()
      } else if (teamIdx + 1 < teamCount) {
        setTeamIdx((i) => i + 1)
        setQIdx(0)
        setPhase('handoff')
      } else {
        setPhase('end')
      }
    }, 2200)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  // Clavier : 1-4 pour répondre, Entrée pour lancer une série
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === 'question' && KEYS.includes(e.key)) settle(Number(e.key) - 1)
      if (phase === 'handoff' && e.key === 'Enter') launch()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, settle])

  const showClue2 = phase === 'reveal' || elapsed >= clueDelay
  const remaining = Math.max(0, total - elapsed)
  const teamStyle = team ? ({ '--team': team.color } as React.CSSProperties) : undefined

  return (
    <div className="min-h-screen">
      <Cartouche
        back={{ href: '/lexique', label: 'Retour au lexique' }}
        title="Time’s Up du lexique"
        lead="La classe en trois équipes. Un premier indice, un second quelques secondes plus tard, dix secondes pour choisir le bon terme parmi quatre. Une série par équipe, le score à la fin."
        meta={[
          { label: 'Réf.', value: `Annexe A5 · ${sections.reduce((n, s) => n + s.terms.length, 0)} termes du lexique` },
          { label: 'Barème', value: `Juste avant le 2e indice +${POINTS.early} · après +${POINTS.late} · faux ${POINTS.wrong} · temps écoulé 0` },
          { label: 'Clavier', value: 'Touches 1 à 4 pour répondre · Entrée pour lancer une série' },
        ]}
      />

      <main className="mx-auto max-w-page px-4 py-10 sm:px-6 lg:px-8">
        {phase === 'setup' && (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <section aria-labelledby="tul-sections">
              <h2 id="tul-sections" className="display-narrow text-2xl">Thèmes du paquet</h2>
              <p className="mt-1 text-sm text-ink-2">Les distracteurs viennent du même thème que le terme à trouver : moins de thèmes, plus dur.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {sections.map((s) => {
                  const on = selected.includes(s.id)
                  return (
                    <button key={s.id} type="button" className={`chip ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => setSelected((sel) => (on ? sel.filter((x) => x !== s.id) : [...sel, s.id]))}>
                      {s.label} <span className="num text-xs opacity-70">{s.terms.length}</span>
                    </button>
                  )
                })}
              </div>
              <div className="mt-3 flex gap-3">
                <button type="button" className="btn btn--sm" onClick={() => setSelected(sections.map((s) => s.id))}>Tout</button>
                <button type="button" className="btn btn--sm" onClick={() => setSelected([])}>Rien</button>
              </div>

              <h2 className="display-narrow mt-10 text-2xl">Réglages</h2>
              <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                <Setting label="Équipes" value={teamCount} choices={[2, 3]} onChange={setTeamCount} format={(v) => `${v} équipes`} />
                <Setting label="Questions par équipe" value={perTeam} choices={[5, 10, 15]} onChange={setPerTeam} />
                <Setting label="Second indice après" value={clueDelay} choices={[3, 5, 7]} onChange={setClueDelay} format={(v) => `${v} s`} />
                <Setting label="Temps pour répondre" value={total} choices={[10, 15, 20]} onChange={setTotal} format={(v) => `${v} s`} />
              </dl>
            </section>

            <aside className="sheet sheet--yellow perforated lg:sticky lg:top-6 lg:self-start">
              <span className="sheet__tab">Règle du jeu</span>
              <div className="sheet__body">
                <ol className="doc">
                  <li>Chaque équipe joue sa série d’affilée, les autres se taisent.</li>
                  <li>Le premier indice est le début de la définition ; le second, la définition entière.</li>
                  <li>L’équipe crie un numéro, l’enseignant tape la touche. Une seule réponse.</li>
                  <li>Répondre avant le second indice rapporte plus, se tromper coûte un point. Attendre est une stratégie.</li>
                </ol>
                <p className="mt-4 text-sm text-ink-2">
                  Paquet : <span className="num">{available}</span> termes disponibles pour <span className="num">{needed}</span> questions.
                </p>
                <button type="button" className="btn btn--primary mt-4" disabled={available < needed} onClick={start}>
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Lancer la partie
                </button>
                {available < needed && <p className="mt-2 text-sm text-red-ink">Pas assez de termes : ajoutez un thème ou réduisez la série.</p>}
              </div>
            </aside>
          </div>
        )}

        {phase !== 'setup' && phase !== 'end' && team && (
          <div className="tul-board" style={teamStyle}>
            <div className="tul-bar" />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule px-5 py-3">
              <span className="tul-team">{team.label}</span>
              <span className="label">
                Question <span className="num">{Math.min(qIdx + 1, perTeam)}</span> / <span className="num">{perTeam}</span>
              </span>
              <span className="label">
                Score <span className="num text-base">{scores[teamIdx]}</span>
              </span>
            </div>

            {phase === 'handoff' && (
              <div className="px-5 py-16 text-center">
                <p className="label">Au tour de</p>
                <p className="tul-team-big mt-2">{team.label}</p>
                <p className="mt-4 text-ink-2">{perTeam} termes, {total} secondes chacun. Les autres équipes écoutent.</p>
                <button type="button" className="btn btn--primary mt-8" onClick={launch}>
                  <Play className="h-4 w-4" aria-hidden="true" />
                  Lancer la série
                </button>
              </div>
            )}

            {(phase === 'question' || phase === 'reveal') && question && (
              <div className="px-5 py-6 sm:px-8">
                <div className="tul-timer" aria-hidden="true">
                  <div className="tul-timer__fill" style={{ width: `${(remaining / total) * 100}%` }} />
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="label">{question.section}</span>
                  <span className="num text-2xl font-bold" aria-live="off">{phase === 'question' ? Math.ceil(remaining) : '—'}</span>
                </div>

                <p className="tul-clue mt-6">{question.clue1}</p>
                <p className={`tul-clue tul-clue--2 mt-3 ${showClue2 ? 'is-on' : ''}`} aria-hidden={!showClue2}>
                  {showClue2 ? question.clue2 : `Second indice dans ${Math.max(0, Math.ceil(clueDelay - elapsed))} s`}
                </p>

                <ol className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {question.options.map((o, i) => {
                    const state = phase === 'reveal' ? (i === question.correct ? 'is-correct' : outcome?.chosen === i ? 'is-wrong' : '') : ''
                    return (
                      <li key={o}>
                        <button type="button" className={`tul-option ${state}`} disabled={phase !== 'question'} onClick={() => settle(i)}>
                          <span className="tul-key num">{i + 1}</span>
                          <span>{o}</span>
                        </button>
                      </li>
                    )
                  })}
                </ol>

                {phase === 'reveal' && outcome && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Stamp tone={outcome.points > 0 ? 'done' : outcome.points < 0 ? 'red' : 'ink'} size="lg" press tilt={-6}>
                      {outcome.kind === 'early' && `Juste, avant l’indice · +${outcome.points}`}
                      {outcome.kind === 'late' && `Juste · +${outcome.points}`}
                      {outcome.kind === 'wrong' && `Raté · ${outcome.points}`}
                      {outcome.kind === 'timeout' && 'Temps écoulé · 0'}
                    </Stamp>
                    <span className="text-ink-2">
                      Réponse : <strong className="text-ink">{question.term}</strong>
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {phase === 'end' && (
          <section aria-labelledby="tul-score">
            <h2 id="tul-score" className="display-narrow text-2xl">Score final</h2>
            <table className="ledger mt-4">
              <thead>
                <tr>
                  <th className="w-12">Rang</th>
                  <th>Équipe</th>
                  <th className="w-32 text-right">Bonnes réponses</th>
                  <th className="w-24 text-right">Points</th>
                  <th className="w-40">État</th>
                </tr>
              </thead>
              <tbody>
                {teams
                  .map((t, i) => ({ t, i, score: scores[i], right: rights[i] }))
                  .sort((a, b) => b.score - a.score)
                  .map((row, rank) => (
                    <tr key={row.t.id}>
                      <td className="num text-sm font-semibold text-ink-3">{String(rank + 1).padStart(2, '0')}</td>
                      <td>
                        <span className="tul-dot" style={{ background: row.t.color }} aria-hidden="true" /> <span className="font-semibold">{row.t.label}</span>
                      </td>
                      <td className="num text-right">{row.right} / {perTeam}</td>
                      <td className="num text-right text-xl font-bold">{row.score}</td>
                      <td>{rank === 0 && <Stamp tone="done" size="lg" tilt={-7} press>Vainqueur</Stamp>}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn btn--primary" onClick={start}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Rejouer, même réglage, nouveau tirage
              </button>
              <button type="button" className="btn" onClick={() => setPhase('setup')}>Changer les réglages</button>
              <Link href="/lexique" className="btn">
                Revoir le lexique
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

function Setting({ label, value, choices, onChange, format }: { label: string; value: number; choices: number[]; onChange: (v: number) => void; format?: (v: number) => string }) {
  return (
    <div>
      <dt className="label">{label}</dt>
      <dd className="mt-2 flex flex-wrap gap-2">
        {choices.map((c) => (
          <button key={c} type="button" className={`chip ${c === value ? 'is-on' : ''}`} aria-pressed={c === value} onClick={() => onChange(c)}>
            {format ? format(c) : c}
          </button>
        ))}
      </dd>
    </div>
  )
}

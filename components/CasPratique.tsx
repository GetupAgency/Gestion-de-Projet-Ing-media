'use client'

import { useEffect, useState } from 'react'
import { Eye, EyeOff, Lock, Save } from 'lucide-react'
import { isTeacherMode } from '@/lib/teacherMode'
import { toHtml } from '@/lib/htmlLite'

interface CasPratiqueProps {
  moduleId: string
  sectionId: string
  title: string
  description: string
  exercice: string
  hasCorrection: boolean
  caseIndex?: number
}

/**
 * Feuillet jaune : l'exercice. Feuillet rose : la correction, servie par l'API
 * uniquement à un enseignant authentifié (jamais présente dans le bundle).
 * Le HTML injecté provient exclusivement des fichiers data/*.ts du dépôt.
 */
export default function CasPratique({ moduleId, sectionId, title, description, exercice, hasCorrection, caseIndex = 0 }: CasPratiqueProps) {
  const [isTeacher, setIsTeacher] = useState(false)
  const [correction, setCorrection] = useState<string | null>(null)
  const [showCorrection, setShowCorrection] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [answer, setAnswer] = useState('')
  const [savedAt, setSavedAt] = useState<string | null>(null)

  const storageKey = `answer:${moduleId}:${sectionId}:${caseIndex}`

  useEffect(() => {
    setIsTeacher(isTeacherMode())
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) setAnswer(saved)
    } catch {
      /* stockage indisponible */
    }
  }, [storageKey])

  const saveAnswer = () => {
    try {
      localStorage.setItem(storageKey, answer)
      setSavedAt(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }))
    } catch {
      setSavedAt(null)
    }
  }

  const toggleCorrection = async () => {
    if (showCorrection) {
      setShowCorrection(false)
      return
    }
    if (correction) {
      setShowCorrection(true)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/correction?module=${encodeURIComponent(moduleId)}&section=${encodeURIComponent(sectionId)}&case=${caseIndex}`)
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Correction indisponible')
      setCorrection(data.html)
      setShowCorrection(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Correction indisponible')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section aria-labelledby={`cas-${sectionId}-${caseIndex}`}>
      <div className="sheet sheet--yellow perforated">
        <span className="sheet__tab">Copie jaune · Cas pratique{caseIndex > 0 ? ` ${caseIndex + 1}` : ''}</span>
        <div className="sheet__body">
          <h3 id={`cas-${sectionId}-${caseIndex}`} className="display-narrow text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-[1.02rem] text-ink-2">{description}</p>

          <div className="doc mt-6 border-t border-copy-yellow-ink/40 pt-5" dangerouslySetInnerHTML={{ __html: toHtml(exercice) }} />

          <div className="mt-6 border-t border-copy-yellow-ink/40 pt-5">
            <label htmlFor={`answer-${sectionId}-${caseIndex}`} className="label text-copy-yellow-ink">
              Votre réponse (brouillon, gardé sur cet appareil)
            </label>
            <textarea
              id={`answer-${sectionId}-${caseIndex}`}
              className="field mt-2 bg-white/70"
              placeholder="Notez vos idées, votre plan, vos questions au client…"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button type="button" className="btn btn--sm" onClick={saveAnswer}>
                <Save className="h-3.5 w-3.5" aria-hidden="true" />
                Enregistrer le brouillon
              </button>
              {savedAt && <span className="num text-xs text-ink-2">Enregistré à {savedAt}</span>}
            </div>
          </div>

          {hasCorrection && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {isTeacher ? (
                <button type="button" className="btn btn--sm btn--primary" onClick={toggleCorrection} disabled={loading}>
                  {showCorrection ? <EyeOff className="h-3.5 w-3.5" aria-hidden="true" /> : <Eye className="h-3.5 w-3.5" aria-hidden="true" />}
                  {loading ? 'Chargement…' : showCorrection ? 'Masquer la correction' : 'Voir la correction proposée'}
                </button>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-copy-yellow-ink">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  Correction sur le feuillet rose, réservée à l’enseignant. Elle sera commentée en cours.
                </span>
              )}
              {error && <span className="text-sm text-red-ink">{error}</span>}
            </div>
          )}
        </div>
      </div>

      {showCorrection && correction && (
        <div className="sheet sheet--pink perforated animate-in" role="region" aria-label="Correction proposée">
          <span className="sheet__tab">Copie rose · Correction enseignant</span>
          <div className="sheet__body">
            <div className="doc" dangerouslySetInnerHTML={{ __html: correction }} />
          </div>
        </div>
      )}
    </section>
  )
}

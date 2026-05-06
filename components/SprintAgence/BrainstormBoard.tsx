'use client'

import { useEffect, useMemo, useState } from 'react'
import { Plus, RotateCcw, Sparkles, Star, X } from 'lucide-react'
import {
  brainstormThemes,
  totalKeywords,
  type BrainstormKeyword,
} from '@/data/brainstorming'

const STORAGE_KEY = 'sa-brainstorm-v1'

interface CustomKeyword {
  id: string // commence par "custom-"
  label: string
  themeId: string
}

interface PersistedState {
  found: string[]
  customs: CustomKeyword[]
}

const importanceTone: Record<1 | 2 | 3, string> = {
  1: 'sa-brain-importance-1',
  2: 'sa-brain-importance-2',
  3: 'sa-brain-importance-3',
}

function loadPersisted(): PersistedState {
  if (typeof window === 'undefined') return { found: [], customs: [] }
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { found: [], customs: [] }
    const parsed = JSON.parse(raw)
    return {
      found: Array.isArray(parsed.found) ? parsed.found : [],
      customs: Array.isArray(parsed.customs) ? parsed.customs : [],
    }
  } catch {
    return { found: [], customs: [] }
  }
}

export default function BrainstormBoard() {
  const [foundIds, setFoundIds] = useState<Set<string>>(new Set())
  const [customs, setCustoms] = useState<CustomKeyword[]>([])
  const [customDraft, setCustomDraft] = useState('')
  const [customTheme, setCustomTheme] = useState(brainstormThemes[0].id)
  const [hydrated, setHydrated] = useState(false)

  // Hydratation depuis le localStorage côté client uniquement.
  useEffect(() => {
    const persisted = loadPersisted()
    setFoundIds(new Set(persisted.found))
    setCustoms(persisted.customs)
    setHydrated(true)
  }, [])

  // Sauvegarde à chaque changement, après hydratation pour ne pas écraser.
  useEffect(() => {
    if (!hydrated) return
    const payload: PersistedState = { found: [...foundIds], customs }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [foundIds, customs, hydrated])

  const toggleKeyword = (id: string) => {
    setFoundIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const addCustom = () => {
    const label = customDraft.trim()
    if (!label) return
    const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`
    const entry: CustomKeyword = { id, label, themeId: customTheme }
    setCustoms(prev => [...prev, entry])
    setFoundIds(prev => new Set(prev).add(id))
    setCustomDraft('')
  }

  const removeCustom = (id: string) => {
    setCustoms(prev => prev.filter(c => c.id !== id))
    setFoundIds(prev => {
      const next = new Set(prev)
      next.delete(id)
      return next
    })
  }

  const reset = () => {
    if (!confirm('Effacer tous les mots-clés trouvés ?')) return
    setFoundIds(new Set())
    setCustoms([])
  }

  // On regroupe les "trouvés" par thème pour l'affichage du haut.
  const foundByTheme = useMemo(() => {
    const map: Record<string, Array<BrainstormKeyword | CustomKeyword>> = {}
    brainstormThemes.forEach(t => {
      map[t.id] = []
    })
    brainstormThemes.forEach(theme => {
      theme.keywords.forEach(kw => {
        if (foundIds.has(kw.id)) map[theme.id].push(kw)
      })
    })
    customs.forEach(c => {
      if (foundIds.has(c.id) && map[c.themeId]) map[c.themeId].push(c)
    })
    return map
  }, [foundIds, customs])

  const totalFound = foundIds.size
  const denominator = totalKeywords + customs.length
  const globalPct = denominator === 0 ? 0 : Math.round((totalFound / denominator) * 100)

  return (
    <div className="sa-brain-root">
      {/* En-tête fixe : compteur + actions */}
      <div className="sa-brain-toolbar">
        <div className="sa-brain-toolbar-stats">
          <Sparkles className="w-4 h-4" />
          <span className="sa-brain-counter">{totalFound}</span>
          <span className="sa-brain-counter-sep">/</span>
          <span className="sa-brain-counter-total">{denominator}</span>
          <span className="sa-brain-counter-label">mots trouvés</span>
          <span className="sa-brain-counter-pct">({globalPct}%)</span>
        </div>

        <div className="sa-brain-toolbar-actions">
          <div className="sa-brain-custom">
            <input
              type="text"
              placeholder="Ajouter un mot dit par les étudiants…"
              value={customDraft}
              onChange={e => setCustomDraft(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') addCustom()
              }}
              className="sa-brain-custom-input"
            />
            <select
              value={customTheme}
              onChange={e => setCustomTheme(e.target.value)}
              className="sa-brain-custom-select"
              aria-label="Thème du mot personnalisé"
            >
              {brainstormThemes.map(t => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            <button onClick={addCustom} className="sa-brain-custom-btn" type="button">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button onClick={reset} className="sa-brain-reset" type="button" title="Réinitialiser">
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* ZONE 1 — TROUVÉS */}
      <section className="sa-brain-section">
        <header className="sa-brain-section-head">
          <h2>Mots-clés trouvés</h2>
          <p>Au fur et à mesure que les étudiants les sortent, ils viennent ici.</p>
        </header>

        <div className="sa-brain-grid">
          {brainstormThemes.map(theme => {
            const items = foundByTheme[theme.id]
            const total = theme.keywords.length + customs.filter(c => c.themeId === theme.id).length
            const found = items.length
            const pct = total === 0 ? 0 : Math.round((found / total) * 100)
            return (
              <article
                key={theme.id}
                className={`sa-brain-card ${theme.bg} ${theme.border}`}
              >
                <header className="sa-brain-card-head">
                  <div className="sa-brain-card-title">
                    <span className={`sa-brain-card-dot ${theme.dot}`} />
                    <h3 className={theme.text}>{theme.name}</h3>
                  </div>
                  <span className={`sa-brain-card-count ${theme.text}`}>
                    {found}/{total}
                  </span>
                </header>
                <div className="sa-brain-progress">
                  <div className={`sa-brain-progress-fill ${theme.dot}`} style={{ width: `${pct}%` }} />
                </div>
                <div className="sa-brain-found-list">
                  {items.length === 0 ? (
                    <p className="sa-brain-empty">Personne n'a encore parlé de ce thème.</p>
                  ) : (
                    items.map(item => {
                      const isCustom = item.id.startsWith('custom-')
                      return (
                        <span key={item.id} className={`sa-brain-found ${theme.bgSoft} ${theme.text}`}>
                          {item.label}
                          {isCustom && (
                            <button
                              onClick={() => removeCustom(item.id)}
                              className="sa-brain-found-remove"
                              type="button"
                              aria-label="Retirer ce mot"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </span>
                      )
                    })
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ZONE 2 — BANQUE */}
      <section className="sa-brain-section">
        <header className="sa-brain-section-head">
          <h2>Banque de mots-clés</h2>
          <p>
            Cliquez sur un mot dès qu'un étudiant le prononce. Les essentiels portent une étoile pleine.
          </p>
        </header>

        <div className="sa-brain-grid">
          {brainstormThemes.map(theme => (
            <article
              key={theme.id}
              className={`sa-brain-bank ${theme.bg} ${theme.border}`}
            >
              <header className="sa-brain-bank-head">
                <div className="sa-brain-card-title">
                  <span className={`sa-brain-card-dot ${theme.dot}`} />
                  <h3 className={theme.text}>{theme.name}</h3>
                </div>
                <span className="sa-brain-bank-tagline">{theme.tagline}</span>
              </header>

              <div className="sa-brain-bank-list">
                {theme.keywords.map(kw => {
                  const isFound = foundIds.has(kw.id)
                  return (
                    <button
                      key={kw.id}
                      type="button"
                      onClick={() => toggleKeyword(kw.id)}
                      className={`sa-brain-chip ${importanceTone[kw.importance]} ${
                        isFound ? 'sa-brain-chip-found' : ''
                      }`}
                    >
                      <span className="sa-brain-chip-stars" aria-hidden>
                        {Array.from({ length: 4 - kw.importance }).map((_, i) => (
                          <Star key={i} className="w-3 h-3" />
                        ))}
                      </span>
                      <span className="sa-brain-chip-label">{kw.label}</span>
                    </button>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

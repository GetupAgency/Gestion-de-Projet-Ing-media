'use client'

import { useEffect, useMemo, useReducer, useState, useRef } from 'react'
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
  type DragStartEvent,
  type DragOverEvent,
  type DragEndEvent,
  useDroppable,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import {
  Plus,
  Trash2,
  RotateCcw,
  Download,
  ChevronDown,
} from 'lucide-react'
import {
  emptyBoard,
  PROFILES,
  EPIC_COLORS,
  type BoardState,
  type Epic,
  type Jalon,
  type Story,
} from '@/data/storyMapping'
import { reducer } from './storyMappingReducer'
import StoryCard from './StoryCard'

// Slug pour les boards multiples (par nom d'équipe)
const STORAGE_KEY_PREFIX = 'sa-storymap-v1::'
const slugify = (s: string) =>
  s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'sans-nom'

function genId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

// =====================================================================
// Board principal
// =====================================================================

export default function StoryMappingBoard() {
  const [state, dispatch] = useReducer(reducer, emptyBoard)
  const [hydrated, setHydrated] = useState(false)
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null)
  const stateRef = useRef(state)
  stateRef.current = state

  // Hydratation : charge depuis localStorage si on a un nom d'équipe sauvegardé
  useEffect(() => {
    const lastTeam = localStorage.getItem(`${STORAGE_KEY_PREFIX}__last`)
    if (lastTeam) {
      const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${lastTeam}`)
      if (raw) {
        try {
          dispatch({ type: 'LOAD', state: JSON.parse(raw) })
        } catch {
          /* ignore */
        }
      }
    }
    setHydrated(true)
  }, [])

  // Sauvegarde à chaque mutation (après hydratation)
  useEffect(() => {
    if (!hydrated) return
    const slug = slugify(state.teamName || '')
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${slug}`, JSON.stringify(state))
    localStorage.setItem(`${STORAGE_KEY_PREFIX}__last`, slug)
  }, [state, hydrated])

  // Sensors dnd-kit
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  // Précalculs de groupage
  const storiesByEpic = useMemo(() => {
    const map: Record<string, Story[]> = {}
    state.epics.forEach(e => { map[e.id] = [] })
    state.stories.forEach(s => {
      if (!map[s.epicId]) map[s.epicId] = []
      map[s.epicId].push(s)
    })
    Object.values(map).forEach(list => list.sort((a, b) => a.position - b.position))
    return map
  }, [state.epics, state.stories])

  const epicsSorted = useMemo(
    () => [...state.epics].sort((a, b) => a.position - b.position),
    [state.epics],
  )

  // ----- Handlers -----

  const onAddJalon = () => {
    const idx = state.jalons.length + 1
    dispatch({
      type: 'ADD_JALON',
      jalon: {
        id: genId('j'),
        label: `M${idx}`,
        title: 'Nouveau jalon',
      },
    })
  }

  const onAddEpic = () => {
    const idx = state.epics.length
    dispatch({
      type: 'ADD_EPIC',
      epic: {
        id: genId('e'),
        title: 'Nouvelle epic',
        color: EPIC_COLORS[idx % EPIC_COLORS.length],
        position: idx,
      },
    })
  }

  const onAddStory = (epicId: string) => {
    const stories = storiesByEpic[epicId] ?? []
    dispatch({
      type: 'ADD_STORY',
      story: {
        id: genId('s'),
        epicId,
        title: '',
        description: '',
        statusId: 'todo',
        position: stories.length,
      },
    })
  }

  const onReset = () => {
    if (!confirm('Vider complètement le board ? Les jalons, epics et user stories seront perdus.')) return
    dispatch({ type: 'RESET' })
  }

  // ----- Drag handlers -----

  // Trouve l'epic d'une story OU l'epic correspondant à l'id (cas où on
  // glisse au-dessus de la zone vide d'une colonne, dont l'id = epicId)
  const findContainerOf = (id: string): string | null => {
    const story = stateRef.current.stories.find(s => s.id === id)
    if (story) return story.epicId
    const epic = stateRef.current.epics.find(e => e.id === id)
    if (epic) return epic.id
    return null
  }

  const onDragStart = (e: DragStartEvent) => {
    setActiveStoryId(String(e.active.id))
  }

  const onDragOver = (e: DragOverEvent) => {
    const { active, over } = e
    if (!over) return

    const activeId = String(active.id)
    const overId = String(over.id)
    if (activeId === overId) return

    const activeContainer = findContainerOf(activeId)
    const overContainer = findContainerOf(overId)
    if (!activeContainer || !overContainer) return
    if (activeContainer === overContainer) return

    // Cross-container : on déplace la story vers l'autre colonne
    const overStories = stateRef.current.stories
      .filter(s => s.epicId === overContainer)
      .sort((a, b) => a.position - b.position)

    const overStoryIndex = overStories.findIndex(s => s.id === overId)
    const newIndex = overStoryIndex >= 0 ? overStoryIndex : overStories.length

    dispatch({
      type: 'MOVE_STORY',
      id: activeId,
      toEpicId: overContainer,
      toIndex: newIndex,
    })
  }

  const onDragEnd = (e: DragEndEvent) => {
    setActiveStoryId(null)
    const { active, over } = e
    if (!over) return

    const activeId = String(active.id)
    const overId = String(over.id)

    const activeContainer = findContainerOf(activeId)
    const overContainer = findContainerOf(overId)
    if (!activeContainer || !overContainer) return

    const sameColumn = activeContainer === overContainer
    const overStories = stateRef.current.stories
      .filter(s => s.epicId === overContainer)
      .sort((a, b) => a.position - b.position)

    if (sameColumn) {
      // Réordre intra-colonne
      const oldIndex = overStories.findIndex(s => s.id === activeId)
      const newIndex = overStories.findIndex(s => s.id === overId)
      if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) return
      const reordered = arrayMove(overStories, oldIndex, newIndex)
      // On envoie une série d'EDIT_STORY pour réindexer la colonne
      reordered.forEach((s, idx) => {
        if (s.position !== idx) {
          dispatch({ type: 'EDIT_STORY', id: s.id, patch: { position: idx } })
        }
      })
    }
    // Le déplacement cross-container a déjà été appliqué dans onDragOver.
  }

  const onDragCancel = () => setActiveStoryId(null)

  // ----- Render -----

  const activeStory = activeStoryId ? state.stories.find(s => s.id === activeStoryId) : null

  return (
    <div className="sm-root">
      <Toolbar
        teamName={state.teamName}
        onTeamName={n => dispatch({ type: 'SET_TEAM', name: n })}
        onAddJalon={onAddJalon}
        onAddEpic={onAddEpic}
        onReset={onReset}
        state={state}
      />

      <JalonsBar
        jalons={state.jalons}
        onEdit={(id, patch) => dispatch({ type: 'EDIT_JALON', id, patch })}
        onDelete={id => dispatch({ type: 'DEL_JALON', id })}
        onAdd={onAddJalon}
      />

      {state.epics.length === 0 ? (
        <EmptyState onAddEpic={onAddEpic} onAddJalon={onAddJalon} />
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDragCancel={onDragCancel}
        >
          <div className="sm-board-scroll">
            <div className="sm-board">
              {epicsSorted.map(epic => (
                <EpicColumn
                  key={epic.id}
                  epic={epic}
                  stories={storiesByEpic[epic.id] ?? []}
                  jalons={state.jalons}
                  onAddStory={() => onAddStory(epic.id)}
                  onEditEpic={patch => dispatch({ type: 'EDIT_EPIC', id: epic.id, patch })}
                  onDeleteEpic={() => {
                    if (confirm(`Supprimer l'epic "${epic.title}" et toutes ses user stories ?`)) {
                      dispatch({ type: 'DEL_EPIC', id: epic.id })
                    }
                  }}
                  onEditStory={(sid, patch) => dispatch({ type: 'EDIT_STORY', id: sid, patch })}
                  onDeleteStory={sid => dispatch({ type: 'DEL_STORY', id: sid })}
                />
              ))}

              <button type="button" onClick={onAddEpic} className="sm-add-epic">
                <Plus className="w-5 h-5" />
                <span>Ajouter une epic</span>
              </button>
            </div>
          </div>

          <DragOverlay>
            {activeStory ? (
              <StoryCard
                story={activeStory}
                jalons={state.jalons}
                onEdit={() => {}}
                onDelete={() => {}}
                isOverlay
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  )
}

// =====================================================================
// Toolbar
// =====================================================================

function Toolbar({
  teamName,
  onTeamName,
  onAddJalon,
  onAddEpic,
  onReset,
  state,
}: {
  teamName: string
  onTeamName: (n: string) => void
  onAddJalon: () => void
  onAddEpic: () => void
  onReset: () => void
  state: BoardState
}) {
  const onExport = () => {
    const md = boardToMarkdown(state)
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `backlog-${slugify(state.teamName || 'sans-equipe')}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const totalSP = state.stories.reduce((s, st) => s + (st.storyPoints ?? 0), 0)

  return (
    <div className="sm-toolbar">
      <div className="sm-toolbar-team">
        <label className="sm-toolbar-label" htmlFor="sm-team">Équipe</label>
        <input
          id="sm-team"
          type="text"
          value={teamName}
          onChange={e => onTeamName(e.target.value)}
          placeholder="Nom de votre agence…"
          className="sm-toolbar-input"
        />
      </div>

      <div className="sm-toolbar-stats">
        <Stat label="Jalons" value={state.jalons.length} />
        <Stat label="Epics" value={state.epics.length} />
        <Stat label="US" value={state.stories.length} />
        <Stat label="Story points" value={totalSP} accent />
      </div>

      <div className="sm-toolbar-actions">
        <button type="button" onClick={onAddJalon} className="sm-btn sm-btn-ghost">
          <Plus className="w-4 h-4" />
          Jalon
        </button>
        <button type="button" onClick={onAddEpic} className="sm-btn sm-btn-ghost">
          <Plus className="w-4 h-4" />
          Epic
        </button>
        <button type="button" onClick={onExport} className="sm-btn sm-btn-ghost">
          <Download className="w-4 h-4" />
          Markdown
        </button>
        <button type="button" onClick={onReset} className="sm-btn sm-btn-danger">
          <RotateCcw className="w-4 h-4" />
          Reset
        </button>
      </div>
    </div>
  )
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className={`sm-stat ${accent ? 'is-accent' : ''}`}>
      <span className="sm-stat-value">{value}</span>
      <span className="sm-stat-label">{label}</span>
    </div>
  )
}

// =====================================================================
// JalonsBar
// =====================================================================

function JalonsBar({
  jalons,
  onEdit,
  onDelete,
  onAdd,
}: {
  jalons: Jalon[]
  onEdit: (id: string, patch: Partial<Jalon>) => void
  onDelete: (id: string) => void
  onAdd: () => void
}) {
  if (jalons.length === 0) return null
  return (
    <div className="sm-jalons-bar">
      <span className="sm-jalons-label">Jalons</span>
      <div className="sm-jalons-list">
        {jalons.map(j => (
          <JalonChip key={j.id} jalon={j} onEdit={p => onEdit(j.id, p)} onDelete={() => onDelete(j.id)} />
        ))}
        <button type="button" onClick={onAdd} className="sm-jalon-add">
          <Plus className="w-3.5 h-3.5" />
          Jalon
        </button>
      </div>
    </div>
  )
}

function JalonChip({
  jalon,
  onEdit,
  onDelete,
}: {
  jalon: Jalon
  onEdit: (patch: Partial<Jalon>) => void
  onDelete: () => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  return (
    <div ref={ref} className="sm-jalon-chip-wrap">
      <button type="button" onClick={() => setOpen(o => !o)} className="sm-jalon-chip">
        <strong>{jalon.label}</strong>
        <span>{jalon.title}</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="sm-jalon-popover">
          <label>
            <span>Code</span>
            <input
              type="text"
              value={jalon.label}
              onChange={e => onEdit({ label: e.target.value })}
              maxLength={6}
            />
          </label>
          <label>
            <span>Titre</span>
            <input
              type="text"
              value={jalon.title}
              onChange={e => onEdit({ title: e.target.value })}
            />
          </label>
          <label>
            <span>Date / semaine</span>
            <input
              type="text"
              value={jalon.date ?? ''}
              onChange={e => onEdit({ date: e.target.value })}
              placeholder="ex. Semaine 7 ou 17 juillet"
            />
          </label>
          <button type="button" onClick={onDelete} className="sm-jalon-popover-del">
            <Trash2 className="w-3.5 h-3.5" />
            Supprimer ce jalon
          </button>
        </div>
      )}
    </div>
  )
}

// =====================================================================
// EpicColumn
// =====================================================================

function EpicColumn({
  epic,
  stories,
  jalons,
  onAddStory,
  onEditEpic,
  onDeleteEpic,
  onEditStory,
  onDeleteStory,
}: {
  epic: Epic
  stories: Story[]
  jalons: Jalon[]
  onAddStory: () => void
  onEditEpic: (patch: Partial<Epic>) => void
  onDeleteEpic: () => void
  onEditStory: (id: string, patch: Partial<Story>) => void
  onDeleteStory: (id: string) => void
}) {
  // Une zone droppable au niveau de la colonne (utile pour drop dans une colonne vide)
  const { setNodeRef, isOver } = useDroppable({ id: epic.id })

  return (
    <div className={`sm-epic ${isOver ? 'is-over' : ''}`} style={{ borderColor: epic.color }}>
      <header className="sm-epic-head" style={{ background: epic.color }}>
        <input
          type="text"
          value={epic.title}
          onChange={e => onEditEpic({ title: e.target.value })}
          placeholder="Nom de l'epic…"
          className="sm-epic-title"
        />
        <button type="button" onClick={onDeleteEpic} className="sm-epic-del" aria-label="Supprimer l'epic">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </header>

      <input
        type="text"
        value={epic.description ?? ''}
        onChange={e => onEditEpic({ description: e.target.value })}
        placeholder="Objectif de l'epic en une ligne…"
        className="sm-epic-desc"
      />

      <SortableContext items={stories.map(s => s.id)} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef} className="sm-epic-stories">
          {stories.length === 0 && (
            <div className="sm-epic-empty">
              Glissez ici une US ou cliquez sur le + ci-dessous.
            </div>
          )}
          {stories.map(s => (
            <StoryCard
              key={s.id}
              story={s}
              jalons={jalons}
              onEdit={patch => onEditStory(s.id, patch)}
              onDelete={() => onDeleteStory(s.id)}
            />
          ))}
        </div>
      </SortableContext>

      <button type="button" onClick={onAddStory} className="sm-epic-add">
        <Plus className="w-4 h-4" />
        Ajouter une user story
      </button>
    </div>
  )
}

// =====================================================================
// EmptyState
// =====================================================================

function EmptyState({
  onAddEpic,
  onAddJalon,
}: {
  onAddEpic: () => void
  onAddJalon: () => void
}) {
  return (
    <div className="sm-empty">
      <div className="sm-empty-illu">
        <span /><span /><span />
      </div>
      <h3>Votre backlog est vide</h3>
      <p>
        Commencez par poser vos jalons (les grandes étapes), puis créez les epics qui regroupent les fonctionnalités, et enfin déclinez chaque epic en user stories que vous affecterez à un profil.
      </p>
      <div className="sm-empty-actions">
        <button type="button" onClick={onAddJalon} className="sm-btn sm-btn-ghost">
          <Plus className="w-4 h-4" />
          Mon premier jalon
        </button>
        <button type="button" onClick={onAddEpic} className="sm-btn sm-btn-primary">
          <Plus className="w-4 h-4" />
          Ma première epic
        </button>
      </div>
    </div>
  )
}

// =====================================================================
// Export Markdown
// =====================================================================

function boardToMarkdown(state: BoardState): string {
  const lines: string[] = []
  lines.push(`# Backlog · ${state.teamName || 'Sans nom'}`)
  lines.push('')
  lines.push(`> Généré depuis le Story Mapping interactif. ${state.epics.length} epics, ${state.stories.length} user stories.`)
  lines.push('')

  if (state.jalons.length > 0) {
    lines.push('## Jalons')
    state.jalons.forEach(j => {
      lines.push(`- **${j.label}** — ${j.title}${j.date ? ` _(${j.date})_` : ''}`)
    })
    lines.push('')
  }

  state.epics
    .slice()
    .sort((a, b) => a.position - b.position)
    .forEach(epic => {
      lines.push(`## ${epic.title}`)
      if (epic.description) lines.push(`_${epic.description}_`)
      lines.push('')
      const stories = state.stories
        .filter(s => s.epicId === epic.id)
        .sort((a, b) => a.position - b.position)
      if (stories.length === 0) {
        lines.push('_Pas encore de user stories pour cette epic._')
      } else {
        stories.forEach((s, idx) => {
          const profile = PROFILES.find(p => p.code === s.profileCode)
          const jalon = state.jalons.find(j => j.id === s.jalonId)
          const meta: string[] = []
          if (jalon) meta.push(`Jalon ${jalon.label}`)
          if (profile) meta.push(`Profil ${profile.code}`)
          if (s.storyPoints) meta.push(`${s.storyPoints} SP`)
          meta.push(s.statusId === 'todo' ? 'À faire' : s.statusId === 'doing' ? 'En cours' : 'Terminé')
          lines.push(`### US-${idx + 1} · ${s.title || '(sans titre)'}`)
          lines.push(`_${meta.join(' · ')}_`)
          if (s.description) {
            lines.push('')
            lines.push(s.description)
          }
          lines.push('')
        })
      }
    })

  return lines.join('\n')
}

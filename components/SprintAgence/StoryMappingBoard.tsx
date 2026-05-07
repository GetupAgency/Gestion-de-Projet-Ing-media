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
  Flag,
  BookOpen,
  FileJson,
  Upload,
} from 'lucide-react'
import {
  emptyBoard,
  EPIC_COLORS,
  PROFILES,
  type BoardState,
  type Epic,
  type Jalon,
  type Story,
} from '@/data/storyMapping'
import {
  buildRoadTripSquadTemplate,
  TEMPLATE_NAME,
  TEMPLATE_SUMMARY,
} from '@/data/storyMappingTemplate'
import { isTeacherMode } from '@/lib/teacherMode'
import { reducer } from './storyMappingReducer'
import { boardToJson, jsonToBoard } from './storyMappingJson'
import StoryCard from './StoryCard'

// Bump à v2 : ancien schéma (jalon sur US) ignoré au chargement.
const STORAGE_KEY_PREFIX = 'sa-storymap-v2::'

const slugify = (s: string) =>
  s.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'sans-nom'

function genId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}

const NO_JALON = '__no_jalon__'

// =====================================================================
// Board principal
// =====================================================================

export default function StoryMappingBoard() {
  const [state, dispatch] = useReducer(reducer, emptyBoard)
  const [hydrated, setHydrated] = useState(false)
  const [activeStoryId, setActiveStoryId] = useState<string | null>(null)
  const [isTeacher, setIsTeacher] = useState(false)
  const stateRef = useRef(state)
  stateRef.current = state

  useEffect(() => {
    setIsTeacher(isTeacherMode())
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

  useEffect(() => {
    if (!hydrated) return
    const slug = slugify(state.teamName || '')
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${slug}`, JSON.stringify(state))
    localStorage.setItem(`${STORAGE_KEY_PREFIX}__last`, slug)
  }, [state, hydrated])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  )

  // Stories groupées par epic (pour rendu rapide)
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

  // Epics groupés par jalon (NO_JALON pour les non rattachés)
  const epicsByJalon = useMemo(() => {
    const map: Record<string, Epic[]> = { [NO_JALON]: [] }
    state.jalons.forEach(j => { map[j.id] = [] })
    state.epics.forEach(e => {
      const key = e.jalonId && map[e.jalonId] ? e.jalonId : NO_JALON
      map[key].push(e)
    })
    Object.values(map).forEach(list => list.sort((a, b) => a.position - b.position))
    return map
  }, [state.jalons, state.epics])

  const jalonsSorted = useMemo(() => state.jalons, [state.jalons])

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

  const onAddEpic = (jalonId?: string) => {
    const epicsInJalon = state.epics.filter(e => (e.jalonId ?? null) === (jalonId ?? null))
    const idx = state.epics.length
    dispatch({
      type: 'ADD_EPIC',
      epic: {
        id: genId('e'),
        jalonId: jalonId,
        title: '',
        color: EPIC_COLORS[idx % EPIC_COLORS.length],
        position: epicsInJalon.length,
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

  const onLoadTemplate = () => {
    const hasContent = state.jalons.length > 0 || state.epics.length > 0 || state.stories.length > 0
    const msg = hasContent
      ? `Charger le modèle "${TEMPLATE_NAME}" ?\n\n${TEMPLATE_SUMMARY}\n\nLe contenu actuel du board sera remplacé.`
      : `Charger le modèle "${TEMPLATE_NAME}" ?\n\n${TEMPLATE_SUMMARY}`
    if (!confirm(msg)) return
    dispatch({ type: 'LOAD', state: buildRoadTripSquadTemplate(state.teamName) })
  }

  const onLoadFromJson = (parsed: BoardState, warnings?: string[]) => {
    const hasContent = state.jalons.length > 0 || state.epics.length > 0 || state.stories.length > 0
    const summary = `${parsed.jalons.length} jalons · ${parsed.epics.length} epics · ${parsed.stories.length} user stories`
    const warningsBlock = warnings && warnings.length > 0
      ? `\n\nAvertissements :\n${warnings.slice(0, 5).join('\n')}${warnings.length > 5 ? `\n…et ${warnings.length - 5} autres.` : ''}`
      : ''
    const msg = hasContent
      ? `Importer ce backlog ?\n\n${summary}\n\nLe contenu actuel du board sera remplacé.${warningsBlock}`
      : `Importer ce backlog ?\n\n${summary}${warningsBlock}`
    if (!confirm(msg)) return
    dispatch({ type: 'LOAD', state: parsed })
  }

  // ----- Drag handlers -----

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
      const oldIndex = overStories.findIndex(s => s.id === activeId)
      const newIndex = overStories.findIndex(s => s.id === overId)
      if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) return
      const reordered = arrayMove(overStories, oldIndex, newIndex)
      reordered.forEach((s, idx) => {
        if (s.position !== idx) {
          dispatch({ type: 'EDIT_STORY', id: s.id, patch: { position: idx } })
        }
      })
    }
  }

  const onDragCancel = () => setActiveStoryId(null)

  const activeStory = activeStoryId ? state.stories.find(s => s.id === activeStoryId) : null

  // ----- Render -----

  // On affiche : Sans jalon (s'il a au moins un epic) puis chaque jalon dans l'ordre
  const sectionsToRender: Array<{ kind: 'no-jalon' } | { kind: 'jalon'; jalon: Jalon }> = []
  if (epicsByJalon[NO_JALON]?.length > 0 || state.jalons.length === 0) {
    sectionsToRender.push({ kind: 'no-jalon' })
  }
  jalonsSorted.forEach(j => sectionsToRender.push({ kind: 'jalon', jalon: j }))

  const isEmpty = state.epics.length === 0 && state.jalons.length === 0

  return (
    <div className="sm-root">
      <Toolbar
        teamName={state.teamName}
        onTeamName={n => dispatch({ type: 'SET_TEAM', name: n })}
        onAddJalon={onAddJalon}
        onAddEpic={() => onAddEpic(undefined)}
        onReset={onReset}
        onLoadTemplate={isTeacher ? onLoadTemplate : undefined}
        onLoadFromJson={onLoadFromJson}
        state={state}
      />

      {isEmpty ? (
        <EmptyState onAddEpic={() => onAddEpic(undefined)} onAddJalon={onAddJalon} />
      ) : (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
          onDragCancel={onDragCancel}
        >
          <div className="sm-jalon-sections">
            {sectionsToRender.map(section => {
              if (section.kind === 'no-jalon') {
                const epics = epicsByJalon[NO_JALON] ?? []
                return (
                  <JalonSection
                    key={NO_JALON}
                    jalon={null}
                    epics={epics}
                    storiesByEpic={storiesByEpic}
                    allJalons={state.jalons}
                    onAddEpic={() => onAddEpic(undefined)}
                    onEditEpic={(id, patch) => dispatch({ type: 'EDIT_EPIC', id, patch })}
                    onDeleteEpic={id => dispatch({ type: 'DEL_EPIC', id })}
                    onAddStory={onAddStory}
                    onEditStory={(sid, patch) => dispatch({ type: 'EDIT_STORY', id: sid, patch })}
                    onDeleteStory={sid => dispatch({ type: 'DEL_STORY', id: sid })}
                  />
                )
              }
              const epics = epicsByJalon[section.jalon.id] ?? []
              return (
                <JalonSection
                  key={section.jalon.id}
                  jalon={section.jalon}
                  epics={epics}
                  storiesByEpic={storiesByEpic}
                  allJalons={state.jalons}
                  onAddEpic={() => onAddEpic(section.jalon.id)}
                  onEditEpic={(id, patch) => dispatch({ type: 'EDIT_EPIC', id, patch })}
                  onDeleteEpic={id => dispatch({ type: 'DEL_EPIC', id })}
                  onEditJalon={patch => dispatch({ type: 'EDIT_JALON', id: section.jalon.id, patch })}
                  onDeleteJalon={() => {
                    if (confirm(`Supprimer le jalon "${section.jalon.label} · ${section.jalon.title}" ? Les epics rattachés deviendront "Sans jalon".`)) {
                      dispatch({ type: 'DEL_JALON', id: section.jalon.id })
                    }
                  }}
                  onAddStory={onAddStory}
                  onEditStory={(sid, patch) => dispatch({ type: 'EDIT_STORY', id: sid, patch })}
                  onDeleteStory={sid => dispatch({ type: 'DEL_STORY', id: sid })}
                />
              )
            })}

            <button type="button" onClick={onAddJalon} className="sm-add-jalon-row">
              <Flag className="w-4 h-4" />
              Ajouter un jalon
            </button>
          </div>

          <DragOverlay>
            {activeStory ? (
              <StoryCard
                story={activeStory}
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
// Section de jalon
// =====================================================================

interface JalonSectionProps {
  jalon: Jalon | null
  epics: Epic[]
  storiesByEpic: Record<string, Story[]>
  allJalons: Jalon[]
  onAddEpic: () => void
  onEditEpic: (id: string, patch: Partial<Epic>) => void
  onDeleteEpic: (id: string) => void
  onEditJalon?: (patch: Partial<Jalon>) => void
  onDeleteJalon?: () => void
  onAddStory: (epicId: string) => void
  onEditStory: (id: string, patch: Partial<Story>) => void
  onDeleteStory: (id: string) => void
}

function JalonSection({
  jalon,
  epics,
  storiesByEpic,
  allJalons,
  onAddEpic,
  onEditEpic,
  onDeleteEpic,
  onEditJalon,
  onDeleteJalon,
  onAddStory,
  onEditStory,
  onDeleteStory,
}: JalonSectionProps) {
  const isNoJalon = jalon === null
  return (
    <section className={`sm-jalon-section ${isNoJalon ? 'is-no-jalon' : ''}`}>
      <header className="sm-jalon-section-head">
        {isNoJalon ? (
          <>
            <span className="sm-jalon-section-eyebrow">Pas encore rattaché</span>
            <h3 className="sm-jalon-section-title">Sans jalon</h3>
            <p className="sm-jalon-section-desc">
              Les epics qui n'ont pas encore de jalon de livraison. Cliquez sur l'en-tête d'un epic pour l'attacher.
            </p>
          </>
        ) : (
          <JalonHeader jalon={jalon!} onEdit={onEditJalon!} onDelete={onDeleteJalon!} />
        )}
      </header>

      <div className="sm-jalon-section-board">
        {epics.map(epic => (
          <EpicColumn
            key={epic.id}
            epic={epic}
            stories={storiesByEpic[epic.id] ?? []}
            allJalons={allJalons}
            onAddStory={() => onAddStory(epic.id)}
            onEditEpic={patch => onEditEpic(epic.id, patch)}
            onDeleteEpic={() => {
              if (confirm(`Supprimer l'epic et toutes ses user stories ?`)) {
                onDeleteEpic(epic.id)
              }
            }}
            onEditStory={onEditStory}
            onDeleteStory={onDeleteStory}
          />
        ))}

        <button type="button" onClick={onAddEpic} className="sm-add-epic">
          <Plus className="w-5 h-5" />
          <span>{isNoJalon ? 'Epic sans jalon' : 'Epic dans ce jalon'}</span>
        </button>
      </div>
    </section>
  )
}

// =====================================================================
// JalonHeader (édition inline du jalon)
// =====================================================================

function JalonHeader({
  jalon,
  onEdit,
  onDelete,
}: {
  jalon: Jalon
  onEdit: (patch: Partial<Jalon>) => void
  onDelete: () => void
}) {
  return (
    <div className="sm-jalon-header-inline">
      <input
        type="text"
        value={jalon.label}
        onChange={e => onEdit({ label: e.target.value })}
        className="sm-jalon-code"
        maxLength={6}
        aria-label="Code du jalon"
      />
      <input
        type="text"
        value={jalon.title}
        onChange={e => onEdit({ title: e.target.value })}
        className="sm-jalon-name"
        placeholder="Nom du jalon…"
        aria-label="Nom du jalon"
      />
      <input
        type="text"
        value={jalon.date ?? ''}
        onChange={e => onEdit({ date: e.target.value })}
        className="sm-jalon-date"
        placeholder="ex. Semaine 7"
        aria-label="Date du jalon"
      />
      <button
        type="button"
        onClick={onDelete}
        className="sm-jalon-delete"
        aria-label="Supprimer ce jalon"
      >
        <Trash2 className="w-4 h-4" />
      </button>
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
  onLoadTemplate,
  onLoadFromJson,
  state,
}: {
  teamName: string
  onTeamName: (n: string) => void
  onAddJalon: () => void
  onAddEpic: () => void
  onReset: () => void
  onLoadTemplate?: () => void
  onLoadFromJson: (state: BoardState, warnings?: string[]) => void
  state: BoardState
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const onExportMarkdown = () => {
    const md = boardToMarkdown(state)
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `backlog-${slugify(state.teamName || 'sans-equipe')}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const onExportJson = () => {
    const obj = boardToJson(state)
    const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `backlog-${slugify(state.teamName || 'sans-equipe')}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const onClickImport = () => {
    fileInputRef.current?.click()
  }

  const onFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = '' // reset pour permettre de réimporter le même fichier
    if (!file) return

    const reader = new FileReader()
    reader.onload = ev => {
      const text = ev.target?.result
      if (typeof text !== 'string') {
        alert("Impossible de lire le fichier.")
        return
      }
      try {
        const data = JSON.parse(text)
        const result = jsonToBoard(data)
        if (!result.ok || !result.state) {
          alert(`JSON invalide : ${result.error ?? 'format non reconnu.'}`)
          return
        }
        onLoadFromJson(result.state, result.warnings)
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err)
        alert(`JSON mal formé : ${msg}`)
      }
    }
    reader.readAsText(file)
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

        <span className="sm-toolbar-divider" aria-hidden />

        <button
          type="button"
          onClick={onExportJson}
          className="sm-btn sm-btn-ghost"
          title="Exporter en JSON pour archivage ou intégration par votre agent local"
        >
          <FileJson className="w-4 h-4" />
          Export JSON
        </button>
        <button
          type="button"
          onClick={onClickImport}
          className="sm-btn sm-btn-ghost"
          title="Importer un backlog JSON déjà exporté"
        >
          <Upload className="w-4 h-4" />
          Importer
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          onChange={onFileSelected}
          style={{ display: 'none' }}
        />
        <button
          type="button"
          onClick={onExportMarkdown}
          className="sm-btn sm-btn-ghost"
          title="Exporter en Markdown lisible"
        >
          <Download className="w-4 h-4" />
          Markdown
        </button>

        {onLoadTemplate && (
          <>
            <span className="sm-toolbar-divider" aria-hidden />
            <button
              type="button"
              onClick={onLoadTemplate}
              className="sm-btn sm-btn-teacher"
              title="Charger le modèle RoadTrip Squad (mode enseignant)"
            >
              <BookOpen className="w-4 h-4" />
              Charger le modèle
            </button>
          </>
        )}

        <span className="sm-toolbar-divider" aria-hidden />
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
// EpicColumn
// =====================================================================

function EpicColumn({
  epic,
  stories,
  allJalons,
  onAddStory,
  onEditEpic,
  onDeleteEpic,
  onEditStory,
  onDeleteStory,
}: {
  epic: Epic
  stories: Story[]
  allJalons: Jalon[]
  onAddStory: () => void
  onEditEpic: (patch: Partial<Epic>) => void
  onDeleteEpic: () => void
  onEditStory: (id: string, patch: Partial<Story>) => void
  onDeleteStory: (id: string) => void
}) {
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
        <EpicJalonPicker
          currentJalonId={epic.jalonId}
          jalons={allJalons}
          onPick={id => onEditEpic({ jalonId: id })}
        />
        <button type="button" onClick={onDeleteEpic} className="sm-epic-del" aria-label="Supprimer l'epic">
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </header>

      <input
        type="text"
        value={epic.description ?? ''}
        onChange={e => onEditEpic({ description: e.target.value })}
        placeholder="Objectif de l'epic en une ligne (optionnel)…"
        className="sm-epic-desc"
      />

      <SortableContext items={stories.map(s => s.id)} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef} className="sm-epic-stories">
          {stories.length === 0 && (
            <div className="sm-epic-empty">
              Glissez ici une carte ou cliquez sur le + ci-dessous.
            </div>
          )}
          {stories.map(s => (
            <StoryCard
              key={s.id}
              story={s}
              onEdit={patch => onEditStory(s.id, patch)}
              onDelete={() => onDeleteStory(s.id)}
            />
          ))}
        </div>
      </SortableContext>

      <button type="button" onClick={onAddStory} className="sm-epic-add">
        <Plus className="w-4 h-4" />
        Ajouter une carte
      </button>
    </div>
  )
}

// =====================================================================
// EpicJalonPicker (sur l'en-tête de l'epic)
// =====================================================================

function EpicJalonPicker({
  currentJalonId,
  jalons,
  onPick,
}: {
  currentJalonId?: string
  jalons: Jalon[]
  onPick: (id: string | undefined) => void
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

  const current = jalons.find(j => j.id === currentJalonId)

  return (
    <div ref={ref} className="sm-epic-jalon-picker">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="sm-epic-jalon-btn"
      >
        <Flag className="w-3 h-3" />
        {current ? current.label : 'Sans jalon'}
        <ChevronDown className="w-3 h-3" />
      </button>
      {open && (
        <div className="sm-picker-menu sm-picker-menu-light">
          {jalons.length === 0 && (
            <span className="sm-picker-empty">Aucun jalon créé. Ajoutez-en depuis la toolbar.</span>
          )}
          {jalons.map(j => (
            <button
              key={j.id}
              type="button"
              className={`sm-picker-item ${j.id === currentJalonId ? 'is-active' : ''}`}
              onClick={() => {
                onPick(j.id)
                setOpen(false)
              }}
            >
              <strong>{j.label}</strong>
              <span>{j.title}</span>
            </button>
          ))}
          {currentJalonId && (
            <button
              type="button"
              className="sm-picker-item is-clear"
              onClick={() => {
                onPick(undefined)
                setOpen(false)
              }}
            >
              Détacher du jalon
            </button>
          )}
        </div>
      )}
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
        Commencez par poser vos jalons (les grandes étapes), puis créez les epics que vous y rattachez, et enfin déclinez chaque epic en cartes (user stories ou tâches) que vous affecterez à un profil.
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
  lines.push(`> ${state.jalons.length} jalons · ${state.epics.length} epics · ${state.stories.length} cartes.`)
  lines.push('')

  const renderEpicAndStories = (epic: Epic, prefixIdx?: number) => {
    const heading = prefixIdx ? `### Epic ${prefixIdx} · ${epic.title || '(sans titre)'}` : `### Epic · ${epic.title || '(sans titre)'}`
    lines.push(heading)
    if (epic.description) lines.push(`_${epic.description}_`)
    lines.push('')
    const stories = state.stories
      .filter(s => s.epicId === epic.id)
      .sort((a, b) => a.position - b.position)
    if (stories.length === 0) {
      lines.push('_Pas encore de cartes._')
    } else {
      stories.forEach((s, idx) => {
        const profile = PROFILES.find(p => p.code === s.profileCode)
        const meta: string[] = []
        if (profile) meta.push(`Profil ${profile.code}`)
        if (s.storyPoints) meta.push(`${s.storyPoints} SP`)
        meta.push(s.statusId === 'todo' ? 'À faire' : s.statusId === 'doing' ? 'En cours' : 'Terminé')
        lines.push(`- **${idx + 1}.** ${s.title || '(sans titre)'} _(${meta.join(' · ')})_`)
        if (s.description) {
          lines.push(`  ${s.description.split('\n').join('\n  ')}`)
        }
      })
    }
    lines.push('')
  }

  // Section sans jalon
  const noJalonEpics = state.epics.filter(e => !e.jalonId).sort((a, b) => a.position - b.position)
  if (noJalonEpics.length > 0) {
    lines.push('## Sans jalon')
    lines.push('')
    noJalonEpics.forEach(e => renderEpicAndStories(e))
  }

  // Sections par jalon
  state.jalons.forEach(j => {
    lines.push(`## ${j.label} · ${j.title}${j.date ? ` _(${j.date})_` : ''}`)
    lines.push('')
    const epics = state.epics
      .filter(e => e.jalonId === j.id)
      .sort((a, b) => a.position - b.position)
    if (epics.length === 0) {
      lines.push('_Aucun epic dans ce jalon._')
      lines.push('')
    } else {
      epics.forEach((e, i) => renderEpicAndStories(e, i + 1))
    }
  })

  return lines.join('\n')
}

'use client'

import { useState, useRef, useEffect } from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2, ChevronDown } from 'lucide-react'
import {
  PROFILES,
  STATUSES,
  STORY_POINTS,
  type Story,
  type Jalon,
  type StoryPoint,
} from '@/data/storyMapping'

interface StoryCardProps {
  story: Story
  jalons: Jalon[]
  onEdit: (patch: Partial<Story>) => void
  onDelete: () => void
  isOverlay?: boolean
}

export default function StoryCard({ story, jalons, onEdit, onDelete, isOverlay }: StoryCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: story.id, disabled: isOverlay })

  const style = isOverlay
    ? undefined
    : {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.4 : 1,
      }

  const profile = PROFILES.find(p => p.code === story.profileCode)
  const jalon = jalons.find(j => j.id === story.jalonId)
  const status = STATUSES.find(s => s.id === story.statusId) ?? STATUSES[0]

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`sm-card ${isDragging ? 'is-dragging' : ''} ${isOverlay ? 'is-overlay' : ''}`}
    >
      <div className="sm-card-grip" {...attributes} {...listeners}>
        <GripVertical className="w-3.5 h-3.5" />
      </div>

      <div className="sm-card-body">
        <EditableText
          value={story.title}
          onCommit={t => onEdit({ title: t })}
          placeholder="Titre de la user story…"
          className="sm-card-title"
          multiline={false}
        />

        <EditableText
          value={story.description ?? ''}
          onCommit={t => onEdit({ description: t })}
          placeholder="En tant que… je veux… pour…"
          className="sm-card-desc"
          multiline
        />

        <div className="sm-card-pills">
          <JalonPicker
            currentId={story.jalonId}
            jalons={jalons}
            onPick={id => onEdit({ jalonId: id })}
          />
          <ProfilePicker
            currentCode={story.profileCode}
            onPick={code => onEdit({ profileCode: code })}
          />
          <SPPicker
            current={story.storyPoints ?? null}
            onPick={sp => onEdit({ storyPoints: sp })}
          />
          <StatusPicker
            currentId={story.statusId}
            onPick={id => onEdit({ statusId: id })}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onDelete}
        className="sm-card-delete"
        aria-label="Supprimer cette user story"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}

// =====================================================================
// Inline editable text
// =====================================================================

interface EditableTextProps {
  value: string
  onCommit: (next: string) => void
  placeholder: string
  className: string
  multiline: boolean
}

function EditableText({ value, onCommit, placeholder, className, multiline }: EditableTextProps) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(value)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null)

  useEffect(() => {
    if (!editing) setDraft(value)
  }, [value, editing])

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      if (inputRef.current instanceof HTMLInputElement) {
        inputRef.current.select()
      }
    }
  }, [editing])

  const commit = () => {
    if (draft.trim() !== value.trim()) {
      onCommit(draft.trim())
    }
    setEditing(false)
  }

  const cancel = () => {
    setDraft(value)
    setEditing(false)
  }

  if (!editing) {
    const empty = !value.trim()
    return (
      <button
        type="button"
        onClick={() => setEditing(true)}
        className={`${className} ${empty ? 'is-empty' : ''}`}
      >
        {empty ? placeholder : value}
      </button>
    )
  }

  if (multiline) {
    return (
      <textarea
        ref={el => { inputRef.current = el }}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={e => {
          if (e.key === 'Escape') cancel()
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) commit()
        }}
        placeholder={placeholder}
        className={`${className} sm-edit-textarea`}
        rows={3}
      />
    )
  }

  return (
    <input
      ref={el => { inputRef.current = el }}
      type="text"
      value={draft}
      onChange={e => setDraft(e.target.value)}
      onBlur={commit}
      onKeyDown={e => {
        if (e.key === 'Escape') cancel()
        if (e.key === 'Enter') commit()
      }}
      placeholder={placeholder}
      className={`${className} sm-edit-input`}
    />
  )
}

// =====================================================================
// Pickers
// =====================================================================

function JalonPicker({
  currentId,
  jalons,
  onPick,
}: {
  currentId?: string
  jalons: Jalon[]
  onPick: (id: string | undefined) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setOpen(false))

  const current = jalons.find(j => j.id === currentId)

  return (
    <div ref={ref} className="sm-picker">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`sm-pill ${current ? 'is-amber' : 'is-empty'}`}
      >
        {current ? current.label : '+ jalon'}
        {current && <ChevronDown className="w-3 h-3" />}
      </button>
      {open && (
        <div className="sm-picker-menu">
          {jalons.length === 0 && (
            <span className="sm-picker-empty">Aucun jalon créé. Ajoutez-en en haut du board.</span>
          )}
          {jalons.map(j => (
            <button
              key={j.id}
              type="button"
              className={`sm-picker-item ${j.id === currentId ? 'is-active' : ''}`}
              onClick={() => {
                onPick(j.id)
                setOpen(false)
              }}
            >
              <strong>{j.label}</strong>
              <span>{j.title}</span>
            </button>
          ))}
          {currentId && (
            <button
              type="button"
              className="sm-picker-item is-clear"
              onClick={() => {
                onPick(undefined)
                setOpen(false)
              }}
            >
              Retirer le jalon
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function ProfilePicker({
  currentCode,
  onPick,
}: {
  currentCode?: string
  onPick: (code: string | undefined) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setOpen(false))

  const current = PROFILES.find(p => p.code === currentCode)

  return (
    <div ref={ref} className="sm-picker">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="sm-avatar-btn"
        style={current ? { background: current.bg, color: current.color } : undefined}
        title={current?.name ?? 'Affecter un profil'}
      >
        {current ? current.code : '+ qui ?'}
      </button>
      {open && (
        <div className="sm-picker-menu">
          {PROFILES.map(p => (
            <button
              key={p.code}
              type="button"
              className={`sm-picker-item ${p.code === currentCode ? 'is-active' : ''}`}
              onClick={() => {
                onPick(p.code)
                setOpen(false)
              }}
            >
              <span className="sm-avatar-mini" style={{ background: p.bg, color: p.color }}>{p.code}</span>
              <span>{p.name}</span>
            </button>
          ))}
          {currentCode && (
            <button
              type="button"
              className="sm-picker-item is-clear"
              onClick={() => {
                onPick(undefined)
                setOpen(false)
              }}
            >
              Retirer l'affectation
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function SPPicker({
  current,
  onPick,
}: {
  current: StoryPoint
  onPick: (sp: StoryPoint) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref, () => setOpen(false))

  return (
    <div ref={ref} className="sm-picker">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`sm-pill ${current ? 'is-blue' : 'is-empty'}`}
        title="Story points"
      >
        {current ? `${current} SP` : '+ SP'}
      </button>
      {open && (
        <div className="sm-picker-menu sm-picker-sp">
          {STORY_POINTS.map(sp => (
            <button
              key={sp}
              type="button"
              className={`sm-sp-cell ${current === sp ? 'is-active' : ''}`}
              onClick={() => {
                onPick(sp)
                setOpen(false)
              }}
            >
              {sp}
            </button>
          ))}
          {current && (
            <button
              type="button"
              className="sm-sp-cell sm-sp-clear"
              onClick={() => {
                onPick(null)
                setOpen(false)
              }}
            >
              ×
            </button>
          )}
        </div>
      )}
    </div>
  )
}

function StatusPicker({
  currentId,
  onPick,
}: {
  currentId: string
  onPick: (id: 'todo' | 'doing' | 'done') => void
}) {
  const idx = STATUSES.findIndex(s => s.id === currentId)
  const next = () => {
    const nextStatus = STATUSES[(idx + 1) % STATUSES.length]
    onPick(nextStatus.id)
  }
  const current = STATUSES[idx] ?? STATUSES[0]
  return (
    <button
      type="button"
      onClick={next}
      className="sm-pill sm-status-pill"
      style={{ background: current.bg, color: current.color }}
      title="Cliquer pour changer de statut"
    >
      {current.label}
    </button>
  )
}

// =====================================================================
// Hook click outside
// =====================================================================

function useClickOutside<T extends HTMLElement>(ref: React.RefObject<T>, cb: () => void) {
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) cb()
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [ref, cb])
}

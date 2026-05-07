// Référentiels pour le Story Mapping
// Profils issus de l'offre commerciale (8 codes)

export interface ProfileRef {
  code: string
  name: string
  short: string
  color: string
  bg: string
}

export const PROFILES: ProfileRef[] = [
  { code: 'DP',  name: 'Directeur de projet', short: 'Dir. projet', color: '#7c3aed', bg: '#ede9fe' },
  { code: 'CP',  name: 'Chef de projet',      short: 'Chef projet', color: '#1F3463', bg: '#dbeafe' },
  { code: 'LT',  name: 'Lead tech',           short: 'Lead tech',   color: '#4338ca', bg: '#e0e7ff' },
  { code: 'DM',  name: 'Dev mobile senior',   short: 'Dev mobile',  color: '#047857', bg: '#d1fae5' },
  { code: 'DB',  name: 'Dev back confirmé',   short: 'Dev back',    color: '#b45309', bg: '#fef3c7' },
  { code: 'UX',  name: 'UX/UI designer',      short: 'UX / UI',     color: '#be185d', bg: '#fce7f3' },
  { code: 'QA',  name: 'Ingénieur QA',        short: 'QA',          color: '#0e7490', bg: '#cffafe' },
  { code: 'OPS', name: 'DevOps',              short: 'DevOps',      color: '#525252', bg: '#e5e5e5' },
]

export interface StatusRef {
  id: 'todo' | 'doing' | 'done'
  label: string
  color: string
  bg: string
}

export const STATUSES: StatusRef[] = [
  { id: 'todo',  label: 'À faire',  color: '#78716c', bg: '#f5f5f4' },
  { id: 'doing', label: 'En cours', color: '#0369a1', bg: '#e0f2fe' },
  { id: 'done',  label: 'Terminé',  color: '#047857', bg: '#d1fae5' },
]

export const STORY_POINTS = [1, 2, 3, 5, 8, 13] as const
export type StoryPoint = (typeof STORY_POINTS)[number] | null

// Couleurs disponibles pour les epics (l'utilisateur en pioche une à la création)
export const EPIC_COLORS = [
  '#1F3463', '#4338ca', '#be185d', '#047857', '#b45309', '#7c3aed', '#0e7490', '#dc2626',
]

// Types métier
export interface Jalon {
  id: string
  label: string       // "M1"
  title: string       // "Validation cadrage"
  date?: string       // "Semaine 3" ou "19 juin"
}

export interface Epic {
  id: string
  title: string
  description?: string
  color: string
  position: number
}

export interface Story {
  id: string
  epicId: string
  title: string
  description?: string  // libre, mais idéalement format "En tant que / Je veux / Pour"
  jalonId?: string
  profileCode?: string
  storyPoints?: StoryPoint
  statusId: StatusRef['id']
  position: number      // ordre dans la colonne epic
}

export interface BoardState {
  teamName: string
  jalons: Jalon[]
  epics: Epic[]
  stories: Story[]
}

export const emptyBoard: BoardState = {
  teamName: '',
  jalons: [],
  epics: [],
  stories: [],
}

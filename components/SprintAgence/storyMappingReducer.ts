// Reducer pour le Story Mapping. Toutes les mutations passent par ici.
// État : un objet BoardState ; Action : type discriminé.

import type {
  BoardState,
  Epic,
  Jalon,
  Story,
} from '@/data/storyMapping'

export type Action =
  | { type: 'LOAD'; state: BoardState }
  | { type: 'SET_TEAM'; name: string }
  | { type: 'RESET' }

  | { type: 'ADD_JALON'; jalon: Jalon }
  | { type: 'EDIT_JALON'; id: string; patch: Partial<Jalon> }
  | { type: 'DEL_JALON'; id: string }

  | { type: 'ADD_EPIC'; epic: Epic }
  | { type: 'EDIT_EPIC'; id: string; patch: Partial<Epic> }
  | { type: 'DEL_EPIC'; id: string }
  | { type: 'REORDER_EPICS'; ids: string[] }

  | { type: 'ADD_STORY'; story: Story }
  | { type: 'EDIT_STORY'; id: string; patch: Partial<Story> }
  | { type: 'DEL_STORY'; id: string }
  // Bouge une story éventuellement vers un autre epic, à un index donné.
  | { type: 'MOVE_STORY'; id: string; toEpicId: string; toIndex: number }

const reindex = <T extends { position: number }>(arr: T[]): T[] =>
  arr.map((item, idx) => ({ ...item, position: idx }))

export function reducer(state: BoardState, action: Action): BoardState {
  switch (action.type) {
    case 'LOAD':
      return action.state
    case 'SET_TEAM':
      return { ...state, teamName: action.name }
    case 'RESET':
      return { teamName: state.teamName, jalons: [], epics: [], stories: [] }

    case 'ADD_JALON':
      return { ...state, jalons: [...state.jalons, action.jalon] }
    case 'EDIT_JALON':
      return {
        ...state,
        jalons: state.jalons.map(j => (j.id === action.id ? { ...j, ...action.patch } : j)),
      }
    case 'DEL_JALON':
      return {
        ...state,
        jalons: state.jalons.filter(j => j.id !== action.id),
        stories: state.stories.map(s =>
          s.jalonId === action.id ? { ...s, jalonId: undefined } : s,
        ),
      }

    case 'ADD_EPIC':
      return { ...state, epics: [...state.epics, action.epic] }
    case 'EDIT_EPIC':
      return {
        ...state,
        epics: state.epics.map(e => (e.id === action.id ? { ...e, ...action.patch } : e)),
      }
    case 'DEL_EPIC':
      return {
        ...state,
        epics: reindex(state.epics.filter(e => e.id !== action.id)),
        stories: state.stories.filter(s => s.epicId !== action.id),
      }
    case 'REORDER_EPICS': {
      const map = new Map(state.epics.map(e => [e.id, e]))
      const reordered = action.ids.map(id => map.get(id)).filter(Boolean) as Epic[]
      return { ...state, epics: reindex(reordered) }
    }

    case 'ADD_STORY':
      return { ...state, stories: [...state.stories, action.story] }
    case 'EDIT_STORY':
      return {
        ...state,
        stories: state.stories.map(s => (s.id === action.id ? { ...s, ...action.patch } : s)),
      }
    case 'DEL_STORY':
      return {
        ...state,
        stories: reindex(state.stories.filter(s => s.id !== action.id)),
      }

    case 'MOVE_STORY': {
      const story = state.stories.find(s => s.id === action.id)
      if (!story) return state

      const fromEpic = story.epicId
      const isSameEpic = fromEpic === action.toEpicId

      // Stories de la colonne source (sans la story déplacée), réindexées
      const fromList = isSameEpic
        ? state.stories.filter(s => s.epicId === fromEpic && s.id !== action.id)
            .sort((a, b) => a.position - b.position)
        : state.stories.filter(s => s.epicId === fromEpic && s.id !== action.id)
            .sort((a, b) => a.position - b.position)

      // Stories de la colonne cible (sans la story déplacée si même epic)
      const toListBase = state.stories
        .filter(s => s.epicId === action.toEpicId && s.id !== action.id)
        .sort((a, b) => a.position - b.position)

      const movedStory: Story = { ...story, epicId: action.toEpicId }
      const targetIdx = Math.max(0, Math.min(action.toIndex, toListBase.length))
      const newToList = [...toListBase]
      newToList.splice(targetIdx, 0, movedStory)

      // Reconstruire la liste globale en réindexant les deux colonnes touchées
      const others = state.stories.filter(
        s => s.epicId !== fromEpic && s.epicId !== action.toEpicId,
      )

      const reindexedFrom = isSameEpic ? [] : reindex(fromList)
      const reindexedTo = reindex(newToList)

      return {
        ...state,
        stories: [...others, ...reindexedFrom, ...reindexedTo],
      }
    }

    default:
      return state
  }
}

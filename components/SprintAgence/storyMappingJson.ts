// Sérialisation / désérialisation JSON pour le Story Mapping.
//
// L'export est dénormalisé : chaque référence (jalonId, epicId, profileCode,
// statusId) est doublée d'un libellé lisible. Objectif : qu'un agent local
// puisse lire le JSON sans avoir à croiser plusieurs tableaux.
//
// L'import est permissif : on accepte
//  (a) le format structuré ci-dessous ({ "$schema": "story-mapping", ... })
//  (b) un BoardState brut ({ teamName, jalons, epics, stories })

import {
  PROFILES,
  STATUSES,
  STORY_POINTS,
  type BoardState,
  type Epic,
  type Jalon,
  type Story,
} from '@/data/storyMapping'

const SCHEMA = 'story-mapping'
const VERSION = 1

// ============================================================
// Export
// ============================================================

export function boardToJson(state: BoardState): object {
  const totalSP = state.stories.reduce((s, st) => s + (st.storyPoints ?? 0), 0)

  return {
    $schema: SCHEMA,
    version: VERSION,
    exportedAt: new Date().toISOString(),
    documentation:
      "Backlog produit dans l'app de formation Sprint Agence. " +
      "Contient des jalons, des epics rattachés à un jalon, et des user stories rattachées à un epic. " +
      "Chaque référence est dénormalisée (jalonLabel, epicTitle, profile.name…) pour être lisible sans contexte.",
    team: state.teamName || null,
    summary: {
      jalons: state.jalons.length,
      epics: state.epics.length,
      stories: state.stories.length,
      storyPoints: totalSP,
      profilesUsed: Array.from(new Set(state.stories.map(s => s.profileCode).filter(Boolean))),
    },
    jalons: state.jalons.map(j => ({
      id: j.id,
      label: j.label,
      title: j.title,
      date: j.date ?? null,
    })),
    epics: state.epics
      .slice()
      .sort((a, b) => (a.jalonId ?? '').localeCompare(b.jalonId ?? '') || a.position - b.position)
      .map(e => {
        const jalon = state.jalons.find(j => j.id === e.jalonId)
        const storiesCount = state.stories.filter(s => s.epicId === e.id).length
        return {
          id: e.id,
          jalonId: e.jalonId ?? null,
          jalonLabel: jalon?.label ?? null,
          jalonTitle: jalon?.title ?? null,
          title: e.title,
          description: e.description ?? '',
          color: e.color,
          position: e.position,
          storiesCount,
        }
      }),
    stories: state.stories
      .slice()
      .sort((a, b) => a.epicId.localeCompare(b.epicId) || a.position - b.position)
      .map(s => {
        const epic = state.epics.find(e => e.id === s.epicId)
        const jalon = epic ? state.jalons.find(j => j.id === epic.jalonId) : undefined
        const profile = PROFILES.find(p => p.code === s.profileCode)
        const status = STATUSES.find(st => st.id === s.statusId)
        return {
          id: s.id,
          epicId: s.epicId,
          epicTitle: epic?.title ?? null,
          jalonId: epic?.jalonId ?? null,
          jalonLabel: jalon?.label ?? null,
          title: s.title,
          description: s.description ?? '',
          profile: profile
            ? { code: profile.code, name: profile.name, role: profile.short }
            : null,
          storyPoints: s.storyPoints ?? null,
          status: status
            ? { id: status.id, label: status.label }
            : { id: 'todo', label: 'À faire' },
          position: s.position,
        }
      }),
  }
}

// ============================================================
// Import (permissif)
// ============================================================

interface ParseResult {
  ok: boolean
  state?: BoardState
  error?: string
  warnings?: string[]
}

const isObj = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

const asStr = (v: unknown, fallback = ''): string => (typeof v === 'string' ? v : fallback)

const asOptStr = (v: unknown): string | undefined =>
  typeof v === 'string' && v.trim() ? v : undefined

const asNum = (v: unknown, fallback: number): number =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback

export function jsonToBoard(raw: unknown): ParseResult {
  if (!isObj(raw)) {
    return { ok: false, error: 'Le fichier doit contenir un objet JSON.' }
  }

  // teamName : on accepte string, ou objet avec .team / .teamName
  const teamName = asStr(raw.team ?? raw.teamName, '')

  // Récupération des arrays principaux
  const rawJalons = Array.isArray(raw.jalons) ? raw.jalons : []
  const rawEpics = Array.isArray(raw.epics) ? raw.epics : []
  const rawStories = Array.isArray(raw.stories) ? raw.stories : []

  if (rawJalons.length === 0 && rawEpics.length === 0 && rawStories.length === 0) {
    return { ok: false, error: "Aucun jalon, epic ni user story trouvé dans le fichier." }
  }

  const warnings: string[] = []

  // Parse jalons
  const jalons: Jalon[] = rawJalons
    .map((j, idx): Jalon | null => {
      if (!isObj(j)) return null
      const id = asStr(j.id, `imported-j-${idx}`)
      const label = asStr(j.label, `M${idx + 1}`)
      const title = asStr(j.title, 'Jalon importé')
      return {
        id,
        label,
        title,
        date: asOptStr(j.date),
      }
    })
    .filter((j): j is Jalon => j !== null)

  const jalonIds = new Set(jalons.map(j => j.id))

  // Parse epics
  const epicsByJalonCounter: Record<string, number> = {}
  const epics: Epic[] = rawEpics
    .map((e, idx): Epic | null => {
      if (!isObj(e)) return null
      const id = asStr(e.id, `imported-e-${idx}`)
      const declaredJalon = asOptStr(e.jalonId)
      const jalonId = declaredJalon && jalonIds.has(declaredJalon) ? declaredJalon : undefined
      if (declaredJalon && !jalonIds.has(declaredJalon)) {
        warnings.push(`Epic "${asStr(e.title, id)}" rattaché à un jalon inconnu, basculé en "Sans jalon".`)
      }
      const key = jalonId ?? '__no__'
      const position = asNum(e.position, epicsByJalonCounter[key] ?? 0)
      epicsByJalonCounter[key] = position + 1
      return {
        id,
        jalonId,
        title: asStr(e.title, ''),
        description: asOptStr(e.description),
        color: asStr(e.color, '#1F3463'),
        position,
      }
    })
    .filter((e): e is Epic => e !== null)

  const epicIds = new Set(epics.map(e => e.id))

  // Parse stories
  const storiesByEpicCounter: Record<string, number> = {}
  const validProfileCodes = new Set(PROFILES.map(p => p.code))
  const validStatusIds = new Set(STATUSES.map(s => s.id))
  const validSP: ReadonlyArray<number> = STORY_POINTS

  const stories: Story[] = rawStories
    .map((s, idx): Story | null => {
      if (!isObj(s)) return null
      const id = asStr(s.id, `imported-s-${idx}`)
      const epicId = asStr(s.epicId, '')
      if (!epicIds.has(epicId)) {
        warnings.push(`Story "${asStr(s.title, id)}" pointe sur un epic inconnu, ignorée.`)
        return null
      }

      // profileCode : on accepte profileCode (string) OU profile: { code }
      let profileCode: string | undefined
      if (typeof s.profileCode === 'string') profileCode = s.profileCode
      else if (isObj(s.profile) && typeof s.profile.code === 'string') profileCode = s.profile.code
      if (profileCode && !validProfileCodes.has(profileCode)) {
        warnings.push(`Profil inconnu "${profileCode}" pour la story "${asStr(s.title, id)}", retiré.`)
        profileCode = undefined
      }

      // status : on accepte statusId OU status: { id }
      let statusId: 'todo' | 'doing' | 'done' = 'todo'
      const rawStatusId =
        typeof s.statusId === 'string'
          ? s.statusId
          : isObj(s.status) && typeof s.status.id === 'string'
          ? s.status.id
          : 'todo'
      if (validStatusIds.has(rawStatusId as 'todo' | 'doing' | 'done')) {
        statusId = rawStatusId as 'todo' | 'doing' | 'done'
      }

      // story points : doit être dans la liste autorisée
      let storyPoints: 1 | 2 | 3 | 5 | 8 | 13 | undefined
      const rawSP = typeof s.storyPoints === 'number' ? s.storyPoints : null
      if (rawSP !== null && validSP.includes(rawSP)) {
        storyPoints = rawSP as 1 | 2 | 3 | 5 | 8 | 13
      }

      const position = asNum(s.position, storiesByEpicCounter[epicId] ?? 0)
      storiesByEpicCounter[epicId] = position + 1

      return {
        id,
        epicId,
        title: asStr(s.title, ''),
        description: asOptStr(s.description),
        profileCode,
        storyPoints,
        statusId,
        position,
      }
    })
    .filter((s): s is Story => s !== null)

  return {
    ok: true,
    state: { teamName, jalons, epics, stories },
    warnings: warnings.length > 0 ? warnings : undefined,
  }
}

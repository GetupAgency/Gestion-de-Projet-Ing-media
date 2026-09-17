import 'server-only'
import { DatabaseSync } from 'node:sqlite'
import fs from 'node:fs'
import path from 'node:path'
import type { TeamData } from '@/data/teamTypes'

/**
 * Base SQLite locale (module natif node:sqlite, aucune dépendance).
 * Fichier : $DATA_DIR/app.db (par défaut ./data/app.db). En Docker, montez un volume sur /app/data.
 * Tables : teams (scores des équipes de la mission), oraux (passage et notes des oraux).
 */

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data')
const DB_PATH = path.join(DATA_DIR, 'app.db')

declare global {
  // eslint-disable-next-line no-var
  var __appDb: DatabaseSync | undefined
}

function open(): DatabaseSync {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  const db = new DatabaseSync(DB_PATH)
  db.exec(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS teams (
      team_name TEXT PRIMARY KEY,
      points INTEGER NOT NULL DEFAULT 0,
      badges TEXT NOT NULL DEFAULT '[]',
      easter_eggs TEXT NOT NULL DEFAULT '[]',
      tokens TEXT NOT NULL DEFAULT '{"expertQuestions":3,"revelations":2,"joker":1}',
      project_id TEXT,
      last_activity TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS oraux (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_name TEXT NOT NULL,
      passage_order INTEGER NOT NULL,
      project_chosen TEXT,
      comments TEXT,
      note_comprehension INTEGER,
      note_technique INTEGER,
      note_justification INTEGER,
      note_presentation INTEGER,
      oral_started_at TEXT,
      oral_ended_at TEXT,
      duration_minutes INTEGER,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_oraux_order ON oraux(passage_order);
  `)
  const count = db.prepare('SELECT COUNT(*) AS c FROM oraux').get() as { c: number }
  if (count.c === 0) {
    const seed = ['Tess', 'Alioune', 'Bahia', 'Marie-Julie', 'Gaetan', 'Maxime Coche', 'Laurent', 'Aurélien', 'Marc', 'Chaima', 'Aurélie', 'Tiffany', 'Hortense', 'Maxime M', 'Lobna', 'Yann']
    const ins = db.prepare('INSERT INTO oraux (student_name, passage_order, project_chosen) VALUES (?, ?, ?)')
    seed.forEach((name, i) => ins.run(name, i + 1, 'eventeo'))
  }
  return db
}

export function getDb(): DatabaseSync {
  if (!globalThis.__appDb) globalThis.__appDb = open()
  return globalThis.__appDb
}

// ---------- Équipes ----------

interface TeamRow {
  team_name: string
  points: number
  badges: string
  easter_eggs: string
  tokens: string
  project_id: string | null
  last_activity: string
}

function rowToTeam(r: TeamRow): TeamData & { projectId: string | null } {
  return {
    teamName: r.team_name,
    points: r.points,
    badges: JSON.parse(r.badges),
    easterEggs: JSON.parse(r.easter_eggs),
    tokens: JSON.parse(r.tokens),
    lastActivity: r.last_activity,
    projectId: r.project_id,
  }
}

export function listTeams() {
  const rows = getDb().prepare('SELECT * FROM teams ORDER BY points DESC, team_name ASC').all() as unknown as TeamRow[]
  return rows.map(rowToTeam)
}

export function upsertTeam(team: TeamData, projectId: string | null): { created: boolean } {
  const db = getDb()
  const exists = db.prepare('SELECT 1 FROM teams WHERE team_name = ?').get(team.teamName)
  const now = new Date().toISOString()
  db.prepare(
    `INSERT INTO teams (team_name, points, badges, easter_eggs, tokens, project_id, last_activity, updated_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(team_name) DO UPDATE SET points = excluded.points, badges = excluded.badges, easter_eggs = excluded.easter_eggs,
       tokens = excluded.tokens, project_id = excluded.project_id, last_activity = excluded.last_activity, updated_at = excluded.updated_at`,
  ).run(team.teamName, team.points, JSON.stringify(team.badges ?? []), JSON.stringify(team.easterEggs ?? []), JSON.stringify(team.tokens ?? {}), projectId, team.lastActivity || now, now)
  return { created: !exists }
}

export function setTeamPoints(teamName: string, points: number): boolean {
  const res = getDb().prepare('UPDATE teams SET points = ?, updated_at = ? WHERE team_name = ?').run(points, new Date().toISOString(), teamName)
  return Number(res.changes) > 0
}

export function deleteTeam(teamName: string): boolean {
  const res = getDb().prepare('DELETE FROM teams WHERE team_name = ?').run(teamName)
  return Number(res.changes) > 0
}

// ---------- Oraux ----------

export interface OralRow {
  id: number
  student_name: string
  passage_order: number
  project_chosen: string | null
  comments: string | null
  note_comprehension: number | null
  note_technique: number | null
  note_justification: number | null
  note_presentation: number | null
  oral_started_at: string | null
  oral_ended_at: string | null
  duration_minutes: number | null
  updated_at: string
}

export function listOraux(): OralRow[] {
  return getDb().prepare('SELECT * FROM oraux ORDER BY passage_order ASC').all() as unknown as OralRow[]
}

const ORAL_FIELDS = new Set(['comments', 'note_comprehension', 'note_technique', 'note_justification', 'note_presentation', 'oral_started_at', 'oral_ended_at', 'duration_minutes', 'project_chosen', 'student_name', 'passage_order'])

export function updateOral(id: number, patch: Record<string, unknown>): OralRow | null {
  const keys = Object.keys(patch).filter((k) => ORAL_FIELDS.has(k))
  if (keys.length === 0) return null
  const sets = keys.map((k) => `${k} = ?`).join(', ')
  const values = keys.map((k) => patch[k] as string | number | null)
  getDb().prepare(`UPDATE oraux SET ${sets}, updated_at = ? WHERE id = ?`).run(...values, new Date().toISOString(), id)
  return (getDb().prepare('SELECT * FROM oraux WHERE id = ?').get(id) as unknown as OralRow) ?? null
}

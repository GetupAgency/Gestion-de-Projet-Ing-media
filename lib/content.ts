import 'server-only'
import { allModules } from '@/data/allModules'
import type { Module, Section, QuizQuestion } from '@/data/modules'
import { newQuestions, sectionForQuestion } from '@/data/newQuestions'
import { newCases, type CasePratique } from '@/data/newCases'

/**
 * Accès serveur au contenu pédagogique.
 * Les corrections des cas pratiques ne quittent jamais le serveur :
 * `getPublicModule` les retire avant d'envoyer le module au navigateur.
 * Les questions et cas ajoutés après l'audit sont fusionnés ici.
 */

export type PublicCase = Omit<CasePratique, 'correction'> & { hasCorrection: boolean }

export type PublicSection = Omit<Section, 'casePratique'> & {
  casePratique?: PublicCase
  extraCases?: PublicCase[]
}

export type PublicModule = Omit<Module, 'sections'> & { sections: PublicSection[] }

export interface ModuleSummary {
  id: string
  title: string
  description: string
  sectionCount: number
  quizCount: number
  sectionTitles: string[]
}

const extraQuestionsBySection: Record<string, QuizQuestion[]> = {}
for (const q of newQuestions) {
  const sid = sectionForQuestion(q.id)
  if (!sid) continue
  ;(extraQuestionsBySection[sid] ??= []).push(q)
}

/** Modules avec les questions et cas supplémentaires fusionnés (corrections incluses). */
const mergedModules: Module[] = allModules.map((m) => ({
  ...m,
  sections: m.sections.map((s) => ({
    ...s,
    quiz: [...(s.quiz ?? []), ...(extraQuestionsBySection[s.id] ?? [])],
  })),
}))

function extraCasesFor(sectionId: string): CasePratique[] {
  return newCases[sectionId] ?? []
}

function publicCase(c: CasePratique): PublicCase {
  const { correction, ...rest } = c
  return { ...rest, hasCorrection: Boolean(correction) }
}

export function getModuleIds(): string[] {
  return mergedModules.map((m) => m.id)
}

export function getModuleSummaries(): ModuleSummary[] {
  return mergedModules.map((m) => ({
    id: m.id,
    title: m.title,
    description: m.description,
    sectionCount: m.sections.length,
    quizCount: m.sections.reduce((n, s) => n + (s.quiz?.length ?? 0), 0),
    sectionTitles: m.sections.map((s) => s.title),
  }))
}

export function getPublicModule(id: string): PublicModule | null {
  const mod = mergedModules.find((m) => m.id === id)
  if (!mod) return null
  return {
    ...mod,
    sections: mod.sections.map((s) => {
      const { casePratique, ...rest } = s
      const extras = extraCasesFor(s.id).map(publicCase)
      return {
        ...rest,
        quiz: s.quiz && s.quiz.length > 0 ? s.quiz : undefined,
        casePratique: casePratique ? publicCase(casePratique) : undefined,
        extraCases: extras.length ? extras : undefined,
      }
    }),
  }
}

/** Correction d'un cas : index 0 = cas historique de la section, 1+ = cas ajoutés. */
export function getCorrection(moduleId: string, sectionId: string, caseIndex = 0): string | null {
  const mod = mergedModules.find((m) => m.id === moduleId)
  const section = mod?.sections.find((s) => s.id === sectionId)
  if (!section) return null
  if (caseIndex === 0) return section.casePratique?.correction ?? null
  return extraCasesFor(sectionId)[caseIndex - 1]?.correction ?? null
}

export function getAllQuizQuestions(): QuizQuestion[] {
  return mergedModules.flatMap((m) => m.sections).flatMap((s) => s.quiz ?? [])
}

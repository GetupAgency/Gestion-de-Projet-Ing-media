import { QuizQuestion, QuizCategory } from '@/data/modules'

export interface QuizResult {
  questionId: string
  correct: boolean
  category?: QuizCategory
  difficulty?: string
}

export interface QuizProgress {
  totalAttempts: number
  totalCorrect: number
  byCategory: Record<string, { attempts: number; correct: number }>
  byDifficulty: Record<string, { attempts: number; correct: number }>
  wrongQuestionIds: string[]
  lastAttemptDate: string
  bestScore: number
  totalQuizzes: number
}

const STORAGE_KEY = 'quizProgress'

function getDefaultProgress(): QuizProgress {
  return {
    totalAttempts: 0,
    totalCorrect: 0,
    byCategory: {},
    byDifficulty: {},
    wrongQuestionIds: [],
    lastAttemptDate: '',
    bestScore: 0,
    totalQuizzes: 0
  }
}

export function getQuizProgress(): QuizProgress {
  if (typeof window === 'undefined') return getDefaultProgress()
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return getDefaultProgress()
    return JSON.parse(stored)
  } catch {
    return getDefaultProgress()
  }
}

export function updateQuizProgress(results: QuizResult[], scorePercent: number): void {
  if (typeof window === 'undefined') return

  const progress = getQuizProgress()

  progress.totalQuizzes += 1
  progress.lastAttemptDate = new Date().toISOString()

  if (scorePercent > progress.bestScore) {
    progress.bestScore = scorePercent
  }

  for (const result of results) {
    progress.totalAttempts += 1
    if (result.correct) {
      progress.totalCorrect += 1
    }

    // Par catégorie
    const cat = result.category || 'gestion-projet'
    if (!progress.byCategory[cat]) {
      progress.byCategory[cat] = { attempts: 0, correct: 0 }
    }
    progress.byCategory[cat].attempts += 1
    if (result.correct) {
      progress.byCategory[cat].correct += 1
    }

    // Par difficulté
    const diff = result.difficulty || 'moyen'
    if (!progress.byDifficulty[diff]) {
      progress.byDifficulty[diff] = { attempts: 0, correct: 0 }
    }
    progress.byDifficulty[diff].attempts += 1
    if (result.correct) {
      progress.byDifficulty[diff].correct += 1
    }

    // Questions ratées
    if (!result.correct) {
      if (!progress.wrongQuestionIds.includes(result.questionId)) {
        progress.wrongQuestionIds.push(result.questionId)
      }
    } else {
      // Si la question est maintenant correcte, la retirer des ratées
      progress.wrongQuestionIds = progress.wrongQuestionIds.filter(id => id !== result.questionId)
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
}

export function getWrongQuestions(allQuestions: QuizQuestion[]): QuizQuestion[] {
  const progress = getQuizProgress()
  return allQuestions.filter(q => progress.wrongQuestionIds.includes(q.id))
}

export function getCategoryScores(): Record<string, number> {
  const progress = getQuizProgress()
  const scores: Record<string, number> = {}
  for (const [cat, data] of Object.entries(progress.byCategory)) {
    scores[cat] = data.attempts > 0 ? Math.round((data.correct / data.attempts) * 100) : 0
  }
  return scores
}

export function getOverallScore(): number {
  const progress = getQuizProgress()
  if (progress.totalAttempts === 0) return 0
  return Math.round((progress.totalCorrect / progress.totalAttempts) * 100)
}

export const categoryLabels: Record<string, string> = {
  'gestion-projet': 'Gestion de projet',
  'technique': 'Technique',
  'methodologie': 'Méthodologie',
  'budget': 'Budget',
  'design-ux': 'Design & UX',
  'test-qualite': 'Tests & Qualité',
  'lexique': 'Lexique'
}

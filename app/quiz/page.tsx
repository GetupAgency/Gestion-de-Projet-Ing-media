import type { Metadata } from 'next'
import { getAllQuizQuestions } from '@/lib/content'
import { bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions, diverseQuizQuestions } from '@/data/allModules'
import QuizClient from '@/components/QuizClient'

export const metadata: Metadata = { title: 'Quiz global' }

export default function QuizPage() {
  // Dédoublonnage par id : les banques se recoupent (voir audit des quiz)
  const seen = new Set<string>()
  const questions = [
    ...getAllQuizQuestions(),
    ...diverseQuizQuestions,
    ...bonusQuizQuestions,
    ...competencesQuizQuestions,
    ...lexiqueQuizQuestions,
    ...extendedLexiqueQuizQuestions,
  ].filter((q) => {
    if (seen.has(q.id)) return false
    seen.add(q.id)
    return true
  })
  return <QuizClient questions={questions} />
}

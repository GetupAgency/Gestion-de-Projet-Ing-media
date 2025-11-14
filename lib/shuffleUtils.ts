import { QuizQuestion } from '@/data/modules'

/**
 * Algorithme de Fisher-Yates pour un mélange vraiment aléatoire
 * Bien meilleur que Array.sort(() => Math.random() - 0.5)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Mélange les questions ET l'ordre des réponses pour chaque question
 * Cela empêche les patterns comme "la réponse la plus longue est toujours la bonne"
 */
export function shuffleQuestionsAndAnswers(questions: QuizQuestion[]): QuizQuestion[] {
  // D'abord on mélange les questions
  const shuffledQuestions = shuffleArray(questions)
  
  // Ensuite pour chaque question, on mélange l'ordre des réponses
  return shuffledQuestions.map(question => {
    // Créer un tableau d'indices des réponses
    const indices = question.options.map((_, index) => index)
    const shuffledIndices = shuffleArray(indices)
    
    // Réorganiser les options selon les indices mélangés
    const shuffledOptions = shuffledIndices.map(i => question.options[i])
    
    // Trouver le nouvel index de la réponse correcte
    const newCorrectAnswer = shuffledIndices.indexOf(question.correctAnswer)
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    }
  })
}

/**
 * Sélectionne N questions aléatoires parmi un pool
 */
export function selectRandomQuestions(questions: QuizQuestion[], count: number): QuizQuestion[] {
  const shuffled = shuffleQuestionsAndAnswers(questions)
  return shuffled.slice(0, Math.min(count, questions.length))
}


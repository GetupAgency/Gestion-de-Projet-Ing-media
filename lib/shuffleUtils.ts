import { QuizQuestion, QuizCategory, DifficultyLevel, QuestionType } from '@/data/modules'

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

/**
 * Filtre les questions par catégorie, difficulté et type
 */
export function filterQuestions(
  questions: QuizQuestion[],
  filters: {
    categories?: QuizCategory[]
    difficulties?: DifficultyLevel[]
    types?: QuestionType[]
  }
): QuizQuestion[] {
  return questions.filter(q => {
    if (filters.categories && filters.categories.length > 0) {
      const qCategory = q.category || 'gestion-projet'
      if (!filters.categories.includes(qCategory)) return false
    }
    if (filters.difficulties && filters.difficulties.length > 0) {
      const qDifficulty = q.difficulty || 'moyen'
      if (!filters.difficulties.includes(qDifficulty)) return false
    }
    if (filters.types && filters.types.length > 0) {
      const qType = q.type || 'mcq'
      if (!filters.types.includes(qType)) return false
    }
    return true
  })
}

/**
 * Sélectionne N questions aléatoires parmi un pool filtré
 */
export function selectFilteredRandomQuestions(
  questions: QuizQuestion[],
  count: number,
  filters: {
    categories?: QuizCategory[]
    difficulties?: DifficultyLevel[]
    types?: QuestionType[]
  }
): QuizQuestion[] {
  const filtered = filterQuestions(questions, filters)
  return selectRandomQuestions(filtered, count)
}


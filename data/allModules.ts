// Fichier central qui regroupe tous les modules
import { modules as introModules } from './modules'
import { additionalModules } from './additionalModules'
import { finalModules } from './finalModules'
import { completeModules } from './completeModules'
import { missionModule } from './missionModule'
import { crisisModule } from './crisisModule'
import { bonusQuizQuestions } from './bonusQuiz'
import { lexiqueQuizQuestions } from './lexiqueQuiz'
import { extendedLexiqueQuizQuestions } from './extendedLexiqueQuiz'
import { competencesQuizQuestions } from './competencesQuiz'
import { diverseQuizQuestions } from './diverseQuiz'

export const allModules = [
  ...completeModules,
  ...introModules.slice(1), // Skip intro car déjà dans completeModules
  ...additionalModules,
  ...finalModules,
  crisisModule,
  missionModule // Mission finale individuelle
]

// Export toutes les questions bonus pour le quiz global
export { bonusQuizQuestions, lexiqueQuizQuestions, extendedLexiqueQuizQuestions, competencesQuizQuestions, diverseQuizQuestions }


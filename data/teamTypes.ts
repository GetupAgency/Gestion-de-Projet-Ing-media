/** Type partagé client/serveur pour les scores d'équipe (mission). */
export interface TeamData {
  teamName: string
  points: number
  badges: string[]
  tokens: {
    expertQuestions: number
    revelations: number
    joker: number
  }
  easterEggs: string[]
  lastActivity: string
}

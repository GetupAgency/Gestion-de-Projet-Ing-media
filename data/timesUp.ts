// Time's Up du PM
// Pool curé de cartes pour le jeu, classées en 3 niveaux.
// Les cartes voyagent dans les 3 manches : Libre → Trois mots → Mime.
//
// Niveau 1 : vocabulaire usuel, tout le monde devrait avoir
// Niveau 2 : concepts métier, exigent une vraie attention
// Niveau 3 : notions plus pointues, valorisées en bonus

export type CardLevel = 1 | 2 | 3

export interface TimesUpCard {
  id: string
  label: string
  level: CardLevel
}

const c = (id: string, label: string, level: CardLevel): TimesUpCard => ({ id, label, level })

export const timesUpDeck: TimesUpCard[] = [
  // -----------------------------------------------------------------
  // Niveau 1 : usuels
  // -----------------------------------------------------------------
  c('bug', 'Bug', 1),
  c('mvp', 'MVP', 1),
  c('brief', 'Brief', 1),
  c('cdc', 'Cahier des charges', 1),
  c('recette', 'Recette', 1),
  c('logo', 'Logo', 1),
  c('app-mobile', 'Application mobile', 1),
  c('developpeur', 'Développeur', 1),
  c('designer', 'Designer', 1),
  c('client', 'Client', 1),
  c('reunion', 'Réunion', 1),
  c('demo', 'Démo', 1),
 

  // -----------------------------------------------------------------
  // Niveau 2 : concepts métier
  // -----------------------------------------------------------------
  c('livraison', 'Livraison', 1),
  c('deadline', 'Deadline', 1),
  c('budget', 'Budget', 1),
  c('equipe', 'Équipe', 1),
  c('figma', 'Figma', 1),
  c('email', 'Email', 1),
  c('agile', 'Méthode agile', 2),
  c('seo', 'SEO', 2),
  c('kpi', 'KPI', 2),
  c('rgpd', 'RGPD', 2),
  c('cookie', 'Cookie', 2),

  // -----------------------------------------------------------------
  // Niveau 3 : notions pointues
  // -----------------------------------------------------------------
  c('dor', 'Definition of Ready', 3),
  c('dod', 'Definition of Done', 3),
  c('velocite', 'Vélocité', 3),
  c('burndown', 'Burndown chart', 3),
  c('story-mapping', 'Story mapping', 3),
  c('lean-canvas', 'Lean canvas', 3),
  c('dette-technique', 'Dette technique', 3),
  c('yagni', 'YAGNI', 3),
  c('dry', 'Principe DRY', 3),
  c('solid', 'Principes SOLID', 3),
  c('microservices', 'Microservices', 3),
  c('webhook', 'Webhook', 3),
  c('docker', 'Docker', 3),
  c('cdn', 'CDN', 3),
  c('cache', 'Cache', 3),
  c('jwt', 'JWT', 3),
  c('oauth', 'OAuth', 3),
  c('feature-flag', 'Feature flag', 3),
  c('a-b-test', 'A/B test', 3),
  c('observabilite', 'Observabilité', 3),
  c('chaos-engineering', 'Chaos engineering', 3),
  c('git-flow', 'Git flow', 3),
  c('mob-programming', 'Mob programming', 3),
  c('pair-programming', 'Pair programming', 3),
  c('event-storming', 'Event storming', 3),
  c('north-star', 'North star metric', 3),
  c('churn', 'Churn', 3),
  c('mrr', 'MRR', 3),
  c('time-to-market', 'Time to market', 3),
  c('postmortem', 'Postmortem', 3),
]

export interface RoundDef {
  id: 1 | 2 | 3
  label: string
  shortLabel: string
  rule: string
  emoji: string
}

export const timesUpRounds: RoundDef[] = [
  {
    id: 1,
    label: 'Manche 1 · Libre',
    shortLabel: 'Libre',
    rule: "Décrivez le mot avec autant de phrases que vous voulez. Le mot lui-même et les mots de sa famille sont interdits. Pas de mime, pas de chant.",
    emoji: '🎤',
  },
  {
    id: 2,
    label: 'Manche 2 · Trois mots',
    shortLabel: 'Trois mots',
    rule: "Vous n'avez droit qu'à TROIS mots pour faire deviner chaque carte. Choisissez-les bien.",
    emoji: '✋',
  },
  {
    id: 3,
    label: 'Manche 3 · Mime',
    shortLabel: 'Mime',
    rule: "Aucun son. Juste le geste. Vos coéquipiers ont deviné les cartes deux fois déjà : aidez-leur la mémoire avec votre corps.",
    emoji: '🤹',
  },
]

/**
 * Mélange Fisher-Yates non destructif.
 */
export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/**
 * Pioche `count` cartes au hasard parmi les niveaux 1 et 2 uniquement.
 * Le niveau 3 est exclu du tirage : trop pointu pour le format Time's Up,
 * mais on garde les cartes dans le pool au cas où on voudrait y revenir.
 *
 * Répartition cible : 45 % niveau 1 (faciles, on rentre dans le jeu) et
 * 55 % niveau 2 (cœur du vocabulaire métier). Si un pool ne suffit pas,
 * on complète avec l'autre niveau.
 */
export function drawHand(count: number): TimesUpCard[] {
  const level1 = shuffle(timesUpDeck.filter(c => c.level === 1))
  const level2 = shuffle(timesUpDeck.filter(c => c.level === 2))

  const want1 = Math.min(level1.length, Math.round(count * 0.45))
  const want2 = Math.min(level2.length, count - want1)

  const picked = [
    ...level1.slice(0, want1),
    ...level2.slice(0, want2),
  ]

  // Si on n'a pas atteint count (pool plus petit que demandé), on complète
  // avec le restant du niveau 1 puis du niveau 2.
  if (picked.length < count) {
    const fillers = [...level1.slice(want1), ...level2.slice(want2)]
    picked.push(...fillers.slice(0, count - picked.length))
  }

  return shuffle(picked)
}

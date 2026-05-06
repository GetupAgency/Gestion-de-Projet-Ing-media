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
  c('sprint', 'Sprint', 1),
  c('bug', 'Bug', 1),
  c('mvp', 'MVP', 1),
  c('brief', 'Brief', 1),
  c('cdc', 'Cahier des charges', 1),
  c('gantt', 'Diagramme de Gantt', 1),
  c('recette', 'Recette', 1),
  c('wireframe', 'Wireframe', 1),
  c('maquette', 'Maquette', 1),
  c('prototype', 'Prototype', 1),
  c('logo', 'Logo', 1),
  c('site-web', 'Site web', 1),
  c('app-mobile', 'Application mobile', 1),
  c('developpeur', 'Développeur', 1),
  c('designer', 'Designer', 1),
  c('chef-projet', 'Chef de projet', 1),
  c('client', 'Client', 1),
  c('reunion', 'Réunion', 1),
  c('demo', 'Démo', 1),
  c('livraison', 'Livraison', 1),
  c('deadline', 'Deadline', 1),
  c('budget', 'Budget', 1),
  c('equipe', 'Équipe', 1),
  c('daily', 'Daily meeting', 1),
  c('git', 'Git', 1),
  c('github', 'GitHub', 1),
  c('slack', 'Slack', 1),
  c('figma', 'Figma', 1),
  c('notion', 'Notion', 1),
  c('email', 'Email', 1),

  // -----------------------------------------------------------------
  // Niveau 2 : concepts métier
  // -----------------------------------------------------------------
  c('user-story', 'User story', 2),
  c('story-point', 'Story points', 2),
  c('persona', 'Persona', 2),
  c('parcours', 'Parcours utilisateur', 2),
  c('backlog', 'Backlog', 2),
  c('kick-off', 'Kick-off', 2),
  c('jalons', 'Jalons', 2),
  c('iteration', 'Itération', 2),
  c('retrospective', 'Rétrospective', 2),
  c('kanban', 'Kanban', 2),
  c('scrum', 'Scrum', 2),
  c('agile', 'Méthode agile', 2),
  c('cycle-v', 'Cycle en V', 2),
  c('po', 'Product owner', 2),
  c('scrum-master', 'Scrum master', 2),
  c('lead-tech', 'Lead tech', 2),
  c('deploiement', 'Déploiement', 2),
  c('cicd', 'Intégration continue', 2),
  c('code-review', 'Code review', 2),
  c('debug', 'Debug', 2),
  c('hotfix', 'Hotfix', 2),
  c('refactoring', 'Refactoring', 2),
  c('pull-request', 'Pull request', 2),
  c('merge', 'Merge', 2),
  c('release', 'Release', 2),
  c('roadmap', 'Roadmap', 2),
  c('pivot', 'Pivot', 2),
  c('stakeholder', 'Stakeholder', 2),
  c('api', 'API', 2),
  c('framework', 'Framework', 2),
  c('responsive', 'Responsive', 2),
  c('accessibilite', 'Accessibilité', 2),
  c('seo', 'SEO', 2),
  c('analytics', 'Analytics', 2),
  c('tjm', 'TJM', 2),
  c('chiffrage', 'Chiffrage', 2),
  c('roi', 'ROI', 2),
  c('kpi', 'KPI', 2),
  c('test-utilisateur', 'Test utilisateur', 2),
  c('design-system', 'Design system', 2),
  c('storyboard', 'Storyboard', 2),
  c('rgpd', 'RGPD', 2),
  c('cookie', 'Cookie', 2),
  c('cnil', 'CNIL', 2),
  c('hebergement', 'Hébergement', 2),
  c('cms', 'CMS', 2),

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
 * Pioche `count` cartes au hasard, en respectant si possible une répartition
 * équilibrée entre niveaux. Pour 40 cartes par défaut : 14/18/8.
 */
export function drawHand(count: number): TimesUpCard[] {
  const ratios = { 1: 0.35, 2: 0.45, 3: 0.2 }
  const byLevel = {
    1: shuffle(timesUpDeck.filter(c => c.level === 1)),
    2: shuffle(timesUpDeck.filter(c => c.level === 2)),
    3: shuffle(timesUpDeck.filter(c => c.level === 3)),
  }
  const want = {
    1: Math.round(count * ratios[1]),
    2: Math.round(count * ratios[2]),
    3: count - Math.round(count * ratios[1]) - Math.round(count * ratios[2]),
  }
  const picked = [
    ...byLevel[1].slice(0, want[1]),
    ...byLevel[2].slice(0, want[2]),
    ...byLevel[3].slice(0, want[3]),
  ]
  return shuffle(picked)
}

import { QuizQuestion } from './modules'

// Questions sur les compétences du chef de projet
export const competencesQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-comp-1',
    question: 'Quelle soft skill est essentielle pour un chef de projet ?',
    options: [
      'Savoir coder en 10 langages',
      'Communication claire et écoute active',
      'Être autoritaire',
      'Travailler seul'
    ],
    correctAnswer: 1,
    explanation: 'La communication claire et l\'écoute active sont parmi les soft skills les plus importantes pour comprendre les besoins et coordonner l\'équipe.'
  },
  {
    id: 'q-comp-2',
    question: 'Comment un chef de projet doit-il se positionner face à son équipe ?',
    options: [
      'Comme un chef autoritaire',
      'Comme un facilitateur qui aide l\'équipe à avancer',
      'Comme un simple observateur',
      'Comme un développeur senior'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit être un facilitateur, pas un chef autoritaire. Son rôle est d\'aider l\'équipe à progresser et de créer les conditions de réussite.'
  },
  {
    id: 'q-comp-3',
    question: 'Que doit faire un chef de projet face à une mauvaise nouvelle ?',
    options: [
      'La cacher au client',
      'Communiquer le plus tôt possible, ne jamais surprendre le client',
      'Attendre que ça se règle tout seul',
      'Blâmer l\'équipe'
    ],
    correctAnswer: 1,
    explanation: 'Un bon chef de projet communique les mauvaises nouvelles le plus tôt possible. Ne jamais surprendre le client est un principe fondamental.'
  },
  {
    id: 'q-comp-4',
    question: 'Quelle hard skill est nécessaire pour un chef de projet web ?',
    options: [
      'Savoir développer toute l\'application seul',
      'Comprendre les technologies web et savoir créer un planning',
      'Être graphiste expert',
      'Connaître tous les langages de programmation'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit comprendre les technologies (sans être expert codeur) et maîtriser les outils de gestion : planning, budget, user stories, etc.'
  },
  {
    id: 'q-comp-5',
    question: 'Comment un chef de projet doit-il gérer un conflit entre le client et l\'équipe technique ?',
    options: [
      'Prendre systématiquement le parti du client',
      'Rester factuel, protéger l\'équipe des dérives et le client des sur-complications',
      'Laisser l\'équipe et le client se débrouiller',
      'Abandonner le projet'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit rester factuel, protéger l\'équipe des demandes irréalistes ET protéger le client de la sur-ingénierie technique.'
  },
  {
    id: 'q-comp-6',
    question: 'Pourquoi un chef de projet doit-il "anticiper plutôt que réagir" ?',
    options: [
      'Pour paraître intelligent',
      'Pour prévoir les risques et préparer des plans B',
      'Pour augmenter le budget',
      'Ce n\'est pas important'
    ],
    correctAnswer: 1,
    explanation: 'Anticiper permet d\'identifier les risques en avance et de préparer des solutions de contournement, évitant ainsi les situations de crise.'
  },
  {
    id: 'q-comp-7',
    question: 'Qu\'est-ce que la "capacité à dire non" pour un chef de projet ?',
    options: [
      'Refuser tous les projets',
      'Refuser avec tact les demandes irréalistes ou hors scope',
      'Être désagréable',
      'Ne jamais dire non'
    ],
    correctAnswer: 1,
    explanation: 'Savoir dire non avec diplomatie aux demandes irréalistes ou hors périmètre est essentiel pour protéger le projet et l\'équipe.'
  },
  {
    id: 'q-comp-8',
    question: 'Que signifie "on dit, on fait" pour un chef de projet ?',
    options: [
      'Dire et faire n\'importe quoi',
      'Tenir ses engagements pour maintenir sa crédibilité',
      'Parler beaucoup',
      'Faire sans dire'
    ],
    correctAnswer: 1,
    explanation: 'Incarner la fiabilité en tenant ses engagements ("on dit, on fait") est crucial pour la crédibilité du chef de projet.'
  },
  {
    id: 'q-comp-9',
    question: 'Pourquoi un chef de projet doit-il "expliquer sans jargon" ?',
    options: [
      'Pour paraître moins intelligent',
      'Parce que le client n\'est généralement pas technique',
      'Pour économiser du temps',
      'Ce n\'est pas nécessaire'
    ],
    correctAnswer: 1,
    explanation: 'Le client n\'est généralement pas technique. Le chef de projet doit adapter son discours et éviter le jargon pour être compris.'
  },
  {
    id: 'q-comp-10',
    question: 'Qu\'est-ce que la "gestion du stress" pour un chef de projet ?',
    options: [
      'Éviter tout projet stressant',
      'Rester calme sous pression et dans l\'urgence',
      'Stresser toute l\'équipe',
      'Abandonner quand c\'est difficile'
    ],
    correctAnswer: 1,
    explanation: 'La gestion du stress permet au chef de projet de rester calme et structuré même sous pression, rassurant ainsi l\'équipe.'
  },
  {
    id: 'q-comp-11',
    question: 'Pourquoi un chef de projet doit-il faire preuve de "curiosité" ?',
    options: [
      'Pour fouiller dans les affaires des autres',
      'Pour s\'intéresser aux nouvelles technologies et méthodes',
      'Pour lire les emails de l\'équipe',
      'Ce n\'est pas important'
    ],
    correctAnswer: 1,
    explanation: 'La curiosité permet au chef de projet de rester à jour sur les nouvelles technologies, outils et méthodes pour mieux conseiller ses clients.'
  },
  {
    id: 'q-comp-12',
    question: 'Qu\'est-ce que le "leadership positif" ?',
    options: [
      'Être toujours de bonne humeur',
      'Motiver l\'équipe sans autoritarisme',
      'Ne jamais critiquer',
      'Laisser tout faire'
    ],
    correctAnswer: 1,
    explanation: 'Le leadership positif consiste à motiver et guider l\'équipe de manière collaborative plutôt qu\'autoritaire.'
  },
  {
    id: 'q-comp-13',
    question: 'Pourquoi le chef de projet doit-il "être stable, calme et structuré" ?',
    options: [
      'Pour paraître sérieux',
      'Parce qu\'il est le roc de l\'équipe, surtout dans la tempête',
      'Pour économiser de l\'énergie',
      'Ce n\'est pas nécessaire'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit incarner la stabilité et le calme, surtout dans les moments difficiles, pour rassurer et guider l\'équipe.'
  },
  {
    id: 'q-comp-14',
    question: 'Quelle hard skill permet de structurer les besoins utilisateurs ?',
    options: [
      'Savoir coder',
      'Construire des user stories',
      'Maîtriser Photoshop',
      'Connaître Excel'
    ],
    correctAnswer: 1,
    explanation: 'Savoir construire des user stories permet de structurer et formaliser clairement les besoins des utilisateurs de manière actionnable.'
  },
  {
    id: 'q-comp-15',
    question: 'Pourquoi un chef de projet doit-il maîtriser les bases du SEO ?',
    options: [
      'Pour remplacer un consultant SEO',
      'Pour conseiller le client et comprendre les enjeux de visibilité',
      'Ce n\'est pas nécessaire',
      'Pour coder le site'
    ],
    correctAnswer: 1,
    explanation: 'Comprendre les bases du SEO permet au chef de projet de conseiller le client sur les enjeux de visibilité et de travailler efficacement avec les experts SEO.'
  }
]


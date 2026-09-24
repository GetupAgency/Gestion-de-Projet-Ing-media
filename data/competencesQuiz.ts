import { QuizQuestion } from './modules'

// Questions sur les compétences du chef de projet
export const competencesQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-comp-1',
    question: 'Quelle soft skill est essentielle pour un chef de projet ?',
    options: [
      'Savoir coder dans une dizaine de langages',
      'Communication claire et écoute active',
      'Être autoritaire pour se faire respecter',
      'Travailler seul pour aller plus vite'
    ],
    correctAnswer: 1,
    explanation: 'La communication claire et l\'écoute active sont parmi les soft skills les plus importantes pour comprendre les besoins et coordonner l\'équipe.',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-2',
    question: 'Comment un chef de projet doit-il se positionner face à son équipe ?',
    options: [
      'Comme un chef autoritaire qui tranche tout',
      'Comme un facilitateur qui aide l’équipe à avancer',
      'Comme un simple observateur qui rend compte',
      'Comme un développeur senior qui code avec eux'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit être un facilitateur, pas un chef autoritaire. Son rôle est d\'aider l\'équipe à progresser et de créer les conditions de réussite.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-3',
    question: 'Que doit faire un chef de projet face à une mauvaise nouvelle ?',
    options: [
      'La cacher au client tant qu’une solution n’est pas trouvée',
      'La communiquer tôt, sans jamais surprendre le client',
      'Attendre que ça se règle tout seul avec le temps',
      'Blâmer l’équipe pour montrer qu’il n’y est pour rien'
    ],
    correctAnswer: 1,
    explanation: 'Un bon chef de projet communique les mauvaises nouvelles le plus tôt possible. Ne jamais surprendre le client est un principe fondamental.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-4',
    question: 'Quelle hard skill est nécessaire pour un chef de projet web ?',
    options: [
      'Savoir développer toute l’application seul si besoin',
      'Comprendre les technologies web et savoir bâtir un planning',
      'Être graphiste expert pour juger les maquettes',
      'Connaître tous les langages de programmation du marché'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit comprendre les technologies (sans être expert codeur) et maîtriser les outils de gestion : planning, budget, user stories, etc.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-comp-5',
    question: 'Comment un chef de projet doit-il gérer un conflit entre le client et l\'équipe technique ?',
    options: [
      'Prendre systématiquement le parti du client, c’est lui qui paie',
      'Rester factuel : protéger l’équipe des dérives, le client des complications',
      'Laisser l’équipe technique et le client régler le désaccord directement entre eux',
      'Abandonner le projet si le conflit dure plus d’une semaine'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit rester factuel, protéger l\'équipe des demandes irréalistes ET protéger le client de la sur-ingénierie technique.',
    difficulty: 'difficile',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-6',
    question: 'Pourquoi un chef de projet doit-il "anticiper plutôt que réagir" ?',
    options: [
      'Pour paraître intelligent aux yeux du client',
      'Pour prévoir les risques et préparer des plans B',
      'Pour augmenter le budget avec une ligne « imprévus »',
      'Ce n’est pas important : on gère au fil de l’eau'
    ],
    correctAnswer: 1,
    explanation: 'Anticiper permet d\'identifier les risques en avance et de préparer des solutions de contournement, évitant ainsi les situations de crise.',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-comp-7',
    question: 'Qu\'est-ce que la "capacité à dire non" pour un chef de projet ?',
    options: [
      'Refuser tous les projets qui paraissent compliqués',
      'Refuser avec tact les demandes irréalistes ou hors périmètre',
      'Être désagréable pour se faire respecter du client',
      'Ne jamais dire non, mais faire traîner les demandes gênantes'
    ],
    correctAnswer: 1,
    explanation: 'Savoir dire non avec diplomatie aux demandes irréalistes ou hors périmètre est essentiel pour protéger le projet et l\'équipe.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-8',
    question: 'Que signifie "on dit, on fait" pour un chef de projet ?',
    options: [
      'Dire et faire n’importe quoi tant que le client est content',
      'Tenir ses engagements pour rester crédible',
      'Parler beaucoup en réunion pour occuper le terrain',
      'Faire sans dire, pour éviter les discussions inutiles'
    ],
    correctAnswer: 1,
    explanation: 'Incarner la fiabilité en tenant ses engagements ("on dit, on fait") est crucial pour la crédibilité du chef de projet.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-comp-9',
    question: 'Pourquoi un chef de projet doit-il "expliquer sans jargon" ?',
    options: [
      'Pour paraître moins intelligent et rassurer le client',
      'Parce que le client n’est généralement pas technique',
      'Pour économiser du temps de réunion',
      'Ce n’est pas nécessaire, le client s’adapte au vocabulaire'
    ],
    correctAnswer: 1,
    explanation: 'Le client n\'est généralement pas technique. Le chef de projet doit adapter son discours et éviter le jargon pour être compris.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-10',
    question: 'Qu\'est-ce que la "gestion du stress" pour un chef de projet ?',
    options: [
      'Éviter tout projet stressant dès la phase commerciale',
      'Rester calme sous pression et dans l’urgence',
      'Stresser toute l’équipe pour qu’elle aille plus vite',
      'Abandonner quand c’est trop difficile à gérer'
    ],
    correctAnswer: 1,
    explanation: 'La gestion du stress permet au chef de projet de rester calme et structuré même sous pression, rassurant ainsi l\'équipe.',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-11',
    question: 'Pourquoi un chef de projet doit-il faire preuve de "curiosité" ?',
    options: [
      'Pour fouiller dans les affaires des autres membres de l’équipe',
      'Pour s’intéresser aux nouvelles technologies et méthodes',
      'Pour lire les e-mails de l’équipe et rester informé',
      'Ce n’est pas important, les compétences techniques suffisent'
    ],
    correctAnswer: 1,
    explanation: 'La curiosité permet au chef de projet de rester à jour sur les nouvelles technologies, outils et méthodes pour mieux conseiller ses clients.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-12',
    question: 'Qu\'est-ce que le "leadership positif" ?',
    options: [
      'Être toujours de bonne humeur, quoi qu’il arrive',
      'Motiver l’équipe sans autoritarisme',
      'Ne jamais critiquer le travail de l’équipe',
      'Laisser tout faire pour préserver l’ambiance'
    ],
    correctAnswer: 1,
    explanation: 'Le leadership positif consiste à motiver et guider l\'équipe de manière collaborative plutôt qu\'autoritaire.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-comp-13',
    question: 'Pourquoi le chef de projet doit-il "être stable, calme et structuré" ?',
    options: [
      'Pour paraître sérieux devant le client et la direction',
      'Parce qu’il est le roc de l’équipe, surtout dans la tempête',
      'Pour économiser de l’énergie sur les projets longs',
      'Ce n’est pas nécessaire, l’équipe se gère toute seule'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet doit incarner la stabilité et le calme, surtout dans les moments difficiles, pour rassurer et guider l\'équipe.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-comp-14',
    question: 'Quelle hard skill permet de structurer les besoins utilisateurs ?',
    options: [
      'Savoir coder en JavaScript',
      'Construire des user stories',
      'Maîtriser Photoshop et Figma',
      'Connaître Excel et les tableaux croisés'
    ],
    correctAnswer: 1,
    explanation: 'Savoir construire des user stories permet de structurer et formaliser clairement les besoins des utilisateurs de manière actionnable.',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-comp-15',
    question: 'Pourquoi un chef de projet doit-il maîtriser les bases du SEO ?',
    options: [
      'Pour remplacer un consultant SEO et économiser son coût',
      'Pour conseiller le client sur les enjeux de visibilité',
      'Ce n’est pas nécessaire, un plugin s’en charge',
      'Pour coder le site avec les bonnes balises dès le départ'
    ],
    correctAnswer: 1,
    explanation: 'Comprendre les bases du SEO permet au chef de projet de conseiller le client sur les enjeux de visibilité et de travailler efficacement avec les experts SEO.',
    difficulty: 'moyen',
    category: 'technique'
  }
]


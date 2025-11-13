import { QuizQuestion } from './modules'

// Questions bonus supplémentaires pour enrichir le quiz global
export const bonusQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-bonus-1',
    question: 'Quel est le rôle principal d\'un chef de projet ?',
    options: [
      'Coder l\'application',
      'Coordonner l\'équipe et gérer le projet',
      'Designer les maquettes',
      'Tester le site'
    ],
    correctAnswer: 1,
    explanation: 'Le chef de projet coordonne l\'équipe, gère le planning, le budget, les risques et fait l\'interface avec le client.'
  },
  {
    id: 'q-bonus-2',
    question: 'Qu\'est-ce que le HTTPS ?',
    options: [
      'Un langage de programmation',
      'La version sécurisée du protocole HTTP',
      'Un CMS',
      'Un framework'
    ],
    correctAnswer: 1,
    explanation: 'HTTPS est la version sécurisée de HTTP qui chiffre les échanges entre le navigateur et le serveur grâce au SSL/TLS.'
  },
  {
    id: 'q-bonus-3',
    question: 'Qu\'est-ce qu\'un wireframe ?',
    options: [
      'Un câble de connexion',
      'Un schéma simplifié d\'une page sans détails graphiques',
      'Un framework JavaScript',
      'Un type de serveur'
    ],
    correctAnswer: 1,
    explanation: 'Un wireframe est une maquette basse fidélité qui montre la structure et l\'organisation d\'une page sans les détails visuels.'
  },
  {
    id: 'q-bonus-4',
    question: 'Quel outil est principalement utilisé pour le versioning du code ?',
    options: [
      'Photoshop',
      'Git',
      'Excel',
      'Word'
    ],
    correctAnswer: 1,
    explanation: 'Git est le système de gestion de versions le plus utilisé pour le code source, permettant de suivre les modifications et collaborer.'
  },
  {
    id: 'q-bonus-5',
    question: 'Qu\'est-ce que le SEO ?',
    options: [
      'Un langage de programmation',
      'Search Engine Optimization (optimisation pour les moteurs de recherche)',
      'Un type de serveur',
      'Un CMS'
    ],
    correctAnswer: 1,
    explanation: 'Le SEO (Search Engine Optimization) regroupe les techniques pour améliorer le positionnement d\'un site dans les moteurs de recherche.'
  },
  {
    id: 'q-bonus-6',
    question: 'Quel est le temps de chargement maximum recommandé pour une page web ?',
    options: [
      '1 seconde',
      '3 secondes',
      '10 secondes',
      '30 secondes'
    ],
    correctAnswer: 1,
    explanation: 'Un temps de chargement inférieur à 3 secondes est recommandé. Au-delà, le taux de rebond augmente significativement.'
  },
  {
    id: 'q-bonus-7',
    question: 'Qu\'est-ce que le responsive design ?',
    options: [
      'Un design qui répond vite aux clics',
      'Un design qui s\'adapte à toutes les tailles d\'écran',
      'Un design coloré',
      'Un design avec animations'
    ],
    correctAnswer: 1,
    explanation: 'Le responsive design permet à un site de s\'adapter automatiquement aux différentes tailles d\'écran (desktop, tablette, mobile).'
  },
  {
    id: 'q-bonus-8',
    question: 'Quelle méthodologie de gestion de projet est basée sur des cycles courts et itératifs ?',
    options: [
      'Waterfall (Cascade)',
      'Agile',
      'Anarchie',
      'Aucune'
    ],
    correctAnswer: 1,
    explanation: 'La méthodologie Agile est basée sur des cycles courts (sprints), l\'adaptation continue et la collaboration étroite avec le client.'
  },
  {
    id: 'q-bonus-9',
    question: 'Qu\'est-ce qu\'un backlog ?',
    options: [
      'Un bug dans le code',
      'Une liste priorisée de fonctionnalités et tâches à réaliser',
      'Un type de base de données',
      'Un outil de design'
    ],
    correctAnswer: 1,
    explanation: 'Le backlog est la liste ordonnée par priorité de toutes les fonctionnalités, tâches et user stories à développer.'
  },
  {
    id: 'q-bonus-10',
    question: 'Qu\'est-ce que le RGPD ?',
    options: [
      'Un CMS français',
      'Le règlement européen sur la protection des données personnelles',
      'Un langage de programmation',
      'Un outil de gestion de projet'
    ],
    correctAnswer: 1,
    explanation: 'Le RGPD (Règlement Général sur la Protection des Données) est la loi européenne qui encadre la collecte et le traitement des données personnelles.'
  },
  {
    id: 'q-bonus-11',
    question: 'Qu\'est-ce qu\'un MVP (Minimum Viable Product) ?',
    options: [
      'La version la plus complète possible',
      'La version minimale fonctionnelle pour tester le marché',
      'Un outil de développement',
      'Un type de serveur'
    ],
    correctAnswer: 1,
    explanation: 'Le MVP est la version minimale d\'un produit qui contient juste assez de fonctionnalités pour être utilisable et tester le marché.'
  },
  {
    id: 'q-bonus-12',
    question: 'Quel est l\'objectif d\'un Daily Standup en méthode Agile ?',
    options: [
      'Faire du sport',
      'Synchroniser l\'équipe quotidiennement (15 min max)',
      'Valider le budget',
      'Tester le produit'
    ],
    correctAnswer: 1,
    explanation: 'Le Daily Standup est une réunion quotidienne courte (15 min) où chacun partage ce qu\'il a fait, ce qu\'il va faire et ses blocages.'
  },
  {
    id: 'q-bonus-13',
    question: 'Qu\'est-ce qu\'un CDN ?',
    options: [
      'Un Content Delivery Network (réseau de distribution de contenu)',
      'Un CMS français',
      'Un langage de programmation',
      'Un type de base de données'
    ],
    correctAnswer: 0,
    explanation: 'Un CDN est un réseau de serveurs répartis géographiquement qui distribue le contenu pour améliorer la vitesse de chargement partout dans le monde.'
  },
  {
    id: 'q-bonus-14',
    question: 'Qu\'est-ce que le taux de rebond ?',
    options: [
      'Le pourcentage de visiteurs qui reviennent',
      'Le pourcentage de visiteurs qui quittent après une seule page',
      'Le nombre de clics par visiteur',
      'La vitesse de chargement'
    ],
    correctAnswer: 1,
    explanation: 'Le taux de rebond mesure le pourcentage de visiteurs qui quittent le site après avoir consulté une seule page sans interaction.'
  },
  {
    id: 'q-bonus-15',
    question: 'Qu\'est-ce que Figma ?',
    options: [
      'Un CMS',
      'Un outil de conception d\'interface et de prototypage',
      'Un langage de programmation',
      'Un hébergeur web'
    ],
    correctAnswer: 1,
    explanation: 'Figma est un outil collaboratif de design d\'interface (UI/UX) et de prototypage utilisé par les designers et développeurs.'
  },
  {
    id: 'q-bonus-16',
    question: 'Quelle est la durée typique de la phase de tests dans un projet web ?',
    options: [
      '1 jour',
      '2-3 semaines',
      '6 mois',
      'Tests non nécessaires'
    ],
    correctAnswer: 1,
    explanation: 'La phase de tests dure généralement 2 à 3 semaines pour tester fonctionnalités, performance, sécurité et faire la recette client.'
  },
  {
    id: 'q-bonus-17',
    question: 'Qu\'est-ce que le monitoring ?',
    options: [
      'Un type d\'écran',
      'La surveillance continue d\'un système pour détecter les problèmes',
      'Un outil de design',
      'Une méthode de développement'
    ],
    correctAnswer: 1,
    explanation: 'Le monitoring est la surveillance en temps réel d\'un site ou application pour détecter rapidement les erreurs et problèmes de performance.'
  },
  {
    id: 'q-bonus-18',
    question: 'Quelle différence entre maintenance corrective et évolutive ?',
    options: [
      'Aucune différence',
      'Corrective = bugs, Évolutive = nouvelles fonctionnalités',
      'Corrective = ajout features, Évolutive = correction bugs',
      'Les deux sont identiques'
    ],
    correctAnswer: 1,
    explanation: 'La maintenance corrective corrige les bugs et dysfonctionnements. La maintenance évolutive ajoute ou modifie des fonctionnalités.'
  },
  {
    id: 'q-bonus-19',
    question: 'Qu\'est-ce qu\'un ticket dans un système de support ?',
    options: [
      'Un billet de cinéma',
      'Une demande ou un incident enregistré',
      'Un outil de paiement',
      'Un type de serveur'
    ],
    correctAnswer: 1,
    explanation: 'Un ticket est une demande d\'assistance ou un incident enregistré dans un système de support pour assurer un suivi.'
  },
  {
    id: 'q-bonus-20',
    question: 'Pourquoi réaliser un bilan de projet ?',
    options: [
      'C\'est une obligation légale',
      'Pour capitaliser sur l\'expérience et s\'améliorer',
      'Pour augmenter le budget',
      'Ce n\'est pas nécessaire'
    ],
    correctAnswer: 1,
    explanation: 'Le bilan permet de capitaliser sur les réussites et erreurs, d\'identifier les bonnes pratiques et de s\'améliorer pour les projets futurs.'
  },
  {
    id: 'q-bonus-21',
    question: 'Qu\'est-ce qu\'une redirection 301 ?',
    options: [
      'Une erreur serveur',
      'Une redirection permanente d\'une URL vers une autre',
      'Un type de paiement',
      'Un CMS'
    ],
    correctAnswer: 1,
    explanation: 'La redirection 301 est une redirection permanente qui indique aux moteurs de recherche qu\'une page a définitivement changé d\'adresse.'
  },
  {
    id: 'q-bonus-22',
    question: 'Quel est l\'objectif d\'un kickoff meeting ?',
    options: [
      'Fermer le projet',
      'Lancer officiellement le projet avec toutes les parties prenantes',
      'Tester le site',
      'Payer les factures'
    ],
    correctAnswer: 1,
    explanation: 'Le kickoff meeting est la réunion de lancement officiel qui rassemble toutes les parties prenantes pour démarrer le projet sur de bonnes bases.'
  },
  {
    id: 'q-bonus-23',
    question: 'Qu\'est-ce que TypeScript ?',
    options: [
      'Un traitement de texte',
      'JavaScript avec typage statique',
      'Un CMS',
      'Un hébergeur'
    ],
    correctAnswer: 1,
    explanation: 'TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique, rendant le code plus fiable et maintenable.'
  },
  {
    id: 'q-bonus-24',
    question: 'Quelle est la première phase d\'un projet web ?',
    options: [
      'Tests',
      'Lancement et cadrage',
      'Développement',
      'Maintenance'
    ],
    correctAnswer: 1,
    explanation: 'La phase de lancement et cadrage est la première étape où l\'on définit le cahier des charges, les objectifs et l\'équipe.'
  },
  {
    id: 'q-bonus-25',
    question: 'Combien de phases compte généralement un projet web complet ?',
    options: [
      '3 phases',
      '5 phases',
      '7 phases',
      '10 phases'
    ],
    correctAnswer: 2,
    explanation: 'Un projet web complet compte 7 phases : Lancement, Planification, Conception, Développement, Tests, Lancement prod, Suivi & Maintenance.'
  }
]


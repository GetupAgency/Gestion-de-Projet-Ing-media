import { QuizQuestion } from './modules'

// Questions bonus supplémentaires pour enrichir le quiz global
export const bonusQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-bonus-1',
    question: 'Quel est le rôle principal d\'un chef de projet ?',
    options: [
      'Tester le site avant chaque mise en production',
      'Designer les maquettes et la charte graphique',
      'Coordonner l’équipe et piloter le projet',
      'Coder l’application de bout en bout'
    ],
    correctAnswer: 2,
    explanation: 'Le chef de projet coordonne l\'équipe, gère le planning, le budget, les risques et fait l\'interface avec le client.',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'q-bonus-2',
    question: 'Qu\'est-ce que le HTTPS ?',
    options: [
      'Un framework de développement web sécurisé',
      'Un CMS orienté sécurité des données',
      'Un langage de programmation pour le chiffrement',
      'La version sécurisée du protocole HTTP'
    ],
    correctAnswer: 3,
    explanation: 'HTTPS est la version sécurisée de HTTP qui chiffre les échanges entre le navigateur et le serveur grâce au SSL/TLS.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-3',
    question: 'Qu\'est-ce qu\'un wireframe ?',
    options: [
      'Un schéma simplifié d’une page sans détails graphiques',
      'Un type de serveur dédié à l’hébergement des maquettes',
      'Un framework JavaScript pour le prototypage rapide',
      'Un câble de connexion entre le serveur et le réseau'
    ],
    correctAnswer: 0,
    explanation: 'Un wireframe est une maquette basse fidélité qui montre la structure et l\'organisation d\'une page sans les détails visuels.',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-bonus-4',
    question: 'Quel outil est principalement utilisé pour le versioning du code ?',
    options: [
      'Excel',
      'Word',
      'Git',
      'Photoshop'
    ],
    correctAnswer: 2,
    explanation: 'Git est le système de gestion de versions le plus utilisé pour le code source, permettant de suivre les modifications et collaborer.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-5',
    question: 'Qu\'est-ce que le SEO ?',
    options: [
      'Un CMS spécialisé dans les sites de contenu',
      'Un type de serveur optimisé pour la vitesse',
      'L’optimisation pour les moteurs de recherche',
      'Un langage de programmation pour les balises'
    ],
    correctAnswer: 2,
    explanation: 'Le SEO (Search Engine Optimization) regroupe les techniques pour améliorer le positionnement d\'un site dans les moteurs de recherche.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-bonus-6',
    question: 'Quel est le temps de chargement maximum recommandé pour une page web ?',
    options: [
      '30 secondes',
      '10 secondes',
      '3 secondes',
      '1 seconde'
    ],
    correctAnswer: 2,
    explanation: 'Un temps de chargement inférieur à 3 secondes est recommandé. Au-delà, le taux de rebond augmente significativement.',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-bonus-7',
    question: 'Qu\'est-ce que le responsive design ?',
    options: [
      'Un design avec animations au défilement',
      'Un design coloré qui attire l’attention',
      'Un design qui répond vite aux clics',
      'Un design adapté à toutes les tailles d’écran'
    ],
    correctAnswer: 3,
    explanation: 'Le responsive design permet à un site de s\'adapter automatiquement aux différentes tailles d\'écran (desktop, tablette, mobile).',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-bonus-8',
    question: 'Quelle méthodologie de gestion de projet est basée sur des cycles courts et itératifs ?',
    options: [
      'Aucune',
              'Waterfall (Cascade)',
      'Anarchie',
      'Agile'
    ],
    correctAnswer: 3,
    explanation: 'La méthodologie Agile est basée sur des cycles courts (sprints), l\'adaptation continue et la collaboration étroite avec le client.',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-bonus-9',
    question: 'Qu\'est-ce qu\'un backlog ?',
    options: [
      'Un bug enregistré mais pas encore corrigé',
      'Une liste priorisée de tâches à réaliser',
      'Un type de base de données non relationnelle',
      'Un outil de design collaboratif en ligne'
    ],
    correctAnswer: 1,
    explanation: 'Le backlog est la liste ordonnée par priorité de toutes les fonctionnalités, tâches et user stories à développer.',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-bonus-10',
    question: 'Qu\'est-ce que le RGPD ?',
    options: [
      'Un CMS français dédié aux sites publics',
      'Le règlement européen sur les données personnelles',
      'Un langage de programmation pour les formulaires',
      'Un outil de gestion de projet certifié par l’État'
    ],
    correctAnswer: 1,
    explanation: 'Le RGPD (Règlement Général sur la Protection des Données) est la loi européenne qui encadre la collecte et le traitement des données personnelles.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-bonus-11',
    question: 'Qu\'est-ce qu\'un MVP (Minimum Viable Product) ?',
    options: [
      'La version la plus complète possible du produit',
      'La version minimale viable pour tester le marché',
      'Un outil de développement de prototypes',
      'Un type de serveur de préproduction'
    ],
    correctAnswer: 1,
    explanation: 'Le MVP est la version minimale d\'un produit qui contient juste assez de fonctionnalités pour être utilisable et tester le marché.',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-bonus-12',
    question: 'Quel est l\'objectif d\'un Daily Standup en méthode Agile ?',
    options: [
      'Faire du sport ensemble pour souder l’équipe',
      'Synchroniser l’équipe chaque jour en 15 minutes',
      'Valider le budget de la journée avec le client',
      'Tester le produit livré la veille au soir'
    ],
    correctAnswer: 1,
    explanation: 'Le Daily Standup est une réunion quotidienne courte (15 min) où chacun partage ce qu\'il a fait, ce qu\'il va faire et ses blocages.',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-bonus-13',
    question: 'Qu\'est-ce qu\'un CDN ?',
    options: [
      'Un réseau de distribution de contenu',
      'Un CMS français pour les collectivités',
      'Un langage de programmation orienté contenu',
      'Un type de base de données distribuée'
    ],
    correctAnswer: 0,
    explanation: 'Un CDN est un réseau de serveurs répartis géographiquement qui distribue le contenu pour améliorer la vitesse de chargement partout dans le monde.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-14',
    question: 'Qu\'est-ce que le taux de rebond ?',
    options: [
      'Le pourcentage de visiteurs qui reviennent dans le mois',
      'La part des visiteurs partis après une seule page',
      'Le nombre de clics par visiteur sur une session',
      'La vitesse de chargement ressentie par les visiteurs'
    ],
    correctAnswer: 1,
    explanation: 'Le taux de rebond mesure le pourcentage de visiteurs qui quittent le site après avoir consulté une seule page sans interaction.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-bonus-15',
    question: 'Qu\'est-ce que Figma ?',
    options: [
      'Un CMS pour les sites de portfolio',
      'Un outil de conception d’interface et de prototypage',
      'Un langage de programmation pour les animations',
      'Un hébergeur web spécialisé dans les images'
    ],
    correctAnswer: 1,
    explanation: 'Figma est un outil collaboratif de design d\'interface (UI/UX) et de prototypage utilisé par les designers et développeurs.',
    difficulty: 'facile',
    category: 'design-ux'
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
    explanation: 'La phase de tests dure généralement 2 à 3 semaines pour tester fonctionnalités, performance, sécurité et faire la recette client.',
    difficulty: 'moyen',
    category: 'test-qualite'
  },
  {
    id: 'q-bonus-17',
    question: 'Qu\'est-ce que le monitoring ?',
    options: [
      'Un type d’écran pour les salles de contrôle',
      'La surveillance continue d’un système',
      'Un outil de design pour les tableaux de bord',
      'Une méthode de développement pilotée par les métriques'
    ],
    correctAnswer: 1,
    explanation: 'Le monitoring est la surveillance en temps réel d\'un site ou application pour détecter rapidement les erreurs et problèmes de performance.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-18',
    question: 'Quelle différence entre maintenance corrective et évolutive ?',
    options: [
      'Aucune différence, les deux termes sont interchangeables',
      'Corrective = bugs, Évolutive = nouvelles fonctionnalités',
      'Corrective = ajout de fonctionnalités, Évolutive = correction de bugs',
      'Les deux sont identiques mais facturées différemment'
    ],
    correctAnswer: 1,
    explanation: 'La maintenance corrective corrige les bugs et dysfonctionnements. La maintenance évolutive ajoute ou modifie des fonctionnalités.',
    difficulty: 'difficile',
    category: 'gestion-projet'
  },
  {
    id: 'q-bonus-19',
    question: 'Qu\'est-ce qu\'un ticket dans un système de support ?',
    options: [
      'Un billet de cinéma offert aux clients fidèles',
      'Une demande ou un incident enregistré',
      'Un outil de paiement pour les prestations',
      'Un type de serveur dédié au support'
    ],
    correctAnswer: 1,
    explanation: 'Un ticket est une demande d\'assistance ou un incident enregistré dans un système de support pour assurer un suivi.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-bonus-20',
    question: 'Pourquoi réaliser un bilan de projet ?',
    options: [
      'C’est une obligation légale pour toute agence',
      'Pour capitaliser sur l’expérience et s’améliorer',
      'Pour augmenter le budget du projet suivant',
      'Ce n’est pas nécessaire si le client est content'
    ],
    correctAnswer: 1,
    explanation: 'Le bilan permet de capitaliser sur les réussites et erreurs, d\'identifier les bonnes pratiques et de s\'améliorer pour les projets futurs.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-bonus-21',
    question: 'Qu\'est-ce qu\'une redirection 301 ?',
    options: [
      'Une erreur serveur temporaire sur une page',
      'Une redirection permanente d’une URL vers une autre',
      'Un type de paiement en trois fois sans frais',
      'Un CMS spécialisé dans la gestion des liens'
    ],
    correctAnswer: 1,
    explanation: 'La redirection 301 est une redirection permanente qui indique aux moteurs de recherche qu\'une page a définitivement changé d\'adresse.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-22',
    question: 'Quel est l\'objectif d\'un kickoff meeting ?',
    options: [
      'Fermer le projet et archiver les livrables',
      'Lancer officiellement le projet avec les parties prenantes',
      'Tester le site avec les premiers utilisateurs',
      'Payer les factures de la première phase'
    ],
    correctAnswer: 1,
    explanation: 'Le kickoff meeting est la réunion de lancement officiel qui rassemble toutes les parties prenantes pour démarrer le projet sur de bonnes bases.',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },
  {
    id: 'q-bonus-23',
    question: 'Qu\'est-ce que TypeScript ?',
    options: [
      'Un traitement de texte pour les développeurs',
      'JavaScript avec typage statique',
      'Un CMS écrit en JavaScript',
      'Un hébergeur spécialisé dans le JavaScript'
    ],
    correctAnswer: 1,
    explanation: 'TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique, rendant le code plus fiable et maintenable.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-bonus-24',
    question: 'Quelle est la première phase d\'un projet web ?',
    options: [
      'Tests et recette avec le client',
      'Lancement et cadrage',
      'Développement et intégration',
      'Maintenance et évolutions'
    ],
    correctAnswer: 1,
    explanation: 'La phase de lancement et cadrage est la première étape où l\'on définit le cahier des charges, les objectifs et l\'équipe.',
    difficulty: 'moyen',
    category: 'gestion-projet'
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
    explanation: 'Un projet web complet compte 7 phases : Lancement, Planification, Conception, Développement, Tests, Lancement prod, Suivi & Maintenance.',
    difficulty: 'difficile',
    category: 'gestion-projet'
  }
]


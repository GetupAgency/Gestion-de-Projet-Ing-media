import { QuizQuestion } from './modules'

// Questions générées à partir du lexique
export const lexiqueQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-lex-1',
    question: 'Qu\'est-ce qu\'un backlog ?',
    options: [
      'Un bug dans le code',
      'Une liste priorisée de toutes les fonctionnalités et tâches à réaliser',
      'Un type de réunion',
      'Un outil de design'
    ],
    correctAnswer: 1,
    explanation: 'Le backlog est la liste ordonnée de toutes les fonctionnalités, tâches et demandes à réaliser dans le projet.'
  },
  {
    id: 'q-lex-2',
    question: 'Que signifie "rétroplanning" ?',
    options: [
      'Un planning fait après le projet',
      'Un planning construit à partir de la date de fin en remontant vers aujourd\'hui',
      'Un planning détaillé',
      'Un planning en retard'
    ],
    correctAnswer: 1,
    explanation: 'Le rétroplanning se construit en partant de la date de fin souhaitée et en remontant dans le temps pour définir les étapes.'
  },
  {
    id: 'q-lex-3',
    question: 'Qu\'est-ce qu\'un compte rendu de réunion ?',
    options: [
      'Un rapport financier',
      'Un document qui résume les décisions, actions et points vus en réunion',
      'Un planning',
      'Un cahier des charges'
    ],
    correctAnswer: 1,
    explanation: 'Le compte rendu documente les décisions prises, les actions à mener et les points discutés lors d\'une réunion.'
  },
  {
    id: 'q-lex-4',
    question: 'Quelle est la différence entre front-office et back-office ?',
    options: [
      'Aucune différence',
      'Front-office = partie visible par les visiteurs, Back-office = interface d\'administration',
      'Front-office = backend, Back-office = frontend',
      'Les deux sont identiques'
    ],
    correctAnswer: 1,
    explanation: 'Le front-office est la partie visible par les utilisateurs/clients, le back-office est l\'interface d\'administration réservée aux gestionnaires.'
  },
  {
    id: 'q-lex-5',
    question: 'Qu\'est-ce qu\'un benchmark ?',
    options: [
      'Un type de banc',
      'Une analyse des solutions existantes pour s\'inspirer et se positionner',
      'Un bug',
      'Un serveur'
    ],
    correctAnswer: 1,
    explanation: 'Un benchmark est une analyse comparative des sites ou solutions existants pour s\'inspirer des bonnes pratiques et se positionner.'
  },
  {
    id: 'q-lex-6',
    question: 'Qu\'est-ce que le Kanban ?',
    options: [
      'Un CMS japonais',
      'Une méthode visuelle de gestion des tâches via des colonnes',
      'Un langage de programmation',
      'Un type de serveur'
    ],
    correctAnswer: 1,
    explanation: 'Le Kanban est une méthode de gestion visuelle avec des colonnes (à faire, en cours, fait) pour suivre l\'avancement des tâches.'
  },
  {
    id: 'q-lex-7',
    question: 'Qu\'est-ce qu\'une anomalie dans un projet ?',
    options: [
      'Un employé difficile',
      'Un écart entre le comportement attendu et le comportement réel',
      'Une réunion',
      'Un document'
    ],
    correctAnswer: 1,
    explanation: 'Une anomalie est un écart constaté entre ce qui était attendu (selon le CDC) et le comportement réel du système.'
  },
  {
    id: 'q-lex-8',
    question: 'Que signifie "déploiement" ?',
    options: [
      'Replier le code',
      'Mettre en ligne une nouvelle version de l\'application',
      'Supprimer l\'application',
      'Tester l\'application'
    ],
    correctAnswer: 1,
    explanation: 'Le déploiement est l\'action de mettre en ligne une nouvelle version de l\'application sur le serveur de production.'
  },
  {
    id: 'q-lex-9',
    question: 'Qu\'est-ce qu\'un plugin ?',
    options: [
      'Un câble de connexion',
      'Une extension qui ajoute des fonctionnalités à un CMS',
      'Un langage de programmation',
      'Un type de serveur'
    ],
    correctAnswer: 1,
    explanation: 'Un plugin est une extension logicielle qui ajoute des fonctionnalités supplémentaires à un CMS comme WordPress.'
  },
  {
    id: 'q-lex-10',
    question: 'Qu\'est-ce que le monitoring ?',
    options: [
      'Acheter des écrans',
      'La surveillance en temps réel d\'un système pour détecter les problèmes',
      'Un type de test',
      'Une réunion'
    ],
    correctAnswer: 1,
    explanation: 'Le monitoring est la surveillance continue d\'un système pour détecter rapidement les erreurs, problèmes de performance ou incidents.'
  },
  {
    id: 'q-lex-11',
    question: 'Qu\'est-ce qu\'un merge dans Git ?',
    options: [
      'Supprimer du code',
      'Fusionner des modifications de code issues de branches différentes',
      'Créer un nouveau projet',
      'Déployer en production'
    ],
    correctAnswer: 1,
    explanation: 'Un merge (fusion) dans Git consiste à combiner les modifications de code provenant de différentes branches.'
  },
  {
    id: 'q-lex-12',
    question: 'Qu\'est-ce qu\'un sitemap.xml ?',
    options: [
      'Une carte géographique',
      'Un fichier qui liste les pages d\'un site pour faciliter leur indexation',
      'Un plan d\'architecture',
      'Un outil de design'
    ],
    correctAnswer: 1,
    explanation: 'Le sitemap.xml liste toutes les pages importantes d\'un site pour aider les moteurs de recherche à les indexer correctement.'
  },
  {
    id: 'q-lex-13',
    question: 'Qu\'est-ce qu\'un KPI ?',
    options: [
      'Un serveur coréen',
      'Un indicateur chiffré de performance',
      'Un CMS',
      'Un langage de programmation'
    ],
    correctAnswer: 1,
    explanation: 'KPI (Key Performance Indicator) est un indicateur clé de performance qui permet de mesurer l\'atteinte des objectifs.'
  },
  {
    id: 'q-lex-14',
    question: 'Quelle est la différence entre maintenance corrective et évolutive ?',
    options: [
      'Pas de différence',
      'Corrective = corriger des bugs, Évolutive = ajouter des fonctionnalités',
      'Corrective = ajouter, Évolutive = supprimer',
      'Les deux sont identiques'
    ],
    correctAnswer: 1,
    explanation: 'La maintenance corrective corrige les dysfonctionnements, la maintenance évolutive fait évoluer le produit avec de nouvelles fonctionnalités.'
  },
  {
    id: 'q-lex-15',
    question: 'Qu\'est-ce que le RGPD ?',
    options: [
      'Un CMS',
      'Règlement Général sur la Protection des Données',
      'Un framework JavaScript',
      'Un outil de gestion'
    ],
    correctAnswer: 1,
    explanation: 'Le RGPD est le règlement européen qui encadre la collecte et le traitement des données personnelles.'
  },
  {
    id: 'q-lex-16',
    question: 'Qu\'est-ce qu\'une injection SQL ?',
    options: [
      'Un vaccin pour base de données',
      'Une attaque qui consiste à insérer du code SQL malveillant',
      'Un outil de backup',
      'Une méthode de développement'
    ],
    correctAnswer: 1,
    explanation: 'L\'injection SQL est une attaque où du code SQL malveillant est inséré dans une requête pour accéder ou modifier illégalement la base de données.'
  },
  {
    id: 'q-lex-17',
    question: 'Qu\'est-ce qu\'un environnement de recette ?',
    options: [
      'Une cuisine pour développeurs',
      'Un environnement dédié aux tests et à la validation avant la production',
      'Un type de serveur',
      'Un CMS'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de recette est un espace technique dédié où le client peut tester l\'application avant la mise en production.'
  },
  {
    id: 'q-lex-18',
    question: 'Qu\'est-ce qu\'un Call To Action (CTA) ?',
    options: [
      'Un appel téléphonique',
      'Un élément qui incite l\'utilisateur à effectuer une action',
      'Un type de réunion',
      'Un bug'
    ],
    correctAnswer: 1,
    explanation: 'Un CTA (Call To Action) est un élément (bouton, lien) qui incite l\'utilisateur à effectuer une action précise (acheter, s\'inscrire, télécharger...).'
  },
  {
    id: 'q-lex-19',
    question: 'Qu\'est-ce qu\'une Pull Request ?',
    options: [
      'Une demande de budget',
      'Une demande de fusion de code accompagnée d\'une revue',
      'Un type de bug',
      'Un serveur'
    ],
    correctAnswer: 1,
    explanation: 'Une Pull Request est une demande pour fusionner des modifications de code, généralement accompagnée d\'une revue par l\'équipe.'
  },
  {
    id: 'q-lex-20',
    question: 'Qu\'est-ce qu\'un comité de pilotage ?',
    options: [
      'Une formation de pilotes',
      'Un groupe de décision qui suit l\'avancement du projet',
      'Un outil de gestion',
      'Un type de réunion technique'
    ],
    correctAnswer: 1,
    explanation: 'Le comité de pilotage (COPIL) est une instance de décision qui réunit les parties prenantes pour suivre l\'avancement et valider les orientations.'
  }
]


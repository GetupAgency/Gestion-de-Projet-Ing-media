import { QuizQuestion } from './modules'

// Questions générées à partir du lexique
export const lexiqueQuizQuestions: QuizQuestion[] = [
  {
    id: 'q-lex-1',
    question: 'Qu\'est-ce qu\'un backlog ?',
    options: [
      'Un bug dans le code signalé mais pas corrigé',
      'Une liste priorisée des tâches à réaliser',
      'Un type de réunion en fin de sprint',
      'Un outil de design pour les wireframes'
    ],
    correctAnswer: 1,
    explanation: 'Le backlog est la liste ordonnée de toutes les fonctionnalités, tâches et demandes à réaliser dans le projet.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-2',
    question: 'Que signifie "rétroplanning" ?',
    options: [
      'Un planning fait après le projet pour le bilan',
      'Un planning construit à rebours depuis la fin',
      'Un planning détaillé jour par jour',
      'Un planning en retard qu’il faut recaler'
    ],
    correctAnswer: 1,
    explanation: 'Le rétroplanning se construit en partant de la date de fin souhaitée et en remontant dans le temps pour définir les étapes.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-3',
    question: 'Qu\'est-ce qu\'un compte rendu de réunion ?',
    options: [
      'Un rapport financier remis en fin de mois',
      'Le document qui résume décisions et actions',
      'Un planning mis à jour après la réunion',
      'Un cahier des charges validé en séance'
    ],
    correctAnswer: 1,
    explanation: 'Le compte rendu documente les décisions prises, les actions à mener et les points discutés lors d\'une réunion.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-4',
    question: 'Quelle est la différence entre front-office et back-office ?',
    options: [
      'Aucune différence, ce sont deux synonymes',
      'Front = partie visible, Back = administration',
      'Front-office = backend, Back-office = frontend',
      'Les deux désignent l’interface d’administration'
    ],
    correctAnswer: 1,
    explanation: 'Le front-office est la partie visible par les utilisateurs/clients, le back-office est l\'interface d\'administration réservée aux gestionnaires.',
    difficulty: 'moyen',
    category: 'lexique'
  },
  {
    id: 'q-lex-5',
    question: 'Qu\'est-ce qu\'un benchmark ?',
    options: [
      'Un banc de test pour mesurer les performances du matériel',
      'Une analyse des solutions existantes pour se positionner',
      'Un bug reproduit sur plusieurs navigateurs',
      'Un serveur de test partagé entre projets'
    ],
    correctAnswer: 1,
    explanation: 'Un benchmark est une analyse comparative des sites ou solutions existants pour s\'inspirer des bonnes pratiques et se positionner.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-6',
    question: 'Qu\'est-ce que le Kanban ?',
    options: [
      'Un CMS japonais pour les sites e-commerce',
      'Une méthode visuelle de gestion des tâches',
      'Un langage de programmation orienté flux',
      'Un type de serveur pour les files d’attente'
    ],
    correctAnswer: 1,
    explanation: 'Le Kanban est une méthode de gestion visuelle avec des colonnes (à faire, en cours, fait) pour suivre l\'avancement des tâches.',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-lex-7',
    question: 'Qu\'est-ce qu\'une anomalie dans un projet ?',
    options: [
      'Un employé difficile à gérer dans l’équipe',
      'Un écart entre le comportement attendu et le réel',
      'Une réunion non prévue au planning',
      'Un document manquant dans le dossier projet'
    ],
    correctAnswer: 1,
    explanation: 'Une anomalie est un écart constaté entre ce qui était attendu (selon le CDC) et le comportement réel du système.',
    difficulty: 'moyen',
    category: 'lexique'
  },
  {
    id: 'q-lex-8',
    question: 'Que signifie "déploiement" ?',
    options: [
      'Replier le code dans une archive',
      'Mettre en ligne une nouvelle version',
      'Supprimer l’application des serveurs',
      'Tester l’application en conditions réelles'
    ],
    correctAnswer: 1,
    explanation: 'Le déploiement est l\'action de mettre en ligne une nouvelle version de l\'application sur le serveur de production.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-9',
    question: 'Qu\'est-ce qu\'un plugin ?',
    options: [
      'Un câble de connexion entre deux serveurs',
      'Une extension qui ajoute des fonctions à un CMS',
      'Un langage de programmation pour les extensions',
      'Un type de serveur pour les modules'
    ],
    correctAnswer: 1,
    explanation: 'Un plugin est une extension logicielle qui ajoute des fonctionnalités supplémentaires à un CMS comme WordPress.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-10',
    question: 'Qu\'est-ce que le monitoring ?',
    options: [
      'Acheter des écrans pour la salle de contrôle',
      'La surveillance en temps réel d’un système',
      'Un type de test rejoué chaque nuit',
      'Une réunion de suivi hebdomadaire'
    ],
    correctAnswer: 1,
    explanation: 'Le monitoring est la surveillance continue d\'un système pour détecter rapidement les erreurs, problèmes de performance ou incidents.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-11',
    question: 'Qu\'est-ce qu\'un merge dans Git ?',
    options: [
      'Supprimer du code devenu inutile',
      'Fusionner les modifications de deux branches',
      'Créer un nouveau projet à partir d’un existant',
      'Déployer en production depuis la branche principale'
    ],
    correctAnswer: 1,
    explanation: 'Un merge (fusion) dans Git consiste à combiner les modifications de code provenant de différentes branches.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-12',
    question: 'Qu\'est-ce qu\'un sitemap.xml ?',
    options: [
      'Une carte géographique des visiteurs du site',
      'Un fichier listant les pages pour l’indexation',
      'Un plan d’architecture des serveurs',
      'Un outil de design pour l’arborescence'
    ],
    correctAnswer: 1,
    explanation: 'Le sitemap.xml liste toutes les pages importantes d\'un site pour aider les moteurs de recherche à les indexer correctement.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-13',
    question: 'Qu\'est-ce qu\'un KPI ?',
    options: [
      'Un serveur coréen pour les jeux en ligne',
      'Un indicateur chiffré de performance',
      'Un CMS pour les tableaux de bord',
      'Un langage de programmation statistique'
    ],
    correctAnswer: 1,
    explanation: 'KPI (Key Performance Indicator) est un indicateur clé de performance qui permet de mesurer l\'atteinte des objectifs.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-14',
    question: 'Quelle est la différence entre maintenance corrective et évolutive ?',
    options: [
      'Pas de différence, seule la facturation change',
      'Corrective = corriger, Évolutive = ajouter',
      'Corrective = ajouter, Évolutive = supprimer des fonctionnalités',
      'Les deux sont identiques et couvertes par la garantie'
    ],
    correctAnswer: 1,
    explanation: 'La maintenance corrective corrige les dysfonctionnements, la maintenance évolutive fait évoluer le produit avec de nouvelles fonctionnalités.',
    difficulty: 'moyen',
    category: 'lexique'
  },
  {
    id: 'q-lex-15',
    question: 'Qu\'est-ce que le RGPD ?',
    options: [
      'Un CMS conforme aux exigences de l’État',
      'Règlement Général sur la Protection des Données',
      'Un framework JavaScript pour les formulaires',
      'Un outil de gestion des consentements'
    ],
    correctAnswer: 1,
    explanation: 'Le RGPD est le règlement européen qui encadre la collecte et le traitement des données personnelles.',
    difficulty: 'facile',
    category: 'lexique'
  },
  {
    id: 'q-lex-16',
    question: 'Qu\'est-ce qu\'une injection SQL ?',
    options: [
      'Un vaccin pour base de données contre les virus',
      'Une attaque qui insère du code SQL malveillant',
      'Un outil de backup automatique des tables',
      'Une méthode de développement orientée données'
    ],
    correctAnswer: 1,
    explanation: 'L\'injection SQL est une attaque où du code SQL malveillant est inséré dans une requête pour accéder ou modifier illégalement la base de données.',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-lex-17',
    question: 'Qu\'est-ce qu\'un environnement de recette ?',
    options: [
      'Une cuisine partagée réservée aux développeurs de l’agence',
      'L’environnement de validation avant la production',
      'Un type de serveur pour la sauvegarde',
      'Un CMS dédié aux contenus de test'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de recette est un espace technique dédié où le client peut tester l\'application avant la mise en production.',
    difficulty: 'moyen',
    category: 'test-qualite'
  },
  {
    id: 'q-lex-18',
    question: 'Qu\'est-ce qu\'un Call To Action (CTA) ?',
    options: [
      'Un appel téléphonique du service client',
      'Un élément qui incite l’utilisateur à agir',
      'Un type de réunion pour décider vite',
      'Un bug qui bloque l’action de l’utilisateur'
    ],
    correctAnswer: 1,
    explanation: 'Un CTA (Call To Action) est un élément (bouton, lien) qui incite l\'utilisateur à effectuer une action précise (acheter, s\'inscrire, télécharger...).',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-lex-19',
    question: 'Qu\'est-ce qu\'une Pull Request ?',
    options: [
      'Une demande de budget adressée au client',
      'Une demande de fusion de code avec revue',
      'Un type de bug remonté par les utilisateurs',
      'Un serveur qui tire les mises à jour'
    ],
    correctAnswer: 1,
    explanation: 'Une Pull Request est une demande pour fusionner des modifications de code, généralement accompagnée d\'une revue par l\'équipe.',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-lex-20',
    question: 'Qu\'est-ce qu\'un comité de pilotage ?',
    options: [
      'Une formation de pilotes pour les chefs de projet',
      'Le groupe de décision qui suit le projet',
      'Un outil de gestion des jalons et des risques',
      'Un type de réunion technique entre développeurs'
    ],
    correctAnswer: 1,
    explanation: 'Le comité de pilotage (COPIL) est une instance de décision qui réunit les parties prenantes pour suivre l\'avancement et valider les orientations.',
    difficulty: 'facile',
    category: 'gestion-projet'
  }
]


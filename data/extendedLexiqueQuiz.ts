import { QuizQuestion } from './modules'

// Questions étendues générées à partir du lexique complet
// Plus de 100 nouvelles questions pour éviter la répétition
export const extendedLexiqueQuizQuestions: QuizQuestion[] = [
  // Section Gestion de projet
  {
    id: 'q-lex-ext-1',
    question: 'Qu\'est-ce qu\'un cahier des charges ?',
    options: [
      'Document décrivant les besoins, objectifs et contraintes d\'un projet',
      'Document financier récapitulant les coûts du projet',
      'Planning détaillé des ressources humaines allouées',
      'Compte-rendu de réunion validé par toutes les parties prenantes'
    ],
    correctAnswer: 0,
    explanation: 'Le cahier des charges décrit précisément les besoins, objectifs, périmètre et contraintes d\'un projet.'
  },
  {
    id: 'q-lex-ext-2',
    question: 'Que signifie "cadrage" dans un projet ?',
    options: [
      'Répartition des responsabilités entre les membres de l\'équipe',
      'Phase où l\'on clarifie le pourquoi, le quoi et le comment du projet',
      'Validation finale du budget par le comité de direction',
      'Processus de sélection des outils et technologies du projet'
    ],
    correctAnswer: 1,
    explanation: 'Le cadrage est la phase initiale où l\'on clarifie les objectifs, le périmètre et la méthodologie avant de démarrer.'
  },
  {
    id: 'q-lex-ext-3',
    question: 'Qu\'est-ce qu\'un kickoff ?',
    options: [
      'Phase de clôture d\'un projet avec bilan des résultats',
      'Réunion de lancement officielle avec toutes les parties prenantes',
      'Document de synthèse présentant les risques identifiés',
      'Processus d\'évaluation des performances de l\'équipe'
    ],
    correctAnswer: 1,
    explanation: 'Le kickoff est la réunion de lancement officielle qui rassemble toutes les parties prenantes pour démarrer le projet.'
  },
  {
    id: 'q-lex-ext-4',
    question: 'Qu\'est-ce qu\'une user story ?',
    options: [
      'Documentation technique détaillant l\'architecture du système',
      'Formulation d\'un besoin utilisateur sous forme simple et actionnable',
      'Rapport d\'analyse des comportements utilisateurs sur le site',
      'Scénario de test validant le bon fonctionnement d\'une feature'
    ],
    correctAnswer: 1,
    explanation: 'Une user story décrit un besoin utilisateur de manière simple, généralement sous la forme "En tant que... je veux... afin de...".'
  },
  {
    id: 'q-lex-ext-5',
    question: 'Qu\'est-ce qu\'un sprint en Agile ?',
    options: [
      'Réunion quotidienne de synchronisation de l\'équipe',
      'Période de travail courte et fixe pour réaliser des tâches',
      'Phase de tests intensifs avant la mise en production',
      'Méthodologie de priorisation des fonctionnalités'
    ],
    correctAnswer: 1,
    explanation: 'Un sprint est une période de travail courte (généralement 2 à 4 semaines) durant laquelle l\'équipe réalise un ensemble de tâches.'
  },
  {
    id: 'q-lex-ext-6',
    question: 'Qu\'est-ce qu\'un jalon dans un projet ?',
    options: [
      'Indicateur de performance mesurant l\'avancement',
      'Point clé marquant une étape importante ou une décision',
      'Ressource humaine critique pour la réussite du projet',
      'Document contractuel définissant les responsabilités'
    ],
    correctAnswer: 1,
    explanation: 'Un jalon est un point de repère important dans le projet qui marque l\'achèvement d\'une phase ou une décision clé.'
  },
  {
    id: 'q-lex-ext-7',
    question: 'Qu\'est-ce qu\'un diagramme de Gantt ?',
    options: [
      'Graphique circulaire représentant la répartition des ressources',
      'Diagramme représentant le planning des tâches dans le temps',
      'Schéma organisationnel montrant la hiérarchie de l\'équipe',
      'Visualisation des flux de données entre les systèmes'
    ],
    correctAnswer: 1,
    explanation: 'Le diagramme de Gantt est une représentation visuelle du planning qui montre les tâches, leur durée et leurs dépendances.'
  },
  {
    id: 'q-lex-ext-8',
    question: 'Que sont les dépendances entre tâches ?',
    options: [
      'Ressources partagées nécessaires à plusieurs tâches',
      'Liens où une tâche ne peut commencer ou finir sans l\'autre',
      'Contraintes budgétaires limitant l\'exécution des tâches',
      'Compétences requises pour réaliser plusieurs tâches'
    ],
    correctAnswer: 1,
    explanation: 'Les dépendances sont des liens logiques entre tâches : certaines tâches doivent être terminées avant que d\'autres puissent commencer.'
  },
  {
    id: 'q-lex-ext-9',
    question: 'Qu\'est-ce qu\'un livrable ?',
    options: [
      'Service de transport logistique pour le matériel du projet',
      'Élément concret produit dans le cadre du projet',
      'Budget alloué à une phase spécifique du projet',
      'Délai contractuel pour la finalisation d\'une étape'
    ],
    correctAnswer: 1,
    explanation: 'Un livrable est un élément tangible produit par le projet : document, maquette, site en ligne, application, etc.'
  },
  {
    id: 'q-lex-ext-10',
    question: 'Qu\'est-ce qu\'un arbitrage en gestion de projet ?',
    options: [
      'Processus de médiation entre parties prenantes en désaccord',
      'Décision pour trancher entre plusieurs options',
      'Audit indépendant vérifiant la conformité du projet',
      'Validation juridique des contrats et engagements'
    ],
    correctAnswer: 1,
    explanation: 'L\'arbitrage est la prise de décision pour trancher entre plusieurs options, souvent concernant le triangle budget/délai/périmètre.'
  },
  {
    id: 'q-lex-ext-11',
    question: 'Qu\'est-ce qu\'un plan de charge ?',
    options: [
      'Planning prévisionnel des coûts par phase du projet',
      'Répartition du travail entre les membres de l\'équipe',
      'Document listant les équipements nécessaires au projet',
      'Calendrier des formations requises pour l\'équipe'
    ],
    correctAnswer: 1,
    explanation: 'Le plan de charge répartit le travail à effectuer entre les membres de l\'équipe sur une période donnée.'
  },
  {
    id: 'q-lex-ext-12',
    question: 'Qu\'est-ce que la charge prévisionnelle ?',
    options: [
      'Budget total alloué aux ressources humaines du projet',
      'Temps estimé nécessaire pour réaliser une tâche',
      'Liste des compétences requises pour le projet',
      'Coût prévisionnel des licences et outils logiciels'
    ],
    correctAnswer: 1,
    explanation: 'La charge prévisionnelle est l\'estimation du temps de travail nécessaire pour réaliser une tâche ou un ensemble de tâches.'
  },
  {
    id: 'q-lex-ext-13',
    question: 'Qu\'est-ce que le "reste à faire" ?',
    options: [
      'Liste des fonctionnalités non prioritaires reportées',
      'Temps ou travail restant pour terminer une tâche',
      'Budget non encore dépensé du projet',
      'Tâches en attente de validation client'
    ],
    correctAnswer: 1,
    explanation: 'Le reste à faire (RAF) est l\'estimation du travail restant pour terminer une tâche ou le projet entier.'
  },
  {
    id: 'q-lex-ext-14',
    question: 'Qu\'est-ce qu\'une roadmap ?',
    options: [
      'Diagramme de Gantt détaillant toutes les micro-tâches',
      'Vision globale de l\'évolution du produit dans le temps',
      'Plan d\'action opérationnel pour le sprint en cours',
      'Documentation technique sur l\'architecture du système'
    ],
    correctAnswer: 1,
    explanation: 'La roadmap est une vision stratégique et planifiée de l\'évolution du produit ou du projet à moyen et long terme.'
  },
  {
    id: 'q-lex-ext-15',
    question: 'Qu\'est-ce que la conduite du changement ?',
    options: [
      'Processus de migration technique vers de nouveaux serveurs',
      'Actions pour aider les utilisateurs à adopter une solution',
      'Modification de la méthodologie de gestion de projet',
      'Réorganisation de la structure hiérarchique de l\'équipe'
    ],
    correctAnswer: 1,
    explanation: 'La conduite du changement accompagne les utilisateurs dans l\'adoption d\'une nouvelle solution : formation, communication, support.'
  },
  {
    id: 'q-lex-ext-16',
    question: 'Qu\'est-ce qu\'une matrice de risques ?',
    options: [
      'Document contractuel définissant les responsabilités',
      'Tableau classant les risques selon probabilité et impact',
      'Grille d\'évaluation des compétences de l\'équipe',
      'Liste chronologique des incidents survenus'
    ],
    correctAnswer: 1,
    explanation: 'La matrice de risques classe les risques identifiés selon deux axes : leur probabilité d\'occurrence et leur impact sur le projet.'
  },
  {
    id: 'q-lex-ext-17',
    question: 'Qu\'est-ce que la recette dans un projet ?',
    options: [
      'Document financier détaillant les revenus générés',
      'Phase où l\'on vérifie que la solution respecte le cahier des charges',
      'Procédure d\'acceptation du devis par le client',
      'Compilation des retours utilisateurs après la mise en ligne'
    ],
    correctAnswer: 1,
    explanation: 'La recette est la phase de validation où le client vérifie que la solution livrée correspond bien à ses attentes et au cahier des charges.'
  },
  {
    id: 'q-lex-ext-18',
    question: 'Qu\'est-ce qu\'un protocole de recette ?',
    options: [
      'Méthodologie de communication entre équipes techniques',
      'Document décrivant les tests et critères de validation',
      'Contrat définissant les modalités de paiement',
      'Guide d\'utilisation destiné aux utilisateurs finaux'
    ],
    correctAnswer: 1,
    explanation: 'Le protocole de recette liste tous les tests à effectuer et les critères pour valider ou refuser la solution.'
  },
  {
    id: 'q-lex-ext-19',
    question: 'Que sont les critères d\'acceptation ?',
    options: [
      'Normes de qualité imposées par les réglementations',
      'Conditions pour considérer une fonctionnalité validée',
      'Standards de codage définis par l\'équipe technique',
      'Métriques de performance à atteindre en production'
    ],
    correctAnswer: 1,
    explanation: 'Les critères d\'acceptation définissent précisément les conditions qu\'une fonctionnalité doit remplir pour être considérée comme terminée.'
  },
  {
    id: 'q-lex-ext-20',
    question: 'Que signifie "mise en production" ?',
    options: [
      'Début de la phase de développement du produit',
      'Mettre le site en ligne pour les vrais utilisateurs',
      'Validation du cahier des charges par le client',
      'Lancement de la phase de tests avec utilisateurs pilotes'
    ],
    correctAnswer: 1,
    explanation: 'La mise en production est l\'action de déployer l\'application sur le serveur de production pour la rendre accessible aux utilisateurs finaux.'
  },
  {
    id: 'q-lex-ext-21',
    question: 'Qu\'est-ce que le versionning ?',
    options: [
      'Traduction du contenu en plusieurs langues',
      'Gestion des différentes versions d\'un code dans le temps',
      'Vérification de la conformité du code aux standards',
      'Processus de validation des modifications par les pairs'
    ],
    correctAnswer: 1,
    explanation: 'Le versionning (ou gestion de versions) permet de suivre et gérer les différentes versions d\'un code ou document au fil du temps.'
  },
  {
    id: 'q-lex-ext-22',
    question: 'Qu\'est-ce qu\'un rollback ?',
    options: [
      'Sauvegarde automatique programmée des données',
      'Retour à une version précédente en cas de problème',
      'Processus de montée de version vers une nouvelle release',
      'Synchronisation des données entre environnements'
    ],
    correctAnswer: 1,
    explanation: 'Le rollback permet de revenir à une version précédente stable de l\'application si un déploiement pose problème.'
  },
  {
    id: 'q-lex-ext-23',
    question: 'Qu\'est-ce qu\'une spec fonctionnelle ?',
    options: [
      'Guide d\'utilisation destiné aux utilisateurs finaux',
      'Document décrivant ce que le système doit faire',
      'Scénarios de tests automatisés pour valider les features',
      'Liste des compétences requises pour l\'équipe projet'
    ],
    correctAnswer: 1,
    explanation: 'La spécification fonctionnelle décrit ce que le système doit faire du point de vue utilisateur et métier, sans entrer dans les détails techniques.'
  },
  {
    id: 'q-lex-ext-24',
    question: 'Qu\'est-ce qu\'une spec technique ?',
    options: [
      'Liste des compétences techniques de l\'équipe',
      'Document décrivant comment la solution sera réalisée',
      'Catalogue des outils et logiciels utilisés',
      'Référentiel des normes de codage à respecter'
    ],
    correctAnswer: 1,
    explanation: 'La spécification technique décrit comment la solution sera réalisée : architecture, technologies, structure de données, etc.'
  },
  {
    id: 'q-lex-ext-25',
    question: 'Qu\'est-ce qu\'un workflow ?',
    options: [
      'Outil de gestion de projet collaboratif en ligne',
      'Enchaînement des étapes d\'une tâche ou information',
      'Méthodologie agile pour organiser les sprints',
      'Système de notifications automatiques dans un projet'
    ],
    correctAnswer: 1,
    explanation: 'Le workflow définit l\'enchaînement logique des étapes par lesquelles passe une tâche, une information ou un processus.'
  },
  {
    id: 'q-lex-ext-26',
    question: 'Qu\'est-ce qu\'un environnement de développement ?',
    options: [
      'Espace de travail physique aménagé pour les développeurs',
      'Cadre technique où les développeurs travaillent et testent',
      'Méthodologie favorisant l\'innovation et la créativité',
      'Plateforme de formation continue pour l\'équipe technique'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de développement est l\'espace technique où les développeurs codent et testent en local, isolé de la production.'
  },
  {
    id: 'q-lex-ext-27',
    question: 'Pourquoi a-t-on un environnement de production séparé ?',
    options: [
      'Pour optimiser les coûts d\'infrastructure serveur',
      'Car c\'est là que l\'application est utilisée par les vrais utilisateurs',
      'Pour faciliter la collaboration entre développeurs',
      'Pour respecter les normes de sécurité informatique'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de production héberge l\'application utilisée par les vrais utilisateurs. Il doit être stable et sécurisé.'
  },

  // Section Communication et organisation
  {
    id: 'q-lex-ext-28',
    question: 'Qu\'est-ce qu\'un plan d\'action ?',
    options: [
      'Stratégie marketing définissant les campagnes à mener',
      'Liste structurée de tâches avec responsables et échéances',
      'Planning global du projet avec toutes les phases',
      'Document de cadrage validé par le comité de pilotage'
    ],
    correctAnswer: 1,
    explanation: 'Le plan d\'action liste les tâches à réaliser avec pour chacune un responsable, une échéance et éventuellement des ressources.'
  },
  {
    id: 'q-lex-ext-29',
    question: 'Qu\'est-ce que le reporting ?',
    options: [
      'Documentation technique destinée aux développeurs',
      'Communication régulière sur l\'avancement du projet',
      'Archivage des documents liés au projet',
      'Synthèse financière des dépenses engagées'
    ],
    correctAnswer: 1,
    explanation: 'Le reporting est la communication régulière (souvent hebdomadaire) sur l\'avancement, les risques et les résultats du projet.'
  },
  {
    id: 'q-lex-ext-30',
    question: 'Qu\'est-ce que la communication asynchrone ?',
    options: [
      'Communication multilingue traduite en temps réel',
      'Échanges ne nécessitant pas la présence simultanée de tous',
      'Système de notifications push automatiques',
      'Visioconférence avec plusieurs fuseaux horaires'
    ],
    correctAnswer: 1,
    explanation: 'La communication asynchrone (emails, messages, documents) ne nécessite pas que tout le monde soit présent en même temps.'
  },
  {
    id: 'q-lex-ext-31',
    question: 'Qu\'est-ce qu\'une réunion de suivi ?',
    options: [
      'Audit de conformité réalisé par un organisme externe',
      'Réunion régulière pour faire le point sur l\'avancement',
      'Session de formation continue pour l\'équipe',
      'Débriefing organisé à la fin d\'un projet'
    ],
    correctAnswer: 1,
    explanation: 'La réunion de suivi (ou comité de suivi) permet de faire régulièrement le point sur l\'avancement et les problèmes rencontrés.'
  },
  {
    id: 'q-lex-ext-32',
    question: 'Qu\'est-ce qu\'un atelier dans un projet ?',
    options: [
      'Espace de coworking réservé pour l\'équipe projet',
      'Session de travail collaboratif pour produire un livrable',
      'Formation pratique sur les outils du projet',
      'Réunion de brainstorming pour générer des idées'
    ],
    correctAnswer: 1,
    explanation: 'Un atelier est une session de travail collaborative où l\'équipe et/ou le client produisent ensemble un livrable (maquettes, user stories, etc.).'
  },
  {
    id: 'q-lex-ext-33',
    question: 'Qu\'est-ce que la validation client ?',
    options: [
      'Vérification de la solvabilité du client avant signature',
      'Accord formel du client sur un livrable ou une étape',
      'Évaluation de la satisfaction client après livraison',
      'Processus de qualification d\'un prospect commercial'
    ],
    correctAnswer: 1,
    explanation: 'La validation client est l\'accord formel (souvent par écrit) du client sur un livrable ou l\'achèvement d\'une étape.'
  },
  {
    id: 'q-lex-ext-34',
    question: 'Qu\'est-ce qu\'une expression de besoin ?',
    options: [
      'Analyse des besoins utilisateurs basée sur des données',
      'Formulation claire de ce que le client veut obtenir',
      'Document listant les fonctionnalités prioritaires',
      'Rapport d\'audit identifiant les manques actuels'
    ],
    correctAnswer: 1,
    explanation: 'L\'expression de besoin décrit clairement ce que le client souhaite obtenir grâce au projet, sans entrer dans la solution technique.'
  },
  {
    id: 'q-lex-ext-35',
    question: 'Qu\'est-ce qu\'un brief ?',
    options: [
      'Synthèse exécutive destinée à la direction générale',
      'Document initial présentant le contexte et les attentes',
      'Compte-rendu détaillé d\'une réunion importante',
      'Rapport final de clôture de projet'
    ],
    correctAnswer: 1,
    explanation: 'Le brief est un document ou échange initial qui présente le contexte, les objectifs et les attentes du projet de manière concise.'
  },
  {
    id: 'q-lex-ext-36',
    question: 'Qu\'est-ce que le cycle en V ?',
    options: [
      'Processus itératif permettant des retours fréquents',
      'Méthode de projet avec phases successives structurées',
      'Diagramme visualisant les dépendances entre tâches',
      'Framework agile basé sur des cycles courts'
    ],
    correctAnswer: 1,
    explanation: 'Le cycle en V est une méthode de gestion de projet séquentielle avec des phases bien définies et peu de retours en arrière.'
  },

  // Section UX/UI
  {
    id: 'q-lex-ext-37',
    question: 'Qu\'est-ce qu\'un persona ?',
    options: [
      'Profil psychologique établi par un consultant RH',
      'Profil utilisateur fictif représentant une cible',
      'Identité visuelle développée pour une marque',
      'Template de page destiné à un type d\'utilisateur'
    ],
    correctAnswer: 1,
    explanation: 'Un persona est un profil utilisateur fictif mais réaliste qui représente un segment d\'utilisateurs cibles avec leurs besoins et comportements.'
  },
  {
    id: 'q-lex-ext-38',
    question: 'Qu\'est-ce qu\'un user flow ?',
    options: [
      'Nombre d\'utilisateurs actifs sur le site',
      'Chemin suivi par un utilisateur pour atteindre un objectif',
      'Processus d\'inscription et d\'authentification',
      'Système de navigation principale d\'un site'
    ],
    correctAnswer: 1,
    explanation: 'Le user flow représente le parcours qu\'un utilisateur suit dans l\'interface pour accomplir une action ou atteindre un objectif.'
  },
  {
    id: 'q-lex-ext-39',
    question: 'Quelle est la différence entre wireframe et maquette ?',
    options: [
      'Wireframe est plus détaillé que la maquette',
      'Wireframe = structure simple, Maquette = visuel détaillé',
      'Wireframe est destiné aux développeurs, Maquette au client',
      'Wireframe est interactif, Maquette est statique'
    ],
    correctAnswer: 1,
    explanation: 'Le wireframe est un schéma structural sans détails graphiques, la maquette est une représentation visuelle détaillée et proche du rendu final.'
  },
  {
    id: 'q-lex-ext-40',
    question: 'Qu\'est-ce qu\'un prototype ?',
    options: [
      'Première version de développement du produit',
      'Version interactive d\'une maquette simulant la navigation',
      'Document de spécifications fonctionnelles détaillées',
      'Modèle 3D d\'un produit physique avant fabrication'
    ],
    correctAnswer: 1,
    explanation: 'Le prototype est une version interactive d\'une maquette qui permet de simuler la navigation et tester l\'expérience utilisateur.'
  },
  {
    id: 'q-lex-ext-41',
    question: 'Qu\'est-ce que la hiérarchie visuelle ?',
    options: [
      'Structure organisationnelle de l\'équipe design',
      'Organisation des éléments pour guider le regard',
      'Classification des pages par ordre d\'importance',
      'Système de navigation multi-niveaux du site'
    ],
    correctAnswer: 1,
    explanation: 'La hiérarchie visuelle organise les éléments d\'une interface pour guider naturellement le regard et la compréhension de l\'utilisateur.'
  },
  {
    id: 'q-lex-ext-42',
    question: 'Qu\'est-ce que le zoning ?',
    options: [
      'Segmentation géographique des utilisateurs cibles',
      'Découpage d\'une page en zones principales',
      'Répartition des tâches par équipe ou département',
      'Classification des contenus par thématique'
    ],
    correctAnswer: 1,
    explanation: 'Le zoning découpe une page en grandes zones fonctionnelles (header, navigation, contenu principal, sidebar, footer).'
  },
  {
    id: 'q-lex-ext-43',
    question: 'Qu\'est-ce que l\'architecture de l\'information ?',
    options: [
      'Infrastructure technique hébergeant les données',
      'Organisation des contenus pour qu\'ils soient trouvables',
      'Diagramme montrant les flux de données du système',
      'Documentation décrivant la structure des bases de données'
    ],
    correctAnswer: 1,
    explanation: 'L\'architecture de l\'information organise et structure les contenus pour qu\'ils soient facilement trouvables et compréhensibles.'
  },
  {
    id: 'q-lex-ext-44',
    question: 'Qu\'est-ce qu\'un parcours utilisateur ?',
    options: [
      'Chemin de navigation optimisé pour le SEO',
      'Ensemble des étapes vécues par un utilisateur',
      'Processus de gamification pour engager les utilisateurs',
      'Système de recommandation personnalisée'
    ],
    correctAnswer: 1,
    explanation: 'Le parcours utilisateur décrit toutes les étapes vécues par un utilisateur avant, pendant et après l\'usage du site ou service.'
  },
  {
    id: 'q-lex-ext-45',
    question: 'Qu\'est-ce qu\'un composant en design ?',
    options: [
      'Membre de l\'équipe spécialisé dans une technologie',
      'Élément d\'interface réutilisable',
      'Module technique implémenté par les développeurs',
      'Section d\'une page web avec son propre style'
    ],
    correctAnswer: 1,
    explanation: 'Un composant est un élément d\'interface réutilisable (bouton, carte, champ de formulaire) qui garantit la cohérence du design.'
  },
  {
    id: 'q-lex-ext-46',
    question: 'Qu\'est-ce qu\'un design system ?',
    options: [
      'Logiciel de création graphique utilisé par les designers',
      'Ensemble de règles et composants pour une interface cohérente',
      'Méthodologie de travail pour les équipes design',
      'Plateforme en ligne centralisant les maquettes du projet'
    ],
    correctAnswer: 1,
    explanation: 'Le design system est une bibliothèque de composants, styles et règles qui garantit la cohérence de l\'interface sur tout le produit.'
  },
  {
    id: 'q-lex-ext-47',
    question: 'Pourquoi les contrastes sont-ils importants ?',
    options: [
      'Pour respecter les tendances esthétiques actuelles',
      'Pour améliorer la lisibilité et l\'accessibilité',
      'Pour réduire la consommation énergétique des écrans',
      'Pour se différencier visuellement de la concurrence'
    ],
    correctAnswer: 1,
    explanation: 'Les contrastes suffisants entre texte et fond améliorent la lisibilité et rendent le site accessible aux personnes malvoyantes.'
  },
  {
    id: 'q-lex-ext-48',
    question: 'Qu\'est-ce que l\'ergonomie ?',
    options: [
      'Discipline étudiant l\'impact écologique du numérique',
      'Qualité d\'un système à être efficace et confortable',
      'Méthodologie d\'optimisation des performances techniques',
      'Processus d\'analyse des coûts d\'un projet'
    ],
    correctAnswer: 1,
    explanation: 'L\'ergonomie évalue la facilité d\'usage, l\'efficacité et le confort d\'utilisation d\'un système ou interface.'
  },
  {
    id: 'q-lex-ext-49',
    question: 'Qu\'est-ce que le RGAA ?',
    options: [
      'Outil de gestion de contenu spécialisé pour les sites publics',
      'Référentiel français d\'accessibilité numérique',
      'Framework JavaScript pour créer des interfaces accessibles',
      'Organisme certificateur des sites web français'
    ],
    correctAnswer: 1,
    explanation: 'Le RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité) définit les règles d\'accessibilité numérique en France.'
  },
  {
    id: 'q-lex-ext-50',
    question: 'Qu\'est-ce qu\'un audit UX ?',
    options: [
      'Enquête de satisfaction auprès des utilisateurs finaux',
      'Analyse critique d\'une interface pour repérer les problèmes',
      'Test de performance technique du site web',
      'Vérification de conformité aux normes d\'accessibilité'
    ],
    correctAnswer: 1,
    explanation: 'L\'audit UX est une analyse systématique d\'une interface pour identifier les problèmes d\'expérience utilisateur et proposer des améliorations.'
  },

  // Section Technique
  {
    id: 'q-lex-ext-51',
    question: 'Quelle est la différence entre front-end et back-end ?',
    options: [
      'Front-end gère les données, Back-end gère l\'affichage',
      'Front = partie visible, Back = logique serveur',
      'Front-end est plus complexe que le back-end',
      'Back-end s\'occupe du design, Front-end de la sécurité'
    ],
    correctAnswer: 1,
    explanation: 'Le front-end est la partie visible avec laquelle l\'utilisateur interagit. Le back-end gère la logique métier et les données côté serveur.'
  },
  {
    id: 'q-lex-ext-52',
    question: 'Qu\'est-ce qu\'une API ?',
    options: [
      'Application mobile dédiée aux développeurs',
      'Interface permettant à deux systèmes de communiquer',
      'Langage de programmation pour créer des sites web',
      'Protocole de sécurité pour protéger les données'
    ],
    correctAnswer: 1,
    explanation: 'Une API (Application Programming Interface) permet à deux systèmes de communiquer et d\'échanger des données de manière standardisée.'
  },
  {
    id: 'q-lex-ext-53',
    question: 'À quoi sert une base de données ?',
    options: [
      'À générer automatiquement le contenu du site',
      'À stocker et organiser les informations',
      'À créer l\'interface graphique du site',
      'À gérer les permissions des utilisateurs uniquement'
    ],
    correctAnswer: 1,
    explanation: 'La base de données stocke, organise et permet de récupérer efficacement toutes les informations du site ou de l\'application.'
  },
  {
    id: 'q-lex-ext-54',
    question: 'Qu\'est-ce qu\'un serveur ?',
    options: [
      'Logiciel permettant de développer des sites web',
      'Machine qui héberge le site et répond aux requêtes',
      'Interface d\'administration pour gérer le contenu',
      'Système de sauvegarde automatique des données'
    ],
    correctAnswer: 1,
    explanation: 'Un serveur est une machine (physique ou virtuelle) qui héberge l\'application et répond aux requêtes des utilisateurs.'
  },
  {
    id: 'q-lex-ext-55',
    question: 'Qu\'est-ce que l\'hébergement web ?',
    options: [
      'Processus de création d\'un nom de domaine',
      'Service mettant à disposition un serveur pour le site',
      'Plateforme de développement en ligne pour coder',
      'Système de sauvegarde cloud des fichiers du site'
    ],
    correctAnswer: 1,
    explanation: 'L\'hébergement web est un service qui met à disposition un serveur et des ressources pour rendre un site accessible en ligne.'
  },
  {
    id: 'q-lex-ext-56',
    question: 'Qu\'est-ce que le DNS ?',
    options: [
      'Protocole de sécurité pour chiffrer les données',
      'Système qui relie un nom de domaine à une adresse IP',
      'Service de notification automatique pour les utilisateurs',
      'Base de données distribuée pour stocker les contenus'
    ],
    correctAnswer: 1,
    explanation: 'Le DNS (Domain Name System) traduit les noms de domaine lisibles (monsite.fr) en adresses IP comprises par les machines.'
  },
  {
    id: 'q-lex-ext-57',
    question: 'Qu\'est-ce que le SSL ?',
    options: [
      'Langage de programmation pour créer des sites sécurisés',
      'Protocole qui sécurise les échanges',
      'Framework JavaScript pour développer des applications',
      'Système de gestion de contenu orienté sécurité'
    ],
    correctAnswer: 1,
    explanation: 'SSL (Secure Sockets Layer) est un protocole de sécurité qui chiffre les échanges entre le navigateur et le serveur.'
  },
  {
    id: 'q-lex-ext-58',
    question: 'À quoi sert un certificat SSL ?',
    options: [
      'À optimiser la vitesse de chargement du site',
      'À activer le HTTPS et sécuriser un site',
      'À améliorer le référencement naturel sur Google',
      'À authentifier l\'identité des utilisateurs'
    ],
    correctAnswer: 1,
    explanation: 'Le certificat SSL permet d\'activer le protocole HTTPS qui chiffre les communications et authentifie le site.'
  },
  {
    id: 'q-lex-ext-59',
    question: 'Qu\'est-ce qu\'un nom de domaine ?',
    options: [
      'Identifiant unique d\'un utilisateur sur un site',
      'Adresse web lisible (ex: monsite.fr)',
      'Titre SEO affiché dans les résultats Google',
      'Nom du serveur hébergeant l\'application'
    ],
    correctAnswer: 1,
    explanation: 'Le nom de domaine est l\'adresse web lisible par l\'humain qui permet d\'accéder à un site (ex: google.com).'
  },
  {
    id: 'q-lex-ext-60',
    question: 'À quoi sert le cache ?',
    options: [
      'À sauvegarder définitivement les données utilisateurs',
      'À stocker temporairement des données pour accélérer l\'affichage',
      'À masquer certaines pages aux moteurs de recherche',
      'À compresser automatiquement les images du site'
    ],
    correctAnswer: 1,
    explanation: 'Le cache stocke temporairement des données fréquemment utilisées pour réduire le temps de chargement et améliorer les performances.'
  },
  {
    id: 'q-lex-ext-61',
    question: 'Qu\'est-ce que la compression de fichiers ?',
    options: [
      'Archivage des anciennes versions de fichiers',
      'Réduction de la taille pour améliorer la vitesse',
      'Suppression automatique des fichiers inutilisés',
      'Chiffrement des données sensibles avant envoi'
    ],
    correctAnswer: 1,
    explanation: 'La compression réduit la taille des fichiers (images, CSS, JS) pour diminuer le temps de chargement et la bande passante utilisée.'
  },
  {
    id: 'q-lex-ext-62',
    question: 'Qu\'est-ce que le code source ?',
    options: [
      'Documentation technique expliquant le fonctionnement',
      'Ensemble des fichiers contenant les instructions du programme',
      'Version originale non modifiée d\'un logiciel open-source',
      'Référentiel de bonnes pratiques de développement'
    ],
    correctAnswer: 1,
    explanation: 'Le code source est l\'ensemble des fichiers texte contenant les instructions écrites par les développeurs pour créer l\'application.'
  },
  {
    id: 'q-lex-ext-63',
    question: 'Qu\'est-ce que l\'intégration web ?',
    options: [
      'Connexion entre plusieurs sites via des API',
      'Transformation des maquettes en pages HTML/CSS/JS',
      'Processus de déploiement automatisé du code',
      'Fusion de plusieurs projets en une seule application'
    ],
    correctAnswer: 1,
    explanation: 'L\'intégration web consiste à transformer les maquettes graphiques en pages web fonctionnelles avec HTML, CSS et JavaScript.'
  },
  {
    id: 'q-lex-ext-64',
    question: 'Qu\'est-ce qu\'un framework ?',
    options: [
      'Structure organisationnelle d\'une équipe de développement',
      'Ensemble d\'outils pour faciliter le développement',
      'Méthodologie de gestion de projet technique',
      'Environnement de test pour valider le code'
    ],
    correctAnswer: 1,
    explanation: 'Un framework est un ensemble structuré d\'outils, de conventions et de code réutilisable pour accélérer et standardiser le développement.'
  },
  {
    id: 'q-lex-ext-65',
    question: 'Qu\'est-ce qu\'une librairie en programmation ?',
    options: [
      'Plateforme en ligne regroupant des ressources de formation',
      'Collection de fonctions réutilisables',
      'Catalogue de plugins et extensions disponibles',
      'Documentation technique d\'un langage de programmation'
    ],
    correctAnswer: 1,
    explanation: 'Une librairie (ou bibliothèque) est une collection de fonctions ou composants réutilisables qu\'on peut intégrer dans un projet.'
  },
  {
    id: 'q-lex-ext-66',
    question: 'Qu\'est-ce qu\'un SGBD ?',
    options: [
      'Standard de gouvernance des bases de données',
      'Logiciel qui gère la base de données',
      'Système de génération automatique de documentation',
      'Service cloud pour héberger des données'
    ],
    correctAnswer: 1,
    explanation: 'Un SGBD (Système de Gestion de Base de Données) est le logiciel qui gère le stockage, l\'accès et la sécurité des données.'
  },
  {
    id: 'q-lex-ext-67',
    question: 'Que sont les logs ?',
    options: [
      'Logiciels de suivi des performances d\'un site',
      'Fichiers enregistrant les événements et erreurs',
      'Identifiants de connexion des utilisateurs',
      'Archives compressées des anciennes versions'
    ],
    correctAnswer: 1,
    explanation: 'Les logs sont des fichiers qui enregistrent chronologiquement les événements, actions et erreurs d\'un système pour faciliter le débogage.'
  },
  {
    id: 'q-lex-ext-68',
    question: 'Qu\'est-ce que l\'infrastructure IT ?',
    options: [
      'Méthodologie de travail des équipes techniques',
      'Ensemble des composants matériels et logiciels',
      'Organisation hiérarchique du département informatique',
      'Budget alloué aux ressources technologiques'
    ],
    correctAnswer: 1,
    explanation: 'L\'infrastructure IT est l\'ensemble des composants matériels (serveurs, réseau) et logiciels qui supportent une application.'
  },

  // Section CMS et outils
  {
    id: 'q-lex-ext-69',
    question: 'Qu\'est-ce que WordPress ?',
    options: [
      'Logiciel de traitement de texte pour rédiger du contenu',
      'CMS très répandu pour sites vitrines et blogs',
      'Framework JavaScript pour applications web modernes',
      'Plateforme d\'hébergement spécialisée pour les blogs'
    ],
    correctAnswer: 1,
    explanation: 'WordPress est le CMS (Content Management System) le plus utilisé au monde pour créer des sites vitrines, blogs et même e-commerce.'
  },
  {
    id: 'q-lex-ext-70',
    question: 'Qu\'est-ce que PrestaShop ?',
    options: [
      'Module de paiement en ligne pour sites e-commerce',
      'CMS spécialisé dans les boutiques en ligne',
      'Place de marché en ligne pour vendre des produits',
      'Service de logistique pour gérer les livraisons'
    ],
    correctAnswer: 1,
    explanation: 'PrestaShop est un CMS français spécialisé dans la création et la gestion de boutiques e-commerce.'
  },
  {
    id: 'q-lex-ext-71',
    question: 'Qu\'est-ce qu\'une architecture headless ?',
    options: [
      'Architecture simplifiée sans interface d\'administration',
      'Architecture où le front et le back sont séparés',
      'Système fonctionnant sans serveur principal',
      'Application ne nécessitant pas de base de données'
    ],
    correctAnswer: 1,
    explanation: 'L\'architecture headless sépare totalement le front-end du back-end qui communiquent uniquement via API, offrant plus de flexibilité.'
  },
  {
    id: 'q-lex-ext-72',
    question: 'Qu\'est-ce qu\'un theme dans un CMS ?',
    options: [
      'Catégorie thématique organisant les contenus',
      'Ensemble de fichiers définissant l\'apparence du site',
      'Module fonctionnel ajoutant des fonctionnalités',
      'Palette de couleurs principale du site'
    ],
    correctAnswer: 1,
    explanation: 'Un theme (ou thème) dans un CMS est un ensemble de fichiers qui définissent l\'apparence visuelle et la structure du site.'
  },
  {
    id: 'q-lex-ext-73',
    question: 'Qu\'est-ce qu\'un template ?',
    options: [
      'Thème graphique préconçu pour un CMS',
      'Modèle de page réutilisable',
      'Module d\'extension ajoutant des fonctionnalités',
      'Document type servant de modèle administratif'
    ],
    correctAnswer: 1,
    explanation: 'Un template est un modèle de page ou de contenu réutilisable qui définit une structure commune pour plusieurs pages.'
  },
  {
    id: 'q-lex-ext-74',
    question: 'Qu\'est-ce qu\'un page builder ?',
    options: [
      'Développeur spécialisé dans la création de pages',
      'Outil visuel pour construire des pages sans coder',
      'Module générant automatiquement des pages à partir de données',
      'Framework CSS facilitant la mise en page responsive'
    ],
    correctAnswer: 1,
    explanation: 'Un page builder est un outil WYSIWYG (What You See Is What You Get) qui permet de créer des pages visuellement sans écrire de code.'
  },
  {
    id: 'q-lex-ext-75',
    question: 'Qu\'est-ce que WooCommerce ?',
    options: [
      'Plateforme de paiement en ligne pour sites marchands',
      'Extension e-commerce de WordPress',
      'Service de dropshipping automatisé',
      'Logiciel de gestion de stock et d\'inventaire'
    ],
    correctAnswer: 1,
    explanation: 'WooCommerce est l\'extension e-commerce la plus populaire de WordPress pour transformer un site en boutique en ligne.'
  },
  {
    id: 'q-lex-ext-76',
    question: 'Qu\'est-ce que Trello ?',
    options: [
      'Application de prise de notes collaborative',
      'Outil de gestion de tâches en mode kanban',
      'Logiciel de diagramme de Gantt pour planifier',
      'Plateforme de communication asynchrone d\'équipe'
    ],
    correctAnswer: 1,
    explanation: 'Trello est un outil de gestion de tâches visuel basé sur la méthode Kanban avec des tableaux, listes et cartes.'
  },
  {
    id: 'q-lex-ext-77',
    question: 'Qu\'est-ce que Notion ?',
    options: [
      'Application de mindmapping et de brainstorming',
      'Outil polyvalent pour documentation et organisation',
      'Logiciel de gestion de projet avec diagrammes Gantt',
      'Plateforme de communication vidéo pour équipes'
    ],
    correctAnswer: 1,
    explanation: 'Notion est un outil tout-en-un pour la documentation, la gestion de tâches, les bases de données et la collaboration d\'équipe.'
  },
  {
    id: 'q-lex-ext-78',
    question: 'Qu\'est-ce que Slack ?',
    options: [
      'Outil de gestion de projet avec suivi des tâches',
      'Outil de messagerie d\'équipe',
      'Plateforme de visioconférence professionnelle',
      'Application de partage de fichiers cloud'
    ],
    correctAnswer: 1,
    explanation: 'Slack est une plateforme de messagerie instantanée orientée travail qui permet de communiquer en équipe par canaux thématiques.'
  },
  {
    id: 'q-lex-ext-79',
    question: 'Qu\'est-ce que GitHub ?',
    options: [
      'Réseau social professionnel pour développeurs',
      'Plateforme de gestion de code source',
      'Forum d\'entraide technique pour programmeurs',
      'Marketplace d\'applications et de plugins'
    ],
    correctAnswer: 1,
    explanation: 'GitHub est une plateforme qui héberge le code source en utilisant Git et facilite la collaboration entre développeurs.'
  },

  // Section SEO
  {
    id: 'q-lex-ext-80',
    question: 'À quoi sert la balise title ?',
    options: [
      'À définir le thème graphique principal du site',
      'Titre apparaissant dans l\'onglet et les résultats Google',
      'À marquer les sections importantes du contenu',
      'À indiquer le nom du propriétaire du site'
    ],
    correctAnswer: 1,
    explanation: 'La balise title définit le titre de la page qui apparaît dans l\'onglet du navigateur et comme titre dans les résultats de recherche.'
  },
  {
    id: 'q-lex-ext-81',
    question: 'Que sont les balises meta ?',
    options: [
      'Tags visuels affichés sur la page pour les utilisateurs',
      'Informations aidant les moteurs de recherche',
      'Éléments de navigation du menu principal',
      'Catégories permettant de classer les articles'
    ],
    correctAnswer: 1,
    explanation: 'Les balises meta sont des informations dans le code HTML qui aident les moteurs de recherche à comprendre le contenu de la page.'
  },
  {
    id: 'q-lex-ext-82',
    question: 'Pourquoi utiliser les balises H1, H2, H3 ?',
    options: [
      'Pour appliquer des styles de police différents',
      'Pour structurer le contenu de manière hiérarchique',
      'Pour créer automatiquement un sommaire cliquable',
      'Pour définir les zones de texte modifiables'
    ],
    correctAnswer: 1,
    explanation: 'Les balises H1 à H6 structurent hiérarchiquement le contenu, aidant les lecteurs et les moteurs de recherche à comprendre l\'organisation.'
  },
  {
    id: 'q-lex-ext-83',
    question: 'À quoi sert un sitemap.xml ?',
    options: [
      'À créer un plan du site visible par les visiteurs',
      'À lister les pages pour faciliter l\'indexation',
      'À définir l\'arborescence de navigation du menu',
      'À cartographier les liens externes du site'
    ],
    correctAnswer: 1,
    explanation: 'Le sitemap.xml liste toutes les pages importantes du site pour aider les moteurs de recherche à les découvrir et les indexer.'
  },
  {
    id: 'q-lex-ext-84',
    question: 'Qu\'est-ce que le fichier robots.txt ?',
    options: [
      'Script automatisant certaines tâches du site',
      'Fichier indiquant aux moteurs quelles zones explorer',
      'Programme détectant les utilisateurs malveillants',
      'Configuration des chatbots du site'
    ],
    correctAnswer: 1,
    explanation: 'Le robots.txt indique aux robots des moteurs de recherche quelles parties du site ils peuvent explorer ou doivent ignorer.'
  },
  {
    id: 'q-lex-ext-85',
    question: 'Qu\'est-ce que le maillage interne ?',
    options: [
      'Réseau de sites interconnectés d\'une même entreprise',
      'Liens entre les pages d\'un même site',
      'Structure technique de l\'architecture serveur',
      'Système de navigation breadcrumb (fil d\'Ariane)'
    ],
    correctAnswer: 1,
    explanation: 'Le maillage interne est l\'ensemble des liens entre les différentes pages d\'un même site, important pour la navigation et le SEO.'
  },
  {
    id: 'q-lex-ext-86',
    question: 'Qu\'est-ce qu\'un backlink ?',
    options: [
      'Lien de retour vers la page d\'accueil',
      'Lien provenant d\'un autre site',
      'Archive d\'une ancienne version de page',
      'Bouton de navigation "Retour" du navigateur'
    ],
    correctAnswer: 1,
    explanation: 'Un backlink est un lien provenant d\'un autre site qui pointe vers le vôtre, important pour le référencement et la crédibilité.'
  },
  {
    id: 'q-lex-ext-87',
    question: 'Que sont les Core Web Vitals ?',
    options: [
      'Fonctionnalités essentielles requises pour tout site',
      'Indicateurs Google sur performance et stabilité',
      'Certificats de sécurité obligatoires pour les sites',
      'Standards d\'accessibilité numérique internationaux'
    ],
    correctAnswer: 1,
    explanation: 'Les Core Web Vitals sont des indicateurs de Google mesurant la performance, la réactivité et la stabilité visuelle d\'une page.'
  },
  {
    id: 'q-lex-ext-88',
    question: 'Qu\'est-ce que l\'indexation ?',
    options: [
      'Création d\'un sommaire automatique des contenus',
      'Enregistrement d\'une page dans l\'index d\'un moteur',
      'Numérotation automatique des pages du site',
      'Organisation thématique des articles par catégorie'
    ],
    correctAnswer: 1,
    explanation: 'L\'indexation est le processus par lequel un moteur de recherche découvre, analyse et enregistre une page dans son index.'
  },
  {
    id: 'q-lex-ext-89',
    question: 'À quoi sert la balise canonical ?',
    options: [
      'À normaliser le format des URLs du site',
      'À indiquer la version principale d\'une page',
      'À définir l\'URL canonique du nom de domaine',
      'À rediriger automatiquement vers la version HTTPS'
    ],
    correctAnswer: 1,
    explanation: 'La balise canonical indique aux moteurs de recherche quelle est la version principale d\'une page en cas de contenu dupliqué.'
  },
  {
    id: 'q-lex-ext-90',
    question: 'Qu\'est-ce qu\'une redirection 301 ?',
    options: [
      'Code d\'erreur indiquant une page introuvable',
      'Redirection permanente d\'une URL vers une autre',
      'Redirection temporaire pour maintenance du site',
      'Type de lien ouvrant une nouvelle fenêtre'
    ],
    correctAnswer: 1,
    explanation: 'La redirection 301 est une redirection permanente qui transfère le "jus SEO" d\'une ancienne URL vers une nouvelle.'
  },
  {
    id: 'q-lex-ext-91',
    question: 'À quoi sert l\'attribut alt d\'une image ?',
    options: [
      'À définir une image alternative pour les mobiles',
      'Description pour l\'accessibilité et le SEO',
      'À spécifier le format de compression de l\'image',
      'À créer un effet de survol au passage de la souris'
    ],
    correctAnswer: 1,
    explanation: 'L\'attribut alt fournit une description textuelle de l\'image, utile pour l\'accessibilité (lecteurs d\'écran) et le référencement.'
  },
  {
    id: 'q-lex-ext-92',
    question: 'Qu\'est-ce que la longue traîne en SEO ?',
    options: [
      'Ancienneté d\'un site influençant son autorité',
      'Mots-clés longs et précis, moins concurrentiels',
      'Durée moyenne de visite sur un site web',
      'Pages ayant un taux de rebond très faible'
    ],
    correctAnswer: 1,
    explanation: 'La longue traîne désigne les requêtes de recherche longues et spécifiques, moins recherchées mais plus qualifiées et moins concurrentielles.'
  },
  {
    id: 'q-lex-ext-93',
    question: 'Qu\'est-ce que l\'optimisation on-page ?',
    options: [
      'Optimisation du temps de chargement des pages',
      'Actions d\'optimisation réalisées sur les pages',
      'Amélioration de l\'expérience utilisateur mobile',
      'Mise en conformité RGPD des formulaires'
    ],
    correctAnswer: 1,
    explanation: 'L\'optimisation on-page regroupe toutes les actions réalisées directement sur les pages du site : balises, contenu, structure, vitesse.'
  },
  {
    id: 'q-lex-ext-94',
    question: 'Qu\'est-ce qu\'un contenu evergreen ?',
    options: [
      'Contenu régulièrement mis à jour avec l\'actualité',
      'Contenu restant pertinent longtemps',
      'Article traitant de développement durable',
      'Publication saisonnière revenant chaque année'
    ],
    correctAnswer: 1,
    explanation: 'Un contenu evergreen est un contenu qui reste pertinent et utile dans la durée, continuant à attirer du trafic longtemps après sa publication.'
  },

  // Section Marketing digital
  {
    id: 'q-lex-ext-95',
    question: 'Qu\'est-ce qu\'un tunnel de conversion ?',
    options: [
      'Processus de segmentation des audiences cibles',
      'Parcours menant un visiteur à une action clé',
      'Méthodologie de ciblage publicitaire progressif',
      'Système de notification automatique des ventes'
    ],
    correctAnswer: 1,
    explanation: 'Le tunnel (ou funnel) de conversion est le parcours qu\'un visiteur suit depuis sa première visite jusqu\'à l\'action souhaitée (achat, inscription).'
  },
  {
    id: 'q-lex-ext-96',
    question: 'Qu\'est-ce que le taux de rebond ?',
    options: [
      'Pourcentage d\'emails non délivrés dans une campagne',
      'Pourcentage de visiteurs quittant après une seule page',
      'Taux de retour des visiteurs sur le site',
      'Proportion de visiteurs revenant plusieurs fois'
    ],
    correctAnswer: 1,
    explanation: 'Le taux de rebond mesure le pourcentage de visiteurs qui quittent le site après avoir consulté une seule page sans interaction.'
  },
  {
    id: 'q-lex-ext-97',
    question: 'Qu\'est-ce qu\'une landing page ?',
    options: [
      'Page d\'accueil principale du site web',
      'Page d\'atterrissage dédiée à un objectif précis',
      'Première page vue lors d\'une visite',
      'Page de destination après connexion utilisateur'
    ],
    correctAnswer: 1,
    explanation: 'Une landing page est une page d\'atterrissage spécialement conçue pour convertir les visiteurs venant d\'une campagne marketing.'
  },
  {
    id: 'q-lex-ext-98',
    question: 'Qu\'est-ce que le content marketing ?',
    options: [
      'Vente d\'espaces publicitaires sur les contenus',
      'Stratégie de création de contenu utile pour attirer',
      'Rédaction de descriptions produits pour e-commerce',
      'Achat de contenus auprès de rédacteurs externes'
    ],
    correctAnswer: 1,
    explanation: 'Le content marketing consiste à créer et diffuser du contenu utile et pertinent pour attirer, engager et fidéliser une audience.'
  },
  {
    id: 'q-lex-ext-99',
    question: 'Qu\'est-ce que l\'emailing ?',
    options: [
      'Service de messagerie électronique d\'entreprise',
      'Envoi de campagnes d\'e-mails ciblées',
      'Gestion centralisée des boîtes email de l\'équipe',
      'Notification automatique par email des événements'
    ],
    correctAnswer: 1,
    explanation: 'L\'emailing est l\'envoi de campagnes d\'e-mails ciblées à une base de contacts pour informer, promouvoir ou fidéliser.'
  },
  {
    id: 'q-lex-ext-100',
    question: 'Qu\'est-ce qu\'une campagne marketing ?',
    options: [
      'Période promotionnelle avec réductions sur les produits',
      'Ensemble d\'actions planifiées pour un objectif',
      'Stratégie annuelle définissant les priorités marketing',
      'Budget alloué aux actions publicitaires'
    ],
    correctAnswer: 1,
    explanation: 'Une campagne est un ensemble coordonné d\'actions de communication et marketing planifiées pour atteindre un objectif précis.'
  },
  {
    id: 'q-lex-ext-101',
    question: 'Que sont les analytics ?',
    options: [
      'Outils d\'intelligence artificielle prédictive',
      'Données sur l\'usage d\'un site pour analyser le comportement',
      'Rapports financiers de performance commerciale',
      'Méthodes statistiques de traitement des données'
    ],
    correctAnswer: 1,
    explanation: 'Les analytics sont les données collectées sur l\'utilisation d\'un site (visites, pages vues, conversions) permettant d\'analyser les comportements.'
  },
  {
    id: 'q-lex-ext-102',
    question: 'Qu\'est-ce que l\'acquisition en marketing ?',
    options: [
      'Rachat d\'entreprises concurrentes sur le marché',
      'Actions pour attirer de nouveaux visiteurs ou clients',
      'Obtention de licences et droits d\'exploitation',
      'Achat d\'espaces publicitaires premium'
    ],
    correctAnswer: 1,
    explanation: 'L\'acquisition regroupe toutes les actions visant à attirer de nouveaux visiteurs ou clients (SEO, publicité, réseaux sociaux, etc.).'
  },
  {
    id: 'q-lex-ext-103',
    question: 'Qu\'est-ce que l\'engagement utilisateur ?',
    options: [
      'Taux de conversion des visiteurs en clients',
      'Interactions des utilisateurs avec le contenu',
      'Fidélisation mesurée par la fréquence des achats',
      'Temps moyen passé sur le site par visite'
    ],
    correctAnswer: 1,
    explanation: 'L\'engagement mesure l\'intensité des interactions des utilisateurs avec le contenu : clics, commentaires, partages, temps passé.'
  },
  {
    id: 'q-lex-ext-104',
    question: 'Qu\'est-ce que le tracking ?',
    options: [
      'Suivi logistique des commandes en cours de livraison',
      'Mise en place d\'outils pour suivre le comportement',
      'Historique des modifications apportées au site',
      'Système de traçabilité des tickets de support'
    ],
    correctAnswer: 1,
    explanation: 'Le tracking est la mise en place de balises et outils (Google Analytics, pixels, etc.) pour suivre le comportement des utilisateurs.'
  },
  {
    id: 'q-lex-ext-105',
    question: 'Que sont les paramètres UTM ?',
    options: [
      'Codes de suivi des colis pour les e-commerces',
      'Paramètres ajoutés à une URL pour identifier le trafic',
      'Identifiants uniques générés pour chaque utilisateur',
      'Balises techniques optimisant le référencement'
    ],
    correctAnswer: 1,
    explanation: 'Les paramètres UTM sont ajoutés à une URL pour identifier précisément la source, le support et la campagne d\'origine du trafic.'
  },

  // Section Maintenance et support
  {
    id: 'q-lex-ext-106',
    question: 'Qu\'est-ce qu\'un ticket de support ?',
    options: [
      'Formulaire de demande d\'accès aux ressources',
      'Demande ou incident enregistré',
      'Bon de commande pour acheter des services',
      'Document justifiant une intervention technique'
    ],
    correctAnswer: 1,
    explanation: 'Un ticket est une demande d\'assistance ou un incident enregistré dans un système de support pour assurer un suivi structuré.'
  },
  {
    id: 'q-lex-ext-107',
    question: 'Qu\'est-ce qu\'un bug ?',
    options: [
      'Fonctionnalité non documentée du logiciel',
      'Erreur ou comportement inattendu dans une application',
      'Ralentissement des performances du système',
      'Incompatibilité entre deux technologies'
    ],
    correctAnswer: 1,
    explanation: 'Un bug est une erreur dans le code qui provoque un comportement inattendu ou incorrect de l\'application.'
  },
  {
    id: 'q-lex-ext-108',
    question: 'Qu\'est-ce qu\'un correctif ?',
    options: [
      'Validation par les pairs du code modifié',
      'Action ou mise à jour pour résoudre un bug',
      'Test automatisé vérifiant la non-régression',
      'Révision du code selon les standards de qualité'
    ],
    correctAnswer: 1,
    explanation: 'Un correctif (ou fix) est une modification du code visant à résoudre un bug ou un dysfonctionnement identifié.'
  },
  {
    id: 'q-lex-ext-109',
    question: 'Qu\'est-ce qu\'un incident IT ?',
    options: [
      'Problème de sécurité détecté par les systèmes',
      'Événement dégradant ou interrompant le service',
      'Erreur critique nécessitant un redémarrage serveur',
      'Défaillance matérielle d\'un composant système'
    ],
    correctAnswer: 1,
    explanation: 'Un incident est un événement non planifié qui dégrade ou interrompt le service normal, nécessitant une intervention rapide.'
  },
  {
    id: 'q-lex-ext-110',
    question: 'Qu\'est-ce qu\'une feature ?',
    options: [
      'Module complémentaire optionnel d\'un logiciel',
      'Fonctionnalité d\'un produit ou application',
      'Amélioration de performance technique du système',
      'Mise à jour majeure intégrant plusieurs changements'
    ],
    correctAnswer: 1,
    explanation: 'Une feature est une fonctionnalité, une capacité offerte par un produit ou une application aux utilisateurs.'
  },
  {
    id: 'q-lex-ext-111',
    question: 'Qu\'est-ce qu\'un SLA ?',
    options: [
      'Standard de licence d\'application logicielle',
      'Accord définissant le niveau de service attendu',
      'Système de limitation d\'accès aux ressources',
      'Service de localisation automatique des serveurs'
    ],
    correctAnswer: 1,
    explanation: 'Un SLA (Service Level Agreement) est un engagement contractuel définissant le niveau de service attendu : disponibilité, temps de réponse, etc.'
  },
  {
    id: 'q-lex-ext-112',
    question: 'Qu\'est-ce qu\'un patch logiciel ?',
    options: [
      'Extension ajoutant de nouvelles fonctionnalités',
      'Petite mise à jour pour corriger un bug ou une faille',
      'Version bêta testant de nouvelles features',
      'Module de personnalisation de l\'interface'
    ],
    correctAnswer: 1,
    explanation: 'Un patch est une petite mise à jour ciblée qui corrige rapidement un bug, une faille de sécurité ou un problème spécifique.'
  },

  // Section Sécurité
  {
    id: 'q-lex-ext-113',
    question: 'Qu\'est-ce que l\'authentification ?',
    options: [
      'Validation de la légitimité d\'un site web',
      'Vérification de l\'identité d\'un utilisateur',
      'Certification de conformité aux standards de sécurité',
      'Signature numérique garantissant l\'intégrité des données'
    ],
    correctAnswer: 1,
    explanation: 'L\'authentification est le processus de vérification de l\'identité d\'un utilisateur avant de lui donner accès au système (login/password, etc.).'
  },
  {
    id: 'q-lex-ext-114',
    question: 'Qu\'est-ce que l\'autorisation ?',
    options: [
      'Approbation légale pour exploiter un service',
      'Gestion des droits d\'un utilisateur sur les ressources',
      'Validation d\'une transaction financière',
      'Consentement utilisateur pour traiter ses données'
    ],
    correctAnswer: 1,
    explanation: 'L\'autorisation détermine ce qu\'un utilisateur authentifié a le droit de faire : consulter, modifier, supprimer certaines ressources.'
  },
  {
    id: 'q-lex-ext-115',
    question: 'Qu\'est-ce que le chiffrement ?',
    options: [
      'Conversion des données en format numérique',
      'Transformation des données pour les rendre illisibles',
      'Comptage des tentatives d\'accès au système',
      'Compression des fichiers pour gagner de l\'espace'
    ],
    correctAnswer: 1,
    explanation: 'Le chiffrement transforme les données en un format illisible sans la clé de déchiffrement, protégeant ainsi la confidentialité.'
  },
  {
    id: 'q-lex-ext-116',
    question: 'Qu\'est-ce qu\'un firewall ?',
    options: [
      'Protocole de protection contre les incendies serveur',
      'Système filtrant le trafic réseau',
      'Logiciel détectant les logiciels malveillants',
      'Mécanisme empêchant la surchauffe des composants'
    ],
    correctAnswer: 1,
    explanation: 'Un firewall (pare-feu) est un système de sécurité qui filtre le trafic réseau pour bloquer les accès non autorisés.'
  },
  {
    id: 'q-lex-ext-117',
    question: 'Pourquoi faire des sauvegardes ?',
    options: [
      'Pour libérer de l\'espace sur les serveurs principaux',
      'Pour restaurer les données en cas de problème',
      'Pour améliorer les performances du système',
      'Pour archiver l\'historique des modifications'
    ],
    correctAnswer: 1,
    explanation: 'Les sauvegardes permettent de restaurer les données en cas de panne, erreur humaine, attaque ou désastre, assurant la continuité.'
  },
  {
    id: 'q-lex-ext-118',
    question: 'Qu\'est-ce que la restauration de données ?',
    options: [
      'Réparation de fichiers corrompus ou endommagés',
      'Remettre en place des données depuis une sauvegarde',
      'Nettoyage et optimisation de la base de données',
      'Récupération de fichiers supprimés accidentellement'
    ],
    correctAnswer: 1,
    explanation: 'La restauration est l\'action de remettre en place des données à partir d\'une sauvegarde après une perte ou corruption.'
  },
  {
    id: 'q-lex-ext-119',
    question: 'Qu\'est-ce que la conformité RGPD ?',
    options: [
      'Respect des normes d\'accessibilité numérique',
      'Respecter les règles sur la protection des données',
      'Conformité aux standards de qualité logicielle',
      'Adhésion aux bonnes pratiques de développement'
    ],
    correctAnswer: 1,
    explanation: 'La conformité RGPD signifie respecter le règlement européen sur la protection des données personnelles dans toutes les pratiques.'
  },
  {
    id: 'q-lex-ext-120',
    question: 'Que sont les données personnelles ?',
    options: [
      'Informations confidentielles d\'une entreprise',
      'Informations permettant d\'identifier une personne',
      'Préférences personnalisées d\'un utilisateur',
      'Contenus privés non partagés publiquement'
    ],
    correctAnswer: 1,
    explanation: 'Les données personnelles sont toutes informations permettant d\'identifier directement ou indirectement une personne physique.'
  }
]


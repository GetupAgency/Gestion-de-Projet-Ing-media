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
      'Un journal',
      'Un compte rendu',
      'Un budget'
    ],
    correctAnswer: 0,
    explanation: 'Le cahier des charges décrit précisément les besoins, objectifs, périmètre et contraintes d\'un projet.'
  },
  {
    id: 'q-lex-ext-2',
    question: 'Que signifie "cadrage" dans un projet ?',
    options: [
      'Mettre des cadres aux murs',
      'Phase où l\'on clarifie le pourquoi, le quoi et le comment du projet',
      'Tester',
      'Lancer'
    ],
    correctAnswer: 1,
    explanation: 'Le cadrage est la phase initiale où l\'on clarifie les objectifs, le périmètre et la méthodologie avant de démarrer.'
  },
  {
    id: 'q-lex-ext-3',
    question: 'Qu\'est-ce qu\'un kickoff ?',
    options: [
      'Un coup de pied',
      'Réunion de lancement officielle avec toutes les parties prenantes',
      'Un bug',
      'Un test'
    ],
    correctAnswer: 1,
    explanation: 'Le kickoff est la réunion de lancement officielle qui rassemble toutes les parties prenantes pour démarrer le projet.'
  },
  {
    id: 'q-lex-ext-4',
    question: 'Qu\'est-ce qu\'une user story ?',
    options: [
      'Une histoire d\'utilisateur',
      'Formulation d\'un besoin utilisateur sous forme simple et actionnable',
      'Un conte',
      'Un roman'
    ],
    correctAnswer: 1,
    explanation: 'Une user story décrit un besoin utilisateur de manière simple, généralement sous la forme "En tant que... je veux... afin de...".'
  },
  {
    id: 'q-lex-ext-5',
    question: 'Qu\'est-ce qu\'un sprint en Agile ?',
    options: [
      'Une course rapide',
      'Période de travail courte et fixe pour réaliser des tâches',
      'Un marathon',
      'Une pause'
    ],
    correctAnswer: 1,
    explanation: 'Un sprint est une période de travail courte (généralement 2 à 4 semaines) durant laquelle l\'équipe réalise un ensemble de tâches.'
  },
  {
    id: 'q-lex-ext-6',
    question: 'Qu\'est-ce qu\'un jalon dans un projet ?',
    options: [
      'Une borne kilométrique',
      'Point clé marquant une étape importante ou une décision',
      'Un type de pierre',
      'Un outil'
    ],
    correctAnswer: 1,
    explanation: 'Un jalon est un point de repère important dans le projet qui marque l\'achèvement d\'une phase ou une décision clé.'
  },
  {
    id: 'q-lex-ext-7',
    question: 'Qu\'est-ce qu\'un diagramme de Gantt ?',
    options: [
      'Un graphique médical',
      'Diagramme représentant le planning des tâches dans le temps',
      'Un schéma électrique',
      'Une carte'
    ],
    correctAnswer: 1,
    explanation: 'Le diagramme de Gantt est une représentation visuelle du planning qui montre les tâches, leur durée et leurs dépendances.'
  },
  {
    id: 'q-lex-ext-8',
    question: 'Que sont les dépendances entre tâches ?',
    options: [
      'Des addictions',
      'Liens où une tâche ne peut commencer ou finir sans l\'autre',
      'Des bugs',
      'Des erreurs'
    ],
    correctAnswer: 1,
    explanation: 'Les dépendances sont des liens logiques entre tâches : certaines tâches doivent être terminées avant que d\'autres puissent commencer.'
  },
  {
    id: 'q-lex-ext-9',
    question: 'Qu\'est-ce qu\'un livrable ?',
    options: [
      'Un livre',
      'Élément concret produit dans le cadre du projet',
      'Une facture',
      'Un email'
    ],
    correctAnswer: 1,
    explanation: 'Un livrable est un élément tangible produit par le projet : document, maquette, site en ligne, application, etc.'
  },
  {
    id: 'q-lex-ext-10',
    question: 'Qu\'est-ce qu\'un arbitrage en gestion de projet ?',
    options: [
      'Un match de foot',
      'Décision pour trancher entre plusieurs options',
      'Une dispute',
      'Un conflit'
    ],
    correctAnswer: 1,
    explanation: 'L\'arbitrage est la prise de décision pour trancher entre plusieurs options, souvent concernant le triangle budget/délai/périmètre.'
  },
  {
    id: 'q-lex-ext-11',
    question: 'Qu\'est-ce qu\'un plan de charge ?',
    options: [
      'Un plan de salle de sport',
      'Répartition du travail entre les membres de l\'équipe',
      'Un schéma électrique',
      'Un emploi du temps vide'
    ],
    correctAnswer: 1,
    explanation: 'Le plan de charge répartit le travail à effectuer entre les membres de l\'équipe sur une période donnée.'
  },
  {
    id: 'q-lex-ext-12',
    question: 'Qu\'est-ce que la charge prévisionnelle ?',
    options: [
      'Le poids d\'un colis',
      'Temps estimé nécessaire pour réaliser une tâche',
      'Un prix',
      'Une facture'
    ],
    correctAnswer: 1,
    explanation: 'La charge prévisionnelle est l\'estimation du temps de travail nécessaire pour réaliser une tâche ou un ensemble de tâches.'
  },
  {
    id: 'q-lex-ext-13',
    question: 'Qu\'est-ce que le "reste à faire" ?',
    options: [
      'Les vacances',
      'Temps ou travail restant pour terminer une tâche',
      'Le déjeuner',
      'Les pauses'
    ],
    correctAnswer: 1,
    explanation: 'Le reste à faire (RAF) est l\'estimation du travail restant pour terminer une tâche ou le projet entier.'
  },
  {
    id: 'q-lex-ext-14',
    question: 'Qu\'est-ce qu\'une roadmap ?',
    options: [
      'Une carte routière',
      'Vision globale de l\'évolution du produit dans le temps',
      'Un GPS',
      'Un itinéraire'
    ],
    correctAnswer: 1,
    explanation: 'La roadmap est une vision stratégique et planifiée de l\'évolution du produit ou du projet à moyen et long terme.'
  },
  {
    id: 'q-lex-ext-15',
    question: 'Qu\'est-ce que la conduite du changement ?',
    options: [
      'Conduire une voiture',
      'Actions pour aider les utilisateurs à adopter une solution',
      'Changer de direction',
      'Modifier le code'
    ],
    correctAnswer: 1,
    explanation: 'La conduite du changement accompagne les utilisateurs dans l\'adoption d\'une nouvelle solution : formation, communication, support.'
  },
  {
    id: 'q-lex-ext-16',
    question: 'Qu\'est-ce qu\'une matrice de risques ?',
    options: [
      'Un film',
      'Tableau classant les risques selon probabilité et impact',
      'Une grille de loto',
      'Un jeu'
    ],
    correctAnswer: 1,
    explanation: 'La matrice de risques classe les risques identifiés selon deux axes : leur probabilité d\'occurrence et leur impact sur le projet.'
  },
  {
    id: 'q-lex-ext-17',
    question: 'Qu\'est-ce que la recette dans un projet ?',
    options: [
      'Un plat cuisiné',
      'Phase où l\'on vérifie que la solution respecte le cahier des charges',
      'Une facture',
      'Un paiement'
    ],
    correctAnswer: 1,
    explanation: 'La recette est la phase de validation où le client vérifie que la solution livrée correspond bien à ses attentes et au cahier des charges.'
  },
  {
    id: 'q-lex-ext-18',
    question: 'Qu\'est-ce qu\'un protocole de recette ?',
    options: [
      'Des règles de cuisine',
      'Document décrivant les tests et critères de validation',
      'Un livre',
      'Un contrat'
    ],
    correctAnswer: 1,
    explanation: 'Le protocole de recette liste tous les tests à effectuer et les critères pour valider ou refuser la solution.'
  },
  {
    id: 'q-lex-ext-19',
    question: 'Que sont les critères d\'acceptation ?',
    options: [
      'Des règles sociales',
      'Conditions pour considérer une fonctionnalité validée',
      'Des standards de qualité',
      'Des mesures'
    ],
    correctAnswer: 1,
    explanation: 'Les critères d\'acceptation définissent précisément les conditions qu\'une fonctionnalité doit remplir pour être considérée comme terminée.'
  },
  {
    id: 'q-lex-ext-20',
    question: 'Que signifie "mise en production" ?',
    options: [
      'Fabriquer un produit',
      'Mettre le site en ligne pour les vrais utilisateurs',
      'Créer une vidéo',
      'Produire un film'
    ],
    correctAnswer: 1,
    explanation: 'La mise en production est l\'action de déployer l\'application sur le serveur de production pour la rendre accessible aux utilisateurs finaux.'
  },
  {
    id: 'q-lex-ext-21',
    question: 'Qu\'est-ce que le versionning ?',
    options: [
      'Traduire des versions',
      'Gestion des différentes versions d\'un code dans le temps',
      'Vérifier',
      'Corriger'
    ],
    correctAnswer: 1,
    explanation: 'Le versionning (ou gestion de versions) permet de suivre et gérer les différentes versions d\'un code ou document au fil du temps.'
  },
  {
    id: 'q-lex-ext-22',
    question: 'Qu\'est-ce qu\'un rollback ?',
    options: [
      'Un retour en arrière',
      'Retour à une version précédente en cas de problème',
      'Un mouvement de gymnastique',
      'Une mise à jour'
    ],
    correctAnswer: 1,
    explanation: 'Le rollback permet de revenir à une version précédente stable de l\'application si un déploiement pose problème.'
  },
  {
    id: 'q-lex-ext-23',
    question: 'Qu\'est-ce qu\'une spec fonctionnelle ?',
    options: [
      'Une paire de lunettes',
      'Document décrivant ce que le système doit faire',
      'Un type de test',
      'Un bug'
    ],
    correctAnswer: 1,
    explanation: 'La spécification fonctionnelle décrit ce que le système doit faire du point de vue utilisateur et métier, sans entrer dans les détails techniques.'
  },
  {
    id: 'q-lex-ext-24',
    question: 'Qu\'est-ce qu\'une spec technique ?',
    options: [
      'Une compétence',
      'Document décrivant comment la solution sera réalisée',
      'Un outil',
      'Un langage'
    ],
    correctAnswer: 1,
    explanation: 'La spécification technique décrit comment la solution sera réalisée : architecture, technologies, structure de données, etc.'
  },
  {
    id: 'q-lex-ext-25',
    question: 'Qu\'est-ce qu\'un workflow ?',
    options: [
      'Un flux de travail',
      'Enchaînement des étapes d\'une tâche ou information',
      'Un sport',
      'Un outil'
    ],
    correctAnswer: 1,
    explanation: 'Le workflow définit l\'enchaînement logique des étapes par lesquelles passe une tâche, une information ou un processus.'
  },
  {
    id: 'q-lex-ext-26',
    question: 'Qu\'est-ce qu\'un environnement de développement ?',
    options: [
      'Un bureau',
      'Cadre technique où les développeurs travaillent et testent',
      'Une salle',
      'Un espace'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de développement est l\'espace technique où les développeurs codent et testent en local, isolé de la production.'
  },
  {
    id: 'q-lex-ext-27',
    question: 'Pourquoi a-t-on un environnement de production séparé ?',
    options: [
      'Pour le plaisir',
      'Car c\'est là que l\'application est utilisée par les vrais utilisateurs',
      'Pour dépenser plus',
      'Ce n\'est pas nécessaire'
    ],
    correctAnswer: 1,
    explanation: 'L\'environnement de production héberge l\'application utilisée par les vrais utilisateurs. Il doit être stable et sécurisé.'
  },

  // Section Communication et organisation
  {
    id: 'q-lex-ext-28',
    question: 'Qu\'est-ce qu\'un plan d\'action ?',
    options: [
      'Un film d\'action',
      'Liste structurée de tâches avec responsables et échéances',
      'Un planning vide',
      'Un compte rendu'
    ],
    correctAnswer: 1,
    explanation: 'Le plan d\'action liste les tâches à réaliser avec pour chacune un responsable, une échéance et éventuellement des ressources.'
  },
  {
    id: 'q-lex-ext-29',
    question: 'Qu\'est-ce que le reporting ?',
    options: [
      'Un rapport de police',
      'Communication régulière sur l\'avancement du projet',
      'Une plainte',
      'Un document'
    ],
    correctAnswer: 1,
    explanation: 'Le reporting est la communication régulière (souvent hebdomadaire) sur l\'avancement, les risques et les résultats du projet.'
  },
  {
    id: 'q-lex-ext-30',
    question: 'Qu\'est-ce que la communication asynchrone ?',
    options: [
      'Parler mal',
      'Échanges ne nécessitant pas la présence simultanée de tous',
      'Ne pas communiquer',
      'Téléphoner'
    ],
    correctAnswer: 1,
    explanation: 'La communication asynchrone (emails, messages, documents) ne nécessite pas que tout le monde soit présent en même temps.'
  },
  {
    id: 'q-lex-ext-31',
    question: 'Qu\'est-ce qu\'une réunion de suivi ?',
    options: [
      'Suivre quelqu\'un',
      'Réunion régulière pour faire le point sur l\'avancement',
      'Un espionnage',
      'Un contrôle'
    ],
    correctAnswer: 1,
    explanation: 'La réunion de suivi (ou comité de suivi) permet de faire régulièrement le point sur l\'avancement et les problèmes rencontrés.'
  },
  {
    id: 'q-lex-ext-32',
    question: 'Qu\'est-ce qu\'un atelier dans un projet ?',
    options: [
      'Un garage',
      'Session de travail collaboratif pour produire un livrable',
      'Un cours',
      'Une formation'
    ],
    correctAnswer: 1,
    explanation: 'Un atelier est une session de travail collaborative où l\'équipe et/ou le client produisent ensemble un livrable (maquettes, user stories, etc.).'
  },
  {
    id: 'q-lex-ext-33',
    question: 'Qu\'est-ce que la validation client ?',
    options: [
      'Complimenter le client',
      'Accord formel du client sur un livrable ou une étape',
      'Valider un paiement',
      'Approuver une facture'
    ],
    correctAnswer: 1,
    explanation: 'La validation client est l\'accord formel (souvent par écrit) du client sur un livrable ou l\'achèvement d\'une étape.'
  },
  {
    id: 'q-lex-ext-34',
    question: 'Qu\'est-ce qu\'une expression de besoin ?',
    options: [
      'Se plaindre',
      'Formulation claire de ce que le client veut obtenir',
      'Demander de l\'aide',
      'Négocier'
    ],
    correctAnswer: 1,
    explanation: 'L\'expression de besoin décrit clairement ce que le client souhaite obtenir grâce au projet, sans entrer dans la solution technique.'
  },
  {
    id: 'q-lex-ext-35',
    question: 'Qu\'est-ce qu\'un brief ?',
    options: [
      'Un sous-vêtement',
      'Document initial présentant le contexte et les attentes',
      'Un résumé',
      'Une conclusion'
    ],
    correctAnswer: 1,
    explanation: 'Le brief est un document ou échange initial qui présente le contexte, les objectifs et les attentes du projet de manière concise.'
  },
  {
    id: 'q-lex-ext-36',
    question: 'Qu\'est-ce que le cycle en V ?',
    options: [
      'Un circuit automobile',
      'Méthode de projet avec phases successives structurées',
      'Une forme géométrique',
      'Un bug'
    ],
    correctAnswer: 1,
    explanation: 'Le cycle en V est une méthode de gestion de projet séquentielle avec des phases bien définies et peu de retours en arrière.'
  },

  // Section UX/UI
  {
    id: 'q-lex-ext-37',
    question: 'Qu\'est-ce qu\'un persona ?',
    options: [
      'Une personne',
      'Profil utilisateur fictif représentant une cible',
      'Un masque',
      'Un personnage de jeu'
    ],
    correctAnswer: 1,
    explanation: 'Un persona est un profil utilisateur fictif mais réaliste qui représente un segment d\'utilisateurs cibles avec leurs besoins et comportements.'
  },
  {
    id: 'q-lex-ext-38',
    question: 'Qu\'est-ce qu\'un user flow ?',
    options: [
      'Un flux d\'eau',
      'Chemin suivi par un utilisateur pour atteindre un objectif',
      'Un courant',
      'Une rivière'
    ],
    correctAnswer: 1,
    explanation: 'Le user flow représente le parcours qu\'un utilisateur suit dans l\'interface pour accomplir une action ou atteindre un objectif.'
  },
  {
    id: 'q-lex-ext-39',
    question: 'Quelle est la différence entre wireframe et maquette ?',
    options: [
      'Aucune',
      'Wireframe = structure simple, Maquette = visuel détaillé',
      'Ils sont identiques',
      'Wireframe = couleur, Maquette = noir et blanc'
    ],
    correctAnswer: 1,
    explanation: 'Le wireframe est un schéma structural sans détails graphiques, la maquette est une représentation visuelle détaillée et proche du rendu final.'
  },
  {
    id: 'q-lex-ext-40',
    question: 'Qu\'est-ce qu\'un prototype ?',
    options: [
      'Un premier exemplaire',
      'Version interactive d\'une maquette simulant la navigation',
      'Un modèle réduit',
      'Un test'
    ],
    correctAnswer: 1,
    explanation: 'Le prototype est une version interactive d\'une maquette qui permet de simuler la navigation et tester l\'expérience utilisateur.'
  },
  {
    id: 'q-lex-ext-41',
    question: 'Qu\'est-ce que la hiérarchie visuelle ?',
    options: [
      'Un organigramme',
      'Organisation des éléments pour guider le regard',
      'Un classement',
      'Une liste'
    ],
    correctAnswer: 1,
    explanation: 'La hiérarchie visuelle organise les éléments d\'une interface pour guider naturellement le regard et la compréhension de l\'utilisateur.'
  },
  {
    id: 'q-lex-ext-42',
    question: 'Qu\'est-ce que le zoning ?',
    options: [
      'Une zone géographique',
      'Découpage d\'une page en zones principales',
      'Un quartier',
      'Une région'
    ],
    correctAnswer: 1,
    explanation: 'Le zoning découpe une page en grandes zones fonctionnelles (header, navigation, contenu principal, sidebar, footer).'
  },
  {
    id: 'q-lex-ext-43',
    question: 'Qu\'est-ce que l\'architecture de l\'information ?',
    options: [
      'Construire un bâtiment',
      'Organisation des contenus pour qu\'ils soient trouvables',
      'Un plan',
      'Un design'
    ],
    correctAnswer: 1,
    explanation: 'L\'architecture de l\'information organise et structure les contenus pour qu\'ils soient facilement trouvables et compréhensibles.'
  },
  {
    id: 'q-lex-ext-44',
    question: 'Qu\'est-ce qu\'un parcours utilisateur ?',
    options: [
      'Un chemin de randonnée',
      'Ensemble des étapes vécues par un utilisateur',
      'Un itinéraire',
      'Un trajet'
    ],
    correctAnswer: 1,
    explanation: 'Le parcours utilisateur décrit toutes les étapes vécues par un utilisateur avant, pendant et après l\'usage du site ou service.'
  },
  {
    id: 'q-lex-ext-45',
    question: 'Qu\'est-ce qu\'un composant en design ?',
    options: [
      'Une pièce détachée',
      'Élément d\'interface réutilisable',
      'Un ingrédient',
      'Un module'
    ],
    correctAnswer: 1,
    explanation: 'Un composant est un élément d\'interface réutilisable (bouton, carte, champ de formulaire) qui garantit la cohérence du design.'
  },
  {
    id: 'q-lex-ext-46',
    question: 'Qu\'est-ce qu\'un design system ?',
    options: [
      'Un système d\'exploitation',
      'Ensemble de règles et composants pour une interface cohérente',
      'Un logiciel',
      'Un outil'
    ],
    correctAnswer: 1,
    explanation: 'Le design system est une bibliothèque de composants, styles et règles qui garantit la cohérence de l\'interface sur tout le produit.'
  },
  {
    id: 'q-lex-ext-47',
    question: 'Pourquoi les contrastes sont-ils importants ?',
    options: [
      'Pour faire joli',
      'Pour améliorer la lisibilité et l\'accessibilité',
      'Ce n\'est pas important',
      'Pour économiser de l\'encre'
    ],
    correctAnswer: 1,
    explanation: 'Les contrastes suffisants entre texte et fond améliorent la lisibilité et rendent le site accessible aux personnes malvoyantes.'
  },
  {
    id: 'q-lex-ext-48',
    question: 'Qu\'est-ce que l\'ergonomie ?',
    options: [
      'L\'économie',
      'Qualité d\'un système à être efficace et confortable',
      'L\'écologie',
      'L\'énergie'
    ],
    correctAnswer: 1,
    explanation: 'L\'ergonomie évalue la facilité d\'usage, l\'efficacité et le confort d\'utilisation d\'un système ou interface.'
  },
  {
    id: 'q-lex-ext-49',
    question: 'Qu\'est-ce que le RGAA ?',
    options: [
      'Un CMS',
      'Référentiel français d\'accessibilité numérique',
      'Un langage',
      'Un framework'
    ],
    correctAnswer: 1,
    explanation: 'Le RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité) définit les règles d\'accessibilité numérique en France.'
  },
  {
    id: 'q-lex-ext-50',
    question: 'Qu\'est-ce qu\'un audit UX ?',
    options: [
      'Une vérification comptable',
      'Analyse critique d\'une interface pour repérer les problèmes',
      'Un contrôle fiscal',
      'Une inspection'
    ],
    correctAnswer: 1,
    explanation: 'L\'audit UX est une analyse systématique d\'une interface pour identifier les problèmes d\'expérience utilisateur et proposer des améliorations.'
  },

  // Section Technique
  {
    id: 'q-lex-ext-51',
    question: 'Quelle est la différence entre front-end et back-end ?',
    options: [
      'Aucune',
      'Front = partie visible, Back = logique serveur',
      'Front = serveur, Back = visible',
      'Identiques'
    ],
    correctAnswer: 1,
    explanation: 'Le front-end est la partie visible avec laquelle l\'utilisateur interagit. Le back-end gère la logique métier et les données côté serveur.'
  },
  {
    id: 'q-lex-ext-52',
    question: 'Qu\'est-ce qu\'une API ?',
    options: [
      'Un médicament',
      'Interface permettant à deux systèmes de communiquer',
      'Un virus',
      'Un langage'
    ],
    correctAnswer: 1,
    explanation: 'Une API (Application Programming Interface) permet à deux systèmes de communiquer et d\'échanger des données de manière standardisée.'
  },
  {
    id: 'q-lex-ext-53',
    question: 'À quoi sert une base de données ?',
    options: [
      'À rien',
      'À stocker et organiser les informations',
      'À afficher le site',
      'À décorer'
    ],
    correctAnswer: 1,
    explanation: 'La base de données stocke, organise et permet de récupérer efficacement toutes les informations du site ou de l\'application.'
  },
  {
    id: 'q-lex-ext-54',
    question: 'Qu\'est-ce qu\'un serveur ?',
    options: [
      'Un employé',
      'Machine qui héberge le site et répond aux requêtes',
      'Un garçon de café',
      'Un outil'
    ],
    correctAnswer: 1,
    explanation: 'Un serveur est une machine (physique ou virtuelle) qui héberge l\'application et répond aux requêtes des utilisateurs.'
  },
  {
    id: 'q-lex-ext-55',
    question: 'Qu\'est-ce que l\'hébergement web ?',
    options: [
      'Loger des touristes',
      'Service mettant à disposition un serveur pour le site',
      'Un hôtel',
      'Une location'
    ],
    correctAnswer: 1,
    explanation: 'L\'hébergement web est un service qui met à disposition un serveur et des ressources pour rendre un site accessible en ligne.'
  },
  {
    id: 'q-lex-ext-56',
    question: 'Qu\'est-ce que le DNS ?',
    options: [
      'Un test génétique',
      'Système qui relie un nom de domaine à une adresse IP',
      'Un laboratoire',
      'Un code'
    ],
    correctAnswer: 1,
    explanation: 'Le DNS (Domain Name System) traduit les noms de domaine lisibles (monsite.fr) en adresses IP comprises par les machines.'
  },
  {
    id: 'q-lex-ext-57',
    question: 'Qu\'est-ce que le SSL ?',
    options: [
      'Un langage',
      'Protocole qui sécurise les échanges',
      'Un framework',
      'Un CMS'
    ],
    correctAnswer: 1,
    explanation: 'SSL (Secure Sockets Layer) est un protocole de sécurité qui chiffre les échanges entre le navigateur et le serveur.'
  },
  {
    id: 'q-lex-ext-58',
    question: 'À quoi sert un certificat SSL ?',
    options: [
      'À décorer',
      'À activer le HTTPS et sécuriser un site',
      'À imprimer',
      'À encadrer'
    ],
    correctAnswer: 1,
    explanation: 'Le certificat SSL permet d\'activer le protocole HTTPS qui chiffre les communications et authentifie le site.'
  },
  {
    id: 'q-lex-ext-59',
    question: 'Qu\'est-ce qu\'un nom de domaine ?',
    options: [
      'Un prénom',
      'Adresse web lisible (ex: monsite.fr)',
      'Un titre',
      'Un surnom'
    ],
    correctAnswer: 1,
    explanation: 'Le nom de domaine est l\'adresse web lisible par l\'humain qui permet d\'accéder à un site (ex: google.com).'
  },
  {
    id: 'q-lex-ext-60',
    question: 'À quoi sert le cache ?',
    options: [
      'À chercher',
      'À stocker temporairement des données pour accélérer l\'affichage',
      'À cacher des bugs',
      'À masquer'
    ],
    correctAnswer: 1,
    explanation: 'Le cache stocke temporairement des données fréquemment utilisées pour réduire le temps de chargement et améliorer les performances.'
  },
  {
    id: 'q-lex-ext-61',
    question: 'Qu\'est-ce que la compression de fichiers ?',
    options: [
      'Écraser des fichiers',
      'Réduction de la taille pour améliorer la vitesse',
      'Supprimer',
      'Cacher'
    ],
    correctAnswer: 1,
    explanation: 'La compression réduit la taille des fichiers (images, CSS, JS) pour diminuer le temps de chargement et la bande passante utilisée.'
  },
  {
    id: 'q-lex-ext-62',
    question: 'Qu\'est-ce que le code source ?',
    options: [
      'Un secret',
      'Ensemble des fichiers contenant les instructions du programme',
      'Une recette',
      'Une origine'
    ],
    correctAnswer: 1,
    explanation: 'Le code source est l\'ensemble des fichiers texte contenant les instructions écrites par les développeurs pour créer l\'application.'
  },
  {
    id: 'q-lex-ext-63',
    question: 'Qu\'est-ce que l\'intégration web ?',
    options: [
      'Intégrer une équipe',
      'Transformation des maquettes en pages HTML/CSS/JS',
      'Accepter',
      'Inclure'
    ],
    correctAnswer: 1,
    explanation: 'L\'intégration web consiste à transformer les maquettes graphiques en pages web fonctionnelles avec HTML, CSS et JavaScript.'
  },
  {
    id: 'q-lex-ext-64',
    question: 'Qu\'est-ce qu\'un framework ?',
    options: [
      'Un cadre photo',
      'Ensemble d\'outils pour faciliter le développement',
      'Une structure métallique',
      'Un bâtiment'
    ],
    correctAnswer: 1,
    explanation: 'Un framework est un ensemble structuré d\'outils, de conventions et de code réutilisable pour accélérer et standardiser le développement.'
  },
  {
    id: 'q-lex-ext-65',
    question: 'Qu\'est-ce qu\'une librairie en programmation ?',
    options: [
      'Une bibliothèque de livres',
      'Collection de fonctions réutilisables',
      'Un meuble',
      'Une boutique'
    ],
    correctAnswer: 1,
    explanation: 'Une librairie (ou bibliothèque) est une collection de fonctions ou composants réutilisables qu\'on peut intégrer dans un projet.'
  },
  {
    id: 'q-lex-ext-66',
    question: 'Qu\'est-ce qu\'un SGBD ?',
    options: [
      'Un acronyme aléatoire',
      'Logiciel qui gère la base de données',
      'Une maladie',
      'Un code'
    ],
    correctAnswer: 1,
    explanation: 'Un SGBD (Système de Gestion de Base de Données) est le logiciel qui gère le stockage, l\'accès et la sécurité des données.'
  },
  {
    id: 'q-lex-ext-67',
    question: 'Que sont les logs ?',
    options: [
      'Des bûches',
      'Fichiers enregistrant les événements et erreurs',
      'Des maisons',
      'Du bois'
    ],
    correctAnswer: 1,
    explanation: 'Les logs sont des fichiers qui enregistrent chronologiquement les événements, actions et erreurs d\'un système pour faciliter le débogage.'
  },
  {
    id: 'q-lex-ext-68',
    question: 'Qu\'est-ce que l\'infrastructure IT ?',
    options: [
      'Des routes',
      'Ensemble des composants matériels et logiciels',
      'Des ponts',
      'Des bâtiments'
    ],
    correctAnswer: 1,
    explanation: 'L\'infrastructure IT est l\'ensemble des composants matériels (serveurs, réseau) et logiciels qui supportent une application.'
  },

  // Section CMS et outils
  {
    id: 'q-lex-ext-69',
    question: 'Qu\'est-ce que WordPress ?',
    options: [
      'Un traitement de texte',
      'CMS très répandu pour sites vitrines et blogs',
      'Un jeu',
      'Un réseau social'
    ],
    correctAnswer: 1,
    explanation: 'WordPress est le CMS (Content Management System) le plus utilisé au monde pour créer des sites vitrines, blogs et même e-commerce.'
  },
  {
    id: 'q-lex-ext-70',
    question: 'Qu\'est-ce que PrestaShop ?',
    options: [
      'Une boutique',
      'CMS spécialisé dans les boutiques en ligne',
      'Un magasin',
      'Une enseigne'
    ],
    correctAnswer: 1,
    explanation: 'PrestaShop est un CMS français spécialisé dans la création et la gestion de boutiques e-commerce.'
  },
  {
    id: 'q-lex-ext-71',
    question: 'Qu\'est-ce qu\'une architecture headless ?',
    options: [
      'Sans tête',
      'Architecture où le front et le back sont séparés',
      'Décapitée',
      'Incomplète'
    ],
    correctAnswer: 1,
    explanation: 'L\'architecture headless sépare totalement le front-end du back-end qui communiquent uniquement via API, offrant plus de flexibilité.'
  },
  {
    id: 'q-lex-ext-72',
    question: 'Qu\'est-ce qu\'un theme dans un CMS ?',
    options: [
      'Un sujet',
      'Ensemble de fichiers définissant l\'apparence du site',
      'Un thème de discussion',
      'Une couleur'
    ],
    correctAnswer: 1,
    explanation: 'Un theme (ou thème) dans un CMS est un ensemble de fichiers qui définissent l\'apparence visuelle et la structure du site.'
  },
  {
    id: 'q-lex-ext-73',
    question: 'Qu\'est-ce qu\'un template ?',
    options: [
      'Un temple',
      'Modèle de page réutilisable',
      'Un bâtiment',
      'Une religion'
    ],
    correctAnswer: 1,
    explanation: 'Un template est un modèle de page ou de contenu réutilisable qui définit une structure commune pour plusieurs pages.'
  },
  {
    id: 'q-lex-ext-74',
    question: 'Qu\'est-ce qu\'un page builder ?',
    options: [
      'Un constructeur',
      'Outil visuel pour construire des pages sans coder',
      'Un ouvrier',
      'Un architecte'
    ],
    correctAnswer: 1,
    explanation: 'Un page builder est un outil WYSIWYG (What You See Is What You Get) qui permet de créer des pages visuellement sans écrire de code.'
  },
  {
    id: 'q-lex-ext-75',
    question: 'Qu\'est-ce que WooCommerce ?',
    options: [
      'Un réseau social',
      'Extension e-commerce de WordPress',
      'Un jeu vidéo',
      'Une marque'
    ],
    correctAnswer: 1,
    explanation: 'WooCommerce est l\'extension e-commerce la plus populaire de WordPress pour transformer un site en boutique en ligne.'
  },
  {
    id: 'q-lex-ext-76',
    question: 'Qu\'est-ce que Trello ?',
    options: [
      'Un jeu de cartes',
      'Outil de gestion de tâches en mode kanban',
      'Un sport',
      'Une ville'
    ],
    correctAnswer: 1,
    explanation: 'Trello est un outil de gestion de tâches visuel basé sur la méthode Kanban avec des tableaux, listes et cartes.'
  },
  {
    id: 'q-lex-ext-77',
    question: 'Qu\'est-ce que Notion ?',
    options: [
      'Une idée',
      'Outil polyvalent pour documentation et organisation',
      'Un concept',
      'Une pensée'
    ],
    correctAnswer: 1,
    explanation: 'Notion est un outil tout-en-un pour la documentation, la gestion de tâches, les bases de données et la collaboration d\'équipe.'
  },
  {
    id: 'q-lex-ext-78',
    question: 'Qu\'est-ce que Slack ?',
    options: [
      'Être paresseux',
      'Outil de messagerie d\'équipe',
      'Se détendre',
      'Ralentir'
    ],
    correctAnswer: 1,
    explanation: 'Slack est une plateforme de messagerie instantanée orientée travail qui permet de communiquer en équipe par canaux thématiques.'
  },
  {
    id: 'q-lex-ext-79',
    question: 'Qu\'est-ce que GitHub ?',
    options: [
      'Un réseau social',
      'Plateforme de gestion de code source',
      'Un forum',
      'Un blog'
    ],
    correctAnswer: 1,
    explanation: 'GitHub est une plateforme qui héberge le code source en utilisant Git et facilite la collaboration entre développeurs.'
  },

  // Section SEO
  {
    id: 'q-lex-ext-80',
    question: 'À quoi sert la balise title ?',
    options: [
      'À décorer',
      'Titre apparaissant dans l\'onglet et les résultats Google',
      'À cacher',
      'À colorier'
    ],
    correctAnswer: 1,
    explanation: 'La balise title définit le titre de la page qui apparaît dans l\'onglet du navigateur et comme titre dans les résultats de recherche.'
  },
  {
    id: 'q-lex-ext-81',
    question: 'Que sont les balises meta ?',
    options: [
      'Des étiquettes',
      'Informations aidant les moteurs de recherche',
      'Des autocollants',
      'Des codes-barres'
    ],
    correctAnswer: 1,
    explanation: 'Les balises meta sont des informations dans le code HTML qui aident les moteurs de recherche à comprendre le contenu de la page.'
  },
  {
    id: 'q-lex-ext-82',
    question: 'Pourquoi utiliser les balises H1, H2, H3 ?',
    options: [
      'Pour faire joli',
      'Pour structurer le contenu de manière hiérarchique',
      'Ce n\'est pas utile',
      'Pour les couleurs'
    ],
    correctAnswer: 1,
    explanation: 'Les balises H1 à H6 structurent hiérarchiquement le contenu, aidant les lecteurs et les moteurs de recherche à comprendre l\'organisation.'
  },
  {
    id: 'q-lex-ext-83',
    question: 'À quoi sert un sitemap.xml ?',
    options: [
      'À décorer',
      'À lister les pages pour faciliter l\'indexation',
      'À naviguer',
      'À chercher'
    ],
    correctAnswer: 1,
    explanation: 'Le sitemap.xml liste toutes les pages importantes du site pour aider les moteurs de recherche à les découvrir et les indexer.'
  },
  {
    id: 'q-lex-ext-84',
    question: 'Qu\'est-ce que le fichier robots.txt ?',
    options: [
      'Un fichier robot',
      'Fichier indiquant aux moteurs quelles zones explorer',
      'Un programme',
      'Un virus'
    ],
    correctAnswer: 1,
    explanation: 'Le robots.txt indique aux robots des moteurs de recherche quelles parties du site ils peuvent explorer ou doivent ignorer.'
  },
  {
    id: 'q-lex-ext-85',
    question: 'Qu\'est-ce que le maillage interne ?',
    options: [
      'Un filet de pêche',
      'Liens entre les pages d\'un même site',
      'Un tricot',
      'Une toile'
    ],
    correctAnswer: 1,
    explanation: 'Le maillage interne est l\'ensemble des liens entre les différentes pages d\'un même site, important pour la navigation et le SEO.'
  },
  {
    id: 'q-lex-ext-86',
    question: 'Qu\'est-ce qu\'un backlink ?',
    options: [
      'Un lien cassé',
      'Lien provenant d\'un autre site',
      'Un retour',
      'Une erreur'
    ],
    correctAnswer: 1,
    explanation: 'Un backlink est un lien provenant d\'un autre site qui pointe vers le vôtre, important pour le référencement et la crédibilité.'
  },
  {
    id: 'q-lex-ext-87',
    question: 'Que sont les Core Web Vitals ?',
    options: [
      'Des vitamines',
      'Indicateurs Google sur performance et stabilité',
      'Des organes',
      'Des médicaments'
    ],
    correctAnswer: 1,
    explanation: 'Les Core Web Vitals sont des indicateurs de Google mesurant la performance, la réactivité et la stabilité visuelle d\'une page.'
  },
  {
    id: 'q-lex-ext-88',
    question: 'Qu\'est-ce que l\'indexation ?',
    options: [
      'Classer des livres',
      'Enregistrement d\'une page dans l\'index d\'un moteur',
      'Numéroter',
      'Ranger'
    ],
    correctAnswer: 1,
    explanation: 'L\'indexation est le processus par lequel un moteur de recherche découvre, analyse et enregistre une page dans son index.'
  },
  {
    id: 'q-lex-ext-89',
    question: 'À quoi sert la balise canonical ?',
    options: [
      'À tirer au canon',
      'À indiquer la version principale d\'une page',
      'À exploser',
      'À détruire'
    ],
    correctAnswer: 1,
    explanation: 'La balise canonical indique aux moteurs de recherche quelle est la version principale d\'une page en cas de contenu dupliqué.'
  },
  {
    id: 'q-lex-ext-90',
    question: 'Qu\'est-ce qu\'une redirection 301 ?',
    options: [
      'Une erreur',
      'Redirection permanente d\'une URL vers une autre',
      'Un bug',
      'Un détour'
    ],
    correctAnswer: 1,
    explanation: 'La redirection 301 est une redirection permanente qui transfère le "jus SEO" d\'une ancienne URL vers une nouvelle.'
  },
  {
    id: 'q-lex-ext-91',
    question: 'À quoi sert l\'attribut alt d\'une image ?',
    options: [
      'À rien',
      'Description pour l\'accessibilité et le SEO',
      'À cacher',
      'À colorier'
    ],
    correctAnswer: 1,
    explanation: 'L\'attribut alt fournit une description textuelle de l\'image, utile pour l\'accessibilité (lecteurs d\'écran) et le référencement.'
  },
  {
    id: 'q-lex-ext-92',
    question: 'Qu\'est-ce que la longue traîne en SEO ?',
    options: [
      'Une comète',
      'Mots-clés longs et précis, moins concurrentiels',
      'Une robe',
      'Un animal'
    ],
    correctAnswer: 1,
    explanation: 'La longue traîne désigne les requêtes de recherche longues et spécifiques, moins recherchées mais plus qualifiées et moins concurrentielles.'
  },
  {
    id: 'q-lex-ext-93',
    question: 'Qu\'est-ce que l\'optimisation on-page ?',
    options: [
      'Mettre une page en ligne',
      'Actions d\'optimisation réalisées sur les pages',
      'Supprimer une page',
      'Cacher une page'
    ],
    correctAnswer: 1,
    explanation: 'L\'optimisation on-page regroupe toutes les actions réalisées directement sur les pages du site : balises, contenu, structure, vitesse.'
  },
  {
    id: 'q-lex-ext-94',
    question: 'Qu\'est-ce qu\'un contenu evergreen ?',
    options: [
      'Un contenu vert',
      'Contenu restant pertinent longtemps',
      'Une plante',
      'Un sapin'
    ],
    correctAnswer: 1,
    explanation: 'Un contenu evergreen est un contenu qui reste pertinent et utile dans la durée, continuant à attirer du trafic longtemps après sa publication.'
  },

  // Section Marketing digital
  {
    id: 'q-lex-ext-95',
    question: 'Qu\'est-ce qu\'un tunnel de conversion ?',
    options: [
      'Un tunnel routier',
      'Parcours menant un visiteur à une action clé',
      'Un métro',
      'Un passage'
    ],
    correctAnswer: 1,
    explanation: 'Le tunnel (ou funnel) de conversion est le parcours qu\'un visiteur suit depuis sa première visite jusqu\'à l\'action souhaitée (achat, inscription).'
  },
  {
    id: 'q-lex-ext-96',
    question: 'Qu\'est-ce que le taux de rebond ?',
    options: [
      'Un pourcentage de ballons',
      'Pourcentage de visiteurs quittant après une seule page',
      'Un taux d\'élasticité',
      'Un score sportif'
    ],
    correctAnswer: 1,
    explanation: 'Le taux de rebond mesure le pourcentage de visiteurs qui quittent le site après avoir consulté une seule page sans interaction.'
  },
  {
    id: 'q-lex-ext-97',
    question: 'Qu\'est-ce qu\'une landing page ?',
    options: [
      'Une page d\'accueil',
      'Page d\'atterrissage dédiée à un objectif précis',
      'Une piste d\'atterrissage',
      'Un aéroport'
    ],
    correctAnswer: 1,
    explanation: 'Une landing page est une page d\'atterrissage spécialement conçue pour convertir les visiteurs venant d\'une campagne marketing.'
  },
  {
    id: 'q-lex-ext-98',
    question: 'Qu\'est-ce que le content marketing ?',
    options: [
      'Vendre du contenu',
      'Stratégie de création de contenu utile pour attirer',
      'Acheter des articles',
      'Copier du texte'
    ],
    correctAnswer: 1,
    explanation: 'Le content marketing consiste à créer et diffuser du contenu utile et pertinent pour attirer, engager et fidéliser une audience.'
  },
  {
    id: 'q-lex-ext-99',
    question: 'Qu\'est-ce que l\'emailing ?',
    options: [
      'Lire ses emails',
      'Envoi de campagnes d\'e-mails ciblées',
      'Supprimer des emails',
      'Spammer'
    ],
    correctAnswer: 1,
    explanation: 'L\'emailing est l\'envoi de campagnes d\'e-mails ciblées à une base de contacts pour informer, promouvoir ou fidéliser.'
  },
  {
    id: 'q-lex-ext-100',
    question: 'Qu\'est-ce qu\'une campagne marketing ?',
    options: [
      'Des vacances',
      'Ensemble d\'actions planifiées pour un objectif',
      'Un voyage',
      'Une guerre'
    ],
    correctAnswer: 1,
    explanation: 'Une campagne est un ensemble coordonné d\'actions de communication et marketing planifiées pour atteindre un objectif précis.'
  },
  {
    id: 'q-lex-ext-101',
    question: 'Que sont les analytics ?',
    options: [
      'Des analyses médicales',
      'Données sur l\'usage d\'un site pour analyser le comportement',
      'Des statistiques sportives',
      'Des calculs'
    ],
    correctAnswer: 1,
    explanation: 'Les analytics sont les données collectées sur l\'utilisation d\'un site (visites, pages vues, conversions) permettant d\'analyser les comportements.'
  },
  {
    id: 'q-lex-ext-102',
    question: 'Qu\'est-ce que l\'acquisition en marketing ?',
    options: [
      'Acheter une entreprise',
      'Actions pour attirer de nouveaux visiteurs ou clients',
      'Acquérir des connaissances',
      'Posséder'
    ],
    correctAnswer: 1,
    explanation: 'L\'acquisition regroupe toutes les actions visant à attirer de nouveaux visiteurs ou clients (SEO, publicité, réseaux sociaux, etc.).'
  },
  {
    id: 'q-lex-ext-103',
    question: 'Qu\'est-ce que l\'engagement utilisateur ?',
    options: [
      'Se marier',
      'Interactions des utilisateurs avec le contenu',
      'Un contrat',
      'Une promesse'
    ],
    correctAnswer: 1,
    explanation: 'L\'engagement mesure l\'intensité des interactions des utilisateurs avec le contenu : clics, commentaires, partages, temps passé.'
  },
  {
    id: 'q-lex-ext-104',
    question: 'Qu\'est-ce que le tracking ?',
    options: [
      'Suivre une piste',
      'Mise en place d\'outils pour suivre le comportement',
      'Chasser',
      'Traquer'
    ],
    correctAnswer: 1,
    explanation: 'Le tracking est la mise en place de balises et outils (Google Analytics, pixels, etc.) pour suivre le comportement des utilisateurs.'
  },
  {
    id: 'q-lex-ext-105',
    question: 'Que sont les paramètres UTM ?',
    options: [
      'Des codes secrets',
      'Paramètres ajoutés à une URL pour identifier le trafic',
      'Des coordonnées GPS',
      'Des codes postaux'
    ],
    correctAnswer: 1,
    explanation: 'Les paramètres UTM sont ajoutés à une URL pour identifier précisément la source, le support et la campagne d\'origine du trafic.'
  },

  // Section Maintenance et support
  {
    id: 'q-lex-ext-106',
    question: 'Qu\'est-ce qu\'un ticket de support ?',
    options: [
      'Un billet de concert',
      'Demande ou incident enregistré',
      'Un ticket de métro',
      'Une contravention'
    ],
    correctAnswer: 1,
    explanation: 'Un ticket est une demande d\'assistance ou un incident enregistré dans un système de support pour assurer un suivi structuré.'
  },
  {
    id: 'q-lex-ext-107',
    question: 'Qu\'est-ce qu\'un bug ?',
    options: [
      'Un insecte',
      'Erreur ou comportement inattendu dans une application',
      'Une voiture',
      'Un microbe'
    ],
    correctAnswer: 1,
    explanation: 'Un bug est une erreur dans le code qui provoque un comportement inattendu ou incorrect de l\'application.'
  },
  {
    id: 'q-lex-ext-108',
    question: 'Qu\'est-ce qu\'un correctif ?',
    options: [
      'Un stylo',
      'Action ou mise à jour pour résoudre un bug',
      'Un examen',
      'Une correction'
    ],
    correctAnswer: 1,
    explanation: 'Un correctif (ou fix) est une modification du code visant à résoudre un bug ou un dysfonctionnement identifié.'
  },
  {
    id: 'q-lex-ext-109',
    question: 'Qu\'est-ce qu\'un incident IT ?',
    options: [
      'Un accident',
      'Événement dégradant ou interrompant le service',
      'Une catastrophe',
      'Un problème personnel'
    ],
    correctAnswer: 1,
    explanation: 'Un incident est un événement non planifié qui dégrade ou interrompt le service normal, nécessitant une intervention rapide.'
  },
  {
    id: 'q-lex-ext-110',
    question: 'Qu\'est-ce qu\'une feature ?',
    options: [
      'Une plume',
      'Fonctionnalité d\'un produit ou application',
      'Un film',
      'Une caractéristique physique'
    ],
    correctAnswer: 1,
    explanation: 'Une feature est une fonctionnalité, une capacité offerte par un produit ou une application aux utilisateurs.'
  },
  {
    id: 'q-lex-ext-111',
    question: 'Qu\'est-ce qu\'un SLA ?',
    options: [
      'Un sigle',
      'Accord définissant le niveau de service attendu',
      'Une organisation',
      'Un contrat quelconque'
    ],
    correctAnswer: 1,
    explanation: 'Un SLA (Service Level Agreement) est un engagement contractuel définissant le niveau de service attendu : disponibilité, temps de réponse, etc.'
  },
  {
    id: 'q-lex-ext-112',
    question: 'Qu\'est-ce qu\'un patch logiciel ?',
    options: [
      'Un pansement',
      'Petite mise à jour pour corriger un bug ou une faille',
      'Un autocollant',
      'Une rustine'
    ],
    correctAnswer: 1,
    explanation: 'Un patch est une petite mise à jour ciblée qui corrige rapidement un bug, une faille de sécurité ou un problème spécifique.'
  },

  // Section Sécurité
  {
    id: 'q-lex-ext-113',
    question: 'Qu\'est-ce que l\'authentification ?',
    options: [
      'Vérifier l\'authenticité d\'un objet',
      'Vérification de l\'identité d\'un utilisateur',
      'Un certificat',
      'Une signature'
    ],
    correctAnswer: 1,
    explanation: 'L\'authentification est le processus de vérification de l\'identité d\'un utilisateur avant de lui donner accès au système (login/password, etc.).'
  },
  {
    id: 'q-lex-ext-114',
    question: 'Qu\'est-ce que l\'autorisation ?',
    options: [
      'Une permission écrite',
      'Gestion des droits d\'un utilisateur sur les ressources',
      'Un permis',
      'Un accord'
    ],
    correctAnswer: 1,
    explanation: 'L\'autorisation détermine ce qu\'un utilisateur authentifié a le droit de faire : consulter, modifier, supprimer certaines ressources.'
  },
  {
    id: 'q-lex-ext-115',
    question: 'Qu\'est-ce que le chiffrement ?',
    options: [
      'Compter',
      'Transformation des données pour les rendre illisibles',
      'Calculer',
      'Numéroter'
    ],
    correctAnswer: 1,
    explanation: 'Le chiffrement transforme les données en un format illisible sans la clé de déchiffrement, protégeant ainsi la confidentialité.'
  },
  {
    id: 'q-lex-ext-116',
    question: 'Qu\'est-ce qu\'un firewall ?',
    options: [
      'Un mur de feu',
      'Système filtrant le trafic réseau',
      'Un incendie',
      'Une protection incendie'
    ],
    correctAnswer: 1,
    explanation: 'Un firewall (pare-feu) est un système de sécurité qui filtre le trafic réseau pour bloquer les accès non autorisés.'
  },
  {
    id: 'q-lex-ext-117',
    question: 'Pourquoi faire des sauvegardes ?',
    options: [
      'Pour occuper de l\'espace',
      'Pour restaurer les données en cas de problème',
      'Ce n\'est pas utile',
      'Pour perdre du temps'
    ],
    correctAnswer: 1,
    explanation: 'Les sauvegardes permettent de restaurer les données en cas de panne, erreur humaine, attaque ou désastre, assurant la continuité.'
  },
  {
    id: 'q-lex-ext-118',
    question: 'Qu\'est-ce que la restauration de données ?',
    options: [
      'Réparer un bâtiment',
      'Remettre en place des données depuis une sauvegarde',
      'Nettoyer',
      'Rénover'
    ],
    correctAnswer: 1,
    explanation: 'La restauration est l\'action de remettre en place des données à partir d\'une sauvegarde après une perte ou corruption.'
  },
  {
    id: 'q-lex-ext-119',
    question: 'Qu\'est-ce que la conformité RGPD ?',
    options: [
      'Respecter le code de la route',
      'Respecter les règles sur la protection des données',
      'Être poli',
      'Suivre la mode'
    ],
    correctAnswer: 1,
    explanation: 'La conformité RGPD signifie respecter le règlement européen sur la protection des données personnelles dans toutes les pratiques.'
  },
  {
    id: 'q-lex-ext-120',
    question: 'Que sont les données personnelles ?',
    options: [
      'Des secrets',
      'Informations permettant d\'identifier une personne',
      'Des opinions',
      'Des goûts'
    ],
    correctAnswer: 1,
    explanation: 'Les données personnelles sont toutes informations permettant d\'identifier directement ou indirectement une personne physique.'
  }
]


import { QuizQuestion } from './modules'

// Questions diversifiées : Vrai/Faux, Texte à trous, Scénarios
export const diverseQuizQuestions: QuizQuestion[] = [
  // ============================================
  // VRAI / FAUX (15 questions)
  // ============================================
  {
    id: 'q-tf-1',
    question: 'Le diagramme de Gantt est un outil issu de la méthodologie Agile.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Le diagramme de Gantt a été inventé par Henry Gantt dans les années 1910, bien avant l\'Agile. C\'est un outil de planification classique (Waterfall) qui affiche les tâches sur un axe temporel.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-tf-2',
    question: 'Un sprint Scrum dure obligatoirement 2 semaines.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Un sprint dure entre 1 et 4 semaines selon les équipes. 2 semaines est la durée la plus courante, mais ce n\'est pas une obligation du framework Scrum.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-tf-3',
    question: 'WordPress représente environ 40% de tous les sites web dans le monde.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 0,
    explanation: 'Vrai. WordPress alimente environ 43% de tous les sites web dans le monde (données 2024), ce qui en fait de loin le CMS le plus utilisé.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-tf-4',
    question: 'En méthode Agile, le client ne voit le produit qu\'à la fin du projet.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. C\'est l\'inverse ! L\'Agile implique le client à chaque fin de sprint (sprint review) pour obtenir du feedback régulier et ajuster le produit.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-tf-5',
    question: 'Le HTTPS est optionnel pour un site e-commerce.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Le HTTPS est absolument obligatoire pour tout site traitant des données personnelles ou des paiements. C\'est une exigence légale (RGPD) et technique (PCI-DSS pour les paiements).',
    type: 'true-false',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-tf-6',
    question: 'Un test unitaire vérifie le bon fonctionnement de l\'application complète.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Un test unitaire teste une seule fonction ou méthode de manière isolée. Les tests qui vérifient l\'application complète sont des tests end-to-end (E2E).',
    type: 'true-false',
    difficulty: 'facile',
    category: 'test-qualite'
  },
  {
    id: 'q-tf-7',
    question: 'Le Product Owner et le Scrum Master sont la même personne.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Ce sont deux rôles distincts en Scrum. Le Product Owner gère le backlog et représente le client. Le Scrum Master facilite le processus Scrum et aide l\'équipe à s\'améliorer. Cumuler les deux rôles crée un conflit d\'intérêts.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-tf-8',
    question: 'Un wireframe est une maquette graphique haute fidélité.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Un wireframe est un schéma basse fidélité (souvent en noir et blanc) qui représente la structure et le layout d\'une page sans le design visuel final. Les maquettes haute fidélité viennent après.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-tf-9',
    question: 'Le budget d\'un projet web est principalement constitué de coûts en ressources humaines.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 0,
    explanation: 'Vrai. Les ressources humaines représentent généralement 60 à 70% du budget total d\'un projet web (développeurs, designers, chefs de projet, testeurs).',
    type: 'true-false',
    difficulty: 'facile',
    category: 'budget'
  },
  {
    id: 'q-tf-10',
    question: 'La recette (UAT) est réalisée par l\'équipe de développement.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. La recette (User Acceptance Testing) est réalisée par le client ou les utilisateurs finaux. Son but est de valider que le produit répond aux besoins exprimés dans le cahier des charges.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'test-qualite'
  },
  {
    id: 'q-tf-11',
    question: 'Le SEO technique n\'a aucun impact sur l\'expérience utilisateur.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Le SEO technique (vitesse de chargement, mobile-friendly, structure du contenu) a un impact direct sur l\'expérience utilisateur. Google utilise d\'ailleurs les Core Web Vitals comme facteur de ranking.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-tf-12',
    question: 'Un persona est un vrai utilisateur interviewé pendant la phase de recherche.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Un persona est un profil fictif mais réaliste représentant un segment d\'utilisateurs cibles. Il est construit à partir de données réelles (interviews, analytics, études) mais n\'est pas une personne réelle.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-tf-13',
    question: 'En gestion de projet, le "scope creep" désigne l\'augmentation progressive du périmètre du projet.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 0,
    explanation: 'Vrai. Le scope creep (dérive du périmètre) est l\'ajout progressif et souvent non contrôlé de nouvelles fonctionnalités ou exigences qui n\'étaient pas dans le cahier des charges initial.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'q-tf-14',
    question: 'Un site éco-conçu est forcément moins performant visuellement.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. L\'éco-conception vise à réduire le poids et la consommation, pas la qualité visuelle. Un site éco-conçu est souvent plus rapide, plus épuré et offre une meilleure expérience utilisateur.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-tf-15',
    question: 'Le daily standup en Scrum doit durer exactement 15 minutes.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Faux. Le daily standup dure maximum 15 minutes, pas exactement 15. L\'objectif est d\'être bref et efficace. Si l\'équipe finit en 5 minutes, c\'est parfait.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'methodologie'
  },

  // ============================================
  // TEXTE À TROUS (15 questions)
  // ============================================
  {
    id: 'q-fb-1',
    question: 'La méthodologie _____ est basée sur des cycles courts de 2 à 4 semaines appelés sprints.',
    options: ['Scrum', 'Waterfall', 'PRINCE2', 'PERT'],
    correctAnswer: 0,
    explanation: 'Scrum est un framework Agile organisé en sprints (itérations de 2 à 4 semaines) avec des rôles définis (Product Owner, Scrum Master, équipe de développement).',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-fb-2',
    question: 'Le document qui formalise les besoins et objectifs d\'un projet est le _____.',
    options: ['Cahier des charges', 'Business plan', 'Rapport d\'activité', 'Plan de test'],
    correctAnswer: 0,
    explanation: 'Le cahier des charges (CDC) est le document fondamental qui décrit les besoins, objectifs, contraintes et livrables attendus d\'un projet.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'q-fb-3',
    question: 'Le format de user story est : "En tant que _____, je veux _____ afin de _____".',
    options: ['[utilisateur], [objectif], [bénéfice]', '[développeur], [code], [livraison]', '[client], [budget], [délai]', '[manager], [tâche], [résultat]'],
    correctAnswer: 0,
    explanation: 'La user story suit toujours ce format : "En tant que [type d\'utilisateur], je veux [objectif/action] afin de [bénéfice/valeur]". Elle capture le besoin du point de vue de l\'utilisateur.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'methodologie'
  },
  {
    id: 'q-fb-4',
    question: 'L\'indicateur _____ mesure la vitesse de consommation du budget d\'un projet.',
    options: ['Burn rate', 'ROI', 'NPS', 'KPI'],
    correctAnswer: 0,
    explanation: 'Le burn rate (taux de consommation) indique combien d\'argent est dépensé par unité de temps. Il permet de projeter la date à laquelle le budget sera épuisé.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'budget'
  },
  {
    id: 'q-fb-5',
    question: 'Le protocole _____ garantit que les données échangées entre le navigateur et le serveur sont chiffrées.',
    options: ['HTTPS', 'FTP', 'SMTP', 'DNS'],
    correctAnswer: 0,
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) utilise le chiffrement SSL/TLS pour sécuriser les communications entre le navigateur et le serveur web.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-fb-6',
    question: 'Les _____ sont des schémas basse fidélité représentant la structure d\'une page web.',
    options: ['Wireframes', 'Maquettes', 'Prototypes', 'Storyboards'],
    correctAnswer: 0,
    explanation: 'Les wireframes sont des représentations visuelles simplifiées (souvent en noir et blanc) qui montrent la structure, la hiérarchie de l\'information et la disposition des éléments sur une page.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'design-ux'
  },
  {
    id: 'q-fb-7',
    question: 'La technique d\'estimation _____ utilise des cartes pour que chaque membre de l\'équipe estime indépendamment.',
    options: ['Planning Poker', 'Delphi', 'PERT', 'Bottom-up'],
    correctAnswer: 0,
    explanation: 'Le Planning Poker est une technique d\'estimation Agile où chaque membre révèle simultanément sa carte (valeur en story points) pour éviter le biais d\'ancrage.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'q-fb-8',
    question: 'L\'outil _____ de Google permet d\'auditer la performance, l\'accessibilité et le SEO d\'une page web.',
    options: ['Lighthouse', 'Analytics', 'Search Console', 'Tag Manager'],
    correctAnswer: 0,
    explanation: 'Lighthouse est un outil d\'audit intégré à Chrome DevTools qui note la performance, l\'accessibilité, les bonnes pratiques, le SEO et la compatibilité PWA d\'une page.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-fb-9',
    question: 'Le _____ est un test réalisé par le client pour valider que le produit correspond au cahier des charges.',
    options: ['UAT (User Acceptance Testing)', 'Test unitaire', 'Test de charge', 'Test de régression'],
    correctAnswer: 0,
    explanation: 'Le UAT (User Acceptance Testing), ou recette en français, est la phase de validation par le client ou les utilisateurs finaux avant la mise en production.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'test-qualite'
  },
  {
    id: 'q-fb-10',
    question: 'Le _____ est le pourcentage de visiteurs qui quittent un site après avoir vu une seule page.',
    options: ['Taux de rebond', 'Taux de conversion', 'Taux d\'engagement', 'Taux de clic'],
    correctAnswer: 0,
    explanation: 'Le taux de rebond (bounce rate) mesure le pourcentage de sessions où l\'utilisateur quitte le site sans interagir au-delà de la première page. Un taux élevé indique un problème de contenu ou d\'UX.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'technique'
  },
  {
    id: 'q-fb-11',
    question: 'La redirection _____ indique aux moteurs de recherche qu\'une page a été déplacée de façon permanente.',
    options: ['301', '404', '302', '500'],
    correctAnswer: 0,
    explanation: 'La redirection 301 (Moved Permanently) transfère le jus SEO de l\'ancienne URL vers la nouvelle. C\'est essentiel lors d\'une migration de site pour ne pas perdre le référencement.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-fb-12',
    question: 'Le modèle de facturation _____ offre un prix fixe défini à l\'avance pour un scope précis.',
    options: ['Forfait', 'Régie', 'Time & Materials', 'Abonnement'],
    correctAnswer: 0,
    explanation: 'Le forfait fixe un prix global pour un périmètre défini. C\'est le modèle le plus prévisible pour le client mais le plus risqué pour le prestataire en cas de dépassement.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'budget'
  },
  {
    id: 'q-fb-13',
    question: 'L\'accessibilité web suit les recommandations _____ définies par le W3C.',
    options: ['WCAG', 'RGPD', 'ISO 9001', 'OWASP'],
    correctAnswer: 0,
    explanation: 'Les WCAG (Web Content Accessibility Guidelines) sont les recommandations internationales du W3C pour rendre le contenu web accessible aux personnes en situation de handicap.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'design-ux'
  },
  {
    id: 'q-fb-14',
    question: 'Le _____ est un environnement identique à la production utilisé pour les tests finaux.',
    options: ['Staging', 'Développement', 'Localhost', 'Sandbox'],
    correctAnswer: 0,
    explanation: 'L\'environnement de staging (pré-production) reproduit exactement les conditions de production pour effectuer les derniers tests avant le déploiement réel.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'technique'
  },
  {
    id: 'q-fb-15',
    question: 'Le principe _____ consiste à concevoir d\'abord pour mobile puis adapter pour desktop.',
    options: ['Mobile-first', 'Desktop-first', 'Responsive-first', 'Progressive enhancement'],
    correctAnswer: 0,
    explanation: 'L\'approche mobile-first consiste à concevoir d\'abord l\'expérience mobile (plus contraignante) puis à l\'enrichir progressivement pour les écrans plus grands.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'design-ux'
  },

  // ============================================
  // SCÉNARIOS (20 questions)
  // ============================================
  {
    id: 'q-sc-1',
    question: 'Quelle est votre première action en tant que chef de projet ?',
    options: [
      'Organiser une réunion d\'urgence avec toute l\'équipe pour recadrer le projet',
      'Envoyer un email au client pour lui dire que c\'est impossible',
      'Ajouter des développeurs au projet pour rattraper le retard',
      'Ignorer le problème et espérer que l\'équipe se rattrape'
    ],
    correctAnswer: 0,
    explanation: 'La première action est de comprendre la situation avec l\'équipe : identifier les causes du retard, évaluer l\'impact réel, et définir un plan d\'action. Ajouter des développeurs (loi de Brooks) ralentit souvent le projet. Il faut d\'abord diagnostiquer avant d\'agir.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Vous êtes chef de projet sur un site e-commerce. À mi-parcours du projet (mois 2 sur 4), vous constatez que l\'équipe a accumulé 3 semaines de retard. Le client attend une démo la semaine prochaine et le budget est déjà consommé à 60%.'
  },
  {
    id: 'q-sc-2',
    question: 'Quelle approche recommandez-vous au client ?',
    options: [
      'Développer sur mesure avec React + Node.js pour une flexibilité maximale',
      'Utiliser WordPress avec WooCommerce pour rester dans le budget et les délais',
      'Proposer Shopify pour le lancement rapide et migrer vers du sur-mesure plus tard',
      'Refuser le projet car le budget est insuffisant'
    ],
    correctAnswer: 1,
    explanation: 'Avec 8 000€ et 6 semaines, le développement sur mesure est irréaliste (coûterait 25 000€+). WordPress + WooCommerce permet de livrer dans le budget avec un CMS que le client peut gérer lui-même. Shopify serait aussi viable mais les frais mensuels réduisent le budget disponible pour le design.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'technique',
    scenarioContext: 'Un artisan boulanger souhaite vendre ses produits en ligne. Il a un budget de 8 000€ et veut être opérationnel dans 6 semaines. Il a 50 produits, besoin de click & collect et de paiement en ligne. Il veut pouvoir mettre à jour ses produits lui-même.'
  },
  {
    id: 'q-sc-3',
    question: 'Comment classifiez-vous ces bugs pour la priorisation ?',
    options: [
      'Tous en priorité haute car ils bloquent la mise en production',
      'Paiement = bloquant, responsive = majeur, faute = mineur',
      'Responsive = bloquant, paiement = majeur, faute = mineur',
      'Faute = bloquant, paiement = majeur, responsive = mineur'
    ],
    correctAnswer: 1,
    explanation: 'Le paiement qui échoue est un bug bloquant (empêche la fonction core du site). Le responsive cassé sur iPhone est majeur (affecte un large segment d\'utilisateurs). La faute d\'orthographe est mineure (n\'impacte pas la fonctionnalité). Cette classification permet de prioriser les corrections.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'test-qualite',
    scenarioContext: 'Pendant la recette d\'un site e-commerce, le client remonte 3 bugs : (1) Le paiement par carte bancaire échoue sur Safari, (2) La page d\'accueil n\'est pas responsive sur iPhone 14, (3) Une faute d\'orthographe sur la page "À propos".'
  },
  {
    id: 'q-sc-4',
    question: 'Comment gérez-vous cette situation ?',
    options: [
      'Accepter toutes les demandes pour satisfaire le client',
      'Refuser catégoriquement toute modification non prévue au CDC',
      'Documenter les demandes, les chiffrer, et proposer un avenant ou un backlog V2',
      'Demander au développeur d\'intégrer les changements en heures supplémentaires'
    ],
    correctAnswer: 2,
    explanation: 'La bonne approche est de documenter chaque demande, estimer son impact (temps, budget), et proposer au client : soit un avenant (budget supplémentaire), soit un report en V2 avec des priorités. Cela évite le scope creep tout en montrant que vous êtes à l\'écoute.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Le client d\'un projet web (budget 30 000€, forfait signé) commence à demander des fonctionnalités qui n\'étaient pas dans le cahier des charges : "Est-ce qu\'on pourrait ajouter un chat en ligne ?", "J\'aimerais aussi une newsletter", "Finalement, il faudrait aussi une version en anglais".'
  },
  {
    id: 'q-sc-5',
    question: 'Quelle est votre recommandation stratégique ?',
    options: [
      'Tout déployer d\'un coup le jour J pour maximiser l\'impact',
      'Lancer en beta fermée avec 100 utilisateurs, puis ouvrir progressivement',
      'Reporter le lancement de 2 mois pour ajouter plus de fonctionnalités',
      'Lancer uniquement la version mobile car c\'est la tendance'
    ],
    correctAnswer: 1,
    explanation: 'Le lancement progressif (beta fermée puis ouverture graduelle) permet de détecter les bugs en conditions réelles avec un impact limité, de collecter du feedback utilisateur pour itérer rapidement, et d\'absorber la montée en charge progressivement. Un big bang augmente tous les risques.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Votre équipe termine le développement d\'une plateforme de réservation en ligne pour une chaîne de restaurants (15 établissements). Le site est testé et validé en staging. Le client veut lancer pour les fêtes de fin d\'année, dans 3 semaines.'
  },
  {
    id: 'q-sc-6',
    question: 'Quel outil de maquettage recommandez-vous et pourquoi ?',
    options: [
      'Photoshop : c\'est l\'outil le plus connu des designers',
      'Figma : collaboratif, gratuit, prototypage intégré, standard de l\'industrie',
      'PowerPoint : tout le monde sait l\'utiliser dans l\'entreprise',
      'Coder directement en HTML/CSS : c\'est plus rapide'
    ],
    correctAnswer: 1,
    explanation: 'Figma est devenu le standard de l\'industrie pour le design web car il est collaboratif en temps réel (comme Google Docs), gratuit pour les petites équipes, intègre le prototypage interactif, et facilite le handoff développeur avec l\'inspection des styles.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'design-ux',
    scenarioContext: 'Vous devez choisir un outil de conception pour un projet web impliquant 1 designer, 2 développeurs et 1 chef de projet. L\'équipe travaille en remote et le client veut pouvoir commenter les maquettes directement.'
  },
  {
    id: 'q-sc-7',
    question: 'Quelle méthodologie recommandez-vous ?',
    options: [
      'Waterfall : le client sait exactement ce qu\'il veut, pas besoin d\'itérer',
      'Scrum : sprints de 2 semaines avec démos régulières au client',
      'Kanban : pas de sprints, on traite les tâches au fil de l\'eau',
      'Aucune méthodologie : chacun travaille comme il veut'
    ],
    correctAnswer: 1,
    explanation: 'Scrum est idéal ici : le budget est confortable pour itérer, l\'équipe est expérimentée, et le MVP permet de livrer de la valeur rapidement. Les sprints de 2 semaines avec démos permettent au client de voir l\'avancement et d\'ajuster les priorités.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'methodologie',
    scenarioContext: 'Nouveau projet : une application SaaS de gestion RH pour PME. Budget 60 000€, équipe de 4 personnes (1 PM, 2 devs, 1 designer), durée 5 mois. Le client a une vision claire mais souhaite voir des résultats rapidement. L\'objectif est de livrer un MVP en 3 mois.'
  },
  {
    id: 'q-sc-8',
    question: 'Quelle est la meilleure approche de test ?',
    options: [
      'Tester uniquement le parcours principal (inscription → recherche → réservation → paiement)',
      'Écrire des tests unitaires pour chaque fonction puis des tests E2E pour les parcours critiques',
      'Demander au client de tester lui-même, il connaît mieux son produit',
      'Ne tester que manuellement, les tests automatisés prennent trop de temps'
    ],
    correctAnswer: 1,
    explanation: 'La stratégie optimale combine les tests unitaires (chaque fonction isolée), les tests d\'intégration (composants ensemble), et les tests E2E (parcours utilisateur complets). Cela suit la pyramide des tests : beaucoup d\'unitaires, moins d\'intégration, encore moins d\'E2E.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'test-qualite',
    scenarioContext: 'Vous développez une application de réservation d\'hôtels avec 3 types d\'utilisateurs (voyageur, hôtelier, admin). L\'application gère les paiements, les avis, les annulations et les notifications. Le lancement est dans 6 semaines.'
  },
  {
    id: 'q-sc-9',
    question: 'Comment priorisez-vous les actions d\'optimisation ?',
    options: [
      'Refaire le design du site pour le rendre plus attractif',
      'Optimiser les images, activer le cache, et réduire les scripts tiers',
      'Changer d\'hébergeur pour un serveur plus puissant',
      'Ajouter plus de contenu pour améliorer le SEO'
    ],
    correctAnswer: 1,
    explanation: 'Les quick wins techniques (images, cache, scripts) ont le meilleur rapport effort/impact. Passer de 6s à 2s de chargement peut réduire le taux de rebond de 30%. Un serveur plus puissant ne résout pas un problème d\'images non optimisées ou de scripts superflus.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'technique',
    scenarioContext: 'L\'analyse Lighthouse d\'un site vitrine révèle : Performance 35/100, LCP (Largest Contentful Paint) de 6 secondes, 15 images non optimisées (format PNG, 2-3 MB chacune), 10 scripts tiers, pas de cache navigateur configuré.'
  },
  {
    id: 'q-sc-10',
    question: 'Quelle solution proposez-vous pour le budget ?',
    options: [
      'Réduire les fonctionnalités pour tenir dans le budget initial',
      'Proposer un paiement échelonné : 30% signature, 30% MVP, 30% livraison, 10% garantie',
      'Refuser le projet, le budget est trop serré',
      'Accepter le projet et absorber la perte pour fidéliser le client'
    ],
    correctAnswer: 1,
    explanation: 'Le paiement échelonné protège les deux parties : le client paie au fur et à mesure des livrables validés, et l\'agence sécurise sa trésorerie. Avec 30% à la signature (4 500€), l\'agence peut démarrer sans risque. La phase de 10% en garantie assure un suivi post-livraison.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'budget',
    scenarioContext: 'Un client PME souhaite un site vitrine de 15 pages avec formulaire de contact et blog. Son budget est de 15 000€. Après estimation, le coût réel serait de 12 000€ en développement + 2 000€ en design + 1 500€ en contenu. Le client demande aussi 6 mois de maintenance inclus.'
  },
  {
    id: 'q-sc-11',
    question: 'Que faites-vous en priorité ?',
    options: [
      'Demander au développeur de corriger directement en production',
      'Activer le plan de rollback pour revenir à la version précédente, puis investiguer',
      'Éteindre le serveur pour éviter d\'aggraver la situation',
      'Envoyer un email au client pour l\'informer du problème'
    ],
    correctAnswer: 1,
    explanation: 'Le rollback immédiat est la priorité : rétablir la version précédente qui fonctionnait. Corriger en production directement est risqué (on peut aggraver). Ensuite, on investigue calmement en staging, on corrige, on re-teste, et on redéploie proprement.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Vendredi 17h : le déploiement de la nouvelle version du site vient de casser le tunnel de paiement. Les commandes ne passent plus. Le site reçoit 500 commandes par jour. L\'équipe technique est encore disponible.'
  },
  {
    id: 'q-sc-12',
    question: 'Comment abordez-vous la migration ?',
    options: [
      'Copier-coller le contenu de l\'ancien site vers le nouveau',
      'Faire un audit SEO complet, mapper toutes les URLs, planifier les redirections 301',
      'Supprimer l\'ancien site et mettre le nouveau en ligne directement',
      'Demander au client de réécrire tout son contenu'
    ],
    correctAnswer: 1,
    explanation: 'Une migration SEO nécessite : un audit complet de l\'existant (pages, URLs, backlinks, ranking), un mapping ancien→nouveau pour chaque URL, des redirections 301 systématiques, et un monitoring intensif post-migration. Sans cela, le client peut perdre 50% de son trafic organique.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'technique',
    scenarioContext: 'Votre client migre son site de WordPress vers une solution Next.js headless. Le site actuel a 200 pages, est bien référencé (page 1 de Google pour 15 mots-clés), et reçoit 50 000 visites organiques par mois. Le client est inquiet de perdre son référencement.'
  },
  {
    id: 'q-sc-13',
    question: 'Quelle est la meilleure façon de gérer cette rétrospective ?',
    options: [
      'Pointer les responsables des retards pour qu\'ils se sentent redevables',
      'Utiliser le format "Start/Stop/Continue" pour identifier les améliorations sans blâmer',
      'Annuler la rétrospective, l\'équipe est démotivée',
      'Demander au manager de sanctionner les retardataires'
    ],
    correctAnswer: 1,
    explanation: 'Le format Start/Stop/Continue est constructif : "Que doit-on commencer à faire ? Que doit-on arrêter ? Que doit-on continuer ?" Il se concentre sur les processus plutôt que sur les personnes, favorise le dialogue et l\'amélioration continue sans créer de culpabilité.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'methodologie',
    scenarioContext: 'Fin du sprint 3 sur 8. L\'équipe a livré 80% des user stories prévues. Le moral est correct mais les daily standups sont devenus trop longs (30 min au lieu de 15) et certains développeurs ne respectent pas les conventions de code.'
  },
  {
    id: 'q-sc-14',
    question: 'Quelle stratégie d\'hébergement recommandez-vous ?',
    options: [
      'Un serveur mutualisé OVH à 5€/mois, c\'est largement suffisant',
      'Une architecture cloud scalable (Vercel/AWS) avec CDN et autoscaling',
      'Un serveur dédié à 200€/mois chez un hébergeur local',
      'Héberger le site sur son propre serveur au bureau'
    ],
    correctAnswer: 1,
    explanation: 'Pour un site avec des pics de trafic prévisibles, une architecture cloud avec autoscaling est essentielle. Vercel/AWS gèrent les pics automatiquement. Un mutualisé à 5€/mois crasherait sous la charge. Le CDN distribue le contenu géographiquement pour une latence minimale.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'technique',
    scenarioContext: 'Votre client lance une campagne TV nationale pour son site e-commerce. Il prévoit un pic de trafic ×10 pendant 48h (passage de 5 000 à 50 000 visiteurs/jour). Le site est actuellement hébergé sur un serveur mutualisé standard.'
  },
  {
    id: 'q-sc-15',
    question: 'Quel est le principal risque de cette approche et comment le mitigez-vous ?',
    options: [
      'Le risque technique : tester avec un prototype avant de coder',
      'Le risque budget : le client va demander plus que prévu, prévoir un avenant',
      'Le risque d\'adoption : les utilisateurs internes ne vont pas utiliser l\'outil, prévoir de la formation',
      'Le risque de sécurité : les données RH sont sensibles, auditer la sécurité en priorité'
    ],
    correctAnswer: 2,
    explanation: 'Le principal risque d\'un outil interne est l\'adoption. Si les utilisateurs ne l\'utilisent pas, tout le projet est un échec. La mitigation : impliquer les utilisateurs dès la conception (ateliers), former les utilisateurs, prévoir des "champions" internes, et mesurer l\'adoption.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Vous développez un intranet de gestion des congés et notes de frais pour une entreprise de 200 personnes. L\'ancienne solution est un tableur Excel partagé. Les employés ont entre 25 et 60 ans et des niveaux de confort numérique très variés.'
  },
  {
    id: 'q-sc-16',
    question: 'Comment gérez-vous cette situation avec le designer ?',
    options: [
      'Imposer les maquettes telles quelles, le design est validé par le client',
      'Organiser un atelier technique design+dev pour trouver des compromis réalistes',
      'Demander au designer de tout refaire en respectant les contraintes techniques',
      'Coder les maquettes telles quelles même si c\'est techniquement complexe'
    ],
    correctAnswer: 1,
    explanation: 'L\'atelier collaboratif est la meilleure approche : le designer explique ses choix UX, le développeur explique les contraintes techniques, et ensemble ils trouvent des solutions qui préservent l\'expérience utilisateur tout en restant réalisables. C\'est la base du Design System.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'design-ux',
    scenarioContext: 'Le designer livre des maquettes avec des animations complexes, des micro-interactions élaborées et un layout qui ne suit pas les conventions CSS standard. Le développeur front-end estime que l\'intégration prendrait 3x plus de temps que prévu.'
  },
  {
    id: 'q-sc-17',
    question: 'Comment structurez-vous votre proposition commerciale ?',
    options: [
      'Un devis unique à 45 000€ avec toutes les fonctionnalités',
      'Deux offres : MVP à 25 000€ (3 mois) + Phase 2 à 20 000€ (2 mois)',
      'Proposer un tarif horaire et voir comment le projet évolue',
      'Diviser en 5 lots indépendants que le client peut choisir à la carte'
    ],
    correctAnswer: 1,
    explanation: 'L\'approche en 2 phases est la plus intelligente : le MVP permet de livrer rapidement de la valeur, de valider les hypothèses avec de vrais utilisateurs, et de sécuriser le budget. La Phase 2 peut ensuite être ajustée selon les retours du MVP.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'budget',
    scenarioContext: 'Un client startup vous demande de chiffrer une plateforme de mise en relation entre freelances et entreprises. Il a listé 25 fonctionnalités. Son budget est de 45 000€ et il veut un lancement dans 5 mois.'
  },
  {
    id: 'q-sc-18',
    question: 'Quelle approche de test d\'accessibilité recommandez-vous ?',
    options: [
      'Utiliser uniquement un outil automatisé (axe DevTools) et corriger ce qu\'il trouve',
      'Combiner tests automatisés (axe) + tests manuels clavier + tests avec lecteur d\'écran',
      'Demander à un utilisateur malvoyant de tester le site',
      'Vérifier uniquement le contraste des couleurs et les alt des images'
    ],
    correctAnswer: 1,
    explanation: 'Les outils automatisés ne détectent que 30-40% des problèmes d\'accessibilité. Il faut compléter avec des tests manuels (navigation clavier, ordre de lecture) et des tests avec lecteur d\'écran (VoiceOver, NVDA). C\'est cette combinaison qui assure la conformité WCAG.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'design-ux',
    scenarioContext: 'Votre client est une administration publique qui doit rendre son site conforme RGAA (Référentiel Général d\'Amélioration de l\'Accessibilité), équivalent français du WCAG 2.1 AA. Le site actuel n\'a jamais été audité.'
  },
  {
    id: 'q-sc-19',
    question: 'Comment réduisez-vous l\'impact environnemental du site ?',
    options: [
      'Supprimer toutes les images et vidéos du site',
      'Optimiser les médias (WebP, lazy loading), réduire les scripts, choisir un hébergeur vert',
      'Limiter le nombre de pages à 5 maximum',
      'Afficher un message demandant aux utilisateurs de limiter leur navigation'
    ],
    correctAnswer: 1,
    explanation: 'L\'éco-conception web ne signifie pas supprimer le contenu, mais l\'optimiser. Les images en WebP/AVIF pèsent 50-80% de moins, le lazy loading ne charge que ce qui est visible, et un hébergeur vert (Infomaniak, PlanetHoster) utilise des énergies renouvelables.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'technique',
    scenarioContext: 'Votre client, une marque de cosmétiques bio, souhaite que son nouveau site soit éco-responsable en cohérence avec ses valeurs. Le site contient un catalogue de 200 produits avec photos et vidéos de démonstration.'
  },
  {
    id: 'q-sc-20',
    question: 'Quelle est votre recommandation pour la gestion du contenu ?',
    options: [
      'Tout gérer en code : le développeur met à jour les textes directement',
      'Utiliser un CMS headless (Strapi/Sanity) avec un front React',
      'Créer une interface admin sur mesure pour les mises à jour',
      'Utiliser un Google Sheet comme base de données de contenu'
    ],
    correctAnswer: 1,
    explanation: 'Un CMS headless est le meilleur compromis : le client a une interface simple pour gérer son contenu (comme WordPress), et les développeurs gardent la liberté technique du front en React. Strapi est open source et gratuit. Sanity a un tier gratuit généreux.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'technique',
    scenarioContext: 'Vous développez un site vitrine en React pour un cabinet d\'architectes. Le client veut pouvoir modifier les textes, ajouter des projets à son portfolio et publier des actualités lui-même, sans intervention technique. L\'équipe front travaille en React/Next.js.'
  }
]

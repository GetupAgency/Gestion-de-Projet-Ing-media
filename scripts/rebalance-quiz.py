"""Rééquilibre la longueur des options de QCM : la bonne réponse ne doit plus être systématiquement la plus longue.
Usage : python3 scripts/rebalance-quiz.py  (patche les fichiers data/*.ts en place)"""
import re, pathlib, sys

NEW = {
# ---------- modules ----------
'q-intro-1': ['Le nombre de pages et de gabarits différents', 'La technologie et l’hébergement retenus', 'Le degré de personnalisation des fonctionnalités', 'Le budget et le délai de réalisation'],
'q-intro-2': ['Le nombre total de visiteurs uniques sur une période', 'Le temps moyen passé sur le site par visite', 'Le pourcentage de visiteurs qui quittent le site sans interagir', 'La part des visiteurs qui font l’action attendue'],
'q-intro-3': ['Plan de test et scénarios de recette', 'Facture EDF du serveur', 'Maquettes graphiques validées', 'Cahier des charges signé'],
'q-intro-5': ['Le nombre de formulaires envoyés chaque mois', 'Le temps de chargement des pages principales', 'Le taux de rebond mesuré dans Analytics', 'Les positions SEO et le trafic organique'],
'q-intro-6': ['6 mois, avec un mois de recette', '1 an, réparti en quatre lots', '4 à 8 semaines', '1 à 2 jours avec un thème prêt à l’emploi'],
'q-intro-7': ['Un produit fini livré à un client', 'Un département permanent dans l’organigramme d’une entreprise', 'Une activité récurrente sans échéance', 'Un effort temporaire, avec un début et une fin'],
'q3': ['Augmenter le budget du projet et la marge de l’agence', 'Formaliser les besoins et fixer un référentiel commun', 'Impressionner le client par le volume du document', 'Remplacer les réunions de suivi par un document unique'],
'q-cdc-3': ['Ce n’est pas important, on repart toujours de zéro', 'Pour augmenter le budget en montrant tout ce qu’il y a à refaire', 'Pour repérer ce qui est réutilisable et mesurer l’ampleur du chantier', 'Pour impressionner le client avec un audit complet et illustré'],
'q-cdc-4': ['Un concurrent direct analysé dans le benchmark', 'Un outil de gestion des tâches par colonnes', 'Un employé de l’entreprise interrogé pendant le cadrage', 'Un profil utilisateur fictif représentant une cible'],
'q-cdc-5': ['Début + Milieu + Fin, comme un scénario', 'Contexte + Problème + Solution proposée + Résultat attendu + Responsable', 'Titre + Description + Estimation en points', 'En tant que [utilisateur], je veux [objectif] afin de [bénéfice]'],
'q-planning-1': ['Un outil de gestion partagé avec le client', 'Une tâche quotidienne de l’équipe technique', 'Une réunion d’équipe hebdomadaire de 30 minutes', 'Un événement clé marquant une étape importante'],
'q-planning-2': ['6 mois, comme une phase de cycle en V', '3 mois, soit un trimestre', '2 à 4 semaines', '1 journée, comme un daily'],
'q-planning-3': ['Un framework de développement côté serveur', 'Un type de base de données relationnelle', 'Un outil de communication avec le client', 'Un graphique des tâches dans le temps'],
'q-planning-6': ['Une méthodologie de développement par petits incréments', 'Un type de bug qui apparaît progressivement', 'Une dérive du périmètre par ajouts successifs', 'Un outil de gestion des demandes de changement'],
'q-tech-2': ['Frontend = base de données, Backend = interface', 'Aucune différence, ce sont deux synonymes', 'Frontend = partie visible, Backend = logique serveur', 'Frontend = serveur et API, Backend = navigateur du client'],
'q-tech-3': ['Un framework CSS pour construire des interfaces responsives', 'Un type de base de données orientée documents', 'Un langage de programmation pour le web', 'Une interface permettant à deux systèmes de communiquer'],
'q-tech-4': ['Shopify', 'Drupal', 'Squarespace', 'WordPress'],
'q-test-2': ['Un repas de fin de projet offert par l’agence', 'La validation formelle du projet par le client', 'Un outil de test automatisé de bout en bout', 'Une phase de développement des dernières fonctionnalités'],
'q-test-3': ['Par couleur, du vert au rouge selon l’humeur', 'Par développeur responsable de la correction', 'Par sévérité (bloquant, majeur, mineur)', 'Par date de découverte pendant la recette'],
'q-test-4': ['Photoshop', 'Lighthouse', 'Google Tag Manager', 'Trello'],
'q-test-5': ['Un planning de vente des lots du projet', 'Un procès-verbal attestant la validation du projet', 'Un outil de versioning des fichiers de recette', 'Une base de données des tickets de recette'],
'q-deploy-1': ['Une méthode de test sur deux navigateurs différents', 'Deux environnements permettant un basculement rapide', 'Un outil de déploiement continu open source', 'Une technique de design avec deux palettes'],
'q-deploy-2': ['Vendredi soir 20 h, après le départ de l’équipe', 'Lundi matin 9 h, quand tout le monde est là', 'Mardi ou mercredi, entre 2 h et 6 h', 'Dimanche après-midi, quand le trafic est faible'],
'q-deploy-3': ['Un diplôme de développeur reconnu par l’État', 'Un fichier qui sécurise les échanges HTTPS', 'Un outil de déploiement automatisé des mises à jour', 'Un type de base de données chiffrée'],
'q-deploy-4': ['Un retour à la version précédente en cas de problème', 'Une technique de design avec effet de défilement', 'Un outil de communication interne entre développeurs', 'Un type de test rejoué après chaque mise en production'],
'q-eco-1': ['PNG 24 bits', 'JPG', 'WebP', 'GIF animé'],
'q-eco-3': ['Un développeur qui repousse toutes les tâches', 'Charger les images et contenus à la demande', 'Un bug de performance sur les pages longues', 'Un framework JavaScript pour les animations'],
'q-eco-4': ['Il utilise des serveurs plus puissants et mieux refroidis', 'Il a moins de fonctionnalités et de ressources à charger', 'Il coûte plus cher, donc il est mieux optimisé', 'Il n’est pas plus rapide, seulement moins énergivore'],
'q-a11y-1': ['3:1 minimum', '4.5:1', '7:1 minimum', '21:1'],
'q-a11y-3': ['Près de 1 million', 'Environ 5 millions', '12 millions', 'Plus de 20 millions'],
'q-a11y-4': ['Référentiel Général d’Amélioration de l’Accessibilité', 'Règles Générales d’Apprentissage Avancé et Adapté', 'Réseau Global d’Applications Autonomes et Accessibles', 'Régime Général d’Aide à l’Adaptation des sites publics'],
'q-a11y-6': ['Elle n’améliore pas le SEO, ce sont deux sujets distincts', 'Une bonne structure sémantique aide les moteurs de recherche', 'Google vérifie les contrastes et pénalise les sites illisibles', 'Les lecteurs d’écran sont des robots indexés par Google'],
'q-crise-1': ['Un risque est plus grave qu’une crise, car il concerne tout le projet', 'Un risque est potentiel, une crise est un risque matérialisé', 'Une crise peut être anticipée, un risque non, car il est imprévisible', 'Il n’y a pas de différence, ce sont des synonymes en gestion de projet'],
'q-crise-4': ['Demander à l’équipe de faire des heures supplémentaires pour rattraper', 'Réaliser un diagnostic factuel et informer les parties prenantes', 'Cacher le problème et espérer rattraper le retard sur les phases suivantes', 'Ajouter des développeurs au projet immédiatement pour compenser le retard'],
'q-crise-5': ['Remplacer le cahier des charges quand il est obsolète', 'Définir à l’avance les réponses aux crises potentielles', 'Documenter les bugs du projet et leur résolution', 'Mesurer la performance de l’équipe pendant les crises'],
'q-crise-7': ['Demander aux développeurs de travailler le week-end pour rattraper le retard', 'Réaliser un diagnostic précis et préparer des scénarios chiffrés', 'Réduire la qualité du code pour aller plus vite et rattraper le budget', 'Embaucher un développeur supplémentaire immédiatement pour absorber la charge'],
'q-crise-10': ['1 à 2 %', '5 à 7 %', '10 à 15 %', '30 à 40 %'],
'q-crise-11': ['Le nombre de bus nécessaires pour transporter l’équipe complète au séminaire annuel', 'Le nombre minimum de personnes dont l’absence mettrait le projet en péril', 'Le facteur de risque lié au transport et à la livraison des livrables', 'Le nombre de compétences différentes réunies dans l’équipe du projet'],
'q-crise-12': ['Chercher immédiatement un remplaçant sur LinkedIn et lancer les entretiens', 'Organiser un transfert de connaissances intensif avec le développeur partant', 'Demander au développeur de terminer toutes les fonctionnalités en cours avant son départ', 'Informer immédiatement le client du départ et négocier un report'],
'q-crise-14': ['Interdire les congés pendant toute la durée du projet', 'Le pair programming et la documentation continue', 'Embaucher uniquement des seniors qui savent tout faire', 'Externaliser toutes les compétences critiques à un prestataire'],
'q-crise-15': ['Augmenter la vitesse de codage de l’équipe avec de meilleurs outils', 'Exécuter en parallèle des tâches prévues en séquence', 'Supprimer les tâches non essentielles du périmètre du projet', 'Ajouter des développeurs au projet pour tenir la date'],
'q-crise-16': ['Plus on ajoute de monde, plus le projet va vite, à condition de bien répartir', 'Il faut toujours doubler l’équipe en cas de retard supérieur à 20 %', 'Ajouter des personnes à un projet en retard le retarde davantage', 'Le nombre optimal d’une équipe projet est de 10 personnes maximum'],
'q-crise-19': ['(Optimiste + Pessimiste) / 2, pondéré par le risque', '(Optimiste + 4×Probable + Pessimiste) / 6', 'Optimiste × Pessimiste × Probable, divisé par 3', '(Optimiste + Probable + Pessimiste) / 3'],
'q-crise-20': ['Trouver une solution complète avant de communiquer', 'Minimiser le problème pour ne pas inquiéter le client', 'Communiquer dès que le problème est identifié', 'Attendre que le manager valide le message officiel'],
'q-crise-21': ['Nouvelles fonctionnalités d’abord pour satisfaire le CEO, puis la sécurité, puis le remplacement du développeur', 'Remplacement du développeur d’abord, puis la faille de sécurité, puis les nouvelles fonctionnalités', 'Faille de sécurité d’abord, puis transfert de connaissances, puis fonctionnalités en backlog V2', 'Tout traiter en parallèle immédiatement en répartissant les trois sujets dans l’équipe'],
'q-crise-23': ['Identifier et sanctionner les responsables de la crise pour éviter la récidive', 'Capitaliser sur l’expérience pour éviter que la crise se reproduise', 'Rédiger un rapport pour la direction et le classer dans le dossier projet', 'Évaluer la performance individuelle de chaque membre pendant la crise'],
'q-crise-24': ['Rester calme et factuel face au client, même sous pression', 'Promettre un délai de rattrapage ambitieux pour rassurer le client', 'Protéger l’équipe et assumer collectivement les erreurs commises', 'Communiquer de manière proactive et régulière, même sans nouvelle'],
'q-mission-1': ['Faire le maximum de pages pour impressionner le jury et justifier le prix', 'Copier ce que font les concurrents en ajustant le prix vers le bas', 'Répondre sans poser de questions pour montrer qu’on a tout compris', 'Démontrer sa compréhension du besoin et proposer la bonne solution'],
'q-mission-2': ['Pour gagner du temps sur la rédaction de la réponse', 'Pour lever les zones d’ombre et éviter les malentendus', 'Ce n’est pas important : le cahier des charges du client suffit toujours', 'Pour montrer au client qu’on n’a pas compris sa demande'],
'q-mission-3': ['Uniquement des rectangles gris, sans texte ni annotation', 'Les couleurs finales du design et la typographie choisie', 'La structure, le contenu et des annotations sur les interactions', 'Juste le logo et la navigation principale, le reste vient après'],
'q-mission-4': ['Donner un prix au hasard puis l’ajuster selon la réaction du client', 'Copier les prix des concurrents trouvés sur leurs sites', 'Multiplier le budget annoncé par le client par 0,8 pour être choisi', 'Estimer les jours par tâche, appliquer le TJM, ajouter une marge'],
'q-mission-5': ['Proposer une solution technique sans expliquer sa valeur pour le client', 'Faire trop de wireframes et noyer le jury sous les écrans', 'Être trop transparent sur les coûts en détaillant chaque ligne du devis au centime', 'Poser trop de questions au client avant de répondre'],
# ---------- bonus ----------
'q-bonus-1': ['Tester le site avant chaque mise en production', 'Designer les maquettes et la charte graphique', 'Coordonner l’équipe et piloter le projet', 'Coder l’application de bout en bout'],
'q-bonus-2': ['Un framework de développement web sécurisé', 'Un CMS orienté sécurité des données', 'Un langage de programmation pour le chiffrement', 'La version sécurisée du protocole HTTP'],
'q-bonus-3': ['Un schéma simplifié d’une page sans détails graphiques', 'Un type de serveur dédié à l’hébergement des maquettes', 'Un framework JavaScript pour le prototypage rapide', 'Un câble de connexion entre le serveur et le réseau'],
'q-bonus-5': ['Un CMS spécialisé dans les sites de contenu', 'Un type de serveur optimisé pour la vitesse', 'L’optimisation pour les moteurs de recherche', 'Un langage de programmation pour les balises'],
'q-bonus-7': ['Un design avec animations au défilement', 'Un design coloré qui attire l’attention', 'Un design qui répond vite aux clics', 'Un design adapté à toutes les tailles d’écran'],
'q-bonus-9': ['Un bug enregistré mais pas encore corrigé', 'Une liste priorisée de tâches à réaliser', 'Un type de base de données non relationnelle', 'Un outil de design collaboratif en ligne'],
'q-bonus-10': ['Un CMS français dédié aux sites publics', 'Le règlement européen sur les données personnelles', 'Un langage de programmation pour les formulaires', 'Un outil de gestion de projet certifié par l’État'],
'q-bonus-11': ['La version la plus complète possible du produit', 'La version minimale viable pour tester le marché', 'Un outil de développement de prototypes', 'Un type de serveur de préproduction'],
'q-bonus-12': ['Faire du sport ensemble pour souder l’équipe', 'Synchroniser l’équipe chaque jour en 15 minutes', 'Valider le budget de la journée avec le client', 'Tester le produit livré la veille au soir'],
'q-bonus-13': ['Un réseau de distribution de contenu', 'Un CMS français pour les collectivités', 'Un langage de programmation orienté contenu', 'Un type de base de données distribuée'],
'q-bonus-14': ['Le pourcentage de visiteurs qui reviennent dans le mois', 'La part des visiteurs partis après une seule page', 'Le nombre de clics par visiteur sur une session', 'La vitesse de chargement ressentie par les visiteurs'],
'q-bonus-15': ['Un CMS pour les sites de portfolio', 'Un outil de conception d’interface et de prototypage', 'Un langage de programmation pour les animations', 'Un hébergeur web spécialisé dans les images'],
'q-bonus-17': ['Un type d’écran pour les salles de contrôle', 'La surveillance continue d’un système', 'Un outil de design pour les tableaux de bord', 'Une méthode de développement pilotée par les métriques'],
'q-bonus-18': ['Aucune différence, les deux termes sont interchangeables', 'Corrective = bugs, Évolutive = nouvelles fonctionnalités', 'Corrective = ajout de fonctionnalités, Évolutive = correction de bugs', 'Les deux sont identiques mais facturées différemment'],
'q-bonus-19': ['Un billet de cinéma offert aux clients fidèles', 'Une demande ou un incident enregistré', 'Un outil de paiement pour les prestations', 'Un type de serveur dédié au support'],
'q-bonus-20': ['C’est une obligation légale pour toute agence', 'Pour capitaliser sur l’expérience et s’améliorer', 'Pour augmenter le budget du projet suivant', 'Ce n’est pas nécessaire si le client est content'],
'q-bonus-21': ['Une erreur serveur temporaire sur une page', 'Une redirection permanente d’une URL vers une autre', 'Un type de paiement en trois fois sans frais', 'Un CMS spécialisé dans la gestion des liens'],
'q-bonus-22': ['Fermer le projet et archiver les livrables', 'Lancer officiellement le projet avec les parties prenantes', 'Tester le site avec les premiers utilisateurs', 'Payer les factures de la première phase'],
'q-bonus-23': ['Un traitement de texte pour les développeurs', 'JavaScript avec typage statique', 'Un CMS écrit en JavaScript', 'Un hébergeur spécialisé dans le JavaScript'],
'q-bonus-24': ['Tests et recette avec le client', 'Lancement et cadrage', 'Développement et intégration', 'Maintenance et évolutions'],
# ---------- lexique ----------
'q-lex-1': ['Un bug dans le code signalé mais pas corrigé', 'Une liste priorisée des tâches à réaliser', 'Un type de réunion en fin de sprint', 'Un outil de design pour les wireframes'],
'q-lex-2': ['Un planning fait après le projet pour le bilan', 'Un planning construit à rebours depuis la date de fin', 'Un planning détaillé jour par jour', 'Un planning en retard qu’il faut recaler'],
'q-lex-3': ['Un rapport financier remis en fin de mois', 'Le document qui résume décisions et actions', 'Un planning mis à jour après la réunion', 'Un cahier des charges validé en séance'],
'q-lex-4': ['Aucune différence, ce sont deux synonymes', 'Front-office = partie visible, Back-office = administration', 'Front-office = backend, Back-office = frontend', 'Les deux désignent l’interface d’administration'],
'q-lex-5': ['Un banc de test pour mesurer les performances du matériel', 'Une analyse des solutions existantes pour se positionner', 'Un bug reproduit sur plusieurs navigateurs', 'Un serveur de test partagé entre projets'],
'q-lex-6': ['Un CMS japonais pour les sites e-commerce', 'Une méthode visuelle de gestion des tâches', 'Un langage de programmation orienté flux', 'Un type de serveur pour les files d’attente'],
'q-lex-7': ['Un employé difficile à gérer dans l’équipe', 'Un écart entre le comportement attendu et le réel', 'Une réunion non prévue au planning', 'Un document manquant dans le dossier projet'],
'q-lex-8': ['Replier le code dans une archive', 'Mettre en ligne une nouvelle version', 'Supprimer l’application des serveurs', 'Tester l’application en conditions réelles'],
'q-lex-9': ['Un câble de connexion entre deux serveurs', 'Une extension qui ajoute des fonctions à un CMS', 'Un langage de programmation pour les extensions', 'Un type de serveur pour les modules'],
'q-lex-10': ['Acheter des écrans pour la salle de contrôle', 'La surveillance en temps réel d’un système', 'Un type de test rejoué chaque nuit', 'Une réunion de suivi hebdomadaire'],
'q-lex-11': ['Supprimer du code devenu inutile', 'Fusionner les modifications de deux branches', 'Créer un nouveau projet à partir d’un existant', 'Déployer en production depuis la branche principale'],
'q-lex-12': ['Une carte géographique des visiteurs du site', 'Un fichier listant les pages pour faciliter l’indexation', 'Un plan d’architecture des serveurs', 'Un outil de design pour l’arborescence'],
'q-lex-13': ['Un serveur coréen pour les jeux en ligne', 'Un indicateur chiffré de performance', 'Un CMS pour les tableaux de bord', 'Un langage de programmation statistique'],
'q-lex-14': ['Pas de différence, seule la facturation change', 'Corrective = corriger des bugs, Évolutive = ajouter des fonctions', 'Corrective = ajouter, Évolutive = supprimer des fonctionnalités', 'Les deux sont identiques et couvertes par la garantie'],
'q-lex-15': ['Un CMS conforme aux exigences de l’État', 'Règlement Général sur la Protection des Données', 'Un framework JavaScript pour les formulaires', 'Un outil de gestion des consentements'],
'q-lex-16': ['Un vaccin pour base de données contre les virus', 'Une attaque qui insère du code SQL malveillant', 'Un outil de backup automatique des tables', 'Une méthode de développement orientée données'],
'q-lex-17': ['Une cuisine partagée réservée aux développeurs de l’agence', 'L’environnement de validation avant la production', 'Un type de serveur pour la sauvegarde', 'Un CMS dédié aux contenus de test'],
'q-lex-18': ['Un appel téléphonique du service client', 'Un élément qui incite l’utilisateur à agir', 'Un type de réunion pour décider vite', 'Un bug qui bloque l’action de l’utilisateur'],
'q-lex-19': ['Une demande de budget adressée au client', 'Une demande de fusion de code avec revue', 'Un type de bug remonté par les utilisateurs', 'Un serveur qui tire les mises à jour'],
'q-lex-20': ['Une formation de pilotes pour les chefs de projet', 'Un groupe de décision qui suit l’avancement du projet', 'Un outil de gestion des jalons et des risques', 'Un type de réunion technique entre développeurs'],
# ---------- lexique étendu ----------
'q-lex-ext-1': ['Document décrivant besoins, objectifs et contraintes d’un projet', 'Document financier récapitulant les coûts et la marge du projet', 'Planning détaillé des ressources humaines allouées à chaque phase', 'Compte-rendu de réunion validé par toutes les parties prenantes'],
'q-lex-ext-2': ['Répartition des responsabilités entre les membres de l’équipe projet', 'Phase où l’on clarifie le pourquoi, le quoi et le comment', 'Validation finale du budget par le comité de direction', 'Processus de sélection des outils et technologies du projet'],
'q-lex-ext-3': ['Phase de clôture d’un projet avec bilan des résultats obtenus', 'Réunion de lancement officielle avec les parties prenantes', 'Document de synthèse présentant les risques identifiés au cadrage', 'Processus d’évaluation des performances de l’équipe en fin de projet'],
'q-lex-ext-4': ['Documentation technique détaillant l’architecture du système', 'Formulation simple et actionnable d’un besoin utilisateur', 'Rapport d’analyse des comportements des utilisateurs sur le site', 'Scénario de test validant le bon fonctionnement d’une fonctionnalité'],
'q-lex-ext-5': ['Réunion quotidienne de synchronisation de l’équipe de développement', 'Période de travail courte et fixe pour réaliser des tâches', 'Phase de tests intensifs avant la mise en production', 'Méthodologie de priorisation des fonctionnalités du backlog'],
'q-lex-ext-6': ['Indicateur de performance mesurant l’avancement du projet', 'Point clé marquant une étape ou une décision', 'Ressource humaine critique pour la réussite du projet', 'Document contractuel définissant les responsabilités de chacun'],
'q-lex-ext-8': ['Ressources partagées nécessaires à plusieurs tâches en parallèle', 'Liens où une tâche ne peut commencer ou finir sans l’autre', 'Contraintes budgétaires limitant l’exécution des tâches', 'Compétences requises pour réaliser plusieurs tâches successives'],
'q-lex-ext-14': ['Diagramme de Gantt détaillant toutes les micro-tâches du projet', 'Vision globale de l’évolution du produit dans le temps', 'Plan d’action opérationnel pour le sprint en cours', 'Documentation technique sur l’architecture du système'],
'q-lex-ext-16': ['Document contractuel définissant les responsabilités de chaque partie', 'Tableau classant les risques selon probabilité et impact', 'Grille d’évaluation des compétences de l’équipe projet', 'Liste chronologique des incidents survenus pendant le projet'],
'q-lex-ext-17': ['Document financier détaillant les revenus générés par le site', 'Phase de vérification de la conformité au cahier des charges', 'Procédure d’acceptation du devis par le client avant démarrage', 'Compilation des retours utilisateurs après la mise en ligne'],
'q-lex-ext-19': ['Normes de qualité imposées par les réglementations du secteur', 'Conditions pour considérer une fonctionnalité validée', 'Standards de codage définis par l’équipe technique', 'Métriques de performance à atteindre en production'],
'q-lex-ext-21': ['Traduction du contenu en plusieurs langues et versions locales', 'Gestion des versions successives d’un code', 'Vérification de la conformité du code aux standards', 'Processus de validation des modifications par les pairs'],
'q-lex-ext-24': ['Liste des compétences techniques requises dans l’équipe', 'Document décrivant comment la solution sera réalisée', 'Catalogue des outils et logiciels utilisés sur le projet', 'Référentiel des normes de codage à respecter'],
'q-lex-ext-26': ['Espace de travail physique aménagé pour les développeurs', 'Cadre technique où les développeurs codent et testent', 'Méthodologie favorisant l’innovation et la créativité technique', 'Plateforme de formation continue pour l’équipe technique'],
'q-lex-ext-27': ['Pour optimiser les coûts d’infrastructure serveur sur la durée', 'Car c’est là que les vrais utilisateurs utilisent l’application', 'Pour faciliter la collaboration entre développeurs et testeurs', 'Pour respecter les normes de sécurité informatique en vigueur'],
'q-lex-ext-28': ['Stratégie marketing définissant les campagnes à mener sur l’année', 'Liste de tâches avec responsables et échéances', 'Planning global du projet avec toutes les phases et jalons', 'Document de cadrage validé par le comité de pilotage'],
'q-lex-ext-29': ['Documentation technique destinée aux développeurs du projet', 'Communication régulière sur l’avancement du projet', 'Archivage des documents liés au projet en fin de mission', 'Synthèse financière des dépenses engagées chaque mois'],
'q-lex-ext-30': ['Communication multilingue traduite en temps réel par un outil', 'Échanges ne nécessitant pas la présence simultanée de tous', 'Système de notifications push automatiques vers l’équipe', 'Visioconférence organisée sur plusieurs fuseaux horaires'],
'q-lex-ext-31': ['Audit de conformité réalisé par un organisme externe au projet', 'Réunion régulière pour faire le point sur l’avancement', 'Session de formation continue pour l’équipe technique', 'Débriefing organisé à la fin d’un projet avec le client'],
'q-lex-ext-32': ['Espace de coworking réservé pour l’équipe projet pendant la mission', 'Session de travail collaboratif pour produire un livrable', 'Formation pratique sur les outils du projet pour le client', 'Réunion de brainstorming pour générer des idées de fonctionnalités'],
'q-lex-ext-35': ['Synthèse exécutive destinée à la direction générale du client', 'Document initial présentant le contexte et les attentes', 'Compte-rendu détaillé d’une réunion importante avec le client', 'Rapport final de clôture de projet remis avec la facture'],
'q-lex-ext-36': ['Processus itératif permettant des retours fréquents du client', 'Méthode de projet avec phases successives structurées', 'Diagramme visualisant les dépendances entre les tâches', 'Framework agile basé sur des cycles courts de deux semaines'],
'q-lex-ext-38': ['Nombre d’utilisateurs actifs sur le site au même moment', 'Chemin suivi par un utilisateur pour atteindre un objectif', 'Processus d’inscription et d’authentification des visiteurs', 'Système de navigation principale d’un site et ses menus'],
'q-lex-ext-40': ['Première version de développement du produit livrée au client', 'Version interactive d’une maquette simulant la navigation', 'Document de spécifications fonctionnelles détaillées et validées', 'Modèle 3D d’un produit physique avant sa fabrication en série'],
'q-lex-ext-41': ['Structure organisationnelle de l’équipe design et ses rôles', 'Organisation des éléments pour guider le regard', 'Classification des pages par ordre d’importance dans le menu', 'Système de navigation multi-niveaux du site'],
'q-lex-ext-46': ['Logiciel de création graphique utilisé par les designers', 'Ensemble de règles et composants pour une interface cohérente', 'Méthodologie de travail pour les équipes design et produit', 'Plateforme en ligne centralisant les maquettes validées du projet'],
'q-lex-ext-50': ['Enquête de satisfaction menée auprès des utilisateurs finaux', 'Analyse critique d’une interface pour repérer les problèmes', 'Test de performance technique du site web sur mobile', 'Vérification de conformité aux normes d’accessibilité en vigueur'],
'q-lex-ext-52': ['Application mobile dédiée aux développeurs et aux tests', 'Interface permettant à deux systèmes de communiquer', 'Langage de programmation pour créer des sites web dynamiques', 'Protocole de sécurité pour protéger les données échangées'],
'q-lex-ext-54': ['Logiciel permettant de développer des sites web en local', 'Machine qui héberge le site et répond aux requêtes', 'Interface d’administration pour gérer le contenu du site', 'Système de sauvegarde automatique des données du site'],
'q-lex-ext-55': ['Processus de création et de réservation d’un nom de domaine', 'Service mettant un serveur à disposition pour le site', 'Plateforme de développement en ligne pour coder à plusieurs', 'Système de sauvegarde cloud des fichiers du site'],
'q-lex-ext-60': ['À sauvegarder définitivement les données des utilisateurs', 'À stocker temporairement des données pour accélérer l’affichage', 'À masquer certaines pages aux moteurs de recherche pendant les tests', 'À compresser automatiquement les images du site à l’envoi'],
'q-lex-ext-61': ['Archivage des anciennes versions de fichiers sur un serveur distant', 'Réduction de la taille des fichiers pour gagner en vitesse', 'Suppression automatique des fichiers inutilisés du serveur', 'Chiffrement des données sensibles avant leur envoi'],
'q-lex-ext-62': ['Documentation technique expliquant le fonctionnement du programme', 'Ensemble des fichiers contenant les instructions du programme', 'Version originale non modifiée d’un logiciel open source', 'Référentiel de bonnes pratiques de développement de l’équipe'],
'q-lex-ext-67': ['Logiciels de suivi des performances d’un site en production', 'Fichiers enregistrant les événements et les erreurs', 'Identifiants de connexion des utilisateurs au back-office', 'Archives compressées des anciennes versions du code'],
'q-lex-ext-72': ['Catégorie thématique organisant les contenus du site', 'Ensemble de fichiers définissant l’apparence du site', 'Module fonctionnel ajoutant des fonctionnalités au CMS', 'Palette de couleurs principale définie dans le back-office'],
'q-lex-ext-77': ['Application de mindmapping et de brainstorming pour les équipes', 'Outil polyvalent de documentation et d’organisation', 'Logiciel de gestion de projet avec diagrammes de Gantt', 'Plateforme de communication vidéo pour les équipes distantes'],
'q-lex-ext-80': ['À définir le thème graphique principal du site dans le CMS', 'Titre affiché dans l’onglet et les résultats Google', 'À marquer les sections importantes du contenu de la page', 'À indiquer le nom du propriétaire du site dans le pied de page'],
'q-lex-ext-82': ['Pour appliquer des styles de police différents à chaque niveau', 'Pour structurer le contenu de manière hiérarchique', 'Pour créer automatiquement un sommaire cliquable en haut de page', 'Pour définir les zones de texte modifiables dans le CMS'],
'q-lex-ext-84': ['Script automatisant certaines tâches de maintenance du site', 'Fichier indiquant aux moteurs quelles zones explorer', 'Programme détectant les utilisateurs malveillants et les bots', 'Configuration des chatbots et assistants du site'],
'q-lex-ext-88': ['Création d’un sommaire automatique des contenus du site', 'Enregistrement d’une page dans l’index d’un moteur', 'Numérotation automatique des pages du site dans le CMS', 'Organisation thématique des articles par catégorie et par tag'],
'q-lex-ext-90': ['Code d’erreur indiquant une page introuvable sur le serveur', 'Redirection permanente d’une URL vers une autre', 'Redirection temporaire pendant une maintenance du site', 'Type de lien ouvrant une nouvelle fenêtre du navigateur'],
'q-lex-ext-92': ['Ancienneté d’un site influençant son autorité auprès de Google', 'Mots-clés longs et précis, moins concurrentiels', 'Durée moyenne de visite sur un site web mesurée par Analytics', 'Pages ayant un taux de rebond très faible sur la durée'],
'q-lex-ext-96': ['Pourcentage d’e-mails non délivrés dans une campagne d’emailing', 'Part des visiteurs partis après une seule page', 'Taux de retour des visiteurs sur le site dans le mois', 'Proportion de visiteurs revenant plusieurs fois par semaine'],
'q-lex-ext-97': ['Page d’accueil principale du site web et de ses rubriques', 'Page d’atterrissage dédiée à un objectif précis', 'Première page vue lors d’une visite, quelle qu’elle soit', 'Page de destination affichée après la connexion de l’utilisateur'],
'q-lex-ext-98': ['Vente d’espaces publicitaires sur les contenus du site', 'Stratégie de création de contenu utile pour attirer', 'Rédaction de descriptions produits pour un site e-commerce', 'Achat de contenus auprès de rédacteurs externes spécialisés'],
'q-lex-ext-101': ['Outils d’intelligence artificielle prédictive appliqués au marketing', 'Données sur l’usage d’un site pour analyser le comportement', 'Rapports financiers de performance commerciale du trimestre', 'Méthodes statistiques de traitement des données clients'],
'q-lex-ext-102': ['Rachat d’entreprises concurrentes sur le même marché', 'Actions pour attirer de nouveaux visiteurs ou clients', 'Obtention de licences et de droits d’exploitation de contenus', 'Achat d’espaces publicitaires premium sur les réseaux sociaux'],
'q-lex-ext-105': ['Codes de suivi des colis pour les sites e-commerce et leurs clients', 'Paramètres ajoutés à une URL pour identifier le trafic', 'Identifiants uniques générés pour chaque utilisateur connecté', 'Balises techniques optimisant le référencement d’une page'],
'q-lex-ext-107': ['Fonctionnalité non documentée du logiciel découverte par hasard', 'Erreur ou comportement inattendu dans une application', 'Ralentissement des performances du système aux heures de pointe', 'Incompatibilité entre deux technologies utilisées sur le projet'],
'q-lex-ext-112': ['Extension ajoutant de nouvelles fonctionnalités à un logiciel', 'Petite mise à jour corrigeant un bug ou une faille', 'Version bêta testant de nouvelles fonctionnalités avant sortie', 'Module de personnalisation de l’interface pour les utilisateurs'],
'q-lex-ext-114': ['Approbation légale pour exploiter un service en ligne', 'Gestion des droits d’un utilisateur sur les ressources', 'Validation d’une transaction financière par la banque', 'Consentement de l’utilisateur pour le traitement de ses données'],
'q-lex-ext-115': ['Conversion des données analogiques en format numérique', 'Transformation des données pour les rendre illisibles', 'Comptage des tentatives d’accès au système par utilisateur', 'Compression des fichiers pour gagner de l’espace disque'],
'q-lex-ext-118': ['Réparation de fichiers corrompus ou endommagés par un outil', 'Remise en place des données depuis une sauvegarde', 'Nettoyage et optimisation de la base de données en production', 'Récupération de fichiers supprimés accidentellement par un utilisateur'],
'q-lex-ext-119': ['Respect des normes d’accessibilité numérique pour les sites publics', 'Respecter les règles sur la protection des données', 'Conformité aux standards de qualité logicielle du secteur', 'Adhésion aux bonnes pratiques de développement sécurisé'],
'q-lex-ext-120': ['Informations confidentielles d’une entreprise et de ses clients', 'Informations permettant d’identifier une personne', 'Préférences personnalisées d’un utilisateur sur le site', 'Contenus privés non partagés publiquement par leur auteur'],
# ---------- compétences ----------
'q-comp-1': ['Savoir coder dans une dizaine de langages', 'Communication claire et écoute active', 'Être autoritaire pour se faire respecter', 'Travailler seul pour aller plus vite'],
'q-comp-2': ['Comme un chef autoritaire qui tranche tout', 'Comme un facilitateur qui aide l’équipe à avancer', 'Comme un simple observateur qui rend compte', 'Comme un développeur senior qui code avec eux'],
'q-comp-3': ['La cacher au client tant qu’une solution n’est pas trouvée', 'La communiquer tôt, sans jamais surprendre le client', 'Attendre que ça se règle tout seul avec le temps', 'Blâmer l’équipe pour montrer qu’il n’y est pour rien'],
'q-comp-4': ['Savoir développer toute l’application seul si besoin', 'Comprendre les technologies web et savoir bâtir un planning', 'Être graphiste expert pour juger les maquettes', 'Connaître tous les langages de programmation du marché'],
'q-comp-5': ['Prendre systématiquement le parti du client, c’est lui qui paie', 'Rester factuel : protéger l’équipe des dérives, le client des complications', 'Laisser l’équipe technique et le client régler le désaccord directement entre eux', 'Abandonner le projet si le conflit dure plus d’une semaine'],
'q-comp-6': ['Pour paraître intelligent aux yeux du client', 'Pour prévoir les risques et préparer des plans B', 'Pour augmenter le budget avec une ligne « imprévus »', 'Ce n’est pas important : on gère au fil de l’eau'],
'q-comp-7': ['Refuser tous les projets qui paraissent compliqués', 'Refuser avec tact les demandes irréalistes ou hors périmètre', 'Être désagréable pour se faire respecter du client', 'Ne jamais dire non, mais faire traîner les demandes gênantes'],
'q-comp-8': ['Dire et faire n’importe quoi tant que le client est content', 'Tenir ses engagements pour rester crédible', 'Parler beaucoup en réunion pour occuper le terrain', 'Faire sans dire, pour éviter les discussions inutiles'],
'q-comp-9': ['Pour paraître moins intelligent et rassurer le client', 'Parce que le client n’est généralement pas technique', 'Pour économiser du temps de réunion', 'Ce n’est pas nécessaire, le client s’adapte au vocabulaire'],
'q-comp-10': ['Éviter tout projet stressant dès la phase commerciale', 'Rester calme sous pression et dans l’urgence', 'Stresser toute l’équipe pour qu’elle aille plus vite', 'Abandonner quand c’est trop difficile à gérer'],
'q-comp-11': ['Pour fouiller dans les affaires des autres membres de l’équipe', 'Pour s’intéresser aux nouvelles technologies et méthodes', 'Pour lire les e-mails de l’équipe et rester informé', 'Ce n’est pas important, les compétences techniques suffisent'],
'q-comp-12': ['Être toujours de bonne humeur, quoi qu’il arrive', 'Motiver l’équipe sans autoritarisme', 'Ne jamais critiquer le travail de l’équipe', 'Laisser tout faire pour préserver l’ambiance'],
'q-comp-13': ['Pour paraître sérieux devant le client et la direction', 'Parce qu’il est le roc de l’équipe, surtout dans la tempête', 'Pour économiser de l’énergie sur les projets longs', 'Ce n’est pas nécessaire, l’équipe se gère toute seule'],
'q-comp-14': ['Savoir coder en JavaScript', 'Construire des user stories', 'Maîtriser Photoshop et Figma', 'Connaître Excel et les tableaux croisés'],
'q-comp-15': ['Pour remplacer un consultant SEO et économiser son coût', 'Pour conseiller le client sur les enjeux de visibilité', 'Ce n’est pas nécessaire, un plugin s’en charge', 'Pour coder le site avec les bonnes balises dès le départ'],
# ---------- diverse ----------
'q-fb-2': ['Cahier des charges', 'Business plan', 'Rapport d’activité annuel', 'Plan de test fonctionnel'],
'q-fb-3': ['[utilisateur], [objectif], [bénéfice]', '[développeur], [code livré], [mise en production]', '[client], [budget], [délai]', '[manager], [tâche assignée], [résultat]'],
'q-fb-4': ['Burn rate', 'Vélocité', 'Cycle time', 'Marge nette'],
'q-fb-5': ['HTTPS', 'HTTP/2', 'SMTP', 'WebSocket'],
'q-fb-7': ['Planning Poker', 'Delphi', 'Analogique', 'Bottom-up'],
'q-fb-9': ['UAT (User Acceptance Testing)', 'Test unitaire automatisé', 'Test de charge (load test)', 'Test de non-régression'],
'q-sc-1': ['Organiser une réunion d’urgence avec l’équipe pour recadrer le projet', 'Envoyer un e-mail au client pour lui dire que la date est impossible à tenir', 'Ajouter des développeurs au projet pour rattraper le retard le plus vite possible', 'Ignorer le problème et espérer que l’équipe se rattrape sur la fin'],
'q-sc-4': ['Accepter toutes les demandes pour satisfaire le client et préserver la relation', 'Refuser catégoriquement toute modification non prévue au cahier des charges', 'Documenter et chiffrer les demandes, proposer un avenant ou un lot 2', 'Demander au développeur d’intégrer les changements en heures supplémentaires'],
'q-sc-5': ['Tout déployer d’un coup le jour J pour maximiser l’impact de la campagne', 'Lancer en bêta fermée avec 100 utilisateurs, puis ouvrir progressivement', 'Reporter le lancement de 2 mois pour ajouter davantage de fonctionnalités', 'Lancer uniquement la version mobile, puisque c’est là que sont les usages'],
'q-sc-6': ['Photoshop : c’est l’outil le plus connu des designers et des imprimeurs', 'Figma : collaboratif, gratuit, prototypage intégré, standard du secteur', 'PowerPoint : tout le monde sait l’utiliser dans l’entreprise, client compris', 'Coder directement en HTML/CSS : c’est plus rapide que de maquetter'],
'q-sc-8': ['Tester uniquement le parcours principal (inscription → recherche → réservation → paiement) à la main', 'Des tests unitaires par fonction, puis des tests E2E sur les parcours critiques', 'Demander au client de tester lui-même, il connaît mieux son produit que l’équipe', 'Ne tester que manuellement, les tests automatisés prennent trop de temps à écrire'],
'q-sc-9': ['Refaire le design du site pour le rendre plus attractif et plus léger', 'Optimiser les images, activer le cache, réduire les scripts tiers', 'Changer d’hébergeur pour un serveur plus puissant et mieux situé', 'Ajouter plus de contenu pour améliorer le SEO et compenser la lenteur'],
'q-sc-10': ['Réduire les fonctionnalités pour tenir dans le budget initial annoncé', 'Un paiement échelonné : 30 % signature, 30 % MVP, 30 % livraison, 10 % garantie', 'Refuser le projet, le budget est trop serré pour être rentable', 'Accepter le projet et absorber la perte pour fidéliser le client sur les prochaines années'],
'q-sc-11': ['Demander au développeur de corriger directement en production, sans passer par la recette', 'Activer le plan de rollback vers la version précédente, puis investiguer', 'Éteindre le serveur pour éviter d’aggraver la situation le temps de comprendre', 'Envoyer un e-mail au client pour l’informer du problème avant toute action'],
'q-sc-12': ['Copier-coller le contenu de l’ancien site vers le nouveau, page par page', 'Audit SEO complet, mapping de toutes les URL, redirections 301 planifiées', 'Supprimer l’ancien site et mettre le nouveau en ligne directement le même jour', 'Demander au client de réécrire tout son contenu pour repartir de zéro'],
'q-sc-13': ['Pointer les responsables des retards pour qu’ils se sentent redevables envers l’équipe', 'Utiliser le format « Start / Stop / Continue » pour améliorer sans blâmer', 'Annuler la rétrospective, l’équipe est trop démotivée pour en tirer quelque chose', 'Demander au manager de sanctionner les retardataires avant la prochaine itération'],
'q-sc-14': ['Un serveur mutualisé OVH à 5 €/mois, c’est largement suffisant pour démarrer', 'Une architecture cloud scalable (Vercel/AWS) avec CDN et autoscaling', 'Un serveur dédié à 200 €/mois chez un hébergeur local, plus simple à gérer', 'Héberger le site sur son propre serveur au bureau pour garder le contrôle'],
'q-sc-15': ['Le risque technique : tester avec un prototype avant de coder pour de bon', 'Le risque budget : le client va demander plus que prévu, prévoir un avenant', 'Le risque d’adoption : les utilisateurs internes n’utiliseront pas l’outil, prévoir de la formation', 'Le risque de sécurité : les données RH sont sensibles, auditer la sécurité en priorité avec un prestataire spécialisé'],
'q-sc-16': ['Imposer les maquettes telles quelles, le design a été validé par le client', 'Organiser un atelier design + dev pour trouver des compromis réalistes', 'Demander au designer de tout refaire en respectant les contraintes techniques', 'Coder les maquettes telles quelles même si c’est techniquement complexe et long'],
'q-sc-18': ['Utiliser uniquement un outil automatisé (axe DevTools) et corriger ce qu’il trouve', 'Combiner tests automatisés (axe), tests clavier et tests avec lecteur d’écran', 'Demander à un utilisateur malvoyant de tester le site et corriger ses retours', 'Vérifier uniquement le contraste des couleurs et les attributs alt des images'],
'q-sc-19': ['Supprimer toutes les images et vidéos du site pour alléger chaque page', 'Optimiser les médias (WebP, lazy loading), réduire les scripts, hébergeur vert', 'Limiter le nombre de pages à 5 maximum et retirer les fonctionnalités annexes', 'Afficher un message demandant aux utilisateurs de limiter leur navigation'],
# ---------- newQuestions ----------
'nq-cdc-1': ['Pas de problème, je vous envoie un devis vendredi en m’inspirant d’Airbnb et de Booking', 'Je ne peux rien chiffrer sans un cahier des charges complet rédigé par vos soins', 'Un atelier de cadrage de 2 h cette semaine, puis une fourchette budgétaire par lot', 'Je vous envoie un devis pour un MVP au prix du marché, on ajustera après la signature'],
'nq-cdc-3': ['La garder telle quelle : c’est l’intention du client, on la respectera dans le design', 'La remplacer par des critères vérifiables : Lighthouse mobile > 90, réservation en 3 écrans', 'La supprimer : ce n’est pas une exigence technique, elle n’a pas sa place dans un CDC', 'Ajouter « et responsive, avec un design moderne » pour la préciser sans la contredire'],
'nq-carto-1': ['Montrer les chiffres (75 % de rebond, 60 % de mobile, 8 s) : performance en lot 1, logo en lot 2', 'Refaire le logo d’abord : c’est ce que le client demande, ça se voit, et ça rassure la direction', 'Expliquer que le logo n’a aucun intérêt et refuser de le traiter tant que le site est lent', 'Faire les deux en même temps sans changer le budget, en rognant sur la recette'],
'nq-plan-1': ['Oui, l’équipe rattrapera pendant le développement en travaillant sur deux lots en parallèle', 'Non : le rétroplanning est déjà à 13 semaines sur 13, il faut arbitrer périmètre ou date', 'Oui, avec des heures supplémentaires sur la recette et une mise en ligne un vendredi soir', 'Non, sauf si on supprime la phase de recette et qu’on teste directement en production'],
'nq-plan-2': ['chemin critique', 'jalon de fin', 'sprint zéro', 'chemin de fer'],
'nq-plan-3': ['Attendre : « presque fini » veut dire que ça arrive, inutile de mettre la pression', 'Réassigner la tâche à un autre développeur pour débloquer le sprint en cours', 'Décomposer avec lui le reste à faire en demi-journées et identifier ce qui bloque', 'Prévenir le client que le sprint sera en retard et proposer une nouvelle date de démo'],
'nq-budget-2': ['Je retire la marge de 10 % pour rentrer dans le budget, on se rattrapera sur la suite', 'Je baisse les TJM de tous les profils de 8 % pour atterrir juste sous 25 000 €', 'Je passe une fonctionnalité d’environ 2 000 € en option ou en lot 2, marge conservée', 'Je signe à 25 000 € sans rien changer : on se rattrapera sur les avenants'],
'nq-outils-1': ['Un e-mail récapitulatif chaque soir avec la liste des tâches faites et à faire', 'Un Kanban partagé en lecture (Trello, Notion…) et un point hebdo de 30 minutes', 'Un accès au dépôt GitHub pour qu’il voie les commits et les branches en cours', 'Une réunion quotidienne de 15 minutes avec le client, comme un daily'],
'nq-spec-1': ['En tant qu’utilisateur, je veux un bouton « Réserver » bien visible en haut de la page d’accueil', 'Le développeur doit coder un formulaire de réservation avec un calendrier et un sélecteur d’horaires', 'En tant que client, je veux réserver une table facilement et rapidement depuis mon téléphone', 'En tant que client pressé, je veux réserver en moins de 3 écrans afin de ne pas abandonner'],
'nq-spec-2': ['critères d’acceptation', 'story points', 'dépendances techniques', 'wireframes annotés'],
'nq-tech-1': ['Un développement sur mesure React + Node pour ne dépendre de personne et tout maîtriser', 'Shopify ou WooCommerce : les deux tiennent le budget, le choix dépend de l’autonomie voulue', 'Une application mobile native iOS et Android, c’est ce que les clients utilisent au quotidien', 'Un site vitrine avec un numéro de téléphone pour commander, le e-commerce viendra ensuite'],
'nq-test-1': ['Rien : il est senior, je lui fais confiance et je passe le ticket en validé', 'Sur quels navigateurs, avec quelles données, et quel cas limite est le plus risqué ?', 'Qu’il rejoue tous les tests du projet depuis le début pour être sûr de la non-régression', 'Que le client teste lui-même dès ce soir et valide le ticket de son côté'],
'nq-recette-1': ['Tout corriger cette nuit pour tenir la date, avec toute l’équipe mobilisée', 'Reporter la mise en production d’une semaine et traiter les 47 retours un par un', 'Trier les 47 retours (bloquant, majeur, mineur, hors périmètre) et ne traiter que les bloquants', 'Répondre au client que la recette est terminée depuis hier et que les retours iront en maintenance'],
'nq-deploy-1': ['Rien : il n’a rien vu, inutile de l’inquiéter pour 20 minutes d’interruption', 'Un message factuel : ce qui s’est passé, l’impact, ce qui a été fait, la prochaine étape', 'Que le problème vient de l’hébergeur et que l’agence n’y est pour rien', 'Un rapport technique détaillé de 3 pages sur la cause racine, envoyé dans la semaine'],
'nq-bilan-1': ['Que c’est normal, tous les projets dépassent, et que 5 000 € c’est peu sur 40 000 €', 'Les trois causes factuelles, ce que l’agence a absorbé, et une règle pour la prochaine fois', 'Que le retard des contenus vient de lui, donc le surcoût aussi, chiffres à l’appui', 'Que le taux de conversion a augmenté de 25 %, donc le surcoût est déjà rentabilisé'],
'nq-crise-1': ['Rassurer le client, recueillir les faits, revenir dans la journée, puis recadrer en interne', 'Confirmer au client que le projet va planter, par honnêteté, et lui proposer un report immédiat', 'Recadrer publiquement le développeur junior devant l’équipe pour que ça ne se reproduise plus', 'Demander au client de ne plus parler à l’équipe et de passer uniquement par vous désormais'],
'nq-mission-1': ['Réduire les TJM de tous les profils pour atterrir à 120 000 € sans toucher au périmètre', 'Supprimer la marge et les tests pour tenir les 120 000 € annoncés par le client', 'Répondre à 135 000 € en expliquant que le budget du client est irréaliste pour ce périmètre', 'Un MVP à environ 110 000 € couvrant les « must have », et un lot 2 chiffré pour le reste'],
}

FILES = ['modules', 'additionalModules', 'finalModules', 'completeModules', 'crisisModule', 'missionModule', 'bonusQuiz', 'lexiqueQuiz', 'extendedLexiqueQuiz', 'competencesQuiz', 'diverseQuiz', 'newQuestions']

def find_options_span(s, start):
    """Renvoie (i, j) : indices de début et de fin (exclus) du tableau d'options qui suit `start`."""
    m = re.compile(r"options:\s*\[").search(s, start)
    if not m: return None
    i = m.end() - 1
    depth = 0; k = i; in_str = None
    while k < len(s):
        c = s[k]
        if in_str:
            if c == '\\': k += 2; continue
            if c == in_str: in_str = None
        elif c in "'\"`": in_str = c
        elif c == '[': depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0: return (i, k + 1)
        k += 1
    return None

def ts_str(o):
    return "'" + o.replace('\\', '\\\\').replace("'", "\\'") + "'"

done = {}
for f in FILES:
    p = pathlib.Path('data') / f'{f}.ts'
    s = p.read_text()
    for qid, opts in NEW.items():
        if qid in done: continue
        m = re.search(r"id:\s*'" + re.escape(qid) + r"'", s)
        if not m: continue
        span = find_options_span(s, m.end())
        if not span: sys.exit(f'options introuvables pour {qid}')
        i, j = span
        # vérifie qu'on est bien dans le même objet : pas d'autre "id:" entre les deux
        if re.search(r"\bid:\s*'", s[m.end():i]): sys.exit(f'objet ambigu pour {qid}')
        line_start = s.rfind('\n', 0, i) + 1
        indent = re.match(r'\s*', s[line_start:]).group(0)
        inner = ',\n'.join(indent + '  ' + ts_str(o) for o in opts)
        s = s[:i] + '[\n' + inner + '\n' + indent + ']' + s[j:]
        done[qid] = f
    p.write_text(s)

missing = [q for q in NEW if q not in done]
print(f'{len(done)} questions réécrites ; manquantes : {missing}')

# ---------- Second passe : dans le lexique étendu, la bonne réponse était devenue la plus courte dans 47 % des cas.
# On rallonge légèrement la bonne réponse (index 1) pour la placer en position médiane.
FIX_CORRECT = {
'q-lex-ext-3': 'Réunion de lancement officielle avec toutes les parties prenantes',
'q-lex-ext-4': 'Formulation courte et actionnable d’un besoin utilisateur final',
'q-lex-ext-6': 'Point clé marquant une étape importante ou une décision',
'q-lex-ext-10': 'Décision prise pour trancher entre plusieurs options',
'q-lex-ext-21': 'Gestion des versions successives d’un code dans le temps',
'q-lex-ext-23': 'Document décrivant ce que le système doit permettre de faire',
'q-lex-ext-26': 'Cadre technique où les développeurs écrivent et testent le code',
'q-lex-ext-28': 'Liste structurée de tâches avec responsables et échéances',
'q-lex-ext-29': 'Communication régulière sur l’avancement et les alertes',
'q-lex-ext-32': 'Session de travail collaboratif pour produire un livrable précis',
'q-lex-ext-35': 'Document initial posant le contexte et les attentes du client',
'q-lex-ext-36': 'Méthode de projet à phases successives, chacune validée',
'q-lex-ext-40': 'Version interactive d’une maquette simulant navigation et clics',
'q-lex-ext-42': 'Découpage d’une page en grandes zones, sans détail',
'q-lex-ext-52': 'Interface permettant à deux systèmes d’échanger des données',
'q-lex-ext-54': 'Machine qui héberge le site et répond aux requêtes reçues',
'q-lex-ext-57': 'Protocole qui chiffre les échanges avec le serveur',
'q-lex-ext-58': 'À activer le HTTPS pour sécuriser les échanges',
'q-lex-ext-59': 'Adresse web lisible (par exemple monsite.fr)',
'q-lex-ext-65': 'Collection de fonctions prêtes à l’emploi et réutilisables',
'q-lex-ext-66': 'Logiciel qui gère et interroge la base de données',
'q-lex-ext-69': 'CMS très répandu pour les sites vitrines et les blogs',
'q-lex-ext-75': 'Extension e-commerce ajoutée à WordPress',
'q-lex-ext-76': 'Outil de tâches en mode kanban avec des cartes',
'q-lex-ext-77': 'Outil polyvalent de documentation, notes et organisation',
'q-lex-ext-78': 'Outil de messagerie d’équipe organisé en canaux',
'q-lex-ext-79': 'Plateforme de gestion du code source en équipe',
'q-lex-ext-80': 'Titre affiché dans l’onglet du navigateur et dans Google',
'q-lex-ext-82': 'Pour structurer le contenu de manière hiérarchique et lisible',
'q-lex-ext-85': 'Liens entre les pages d’un même site, pour guider',
'q-lex-ext-88': 'Ajout d’une page dans l’index d’un moteur, après exploration',
'q-lex-ext-90': 'Redirection permanente d’une ancienne URL vers une nouvelle',
'q-lex-ext-92': 'Mots-clés longs et précis, moins concurrentiels mais ciblés',
'q-lex-ext-94': 'Contenu restant pertinent pendant des années',
'q-lex-ext-96': 'Part des visiteurs partis après avoir vu une seule page',
'q-lex-ext-97': 'Page d’atterrissage conçue pour un objectif précis de campagne',
'q-lex-ext-98': 'Stratégie de création de contenu utile pour attirer du public',
'q-lex-ext-105': 'Paramètres ajoutés à une URL pour identifier l’origine du trafic',
'q-lex-ext-112': 'Petite mise à jour corrigeant un bug ou une faille de sécurité',
'q-lex-ext-115': 'Transformation rendant les données illisibles sans la clé',
'q-lex-ext-116': 'Système qui filtre le trafic réseau selon des règles',
'q-lex-ext-118': 'Remise en place des données depuis une sauvegarde antérieure',
'q-lex-ext-119': 'Respecter les règles sur la protection des données personnelles',
'q-lex-ext-120': 'Informations permettant d’identifier une personne physique',
}

def parse_options(arr):
    """Lit un tableau TS de chaînes simples ('...' ou "...") et renvoie la liste Python."""
    out = []; k = 0
    while k < len(arr):
        c = arr[k]
        if c in "'\"":
            q = c; k += 1; buf = ''
            while arr[k] != q:
                if arr[k] == '\\': buf += arr[k + 1]; k += 2
                else: buf += arr[k]; k += 1
            out.append(buf)
        k += 1
    return out

p = pathlib.Path('data/extendedLexiqueQuiz.ts')
s = p.read_text(); n = 0
for qid, text in FIX_CORRECT.items():
    m = re.search(r"id:\s*'" + re.escape(qid) + r"'", s)
    if not m: sys.exit(f'{qid} introuvable')
    i, j = find_options_span(s, m.end())
    opts = parse_options(s[i:j])
    assert len(opts) == 4, qid
    opts[1] = text
    line_start = s.rfind('\n', 0, i) + 1
    indent = re.match(r'\s*', s[line_start:]).group(0)
    s = s[:i] + '[\n' + ',\n'.join(indent + '  ' + ts_str(o) for o in opts) + '\n' + indent + ']' + s[j:]
    n += 1
p.write_text(s)
print(f'{n} bonnes réponses rallongées dans le lexique étendu')

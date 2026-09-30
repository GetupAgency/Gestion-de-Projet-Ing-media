import 'server-only'
import type { CorrectionDossier } from './types'

/** Réponses de référence. Ce module ne doit jamais entrer dans un bundle navigateur. */
export const perduDeVueCorrection: CorrectionDossier = {
  optionExpense: { id: 'option-fees', title: 'Option · raccordement et frais de démarrage', quantity: 1, price: 300, unit: 'forfait', note: 'Hypothèse pédagogique. Solution et modalités d’encaissement à valider par le client ; frais variables futurs non inclus.' },
  copy: {
    outcome: `### La sortie attendue de l’entretien
Un compte rendu court : décisions validées, questions encore ouvertes, personnes qui doivent répondre et dates de retour. Dans cette référence : bus/tram, retrait au guichet, un bureau, validation humaine, ouverture à huit semaines, objectif de **25 000 € HT** et plafond de **28 000 € HT**.

À confirmer avant réalisation : les règles de conservation, le traitement des objets sensibles, l’hébergement, les droits d’accès, les informations affichées et la disponibilité des agents. Une réponse différente reste recevable si l’équipe obtient et trace un autre accord du client.`,
    planning: `Le projet comporte huit étapes, du kickoff au suivi après publication. Chaque étape regroupe de grandes tâches et se termine par un **jalon de validation** : un accord ou un résultat vérifiable, sans durée propre.

Le prototype valide les fonctions et les parcours. Les maquettes graphiques précisent ensuite l’apparence des écrans. Les tests V1 vérifient le service complet ; la préproduction permet de le répéter dans un environnement proche du site final, avant son ouverture au public.

La préparation des données peut commencer pendant la conception. Le reste suit les dépendances indiquées. La marge avant publication absorbe les retards ; elle ne finance pas de nouvelles fonctions. Le suivi après ouverture fait partie du même Gantt.

La référence suppose un développeur, un designer, un spécialiste IA, un testeur et un chef de projet disponibles aux périodes indiquées, sans être tous à temps plein. Les durées sont des jours de calendrier ouvré ; les charges indiquent le travail facturé. Vérifiez les disponibilités avant de vous engager.`,
    coverage: `### Ce que couvre cette somme
La préparation des données avec le client, les écrans, le développement, les réglages IA, les tests, les corrections prévues, la formation, la mise en service et la première semaine de suivi avec son bilan.

Les tarifs de prestation incluent les frais et la marge de l’agence. La réserve finance des imprévus validés ; ce n’est ni une fonction gratuite ni une seconde marge commerciale.`,
    aftercare: `### Après les trois premiers mois
Avec les hypothèses de référence, une année de fonctionnement représente **1 604 € HT** : hébergement, courriels, sauvegardes, domaine, 3 600 nouvelles photos et 6 000 recherches. Le stock initial n’est pas réanalysé chaque année. Ce repère annuel, distinct du total initial, doit être recalculé si les volumes changent.

La première semaine de suivi et son bilan sont inclus dans les prestations ci-dessous. Le support humain au-delà de cette période n’est pas inclus. Exemple d’option à négocier séparément : 0,25 jour de développement par mois à 600 €, soit **150 € HT/mois**. Aucune promesse de disponibilité permanente.`,
    clientWork: `### Le travail de la Métropole
Préparer 300 objets à 5 minutes chacun : 25 heures. Essais avec deux agents : 8 heures cumulées. Formation de trois agents : 6 heures cumulées. Soit **39 heures côté client**, non facturées par l’agence, à réserver dans leur charge de travail. L’alimentation quotidienne et la remise des objets restent assurées par le service.`,
    shipping: `### Comment traiter la demande d’envoi
Le client l’ajoute après validation des écrans : « On pourrait aussi les renvoyer, et faire payer les frais ? » Activez l’option pour en voir l’effet. Son estimation reste conditionnée à l’accord des services financiers et logistiques ; aucun mode d’encaissement n’est supposé autorisé.`,
  },
  client: {
    name: 'Camille Rivière',
    role: 'Responsable des services aux habitants · personnage fictif',
    posture: 'Vous connaissez votre service, pas la façon de fabriquer un logiciel. Vous voulez soulager vos agents et présenter un projet visible aux élus. Vous aimez les démonstrations spectaculaires, mais vous pouvez accepter une version plus simple si l’agence en explique le bénéfice.',
    opening: '« J’aimerais pouvoir montrer que notre Métropole retrouve les objets grâce à l’IA. Si on pouvait aussi proposer un envoi à domicile, ce serait vraiment complet. Vous pensez qu’on peut tout avoir dans huit semaines ? »',
  },
  analysis: `Le brief mélange trois attentes : **rendre davantage d’objets, réduire le travail inutile des agents et montrer une image moderne**. La première réponse de l’agence doit clarifier ce qui compte le plus.

On connaît le volume global, la taille de l’équipe et une date souhaitée. On ne connaît pas encore le budget, le nombre d’objets réellement concernés par la première version, la qualité des données, les règles de restitution, les moyens techniques ni la personne qui décide.

Les principales contradictions à relever : retrouver un objet « grâce à l’IA » ne prouve pas à qui il appartient ; ouvrir à tous les lieux augmente le travail de préparation ; livrer à domicile ajoute une activité au service ; les agents n’ont pas de temps illimité pour alimenter l’outil.

**Une bonne préparation d’entretien relie chaque question à une décision.** Demander « quel budget ? » doit permettre de choisir une première version, pas seulement de remplir une case.`,
  interview: [
    { question: 'Quel problème voulez-vous résoudre en premier ?', answer: 'D’abord augmenter les restitutions et éviter les appels sans réponse. La démonstration aux élus compte, mais je préfère un service utile à une vitrine inutilisable.', decision: 'Évaluer la proposition sur les restitutions et le temps des agents, puis sur son apparence.' },
    { question: 'Peut-on commencer sur une partie des objets ?', answer: 'Oui, le bus et le tram : environ 300 objets par mois. Un seul bureau les reçoit. Les plages et les autres lieux viendront ensuite.', decision: 'Limiter les lieux de collecte de la première version. Les 6 000 objets du brief concernent toute la Métropole.' },
    { question: 'Quelles données sont disponibles ?', answer: 'Nous pouvons préparer un lot de 300 objets en stock. Le fichier contient des doublons et il manque des photos. Deux agents peuvent consacrer du temps à son nettoyage.', decision: 'Prévoir un modèle de fiche, un import simple et du temps de préparation avant de développer la recherche.' },
    { question: 'Comment allez-vous alimenter le service ?', answer: 'Les agents saisissent les nouveaux objets au bureau. Nous avons deux ordinateurs, un téléphone pour les photos et une connexion correcte. Pas de saisie dans chaque bus pour cette première version.', decision: 'Une interface agent sur ordinateur, sans application mobile dédiée ni matériel à acheter.' },
    { question: 'Comment reconnaître le bon propriétaire ?', answer: 'Un agent compare les éléments fournis par la personne avec les détails que nous avons gardés privés. Le dernier contrôle a lieu au guichet avant la remise.', decision: 'Ne pas publier les signes distinctifs, numéros complets ou contenus d’un sac. Prévoir une demande puis une décision humaine.' },
    { question: 'Quels objets demandent un traitement particulier ?', answer: 'Documents d’identité, cartes bancaires et objets présentant un risque suivent notre circuit interne. Ils ne doivent pas apparaître dans le catalogue public. Un téléphone verrouillé demande aussi un contrôle adapté.', decision: 'Prévoir une orientation vers le service et des fiches réservées aux agents. Ne pas inventer une règle de remise ou une durée légale.' },
    { question: 'Faut-il un compte habitant ou une expédition ?', answer: 'Un suivi par lien individuel nous suffit. Pour commencer, le retrait au guichet est acceptable. L’envoi me plaît, mais je comprends qu’il faille l’étudier avec le service financier.', decision: 'Pas de compte avec mot de passe pour l’habitant, pas de paiement ni d’envoi dans la première version.' },
    { question: 'Que doit faire l’IA si elle hésite ?', answer: 'Mieux vaut quelques objets ressemblants, ou une recherche plus simple, qu’une fausse certitude. Je ne veux pas qu’elle autorise une restitution.', decision: 'L’IA aide à chercher. La recherche par catégorie, lieu et période reste disponible si elle échoue.' },
    { question: 'Qui décide et sous quel délai ?', answer: 'Je centralise les décisions. Le service informatique et le référent données personnelles sont associés dès le début. Je peux répondre aux validations en deux jours ouvrés.', decision: 'Nommer une interlocutrice, réserver les validations dans le planning et noter les points à faire confirmer par les services concernés.' },
    { question: 'Qu’est-ce qui est ferme dans les huit semaines ?', answer: 'La présentation aux élus et l’ouverture bus/tram. Nous pouvons montrer les autres idées comme une suite, mais pas les promettre pour la même date.', decision: 'Conserver la date en limitant les fonctions. Une date ne suffit pas à rendre toute demande faisable.' },
    { question: 'Quelle enveloppe pouvez-vous engager ?', answer: 'Je vise 25 000 € HT. Je peux défendre jusqu’à 28 000 € HT, trois mois de fonctionnement et réserve compris. Au-delà, il faut revoir la proposition.', decision: 'Construire un scénario autour de 25 000 € HT, sans consommer d’avance le plafond ni la réserve.' },
    { question: 'Comment jugera-t-on le résultat et que reste-t-il à confirmer ?', answer: 'Aujourd’hui, environ 28 % des objets sont rendus. Une demande prend environ six minutes à examiner. Je veux progresser. Les règles de conservation, l’hébergement et le traitement des catégories sensibles doivent être confirmés par nos services.', decision: 'Proposer des mesures comparables ; obtenir les règles du client avant ouverture. Les règles de l’exercice ne remplacent pas un avis métier ou juridique.' },
  ],
  intention: `**Perdu de vue aide un habitant à retrouver un objet et permet à un agent de traiter sa demande sans ressaisie.** Nous proposons une première ouverture pour les objets du bus et du tram, gérés par le bureau central.

L’habitant décrit sa perte et consulte quelques objets ressemblants. Il transmet ensuite un détail qu’un propriétaire peut connaître. L’agent compare ces éléments avec sa fiche interne, peut demander une précision et autorise le retrait si les éléments sont suffisants. La remise reste contrôlée au guichet.

L’IA aide à décrire les photos et à rapprocher les descriptions. Elle ne décide jamais de la propriété. Aucun résultat ne constitue une preuve. En cas d’indisponibilité, la recherche par catégorie, lieu et période reste utilisable.

Nous retenons un site adapté au téléphone, un accès protégé pour les agents, un suivi habitant par lien individuel, des notifications et des statistiques simples. Nous reportons l’expédition, le paiement, les autres lieux de collecte et les applications à installer.

**Deux objectifs proposés à valider :** atteindre 40 % de restitutions pour les objets reçus le premier mois, observés pendant 90 jours après leur entrée ; ramener le temps moyen de traitement d’une demande de six à quatre minutes, sans affaiblir les contrôles. Ce sont des objectifs, pas des résultats déjà obtenus.

Nous demandons au client de valider ce périmètre, de désigner l’interlocutrice et les agents de test, de préparer les données et de confirmer les règles de gestion. La mise en service reste visée à huit semaines. Le budget détaillé ci-dessous comprend la préparation, la réalisation, la mise en service et trois mois de fonctionnement.`,
  scope: [
    { feature: 'Déclarer une perte et chercher', choice: 'Inclus', reason: 'Description libre, catégorie, lieu et période ; recherche simple disponible sans IA.' },
    { feature: 'Voir des objets ressemblants', choice: 'Inclus', reason: 'Informations utiles mais limitées. Pas de preuve privée ni de certitude sur le propriétaire.' },
    { feature: 'Faire et suivre une demande', choice: 'Inclus', reason: 'Détail privé, contact, référence et suivi par lien individuel. Pas de compte habitant à créer.' },
    { feature: 'Traiter et remettre un objet', choice: 'Inclus', reason: 'Accès agent protégé, demande de précision, refus ou autorisation ; contrôle au guichet et trace de la remise.' },
    { feature: 'Enregistrer les objets', choice: 'Inclus', reason: 'Fiche publique distincte de la fiche privée, photo, emplacement et statut. Un import du stock préparé.' },
    { feature: 'Objets sensibles', choice: 'Circuit interne', reason: 'Pas de résultat public. La procédure précise est fournie et validée par le client.' },
    { feature: 'Envoi et paiement', choice: 'Reporté', reason: 'Transport, encaissement, responsabilités et traitement des litiges à organiser avant de chiffrer une promesse ferme.' },
    { feature: 'Tous les lieux / application native', choice: 'Reporté', reason: 'Former plus d’équipes et multiplier les points de saisie mettraient en danger la première ouverture.' },
  ],
  rates: { cp: 550, design: 500, dev: 600, ia: 650, qa: 450 },
  ceiling: 28000,
  reserve: 15,
  phases: [
    { id: 'kickoff', title: 'Kickoff', color: 'cadrage', question: 'Sur quoi doit-on se mettre d’accord avant de commencer ?', milestone: { title: 'Périmètre et moyens validés', after: ['validation'], criteria: 'Fonctions de la V1, exclusions, budget, date cible et décideur sont confirmés par écrit.', validator: 'Commanditaire + chef de projet' } },
    { id: 'prototype', title: 'Prototypage', color: 'conception', question: 'Que doit-on pouvoir essayer avant de parler de graphisme ?', milestone: { title: 'Prototype fonctionnel validé', after: ['accord-prototype'], criteria: 'Les parcours habitant et agent sont navigables, y compris les erreurs et les contrôles de restitution.', validator: 'Commanditaire + agents référents' } },
    { id: 'maquettes', title: 'Maquettes graphiques', color: 'conception', question: 'Quels écrans et quels états faut-il dessiner pour que le développement soit clair ?', milestone: { title: 'Maquettes approuvées', after: ['accord-ecrans'], criteria: 'Écrans téléphone et ordinateur, composants et états vides ou en erreur sont approuvés.', validator: 'Commanditaire + designer' } },
    { id: 'developpement', title: 'Développement', color: 'realisation', question: 'Quels grands blocs faut-il construire pour faire fonctionner le service ?', milestone: { title: 'V1 complète à tester', after: ['integration'], criteria: 'Inventaire, recherche, demandes, suivi et aide IA sont reliés. Les accès privés sont protégés.', validator: 'Développeur + chef de projet' } },
    { id: 'tests-v1', title: 'Tests V1', color: 'verification', question: 'Comment savoir que le service fonctionne, même quand tout ne se passe pas bien ?', milestone: { title: 'Recette V1 acceptée', after: ['corrections'], criteria: 'Les agents ont essayé les parcours ; les anomalies bloquantes sont corrigées et les tests rejoués.', validator: 'Commanditaire + responsable des tests' } },
    { id: 'preprod', title: 'Préproduction', color: 'verification', question: 'Que faut-il répéter et préparer avant d’ouvrir au public ?', milestone: { title: 'Accord pour publier', after: ['preprod', 'formation'], criteria: 'Import, accès, courriels, sauvegarde et retour arrière vérifiés. Agents formés et consignes disponibles.', validator: 'Commanditaire + service informatique' } },
    { id: 'publication', title: 'Publication', color: 'service', question: 'Qui ouvre le service, qui contrôle et que fait-on si un problème apparaît ?', milestone: { title: 'Service ouvert et vérifié', after: ['publication'], criteria: 'Le site est public et un parcours complet vient d’être vérifié. Le contact de support est connu.', validator: 'Chef de projet + service informatique' } },
    { id: 'suivi', title: 'Suivi', color: 'service', question: 'Que regarde-t-on après l’ouverture, et qui reprend la main ?', milestone: { title: 'Bilan de lancement partagé', after: ['bilan'], criteria: 'Premiers incidents et usages analysés, actions prioritaires attribuées et relais au service confirmé.', validator: 'Commanditaire + chef de projet' } },
  ],
  tasks: [
    { id: 'entretien', phase: 'kickoff', title: 'Réunion de lancement', owner: 'Chef de projet + client', duration: 1, after: [], charges: { cp: 1 }, deliverable: 'Objectifs, interlocuteurs, contraintes et premières questions partagés' },
    { id: 'cadrage', phase: 'kickoff', title: 'Périmètre et organisation', owner: 'Chef de projet', duration: 1, after: ['entretien'], charges: { cp: 1 }, deliverable: 'Compte rendu, note d’intention, fonctions retenues et règles de décision' },
    { id: 'validation', phase: 'kickoff', title: 'Validation du périmètre', owner: 'Client + chef de projet', duration: 2, after: ['cadrage'], charges: { cp: 0.5 }, deliverable: 'Accord écrit sur la V1, le budget, la date et les moyens' },
    { id: 'ecrans', phase: 'prototype', title: 'Parcours et prototype navigable', owner: 'Designer + chef de projet', duration: 2, after: ['validation'], charges: { design: 2, cp: 0.25 }, deliverable: 'Parcours habitant et agent, écrans simples reliés et cas difficiles' },
    { id: 'accord-prototype', phase: 'prototype', title: 'Essai et accord sur le prototype', owner: 'Client + agents + chef de projet', duration: 1, after: ['ecrans'], charges: { cp: 0.25 }, deliverable: 'Retours regroupés et périmètre fonctionnel validé' },
    { id: 'maquettes', phase: 'maquettes', title: 'Écrans et composants graphiques', owner: 'Designer + chef de projet', duration: 2, after: ['accord-prototype'], charges: { design: 2, cp: 0.25 }, deliverable: 'Maquettes téléphone et ordinateur, composants, états vides et erreurs' },
    { id: 'accord-ecrans', phase: 'maquettes', title: 'Validation des maquettes', owner: 'Client + chef de projet', duration: 2, after: ['maquettes'], charges: { cp: 0.25 }, deliverable: 'Accord sur les écrans avant leur réalisation' },
    { id: 'donnees', phase: 'developpement', title: 'Données et règles de gestion', owner: 'Spécialiste IA + dev + CP', duration: 3, after: ['validation'], charges: { ia: 1, dev: 1, cp: 0.5 }, deliverable: 'Modèle de fiche, séparation public / privé et lot de test préparé avec les agents' },
    { id: 'essai-ia', phase: 'developpement', title: 'Essai du rapprochement IA', owner: 'Spécialiste IA + dev', duration: 3, after: ['donnees'], charges: { ia: 3, dev: 1 }, deliverable: 'Essai sur des objets ressemblants, limites et recherche de secours' },
    { id: 'inventaire', phase: 'developpement', title: 'Inventaire et accès agent', owner: 'Développeur', duration: 5, after: ['accord-ecrans', 'donnees'], charges: { dev: 5 }, deliverable: 'Fiches, import, accès agent et informations privées' },
    { id: 'demandes', phase: 'developpement', title: 'Recherche et demandes', owner: 'Développeur', duration: 5, after: ['inventaire', 'essai-ia'], charges: { dev: 5 }, deliverable: 'Recherche, preuve privée, suivi, notifications et décisions' },
    { id: 'integration', phase: 'developpement', title: 'Intégration de l’aide IA', owner: 'Développeur + spécialiste IA', duration: 3, after: ['demandes'], charges: { dev: 2, ia: 1 }, deliverable: 'Service complet : rapprochement IA et solution sans IA reliés aux demandes' },
    { id: 'tests', phase: 'tests-v1', title: 'Tests des parcours et des accès', owner: 'Testeur + développeur', duration: 3, after: ['integration'], charges: { qa: 3, dev: 1 }, deliverable: 'Tests fonctionnels, accès, téléphone, clavier et erreurs' },
    { id: 'recette', phase: 'tests-v1', title: 'Recette avec les agents', owner: 'Client + CP + testeur', duration: 2, after: ['tests'], charges: { cp: 1, qa: 0.5 }, deliverable: 'Liste des écarts constatés avec les futurs utilisateurs' },
    { id: 'corrections', phase: 'tests-v1', title: 'Corrections et nouveaux tests', owner: 'Développeur + testeur', duration: 2, after: ['recette'], charges: { dev: 2, qa: 0.5 }, deliverable: 'Écarts bloquants résolus et validation de la V1' },
    { id: 'preprod', phase: 'preprod', title: 'Répétition avant ouverture', owner: 'Développeur + service informatique', duration: 1, after: ['corrections'], charges: { dev: 0.5 }, deliverable: 'Installation en préproduction, import, courriels, sauvegarde et retour arrière vérifiés' },
    { id: 'formation', phase: 'preprod', title: 'Formation et consignes aux agents', owner: 'Chef de projet + agents', duration: 1, after: ['corrections'], charges: { cp: 0.5 }, deliverable: 'Agents formés, procédure de restitution et contact de support transmis' },
    { id: 'publication', phase: 'publication', title: 'Mise en ligne et contrôle final', owner: 'Développeur + chef de projet', duration: 1, after: ['preprod', 'formation'], charges: { dev: 0.5, cp: 0.25 }, deliverable: 'Ouverture au public, parcours de contrôle et possibilité de retour arrière' },
    { id: 'suivi', phase: 'suivi', title: 'Premiers usages et incidents', owner: 'Développeur + testeur', duration: 5, after: ['publication'], charges: { dev: 0.75, qa: 0.25 }, deliverable: 'Une semaine d’observation et traitement des premiers incidents dans la charge prévue' },
    { id: 'bilan', phase: 'suivi', title: 'Bilan et passage de relais', owner: 'Chef de projet + client', duration: 1, after: ['suivi'], charges: { cp: 0.75 }, deliverable: 'Bilan de lancement, actions attribuées et modalités de support suivantes' },
  ],
  option: { id: 'expedition', phase: 'developpement', title: 'Option · envoi et paiement', owner: 'CP + designer + dev + testeur', duration: 7, after: ['demandes'], charges: { cp: 0.5, design: 0.5, dev: 5, qa: 1 }, deliverable: 'Option fictive à confirmer avec finances et logistique : envoi, paiement et suivi' },
  expenses: [
    { id: 'hosting', title: 'Hébergement', quantity: 3, unit: 'mois', price: 90, note: 'Environnements de test et de production. Hypothèse de petit volume.' },
    { id: 'domain', title: 'Nom de domaine', quantity: 1, unit: 'an', price: 20, note: 'Année entière facturée au départ, même si le budget couvre trois mois.' },
    { id: 'mail', title: 'Courriels de suivi', quantity: 3, unit: 'mois', price: 10, note: 'Forfait fictif à confirmer selon le nombre de messages.' },
    { id: 'backup', title: 'Sauvegardes', quantity: 3, unit: 'mois', price: 10, note: 'Stockage des sauvegardes, hors temps d’intervention après livraison.' },
    { id: 'images', title: 'IA · préparation des photos', quantity: 1200, unit: 'analyse', price: 0.04, note: '300 objets de stock + 300 nouveaux par mois pendant trois mois. Un appel par objet dans cette hypothèse.' },
    { id: 'search', title: 'IA · demandes de recherche', quantity: 1500, unit: 'recherche', price: 0.02, note: '500 recherches par mois pendant trois mois. Coût unitaire fictif, à vérifier avec la solution retenue.' },
  ],
  objects: [
    { id: 'PDV-0431', category: 'audio', title: 'Écouteurs sans fil blancs', place: 'Tram · secteur centre', transport: 'tram', foundOn: '2026-10-06', date: 'Mardi 6 octobre', publicDescription: 'Une paire d’écouteurs et son boîtier blanc.', privateDescription: 'Petite étoile bleue dessinée à l’intérieur du couvercle. Numéro se terminant par 4821.', storage: 'Armoire A · bac 12' },
    { id: 'PDV-0438', category: 'audio', title: 'Écouteurs sans fil blancs', place: 'Bus · secteur gare', transport: 'bus', foundOn: '2026-10-07', date: 'Mercredi 7 octobre', publicDescription: 'Écouteurs blancs dans un boîtier de charge.', privateDescription: 'Boîtier gravé « NORA ». Numéro se terminant par 9063.', storage: 'Armoire A · bac 13' },
    { id: 'PDV-0440', category: 'bag', title: 'Sac à dos bleu', place: 'Bus · secteur centre', transport: 'bus', foundOn: '2026-10-07', date: 'Mercredi 7 octobre', publicDescription: 'Sac à dos bleu de taille moyenne.', privateDescription: 'Carnet rouge et porte-clés en forme de lune à l’intérieur.', storage: 'Étagère B · case 4' },
    { id: 'PDV-0442', category: 'sensitive', title: 'Document d’identité', place: 'Bureau central', transport: 'central', foundOn: '2026-10-07', date: 'Mercredi 7 octobre', publicDescription: '', privateDescription: 'Circuit interne. Aucune identité réelle dans cette démonstration.', storage: 'Armoire sécurisée' },
  ],
  screenFlows: [
    { title: 'Parcours principal', description: 'Les repères correspondent aux vues du prototype. H5 est le même écran de suivi : son contenu change selon la réponse de l’agent.', source: `flowchart TD
    accTitle: De la recherche à la remise de l’objet
    accDescr: Recherche, résultats, fiche objet, demande, suivi habitant puis examen agent. Un retrait autorisé est suivi d’un contrôle au guichet et d’une remise enregistrée.
    H1["H1 · Recherche"] -->|Chercher| H2["H2 · Résultats"]
    H2 -->|Voir la fiche| H3["H3 · Fiche objet"]
    H3 -->|Demander la restitution| H4["H4 · Demande"]
    H4 -->|Transmettre| H5["H5 · Suivi : demande reçue"]
    H4 -->|Reçue au bureau| A1["A1 · Demandes reçues"]
    A1 -->|Ouvrir| A2["A2 · Examen des indices"]
    A2 -->|Indices suffisants| A3["A3 · Retrait autorisé"]
    A3 -->|Informer| H5B["H5 · Suivi : préparer sa venue"]
    A3 -->|Contrôle au guichet| A4["A4 · Remise enregistrée"]
    A4 -->|Confirmer| H5C["H5 · Suivi : objet remis"]
    classDef citizen fill:#eaf2ef,stroke:#173e39,color:#173e39
    classDef agent fill:#f0f1f5,stroke:#404661,color:#232638
    classDef alternate fill:#fff5d7,stroke:#866514,color:#594309
    class H1,H2,H3,H4,H5,H5B,H5C citizen
    class A1,A2,A3,A4 agent` },
    { title: 'Cas particuliers', description: 'Une recherche sans résultat et une erreur de l’IA ont une issue. Une demande de précision revient à l’habitant, puis à l’agent pour un nouvel examen.', source: `flowchart TD
    accTitle: Les cas particuliers du parcours
    accDescr: La recherche peut être indisponible, sans résultat ou concerner un document sensible. L’agent peut demander une précision ou refuser en expliquant.
    H1["H1 · Recherche"] -->|IA indisponible| SIMPLE["Rechercher avec les filtres"]
    SIMPLE --> H2["H2 · Résultats"]
    H1 -->|Objet sensible| CONTACT["Orientation vers le bureau"]
    H2 -->|Aucun objet correspondant| H4["H4 · Déclaration sans objet associé"]
    H2 -->|Modifier la recherche| H1
    H4 --> A1["A1 · Demandes reçues"]
    A1 -->|Associer une fiche disponible| A2["A2 · Examen des indices"]
    A2 -->|Indice manquant| H5["H5 · Précision demandée"]
    H5 -->|Répondre à l’agent| A2
    A2 -->|Refuser et expliquer| H5B["H5 · Demande non confirmée"]
    H5B -->|Reprendre la recherche| H1
    classDef citizen fill:#eaf2ef,stroke:#173e39,color:#173e39
    classDef agent fill:#f0f1f5,stroke:#404661,color:#232638
    classDef alternate fill:#fff5d7,stroke:#866514,color:#594309
    class H1,H2,H4,H5,H5B citizen
    class A1,A2 agent
    class SIMPLE,CONTACT alternate` },
    { title: 'Inventaire', description: 'La fiche publique aide à chercher. Les indices, les documents sensibles et le rangement restent côté agent. Un objet réservé ou remis ne figure plus dans les résultats.', source: `flowchart TD
    accTitle: De l’inventaire à la recherche
    accDescr: Un agent enregistre un objet. Les objets sensibles restent internes. Les objets ordinaires disponibles alimentent la recherche ; ils en sortent après autorisation du retrait.
    A5["A5 · Inventaire"] -->|Enregistrer un objet| A6["A6 · Nouvelle fiche"]
    A6 -->|Objet ordinaire| PUBLIC["Description publique + indices privés"]
    A6 -->|Document sensible| INTERNE["Fiche interne uniquement"]
    PUBLIC -->|Enregistrer| STOCK["A5 · Objet disponible"]
    INTERNE -->|Enregistrer| STOCKI["A5 · Circuit interne"]
    STOCK -->|Description publique| H2["H2 · Résultats de recherche"]
    STOCK -->|Indices privés| A2["A2 · Examen des indices"]
    A2 -->|Autoriser le retrait| RESERVE["A5 · Objet réservé"]
    RESERVE -->|Remise au guichet| REMIS["A5 · Historique des objets remis"]
    classDef citizen fill:#eaf2ef,stroke:#173e39,color:#173e39
    classDef agent fill:#f0f1f5,stroke:#404661,color:#232638
    classDef alternate fill:#fff5d7,stroke:#866514,color:#594309
    class H2 citizen
    class A5,A6,STOCK,A2,RESERVE,REMIS agent
    class PUBLIC,INTERNE,STOCKI alternate` },
  ],
  demoGuide: `**Scénario à jouer :** cherchez des écouteurs blancs perdus dans le tram. Deux objets se ressemblent. Ouvrez la fiche du premier objet, puis déposez une demande avec « une étoile bleue à l’intérieur du couvercle » et une adresse fictive. Passez côté agent : le détail privé permet une comparaison, pas une remise automatique. Demandez une précision, puis autorisez le retrait et simulez le contrôle au guichet.

Essayez ensuite un résultat absent, une IA indisponible et un document sensible. Testez aussi les filtres de lieu et de date (jeu de données du 6 au 7 octobre 2026). Le bouton « Charger un exemple » crée une demande pour démarrer directement côté agent. Côté inventaire, ajoutez un objet ordinaire puis un document sensible : ce dernier doit rester interne.

Le prototype simule le produit dans cette page. Il n’envoie aucun courriel et n’effectue aucune identification réelle. L’accès agent de la future application, les liens individuels, la concurrence entre demandes et la sécurité du stockage restent du travail de production chiffré dans le budget.`,
  tests: [
    { action: 'Décrire un objet courant', expected: 'Des objets ressemblants peuvent être proposés, sans certitude ni détail privé.' },
    { action: 'Chercher un objet absent', expected: 'Aucun faux résultat ; possibilité de laisser une déclaration.' },
    { action: 'IA indisponible', expected: 'Message clair et accès à une recherche par catégorie.' },
    { action: 'Chercher un document d’identité', expected: 'Orientation vers le service ; aucune fiche publique.' },
    { action: 'Déposer une demande incomplète', expected: 'Champ à corriger identifié, saisies conservées, aucune confirmation prématurée.' },
    { action: 'Examiner deux objets semblables', expected: 'L’agent voit les détails privés, peut demander une précision ou refuser.' },
    { action: 'Autoriser puis remettre un objet', expected: 'Deux actions distinctes ; la remise exige le contrôle au guichet.' },
    { action: 'Tester la future application avec deux sessions', expected: 'Une seule remise possible ; accès agent et liens de suivi contrôlés côté serveur. À tester en production, non prouvé par cette démo locale.' },
  ],
  risks: [
    { risk: 'Données incomplètes', action: 'Tester 30 fiches dès le cadrage. Préparer le stock avec les agents avant l’import.', owner: 'Client + responsable des données' },
    { risk: 'Objets trop ressemblants', action: 'Montrer des possibilités sans détail distinctif. Garder la preuve et la décision côté agent.', owner: 'Designer + responsable du service' },
    { risk: 'Réponses ou factures IA imprévues', action: 'Limiter les appels, mesurer les erreurs, suivre le coût et conserver une recherche simple.', owner: 'Spécialiste IA + développeur' },
    { risk: 'Retours client tardifs', action: 'Nommer une personne qui tranche ; réserver deux jours de validation ; mesurer l’effet d’un retard.', owner: 'Chef de projet' },
    { risk: 'Extension du périmètre', action: 'Chiffrer la demande séparément et obtenir un arbitrage avant de la promettre.', owner: 'Chef de projet + commanditaire' },
    { risk: 'Règles de gestion non confirmées', action: 'Faire valider accès, conservation, hébergement et procédures sensibles avant ouverture. Pas de règle légale inventée.', owner: 'Client et services compétents' },
  ],
  prompts: [
    { title: 'Préparer l’entretien', guidance: 'À utiliser après une première lecture par l’équipe. Demandez pourquoi chaque question compte.', text: `Tu aides notre agence à préparer un entretien client. Voici son expression de besoin : [coller le brief].\nVoici notre première lecture : [faits, inconnues, contradictions].\nPropose 10 questions prioritaires. Pour chacune : information recherchée, décision qu’elle pourrait changer, relance utile. Repère les ambitions floues ou contradictoires. N’invente aucune réponse du client. Termine par les trois questions à poser en premier et explique pourquoi.` },
    { title: 'Rédiger la note d’intention', guidance: 'N’autorisez que les décisions validées et les hypothèses nommées. Une page, compréhensible par le client.', text: `Rédige une note d’intention d’une page pour Perdu de vue.\nFaits confirmés pendant l’entretien : [réponses].\nDécisions de notre équipe : [utilisateurs, fonctions incluses, exclusions].\nContraintes : [date, moyens, budget].\nExplique le problème, notre réponse, le rôle de l’IA, les décisions humaines et deux résultats mesurables. Termine par les validations demandées au client. Utilise des phrases courtes. Distingue ce qui est confirmé et ce qui reste à vérifier. Ne rajoute aucune fonction.` },
    { title: 'Modéliser le prototype avec Antigravity', guidance: 'La bonne entrée est une liste de fonctions et de comportements, accompagnée des décisions de l’équipe. Pas « fais une belle app ».', text: `Construis un prototype web local de Perdu de vue à partir de notre note : [coller].\nPérimètre validé : [fonctions]. Exclusions : [liste].\nUtilisateurs : un habitant et un agent. Décris d’abord les vues et les transitions, puis attends notre validation avant de les construire.\nParcours à rendre utilisables : [déclaration → résultats → demande → suivi ; agent → examen → décision → remise].\nPour chaque vue, précise les informations publiques et privées, les actions et les messages d’erreur. Ajoute un résultat absent, deux objets semblables et une IA indisponible.\nTout doit fonctionner avec des données fictives locales. Ne branche ni API payante, ni courriel, ni paiement, ni compte réel. Signale les simulations. Fournis une remise à zéro.\nInterface lisible à 390 px et sur ordinateur, champs étiquetés, boutons accessibles au clavier. Teste les parcours et fournis les étapes de lancement, les captures et les limites qui restent à développer.` },
    { title: 'Construire un rétroplanning lisible', guidance: 'Les charges doivent venir d’une estimation discutée. Le rendu visuel ne prouve pas que les dates sont possibles.', text: `Transforme nos étapes, grandes tâches et jalons en un seul Gantt HTML interactif. Regroupe les tâches par étape, distingue les barres de travail des losanges de validation et fournis une légende des couleurs. Inclus la publication et le suivi après ouverture.\nDate de début : [date]. Date de mise en service : [date]. Convention : lundi à vendredi ; signaler les jours fériés non pris en compte.\nPour chaque tâche, voici : identifiant, titre, responsable, durée, charge par métier, dépendances, validation et livrable : [tableau].\nContrôle les dépendances, les tâches manquantes et les chevauchements de charge avant de dessiner. Calcule les dates et la marge jusqu’à l’ouverture. Permets de simuler un retard et de revenir au scénario de départ.\nN’invente aucune charge. Signale les données manquantes. Distingue le nombre de jours travaillés et la durée écoulée. Fournis une table lisible en plus du graphique.` },
    { title: 'Construire et vérifier le budget', guidance: 'Partir des mêmes tâches. Exiger les formules et les hypothèses, puis vérifier un poste à la main.', text: `Crée un budget détaillé, lisible et recalculable pour ce projet.\nTâches et charges par métier : [même tableau que le planning]. Tarifs HT : [tarifs]. Frais externes : [quantités et prix unitaires]. Volumes IA sur trois mois : [hypothèses]. Réserve : [pourcentage et assiette]. Plafond confirmé : [montant].\nCalcule les prestations, les frais, le sous-total, la réserve, le total et l’écart au plafond. Affiche les formules. Présente les options séparément et distingue coûts ponctuels et récurrents.\nContrôle que chaque jour facturé apparaît dans le planning. N’invente pas de prix de fournisseur : marque les hypothèses à vérifier. Signale les arrondis. Les heures de prototype en cours ne représentent pas le coût de fabrication du vrai service.` },
  ],
  rubric: [
    { title: 'Analyse et entretien', points: 4, detail: 'Faits et inconnues distingués (1), questions liées à des décisions (2), réponses et points ouverts tracés (1).' },
    { title: 'Note d’intention', points: 3, detail: 'Problème et réponse compréhensibles (1), fonctions et exclusions (1), résultats attendus et validations (1).' },
    { title: 'Prototype et fonctions', points: 5, detail: 'Habitant et agent reliés (2), cas difficile (1), informations publiques/privées et décision humaine (1), test croisé et amélioration (1).' },
    { title: 'Rétroplanning', points: 4, detail: 'Étapes, grandes tâches et dépendances (1), charges et responsables (1), jalons vérifiables et validateurs (1), publication, suivi et marge défendus (1).' },
    { title: 'Budget', points: 4, detail: 'Calculs et quantités (1), correspondance avec le planning (1), fonctionnement IA et frais (1), réserve et arbitrage (1).' },
  ],
}

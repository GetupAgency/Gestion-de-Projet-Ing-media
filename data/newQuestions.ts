/**
 * Questions ajoutées après l'audit pédagogique : scénarios, textes à trous et
 * vrai/faux ancrés dans le quotidien d'un chef de projet junior.
 * Elles sont rattachées aux sections via `newQuestionSections` (lib/content.ts).
 */
import type { QuizQuestion } from './modules'

export const newQuestions: QuizQuestion[] = [
  // ───────── lancement / cdc ─────────
  {
    id: 'nq-cdc-1',
    question: 'Que répondez-vous ?',
    options: [
      'Pas de problème, je vous envoie un devis vendredi en m\'inspirant d\'Airbnb',
      'Je ne peux rien chiffrer sans un cahier des charges complet de votre part',
      'Je vous propose un atelier de cadrage de 2 h cette semaine, puis une fourchette budgétaire par lot',
      'Je vous envoie un devis pour un MVP au prix du marché, on ajustera après signature'
    ],
    correctAnswer: 2,
    explanation: 'Un devis sans cadrage engage l\'agence sur un périmètre qu\'elle ne connaît pas : c\'est la source n°1 des dépassements. Refuser sèchement (option B) perd le client ; le « prix du marché » (D) n\'existe pas. L\'atelier de cadrage transforme une idée en besoins, puis en lots chiffrables.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'gestion-projet',
    scenarioContext: 'Premier rendez-vous. Le client : « Je veux un site comme Airbnb mais pour louer des salles de réunion. Vous pouvez me faire un devis pour vendredi ? »'
  },
  {
    id: 'nq-cdc-2',
    question: 'Un objectif _____ est Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini.',
    options: ['SMART', 'MoSCoW', 'KISS', 'OKR'],
    correctAnswer: 0,
    explanation: 'SMART est la grille de rédaction des objectifs. MoSCoW sert à prioriser des fonctionnalités, KISS est un principe de simplicité, OKR un cadre de pilotage d\'entreprise.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'gestion-projet'
  },
  {
    id: 'nq-cdc-3',
    question: 'Que faites-vous de cette phrase dans le cahier des charges ?',
    options: [
      'La garder telle quelle : c\'est l\'intention du client, on la respectera',
      'La remplacer par des critères vérifiables : score Lighthouse mobile > 90, réservation en 3 écrans maximum, test avec 5 utilisateurs',
      'La supprimer : ce n\'est pas une exigence technique',
      'Ajouter « et responsive » pour la préciser'
    ],
    correctAnswer: 1,
    explanation: '« Moderne et ergonomique » n\'est pas vérifiable : à la recette, le client pourra refuser le site sur un ressenti. Un CDC transforme les intentions en critères mesurables, qui protègent les deux parties.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Le client a écrit dans le brief : « Le site doit être moderne et ergonomique. »'
  },

  // ───────── lancement / cartographie ─────────
  {
    id: 'nq-carto-1',
    question: 'Comment orientez-vous la discussion ?',
    options: [
      'Montrer les chiffres (75 % de rebond, 60 % de trafic mobile, 8 s de chargement) et proposer la performance mobile en lot 1, le logo en lot 2',
      'Refaire le logo d\'abord : c\'est ce que le client demande et ça se voit',
      'Expliquer que le logo n\'a aucun intérêt et refuser de le traiter',
      'Faire les deux en même temps sans changer le budget'
    ],
    correctAnswer: 0,
    explanation: 'L\'audit sert à objectiver les priorités. On ne dit pas « non » au logo, on le repositionne derrière ce qui fait perdre des clients tous les jours. Les chiffres remplacent l\'opinion.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'gestion-projet',
    scenarioContext: 'Votre audit du site existant révèle 8 s de chargement, 75 % de rebond et 60 % de trafic mobile sur une version non optimisée. Le client ouvre la réunion par : « Avant tout, on refait le logo. »'
  },

  // ───────── lancement / cibles ─────────
  {
    id: 'nq-cibles-1',
    question: 'Un persona doit être construit à partir du client lui-même, puisque c\'est lui qui paie le site.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Le client et l\'utilisateur final sont deux personnes différentes. Le persona décrit l\'utilisateur (le visiteur, l\'acheteur, le patient) ; un site conçu pour plaire au dirigeant rate souvent sa cible.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'design-ux'
  },

  // ───────── planification / planning ─────────
  {
    id: 'nq-plan-1',
    question: 'Le client veut ajouter 2 semaines d\'ateliers avant la conception. Est-ce faisable ?',
    options: [
      'Oui, l\'équipe rattrapera pendant le développement',
      'Non : le rétroplanning est déjà à 13 semaines sur 13 disponibles, il faut arbitrer (réduire le périmètre ou décaler la date)',
      'Oui, avec des heures supplémentaires sur la recette',
      'Non, sauf si on supprime la phase de recette'
    ],
    correctAnswer: 1,
    explanation: 'Du 1er septembre au 1er décembre il y a 13 semaines. Conception 3 + développement 8 + recette 2 = 13. Chaque semaine ajoutée doit être retirée ailleurs ou repousser la date. Supprimer la recette ou « rattraper » en dev sont des dettes déguisées.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'methodologie',
    scenarioContext: 'Nous sommes le 1er septembre. Lancement impératif le 1er décembre. Votre rétroplanning : conception 3 semaines, développement 8 semaines, recette 2 semaines.'
  },
  {
    id: 'nq-plan-2',
    question: 'Dans un diagramme de Gantt, la suite de tâches dont le moindre retard décale la date de fin s\'appelle le _____.',
    options: ['chemin critique', 'jalon', 'sprint', 'backlog'],
    correctAnswer: 0,
    explanation: 'Le chemin critique est la chaîne de tâches sans marge. Un jalon est une date clé, un sprint une itération, un backlog une liste priorisée. Surveiller le chemin critique, c\'est surveiller la date de livraison.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'nq-plan-3',
    question: 'Que faites-vous ?',
    options: [
      'Attendre : « presque fini » veut dire que ça arrive',
      'Réassigner la tâche à un autre développeur',
      'Décomposer avec lui le reste à faire en sous-tâches d\'une demi-journée et identifier ce qui bloque',
      'Prévenir le client que le sprint sera en retard'
    ],
    correctAnswer: 2,
    explanation: 'Trois « encore 2 jours » d\'affilée signalent un blocage caché (dépendance, doute technique, tâche mal comprise). Décomposer rend le reste visible et mesurable ; réassigner ou alerter le client sans diagnostic est prématuré.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'gestion-projet',
    scenarioContext: 'Daily du mercredi. Pour la troisième fois de suite, un développeur annonce : « J\'ai presque fini, encore 2 jours. »'
  },
  {
    id: 'nq-plan-4',
    question: 'En mode _____, le client paie le temps réellement passé, ce qui convient aux projets dont le périmètre est encore flou.',
    options: ['forfait', 'régie', 'abonnement', 'licence'],
    correctAnswer: 1,
    explanation: 'La régie (ou time & materials) facture au temps passé ; le forfait fixe un prix pour un périmètre défini. Un forfait sur un périmètre flou fait porter tout le risque à l\'agence.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'budget'
  },

  // ───────── planification / budget ─────────
  {
    id: 'nq-budget-1',
    question: 'Le _____ est le prix facturé pour une journée de travail d\'un profil (par exemple 500 € pour un développeur senior).',
    options: ['ROI', 'KPI', 'SLA', 'TJM'],
    correctAnswer: 3,
    explanation: 'TJM = taux journalier moyen. C\'est la brique de base du chiffrage : jours estimés × TJM par profil, puis marge. ROI, KPI et SLA mesurent respectivement la rentabilité, la performance et le niveau de service.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'budget'
  },
  {
    id: 'nq-budget-2',
    question: 'Votre chiffrage sort à 27 060 € marge comprise. Le client a 25 000 € HT. Que faites-vous ?',
    options: [
      'Je retire la marge de 10 % pour rentrer dans le budget',
      'Je baisse les TJM de tous les profils',
      'Je propose de passer une fonctionnalité d\'environ 2 000 € en option ou en lot 2, en gardant la marge',
      'Je signe à 25 000 € : on se rattrapera sur les avenants'
    ],
    correctAnswer: 2,
    explanation: 'Détail : 30 j dev × 500 + 8 j design × 450 + 10 j CP × 600 = 24 600 €, +10 % = 27 060 €. La marge couvre les imprévus : la supprimer, c\'est démarrer en dépassement. On ajuste le périmètre, pas la sécurité du projet.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'budget',
    scenarioContext: 'Devis pour un site e-commerce : 30 jours de développement à 500 €, 8 jours de design à 450 €, 10 jours de chef de projet à 600 €, marge 10 %.'
  },
  {
    id: 'nq-budget-3',
    question: 'Un devis au forfait signé signifie que toute demande hors cahier des charges est offerte tant qu\'elle est « petite ».',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'Le forfait couvre le périmètre écrit, ni plus ni moins. Les « petites » demandes s\'accumulent (scope creep) et se chiffrent en jours. On les note, on les chiffre, on les priorise ; un geste commercial est possible, mais c\'est une décision, pas une obligation.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'budget'
  },

  // ───────── planification / outils ─────────
  {
    id: 'nq-outils-1',
    question: 'Que mettez-vous en place ?',
    options: [
      'Un mail récapitulatif chaque soir',
      'Un tableau Kanban partagé en lecture (Trello, Notion…) et un point hebdomadaire de 30 minutes',
      'Un accès au dépôt GitHub pour qu\'il voie les commits',
      'Une réunion quotidienne avec le client'
    ],
    correctAnswer: 1,
    explanation: 'Le client veut de la visibilité, pas du bruit. Un tableau visuel répond à « où en est-on ? » sans solliciter l\'équipe ; le point hebdo cadre les décisions. GitHub est illisible pour un non-technicien, le mail quotidien et la réunion quotidienne coûtent du temps sans rassurer.',
    type: 'scenario',
    difficulty: 'facile',
    category: 'methodologie',
    scenarioContext: 'Équipe de 4 en télétravail. Le client : « Je voudrais voir l\'avancement sans avoir à vous appeler tous les jours. »'
  },

  // ───────── conception / cdc-technique ─────────
  {
    id: 'nq-spec-1',
    question: 'Quelle user story est la mieux écrite ?',
    options: [
      'En tant qu\'utilisateur, je veux un bouton « Réserver »',
      'Le développeur doit coder un formulaire de réservation avec un calendrier',
      'En tant que client, je veux réserver',
      'En tant que client pressé, je veux réserver une table en moins de 3 écrans afin de ne pas abandonner en cours de route'
    ],
    correctAnswer: 3,
    explanation: 'Une bonne user story nomme un utilisateur précis, un objectif et un bénéfice qui guide les choix d\'interface. « Un bouton » décrit une solution, pas un besoin ; « je veux réserver » est trop vague pour être testé.',
    type: 'mcq',
    difficulty: 'moyen',
    category: 'methodologie'
  },
  {
    id: 'nq-spec-2',
    question: 'Les _____ d\'une user story décrivent les conditions vérifiables qui permettent de dire qu\'elle est terminée.',
    options: ['critères d\'acceptation', 'story points', 'dépendances', 'wireframes'],
    correctAnswer: 0,
    explanation: 'Sans critères d\'acceptation (« étant donné… quand… alors… »), le développeur et le client ont chacun leur idée de « fini ». Les story points estiment l\'effort, les dépendances l\'ordre, les wireframes l\'écran.',
    type: 'fill-blank',
    difficulty: 'moyen',
    category: 'test-qualite'
  },

  // ───────── developpement / technologies et cms ─────────
  {
    id: 'nq-tech-1',
    question: 'Quelle réponse est la plus honnête ?',
    options: [
      'Un développement sur mesure React + Node pour ne dépendre de personne',
      'Shopify ou WooCommerce : les deux tiennent le budget et le délai ; le choix dépend de l\'autonomie souhaitée et du coût récurrent',
      'Une application mobile native, c\'est ce que les clients utilisent',
      'Un site vitrine avec un numéro de téléphone pour commander'
    ],
    correctAnswer: 1,
    explanation: 'À 8 000 € et 6 semaines, le sur-mesure est hors budget et le natif hors sujet. Deux solutions éditeur répondent au besoin ; le rôle du chef de projet est d\'expliquer le compromis (abonnement mensuel vs hébergement à gérer) plutôt que d\'imposer une marque.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'technique',
    scenarioContext: 'Un boulanger veut vendre en ligne avec click & collect : 50 produits, 8 000 € de budget, ouverture dans 6 semaines, et il veut mettre à jour ses produits lui-même.'
  },
  {
    id: 'nq-tech-2',
    question: 'Choisir la technologie « la plus populaire du moment » garantit que le projet sera facile à maintenir.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'La popularité facilite le recrutement, pas la maintenance. Ce qui compte : l\'adéquation au besoin, les compétences réelles de l\'équipe et du client, la documentation, et la pérennité de la solution.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'technique'
  },

  // ───────── test / tests-equipe ─────────
  {
    id: 'nq-test-1',
    question: 'Que demandez-vous avant de passer le ticket en « validé » ?',
    options: [
      'Rien : il est senior, je lui fais confiance',
      'Sur quels navigateurs, avec quelles données, et quel est le cas limite le plus risqué ?',
      'Qu\'il rejoue tous les tests du projet depuis le début',
      'Que le client teste lui-même dès ce soir'
    ],
    correctAnswer: 1,
    explanation: '« Ça marche » sans contexte ne dit rien. Trois questions suffisent pour vérifier que le test couvre le réel (Safari mobile, panier vide, double clic sur payer). Rejouer tous les tests est disproportionné ; envoyer au client un ticket non vérifié abîme la confiance.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'test-qualite',
    scenarioContext: 'Un développeur vous dit : « J\'ai testé le tunnel de paiement, ça marche. »'
  },
  {
    id: 'nq-test-2',
    question: 'Un test de _____ vérifie qu\'une correction n\'a pas cassé une fonctionnalité qui marchait avant.',
    options: ['charge', 'régression', 'acceptation', 'performance'],
    correctAnswer: 1,
    explanation: 'La régression est le bug classique du « on a corrigé le panier, ça a cassé le compte client ». Les tests de charge mesurent la tenue au trafic, les tests d\'acceptation la conformité au besoin.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'test-qualite'
  },

  // ───────── test / recette ─────────
  {
    id: 'nq-recette-1',
    question: 'Quelle est votre première action ?',
    options: [
      'Tout corriger cette nuit pour tenir la date',
      'Reporter la mise en production d\'une semaine',
      'Trier les 47 retours en bloquant / majeur / mineur / hors périmètre, ne traiter que les bloquants avant la mise en prod et planifier le reste dans un lot correctif',
      'Répondre au client que la recette est terminée depuis hier'
    ],
    correctAnswer: 2,
    explanation: 'Un retour de recette n\'est pas une liste de tâches, c\'est une matière à trier. Le tri révèle souvent 2 bloquants, 10 mineurs, 5 hors périmètre et 30 remarques de goût. Décider go/no-go sur les seuls bloquants protège la date sans sacrifier la qualité.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'test-qualite',
    scenarioContext: 'Veille de mise en production, 23 h. Le client envoie un tableur de 47 remarques : « je n\'aime pas ce bleu », « le paiement échoue sur Safari », « ajoutez un chat », « faute page contact »…'
  },
  {
    id: 'nq-recette-2',
    question: 'Sans PV de recette signé, l\'agence peut mettre en production, mais elle n\'a aucune preuve que le client a validé le livrable.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 0,
    explanation: 'Le PV de recette formalise l\'acceptation et déclenche souvent le dernier paiement. Sans lui, toute remarque ultérieure peut être présentée comme une non-conformité. Techniquement rien n\'empêche le déploiement ; contractuellement, c\'est un risque.',
    type: 'true-false',
    difficulty: 'moyen',
    category: 'gestion-projet'
  },

  // ───────── lancement-prod / deploiement ─────────
  {
    id: 'nq-deploy-1',
    question: 'Le rollback est fait, le site est revenu à la version précédente. Que dites-vous au client ?',
    options: [
      'Rien : il n\'a rien vu, inutile de l\'inquiéter',
      'Un message factuel : ce qui s\'est passé, l\'impact (20 minutes, 6 commandes en erreur), ce qui a été fait, la prochaine étape et son heure',
      'Que le problème vient de l\'hébergeur',
      'Un rapport technique détaillé de 3 pages sur la cause'
    ],
    correctAnswer: 1,
    explanation: 'Le client découvrira l\'incident tôt ou tard (un acheteur lui écrira). Une communication rapide, courte et factuelle installe la confiance ; le silence ou le rejet de faute la détruit. Le rapport détaillé vient après, dans le post-mortem.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Vendredi 16 h, mise en production. À 16 h 20, les commandes échouent. Vous avez déclenché le rollback à 16 h 40.'
  },
  {
    id: 'nq-deploy-2',
    question: 'La liste des vérifications à faire avant la mise en ligne (DNS, HTTPS, sauvegarde, redirections 301, analytics, formulaire testé) s\'appelle la _____ de pré-déploiement.',
    options: ['checklist', 'roadmap', 'user story', 'rétrospective'],
    correctAnswer: 0,
    explanation: 'La checklist est le filet de sécurité du jour J : chaque ligne correspond à un incident vécu. La roadmap planifie les évolutions, la rétrospective analyse après coup.',
    type: 'fill-blank',
    difficulty: 'facile',
    category: 'technique'
  },

  // ───────── suivi / bilan ─────────
  {
    id: 'nq-bilan-1',
    question: 'Le client demande : « Pourquoi 5 000 € de plus que prévu ? » Que répondez-vous ?',
    options: [
      'Que c\'est normal, tous les projets dépassent',
      'Les trois causes factuelles (contenus livrés avec 3 semaines de retard, bug critique en recette, départ d\'un développeur), ce qui a été absorbé par l\'agence, et une règle pour la prochaine fois : délai contractuel de livraison des contenus',
      'Que le retard des contenus vient de lui, donc le surcoût aussi',
      'Que le taux de conversion a augmenté de 25 %, donc le surcoût est rentabilisé'
    ],
    correctAnswer: 1,
    explanation: 'Le bilan n\'est ni une excuse ni un procès. On explique les causes, on assume sa part, on montre ce qu\'on a absorbé, et on propose une règle qui évite la répétition. L\'argument du ROI (D) est vrai mais ne répond pas à la question.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'gestion-projet',
    scenarioContext: 'Bilan de fin de projet : budget prévu 35 000 €, réalisé 40 000 € ; délai 3 mois prévus, 4 réalisés ; conversion +25 % après lancement.'
  },
  {
    id: 'nq-bilan-2',
    question: 'Une rétrospective sert d\'abord à identifier qui est responsable des retards.',
    options: ['Vrai', 'Faux'],
    correctAnswer: 1,
    explanation: 'La rétrospective cherche des causes et des améliorations, pas des coupables. Une équipe qui craint d\'être blâmée cache les problèmes : c\'est le meilleur moyen de revivre la même crise au projet suivant.',
    type: 'true-false',
    difficulty: 'facile',
    category: 'methodologie'
  },

  // ───────── gestion-crise / crisis-communication ─────────
  {
    id: 'nq-crise-1',
    question: 'Que faites-vous dans l\'heure ?',
    options: [
      'Rassurer le client, recueillir les faits auprès de l\'équipe, revenir vers lui dans la journée avec un état réel, puis recadrer en interne : un seul canal vers le client, le chef de projet',
      'Confirmer au client que le projet va planter, par honnêteté',
      'Recadrer publiquement le développeur junior devant l\'équipe',
      'Demander au client de ne plus parler à l\'équipe'
    ],
    correctAnswer: 0,
    explanation: 'Deux problèmes : un client inquiet et une fuite de communication non maîtrisée. On traite l\'urgence (le client, avec des faits) puis la cause (règle de communication), sans humilier le junior — il a peut-être vu un vrai risque que vous devez entendre.',
    type: 'scenario',
    difficulty: 'difficile',
    category: 'gestion-projet',
    scenarioContext: 'Le client vous appelle, tendu : « Votre développeur junior a dit à mon équipe que le projet allait planter. »'
  },

  // ───────── mission-individuelle / intro-mission ─────────
  {
    id: 'nq-mission-1',
    question: 'Votre chiffrage complet sort à 135 000 €. Comment structurez-vous la réponse ?',
    options: [
      'Réduire les TJM pour atterrir à 120 000 €',
      'Supprimer la marge et les tests pour tenir 120 000 €',
      'Répondre à 135 000 € en expliquant que le budget client est irréaliste',
      'Proposer un MVP à environ 110 000 € couvrant les « must have », et un lot 2 chiffré pour le reste'
    ],
    correctAnswer: 3,
    explanation: 'Un appel d\'offres se gagne sur la crédibilité du périmètre, pas sur un prix forcé. Le MVP + lot 2 respecte la fourchette, montre la compréhension des priorités (matching, billetterie, mobile) et laisse le client décider. Baisser les TJM ou couper les tests fabrique un projet en crise.',
    type: 'scenario',
    difficulty: 'moyen',
    category: 'budget',
    scenarioContext: 'Mission Eventeo : le brief annonce un budget de 80 000 à 120 000 € pour la plateforme web et l\'application mobile.'
  }
]

/** Section cible de chaque préfixe d'identifiant. */
export const newQuestionSections: Record<string, string> = {
  'nq-cdc': 'cdc',
  'nq-carto': 'cartographie',
  'nq-cibles': 'cibles',
  'nq-plan': 'planning',
  'nq-budget': 'budget',
  'nq-outils': 'outils',
  'nq-spec': 'cdc-technique',
  'nq-tech': 'technologies',
  'nq-test': 'tests-equipe',
  'nq-recette': 'recette',
  'nq-deploy': 'deploiement',
  'nq-bilan': 'bilan',
  'nq-crise': 'crisis-communication',
  'nq-mission': 'intro-mission',
}

export function sectionForQuestion(id: string): string | null {
  const prefix = id.replace(/-\d+$/, '')
  return newQuestionSections[prefix] ?? null
}

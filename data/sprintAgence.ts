// Sprint Agence : journée immersive autour du brief RoadTrip Squad
// Les contenus "teacher" ne s'affichent qu'en Mode Enseignant.

export interface ScheduleSlot {
  period: 'matin' | 'pause-déjeuner' | 'après-midi'
  label: string
  format: 'plénière' | 'équipes' | 'pause'
  detail?: string
}

export interface TeacherBlock {
  id: string
  variant: 'context' | 'expected' | 'pitfall' | 'character' | 'qa' | 'estimate'
  title: string
  body: string
  bullets?: string[]
}

export interface SprintStep {
  id: string
  slug: string
  order: number
  eyebrow: string
  title: string
  pitch: string
  schedule: string
  duration: string
  format: 'plénière' | 'équipes' | 'pause'
  intent: string
  studentSections: {
    id: string
    kind: 'narrative' | 'instructions' | 'briefBlock' | 'tjmGrid' | 'pitfalls' | 'deliverable'
    title?: string
    body?: string
    bullets?: string[]
    table?: { headers: string[]; rows: string[][] }
  }[]
  teacherBlocks?: TeacherBlock[]
}

// L'ordre du tableau fait foi pour la séquence dans chaque demi-journée.
// Pas d'horaires précis : les étudiants arrivent au compte-goutte et la matière
// avance au rythme de la classe. On peut déborder sur le lendemain matin.
export const sprintSchedule: ScheduleSlot[] = [
  { period: 'matin', label: 'Accueil et constitution des équipes', format: 'plénière', detail: 'Binômes ou trinômes, 8 à 12 mini-agences en parallèle. On démarre dès que la classe est prête, on ne court pas après les retardataires.' },
  { period: 'matin', label: 'Lecture autonome du brief', format: 'équipes', detail: "Chaque équipe lit le brief à son rythme. Pas de discussion encore. On surligne, on note les questions au crayon." },
  { period: 'matin', label: 'Brainstorming d\'ouverture', format: 'plénière', detail: "Une fois le brief parcouru : quels mots-clés et compétences vous inspire ce projet ? On classe au tableau, en direct." },
  { period: 'matin', label: 'Q&A avec Gaspard', format: 'plénière', detail: "L'enseignant joue le client. Toutes les questions sont permises." },
  { period: 'matin', label: 'Pause', format: 'pause' },
  { period: 'matin', label: 'Atelier équipe projet et TJM', format: 'équipes', detail: 'Composer une équipe réaliste, justifier les profils et le budget.' },
  { period: 'matin', label: 'Atelier périmètre, modules et choix techno', format: 'équipes', detail: 'Arbitrer V1 et V2, formaliser les modules, défendre les choix techniques.' },
  { period: 'pause-déjeuner', label: 'Déjeuner', format: 'pause' },
  { period: 'après-midi', label: 'Le Gantt en HTML', format: 'équipes', detail: "On met en planning tout ce qu'on a décidé le matin, sous forme d'un fichier HTML autonome. Si on n'a pas terminé, on continue tranquillement le lendemain matin." },
  { period: 'après-midi', label: 'Rendu et clôture', format: 'plénière', detail: 'Chaque équipe présente son rendu en 5 minutes. Débrief collectif.' },
]

const briefContent = `
<div class="sa-prose">
  <p class="sa-meta">Porteur du projet : <strong>Gaspard Vasseur</strong> · Date du brief : 1er juin 2026 · Mise en production cible : 15 octobre 2026 · Budget enveloppe : à arbitrer ensemble.</p>

  <h3>Qui je suis</h3>
  <p>Je m'appelle Gaspard, j'ai 41 ans, je vis à Annecy. Pendant douze ans, j'ai codirigé une agence de voyages spécialisée dans les séjours sur mesure en Europe et au Maghreb. J'ai revendu mes parts l'an dernier à mon ancien associé. Je dispose d'une enveloppe personnelle pour lancer ce nouveau projet et je cherche un partenaire pour le construire.</p>
  <p>Je ne suis pas développeur. J'ai une bonne culture produit parce que j'ai piloté la refonte du site de l'agence et son back office, mais je ne sais pas coder. Je ne lèverai pas de fonds tout de suite. Je veux un produit qui sort, qui marche, et qui me permet de prouver le concept avant d'éventuellement aller chercher des investisseurs en 2027.</p>

  <h3>Pourquoi je fais ce projet</h3>
  <p>Avec ma femme et notre bande d'amis, on fait au moins deux gros road trips par an depuis quinze ans. Italie, Maroc, Écosse, Norvège, Roumanie, Albanie, Géorgie. À chaque fois, les mêmes galères reviennent.</p>
  <p>D'abord la planification. On crée un Whatsapp, quelqu'un balance un Google Doc, un autre fait un Google Maps avec des étoiles, une troisième ouvre un tableur partagé pour le budget. Au bout de trois semaines, plus personne ne sait quelle est la dernière version de quoi. Ceux qui sont arrivés en cours de route n'ont pas le contexte. Les décisions se prennent à moitié, on se retrouve à voter à main levée la veille du départ.</p>
  <p>Ensuite l'argent. L'un avance pour le carburant, l'autre pour la maison Airbnb, un autre encore pour les courses. À la fin, on essaie de remettre à plat avec un Splitwise, sauf que la moitié des dépenses sont oubliées, qu'il y a des disputes sur qui a payé quoi, et qu'on remet ça à "plus tard". Six mois après, certains n'ont toujours pas été remboursés.</p>
  <p>Sur la route, on perd du temps. Personne n'a une vision claire des étapes, chacun a son propre Maps avec ses propres marqueurs. On ne sait pas toujours qui est où, surtout quand on roule en deux ou trois voitures. Quand il n'y a pas de réseau, ce qui arrive souvent en montagne ou hors des grandes routes, on est aveugles.</p>
  <p>Enfin les souvenirs. Tout le monde prend des photos, mais elles restent sur les téléphones. On promet de tout regrouper "dans un Drive partagé". Personne ne le fait. Six mois après, je n'ai accès qu'à mes propres photos.</p>

  <h3>La vision du produit</h3>
  <p>Une seule application, mobile et web, qui couvre toute la vie d'un road trip entre amis. De la première discussion ("on part où cet été ?") jusqu'au retour ("on a passé un truc magique, on garde une trace"). Quatre piliers fonctionnels que j'ai en tête. À challenger.</p>
  <ol class="sa-list-ordered">
    <li><strong>La planification collaborative.</strong> Le groupe se constitue dans l'app, on propose des étapes, on vote, l'itinéraire se construit en commun. Pas de chef de projet officiel, pas de Doc Google qui dérape. La carte est la source de vérité.</li>
    <li><strong>Le split des dépenses en temps réel pendant le voyage.</strong> Chacun rentre ce qu'il paye, l'app calcule en continu qui doit quoi à qui. À la fin du trip, en deux clics, tout le monde rembourse celui à qui il doit de l'argent.</li>
    <li><strong>La carte hors-ligne et la position des autres.</strong> Pendant le road trip, l'app fonctionne sans réseau pour la consultation de l'itinéraire et des points d'intérêt. Quand on a du réseau, on voit où sont les autres voitures du groupe.</li>
    <li><strong>Le journal de bord partagé.</strong> Pendant et après le voyage, chacun balance ses photos, ses anecdotes, son ressenti. À la fin, on a un récit collectif qu'on peut consulter, partager publiquement si on veut, ou garder en privé.</li>
  </ol>

  <h3>Ce qui m'intéresse en bonus</h3>
  <p>Une couche de recommandations qui propose des étapes en fonction du groupe (envies, budget, durée, météo). Une étoile au-dessus du concurrent de base, mais pas vital pour la première version.</p>

  <h3>Mes contraintes</h3>
  <ul>
    <li>Je vise une mise en production publique le 15 octobre 2026.</li>
    <li>Je veux iOS et Android, pas l'un sans l'autre.</li>
    <li>Je veux que ça soit utilisable en France, Italie et Espagne dès le départ.</li>
    <li>Je veux respecter le RGPD strictement. J'ai eu un avertissement CNIL dans mon ancienne vie, je ne veux plus jamais ça.</li>
    <li>Je ne veux pas dépendre de Google Maps pour l'affichage cartographique en production. C'est trop cher à long terme.</li>
  </ul>

  <h3>Mes interrogations ouvertes</h3>
  <p>Sur ces sujets, j'attends que vous me proposiez quelque chose :</p>
  <ul>
    <li>Le modèle économique. Gratuit avec une option payante ? Payant à l'achat ? Commission sur des partenariats ?</li>
    <li>La technique. Native iOS et Android ? Cross-platform ? Je n'ai aucun dogme, dites-moi ce qui est le mieux pour mon cas.</li>
    <li>Le périmètre exact de la première version. Je suis prêt à entendre qu'on ne peut pas tout faire en quatre mois et demi.</li>
    <li>L'IA. C'est à la mode, je ne veux pas en mettre pour en mettre. Si ça apporte vraiment, on en met. Sinon, non.</li>
  </ul>

  <h3>Ce que j'aimerais que vous me proposiez</h3>
  <ol class="sa-list-ordered">
    <li>Une équipe projet proposée, avec les rôles, les TJM et la justification.</li>
    <li>Un périmètre fonctionnel arbitré entre V1 et V2.</li>
    <li>Une liste de choix techniques argumentés (front, back, base de données, cartographie, hébergement, services tiers).</li>
    <li>Un planning Gantt complet du kick-off à la mise en production publique, livré en HTML, propre et lisible.</li>
    <li>Un chiffrage global réaliste, cohérent avec les TJM et le Gantt.</li>
  </ol>
</div>
`

export const sprintSteps: SprintStep[] = [
  {
    id: 'brief',
    slug: 'brief',
    order: 1,
    eyebrow: 'Étape 1',
    title: 'Lire et comprendre le brief',
    pitch: "Le client vous écrit en personne. Lisez avec attention, soulignez ce qui vous chiffonne, listez les questions à lui poser au Q&A.",
    schedule: 'Matin',
    duration: 'Lecture autonome',
    format: 'équipes',
    intent: "Avant de proposer quoi que ce soit, comprendre. Identifier les zones grises. Ne pas se lancer dans la solution avant la fin du brief.",
    studentSections: [
      {
        id: 'consigne',
        kind: 'instructions',
        title: 'Consigne',
        body: "Lisez le brief une première fois en silence, sans prendre de notes. Puis relisez-le en équipe. Surlignez tout ce qui n'est pas clair, tout ce qui semble manquer, tout ce qui pourrait coûter cher si on l'a mal compris. Préparez ensemble une liste de questions à poser à Gaspard pendant le Q&A. Ne préparez pas de solution à ce stade : c'est un piège classique.",
        bullets: [
          "Cherchez les ambiguïtés : ce qui peut s'interpréter de plusieurs façons.",
          "Cherchez les manques : tout ce que le client n'a pas dit et que vous auriez aimé savoir.",
          "Cherchez les contradictions : entre les contraintes, le délai et le budget.",
          "Notez les questions de fond, pas les questions de détail. Vous n'aurez que vingt minutes de Q&A.",
        ],
      },
      {
        id: 'brief',
        kind: 'briefBlock',
        title: 'Brief client',
        body: briefContent,
      },
    ],
    teacherBlocks: [
      {
        id: 'character-gaspard',
        variant: 'character',
        title: 'Fiche personnage Gaspard (à garder pour vous)',
        body: "Gaspard Vasseur, 41 ans, Annecy. Ex-codirigeant d'une agence de voyages sur mesure (Atelier Vasseur Voyages). Vente de ses parts en 2025 à son associé pour environ 600 K€ nets. Marié, deux enfants (8 et 11 ans).",
        bullets: [
          "Il dispose de 350 K€ qu'il est prêt à mobiliser sur RoadTrip Squad. Le reste est en immobilier et en sécurité familiale.",
          "Il vise un budget projet entre 80 et 110 K€ HT, mais il est ouvert si on argumente. Il ferme sec au-dessus de 130 K€.",
          "Il a un développeur en tête (un ancien stagiaire de son agence, devenu freelance) qu'il aimerait embarquer en mission longue. Il ne le dit pas tout de suite pour ne pas brouiller la discussion.",
          "Il a déjà testé Polarsteps et Wanderlog. Il les trouve très bien faits mais froids. Sa vraie conviction est sur la chaleur du produit et l'usage réel en groupe.",
          "Il ne croit pas vraiment à l'IA mais il sait qu'il faut en mettre un peu pour que ça soit attractif côté presse et investisseurs futurs.",
          "Il est dispo à temps plein sur le projet, ce qui change la donne pour la gouvernance (validations rapides, peu de cycles d'attente).",
        ],
      },
      {
        id: 'temperament',
        variant: 'character',
        title: 'Son tempérament en personnage',
        body: "Direct, terrien, un peu paternaliste. Il pose des questions de bon sens. Il déteste le jargon technique inutile. Il accroche quand on lui parle en termes d'usage et d'utilisateur. Il décroche quand on lui balance microservices ou kubernetes. Il n'a pas peur de dire \"je n'ai pas compris, reformulez\".",
      },
      {
        id: 'hard-constraint',
        variant: 'pitfall',
        title: 'Sa contrainte vraiment dure',
        body: "Le 15 octobre 2026. Pas avant, pas après. Il a un événement organisé ce jour-là dans une salle à Annecy, avec 200 invités triés sur le volet (presse voyage, blogueurs, anciens clients de son agence, contacts investisseurs). Si l'app n'est pas dans les stores ce jour-là, c'est une catastrophe d'image. Il le dira si on lui pose la question. Sinon il le mentionnera vaguement comme important.",
      },
      {
        id: 'pedagogy',
        variant: 'context',
        title: 'Posture pédagogique recommandée',
        body: "Pendant cette première heure, ne donnez pas d'indices. Laissez les équipes se débrouiller, même si vous voyez certaines partir sur de mauvaises pistes. Le but est qu'elles découvrent par elles-mêmes les zones d'ombre du brief. Vous récolterez plus tard, dans le débrief, ce qu'elles ont raté.",
      },
    ],
  },
  {
    id: 'qa',
    slug: 'q-and-a',
    order: 2,
    eyebrow: 'Étape 2',
    title: 'Q&A avec Gaspard',
    pitch: "Vingt minutes pour interroger le client, en plénière. Posez les questions qui vous éclaireront pour les ateliers de l'après-midi.",
    schedule: 'Matin',
    duration: 'Plénière courte',
    format: 'plénière',
    intent: "Apprendre à poser de bonnes questions. Comprendre que la réponse à une question vague est une réponse vague.",
    studentSections: [
      {
        id: 'consigne-qa',
        kind: 'instructions',
        title: 'Consigne',
        body: "Le Q&A se passe en plénière. Chaque équipe peut poser des questions à Gaspard. Toutes les équipes entendent les réponses. Désignez une personne en équipe pour prendre des notes en temps réel : vous n'aurez pas le temps de tout retenir. Une bonne question est précise, ouverte, et utile à plusieurs équipes.",
        bullets: [
          "Évitez les questions fermées en oui ou non. Elles vous donnent une info, pas une compréhension.",
          "Évitez les questions trop techniques. Gaspard n'est pas développeur.",
          "Allez chercher les zones de flou : budget, délai, modèle économique, périmètre exact.",
          "Si Gaspard répond que c'est à vous de proposer, ne soyez pas surpris. Il vous teste sur votre capacité à recommander.",
        ],
      },
      {
        id: 'rappel',
        kind: 'instructions',
        title: 'Pendant le Q&A',
        body: "Une seule équipe parle à la fois. Levez la main, attendez votre tour. Si une autre équipe pose une question que vous aviez préparée, écoutez la réponse au lieu de la reposer. Notez ce que les autres équipes oublient de demander : c'est souvent là que se cachent les meilleurs angles.",
      },
    ],
    teacherBlocks: [
      {
        id: 'qa-budget',
        variant: 'qa',
        title: 'Sur le budget',
        body: "À répondre généreusement si la question est posée.",
        bullets: [
          "Quelle enveloppe vous êtes prêt à mettre ? Réponse : entre 80 et 110 K€ HT, j'ai préparé 350 K€ au total mais je veux en garder pour le marketing, le run et la suite. Au-delà de 130 K€, on n'est plus alignés.",
          "Comment vous le financez ? Réponse : sur fonds propres, vente de mes parts l'an dernier. Je ne lève pas en 2026.",
          "Vous payez en quelles modalités ? Réponse : 30 % au kick-off, jalons intermédiaires, solde à la mise en production. Je suis ouvert.",
        ],
      },
      {
        id: 'qa-deadline',
        variant: 'qa',
        title: 'Sur le délai',
        body: "Information capitale à révéler clairement si la question est posée.",
        bullets: [
          "Pourquoi le 15 octobre précisément ? Réponse : j'organise un événement ce jour-là à Annecy avec 200 invités. L'app doit être dans les stores. Pas le 16, pas le 14. Le 15.",
          "Y a-t-il une marge possible ? Réponse : non. Si vous me dites que c'est intenable, on coupe dans le scope, pas dans le délai.",
        ],
      },
      {
        id: 'qa-cible',
        variant: 'qa',
        title: 'Sur la cible et l\'usage',
        body: "À répondre simplement, sans broder.",
        bullets: [
          "Combien d'utilisateurs visez-vous la première année ? Réponse : honnêtement, je n'ai pas chiffré ça précisément. J'aimerais 30 000 inscrits actifs au printemps 2027. C'est une intuition, à challenger.",
          "Quelle taille de groupe en moyenne ? Réponse : mon expérience perso dit 4 à 8 personnes. Au-delà ça devient ingérable même avec une app.",
          "Vous visez quels pays au lancement ? Réponse : France, Italie, Espagne. Anglais et autres langues en V2.",
        ],
      },
      {
        id: 'qa-concurrence',
        variant: 'qa',
        title: 'Sur la concurrence',
        body: "Gaspard a une opinion claire et personnelle ici.",
        bullets: [
          "Vous avez regardé Polarsteps, Wanderlog, Roadtrippers ? Réponse : oui, longuement. Polarsteps est le plus proche mais je le trouve froid et solo. Wanderlog est mieux pour la planification mais nul sur le journal. Personne ne fait le split de dépenses sérieusement. C'est mon angle.",
          "Et Splitwise ? Réponse : Splitwise c'est l'inspiration sur le split, mais c'est une app à part. Je veux tout dans une seule expérience.",
        ],
      },
      {
        id: 'qa-flou',
        variant: 'qa',
        title: 'Sur les fonctionnalités floues',
        body: "Acceptez l'ambiguïté. Ne tranchez pas à leur place.",
        bullets: [
          "L'IA, vous voulez quoi exactement ? Réponse : je ne sais pas précisément. Je vois bien quelque chose qui dit \"tiens, comme vous êtes 4 et que vous aimez la nature et que vous avez 3 jours, voilà 5 étapes intelligentes entre votre point A et B\". Mais si vous me dites que c'est risqué pour la V1, on peut le mettre en V2.",
          "Le mode hors-ligne, jusqu'où ? Réponse : au minimum la carte et l'itinéraire. Idéalement aussi la saisie de dépenses, qui se synchronisent quand on retrouve du réseau.",
          "Le partage public d'un trip ? Réponse : bonus sympa, pas vital en V1.",
        ],
      },
      {
        id: 'qa-techno',
        variant: 'qa',
        title: 'Sur la techno',
        body: "Faites semblant de ne pas avoir d'avis dogmatique.",
        bullets: [
          "Native ou cross-platform ? Réponse : aucun dogme. Faites-moi une recommandation argumentée. Mon ancien dev me dit que React Native a beaucoup progressé. Vous en pensez quoi ?",
          "Hébergement où ? Réponse : France ou UE obligatoire. RGPD strict pour moi.",
          "Paiement intégré ou pas ? Réponse : pas pour le split entre amis. Je préfère qu'on redirige vers Lydia ou Revolut. Je ne veux pas devenir établissement de paiement.",
        ],
      },
      {
        id: 'qa-arbitrage',
        variant: 'qa',
        title: 'Sujets sur lesquels Gaspard refuse de trancher',
        body: "Sur ces sujets, refusez de trancher. Forcez les équipes à proposer. Réponse type : \"Je n'ai pas tranché. C'est précisément pour ça que je vous paye. Faites-moi une recommandation chiffrée et argumentée, je trancherai sur la base de ce que vous me proposez.\"",
        bullets: [
          "Le modèle économique exact (freemium, payant à l'achat, commission).",
          "La stratégie d'acquisition utilisateurs.",
          "La politique de modération des contenus publics.",
          "Le choix précis du fournisseur de cartographie.",
          "Le choix précis du LLM pour la partie IA.",
          "La méthodologie projet (cycle en V, agile, hybride).",
          "La fréquence et le format des points client.",
          "Le périmètre exact de la V1 vs V2.",
        ],
      },
      {
        id: 'qa-oublies',
        variant: 'qa',
        title: 'Questions souvent oubliées (à pointer en débrief)',
        body: "Notez celles qui n'ont pas été posées. Vous les ressortirez en clôture.",
        bullets: [
          "Êtes-vous disponible pendant la durée du projet ? À quelle fréquence ?",
          "Avez-vous déjà recruté un développeur ou un designer ?",
          "Disposez-vous d'éléments de marque (nom validé, logo, identité visuelle) ?",
          "Avez-vous déposé la marque RoadTrip Squad ?",
          "Qui sera propriétaire du code source ?",
          "Avez-vous une attente sur la maintenance après le lancement ?",
          "Souhaitez-vous une clause d'exclusivité avec l'agence ?",
          "Quels sont vos KPIs de succès au-delà du lancement ?",
          "Avez-vous des contraintes d'accessibilité ?",
          "Qui prend en charge les frais d'exploitation après livraison (cloud, services tiers, frais de stores) ?",
        ],
      },
      {
        id: 'qa-piege',
        variant: 'pitfall',
        title: 'Piège à laisser passer',
        body: "Si une équipe propose quelque chose de manifestement mal calibré pendant le Q&A, validez en personnage avec un peu de naïveté (\"ah oui ça me semble bien\"). Vous reprendrez en débrief. Exemple : une équipe annonce un budget à 150 K€ pendant le Q&A pour vous tester. Vous répondez \"ah, je pensais plutôt à 90 K€ honnêtement, vous arrivez à m'expliquer la différence ?\". Cela les force à argumenter publiquement devant les autres équipes.",
      },
    ],
  },
  {
    id: 'atelier-equipe',
    slug: 'atelier-1-equipe',
    order: 3,
    eyebrow: 'Atelier 1',
    title: 'Composer l\'équipe et calibrer les TJM',
    pitch: "Quels profils embarquer ? À quel taux ? Pour quelle charge ? L'équipe que vous proposez doit pouvoir tenir le délai sans exploser le budget.",
    schedule: 'Matin',
    duration: 'Atelier en équipe',
    format: 'équipes',
    intent: "Confronter le rêve d'une grosse équipe à la contrainte budgétaire. Comprendre que chaque profil ajouté coûte, et que sous-dimensionner expose au retard.",
    studentSections: [
      {
        id: 'objectif',
        kind: 'instructions',
        title: 'Objectif',
        body: "Concevoir l'équipe projet qui va porter RoadTrip Squad, du kick-off à la mise en production. Définir les rôles, les charges, les TJM et le coût total équipe sur la période.",
      },
      {
        id: 'livrable',
        kind: 'deliverable',
        title: 'Livrable attendu',
        body: "Un tableau structuré, plus un paragraphe de justification.",
        bullets: [
          "Intitulé du poste.",
          "Mission principale en deux ou trois lignes.",
          "Niveau (junior, confirmé, senior, lead).",
          "TJM HT pratiqué.",
          "Taux d'occupation sur le projet en pourcentage.",
          "Charge totale prévisionnelle en jours-homme.",
          "Coût total (TJM × charge).",
        ],
      },
      {
        id: 'context-tjm',
        kind: 'narrative',
        title: 'Contexte marché 2026',
        body: "Le marché agence subit une pression à la baisse sur les TJM en raison de la productivité accrue par l'IA dans le développement. Les fourchettes ci-dessous reflètent les pratiques françaises courantes en 2026. Vous pouvez vous en éloigner, mais vous devez le justifier.",
      },
      {
        id: 'tjm-grid',
        kind: 'tjmGrid',
        title: 'Fourchettes TJM 2026 (France)',
        table: {
          headers: ['Profil', 'TJM HT'],
          rows: [
            ['Directeur de projet', '700 / 850 €'],
            ['Chef de projet confirmé', '500 / 650 €'],
            ['Lead développement', '600 / 750 €'],
            ['Développeur senior', '500 / 650 €'],
            ['Développeur confirmé', '400 / 500 €'],
            ['Développeur junior', '280 / 380 €'],
            ['UX/UI designer senior', '550 / 700 €'],
            ['UX/UI designer confirmé', '400 / 550 €'],
            ['Ingénieur QA', '400 / 550 €'],
            ['DevOps / SRE', '600 / 750 €'],
          ],
        },
      },
      {
        id: 'attention',
        kind: 'pitfalls',
        title: 'Points d\'attention',
        bullets: [
          "Une équipe trop grosse coûte cher et met du temps à se synchroniser.",
          "Une équipe trop petite ne tient pas le délai.",
          "Un projet mobile + web + back nécessite des compétences variées.",
          "Les profils peuvent être à temps partiel sur le projet.",
          "Vous pouvez prévoir des renforts ponctuels sur des phases spécifiques.",
          "N'oubliez pas vous-mêmes : l'agence pilote, ce temps a un coût.",
        ],
      },
    ],
    teacherBlocks: [
      {
        id: 'team-baseline',
        variant: 'estimate',
        title: 'Une équipe réaliste pour ce projet',
        body: "Sans renforts ponctuels, voici une composition crédible.",
        bullets: [
          "1 directeur de projet (10 à 20 % du temps).",
          "1 chef de projet (50 à 80 %).",
          "1 lead tech (50 à 80 %).",
          "1 développeur mobile cross-platform senior (100 %).",
          "1 développeur back confirmé (80 à 100 %).",
          "1 UX/UI designer (80 % en début, 30 % ensuite).",
          "1 QA (30 à 50 %, plus en phase recette).",
          "DevOps en ponctuel (10 %).",
        ],
      },
      {
        id: 'budget-reality',
        variant: 'estimate',
        title: 'Réalité du chiffrage',
        body: "Sur 4,5 mois, soit environ 95 jours ouvrés, avec ces profils, on tombe sur une charge cumulée d'environ 280 à 350 jours-homme et un coût équipe entre 130 et 180 K€ s'ils ne font pas attention. C'est ce qui doit les confronter à la réalité du chiffrage.",
      },
      {
        id: 'levers',
        variant: 'expected',
        title: 'Leviers pour rester sous 110 K€',
        body: "S'ils veulent rester dans l'enveloppe annoncée par Gaspard, ils devront actionner un ou plusieurs des leviers suivants. C'est exactement le but pédagogique : leur faire vivre l'arbitrage.",
        bullets: [
          "Serrer la composition (moins de profils, ou taux d'occupation plus bas).",
          "Descoper la V1 (et donc challenger le brief).",
          "Accepter des TJM plus bas (juniors, profils en montée en compétence).",
          "Combiner les trois.",
        ],
      },
    ],
  },
  {
    id: 'atelier-perimetre',
    slug: 'atelier-2-perimetre',
    order: 4,
    eyebrow: 'Atelier 2',
    title: 'Périmètre, modules et choix techniques',
    pitch: "Que met-on dans la V1 du 15 octobre ? Que repousse-t-on en V2 ? Quels choix techniques défendez-vous, et pourquoi ?",
    schedule: 'Matin',
    duration: 'Atelier en équipe',
    format: 'équipes',
    intent: "Apprendre à dire non à certaines fonctionnalités pour tenir le délai. Faire des choix techniques qui ne soient pas un copier-coller du dernier projet vu sur Twitter.",
    studentSections: [
      {
        id: 'partie1',
        kind: 'deliverable',
        title: 'Partie 1 / Périmètre V1 vs V2',
        body: "Un tableau à deux colonnes (V1 et V2) qui répartit l'ensemble des fonctionnalités identifiées dans le brief, plus celles que vous proposez. Pour chaque fonctionnalité V1, indiquez si elle est dans un module \"cœur\" (sans laquelle l'app n'a pas de sens) ou \"complément\" (améliore l'expérience mais n'est pas vital).",
      },
      {
        id: 'partie2',
        kind: 'deliverable',
        title: 'Partie 2 / Modules fonctionnels',
        body: "Une liste des modules principaux de l'application. Visez 6 à 10 modules, pas plus. Pour chaque module :",
        bullets: [
          "Nom du module.",
          "Objectif en deux lignes.",
          "Périmètre V1 ou V2.",
          "Dépendances avec d'autres modules.",
          "Estimation de complexité (faible, moyenne, forte).",
        ],
      },
      {
        id: 'partie3',
        kind: 'deliverable',
        title: 'Partie 3 / Choix techniques argumentés',
        body: "Pas de schéma d'architecture, juste les choix structurants avec une justification courte par choix. Une à trois lignes par sujet, pas plus. Pas de littérature.",
        bullets: [
          "Approche mobile (native iOS et Android, cross-platform React Native, cross-platform Flutter, web responsive PWA).",
          "Stack backend (langage, framework).",
          "Base de données principale.",
          "Cartographie (fournisseur, pourquoi).",
          "Synchronisation temps réel et hors-ligne (technologie envisagée).",
          "Authentification (méthodes proposées).",
          "IA pour les recommandations (interne ou via un service tiers, lequel).",
          "Hébergement (fournisseur, localisation).",
          "Stockage des médias (photos du journal de bord).",
          "Outils de monitoring et d'analytics.",
        ],
      },
    ],
    teacherBlocks: [
      {
        id: 'v1-raisonnable',
        variant: 'expected',
        title: 'V1 raisonnable',
        body: "Ce que vous pourriez attendre comme V1 cohérente avec le délai.",
        bullets: [
          "Authentification et gestion de squad.",
          "Création de trip et planification collaborative basique.",
          "Itinéraire sur carte avec étapes.",
          "Vote sur les étapes.",
          "Split des dépenses simple.",
          "Mode hors-ligne consultation carte et itinéraire.",
          "Journal de bord avec photos.",
          "Notifications de base.",
        ],
      },
      {
        id: 'v2-plus-tard',
        variant: 'expected',
        title: 'V2 ou plus tard',
        body: "Ce qui devrait raisonnablement glisser après le 15 octobre.",
        bullets: [
          "IA de recommandation.",
          "Géolocalisation des amis en temps réel.",
          "Chat de groupe intégré (peut être en V1 si simple, sinon V2).",
          "Partage public d'un trip terminé.",
          "Synchronisation hors-ligne avancée (saisie de dépenses offline).",
          "Multilingue complet.",
          "Marketplace partenaires.",
        ],
      },
      {
        id: 'techno-credible',
        variant: 'expected',
        title: 'Choix techniques crédibles en 2026',
        body: "Ce sont des propositions défendables. Si une équipe argumente différemment et tient debout, validez.",
        bullets: [
          "React Native (économie sur ce budget) ou natif si l'équipe est très expérimentée.",
          "Backend Node.js + Fastify ou Nest, ou Python + FastAPI.",
          "PostgreSQL + PostGIS pour la dimension géo.",
          "MapLibre + tuiles OpenStreetMap, ou Mapbox (payant mais robuste).",
          "WebSocket pour le temps réel ou Supabase Realtime.",
          "Auth via Supabase, Auth0, ou solution maison + Apple/Google Sign-In.",
          "IA via appel LLM externe (Mistral pour l'aspect français/européen, Claude ou OpenAI sinon).",
          "Hébergement : Scaleway, OVH, Clever Cloud (UE).",
          "Stockage médias : S3-compatible (Scaleway Object Storage, OVH).",
        ],
      },
      {
        id: 'rgpd-trap',
        variant: 'pitfall',
        title: 'Piège RGPD à challenger',
        body: "Si une équipe propose Firebase ou Google Cloud, c'est un fail RGPD à challenger en débrief. Demandez-leur où sont stockées les données et si Gaspard peut tenir un avertissement CNIL avec ce choix.",
      },
    ],
  },
  {
    id: 'atelier-gantt',
    slug: 'atelier-3-gantt',
    order: 5,
    eyebrow: 'Atelier 3',
    title: 'Le Gantt en HTML',
    pitch: "L'après-midi pour mettre en planning tout ce qu'on a décidé le matin, du kick-off au lancement, sous forme d'un fichier HTML autonome.",
    schedule: 'Après-midi',
    duration: 'En équipe',
    format: 'équipes',
    intent: "Sortir des slides théoriques pour produire quelque chose de tangible. Voir si les arbitrages du matin tiennent debout quand on les pose dans un planning.",
    studentSections: [
      {
        id: 'objectif-gantt',
        kind: 'instructions',
        title: 'Objectif',
        body: "Produire un planning Gantt complet du projet RoadTrip Squad, du kick-off au lancement public, livré sous forme d'un fichier HTML autonome ouvrable directement dans un navigateur, sans serveur. Tous les assets embarqués ou liés à des CDN publics.",
      },
      {
        id: 'temps',
        kind: 'narrative',
        title: 'Périmètre temporel',
        body: "Démarrage : 1er juin 2026. Mise en production publique : 15 octobre 2026. Soit dix-neuf semaines, environ 95 jours ouvrés. Vous pouvez utiliser l'outil de votre choix, y compris en vibe coding via Claude ou un autre assistant, du moment que vous comprenez ce que vous livrez et que vous pouvez le défendre.",
      },
      {
        id: 'fonctionnel',
        kind: 'deliverable',
        title: 'Pour un Gantt qui tient la route',
        bullets: [
          "Échelle de temps lisible (semaine ou jour selon zoom).",
          "Tâches groupées par lot de travail. Lots minimum : Cadrage et conception, Design system et UI, Développement back, Développement mobile, Recette interne, Bêta fermée, Mise en production et publication stores.",
          "Dépendances visibles entre tâches (flèches ou indicateurs).",
          "Au moins huit jalons identifiables : kick-off, validation maquettes, fin design, fin développement back, fin développement mobile, début bêta, fin recette, mise en production.",
          "Pourcentage d'avancement par tâche (à zéro au démarrage, mais le mécanisme doit exister).",
          "Date du jour matérialisée par une ligne verticale.",
          "Légende complète.",
        ],
      },
      {
        id: 'esthetique',
        kind: 'deliverable',
        title: 'Côté visuel',
        bullets: [
          "Lisibilité avant tout.",
          "Une couleur par lot (5 à 7 couleurs maximum).",
          "Une couleur ou un marquage spécifique pour les jalons.",
          "Typographie hiérarchisée (titre projet, lots, tâches).",
          "Header avec nom de l'agence, nom du projet, date de version.",
          "Pas de gradients agressifs, pas d'ombres tape-à-l'œil.",
        ],
      },
      {
        id: 'bonus',
        kind: 'deliverable',
        title: 'Bonus valorisés',
        bullets: [
          "Tooltip au survol d'une tâche (responsable, durée, livrable).",
          "Vue d'ensemble plus zoom sur une période.",
          "Indication du chemin critique.",
          "Mode imprimable propre via @media print.",
          "Vue ressources (qui fait quoi sur la période).",
        ],
      },
      {
        id: 'coherence',
        kind: 'narrative',
        title: 'Cohérence avec les ateliers du matin',
        body: "Le Gantt doit être cohérent avec l'équipe et les TJM définis le matin (les profils alloués aux tâches doivent exister dans votre équipe), avec le périmètre V1 (toutes les fonctionnalités V1 doivent apparaître, rien de ce qui est en V2 ne doit y figurer), et avec le chiffrage global (la somme des charges Gantt doit recouper le coût total équipe annoncé le matin).",
      },
      {
        id: 'pieges',
        kind: 'pitfalls',
        title: 'Pièges à éviter',
        bullets: [
          "Une seule tâche \"Développement\" de 10 semaines sans découpage.",
          "L'oubli de la phase de recette.",
          "L'oubli des temps de validation client.",
          "L'oubli de la publication stores (compter 7 à 10 jours pour Apple, 2 à 3 pour Google).",
          "Le démarrage du dev avant la fin du design.",
          "L'absence totale de marge de sécurité.",
        ],
      },
    ],
    teacherBlocks: [
      {
        id: 'cadre-realiste',
        variant: 'expected',
        title: 'Cadre temporel réaliste',
        body: "Voici un découpage défendable. Si une équipe en propose un autre, jugez sur la cohérence interne, pas sur la conformité à ce repère.",
        bullets: [
          "Cadrage et conception : semaines 1 à 3.",
          "Design système plus premières maquettes : semaines 2 à 6.",
          "Développement back : semaines 4 à 14.",
          "Développement mobile : semaines 5 à 15.",
          "Tests croisés et recette interne : semaines 13 à 17.",
          "Bêta fermée : semaines 15 à 18.",
          "Corrections et préparation publication : semaine 18.",
          "Soumission stores et publication : semaine 19.",
        ],
      },
      {
        id: 'waterfall-trap',
        variant: 'pitfall',
        title: 'Signal d\'alerte sur le Gantt',
        body: "Si une équipe propose un Gantt sans recouvrement entre design et dev (waterfall pur), c'est un signe qu'elle n'a pas bien intégré le risque de tenue de délai. À pointer en débrief.",
      },
    ],
  },
  {
    id: 'rendu',
    slug: 'rendu-cloture',
    order: 6,
    eyebrow: 'Étape finale',
    title: 'Rendu et clôture',
    pitch: "Cinq minutes par équipe pour défendre votre proposition. Puis un débrief collectif où l'on remet les pieds sur terre.",
    schedule: 'Après-midi',
    duration: 'Plénière de clôture',
    format: 'plénière',
    intent: "Apprendre à pitcher une proposition d'agence en cinq minutes. Recevoir le retour du client (l'enseignant) en plénière, devant ses pairs.",
    studentSections: [
      {
        id: 'format',
        kind: 'instructions',
        title: 'Format de rendu',
        body: "Chaque équipe dépose son dossier dans le drive partagé. Un dossier par équipe contenant une note de synthèse (composition de l'équipe et TJM, périmètre V1 et V2, choix techniques argumentés, chiffrage global) et le fichier index.html du Gantt.",
      },
      {
        id: 'pitch',
        kind: 'instructions',
        title: 'Format de présentation',
        body: "Cinq minutes par équipe, devant les autres équipes et l'enseignant en posture client. Vous décidez ce que vous mettez en avant. Pas de slides imposés. Vous pouvez ouvrir le Gantt en direct.",
        bullets: [
          "Présentez votre équipe et votre logique de composition.",
          "Annoncez votre périmètre V1, et défendez ce que vous avez choisi de repousser en V2.",
          "Donnez votre chiffrage global et démontrez sa cohérence.",
          "Montrez le Gantt et pointez le chemin critique.",
          "Concluez en deux phrases sur ce qui rend votre proposition différente.",
        ],
      },
      {
        id: 'suite',
        kind: 'narrative',
        title: 'Et après ?',
        body: "Le travail produit aujourd'hui sert de socle pour la session suivante. Les modules identifiés deviendront des epics. Les fonctionnalités V1 deviendront des user stories. Les estimations de complexité préfigurent le poker planning. Le Gantt devient le squelette des sprints. Conservez bien tous vos livrables.",
      },
    ],
    teacherBlocks: [
      {
        id: 'debrief-trame',
        variant: 'context',
        title: 'Trame de débrief proposée',
        body: "Quinze minutes après les pitchs. Restez bienveillant : les étudiants ont produit beaucoup en une journée.",
        bullets: [
          "Pointez les questions qu'aucune équipe n'a posée à Gaspard. Demandez ce que cela aurait changé.",
          "Comparez les compositions d'équipe. Faites émerger les écarts de chiffrage et leurs causes.",
          "Mettez en regard les choix techniques. Identifiez les choix qui pèsent à long terme (RGPD, dépendance Google Maps, dette technique).",
          "Survolez les Gantt en repérant ceux qui ont oublié la recette ou la publication stores.",
          "Terminez en valorisant un choix singulier par équipe : tout le monde repart avec un signal positif.",
        ],
      },
      {
        id: 'transition',
        variant: 'context',
        title: 'Transition vers le lendemain',
        body: "La transition vers les epics et user stories est limpide depuis ce travail. Annoncez-la en clôture pour donner du sens au travail fourni : les modules identifiés à 11h45 deviennent les epics, les fonctionnalités V1 dans chaque module deviennent les user stories, les estimations de complexité préfigurent le poker planning, le Gantt sert de squelette pour les sprints.",
      },
    ],
  },
]

export const sprintAgenceMeta = {
  id: 'sprint-agence',
  title: 'Sprint Agence',
  subtitle: 'Une journée pour vivre la chaîne brief → cadrage → équipe → périmètre → planning',
  client: 'RoadTrip Squad',
  clientLead: 'Gaspard Vasseur',
  setup: 'Binômes ou trinômes (8 à 12 mini-agences en parallèle)',
  delivery: 'Note de synthèse + Gantt HTML autonome',
  intro:
    "Pour une journée, vous devenez l'équipe d'une agence digitale. Un porteur de projet vient vous présenter son idée. Vous l'écoutez, vous lui posez les questions qui éclairent les zones grises, vous arbitrez avec lui le périmètre, puis vous proposez une équipe, un budget et un planning défendables. Ce que vous produirez aujourd'hui servira de squelette à la suite...",
  promise:
    "À la fin de la journée, vous saurez ce que veut dire cadrer un projet : pas une checklist, pas un Word de 80 pages, mais une suite de décisions assumées qu'un client peut comprendre et signer.",
}

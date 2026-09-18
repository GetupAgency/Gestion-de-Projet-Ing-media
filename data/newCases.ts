import type { Section } from './modules'

export type CasePratique = NonNullable<Section['casePratique']>

/**
 * Cas pratiques ajoutés après l'audit : situations réalistes et un peu ludiques,
 * rendus en feuillets jaunes supplémentaires. Les corrections restent côté serveur.
 */
export const newCases: Record<string, CasePratique[]> = {
  cdc: [
  {
    title: 'Le mail du dirigeant : réécrire le brief en SMART',
    description: 'Atelier en groupe, une heure. Transformer un e-mail de dirigeant enthousiaste et flou en brief à objectifs SMART.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 55 minutes · un livrable d'une page par groupe. L'enseignant joue le dirigeant : il répond à vos questions, mais seulement à celles que vous posez.</p>

    <p><strong>Contexte :</strong> vous êtes chef·fe de projet chez Getup Agency. Lundi 8 h 12, ce mail arrive dans votre boîte.</p>

    <blockquote>
      <p><strong>De :</strong> Karim Benali &lt;karim@nordsud-store.fr&gt;<br><strong>Objet :</strong> Notre site e-commerce !!!</p>
      <p>Bonjour,</p>
      <p>Je dirige NORD SUD, marque de streetwear toulonnaise : 3 boutiques (Toulon, Marseille, Montpellier), 12 salariés, on cartonne sur Instagram (41 k abonnés) et TikTok. Les clients nous réclament un site depuis des années et là on y va, c'est décidé.</p>
      <p>On veut un site e-commerce complet, moderne, qui claque, avec tout ce qu'il faut : le catalogue, les paiements, les avis, un programme de fidélité, le click &amp; collect dans nos boutiques, une appli aussi si possible, et il faut qu'on vende partout, l'Europe au minimum. L'idée c'est de devenir la référence du streetwear dans le Sud puis d'attaquer Paris, et à terme d'être numéro 1 sur Google.</p>
      <p>Il faut que ça marche vite parce que Noël arrive et qu'on a raté celui de l'an dernier. On aimerait faire au moins autant de ventes en ligne qu'en boutique dès la première année, ça paraît logique vu notre communauté.</p>
      <p>Pour le budget, faites-moi une proposition, on verra, mais soyez raisonnables, on est une PME. Je veux que le site soit facile à gérer parce que c'est Inès (ma responsable com, 24 ans) qui s'en occupera en plus d'Instagram.</p>
      <p>Vous pouvez me faire un devis pour vendredi ?</p>
      <p>Karim</p>
    </blockquote>

    <h4>Étape 1 — Autopsie du mail (10 min)</h4>
    <ol>
      <li>Surlignez chaque phrase qui ressemble à un objectif. Pour chacune, cochez les lettres qu'elle valide : S, M, A, R, T. Vous devriez trouver au moins 7 « objectifs » et aucun ne coche les cinq lettres.</li>
      <li>Repérez les demandes qui sont en réalité des fonctionnalités déguisées en objectifs (indice : appli, fidélité, click &amp; collect).</li>
    </ol>

    <h4>Étape 2 — Interview du dirigeant (15 min)</h4>
    <ol>
      <li>Préparez 8 questions maximum, classées : chiffres actuels, clients, logistique, argent, calendrier. Une question par ligne, précise, dont la réponse est un chiffre ou un fait.</li>
      <li>Posez-les à l'enseignant-dirigeant à tour de rôle entre groupes. Notez tout : ces réponses sont votre seule source pour l'étape 3.</li>
    </ol>

    <h4>Étape 3 — Réécriture du brief (25 min)</h4>
    <p>Rédigez sur une page :</p>
    <ol>
      <li><strong>Le besoin en deux phrases</strong> (le problème, pour qui).</li>
      <li><strong>Cinq objectifs SMART</strong>, numérotés O1 à O5, un par ligne, chacun avec sa mesure et son outil de mesure. Au moins un objectif business, un objectif d'usage, un objectif de délai.</li>
      <li><strong>Le périmètre de la phase 1</strong> qui sert ces objectifs, et la liste explicite de ce qui est reporté en phase 2 avec la raison (« ne sert aucun objectif de phase 1 » ou « dépend des résultats de O2 »).</li>
      <li><strong>Une réponse de 5 lignes à Karim</strong> : ce que vous lui proposez pour vendredi à la place du devis.</li>
    </ol>

    <h4>Étape 4 — Revue croisée (5 min)</h4>
    <p>Échangez votre page avec le groupe voisin. Pour chacun de leurs objectifs, faites le test : « Le 1er juillet 2027, peut-on répondre oui ou non ? » Barrez ceux qui échouent. Le groupe qui a le plus d'objectifs survivants gagne, à condition qu'ils soient aussi atteignables au regard des chiffres obtenus en interview.</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : le brief SMART de NORD SUD</h2>

    <h3 class="correction-subtitle">Fiche du dirigeant (à ne révéler qu'aux questions posées)</h3>
    <ul class="correction-list">
      <li><strong>Chiffres actuels :</strong> CA 2025 : 1,1 M€ HT sur les 3 boutiques, soit environ 92 k€/mois ; panier moyen en boutique 68 € ; 1 300 tickets par mois. Aucune vente en ligne aujourd'hui, sauf quelques DM Instagram traités à la main (une dizaine par semaine).</li>
      <li><strong>Communauté :</strong> 41 k abonnés Instagram dont 70 % en région PACA/Occitanie, 18-28 ans à 80 %. Taux d'engagement 3,5 %. TikTok : 12 k, très volatil. Newsletter : aucune base e-mail.</li>
      <li><strong>Catalogue :</strong> 180 références actives, 2 collections par an, photos produit faites par Inès sur fond blanc, pas de fiches produit rédigées. Stock géré dans un logiciel de caisse (Hiboutik) avec export CSV.</li>
      <li><strong>Logistique :</strong> pas d'entrepôt, le stock est en boutique. Personne n'a réfléchi aux retours. Karim pense que « La Poste fera ».</li>
      <li><strong>Argent :</strong> en insistant, Karim lâche une enveloppe de 25 à 30 k€ pour le site, hors pub. Aucun budget marketing en ligne prévu. Pas de pub payante à ce jour.</li>
      <li><strong>Calendrier :</strong> « Noël » veut dire pour lui « le Black Friday », soit le 27 novembre 2026. Nous sommes mi-septembre. Il n'a pas encore choisi de prestataire.</li>
      <li><strong>Europe :</strong> il a reçu trois commandes de Belges en DM et en a déduit « l'Europe ». Il ne sait pas ce qu'est l'OSS TVA.</li>
      <li><strong>Inès :</strong> 24 ans, à l'aise avec Canva et Instagram, jamais touché à un back-office e-commerce, 1 jour par semaine disponible pour le site.</li>
      <li><strong>Pourquoi maintenant :</strong> un concurrent marseillais a lancé son site en juin et a « pris » des clients ; Karim a peur de rater le train.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 1 — ce qu'il fallait voir dans le mail</h3>
    <ul class="correction-list">
      <li>« Complet, moderne, qui claque » : ni S, ni M. C'est un ressenti.</li>
      <li>« Vendre partout, l'Europe au minimum » : pas A (pas de logistique, pas de TVA intra-UE), pas R (70 % de la communauté est régionale).</li>
      <li>« Devenir la référence du streetwear dans le Sud » : pas M. Référence pour qui, mesurée comment ?</li>
      <li>« Numéro 1 sur Google » : pas S (sur quelles requêtes ?), pas T, et « numéro 1 » n'est pas un objectif d'entreprise.</li>
      <li>« Vite, pour Noël » : T flou. Noël, Black Friday ou la semaine avant ? Six semaines de différence.</li>
      <li>« Autant de ventes en ligne qu'en boutique dès la première année » : 1,1 M€ en ligne la première année sans budget pub ni base e-mail : pas A. Le ratio réaliste pour une marque de cette taille est 10 à 20 % du CA physique.</li>
      <li>« Facile à gérer pour Inès » : bon signal, mais pas M. Il faut le transformer en critère d'acceptation (« Inès ajoute un produit avec 5 photos en moins de 10 minutes, sans aide »).</li>
      <li><strong>Fonctionnalités déguisées :</strong> appli, programme de fidélité, avis clients, click &amp; collect. Aucune n'est un objectif ; chacune doit être rattachée à un objectif ou reportée.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — les questions qui rapportent</h3>
    <ul class="correction-list">
      <li>Quel est votre CA mensuel et votre panier moyen aujourd'hui ? (calibre tout le reste)</li>
      <li>D'où viendront les visiteurs du site le premier mois ? Avez-vous une base e-mail, un budget pub ? (teste « A »)</li>
      <li>Qui prépare et expédie les colis, depuis où, et qui gère les retours ?</li>
      <li>Qu'est-ce que « Noël » veut dire pour vous : une date précise ? Que se passe-t-il si on livre le 15 décembre ?</li>
      <li>Combien de commandes venues de l'étranger avez-vous eues ? (dégonfle « l'Europe »)</li>
      <li>Combien de temps par semaine Inès peut-elle consacrer au site ? A-t-elle déjà utilisé un back-office ?</li>
      <li>Quelle enveloppe avez-vous en tête ? Et pour la publicité ?</li>
      <li>Pourquoi maintenant ? (révèle le concurrent, donc la vraie motivation)</li>
    </ul>

    <h3 class="correction-subtitle">Étape 3 — un brief possible</h3>
    <ul class="correction-list">
      <li><strong>Besoin :</strong> NORD SUD veut convertir sa communauté Instagram régionale en clients en ligne et arrêter de traiter des ventes en DM. Le site doit être tenu par une personne non technique, un jour par semaine.</li>
      <li><strong>O1 (business) :</strong> réaliser 12 000 € HT de ventes en ligne par mois en moyenne sur avril-juin 2027, soit 13 % du CA boutique, mesuré dans le back-office.</li>
      <li><strong>O2 (usage) :</strong> atteindre un taux de conversion de 1,5 % (visites → commandes) sur les trois mois suivant le lancement, mesuré dans GA4.</li>
      <li><strong>O3 (acquisition) :</strong> convertir 5 % des abonnés Instagram en comptes clients ou inscrits newsletter avant le 31 mars 2027, soit 2 000 contacts, mesuré dans l'outil d'e-mailing.</li>
      <li><strong>O4 (exploitation) :</strong> permettre à Inès de publier une nouvelle collection de 30 références en une journée, sans intervention de l'agence, validé lors de la recette par un test chronométré.</li>
      <li><strong>O5 (délai) :</strong> site en production le 12 novembre 2026, recette terminée le 5 novembre, pour être stable avant le Black Friday du 27 novembre ; gel des évolutions jusqu'au 5 janvier 2027.</li>
      <li><strong>Périmètre phase 1 :</strong> boutique en ligne sur Shopify ou WooCommerce (le budget interdit du sur-mesure), 180 références importées depuis Hiboutik, paiement CB et Apple Pay, livraison France métropolitaine avec Colissimo, retours sous 14 jours depuis une boutique, capture e-mail à l'inscription, click &amp; collect simple (retrait en boutique comme mode de livraison, pas de synchronisation de stock temps réel).</li>
      <li><strong>Reporté en phase 2 :</strong> application mobile (ne sert aucun objectif, le site responsive suffit à 18-28 ans qui viennent d'Instagram) ; programme de fidélité (dépend du résultat de O3) ; avis clients (utile après 300 commandes, pas avant) ; Europe (dépend de O1 et nécessite OSS TVA, transporteur international, CGV multilingues) ; SEO ambitieux (une marque de streetwear vit d'Instagram, pas de Google la première année).</li>
      <li><strong>Réponse à Karim :</strong> « Merci Karim, votre projet est mûr et votre communauté est un vrai atout. Je ne vous enverrai pas de devis vendredi : chiffrer aujourd'hui reviendrait à chiffrer trois projets différents. Je vous propose un atelier de cadrage de deux heures mardi avec Inès, à l'issue duquel vous recevrez un cahier des charges d'une dizaine de pages et un devis ferme sous 5 jours. Pour le Black Friday, c'est jouable si nous démarrons avant le 1er octobre sur une solution éprouvée, et en gardant l'appli et l'Europe pour 2027. »</li>
    </ul>

    <h3 class="correction-subtitle">Grille d'évaluation du livrable (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Objectifs SMART (10 pts) :</strong> 2 points par objectif qui passe le test « oui ou non le 1er juillet 2027 » ET qui est cohérent avec les chiffres de l'interview. Un objectif à 1 M€ en ligne vaut 0.</li>
      <li><strong>Interview (4 pts) :</strong> au moins une question sur chaque thème : chiffres, trafic, logistique, argent, calendrier.</li>
      <li><strong>Périmètre (4 pts) :</strong> chaque fonctionnalité gardée est rattachée à un objectif ; chaque report a une raison écrite.</li>
      <li><strong>Réponse au client (2 pts) :</strong> refuse le devis à l'aveugle sans froisser, propose une étape suivante datée.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs vues chaque année</h3>
    <ul class="correction-list">
      <li>Garder « numéro 1 sur Google » en le rendant « mesurable » avec un chiffre inventé. Un objectif SMART peut aussi être un objectif abandonné.</li>
      <li>Cinq objectifs qui sont tous des objectifs de délai ou de livraison (« site livré », « fiches produit rédigées »). Ce sont des jalons, pas des objectifs client.</li>
      <li>Ne poser aucune question sur la logistique. Un e-commerce sans réponse à « qui met le colis dans le carton ? » n'existe pas.</li>
      <li>Accepter « l'Europe » parce que le client y tient, sans avoir demandé combien de commandes étrangères il reçoit.</li>
    </ul>
  </div>`,
  },
  ],
  cibles: [
  {
    title: 'Un Uber pour les chiens',
    description: 'Cadrer un brief enthousiaste, flou et sous-financé sans casser l\'élan du client.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Deux fondateurs de 24 ans vous reçoivent dans un café. Pitch en 90 secondes :</p>
    <blockquote>« C'est Uber, mais pour promener les chiens. Le propriétaire commande, un promeneur arrive en 15 minutes. On veut l'app iOS, l'app Android, le site, le paiement, la géolocalisation en temps réel, la notation, le chat et un abonnement mensuel. On a 15 000 € et on lance dans 2 mois, avant l'été. Vous êtes partants ? »</blockquote>
    <p><strong>Ce que vous savez déjà :</strong> ils n'ont ni promeneurs inscrits, ni clients, ni assurance ; l'un des deux « code un peu ».</p>
    <h4>Votre mission (10 min)</h4>
    <ol>
      <li>Reformulez le besoin réel en deux phrases (le problème, pour qui).</li>
      <li>Listez 8 questions de cadrage à poser avant tout chiffrage, classées par thème (marché, usage, argent, risques).</li>
      <li>Proposez un MVP réaliste pour 15 000 € et 2 mois : périmètre, support technique, ce qui est volontairement exclu.</li>
      <li>Rédigez en 3 lignes ce que vous leur dites sur les deux apps natives.</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : cadrer « Uber pour les chiens »</h2>

    <h3 class="correction-subtitle">1. Reformulation du besoin</h3>
    <ul class="correction-list">
      <li><strong>Problème :</strong> des propriétaires de chiens urbains manquent de temps pour les promener et n'ont pas de solution fiable à la demande.</li>
      <li><strong>Pour qui :</strong> deux publics à recruter en même temps (propriétaires et promeneurs) — c'est une place de marché à double face, et c'est le vrai risque du projet, pas la technique.</li>
    </ul>

    <h3 class="correction-subtitle">2. Huit questions de cadrage</h3>
    <ul class="correction-list">
      <li><strong>Marché :</strong> Combien de propriétaires et de promeneurs avez-vous déjà contactés ? Dans quelle ville commencez-vous ?</li>
      <li><strong>Marché :</strong> Pourquoi un client vous choisirait plutôt qu'un voisin, un pet-sitter ou une plateforme existante ?</li>
      <li><strong>Usage :</strong> « En 15 minutes » : est-ce indispensable au lancement, ou une réservation la veille suffit-elle ?</li>
      <li><strong>Usage :</strong> Que se passe-t-il si le chien mord le promeneur, ou s'enfuit ? Qui est responsable ?</li>
      <li><strong>Argent :</strong> Qui paie quoi ? Commission sur la promenade, abonnement, les deux ? Avez-vous validé un prix avec de vrais clients ?</li>
      <li><strong>Argent :</strong> Les 15 000 € couvrent-ils aussi l'hébergement, les frais de stores, le marketing de lancement ?</li>
      <li><strong>Risques :</strong> Avez-vous une assurance responsabilité civile et un statut pour les promeneurs (auto-entrepreneurs ?) ?</li>
      <li><strong>Risques :</strong> Que faites-vous si dans 2 mois vous n'avez que 10 promeneurs inscrits ?</li>
    </ul>

    <h3 class="correction-subtitle">3. Un MVP à 15 000 € en 2 mois</h3>
    <ul class="correction-list">
      <li><strong>Support :</strong> une application web responsive (PWA) installable sur mobile, pas deux apps natives. Une seule base de code, pas de validation des stores, mises à jour instantanées.</li>
      <li><strong>Périmètre :</strong> inscription propriétaire et promeneur, réservation d'une promenade à une date et un créneau, paiement en ligne (Stripe), notation simple après la promenade, notification par e-mail/SMS.</li>
      <li><strong>Exclu volontairement :</strong> géolocalisation en temps réel, chat intégré (un lien vers WhatsApp suffit), abonnement, apps natives. Chaque exclusion est écrite noir sur blanc dans le CDC.</li>
      <li><strong>Alternative « concierge » :</strong> pour valider le marché, une landing page + formulaire + mise en relation manuelle par les fondateurs pendant 4 semaines coûte 2 000 € et répond à la question « y a-t-il des clients ? » avant de dépenser 13 000 €.</li>
    </ul>

    <h3 class="correction-subtitle">4. Ce que vous dites sur les apps natives</h3>
    <ul class="correction-list">
      <li>« Deux apps natives, c'est deux fois le développement, 6 à 8 semaines de validation des stores et un budget de 40 à 60 k€ : impossible dans votre enveloppe. »</li>
      <li>« Une application web installable donne 90 % de l'expérience pour 30 % du coût. Si le marché répond, on fera du natif en V2 avec les revenus. »</li>
      <li>« Votre argent doit d'abord servir à prouver que des gens paient pour ce service. »</li>
    </ul>
  </div>`
  },
  ],
  planning: [
  {
    title: 'Le client qui change d\'avis',
    description: 'Trois demandes de changement en deux semaines après validation des maquettes : trier, chiffrer, répondre.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Site vitrine + espace pro pour un cabinet de kinésithérapeutes. Forfait signé : 14 000 € HT, 10 semaines. Les maquettes ont été validées par PV le 3 mars. Le développement est à 40 %.</p>
    <h4>Les trois mails</h4>
    <ul>
      <li><strong>10 mars :</strong> « Finalement, on préfère le menu à gauche plutôt qu'en haut, comme sur le site de notre confrère. »</li>
      <li><strong>14 mars :</strong> « On aimerait que les patients puissent créer un compte, voir leurs rendez-vous et télécharger leurs factures. C'est la base, non ? »</li>
      <li><strong>18 mars :</strong> « Ma femme trouve que le vert fait hôpital. Vous pouvez essayer en bleu ? Et en orange aussi, pour comparer. »</li>
    </ul>
    <h4>Votre mission (8 min)</h4>
    <ol>
      <li>Classez chaque demande : ajustement mineur / changement de conception / nouveau périmètre. Estimez l'impact en jours.</li>
      <li>Pour chaque demande, écrivez la réponse que vous envoyez (2-3 lignes, ton professionnel).</li>
      <li>Quel processus mettez-vous en place dès maintenant pour les prochaines demandes ?</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : gérer les changements d'avis</h2>

    <h3 class="correction-subtitle">1. Classification et impact</h3>
    <ul class="correction-list">
      <li><strong>Menu à gauche — changement de conception (1 à 2 jours).</strong> Le layout validé par PV est modifié : reprise des maquettes, du CSS et des tests responsive. Ce n'est pas « juste déplacer un bloc » : un menu latéral se comporte différemment sur mobile.</li>
      <li><strong>Espace patient — nouveau périmètre (8 à 12 jours).</strong> Authentification, sécurité des données de santé, gestion des documents, RGPD renforcé : c'est un second projet. « C'est la base, non ? » est la phrase type du scope creep.</li>
      <li><strong>Couleur — ajustement mineur (0,5 jour) si une seule itération.</strong> Avec un design system, changer la couleur primaire est rapide ; « essayer bleu et orange pour comparer » ouvre une boucle sans fin.</li>
    </ul>

    <h3 class="correction-subtitle">2. Réponses à envoyer</h3>
    <ul class="correction-list">
      <li><strong>Menu :</strong> « Bien noté. Les maquettes validées le 3 mars prévoient un menu en haut ; passer à gauche représente 1,5 jour (maquettes, intégration, tests mobile). Deux options : on le fait pour 750 € HT en avenant, ou on le garde pour la V2. Dites-moi ce que vous préférez d'ici vendredi pour ne pas bloquer le développement. »</li>
      <li><strong>Espace patient :</strong> « C'est une excellente fonctionnalité, et un vrai projet en soi : comptes, sécurité des données de santé, factures. Je vous prépare une estimation détaillée (ordre de grandeur : 8 à 12 jours) pour un lot 2 après la mise en ligne. Cela ne remet pas en cause la date de livraison actuelle. »</li>
      <li><strong>Couleur :</strong> « Nous pouvons vous proposer une variante bleue sans surcoût, à valider sous 48 h. Au-delà d'une itération, chaque nouvelle variante sera facturée une demi-journée. La couleur validée par PV reste la référence tant que vous n'avez pas tranché. »</li>
    </ul>

    <h3 class="correction-subtitle">3. Le processus à installer</h3>
    <ul class="correction-list">
      <li><strong>Un journal des demandes de changement</strong> partagé : date, demande, impact en jours, décision, qui a décidé.</li>
      <li><strong>Un seul décideur côté client</strong>, nommé dans le CDC. L'avis de la conjointe compte, mais il passe par le décideur.</li>
      <li><strong>Un formulaire de demande de changement</strong> (3 champs : quoi, pourquoi, pour quand) qui oblige à formuler avant de demander.</li>
      <li><strong>Une règle de réponse en 48 h</strong> avec chiffrage systématique, même quand c'est offert : le client apprend que tout a un coût.</li>
      <li><strong>Un point hebdomadaire de 20 minutes</strong> pour traiter les demandes en lot plutôt qu'au fil des mails.</li>
    </ul>
  </div>`
  },
  ],
  deploiement: [
  {
    title: '9 h 40, le jour du lancement',
    description: 'Le site plante quarante minutes après la mise en production, en pleine campagne e-mail. Décider vite, communiquer juste.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Refonte d'un e-commerce de cosmétiques (35 000 visiteurs/mois). Mise en production ce jeudi à 9 h. À 9 h 30, la cliente envoie sa newsletter de lancement à 30 000 contacts avec un code -15 %.</p>
    <p><strong>9 h 40 :</strong> le monitoring remonte des erreurs 500 sur la page de paiement. 340 visiteurs sont en ligne. Six commandes ont échoué. La cliente vous appelle, la voix tremblante : « Tout le monde m'écrit que ça ne marche pas. »</p>
    <p><strong>Ce que vous savez :</strong> l'ancien site est encore déployable en 5 minutes. Le développeur pense que « c'est peut-être la clé Stripe ». Personne n'a testé un vrai paiement en production ce matin.</p>
    <h4>Votre mission (10 min)</h4>
    <ol>
      <li>Écrivez, minute par minute, vos cinq premières actions entre 9 h 40 et 9 h 50.</li>
      <li>Rollback ou correctif à chaud ? Donnez le critère qui tranche.</li>
      <li>Rédigez le message que vous envoyez à la cliente à 10 h (5 lignes maximum).</li>
      <li>Que proposez-vous d'afficher aux visiteurs pendant l'incident ?</li>
      <li>Post-mortem : trois causes probables et une mesure de prévention pour chacune.</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : gérer le crash du jour J</h2>

    <h3 class="correction-subtitle">1. Les dix premières minutes</h3>
    <ul class="correction-list">
      <li><strong>9 h 40 :</strong> confirmer l'incident soi-même (tester un paiement), noter l'heure de début. Dire à la cliente : « Je vois le problème, je vous rappelle à 10 h avec un état précis. » Puis raccrocher : on ne diagnostique pas au téléphone.</li>
      <li><strong>9 h 42 :</strong> décision : rollback immédiat de l'ancienne version (5 min). Le développeur garde les logs de la nouvelle version pour l'analyse.</li>
      <li><strong>9 h 47 :</strong> vérifier que le paiement fonctionne sur l'ancien site avec une commande test à 1 €.</li>
      <li><strong>9 h 48 :</strong> vérifier dans Stripe si des clients ont été débités sans commande enregistrée (le pire cas) ; lister les 6 commandes en échec.</li>
      <li><strong>9 h 50 :</strong> bannière sur le site (voir 4) et préparation du message client.</li>
    </ul>

    <h3 class="correction-subtitle">2. Rollback ou correctif ?</h3>
    <ul class="correction-list">
      <li><strong>Le critère :</strong> si la cause n'est pas identifiée avec certitude en moins de 10 minutes, on revient en arrière. « Peut-être la clé Stripe » n'est pas une certitude.</li>
      <li><strong>Pourquoi :</strong> un rollback coûte 5 minutes et une version connue ; un correctif à chaud coûte un temps inconnu et un risque d'aggraver. Pendant une campagne e-mail, chaque minute vaut des commandes.</li>
      <li><strong>Ensuite :</strong> reproduire l'erreur sur l'environnement de staging, corriger, redéployer à un moment calme (jamais pendant la campagne).</li>
    </ul>

    <h3 class="correction-subtitle">3. Message à la cliente (10 h)</h3>
    <ul class="correction-list">
      <li>« Le paiement du nouveau site a été indisponible de 9 h 40 à 9 h 47. Nous avons remis l'ancien site en ligne, les commandes fonctionnent à nouveau. Six commandes ont échoué : aucun client n'a été débité, je vous envoie leurs e-mails pour un geste commercial. Nous analysons la cause sur notre environnement de test et je vous propose un nouveau créneau de mise en ligne demain 7 h, après un test de paiement réel. Je vous rappelle à 11 h. »</li>
      <li><strong>Ce qu'on ne dit pas :</strong> « c'est la faute de Stripe », « ce n'est pas grave », des détails techniques.</li>
    </ul>

    <h3 class="correction-subtitle">4. Pour les visiteurs</h3>
    <ul class="correction-list">
      <li>Une bannière honnête et courte : « Paiement momentanément indisponible, retour à la normale dans quelques minutes. Votre code -15 % reste valable jusqu'à dimanche. »</li>
      <li>Prolonger l'offre transforme l'incident en geste commercial et évite l'effet « j'ai raté la promo ».</li>
    </ul>

    <h3 class="correction-subtitle">5. Post-mortem</h3>
    <ul class="correction-list">
      <li><strong>Cause probable 1 — clé API Stripe de test en production.</strong> Prévention : checklist de variables d'environnement, revue à deux avant déploiement.</li>
      <li><strong>Cause probable 2 — aucun test de paiement réel après déploiement.</strong> Prévention : « smoke test » systématique (commande à 1 € puis remboursement) avant de déclarer la mise en prod terminée.</li>
      <li><strong>Cause probable 3 — mise en production 30 minutes avant une campagne à 30 000 contacts.</strong> Prévention : déployer la veille à faible trafic, ou reporter la newsletter de 24 h ; le chef de projet doit connaître le calendrier marketing du client.</li>
    </ul>
  </div>`
  },
  ],
  budget: [
  {
    title: 'Trois devis pour le même site',
    description: 'Un client compare 3 900 €, 12 500 € et 29 000 € pour « le même » site. Lui expliquer l\'écart et le conseiller.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Une boulangerie-pâtisserie de quartier (2 boutiques, 12 salariés) a demandé trois devis pour « un site avec commande en ligne et retrait en boutique ». La gérante vous montre les trois propositions et demande : « Pourquoi il y a sept fois d'écart ? Le moins cher me suffit, non ? »</p>
    <ul>
      <li><strong>Devis A — freelance : 3 900 € TTC.</strong> Site Wix, 5 pages, formulaire de commande par e-mail, 3 semaines, « maintenance : vous gérez ».</li>
      <li><strong>Devis B — agence locale : 12 500 € HT.</strong> WordPress + WooCommerce, 8 pages, click & collect avec créneaux, paiement en ligne, formation 2 h, maintenance 6 mois incluse, 7 semaines.</li>
      <li><strong>Devis C — agence digitale : 29 000 € HT.</strong> Développement sur mesure Next.js, back-office personnalisé, gestion des 2 boutiques et des stocks, application de préparation pour le labo, 12 semaines, maintenance en option (250 €/mois).</li>
    </ul>
    <h4>Votre mission (8 min)</h4>
    <ol>
      <li>Expliquez l'écart : que contient chaque devis, et surtout que ne contient-il pas ? (tableau inclus / exclu)</li>
      <li>Listez 5 questions à poser aux trois prestataires pour comparer à périmètre égal.</li>
      <li>Quel devis conseillez-vous à cette cliente, et pourquoi ? Y a-t-il une question à lui poser avant de répondre ?</li>
      <li>Quels coûts cachés doit-elle ajouter pour chaque option sur 3 ans ?</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : lire trois devis</h2>

    <h3 class="correction-subtitle">1. Ce que les devis contiennent — et pas</h3>
    <ul class="correction-list">
      <li><strong>A (3 900 €) :</strong> pas de paiement en ligne ni de créneaux de retrait : la « commande » est un e-mail à traiter à la main. Pas de TVA récupérable (TTC), pas de maintenance, pas de formation. Ce n'est pas un site de commande, c'est une vitrine avec formulaire.</li>
      <li><strong>B (12 500 €) :</strong> répond au besoin exprimé (click & collect, paiement, créneaux), inclut formation et 6 mois de maintenance. Ne dit rien de la gestion des deux boutiques ni des stocks.</li>
      <li><strong>C (29 000 €) :</strong> répond à un besoin plus large que celui exprimé (stocks, labo, multi-boutique). Sur mesure = dépendance à l'agence pour toute évolution ; maintenance non incluse (9 000 € sur 3 ans).</li>
      <li><strong>L'écart s'explique par le périmètre, pas par le prix du même travail.</strong> A et C ne répondent pas à la même question.</li>
    </ul>

    <h3 class="correction-subtitle">2. Cinq questions pour comparer à périmètre égal</h3>
    <ul class="correction-list">
      <li>Le paiement en ligne et les créneaux de retrait sont-ils inclus ? Sinon, combien ?</li>
      <li>Qui met à jour les produits et les prix, et avec quel outil ? Combien de temps de formation ?</li>
      <li>Que couvre la maintenance (mises à jour de sécurité, bugs, évolutions) et à quel prix après la période incluse ?</li>
      <li>À qui appartiennent le site, le nom de domaine et les contenus si l'on se sépare ?</li>
      <li>Combien coûtent l'hébergement et les abonnements (Wix, Shopify, plugins) par an ?</li>
    </ul>

    <h3 class="correction-subtitle">3. Le conseil</h3>
    <ul class="correction-list">
      <li><strong>Question préalable :</strong> « Combien de commandes en ligne par jour espérez-vous, et qui les préparera ? » Si la réponse est « quelques-unes le week-end », B suffit largement ; si c'est « 100 par jour sur 2 boutiques », C devient pertinent.</li>
      <li><strong>Recommandation par défaut : B.</strong> Il répond au besoin exprimé, forme l'équipe et la rend autonome, avec un outil standard qu'une autre agence pourra reprendre. Négocier l'ajout de la gestion des deux boutiques (souvent un réglage WooCommerce).</li>
      <li><strong>Pourquoi pas A :</strong> il ne fait pas ce qu'elle croit acheter. Le « moins cher » ici, c'est celui qu'il faudra refaire.</li>
      <li><strong>Pourquoi pas C aujourd'hui :</strong> on ne construit pas un outil de gestion de stock avant d'avoir prouvé que les clients commandent en ligne.</li>
    </ul>

    <h3 class="correction-subtitle">4. Coûts cachés sur 3 ans</h3>
    <ul class="correction-list">
      <li><strong>A :</strong> abonnement Wix ≈ 900 €, temps de traitement manuel des commandes (1 h/jour = plusieurs milliers d'euros de temps salarié), refonte probable à 12 mois.</li>
      <li><strong>B :</strong> hébergement ≈ 600 €, plugins premium ≈ 400 €, maintenance après 6 mois ≈ 100 à 150 €/mois, commissions de paiement ≈ 1,5 % du CA en ligne.</li>
      <li><strong>C :</strong> maintenance 9 000 €, hébergement ≈ 1 500 €, toute évolution facturée en jours ; risque de dépendance si l'agence disparaît.</li>
    </ul>
  </div>`
  },
  ],
  'cdc-technique': [
  {
    title: 'La démo qui tourne mal',
    description: 'En sprint review, la fonctionnalité livrée n\'est pas celle que le client imaginait. Comprendre pourquoi et réécrire la user story.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Boutique en ligne d'épicerie fine. Sprint 3, revue avec le client. Le développeur présente la story du backlog : <em>« En tant qu'utilisateur, je veux filtrer les produits. »</em> Il a livré un filtre par catégorie (épicerie, cave, frais).</p>
    <p><strong>Réaction du client :</strong> « Ce n'est pas ça du tout. Je voulais que mes clients allergiques filtrent par allergène, trient par prix, et que le site se souvienne de leurs filtres. C'était évident ! »</p>
    <p><strong>Réaction du développeur :</strong> « Ce n'était écrit nulle part. J'ai fait ce qui était demandé. »</p>
    <p>Deux jours de développement sont perdus. Le silence dans la salle dure quatre secondes.</p>
    <h4>Votre mission (8 min)</h4>
    <ol>
      <li>Qui est responsable ? Argumentez en trois points sans chercher de coupable.</li>
      <li>Réécrivez la user story avec ses critères d'acceptation (format « Étant donné / Quand / Alors », 3 critères minimum).</li>
      <li>Qu'aurait-il dû se passer <em>avant</em> le sprint pour éviter cela ?</li>
      <li>Que dites-vous, là, tout de suite, pour conclure la revue ?</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : la story mal écrite</h2>

    <h3 class="correction-subtitle">1. La responsabilité est partagée, et surtout structurelle</h3>
    <ul class="correction-list">
      <li><strong>Le chef de projet / product owner</strong> a laissé entrer dans le sprint une story sans critères d'acceptation : c'est la cause première. Une story de six mots n'est pas « prête ».</li>
      <li><strong>Le développeur</strong> a démarré sans poser la question « filtrer sur quoi ? » : un doute non levé au daily coûte deux jours en revue.</li>
      <li><strong>Le client</strong> a considéré comme « évident » un besoin qu'il n'avait jamais exprimé. Rien n'est évident : c'est précisément pour cela qu'on écrit.</li>
      <li><strong>Conclusion :</strong> ce n'est pas une faute individuelle, c'est un processus manquant (définition de « prêt »).</li>
    </ul>

    <h3 class="correction-subtitle">2. La story réécrite</h3>
    <ul class="correction-list">
      <li><strong>User story :</strong> En tant que client ayant une allergie alimentaire, je veux filtrer le catalogue par allergène et trier par prix, afin de trouver rapidement des produits sûrs pour moi.</li>
      <li><strong>Critère 1 :</strong> Étant donné la liste des produits, quand je coche « sans gluten », alors seuls les produits dont la fiche indique « sans gluten » s'affichent, et le nombre de résultats est visible.</li>
      <li><strong>Critère 2 :</strong> Étant donné un filtre actif, quand je choisis « prix croissant », alors les résultats filtrés sont triés du moins cher au plus cher, sans perdre le filtre.</li>
      <li><strong>Critère 3 :</strong> Étant donné que j'ai appliqué des filtres, quand je reviens sur le catalogue dans la même session, alors mes filtres sont encore actifs.</li>
      <li><strong>Critère 4 :</strong> Étant donné un filtre sans résultat, quand la liste est vide, alors un message propose de retirer un filtre.</li>
      <li><strong>Hors périmètre de la story :</strong> filtre multi-allergènes combiné, mémorisation entre sessions (compte client).</li>
    </ul>

    <h3 class="correction-subtitle">3. Ce qui aurait dû se passer avant le sprint</h3>
    <ul class="correction-list">
      <li><strong>Un affinage du backlog</strong> (refinement) où l'équipe lit chaque story, pose ses questions et estime. Une story qu'on ne sait pas estimer n'entre pas dans le sprint.</li>
      <li><strong>Une définition de « prêt »</strong> écrite : utilisateur nommé, bénéfice, critères d'acceptation, maquette si écran, estimation.</li>
      <li><strong>Un client disponible</strong> pendant le sprint pour répondre en moins de 24 h — inscrit dans le contrat.</li>
    </ul>

    <h3 class="correction-subtitle">4. Conclure la revue</h3>
    <ul class="correction-list">
      <li>« Merci, c'est exactement le genre d'écart que la revue sert à détecter tôt. Le filtre par catégorie reste utile, on le garde. Je reformule la story des allergènes avec vous maintenant, en dix minutes, et elle entre dans le sprint suivant en priorité. Ensuite, on met en place une règle : aucune story ne démarre sans critères d'acceptation validés par vous. »</li>
      <li>On protège le développeur (pas de blâme public), on rassure le client (le besoin est entendu), on répare le processus (règle explicite).</li>
    </ul>
  </div>`
  },
  ],
  recette: [
  {
    title: '47 tickets la veille de la mise en prod',
    description: 'Trier une avalanche de retours de recette, décider go / no-go et répondre au client sans perdre la date.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Contexte :</strong> Site e-commerce de vêtements, mise en production prévue demain 7 h. Le client avait 5 jours de recette ; il n'a rien envoyé pendant 4 jours. À 23 h 12, vous recevez un tableur de 47 lignes intitulé « Retours (urgent) ». Extrait :</p>
    <ol>
      <li>Le paiement par carte échoue sur Safari iPhone.</li>
      <li>Je n'aime pas le bleu du bouton « Ajouter au panier ».</li>
      <li>Il manque les CGV dans le pied de page.</li>
      <li>Faute d'orthographe sur la page Contact (« adrese »).</li>
      <li>On pourrait ajouter une liste d'envies ?</li>
      <li>La fiche « Robe lin » renvoie une erreur 404.</li>
      <li>Je ne reçois pas l'e-mail de confirmation de commande.</li>
      <li>La photo de la page d'accueil est floue sur mon écran.</li>
      <li>Le menu devrait être à gauche comme sur Zara.</li>
      <li>Les pages produits mettent 6 secondes à charger chez moi.</li>
      <li>Le filtre par taille ne garde pas la sélection quand on change de page.</li>
      <li>Le prix barré n'apparaît pas sur les promotions.</li>
    </ol>
    <p>Les 35 autres lignes sont du même ordre. Le client termine son mail par : « Je compte sur vous pour tout corriger avant demain. »</p>
    <h4>Votre mission (10 min)</h4>
    <ol>
      <li>Classez les 12 retours ci-dessus : bloquant / majeur / mineur / hors périmètre. Justifiez les cas limites.</li>
      <li>Go ou no-go pour demain 7 h ? Sur quels critères ?</li>
      <li>Rédigez la réponse envoyée au client ce soir (6 lignes maximum).</li>
      <li>Quel processus de recette proposez-vous pour le prochain projet ?</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : trier 47 tickets</h2>

    <h3 class="correction-subtitle">1. Classification des 12 retours</h3>
    <ul class="correction-list">
      <li><strong>Bloquants (empêchent de vendre ou exposent juridiquement) :</strong> 1 paiement Safari iPhone (plus de la moitié du trafic mobile), 7 e-mail de confirmation absent (le client ne sait pas s'il a commandé), 3 CGV manquantes (obligation légale pour vendre en ligne).</li>
      <li><strong>Majeurs (dégradent fortement l'usage, à corriger dans la semaine) :</strong> 6 erreur 404 sur une fiche, 10 chargement à 6 s (à vérifier : chez lui ou partout ?), 11 filtre par taille perdu, 12 prix barré absent sur les promos.</li>
      <li><strong>Mineurs (correction rapide, pas de risque) :</strong> 4 faute d'orthographe, 8 photo floue (probablement un export à optimiser).</li>
      <li><strong>Hors périmètre (avenant ou lot 2) :</strong> 5 liste d'envies (nouvelle fonctionnalité), 9 menu à gauche (maquettes validées par PV), 2 couleur du bouton (charte validée — on peut offrir un ajustement, mais ce n'est pas un bug).</li>
      <li><strong>Cas limite :</strong> le n° 10 est « majeur » si reproductible, « à investiguer » sinon ; on ne classe pas sur la base d'un seul poste.</li>
    </ul>

    <h3 class="correction-subtitle">2. Go / no-go</h3>
    <ul class="correction-list">
      <li><strong>No-go demain 7 h.</strong> Trois bloquants dont un sur le paiement : on ne lance pas un site qui ne peut pas encaisser sur iPhone.</li>
      <li><strong>Critère de go :</strong> les 3 bloquants corrigés, testés sur staging, puis un paiement réel de 1 € en production. Le reste ne conditionne pas la mise en ligne.</li>
      <li><strong>Nouvelle date proposée :</strong> J+2 à 7 h, ce qui laisse une journée de correction et une matinée de vérification. Reporter d'un jour coûte moins qu'un lancement raté.</li>
    </ul>

    <h3 class="correction-subtitle">3. Réponse au client ce soir</h3>
    <ul class="correction-list">
      <li>« Merci pour ces retours, je les ai tous lus et classés. Trois points empêchent une mise en ligne sereine (paiement sur iPhone, e-mail de confirmation, CGV) : nous les corrigeons demain et je vous propose la mise en ligne jeudi 7 h après un paiement test réel. Sept points seront traités dans la semaine suivant le lancement. Trois demandes sont des évolutions par rapport aux maquettes validées : je vous les chiffre séparément. Vous trouverez le tableau classé en pièce jointe ; je vous appelle demain à 9 h pour le valider ensemble. »</li>
      <li>On ne dit ni « c'est trop tard », ni « tout sera corrigé » : on tient la qualité et la relation.</li>
    </ul>

    <h3 class="correction-subtitle">4. Le processus de recette pour la prochaine fois</h3>
    <ul class="correction-list">
      <li><strong>Une recette cadrée :</strong> 5 jours ouvrés, avec un scénario de test fourni par l'agence (parcours d'achat complet, sur 3 navigateurs) et un jalon intermédiaire à J+2 (« avez-vous commencé ? »).</li>
      <li><strong>Un outil de tickets partagé</strong> (pas un tableur par mail) avec les champs : page, étape, attendu, constaté, capture, sévérité proposée.</li>
      <li><strong>Une grille de sévérité</strong> annexée au contrat : ce qu'est un bloquant, ce qu'est une évolution.</li>
      <li><strong>Une règle claire :</strong> sans retour à la fin de la période, la recette est réputée acceptée (clause de recette tacite), et les demandes hors maquettes validées passent en avenant.</li>
      <li><strong>Une date de mise en production conditionnée</strong> au PV de recette signé, pas au calendrier.</li>
    </ul>
  </div>`
  },
  ],
}

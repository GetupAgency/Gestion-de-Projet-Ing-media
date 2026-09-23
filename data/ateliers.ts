import { newCases } from './newCases'

/**
 * Ateliers en groupe du terrain d'entraînement : 30 min à 1 h, un artefact réaliste,
 * un livrable par groupe, une correction réservée à l'enseignant (jamais dans le bundle).
 * Les secteurs sont choisis pour parler aux étudiants : streetwear, matcha, rap, covoiturage,
 * bubble tea, tatouage, sneakers, créateurs food, e-sport.
 */
export interface Atelier {
  id: string
  title: string
  pitch: string
  sector: string
  duration: string
  format: string
  skill: string
  artefact: string
  module: string
  description: string
  exercice: string
  correction?: string
}

const karim = newCases.cdc[0]

export const ateliers: Atelier[] = [
  {
    id: 'brief-smart',
    title: 'Le mail de Karim, version SMART',
    pitch: 'Un dirigeant de marque streetwear veut « un e-commerce complet, qui claque, pour Noël ». Réécrire son brief en objectifs SMART.',
    sector: 'Streetwear · NORD SUD',
    duration: '55 min',
    format: 'Groupes de 3-4',
    skill: 'Objectifs SMART, cadrage',
    artefact: 'E-mail',
    module: 'lancement',
    description: karim.description,
    exercice: karim.exercice,
    correction: karim.correction,
  },

  {
    id: 'trous-brief',
    title: 'Le brief Notion plein de trous',
    pitch: 'Une marque de matcha envoie une page Notion en guise de brief. Trouver ce qui manque, poser les dix bonnes questions.',
    sector: 'Boisson · MATCHAA',
    duration: '40 min',
    format: 'Groupes de 3-4',
    skill: 'Analyse de brief, questions de cadrage',
    artefact: 'Page Notion',
    module: 'lancement',
    description: 'Un brief incomplet est le cas normal. L\'atelier entraîne à repérer les manques chapitre par chapitre et à en faire des questions précises, classées par impact.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 40 minutes · un livrable par groupe (une grille et un mail).</p>
    <p><strong>Contexte :</strong> MATCHAA est une marque de matcha lancée il y a 18 mois par Léa (27 ans, ex-barista) et Sofiane (26 ans, ex-commercial). Ils vendent en marché, en DM Instagram et via une page Shopify bricolée. Ils vous envoyent le lien d'une page Notion en disant « tout est dedans ».</p>

    <blockquote>
      <p><strong>MATCHAA × agence — Brief site</strong><br><em>Dernière modif : hier, 23 h 40</em></p>
      <p><strong>Qui on est :</strong> le matcha, mais bien. Cérémonial de Uji, sans sucre, pour les gens qui veulent arrêter le café sans devenir chiants.</p>
      <p><strong>Ce qu'on veut :</strong> un vrai site, pas notre Shopify moche. Avec un abonnement mensuel (le matcha, ça se consomme vite), une page recettes, un quiz « quel matcha es-tu », et un espace pour les cafés partenaires qui nous revendent.</p>
      <p><strong>Cible :</strong> les gens comme nous.</p>
      <p><strong>Style :</strong> minimal, japonais mais pas cliché, vert mais pas vert Starbucks. On a un logo. On adore le site de Aesop et celui de Loop Earplugs.</p>
      <p><strong>Techniquement :</strong> on veut que ce soit rapide et que ça marche sur mobile. Sofiane a un pote qui dit qu'il faut du headless.</p>
      <p><strong>Quand :</strong> dès que possible, on a un salon en janvier.</p>
      <p><strong>Budget :</strong> ✍️ <em>(vide)</em></p>
      <p><strong>Trucs à ne pas oublier :</strong> les 340 abonnés Instagram qui ont déjà commandé doivent retrouver leurs infos. Léa veut pouvoir changer les photos elle-même. Le matcha part en 3 jours par Colissimo. On a eu un contrôle DGCCRF sur les étiquettes l'an dernier, faut pas refaire la même erreur sur le site.</p>
    </blockquote>

    <h4>Étape 1 — La grille des manques (15 min)</h4>
    <p>Reprenez les six chapitres d'un cahier des charges (présentation, fonctionnel, technique, design, planning et budget, maintenance). Pour chacun, notez ce que le brief dit, ce qu'il ne dit pas, et ce qu'il dit sans le savoir (les indices cachés dans « trucs à ne pas oublier »). Vous devriez trouver au moins 15 manques.</p>

    <h4>Étape 2 — Dix questions, classées (15 min)</h4>
    <ol>
      <li>Formulez dix questions au maximum. Chaque question doit pouvoir recevoir une réponse chiffrée ou factuelle (pas « quels sont vos objectifs ? »).</li>
      <li>Classez-les par impact sur le devis : de celle qui peut faire varier le prix du simple au triple, à celle qui est un détail.</li>
      <li>Marquez d'une étoile les trois questions que vous poseriez au téléphone plutôt que par mail, et dites pourquoi.</li>
    </ol>

    <h4>Étape 3 — Le mail de réponse (10 min)</h4>
    <p>Rédigez la réponse à Léa et Sofiane en 10 lignes maximum : elle remercie, montre que vous avez lu (citez un détail), propose un format pour obtenir les réponses (appel, atelier), et fixe une date. Elle ne contient pas la liste des dix questions brute.</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : les trous du brief MATCHAA</h2>

    <h3 class="correction-subtitle">Étape 1 — les manques, chapitre par chapitre</h3>
    <ul class="correction-list">
      <li><strong>Présentation :</strong> aucun chiffre (CA, commandes par mois, panier moyen, part des abonnements espérée), aucun objectif, « cible : les gens comme nous » n'est pas une cible. Indice caché : 340 clients existants, donc une base à migrer.</li>
      <li><strong>Fonctionnel :</strong> l'abonnement est cité sans règle (fréquence, pause, résiliation, prix), l'espace « cafés partenaires » est un projet B2B entier (tarifs pro, commandes en volume, facturation) glissé dans une phrase. Le quiz est-il un outil de vente (recommande un produit) ou un gadget ? Rien sur le compte client, les codes promo, les avis, les e-mails transactionnels.</li>
      <li><strong>Technique :</strong> « headless » est une opinion d'un ami, pas un besoin. Rien sur le paiement, la logistique (qui imprime les étiquettes Colissimo, connecté ou à la main ?), le stock, l'outil de caisse des marchés. Indice caché : la migration des 340 clients et de leurs commandes.</li>
      <li><strong>Design :</strong> deux références de sites (bon signe) mais pas de charte, pas de photos produit professionnelles mentionnées, « Léa change les photos elle-même » impose un back-office simple.</li>
      <li><strong>Planning et budget :</strong> « dès que possible » et « un salon en janvier » sans date ; budget vide. Le salon est-il une contrainte (le site doit être en ligne avant) ou une opportunité (des QR codes vers le site) ?</li>
      <li><strong>Maintenance et légal :</strong> rien sur l'hébergement, la maintenance, la propriété du site. Indice caché majeur : le contrôle DGCCRF signifie que les mentions obligatoires (ingrédients, origine, allergènes, prix au kilo, CGV d'abonnement avec droit de rétractation) sont un chantier à part entière.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — dix questions qui changent le devis</h3>
    <ul class="correction-list">
      <li>★ Combien de commandes par mois aujourd'hui, à quel panier moyen, et combien via Shopify contre DM ? (calibre tout)</li>
      <li>★ Quelle enveloppe avez-vous en tête pour le site, et pour la pub qui l'alimentera ? (un site à 6 k€ et un site à 25 k€ ne se ressemblent pas)</li>
      <li>★ Le salon de janvier : quelle date exacte, et que doit faire le site ce jour-là ?</li>
      <li>Comment fonctionne l'abonnement souhaité : quelle fréquence, peut-on le mettre en pause, quel prix par rapport à l'achat unique ?</li>
      <li>Combien de cafés partenaires aujourd'hui, comment commandent-ils et paient-ils actuellement ?</li>
      <li>Qui prépare les colis, où est le stock, comment sont générées les étiquettes Colissimo ?</li>
      <li>Que reprochez-vous précisément au Shopify actuel ? (souvent le problème est le thème, pas l'outil : un Shopify bien fait peut être la bonne réponse)</li>
      <li>Avez-vous des photos produit professionnelles et des textes ? Qui les produit ?</li>
      <li>Qu'a demandé la DGCCRF exactement ? Avez-vous le courrier ?</li>
      <li>Qui décide entre Léa et Sofiane quand ils ne sont pas d'accord ?</li>
    </ul>
    <p>Les trois étoiles sont des questions d'argent et de date : par écrit, on obtient des réponses vagues ; à l'oral, on peut relancer et lire l'hésitation.</p>

    <h3 class="correction-subtitle">Étape 3 — un mail possible</h3>
    <ul class="correction-list">
      <li>« Bonjour Léa, bonjour Sofiane, merci pour la page Notion, on sent le produit et l'envie. Le point sur le contrôle DGCCRF est précieux : il oriente déjà la structure des fiches produit. Avant de chiffrer, il nous manque quelques éléments qui font varier fortement le projet : vos volumes actuels, le fonctionnement souhaité de l'abonnement, l'organisation des colis, la date du salon et l'enveloppe envisagée. Le plus efficace est un appel de 45 minutes à trois : je vous propose jeudi 14 h ou vendredi 10 h. Nous en ressortirons avec un périmètre clair et vous recevrez une proposition sous une semaine. À très vite, [Prénom]. »</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Grille des manques (8) :</strong> 1 point par chapitre couvert, 2 points pour les indices cachés (migration des 340 clients, DGCCRF).</li>
      <li><strong>Questions (8) :</strong> factuelles et fermées (4), classement justifié par l'impact sur le prix (2), choix des trois questions orales (2).</li>
      <li><strong>Mail (4) :</strong> court, cite un détail du brief, propose un créneau, ne colle pas la liste brute.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Répondre au « headless » par une discussion technique. La bonne réponse est une question : « qu'attendez-vous du site que votre Shopify ne fait pas ? »</li>
      <li>Ignorer l'espace cafés partenaires parce qu'il tient en une phrase. C'est peut-être la moitié du budget.</li>
      <li>Envoyer les dix questions en liste. Le client répond à trois, mal.</li>
    </ul>
  </div>`,
  },

  {
    id: 'note-intention',
    title: 'Une note d’intention pour Cité Sonore',
    pitch: 'Un label de rap marseillais veut un site de drops. Écrire la page qui dit ce que vous avez compris et ce que vous proposez.',
    sector: 'Musique · CITÉ SONORE',
    duration: '45 min',
    format: 'Groupes de 3-4',
    skill: 'Note d’intention, parti pris, réponse à un brief',
    artefact: 'Brief + note',
    module: 'lancement',
    description: 'La note d\'intention est la première page d\'une réponse à un brief : elle prouve qu\'on a compris avant de vendre. Une page, cinq parties, un parti pris assumé.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 45 minutes · une page par groupe, lue à voix haute.</p>
    <p><strong>Contexte :</strong> CITÉ SONORE est un label indépendant marseillais, 4 artistes rap, 2 salariés, 180 k abonnés cumulés sur Instagram et TikTok. Leur manager, Nadia, a envoyé ce brief à trois agences. Vous avez 45 minutes pour écrire la note d'intention qui ouvrira votre réponse.</p>

    <blockquote>
      <p><strong>Brief — site CITÉ SONORE</strong></p>
      <p>On vend nos vinyles, nos t-shirts et nos places de concert à droite à gauche : Bandcamp, Shotgun, un Linktree, et beaucoup de DM. À chaque sortie, on fait un « drop » : 300 pièces, tout part en une heure, et on perd des ventes parce que les gens ne savent pas où acheter.</p>
      <p>On veut un seul endroit. Un site qui tient la charge le soir d'un drop, où on annonce, on fait patienter, on vend, et où les fans se sentent chez eux. Pas un Shopify avec un thème, on veut que ça nous ressemble : brut, marseillais, pas de blabla.</p>
      <p>On veut aussi garder nos fans : aujourd'hui ils sont sur Instagram, donc chez Meta, pas chez nous.</p>
      <p>Chiffres : 6 drops par an, 300 à 500 pièces par drop, panier moyen 38 €, 40 % des acheteurs reviennent. Budget : 18 000 € HT. Prochain drop : dans 4 mois, on aimerait le faire sur le site.</p>
      <p>Ce qu'on ne veut pas : un site qui ressemble à un site de label. Une appli. Des pubs. Une plateforme qui prend une commission.</p>
      <p>Nadia</p>
    </blockquote>

    <h4>Étape 1 — Décider avant d'écrire (10 min)</h4>
    <ol>
      <li>Reformulez en une phrase le problème réel de CITÉ SONORE. Indice : ce n'est pas « ils n'ont pas de site ».</li>
      <li>Choisissez un parti pris, un seul, qui guidera tout le projet. Exemples de formes : « le site est une salle d'attente », « le site est un club dont on a la carte », « le site est un vinyle ». Vous devrez le tenir.</li>
      <li>Listez trois choses que vous refuserez de faire dans cette phase, et pourquoi.</li>
    </ol>

    <h4>Étape 2 — Écrire la page (25 min)</h4>
    <p>Une page, 350 à 450 mots, cinq parties titrées, dans cet ordre :</p>
    <ol>
      <li><strong>Ce que nous avons compris</strong> : le problème, les chiffres qui comptent, ce que le brief dit entre les lignes.</li>
      <li><strong>Notre parti pris</strong> : la phrase, et trois conséquences concrètes sur le site.</li>
      <li><strong>Comment nous allons travailler</strong> : les grandes étapes jusqu'au drop dans 4 mois, et le rôle de Nadia.</li>
      <li><strong>Ce qui nous inquiète</strong> : deux risques nommés, et comment on les traite.</li>
      <li><strong>Ce que nous ne ferons pas</strong> : les refus de l'étape 1, formulés positivement.</li>
    </ol>
    <p>Interdits : « moderne », « innovant », « expérience utilisateur unique », « clé en main ». Chaque adjectif doit pouvoir être vérifié.</p>

    <h4>Étape 3 — Lecture (10 min)</h4>
    <p>Deux groupes lisent leur note à voix haute. La classe joue Nadia : après chaque lecture, elle répond à une seule question, « est-ce que ces gens ont compris ce qu'on vit un soir de drop ? », par oui ou non.</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : la note d'intention CITÉ SONORE</h2>

    <h3 class="correction-subtitle">Le problème réel</h3>
    <ul class="correction-list">
      <li>Le label ne manque pas d'un site, il manque d'un <strong>lieu qui tient un pic</strong> : 300 à 500 ventes en une heure, six fois par an, et le reste du temps presque rien. C'est un problème de charge et d'attente, pas de catalogue.</li>
      <li>Le second problème est dit en une ligne : « nos fans sont chez Meta ». Le site doit capter des e-mails ou des numéros avant le drop. C'est là que se joue la valeur pour le label.</li>
      <li>Les 40 % d'acheteurs qui reviennent disent qu'un compte client et une file d'attente prioritaire ont du sens.</li>
    </ul>

    <h3 class="correction-subtitle">Un parti pris qui tient</h3>
    <ul class="correction-list">
      <li>« Le site est la porte du concert » : fermé la plupart du temps, une file devant, on entre à l'heure dite. Conséquences : une page d'attente qui compte à rebours et collecte un e-mail, un tunnel d'achat en trois écrans, une page « après » qui montre ce qui est parti et ce qui reste.</li>
      <li>Un parti pris se reconnaît à ce qu'il permet de dire non : pas de blog, pas de page « à propos » longue, pas de catalogue permanent de 40 références.</li>
    </ul>

    <h3 class="correction-subtitle">Comment travailler en 4 mois avec 18 k€</h3>
    <ul class="correction-list">
      <li>Semaines 1-2 : cadrage, choix de la base technique. Une boutique Shopify avec thème sur mesure et file d'attente tient 500 commandes en une heure sans effort ; le sur-mesure complet ne rentre pas dans 18 k€ avec cette contrainte de charge. Le refus du « Shopify avec un thème » vise le thème, pas la plateforme : c'est à expliquer à Nadia, pas à cacher.</li>
      <li>Semaines 3-6 : design du monde visuel avec un artiste du label dans la boucle, une validation par semaine par Nadia.</li>
      <li>Semaines 7-12 : développement, import des produits, capture e-mail en ligne dès la semaine 8 pour commencer à collecter avant le drop.</li>
      <li>Semaines 13-14 : test de charge simulé (500 commandes en 10 minutes), répétition générale avec l'équipe du label.</li>
      <li>Semaine 16 : drop. L'agence est présente en ligne ce soir-là.</li>
    </ul>

    <h3 class="correction-subtitle">Deux inquiétudes à nommer</h3>
    <ul class="correction-list">
      <li>Le paiement : le soir d'un drop, un incident Stripe ou un 3D Secure lent fait perdre des ventes. Réponse : Apple Pay et Google Pay activés, test réel une semaine avant.</li>
      <li>Le contenu : un site brut sans photos brutes est un site vide. Qui shoote les pièces ? Réponse : une journée de shooting dans le budget, ou un artiste qui le fait au téléphone avec une direction claire.</li>
    </ul>

    <h3 class="correction-subtitle">Ce qu'on ne fera pas</h3>
    <ul class="correction-list">
      <li>Pas d'application : les fans arrivent d'un lien Instagram, le site mobile fait le travail.</li>
      <li>Pas de billetterie propre : Shotgun fait très bien le travail et ne prend pas de commission excessive pour ce volume ; on intègre, on ne reconstruit pas.</li>
      <li>Pas de catalogue permanent : entre deux drops, le site vend les restes et collecte des e-mails, rien d'autre.</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Compréhension (6) :</strong> le pic de charge et la dépendance à Meta sont nommés (4), les chiffres du brief sont réutilisés (2).</li>
      <li><strong>Parti pris (5) :</strong> une phrase (1), trois conséquences vérifiables sur le site (3), il permet un refus (1).</li>
      <li><strong>Méthode (4) :</strong> des étapes datées jusqu'au drop, le rôle de Nadia, un test de charge.</li>
      <li><strong>Risques et refus (3) :</strong> deux risques avec réponse, trois refus argumentés.</li>
      <li><strong>Écriture (2) :</strong> aucun mot interdit, 350-450 mots, lisible à voix haute.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Écrire une plaquette d'agence (« notre équipe passionnée ») au lieu de parler du label.</li>
      <li>Promettre du sur-mesure intégral pour 18 k€ avec un test de charge : c'est mentir dès la première page.</li>
      <li>Un parti pris décoratif (« brut et authentique ») qui n'empêche rien et ne décide rien.</li>
    </ul>
  </div>`,
  },

  {
    id: 'crise-budget',
    title: 'Trajet Campus perd 12 000 €',
    pitch: 'À mi-projet, la Région retire 30 % du budget d’une appli de covoiturage étudiant. Couper, replanifier, annoncer.',
    sector: 'Mobilité · TRAJET CAMPUS',
    duration: '60 min',
    format: 'Groupes de 4',
    skill: 'MoSCoW, replanification, communication de crise',
    artefact: 'Backlog + budget',
    module: 'gestion-crise',
    description: 'La crise la plus courante en agence n\'est pas le bug, c\'est l\'argent qui disparaît. L\'atelier oblige à choisir ce qu\'on abandonne, à le chiffrer et à l\'écrire au client et à l\'équipe.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 4 · 60 minutes · trois livrables : un backlog arbitré, un plan, deux messages.</p>
    <p><strong>Contexte :</strong> Trajet Campus est une application de covoiturage réservée aux étudiants des campus de Toulon et La Garde, portée par l'association Campus Mobilité et financée par la Région. Le projet a démarré il y a 8 semaines sur 16. Lancement annoncé à la rentrée de janvier, en semaine d'intégration : la date a été communiquée à 4 000 étudiants.</p>

    <blockquote>
      <p><strong>Mail reçu ce matin, de Yasmine, présidente de l'association</strong></p>
      <p>« La Région vient de nous annoncer que la subvention passe de 40 000 à 28 000 €. Pas de recours possible avant l'an prochain. On ne peut pas décaler le lancement, la com est partie. Dites-moi ce qu'on fait, j'ai un bureau de l'asso jeudi soir. »</p>
    </blockquote>

    <p><strong>État du projet :</strong> 19 000 € HT consommés (cadrage, maquettes validées, architecture, inscription en cours). Taux journalier moyen de l'équipe : 400 € HT. Il reste donc <strong>9 000 €, soit 22,5 jours</strong>, au lieu des 21 000 € (52,5 jours) prévus.</p>

    <p><strong>Reste à faire (estimations de l'équipe, en jours) :</strong></p>
    <table>
      <thead><tr><th>Fonctionnalité</th><th>Jours</th><th>Note de l'équipe</th></tr></thead>
      <tbody>
        <tr><td>Inscription avec e-mail universitaire vérifié</td><td>4</td><td>En cours, non négociable pour la sécurité</td></tr>
        <tr><td>Publier un trajet</td><td>5</td><td></td></tr>
        <tr><td>Chercher et réserver un trajet</td><td>6</td><td></td></tr>
        <tr><td>Paiement dans l'app (Stripe Connect)</td><td>8</td><td>Le conducteur reçoit sa part automatiquement</td></tr>
        <tr><td>Messagerie intégrée</td><td>6</td><td></td></tr>
        <tr><td>Notation des conducteurs</td><td>3</td><td></td></tr>
        <tr><td>Carte temps réel des trajets</td><td>7</td><td>Demande forte de Yasmine</td></tr>
        <tr><td>Notifications push</td><td>3</td><td></td></tr>
        <tr><td>Trajets récurrents (chaque lundi 8 h)</td><td>3</td><td></td></tr>
        <tr><td>Dashboard admin pour l'association</td><td>4</td><td>Modération, statistiques pour la Région</td></tr>
        <tr><td>Recette et corrections</td><td>5</td><td></td></tr>
        <tr><td>Mise en production et publication sur les stores</td><td>3</td><td>Apple + Google</td></tr>
      </tbody>
      <tfoot><tr><td><strong>Total</strong></td><td><strong>57</strong></td><td>Déjà au-dessus des 52,5 jours prévus</td></tr></tfoot>
    </table>

    <h4>Étape 1 — Lire et encaisser (10 min)</h4>
    <p>Avant d'arbitrer, répondez à trois questions : que s'est-il réellement passé (au-delà de la subvention) ? Qu'est-ce qui est vraiment fixe : la date, le budget, le périmètre ? Quelles sont les trois options possibles, même celles que vous n'aimez pas ?</p>

    <h4>Étape 2 — MoSCoW sur le backlog (15 min)</h4>
    <ol>
      <li>Classez chaque ligne : Must, Should, Could, Won't (cette phase). Indice : le Must seul dépasse 22,5 jours. Il faudra donc aussi <em>réduire</em> des Must, pas seulement supprimer des Could.</li>
      <li>Pour chaque ligne coupée, proposez le « moyen pauvre » qui rend le même service à 0 ou 1 jour (exemple : un bouton WhatsApp à la place d'une messagerie).</li>
      <li>Vérifiez que la somme des jours gardés tient dans 22,5 jours, recette et mise en ligne comprises.</li>
    </ol>

    <h4>Étape 3 — Le nouveau plan (15 min)</h4>
    <p>Sur 8 semaines : ce qui est livré en janvier, ce qui passe en phase 2 « si financement », et ce qui disparaît. Ajoutez la marge : combien de jours gardez-vous en réserve, et sur quoi ?</p>

    <h4>Étape 4 — Deux messages (15 min)</h4>
    <ol>
      <li><strong>À Yasmine</strong>, 12 lignes maximum, pour son bureau de jeudi : la situation, les trois options, celle que vous recommandez, ce que le lancement contiendra, ce qu'il ne contiendra pas, ce que vous attendez d'elle.</li>
      <li><strong>À l'équipe</strong>, sur Slack, 6 lignes : ce qui change, ce qui ne change pas, ce que vous attendez d'eux demain matin.</li>
    </ol>

    <h4>Étape 5 — Pitch (5 min)</h4>
    <p>Un groupe présente son arbitrage en 2 minutes. La classe joue le bureau de l'association et pose une question piège.</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : Trajet Campus, 12 000 € en moins</h2>

    <h3 class="correction-subtitle">Étape 1 — ce qui s'est passé</h3>
    <ul class="correction-list">
      <li>Deux problèmes se superposent : la subvention baisse de 30 %, et le reste à faire (57 jours) dépassait déjà le budget initial (52,5 jours). La crise révèle un dérapage que personne n'avait dit. La chef de projet doit l'assumer dans le message, sinon Yasmine le découvrira.</li>
      <li>Fixe : la date (communiquée à 4 000 étudiants) et l'argent (pas de recours). Variable : le périmètre. C'est le triangle qualité-coût-délai avec deux côtés bloqués.</li>
      <li>Trois options : réduire fortement le périmètre (recommandée) ; lancer une version « bêta fermée » à 200 étudiants en janvier et la version complète en mars (option de repli) ; chercher 3 000 à 5 000 € ailleurs (BDE, université, sponsor local) pour sauver une fonctionnalité, sans y compter avant que l'argent soit là.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — un MoSCoW qui tient dans 22,5 jours</h3>
    <ul class="correction-list">
      <li><strong>Must gardés :</strong> inscription vérifiée (4), publier un trajet (5), chercher et réserver (6) = 15 jours. Sans ces trois-là, il n'y a pas de covoiturage.</li>
      <li><strong>Must réduits :</strong> dashboard admin 4 → 1,5 jour (export CSV + suppression d'un utilisateur, pas de graphiques : les statistiques pour la Région se feront dans un tableur) ; recette 5 → 3,5 jours (périmètre plus petit, recette avec 20 étudiants volontaires) ; mise en production 3 → 1,5 jour en publiant une <strong>application web installable</strong> plutôt que sur les stores (la validation Apple seule peut prendre deux semaines et faire rater la date).</li>
      <li><strong>Total gardé :</strong> 15 + 1,5 + 3,5 + 1,5 = 21,5 jours. Il reste 1 jour de marge : c'est peu, mais c'est écrit.</li>
      <li><strong>Should → phase 2 :</strong> paiement dans l'app (8) remplacé par « le conducteur fixe une participation, réglée en Lydia ou en espèces, l'app affiche le montant » (0,5 jour de texte et de CGU) ; notifications push (3) remplacées par un e-mail à la réservation, déjà présent ; notation (3) remplacée par un bouton « signaler un problème » qui envoie un mail à l'asso (0,5 jour). Ces 1 jour de « moyens pauvres » se prennent sur la marge ou sur la recette : à dire explicitement.</li>
      <li><strong>Could → Won't :</strong> messagerie (WhatsApp via le numéro que l'utilisateur accepte de partager), carte temps réel (la demande forte de Yasmine, à traiter en face : ce qu'elle veut vraiment, c'est voir que l'app vit ; un compteur de trajets publiés le fait pour 0,5 jour), trajets récurrents.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 3 — le plan sur 8 semaines</h3>
    <ul class="correction-list">
      <li>Semaines 9-13 : les trois fonctionnalités cœur, admin minimal. Semaine 14 : recette avec 20 étudiants, corrections. Semaine 15 : mise en production web, test avec le bureau de l'asso. Semaine 16 : lancement, équipe disponible la semaine d'intégration.</li>
      <li>Phase 2, conditionnée à un financement : paiement intégré, stores, notifications, carte. Chiffrée dès maintenant (environ 21 jours, 8 400 €) pour que Yasmine ait un dossier à présenter.</li>
      <li>La marge d'un jour est affectée aux imprévus de recette, pas à une fonctionnalité de plus.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 4 — les messages</h3>
    <ul class="correction-list">
      <li><strong>À Yasmine :</strong> « Yasmine, merci d'avoir prévenu tout de suite. Avec 28 000 €, il nous reste 9 000 € soit 22 jours de travail ; le reste à faire en représentait 57, et je dois vous dire que nous étions déjà 5 jours au-dessus du plan initial avant cette annonce. Trois options : lancer en janvier une version réduite mais solide ; lancer une bêta à 200 étudiants en janvier et la version complète en mars ; trouver 3 à 5 k€ ailleurs. Je recommande la première : en janvier, un étudiant vérifié peut publier un trajet, en chercher un et réserver ; la participation se règle entre étudiants ; vous avez un export des trajets pour la Région. Nous reportons le paiement intégré, la messagerie, la carte et les notifications dans une phase 2 chiffrée à 8 400 €, que je vous prépare pour votre dossier. Il me faut jeudi : votre accord sur ce périmètre, et l'autorisation de publier en application web plutôt que sur les stores pour tenir la date. Je peux être présente au bureau si utile. »</li>
      <li><strong>À l'équipe :</strong> « La subvention baisse de 30 %, on garde la date de janvier. Le périmètre est ramené aux trois fonctionnalités cœur + admin minimal, en application web, sans paiement intégré ni carte. Ça ne change ni l'équipe ni la qualité attendue. Demain 9 h : on reprend les estimations des trois fonctionnalités ligne par ligne et on fige. Les idées de « moyen pauvre » sont bienvenues. »</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Arbitrage (8) :</strong> la somme tient dans 22,5 jours (3), des Must sont réduits et pas seulement des Could supprimés (3), chaque coupe a un moyen pauvre (2).</li>
      <li><strong>Plan (4) :</strong> daté, avec une marge affectée, une phase 2 chiffrée.</li>
      <li><strong>Message client (5) :</strong> dit le dérapage antérieur (2), propose trois options et en recommande une (2), demande une décision précise (1).</li>
      <li><strong>Message équipe (3) :</strong> ce qui change, ce qui ne change pas, une action datée.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Garder le paiement intégré « parce que c'est le cœur ». Le cœur d'un covoiturage, c'est de trouver une voiture ; le paiement est le cœur de BlaBlaCar, pas d'une asso étudiante.</li>
      <li>Ne pas parler du dérapage de 5 jours antérieur : il ressortira au pire moment.</li>
      <li>Proposer de décaler la date sans dire ce que ça coûte à Yasmine (4 000 étudiants prévenus).</li>
      <li>Un plan sans marge, ou une marge « réservée » qu'on dépense aussitôt en fonctionnalité.</li>
    </ul>
  </div>`,
  },

  {
    id: 'crise-v1',
    title: 'Le mail de 7 h 12 de Boba Bros',
    pitch: 'Une V1 en retard, des points de fidélité doublés, des notifications à 3 h du matin, et l’ouverture d’une boutique samedi. Préparer et jouer la réunion de crise.',
    sector: 'Bubble tea · BOBA BROS',
    duration: '50 min',
    format: 'Groupes de 4, puis jeu de rôle',
    skill: 'Triage de bugs, réunion de crise, réponse écrite sous pression',
    artefact: 'E-mail + liste de bugs',
    module: 'gestion-crise',
    description: 'Un client stressé écrit tout en même temps : les faits, la peur, les exigences. L\'atelier apprend à séparer les trois, à trier les bugs par gravité réelle, à répondre dans l\'heure sans promettre l\'impossible, et à tenir la réunion qui suit.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 4 · 50 minutes · deux livrables écrits (un triage, un mail) puis un jeu de rôle de 10 minutes.</p>
    <p><strong>Contexte :</strong> Boba Bros, 6 boutiques de bubble tea entre Toulon et Nice, 22 salariés, 85 k abonnés Instagram. Votre agence a livré il y a 12 jours la V1 de leur application de commande à emporter avec programme de fidélité, avec 3 semaines de retard sur la date promise. La 7e boutique ouvre à Nice samedi, dans 4 jours, et la campagne « commandez sur l'app, 1 boisson offerte » est déjà partie. Ce matin, ce mail.</p>

    <blockquote>
      <p><strong>De :</strong> Mehdi Aouad, fondateur Boba Bros · <strong>À :</strong> vous · <strong>Cc :</strong> les 6 responsables de boutique, votre directeur d'agence<br><strong>Objet :</strong> URGENT — ça ne peut plus continuer<br><strong>Reçu :</strong> mardi, 7 h 12</p>
      <p>Bonjour,</p>
      <p>Je ne sais plus par où commencer. Hier soir la responsable de Marseille m'appelle : des commandes passées pour Marseille arrivent sur l'écran d'Aix, les clients attendent 20 minutes devant le comptoir pour rien. Ce matin j'ouvre l'app : des clients ont leurs points de fidélité doublés, certains ont commandé GRATUITEMENT hier, on parle de vraies boissons données. Une cliente m'a montré l'app EN CHINOIS sur son téléphone, je ne sais même pas comment c'est possible. Apple Pay marche une fois sur deux, les gens abandonnent. Et cette nuit, plusieurs clients ont reçu une notification « votre commande est prête » à 3 h 14 du matin. À 3 h 14.</p>
      <p>On avait déjà 3 semaines de retard. On a fait la com pour Nice samedi, 1 boisson offerte via l'app, il y aura 300 personnes. Si l'app fait ça samedi, c'est mort.</p>
      <p>Je veux tout corrigé avant samedi. Je veux un geste commercial sérieux. Et je veux parler directement au développeur, pas à un intermédiaire, parce que là je commence à me demander si on a choisi la bonne agence.</p>
      <p>Mehdi</p>
    </blockquote>

    <p><strong>Ce que vous savez à 7 h 30, après un coup de fil au développeur principal :</strong></p>
    <ul>
      <li>La boutique de Nice a été ajoutée en base vendredi par le client lui-même depuis le back-office. Le développeur soupçonne que l'ordre des boutiques a changé et que l'app affecte les commandes par position, pas par identifiant.</li>
      <li>Les points doublés viennent probablement du webhook de paiement reçu deux fois par Stripe les soirs de forte affluence ; rien n'empêche de le traiter deux fois.</li>
      <li>La notification de 3 h 14 : une file d'attente de notifications a rejoué des messages en échec après un redémarrage du serveur cette nuit.</li>
      <li>Le chinois : l'app prend la langue du téléphone et n'a pas de langue par défaut ; la cliente a un téléphone configuré en chinois.</li>
      <li>Apple Pay : le domaine de la boutique Nice n'est pas vérifié chez Stripe ; le développeur n'est pas sûr que ce soit la seule cause.</li>
      <li>Le retard de 3 semaines : deux semaines viennent de l'attente des visuels et des menus du client, une semaine de l'agence (le développeur back a été malade et personne ne l'a remplacé).</li>
    </ul>

    <h4>Étape 1 — Lire le mail en trois colonnes (10 min)</h4>
    <ol>
      <li>Séparez tout ce que dit Mehdi en trois colonnes : les faits vérifiables, les émotions, les exigences. Chaque phrase va dans une colonne, parfois deux.</li>
      <li>Repérez le vrai danger : ce n'est pas un bug, c'est une date. Dites en une phrase ce qui doit être vrai samedi à 11 h.</li>
    </ol>

    <h4>Étape 2 — Le triage (15 min)</h4>
    <p>Un tableau, une ligne par bug : gravité (P1 bloque l'argent ou l'exploitation, P2 dégrade, P3 gêne), impact concret, cause probable, correction envisagée, qui, quand, comment on vérifie. Puis décidez : que gèle-t-on jusqu'à samedi ? Que fait-on des 300 boissons offertes si l'app n'est pas sûre ?</p>

    <h4>Étape 3 — Le mail de 8 h et la réunion (15 min)</h4>
    <ol>
      <li><strong>Le mail</strong>, envoyé avant 8 h 30, 12 lignes maximum : il ne s'excuse pas dix fois, ne promet pas « tout avant samedi », dit ce qui est déjà en cours, propose une réunion de crise à une heure précise aujourd'hui, et répond aux trois exigences (samedi, geste commercial, parler au développeur) sans en accepter aucune telle quelle. Décidez à qui vous répondez : à tous les destinataires en copie, ou non ?</li>
      <li><strong>La réunion</strong> : participants, durée, ordre du jour minuté, ce que vous dites dans les deux premières minutes, ce que vous refusez de promettre, ce que vous obtenez de Mehdi.</li>
    </ol>

    <h4>Étape 4 — Jeu de rôle (10 min)</h4>
    <p>Un groupe joue l'agence (chef·fe de projet et développeur principal), un autre joue Mehdi et la responsable de Marseille. Cinq minutes de réunion, à partir de l'ordre du jour du groupe agence. Le reste de la classe note : à quel moment l'agence a-t-elle promis quelque chose qu'elle ne tiendra pas ? À quel moment Mehdi s'est-il calmé, et pourquoi ?</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : la réunion de crise Boba Bros</h2>

    <h3 class="correction-subtitle">Étape 1 — les trois colonnes</h3>
    <ul class="correction-list">
      <li><strong>Faits :</strong> commandes Marseille affichées à Aix ; points doublés et boissons gratuites ; app en chinois chez une cliente ; Apple Pay aléatoire ; notifications à 3 h 14 ; 3 semaines de retard ; ouverture Nice samedi avec 300 personnes attendues et une boisson offerte via l'app.</li>
      <li><strong>Émotions :</strong> « je ne sais plus par où commencer », « c'est mort », « la bonne agence ». Mehdi a été appelé la veille au soir par une responsable, il a mal dormi, il écrit à 7 h 12 en mettant ses six responsables en copie : il a besoin de montrer à son équipe qu'il agit.</li>
      <li><strong>Exigences :</strong> tout corrigé avant samedi ; un geste commercial ; parler au développeur directement.</li>
      <li><strong>Le vrai danger :</strong> samedi 11 h, 300 personnes doivent pouvoir commander une boisson offerte sur l'app de Nice sans que la commande parte ailleurs, sans que le paiement échoue, sans point fantôme. Tout le reste peut attendre lundi.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — le triage</h3>
    <ul class="correction-list">
      <li><strong>P1 · Commandes routées vers la mauvaise boutique :</strong> exploitation cassée dans deux boutiques, et Nice va aggraver le problème. Cause probable : affectation par position au lieu de l'identifiant. Correctif ciblé aujourd'hui, test avec une commande réelle dans chaque boutique ce soir, avec les responsables. Vérification : 7 commandes de 1 €, 7 écrans.</li>
      <li><strong>P1 · Points doublés et commandes gratuites :</strong> c'est de l'argent qui sort. Cause probable : webhook Stripe traité deux fois, sans clé d'idempotence. Correctif aujourd'hui ; en attendant, désactiver le paiement en points jusqu'à jeudi (les clients gardent leurs points, ils ne peuvent juste pas les dépenser 48 h) et lister les comptes touchés pour un recalcul.</li>
      <li><strong>P1 · Apple Pay aléatoire :</strong> chaque échec est une vente perdue, et samedi ce sera le premier geste de 300 personnes. Vérification du domaine Nice chez Stripe ce matin (10 minutes), puis 20 paiements de test sur 5 téléphones différents jeudi. Si la cause n'est pas seulement le domaine, le dire jeudi soir et prévoir la carte bancaire classique comme parcours de repli mis en avant.</li>
      <li><strong>P2 · Notifications nocturnes :</strong> image dégradée, pas d'argent perdu. Correctif : ne pas rejouer les notifications de plus de 30 minutes, et fenêtre de silence 22 h-7 h. Vendredi.</li>
      <li><strong>P3 · App en chinois :</strong> une cliente, aucune perte. Langue par défaut français. Lundi prochain, avec la V1.1.</li>
      <li><strong>Gel :</strong> aucune nouvelle fonctionnalité ni modification du back-office par le client jusqu'à lundi ; c'est l'ajout de Nice par le client qui a déclenché le routage. Ce point se dit sans accuser : « le back-office vous a laissé faire quelque chose que l'app ne savait pas gérer, c'est à nous de le verrouiller ».</li>
      <li><strong>Les 300 boissons :</strong> plan B écrit dès aujourd'hui : un code à montrer au comptoir si l'app tombe samedi, et une personne de l'agence joignable de 10 h à 16 h.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 3 — le mail de 8 h</h3>
    <ul class="correction-list">
      <li><strong>À qui :</strong> à Mehdi, avec votre directeur en copie, sans les six responsables. On ne débat pas d'un incident devant l'équipe du client ; on lui propose en revanche un message qu'il pourra leur transmettre. Répondre à tous avec le détail technique donnerait à six personnes une raison de s'inquiéter davantage.</li>
      <li>« Mehdi, j'ai lu votre mail et j'ai eu le développeur principal à 7 h 30. Voilà où nous en sommes. Deux problèmes sont graves et sont pris en main dès maintenant : les commandes qui arrivent dans la mauvaise boutique (cause identifiée, correctif aujourd'hui, test réel dans chaque boutique ce soir avec vos responsables) et les points doublés (le paiement en points est suspendu 48 h pour arrêter l'hémorragie, les comptes touchés seront recalculés). Apple Pay est vérifié ce matin. Les notifications de nuit et l'affichage en chinois sont moins urgents et seront corrigés cette semaine. Je vous propose une réunion de crise aujourd'hui à 14 h, 45 minutes, avec le développeur principal à mes côtés : vous aurez ses réponses en direct, et un seul interlocuteur ensuite pour que rien ne se perde. Nous y fixerons ensemble ce qui sera garanti samedi à Nice et le plan B au comptoir. Pour le geste commercial, mon directeur en discutera avec vous une fois la situation stabilisée ; ce n'est pas le sujet de ce matin. Si vous le souhaitez, je vous envoie d'ici 9 h un court message que vous pourrez transmettre à vos responsables. [Prénom] »</li>
      <li>Ce mail répond aux trois exigences sans en accepter aucune telle quelle : pas « tout avant samedi » mais les P1 avec des tests ; le développeur est présent mais pas en contact direct permanent ; le geste commercial est reconnu et déplacé vers la bonne personne et le bon moment.</li>
    </ul>

    <h3 class="correction-subtitle">La réunion de 14 h (45 min)</h3>
    <ul class="correction-list">
      <li><strong>Participants :</strong> Mehdi, la responsable de Marseille (elle a vu les faits, sa présence rassure Mehdi), vous, le développeur principal, votre directeur les 10 dernières minutes. Pas les six responsables.</li>
      <li><strong>0-2 min :</strong> vous parlez en premier, deux phrases : « Ce que vous avez vécu hier soir est inacceptable pour vos équipes et vos clients, et une partie du retard est de notre fait. Voici ce qui est réglé depuis ce matin, et ce qu'on décide ensemble maintenant. » Pas de « mais », pas d'excuse liée au client à ce stade.</li>
      <li><strong>2-17 min :</strong> les cinq bugs, un par un : impact, cause en une phrase compréhensible, correctif, date, preuve. Le développeur parle sur la cause, vous sur la date. La responsable de Marseille valide le test du soir.</li>
      <li><strong>17-27 min :</strong> samedi à Nice : ce qui sera garanti (routage, paiement), ce qui sera dégradé volontairement (points suspendus jusqu'à jeudi), le plan B au comptoir, la personne d'astreinte. Vous obtenez de Mehdi : plus de modification du back-office jusqu'à lundi, un test réel jeudi dans la boutique de Nice avec lui.</li>
      <li><strong>27-37 min :</strong> le retard : les faits datés, deux semaines d'attente des contenus, une semaine de l'agence assumée nommément, et ce qui change pour que ça n'arrive plus (un remplaçant identifié, un point de 10 minutes chaque matin jusqu'à lundi).</li>
      <li><strong>37-45 min :</strong> le directeur entre : le geste commercial sera proposé lundi, une fois la V1 stable, sous la forme d'un avoir sur la maintenance ou de la V1.1 offerte ; on ne négocie pas un montant aujourd'hui. Relecture des décisions à voix haute, compte rendu envoyé avant 16 h.</li>
      <li><strong>Ce qu'on ne promet pas :</strong> « tout corrigé avant samedi », « ça n'arrivera plus jamais », un montant.</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Lecture (4) :</strong> les trois colonnes sont justes (2), le danger est formulé comme une date et un état, pas comme un bug (2).</li>
      <li><strong>Triage (6) :</strong> les trois P1 sont les bons (3), chaque ligne a une vérification (1), le gel et le plan B samedi sont là (2).</li>
      <li><strong>Mail (6) :</strong> répond aux trois exigences sans les accepter telles quelles (3), pas de promesse intenable (1), choix des destinataires argumenté (1), 12 lignes (1).</li>
      <li><strong>Réunion (4) :</strong> ordre du jour minuté, le développeur présent mais cadré, le retard assumé avec sa part client dite sans accuser, le geste commercial déplacé.</li>
    </ul>

    <h3 class="correction-subtitle">Ce qu'on voit dans le jeu de rôle</h3>
    <ul class="correction-list">
      <li>L'agence commence par les causes techniques : Mehdi n'écoute pas, il attend qu'on reconnaisse ce que ses équipes ont vécu.</li>
      <li>L'agence promet « tout avant samedi » à la troisième relance : la classe le note, c'est la promesse qui sera reprochée lundi.</li>
      <li>Mehdi se calme au moment où quelqu'un lui donne une date, une preuve et un plan B pour samedi, pas au moment où on s'excuse.</li>
      <li>Répondre à tous les destinataires : les six responsables lisent le détail des bugs et deux d'entre elles appellent Mehdi dans l'heure. Le mail au client seul, avec un message transmissible, évite cet effet.</li>
    </ul>
  </div>`,
  },

  {
    id: 'scope-encre',
    title: 'Le fil WhatsApp de Léo, tatoueur',
    pitch: 'Dix messages en douze jours, tous « tout petits », aucun dans le devis. Trier, chiffrer, répondre sans perdre le client ni la marge.',
    sector: 'Tatouage · ENCRE LIBRE',
    duration: '45 min',
    format: 'Groupes de 3-4, puis appel joué',
    skill: 'Scope creep, avenant, dire non en gardant le client',
    artefact: 'Devis signé + fil WhatsApp',
    module: 'planification',
    description: 'Le scope creep n\'arrive jamais d\'un coup : il arrive par petits messages sympathiques. L\'atelier entraîne à distinguer ce qui est dans le devis, ce qui est une interprétation et ce qui est une évolution, puis à répondre en une seule fois, chiffres à l\'appui.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 45 minutes · un tableau de tri, une réponse écrite, un appel joué.</p>
    <p><strong>Contexte :</strong> Encre Libre est un studio de tatouage à Toulon tenu par Léo, 29 ans, 38 k abonnés Instagram, agenda plein deux mois à l'avance. Vous êtes en semaine 4 sur 7 du projet : les maquettes sont validées, le développement a commencé lundi. Léo communique par WhatsApp, toujours gentiment, toujours entre deux clients.</p>

    <blockquote>
      <p><strong>Extrait du devis signé n° 2026-097 — 9 800 € HT — 7 semaines</strong></p>
      <p><strong>Inclus :</strong> 1. site de 5 pages (accueil, artistes, flashs, projets personnalisés, infos pratiques) · 2. galerie de flashs gérée dans le back-office, statut disponible / réservé · 3. prise de rendez-vous en ligne sur des créneaux définis par le studio, confirmation par e-mail · 4. formulaire de projet personnalisé avec envoi de photos · 5. mentions légales et RGPD · hébergement 12 mois.</p>
      <p><strong>Non inclus :</strong> paiement en ligne, espace client, version multilingue, production des contenus (photos, textes).</p>
    </blockquote>

    <blockquote>
      <p><strong>WhatsApp · Léo Encre Libre</strong></p>
      <p><strong>Lun. 9 h 41 :</strong> Hey ! Trop bien les maquettes 🔥 Petite idée : un compte à rebours pour les drops de flashs, comme les marques de fringues ? On sort 20 flashs le 1er de chaque mois, ça ferait un événement.</p>
      <p><strong>Lun. 22 h 15 :</strong> Pour les rdv il faut un acompte de 50 €, sinon les gens viennent pas. Tu branches Stripe ? Vous l'avez fait pour d'autres non ?</p>
      <p><strong>Mar. 13 h 02 :</strong> Les photos des flashs je les poste déjà sur Insta, ça peut pas se synchroniser tout seul ? Je vais pas tout mettre deux fois 😩</p>
      <p><strong>Mer. 19 h 30 :</strong> Ah et Yuna arrive au studio en janvier, il faudra son agenda aussi, elle bosse pas les mêmes jours que moi.</p>
      <p><strong>Jeu. 11 h 10 :</strong> Le formulaire projet, tu peux ajouter une case « budget » et une case « zone du corps » ? Ça m'éviterait 3 messages à chaque fois.</p>
      <p><strong>Ven. 8 h 55 :</strong> Une version anglaise c'est possible ? L'été on a plein de touristes, ils écrivent en anglais sur Insta.</p>
      <p><strong>Lun. 10 h 20 :</strong> Je réfléchis : plutôt qu'une page « artistes », on fait une page par artiste avec sa bio et ses flashs ? Plus logique avec Yuna.</p>
      <p><strong>Mar. 17 h 45 :</strong> Un truc qui me rend fou : quand un rdv est annulé je perds le créneau. On peut prévenir automatiquement les gens en liste d'attente ?</p>
      <p><strong>Mer. 12 h 08 :</strong> CARTE CADEAU pour Noël 🎁🎁 les gens m'en demandent tout le temps</p>
      <p><strong>Ven. 9 h 12 :</strong> Au fait on est toujours bons pour la mise en ligne le 20 ? J'ai posté la date en story 😅</p>
    </blockquote>

    <h4>Étape 1 — Le tri (15 min)</h4>
    <p>Un tableau, une ligne par message. Colonnes : ce qu'il demande vraiment ; catégorie (<strong>inclus</strong> dans le devis, <strong>interprétation</strong> d'une ligne du devis, <strong>évolution</strong> hors devis) ; estimation en jours ; impact sur la date du 20 ; ce que vous proposez (oui, oui contre quelque chose, plus tard, non). Faites le total des jours d'évolutions et comparez au projet signé (environ 24 jours).</p>

    <h4>Étape 2 — La règle et la réponse (20 min)</h4>
    <ol>
      <li>Écrivez en deux phrases la règle que vous appliquez pour trancher entre interprétation et évolution. Elle doit pouvoir être dite à Léo sans qu'il se sente piégé.</li>
      <li>Décidez du canal : répondez-vous message par message sur WhatsApp ? Rédigez ce que vous envoyez réellement : un message WhatsApp court (5 lignes maximum) et, si vous le jugez utile, un mail structuré avec une proposition d'avenant (ce qui est fait gratuitement, ce qui est chiffré en phase 2 avec un prix, ce qui est refusé et pourquoi).</li>
      <li>Répondez à la question de la date : tenue, ou non, et à quelle condition.</li>
    </ol>

    <h4>Étape 3 — L'appel (10 min)</h4>
    <p>Léo appelle après avoir lu votre mail : « Mais l'acompte c'est la base, sans ça le site sert à rien ! » Un groupe joue le chef de projet, un autre joue Léo. Trois minutes. La classe note la phrase qui fait accepter Léo, ou celle qui le fait raccrocher.</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : le fil WhatsApp de Léo</h2>

    <h3 class="correction-subtitle">Étape 1 — le tri</h3>
    <ul class="correction-list">
      <li><strong>Compte à rebours des drops :</strong> évolution. 1,5 jour. Bonne idée commerciale, à vendre en phase 2. Moyen pauvre gratuit : une bannière « prochains flashs le 1er » éditable dans le back-office (0,25 jour, offert).</li>
      <li><strong>Acompte Stripe :</strong> évolution, explicitement exclue (« paiement en ligne »). 3,5 jours plus les CGV d'annulation et le remboursement. La vraie demande est « les gens ne viennent pas » : proposer d'abord un rappel automatique par SMS ou e-mail 24 h avant (0,5 jour) et un bouton d'annulation, puis l'acompte en phase 2 si les absences persistent.</li>
      <li><strong>Synchronisation Instagram :</strong> évolution. 2 jours, et une dépendance fragile à l'API Meta qui casse régulièrement. Alternative : un flux Instagram embarqué sur la page d'accueil (0,5 jour) ; la galerie de flashs reste gérée à la main, car elle porte le statut réservé / disponible qu'Instagram ne connaît pas.</li>
      <li><strong>L'agenda de Yuna :</strong> interprétation à trancher. Le devis dit « créneaux définis par le studio », pas « par artiste ». Un second agenda avec ses propres jours est une évolution (2 jours), mais c'est la demande la plus légitime : Yuna arrive en janvier, le site serait obsolète dès son arrivée. Proposition : chiffré, mais à prix coûtant, ou intégré si Léo renonce à autre chose.</li>
      <li><strong>Cases « budget » et « zone du corps » :</strong> inclus. 0,2 jour. Oui tout de suite, et le dire clairement : un oui rapide et visible rend les non suivants audibles.</li>
      <li><strong>Version anglaise :</strong> évolution explicitement exclue. 3 jours plus la traduction. Non pour cette phase ; en attendant, une ligne en anglais sur la page projets (« Write to us in English, we answer ») coûte 5 minutes.</li>
      <li><strong>Une page par artiste :</strong> interprétation. Les maquettes sont validées et le développement a commencé lundi : c'est un changement de structure. 1 jour si décidé cette semaine, 2 jours dans quinze jours. Oui, si Léo valide sous 48 h et accepte que la page « artistes » validée disparaisse.</li>
      <li><strong>Liste d'attente sur annulation :</strong> évolution. 2 jours. Vraie valeur pour Léo (des créneaux perdus, c'est du chiffre), à mettre en tête de la phase 2.</li>
      <li><strong>Carte cadeau :</strong> évolution, paiement exclu. 3 jours. Phase 2, avec l'acompte : les deux partagent la même brique de paiement, ce qui rend le lot plus cohérent à vendre.</li>
      <li><strong>Total des évolutions :</strong> 1,5 + 3,5 + 2 + 2 + 3 + 2 + 3 = 17 jours, pour un projet signé de 24 jours. Accepter en souriant reviendrait à faire 70 % du projet gratuitement et à rater le 20.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — la règle</h3>
    <ul class="correction-list">
      <li>« Ce que le devis décrit, on le fait, et on l'interprète dans le sens qui vous sert. Ce qu'il exclut ou ne mentionne pas, on le chiffre à part, pour que vous choisissiez en connaissance de cause. » Cette règle protège les deux : Léo sait que rien ne sera fait à moitié en douce, l'agence sait que rien ne sera fait gratuitement en douce.</li>
      <li><strong>Le canal :</strong> ne pas répondre message par message sur WhatsApp. Chaque « ok je regarde » sur WhatsApp vaut un oui pour le client. Un seul message WhatsApp, chaleureux, qui renvoie vers un mail : le mail est le document sur lequel on pourra s'appuyer.</li>
    </ul>

    <h3 class="correction-subtitle">Ce qu'on envoie</h3>
    <ul class="correction-list">
      <li><strong>WhatsApp :</strong> « Salut Léo ! Merci pour toutes ces idées, il y en a de très bonnes (la liste d'attente surtout). J'ai tout repris dans un mail pour qu'on ne perde rien : ce qu'on ajoute tout de suite, ce que je te propose de chiffrer pour une phase 2, et un point sur le 20. Tu me dis si on s'appelle 10 minutes demain ? »</li>
      <li><strong>Mail, partie 1, fait dans le cadre du devis :</strong> les deux cases du formulaire ; la bannière « prochains flashs » ; une page par artiste si validation sous 48 h ; le rappel automatique 24 h avant le rendez-vous, offert parce qu'il répond à son vrai problème et coûte peu.</li>
      <li><strong>Mail, partie 2, phase 2 chiffrée :</strong> agenda de Yuna 2 jours (700 € HT, prix coûtant, livrable pour janvier) ; liste d'attente 2 jours (900 € HT) ; lot paiement : acompte + carte cadeau 6,5 jours (2 900 € HT), à décider après un mois d'exploitation avec les rappels ; compte à rebours des drops 1,5 jour (650 € HT). Total phase 2 : 5 150 € HT, à démarrer après la mise en ligne.</li>
      <li><strong>Mail, partie 3, non pour cette phase :</strong> synchronisation Instagram (fragile, remplacée par le flux embarqué) ; version anglaise (à revoir avant l'été avec les textes).</li>
      <li><strong>Mail, partie 4, la date :</strong> « Le 20 tient si nous figeons le périmètre ci-dessus vendredi. Chaque ajout après vendredi décale la mise en ligne d'autant, et je préfère te le dire maintenant que la veille. » Le fait que la date soit en story n'est pas un argument pour ajouter du travail : c'est un argument pour figer.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 3 — l'appel</h3>
    <ul class="correction-list">
      <li>Léo : « Sans acompte le site sert à rien. » Réponse qui marche : « Je comprends, c'est ton chiffre d'affaires. On a exclu le paiement au devis parce que c'est un chantier à part : CGV, remboursements, litiges. Ce que je te propose, c'est de mesurer un mois les absences avec les rappels automatiques, offerts. Si tu perds encore des créneaux, on lance l'acompte en phase 2, chiffré, et on aura les chiffres pour le justifier. » On reconnaît le problème, on rappelle le contrat sans le brandir, on donne une étape mesurable.</li>
      <li>Phrase qui fait raccrocher : « C'est pas dans le devis. » Vraie, inutile. Le client n'entend pas « non », il entend « débrouille-toi ».</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Tri (8) :</strong> catégories justes sur les dix messages (5), estimations plausibles et total comparé au projet (2), le vrai besoin derrière l'acompte repéré (1).</li>
      <li><strong>Règle et canal (4) :</strong> une règle dicible au client (2), un seul message WhatsApp qui renvoie vers un écrit (2).</li>
      <li><strong>Réponse (6) :</strong> des oui rapides et visibles (1), une phase 2 chiffrée par lots (3), la date conditionnée au gel (2).</li>
      <li><strong>Appel (2) :</strong> le problème du client reconnu avant le rappel du contrat, une étape mesurable proposée.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Tout classer en évolution, y compris les cases du formulaire : le client conclut que l'agence facture le moindre clic.</li>
      <li>Tout accepter « parce que c'est petit » : 17 jours, le 20 sauté, et une marge négative.</li>
      <li>Répondre « ok » sur WhatsApp à la liste d'attente le mardi soir, puis la chiffrer le vendredi : le client a une capture d'écran.</li>
      <li>Oublier Yuna : c'est la seule demande qui rend le site faux dès janvier, elle mérite un traitement à part.</li>
    </ul>
  </div>`,
  },

  {
    id: 'dojo-du-non',
    title: 'Le dojo du non',
    pitch: 'Six situations, quatre minutes chacune, en binôme. Dire non, repréciser le périmètre, et trouver le oui malin sans jamais devenir garant de ce qu’on ne maîtrise pas.',
    sector: 'Six clients · cosmétiques, SEO, streaming, photo, RGPD, juridique',
    duration: '45 min',
    format: 'Binômes, puis débrief collectif',
    skill: 'Dire non, compromis, périmètre, obligation de moyens',
    artefact: 'Six cartes situation',
    module: 'planification',
    description: 'Un chef de projet qui ne sait pas dire non finit par travailler gratuitement et par garantir des résultats qu\'il ne contrôle pas. L\'atelier entraîne une formule en trois temps et deux tests, sur six situations à jouer à voix haute.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> binômes · 45 minutes · six situations jouées, une phrase écrite par situation, un débrief.</p>

    <h4>La formule et les deux tests (10 min, lecture collective)</h4>
    <p>Un bon non tient en trois temps, dans cet ordre : <strong>1. je reconnais</strong> le besoin réel derrière la demande ; <strong>2. je dis ce que je ne ferai pas</strong>, et pourquoi, en une phrase sans « mais » ; <strong>3. je propose un chemin</strong> : ce que je peux faire, à quelles conditions (prix, délai, périmètre), ou qui peut le faire à ma place.</p>
    <p>Avant de dire oui à quoi que ce soit, deux tests :</p>
    <ul>
      <li><strong>Le test du contrôle :</strong> est-ce que je maîtrise ce que je promets ? Un délai sur mon équipe, oui. Un classement Google, le comportement d'un fournisseur, une décision d'Apple, non. On ne se porte jamais garant de ce qu'on ne contrôle pas : on s'engage sur des moyens, pas sur le résultat.</li>
      <li><strong>Le test de la contrepartie :</strong> qu'est-ce que j'obtiens en échange ? Un oui sans contrepartie écrite (un prix, un jour de plus, une fonctionnalité retirée, une validation plus rapide) n'est pas un compromis, c'est un cadeau. Un cadeau de temps en temps est un choix ; un cadeau à chaque demande est une exploitation.</li>
    </ul>
    <p>Le oui malin passe les deux tests. Le faux oui en rate au moins un.</p>

    <h4>Les six situations (25 min, 4 min chacune, on échange les rôles à chaque carte)</h4>
    <p>L'un joue le demandeur et insiste au moins deux fois. L'autre répond avec la formule. À la fin des quatre minutes, celui qui a répondu écrit sa réponse finale en une phrase.</p>
    <ol>
      <li><strong>Glow Lab, marque de cosmétiques TikTok.</strong> La fondatrice : « Pendant le lancement du site, vous répondez aux commentaires Instagram, c'est lié au site de toute façon, et vous connaissez le produit maintenant. » Vous avez livré un site, pas de community management.</li>
      <li><strong>La clause SEO.</strong> Le directeur d'une auto-école en ligne veut ajouter au contrat : « L'agence garantit un positionnement dans les trois premiers résultats Google sur "code de la route en ligne" sous trois mois. » Il ne signe pas sans.</li>
      <li><strong>Votre propre directeur.</strong> « Le client veut la mise en ligne dans trois semaines, sinon il va voir ailleurs. Dis-lui oui, on s'arrangera. » L'équipe a estimé six semaines.</li>
      <li><strong>Zyko, streamer Twitch à 200 k abonnés.</strong> « Il faut que vous soyez joignables le week-end pendant mes lives, au cas où le site de merch plante. C'est là que je vends. »</li>
      <li><strong>La responsabilité RGPD.</strong> Le client, une salle d'escalade, envoie un document à signer : « L'agence est responsable de la conformité RGPD de l'ensemble des traitements de données de la société. » Vous avez fait le site ; ils ont aussi un logiciel de caisse, une newsletter et un CRM que vous n'avez jamais vus.</li>
      <li><strong>Sans les CGV.</strong> Veille de mise en ligne d'une boutique de vêtements de padel. L'avocat du client n'a pas livré les CGV ni la politique de retour. Le client : « On met en ligne quand même, on ajoutera ça la semaine prochaine, personne ne lit. »</li>
    </ol>

    <h4>Débrief (10 min)</h4>
    <ol>
      <li>Chaque binôme lit deux de ses phrases finales. La classe vote : oui malin, faux oui, ou non sec (le non sans chemin, qui perd le client).</li>
      <li>Quelle situation a été la plus dure à refuser ? En général, c'est la 3 : dire non à son propre directeur. Pourquoi est-ce pourtant celle où le non protège le plus le client ?</li>
    </ol>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : le dojo du non</h2>

    <h3 class="correction-subtitle">1. Glow Lab, les commentaires Instagram</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> « Ok pour la semaine du lancement. » Sans contrepartie, sans fin définie : dans un mois vous gérez encore les commentaires.</li>
      <li><strong>Non sec :</strong> « Ce n'est pas dans le devis. »</li>
      <li><strong>Oui malin :</strong> « Je comprends, les commentaires vont exploser au lancement et vous ne pouvez pas être partout. Nous ne prenons pas la modération : ce n'est pas notre métier et vous seriez mal servie. Ce que je vous propose : une fiche de dix réponses types sur le site (commande, livraison, bug) livrée jeudi, incluse, et je vous mets en relation avec deux community managers freelance qui font ça très bien. » Contrôle : oui, une fiche. Contrepartie : le périmètre reste fermé.</li>
    </ul>

    <h3 class="correction-subtitle">2. La clause SEO</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> signer en se disant que « ça devrait passer ». C'est le test du contrôle raté : Google décide, pas vous. Un jour, cette clause sert de base à une demande de remboursement.</li>
      <li><strong>Oui malin :</strong> « Vous voulez être sûr que le site vous apporte des élèves, c'est légitime. Aucune agence sérieuse ne garantit un classement Google, parce qu'aucune ne le contrôle ; celles qui signent ça ne comptent pas tenir. Ce que je peux garantir par écrit, ce sont des moyens vérifiables : site conforme aux critères techniques de Google (score mesuré), dix pages optimisées sur les requêtes listées en annexe, un rapport de positions chaque mois pendant six mois, et une clause de sortie si le suivi n'est pas fait. » Le client n'obtient pas sa garantie de résultat, il obtient une garantie de moyens contrôlable, et de quoi vous tenir responsable de ce que vous maîtrisez.</li>
    </ul>

    <h3 class="correction-subtitle">3. Votre directeur</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> « D'accord, on va essayer. » Trois semaines plus tard, l'équipe a fait des nuits, le site est bâclé, le client est furieux, et c'est vous qui portez le retard.</li>
      <li><strong>Oui malin :</strong> « Je comprends que la signature se joue sur la date. Je ne peux pas dire oui à six semaines de travail en trois : ce serait mentir au client, et c'est lui qui découvrira le mensonge. Ce que je peux proposer et défendre devant lui : une première mise en ligne dans trois semaines avec les pages qui font vendre, la suite deux semaines après. Si vous préférez tenir tout le périmètre en trois semaines, il faut un renfort et un budget en face, et je l'écris dans le devis. » Le non interne est le plus difficile et le plus important : c'est là que se décide si l'agence promet ce qu'elle tient.</li>
    </ul>

    <h3 class="correction-subtitle">4. Zyko, les week-ends</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> « Envoie-moi un message si ça plante. » Vous venez de créer une astreinte gratuite, illimitée, sur votre téléphone personnel.</li>
      <li><strong>Oui malin :</strong> « Tes lives, c'est ton chiffre d'affaires, je comprends que tu veuilles quelqu'un derrière. Je ne peux pas être joignable tous les week-ends sans que ce soit organisé, sinon je ne le serai pas vraiment le jour où ça compte. Ce que je propose : une astreinte chiffrée sur les dates que tu me donnes à l'avance, avec un numéro dédié et un délai d'intervention écrit, plus une surveillance automatique du site qui nous alerte avant toi. Et pour la boutique, un plan B affiché en une minute si elle tombe : un lien de commande de secours. » Contrôle : oui, des dates et un délai. Contrepartie : un prix.</li>
    </ul>

    <h3 class="correction-subtitle">5. La responsabilité RGPD</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> signer pour ne pas compliquer la relation. Vous devenez garant d'un logiciel de caisse et d'un CRM que vous n'avez jamais vus. Test du contrôle raté, et c'est un risque juridique réel.</li>
      <li><strong>Oui malin :</strong> « Vous voulez être en règle, et c'est le bon moment pour le faire. Nous ne pouvons pas être responsables de traitements que nous ne connaissons pas ; personne ne le peut honnêtement. Nous signons volontiers pour ce que nous avons fait : le site est conforme (bandeau, formulaires, durées de conservation, sous-traitants listés), et nous vous livrons la documentation qui le prouve. Pour le reste, je vous prépare une liste des points à vérifier sur votre caisse, votre newsletter et votre CRM, et je vous recommande un prestataire spécialisé si vous voulez un audit complet. » Périmètre reprécisé noir sur blanc, chemin proposé pour le reste.</li>
    </ul>

    <h3 class="correction-subtitle">6. Sans les CGV</h3>
    <ul class="correction-list">
      <li><strong>Faux oui :</strong> mettre en ligne « comme il demande ». Le site vend sans conditions de retour ni mentions obligatoires ; en cas de problème, l'agence qui a appuyé sur le bouton est dans la boucle.</li>
      <li><strong>Non sec :</strong> « On ne met pas en ligne. » Vrai, mais il perd sa date et vous perdez le client.</li>
      <li><strong>Oui malin :</strong> « Je sais que la date compte, on l'a préparée ensemble. Une boutique qui encaisse sans CGV ni politique de retour, c'est une infraction et un risque pour vous dès la première commande ; je ne publierai pas le paiement dans cet état. Deux chemins, au choix, dès ce soir : le site en ligne intégralement, catalogue et panier compris, avec le paiement activé à la seconde où votre avocat livre, ou bien des CGV provisoires à partir d'un modèle, signalées comme telles, que vous validez par écrit en assumant leur contenu. Dans les deux cas la date est tenue. » Le client choisit, vous restez dans ce que vous contrôlez, et une trace écrite existe.</li>
    </ul>

    <h3 class="correction-subtitle">Ce qui se répète dans les six</h3>
    <ul class="correction-list">
      <li>Le premier temps est toujours une reconnaissance du besoin réel, jamais une excuse. « Je comprends que » n'est pas une faiblesse, c'est ce qui rend le non audible.</li>
      <li>Le non porte sur une chose précise (la modération, la garantie, les six semaines, l'astreinte gratuite, les traitements inconnus, le paiement sans CGV), jamais sur la personne ni sur le projet.</li>
      <li>Le chemin proposé est toujours dans ce qu'on contrôle, et toujours avec une contrepartie : un prix, une date, une validation écrite, un périmètre fermé.</li>
      <li>Le non le plus rentable est le non interne (situation 3). Un chef de projet qui ne sait pas le dire à son directeur ne saura jamais le dire à un client.</li>
    </ul>

    <h3 class="correction-subtitle">Grille du débrief</h3>
    <ul class="correction-list">
      <li><strong>Oui malin :</strong> reconnaît le besoin, refuse une chose précise, propose un chemin qui passe le test du contrôle et celui de la contrepartie.</li>
      <li><strong>Faux oui :</strong> accepte sans contrepartie, ou promet un résultat hors de contrôle, souvent avec « on va essayer ».</li>
      <li><strong>Non sec :</strong> refus exact mais sans chemin. Le demandeur repart sans solution, et souvent chez un concurrent qui dira un faux oui.</li>
    </ul>
  </div>`,
  },

  {
    id: 'devis-kickz',
    title: 'Le devis Kickz Lab part dans 30 minutes',
    pitch: 'Un devis de 22 165 € pour un e-shop de sneakers custom, rédigé par un stagiaire. Trouver les huit erreurs avant l’envoi.',
    sector: 'Sneakers · KICKZ LAB',
    duration: '30 min',
    format: 'Groupes de 2-3',
    skill: 'Lecture critique d’une offre financière',
    artefact: 'Devis',
    module: 'planification',
    description: 'Une offre financière se lit comme un plan : chaque ligne doit être cohérente avec les autres, avec le délai, et avec ce que dit le texte. L\'atelier entraîne l\'œil, chronomètre en main.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 2 ou 3 · 30 minutes · un livrable : la liste des erreurs, le devis corrigé, un message.</p>
    <p><strong>Contexte :</strong> vous prenez votre poste de chef·fe de projet chez Pixel Mob ce matin. Votre directeur passe la tête : « Le devis Kickz Lab est prêt, le stagiaire l'a fait, je l'envoie à midi, tu y jettes un œil ? » Kickz Lab customise des sneakers à la main (Toulon, 2 personnes, 60 k abonnés TikTok) et veut vendre en ligne avec un configurateur.</p>

    <blockquote>
      <p><strong>Devis n° 2026-118 — Kickz Lab — Boutique en ligne avec configurateur</strong><br>Pixel Mob · valable 30 jours · Mise en ligne en 6 semaines à compter de la signature</p>
      <table>
        <thead><tr><th>Poste</th><th>Profil</th><th>TJM HT</th><th>Jours</th><th>Total HT</th></tr></thead>
        <tbody>
          <tr><td>Cadrage et ateliers</td><td>Cheffe de projet</td><td>450 €</td><td>3</td><td>1 350 €</td></tr>
          <tr><td>Direction artistique et maquettes (12 écrans)</td><td>Designer</td><td>400 €</td><td>8</td><td>3 200 €</td></tr>
          <tr><td>Intégration front</td><td>Développeur front</td><td>420 €</td><td>12</td><td>5 040 €</td></tr>
          <tr><td>Développement back (catalogue, panier, paiement Stripe)</td><td>Développeur back</td><td>420 €</td><td>15</td><td>6 300 €</td></tr>
          <tr><td>Configurateur de sneakers (couleurs, matières, aperçu)</td><td>Développeur front</td><td>380 €</td><td>10</td><td>3 800 €</td></tr>
          <tr><td>Recette et corrections</td><td>Cheffe de projet</td><td>450 €</td><td>1</td><td>450 €</td></tr>
          <tr><td>Gestion de projet</td><td>Cheffe de projet</td><td>450 €</td><td>2</td><td>900 €</td></tr>
          <tr><td>Formation au back-office</td><td>Cheffe de projet</td><td>450 €</td><td>0,5</td><td>225 €</td></tr>
          <tr><td>Maintenance corrective 12 mois</td><td>Forfait</td><td>150 €/mois</td><td>—</td><td>1 800 €</td></tr>
        </tbody>
        <tfoot>
          <tr><td colspan="3"><strong>Total jours</strong></td><td><strong>47</strong></td><td></td></tr>
          <tr><td colspan="4"><strong>Total HT</strong></td><td><strong>22 165 €</strong></td></tr>
          <tr><td colspan="4">TVA 20 %</td><td>4 433 €</td></tr>
          <tr><td colspan="4"><strong>Total TTC</strong></td><td><strong>26 598 €</strong></td></tr>
          <tr><td colspan="4">Acompte 30 % à la commande</td><td>6 000 €</td></tr>
        </tfoot>
      </table>
      <p><strong>Conditions :</strong> hébergement et nom de domaine inclus pendant 12 mois. Commissions Stripe incluses dans le forfait. Photos produit à fournir par le client. Le code source reste la propriété de Pixel Mob. Mise en ligne en 6 semaines, planning : maquettes semaines 1-2, développement semaines 2-5, recette semaine 6.</p>
    </blockquote>

    <h4>Étape 1 — Seul·e, crayon en main (10 min)</h4>
    <p>Chacun relit le devis ligne par ligne et note tout ce qui cloche : chiffres, cohérence entre lignes, cohérence avec le texte, cohérence avec le délai, promesses intenables. Comptez : il y a au moins huit problèmes, dont trois purement arithmétiques.</p>

    <h4>Étape 2 — Mise en commun et devis corrigé (15 min)</h4>
    <ol>
      <li>Fusionnez vos listes. Pour chaque problème, écrivez en une ligne : quoi, pourquoi c'est un problème (pour l'agence ou pour le client), et la correction proposée.</li>
      <li>Recalculez le devis corrigé : jours, total HT, TVA, TTC, acompte. Refaites le délai à partir des jours et des dépendances (les maquettes précèdent l'intégration, la recette suit le développement).</li>
    </ol>

    <h4>Étape 3 — Le message au directeur (5 min)</h4>
    <p>Trois lignes sur Slack : peut-on envoyer à midi ? Sinon, quand, et qu'est-ce que ça change pour le prix et le délai annoncés au client ?</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : les erreurs du devis Kickz Lab</h2>

    <h3 class="correction-subtitle">Les trois erreurs arithmétiques</h3>
    <ul class="correction-list">
      <li><strong>Total jours :</strong> 3 + 8 + 12 + 15 + 10 + 1 + 2 + 0,5 = <strong>51,5 jours</strong>, pas 47.</li>
      <li><strong>Total HT :</strong> les huit lignes de prestation font 21 265 €, plus 1 800 € de maintenance = <strong>23 065 €</strong>. Le devis affiche 22 165 € : la ligne « gestion de projet » (900 €) a été oubliée dans la somme. La TVA (4 433 €) et le TTC (26 598 €) sont calculés sur le mauvais total.</li>
      <li><strong>Acompte :</strong> 30 % de 22 165 € = 6 649,50 € HT, 30 % de 26 598 € = 7 979,40 € TTC. Les 6 000 € ne correspondent à rien.</li>
    </ul>

    <h3 class="correction-subtitle">Les erreurs de cohérence</h3>
    <ul class="correction-list">
      <li><strong>TJM du développeur front :</strong> 420 € sur l'intégration, 380 € sur le configurateur, pour le même profil. L'une des deux lignes est fausse ; à 420 €, le configurateur vaut 4 200 €.</li>
      <li><strong>Recette à 1 jour</strong> pour 45 jours de production : l'usage est 10 à 15 %, soit 5 jours. À 1 jour, les bugs seront corrigés pendant la maintenance, donc gratuitement.</li>
      <li><strong>Gestion de projet à 2 jours</strong> pour un projet de 50 jours : 4 %, quand il en faut 10 à 15 % (5 à 7 jours) pour les points hebdomadaires, les arbitrages et le suivi. Ce temps sera passé mais pas facturé.</li>
      <li><strong>Délai de 6 semaines :</strong> 51,5 jours de travail avec des dépendances (8 jours de maquettes avant 22 jours de front, puis recette) ne tiennent pas en 30 jours ouvrés, même avec trois personnes en parallèle. Compter 10 à 12 semaines.</li>
    </ul>

    <h3 class="correction-subtitle">Les promesses intenables</h3>
    <ul class="correction-list">
      <li><strong>« Commissions Stripe incluses » :</strong> impossible. Stripe prélève environ 1,5 % + 0,25 € par transaction carte européenne, sur chaque vente, pour toujours. C'est un coût variable du marchand, pas une prestation de l'agence.</li>
      <li><strong>« Hébergement inclus 12 mois » sans ligne :</strong> qui paie après ? Sur quelle infrastructure, avec quel niveau de service pour un configurateur ? Un poste à chiffrer (par exemple 40 à 80 €/mois) et à mentionner pour l'année 2.</li>
      <li><strong>« Le code reste la propriété de Pixel Mob » :</strong> pas une erreur de calcul, mais un point que le client contestera. Prévoir une cession des droits sur le spécifique à l'issue du paiement, en gardant les briques réutilisables.</li>
      <li><strong>Maintenance à 150 €/mois sans périmètre :</strong> corrective seulement ? Délai d'intervention ? Mises à jour de sécurité ? Sans ces mots, le client attendra de l'évolutif.</li>
    </ul>

    <h3 class="correction-subtitle">Une version cohérente</h3>
    <ul class="correction-list">
      <li>Configurateur à 420 € × 10 = 4 200 € ; recette 5 jours = 2 250 € ; gestion de projet 6 jours = 2 700 €. Prestations : 1 350 + 3 200 + 5 040 + 6 300 + 4 200 + 2 250 + 2 700 + 225 = <strong>25 265 € HT</strong>, soit <strong>59,5 jours</strong>.</li>
      <li>Maintenance corrective 12 mois 1 800 € ; hébergement 12 mois 720 € (60 €/mois). <strong>Total HT 27 785 €</strong>, TVA 5 557 €, <strong>TTC 33 342 €</strong>, acompte 30 % HT = 8 335,50 €.</li>
      <li>Délai : 11 semaines. Commissions Stripe à la charge du client, mentionnées noir sur blanc.</li>
      <li>Le devis passe de 22 165 € à 27 785 € HT (+25 %) et de 6 à 11 semaines. C'est ce qu'il faut dire au directeur avant midi, pas après la signature.</li>
    </ul>

    <h3 class="correction-subtitle">Le message au directeur</h3>
    <ul class="correction-list">
      <li>« On ne peut pas l'envoyer à midi : les totaux sont faux (900 € oubliés, 47 jours au lieu de 51,5), la recette et la gestion de projet sont sous-estimées, et on promet des commissions Stripe et 6 semaines qu'on ne tiendra pas. Version corrigée dans une heure : autour de 27 800 € HT et 11 semaines. Si le client a déjà entendu 22 k€ et 6 semaines, il faut qu'on l'appelle ensemble avant l'envoi. »</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Erreurs trouvées (10) :</strong> 1 point par erreur parmi les dix ci-dessus, avec la raison.</li>
      <li><strong>Devis corrigé (6) :</strong> totaux justes (3), délai recalculé à partir des dépendances (2), Stripe et hébergement traités (1).</li>
      <li><strong>Message (4) :</strong> refuse l'envoi, donne un nouveau chiffre et une nouvelle heure, anticipe ce que le client a déjà entendu.</li>
    </ul>
  </div>`,
  },

  {
    id: 'kickoff-sauce',
    title: 'Le kick-off de Sauce Piquante',
    pitch: 'Deux créateurs food à 1,2 M d’abonnés, jamais travaillé avec une agence. Préparer la réunion de lancement de lundi.',
    sector: 'Créateurs food · SAUCE PIQUANTE',
    duration: '45 min',
    format: 'Groupes de 3-4',
    skill: 'Réunion de lancement, règles du jeu, rôles',
    artefact: 'Invitation + ordre du jour',
    module: 'lancement',
    description: 'Le kick-off n\'est pas une présentation, c\'est la réunion où l\'on fixe comment on va travailler ensemble. L\'atelier fait produire l\'invitation, l\'ordre du jour minuté et les décisions à obtenir.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 45 minutes · trois livrables : l'invitation, l'ordre du jour minuté, la liste des décisions à obtenir.</p>
    <p><strong>Contexte :</strong> Sauce Piquante, c'est Inès et Théo, 24 et 26 ans, un compte TikTok food à 1,2 M d'abonnés et une chaîne YouTube à 400 k. Ils viennent de signer avec votre agence pour un site qui vendra leur sauce (3 références, fabriquée par un sous-traitant en Ardèche), publiera les recettes des vidéos, et proposera une page « collab » pour les marques. Budget 24 000 € HT, 12 semaines, mise en ligne calée sur une vidéo de lancement déjà planifiée. Le devis est signé, le kick-off est lundi 10 h, en visio.</p>

    <p><strong>Ce que vous savez des participants :</strong></p>
    <ul>
      <li>Inès : la créative, répond aux messages à 2 h du matin, change d'avis vite, ne lit pas les documents de plus d'une page.</li>
      <li>Théo : gère l'argent et le sous-traitant, méthodique, a peur qu'on « fasse un truc qui ne leur ressemble pas ».</li>
      <li>Max, leur manager (agence de talents) : veut être en copie de tout, n'a pas de pouvoir de décision mais parle beaucoup.</li>
      <li>Côté agence : vous, une designer, un développeur.</li>
    </ul>

    <h4>Étape 1 — Ce que le kick-off doit produire (10 min)</h4>
    <ol>
      <li>Listez les cinq décisions que vous devez obtenir à la fin de la réunion, formulées comme des décisions (« X est le seul interlocuteur qui valide »), pas comme des sujets.</li>
      <li>Repérez les trois risques humains de ce projet et ce que vous mettez en place lundi pour les traiter.</li>
    </ol>

    <h4>Étape 2 — L'ordre du jour minuté (20 min)</h4>
    <p>90 minutes maximum. Chaque bloc a un objectif, une durée, qui parle, et ce qu'on en sort. Contraintes : Inès décroche au bout de 20 minutes d'exposé ; Max doit avoir sa place sans prendre celle des décideurs ; le développeur ne doit pas rester muet 90 minutes ; on ne montre pas de maquette (il n'y en a pas), mais on doit repartir avec une idée de ce que « ça nous ressemble » veut dire.</p>

    <h4>Étape 3 — L'invitation (10 min)</h4>
    <p>Le mail d'invitation, envoyé jeudi : 12 lignes maximum. Il donne l'objectif de la réunion, ce qu'on attend que chacun prépare (une chose par personne), l'ordre du jour en quatre lignes, et une règle du jeu annoncée d'avance.</p>

    <h4>Étape 4 — Test (5 min)</h4>
    <p>Échangez vos ordres du jour. Le groupe voisin joue Inès : à quelle minute décroche-t-elle ? Et Max : à quel moment prend-il la parole trop longtemps ?</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : le kick-off Sauce Piquante</h2>

    <h3 class="correction-subtitle">Cinq décisions à obtenir</h3>
    <ul class="correction-list">
      <li>Théo est l'interlocuteur qui valide ; Inès est consultée sur le design ; Max est informé (en copie du compte rendu hebdomadaire, pas des échanges).</li>
      <li>Un point hebdomadaire fixe (jour, heure, 30 minutes, en visio), et un canal unique (un espace partagé, pas les DM Instagram).</li>
      <li>Délai de validation : 3 jours ouvrés par livrable, silence vaut relance puis blocage du planning, pas validation.</li>
      <li>La date de la vidéo de lancement est confirmée par écrit, avec ce qui doit être en ligne ce jour-là (boutique et 3 fiches produit) et ce qui peut suivre (recettes, page collab).</li>
      <li>Les contenus (photos des sauces, textes, recettes) : qui les produit, pour quand. Sans cette décision, le site sera prêt et vide.</li>
    </ul>

    <h3 class="correction-subtitle">Trois risques humains</h3>
    <ul class="correction-list">
      <li><strong>Inès change d'avis :</strong> valider par étapes courtes et écrites (une page, une capture, un oui). Le compte rendu du lundi fait foi.</li>
      <li><strong>Théo a peur du « pas nous » :</strong> un atelier de 30 minutes dans le kick-off où ils montrent trois sites et trois vidéos qu'ils aiment et détestent, et où la designer reformule à voix haute ce qu'elle entend. On repart avec des mots à eux, pas un moodboard.</li>
      <li><strong>Max occupe l'espace :</strong> lui donner un rôle explicite (le calendrier de communication, les collabs marques) et un moment dédié dans l'ordre du jour, pour qu'il n'intervienne pas partout.</li>
    </ul>

    <h3 class="correction-subtitle">Un ordre du jour possible (85 min)</h3>
    <ul class="correction-list">
      <li><strong>0-5</strong> · Tour de table, pourquoi on est là, ce qu'on décide aujourd'hui (vous).</li>
      <li><strong>5-15</strong> · Le projet en une page : périmètre signé, date, budget, ce qui n'est pas dedans (vous). Une page projetée, pas un PDF de 20 pages.</li>
      <li><strong>15-45</strong> · Atelier « ça nous ressemble » : Inès et Théo montrent, la designer reformule, le développeur note ce que ça implique techniquement (vidéo, animations, poids des pages). C'est le moment où Inès est le plus utile : on le place avant qu'elle décroche.</li>
      <li><strong>45-55</strong> · Les contenus : qui fait quoi pour quand, avec le sous-traitant en Ardèche pour les visuels des produits (Théo).</li>
      <li><strong>55-65</strong> · Le calendrier de lancement et les collabs : Max présente le planning des vidéos, on cale la mise en ligne dessus (Max, cadré à 10 minutes).</li>
      <li><strong>65-80</strong> · Règles du jeu : qui valide, en combien de temps, où on se parle, le point hebdo. On lit les cinq décisions à voix haute et on note qui a dit oui.</li>
      <li><strong>80-85</strong> · Prochaines étapes datées : premier livrable, premier point hebdo.</li>
    </ul>

    <h3 class="correction-subtitle">L'invitation</h3>
    <ul class="correction-list">
      <li>« Bonjour Inès, Théo, Max, lundi 10 h nous lançons officiellement le site Sauce Piquante. Objectif de la réunion : fixer comment nous travaillons ensemble pendant 12 semaines et repartir avec cinq décisions prises. Pour que ce soit utile, une chose à préparer chacun : Inès et Théo, trois sites ou vidéos que vous aimez et trois que vous détestez (n'importe quel secteur) ; Max, le calendrier des vidéos des trois prochains mois. Au programme : le projet en une page, un atelier de 30 minutes sur ce qui vous ressemble, les contenus, le calendrier, les règles du jeu. Règle annoncée : on termine à 11 h 30 avec les décisions écrites dans le compte rendu que vous recevrez avant 14 h. Lien visio ci-dessous. À lundi, [Prénom]. »</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Décisions (6) :</strong> formulées comme des décisions (3), incluent le circuit de validation et les contenus (3).</li>
      <li><strong>Ordre du jour (8) :</strong> minuté et tenable (2), l'atelier avant la minute 20 (2), un rôle pour Max et pour le développeur (2), les règles du jeu lues avant la fin (2).</li>
      <li><strong>Invitation (4) :</strong> une préparation par personne, une règle annoncée, 12 lignes.</li>
      <li><strong>Risques humains (2) :</strong> nommés et traités par un dispositif, pas par une intention.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Un kick-off qui présente l'agence pendant 20 minutes : le devis est signé, ils vous ont déjà choisis.</li>
      <li>Faire de Max le contact principal parce qu'il répond vite : il ne décide pas, chaque validation devra être refaite.</li>
      <li>Oublier les contenus. Dans neuf projets sur dix de créateurs, le site attend les photos.</li>
    </ul>
  </div>`,
  },

  {
    id: 'jalons-campus-cup',
    title: 'Les jalons de la Campus Cup',
    pitch: 'Un tournoi e-sport inter-écoles avec des dates qui ne bougeront pas. Remonter le rétroplanning à partir de la finale.',
    sector: 'E-sport · CAMPUS CUP',
    duration: '45 min',
    format: 'Groupes de 3-4',
    skill: 'Rétroplanning, jalons, dépendances',
    artefact: 'Brief + calendrier',
    module: 'planification',
    description: 'Un rétroplanning se construit à l\'envers, depuis la date qui ne bouge pas. L\'atelier fait extraire les contraintes d\'un brief, poser les jalons et voir où ça coince.',
    exercice: `<div class="cas-pratique-content">
    <p><strong>Format :</strong> groupes de 3 ou 4 · 45 minutes · un livrable : la liste des jalons datés, avec dépendances et risques.</p>
    <p><strong>Contexte :</strong> Level Up, association étudiante de La Garde, organise la Campus Cup, tournoi inter-écoles Rocket League et Valorant : phases en ligne, puis finale en LAN. Nous sommes le lundi 28 septembre 2026. Ils ont besoin d'un site : présentation, inscription des équipes avec paiement (12 € par joueur), arbre du tournoi mis à jour en direct, page sponsors, intégration du stream Twitch. Votre équipe : vous, une designer et deux développeurs, tous à mi-temps sur ce projet.</p>

    <blockquote>
      <p><strong>Ce que dit le brief de Level Up</strong></p>
      <ul>
        <li>Finale en LAN le <strong>samedi 13 mars 2027</strong>, salle réservée, date non négociable.</li>
        <li>Les inscriptions ouvrent le <strong>lundi 18 janvier 2027 à 8 h</strong> (annoncé aux écoles partenaires) et ferment le dimanche 21 février.</li>
        <li>Phases en ligne du 27 février au 7 mars ; l'arbre doit être visible en direct pendant ces dates et pendant la finale.</li>
        <li>Les sponsors doivent envoyer leurs logos avant le 10 décembre, exigence de leur côté pour figurer sur le site avant les fêtes.</li>
        <li>Le bureau de Level Up ne peut valider que le mercredi soir (réunion hebdomadaire). Il est injoignable du 19 décembre au 3 janvier (vacances) et du 5 au 16 janvier (partiels).</li>
        <li>Le paiement passera par Stripe sur le compte de l'association, qui n'est pas encore ouvert.</li>
        <li>Le stream Twitch est géré par un membre de l'asso, le lien n'existera qu'une semaine avant la finale.</li>
      </ul>
    </blockquote>

    <h4>Étape 1 — Extraire ce qui est fixe (10 min)</h4>
    <p>Listez toutes les dates du brief et classez-les : dates butoirs (le site doit être prêt avant), fenêtres indisponibles (personne ne validera), dépendances externes (quelque chose que vous attendez de quelqu'un). Ajoutez ce que le brief ne dit pas mais que vous savez : le temps de validation d'un compte Stripe, le besoin d'un paiement test réel, la marge.</p>

    <h4>Étape 2 — Remonter les jalons (20 min)</h4>
    <ol>
      <li>Partez de la finale et remontez : quel jalon doit être atteint avant, et combien de temps avant ? Continuez jusqu'au kick-off.</li>
      <li>Datez chaque jalon au jour près, en respectant les mercredis de validation et les fenêtres fermées.</li>
      <li>Découpez le site en versions : qu'est-ce qui doit être en ligne pour le 18 janvier, et qu'est-ce qui peut arriver après ? Vous devriez trouver au moins deux mises en production.</li>
    </ol>

    <h4>Étape 3 — Les trois risques (10 min)</h4>
    <p>Nommez les trois endroits où le plan casse le plus facilement, et pour chacun ce que vous faites dès maintenant pour l'éviter.</p>

    <h4>Étape 4 — Comparaison (5 min)</h4>
    <p>Comparez vos dates de mise en production avec le groupe voisin. Si elles diffèrent de plus d'une semaine, l'un des deux a oublié une contrainte : laquelle ?</p>
  </div>`,
    correction: `<div class="correction-content">
    <h2 class="correction-title">Correction : le rétroplanning de la Campus Cup</h2>

    <h3 class="correction-subtitle">Étape 1 — ce qui est fixe</h3>
    <ul class="correction-list">
      <li><strong>Butoirs :</strong> inscriptions le 18 janvier 8 h (le site, le paiement et le formulaire doivent être en production et testés avant) ; arbre en direct le 27 février ; finale le 13 mars.</li>
      <li><strong>Fenêtres fermées :</strong> 19 décembre au 3 janvier, 5 au 16 janvier. Entre le 4 janvier et le 18, il reste un seul jour ouvré avec le bureau disponible : le lundi 4. Autrement dit, tout ce qui touche à l'ouverture des inscriptions doit être validé et en production <strong>avant le 19 décembre</strong>.</li>
      <li><strong>Dépendances externes :</strong> logos sponsors (10 décembre), compte Stripe de l'asso (ouverture et vérification d'identité, compter 1 à 3 semaines), lien Twitch (6 mars).</li>
      <li><strong>Non dit :</strong> un paiement test réel de 1 € avant l'ouverture ; les écoles partenaires vont relayer le lien, donc un pic à 8 h le 18 ; une astreinte le jour de l'ouverture et le jour de la finale.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 2 — les jalons, remontés depuis la finale</h3>
    <ul class="correction-list">
      <li><strong>Mer 30 sept 2026</strong> · Kick-off avec le bureau, demande d'ouverture du compte Stripe le jour même.</li>
      <li><strong>Mer 14 oct</strong> · Cahier des charges et découpage en deux versions validés.</li>
      <li><strong>Mer 4 nov</strong> · Maquettes validées (accueil, inscription, paiement, sponsors).</li>
      <li><strong>Ven 27 nov</strong> · Fin du développement V1 : site vitrine, inscription des équipes, paiement, page sponsors (logos provisoires).</li>
      <li><strong>Mer 2 déc</strong> · Recette V1 par le bureau ; <strong>mer 9 déc</strong> · corrections validées.</li>
      <li><strong>Jeu 10 déc</strong> · Réception des logos sponsors ; <strong>ven 11 déc</strong> · intégration.</li>
      <li><strong>Mar 15 déc</strong> · <strong>Mise en production V1</strong>, inscriptions fermées avec compte à rebours, paiement test réel de 1 € remboursé. Un jour de marge avant la fermeture du 19.</li>
      <li><strong>Mer 16 déc</strong> · Dernier point du bureau avant les vacances : procédure d'ouverture du 18 janvier écrite et signée (qui appuie sur quel bouton).</li>
      <li><strong>19 déc → 17 jan</strong> · Gel de la V1. L'équipe développe la V2 (arbre du tournoi, stream) sans toucher à la production.</li>
      <li><strong>Lun 18 jan 2027, 7 h</strong> · Ouverture des inscriptions, équipe en astreinte jusqu'à 12 h.</li>
      <li><strong>Mer 3 fév</strong> · Recette V2 (arbre, stream) ; <strong>mer 10 fév</strong> · corrections validées.</li>
      <li><strong>Dim 21 fév</strong> · Clôture des inscriptions ; <strong>mer 24 fév</strong> · <strong>mise en production V2</strong> avec l'arbre généré à partir des équipes réelles, trois jours avant le début des phases.</li>
      <li><strong>Sam 6 mars</strong> · Intégration du lien Twitch (opération de 15 minutes, prévue et testée avec un lien factice dès février).</li>
      <li><strong>Sam 13 mars</strong> · Finale, astreinte technique sur place ou en ligne.</li>
      <li><strong>Mer 24 mars</strong> · Bilan avec le bureau.</li>
    </ul>

    <h3 class="correction-subtitle">Étape 3 — où ça casse</h3>
    <ul class="correction-list">
      <li><strong>Le compte Stripe :</strong> une association sans compte vérifié le 15 décembre ne peut pas encaisser le 18 janvier. Action : dossier lancé le 30 septembre, relance chaque mercredi, plan B (HelloAsso) décidé au 15 novembre si le compte n'est pas actif.</li>
      <li><strong>Le trou de janvier :</strong> aucun décideur disponible pendant deux semaines avant l'ouverture. Action : tout est en production le 15 décembre, et la procédure d'ouverture est écrite pour ne dépendre de personne.</li>
      <li><strong>La V2 mise en production trois jours avant les phases :</strong> serré. Action : la V2 est recettée dès le 3 février, et mise en production à vide le 10 février avec un arbre de démonstration ; le 24 février, on ne fait que charger les vraies équipes.</li>
    </ul>

    <h3 class="correction-subtitle">Grille (sur 20)</h3>
    <ul class="correction-list">
      <li><strong>Contraintes (5) :</strong> les trois familles de dates identifiées (3), le non-dit repéré (Stripe, test réel, pic du 18) (2).</li>
      <li><strong>Jalons (10) :</strong> remontés depuis la finale (2), datés sur des mercredis pour les validations (2), V1 en production avant le 19 décembre (3), V2 séparée (2), marge visible (1).</li>
      <li><strong>Risques (5) :</strong> trois risques nommés avec une action immédiate chacun.</li>
    </ul>

    <h3 class="correction-subtitle">Erreurs fréquentes</h3>
    <ul class="correction-list">
      <li>Mettre la V1 en production le 15 janvier « pour être au plus près » : personne ne peut valider, et un bug le 18 à 8 h n'a pas de solution.</li>
      <li>Un seul jalon « site en ligne » pour tout : l'arbre du tournoi n'existe pas avant les inscriptions, il n'a aucune raison de bloquer l'ouverture.</li>
      <li>Oublier que le paiement dépend d'un compte que le client n'a pas encore ouvert. C'est la dépendance la plus fréquente et la plus ignorée.</li>
    </ul>
  </div>`,
  },
]

import { Module } from './modules'

export const crisisModule: Module = {
  id: 'gestion-crise',
  title: 'Gestion de crise projet',
  description: 'Savoir réagir face aux imprévus : coupes budgétaires, perte d\'équipe, retards et dérives',
  sections: [
    // =============================================
    // SECTION 1 : Introduction aux crises projet
    // =============================================
    {
      id: 'crisis-intro',
      title: 'Introduction aux crises projet',
      content: `<div class="section-content">
  <h1 class="section-title">Pourquoi les projets web entrent en crise</h1>

  <p class="section-text">
    Aucun projet n'est à l'abri d'un imprévu. Qu'il s'agisse d'une coupe budgétaire, du départ soudain d'un membre clé
    ou d'un retard qui s'accumule, la capacité à <strong>gérer les crises</strong> distingue un chef de projet junior d'un professionnel aguerri.
    Ce module vous apprend à anticiper, réagir et communiquer efficacement face à l'adversité.
  </p>

  <div class="story-box">
    <p class="story-title">Le fiasco du BBC Digital Media Initiative</p>
    <p>
      En 2008, la BBC lance un projet de plateforme de gestion de contenus numériques estimé à <strong>100 millions de livres sterling</strong>.
      Après 5 ans de développement, le projet est purement et simplement <strong>abandonné en 2013</strong>.
      Les causes ? Mauvaise estimation initiale, changements de périmètre constants, absence de gestion des risques,
      et surtout une culture du "tout va bien" qui empêchait la remontée des problèmes.
      Un rapport de la NAO (Cour des comptes britannique) a conclu que <strong>les signaux d'alerte existaient dès la première année</strong>,
      mais personne n'a osé déclencher l'alerte.
    </p>
  </div>

  <div class="stat-cards">
    <div class="stat-card">
      <div class="stat-value">66%</div>
      <div class="stat-label">des projets IT rencontrent au moins une crise majeure</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">43%</div>
      <div class="stat-label">dépassent le budget initial (Standish Group)</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">29%</div>
      <div class="stat-label">des projets sont annulés avant livraison</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">52%</div>
      <div class="stat-label">des crises sont évitables avec une gestion des risques proactive</div>
    </div>
  </div>

  <div class="key-concept">
    <p class="concept-title">Concept clé : Risque vs Crise</p>
    <p>
      Un <strong>risque</strong> est un événement potentiel identifié en amont, auquel on peut préparer une réponse.
      Une <strong>crise</strong> est un risque qui s'est matérialisé et qui nécessite une action immédiate.
      L'objectif de la gestion de projet est de transformer le maximum de crises potentielles en risques gérés.
      <strong>Un bon chef de projet ne supprime pas les crises, il les anticipe.</strong>
    </p>
  </div>

  <h2 class="section-subtitle">Les 4 grandes familles de crises projet</h2>

  <div class="deliverables-grid" style="grid-template-columns: repeat(2, 1fr);">
    <div class="project-type">
      <h3 class="project-type-title">Crise budgétaire</h3>
      <ul class="feature-list">
        <li>Coupe budgétaire imposée par le client</li>
        <li>Dépassement de coûts non anticipé</li>
        <li>Sous-estimation initiale</li>
        <li>Perte de financement</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Crise humaine</h3>
      <ul class="feature-list">
        <li>Maladie ou accident d'un membre clé</li>
        <li>Démission en cours de projet</li>
        <li>Conflit interne dans l'équipe</li>
        <li>Burnout d'un collaborateur</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Crise de planning</h3>
      <ul class="feature-list">
        <li>Retard accumulé sur les livrables</li>
        <li>Dépendance externe bloquante</li>
        <li>Estimation irréaliste</li>
        <li>Scope creep non maîtrisé</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Crise externe</h3>
      <ul class="feature-list">
        <li>Conflit avec le client</li>
        <li>Panne technique majeure</li>
        <li>Changement de réglementation</li>
        <li>Faille de sécurité découverte</li>
      </ul>
    </div>
  </div>

  <div class="warning-box">
    <p class="warning-title">La règle d'or : ne jamais cacher une crise</p>
    <p>
      La tentation est grande de minimiser un problème en espérant le résoudre discrètement.
      C'est <strong>toujours</strong> une erreur. Un retard de 2 jours caché devient un retard de 2 semaines découvert trop tard.
      Une faille de sécurité tue peut devenir une violation de données publique.
      <strong>La transparence précoce est le meilleur antidote à la crise.</strong>
    </p>
  </div>

  <div class="tip-box">
    <p class="tip-title">Astuce : Le plan de contingence</p>
    <p>
      Tout projet devrait inclure un <strong>plan de contingence</strong> préparé AVANT que les problèmes ne surviennent,
      exactement comme un exercice incendie. Ce plan définit : qui prend les décisions en urgence,
      comment communiquer avec les parties prenantes, quelles sont les marges de manœuvre (budget, délai, scope),
      et quels sont les seuils de déclenchement d'alerte.
    </p>
  </div>

  <div class="comparison-grid">
    <div class="comparison-before">
      <h4>Projet sans anticipation de crise</h4>
      <ul>
        <li>Panique et improvisation</li>
        <li>Recherche de coupables</li>
        <li>Client furieux et méfiant</li>
        <li>Décisions précipitées</li>
        <li>Perte de contrôle du projet</li>
      </ul>
    </div>
    <div class="comparison-after">
      <h4>Projet avec gestion de crise</h4>
      <ul>
        <li>Plan de contingence activé</li>
        <li>Communication maîtrisée</li>
        <li>Solutions proposées au client</li>
        <li>Décisions réfléchies et documentées</li>
        <li>Confiance préservée</li>
      </ul>
    </div>
  </div>
</div>`,
      casePratique: {
        title: 'Identifier les risques d\'un projet',
        description: 'Analyser un projet et anticiper les crises potentielles avant qu\'elles ne surviennent.',
        exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous êtes chef de projet dans une agence web. Votre nouveau client est une <strong>startup fintech</strong>
  qui souhaite créer une application de gestion de budget personnel.</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Paramètres du projet</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Budget :</strong> 60 000 € TTC</li>
      <li><strong>Durée :</strong> 6 mois</li>
      <li><strong>Équipe :</strong> 1 CP (vous), 2 développeurs, 1 designer UX, 1 intégrateur</li>
      <li><strong>Client :</strong> Startup en phase de levée de fonds (série A en cours)</li>
      <li><strong>Stack technique :</strong> React Native + API Node.js + PostgreSQL</li>
      <li><strong>Contraintes :</strong> Réglementation financière (KYC, RGPD), intégration API bancaire tierce</li>
    </ul>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Votre mission</h4>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
      <li>Identifiez <strong>5 risques majeurs</strong> pour ce projet</li>
      <li>Classez chaque risque par famille (budgétaire, humaine, planning, externe)</li>
      <li>Évaluez la <strong>probabilité</strong> (faible/moyenne/forte) et l'<strong>impact</strong> (faible/moyen/critique) de chaque risque</li>
      <li>Proposez une <strong>mesure d'atténuation</strong> concrète pour chaque risque</li>
      <li>Identifiez le risque qui devrait déclencher un <strong>plan de contingence immédiat</strong></li>
    </ol>
  </div>
</div>`,
        correction: `<div class="correction-content">
  <h2 class="correction-title">Correction : Analyse des risques du projet fintech</h2>

  <h3 class="correction-subtitle">Risque 1 : Échec de la levée de fonds (Budgétaire)</h3>
  <ul class="correction-list">
    <li><strong>Probabilité :</strong> Moyenne (30-40% des séries A échouent)</li>
    <li><strong>Impact :</strong> Critique — le client ne pourra plus financer le projet</li>
    <li><strong>Atténuation :</strong> Négocier un paiement par jalons (30% au démarrage, 40% à mi-parcours, 30% à la livraison). Inclure une clause de résiliation avec compensation pour le travail effectué. Prioriser les fonctionnalités critiques en premier (MVP livrable rapidement).</li>
  </ul>

  <h3 class="correction-subtitle">Risque 2 : Complexité de l'API bancaire (Externe/Technique)</h3>
  <ul class="correction-list">
    <li><strong>Probabilité :</strong> Forte (les API bancaires sont notoirement complexes et mal documentées)</li>
    <li><strong>Impact :</strong> Moyen à critique — peut retarder le projet de 2-4 semaines</li>
    <li><strong>Atténuation :</strong> Démarrer l'intégration bancaire dès le sprint 2 (pas à la fin). Prévoir un POC (proof of concept) de 3 jours avant de s'engager sur l'intégration complète. Identifier un prestataire spécialisé en backup.</li>
  </ul>

  <h3 class="correction-subtitle">Risque 3 : Départ du designer UX freelance (Humaine)</h3>
  <ul class="correction-list">
    <li><strong>Probabilité :</strong> Moyenne (les freelances jonglent entre plusieurs projets)</li>
    <li><strong>Impact :</strong> Moyen — les maquettes et le design system sont des livrables critiques en phase initiale</li>
    <li><strong>Atténuation :</strong> Contractualiser une clause d'exclusivité sur les 2 premiers mois. Documenter le design system dès sa création (tokens, composants, guidelines). S'assurer qu'au moins un développeur sait utiliser Figma.</li>
  </ul>

  <h3 class="correction-subtitle">Risque 4 : Scope creep lié au pivot startup (Planning)</h3>
  <ul class="correction-list">
    <li><strong>Probabilité :</strong> Forte (les startups pivotent fréquemment en phase de levée)</li>
    <li><strong>Impact :</strong> Critique — peut remettre en question l'architecture technique</li>
    <li><strong>Atténuation :</strong> Définir un CDC très précis avec le client. Formaliser un processus de change request : toute modification hors CDC = avenant avec impact sur budget/délai. Utiliser une architecture modulaire pour faciliter les ajustements.</li>
  </ul>

  <h3 class="correction-subtitle">Risque 5 : Non-conformité réglementaire (Externe)</h3>
  <ul class="correction-list">
    <li><strong>Probabilité :</strong> Moyenne (la réglementation fintech évolue rapidement)</li>
    <li><strong>Impact :</strong> Critique — non-conformité KYC/RGPD = impossibilité de lancer le produit</li>
    <li><strong>Atténuation :</strong> Intégrer un audit juridique dès la phase de conception (budget : 2-3k€). Faire valider l'architecture données par un DPO. Anticiper les certifications nécessaires dans le planning.</li>
  </ul>

  <div class="value-type">
    <h3 class="value-title">Plan de contingence prioritaire</h3>
    <p>Le <strong>risque 1 (échec de la levée de fonds)</strong> doit déclencher un plan de contingence immédiat car il menace l'existence même du projet.
    Dès que des signaux faibles apparaissent (retard de paiement, silence du client sur la levée), le CP doit :
    (1) demander un point de situation financière, (2) geler les dépenses non essentielles, (3) préparer un MVP livrable en état.</p>
  </div>
</div>`
      },
      quiz: [
        {
          id: 'q-crise-1',
          question: 'Quelle est la différence entre un risque et une crise dans un projet ?',
          options: [
            'Un risque est plus grave qu\'une crise',
            'Un risque est potentiel, une crise est un risque matérialisé nécessitant une action immédiate',
            'Une crise peut être anticipée, un risque non',
            'Il n\'y a pas de différence, ce sont des synonymes'
          ],
          correctAnswer: 1,
          explanation: 'Un risque est un événement potentiel identifié en amont. Une crise survient quand ce risque se matérialise et exige une réponse immédiate. L\'objectif est de transformer les crises potentielles en risques gérés.',
          difficulty: 'facile',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-2',
          question: 'Une crise dans un projet est toujours évitable si le chef de projet est compétent.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'Faux. Même avec une excellente gestion des risques, certaines crises sont imprévisibles (pandémie, faillite d\'un prestataire, changement de réglementation soudain). L\'objectif n\'est pas d\'éliminer toutes les crises mais de savoir y réagir efficacement.',
          type: 'true-false',
          difficulty: 'facile',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-3',
          question: 'Selon les études (Standish Group), quel pourcentage de projets IT dépassent leur budget initial ?',
          options: [
            'Environ 10%',
            'Environ 25%',
            'Environ 43%',
            'Environ 75%'
          ],
          correctAnswer: 2,
          explanation: 'Environ 43% des projets IT dépassent leur budget initial selon les rapports du Standish Group (CHAOS). C\'est un chiffre qui illustre l\'importance de la gestion des risques budgétaires.',
          difficulty: 'moyen',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-4',
          question: 'Quelle devrait être votre première action ?',
          options: [
            'Demander à l\'équipe de faire des heures supplémentaires pour rattraper',
            'Réaliser un diagnostic factuel précis et informer les parties prenantes',
            'Cacher le problème et espérer rattraper le retard',
            'Ajouter des développeurs au projet immédiatement'
          ],
          correctAnswer: 1,
          explanation: 'La première action est toujours de poser un diagnostic factuel (combien exactement ? pourquoi ? quel impact ?) puis d\'informer les parties prenantes. Cacher le problème ou réagir impulsivement aggrave toujours la situation.',
          type: 'scenario',
          difficulty: 'difficile',
          category: 'gestion-projet',
          scenarioContext: 'Vous êtes chef de projet sur un site e-commerce. À mi-parcours du projet (mois 2 sur 4), vous découvrez que le budget a été consommé à 80% alors que seulement 45% des fonctionnalités ont été livrées. Le client n\'est pas encore au courant.'
        },
        {
          id: 'q-crise-5',
          question: 'Quel est l\'objectif principal d\'un plan de contingence ?',
          options: [
            'Remplacer le cahier des charges',
            'Définir à l\'avance les réponses aux crises potentielles',
            'Documenter les bugs du projet',
            'Mesurer la performance de l\'équipe'
          ],
          correctAnswer: 1,
          explanation: 'Un plan de contingence définit à l\'avance les actions à entreprendre si certains risques se matérialisent. Il permet de réagir rapidement et de manière structurée au lieu d\'improviser dans l\'urgence.',
          difficulty: 'moyen',
          category: 'methodologie'
        }
      ]
    },

    // =============================================
    // SECTION 2 : Crise budgétaire
    // =============================================
    {
      id: 'crisis-budget',
      title: 'Crise budgétaire',
      content: `<div class="section-content">
  <h1 class="section-title">Gérer une crise budgétaire</h1>

  <p class="section-text">
    La crise budgétaire est la plus fréquente et souvent la plus stressante. Qu'il s'agisse d'une coupe imposée par le client,
    d'un dépassement de coûts ou d'une sous-estimation initiale, le chef de projet doit savoir <strong>reprioriser, négocier
    et proposer des alternatives</strong> sans compromettre la relation client.
  </p>

  <div class="story-box">
    <p class="story-title">L'agence qui a failli fermer</p>
    <p>
      Une agence web parisienne décroche un contrat e-commerce à <strong>30 000 €</strong>.
      À 60% d'avancement, les coûts réels atteignent déjà <strong>25 000 €</strong> et il reste les fonctionnalités les plus complexes
      (paiement, gestion des stocks, multi-devises). L'agence choisit d'absorber le dépassement "pour garder le client".
      Résultat : le projet coûte finalement <strong>48 000 €</strong>, soit une perte nette de 18 000 €.
      Deux développeurs quittent l'agence, épuisés par les heures supplémentaires non rémunérées.
      <strong>L'agence met 18 mois à s'en remettre financièrement.</strong>
    </p>
  </div>

  <div class="stat-cards">
    <div class="stat-card">
      <div class="stat-value">70%</div>
      <div class="stat-label">des projets IT dépassent le budget initial</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">27%</div>
      <div class="stat-label">de dépassement moyen constaté</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">45%</div>
      <div class="stat-label">des dépassements viennent du scope creep</div>
    </div>
  </div>

  <h2 class="section-subtitle">Les causes de crise budgétaire</h2>

  <div class="deliverables-grid" style="grid-template-columns: repeat(2, 1fr);">
    <div class="project-type">
      <h3 class="project-type-title">Causes internes</h3>
      <ul class="feature-list">
        <li><strong>Sous-estimation initiale :</strong> complexité technique mal évaluée</li>
        <li><strong>Absence de marge :</strong> budget calculé au plus juste</li>
        <li><strong>Mauvais suivi :</strong> pas de tableau de bord budgétaire</li>
        <li><strong>Perfectionnisme :</strong> sur-qualité non demandée par le client</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Causes externes</h3>
      <ul class="feature-list">
        <li><strong>Scope creep :</strong> ajouts de fonctionnalités non budgétés</li>
        <li><strong>Coupe budgétaire :</strong> le client réduit l'enveloppe</li>
        <li><strong>Changement de priorités :</strong> pivot stratégique du client</li>
        <li><strong>Prestataire défaillant :</strong> surcoût pour trouver un remplaçant</li>
      </ul>
    </div>
  </div>

  <div class="key-concept">
    <p class="concept-title">Concept clé : La méthode MoSCoW pour reprioriser</p>
    <p>
      Quand le budget diminue, il faut <strong>reprioriser les fonctionnalités</strong>. La méthode MoSCoW classe chaque feature en :
    </p>
    <ul class="feature-list" style="margin-top: 8px;">
      <li><strong>M</strong>ust have — Indispensable, le produit ne fonctionne pas sans</li>
      <li><strong>S</strong>hould have — Important mais pas bloquant pour le lancement</li>
      <li><strong>C</strong>ould have — Souhaitable, à inclure si le budget le permet</li>
      <li><strong>W</strong>on't have (this time) — Reporté explicitement à une version future</li>
    </ul>
  </div>

  <h2 class="section-subtitle">Stratégie de réaction en 5 étapes</h2>

  <div class="value-type">
    <h3 class="value-title">Étape 1 : Diagnostic précis</h3>
    <p>Quantifiez exactement l'écart : budget consommé vs budget restant vs travail restant.
    Utilisez un tableau de suivi : jours consommés par fonctionnalité, taux de complétion réel, projection de coût final.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 2 : Classification MoSCoW</h3>
    <p>Passez en revue TOUTES les fonctionnalités avec l'équipe technique et classez-les.
    Soyez honnête : un blog n'est jamais un "Must have" pour un e-commerce.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 3 : Scénarios chiffrés</h3>
    <p>Préparez 2-3 scénarios concrets pour le client : (A) scope réduit au budget actuel,
    (B) livraison en 2 phases (V1 + V2), (C) budget additionnel avec ROI justifié. Chaque scénario avec coût, délai et périmètre.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 4 : Négociation structurée</h3>
    <p>Présentez les scénarios au client avec des faits, pas des émotions.
    Laissez le client choisir. Votre rôle est de l'éclairer, pas de décider pour lui.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Étape 5 : Formalisation contractuelle</h3>
    <p>Toute modification de scope ou de budget doit être formalisée par un <strong>avenant au contrat</strong>.
    Pas d'accord verbal, pas de mail ambigu. Un document signé.</p>
  </div>

  <div class="warning-box">
    <p class="warning-title">Ne jamais absorber un dépassement en silence</p>
    <p>
      Travailler gratuitement "pour garder le client" est une stratégie perdante à tous les coups.
      Vous fatiguez l'équipe, vous dévalorisez votre travail, et le client ne vous en sera <strong>pas</strong> reconnaissant
      (il ne saura même pas que vous avez absorbé le surcoût). Pire : il s'attendra au même prix la prochaine fois.
    </p>
  </div>

  <div class="tip-box">
    <p class="tip-title">Astuce : La marge de sécurité de 10-15%</p>
    <p>
      Intégrez <strong>systématiquement</strong> une marge de 10 à 15% dans vos estimations budgétaires.
      Ce n'est pas du "gras" : c'est de la gestion de risque professionnelle.
      Si la marge n'est pas consommée, c'est une bonne surprise pour le client. Si elle l'est, vous avez évité une crise.
    </p>
  </div>
</div>`,
      casePratique: {
        title: 'Budget coupé de 30%',
        description: 'Gérer une réduction budgétaire brutale en cours de projet.',
        exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous êtes CP sur un projet e-commerce. Voici les paramètres :</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Paramètres du projet</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Budget initial :</strong> 50 000 € TTC</li>
      <li><strong>Durée :</strong> 4 mois</li>
      <li><strong>Avancement :</strong> 6 semaines (phase conception validée, développement démarré)</li>
      <li><strong>Budget consommé :</strong> 15 000 €</li>
    </ul>
  </div>

  <div class="bg-red-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-red-900 mb-2">La crise</h4>
    <p class="text-gray-800">Le client vous annonce une <strong>coupe budgétaire de 30%</strong>. Nouveau budget total : <strong>35 000 €</strong>.
    Budget restant : <strong>20 000 €</strong>.</p>
  </div>

  <div class="bg-green-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-green-900 mb-2">Périmètre initial prévu</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li>Catalogue de 200 produits avec fiches détaillées</li>
      <li>Panier et tunnel d'achat complet</li>
      <li>Paiement en ligne (Stripe)</li>
      <li>Gestion multi-langue (FR/EN)</li>
      <li>Recherche avancée avec filtres</li>
      <li>Blog intégré avec CMS</li>
      <li>Programme de fidélité avec points</li>
      <li>Tableau de bord admin</li>
    </ul>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Votre mission</h4>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
      <li>Appliquez la méthode <strong>MoSCoW</strong> à toutes les fonctionnalités listées</li>
      <li>Proposez <strong>3 scénarios</strong> au client (avec budget et périmètre pour chacun)</li>
      <li>Rédigez l'<strong>email d'annonce</strong> au client pour proposer une réunion de cadrage</li>
    </ol>
  </div>
</div>`,
        correction: `<div class="correction-content">
  <h2 class="correction-title">Correction : Gestion de la coupe budgétaire</h2>

  <h3 class="correction-subtitle">1. Classification MoSCoW</h3>
  <ul class="correction-list">
    <li><strong>Must have :</strong> Catalogue produits (simplifié à 50 produits au lancement), panier et tunnel d'achat, paiement Stripe, tableau de bord admin basique</li>
    <li><strong>Should have :</strong> Recherche avec filtres (version simplifiée), gestion multi-langue</li>
    <li><strong>Could have :</strong> Blog intégré</li>
    <li><strong>Won't have (V1) :</strong> Programme de fidélité, recherche avancée avec facettes, multi-langue complète</li>
  </ul>

  <h3 class="correction-subtitle">2. Les 3 scénarios</h3>

  <div class="value-type">
    <h3 class="value-title">Scénario A : E-commerce essentiel (20 000 €)</h3>
    <p><strong>Périmètre :</strong> Catalogue 50 produits, panier, paiement Stripe, admin basique, recherche simple.<br/>
    <strong>Délai :</strong> 6 semaines.<br/>
    <strong>Avantage :</strong> Livré dans le budget restant, opérationnel rapidement.<br/>
    <strong>Limite :</strong> Pas de blog, pas de fidélité, pas de multi-langue.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Scénario B : Livraison en 2 phases (20 000 € + 12 000 €)</h3>
    <p><strong>V1 (20 000 €) :</strong> Catalogue, panier, paiement, admin, recherche simple.<br/>
    <strong>V2 (12 000 €, 2 mois plus tard) :</strong> Blog, multi-langue FR/EN, recherche avancée.<br/>
    <strong>Avantage :</strong> Périmètre quasi complet, étalement du budget.<br/>
    <strong>Limite :</strong> Programme fidélité toujours reporté. V2 à budgéter séparément.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Scénario C : Restauration du budget (35 000 € → 45 000 €)</h3>
    <p><strong>Argument ROI :</strong> Le programme de fidélité génère en moyenne +23% de récurrence client.
    Investir 10 000 € supplémentaires pour cette fonctionnalité pourrait générer 30 000 € de CA additionnel sur 12 mois.<br/>
    <strong>Périmètre :</strong> Tout sauf le multi-langue (reporté en V2).<br/>
    <strong>Avantage :</strong> Meilleur compromis fonctionnel.<br/>
    <strong>Limite :</strong> Nécessite que le client augmente son budget.</p>
  </div>

  <h3 class="correction-subtitle">3. Email au client</h3>
  <div class="example-box">
    <p><em>Objet : Adaptation du périmètre projet — Proposition de réunion</em></p>
    <p><em>Bonjour [Prénom],</em></p>
    <p><em>Suite à votre annonce concernant l'ajustement budgétaire, j'ai travaillé avec l'équipe pour analyser l'impact
    et préparer des solutions concrètes.</em></p>
    <p><em>Je souhaiterais vous présenter 3 scénarios adaptés à votre nouvelle enveloppe,
    chacun avec un périmètre, un délai et un budget précis. L'objectif : vous permettre de choisir la meilleure option
    pour votre activité.</em></p>
    <p><em>Seriez-vous disponible pour un point de 45 minutes cette semaine ? Je vous enverrai les scénarios détaillés en amont
    pour que vous puissiez les examiner.</em></p>
    <p><em>Bien cordialement,<br/>[Votre nom]</em></p>
  </div>
</div>`
      },
      quiz: [
        {
          id: 'q-crise-6',
          question: 'Que signifie l\'acronyme MoSCoW en gestion de projet ?',
          options: [
            'Management of Software Components and Workflows',
            'Must have, Should have, Could have, Won\'t have',
            'Méthode d\'Organisation Stratégique des Coûts et Objectifs Web',
            'Monitoring, Scheduling, Controlling, Warranting'
          ],
          correctAnswer: 1,
          explanation: 'MoSCoW est une méthode de priorisation : Must have (indispensable), Should have (important), Could have (souhaitable), Won\'t have (reporté). Elle permet de décider ce qui reste dans le périmètre quand le budget diminue.',
          difficulty: 'facile',
          category: 'methodologie'
        },
        {
          id: 'q-crise-7',
          question: 'Que recommandez-vous en priorité ?',
          options: [
            'Demander aux développeurs de travailler le week-end pour rattraper',
            'Réaliser un diagnostic précis et préparer des scénarios chiffrés pour le client',
            'Réduire la qualité du code pour aller plus vite',
            'Embaucher un développeur supplémentaire immédiatement'
          ],
          correctAnswer: 1,
          explanation: 'Face à une crise budgétaire, la priorité est le diagnostic (quantifier l\'écart exact) puis la préparation de scénarios chiffrés à présenter au client. Les solutions précipitées (heures sup, embauche, qualité réduite) aggravent souvent le problème.',
          type: 'scenario',
          difficulty: 'difficile',
          category: 'budget',
          scenarioContext: 'Vous gérez un projet web de 40 000 €. À mi-parcours, le suivi budgétaire révèle que 80% du budget est consommé (32 000 €) alors que seulement 50% du travail est terminé. Les causes : sous-estimation de la complexité de l\'API et 2 semaines de retard liées aux validations client.'
        },
        {
          id: 'q-crise-8',
          question: 'Ajouter des développeurs à un projet en dépassement budgétaire permet toujours de réduire les coûts.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'Faux. C\'est la loi de Brooks : ajouter des personnes à un projet en retard le retarde davantage (et coûte plus cher). Les nouveaux arrivants nécessitent une période d\'intégration et augmentent la complexité de communication.',
          type: 'true-false',
          difficulty: 'moyen',
          category: 'budget'
        },
        {
          id: 'q-crise-9',
          question: 'Quelle est la meilleure stratégie quand un client annonce une coupe budgétaire de 30% ?',
          options: [
            'Accepter et absorber la perte en interne',
            'Refuser et arrêter le projet',
            'Reprioriser le scope avec MoSCoW et proposer des scénarios au client',
            'Réduire la qualité de toutes les fonctionnalités pour rentrer dans le budget'
          ],
          correctAnswer: 2,
          explanation: 'La bonne approche est de reprioriser (MoSCoW), puis de proposer plusieurs scénarios chiffrés au client pour qu\'il choisisse en connaissance de cause. Absorber la perte ou baisser la qualité sont des stratégies perdantes.',
          difficulty: 'moyen',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-10',
          question: 'Quelle marge de sécurité est recommandée dans un budget de projet web ?',
          options: [
            '1-2%',
            '5-7%',
            '10-15%',
            '30-40%'
          ],
          correctAnswer: 2,
          explanation: 'Une marge de 10 à 15% est recommandée pour couvrir les imprévus. En dessous, la marge est insuffisante pour absorber les risques courants. Au-dessus, le devis devient peu compétitif.',
          difficulty: 'facile',
          category: 'budget'
        }
      ]
    },

    // =============================================
    // SECTION 3 : Perte d'un membre de l'équipe
    // =============================================
    {
      id: 'crisis-team',
      title: 'Perte d\'un membre de l\'équipe',
      content: `<div class="section-content">
  <h1 class="section-title">Gérer la perte d'un membre de l'équipe</h1>

  <p class="section-text">
    La perte d'un collaborateur en cours de projet — maladie, accident, démission ou burnout — est une crise souvent
    sous-estimée. Quand le savoir-faire repose sur une seule personne, son absence peut paralyser l'ensemble du projet.
    La clé : <strong>anticiper le risque humain</strong> dès le début du projet.
  </p>

  <div class="story-box">
    <p class="story-title">Le développeur irremplaçable</p>
    <p>
      Sur un projet SaaS de gestion d'événements, le lead développeur — seul à maîtriser l'architecture backend —
      se casse la jambe au ski. <strong>Indisponible pendant 2 mois.</strong> Personne ne comprend son code,
      il n'y a pas de documentation, et ses identifiants d'accès aux serveurs sont dans son gestionnaire de mots de passe personnel.
      Le projet est bloqué 3 semaines avant qu'un consultant externe puisse prendre le relais —
      pour un surcoût de <strong>12 000 €</strong>. Le retard total : <strong>6 semaines</strong>.
      Leçon : le "bus factor" de ce projet était de 1.
    </p>
  </div>

  <div class="stat-cards">
    <div class="stat-card">
      <div class="stat-value">Bus factor = 1</div>
      <div class="stat-label">= risque critique pour le projet</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">3 sem.</div>
      <div class="stat-label">de productivité perdue en moyenne pour onboarder un remplaçant</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">20%</div>
      <div class="stat-label">des projets subissent un départ non prévu</div>
    </div>
  </div>

  <div class="key-concept">
    <p class="concept-title">Concept clé : Le Bus Factor</p>
    <p>
      Le <strong>bus factor</strong> (ou "truck factor") est le nombre minimum de personnes dans l'équipe
      dont l'absence simultanée mettrait le projet en péril. Si ce nombre est <strong>1</strong>,
      vous avez un <strong>point de défaillance unique</strong> (single point of failure).
      L'objectif minimum est d'atteindre un bus factor de <strong>2</strong> sur chaque compétence critique.
    </p>
  </div>

  <h2 class="section-subtitle">Types de perte d'équipe</h2>

  <div class="deliverables-grid" style="grid-template-columns: repeat(2, 1fr);">
    <div class="project-type">
      <h3 class="project-type-title">Maladie / Accident</h3>
      <ul class="feature-list">
        <li>Absence temporaire, retour prévu</li>
        <li>Pas de transfert de connaissances possible</li>
        <li>Urgence : accès aux comptes et au code</li>
        <li>Impact variable selon la durée</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Démission</h3>
      <ul class="feature-list">
        <li>Préavis (1-3 mois en général)</li>
        <li>Transfert de connaissances possible</li>
        <li>Recherche de remplaçant à lancer</li>
        <li>Impact sur le moral de l'équipe</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Conflit interne</h3>
      <ul class="feature-list">
        <li>Baisse de productivité avant le départ</li>
        <li>Impact sur l'ambiance d'équipe</li>
        <li>Risque de contamination du conflit</li>
        <li>Nécessite une médiation rapide</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Burnout</h3>
      <ul class="feature-list">
        <li>Signes avant-coureurs à détecter</li>
        <li>Durée d'absence imprévisible</li>
        <li>Responsabilité managériale</li>
        <li>Prévention = gestion de la charge de travail</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle">Stratégies de prévention</h2>

  <div class="value-type">
    <h3 class="value-title">Documentation continue</h3>
    <p>Code documenté, wikis techniques, processus écrits. Chaque décision architecturale doit être tracée.
    Règle : si quelqu'un quitte demain, quelqu'un d'autre doit pouvoir reprendre en moins d'une semaine.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Cross-training</h3>
    <p>Chaque membre de l'équipe doit connaître le travail d'au moins un collègue.
    Organisez des sessions de partage technique mensuelles (tech talks internes de 30 minutes).</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Pair programming</h3>
    <p>Le pair programming n'est pas qu'un outil de qualité : c'est un outil de <strong>partage de connaissances naturel</strong>.
    Sur les tâches critiques, imposez le travail en binôme.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Centralisation des accès</h3>
    <p>Gestionnaire de mots de passe partagé (1Password, Bitwarden), repos Git de l'entreprise (pas personnels),
    accès serveurs documentés. <strong>Aucun accès critique ne doit dépendre d'une seule personne.</strong></p>
  </div>

  <h2 class="section-subtitle">Plan de réaction en 6 étapes</h2>

  <div class="project-type">
    <h3 class="project-type-title">Réagir à la perte d'un membre</h3>
    <ul class="feature-list">
      <li><strong>1. Évaluer l'impact immédiat :</strong> quelles tâches sont bloquées ? Quelles compétences manquent ?</li>
      <li><strong>2. Identifier les connaissances critiques :</strong> que sait cette personne que les autres ne savent pas ?</li>
      <li><strong>3. Redistribuer les tâches :</strong> temporairement, en priorisant les tâches bloquantes</li>
      <li><strong>4. Chercher un remplacement :</strong> d'abord en interne (redéploiement), puis en externe (freelance, recrutement)</li>
      <li><strong>5. Communiquer avec le client :</strong> transparence sur l'impact et le plan de mitigation</li>
      <li><strong>6. Ajuster le planning :</strong> recaler les jalons en fonction de la nouvelle capacité</li>
    </ul>
  </div>

  <div class="warning-box">
    <p class="warning-title">Ne jamais dépendre d'une seule personne</p>
    <p>
      Si vous ne pouvez pas partir en vacances 2 semaines sans que le projet s'effondre,
      c'est que votre organisation a un problème. Le bus factor = 1 est un <strong>risque critique</strong>
      qui doit être traité comme tel dès le début du projet.
    </p>
  </div>

  <div class="tip-box">
    <p class="tip-title">Astuce : Le fichier "En cas d'absence"</p>
    <p>
      Demandez à chaque membre de l'équipe de maintenir un court document (1 page max) contenant :
      tâches en cours et priorités, accès et mots de passe (via gestionnaire partagé),
      contacts importants (prestataires, interlocuteurs client), où trouver la documentation.
      Ce document doit être mis à jour chaque vendredi en 5 minutes.
    </p>
  </div>
</div>`,
      casePratique: {
        title: 'Le développeur clé démissionne',
        description: 'Gérer le départ du membre le plus critique de l\'équipe en cours de projet.',
        exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous êtes CP sur un projet de refonte d'application web.</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Paramètres du projet</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Avancement :</strong> Mois 3 sur 5</li>
      <li><strong>Budget restant :</strong> 22 000 € sur 45 000 €</li>
      <li><strong>Équipe :</strong> 1 CP (vous), 1 lead dev React (Thomas), 2 devs juniors</li>
      <li><strong>Prochaine livraison client :</strong> dans 3 semaines</li>
    </ul>
  </div>

  <div class="bg-red-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-red-900 mb-2">La crise</h4>
    <p class="text-gray-800">Thomas, votre lead développeur React, vient de vous annoncer sa <strong>démission</strong> avec un préavis de <strong>2 semaines</strong>.
    Il est le seul à avoir conçu l'architecture frontend et la librairie de composants custom utilisée par toute l'équipe.
    Les 2 développeurs juniors peuvent coder des features mais ne comprennent pas l'architecture globale.</p>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Votre mission</h4>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
      <li>Listez vos <strong>actions prioritaires</strong> pour les 2 semaines de préavis de Thomas</li>
      <li>Planifiez le <strong>transfert de connaissances</strong> (quoi, comment, quand)</li>
      <li>Décidez : <strong>recrutement CDI, freelance senior, ou redistribution interne ?</strong> Justifiez votre choix</li>
      <li>Rédigez la <strong>communication au client</strong> (ce que vous dites, ce que vous ne dites pas)</li>
    </ol>
  </div>
</div>`,
        correction: `<div class="correction-content">
  <h2 class="correction-title">Correction : Gestion du départ du lead developer</h2>

  <h3 class="correction-subtitle">1. Actions prioritaires (2 semaines de préavis)</h3>
  <ul class="correction-list">
    <li><strong>Jour 1-2 :</strong> Sessions de documentation intensive — Thomas documente l'architecture, les patterns utilisés, les choix techniques et les pièges à éviter</li>
    <li><strong>Jour 3-5 :</strong> Pair programming obligatoire — Thomas travaille en binôme avec chaque junior (1 jour chacun) sur des tâches réelles</li>
    <li><strong>Jour 6-8 :</strong> Code review complète — Thomas fait une revue de code avec commentaires détaillés sur l'ensemble du projet</li>
    <li><strong>Jour 9-10 :</strong> Test de passation — un junior prend le lead sur une tâche complexe avec Thomas en support (pas en exécution)</li>
    <li><strong>Tout au long :</strong> Enregistrement vidéo des sessions clés (architecture walkthrough, démo du design system)</li>
  </ul>

  <h3 class="correction-subtitle">2. Plan de transfert de connaissances</h3>
  <ul class="correction-list">
    <li><strong>Architecture globale :</strong> Schéma de l'architecture + document ADR (Architecture Decision Records) — 1 journée</li>
    <li><strong>Design system / composants :</strong> Documentation Storybook + guide d'utilisation — 1 journée</li>
    <li><strong>Conventions de code :</strong> Mise à jour du README avec standards, linter rules, patterns — 0,5 jour</li>
    <li><strong>Accès et CI/CD :</strong> Vérifier que tous les accès (repos, déploiement, monitoring) sont transférés — 0,5 jour</li>
    <li><strong>Roadmap technique :</strong> Liste des choix techniques à venir et recommandations — 0,5 jour</li>
  </ul>

  <h3 class="correction-subtitle">3. Stratégie de remplacement : Freelance senior React</h3>
  <div class="value-type">
    <h3 class="value-title">Recommandation : Freelance senior (2-3 mois)</h3>
    <p><strong>Pourquoi pas un CDI ?</strong> Le recrutement prend 1-3 mois. Trop long pour la deadline.<br/>
    <strong>Pourquoi pas uniquement les juniors ?</strong> Ils manquent d'expérience architecturale. Risque de dette technique explosive.<br/>
    <strong>Le freelance senior :</strong> disponible en 1-2 semaines, peut comprendre l'architecture existante rapidement,
    encadre les juniors, et coûte ~500-600€/jour. Sur 2 mois : ~20-24k€ (dans le budget restant si on ajuste le scope mineur).<br/>
    <strong>Critères de sélection :</strong> expérience React/TypeScript confirmée, capacité à reprendre un projet existant,
    références vérifiables.</p>
  </div>

  <h3 class="correction-subtitle">4. Communication au client</h3>
  <div class="example-box">
    <p><strong>Ce qu'on dit :</strong></p>
    <ul class="correction-list-compact">
      <li>"Suite à un changement dans l'équipe projet, nous avons mis en place un plan de continuité"</li>
      <li>"Un développeur senior expérimenté rejoint l'équipe sous 2 semaines"</li>
      <li>"La livraison prévue dans 3 semaines sera décalée d'une semaine (nouveau délai : 4 semaines)"</li>
      <li>"La qualité du livrable n'est pas compromise"</li>
    </ul>
    <p><strong>Ce qu'on ne dit PAS :</strong></p>
    <ul class="correction-list-compact">
      <li>Le nom du développeur parti ni les raisons de son départ</li>
      <li>Des détails sur les difficultés internes de l'équipe</li>
      <li>Des promesses non tenues ("aucun impact" alors qu'il y en a un)</li>
    </ul>
  </div>
</div>`
      },
      quiz: [
        {
          id: 'q-crise-11',
          question: 'Qu\'est-ce que le "bus factor" d\'un projet ?',
          options: [
            'Le nombre de bus nécessaires pour transporter l\'équipe',
            'Le nombre minimum de personnes dont l\'absence mettrait le projet en péril',
            'Le facteur de risque lié au transport des livrables',
            'Le nombre de compétences différentes dans l\'équipe'
          ],
          correctAnswer: 1,
          explanation: 'Le bus factor est le nombre minimum de personnes dont l\'absence simultanée bloquerait le projet. Un bus factor de 1 signifie qu\'une seule personne détient une compétence critique — c\'est un risque majeur.',
          difficulty: 'facile',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-12',
          question: 'Quelle est votre priorité absolue pendant ces 2 semaines ?',
          options: [
            'Chercher immédiatement un remplaçant sur LinkedIn',
            'Organiser un transfert de connaissances intensif avec le développeur partant',
            'Demander au développeur de terminer toutes les fonctionnalités en cours',
            'Informer immédiatement le client du départ'
          ],
          correctAnswer: 1,
          explanation: 'Le transfert de connaissances est la priorité n°1 car c\'est la seule chose qui a une deadline (le départ). Le recrutement peut commencer en parallèle, mais la documentation et le pair programming avec le développeur partant sont irremplaçables.',
          type: 'scenario',
          difficulty: 'difficile',
          category: 'gestion-projet',
          scenarioContext: 'Votre lead développeur, seul à maîtriser l\'architecture du projet, vient d\'annoncer sa démission avec un préavis de 2 semaines. Deux développeurs juniors restent dans l\'équipe. Le projet doit être livré dans 2 mois.'
        },
        {
          id: 'q-crise-13',
          question: 'Recruter un nouveau développeur permet de retrouver immédiatement la productivité perdue.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'Faux. Un nouveau développeur a besoin de 2 à 6 semaines de "ramp-up" pour comprendre le projet, le code existant, les conventions et les processus. Pendant cette période, il consomme aussi du temps des autres membres de l\'équipe qui doivent l\'accompagner.',
          type: 'true-false',
          difficulty: 'moyen',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-14',
          question: 'Quelle est la meilleure prévention contre les silos de connaissance dans une équipe ?',
          options: [
            'Interdire les congés pendant le projet',
            'Le pair programming et la documentation continue',
            'Embaucher uniquement des seniors',
            'Externaliser toutes les compétences critiques'
          ],
          correctAnswer: 1,
          explanation: 'Le pair programming diffuse naturellement les connaissances entre membres de l\'équipe, et la documentation continue garantit que le savoir persiste même après un départ. Ces deux pratiques augmentent le bus factor de manière organique.',
          difficulty: 'moyen',
          category: 'methodologie'
        }
      ]
    },

    // =============================================
    // SECTION 4 : Retard et dérive du planning
    // =============================================
    {
      id: 'crisis-planning',
      title: 'Retard et dérive du planning',
      content: `<div class="section-content">
  <h1 class="section-title">Gérer les retards et la dérive du planning</h1>

  <p class="section-text">
    Le retard est la crise la plus courante en gestion de projet web. Presque tous les projets prennent plus de temps que prévu.
    La question n'est pas <em>"est-ce que le projet sera en retard ?"</em> mais <em>"comment gérer le retard quand il arrivera ?"</em>.
    Le bon chef de projet sait <strong>détecter les signaux faibles</strong>, <strong>recalibrer le planning</strong>
    et <strong>communiquer proactivement</strong> avec le client.
  </p>

  <div class="story-box">
    <p class="story-title">La règle du 90-90</p>
    <p>
      Tom Cargill, ingénieur chez Bell Labs, a formulé cette observation devenue célèbre :
      <em>"Les premiers 90% du code prennent 90% du temps de développement. Les 10% restants prennent les 90% restants du temps."</em>
      Cette boutade illustre un phénomène réel : la fin d'un projet est toujours plus complexe qu'on ne l'imagine
      (intégration, tests, corrections de bugs, optimisation, déploiement).
      <strong>Les équipes qui estiment un projet à "presque fini" sous-estiment systématiquement le travail restant.</strong>
    </p>
  </div>

  <div class="stat-cards">
    <div class="stat-card">
      <div class="stat-value">71%</div>
      <div class="stat-label">des projets IT sont livrés en retard</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">x2</div>
      <div class="stat-label">le temps réel vs le temps estimé en moyenne</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">30%</div>
      <div class="stat-label">des retards viennent de dépendances externes</div>
    </div>
  </div>

  <div class="key-concept">
    <p class="concept-title">Concept clé : La loi de Hofstadter</p>
    <p>
      <em>"Ça prend toujours plus de temps que prévu, même en tenant compte de la loi de Hofstadter."</em>
      Cette loi récursive, formulée par Douglas Hofstadter, illustre le <strong>biais d'optimisme</strong> (ou planning fallacy) :
      nous sous-estimons systématiquement le temps nécessaire, même quand on sait qu'on sous-estime.
      C'est pourquoi les techniques d'estimation structurées (PERT, planning poker) sont essentielles.
    </p>
  </div>

  <h2 class="section-subtitle">Les causes de retard</h2>

  <div class="deliverables-grid" style="grid-template-columns: repeat(2, 1fr);">
    <div class="project-type">
      <h3 class="project-type-title">Causes internes</h3>
      <ul class="feature-list">
        <li><strong>Sous-estimation :</strong> biais d'optimisme dans les chiffrages</li>
        <li><strong>Dette technique :</strong> raccourcis qui ralentissent le développement</li>
        <li><strong>Perfectionnisme :</strong> sur-qualité non demandée</li>
        <li><strong>Manque de priorisation :</strong> tout est "urgent et important"</li>
      </ul>
    </div>
    <div class="project-type">
      <h3 class="project-type-title">Causes externes</h3>
      <ul class="feature-list">
        <li><strong>Scope creep :</strong> ajouts de fonctionnalités non planifiés</li>
        <li><strong>Validation client lente :</strong> attente de retours bloquants</li>
        <li><strong>Dépendances tierces :</strong> API externe en retard ou défaillante</li>
        <li><strong>Changement de priorités :</strong> le client change d'avis</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle">Techniques de rattrapage</h2>

  <div class="value-type">
    <h3 class="value-title">Fast Tracking (parallélisation)</h3>
    <p>Exécuter en parallèle des tâches initialement prévues en séquence.
    Exemple : commencer le développement frontend pendant que le backend n'est pas fini,
    en utilisant des données mockées. <strong>Risque :</strong> retravail si les spécifications changent.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Crashing (ajout de ressources)</h3>
    <p>Ajouter des ressources sur les tâches du chemin critique pour les accélérer.
    Exemple : faire intervenir un freelance sur l'intégration API pendant que l'équipe continue les features.
    <strong>Risque :</strong> coût supplémentaire + loi de Brooks si mal géré.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Réduction de scope</h3>
    <p>Retirer des fonctionnalités non essentielles du périmètre actuel (méthode MoSCoW).
    Exemple : reporter le blog et le programme de fidélité en V2.
    <strong>Avantage :</strong> pas de surcoût, livraison à l'heure avec un périmètre réduit mais fonctionnel.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Timeboxing (approche Agile)</h3>
    <p>Fixer le temps et ajuster le scope. Exemple : "On a 3 semaines, on livre ce qu'on peut dans ce délai."
    Combiné avec MoSCoW, c'est souvent la meilleure approche. <strong>Le temps est fixe, le scope est variable.</strong></p>
  </div>

  <div class="value-type">
    <h3 class="value-title">Négociation de délai</h3>
    <p>Demander une extension de deadline au client, avec justification factuelle et plan de rattrapage.
    <strong>Toujours accompagner la demande</strong> de : (1) les causes du retard, (2) ce qui a déjà été fait,
    (3) le nouveau planning réaliste, (4) les garanties de qualité.</p>
  </div>

  <div class="comparison-grid">
    <div class="comparison-before">
      <h4>Annonce de retard sans préparation</h4>
      <ul>
        <li>"On va être en retard, désolé"</li>
        <li>Pas de chiffres précis</li>
        <li>Pas de plan de rattrapage</li>
        <li>Client surpris et furieux</li>
        <li>Perte de confiance immédiate</li>
      </ul>
    </div>
    <div class="comparison-after">
      <h4>Annonce structurée avec plan</h4>
      <ul>
        <li>"Voici la situation factuelle et nos solutions"</li>
        <li>Chiffres précis (jours, budget, avancement)</li>
        <li>2-3 options de rattrapage</li>
        <li>Client informé et impliqué dans la décision</li>
        <li>Confiance renforcée par la transparence</li>
      </ul>
    </div>
  </div>

  <div class="warning-box">
    <p class="warning-title">La loi de Brooks</p>
    <p>
      <em>"Ajouter des personnes à un projet en retard le retarde davantage."</em> — Fred Brooks, The Mythical Man-Month (1975).
      Pourquoi ? Les nouveaux arrivants ont besoin d'être formés (ce qui prend du temps aux membres existants),
      et le nombre de canaux de communication augmente exponentiellement avec la taille de l'équipe
      (formule : n×(n-1)/2). Passer de 4 à 6 personnes = passer de 6 à 15 canaux de communication.
    </p>
  </div>

  <div class="tip-box">
    <p class="tip-title">Astuce : La technique des 3 estimations (PERT)</p>
    <p>
      Pour chaque tâche, demandez 3 estimations : <strong>Optimiste (O)</strong>, <strong>Probable (P)</strong>,
      <strong>Pessimiste (Ps)</strong>. L'estimation PERT = <strong>(O + 4P + Ps) / 6</strong>.
      Exemple : une intégration API estimée à 3j (optimiste), 5j (probable), 12j (pessimiste) = (3 + 20 + 12) / 6 = <strong>5,8 jours</strong>.
      C'est plus réaliste que le "5 jours" que l'équipe vous aurait donné spontanément.
    </p>
  </div>
</div>`,
      casePratique: {
        title: '3 semaines de retard à mi-projet',
        description: 'Analyser les causes d\'un retard et proposer un plan de rattrapage au client.',
        exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous gérez un projet e-commerce pour une marque de mode.</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Paramètres du projet</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Budget :</strong> 40 000 € — consommé à 55% (22 000 €)</li>
      <li><strong>Durée initiale :</strong> 4 mois</li>
      <li><strong>Avancement :</strong> Fin du mois 2</li>
      <li><strong>Retard accumulé :</strong> 3 semaines</li>
      <li><strong>Démo client :</strong> prévue dans 1 semaine</li>
    </ul>
  </div>

  <div class="bg-red-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-red-900 mb-2">Causes identifiées du retard</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Cause 1 (externe) :</strong> Le client a mis 2 semaines à valider les maquettes (au lieu de 3 jours prévus)</li>
      <li><strong>Cause 2 (interne) :</strong> Un développeur malade pendant 1 semaine</li>
      <li><strong>Cause 3 (technique) :</strong> L'intégration de l'API de paiement est plus complexe que prévu (+1 semaine estimée)</li>
    </ul>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Votre mission</h4>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
      <li>Classifiez chaque cause de retard (<strong>interne / externe / technique</strong>) et identifiez laquelle était évitable</li>
      <li>Proposez un plan de rattrapage utilisant au moins 2 techniques (fast-tracking, crashing, scope reduction, timeboxing)</li>
      <li>Que retirez-vous du scope si nécessaire ? Justifiez</li>
      <li>Préparez l'<strong>ordre du jour de la réunion client</strong> pour présenter la situation (5 points maximum)</li>
    </ol>
  </div>
</div>`,
        correction: `<div class="correction-content">
  <h2 class="correction-title">Correction : Plan de rattrapage des 3 semaines de retard</h2>

  <h3 class="correction-subtitle">1. Analyse des causes</h3>
  <ul class="correction-list">
    <li><strong>Validation maquettes (2 sem) — Externe, ÉVITABLE :</strong> Un SLA (Service Level Agreement) de validation à 3-5 jours ouvrés aurait dû être inscrit dans le contrat. Action future : inclure systématiquement des délais de validation contractuels.</li>
    <li><strong>Maladie développeur (1 sem) — Interne, NON ÉVITABLE :</strong> Risque classique. Devrait être couvert par la marge de contingence dans le planning.</li>
    <li><strong>Complexité API paiement (+1 sem) — Technique, PARTIELLEMENT ÉVITABLE :</strong> Un POC (proof of concept) en début de projet aurait permis d'identifier la complexité plus tôt. Action future : toujours commencer par les intégrations tierces.</li>
  </ul>

  <h3 class="correction-subtitle">2. Plan de rattrapage</h3>
  <div class="value-type">
    <h3 class="value-title">Technique 1 : Fast-tracking</h3>
    <p>Lancer les tests QA en parallèle du développement des dernières features (au lieu de séquentiellement).
    Le testeur commence à valider les pages déjà intégrées pendant que le développement continue.
    <strong>Gain estimé : 1 semaine.</strong></p>
  </div>
  <div class="value-type">
    <h3 class="value-title">Technique 2 : Crashing ciblé</h3>
    <p>Faire appel à un freelance spécialisé en intégration de passerelles de paiement pour débloquer l'API Stripe.
    Coût : ~3 000 € (pris sur la marge de contingence).
    <strong>Gain estimé : 1 semaine.</strong></p>
  </div>
  <div class="value-type">
    <h3 class="value-title">Technique 3 : Scope reduction</h3>
    <p>Reporter en V2 : le blog intégré et le programme de fidélité.
    Ces fonctionnalités ne sont pas essentielles au lancement de l'e-commerce.
    <strong>Gain estimé : 1 semaine.</strong></p>
  </div>

  <h3 class="correction-subtitle">3. Justification du scope reduction</h3>
  <ul class="correction-list">
    <li><strong>Blog :</strong> Ne génère pas de revenu direct au lancement. Peut être ajouté en V2 sans impact sur l'architecture existante.</li>
    <li><strong>Programme fidélité :</strong> Nécessite d'abord une base de clients actifs pour être pertinent. Le lancer à J+3 mois est même stratégiquement meilleur.</li>
    <li><strong>Ce qu'on GARDE :</strong> Catalogue produits, tunnel d'achat, paiement Stripe, recherche, admin — tout ce qui permet de vendre dès le jour 1.</li>
  </ul>

  <h3 class="correction-subtitle">4. Ordre du jour de la réunion client</h3>
  <ul class="correction-list">
    <li><strong>1. État d'avancement factuel</strong> (5 min) — Ce qui est fait, ce qui reste, taux d'avancement réel</li>
    <li><strong>2. Analyse du retard</strong> (5 min) — Les 3 causes identifiées, avec responsabilités partagées</li>
    <li><strong>3. Plan de rattrapage</strong> (10 min) — Les 3 techniques proposées avec gains estimés</li>
    <li><strong>4. Nouveau planning révisé</strong> (5 min) — Jalons recalés, date de livraison réaliste</li>
    <li><strong>5. Prochaines étapes et engagements mutuels</strong> (5 min) — SLA de validation côté client, points de suivi hebdomadaires</li>
  </ul>
</div>`
      },
      quiz: [
        {
          id: 'q-crise-15',
          question: 'Qu\'est-ce que le "fast-tracking" en gestion de projet ?',
          options: [
            'Augmenter la vitesse de codage de l\'équipe',
            'Exécuter en parallèle des tâches initialement prévues en séquence',
            'Supprimer les tâches non essentielles',
            'Ajouter des développeurs au projet'
          ],
          correctAnswer: 1,
          explanation: 'Le fast-tracking consiste à paralléliser des tâches qui étaient planifiées séquentiellement. Par exemple, commencer les tests pendant que le développement continue. Cela comporte un risque de retravail si les tâches parallélisées ont des dépendances.',
          difficulty: 'facile',
          category: 'methodologie'
        },
        {
          id: 'q-crise-16',
          question: 'Que dit la loi de Brooks sur l\'ajout de personnel à un projet en retard ?',
          options: [
            'Plus on ajoute de monde, plus le projet va vite',
            'Il faut toujours doubler l\'équipe en cas de retard',
            'Ajouter des personnes à un projet en retard le retarde davantage',
            'Le nombre optimal d\'une équipe projet est de 10 personnes'
          ],
          correctAnswer: 2,
          explanation: 'La loi de Brooks (The Mythical Man-Month, 1975) : ajouter du personnel à un projet en retard le retarde davantage. Les nouveaux arrivants doivent être formés (consommant du temps des membres existants) et la complexité de communication augmente exponentiellement.',
          difficulty: 'moyen',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-17',
          question: 'Quelle approche adoptez-vous pour la réunion client ?',
          options: [
            'Minimiser le retard et promettre de rattraper sans changer le périmètre',
            'Présenter un diagnostic factuel avec causes, impact et 2-3 scénarios de rattrapage',
            'Reporter la réunion jusqu\'à avoir résolu le problème',
            'Annoncer que le projet ne peut pas être livré dans les délais et attendre la réaction du client'
          ],
          correctAnswer: 1,
          explanation: 'La meilleure approche est d\'arriver préparé avec : les faits (chiffres d\'avancement), les causes (sans chercher de coupable), l\'impact (sur le planning et le budget), et des solutions concrètes. Le client doit pouvoir choisir parmi des options, pas subir une annonce passive.',
          type: 'scenario',
          difficulty: 'difficile',
          category: 'gestion-projet',
          scenarioContext: 'Votre projet e-commerce a accumulé 3 semaines de retard à mi-parcours. Les causes sont mixtes : 2 semaines de retard de validation client, 1 semaine de maladie d\'un développeur, et une intégration API plus complexe que prévu. Le client attend une démo dans 1 semaine.'
        },
        {
          id: 'q-crise-18',
          question: 'Le crashing (ajout de ressources) permet toujours de réduire la durée d\'un projet sans coût supplémentaire.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'Faux. Le crashing implique toujours un coût supplémentaire (freelances, heures sup, etc.) et n\'est efficace que sur les tâches du chemin critique. Ajouter des ressources sur des tâches non critiques ne réduit pas la durée du projet.',
          type: 'true-false',
          difficulty: 'facile',
          category: 'methodologie'
        },
        {
          id: 'q-crise-19',
          question: 'Quelle est la formule d\'estimation PERT ?',
          options: [
            '(Optimiste + Pessimiste) / 2',
            '(Optimiste + 4×Probable + Pessimiste) / 6',
            'Optimiste × Pessimiste × Probable',
            '(Optimiste + Probable + Pessimiste) / 3'
          ],
          correctAnswer: 1,
          explanation: 'La formule PERT pondère l\'estimation probable : (O + 4P + Ps) / 6. Le facteur 4 donne plus de poids à l\'estimation probable, tandis que les estimations optimiste et pessimiste encadrent le résultat. C\'est plus réaliste qu\'une simple moyenne.',
          difficulty: 'moyen',
          category: 'methodologie'
        }
      ]
    },

    // =============================================
    // SECTION 5 : Communication de crise et posture
    // =============================================
    {
      id: 'crisis-communication',
      title: 'Communication de crise et posture du chef de projet',
      content: `<div class="section-content">
  <h1 class="section-title">Communication de crise et posture du chef de projet</h1>

  <p class="section-text">
    La compétence la plus critique en gestion de crise n'est pas technique : c'est la <strong>communication</strong>.
    Comment vous annoncez une mauvaise nouvelle, comment vous gérez le stress de l'équipe et du client,
    et comment vous capitalisez sur la crise pour renforcer la confiance — tout cela fait la différence entre
    un projet sauvé et un projet perdu.
  </p>

  <div class="story-box">
    <p class="story-title">Le chef de projet qui a caché un retard</p>
    <p>
      Un CP junior gère un projet de refonte de site vitrine. Dès la 3e semaine, il constate un retard de 4 jours.
      "Je vais rattraper", se dit-il. Il ne dit rien au client. À la semaine 6, le retard est passé à 12 jours.
      Il cache encore, fait travailler l'équipe le week-end. À la semaine 10, le client découvre que le projet
      qui devait être livré dans 2 jours est en réalité à 3 semaines de la fin.
      <strong>Résultat : perte du contrat, pénalités de retard, et 2 développeurs en burnout.</strong>
      Si le CP avait communiqué dès la semaine 3, le retard de 4 jours aurait été absorbé
      par un simple ajustement de planning.
    </p>
  </div>

  <div class="key-concept">
    <p class="concept-title">Concept clé : Le modèle SCARF</p>
    <p>
      Le modèle SCARF (David Rock, 2008) identifie les 5 dimensions qui déclenchent le stress chez les parties prenantes :
    </p>
    <ul class="feature-list" style="margin-top: 8px;">
      <li><strong>S</strong>tatut — Le client se sent-il respecté et considéré ?</li>
      <li><strong>C</strong>ertitude — Le client sait-il à quoi s'attendre ?</li>
      <li><strong>A</strong>utonomie — Le client a-t-il le choix entre des options ?</li>
      <li><strong>R</strong>elation — Le client fait-il confiance à votre équipe ?</li>
      <li><strong>F</strong>airness (Équité) — Le client estime-t-il être traité justement ?</li>
    </ul>
    <p style="margin-top: 8px;">
      En situation de crise, cherchez à <strong>préserver ces 5 dimensions</strong> dans votre communication.
      Par exemple : donner le choix entre des scénarios (Autonomie), être transparent sur les causes (Équité),
      maintenir un ton professionnel (Statut).
    </p>
  </div>

  <h2 class="section-subtitle">Les 5 règles de la communication de crise</h2>

  <div class="value-type">
    <h3 class="value-title">1. Rapidité</h3>
    <p>Communiquez <strong>dès que le problème est identifié</strong>, pas quand vous avez la solution.
    Le client préfère apprendre tôt qu'il y a un risque de retard plutôt que de découvrir tard qu'il y a un retard avéré.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">2. Transparence</h3>
    <p>Dites la vérité, toute la vérité. Ne minimisez pas un retard de 2 semaines en "quelques jours".
    Ne cachez pas un dépassement de budget en espérant rattraper. <strong>La confiance perdue est presque impossible à regagner.</strong></p>
  </div>

  <div class="value-type">
    <h3 class="value-title">3. Responsabilité</h3>
    <p>Assumez sans chercher de coupable. Même si le client est en partie responsable (validation tardive),
    commencez par ce que VOUS allez faire, pas par ce que le client aurait dû faire.
    Le blâme est un réflexe toxique qui ne résout rien.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">4. Solutions</h3>
    <p><strong>Ne présentez jamais un problème sans proposer au moins une solution.</strong>
    Idéalement 2-3 options avec pros/cons. Le client a besoin de savoir que vous maîtrisez la situation,
    pas juste que vous avez identifié le problème.</p>
  </div>

  <div class="value-type">
    <h3 class="value-title">5. Suivi</h3>
    <p>Après l'annonce initiale, donnez des nouvelles <strong>régulièrement</strong> jusqu'à résolution.
    Un point de suivi quotidien ou bi-hebdomadaire pendant la crise. Le silence après une annonce de crise
    génère plus d'anxiété que la crise elle-même.</p>
  </div>

  <h2 class="section-subtitle">Structure d'une annonce de mauvaise nouvelle</h2>

  <div class="project-type">
    <h3 class="project-type-title">Les 7 points d'une communication de crise efficace</h3>
    <ul class="feature-list">
      <li><strong>1. Contexte factuel :</strong> chiffres, dates, état d'avancement réel</li>
      <li><strong>2. Le problème :</strong> clair, direct, sans minimiser ni dramatiser</li>
      <li><strong>3. L'impact :</strong> conséquences concrètes sur le délai, le budget, le périmètre</li>
      <li><strong>4. Les causes :</strong> analyse factuelle, sans blâme</li>
      <li><strong>5. Les solutions proposées :</strong> 2-3 options avec avantages et inconvénients</li>
      <li><strong>6. La recommandation :</strong> l'option que vous préconisez, et pourquoi</li>
      <li><strong>7. Les prochaines étapes :</strong> planning de suivi, prochaine réunion, engagements</li>
    </ul>
  </div>

  <h2 class="section-subtitle">Postures du chef de projet en crise</h2>

  <div class="comparison-grid">
    <div class="comparison-before">
      <h4>Mauvaises postures</h4>
      <ul>
        <li>Paniquer et transmettre son stress à l'équipe</li>
        <li>Blâmer un membre de l'équipe devant le client</li>
        <li>Cacher le problème en espérant qu'il se résolve</li>
        <li>Promettre un rattrapage miracle impossible</li>
        <li>S'isoler et ne plus communiquer</li>
        <li>Faire des heures supplémentaires sans fin</li>
      </ul>
    </div>
    <div class="comparison-after">
      <h4>Bonnes postures</h4>
      <ul>
        <li>Rester calme et factuel face au client</li>
        <li>Protéger l'équipe et assumer collectivement</li>
        <li>Communiquer tôt et régulièrement</li>
        <li>Proposer des solutions réalistes et honnêtes</li>
        <li>Fédérer l'équipe autour d'un plan de sortie de crise</li>
        <li>Surveiller la charge de travail et prévenir le burnout</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle">Le post-mortem (bilan de crise)</h2>

  <div class="project-type">
    <h3 class="project-type-title">Structure d'un bilan post-mortem</h3>
    <p style="margin-bottom: 12px;">Après chaque crise, organisez une réunion de retour d'expérience (30-60 min) :</p>
    <ul class="feature-list">
      <li><strong>Timeline factuelle :</strong> que s'est-il passé, quand, dans quel ordre ?</li>
      <li><strong>Ce qui a bien fonctionné :</strong> les décisions et réactions efficaces</li>
      <li><strong>Ce qui aurait pu être mieux :</strong> les points d'amélioration sans blâme</li>
      <li><strong>Lessons learned :</strong> les enseignements clés à capitaliser</li>
      <li><strong>Actions concrètes :</strong> ce qu'on met en place pour éviter que ça se reproduise</li>
    </ul>
    <p style="margin-top: 12px;"><strong>Règle d'or :</strong> un post-mortem n'est PAS un tribunal. C'est un outil d'apprentissage collectif.
    Interdisez le blâme individuel.</p>
  </div>

  <div class="warning-box">
    <p class="warning-title">Ne jamais faire de promesses irréalistes sous pression</p>
    <p>
      Quand le client est furieux et exige une livraison "pour hier", il est tentant de promettre un miracle
      pour calmer la situation. Résistez. Une promesse non tenue fait plus de dégâts qu'une vérité inconfortable.
      <strong>Mieux vaut sous-promettre et sur-délivrer que l'inverse.</strong>
    </p>
  </div>

  <div class="tip-box">
    <p class="tip-title">Astuce : La méthode du "sandwich" n'est PAS adaptée en crise</p>
    <p>
      La méthode du sandwich (bonne nouvelle → mauvaise nouvelle → bonne nouvelle) fonctionne pour du feedback managérial,
      mais en situation de crise, elle est perçue comme de la manipulation. <strong>Soyez direct.</strong>
      Commencez par le problème, enchaînez avec les solutions. Les clients et parties prenantes respectent
      l'honnêteté frontale beaucoup plus que l'enrobage diplomatique.
    </p>
  </div>
</div>`,
      casePratique: {
        title: 'Annonce d\'une crise multiple au client',
        description: 'Préparer un comité de pilotage face à trois crises simultanées.',
        exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous êtes CP sur un projet SaaS d'envergure.</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Paramètres du projet</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li><strong>Budget :</strong> 120 000 € — 65 000 € consommés (mois 5 sur 8)</li>
      <li><strong>Équipe :</strong> 1 CP, 1 lead backend, 1 dev frontend, 1 designer, 1 testeur QA</li>
      <li><strong>État du projet :</strong> Plateforme fonctionnelle à 60%, tests utilisateurs prévus mois 6</li>
      <li><strong>COPIL (comité de pilotage) :</strong> dans 2 jours</li>
    </ul>
  </div>

  <div class="bg-red-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-red-900 mb-2">Les 3 crises simultanées</h4>
    <div class="space-y-3">
      <div>
        <p class="font-semibold text-red-800">Crise 1 : Démission du lead backend</p>
        <p class="text-gray-800">Marc, votre lead backend (le seul sur la partie serveur et base de données), annonce sa démission. Préavis : 1 mois.</p>
      </div>
      <div>
        <p class="font-semibold text-red-800">Crise 2 : Faille de sécurité critique</p>
        <p class="text-gray-800">L'audit de sécurité (prévu dans le planning) révèle une faille d'injection SQL critique dans le module d'authentification. Estimation de correction : 2 semaines de travail.</p>
      </div>
      <div>
        <p class="font-semibold text-red-800">Crise 3 : Nouvelles exigences du CEO</p>
        <p class="text-gray-800">Le CEO du client envoie un email listant 3 nouvelles fonctionnalités "absolument essentielles pour le lancement" : tableau de bord analytics, export PDF des rapports, intégration Zapier.</p>
      </div>
    </div>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Votre mission</h4>
    <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
      <li>Préparez la <strong>structure de votre présentation COPIL</strong> (plan en 5-7 points avec messages clés)</li>
      <li>Proposez une <strong>stratégie de priorisation</strong> des 3 crises (ordre de traitement et justification)</li>
      <li>Rédigez le contenu des <strong>3 premières slides</strong> de votre présentation (titres + bullets points clés)</li>
      <li>Comment <strong>protégez-vous votre équipe</strong> du burnout pendant cette période de crise ?</li>
    </ol>
  </div>
</div>`,
        correction: `<div class="correction-content">
  <h2 class="correction-title">Correction : Gestion de la crise multiple</h2>

  <h3 class="correction-subtitle">1. Structure du COPIL</h3>
  <ul class="correction-list">
    <li><strong>Slide 1 — État d'avancement global</strong> (3 min) : Ce qui est livré, taux d'avancement réel, points positifs</li>
    <li><strong>Slide 2 — Situation de crise</strong> (5 min) : Présentation factuelle des 3 problèmes, sans dramatiser</li>
    <li><strong>Slide 3 — Priorisation et plan d'action</strong> (5 min) : Ordre de traitement, justification, timeline</li>
    <li><strong>Slide 4 — Impact sur le planning</strong> (5 min) : Nouveau planning réaliste, jalons recalés</li>
    <li><strong>Slide 5 — Nouvelles demandes (scope)</strong> (5 min) : Analyse des 3 fonctionnalités demandées, coût, proposition V2</li>
    <li><strong>Slide 6 — Recommandations et prochaines étapes</strong> (5 min) : Ce qu'on demande au client, engagements mutuels</li>
    <li><strong>Slide 7 — Questions / Discussion</strong> (10 min)</li>
  </ul>

  <h3 class="correction-subtitle">2. Stratégie de priorisation</h3>
  <div class="value-type">
    <h3 class="value-title">Priorité 1 : Faille de sécurité (immédiat)</h3>
    <p><strong>Justification :</strong> Une faille d'injection SQL est un risque juridique et réputationnel CRITIQUE.
    Si la plateforme est mise en production avec cette faille, les données utilisateurs sont en danger (violation RGPD possible).
    C'est la seule crise qui est <strong>non-négociable</strong>. Action : Marc (le lead backend) commence la correction immédiatement —
    c'est sa priorité n°1 avant même le transfert de connaissances.</p>
  </div>
  <div class="value-type">
    <h3 class="value-title">Priorité 2 : Transfert de connaissances de Marc (semaines 1-4)</h3>
    <p><strong>Justification :</strong> Marc a 1 mois de préavis. Chaque jour qui passe sans transfert est du savoir perdu.
    Planning : semaine 1 = correction faille (en pair programming avec le dev frontend pour transférer les connaissances backend),
    semaines 2-3 = documentation architecture + sessions de formation, semaine 4 = le remplaçant freelance fait son onboarding avec Marc encore présent.</p>
  </div>
  <div class="value-type">
    <h3 class="value-title">Priorité 3 : Nouvelles demandes du CEO (backlog V2)</h3>
    <p><strong>Justification :</strong> Ces fonctionnalités ne sont PAS dans le CDC signé. Elles doivent être traitées comme un changement de périmètre formel.
    Proposition : les 3 fonctionnalités sont estimées et chiffrées (avenant au contrat), puis programmées en V2 post-lancement.
    Si le CEO insiste, une seule peut être intégrée en V1 (la plus simple : export PDF) en échange d'un report de deadline de 2 semaines.</p>
  </div>

  <h3 class="correction-subtitle">3. Contenu des 3 premières slides</h3>
  <div class="example-box">
    <p><strong>Slide 1 : État d'avancement</strong></p>
    <ul class="correction-list-compact">
      <li>Plateforme fonctionnelle à 60% — modules utilisateurs, authentification et gestion des comptes opérationnels</li>
      <li>Budget consommé : 65 000 € / 120 000 € (54%) — en ligne avec l'avancement</li>
      <li>Tests utilisateurs maintenus pour le mois 6 (avec ajustement de scope possible)</li>
    </ul>
  </div>
  <div class="example-box">
    <p><strong>Slide 2 : Points d'attention</strong></p>
    <ul class="correction-list-compact">
      <li>Transition équipe : un membre senior quitte le projet (préavis 1 mois) — plan de remplacement activé</li>
      <li>Sécurité : audit proactif a identifié un point de renforcement — correction en cours (2 semaines)</li>
      <li>Périmètre : nouvelles demandes reçues — analyse d'impact en cours</li>
    </ul>
  </div>
  <div class="example-box">
    <p><strong>Slide 3 : Plan d'action priorisé</strong></p>
    <ul class="correction-list-compact">
      <li>Semaine 1-2 : Correction sécurité (priorité absolue, non négociable)</li>
      <li>Semaine 1-4 : Transfert de connaissances + recrutement freelance senior</li>
      <li>Semaine 3 : Estimation et chiffrage des nouvelles demandes (avenant proposé)</li>
      <li>Impact planning : +2 semaines sur la date de livraison initiale</li>
    </ul>
  </div>

  <h3 class="correction-subtitle">4. Protection de l'équipe contre le burnout</h3>
  <ul class="correction-list">
    <li><strong>Limiter les heures sup :</strong> Maximum 1 semaine de "crunch" autorisée, puis retour aux horaires normaux. Pas de week-ends travaillés sauf urgence sécurité.</li>
    <li><strong>Communication interne transparente :</strong> Expliquer la situation à toute l'équipe, pas juste les managers. L'incertitude génère plus de stress que la mauvaise nouvelle.</li>
    <li><strong>Reprioriser impitoyablement :</strong> Geler toutes les tâches non critiques. L'équipe ne fait que 3 choses : sécurité, transfert, et features critiques V1.</li>
    <li><strong>Célébrer les petites victoires :</strong> Faille corrigée ? On fête. Documentation terminée ? On fête. Le moral de l'équipe se maintient par la reconnaissance.</li>
    <li><strong>Point individuel hebdomadaire :</strong> 15 min avec chaque membre pour prendre la température et détecter les signaux de surcharge.</li>
  </ul>
</div>`
      },
      quiz: [
        {
          id: 'q-crise-20',
          question: 'Quelle est la première règle de la communication de crise ?',
          options: [
            'Trouver une solution avant de communiquer',
            'Minimiser le problème pour ne pas inquiéter le client',
            'Communiquer rapidement, dès que le problème est identifié',
            'Attendre que le manager valide le message'
          ],
          correctAnswer: 2,
          explanation: 'La rapidité est la règle n°1. Communiquez dès que le problème est identifié, même sans avoir encore la solution. Le client préfère être informé tôt d\'un risque plutôt que de découvrir tard un problème avéré.',
          difficulty: 'facile',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-21',
          question: 'Comment priorisez-vous les 3 crises pour le COPIL ?',
          options: [
            'Nouvelles fonctionnalités d\'abord (satisfaire le CEO), puis sécurité, puis remplacement',
            'Remplacement du développeur d\'abord, puis sécurité, puis nouvelles fonctionnalités',
            'Faille de sécurité d\'abord (risque juridique), puis transfert de connaissances, puis nouvelles fonctionnalités en backlog V2',
            'Tout traiter en parallèle immédiatement'
          ],
          correctAnswer: 2,
          explanation: 'La faille de sécurité est non-négociable (risque juridique RGPD). Le transfert de connaissances a une deadline naturelle (départ du dev). Les nouvelles fonctionnalités du CEO sont un changement de périmètre qui relève du processus normal de change request, pas de la gestion de crise.',
          type: 'scenario',
          difficulty: 'difficile',
          category: 'gestion-projet',
          scenarioContext: 'Vous êtes CP sur un projet SaaS à 120k€. Au mois 5/8, trois crises frappent simultanément : (1) votre lead backend démissionne avec 1 mois de préavis, (2) un audit révèle une faille d\'injection SQL critique, (3) le CEO du client exige 3 nouvelles fonctionnalités "essentielles". Le COPIL est dans 2 jours.'
        },
        {
          id: 'q-crise-22',
          question: 'Il faut toujours avoir une solution complète avant d\'annoncer un problème au client.',
          options: ['Vrai', 'Faux'],
          correctAnswer: 1,
          explanation: 'Faux. Attendre d\'avoir la solution parfaite retarde la communication et aggrave la crise. Il est préférable d\'informer tôt avec un diagnostic factuel et des pistes de solution, puis de revenir avec un plan détaillé. La transparence précoce préserve la confiance.',
          type: 'true-false',
          difficulty: 'moyen',
          category: 'gestion-projet'
        },
        {
          id: 'q-crise-23',
          question: 'Quel est l\'objectif principal d\'un post-mortem après une crise ?',
          options: [
            'Identifier et sanctionner les responsables de la crise',
            'Capitaliser sur l\'expérience pour éviter que la même crise se reproduise',
            'Rédiger un rapport pour la direction',
            'Évaluer la performance individuelle de chaque membre'
          ],
          correctAnswer: 1,
          explanation: 'Le post-mortem est un outil d\'apprentissage collectif, pas un tribunal. Son objectif est d\'analyser ce qui s\'est passé, ce qui a bien fonctionné dans la réponse, et ce qu\'on peut améliorer. Le blâme individuel est contre-productif et doit être interdit.',
          difficulty: 'moyen',
          category: 'methodologie'
        },
        {
          id: 'q-crise-24',
          question: 'Laquelle de ces postures N\'EST PAS adaptée pour un chef de projet en situation de crise ?',
          options: [
            'Rester calme et factuel face au client',
            'Promettre un délai de rattrapage ambitieux pour rassurer le client',
            'Protéger l\'équipe et assumer collectivement',
            'Communiquer de manière proactive et régulière'
          ],
          correctAnswer: 1,
          explanation: 'Promettre un rattrapage miracle sous pression est une posture toxique. Si la promesse n\'est pas tenue (ce qui est probable en situation de crise), la confiance sera doublement entamée : par le problème initial ET par la promesse non tenue. Mieux vaut sous-promettre et sur-délivrer.',
          difficulty: 'moyen',
          category: 'gestion-projet'
        }
      ]
    }
  ]
}

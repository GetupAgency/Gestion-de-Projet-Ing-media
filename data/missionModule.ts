import { Module } from './modules'

export const missionModule: Module = {
  id: 'mission-individuelle',
  title: 'Mission Individuelle',
  description: 'Répondez à un appel d\'offres complet et élaborez un cahier des charges professionnel',
  sections: [
    {
      id: 'intro-mission',
      title: 'Présentation de la mission',
      content: `<div class="section-content">
  <h1 class="section-title">Mission Individuelle : Répondre à un Appel d'Offres</h1>

  <h2 class="section-subtitle">🎯 Objectif de la mission</h2>

  <p class="section-text">
    Cette mission vous met en situation professionnelle réelle : vous allez répondre à un appel d'offres 
    pour un projet SaaS complexe, comme le ferait une agence web ou un freelance.
  </p>

  <div class="value-type">
    <h3 class="value-title">Vous devrez démontrer votre capacité à :</h3>
    <ul class="feature-list">
      <li>Analyser un besoin client complexe</li>
      <li>Poser les bonnes questions complémentaires</li>
      <li>Concevoir une solution technique adaptée</li>
      <li>Créer des wireframes pertinents</li>
      <li>Établir un planning réaliste</li>
      <li>Chiffrer précisément un projet</li>
      <li>Présenter votre agence et votre équipe de manière convaincante</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">📦 Les livrables attendus</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Analyse du brief</h4>
      <ul class="deliverable-list">
        <li>Compréhension du contexte</li>
        <li>Identification des enjeux</li>
        <li>Questions au client (15-20 questions)</li>
        <li>Analyse des risques</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Wireframes</h4>
      <ul class="deliverable-list">
        <li>10-20 écrans clés minimum</li>
        <li>Parcours utilisateurs</li>
        <li>Ergonomie réfléchie</li>
        <li>Annotations pertinentes</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Architecture technique</h4>
      <ul class="deliverable-list">
        <li>Stack technologique</li>
        <li>Schéma d'architecture</li>
        <li>Choix justifiés</li>
        <li>Sécurité et scalabilité</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Planning</h4>
      <ul class="deliverable-list">
        <li>Découpage en phases</li>
        <li>Sprints détaillés</li>
        <li>Jalons et livrables</li>
        <li>Diagramme de Gantt</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">5. Budget</h4>
      <ul class="deliverable-list">
        <li>Chiffrage détaillé par phase</li>
        <li>Répartition par métier</li>
        <li>Jours/homme estimés</li>
        <li>Transparence des coûts</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">6. Présentation agence</h4>
      <ul class="deliverable-list">
        <li>Votre agence (fictive)</li>
        <li>Composition de l'équipe</li>
        <li>Références et expertises</li>
        <li>Valeur ajoutée</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">📊 Grille d'évaluation</h2>

  <p class="section-text">
    Chaque projet d'appel d'offres possède sa propre grille d'évaluation avec des critères pondérés.
    Vous devrez auto-évaluer votre réponse selon cette grille à la fin de votre travail.
  </p>

  <div class="project-type">
    <h3 class="project-type-title">Critères généraux d'évaluation</h3>
    <div class="project-detail">
      <strong>Les critères incluent généralement :</strong>
      <ul class="feature-list">
        <li><strong>Compréhension du besoin</strong> (20-25%) : Avez-vous bien saisi les enjeux ?</li>
        <li><strong>Proposition technique</strong> (20-25%) : Votre solution est-elle pertinente ?</li>
        <li><strong>UX/Wireframes</strong> (15%) : Vos wireframes sont-ils de qualité ?</li>
        <li><strong>Planning</strong> (15%) : Votre planification est-elle réaliste ?</li>
        <li><strong>Budget</strong> (10%) : Votre chiffrage est-il cohérent ?</li>
        <li><strong>Équipe/Agence</strong> (10%) : Êtes-vous crédible ?</li>
        <li><strong>Qualité du document</strong> (5%) : Votre réponse est-elle professionnelle ?</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">⏱️ Durée et modalités</h2>

  <div class="example-box">
    <strong>Temps recommandé :</strong> 2-3 jours de travail intensif
    <br><br>
    <strong>Format de rendu :</strong> Document PDF professionnel (40-60 pages) + fichiers wireframes
    <br><br>
    <strong>Présentation orale :</strong> 15-20 minutes de présentation + 10 minutes de questions
    <br><br>
    <strong>Travail :</strong> Individuel (simule une situation réelle où vous seriez chef de projet)
  </div>

  <h2 class="section-subtitle mt-8">💡 Conseils pour réussir</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Lisez attentivement le brief</strong> : Ne ratez aucun détail important</li>
      <li><strong>Projetez-vous en professionnel</strong> : Vous êtes une vraie agence qui veut gagner ce projet</li>
      <li><strong>Soyez créatif mais réaliste</strong> : Proposez des solutions innovantes mais faisables</li>
      <li><strong>Justifiez vos choix</strong> : Chaque décision technique doit être argumentée</li>
      <li><strong>Soignez la forme</strong> : Un document professionnel fait la différence</li>
      <li><strong>Gérez les risques</strong> : Identifiez les points d'attention et proposez des solutions</li>
      <li><strong>Pensez ROI client</strong> : Montrez comment votre solution apporte de la valeur</li>
    </ul>
  </div>

  <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mt-8 text-white">
    <h3 class="text-2xl font-bold mb-3">🚀 Prêt à démarrer ?</h3>
    <p class="text-lg">
      Cliquez sur "Suivant" pour choisir votre projet d'appel d'offres et commencer votre mission !
    </p>
  </div>
</div>`,
      quiz: [
        {
          id: 'q-mission-1',
          question: 'Quel est l\'objectif principal d\'un cahier des charges en réponse à un appel d\'offres ?',
          options: [
            'Faire le maximum de pages pour impressionner le jury et justifier le prix',
            'Copier ce que font les concurrents en ajustant le prix vers le bas',
            'Répondre sans poser de questions pour montrer qu’on a tout compris',
            'Démontrer sa compréhension du besoin et proposer la bonne solution'
          ],
          correctAnswer: 3,
          explanation: 'Un bon CDC démontre votre compréhension du besoin client, votre capacité à poser les bonnes questions, et propose une solution adaptée, réaliste et chiffrée.'
        },
        {
          id: 'q-mission-2',
          question: 'Pourquoi est-il important de poser des questions complémentaires au client ?',
          options: [
            'Pour gagner du temps sur la rédaction de la réponse',
            'Pour lever les zones d’ombre et éviter les malentendus',
            'Ce n’est pas important : le cahier des charges du client suffit toujours',
            'Pour montrer au client qu’on n’a pas compris sa demande'
          ],
          correctAnswer: 1,
          explanation: 'Poser des questions pertinentes montre votre professionnalisme, permet de clarifier les ambiguïtés et évite les malentendus qui pourraient coûter cher en développement.'
        },
        {
          id: 'q-mission-3',
          question: 'Que doit contenir un wireframe de qualité ?',
          options: [
            'Uniquement des rectangles gris, sans texte ni annotation',
            'Les couleurs finales du design et la typographie choisie',
            'La structure, le contenu et des annotations sur les interactions',
            'Juste le logo et la navigation principale, le reste vient après'
          ],
          correctAnswer: 2,
          explanation: 'Un bon wireframe montre la structure de la page, l\'organisation du contenu, la hiérarchie de l\'information et inclut des annotations pour expliquer les interactions et comportements.'
        },
        {
          id: 'q-mission-4',
          question: 'Comment chiffrer un projet de manière professionnelle ?',
          options: [
            'Donner un prix au hasard puis l’ajuster selon la réaction du client',
            'Copier les prix des concurrents trouvés sur leurs sites',
            'Multiplier le budget annoncé par le client par 0,8 pour être choisi',
            'Estimer les jours par tâche, appliquer le TJM, ajouter une marge'
          ],
          correctAnswer: 3,
          explanation: 'Un chiffrage professionnel décompose le projet en tâches, estime le temps nécessaire par métier, applique les taux journaliers et inclut une marge pour les imprévus.'
        },
        {
          id: 'q-mission-5',
          question: 'Quelle est l\'erreur la plus fréquente dans une réponse à appel d\'offres ?',
          options: [
            'Proposer une solution technique sans expliquer sa valeur pour le client',
            'Faire trop de wireframes et noyer le jury sous les écrans',
            'Être trop transparent sur les coûts en détaillant chaque ligne du devis au centime',
            'Poser trop de questions au client avant de répondre'
          ],
          correctAnswer: 0,
          explanation: 'L\'erreur classique est de se focaliser sur la technique sans expliquer en quoi cela apporte de la valeur au client. Il faut toujours lier technique et bénéfices business.'
        }
      ]
    }
  ]
}


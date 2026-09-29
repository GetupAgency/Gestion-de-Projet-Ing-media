import { Module } from './modules'

export const missionModule: Module = {
  id: 'mission-individuelle',
  title: 'Mission · Perdu de vue',
  description: 'Une journée en agence : entretien client, note d’intention, prototype, rétroplanning et budget pour le bureau des objets trouvés',
  sections: [
    {
      id: 'intro-mission',
      title: 'Présentation de la mission',
      content: `<div class="section-content">
  <h1>Perdu de vue : répondre à une commande publique fictive</h1>
  <p>La Métropole souhaite aider ses habitants à retrouver leurs objets perdus et simplifier le travail de ses agents. Votre agence dispose d’une journée de 7 h pour lui proposer un service réalisable, avec un usage pertinent de l’IA.</p>
  <h2>Une mission, cinq livrables</h2>
  <ul>
    <li><strong>Une analyse du brief et un entretien :</strong> questions utiles, réponses du client et décisions à prendre.</li>
    <li><strong>Une note d’intention :</strong> problème, proposition, périmètre et engagements à valider.</li>
    <li><strong>Un prototype navigable :</strong> le parcours d’un habitant, son traitement côté agent et une situation difficile.</li>
    <li><strong>Un rétroplanning :</strong> étapes, responsables, charges, dépendances, validations et marge avant l’ouverture.</li>
    <li><strong>Une enveloppe budgétaire détaillée :</strong> réalisation, trois mois de fonctionnement, réserve et options séparées.</li>
  </ul>
  <h2>Travaillez comme une agence</h2>
  <p>Constituez des équipes de 3 à 4. L’enseignant joue le commanditaire. Posez vos questions, choisissez votre première version, faites évoluer le prototype, le planning et le budget ensemble. Le déroulé reste souple ; la restitution est adaptée au nombre d’équipes.</p>
  <p>Les données sont fictives et les réponses de l’IA peuvent être simulées. Le budget porte sur le service réel à réaliser après la journée. Vous devez pouvoir défendre vos choix.</p>
  <p><a href="/mission" class="btn btn--primary">Ouvrir la mission Perdu de vue</a></p>
  <p>Le contrôle ci-dessous permet de revoir les principes d’une réponse client avant de commencer.</p>
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


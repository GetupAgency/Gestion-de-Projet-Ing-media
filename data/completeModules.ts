import { Module } from './modules'

// Modules enrichis avec le contenu détaillé du cours
export const completeModules: Module[] = [
  {
    id: 'intro',
    title: 'Introduction à la gestion de projet web',
    description: 'Comprendre ce qu\'est un projet digital et la notion de valeur',
    sections: [
      {
        id: 'definition-projet',
        title: 'Définition d\'un projet web',
        content: `<div class="section-content">
  <h1 class="section-title">Qu'est-ce qu'un projet web ?</h1>

  <h2 class="section-subtitle">Définition simple</h2>

  <p class="section-text">Un projet web est une initiative temporaire visant à créer un produit ou service numérique accessible via Internet. Il a un début, une fin, des objectifs précis et mobilise des ressources limitées (temps, budget, équipe).</p>

  <h2 class="section-subtitle mt-8">Les différents types de projets web</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Site Vitrine</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Présenter une entreprise, ses services, son savoir-faire
    </div>

    <div class="project-detail">
      <strong>Caractéristiques :</strong>
      <ul class="feature-list">
        <li>5 à 20 pages en moyenne</li>
        <li>Contenu principalement informatif</li>
        <li>Formulaire de contact</li>
        <li>Optimisation SEO importante</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Exemple :</strong> Site d'un restaurant, d'un artisan, d'un cabinet d'avocats
    </div>

    <div class="project-detail">
      <strong>Budget moyen :</strong> <span class="budget">3 000€ - 15 000€</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. E-commerce</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Vendre des produits ou services en ligne
    </div>

    <div class="project-detail">
      <strong>Caractéristiques :</strong>
      <ul class="feature-list">
        <li>Catalogue produits</li>
        <li>Panier et paiement en ligne</li>
        <li>Gestion des stocks</li>
        <li>Espace client</li>
        <li>Sécurité renforcée (HTTPS, PCI-DSS)</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Exemple :</strong> Boutique de vêtements, marketplace
    </div>

    <div class="project-detail">
      <strong>Budget moyen :</strong> <span class="budget">10 000€ - 100 000€+</span>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Application Métier</h3>
    
    <div class="project-detail">
      <strong>Objectif :</strong> Répondre à un besoin spécifique d'une entreprise ou organisation
    </div>

    <div class="project-detail">
      <strong>Caractéristiques :</strong>
      <ul class="feature-list">
        <li>Fonctionnalités sur mesure</li>
        <li>Gestion des rôles et permissions</li>
        <li>Souvent des APIs</li>
        <li>Intégrations avec d'autres systèmes</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Exemple :</strong> CRM, ERP, plateforme de gestion interne, SaaS
    </div>

    <div class="project-detail">
      <strong>Budget moyen :</strong> <span class="budget">20 000€ - 500 000€+</span>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Qu'est-ce que la valeur pour un client ?</h2>

  <p class="section-text">La valeur d'un projet web se mesure différemment selon les objectifs :</p>

  <div class="value-type">
    <h3 class="value-title">1. Conversion</h3>
    <ul class="feature-list">
      <li>Transformer les visiteurs en clients</li>
      <li>Taux de conversion</li>
      <li>Chiffre d'affaires généré</li>
      <li>ROI (Return On Investment)</li>
    </ul>
    <div class="example-box">
      <strong>Exemple :</strong> Un e-commerce qui passe de 1% à 2,5% de conversion double son CA
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">2. Expérience Utilisateur</h3>
    <ul class="feature-list">
      <li>Facilité d'utilisation</li>
      <li>Satisfaction client (NPS)</li>
      <li>Réduction du taux de rebond</li>
      <li>Temps passé sur le site</li>
    </ul>
    <div class="example-box">
      <strong>Exemple :</strong> Réduire le temps de réservation de 5 à 2 minutes
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">3. Performance</h3>
    <ul class="feature-list">
      <li>Temps de chargement</li>
      <li>Disponibilité (uptime)</li>
      <li>Capacité à gérer la charge</li>
      <li>Score Lighthouse</li>
    </ul>
    <div class="example-box">
      <strong>Exemple :</strong> Passer de 8s à 2s de temps de chargement = -30% de rebond
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">4. Visibilité</h3>
    <ul class="feature-list">
      <li>Positionnement SEO</li>
      <li>Trafic organique</li>
      <li>Notoriété de marque</li>
      <li>Portée sur les réseaux sociaux</li>
    </ul>
    <div class="example-box">
      <strong>Exemple :</strong> Passer de la page 3 à la page 1 de Google = +300% de trafic
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Les livrables clés d'un projet web</h2>

  <p class="section-text">Tout au long du projet, plusieurs livrables sont produits :</p>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de lancement</h4>
      <ul class="deliverable-list">
        <li>Cahier des charges</li>
        <li>Audit de l'existant</li>
        <li>Personas</li>
        <li>Planning prévisionnel</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de conception</h4>
      <ul class="deliverable-list">
        <li>Wireframes</li>
        <li>Maquettes graphiques</li>
        <li>Prototype interactif</li>
        <li>Spécifications techniques</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de développement</h4>
      <ul class="deliverable-list">
        <li>Code source</li>
        <li>Base de données</li>
        <li>Intégrations</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de test</h4>
      <ul class="deliverable-list">
        <li>Plan de test</li>
        <li>Rapport de bugs</li>
        <li>PV de recette</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de lancement</h4>
      <ul class="deliverable-list">
        <li>Site en production</li>
        <li>Documentation</li>
        <li>Formation client</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Phase de suivi</h4>
      <ul class="deliverable-list">
        <li>Rapports de monitoring</li>
        <li>Bilan de projet</li>
      </ul>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Analyser trois projets différents',
          description: 'Identifier les enjeux spécifiques de chaque type de projet',
          exercice: `<div class="cas-pratique-content">
  <h3 class="cas-pratique-subtitle">Projet A : Site vitrine d'un architecte</h3>
  <p><strong>Contexte :</strong> Cabinet d'architecture avec 3 associés, 15 ans d'expérience</p>
  <p><strong>Besoin :</strong> Montrer leur portfolio, attirer de nouveaux clients</p>
  <p><strong>Budget :</strong> 8 000€</p>

  <h3 class="cas-pratique-subtitle mt-6">Projet B : E-commerce de cosmétiques bio</h3>
  <p><strong>Contexte :</strong> Jeune marque, 50 produits, actuellement sur les marchés</p>
  <p><strong>Besoin :</strong> Vendre en ligne, livraison France, paiement sécurisé</p>
  <p><strong>Budget :</strong> 25 000€</p>

  <h3 class="cas-pratique-subtitle mt-6">Projet C : Application de gestion de chantier</h3>
  <p><strong>Contexte :</strong> Entreprise BTP avec 50 employés</p>
  <p><strong>Besoin :</strong> Suivre les chantiers, gérer les équipes, facturation</p>
  <p><strong>Budget :</strong> 80 000€</p>

  <hr class="my-6 border-purple-200">

  <h4 class="font-bold text-purple-900 mb-3">Questions :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Pour chaque projet, identifiez les <strong>3 enjeux principaux</strong></li>
    <li>Quelle est la <strong>valeur attendue</strong> pour chaque client ?</li>
    <li>Quels sont les <strong>risques spécifiques</strong> à chaque type de projet ?</li>
    <li>Estimez le <strong>délai de réalisation</strong> pour chaque projet</li>
    <li>Quelles <strong>compétences</strong> sont prioritaires pour chaque projet ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">PROJET A : Site vitrine d'un architecte</h2>

  <h3 class="correction-subtitle">Enjeux principaux :</h3>
  <ol class="correction-list">
    <li><strong>Portfolio visuel attractif :</strong> Mettre en valeur les réalisations avec de belles photos</li>
    <li><strong>SEO local :</strong> Se positionner sur "architecte [ville]" pour attirer des clients locaux</li>
    <li><strong>Crédibilité :</strong> Inspirer confiance avec un site professionnel et épuré</li>
  </ol>

  <h3 class="correction-subtitle">Valeur attendue :</h3>
  <ul class="correction-list">
    <li><strong>Visibilité :</strong> Être trouvé sur Google par des clients potentiels</li>
    <li><strong>Conversion :</strong> Transformer les visiteurs en demandes de devis</li>
    <li><strong>Image de marque :</strong> Refléter le professionnalisme du cabinet</li>
  </ul>

  <h3 class="correction-subtitle">Risques spécifiques :</h3>
  <ul class="correction-list">
    <li>Qualité des photos insuffisante (prévoir un photographe pro)</li>
    <li>Temps de chargement élevé avec de nombreuses images HD</li>
    <li>Client indécis sur le design (prévoir max 2 allers-retours)</li>
  </ul>

  <h3 class="correction-subtitle">Délai estimé : <span class="highlight">6-8 semaines</span></h3>
  <ul class="correction-list-compact">
    <li>1 semaine : Cadrage et wireframes</li>
    <li>2 semaines : Design et validation</li>
    <li>2 semaines : Développement</li>
    <li>1 semaine : Intégration contenu et tests</li>
  </ul>

  <h3 class="correction-subtitle">Compétences prioritaires :</h3>
  <ul class="correction-list">
    <li><strong>UX/UI Designer :</strong> Pour un design haut de gamme</li>
    <li><strong>Intégrateur :</strong> Maîtrise du responsive et optimisation images</li>
    <li><strong>SEO :</strong> Pour le référencement local</li>
  </ul>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">PROJET B : E-commerce de cosmétiques bio</h2>

  <h3 class="correction-subtitle">Enjeux principaux :</h3>
  <ol class="correction-list">
    <li><strong>Paiement sécurisé :</strong> Inspirer confiance, certification PCI-DSS</li>
    <li><strong>Gestion stock :</strong> Synchronisation avec l'activité marchés</li>
    <li><strong>Expérience d'achat fluide :</strong> Panier, checkout simplifié, mobile-first</li>
  </ol>

  <h3 class="correction-subtitle">Valeur attendue :</h3>
  <ul class="correction-list">
    <li><strong>Conversion :</strong> Vendre 24/7 au-delà des marchés</li>
    <li><strong>CA additionnel :</strong> Toucher une clientèle plus large</li>
    <li><strong>Scalabilité :</strong> Pouvoir ajouter des produits facilement</li>
  </ul>

  <h3 class="correction-subtitle">Risques spécifiques :</h3>
  <ul class="correction-list">
    <li>Complexité logistique (stock, expéditions)</li>
    <li>Client novice en e-commerce (beaucoup de formation nécessaire)</li>
    <li>Règlementation cosmétiques (mentions obligatoires, INCI)</li>
    <li>Budget peut être serré pour toutes les fonctionnalités</li>
  </ul>

  <h3 class="correction-subtitle">Délai estimé : <span class="highlight">3-4 mois</span></h3>
  <ul class="correction-list-compact">
    <li>2 semaines : Cadrage, choix plateforme (Shopify recommandé)</li>
    <li>3 semaines : Design et validation</li>
    <li>6 semaines : Développement et configuration</li>
    <li>2 semaines : Intégration produits et tests paiement</li>
    <li>1 semaine : Formation client et recette</li>
  </ul>

  <h3 class="correction-subtitle">Compétences prioritaires :</h3>
  <ul class="correction-list">
    <li><strong>Expert e-commerce :</strong> Connaissance Shopify/WooCommerce</li>
    <li><strong>Chef de projet :</strong> Coordination logistique complexe</li>
    <li><strong>Développeur :</strong> Intégrations paiement et shipping</li>
  </ul>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">PROJET C : Application de gestion de chantier</h2>

  <h3 class="correction-subtitle">Enjeux principaux :</h3>
  <ol class="correction-list">
    <li><strong>Adoption par les équipes :</strong> Interface mobile simple pour les chefs de chantier</li>
    <li><strong>Fiabilité :</strong> Pas de bugs, disponibilité 24/7</li>
    <li><strong>Sécurité des données :</strong> Données sensibles (devis, facturation)</li>
  </ol>

  <h3 class="correction-subtitle">Valeur attendue :</h3>
  <ul class="correction-list">
    <li><strong>Productivité :</strong> Gain de temps sur la gestion administrative</li>
    <li><strong>Visibilité temps réel :</strong> Suivi en direct de tous les chantiers</li>
    <li><strong>Facturation :</strong> Automatisation et réduction d'erreurs</li>
  </ul>

  <h3 class="correction-subtitle">Risques spécifiques :</h3>
  <ul class="correction-list">
    <li>Périmètre fonctionnel très large (risque de dérive)</li>
    <li>Résistance au changement des équipes terrain</li>
    <li>Intégrations complexes (logiciel comptabilité existant)</li>
    <li>Budget insuffisant pour la complexité réelle</li>
  </ul>

  <h3 class="correction-subtitle">Délai estimé : <span class="highlight">6-8 mois</span></h3>
  <ul class="correction-list-compact">
    <li>1 mois : Cadrage détaillé, ateliers métier</li>
    <li>1 mois : Conception UX/UI et prototypage</li>
    <li>4 mois : Développement par sprints de 2 semaines</li>
    <li>1 mois : Tests, recette et formation</li>
    <li>Déploiement progressif (pilote puis généralisation)</li>
  </ul>

  <h3 class="correction-subtitle">Compétences prioritaires :</h3>
  <ul class="correction-list">
    <li><strong>Product Owner :</strong> Priorisation fonctionnelle, arbitrages</li>
    <li><strong>Développeurs fullstack :</strong> React/React Native + API REST</li>
    <li><strong>DevOps :</strong> Infrastructure sécurisée et scalable</li>
    <li><strong>Formateur :</strong> Accompagnement au changement</li>
  </ul>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Points clés de différenciation</h2>
  <ul class="correction-list">
    <li><strong>Complexité croissante :</strong> A &lt; B &lt; C</li>
    <li><strong>Budget cohérent :</strong> Vitrine (8k€) &lt; E-commerce (25k€) &lt; App métier (80k€)</li>
    <li><strong>Risque humain :</strong> Plus élevé sur le projet C (conduite du changement)</li>
    <li><strong>Maintenance :</strong> Très différente (vitrine = légère, app métier = continue)</li>
  </ul>
</div>`
        },
        quiz: [
          {
            id: 'q-intro-1',
            question: 'Quelle est la principale différence entre un site vitrine et une application métier ?',
            options: [
              'Le nombre de pages',
              'La technologie utilisée',
              'Le niveau de personnalisation et les fonctionnalités spécifiques',
              'Le budget'
            ],
            correctAnswer: 2,
            explanation: 'Une application métier est développée sur mesure pour répondre à des besoins spécifiques d\'une organisation, contrairement à un site vitrine qui présente principalement de l\'information.'
          },
          {
            id: 'q-intro-2',
            question: 'Qu\'est-ce que le "taux de conversion" ?',
            options: [
              'Le nombre total de visiteurs',
              'Le temps passé sur le site',
              'Le pourcentage de visiteurs qui quittent le site',
              'Le pourcentage de visiteurs qui effectuent l\'action souhaitée'
            ],
            correctAnswer: 3,
            explanation: 'Le taux de conversion mesure le pourcentage de visiteurs qui accomplissent l\'objectif défini (achat, inscription, contact, etc.).'
          },
          {
            id: 'q-intro-3',
            question: 'Parmi ces éléments, lequel N\'EST PAS un livrable typique d\'un projet web ?',
            options: [
              'Plan de test',
              'Facture EDF du serveur',
              'Maquettes graphiques',
              'Cahier des charges'
            ],
            correctAnswer: 1,
            explanation: 'Les factures d\'électricité ne sont pas des livrables de projet. Les livrables sont des documents ou produits créés spécifiquement pour le projet.'
          },
          {
            id: 'q-intro-4',
            question: 'Quel est le budget moyen typique pour un site e-commerce basique ?',
            options: [
              '100 000€ - 200 000€',
              '1 000€ - 3 000€',
              '5 000€ - 8 000€',
              '10 000€ - 30 000€'
            ],
            correctAnswer: 3,
            explanation: 'Un site e-commerce nécessite des fonctionnalités complexes (paiement, gestion stock, sécurité) et se situe généralement entre 10 000€ et 30 000€ pour une version de base.'
          },
          {
            id: 'q-intro-5',
            question: 'Quelle métrique mesure la "visibilité" d\'un site web ?',
            options: [
              'Le nombre de formulaires',
              'Le temps de chargement',
              'Le taux de rebond',
              'Le positionnement SEO et le trafic organique'
            ],
            correctAnswer: 3,
            explanation: 'La visibilité se mesure principalement par le positionnement dans les moteurs de recherche (SEO) et le trafic organique généré.'
          },
          {
            id: 'q-intro-6',
            question: 'Quelle est la durée typique d\'un projet de site vitrine ?',
            options: [
              '6 mois',
              '1 an',
              '4-8 semaines',
              '1-2 jours'
            ],
            correctAnswer: 2,
            explanation: 'Un site vitrine nécessite généralement 4 à 8 semaines pour la conception, le développement et la mise en ligne.'
          },
          {
            id: 'q-intro-7',
            question: 'Qu\'est-ce qu\'un projet ?',
            options: [
              'Un produit fini',
              'Un département d\'une entreprise',
              'Une activité permanente',
              'Une initiative temporaire avec un début et une fin'
            ],
            correctAnswer: 3,
            explanation: 'Un projet est par définition temporaire, avec un début et une fin clairement définis, contrairement aux opérations courantes.'
          },
          {
            id: 'q-intro-8',
            question: 'Quel type de valeur mesure le ROI (Return On Investment) ?',
            options: [
              'Conversion financière',
              'Visibilité',
              'Performance technique',
              'Expérience utilisateur'
            ],
            correctAnswer: 0,
            explanation: 'Le ROI mesure le retour sur investissement financier, donc la valeur de conversion et le chiffre d\'affaires généré.'
          }
        ]
      }
    ]
  }
]


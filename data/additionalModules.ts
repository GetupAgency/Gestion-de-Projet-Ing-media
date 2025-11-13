import { Module } from './modules'

// Modules supplémentaires pour compléter la formation
export const additionalModules: Module[] = [
  {
    id: 'planification',
    title: 'Phase de planification',
    description: 'Organiser le projet avec planning, budget et gestion des risques',
    sections: [
      {
        id: 'planning',
        title: 'Planning du projet',
        content: `<div class="section-content">
  <h1 class="section-title">Planning du projet</h1>

  <p class="section-text">La planification est cruciale pour la réussite d'un projet web.</p>

  <h2 class="section-subtitle mt-8">Méthodes de planification</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Diagramme de Gantt</h3>
    <ul class="feature-list">
      <li>Vision chronologique</li>
      <li>Dépendances entre tâches</li>
      <li>Ressources affectées</li>
      <li>Jalons (milestones)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Méthode Agile / Scrum</h3>
    <ul class="feature-list">
      <li>Sprints de 2-4 semaines</li>
      <li>Daily standups</li>
      <li>Sprint planning</li>
      <li>Sprint review & retrospective</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Méthode en cascade (Waterfall)</h3>
    <ul class="feature-list">
      <li>Phases séquentielles</li>
      <li>Validation à chaque étape</li>
      <li>Moins flexible mais plus prévisible</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Estimation des tâches</h2>

  <div class="value-type">
    <h3 class="value-title">Techniques d'estimation</h3>
    <ul class="feature-list">
      <li>Planning Poker (Agile)</li>
      <li>Analogie (comparaison avec projets similaires)</li>
      <li>Expert judgment</li>
      <li>Three-point estimation (optimiste, pessimiste, probable)</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Jalons clés d'un projet web</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Kick-off</h4>
      <p class="text-sm text-gray-700">Lancement du projet</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Validation CDC</h4>
      <p class="text-sm text-gray-700">Cahier des charges approuvé</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Validation maquettes</h4>
      <p class="text-sm text-gray-700">Design approuvé</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Livraison V1</h4>
      <p class="text-sm text-gray-700">Première version fonctionnelle</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">5. Recette client</h4>
      <p class="text-sm text-gray-700">Tests et validation</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">6. Mise en production</h4>
      <p class="text-sm text-gray-700">Go live</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">7. Bilan</h4>
      <p class="text-sm text-gray-700">Clôture du projet</p>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Planifier un projet e-commerce',
          description: 'Créer le planning d\'un site e-commerce',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Projet :</strong> Site e-commerce pour une marque de cosmétiques</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Contraintes :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Deadline : Lancement avant les fêtes (4 mois)</li>
    <li>Budget : 40 000€</li>
    <li>Équipe : 1 chef de projet, 2 développeurs, 1 designer, 1 intégrateur</li>
    <li>200 produits à intégrer</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Listez les grandes phases du projet</li>
    <li>Estimez la durée de chaque phase</li>
    <li>Identifiez les jalons critiques</li>
    <li>Quels risques anticipez-vous sur le planning ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Planning détaillé - E-commerce Cosmétiques (16 semaines)</h2>

  <div class="example-box">
    <strong>Contexte :</strong> Deadline serrée (4 mois = 16 semaines) pour un lancement avant les fêtes
    <br>
    <strong>Contrainte majeure :</strong> Pas de marge d'erreur - date de mise en ligne NON négociable
  </div>

  <h2 class="correction-title mt-8">1. Les grandes phases du projet</h2>

  <div class="project-type">
    <h3 class="project-type-title">Phase 1 : Cadrage et Conception (4 semaines)</h3>
    <div class="project-detail">
      <strong>Semaines 1-2 : Cadrage</strong>
      <ul class="feature-list">
        <li>Kick-off et réunion de lancement</li>
        <li>Finalisation du cahier des charges</li>
        <li>Architecture technique et choix de la plateforme (Shopify recommandé pour la rapidité)</li>
        <li>Définition des user stories prioritaires</li>
        <li>Benchmark concurrentiel</li>
        <li>Jalons : CDC validé, plateforme choisie</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaines 3-4 : Conception UX/UI</strong>
      <ul class="feature-list">
        <li>Wireframes des pages clés</li>
        <li>Design system et charte graphique</li>
        <li>Maquettes desktop et mobile</li>
        <li>Prototype interactif</li>
        <li>Validation client</li>
        <li>Jalons : Maquettes validées</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 2 : Développement (7 semaines)</h3>
    <div class="project-detail">
      <strong>Semaines 5-6 : Setup et Structure</strong>
      <ul class="feature-list">
        <li>Configuration de la plateforme</li>
        <li>Installation du thème et personnalisation</li>
        <li>Configuration des paiements (Stripe, PayPal)</li>
        <li>Configuration shipping et taxes</li>
        <li>Intégration première série de produits (50 produits test)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaines 7-9 : Développement Front</strong>
      <ul class="feature-list">
        <li>Intégration des maquettes</li>
        <li>Pages produits et catégories</li>
        <li>Panier et tunnel de commande</li>
        <li>Compte client et historique</li>
        <li>Responsive mobile</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaines 10-11 : Intégration Produits et Contenus</strong>
      <ul class="feature-list">
        <li>Import massif des 200 produits</li>
        <li>Photos et descriptions</li>
        <li>Catégorisation</li>
        <li>Contenus éditoriaux (à propos, CGV, FAQ)</li>
        <li>Blog (optionnel)</li>
        <li>Jalons : 100% produits intégrés</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 3 : Tests et Optimisation (3 semaines)</h3>
    <div class="project-detail">
      <strong>Semaine 12 : Tests Internes</strong>
      <ul class="feature-list">
        <li>Tests fonctionnels (navigation, recherche, filtres)</li>
        <li>Tests tunnel d'achat complet</li>
        <li>Tests paiement (cartes test)</li>
        <li>Tests mobile (iOS & Android)</li>
        <li>Tests compatibilité navigateurs</li>
        <li>Correction bugs critiques</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaine 13 : Recette Client</strong>
      <ul class="feature-list">
        <li>Présentation au client</li>
        <li>Tests par le client</li>
        <li>Relevé d'anomalies</li>
        <li>Corrections prioritaires</li>
        <li>Jalons : PV de recette signé</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaine 14 : Optimisations Finales</strong>
      <ul class="feature-list">
        <li>Optimisation SEO (meta, URLs, sitemap)</li>
        <li>Optimisation performance (images, cache)</li>
        <li>Configuration Google Analytics et pixels</li>
        <li>Tests de charge</li>
        <li>Formation client</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 4 : Lancement (2 semaines)</h3>
    <div class="project-detail">
      <strong>Semaine 15 : Préparation Lancement</strong>
      <ul class="feature-list">
        <li>Configuration DNS</li>
        <li>Certificat SSL</li>
        <li>Backup complet</li>
        <li>Plan de communication</li>
        <li>Campagnes marketing préparées</li>
        <li>Documentation finale</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Semaine 16 : Mise en Production et Monitoring</strong>
      <ul class="feature-list">
        <li>Go Live ! 🚀</li>
        <li>Monitoring intensif J+0 à J+7</li>
        <li>Support technique dédié</li>
        <li>Corrections hot-fixes si nécessaire</li>
        <li>Jalons : Site en ligne, stable</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Jalons critiques (Go/No-Go)</h2>

  <div class="value-type">
    <h3 class="value-title">Jalon 1 : Validation CDC (Fin S2)</h3>
    <ul class="correction-list">
      <li><strong>Critère :</strong> CDC signé par le client</li>
      <li><strong>Risque si non atteint :</strong> Tout le planning décale</li>
      <li><strong>Action si retard :</strong> Escalade immédiate, réunion de crise</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Jalon 2 : Validation Design (Fin S4)</h3>
    <ul class="correction-list">
      <li><strong>Critère :</strong> Maquettes approuvées, max 1 aller-retour</li>
      <li><strong>Risque si non atteint :</strong> Développement bloqué</li>
      <li><strong>Action si retard :</strong> Limiter les itérations design, figer le scope</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Jalon 3 : Produits Intégrés (Fin S11)</h3>
    <ul class="correction-list">
      <li><strong>Critère :</strong> 200 produits en ligne avec photos et descriptions</li>
      <li><strong>Risque si non atteint :</strong> Tests incomplets, lancement partiel</li>
      <li><strong>Action si retard :</strong> Recruter aide temporaire pour l'intégration</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Jalon 4 : Recette Validée (Fin S13)</h3>
    <ul class="correction-list">
      <li><strong>Critère :</strong> PV de recette signé, zéro bug bloquant</li>
      <li><strong>Risque si non atteint :</strong> Lancement impossible</li>
      <li><strong>Action si retard :</strong> Report mise en prod, négociation client</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Risques sur le planning</h2>

  <div class="project-type">
    <h3 class="project-type-title">Risque 1 : Retard validation client</h3>
    <div class="project-detail">
      <strong>Probabilité :</strong> <span class="highlight">ÉLEVÉE</span>
    </div>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">CRITIQUE</span>
    </div>
    <div class="project-detail">
      <strong>Cause :</strong> Client indisponible, décisions tardives, allers-retours multiples
    </div>
    <div class="project-detail">
      <strong>Mitigation :</strong>
      <ul class="feature-list">
        <li>Imposer des délais de validation contractuels (72h max)</li>
        <li>Validation tacite après délai</li>
        <li>Bloquer le client dans l'agenda pour les validations critiques</li>
        <li>Anticiper : envoyer maquettes avant deadline pour pré-validation</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Risque 2 : Scope creep (dérive du périmètre)</h3>
    <div class="project-detail">
      <strong>Probabilité :</strong> <span class="highlight">MOYENNE</span>
    </div>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">CRITIQUE</span>
    </div>
    <div class="project-detail">
      <strong>Cause :</strong> Nouvelles demandes en cours de projet ("Ah et si on ajoutait...")</li>
    </div>
    <div class="project-detail">
      <strong>Mitigation :</strong>
      <ul class="feature-list">
        <li>CDC contractuel très précis</li>
        <li>Backlog post-lancement pour les évolutions</li>
        <li>Chiffrage systématique de toute nouvelle demande</li>
        <li>Communication ferme : "Après le lancement"</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Risque 3 : Retard intégration produits</h3>
    <div class="project-detail">
      <strong>Probabilité :</strong> <span class="highlight">MOYENNE</span>
    </div>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">ÉLEVÉ</span>
    </div>
    <div class="project-detail">
      <strong>Cause :</strong> 200 produits = tâche longue et répétitive
    </div>
    <div class="project-detail">
      <strong>Mitigation :</strong>
      <ul class="feature-list">
        <li>Import CSV semi-automatisé</li>
        <li>Demander au client fichier produits formaté DÈS le début</li>
        <li>Template Excel pour standardiser</li>
        <li>Prévoir budget pour stagiaire/assistant (gain de temps)</li>
        <li>Buffer de 1 semaine dans le planning</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Risque 4 : Absence d'un membre de l'équipe</h3>
    <div class="project-detail">
      <strong>Probabilité :</strong> <span class="highlight">FAIBLE à MOYENNE</span>
    </div>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">ÉLEVÉ</span>
    </div>
    <div class="project-detail">
      <strong>Cause :</strong> Maladie, congés, démission
    </div>
    <div class="project-detail">
      <strong>Mitigation :</strong>
      <ul class="feature-list">
        <li>Documentation continue du projet</li>
        <li>Code review et partage de connaissances</li>
        <li>Binômage sur tâches critiques</li>
        <li>Freelance de secours identifié</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Risque 5 : Problèmes techniques imprévus</h3>
    <div class="project-detail">
      <strong>Probabilité :</strong> <span class="highlight">MOYENNE</span>
    </div>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">VARIABLE</span>
    </div>
    <div class="project-detail">
      <strong>Cause :</strong> Bug complexe, incompatibilité, intégration API tierce
    </div>
    <div class="project-detail">
      <strong>Mitigation :</strong>
      <ul class="feature-list">
        <li>Tests techniques précoces (POC)</li>
        <li>Buffer temps développement (+20%)</li>
        <li>Solutions de repli identifiées</li>
        <li>Priorisation stricte : MVP d'abord</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Recommandation globale :</strong> Planning serré mais réaliste SI le client joue le jeu.
    <br>
    <strong>Plan B :</strong> Prévoir un lancement soft (70% produits) début décembre, complément mi-décembre
    <br>
    <strong>Buffer caché :</strong> Garde 3-4 jours de marge non communiqués au client
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-planning-1',
            question: 'Qu\'est-ce qu\'un jalon (milestone) dans un projet ?',
            options: [
              'Une tâche quotidienne',
              'Un événement clé marquant une étape importante',
              'Une réunion d\'équipe',
              'Un outil de gestion'
            ],
            correctAnswer: 1,
            explanation: 'Un jalon est un événement significatif qui marque l\'achèvement d\'une phase importante du projet.'
          },
          {
            id: 'q-planning-2',
            question: 'Dans la méthode Scrum, quelle est la durée typique d\'un sprint ?',
            options: [
              '1 journée',
              '2 à 4 semaines',
              '3 mois',
              '6 mois'
            ],
            correctAnswer: 1,
            explanation: 'Un sprint Scrum dure généralement entre 2 et 4 semaines, permettant une itération rapide.'
          },
          {
            id: 'q-planning-3',
            question: 'Qu\'est-ce qu\'un diagramme de Gantt ?',
            options: [
              'Un outil de communication',
              'Un graphique montrant le planning des tâches dans le temps',
              'Un type de base de données',
              'Un framework de développement'
            ],
            correctAnswer: 1,
            explanation: 'Le diagramme de Gantt est un outil de planification qui représente visuellement les tâches, leur durée et leurs dépendances dans le temps.'
          },
          {
            id: 'q-planning-4',
            question: 'Quelle part du budget d\'un projet web représentent généralement les ressources humaines ?',
            options: [
              '10-20%',
              '30-40%',
              '60-70%',
              '90-100%'
            ],
            correctAnswer: 2,
            explanation: 'Les ressources humaines (salaires, freelances) représentent la plus grosse part du budget, généralement 60 à 70%.'
          },
          {
            id: 'q-planning-5',
            question: 'Quelle marge de sécurité est recommandée dans un budget de projet ?',
            options: [
              '1-2%',
              '5-7%',
              '10-15%',
              '30-40%'
            ],
            correctAnswer: 2,
            explanation: 'Une marge de sécurité de 10 à 15% est recommandée pour gérer les imprévus et dépassements potentiels.'
          },
          {
            id: 'q-planning-6',
            question: 'Qu\'est-ce que le "scope creep" ?',
            options: [
              'Un outil de gestion',
              'Une dérive du périmètre du projet (ajout de fonctionnalités)',
              'Une méthodologie de développement',
              'Un type de bug'
            ],
            correctAnswer: 1,
            explanation: 'Le scope creep est la dérive du périmètre initial, souvent causée par l\'ajout de nouvelles demandes non prévues dans le CDC.'
          }
        ]
      },
      {
        id: 'outils',
        title: 'Outils de planification',
        content: `# Outils de planification

Les outils facilitent la gestion et le suivi du projet.

## Outils de gestion de projet

### 1. Gestion de tâches
- **Jira** : Solution complète, idéale pour Agile
- **Trello** : Kanban simple et visuel
- **Asana** : Polyvalent et intuitif
- **Monday.com** : Très visuel, personnalisable
- **ClickUp** : Tout-en-un

### 2. Planification
- **MS Project** : Standard entreprise
- **GanttProject** : Gratuit et open-source
- **Smartsheet** : Collaborative

### 3. Communication
- **Slack** : Messagerie d'équipe
- **Microsoft Teams** : Suite collaborative
- **Discord** : Communication vocale et écrite

### 4. Documentation
- **Notion** : Wiki d'équipe
- **Confluence** : Documentation projet
- **Google Workspace** : Collaboration docs

### 5. Versioning & Dev
- **GitHub** : Code + gestion projet
- **GitLab** : DevOps complet
- **Bitbucket** : Intégration Jira

## Critères de choix

- Taille de l'équipe
- Budget disponible
- Méthodologie (Agile vs Waterfall)
- Intégrations nécessaires
- Courbe d'apprentissage`,
        casePratique: {
          title: 'Choisir les bons outils',
          description: 'Recommander une stack d\'outils pour un projet',
          exercice: `**Contexte** : Startup en création, projet web ambitieux

**Équipe** :
- 5 personnes (2 devs, 1 designer, 1 PM, 1 marketing)
- Budget limité
- Travail à distance
- Méthodologie Agile
- Stack technique : React + Node.js

**Votre mission** :
Recommandez :
1. Un outil de gestion de projet (justifiez)
2. Un outil de communication
3. Un outil de documentation
4. Un outil de versioning

Justifiez chaque choix en fonction du contexte.`
        }
      },
      {
        id: 'budget',
        title: 'Gestion du budget',
        content: `# Gestion du budget

Le budget est une contrainte majeure de tout projet web.

## Composantes du budget

### 1. Ressources humaines (60-70%)
- Chef de projet
- Développeurs
- Designers / UX
- Intégrateurs
- Testeurs / QA

**Calcul** : Taux journalier × Nombre de jours

### 2. Licences et outils (5-10%)
- Licences logicielles
- Outils de gestion
- Frameworks premium
- Plugins / Extensions

### 3. Hébergement et infrastructure (5-10%)
- Serveurs
- Nom de domaine
- SSL
- CDN
- Backup

### 4. Contenus (5-15%)
- Rédaction
- Photos / Vidéos
- Traductions
- Banques d'images

### 5. Réserve (10-15%)
- Imprévus
- Évolutions en cours de projet
- Dépassements

## Modèles de facturation

### 1. Forfait
- Prix fixe défini à l'avance
- Scope précis et figé
- Moins de flexibilité

**Avantages** : Prévisibilité pour le client
**Inconvénients** : Risque pour l'agence si dépassement

### 2. Régie (temps passé)
- Facturation au temps réel
- Plus de flexibilité
- Suivi précis du temps

**Avantages** : Adaptabilité
**Inconvénients** : Budget moins prévisible

### 3. Hybride
- Base forfaitaire
- + Option régie pour évolutions

## Suivi budgétaire

Indicateurs clés :
- **Budget prévisionnel vs réel**
- **Burn rate** : vitesse de consommation
- **CPI** (Cost Performance Index) : Efficacité des dépenses
- **EAC** (Estimate At Completion) : Projection finale`,
        casePratique: {
          title: 'Établir un budget',
          description: 'Chiffrer un projet web',
          exercice: `**Projet** : Application web SaaS (MVP)

**Besoins** :
- Authentification utilisateurs
- Dashboard avec analytics
- 3 modules fonctionnels
- API REST
- Design responsive
- Documentation

**Équipe nécessaire** :
- 1 chef de projet : 400€/jour
- 2 développeurs fullstack : 500€/jour chacun
- 1 UX/UI designer : 450€/jour

**Durée estimée** : 3 mois

**Votre mission** :
1. Estimez le nombre de jours par rôle
2. Calculez le coût RH
3. Ajoutez les autres postes de dépenses
4. Proposez un budget total avec marge de sécurité`
        }
      }
    ]
  },
  {
    id: 'conception',
    title: 'Phase de conception',
    description: 'Définir les spécifications techniques et créer le design',
    sections: [
      {
        id: 'cdc-technique',
        title: 'Cahier des charges fonctionnel et technique',
        content: `<div class="section-content">
  <h1 class="section-title">Cahier des charges fonctionnel et technique</h1>

  <p class="section-text">Après le CDC initial, il faut détailler les spécifications.</p>

  <h2 class="section-subtitle mt-8">CDC Fonctionnel</h2>

  <div class="value-type">
    <h3 class="value-title">Décrit ce que le système doit faire (vue métier)</h3>
    
    <h4 class="text-lg font-semibold text-gray-900 mt-4 mb-2">Contenu :</h4>
    <ul class="feature-list">
      <li>User stories détaillées</li>
      <li>Cas d'usage (use cases)</li>
      <li>Règles métier</li>
      <li>Parcours utilisateurs</li>
      <li>Maquettes fonctionnelles (wireframes)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Exemple de user story :</strong>
    <br><br>
    En tant que client,
    <br>
    Je veux pouvoir filtrer les produits par catégorie et prix
    <br>
    Afin de trouver rapidement ce qui m'intéresse
    <br><br>
    <strong>Critères d'acceptation :</strong>
    <br>
    • Les filtres sont visibles sur mobile et desktop
    <br>
    • Le nombre de résultats s'affiche en temps réel
    <br>
    • Les filtres sont cumulables
  </div>

  <h2 class="section-subtitle mt-8">CDC Technique</h2>

  <div class="value-type">
    <h3 class="value-title">Décrit comment le système sera construit (vue technique)</h3>
  </div>

  <div class="deliverables-grid mt-6">
    <div class="deliverable-phase">
      <h4 class="phase-title">Frontend</h4>
      <p class="text-sm text-gray-700">Technologies, frameworks</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Backend</h4>
      <p class="text-sm text-gray-700">Langages, frameworks</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Base de données</h4>
      <p class="text-sm text-gray-700">Type, structure</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">APIs</h4>
      <p class="text-sm text-gray-700">REST, GraphQL</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Hébergement</h4>
      <p class="text-sm text-gray-700">Cloud, serveurs dédiés</p>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Spécifications techniques</h3>

  <div class="project-type">
    <h3 class="project-type-title">Performance</h3>
    <p class="project-detail">Temps de chargement &lt; 3s</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Sécurité</h3>
    <p class="project-detail">HTTPS, RGPD, authentification</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Compatibilité</h3>
    <p class="project-detail">Navigateurs, devices</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Scalabilité</h3>
    <p class="project-detail">Charge supportée</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">SEO</h3>
    <p class="project-detail">URLs, meta tags, sitemap</p>
  </div>

  <div class="example-box mt-8">
    <strong>Exemple : Stack technique moderne</strong>
    <br><br>
    <strong>Frontend:</strong>
    <br>
    • React 18+ avec TypeScript
    <br>
    • Next.js pour le SSR
    <br>
    • TailwindCSS pour les styles
    <br>
    • Zustand pour le state management
    <br><br>
    <strong>Backend:</strong>
    <br>
    • Node.js + Express
    <br>
    • PostgreSQL
    <br>
    • Prisma ORM
    <br>
    • Redis pour le cache
    <br><br>
    <strong>Infrastructure:</strong>
    <br>
    • Vercel pour le frontend
    <br>
    • AWS EC2 pour le backend
    <br>
    • AWS RDS pour la BDD
    <br>
    • Cloudflare pour le CDN
  </div>
</div>`,
        casePratique: {
          title: 'Rédiger des spécifications',
          description: 'Créer le CDC technique d\'une fonctionnalité',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Fonctionnalité :</strong> Système de réservation en ligne pour un restaurant</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <strong>Besoin fonctionnel :</strong>
    <br>
    "Les clients doivent pouvoir réserver une table en ligne en choisissant la date, l'heure et le nombre de personnes"
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>

  <div class="mb-4">
    <strong>1. Spécifications fonctionnelles :</strong>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800 mt-2">
      <li>Détaillez 3 user stories</li>
      <li>Listez 5 règles métier à respecter</li>
      <li>Décrivez le parcours utilisateur étape par étape</li>
    </ul>
  </div>

  <div>
    <strong>2. Spécifications techniques :</strong>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800 mt-2">
      <li>Proposez une stack technique adaptée</li>
      <li>Définissez les contraintes de performance</li>
      <li>Listez les mesures de sécurité nécessaires</li>
    </ul>
  </div>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Spécifications complètes - Système de réservation restaurant</h2>

  <h2 class="correction-title mt-8">1. Spécifications fonctionnelles</h2>

  <h3 class="correction-subtitle">User Stories détaillées</h3>

  <div class="value-type">
    <h3 class="value-title">US1 : Recherche de disponibilité</h3>
    <p class="text-gray-800 mb-2"><strong>En tant que</strong> client du restaurant</p>
    <p class="text-gray-800 mb-2"><strong>Je veux</strong> voir les créneaux disponibles pour une date donnée</p>
    <p class="text-gray-800 mb-3"><strong>Afin de</strong> choisir l'horaire qui me convient</p>
    
    <h4 class="font-semibold text-gray-900 mt-3 mb-2">Critères d'acceptation :</h4>
    <ul class="correction-list-compact">
      <li>L'utilisateur sélectionne une date via un calendrier</li>
      <li>L'utilisateur indique le nombre de personnes (1-20)</li>
      <li>Le système affiche les créneaux disponibles par tranche de 30 minutes</li>
      <li>Les créneaux complets sont grisés/désactivés</li>
      <li>Le système indique le nombre de places restantes par créneau</li>
      <li>La recherche se fait en temps réel sans rechargement de page</li>
    </ul>

    <div class="example-box mt-3">
      <strong>Exemple :</strong> Si le client cherche pour 4 personnes le 15/12, le système affiche :
      <br>• 12h00 : 2 tables disponibles ✓
      <br>• 12h30 : Complet ✗
      <br>• 13h00 : 5 tables disponibles ✓
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">US2 : Réservation avec confirmation</h3>
    <p class="text-gray-800 mb-2"><strong>En tant que</strong> client</p>
    <p class="text-gray-800 mb-2"><strong>Je veux</strong> réserver et recevoir une confirmation immédiate</p>
    <p class="text-gray-800 mb-3"><strong>Afin de</strong> être sûr que ma table est bien réservée</p>
    
    <h4 class="font-semibold text-gray-900 mt-3 mb-2">Critères d'acceptation :</h4>
    <ul class="correction-list-compact">
      <li>L'utilisateur remplit un formulaire (nom, email, téléphone, commentaires)</li>
      <li>Validation temps réel des champs (email valide, téléphone au bon format)</li>
      <li>Acceptation des CGU de réservation obligatoire</li>
      <li>Confirmation immédiate à l'écran après validation</li>
      <li>Email de confirmation envoyé automatiquement (FR + EN)</li>
      <li>SMS de confirmation (optionnel, paramétrable)</li>
      <li>Numéro de réservation unique généré</li>
      <li>Ajout automatique au calendrier (fichier .ics)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">US3 : Gestion de ma réservation</h3>
    <p class="text-gray-800 mb-2"><strong>En tant que</strong> client ayant réservé</p>
    <p class="text-gray-800 mb-2"><strong>Je veux</strong> modifier ou annuler ma réservation</p>
    <p class="text-gray-800 mb-3"><strong>Afin de</strong> gérer mes imprévus</p>
    
    <h4 class="font-semibold text-gray-900 mt-3 mb-2">Critères d'acceptation :</h4>
    <ul class="correction-list-compact">
      <li>Lien de gestion inclus dans l'email de confirmation</li>
      <li>Accès sécurisé via token unique (pas de compte requis)</li>
      <li>Possibilité de modifier date/heure/nombre de personnes</li>
      <li>Possibilité d'annuler jusqu'à 24h avant</li>
      <li>Email de confirmation après modification/annulation</li>
      <li>Notification automatique au restaurant</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h3 class="correction-subtitle">Règles métier à respecter</h3>

  <div class="project-type">
    <h3 class="project-type-title">Règle 1 : Gestion de la jauge</h3>
    <ul class="feature-list">
      <li>Nombre maximum de couverts par service : 60 couverts</li>
      <li>Tables de 2, 4, 6, 8 personnes disponibles</li>
      <li>Optimisation automatique : une table de 4 peut accueillir 3 personnes</li>
      <li>Marge de sécurité : bloquer 15 minutes avant et après chaque réservation</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Règle 2 : Horaires et délais</h3>
    <ul class="feature-list">
      <li>Réservation possible de J+1 à J+30 maximum</li>
      <li>Réservation le jour même : jusqu'à 2h avant le service</li>
      <li>Services : Midi (12h-14h) et Soir (19h-22h)</li>
      <li>Fermeture : Dimanche soir et lundi toute la journée</li>
      <li>Durée estimée : 1h30 pour 2 pers, 2h pour 4+ pers</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Règle 3 : Annulation et no-show</h3>
    <ul class="feature-list">
      <li>Annulation gratuite jusqu'à 24h avant</li>
      <li>Moins de 24h : demande de confirmation par téléphone</li>
      <li>No-show : blacklist temporaire (3 mois)</li>
      <li>Libération automatique des tables 15 min après l'heure prévue</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Règle 4 : Demandes spéciales</h3>
    <ul class="feature-list">
      <li>Allergies et régimes alimentaires : champ commentaire</li>
      <li>Highchair (chaise haute bébé) : option à cocher</li>
      <li>Événement spécial (anniversaire) : option avec nombre de personnes</li>
      <li>Placement préférentiel : terrasse, près fenêtre (non garanti)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Règle 5 : Groupes et privatisation</h3>
    <ul class="feature-list">
      <li>Groupes > 8 personnes : passer par formulaire dédié</li>
      <li>Privatisation complète : contact direct restaurant</li>
      <li>Acompte requis pour groupes > 10 personnes</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h3 class="correction-subtitle">Parcours utilisateur détaillé</h3>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 1 : Accès</h4>
      <ul class="deliverable-list">
        <li>Bouton "Réserver" visible (header + homepage)</li>
        <li>Click → Ouverture formulaire (modal ou page dédiée)</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 2 : Recherche</h4>
      <ul class="deliverable-list">
        <li>Sélection date (calendrier)</li>
        <li>Sélection nombre de personnes (dropdown)</li>
        <li>Click "Rechercher"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 3 : Choix créneau</h4>
      <ul class="deliverable-list">
        <li>Affichage créneaux disponibles</li>
        <li>Sélection d'un créneau</li>
        <li>Mise en avant visuelle du choix</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 4 : Informations</h4>
      <ul class="deliverable-list">
        <li>Formulaire : Nom, Email, Téléphone</li>
        <li>Options : Allergies, Occasion spéciale</li>
        <li>Validation en temps réel</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 5 : Confirmation</h4>
      <ul class="deliverable-list">
        <li>Récapitulatif de la réservation</li>
        <li>CGU à accepter</li>
        <li>Bouton "Confirmer ma réservation"</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Étape 6 : Succès</h4>
      <ul class="deliverable-list">
        <li>Message de confirmation</li>
        <li>Numéro de réservation</li>
        <li>Email envoyé</li>
        <li>Lien de gestion</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Spécifications techniques</h2>

  <h3 class="correction-subtitle">Stack technique recommandée</h3>

  <div class="value-type">
    <h3 class="value-title">Frontend</h3>
    <ul class="correction-list">
      <li><strong>Framework :</strong> React 18 avec TypeScript</li>
      <li><strong>UI Library :</strong> MUI (Material-UI) ou Chakra UI</li>
      <li><strong>Calendrier :</strong> react-day-picker ou react-calendar</li>
      <li><strong>Forms :</strong> React Hook Form + Zod pour validation</li>
      <li><strong>State :</strong> Context API ou Zustand</li>
      <li><strong>HTTP :</strong> Axios ou Fetch API</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Backend</h3>
    <ul class="correction-list">
      <li><strong>Framework :</strong> Node.js + Express ou Fastify</li>
      <li><strong>Base de données :</strong> PostgreSQL (données structurées)</li>
      <li><strong>ORM :</strong> Prisma ou TypeORM</li>
      <li><strong>Cache :</strong> Redis pour disponibilités temps réel</li>
      <li><strong>Queue :</strong> Bull ou BullMQ pour emails/SMS asynchrones</li>
      <li><strong>Email :</strong> SendGrid ou Mailgun</li>
      <li><strong>SMS :</strong> Twilio (optionnel)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Infrastructure</h3>
    <ul class="correction-list">
      <li><strong>Hébergement Frontend :</strong> Vercel ou Netlify</li>
      <li><strong>Hébergement Backend :</strong> AWS EC2, Heroku ou Render</li>
      <li><strong>BDD :</strong> AWS RDS PostgreSQL ou Supabase</li>
      <li><strong>SSL :</strong> Let's Encrypt (gratuit)</li>
      <li><strong>Monitoring :</strong> Sentry pour les erreurs</li>
    </ul>
  </div>

  <hr class="my-6 border-gray-300">

  <h3 class="correction-subtitle">Contraintes de performance</h3>

  <div class="project-type">
    <h3 class="project-type-title">Performance Cibles</h3>
    <ul class="feature-list">
      <li><strong>Temps de chargement initial :</strong> &lt; 2 secondes</li>
      <li><strong>Recherche disponibilités :</strong> &lt; 500ms</li>
      <li><strong>Validation réservation :</strong> &lt; 1 seconde</li>
      <li><strong>Envoi email :</strong> Asynchrone (ne bloque pas l'UX)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Optimisations</h3>
    <ul class="feature-list">
      <li>Cache Redis des disponibilités (TTL 30 secondes)</li>
      <li>Lazy loading du calendrier</li>
      <li>Debouncing sur les inputs</li>
      <li>Compression Gzip/Brotli</li>
      <li>CDN pour les assets statiques</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Scalabilité</h3>
    <ul class="feature-list">
      <li>Supporter 100 réservations simultanées</li>
      <li>Base de données indexée (date, restaurant_id)</li>
      <li>Connection pooling pour la BDD</li>
      <li>Rate limiting : 10 requêtes/minute par IP</li>
    </ul>
  </div>

  <hr class="my-6 border-gray-300">

  <h3 class="correction-subtitle">Mesures de sécurité</h3>

  <div class="project-type">
    <h3 class="project-type-title">Authentification & Autorisation</h3>
    <ul class="feature-list">
      <li>Token unique (UUID) pour gérer les réservations</li>
      <li>Pas de compte utilisateur requis (friction minimale)</li>
      <li>JWT pour l'espace admin restaurant</li>
      <li>Hashage des tokens de gestion (bcrypt)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Protection des données</h3>
    <ul class="feature-list">
      <li><strong>HTTPS obligatoire</strong> sur toutes les pages</li>
      <li><strong>RGPD :</strong> Consentement, droit à l'oubli, export données</li>
      <li><strong>Chiffrement :</strong> Données sensibles chiffrées en BDD</li>
      <li><strong>Rétention :</strong> Données supprimées après 1 an</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Protection contre les abus</h3>
    <ul class="feature-list">
      <li><strong>Rate limiting :</strong> 10 tentatives/minute</li>
      <li><strong>CAPTCHA :</strong> reCAPTCHA v3 invisible</li>
      <li><strong>Validation côté serveur :</strong> Ne jamais faire confiance au client</li>
      <li><strong>Double booking prevention :</strong> Lock optimiste en BDD</li>
      <li><strong>Anti-spam email :</strong> Honeypot + validation domaine email</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Monitoring & Logs</h3>
    <ul class="feature-list">
      <li>Logs de toutes les réservations (audit trail)</li>
      <li>Alertes en cas d'erreur critique (email admin)</li>
      <li>Monitoring uptime (UptimeRobot)</li>
      <li>Analytics : taux de conversion, créneaux populaires</li>
    </ul>
  </div>

  <div class="example-box mt-8">
    <strong>Budget estimé :</strong> 8 000€ - 12 000€
    <br>
    <strong>Délai :</strong> 6-8 semaines
    <br>
    <strong>Maintenance :</strong> 200-300€/mois (hébergement + monitoring + support)
  </div>
</div>`
        }
      }
    ]
  }
]


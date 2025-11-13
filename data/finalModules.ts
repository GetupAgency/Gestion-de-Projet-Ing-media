import { Module } from './modules'

export const finalModules: Module[] = [
  {
    id: 'developpement',
    title: 'Phase de développement',
    description: 'Technologies, CMS et méthodes de développement web',
    sections: [
      {
        id: 'technologies',
        title: 'Les technologies web',
        content: `<div class="section-content">
  <h1 class="section-title">Les technologies web</h1>

  <p class="section-text">Comprendre l'écosystème technologique est essentiel pour bien gérer un projet web.</p>

  <h2 class="section-subtitle mt-8">Frontend (côté client)</h2>

  <div class="project-type">
    <h3 class="project-type-title">HTML/CSS</h3>
    <ul class="feature-list">
      <li><strong>HTML5 :</strong> Structure sémantique</li>
      <li><strong>CSS3 :</strong> Styles, animations, responsive</li>
      <li><strong>Préprocesseurs :</strong> Sass, Less</li>
      <li><strong>Frameworks CSS :</strong> TailwindCSS, Bootstrap</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">JavaScript</h3>
    <ul class="feature-list">
      <li><strong>Vanilla JavaScript :</strong> ES6+</li>
      <li><strong>Frameworks :</strong> React, Vue.js, Angular</li>
      <li><strong>TypeScript :</strong> Typage statique</li>
      <li><strong>Bundlers :</strong> Webpack, Vite, Parcel</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Backend (côté serveur)</h2>

  <div class="project-type">
    <h3 class="project-type-title">Langages</h3>
    <ul class="feature-list">
      <li><strong>Node.js :</strong> JavaScript côté serveur</li>
      <li><strong>PHP :</strong> WordPress, Symfony, Laravel</li>
      <li><strong>Python :</strong> Django, Flask</li>
      <li><strong>Ruby :</strong> Ruby on Rails</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Bases de données</h3>
    <ul class="feature-list">
      <li><strong>SQL :</strong> PostgreSQL, MySQL</li>
      <li><strong>NoSQL :</strong> MongoDB, Redis</li>
      <li><strong>Cloud :</strong> Firebase, Supabase</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">DevOps & Infrastructure</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Versioning :</strong> Git, GitHub, GitLab</li>
      <li><strong>CI/CD :</strong> GitHub Actions, GitLab CI</li>
      <li><strong>Conteneurisation :</strong> Docker</li>
      <li><strong>Cloud :</strong> AWS, Azure, Vercel, Netlify</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Choisir sa stack</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Complexité du projet</h4>
      <p class="text-sm text-gray-700">Simple → WordPress, Complexe → Custom</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Compétences de l'équipe</h4>
      <p class="text-sm text-gray-700">Choisir ce que l'équipe maîtrise</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Performance requise</h4>
      <p class="text-sm text-gray-700">Temps réel → Node.js/WebSocket</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Budget et temps</h4>
      <p class="text-sm text-gray-700">Serré → CMS, Large → Sur mesure</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">5. Évolutivité</h4>
      <p class="text-sm text-gray-700">Croissance prévue → Architecture scalable</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">6. Communauté et support</h4>
      <p class="text-sm text-gray-700">Besoin d'aide → Techno populaire</p>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Choisir une stack technique',
          description: 'Recommander une stack pour différents projets',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Exercice :</strong> Pour chacun des projets suivants, recommandez une stack technique et justifiez :</p>

  <div class="bg-blue-50 rounded-lg p-4 mt-4 mb-4">
    <h4 class="font-bold text-blue-900 mb-2">Projet A : Blog personnel</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li>Trafic faible</li>
      <li>Budget limité</li>
      <li>Besoin de référencement SEO</li>
    </ul>
  </div>

  <div class="bg-green-50 rounded-lg p-4 mb-4">
    <h4 class="font-bold text-green-900 mb-2">Projet B : Application SaaS B2B</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li>Authentification complexe</li>
      <li>Dashboard avec données en temps réel</li>
      <li>Scalabilité importante</li>
    </ul>
  </div>

  <div class="bg-purple-50 rounded-lg p-4 mb-4">
    <h4 class="font-bold text-purple-900 mb-2">Projet C : E-commerce 500 produits</h4>
    <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
      <li>Paiement en ligne</li>
      <li>Gestion de stock</li>
      <li>Interface d'administration</li>
    </ul>
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Pour chaque projet, précisez :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Frontend recommandé</li>
    <li>Backend recommandé</li>
    <li>Base de données</li>
    <li>Hébergement</li>
  </ul>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">PROJET A : Blog personnel</h2>

  <div class="value-type">
    <h3 class="value-title">Stack recommandée : WordPress (CMS)</h3>
    <p class="text-gray-800 mb-3"><strong>Justification :</strong> Solution tout-en-un parfaite pour un blog avec budget limité</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Frontend</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> WordPress avec thème responsive moderne (Astra, GeneratePress)</li>
      <li><strong>Pourquoi :</strong> Gratuit, optimisé SEO, facile à personnaliser</li>
      <li><strong>Page builder :</strong> Elementor ou Gutenberg (inclus)</li>
      <li><strong>Alternatives :</strong> Ghost (si plus technique)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Backend</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> WordPress (PHP + MySQL)</li>
      <li><strong>Pourquoi :</strong> Pas besoin de développement custom</li>
      <li><strong>Plugins essentiels :</strong> Yoast SEO, WP Rocket (cache), Wordfence (sécurité)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Base de données</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> MySQL (inclus avec WordPress)</li>
      <li><strong>Pourquoi :</strong> Standard, supporté par tous les hébergeurs</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Hébergement</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> O2Switch ou Hostinger (3-5€/mois)</li>
      <li><strong>Pourquoi :</strong> Pas cher, support WordPress natif, bon rapport qualité/prix</li>
      <li><strong>Alternative gratuite :</strong> WordPress.com (limité)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Coût total :</strong> 50-100€/an (hébergement + domaine)
    <br>
    <strong>Délai de mise en ligne :</strong> 1-2 semaines
    <br>
    <strong>Avantages :</strong> SEO excellent, maintenance facile, 0 code requis
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">PROJET B : Application SaaS B2B</h2>

  <div class="value-type">
    <h3 class="value-title">Stack recommandée : Full JavaScript moderne</h3>
    <p class="text-gray-800 mb-3"><strong>Justification :</strong> Performance, temps réel, scalabilité maximale</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Frontend</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> React 18 + TypeScript + Next.js 14</li>
      <li><strong>Pourquoi :</strong> Composants réutilisables, TypeScript pour la fiabilité, SSR pour performance</li>
      <li><strong>UI Library :</strong> MUI ou Chakra UI (composants pro)</li>
      <li><strong>State management :</strong> Zustand ou Redux Toolkit</li>
      <li><strong>Temps réel :</strong> Socket.io client</li>
      <li><strong>Charts :</strong> Recharts ou Chart.js pour le dashboard</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Backend</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> Node.js + Express/Fastify + TypeScript</li>
      <li><strong>Pourquoi :</strong> Performance, async, même langage que frontend</li>
      <li><strong>Auth :</strong> Passport.js + JWT, ou Auth0/Clerk (SaaS auth)</li>
      <li><strong>API :</strong> REST ou tRPC (typesafe)</li>
      <li><strong>Temps réel :</strong> Socket.io ou WebSocket natif</li>
      <li><strong>Jobs :</strong> Bull/BullMQ pour tâches asynchrones</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Base de données</h3>
    <ul class="feature-list">
      <li><strong>Choix principal :</strong> PostgreSQL</li>
      <li><strong>Pourquoi :</strong> Robuste, ACID, excellent pour B2B</li>
      <li><strong>ORM :</strong> Prisma (typesafe, migrations faciles)</li>
      <li><strong>Cache :</strong> Redis (sessions, cache queries, pub/sub)</li>
      <li><strong>Alternative :</strong> Supabase (PostgreSQL + Auth + Storage tout-en-un)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Hébergement</h3>
    <ul class="feature-list">
      <li><strong>Frontend :</strong> Vercel (gratuit jusqu'à certain seuil, puis $20/mois)</li>
      <li><strong>Backend :</strong> Railway.app ou Render (démarrage gratuit, puis 7-20$/mois)</li>
      <li><strong>BDD :</strong> Supabase (gratuit jusqu'à 500Mo) ou AWS RDS</li>
      <li><strong>Monitoring :</strong> Sentry (erreurs) + Vercel Analytics</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Coût de démarrage :</strong> 0-50€/mois (scale progressivement)
    <br>
    <strong>Coût à 1000 users :</strong> 200-500€/mois
    <br>
    <strong>Délai MVP :</strong> 2-3 mois
    <br>
    <strong>Avantages :</strong> Moderne, scalable, TypeScript end-to-end, excellent DX
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">PROJET C : E-commerce 500 produits</h2>

  <div class="value-type">
    <h3 class="value-title">Stack recommandée : Shopify (solution managée)</h3>
    <p class="text-gray-800 mb-3"><strong>Justification :</strong> Rapidité de mise en œuvre, tout inclus, sécurité garantie</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Plateforme</h3>
    <ul class="feature-list">
      <li><strong>Choix :</strong> Shopify (plan Basic 29€/mois ou Advanced 289€/mois)</li>
      <li><strong>Pourquoi :</strong> Paiement inclus, sécurité PCI-DSS, hébergement, support 24/7</li>
      <li><strong>Alternative :</strong> WooCommerce si WordPress existant ou plus de personnalisation</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Frontend</h3>
    <ul class="feature-list">
      <li><strong>Thème :</strong> Dawn (gratuit Shopify) ou thème premium (150-300€)</li>
      <li><strong>Personnalisation :</strong> Liquid (langage de template Shopify)</li>
      <li><strong>Headless option :</strong> React + Shopify Storefront API si besoin UX ultra custom</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Backend</h3>
    <ul class="feature-list">
      <li><strong>Géré par Shopify :</strong> Pas de backend à développer</li>
      <li><strong>Extensions :</strong> Apps Shopify pour fonctionnalités additionnelles</li>
      <li><strong>Webhooks :</strong> Pour intégrations tierces si nécessaire</li>
      <li><strong>Stock :</strong> Gestion native ou intégration ERP (Zapier, Integromat)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Base de données</h3>
    <ul class="feature-list">
      <li><strong>Gérée par Shopify :</strong> Pas de gestion BDD</li>
      <li><strong>Avantage :</strong> Backup automatique, sécurité garantie</li>
      <li><strong>Export :</strong> CSV possible si besoin de migrer plus tard</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Hébergement</h3>
    <ul class="feature-list">
      <li><strong>Inclus Shopify :</strong> CDN mondial, 99.99% uptime garanti</li>
      <li><strong>SSL :</strong> Inclus et automatique</li>
      <li><strong>Performance :</strong> Excellente out-of-the-box</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Coût mensuel :</strong> 29€ (Basic) à 289€ (Advanced) + 2% commission sur ventes
    <br>
    <strong>Délai de mise en ligne :</strong> 2-3 semaines (avec personnalisation)
    <br>
    <strong>Avantages :</strong> Zéro maintenance technique, tout inclus, support 24/7
    <br>
    <strong>Inconvénient :</strong> Lock-in plateforme, commissions sur ventes
  </div>

  <h3 class="correction-subtitle mt-8">Alternative : WooCommerce (WordPress)</h3>

  <div class="value-type">
    <h3 class="value-title">Si besoin de plus de contrôle ou budget mensuel limité</h3>
    <ul class="correction-list">
      <li><strong>Frontend :</strong> WordPress + WooCommerce + Thème Storefront</li>
      <li><strong>Backend :</strong> PHP + MySQL (WordPress)</li>
      <li><strong>Paiement :</strong> Stripe ou PayPal (plugins gratuits)</li>
      <li><strong>Hébergement :</strong> O2Switch ou Hostinger (5-15€/mois)</li>
      <li><strong>Coût total :</strong> 100-200€/an</li>
      <li><strong>Inconvénient :</strong> Plus de maintenance, mises à jour régulières</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Tableau comparatif</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Blog Personnel</h4>
      <ul class="deliverable-list">
        <li>WordPress</li>
        <li>Hébergement mutualisé</li>
        <li>50-100€/an</li>
        <li>Délai : 1-2 semaines</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">SaaS B2B</h4>
      <ul class="deliverable-list">
        <li>React + Node.js + PostgreSQL</li>
        <li>Vercel + Railway/Render</li>
        <li>Dev : 50k€+, Hosting : 50-500€/mois</li>
        <li>Délai : 3-6 mois</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">E-commerce 500 produits</h4>
      <ul class="deliverable-list">
        <li>Shopify ou WooCommerce</li>
        <li>Inclus (Shopify) ou mutualisé (WP)</li>
        <li>Dev : 10-30k€, Hosting : 29-289€/mois</li>
        <li>Délai : 6-12 semaines</li>
      </ul>
    </div>
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-tech-1',
            question: 'Quel framework frontend est le plus populaire en 2024 ?',
            options: ['Angular', 'React', 'Vue.js', 'Svelte'],
            correctAnswer: 1,
            explanation: 'React est actuellement le framework frontend le plus populaire avec la plus grande communauté.'
          },
          {
            id: 'q-tech-2',
            question: 'Quelle est la différence entre frontend et backend ?',
            options: [
              'Frontend = serveur, Backend = client',
              'Frontend = partie visible, Backend = logique serveur',
              'Aucune différence',
              'Frontend = base de données'
            ],
            correctAnswer: 1,
            explanation: 'Le frontend est la partie visible avec laquelle l\'utilisateur interagit, le backend gère la logique métier et les données côté serveur.'
          },
          {
            id: 'q-tech-3',
            question: 'Qu\'est-ce qu\'une API ?',
            options: [
              'Un langage de programmation',
              'Une interface permettant à deux systèmes de communiquer',
              'Un type de base de données',
              'Un framework CSS'
            ],
            correctAnswer: 1,
            explanation: 'Une API (Application Programming Interface) permet à différents systèmes ou applications de communiquer entre eux.'
          },
          {
            id: 'q-tech-4',
            question: 'Quel CMS est le plus utilisé au monde ?',
            options: [
              'Drupal',
              'Joomla',
              'WordPress',
              'Shopify'
            ],
            correctAnswer: 2,
            explanation: 'WordPress alimente environ 40% des sites web dans le monde, ce qui en fait le CMS le plus populaire.'
          },
          {
            id: 'q-tech-5',
            question: 'Pour un blog personnel avec budget limité, quelle solution est la plus adaptée ?',
            options: [
              'Développement sur mesure en React',
              'WordPress',
              'Application mobile native',
              'Blockchain'
            ],
            correctAnswer: 1,
            explanation: 'WordPress est la solution idéale pour un blog avec budget limité : gratuit, facile à utiliser, excellent SEO et grande communauté.'
          }
        ]
      },
      {
        id: 'cms',
        title: 'Les CMS (Content Management Systems)',
        content: `<div class="section-content">
  <h1 class="section-title">Les CMS (Content Management Systems)</h1>

  <p class="section-text">Un CMS permet de gérer le contenu d'un site sans coder.</p>

  <h2 class="section-subtitle mt-8">CMS populaires</h2>

  <div class="project-type">
    <h3 class="project-type-title">WordPress (40% du web)</h3>
    
    <div class="project-detail">
      <strong>Points forts :</strong>
      <ul class="feature-list">
        <li>Très grande communauté</li>
        <li>Des milliers de plugins</li>
        <li>Facile à prendre en main</li>
        <li>Bon pour le SEO</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Points faibles :</strong>
      <ul class="feature-list">
        <li>Performance parfois limitée</li>
        <li>Sécurité à surveiller</li>
        <li>Peut devenir lourd</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Cas d'usage :</strong> Blog, site vitrine, e-commerce (WooCommerce)
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Shopify</h3>
    
    <div class="project-detail">
      <strong>Points forts :</strong>
      <ul class="feature-list">
        <li>Spécialisé e-commerce</li>
        <li>Solution clé en main</li>
        <li>Hébergement inclus</li>
        <li>Support client excellent</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Points faibles :</strong>
      <ul class="feature-list">
        <li>Frais mensuels</li>
        <li>Moins de liberté</li>
        <li>Dépendance plateforme</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Cas d'usage :</strong> E-commerce pur
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Drupal</h3>
    
    <div class="project-detail">
      <strong>Points forts :</strong>
      <ul class="feature-list">
        <li>Très flexible</li>
        <li>Sécurisé</li>
        <li>Scalable</li>
      </ul>
    </div>

    <div class="project-detail">
      <strong>Points faibles :</strong>
      <ul class="feature-list">
        <li>Courbe d'apprentissage</li>
        <li>Moins de plugins</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Cas d'usage :</strong> Sites institutionnels, gouvernementaux
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Headless CMS</h3>
    
    <div class="project-detail">
      <strong>Strapi, Contentful, Sanity :</strong>
      <ul class="feature-list">
        <li>API-first</li>
        <li>Découplage frontend/backend</li>
        <li>Très flexible</li>
        <li>Multi-plateforme</li>
      </ul>
    </div>

    <div class="example-box">
      <strong>Cas d'usage :</strong> Applications modernes, sites JAMstack, multi-canaux
    </div>
  </div>

  <h2 class="section-subtitle mt-8">CMS vs Développement sur mesure</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Coût</h4>
      <p class="text-sm text-gray-700"><strong>CMS :</strong> €</p>
      <p class="text-sm text-gray-700"><strong>Sur mesure :</strong> €€€</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Délai</h4>
      <p class="text-sm text-gray-700"><strong>CMS :</strong> Court</p>
      <p class="text-sm text-gray-700"><strong>Sur mesure :</strong> Long</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Flexibilité</h4>
      <p class="text-sm text-gray-700"><strong>CMS :</strong> Moyenne</p>
      <p class="text-sm text-gray-700"><strong>Sur mesure :</strong> Totale</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Maintenance</h4>
      <p class="text-sm text-gray-700"><strong>CMS :</strong> Facile</p>
      <p class="text-sm text-gray-700"><strong>Sur mesure :</strong> Complexe</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Performance</h4>
      <p class="text-sm text-gray-700"><strong>CMS :</strong> Moyenne</p>
      <p class="text-sm text-gray-700"><strong>Sur mesure :</strong> Optimale</p>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'CMS ou développement sur mesure ?',
          description: 'Conseiller un client sur le choix',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Situation :</strong> Un client hésite entre WordPress et un développement sur mesure.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Besoins du client :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Site vitrine avec blog</li>
    <li>20 pages</li>
    <li>Formulaires de contact</li>
    <li>Galerie photos</li>
    <li>Newsletter</li>
    <li>Budget : 8 000€</li>
    <li>Le client souhaite pouvoir modifier les contenus lui-même</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Questions :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Que lui recommanderiez-vous et pourquoi ?</li>
    <li>Quels sont les arguments pour chaque solution ?</li>
    <li>Quel budget estimez-vous pour chaque option ?</li>
    <li>Quels risques identifiez-vous ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Recommandation : WordPress (à 95%)</h2>

  <div class="example-box">
    <strong>Verdict :</strong> WordPress est LA solution adaptée pour ce projet.
    <br>
    <strong>Raison principale :</strong> Budget de 8 000€ + autonomie du client = WordPress est parfait
  </div>

  <h2 class="correction-title mt-8">1. Recommandation détaillée</h2>

  <div class="value-type">
    <h3 class="value-title">Solution recommandée : WordPress</h3>
    <ul class="correction-list">
      <li><strong>Pourquoi WordPress ?</strong>
        <ul class="ml-6 mt-2 space-y-1 text-sm">
          <li>→ Budget de 8 000€ : suffisant pour WordPress, insuffisant pour du sur-mesure</li>
          <li>→ Client veut modifier lui-même : interface WordPress = intuitive</li>
          <li>→ Besoins standards : tout existe en plugin gratuit</li>
          <li>→ Blog intégré nativement</li>
          <li>→ SEO excellent avec Yoast</li>
          <li>→ 20 pages = facile à gérer</li>
          <li>→ Pas de fonctionnalité complexe nécessitant du custom</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Configuration WordPress recommandée</h3>
    <ul class="feature-list">
      <li><strong>Thème :</strong> Astra ou GeneratePress (léger, rapide, personnalisable)</li>
      <li><strong>Page builder :</strong> Elementor Free (suffisant)</li>
      <li><strong>Formulaires :</strong> Contact Form 7 ou WPForms</li>
      <li><strong>Newsletter :</strong> Mailchimp for WordPress ou Newsletter plugin</li>
      <li><strong>Galerie :</strong> Envira Gallery Lite ou FooGallery</li>
      <li><strong>SEO :</strong> Yoast SEO</li>
      <li><strong>Performance :</strong> WP Rocket + Imagify</li>
      <li><strong>Sécurité :</strong> Wordfence</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Arguments pour chaque solution</h2>

  <div class="project-type">
    <h3 class="project-type-title">Arguments POUR WordPress</h3>
    <ul class="feature-list">
      <li><strong>Budget cohérent :</strong> 8 000€ couvre design + dev + formation</li>
      <li><strong>Autonomie client :</strong> Interface très intuitive, formation en 2h</li>
      <li><strong>Rapidité :</strong> Mise en ligne en 4-6 semaines</li>
      <li><strong>Fonctionnalités :</strong> Tout existe en plugin (gratuit ou pas cher)</li>
      <li><strong>Maintenance :</strong> Simple, mises à jour en 1 clic</li>
      <li><strong>Évolutivité :</strong> Facile d'ajouter des fonctions plus tard</li>
      <li><strong>SEO natif :</strong> Excellent référencement</li>
      <li><strong>Communauté :</strong> Énorme, documentation infinie</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Arguments CONTRE WordPress</h3>
    <ul class="feature-list">
      <li><strong>Performance :</strong> Moins rapide qu'un site statique (mais optimisable)</li>
      <li><strong>Sécurité :</strong> Cible fréquente des hackers (mais gérable avec plugins)</li>
      <li><strong>Plugins :</strong> Risque de conflit entre plugins</li>
      <li><strong>Mises à jour :</strong> À faire régulièrement (3-4 fois/an)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Arguments POUR développement sur mesure</h3>
    <ul class="feature-list">
      <li><strong>Performance maximale :</strong> Code optimisé</li>
      <li><strong>Design 100% unique :</strong> Aucune contrainte</li>
      <li><strong>Sécurité :</strong> Moins de failles connues</li>
      <li><strong>Propriété totale :</strong> Pas de dépendance CMS</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Arguments CONTRE développement sur mesure</h3>
    <ul class="feature-list">
      <li><strong>Budget :</strong> 8 000€ = insuffisant (besoin 15-25k€ minimum)</li>
      <li><strong>Délai :</strong> 3-4 mois au lieu de 4-6 semaines</li>
      <li><strong>Autonomie client :</strong> Interface admin à développer (complexe)</li>
      <li><strong>Maintenance :</strong> Besoin de développeur pour toute modification</li>
      <li><strong>Évolution :</strong> Coûteuse (développement à chaque fois)</li>
      <li><strong>Overkill :</strong> Complexité inutile pour ce besoin simple</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Budget estimé</h2>

  <div class="value-type">
    <h3 class="value-title">Option A : WordPress</h3>
    <ul class="correction-list">
      <li><strong>Design + UX :</strong> 2 000€ (wireframes + maquettes + validation)</li>
      <li><strong>Développement :</strong> 3 500€ (installation, personnalisation thème, plugins)</li>
      <li><strong>Intégration contenu :</strong> 1 500€ (20 pages + blog)</li>
      <li><strong>Formation client :</strong> 500€ (2-3h de formation)</li>
      <li><strong>Recette et tests :</strong> 500€</li>
      <li><strong>TOTAL :</strong> <span class="highlight">8 000€</span></li>
      <li><strong>Coût annuel :</strong> 150-200€/an (hébergement + domaine + licences)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Option B : Développement sur mesure</h3>
    <ul class="correction-list">
      <li><strong>Cadrage et spécifications :</strong> 2 000€</li>
      <li><strong>Design + UX :</strong> 3 000€</li>
      <li><strong>Développement frontend :</strong> 6 000€ (React + intégration)</li>
      <li><strong>Développement backend :</strong> 4 000€ (Node.js + API + BDD)</li>
      <li><strong>Interface admin :</strong> 3 000€ (CMS custom)</li>
      <li><strong>Tests et déploiement :</strong> 2 000€</li>
      <li><strong>TOTAL :</strong> <span class="highlight">20 000€</span></li>
      <li><strong>Coût annuel :</strong> 500-1 000€/an (hébergement + maintenance)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Écart de budget :</strong> +12 000€ pour du sur-mesure (+150%)
    <br>
    <strong>Écart de délai :</strong> +2 mois
    <br>
    <strong>Conclusion :</strong> Rapport coût/bénéfice en faveur de WordPress
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Risques identifiés</h2>

  <div class="project-type">
    <h3 class="project-type-title">Risques WordPress</h3>
    <div class="project-detail">
      <strong>Risque 1 : Sécurité</strong>
      <ul class="feature-list">
        <li>WordPress = cible des hackers</li>
        <li><strong>Mitigation :</strong> Wordfence, mises à jour régulières, mots de passe forts</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Risque 2 : Performance</strong>
      <ul class="feature-list">
        <li>Site peut devenir lent avec trop de plugins</li>
        <li><strong>Mitigation :</strong> WP Rocket, optimisation images, CDN, bon hébergement</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Risque 3 : Mises à jour</strong>
      <ul class="feature-list">
        <li>Plugins peuvent casser après update</li>
        <li><strong>Mitigation :</strong> Backup automatique avant update, environnement de staging</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Risques Développement sur mesure</h3>
    <div class="project-detail">
      <strong>Risque 1 : Dépassement de budget</strong>
      <ul class="feature-list">
        <li>8 000€ insuffisants = projet incomplet ou qualité dégradée</li>
        <li><strong>Mitigation :</strong> Augmenter le budget ou choisir WordPress</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Risque 2 : Dépendance développeur</strong>
      <ul class="feature-list">
        <li>Client dépendant pour toute modification</li>
        <li><strong>Mitigation :</strong> Former le client, documentation complète (coûteux)</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Risque 3 : Maintenance complexe</strong>
      <ul class="feature-list">
        <li>Évolutions futures coûteuses</li>
        <li><strong>Mitigation :</strong> Contrat de maintenance (500-1000€/mois)</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">Argumentaire pour convaincre le client</h2>

  <div class="example-box">
    <p class="mb-3"><strong>"Monsieur le client, voici mon analyse professionnelle :"</strong></p>
    
    <p class="mb-2">
      <strong>1. Budget réaliste :</strong> Votre budget de 8 000€ est parfait pour un site WordPress de qualité professionnelle. 
      Pour du développement sur mesure, il faudrait minimum 20 000€.
    </p>

    <p class="mb-2">
      <strong>2. Autonomie garantie :</strong> Avec WordPress, vous pourrez modifier textes, images, articles de blog vous-même 
      en 5 minutes. Avec du sur-mesure, vous devrez me rappeler à chaque fois (facturé).
    </p>

    <p class="mb-2">
      <strong>3. Rapidité :</strong> WordPress = 6 semaines. Sur mesure = 3-4 mois.
    </p>

    <p class="mb-2">
      <strong>4. Évolutivité :</strong> Besoin d'ajouter une boutique plus tard ? Un plugin WooCommerce et c'est réglé. 
      Avec du sur-mesure, il faut tout redévelopper.
    </p>

    <p class="mb-2">
      <strong>5. Maintenance :</strong> WordPress = 2-3h/an de mises à jour. Sur mesure = contrat 500€/mois minimum.
    </p>

    <p class="mt-4">
      <strong>Ma recommandation :</strong> Investissons les 8 000€ dans un WordPress de qualité avec un beau design, 
      une bonne optimisation SEO, et je vous forme pour que vous soyez autonome. C'est le meilleur rapport qualité/prix.
    </p>
  </div>
</div>`
        }
      }
    ]
  },
  {
    id: 'test',
    title: 'Phase de test',
    description: 'Tests, recette et validation du projet',
    sections: [
      {
        id: 'tests-equipe',
        title: 'Tests par l\'équipe projet',
        content: `<div class="section-content">
  <h1 class="section-title">Tests par l'équipe projet</h1>

  <p class="section-text">Les tests sont cruciaux pour livrer un produit de qualité.</p>

  <h2 class="section-subtitle mt-8">Types de tests</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Tests unitaires</h3>
    <ul class="feature-list">
      <li>Tester chaque fonction isolément</li>
      <li>Automatisés</li>
      <li>Rapides à exécuter</li>
    </ul>
    <div class="example-box">
      <strong>Outils :</strong> Jest, Mocha, PHPUnit
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Tests d'intégration</h3>
    <ul class="feature-list">
      <li>Tester les interactions entre composants</li>
      <li>Vérifier que les modules fonctionnent ensemble</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Tests fonctionnels</h3>
    <ul class="feature-list">
      <li>Tester les fonctionnalités end-to-end</li>
      <li>Simuler le comportement utilisateur</li>
    </ul>
    <div class="example-box">
      <strong>Outils :</strong> Cypress, Selenium, Playwright
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Tests de performance</h3>
    <ul class="feature-list">
      <li>Temps de chargement</li>
      <li>Charge serveur</li>
      <li>Optimisation</li>
    </ul>
    <div class="example-box">
      <strong>Outils :</strong> Lighthouse, GTmetrix, WebPageTest
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5. Tests de sécurité</h3>
    <ul class="feature-list">
      <li>Injection SQL</li>
      <li>XSS (Cross-Site Scripting)</li>
      <li>CSRF</li>
      <li>Authentification</li>
    </ul>
    <div class="example-box">
      <strong>Outils :</strong> OWASP ZAP, Burp Suite
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">6. Tests d'accessibilité</h3>
    <ul class="feature-list">
      <li>Conformité WCAG</li>
      <li>Navigation au clavier</li>
      <li>Lecteurs d'écran</li>
    </ul>
    <div class="example-box">
      <strong>Outils :</strong> axe DevTools, WAVE
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">7. Tests de compatibilité</h3>
    <ul class="feature-list">
      <li>Navigateurs (Chrome, Firefox, Safari, Edge)</li>
      <li>Devices (desktop, mobile, tablette)</li>
      <li>Systèmes d'exploitation</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Stratégie de tests - Pyramide</h2>

  <div class="example-box">
    <strong>Pyramide des tests :</strong>
    <br><br>
    <div class="text-center">
      Haut : E2E (Peu de tests - lents, coûteux)
      <br>
      Milieu : Intégration (Tests modérés)
      <br>
      Base : Unitaires (Beaucoup de tests - rapides)
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Checklist de tests</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Fonctionnel</h4>
      <ul class="deliverable-list">
        <li>Toutes les fonctionnalités marchent</li>
        <li>Formulaires validés</li>
        <li>Navigation fluide</li>
        <li>Liens fonctionnels</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Performance</h4>
      <ul class="deliverable-list">
        <li>Temps de chargement &lt; 3s</li>
        <li>Images optimisées</li>
        <li>Cache configuré</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Sécurité</h4>
      <ul class="deliverable-list">
        <li>HTTPS activé</li>
        <li>Formulaires protégés</li>
        <li>Mots de passe hashés</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">SEO</h4>
      <ul class="deliverable-list">
        <li>Balises meta</li>
        <li>Sitemap.xml</li>
        <li>URLs propres</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Responsive</h4>
      <ul class="deliverable-list">
        <li>Mobile-friendly</li>
        <li>Tablette OK</li>
        <li>Desktop OK</li>
      </ul>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Plan de tests',
          description: 'Élaborer un plan de tests complet',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Projet :</strong> Application de réservation en ligne</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Fonctionnalités à tester :</h4>
  <ol class="list-decimal list-inside space-y-1 ml-4 text-gray-800">
    <li>Création de compte utilisateur</li>
    <li>Connexion/déconnexion</li>
    <li>Recherche de disponibilités</li>
    <li>Réservation avec paiement</li>
    <li>Confirmation par email</li>
    <li>Espace client (historique)</li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Créez une checklist de tests pour chaque fonctionnalité</li>
    <li>Identifiez les cas limites (edge cases) à tester</li>
    <li>Proposez 5 scénarios de tests end-to-end</li>
    <li>Listez les outils que vous utiliseriez</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Plan de tests complet - Application de réservation</h2>

  <h2 class="correction-title mt-8">1. Checklist par fonctionnalité</h2>

  <div class="project-type">
    <h3 class="project-type-title">F1 : Création de compte utilisateur</h3>
    <ul class="feature-list">
      <li>Email valide accepté, email invalide rejeté</li>
      <li>Mot de passe min 8 caractères avec chiffres et lettres</li>
      <li>Email déjà existant → message d'erreur clair</li>
      <li>Email de confirmation envoyé</li>
      <li>Lien de validation email fonctionnel</li>
      <li>Compte activé après validation</li>
      <li>Redirection vers tableau de bord après création</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">F2 : Connexion/Déconnexion</h3>
    <ul class="feature-list">
      <li>Connexion avec identifiants corrects → succès</li>
      <li>Connexion avec mauvais mot de passe → erreur</li>
      <li>3 tentatives échouées → blocage temporaire (5 min)</li>
      <li>"Mot de passe oublié" envoie un email de reset</li>
      <li>Session maintenue (cookies)</li>
      <li>Déconnexion efface la session</li>
      <li>Redirection vers login après déconnexion</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">F3 : Recherche de disponibilités</h3>
    <ul class="feature-list">
      <li>Calendrier affiche dates futures uniquement</li>
      <li>Créneaux affichés selon nombre de personnes</li>
      <li>Créneaux complets grisés et non cliquables</li>
      <li>Recherche &lt; 1 seconde</li>
      <li>Message si aucune dispo trouvée</li>
      <li>Proposition de créneaux alternatifs</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">F4 : Réservation avec paiement</h3>
    <ul class="feature-list">
      <li>Récapitulatif clair avant paiement</li>
      <li>Paiement CB test réussi (Stripe test mode)</li>
      <li>Paiement refusé → message d'erreur + retry possible</li>
      <li>Double réservation impossible (lock BDD)</li>
      <li>Transaction sécurisée (HTTPS, 3D Secure)</li>
      <li>Reçu de paiement généré (PDF)</li>
      <li>Réservation enregistrée en BDD</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">F5 : Confirmation par email</h3>
    <ul class="feature-list">
      <li>Email reçu dans les 30 secondes</li>
      <li>Email bien formaté (HTML + texte brut)</li>
      <li>Toutes les infos présentes (date, heure, lieu)</li>
      <li>Lien de gestion fonctionnel</li>
      <li>Email dans spam → vérifier SPF/DKIM</li>
      <li>Email non reçu → fonction "Renvoyer"</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">F6 : Espace client (historique)</h3>
    <ul class="feature-list">
      <li>Affichage de toutes les réservations (passées + futures)</li>
      <li>Tri par date (plus récentes en premier)</li>
      <li>Statut clair (confirmée, annulée, passée)</li>
      <li>Accès aux détails de chaque réservation</li>
      <li>Téléchargement des reçus (PDF)</li>
      <li>Pagination si > 20 réservations</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Cas limites (Edge Cases) à tester</h2>

  <div class="value-type">
    <h3 class="value-title">Edge Cases critiques</h3>
    <ul class="correction-list">
      <li><strong>Double réservation simultanée :</strong> 2 users réservent le même créneau en même temps</li>
      <li><strong>Paiement en cours puis abandon :</strong> Fermeture navigateur pendant paiement</li>
      <li><strong>Date invalide :</strong> Réservation pour hier (manipulation URL)</li>
      <li><strong>Nombre de personnes aberrant :</strong> 0 personne ou 999 personnes</li>
      <li><strong>Email invalide format :</strong> "test@" ou "test.com"</li>
      <li><strong>Caractères spéciaux :</strong> Injection SQL dans les champs</li>
      <li><strong>Session expirée :</strong> Token périmé lors de la validation</li>
      <li><strong>Email non délivré :</strong> Serveur email down</li>
      <li><strong>Créneau libéré entre recherche et validation :</strong> Race condition</li>
      <li><strong>Modification post-paiement :</strong> Changement date après avoir payé</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Scénarios de tests End-to-End</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Scénario 1 : Happy Path</h4>
      <ul class="deliverable-list">
        <li>Création compte</li>
        <li>Validation email</li>
        <li>Connexion</li>
        <li>Recherche dispo</li>
        <li>Réservation + paiement</li>
        <li>Email reçu</li>
        <li>Vérification historique</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Scénario 2 : Modification</h4>
      <ul class="deliverable-list">
        <li>Réservation initiale</li>
        <li>Click lien gestion</li>
        <li>Modifier la date</li>
        <li>Confirmation changement</li>
        <li>Nouvel email reçu</li>
        <li>Historique mis à jour</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Scénario 3 : Annulation</h4>
      <ul class="deliverable-list">
        <li>Réservation existante</li>
        <li>Annulation depuis espace client</li>
        <li>Confirmation demandée</li>
        <li>Remboursement traité</li>
        <li>Email annulation reçu</li>
        <li>Créneau à nouveau disponible</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Scénario 4 : Erreur paiement</h4>
      <ul class="deliverable-list">
        <li>Recherche et sélection</li>
        <li>Paiement refusé (CB test)</li>
        <li>Message erreur clair</li>
        <li>Possibilité retry</li>
        <li>Créneau toujours réservé 5 min</li>
        <li>Expiration après 5 min</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Scénario 5 : Multi-device</h4>
      <ul class="deliverable-list">
        <li>Réservation sur mobile</li>
        <li>Consultation historique sur desktop</li>
        <li>Modification sur tablette</li>
        <li>Sync parfaite entre devices</li>
        <li>UX adaptée à chaque format</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Outils recommandés</h2>

  <div class="value-type">
    <h3 class="value-title">Tests automatisés</h3>
    <ul class="correction-list">
      <li><strong>Cypress :</strong> Tests E2E (parcours utilisateur complets)</li>
      <li><strong>Jest :</strong> Tests unitaires (fonctions JavaScript)</li>
      <li><strong>React Testing Library :</strong> Tests composants React</li>
      <li><strong>Playwright :</strong> Tests multi-navigateurs automatiques</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Performance</h3>
    <ul class="correction-list">
      <li><strong>Lighthouse :</strong> Audit complet (perf, SEO, a11y)</li>
      <li><strong>GTmetrix :</strong> Analyse détaillée performance</li>
      <li><strong>WebPageTest :</strong> Tests multi-localisations</li>
      <li><strong>Chrome DevTools :</strong> Profiling et debug</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Sécurité</h3>
    <ul class="correction-list">
      <li><strong>OWASP ZAP :</strong> Scan vulnérabilités</li>
      <li><strong>Snyk :</strong> Détection failles dépendances npm</li>
      <li><strong>SSL Labs :</strong> Vérification config SSL</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Accessibilité</h3>
    <ul class="correction-list">
      <li><strong>axe DevTools :</strong> Extension Chrome</li>
      <li><strong>WAVE :</strong> Évaluation accessibilité</li>
      <li><strong>Screen reader :</strong> NVDA ou VoiceOver (tests manuels)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Compatibilité</h3>
    <ul class="correction-list">
      <li><strong>BrowserStack :</strong> Tests multi-navigateurs cloud</li>
      <li><strong>Chrome DevTools :</strong> Device emulation</li>
      <li><strong>Appareils réels :</strong> iPhone, Android, iPad (indispensable)</li>
    </ul>
  </div>

  <div class="example-box mt-8">
    <strong>Durée estimée des tests :</strong> 1-2 semaines
    <br>
    <strong>Budget tests :</strong> 15-20% du budget total développement
    <br>
    <strong>ROI :</strong> 1 bug en prod coûte 10x plus cher qu'en phase de test
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-test-1',
            question: 'Quel type de test est le plus rapide à exécuter ?',
            options: [
              'Tests end-to-end',
              'Tests d\'intégration',
              'Tests unitaires',
              'Tests manuels'
            ],
            correctAnswer: 2,
            explanation: 'Les tests unitaires testent des fonctions isolées et sont donc les plus rapides.'
          },
          {
            id: 'q-test-2',
            question: 'Qu\'est-ce que la recette client (UAT) ?',
            options: [
              'Un repas de fin de projet',
              'La validation formelle du projet par le client',
              'Un outil de test',
              'Une phase de développement'
            ],
            correctAnswer: 1,
            explanation: 'La recette (User Acceptance Testing) est la validation formelle où le client teste et approuve le projet avant la mise en production.'
          },
          {
            id: 'q-test-3',
            question: 'Comment classe-t-on généralement les bugs ?',
            options: [
              'Par couleur',
              'Par développeur',
              'Par sévérité (bloquant, majeur, mineur)',
              'Par date'
            ],
            correctAnswer: 2,
            explanation: 'Les bugs sont classés par sévérité : bloquant (empêche l\'utilisation), majeur (impact important), mineur (esthétique ou faible impact).'
          },
          {
            id: 'q-test-4',
            question: 'Quel outil est recommandé pour tester les performances d\'un site ?',
            options: [
              'Photoshop',
              'Lighthouse',
              'Slack',
              'Trello'
            ],
            correctAnswer: 1,
            explanation: 'Lighthouse est un outil de Google qui audite les performances, le SEO, l\'accessibilité et les bonnes pratiques d\'un site.'
          },
          {
            id: 'q-test-5',
            question: 'Qu\'est-ce qu\'un PV de recette ?',
            options: [
              'Un planning de vente',
              'Un procès-verbal attestant la validation du projet',
              'Un outil de versioning',
              'Une base de données'
            ],
            correctAnswer: 1,
            explanation: 'Le PV (Procès-Verbal) de recette est un document signé par le client qui atteste de la validation du projet et autorise la mise en production.'
          }
        ]
      },
      {
        id: 'recette',
        title: 'Recette et validation finale par le client',
        content: `<div class="section-content">
  <h1 class="section-title">Recette client</h1>

  <p class="section-text">La phase de recette valide que le projet répond au cahier des charges.</p>

  <h2 class="section-subtitle mt-8">Qu'est-ce que la recette ?</h2>

  <div class="value-type">
    <p class="text-gray-800">La recette (ou UAT - User Acceptance Testing) est la validation formelle du projet par le client avant la mise en production.</p>
  </div>

  <h2 class="section-subtitle mt-8">Types de recette</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Recette fonctionnelle</h4>
      <p class="text-sm text-gray-700">Vérifier que toutes les fonctionnalités du CDC sont présentes et fonctionnelles</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Recette technique</h4>
      <p class="text-sm text-gray-700">Vérifier les performances, la sécurité, la compatibilité</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Recette utilisateur</h4>
      <p class="text-sm text-gray-700">Tester avec de vrais utilisateurs dans des conditions réelles</p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Processus de recette</h2>

  <div class="project-type">
    <h3 class="project-type-title">Étape 1 : Préparation</h3>
    <ul class="feature-list">
      <li>Créer un cahier de recette</li>
      <li>Lister tous les points à valider</li>
      <li>Définir les critères d'acceptation</li>
      <li>Préparer l'environnement de recette</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 2 : Tests</h3>
    <ul class="feature-list">
      <li>Le client teste selon le cahier de recette</li>
      <li>Documentation des anomalies</li>
      <li>Classification (bloquant, majeur, mineur)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 3 : Corrections</h3>
    <ul class="feature-list">
      <li>Correction des bugs identifiés</li>
      <li>Nouvelle version pour re-test</li>
      <li>Validation des corrections</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Étape 4 : Validation</h3>
    <ul class="feature-list">
      <li>PV de recette (Procès-verbal)</li>
      <li>Signature du client</li>
      <li>Autorisation de mise en production</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Bonnes pratiques</h2>

  <div class="value-type">
    <h3 class="value-title">À faire</h3>
    <ul class="feature-list">
      <li>Impliquer le client dès le début</li>
      <li>Prévoir du temps pour les corrections</li>
      <li>Documenter chaque point testé</li>
      <li>Tester en conditions réelles</li>
      <li>Faire signer un PV de recette</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">À éviter</h3>
    <ul class="feature-list">
      <li>Bâcler la phase de recette</li>
      <li>Accepter des validations orales</li>
      <li>Ignorer les retours clients</li>
      <li>Mettre en prod sans validation formelle</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Gérer une recette client',
          description: 'Situation de recette avec anomalies',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous présentez votre site e-commerce au client pour la recette.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Retours du client :</h4>
  <ol class="list-decimal list-inside space-y-2 ml-4 text-gray-800">
    <li>"Le formulaire de contact ne fonctionne pas" <span class="highlight">BLOQUANT</span></li>
    <li>"La couleur des boutons ne correspond pas à la charte" <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded font-bold text-xs">MINEUR</span></li>
    <li>"Le temps de chargement des pages produits est trop long" <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded font-bold text-xs">MAJEUR</span></li>
    <li>"Il manque le lien vers les CGV dans le footer" <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded font-bold text-xs">MAJEUR</span></li>
    <li>"Je voudrais ajouter une fonctionnalité de wishlist" <span class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold text-xs">HORS SCOPE</span></li>
  </ol>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Questions :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Comment classeriez-vous ces anomalies par priorité ?</li>
    <li>Lesquelles doivent être corrigées avant la mise en prod ?</li>
    <li>Comment gérez-vous la demande hors scope (wishlist) ?</li>
    <li>Rédigez un plan d'action avec délais</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Gestion des anomalies de recette</h2>

  <h2 class="correction-title mt-8">1. Classification par priorité</h2>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 1 : BLOQUANT - Formulaire de contact</h3>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="highlight">CRITIQUE</span> - Mise en prod IMPOSSIBLE
    </div>
    <div class="project-detail">
      <strong>Raison :</strong> Fonctionnalité essentielle qui ne fonctionne pas du tout
    </div>
    <div class="project-detail">
      <strong>Action :</strong> Correction immédiate obligatoire avant toute mise en production
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 2 : MAJEUR - CGV manquantes</h3>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded font-bold">IMPORTANT</span> - Obligation légale
    </div>
    <div class="project-detail">
      <strong>Raison :</strong> Conformité RGPD/légale obligatoire
    </div>
    <div class="project-detail">
      <strong>Action :</strong> Correction avant mise en prod (risque juridique)
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 3 : MAJEUR - Performance pages produits</h3>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="bg-orange-100 text-orange-900 px-2 py-0.5 rounded font-bold">IMPORTANT</span> - Perte de conversions
    </div>
    <div class="project-detail">
      <strong>Raison :</strong> Impacte l'expérience utilisateur et le SEO
    </div>
    <div class="project-detail">
      <strong>Action :</strong> Correction avant mise en prod si > 5 secondes, sinon post-lancement acceptable
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 4 : MINEUR - Couleur des boutons</h3>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="bg-yellow-100 text-yellow-900 px-2 py-0.5 rounded font-bold">FAIBLE</span> - Esthétique uniquement
    </div>
    <div class="project-detail">
      <strong>Raison :</strong> Ne bloque pas l'utilisation
    </div>
    <div class="project-detail">
      <strong>Action :</strong> Correction rapide possible, ou post-lancement
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 5 : HORS SCOPE - Wishlist</h3>
    <div class="project-detail">
      <strong>Impact :</strong> <span class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold">HORS CDC</span> - Nouvelle fonctionnalité
    </div>
    <div class="project-detail">
      <strong>Raison :</strong> Pas dans le cahier des charges initial
    </div>
    <div class="project-detail">
      <strong>Action :</strong> Refus pour V1, proposition pour V2 (chiffrage séparé)
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. À corriger avant mise en prod</h2>

  <div class="value-type">
    <h3 class="value-title">Corrections obligatoires (Go/No-Go)</h3>
    <ul class="correction-list">
      <li><strong>Anomalie 1 (Bloquant) :</strong> Formulaire de contact → OUI, absolument</li>
      <li><strong>Anomalie 4 (Majeur) :</strong> CGV manquantes → OUI, obligation légale</li>
      <li><strong>Anomalie 3 (Majeur) :</strong> Performance → OUI si > 5s, sinon négociable</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Corrections optionnelles</h3>
    <ul class="correction-list">
      <li><strong>Anomalie 2 (Mineur) :</strong> Couleur boutons → Si rapide (< 1h), sinon post-lancement</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Refus</h3>
    <ul class="correction-list">
      <li><strong>Anomalie 5 (Hors scope) :</strong> Wishlist → NON pour V1, proposition V2 avec devis</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Gestion de la demande hors scope (Wishlist)</h2>

  <div class="example-box">
    <strong>Discours au client :</strong>
    <p class="mt-2 text-gray-800">
      "Monsieur le client, la fonctionnalité de wishlist est une excellente idée qui apportera de la valeur à vos utilisateurs. 
      Cependant, elle n'était pas prévue dans le cahier des charges initial que nous avons validé ensemble.
    </p>
    <p class="mt-2 text-gray-800">
      L'ajouter maintenant retarderait la mise en production de 2-3 semaines et augmenterait le budget de 3 000€. 
      Je vous propose plutôt de la planifier pour une version 2, juste après le lancement.
    </p>
    <p class="mt-2 text-gray-800">
      Avantages de l'approche V2 :
      <br>
      • Pas de retard sur le lancement avant les fêtes
      <br>
      • Données réelles pour bien calibrer la fonctionnalité
      <br>
      • Budget séparé, plus clair
      <br>
      • Permet de prioriser selon l'usage réel
    </p>
    <p class="mt-2 text-gray-800">
      Je peux vous faire un devis dédié pour la wishlist à déployer en janvier. Qu'en pensez-vous ?"
    </p>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Plan d'action avec délais</h2>

  <div class="project-type">
    <h3 class="project-type-title">Jour 1 (Lundi) - Diagnostic</h3>
    <ul class="feature-list">
      <li><strong>9h-10h :</strong> Reproduction bug formulaire contact</li>
      <li><strong>10h-11h :</strong> Analyse performance pages produits (Lighthouse)</li>
      <li><strong>11h-12h :</strong> Point équipe, répartition des tâches</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Jour 1-2 (Lundi-Mardi) - Corrections prioritaires</h3>
    <ul class="feature-list">
      <li><strong>Anomalie 1 (Bloquant) :</strong> Fix formulaire → 2h dev + 1h test</li>
      <li><strong>Anomalie 4 (Majeur) :</strong> Ajout lien CGV footer → 30 min</li>
      <li><strong>Anomalie 3 (Majeur) :</strong> Optimisation perf → 4-6h (images, cache)</li>
      <li><strong>Deadline :</strong> Mardi 17h</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Jour 3 (Mercredi) - Re-test</h3>
    <ul class="feature-list">
      <li><strong>9h-12h :</strong> Tests internes des corrections</li>
      <li><strong>14h-17h :</strong> Re-recette avec le client</li>
      <li><strong>Si OK :</strong> Signature PV de recette</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Jour 3-4 (Mercredi-Jeudi) - Finitions</h3>
    <ul class="feature-list">
      <li><strong>Anomalie 2 (Mineur) :</strong> Couleur boutons → 1h (si temps disponible)</li>
      <li><strong>Tests finaux :</strong> Vérification complète</li>
      <li><strong>Préparation déploiement :</strong> Checklist, backup, DNS</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Jour 5 (Vendredi) - Go Live</h3>
    <ul class="feature-list">
      <li><strong>Si PV signé :</strong> Mise en production</li>
      <li><strong>Si problèmes restants :</strong> Report au lundi suivant</li>
    </ul>
  </div>

  <div class="example-box mt-8">
    <strong>Délai total corrections :</strong> 3-4 jours ouvrés
    <br>
    <strong>Coût additionnel :</strong> Inclus dans la garantie (corrections bugs)
    <br>
    <strong>Wishlist V2 :</strong> Devis séparé 3 000€, délai +3 semaines
  </div>
</div>`
        }
      }
    ]
  },
  {
    id: 'lancement-prod',
    title: 'Phase de lancement',
    description: 'Déploiement, SEO et stratégies marketing',
    sections: [
      {
        id: 'deploiement',
        title: 'Déploiement et mise en production',
        content: `<div class="section-content">
  <h1 class="section-title">Déploiement et mise en production</h1>

  <p class="section-text">Le moment tant attendu : mettre votre projet en ligne !</p>

  <h2 class="section-subtitle mt-8">Checklist pré-déploiement</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Technique</h4>
      <ul class="deliverable-list">
        <li>Tests complets effectués</li>
        <li>Recette client validée et signée</li>
        <li>Backup de l'existant réalisé</li>
        <li>Variables d'environnement configurées</li>
        <li>Base de données de production prête</li>
        <li>Certificat SSL installé</li>
        <li>DNS configuré</li>
        <li>Monitoring en place</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Contenu</h4>
      <ul class="deliverable-list">
        <li>Tous les contenus intégrés</li>
        <li>Images optimisées</li>
        <li>Mentions légales et CGU/CGV</li>
        <li>Page 404 personnalisée</li>
        <li>Sitemap.xml généré</li>
        <li>Robots.txt configuré</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Sécurité</h4>
      <ul class="deliverable-list">
        <li>HTTPS forcé</li>
        <li>Mots de passe sécurisés</li>
        <li>Sauvegardes automatiques configurées</li>
        <li>Firewall activé</li>
        <li>Protection DDoS si nécessaire</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Stratégies de déploiement</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Big Bang</h3>
    <p class="project-detail">Tout en une fois, remplacement complet</p>
    <div class="project-detail">
      <strong>Avantages :</strong> Simple, rapide
      <br>
      <strong>Inconvénients :</strong> Risqué, pas de retour arrière facile
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Déploiement progressif (Rolling)</h3>
    <p class="project-detail">Mise à jour progressive des serveurs</p>
    <div class="project-detail">
      <strong>Avantages :</strong> Moins risqué
      <br>
      <strong>Inconvénients :</strong> Plus long
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Blue-Green Deployment</h3>
    <p class="project-detail">Deux environnements : un actif (blue), un en préparation (green)</p>
    <div class="project-detail">
      <strong>Avantages :</strong> Rollback instantané
      <br>
      <strong>Inconvénients :</strong> Coût (double infrastructure)
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Canary Release</h3>
    <p class="project-detail">Déploiement pour un petit % d'utilisateurs d'abord</p>
    <div class="project-detail">
      <strong>Avantages :</strong> Test en conditions réelles
      <br>
      <strong>Inconvénients :</strong> Configuration complexe
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Jour J : Le déploiement</h2>

  <div class="value-type">
    <h3 class="value-title">Planning type</h3>
    <ul class="correction-list-compact">
      <li><strong>14h00 :</strong> Début → Mise en maintenance + Backup final</li>
      <li><strong>14h30 :</strong> Déploiement → Upload fichiers + Migration BDD + Config serveur</li>
      <li><strong>15h30 :</strong> Tests post-déploiement → Tests critiques + DNS + Formulaires</li>
      <li><strong>16h30 :</strong> Mise en ligne → Retrait maintenance + Monitoring + Astreinte</li>
      <li><strong>18h00 :</strong> Bilan J0 → Vérification métriques + Détection anomalies</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Plan de rollback</h2>

  <div class="value-type">
    <h3 class="value-title">Toujours prévoir un plan B</h3>
    <ul class="feature-list">
      <li>Backup accessible rapidement</li>
      <li>Procédure de retour arrière documentée</li>
      <li>Équipe technique disponible</li>
      <li>Communication client préparée</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Planifier un déploiement',
          description: 'Organiser la mise en production',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Projet :</strong> Refonte d'un site e-commerce avec 50 000 visiteurs/mois</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Contraintes :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Site existant actif 24/7</li>
    <li>Pic de trafic entre 18h-22h</li>
    <li>Migration de 2500 produits</li>
    <li>Nouveau CMS (PrestaShop → Shopify)</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Questions :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Quel jour et quelle heure choisir pour le déploiement ?</li>
    <li>Quelle stratégie de déploiement recommandez-vous ?</li>
    <li>Créez une checklist pré-déploiement adaptée</li>
    <li>Rédigez un planning heure par heure du jour J</li>
    <li>Définissez les critères qui déclencheraient un rollback</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Plan de déploiement - E-commerce 50k visiteurs/mois</h2>

  <h2 class="correction-title mt-8">1. Jour et heure du déploiement</h2>

  <div class="value-type">
    <h3 class="value-title">Recommandation : Mardi 2h00 du matin</h3>
    <ul class="correction-list">
      <li><strong>Jour :</strong> Mardi (ou mercredi) - Milieu de semaine</li>
      <li><strong>Heure :</strong> 2h00-6h00 du matin (creux de trafic)</li>
      <li><strong>Pourquoi PAS lundi :</strong> Risque de bugs tout le weekend si découverts tard</li>
      <li><strong>Pourquoi PAS vendredi :</strong> Équipe fatiguée, weekend = support difficile</li>
      <li><strong>Pourquoi PAS en journée :</strong> Pic 18h-22h = perte de CA massive</li>
      <li><strong>Pourquoi 2h du matin :</strong> Trafic minimal (< 1% du trafic journalier)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Analyse trafic typique :</strong>
    <br>
    • 2h-6h : 50-100 visiteurs (0.5% du trafic)
    <br>
    • 12h-14h : 2000-3000 visiteurs (5%)
    <br>
    • 18h-22h : 8000-12000 visiteurs (25% du trafic journalier)
    <br><br>
    <strong>Conclusion :</strong> Fenêtre de tir 2h-6h = impact minimal
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Stratégie de déploiement</h2>

  <div class="value-type">
    <h3 class="value-title">Recommandation : Approche hybride</h3>
    <p class="text-gray-800 mb-3">
      Combinaison de Big Bang (bascule rapide) avec Blue-Green (sécurité rollback)
    </p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 1 : Préparation (J-7 à J-1)</h3>
    <ul class="feature-list">
      <li>Nouveau site Shopify configuré sur domaine temporaire (staging.monsite.com)</li>
      <li>Migration complète des 2500 produits</li>
      <li>Tests exhaustifs sur staging</li>
      <li>DNS pré-configuré (TTL réduit à 300 secondes)</li>
      <li>Backup complet de PrestaShop</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 2 : Bascule (Jour J - 2h du matin)</h3>
    <ul class="feature-list">
      <li><strong>2h00 :</strong> Mise en maintenance PrestaShop</li>
      <li><strong>2h15 :</strong> Export final des commandes du jour (sync)</li>
      <li><strong>2h30 :</strong> Modification DNS → pointe vers Shopify</li>
      <li><strong>2h35 :</strong> Propagation DNS (5-10 minutes)</li>
      <li><strong>2h45 :</strong> Tests sur nouveau site</li>
      <li><strong>3h00 :</strong> Si OK → Retrait maintenance</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Phase 3 : Plan B (si problème)</h3>
    <ul class="feature-list">
      <li>Ancien site PrestaShop reste en ligne sur ancien serveur</li>
      <li>Rollback DNS en 2 minutes si besoin</li>
      <li>Aucune perte de données (pas de suppression avant J+7)</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Checklist pré-déploiement adaptée</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">J-7 (1 semaine avant)</h4>
      <ul class="deliverable-list">
        <li>Shopify 100% configuré</li>
        <li>2500 produits migrés et vérifiés</li>
        <li>Tests paiement en test mode OK</li>
        <li>Emails transactionnels configurés</li>
        <li>Tracking GA4 + pixels installés</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">J-3 (3 jours avant)</h4>
      <ul class="deliverable-list">
        <li>Recette client finalisée + PV signé</li>
        <li>Backup PrestaShop complet</li>
        <li>Export BDD clients et commandes</li>
        <li>Réduction TTL DNS à 300s</li>
        <li>Communication clients préparée</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">J-1 (Veille)</h4>
      <ul class="deliverable-list">
        <li>Vérification finale staging Shopify</li>
        <li>Tests paiement réel (1€)</li>
        <li>Brief équipe technique</li>
        <li>Vérification backup accessible</li>
        <li>Astreinte confirmée (dev + ops)</li>
        <li>Page maintenance prête</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">J (Jour J - Checklist 1h avant)</h4>
      <ul class="deliverable-list">
        <li>Équipe technique connectée</li>
        <li>Backup final PrestaShop (1h00)</li>
        <li>Monitoring actif</li>
        <li>Client prévenu (mail automatique)</li>
        <li>Support disponible</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Planning heure par heure Jour J</h2>

  <div class="project-type">
    <h3 class="project-type-title">01h00-02h00 : Préparation</h3>
    <ul class="feature-list">
      <li>01h00 : Connexion de toute l'équipe (Slack call)</li>
      <li>01h15 : Vérification checklist finale</li>
      <li>01h30 : Backup final automatique PrestaShop</li>
      <li>01h45 : Vérification Shopify prêt</li>
      <li>01h55 : Go/No-Go final</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">02h00-03h00 : Bascule</h3>
    <ul class="feature-list">
      <li>02h00 : Activation page maintenance PrestaShop</li>
      <li>02h10 : Sync finale commandes J (s'il y en a)</li>
      <li>02h20 : Screenshot état final PrestaShop</li>
      <li>02h30 : Modification DNS A record</li>
      <li>02h35-45 : Attente propagation DNS</li>
      <li>02h50 : Vérification DNS propagé (nslookup)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">03h00-04h00 : Tests post-déploiement</h3>
    <ul class="feature-list">
      <li>03h00 : Test parcours complet achat (CB test)</li>
      <li>03h15 : Test formulaires (contact, newsletter)</li>
      <li>03h30 : Vérification emails (confirmation commande)</li>
      <li>03h45 : Test pages principales (home, catégories, produits)</li>
      <li>04h00 : Test mobile (iPhone + Android)</li>
      <li>04h15 : Vérification Google Analytics data</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">04h00-05h00 : Validation et mise en ligne</h3>
    <ul class="feature-list">
      <li>04h30 : Si tous tests OK → Désactivation page maintenance</li>
      <li>04h35 : Site en ligne !</li>
      <li>04h40 : Monitoring actif (erreurs, performance)</li>
      <li>05h00 : Email au client : "Site en ligne"</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">05h00-09h00 : Surveillance</h3>
    <ul class="feature-list">
      <li>Monitoring continu (Sentry, Google Analytics RT)</li>
      <li>Équipe en standby</li>
      <li>Corrections immédiates si bugs mineurs</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">09h00 : Bilan J0</h3>
    <ul class="feature-list">
      <li>Réunion équipe : retour sur le déploiement</li>
      <li>Vérification métriques (trafic, conversion, erreurs)</li>
      <li>Call client : feedback et rassurance</li>
      <li>Documentation des incidents (post-mortem)</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">5. Critères de rollback (retour arrière)</h2>

  <div class="project-type">
    <h3 class="project-type-title">Rollback IMMÉDIAT si :</h3>
    <ul class="feature-list">
      <li><strong>Paiement ne fonctionne pas</strong> (CB refusées = perte CA)</li>
      <li><strong>Site inaccessible</strong> (erreur 500, timeout)</li>
      <li><strong>Données clients exposées</strong> (faille sécurité)</li>
      <li><strong>Performance &gt; 10 secondes</strong> (inutilisable)</li>
      <li><strong>Produits non affichés</strong> (catalogue vide/cassé)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Rollback DIFFÉRÉ si :</h3>
    <ul class="feature-list">
      <li><strong>Bugs mineurs</strong> (ex: filtre qui ne marche pas) → Fix en live possible</li>
      <li><strong>Performance 5-7 secondes</strong> → Dégradé mais acceptable, optimisation rapide</li>
      <li><strong>Emails retardés</strong> → Problème mineur, corrections possibles</li>
      <li><strong>Problèmes esthétiques</strong> → Non bloquants</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Procédure de rollback</h3>
    <ul class="feature-list">
      <li><strong>Étape 1 (2 min) :</strong> Décision Go rollback (chef de projet)</li>
      <li><strong>Étape 2 (1 min) :</strong> DNS rebascule vers ancien serveur PrestaShop</li>
      <li><strong>Étape 3 (5-10 min) :</strong> Propagation DNS</li>
      <li><strong>Étape 4 (1 min) :</strong> Retrait maintenance PrestaShop</li>
      <li><strong>Étape 5 (15 min) :</strong> Sync des commandes passées sur Shopify → PrestaShop</li>
      <li><strong>Délai total :</strong> 15-20 minutes maximum</li>
    </ul>
  </div>

  <div class="example-box mt-8">
    <strong>Seuil de décision :</strong> Si 3 critères bloquants OU 1 critique → Rollback immédiat
    <br>
    <strong>Temps max de décision :</strong> 15 minutes après détection
    <br>
    <strong>Équipe décisionnelle :</strong> Chef de projet + Lead dev + Client (conference call)</li>
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q-deploy-1',
            question: 'Qu\'est-ce qu\'un Blue-Green Deployment ?',
            options: [
              'Une méthode de test',
              'Deux environnements permettant un basculement rapide',
              'Un outil de déploiement',
              'Une technique de design'
            ],
            correctAnswer: 1,
            explanation: 'Le Blue-Green Deployment utilise deux environnements identiques pour permettre un basculement rapide et un rollback instantané.'
          },
          {
            id: 'q-deploy-2',
            question: 'Quel est le meilleur moment pour déployer un site e-commerce à fort trafic ?',
            options: [
              'Vendredi soir 20h',
              'Lundi matin 9h',
              'Mardi ou Mercredi 2h-6h du matin',
              'Dimanche après-midi'
            ],
            correctAnswer: 2,
            explanation: 'Milieu de semaine (mardi/mercredi) très tôt le matin (2h-6h) = trafic minimal + équipe disponible en journée si problème + pas de weekend à gérer.'
          },
          {
            id: 'q-deploy-3',
            question: 'Qu\'est-ce qu\'un certificat SSL ?',
            options: [
              'Un diplôme de développeur',
              'Un fichier qui sécurise les échanges HTTPS',
              'Un outil de déploiement',
              'Un type de base de données'
            ],
            correctAnswer: 1,
            explanation: 'Le certificat SSL permet d\'activer le HTTPS et de sécuriser les échanges entre le navigateur et le serveur.'
          },
          {
            id: 'q-deploy-4',
            question: 'Qu\'est-ce qu\'un rollback ?',
            options: [
              'Un retour à la version précédente en cas de problème',
              'Une technique de design',
              'Un outil de communication',
              'Un type de test'
            ],
            correctAnswer: 0,
            explanation: 'Le rollback est le retour à une version antérieure stable en cas de problème critique après un déploiement.'
          },
          {
            id: 'q-deploy-5',
            question: 'Quel critère justifie un rollback immédiat après déploiement ?',
            options: [
              'Une faute de frappe sur une page',
              'Le paiement ne fonctionne pas',
              'La couleur d\'un bouton est incorrecte',
              'Un lien de footer cassé'
            ],
            correctAnswer: 1,
            explanation: 'Si le paiement ne fonctionne pas, c\'est bloquant pour le business et justifie un rollback immédiat. Les autres problèmes sont correctibles en live.'
          }
        ]
      }
    ]
  },
  {
    id: 'suivi',
    title: 'Phase de suivi et maintenance',
    description: 'Bilan, suivi post-lancement et maintenance',
    sections: [
      {
        id: 'bilan',
        title: 'Bilan de projet',
        content: `<div class="section-content">
  <h1 class="section-title">Bilan de projet</h1>

  <p class="section-text">Analyser le projet pour apprendre et s'améliorer.</p>

  <h2 class="section-subtitle mt-8">Pourquoi faire un bilan ?</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Capitaliser</strong> sur l'expérience</li>
      <li><strong>Identifier</strong> les bonnes pratiques</li>
      <li><strong>Détecter</strong> les points d'amélioration</li>
      <li><strong>Documenter</strong> pour les futurs projets</li>
      <li><strong>Célébrer</strong> les réussites</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Réunion de bilan (Retrospective)</h2>

  <div class="project-type">
    <h3 class="project-type-title">Format recommandé : "Start, Stop, Continue"</h3>
    <div class="project-detail">
      <strong>Start :</strong> Qu'est-ce qu'on devrait commencer à faire ?
    </div>
    <div class="project-detail">
      <strong>Stop :</strong> Qu'est-ce qu'on devrait arrêter de faire ?
    </div>
    <div class="project-detail">
      <strong>Continue :</strong> Qu'est-ce qu'on devrait continuer à faire ?
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Autre format : "What went well, What didn't"</h3>
    <ul class="feature-list">
      <li>Ce qui a bien fonctionné</li>
      <li>Ce qui n'a pas fonctionné</li>
      <li>Actions d'amélioration</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Document de bilan - Structure type</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Résumé du projet</h4>
      <ul class="deliverable-list">
        <li>Objectifs initiaux</li>
        <li>Périmètre</li>
        <li>Budget</li>
        <li>Délais</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Points positifs</h4>
      <ul class="deliverable-list">
        <li>Ce qui a bien fonctionné</li>
        <li>Succès remarquables</li>
        <li>Bonnes pratiques identifiées</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Difficultés rencontrées</h4>
      <ul class="deliverable-list">
        <li>Problèmes techniques</li>
        <li>Problèmes organisationnels</li>
        <li>Imprévus</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">5. Leçons apprises</h4>
      <ul class="deliverable-list">
        <li>Ce qu'on ferait différemment</li>
        <li>Recommandations futures</li>
        <li>Best practices identifiées</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">6. Conclusion</h4>
      <ul class="deliverable-list">
        <li>Synthèse globale</li>
        <li>Satisfaction client</li>
        <li>Prochaines étapes</li>
      </ul>
    </div>
  </div>

  <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Indicateurs de succès - Exemple</h3>

  <div class="value-type">
    <div class="grid grid-cols-4 gap-4 text-sm">
      <div><strong>Indicateur</strong></div>
      <div><strong>Objectif</strong></div>
      <div><strong>Réalisé</strong></div>
      <div><strong>Écart</strong></div>
      
      <div>Budget</div>
      <div>40k€</div>
      <div>38k€</div>
      <div class="text-green-600 font-bold">-5% ✓</div>
      
      <div>Délais</div>
      <div>4 mois</div>
      <div>4.5 mois</div>
      <div class="text-red-600 font-bold">+12% ✗</div>
      
      <div>Features</div>
      <div>100%</div>
      <div>95%</div>
      <div class="text-orange-600 font-bold">-5% ~</div>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Métriques à analyser</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Performance</h4>
      <ul class="deliverable-list">
        <li>Temps de chargement</li>
        <li>Uptime</li>
        <li>Erreurs</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Business</h4>
      <ul class="deliverable-list">
        <li>Taux de conversion</li>
        <li>CA généré</li>
        <li>ROI</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Utilisateurs</h4>
      <ul class="deliverable-list">
        <li>Nombre de visiteurs</li>
        <li>Taux de rebond</li>
        <li>Satisfaction (NPS)</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Équipe</h4>
      <ul class="deliverable-list">
        <li>Productivité</li>
        <li>Satisfaction équipe</li>
        <li>Turnover</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Capitalisation des connaissances</h2>

  <div class="value-type">
    <h3 class="value-title">Documenter pour les prochains projets</h3>
    <ul class="feature-list">
      <li><strong>Templates</strong> utilisés</li>
      <li><strong>Outils</strong> efficaces</li>
      <li><strong>Estimations</strong> (pour améliorer les suivantes)</li>
      <li><strong>Contacts</strong> utiles</li>
      <li><strong>Solutions techniques</strong> réutilisables</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Rédiger un bilan de projet',
          description: 'Analyser un projet terminé',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Vous venez de terminer un projet de refonte de site e-commerce.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Données du projet :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Budget prévu : 35 000€ / Réalisé : 40 000€</li>
    <li>Délai prévu : 3 mois / Réalisé : 4 mois</li>
    <li>Features prévues : 100% / Livrées : 90%</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Difficultés rencontrées :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Retard dans la livraison des contenus par le client</li>
    <li>Bug critique découvert en recette</li>
    <li>Turnover dans l'équipe (départ d'un dev)</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Succès :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Performance excellente (temps chargement -60%)</li>
    <li>Client très satisfait du design</li>
    <li>Taux de conversion +25% post-lancement</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Rédigez un bilan structuré</li>
    <li>Identifiez 3 leçons apprises</li>
    <li>Proposez 3 actions d'amélioration pour les prochains projets</li>
    <li>Comment expliquez-vous le dépassement de budget au client ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">Bilan de projet - Refonte E-commerce</h2>

  <div class="example-box">
    <strong>Synthèse :</strong> Projet globalement réussi malgré dépassements. Client satisfait, résultats business au rendez-vous.
  </div>

  <h2 class="correction-title mt-8">1. Bilan structuré</h2>

  <div class="value-type">
    <h3 class="value-title">Résumé du projet</h3>
    <ul class="correction-list">
      <li><strong>Projet :</strong> Refonte complète site e-commerce</li>
      <li><strong>Client :</strong> Marque de cosmétiques</li>
      <li><strong>Équipe :</strong> 1 PM, 2 devs, 1 designer, 1 intégrateur</li>
      <li><strong>Période :</strong> Septembre 2024 - Janvier 2025 (4 mois)</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Indicateurs</h3>
    <div class="grid grid-cols-4 gap-3 text-sm mt-3">
      <div><strong>Indicateur</strong></div>
      <div><strong>Prévu</strong></div>
      <div><strong>Réalisé</strong></div>
      <div><strong>Écart</strong></div>
      
      <div>Budget</div>
      <div>35 000€</div>
      <div>40 000€</div>
      <div class="text-red-600 font-bold">+14% ✗</div>
      
      <div>Délais</div>
      <div>3 mois</div>
      <div>4 mois</div>
      <div class="text-red-600 font-bold">+33% ✗</div>
      
      <div>Features</div>
      <div>100%</div>
      <div>90%</div>
      <div class="text-orange-600 font-bold">-10% ~</div>

      <div>Performance</div>
      <div>3s</div>
      <div>1.2s</div>
      <div class="text-green-600 font-bold">-60% ✓✓</div>

      <div>Conversion</div>
      <div>2%</div>
      <div>2.5%</div>
      <div class="text-green-600 font-bold">+25% ✓</div>

      <div>Satisfaction client</div>
      <div>-</div>
      <div>9/10</div>
      <div class="text-green-600 font-bold">✓</div>
    </div>
  </div>

  <div class="project-type mt-6">
    <h3 class="project-type-title">Points positifs</h3>
    <ul class="feature-list">
      <li><strong>Performance exceptionnelle :</strong> Temps de chargement divisé par 5 (-60%)</li>
      <li><strong>Design validé du premier coup :</strong> Client très satisfait, zéro aller-retour</li>
      <li><strong>Résultats business :</strong> +25% de conversion = ROI immédiat</li>
      <li><strong>Qualité du code :</strong> Zéro bug critique en production</li>
      <li><strong>Formation client :</strong> Client autonome dès J+7</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Difficultés rencontrées</h3>
    <ul class="feature-list">
      <li><strong>Contenus client :</strong> Livraison avec 3 semaines de retard → impact planning</li>
      <li><strong>Bug critique en recette :</strong> Paiement Stripe, correction urgente (2 jours)</li>
      <li><strong>Turnover équipe :</strong> Départ dev backend S8 → recrutement express freelance</li>
      <li><strong>Scope creep :</strong> Demandes hors CDC (wishlist, live chat) → négociation V2</li>
      <li><strong>Performance initiale :</strong> Optimisation plus longue que prévu (+1 semaine)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Features non livrées (10%)</h3>
    <ul class="feature-list">
      <li>Wishlist (demandée en cours → planifiée V2)</li>
      <li>Comparateur produits (low priority → backlog post-lancement)</li>
      <li>Programme de fidélité (complexité sous-estimée → V2)</li>
    </ul>
    <div class="example-box mt-3">
      <strong>Décision :</strong> Priorisation stricte pour respecter deadline. Features reportées avec accord client.
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Les 3 leçons apprises</h2>

  <div class="value-type">
    <h3 class="value-title">Leçon 1 : Bloquer le client dès le début pour les contenus</h3>
    <ul class="correction-list">
      <li><strong>Problème :</strong> Client a livré contenus avec 3 semaines de retard</li>
      <li><strong>Impact :</strong> Retard global de 1 mois sur le planning</li>
      <li><strong>Solution future :</strong> Clause contractuelle "deadline contenus à J-45 sinon report mise en prod"</li>
      <li><strong>Action :</strong> Bloquer créneaux client dans son agenda pour ateliers contenus</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Leçon 2 : Prévoir buffer RH en cas de départ</h3>
    <ul class="correction-list">
      <li><strong>Problème :</strong> Départ dev backend inattendu en S8</li>
      <li><strong>Impact :</strong> Panique, recrutement express coûteux (+3 000€)</li>
      <li><strong>Solution future :</strong> Identifier freelance de backup AVANT le projet</li>
      <li><strong>Action :</strong> Documentation continue pour faciliter reprise par un nouveau dev</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Leçon 3 : Tester paiements plus tôt</h3>
    <ul class="correction-list">
      <li><strong>Problème :</strong> Bug critique Stripe découvert en recette (tard !)</li>
      <li><strong>Impact :</strong> Stress, correction urgente sous pression</li>
      <li><strong>Solution future :</strong> Tests paiement dès S6 (pas attendre la recette)</li>
      <li><strong>Action :</strong> Checklist "fonctionnalités critiques" à tester en avance</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Actions d'amélioration</h2>

  <div class="project-type">
    <h3 class="project-type-title">Action 1 : Template de CDC renforcé</h3>
    <ul class="feature-list">
      <li>Ajouter clause "Deadline contenus" contraignante</li>
      <li>Préciser "3 allers-retours max sur design"</li>
      <li>Liste exhaustive des features = périmètre figé</li>
      <li>Scope creep = devis additionnel systématique</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Action 2 : Process de tests renforcé</h3>
    <ul class="feature-list">
      <li>Créer checklist "Tests critiques précoces" (S6 au lieu de S12)</li>
      <li>Paiement, emails, sécurité = tests dès développement terminé</li>
      <li>Ne PAS attendre la recette pour tester les features clés</li>
      <li>Budget test +20% pour anticiper</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Action 3 : Plan B RH systématique</h3>
    <ul class="feature-list">
      <li>Identifier 2-3 freelances de backup AVANT chaque projet</li>
      <li>Documentation continue et partagée (pas de knowledge silos)</li>
      <li>Code review obligatoire (2 devs connaissent chaque module)</li>
      <li>Buffer budget +10% pour imprévus RH</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">4. Explication dépassement budget au client</h2>

  <div class="example-box">
    <p class="mb-3"><strong>Email au client (factuel et transparent) :</strong></p>
    
    <p class="mb-2 italic">
      "Bonjour [Client],
    </p>

    <p class="mb-2">
      Je vous adresse le bilan final de notre projet de refonte de votre site e-commerce. 
      Comme vous le savez, nous avons dépassé le budget initial de 5 000€ (+14%) et le délai d'1 mois.
    </p>

    <p class="mb-2">
      <strong>Explications du dépassement :</strong>
    </p>

    <ul class="list-disc list-inside ml-4 mb-3 text-sm">
      <li>3 000€ : Recrutement freelance suite au départ de notre développeur backend (imprévu)</li>
      <li>1 500€ : Optimisation performance supplémentaire (résultat : -60% temps chargement)</li>
      <li>500€ : Correction bug critique paiement découvert en recette</li>
    </ul>

    <p class="mb-2">
      <strong>Points importants :</strong>
      <br>
      • Le dépassement n'est PAS dû à une mauvaise estimation initiale
      <br>
      • Les 3 000€ de freelance étaient un cas de force majeure (départ imprévu)
      <br>
      • Les 2 000€ restants ont permis d'atteindre une performance exceptionnelle (-60% !)
    </p>

    <p class="mb-2">
      <strong>Résultats obtenus :</strong>
      <br>
      • Performance : -60% de temps de chargement
      <br>
      • Conversion : +25% dès le premier mois
      <br>
      • Satisfaction : 9/10 selon votre retour
      <br>
      • ROI : Budget récupéré en 3-4 mois grâce à la conversion
    </p>

    <p class="mb-2">
      Je reste à votre disposition pour échanger sur ce bilan et planifier les évolutions V2 
      (wishlist, comparateur) si vous le souhaitez.
    </p>

    <p class="italic">
      Cordialement,
      <br>
      [Chef de projet]"
    </p>
  </div>

  <div class="example-box mt-6">
    <strong>Conseil :</strong> Toujours rester factuel, transparent et montrer les résultats positifs. 
    Un client satisfait accepte mieux un léger dépassement si le ROI est là.
  </div>
</div>`
        }
      }
    ]
  },
  {
    id: 'conclusion',
    title: 'Conclusion et ressources complémentaires',
    description: 'Vision d\'ensemble et thématiques spécialisées',
    sections: [
      {
        id: 'vision-ensemble',
        title: 'Vision d\'ensemble du projet web',
        content: `<div class="section-content">
  <h1 class="section-title">Vision d'ensemble d'un projet web</h1>

  <p class="section-text">Récapitulons le cycle complet d'un projet web.</p>

  <h2 class="section-subtitle mt-8">Les 7 phases d'un projet web</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Lancement (2-3 semaines)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Cadrer le projet
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Cahier des charges</li>
        <li>Budget et planning</li>
        <li>Équipe constituée</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Kick-off meeting</li>
        <li>Ateliers de cadrage</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Planification (1-2 semaines)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Organiser le projet
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Planning détaillé (Gantt)</li>
        <li>Matrice des risques</li>
        <li>Budget détaillé</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Sprint planning (si Agile)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Conception (3-4 semaines)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Designer la solution
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Wireframes</li>
        <li>Maquettes graphiques</li>
        <li>Prototype</li>
        <li>Spécifications techniques</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Ateliers UX</li>
        <li>Validation design</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Développement (6-12 semaines)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Construire le produit
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Code source</li>
        <li>Base de données</li>
        <li>Intégrations</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Daily standups</li>
        <li>Sprint reviews</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5. Tests (2-3 semaines)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Valider la qualité
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Rapports de tests</li>
        <li>Corrections de bugs</li>
        <li>PV de recette</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Recette client</li>
        <li>Comité de validation</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">6. Lancement (1 semaine)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Mettre en production
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Site en production</li>
        <li>Documentation</li>
        <li>Formation client</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Go/No-Go</li>
        <li>Débriefing J+1</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">7. Suivi & Maintenance (continu)</h3>
    <div class="project-detail">
      <strong>Objectif :</strong> Maintenir et améliorer
    </div>
    <div class="project-detail">
      <strong>Livrables :</strong>
      <ul class="feature-list">
        <li>Rapports de monitoring</li>
        <li>Correctifs</li>
        <li>Évolutions</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Réunions clés :</strong>
      <ul class="feature-list">
        <li>Comité de pilotage mensuel</li>
        <li>Retrospective projet</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Chronologie type (projet 4 mois)</h2>

  <div class="example-box">
    <strong>Mois 1 :</strong> [Lancement][Planification][Conception--------]
    <br>
    <strong>Mois 2 :</strong> [Conception][Développement-----------------]
    <br>
    <strong>Mois 3 :</strong> [Développement---------------------------]
    <br>
    <strong>Mois 4 :</strong> [Tests---------][Lancement][Suivi-------]
  </div>

  <h2 class="section-subtitle mt-8">Les rôles clés</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Chef de projet</h4>
      <p class="text-sm text-gray-700">Coordination générale</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Product Owner</h4>
      <p class="text-sm text-gray-700">Vision produit</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">UX/UI Designer</h4>
      <p class="text-sm text-gray-700">Expérience utilisateur</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Développeurs</h4>
      <p class="text-sm text-gray-700">Réalisation technique</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Testeurs/QA</h4>
      <p class="text-sm text-gray-700">Qualité</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Client/Sponsor</h4>
      <p class="text-sm text-gray-700">Décisions et validation</p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Documents essentiels</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Cahier des charges :</strong> Base contractuelle</li>
      <li><strong>Planning :</strong> Organisation temporelle</li>
      <li><strong>Budget :</strong> Cadre financier</li>
      <li><strong>Maquettes :</strong> Vision design</li>
      <li><strong>Spécifications techniques :</strong> Architecture</li>
      <li><strong>Cahier de recette :</strong> Validation</li>
      <li><strong>Documentation :</strong> Guide utilisateur</li>
      <li><strong>Bilan :</strong> Capitalisation</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Planifier un projet complet',
          description: 'Organiser toutes les phases',
          exercice: `**Projet** : Création d'une marketplace B2B

**Contexte** :
- Plateforme de mise en relation professionnels
- 3 types d'utilisateurs (acheteurs, vendeurs, admin)
- Paiement en ligne + commissions
- Budget : 80 000€
- Équipe : 1 PM, 3 devs, 1 designer, 1 QA

**Votre mission complète** :

1. **Calendrier** :
   - Proposez un planning global sur 6 mois
   - Détaillez les phases et durées
   - Identifiez les jalons critiques

2. **Équipe** :
   - Répartissez les rôles
   - Estimez la charge de chacun

3. **Livrables** :
   - Listez tous les livrables par phase
   - Dates de livraison

4. **Risques** :
   - Identifiez 5 risques majeurs
   - Proposez des mesures de mitigation

5. **Budget** :
   - Répartissez le budget par phase
   - Incluez une marge de sécurité`
        }
      },
      {
        id: 'ecoresponsable',
        title: 'Créer un site web écoresponsable',
        content: `<div class="section-content">
  <h1 class="section-title">Site web écoresponsable</h1>

  <div class="example-box">
    <strong>Le saviez-vous ?</strong> Le numérique représente 4% des émissions de CO2 mondiales.
  </div>

  <h2 class="section-subtitle mt-8">Pourquoi l'écoconception ?</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Impact environnemental :</strong> Réduire l'empreinte carbone</li>
      <li><strong>Performance :</strong> Un site éco-conçu est plus rapide</li>
      <li><strong>Accessibilité :</strong> Meilleur pour tous</li>
      <li><strong>Coûts :</strong> Moins de ressources = moins de frais</li>
      <li><strong>Image de marque :</strong> Engagement RSE</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Principes d'écoconception web</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Optimiser les images</h3>
    <ul class="feature-list">
      <li><strong>Format adapté :</strong> WebP, AVIF</li>
      <li><strong>Compression :</strong> Réduire le poids</li>
      <li><strong>Lazy loading :</strong> Charger à la demande</li>
      <li><strong>Responsive images :</strong> Adapter à l'écran</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Minimiser les requêtes</h3>
    <ul class="feature-list">
      <li><strong>Limiter</strong> les scripts tiers</li>
      <li><strong>Combiner</strong> CSS/JS</li>
      <li><strong>Cache :</strong> Réutiliser les ressources</li>
      <li><strong>CDN :</strong> Serveur proche de l'utilisateur</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Code propre et léger</h3>
    <ul class="feature-list">
      <li><strong>Supprimer</strong> le code inutilisé</li>
      <li><strong>Minifier</strong> CSS, JS</li>
      <li><strong>Optimiser</strong> les requêtes BDD</li>
      <li><strong>Éviter</strong> les frameworks lourds si non nécessaire</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Hébergement vert</h3>
    <ul class="feature-list">
      <li><strong>Data centers</strong> alimentés énergies renouvelables</li>
      <li><strong>Serveurs</strong> optimisés</li>
      <li><strong>Location géographique</strong> proche des utilisateurs</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5. Fonctionnalités essentielles</h3>
    <ul class="feature-list">
      <li><strong>Questionner</strong> chaque fonctionnalité</li>
      <li><strong>Simplicité</strong> avant complexité</li>
      <li><strong>Progressive enhancement</strong></li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">6. Dark mode</h3>
    <ul class="feature-list">
      <li><strong>Économie d'énergie</strong> sur écrans OLED</li>
      <li><strong>Confort visuel</strong></li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Outils d'évaluation</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Website Carbon Calculator</h4>
      <p class="text-sm text-gray-700">Empreinte CO2</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">EcoIndex</h4>
      <p class="text-sm text-gray-700">Score environnemental</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Lighthouse</h4>
      <p class="text-sm text-gray-700">Performance générale</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">WebPageTest</h4>
      <p class="text-sm text-gray-700">Analyse détaillée</p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Labels et certifications</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>Numérique Responsable</strong> (label)</li>
      <li><strong>B Corp</strong> (certification entreprise)</li>
      <li><strong>GreenIT</strong> (collectif)</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Exemple concret</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Site A (standard)</h4>
      <ul class="deliverable-list">
        <li>3 MB par page</li>
        <li>100 requêtes</li>
        <li>3.5g CO2/visite</li>
        <li><strong>35 kg CO2/mois</strong> (10k visites)</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Site B (éco-conçu)</h4>
      <ul class="deliverable-list">
        <li>500 KB par page</li>
        <li>20 requêtes</li>
        <li>0.5g CO2/visite</li>
        <li><strong>5 kg CO2/mois</strong> (10k visites)</li>
      </ul>
    </div>
  </div>

  <div class="example-box mt-6">
    <strong>Économie réalisée :</strong> 30 kg CO2/mois = <span class="highlight">360 kg CO2/an</span>
  </div>
</div>`,
        casePratique: {
          title: 'Éco-concevoir un site',
          description: 'Audit et recommandations',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Audit d'un site existant :</strong></p>

  <p class="mt-3">Vous analysez un site e-commerce et constatez :</p>

  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800 mt-3">
    <li>Poids moyen page : 4 MB</li>
    <li>12 images non optimisées (JPG, 2-3 MB chacune)</li>
    <li>8 scripts tiers (analytics, pub, chat...)</li>
    <li>Pas de cache</li>
    <li>Hébergeur standard (énergie non-renouvelable)</li>
    <li>Vidéo autoplay en homepage (50 MB)</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Calculez l'empreinte CO2 actuelle (utilisez Website Carbon)</li>
    <li>Listez 10 actions d'amélioration par priorité</li>
    <li>Estimez le gain potentiel en CO2 et en performance</li>
    <li>Proposez des hébergeurs verts</li>
    <li>Argumentez auprès du client (ROI, image, performance)</li>
  </ol>
</div>`
        },
        quiz: [
          {
            id: 'q-eco-1',
            question: 'Quel format d\'image est le plus léger pour le web ?',
            options: ['PNG', 'JPG', 'WebP', 'GIF'],
            correctAnswer: 2,
            explanation: 'WebP est un format moderne qui offre une meilleure compression que JPG et PNG, réduisant ainsi le poids des images.'
          },
          {
            id: 'q-eco-2',
            question: 'Quelle part des émissions mondiales de CO2 représente le numérique ?',
            options: ['1%', '4%', '10%', '20%'],
            correctAnswer: 1,
            explanation: 'Le numérique représente environ 4% des émissions mondiales de CO2, un chiffre en constante augmentation.'
          },
          {
            id: 'q-eco-3',
            question: 'Qu\'est-ce que le "lazy loading" ?',
            options: [
              'Un développeur paresseux',
              'Charger les images et contenus à la demande',
              'Un bug de performance',
              'Un framework JavaScript'
            ],
            correctAnswer: 1,
            explanation: 'Le lazy loading consiste à charger les images et contenus uniquement quand l\'utilisateur en a besoin (scroll), réduisant ainsi le temps de chargement initial.'
          },
          {
            id: 'q-eco-4',
            question: 'Pourquoi un site éco-conçu est-il généralement plus rapide ?',
            options: [
              'Il utilise des serveurs plus puissants',
              'Il a moins de fonctionnalités et moins de ressources à charger',
              'Il coûte plus cher',
              'Il n\'est pas plus rapide'
            ],
            correctAnswer: 1,
            explanation: 'Un site éco-conçu optimise les ressources (images légères, code minimal, moins de requêtes), ce qui le rend naturellement plus rapide.'
          }
        ]
      },
      {
        id: 'accessibilite',
        title: 'Accessibilité et RGAA',
        content: `<div class="section-content">
  <h1 class="section-title">Accessibilité web et RGAA</h1>

  <p class="section-text">Rendre le web accessible à tous, y compris les personnes en situation de handicap.</p>

  <h2 class="section-subtitle mt-8">Pourquoi l'accessibilité ?</h2>

  <div class="project-type">
    <h3 class="project-type-title">Éthique</h3>
    <ul class="feature-list">
      <li><strong>12 millions</strong> de personnes en situation de handicap en France</li>
      <li><strong>Droit fondamental</strong> d'accès à l'information</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Légal</h3>
    <ul class="feature-list">
      <li><strong>Obligation légale</strong> pour les services publics</li>
      <li><strong>Sanctions</strong> possibles en cas de non-conformité</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Business</h3>
    <ul class="feature-list">
      <li><strong>Audience élargie :</strong> +15% de population</li>
      <li><strong>SEO amélioré :</strong> Bonne structure = bon référencement</li>
      <li><strong>UX pour tous :</strong> Bénéfice pour tous les utilisateurs</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Types de handicaps</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Visuel</h4>
      <ul class="deliverable-list">
        <li>Cécité</li>
        <li>Malvoyance</li>
        <li>Daltonisme</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Auditif</h4>
      <ul class="deliverable-list">
        <li>Surdité</li>
        <li>Malentendance</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Moteur</h4>
      <ul class="deliverable-list">
        <li>Mobilité réduite</li>
        <li>Impossibilité d'utiliser la souris</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Cognitif</h4>
      <ul class="deliverable-list">
        <li>Dyslexie</li>
        <li>Troubles de l'attention</li>
        <li>Difficultés de compréhension</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">RGAA - Les 4 principes WCAG</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Perceptible</h3>
    <ul class="feature-list">
      <li>Alternative textuelle aux images</li>
      <li>Sous-titres pour vidéos</li>
      <li>Contraste suffisant</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Utilisable</h3>
    <ul class="feature-list">
      <li>Navigation au clavier</li>
      <li>Temps suffisant pour lire</li>
      <li>Pas de clignotements (risque épilepsie)</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Compréhensible</h3>
    <ul class="feature-list">
      <li>Langage clair</li>
      <li>Fonctionnement prévisible</li>
      <li>Aide à la saisie</li>
    </ul>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Robuste</h3>
    <ul class="feature-list">
      <li>Code valide</li>
      <li>Compatible technologies d'assistance</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Bonnes pratiques</h2>

  <div class="value-type">
    <h3 class="value-title">Sémantique HTML</h3>
    <div class="example-box mt-3">
      <strong>Bon :</strong> &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;
      <br>
      Hiérarchie : &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;
      <br>
      Éléments interactifs : &lt;button&gt;, &lt;a&gt; avec rôles appropriés
      <br><br>
      <strong>Mauvais :</strong> &lt;div class="header"&gt;, &lt;span onclick="..."&gt;Cliquez ici&lt;/span&gt;
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Alternatives textuelles</h3>
    <div class="example-box mt-3">
      &lt;img src="logo.png" alt="Logo de l'entreprise XYZ"&gt;
      <br>
      &lt;button aria-label="Fermer la fenêtre"&gt;×&lt;/button&gt;
    </div>
  </div>

  <div class="value-type">
    <h3 class="value-title">Contraste</h3>
    <ul class="correction-list">
      <li><strong>Texte normal :</strong> ratio 4.5:1 minimum</li>
      <li><strong>Texte large :</strong> ratio 3:1 minimum</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Navigation clavier</h3>
    <ul class="feature-list">
      <li>Tous les éléments interactifs accessibles au clavier</li>
      <li>Ordre logique de tabulation</li>
      <li>Focus visible</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Outils de test</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">WAVE</h4>
      <p class="text-sm text-gray-700">Extension navigateur</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">axe DevTools</h4>
      <p class="text-sm text-gray-700">Audit automatisé</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Screen readers</h4>
      <p class="text-sm text-gray-700">NVDA, JAWS, VoiceOver</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Lighthouse</h4>
      <p class="text-sm text-gray-700">Audit accessibilité</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Contrast Checker</h4>
      <p class="text-sm text-gray-700">Vérification des contrastes</p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Niveaux de conformité</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau A</h4>
      <p class="text-sm text-gray-700">Minimum</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau AA</h4>
      <p class="text-sm text-gray-700">Recommandé (obligatoire secteur public)</p>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">Niveau AAA</h4>
      <p class="text-sm text-gray-700">Optimal</p>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Démarche d'accessibilité</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li><strong>1. Sensibilisation</strong> de l'équipe</li>
      <li><strong>2. Audit</strong> de l'existant</li>
      <li><strong>3. Priorisation</strong> des corrections</li>
      <li><strong>4. Corrections</strong> itératives</li>
      <li><strong>5. Tests</strong> avec utilisateurs</li>
      <li><strong>6. Documentation</strong></li>
      <li><strong>7. Maintenance</strong> continue</li>
    </ul>
  </div>
</div>`,
        casePratique: {
          title: 'Audit d\'accessibilité',
          description: 'Identifier et corriger les problèmes',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Code à auditer :</strong></p>

  <div class="bg-red-50 rounded-lg p-4 mt-4 mb-4 font-mono text-sm">
    &lt;div class="header"&gt;
    <br>
    &nbsp;&nbsp;&lt;span onclick="goHome()"&gt;Accueil&lt;/span&gt;
    <br>
    &nbsp;&nbsp;&lt;div class="menu"&gt;
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;span onclick="showProducts()"&gt;Produits&lt;/span&gt;
    <br>
    &nbsp;&nbsp;&lt;/div&gt;
    <br>
    &lt;/div&gt;
    <br><br>
    &lt;div class="content"&gt;
    <br>
    &nbsp;&nbsp;&lt;span class="title"&gt;Nos services&lt;/span&gt;
    <br>
    &nbsp;&nbsp;&lt;img src="service1.jpg"&gt;
    <br>
    &nbsp;&nbsp;&lt;p style="color: #aaa;"&gt;Description du service...&lt;/p&gt;
    <br>
    &nbsp;&nbsp;&lt;span class="btn" onclick="order()"&gt;Commander&lt;/span&gt;
    <br>
    &lt;/div&gt;
    <br><br>
    &lt;input type="text" placeholder="Email"&gt;
    <br>
    &lt;span onclick="submit()"&gt;Envoyer&lt;/span&gt;
  </div>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Identifiez tous les problèmes d'accessibilité</li>
    <li>Proposez une version corrigée du code</li>
    <li>Listez les tests à effectuer</li>
    <li>Quels outils utiliseriez-vous pour vérifier ?</li>
    <li>Comment testeriez-vous avec un lecteur d'écran ?</li>
  </ol>
</div>`
        },
        quiz: [
          {
            id: 'q-a11y-1',
            question: 'Quel est le ratio de contraste minimum pour du texte normal (niveau AA) ?',
            options: ['3:1', '4.5:1', '7:1', '21:1'],
            correctAnswer: 1,
            explanation: 'Le niveau AA du WCAG requiert un ratio de contraste minimum de 4.5:1 pour le texte normal.'
          },
          {
            id: 'q-a11y-2',
            question: 'Quelle balise HTML est la plus appropriée pour un menu de navigation ?',
            options: ['<div class="nav">', '<nav>', '<menu>', '<header>'],
            correctAnswer: 1,
            explanation: 'La balise <nav> est sémantiquement appropriée pour les menus de navigation et aide les lecteurs d\'écran.'
          },
          {
            id: 'q-a11y-3',
            question: 'Combien de personnes sont en situation de handicap en France ?',
            options: [
              '1 million',
              '5 millions',
              '12 millions',
              '20 millions'
            ],
            correctAnswer: 2,
            explanation: 'Environ 12 millions de personnes sont en situation de handicap en France, soit près de 20% de la population.'
          },
          {
            id: 'q-a11y-4',
            question: 'Que signifie RGAA ?',
            options: [
              'Référentiel Général d\'Amélioration de l\'Accessibilité',
              'Règles Générales d\'Apprentissage Avancé',
              'Réseau Global d\'Applications Autonomes',
              'Rien de tout cela'
            ],
            correctAnswer: 0,
            explanation: 'RGAA signifie Référentiel Général d\'Amélioration de l\'Accessibilité. C\'est le standard français pour l\'accessibilité numérique.'
          },
          {
            id: 'q-a11y-5',
            question: 'Quel niveau de conformité WCAG est obligatoire pour les sites publics en France ?',
            options: [
              'Niveau A',
              'Niveau AA',
              'Niveau AAA',
              'Aucun niveau obligatoire'
            ],
            correctAnswer: 1,
            explanation: 'Le niveau AA est obligatoire pour les services publics en France selon la loi pour une République numérique.'
          },
          {
            id: 'q-a11y-6',
            question: 'Pourquoi l\'accessibilité améliore-t-elle le SEO ?',
            options: [
              'Elle n\'améliore pas le SEO',
              'Une bonne structure sémantique aide les moteurs de recherche',
              'Google vérifie les contrastes',
              'Les lecteurs d\'écran sont des robots'
            ],
            correctAnswer: 1,
            explanation: 'Une bonne accessibilité implique une structure HTML sémantique claire que les moteurs de recherche comprennent mieux, améliorant ainsi le SEO.'
          }
        ]
      }
    ]
  }
]


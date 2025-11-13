export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface Section {
  id: string
  title: string
  content: string
  casePratique?: {
    title: string
    description: string
    exercice: string
    correction?: string
  }
  quiz?: QuizQuestion[]
}

export interface Module {
  id: string
  title: string
  description: string
  sections: Section[]
}

export const modules: Module[] = [
  {
    id: 'intro',
    title: 'Introduction à la gestion de projet web',
    description: 'Comprendre les fondamentaux et les enjeux de la gestion de projet web',
    sections: [
      {
        id: 'intro-1',
        title: 'Qu\'est-ce qu\'un projet web ?',
        content: `# Qu'est-ce qu'un projet web ?

Un projet web est une initiative temporaire visant à créer un produit, service ou résultat unique sur Internet. Il peut s'agir d'un site vitrine, d'une application web, d'une plateforme e-commerce, etc.

## Caractéristiques d'un projet web

- **Objectif défini** : Chaque projet a un but précis
- **Temporaire** : Il a un début et une fin
- **Ressources limitées** : Budget, temps, équipe
- **Livrable unique** : Le résultat final est spécifique

## Types de projets web

1. **Sites vitrines** : Présentation d'entreprise
2. **E-commerce** : Boutiques en ligne
3. **Applications web** : SaaS, plateformes
4. **Sites média** : Blogs, magazines en ligne
5. **Intranets/Extranets** : Outils internes

## Les enjeux

- Respecter les délais et le budget
- Satisfaire le client et les utilisateurs finaux
- Gérer les imprévus et les risques
- Coordonner une équipe pluridisciplinaire`,
        casePratique: {
          title: 'Cas pratique : Agence web',
          description: 'Un client souhaite refondre son site e-commerce',
          exercice: `Imaginez qu'un client de vente de produits bio souhaite :
- Refondre complètement son site existant (vieux de 5 ans)
- Améliorer l'expérience utilisateur mobile
- Intégrer un nouveau système de paiement
- Budget : 25 000€
- Délai : 4 mois

**Question** : Quels sont les premiers éléments à clarifier avec le client ?`
        },
        quiz: [
          {
            id: 'q-old-1',
            question: 'Quelle est une caractéristique fondamentale d\'un projet ?',
            options: [
              'Il dure toujours 1 an',
              'Il a des ressources illimitées',
              'Il est temporaire avec des ressources limitées',
              'Il ne nécessite pas de planning'
            ],
            correctAnswer: 2,
            explanation: 'Un projet est temporaire (début et fin définis) et dispose de ressources limitées en temps, budget et équipe.'
          },
          {
            id: 'q1',
            question: 'Quelle est la principale caractéristique d\'un projet ?',
            options: [
              'Il est permanent',
              'Il est temporaire avec un début et une fin',
              'Il n\'a pas de budget défini',
              'Il ne nécessite pas d\'équipe'
            ],
            correctAnswer: 1,
            explanation: 'Un projet est par définition temporaire, avec un début et une fin clairement définis, contrairement aux opérations courantes.'
          },
          {
            id: 'q2',
            question: 'Quel type de projet web correspond à un SaaS ?',
            options: [
              'Site vitrine',
              'E-commerce',
              'Application web',
              'Blog'
            ],
            correctAnswer: 2,
            explanation: 'Un SaaS (Software as a Service) est une application web accessible en ligne.'
          }
        ]
      }
    ]
  },
  {
    id: 'lancement',
    title: 'Phase de lancement',
    description: 'Cadrer le projet, constituer l\'équipe et définir les objectifs',
    sections: [
      {
        id: 'cdc',
        title: 'Cadrer le projet par un cahier des charges',
        content: `<div class="section-content">
  <h1 class="section-title">Le Cahier des Charges</h1>

  <p class="section-text">Le cahier des charges est le document fondamental qui définit les besoins, objectifs et contraintes du projet.</p>

  <h2 class="section-subtitle mt-8">Pourquoi un cahier des charges ?</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li>Formaliser les besoins du client</li>
      <li>Établir un référentiel commun</li>
      <li>Éviter les malentendus</li>
      <li>Servir de base contractuelle</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Structure type</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Présentation du projet</h4>
      <ul class="deliverable-list">
        <li>Contexte</li>
        <li>Objectifs</li>
        <li>Périmètre</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Description fonctionnelle</h4>
      <ul class="deliverable-list">
        <li>Fonctionnalités attendues</li>
        <li>Parcours utilisateurs</li>
        <li>Cas d'usage</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Contraintes techniques</h4>
      <ul class="deliverable-list">
        <li>Technologies imposées</li>
        <li>Compatibilité navigateurs/devices</li>
        <li>Performance requise</li>
        <li>Sécurité</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Design et ergonomie</h4>
      <ul class="deliverable-list">
        <li>Charte graphique</li>
        <li>Identité visuelle</li>
        <li>Wireframes/maquettes</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">5. Planning et budget</h4>
      <ul class="deliverable-list">
        <li>Jalons du projet</li>
        <li>Livrables</li>
        <li>Budget prévisionnel</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">6. Maintenance et évolution</h4>
      <ul class="deliverable-list">
        <li>Garantie</li>
        <li>Support</li>
        <li>Évolutions futures</li>
      </ul>
    </div>
  </div>
</div>`,
        casePratique: {
          title: 'Rédaction CDC',
          description: 'Un restaurant souhaite créer son site web',
          exercice: `<div class="cas-pratique-content">
  <p><strong>Contexte :</strong> Un restaurant gastronomique souhaite créer son premier site web.</p>

  <h4 class="font-semibold text-purple-900 mt-4 mb-2">Besoins exprimés :</h4>
  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800">
    <li>Présenter la carte et les menus</li>
    <li>Permettre la réservation en ligne</li>
    <li>Galerie photos du restaurant et des plats</li>
    <li>Informations pratiques (horaires, localisation)</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Votre mission :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Quelles questions supplémentaires poseriez-vous au client ?</li>
    <li>Listez 5 fonctionnalités essentielles à inclure dans le CDC</li>
    <li>Quelles contraintes techniques devez-vous anticiper ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">1. Questions supplémentaires à poser au client</h2>

  <h3 class="correction-subtitle">Objectifs et cibles :</h3>
  <ul class="correction-list">
    <li><strong>Quel est l'objectif principal du site ?</strong> (Attirer de nouveaux clients, fidéliser, améliorer l'image...)</li>
    <li><strong>Qui sont vos clients types ?</strong> (Familles, couples, clientèle d'affaires, touristes...)</li>
    <li><strong>Quelle est votre zone de chalandise ?</strong> (Quartier, ville, touristes internationaux...)</li>
  </ul>

  <h3 class="correction-subtitle">Réservation en ligne :</h3>
  <ul class="correction-list">
    <li><strong>Utilisez-vous déjà un système de réservation ?</strong> (LaFourchette, Zenchef, système maison...)</li>
    <li><strong>Combien de couverts par service ?</strong> (Pour paramétrer la jauge)</li>
    <li><strong>Gestion des allergies/régimes spéciaux ?</strong> (Végétarien, sans gluten...)</li>
    <li><strong>Souhaitez-vous un acompte/paiement en ligne ?</strong></li>
  </ul>

  <h3 class="correction-subtitle">Contenu et mise à jour :</h3>
  <ul class="correction-list">
    <li><strong>À quelle fréquence changez-vous les menus ?</strong> (Daily, hebdo, saisonnier...)</li>
    <li><strong>Qui mettra à jour le site ?</strong> (Besoin d'une interface simple)</li>
    <li><strong>Avez-vous des photos professionnelles ?</strong> (Prévoir un shooting si nécessaire)</li>
  </ul>

  <h3 class="correction-subtitle">Marketing et budget :</h3>
  <ul class="correction-list">
    <li><strong>Présence sur réseaux sociaux ?</strong> (Instagram, Facebook...)</li>
    <li><strong>Budget disponible ?</strong> (Pour dimensionner le projet)</li>
    <li><strong>Deadline souhaitée ?</strong> (Réouverture, événement spécial...)</li>
  </ul>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Les 5 fonctionnalités essentielles</h2>

  <div class="project-type">
    <h3 class="project-type-title">1. Système de réservation en ligne</h3>
    <div class="project-detail">
      <strong>Description :</strong> Module permettant de réserver une table directement depuis le site
    </div>
    <div class="project-detail">
      <strong>Critères :</strong>
      <ul class="feature-list">
        <li>Choix de la date et de l'heure</li>
        <li>Nombre de personnes</li>
        <li>Confirmation par email/SMS</li>
        <li>Intégration avec le planning du restaurant</li>
        <li>Gestion des créneaux horaires</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">2. Présentation des menus</h3>
    <div class="project-detail">
      <strong>Description :</strong> Affichage élégant de la carte et des menus
    </div>
    <div class="project-detail">
      <strong>Critères :</strong>
      <ul class="feature-list">
        <li>Carte à la carte</li>
        <li>Menus (midi, soir, groupe)</li>
        <li>Prix clairement affichés</li>
        <li>Photos des plats signature</li>
        <li>Mention des allergènes</li>
        <li>Facilité de mise à jour</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">3. Galerie photos professionnelle</h3>
    <div class="project-detail">
      <strong>Description :</strong> Mise en valeur de l'ambiance et des plats
    </div>
    <div class="project-detail">
      <strong>Critères :</strong>
      <ul class="feature-list">
        <li>Ambiance de la salle</li>
        <li>Plats signature</li>
        <li>Équipe en cuisine (optionnel)</li>
        <li>Optimisation des images pour le web</li>
        <li>Effet lightbox pour agrandir</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">4. Informations pratiques</h3>
    <div class="project-detail">
      <strong>Description :</strong> Toutes les infos nécessaires pour venir
    </div>
    <div class="project-detail">
      <strong>Critères :</strong>
      <ul class="feature-list">
        <li>Adresse avec carte Google Maps interactive</li>
        <li>Horaires d'ouverture</li>
        <li>Téléphone cliquable (call to action mobile)</li>
        <li>Email de contact</li>
        <li>Accès et parking</li>
        <li>Accessibilité PMR</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">5. Formulaire de contact</h3>
    <div class="project-detail">
      <strong>Description :</strong> Pour les demandes spécifiques
    </div>
    <div class="project-detail">
      <strong>Critères :</strong>
      <ul class="feature-list">
        <li>Nom, email, téléphone</li>
        <li>Type de demande (réservation groupe, privatisation, autre)</li>
        <li>Message libre</li>
        <li>Protection anti-spam (reCAPTCHA)</li>
        <li>Notification par email au restaurant</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Contraintes techniques à anticiper</h2>

  <div class="value-type">
    <h3 class="value-title">Performance et images</h3>
    <ul class="correction-list">
      <li><strong>Photos haute qualité :</strong> Optimisation obligatoire (format WebP, compression)</li>
      <li><strong>Temps de chargement :</strong> Cible &lt; 3 secondes</li>
      <li><strong>Lazy loading :</strong> Chargement progressif des images</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Mobile-first</h3>
    <ul class="correction-list">
      <li><strong>70% du trafic sera mobile</strong> (recherches locales)</li>
      <li><strong>Click-to-call :</strong> Bouton téléphone direct sur mobile</li>
      <li><strong>Navigation simplifiée :</strong> Menu burger adapté</li>
      <li><strong>Réservation mobile :</strong> Formulaire optimisé tactile</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">SEO local</h3>
    <ul class="correction-list">
      <li><strong>Google My Business :</strong> Intégration et optimisation</li>
      <li><strong>Mots-clés locaux :</strong> "restaurant gastronomique [ville]"</li>
      <li><strong>Schema.org :</strong> Balisage Restaurant pour Google</li>
      <li><strong>Avis clients :</strong> Intégration des avis Google</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Sécurité et conformité</h3>
    <ul class="correction-list">
      <li><strong>HTTPS obligatoire</strong> (certificat SSL)</li>
      <li><strong>RGPD :</strong> Mentions légales, politique de confidentialité</li>
      <li><strong>Cookies :</strong> Bannière de consentement</li>
      <li><strong>Sauvegarde des données de réservation</strong></li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">CMS et maintenance</h3>
    <ul class="correction-list">
      <li><strong>Backend simple</strong> pour mise à jour des menus par le client</li>
      <li><strong>WordPress recommandé</strong> (facilité d'utilisation)</li>
      <li><strong>Formation du client</strong> à prévoir</li>
      <li><strong>Hébergement performant</strong> (SSD, cache)</li>
    </ul>
  </div>

  <div class="example-box">
    <strong>Budget estimé pour ce projet :</strong> 5 000€ - 8 000€
    <br>
    <strong>Délai :</strong> 6-8 semaines
  </div>
</div>`
        },
        quiz: [
          {
            id: 'q3',
            question: 'Quel est l\'objectif principal d\'un cahier des charges ?',
            options: [
              'Augmenter le budget du projet',
              'Formaliser les besoins et établir un référentiel commun',
              'Impressionner le client',
              'Remplacer les réunions'
            ],
            correctAnswer: 1,
            explanation: 'Le CDC sert à formaliser précisément les besoins et créer une base de compréhension commune entre toutes les parties prenantes.'
          },
          {
            id: 'q-cdc-2',
            question: 'Combien de sections principales contient généralement un cahier des charges ?',
            options: [
              'Pas de structure fixe',
              '2-3 sections',
              '10-15 sections',
              '4-6 sections'
            ],
            correctAnswer: 3,
            explanation: 'Un CDC contient généralement 4 à 6 sections principales : présentation, description fonctionnelle, contraintes techniques, design, planning/budget, maintenance.'
          },
          {
            id: 'q-cdc-3',
            question: 'Pourquoi est-il important de cartographier l\'existant avant un projet ?',
            options: [
              'Ce n\'est pas important',
              'Pour augmenter le budget',
              'Pour identifier ce qui peut être réutilisé et mesurer l\'ampleur des changements',
              'Pour impressionner le client'
            ],
            correctAnswer: 2,
            explanation: 'La cartographie permet d\'identifier les forces/faiblesses, comprendre l\'environnement technique et évaluer ce qui peut être conservé.'
          },
          {
            id: 'q-cdc-4',
            question: 'Qu\'est-ce qu\'un persona ?',
            options: [
              'Un concurrent',
              'Un outil de gestion',
              'Un employé de l\'entreprise',
              'Un profil utilisateur fictif représentant une cible'
            ],
            correctAnswer: 3,
            explanation: 'Un persona est un profil type d\'utilisateur cible avec ses caractéristiques, objectifs, freins et comportements.'
          },
          {
            id: 'q-cdc-5',
            question: 'Quelle est la structure d\'une user story ?',
            options: [
              'Début + Milieu + Fin',
              'Problème + Solution',
              'Titre + Description',
              'En tant que [utilisateur], je veux [objectif] afin de [bénéfice]'
            ],
            correctAnswer: 3,
            explanation: 'Une user story suit toujours cette structure : "En tant que [type d\'utilisateur], je veux [objectif] afin de [bénéfice]".'
          }
        ]
      },
      {
        id: 'cartographie',
        title: 'Cartographie de l\'existant',
        content: `<div class="section-content">
  <h1 class="section-title">Cartographie de l'existant</h1>

  <p class="section-text">Avant de démarrer un projet, il est crucial d'analyser l'existant pour mieux comprendre le contexte.</p>

  <h2 class="section-subtitle mt-8">Pourquoi cartographier ?</h2>

  <div class="value-type">
    <ul class="feature-list">
      <li>Identifier les forces et faiblesses actuelles</li>
      <li>Comprendre l'environnement technique</li>
      <li>Évaluer ce qui peut être réutilisé</li>
      <li>Mesurer l'ampleur des changements</li>
    </ul>
  </div>

  <h2 class="section-subtitle mt-8">Éléments à cartographier</h2>

  <div class="deliverables-grid">
    <div class="deliverable-phase">
      <h4 class="phase-title">1. Infrastructure technique existante</h4>
      <ul class="deliverable-list">
        <li>Hébergement actuel</li>
        <li>Technologies utilisées</li>
        <li>Base de données</li>
        <li>APIs et intégrations</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">2. Contenu existant</h4>
      <ul class="deliverable-list">
        <li>Pages et sections</li>
        <li>Médias (images, vidéos)</li>
        <li>Données à migrer</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">3. Fonctionnalités actuelles</h4>
      <ul class="deliverable-list">
        <li>Ce qui fonctionne bien</li>
        <li>Ce qui pose problème</li>
        <li>Ce qui sera abandonné</li>
      </ul>
    </div>

    <div class="deliverable-phase">
      <h4 class="phase-title">4. Analytics et performances</h4>
      <ul class="deliverable-list">
        <li>Trafic actuel</li>
        <li>Pages les plus visitées</li>
        <li>Taux de conversion</li>
        <li>Points de friction</li>
      </ul>
    </div>
  </div>

  <h2 class="section-subtitle mt-8">Outils d'analyse</h2>

  <div class="project-type">
    <h3 class="project-type-title">Google Analytics</h3>
    <p class="project-detail">Analyse du trafic</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Google Search Console</h3>
    <p class="project-detail">SEO et indexation</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">GTmetrix</h3>
    <p class="project-detail">Performance</p>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Screaming Frog</h3>
    <p class="project-detail">Audit SEO technique</p>
  </div>
</div>`,
        casePratique: {
          title: 'Audit d\'un site existant',
          description: 'Analyser un site e-commerce avant refonte',
          exercice: `<div class="cas-pratique-content">
  <p>Un client e-commerce souhaite refondre son site. Lors de votre audit, vous constatez :</p>

  <ul class="list-disc list-inside space-y-1 ml-4 text-gray-800 mt-3">
    <li>Site développé sous PrestaShop 1.6 (ancien)</li>
    <li>2500 produits en base</li>
    <li>Taux de rebond : 75%</li>
    <li>Temps de chargement : 8 secondes</li>
    <li>60% du trafic mobile</li>
    <li>Version mobile non optimisée</li>
  </ul>

  <h4 class="font-semibold text-purple-900 mt-6 mb-3">Questions :</h4>
  <ol class="list-decimal list-inside space-y-2 text-gray-800">
    <li>Quels sont les 3 problèmes prioritaires à résoudre ?</li>
    <li>Que devez-vous absolument conserver lors de la migration ?</li>
    <li>Quelles recommandations feriez-vous au client ?</li>
  </ol>
</div>`,
          correction: `<div class="correction-content">
  <h2 class="correction-title">1. Les 3 problèmes prioritaires à résoudre</h2>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 1 : Performance catastrophique (8 secondes)</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Critique - Perte massive de visiteurs et de conversions
    </div>
    <div class="project-detail">
      <strong>Constat :</strong>
      <ul class="feature-list">
        <li>53% des utilisateurs quittent si le chargement > 3 secondes</li>
        <li>8 secondes = taux de rebond garanti élevé</li>
        <li>Impact SEO négatif (Core Web Vitals)</li>
        <li>Pénalisation Google sur mobile</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Actions immédiates :</strong>
      <ul class="feature-list">
        <li>Audit performance complet (GTmetrix, Lighthouse)</li>
        <li>Optimisation/compression des images</li>
        <li>Mise en cache agressive</li>
        <li>CDN pour les ressources statiques</li>
        <li>Lazy loading des images</li>
        <li>Hébergement plus performant (SSD, ressources adaptées)</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 2 : Mobile non optimisé (60% du trafic)</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Très critique - Perte de 60% du potentiel de conversion
    </div>
    <div class="project-detail">
      <strong>Constat :</strong>
      <ul class="feature-list">
        <li>60% du trafic = majorité des visiteurs concernés</li>
        <li>Expérience mobile dégradée = abandon immédiat</li>
        <li>Google pénalise les sites non mobile-friendly</li>
        <li>Concurrent avec mobile optimisé = perte de parts de marché</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Actions :</strong>
      <ul class="feature-list">
        <li>Refonte complète en mobile-first</li>
        <li>Design responsive moderne</li>
        <li>Navigation tactile optimisée</li>
        <li>Formulaires adaptés au mobile</li>
        <li>Touch targets suffisamment grands</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Priorité 3 : PrestaShop 1.6 obsolète</h3>
    <div class="project-detail">
      <strong>Impact :</strong> Important - Risques de sécurité et limitations techniques
    </div>
    <div class="project-detail">
      <strong>Constat :</strong>
      <ul class="feature-list">
        <li>Version non maintenue (failles de sécurité)</li>
        <li>Incompatibilité avec modules récents</li>
        <li>Performance limitée par l'ancienne architecture</li>
        <li>Risque de piratage élevé</li>
      </ul>
    </div>
    <div class="project-detail">
      <strong>Actions :</strong>
      <ul class="feature-list">
        <li>Migration vers PrestaShop 8.x ou Shopify</li>
        <li>Ou envisager WooCommerce selon besoins</li>
        <li>Modernisation complète de l'infrastructure</li>
      </ul>
    </div>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">2. Ce qu'il faut ABSOLUMENT conserver</h2>

  <div class="value-type">
    <h3 class="value-title">Base de données produits (2500 produits)</h3>
    <ul class="correction-list">
      <li><strong>Références produits :</strong> IDs, SKU, codes-barres</li>
      <li><strong>Fiches produits complètes :</strong> Titres, descriptions, caractéristiques</li>
      <li><strong>Photos :</strong> Toutes les images produits (optimiser après migration)</li>
      <li><strong>Prix et stocks :</strong> Données critiques</li>
      <li><strong>Catégorisation :</strong> Arborescence des catégories</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Base clients et historique</h3>
    <ul class="correction-list">
      <li><strong>Comptes clients :</strong> Emails, adresses (RGPD compliant)</li>
      <li><strong>Historique des commandes :</strong> Important pour le SAV</li>
      <li><strong>Paniers abandonnés :</strong> Pour relance marketing</li>
      <li><strong>Avis clients :</strong> Précieux pour la crédibilité</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">SEO et positionnement</h3>
    <ul class="correction-list">
      <li><strong>URLs des pages principales :</strong> Redirection 301 obligatoire</li>
      <li><strong>Meta données :</strong> Titles et descriptions optimisées</li>
      <li><strong>Contenu SEO :</strong> Descriptions catégories, textes optimisés</li>
      <li><strong>Backlinks :</strong> Ne pas casser les liens entrants</li>
    </ul>
  </div>

  <div class="value-type">
    <h3 class="value-title">Analytics et données marketing</h3>
    <ul class="correction-list">
      <li><strong>Google Analytics :</strong> Historique de trafic</li>
      <li><strong>Pixels de tracking :</strong> Facebook, Google Ads</li>
      <li><strong>Listes emails :</strong> Newsletter et marketing</li>
    </ul>
  </div>

  <hr class="my-8 border-gray-300">

  <h2 class="correction-title">3. Recommandations pour le client</h2>

  <div class="project-type">
    <h3 class="project-type-title">Stratégie de migration</h3>
    <div class="project-detail">
      <strong>Approche recommandée :</strong>
      <ul class="feature-list">
        <li>Refonte complète plutôt que mise à jour (trop d'écart de version)</li>
        <li>Nouvelle plateforme moderne (PrestaShop 8 ou Shopify)</li>
        <li>Développement et tests en parallèle de l'existant</li>
        <li>Migration par étapes (pas de big bang)</li>
        <li>Période de test avec un sous-ensemble de produits</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Quick wins à implémenter immédiatement</h3>
    <div class="project-detail">
      <strong>Actions rapides (< 1 semaine) :</strong>
      <ul class="feature-list">
        <li>Activer la compression Gzip</li>
        <li>Installer un plugin de cache</li>
        <li>Compresser toutes les images (Tinypng, ImageOptim)</li>
        <li>Configurer un CDN (Cloudflare gratuit)</li>
        <li>Minifier CSS et JavaScript</li>
      </ul>
    </div>
    <div class="example-box">
      <strong>Gain estimé :</strong> Passage de 8s à 4-5s (amélioration de 40-50%)
      <br>
      <strong>Impact :</strong> -15% de taux de rebond immédiat
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Budget et planning</h3>
    <div class="project-detail">
      <strong>Estimation :</strong>
      <ul class="feature-list">
        <li><strong>Budget :</strong> 25 000€ - 35 000€ (refonte complète)</li>
        <li><strong>Délai :</strong> 3-4 mois</li>
        <li><strong>Phase 1 (1 mois) :</strong> Audit, CDC, choix plateforme</li>
        <li><strong>Phase 2 (1.5 mois) :</strong> Design et développement</li>
        <li><strong>Phase 3 (3 semaines) :</strong> Migration données et tests</li>
        <li><strong>Phase 4 (2 semaines) :</strong> Recette et mise en production</li>
      </ul>
    </div>
  </div>

  <div class="project-type">
    <h3 class="project-type-title">Plan de redirection SEO</h3>
    <div class="project-detail">
      <strong>Crucial pour ne pas perdre le référencement :</strong>
      <ul class="feature-list">
        <li>Mapping complet : anciennes URLs → nouvelles URLs</li>
        <li>Redirections 301 pour TOUTES les pages</li>
        <li>Conserver la structure d'URLs si possible</li>
        <li>Soumettre nouveau sitemap à Google</li>
        <li>Monitoring intensif post-migration (Search Console)</li>
      </ul>
    </div>
  </div>

  <div class="example-box">
    <strong>Résultat attendu post-refonte :</strong>
    <br>
    • Temps de chargement : < 2 secondes
    <br>
    • Taux de rebond : 40-45% (au lieu de 75%)
    <br>
    • Conversion mobile : +150% minimum
    <br>
    • Score Lighthouse : > 90/100
  </div>
</div>`
        }
      },
      {
        id: 'cibles',
        title: 'Étude des cibles',
        content: `# Étude des cibles

Connaître ses utilisateurs est essentiel pour concevoir un projet web adapté à leurs besoins.

## Pourquoi étudier les cibles ?

- Adapter le design et l'ergonomie
- Prioriser les fonctionnalités
- Choisir le bon ton de communication
- Optimiser le parcours utilisateur

## Méthodes d'étude

### 1. Personas
Créer des profils types d'utilisateurs avec :
- Données démographiques
- Objectifs et motivations
- Freins et frustrations
- Comportements numériques

### 2. User stories
"En tant que [type d'utilisateur], je veux [objectif] afin de [bénéfice]"

Exemple : "En tant que client, je veux filtrer les produits par prix afin de trouver rapidement ce qui correspond à mon budget"

### 3. Carte d'empathie
- Ce que l'utilisateur **pense et ressent**
- Ce qu'il **voit**
- Ce qu'il **dit et fait**
- Ce qu'il **entend**

### 4. Enquêtes et interviews
- Questionnaires en ligne
- Entretiens utilisateurs
- Tests utilisateurs
- Analyse des retours clients`,
        casePratique: {
          title: 'Création de personas',
          description: 'Définir les personas d\'une plateforme de formation en ligne',
          exercice: `**Projet** : Plateforme de formation en ligne pour développeurs

**Votre mission** : Créer 2 personas détaillés

Indications :
- Persona 1 : Étudiant en reconversion
- Persona 2 : Développeur senior souhaitant se former

Pour chaque persona, définissez :
1. Nom, âge, profession
2. Objectifs principaux
3. Freins et frustrations
4. Niveau de compétence technique
5. Appareils utilisés (desktop, mobile, tablette)`
        }
      }
    ]
  }
]


export interface MissionProject {
  id: string
  title: string
  type: string
  context: string
  clientDescription: string
  mainNeeds: string[]
  specificConstraints: string[]
  targetAudience: string
  budget: string
  timeline: string
  evaluationCriteria: {
    category: string
    weight: number
    description: string
  }[]
  deliverables: string[]
  successIndicators: string[]
}

export const missionProjects: MissionProject[] = [
  {
    id: 'eventeo',
    title: 'Eventeo - Plateforme de gestion d\'événements professionnels',
    type: 'Double solution SaaS : Plateforme web + Application mobile',
    context: `**Eventeo** est une entreprise innovante qui souhaite révolutionner le marché de la gestion d'événements professionnels (salons, conférences, séminaires).

Actuellement, les organisateurs d'événements jonglent entre plusieurs outils non connectés : tableurs Excel pour les inscriptions, emails pour la communication, badges papier, applications tierces pour le networking...

Eventeo souhaite proposer une **solution complète** comprenant :
- Une **plateforme web backoffice** pour les organisateurs
- Une **application mobile** pour les participants

Le marché cible est composé de :
- Organisateurs d'événements professionnels (50-5000 participants)
- Entreprises organisant des salons/conférences
- Centres de congrès
- Agences événementielles`,

    clientDescription: `**Type de client :** Startup en phase seed, 3 cofondateurs
**Secteur :** Event Tech / SaaS B2B
**Expérience digitale :** Moyenne - besoin d'accompagnement
**Budget disponible :** 80 000€ - 120 000€
**Délai souhaité :** 6-8 mois pour MVP
**Équipe interne :** 1 Product Owner, pas de développeurs`,

    mainNeeds: [
      '**Plateforme Web Organisateur** : Création d\'événements, gestion des inscriptions, billetterie, personnalisation de l\'agenda, gestion des stands/exposants, envoi de communications, statistiques en temps réel',
      '**Application Mobile Participant** : Programme personnalisable, networking (matching entre participants), scan de badges QR code, messagerie intégrée, plan interactif du lieu, notifications push',
      '**Système de badges intelligents** : Génération automatique de QR codes, check-in digital, suivi de présence aux conférences',
      '**Module de networking** : Matching algorithmique selon les profils et centres d\'intérêt, prise de rendez-vous entre participants',
      '**Analytics et reporting** : Dashboard avec KPIs (inscriptions, taux de participation, networking activity, satisfaction), export de données',
      '**Paiement en ligne** : Billetterie avec différents tarifs (early bird, standard, VIP), paiement sécurisé, gestion des remboursements'
    ],

    specificConstraints: [
      '**Mobile-first** : 70% de l\'usage se fera sur mobile le jour J',
      '**Temps réel** : Synchronisation instantanée entre web et mobile',
      '**Scalabilité** : Doit supporter jusqu\'à 5000 participants simultanés sur un même événement',
      '**Offline-first sur mobile** : L\'app doit fonctionner même sans connexion (métro, sous-sols)',
      '**RGPD** : Gestion stricte des données personnelles, consentement explicite',
      '**Multi-langues** : FR/EN minimum, facilement extensible',
      '**White-label** : Les organisateurs doivent pouvoir personnaliser les couleurs/logo',
      '**Intégrations** : API ouverte pour connecter des outils tiers (Mailchimp, Stripe, Zoom)',
      '**Performance** : Application mobile légère (< 50MB), temps de chargement < 2s',
      '**Accessibilité** : Conformité WCAG 2.1 niveau AA minimum'
    ],

    targetAudience: `**Organisateurs (Plateforme Web) :**
- **Persona 1 - Claire, Chef de projet événementiel** : 32 ans, agence événementielle, organise 20-30 événements/an, stressée par la gestion multitâche, veut tout centraliser
- **Persona 2 - Marc, Directeur marketing** : 45 ans, organise 3-4 salons/an pour son entreprise (500-1000 personnes), budget conséquent, veut des rapports détaillés pour justifier le ROI

**Participants (Application Mobile) :**
- **Persona 3 - Sophie, Business Developer** : 28 ans, participe à 15+ événements/an, veut maximiser son networking, besoin d\'efficacité
- **Persona 4 - Thomas, CEO startup** : 38 ans, peu de temps, veut cibler précisément les bonnes rencontres, préfère mobile au papier`,

    budget: `**Fourchette totale** : 80 000€ - 120 000€

**Répartition indicative souhaitée :**
- Conception UX/UI : 15-20%
- Développement plateforme web : 30-35%
- Développement application mobile : 25-30%
- Backend/API/Infrastructure : 15-20%
- Tests et recette : 5-8%
- Formation et accompagnement : 3-5%

**Modalités de paiement :**
- 30% à la signature
- 40% à la livraison du MVP
- 30% à la mise en production

**Le budget comprend :**
- Développement complet du MVP
- Design system et maquettes
- Tests utilisateurs (2 sessions)
- Formation de l'équipe
- Support 3 mois post-lancement

**Non inclus dans le budget :**
- Hébergement et serveurs (géré par le client)
- Campagne marketing de lancement
- Évolutions post-MVP
- Shooting photo/vidéo professionnel`,

    timeline: `**Délai global souhaité :** 6-8 mois

**Jalons clés attendus :**
- **Mois 1 (Découverte)** : Ateliers de cadrage, personas, parcours utilisateurs
- **Mois 2 (Conception)** : Wireframes, maquettes, prototypes, tests utilisateurs
- **Mois 3-5 (Développement)** : Développement itératif par sprints de 2 semaines
- **Mois 6 (Alpha)** : Version alpha interne, tests internes
- **Mois 7 (Beta)** : Beta privée avec 2-3 événements pilotes
- **Mois 8 (Prod)** : Mise en production et support lancement

**Date de début souhaitée :** Dès que possible
**Deadline impérative :** Lancement avant la saison des salons (septembre)

**Contraintes calendaires :**
- Bêta disponible fin juin pour tester sur événement pilote
- Formation équipe commerciale en août`,

    evaluationCriteria: [
      {
        category: 'Compréhension du besoin',
        weight: 25,
        description: 'Analyse pertinente du brief, questions complémentaires stratégiques, identification des vrais enjeux et risques'
      },
      {
        category: 'Qualité de la proposition technique',
        weight: 20,
        description: 'Architecture technique cohérente, choix technologiques justifiés, scalabilité, sécurité, performance'
      },
      {
        category: 'Expérience utilisateur (UX)',
        weight: 15,
        description: 'Wireframes pertinents, parcours utilisateurs fluides, design thinking, ergonomie mobile'
      },
      {
        category: 'Planning et méthodologie',
        weight: 15,
        description: 'Découpage en phases réalistes, gestion des risques, méthodologie agile, jalons clairs'
      },
      {
        category: 'Budget et transparence',
        weight: 10,
        description: 'Chiffrage détaillé et réaliste, transparence des coûts, optimisation budgétaire'
      },
      {
        category: 'Présentation de l\'agence',
        weight: 10,
        description: 'Références pertinentes, compétences de l\'équipe, valeur ajoutée différenciante'
      },
      {
        category: 'Qualité de la réponse',
        weight: 5,
        description: 'Document soigné, structuré, sans fautes, visuels professionnels'
      }
    ],

    deliverables: [
      'Document de réponse à l\'appel d\'offres (30-50 pages)',
      'Analyse du brief et questions complémentaires au client',
      'Wireframes des écrans clés (10-15 écrans minimum)',
      'Architecture technique et stack technologique',
      'Planning détaillé avec sprints et jalons',
      'Budget détaillé par phase et par métier',
      'Présentation de l\'agence et de l\'équipe projet',
      'Stratégie de tests et de déploiement',
      'Plan de formation et d\'accompagnement',
      'Proposition de maintenance et support'
    ],

    successIndicators: [
      'Application mobile notée 4.5+ sur les stores',
      '80% des organisateurs utilisent la plateforme pour plusieurs événements (rétention)',
      'Temps de setup d\'un événement < 30 minutes',
      '60%+ des participants utilisent activement les fonctions de networking',
      'Taux de satisfaction participants > 85%',
      'Scalabilité prouvée : 5000 participants simultanés sans ralentissement',
      'Taux d\'adoption de l\'app mobile > 70% des inscrits le jour J'
    ]
  },
  {
    id: 'mediconnect',
    title: 'MediConnect - Plateforme de télémédecine nouvelle génération',
    type: 'Écosystème SaaS : Plateforme praticiens + Application patients + Portail administratif',
    context: `**MediConnect** est un projet porté par un groupement de médecins libéraux qui souhaitent créer leur propre plateforme de télémédecine, indépendante des grands acteurs du marché (Doctolib, etc.).

**Contexte du marché :**
La télémédecine a explosé depuis 2020, mais les praticiens se plaignent :
- Des commissions élevées (10-15%) des plateformes existantes
- Du manque de personnalisation
- De la dépendance à un unique fournisseur
- De la complexité d'intégration avec leurs outils métier

**La vision MediConnect :**
Créer un écosystème complet et souverain comprenant :
1. **Plateforme Web Praticiens** : Gestion des consultations, dossiers patients, agenda, facturation
2. **Application Mobile/Web Patients** : Prise de RDV, téléconsultation vidéo, suivi médical, ordonnances numériques
3. **Portail Administratif** : Pour les secrétaires médicales et gestionnaires de cabinets

**Ambition :** Devenir la solution de référence pour les cabinets médicaux indépendants en France.`,

    clientDescription: `**Type de client :** Groupement de 15 médecins libéraux + 1 investisseur
**Secteur :** E-santé / Medtech SaaS
**Expérience digitale :** Variable selon les praticiens (25-65 ans)
**Budget disponible :** 150 000€ - 200 000€ (levée de fonds seed)
**Délai souhaité :** 8-10 mois pour MVP
**Équipe interne :** 1 médecin référent (Product Owner), 1 juriste santé, pas de tech
**Contraintes réglementaires :** TRÈS importantes (données de santé, RGPD santé, HDS)`,

    mainNeeds: [
      '**Plateforme Web Praticiens** : Agenda intelligent avec gestion des créneaux, dossier patient complet (antécédents, allergies, traitements), téléconsultation vidéo HD sécurisée, prescription d\'ordonnances numériques, gestion financière (honoraires, tiers-payant), statistiques d\'activité',
      '**Application Patients (iOS/Android/Web)** : Prise de RDV en ligne avec disponibilités temps réel, téléconsultation vidéo avec qualité médicale, carnet de santé numérique (historique, ordonnances, résultats d\'examens), rappels de RDV et prise de médicaments, paiement en ligne sécurisé, messagerie sécurisée avec le praticien',
      '**Portail Administratif** : Gestion multi-cabinets, gestion des utilisateurs et droits d\'accès, tableaux de bord administratifs, facturation groupée, export comptable, gestion des remplacements',
      '**Module de téléconsultation** : Visioconférence HD cryptée de bout en bout, partage d\'écran et documents, enregistrement possible (avec consentement), salle d\'attente virtuelle, qualité adaptative selon débit',
      '**Gestion documentaire** : Upload de documents médicaux (analyses, radios), stockage sécurisé certifié HDS, signature électronique des ordonnances, archivage réglementaire (20 ans minimum)',
      '**Facturation et paiement** : Intégration carte vitale (future), paiement CB sécurisé (Stripe/Mangopay), télétransmission CPAM, édition de feuilles de soins, gestion du tiers-payant',
      '**Interopérabilité** : Connexion aux logiciels médicaux existants (Médistory, Weda, etc.), export/import DMP (Dossier Médical Partagé), API ouverte pour laboratoires et pharmacies'
    ],

    specificConstraints: [
      '**Hébergement HDS (Hébergeur de Données de Santé)** : Certification obligatoire, serveurs en France',
      '**Conformité RGPD santé** : Consentement explicite, traçabilité des accès, droit à l\'oubli complexe',
      '**Sécurité maximale** : Chiffrement bout-en-bout, authentification forte (2FA), audit de sécurité obligatoire',
      '**Qualité vidéo médicale** : Minimum 720p, faible latence, bande passante adaptative',
      '**Accessibilité** : RGAA niveau AA (personnes âgées, handicap), interface simple pour seniors',
      '**Performance** : Application mobile < 80MB, chargement < 3s même en 3G',
      '**Multi-device** : Compatible desktop, tablette, smartphone',
      '**Offline partiel** : Consultation du dossier patient hors ligne pour le praticien',
      '**Traçabilité** : Logs complets de tous les accès aux données de santé (réglementation)',
      '**Signatures électroniques** : Ordonnances signées électroniquement (conformité ARS)',
      '**Disponibilité** : SLA 99.9% - les consultations ne doivent pas être interrompues',
      '**Respect du RPPS** : Vérification des numéros RPPS des praticiens (Répertoire Partagé des Professionnels de Santé)'
    ],

    targetAudience: `**Praticiens (Plateforme Web) :**
- **Persona 1 - Dr. Martin, Médecin généraliste** : 48 ans, cabinet de ville, 30 patients/jour, peu à l\'aise avec le digital, veut une solution simple et rapide
- **Persona 2 - Dr. Léa, Psychiatre** : 35 ans, consultations longues (45min), beaucoup de téléconsultations, besoin de confidentialité maximale
- **Persona 3 - Cabinet médical 5 praticiens** : Besoin de coordination, secrétaire médicale dédiée, gestion centralisée

**Patients (Application) :**
- **Persona 4 - Marie, Mère de famille active** : 38 ans, 2 enfants, privilégie la téléconsultation pour gain de temps, à l\'aise avec le digital
- **Persona 5 - Robert, Retraité** : 72 ans, pathologies chroniques, suivi régulier, peu technophile, besoin de simplicité extrême
- **Persona 6 - Lucas, Étudiant** : 22 ans, nouvelle ville, pas de médecin traitant, veut des RDV rapides

**Administrateurs (Portail) :**
- **Persona 7 - Sandrine, Secrétaire médicale** : 42 ans, gère 3 médecins, besoin d\'efficacité pour la prise de RDV et la facturation`,

    budget: `**Fourchette totale** : 150 000€ - 200 000€

**Répartition indicative souhaitée :**
- Audit et conseil réglementaire : 5-8%
- Conception UX/UI (3 interfaces) : 12-15%
- Développement Backend/API : 25-30%
- Développement Plateforme Web Praticiens : 20-25%
- Développement Application Patients (iOS/Android) : 20-25%
- Module vidéo téléconsultation : 8-10%
- Sécurité et audit : 5-7%
- Tests utilisateurs et recette : 5-7%
- Formation et documentation : 3-5%

**Modalités de paiement :**
- 30% à la signature (engagement)
- 30% à la livraison des maquettes validées
- 30% à la livraison du MVP fonctionnel
- 10% à la mise en production après recette

**Le budget comprend :**
- Développement complet du MVP (3 interfaces)
- Design system médical
- Module de téléconsultation intégré
- Tests utilisateurs (praticiens et patients)
- Audit de sécurité initial
- Formation des premiers utilisateurs (15 médecins)
- Documentation technique et utilisateur
- Support 6 mois post-lancement

**Non inclus dans le budget :**
- Hébergement HDS (4000-6000€/an)
- Certification HDS (coût client)
- Développement de l\'interopérabilité complète (DMP, carte vitale)
- Marketing et acquisition d\'utilisateurs
- Frais réglementaires (ARS, CNIL)
- Maintenance et évolutions post-6 mois`,

    timeline: `**Délai global souhaité :** 8-10 mois

**Jalons clés attendus :**
- **Mois 1 (Cadrage & Réglementaire)** : Audit réglementaire, ateliers métier avec praticiens, analyse des flux, personas détaillés
- **Mois 2 (Conception)** : Wireframes des 3 interfaces, parcours utilisateurs, maquettes haute-fidélité, design system, tests utilisateurs
- **Mois 3-4 (Backend & Sécurité)** : Architecture backend, API REST, base de données, sécurité, authentification, hébergement HDS
- **Mois 5-7 (Développement)** : Développement itératif des 3 plateformes, module vidéo, intégrations paiement
- **Mois 8 (Alpha)** : Tests internes avec 3-5 médecins du groupement
- **Mois 9 (Beta)** : Beta privée avec les 15 médecins fondateurs et 100 patients volontaires
- **Mois 10 (Production)** : Audit de sécurité final, mise en conformité, mise en production, formation

**Date de début souhaitée :** Mars 2024
**Deadline impérative :** Décembre 2024 (engagement investisseurs)

**Contraintes calendaires :**
- Validation ARS (Agence Régionale de Santé) nécessaire avant lancement
- Audit de sécurité externe obligatoire
- Certification HDS de l\'hébergeur à obtenir (3-4 mois)`,

    evaluationCriteria: [
      {
        category: 'Compréhension réglementaire',
        weight: 25,
        description: 'Maîtrise des enjeux HDS, RGPD santé, conformité ARS, traçabilité, sécurité des données de santé'
      },
      {
        category: 'Architecture technique et sécurité',
        weight: 25,
        description: 'Architecture robuste et sécurisée, choix d\'hébergement HDS, chiffrement, authentification, API, scalabilité'
      },
      {
        category: 'Expérience utilisateur multi-cibles',
        weight: 15,
        description: 'UX adaptée aux praticiens ET aux patients (seniors compris), wireframes pertinents, accessibilité'
      },
      {
        category: 'Module de téléconsultation',
        weight: 12,
        description: 'Solution vidéo de qualité médicale, fiabilité, sécurité, expérience fluide, gestion des incidents'
      },
      {
        category: 'Planning et gestion des risques',
        weight: 10,
        description: 'Planification réaliste avec jalons réglementaires, identification des risques (ARS, sécurité, technique)'
      },
      {
        category: 'Budget et chiffrage',
        weight: 8,
        description: 'Chiffrage transparent et réaliste compte tenu de la complexité, optimisation sans compromettre la sécurité'
      },
      {
        category: 'Références dans la santé',
        weight: 5,
        description: 'Expérience prouvée en e-santé ou secteur réglementé, certifications de l\'équipe, partenaires techniques'
      }
    ],

    deliverables: [
      'Document de réponse à l\'appel d\'offres (40-60 pages)',
      'Analyse réglementaire et plan de conformité (HDS, RGPD, ARS)',
      'Questions juridiques et techniques au client',
      'Wireframes des 3 interfaces : Praticiens / Patients / Admin (15-20 écrans par interface)',
      'Architecture technique détaillée avec focus sécurité',
      'Choix de la solution de téléconsultation (build vs. intégration)',
      'Stack technologique justifiée (backend, frontend, mobile, vidéo)',
      'Planning détaillé avec jalons réglementaires',
      'Budget détaillé par composante et par phase',
      'Plan de sécurité et stratégie de certification',
      'Présentation de l\'agence avec références dans la santé',
      'Composition de l\'équipe projet (incluant expertise réglementaire)',
      'Stratégie de tests (fonctionnels, sécurité, utilisateurs)',
      'Plan de formation des praticiens et patients',
      'Proposition de maintenance et support (SLA, astreinte)'
    ],

    successIndicators: [
      'Conformité 100% : Validation ARS + Certification HDS + Audit sécurité positif',
      'Adoption praticiens : 80% des 15 médecins fondateurs utilisent quotidiennement la plateforme',
      'Satisfaction praticiens : NPS > 50',
      'Adoption patients : 1000 patients inscrits dans les 3 mois post-lancement',
      'Qualité téléconsultation : < 2% de consultations interrompues pour raison technique',
      'Performance : 99.9% de disponibilité (SLA respecté)',
      'Sécurité : 0 incident de sécurité sur données de santé',
      'Accessibilité : Score RGAA > 90% sur toutes les interfaces',
      'NPS patients > 60 (notamment seniors)',
      'Temps moyen de prise de RDV < 2 minutes'
    ]
  }
]


# 🎓 Application de Formation - Gestion de Projet Web

Application web interactive pour l'enseignement de la gestion de projet web, développée avec Next.js, React et TypeScript.

## ✨ Fonctionnalités

### 📚 Modules de cours
- **11 modules** couvrant toutes les phases d'un projet web, plus la gestion de crise et la mission
- Contenu théorique avec histoires vraies, analogies, erreurs classiques de junior et mini-défis
- **18 ateliers interactifs** (triangle qualité-coût-délai, devis express, MoSCoW, matrice des risques, mail du client furieux, jour J…)
- Cas pratiques avec zone de brouillon ; corrections réservées à l'enseignant
- Contrôle de poste à chaque section, quiz global filtrable

### 🎯 Mission Projet
- Élaboration d'un cahier des charges complet
- Formulaire guidé avec 12 sections
- Sauvegarde automatique du travail
- Export en format Markdown
- Durée estimée : 1 journée

### 🎤 Évaluation
- Guide complet pour préparer l'oral (10-15 minutes)
- Structure de présentation détaillée
- Critères d'évaluation transparents
- Conseils pratiques

### 📖 Ressources
- **Lexique** : 250+ termes techniques avec filtres et recherche
- **Compétences** : Soft skills, hard skills et savoir-être du chef de projet
- **Quiz global** : Test de connaissances sur l'ensemble de la formation

### 📊 Suivi de progression
- Barre de progression globale
- Statut par module (non commencé, en cours, terminé)
- Sauvegarde locale de l'avancement

## 🚀 Installation

### Prérequis
- Node.js 22.13+ (le module natif `node:sqlite` est requis)
- npm ou yarn

### Installation des dépendances

\`\`\`bash
npm install
\`\`\`

### Lancement en développement

\`\`\`bash
npm run dev
\`\`\`

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du projet

\`\`\`
management-projet/
├── app/                        # Pages Next.js (App Router)
│   ├── page.tsx               # Accueil : le « dossier » (composant serveur)
│   ├── module/[id]/           # Pages module (serveur, SSG) → components/ModuleClient
│   ├── quiz/                  # Quiz global (serveur) → components/QuizClient
│   ├── mission/               # Mission cahier des charges + jeux d'équipe
│   ├── evaluation/ lexique/ competences/
│   ├── prof-guide/            # Guide enseignant, rendu uniquement si authentifié
│   └── api/
│       ├── teacher/login|logout   # Authentification enseignant (cookie signé)
│       └── correction             # Corrections des cas pratiques (enseignant seulement)
│
├── components/
│   ├── AppNav, Cartouche, Stamp, Footer   # Squelette visuel « dossier d'agence »
│   ├── HomeClient, ModuleClient, QuizClient
│   ├── CasPratique (feuillets jaune/rose), QuizWithCorrection, EnhancedQuiz
│   └── interactive/           # Ateliers interactifs par section (registry.tsx)
│
├── lib/
│   ├── content.ts             # Accès serveur au contenu ; retire les corrections du bundle
│   ├── teacherAuth.ts         # Vérification du mot de passe et jetons, côté serveur
│   └── teacherMode.ts         # Drapeau d'affichage côté navigateur
│
├── data/                      # Contenu pédagogique (HTML dans des template literals)
│   ├── modules.ts, additionalModules.ts, finalModules.ts, completeModules.ts, crisisModule.ts
│   ├── newQuestions.ts        # Questions ajoutées après l'audit (scénarios, trous, vrai/faux)
│   ├── newCases.ts            # Cas pratiques ajoutés après l'audit
│   ├── allModules.ts          # Agrégation
│   └── lexique.json
│
├── PRODUCT.md                 # Vérité produit (impeccable)
├── DESIGN.md                  # Système visuel documenté
└── public/
\`\`\`

## 🎨 Système visuel : « le dossier d'agence »

Chaque module est une ligne numérotée d'un devis, chaque section un poste, l'avancement un total. Papier blanc, encre noire, encre de tampon bleue ; feuillet jaune = exercice, feuillet rose = correction enseignant ; tampons inclinés pour les états (À faire / En cours / Validé), réglure hairline, angles vifs. Typographie : Archivo (variable, largeur) + JetBrains Mono pour les chiffres. Voir DESIGN.md.

## 🔐 Mode enseignant

Voir MODE_ENSEIGNANT.md : le mot de passe est vérifié côté serveur (`TEACHER_PASSWORD`), les corrections sont servies par une API protégée et ne sont jamais dans le bundle étudiant.

## 📋 Modules de formation

1. **Introduction à la gestion de projet web**
   - Définition et types de projets
   - Notion de valeur client
   - Livrables clés

2. **Phase de lancement**
   - Cahier des charges
   - Cartographie de l'existant
   - Étude des cibles
   - Constitution de l'équipe
   - Rôle du chef de projet

3. **Phase de planification**
   - Planning et Gantt
   - Outils de planification
   - Gestion du budget
   - Gestion des risques

4. **Phase de conception**
   - CDC fonctionnel et technique
   - UX/UI Design
   - Prototypage

5. **Phase de développement**
   - Technologies web
   - CMS (WordPress, Shopify, etc.)
   - Méthodes Agile

6. **Phase de test**
   - Tests par l'équipe
   - Recette client
   - Validation

7. **Phase de lancement**
   - Déploiement
   - SEO
   - Marketing digital

8. **Phase de suivi et maintenance**
   - Bilan de projet
   - Suivi post-lancement
   - Maintenance corrective et évolutive

9. **Conclusion et ressources**
   - Vision d'ensemble
   - Écoconception web
   - Accessibilité (RGAA)

## 🎨 Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **UI** : React 18 + TypeScript
- **Styling** : TailwindCSS
- **Icons** : Lucide React
- **Storage** : LocalStorage (progression, brouillons) + SQLite intégrée via `node:sqlite` (scores d'équipe, oraux) dans `data/app.db`
- **Polices** : Archivo + JetBrains Mono via next/font

## 📦 Déploiement

### Build de production

\`\`\`bash
npm run build
\`\`\`

### Démarrage en production

\`\`\`bash
npm start
\`\`\`

### Déploiement sur Vercel

Le projet est optimisé pour Vercel :

1. Pusher le code sur GitHub
2. Connecter le repository sur Vercel
3. Déploiement automatique à chaque push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Autres plateformes

- **Netlify** : Compatible
- **AWS Amplify** : Compatible
- **Serveur Node.js** : Utiliser `npm start` après `npm run build`

## 🎯 Utilisation pédagogique

### Pour les formateurs

1. **Personnalisation** : Modifier les fichiers dans `/data/` pour adapter le contenu
2. **Ajout de modules** : Créer de nouveaux fichiers de modules
3. **Quiz** : Ajouter des questions dans les sections
4. **Cas pratiques** : Adapter les exercices à votre contexte

### Pour les étudiants

1. Suivre les modules dans l'ordre recommandé
2. Réaliser les cas pratiques
3. Valider les connaissances avec les quiz
4. Compléter la mission cahier des charges
5. Préparer l'oral de 10-15 minutes

## 🔧 Personnalisation

### Modifier le contenu

Les contenus sont dans `/data/*.ts`. Structure d'un module :

\`\`\`typescript
{
  id: 'mon-module',
  title: 'Titre du module',
  description: 'Description courte',
  sections: [
    {
      id: 'section-1',
      title: 'Titre de la section',
      content: \`# Contenu en Markdown\`,
      casePratique: {
        title: 'Titre du cas',
        description: 'Description',
        exercice: 'Énoncé de l\'exercice'
      },
      quiz: [
        {
          id: 'q1',
          question: 'Question ?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
          correctAnswer: 0,
          explanation: 'Explication de la réponse'
        }
      ]
    }
  ]
}
\`\`\`

### Modifier les couleurs

Éditer `tailwind.config.js` pour personnaliser le thème.

## 📝 Licence

Ce projet est créé à des fins éducatives.

## 👥 Auteur

Développé pour l'enseignement de la gestion de projet web.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Ajouter du contenu

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.

---

**Bonne formation ! 🚀**


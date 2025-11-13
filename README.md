# 🎓 Application de Formation - Gestion de Projet Web

Application web interactive pour l'enseignement de la gestion de projet web, développée avec Next.js, React et TypeScript.

## ✨ Fonctionnalités

### 📚 Modules de cours
- **9 modules complets** couvrant toutes les phases d'un projet web
- Contenu théorique détaillé avec exemples concrets
- Cas pratiques basés sur des situations réelles d'agence
- Quiz interactifs pour valider les connaissances

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
- Node.js 18+ 
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
├── app/                      # Pages Next.js
│   ├── page.tsx             # Page d'accueil
│   ├── module/[id]/         # Pages des modules
│   ├── mission/             # Mission cahier des charges
│   ├── quiz/                # Quiz global
│   ├── evaluation/          # Guide d'évaluation
│   ├── lexique/             # Lexique interactif
│   └── competences/         # Compétences du chef de projet
│
├── components/              # Composants réutilisables
│   └── Quiz.tsx            # Système de quiz
│
├── data/                    # Données de contenu
│   ├── modules.ts          # Modules de base
│   ├── additionalModules.ts
│   ├── finalModules.ts
│   ├── completeModules.ts
│   ├── allModules.ts       # Agrégation de tous les modules
│   └── lexique.json        # Base de données du lexique
│
└── public/                 # Assets statiques
\`\`\`

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
- **Storage** : LocalStorage (progression utilisateur)

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


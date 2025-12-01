# Système de Gamification - Mission Individuelle

## Vue d'ensemble

La mission individuelle intègre un système de gamification complet pour rendre l'exercice plus ludique et engageant. Les étudiants travaillent en équipes et accumulent des points, débloquent des badges et résolvent des énigmes.

## Éléments du Système

### 1. Jetons Ressources (par équipe)

Chaque équipe dispose de **jetons stratégiques** à utiliser intelligemment :

- **3× Question Expert** 🔵
  - Permet de poser une question à l'enseignant
  - Encourage à réfléchir avant de solliciter l'aide
  
- **2× Révélation** 💡
  - Débloque une information cachée
  - Révèle des données techniques ou méthodologiques
  
- **1× Joker** 🎁
  - Aide majeure de l'enseignant
  - À utiliser en dernier recours

### 2. Easter Eggs et Énigmes

#### Eventeo (5 énigmes - SIMPLIFIÉES)

1. **Budget Max**
   - Indice : "Le chiffre 120 apparaît étrangement souvent dans ce projet. Budget max en milliers ?"
   - Solution : 120
   - Récompense : Budget maximal révélé (30 points)

2. **Sprints**
   - Indice : "Deux semaines, c'est le rythme parfait pour un sprint. Combien de jours exactement ?"
   - Solution : 14
   - Récompense : Durée optimale d'un sprint (20 points)

3. **Framework Mobile**
   - Indice : "Le framework qui rime avec 'act' et qui 'nativise' les apps mobiles ?"
   - Solution : react native
   - Récompense : Framework mobile recommandé (40 points)

4. **Participants Max**
   - Indice : "Le nombre maximum de participants qui fait rêver... commence par 5 et finit par 000"
   - Solution : 5000
   - Récompense : Capacité maximale révélée (25 points)

5. **Networking**
   - Indice : "L'algorithme qui connecte intelligemment les participants... ça 'matche' bien !"
   - Solution : matching
   - Récompense : Feature prioritaire identifiée (35 points)

#### MediConnect (5 énigmes - SIMPLIFIÉES)

1. **HDS**
   - Indice : "Trois lettres magiques pour héberger des données de santé en France..."
   - Solution : hds
   - Récompense : Hébergement obligatoire identifié (30 points)

2. **SLA**
   - Indice : "Un site médical doit être disponible... presque tout le temps. Trois chiffres avec des 9 ?"
   - Solution : 99.9
   - Récompense : SLA requis (25 points)

3. **Vidéo**
   - Indice : "Pour téléconsulter, il faut voir le patient. Quelle feature est critique ?"
   - Solution : video
   - Récompense : Feature critique identifiée (30 points)

4. **RPPS**
   - Indice : "Quatre lettres pour identifier un professionnel de santé en France (R_P_)"
   - Solution : rpps
   - Récompense : Vérification obligatoire (35 points)

5. **Budget**
   - Indice : "Le budget minimum commence par 150 et se termine par trois zéros. En euros ?"
   - Solution : 150000
   - Récompense : Budget minimum (25 points)

### 3. Easter Eggs Techniques

#### Code Konami
- Séquence : ↑↑↓↓←→←→BA
- Récompense : Badge "Vieille École" + 75 points

#### Message Loutre
- Taper "loutre" n'importe où sur la page
- Affiche un message secret avec indice bonus
- Récompense : 25 points supplémentaires

#### Triple Clic sur le Titre
- Cliquer 3 fois rapidement sur le titre du projet
- Révèle un indice bonus
- Récompense : 30 points

#### Ouverture Console
- Message affiché automatiquement : "Bravo pour ta curiosité, 50 points pour Gryffondor !"
- Récompense : 50 points directs + Badge "Plongeur de Console"

### 4. Badges Disponibles

| Badge | Condition | Points |
|-------|-----------|--------|
| ⚡ Premier Sang | Première équipe à démarrer | 50 |
| 🔍 Détective | Trouvé 3 easter eggs | 100 |
| 🕵️ Maître Détective | Trouvé TOUS les easter eggs | 200 |
| 🎮 Vieille École | Code Konami découvert | 75 |
| 💻 Explorateur de Code | Message console trouvé | 50 |
| 🏃 Démon de Vitesse | Rendu < 48h | 150 |
| 🎯 Gestionnaire Avisé | Jetons bien utilisés | 80 |
| 💭 Questionneur Émérite | Questions pertinentes | 60 |

### 5. Système de Points

**Points gagnés par :**
- Easter eggs résolus : 30-60 pts selon difficulté
- Badges débloqués : 50-200 pts
- Utilisation stratégique des jetons : bonus variable
- Questions pertinentes posées : 10-20 pts (à l'appréciation de l'enseignant)

### 6. Leaderboard en Temps Réel

- Classement visible par toutes les équipes
- Mise à jour automatique toutes les 10 secondes
- Affichage du podium (top 3)
- Indicateur de position pour chaque équipe

## Interface Utilisateur

### GamePanel (coin bas droit)
- Bouton flottant avec nombre d'énigmes débloquées
- Panel qui affiche :
  - Nom d'équipe et points totaux
  - Jetons disponibles
  - Liste des énigmes avec indices
  - Badges débloqués

### Leaderboard (coin haut droit)
- Bouton classement avec position actuelle
- Modal avec podium animé
- Liste complète de toutes les équipes
- Mise en évidence de sa propre équipe

## Conseils Pédagogiques

### Encourager la Collaboration
- Les énigmes favorisent les discussions d'équipe
- Les jetons limitent la dépendance à l'enseignant
- Le leaderboard crée une émulation positive

### Gestion des Jetons
- Valider l'utilisation pertinente des jetons "Question Expert"
- Récompenser les questions bien préparées (bonus points)
- Guider sans tout révéler quand un jeton est utilisé

### Suivi de la Progression
- Le leaderboard permet de voir quelles équipes avancent
- Les badges montrent qui explore au-delà du minimum
- Les easter eggs identifient les équipes curieuses

### Équilibrage
- Si une équipe prend trop d'avance : ajouter bonus aux autres
- Si une équipe bloque : offrir un indice supplémentaire
- Possibilité d'ajouter des points manuellement via la console

## Commandes Console (Mode Enseignant)

```javascript
// Voir toutes les équipes
getAllTeams()

// Ajouter des points à une équipe
addPoints(50, 'Excellent travail !')

// Débloquer un badge
awardBadge('question-master')

// Vérifier les easter eggs débloqués
getTeamData()
```

## Personnalisation Future

Le système est extensible. Vous pouvez facilement :
- Ajouter de nouveaux easter eggs
- Créer de nouveaux badges
- Modifier les valeurs de points
- Ajouter de nouveaux types de jetons

Fichiers à modifier :
- `/lib/gameSystem.ts` - Logique et données
- `/components/GamePanel.tsx` - Interface du panel
- `/components/Leaderboard.tsx` - Interface du classement

---

**Bon jeu et que la meilleure équipe gagne ! 🚀**


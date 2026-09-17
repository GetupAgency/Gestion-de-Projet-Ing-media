# Correction des Scores - Guide

## 🔧 Le Bug est Corrigé

Le système n'ajoutera **plus de points en boucle** à chaque actualisation.

Chaque easter egg ne peut maintenant être déclenché **qu'une seule fois**.

## ✨ Correction Automatique des Scores

### Le système corrige automatiquement !

**À la prochaine actualisation, le système :**
1. ✅ Détecte si le score est anormalement élevé (> 1000)
2. ✅ Recalcule le score légitime basé sur :
   - Badges réellement débloqués
   - Énigmes réellement résolues
   - Marge de 100 pts pour mini-jeux
3. ✅ Ajuste automatiquement le score
4. ✅ **Garde tout le reste** (badges, énigmes, jetons)

### Message aux Étudiants

```
📢 Correction Automatique

Un bug donnait des points en boucle.

✅ Il est maintenant corrigé
✅ Vos scores seront ajustés automatiquement
✅ Actualisez simplement la page (F5)
✅ Vous gardez vos badges et énigmes !

Aucune action requise de votre part.
```

**C'est tout !** Ils actualisent et c'est corrigé automatiquement.

### Option 2 : Ajustement Manuel

Si vous voulez garder certains progrès :

**Dans la console** :
```javascript
// 1. Récupérer les données actuelles
const team = JSON.parse(localStorage.getItem('teamData'))

// 2. Ajuster les points manuellement
team.points = 200  // Mettre le bon score

// 3. Sauvegarder
localStorage.setItem('teamData', JSON.stringify(team))

// 4. Nettoyer les événements déclenchés
localStorage.removeItem('triggeredEvents')
localStorage.removeItem('console-triggered')

// 5. Recharger
location.reload()
```

### Option 3 : Diviser par 2 (Estimation)

Si les scores sont environ doublés :

```javascript
const team = JSON.parse(localStorage.getItem('teamData'))
team.points = Math.floor(team.points / 2)
localStorage.setItem('teamData', JSON.stringify(team))
localStorage.removeItem('triggeredEvents')
localStorage.removeItem('console-triggered')
location.reload()
```

## 🎯 Pour l'Enseignant

### Corriger les Scores dans la base

Si des équipes ont déjà synchronisé des scores gonflés, le plus simple est le bouton **Corriger** du `/dashboard-live` (mode enseignant). En ligne de commande, sur le serveur (fichier `data/app.db`, ou `$DATA_DIR/app.db` ; `/app/data/app.db` dans le conteneur Docker) :

```sql
-- sqlite3 data/app.db
-- Voir tous les scores
SELECT team_name, points FROM teams ORDER BY points DESC;

-- Corriger un score spécifique
UPDATE teams SET points = 250 WHERE team_name = 'Les Loutres';

-- Diviser tous les scores par 2 (si tous sont gonflés)
UPDATE teams SET points = points / 2;

-- Reset complet de toutes les équipes
DELETE FROM teams;
```

### Message aux Étudiants

Exemple de message :

```
📢 Mise à jour technique

Un bug a été corrigé qui donnait des points en boucle.

Merci de :
1. Ouvrir la console (F12)
2. Taper : localStorage.clear()
3. Actualiser la page
4. Recréer votre équipe

Désolé pour le désagrément !
```

## ✅ Vérifications

Après correction, vérifier qu'un étudiant :
1. Actualise la page → Pas de points ajoutés
2. Ouvre la console → 50 points (une seule fois)
3. Actualise encore → Toujours les mêmes points
4. Taper "loutre" → 25 points (une seule fois)

Si ça marche, le bug est bien corrigé !

---

**Le système est maintenant légitime et fiable ! 🎯**


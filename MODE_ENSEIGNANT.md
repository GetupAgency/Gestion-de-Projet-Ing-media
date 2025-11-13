# 👨‍🏫 Mode Enseignant

## 🔐 Mot de passe

**Mot de passe par défaut :** `IngemediaProf2024!`

⚠️ **IMPORTANT :** Changez ce mot de passe dans le fichier `lib/teacherMode.ts` avant de partager l'application !

```typescript
// Dans lib/teacherMode.ts, ligne 3
const TEACHER_PASSWORD = 'Grosa!'
```

## 🔓 Activer le mode enseignant

### Méthode 1 : Via URL avec mot de passe (Recommandé)

```
https://votre-app.vercel.app/?key=IngemediaProf2024!
```

Ou en local :
```
http://localhost:3000/?key=IngemediaProf2024!
```

### Méthode 2 : Via le bouton (coin bas gauche)

1. Cliquez sur le bouton "🔑 Enseignant" en bas à gauche
2. Entrez le mot de passe
3. Le mode s'active

## ✅ Une fois activé

Le mode enseignant reste actif même en naviguant sur les autres pages (stocké en localStorage).

### Ce qui change :
- ✅ Bouton "Voir la correction proposée" visible sur tous les cas pratiques
- ✅ Accès à toutes les corrections détaillées
- ✅ Badge "Mode Enseignant" en bas à droite de l'écran

## 👁️ Indicateur visuel

Un badge violet/rose apparaît en bas à droite avec :
- 👁️ "Mode Enseignant"
- Bouton pour désactiver le mode

## ❌ Désactiver le mode enseignant

### Méthode 1 : Via le badge
Cliquez sur l'icône ❌ dans le badge en bas à droite

### Méthode 2 : Via la console
```javascript
localStorage.removeItem('teacherMode')
window.location.reload()
```

### Méthode 3 : Mode navigation privée
Le mode enseignant ne persiste pas en navigation privée

## 👨‍🎓 Pour les étudiants

Sans le paramètre `?boss=true`, les étudiants verront :
- 🔒 Bouton grisé "Correction réservée à l'enseignant"
- ❌ Impossible d'afficher les corrections
- ✅ Peuvent toujours faire les exercices

## 🎯 Cas d'usage

### Préparation de cours
```
http://localhost:3000/?boss=true
```
Préparez vos cours avec accès aux corrections

### Correction des travaux
Activez le mode pour comparer les réponses des étudiants avec les corrections proposées

### Démonstration en classe
Montrez les corrections aux étudiants pendant le cours

## 🔒 Sécurité

**Note :** Ce système n'est pas une sécurité absolue (les étudiants malins peuvent trouver le paramètre). 
C'est une "sécurité par l'obscurité" suffisante pour un contexte pédagogique.

Si vous voulez une vraie protection, il faudrait :
- Un système d'authentification
- Les corrections stockées côté serveur
- API protégée par mot de passe

Mais pour une formation, le système actuel est amplement suffisant ! 😊

## 💡 Astuce

Partagez l'URL avec `?boss=true` uniquement entre enseignants, jamais aux étudiants !


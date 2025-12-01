# Mots de Passe Mode Enseignant

## Système de Mot de Passe Dynamique

Le mot de passe enseignant change **automatiquement chaque jour** pour éviter que les étudiants ne le trouvent dans le code source.

### Mot de Passe = Jour de la Semaine (en français, en minuscules)

| Jour | Mot de Passe |
|------|--------------|
| Dimanche | `dimanche` |
| Lundi | `lundi` |
| Mardi | `mardi` |
| Mercredi | `mercredi` |
| Jeudi | `jeudi` |
| Vendredi | `vendredi` |
| Samedi | `samedi` |

## Comment Activer le Mode Enseignant

1. Cliquer sur le bouton "Enseignant" (en bas à gauche)
2. Entrer le jour en cours (ex: "lundi" pour lundi)
3. Le mode s'active jusqu'à minuit
4. À minuit, le mode se désactive automatiquement

## Sécurité

- Le mot de passe n'est jamais stocké en clair
- Seul un hash est conservé dans le localStorage
- La date est vérifiée à chaque chargement
- Si la date change, le mode est automatiquement désactivé

## Si les Étudiants Essaient

Message affiché : 
```
Bien essayé bande de loutres 🦦
```

**Aucun indice donné !**

Même s'ils lisent le code, ils doivent :
1. Comprendre la logique getDailyPassword()
2. Savoir quel jour on est
3. L'écrire correctement (minuscules, français)
4. Penser à utiliser le jour de la semaine

## Avantages

- ✅ Sécurité renforcée (change quotidiennement)
- ✅ Facile à retenir pour vous (juste le jour)
- ✅ Les étudiants curieux sont guidés (indice)
- ✅ Pas besoin de changer le code pour modifier le mot de passe
- ✅ Auto-expiration à minuit

## Pour Aujourd'hui (Lundi 1er Décembre 2025)

**Mot de passe** : `lundi`

---

**Note** : Ce système est suffisant pour un contexte pédagogique. Pour une vraie application production, utilisez une authentification serveur !


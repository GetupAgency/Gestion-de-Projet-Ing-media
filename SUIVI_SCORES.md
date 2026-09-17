# Suivi des Scores - Options

## 📊 Problématique

Avec `localStorage`, chaque équipe a ses données uniquement sur son navigateur.
Vous ne pouvez pas voir les scores en temps réel depuis votre ordinateur.

## ✅ Option 1 : Système Simple (RECOMMANDÉ pour débuter)

### Google Sheet Partagé

**Le plus simple et efficace sans code !**

#### Setup (5 minutes) :

1. Créer un Google Sheet
2. Structure :

| Équipe | Points | Badges | Énigmes | Jetons | Dernière MAJ |
|--------|--------|--------|---------|--------|--------------|
| Les Loutres | 450 | 3 | 7 | 2Q 1I 1J | 01/12 15:30 |
| Code Warriors | 380 | 2 | 5 | 3Q 2I 1J | 01/12 15:25 |

3. Partager le lien en "Éditeur" avec les étudiants
4. Chaque équipe met à jour sa ligne quand elle veut

#### Avantages :
- ✅ Temps réel
- ✅ Zéro code
- ✅ Visible par tous (émulation)
- ✅ Historique automatique
- ✅ Graphiques faciles

#### Inconvénients :
- ⚠️ Les étudiants peuvent tricher (changer leurs points)
- ⚠️ Mise à jour manuelle par les équipes

### Export/Import Manuel

**Utiliser le système intégré** :

1. Les équipes cliquent "Partager" dans le GamePanel
2. Elles vous envoient leur score (Discord, email, chat...)
3. Vous allez sur `/scores-enseignant`
4. Vous importez les scores (texte ou JSON)
5. Vous voyez le classement

#### Avantages :
- ✅ Déjà développé
- ✅ Pas de triche possible
- ✅ Format JSON horodaté

#### Inconvénients :
- ⚠️ Pas temps réel
- ⚠️ Import manuel

---

## 🚀 Option 2 : base SQLite intégrée (en place)

C'est l'option retenue. Les scores sont envoyés par le bouton **Synchroniser** du panneau de jeu vers `/api/teams`, stockés dans `data/app.db` (module natif `node:sqlite`, aucune dépendance ni service externe) et affichés en direct sur `/dashboard-live` (rafraîchissement toutes les 5 s).

- ✅ Aucune inscription, aucun quota, aucune clé publique
- ✅ Dashboard live pour l'enseignant, correction des scores en un clic
- ✅ Données sur votre serveur (volume Docker `/app/data`)
- ⚠️ Pensez à sauvegarder le fichier `app.db` en fin de semestre

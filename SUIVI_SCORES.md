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

## 🚀 Option 2 : Supabase (Base de données temps réel)

### Ce qu'il faut faire :

**1. Setup Supabase (15 min)** :
- Créer compte gratuit sur supabase.com
- Créer projet
- Créer table `teams` :
  ```sql
  - id (uuid, primary key)
  - team_name (text)
  - points (integer)
  - badges (jsonb)
  - easter_eggs (jsonb)
  - tokens (jsonb)
  - last_activity (timestamp)
  - project_id (text)
  ```

**2. Code à ajouter** :
- Installer `@supabase/supabase-js`
- Créer client Supabase
- Remplacer localStorage par appels API
- Sync automatique toutes les 10s

**3. Dashboard Enseignant** :
- Page temps réel qui lit la table
- Refresh auto toutes les 5s
- Graphiques de progression

### Avantages :
- ✅ Vraiment temps réel
- ✅ Suivi de l'évolution
- ✅ Historique complet
- ✅ Dashboard live pour vous
- ✅ Pas de triche (contrôle serveur)
- ✅ Multi-session (travail à distance)

### Inconvénients :
- ⚠️ Setup initial (15-30 min)
- ⚠️ Dépendance externe (Supabase)
- ⚠️ Quota gratuit (500 Mo, largement suffisant)
- ⚠️ Besoin d'une connexion internet

---

## 💡 Ma Recommandation

### Pour ce semestre (démarrage rapide) :
→ **Google Sheet partagé**

Simple, rapide, fonctionne immédiatement.

### Pour le semestre prochain (temps réel) :
→ **Supabase**

Si tu veux un vrai dashboard live avec graphiques et suivi.

---

## 🎯 Quelle Option Préfères-Tu ?

**Option A** : Je garde le système simple (export/import + Google Sheet)
**Option B** : Je développe l'intégration Supabase (20-30 min de dev)

Dis-moi et je le fais ! 🚀


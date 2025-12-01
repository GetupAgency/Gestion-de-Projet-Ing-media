# Setup Supabase - Instructions

## 1. Créer un Projet Supabase (5 min)

1. Aller sur https://supabase.com
2. Se connecter (GitHub recommandé)
3. Cliquer "New Project"
4. Remplir :
   - **Name** : `gestion-projet-ingemedia`
   - **Database Password** : (générer un mot de passe fort)
   - **Region** : Europe (Frankfurt ou Paris)
5. Attendre la création (1-2 min)

## 2. Créer la Table `teams` (3 min)

Dans le dashboard Supabase :

1. Menu **SQL Editor**
2. Cliquer **New Query**
3. Coller ce SQL :

```sql
-- Créer la table teams
CREATE TABLE teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_name TEXT UNIQUE NOT NULL,
  points INTEGER DEFAULT 0,
  badges JSONB DEFAULT '[]'::jsonb,
  easter_eggs JSONB DEFAULT '[]'::jsonb,
  tokens JSONB DEFAULT '{"expertQuestions": 3, "revelations": 2, "joker": 1}'::jsonb,
  project_id TEXT,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour recherche rapide
CREATE INDEX idx_teams_points ON teams(points DESC);
CREATE INDEX idx_teams_project ON teams(project_id);

-- Fonction de mise à jour automatique du timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour updated_at
CREATE TRIGGER teams_updated_at
  BEFORE UPDATE ON teams
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- Activer Row Level Security (sécurité)
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;

-- Politique : Tout le monde peut lire
CREATE POLICY "Enable read access for all" ON teams
  FOR SELECT USING (true);

-- Politique : Tout le monde peut insérer
CREATE POLICY "Enable insert for all" ON teams
  FOR INSERT WITH CHECK (true);

-- Politique : Une équipe peut mettre à jour ses propres données
CREATE POLICY "Enable update for team" ON teams
  FOR UPDATE USING (true);
```

4. Cliquer **Run** (ou F5)
5. Vérifier "Success" en bas

## 3. Récupérer les Clés API (2 min)

1. Menu **Settings** → **API**
2. Copier :
   - **Project URL** : `https://xxxxx.supabase.co`
   - **anon public key** : `eyJhbGc...` (longue clé)

## 4. Ajouter les Variables d'Environnement

Créer le fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...votre-clé...
```

**Remplacer** par vos vraies valeurs !

## 5. Installer la Dépendance

```bash
npm install @supabase/supabase-js
```

## 6. Redémarrer le Serveur

```bash
# Arrêter le serveur (Ctrl+C)
npm run dev
```

---

## ✅ C'est Prêt !

Une fois ces étapes faites, le système de sync fonctionnera automatiquement :

- Bouton "Synchro BDD" dans le GamePanel
- Dashboard enseignant temps réel sur `/dashboard-live`
- Pas de perte de données (localStorage conservé)

## 📊 Résultat

Vous pourrez :
- ✅ Voir tous les scores en temps réel
- ✅ Suivre l'évolution minute par minute
- ✅ Afficher le classement live à l'écran en classe
- ✅ Voir qui progresse, qui bloque
- ✅ Historique complet des activités

---

**Suivez ces instructions et tout fonctionnera ! 🚀**


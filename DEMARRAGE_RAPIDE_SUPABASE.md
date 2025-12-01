# Démarrage Rapide Supabase

## Étapes Rapides (10 minutes)

### 1. Créer Compte Supabase
- https://supabase.com → Sign up
- New Project : `ingemedia-mission`

### 2. Copier le SQL
Ouvrir `SETUP_SUPABASE.md` et copier tout le SQL dans SQL Editor

### 3. Récupérer les Clés
Settings → API → Copier :
- Project URL
- anon public key

### 4. Créer .env.local
```
NEXT_PUBLIC_SUPABASE_URL=votre-url-ici
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-ici
```

### 5. Redémarrer
```bash
npm run dev
```

## Utilisation

**Étudiants** :
- Bouton "Synchro BDD" apparaît dans le GamePanel
- Clic → Upload leur score vers la base

**Enseignant** :
- Aller sur `/dashboard-live`
- Voir tous les scores en temps réel
- Rafraîchissement auto toutes les 10s

## Mot de Passe Enseignant

`Grosac4Ever!`

---

C'est tout ! 🚀


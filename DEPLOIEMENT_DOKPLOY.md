# Déploiement sur Dokploy

Dépôt : `GetupAgency/Gestion-de-Projet-Ing-media` (branche `main`). L'image est construite depuis le `Dockerfile` du dépôt (Node 22, build standalone). Les données (scores d'équipe, oraux) vivent dans une base SQLite : `/app/data/app.db` dans le conteneur, à monter sur un volume persistant.

## 0. Avant de commencer

- Le code à déployer est sur `main` (`git status` propre, `git push` fait).
- Un sous-domaine est choisi, par exemple `cours.getup.agency`, avec un enregistrement DNS **A** pointant vers l'IP du serveur Dokploy (TTL court le temps de la mise en place).
- Un nouveau mot de passe enseignant est prêt (l'ancien est dans l'historique git, ne le réutilisez pas) et une clé de signature :

```bash
openssl rand -hex 32   # → TEACHER_SECRET
```

## 1. Créer le projet et le service

1. Dokploy → **Projects** → **Create Project** : nom `Cours Ingémedia`.
2. Dans le projet → **Create Service** → **Application** : nom `gestion-projet`.

## 2. Source (onglet General)

- **Provider** : *GitHub* si l'app GitHub Dokploy est installée sur l'organisation GetupAgency (Settings → Git → GitHub). Sinon *Git* avec l'URL SSH `git@github.com:GetupAgency/Gestion-de-Projet-Ing-media.git` et la clé SSH que Dokploy génère (à ajouter comme *Deploy key* en lecture seule sur le dépôt GitHub).
- **Repository** : `Gestion-de-Projet-Ing-media` · **Branch** : `main` · **Build Path** : `/`.
- **Build Type** : **Dockerfile** · Dockerfile path `./Dockerfile` · Docker context `.`.
- Enregistrer.

## 3. Variables d'environnement (onglet Environment)

```
TEACHER_PASSWORD=<nouveau mot de passe>
TEACHER_SECRET=<résultat de openssl rand -hex 32>
```

Rien d'autre n'est requis. `PORT`, `HOSTNAME` et `DATA_DIR=/app/data` sont déjà fixés dans l'image. Ne remettez pas les anciennes variables `NEXT_PUBLIC_SUPABASE_*`.

## 4. Volume persistant (onglet Advanced → Volumes / Mounts)

- **Add Mount** → type **Volume Mount**.
- **Volume name** : `gestion-projet-data` · **Mount path** : `/app/data`.

Sans ce volume, la base est recréée vide à chaque redéploiement.

## 5. Domaine (onglet Domains)

- **Add Domain** : host `cours.getup.agency`, **Container port** `3000`, **HTTPS** activé, certificat **Let's Encrypt**.
- Traefik (fourni par Dokploy) fait le reverse proxy et le certificat. Le DNS doit déjà résoudre vers le serveur.

## 6. Déployer

- Bouton **Deploy**. Suivre l'onglet **Deployments** → **Logs** : les étapes `deps`, `build`, `runner` du Dockerfile puis `Ready`.
- Première visite : `https://cours.getup.agency`. La base est créée automatiquement au premier appel avec les 16 étudiants des oraux.
- Vérifier : `https://cours.getup.agency/api/teams` répond `{"ok":true,"teams":[]}` et `/api/oraux` liste les étudiants.
- Mode enseignant : bouton **Enseignant** de la barre, saisir `TEACHER_PASSWORD`, puis `/prof-guide`, `/oraux`, `/dashboard-live`.

## 7. Déploiement automatique

- Provider GitHub : **Auto Deploy** est activé par défaut, chaque push sur `main` redéploie.
- Provider Git : onglet **Deployments** → **Webhook URL**, à coller dans GitHub → Settings → Webhooks (event *push*, content type JSON).

## 8. Sauvegarde de la base

Sur le serveur Dokploy, en SSH :

```bash
CTR=$(docker ps --filter "name=gestion-projet" --format '{{.Names}}' | head -1)
# Vider le journal WAL dans le fichier principal, puis copier
docker exec "$CTR" node -e "const {DatabaseSync}=require('node:sqlite');new DatabaseSync('/app/data/app.db').exec('PRAGMA wal_checkpoint(TRUNCATE)')"
docker cp "$CTR":/app/data/app.db ./app-$(date +%F).db
```

Restauration : arrêter le service dans Dokploy, `docker cp ./app-YYYY-MM-DD.db "$CTR":/app/data/app.db`, redémarrer.

Pour lire ou corriger un score à la main : `sqlite3 app-YYYY-MM-DD.db` sur votre poste (voir `CORRECTION_SCORES.md`), ou le bouton **Corriger** du `/dashboard-live`.

## 9. Dépannage

| Symptôme | Cause probable | Correction |
|---|---|---|
| Build échoue sur `node:sqlite` | Image Node < 22.13 | Vérifier que le Dockerfile du dépôt est utilisé (Build Type Dockerfile, pas Nixpacks) |
| Connexion enseignant refusée | `TEACHER_PASSWORD` absent ou mal saisi | Onglet Environment, puis **Redeploy** |
| Scores perdus après redéploiement | Volume non monté | Étape 4, puis redéployer |
| 502 / certificat absent | DNS ne pointe pas encore vers le serveur | Attendre la propagation, relancer la génération du certificat dans Domains |
| Dashboard live ne bouge pas | Interrogation toutes les 5 s, normal | Les équipes doivent cliquer **Synchroniser** dans le panneau de jeu |

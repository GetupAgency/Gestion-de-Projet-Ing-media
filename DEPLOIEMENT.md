# 🚀 Guide de Déploiement

Ce guide vous explique comment déployer l'application de formation en gestion de projet web.

## 📋 Prérequis

- Compte GitHub (gratuit)
- Compte Vercel (gratuit) OU autre plateforme d'hébergement
- Git installé sur votre machine

## 🎯 Option 1 : Déploiement sur Vercel (Recommandé)

Vercel est la plateforme créée par l'équipe Next.js. C'est la solution la plus simple et rapide.

### Étape 1 : Préparer le code

```bash
# Vérifier que tout fonctionne en local
npm run dev

# Créer un build de production
npm run build
```

### Étape 2 : Pusher sur GitHub

```bash
# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "Initial commit - Application de formation"

# Créer un repository sur GitHub puis :
git remote add origin https://github.com/VOTRE-USERNAME/management-projet.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Cliquer sur "New Project"
4. Importer votre repository `management-projet`
5. Vercel détecte automatiquement Next.js
6. Cliquer sur "Deploy"

**C'est terminé ! ✨**

Votre application sera accessible sur : `https://votre-projet.vercel.app`

### Configuration Vercel (optionnel)

Dans les paramètres du projet sur Vercel :

- **Domaine personnalisé** : Ajoutez votre propre nom de domaine
- **Variables d'environnement** : Si vous en ajoutez plus tard
- **Déploiement automatique** : Activé par défaut à chaque push

## 🌐 Option 2 : Netlify

### Étape 1 : Build Settings

Créer un fichier `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Étape 2 : Déployer

1. Aller sur [netlify.com](https://netlify.com)
2. "New site from Git"
3. Connecter votre repository GitHub
4. Netlify détecte les settings automatiquement
5. "Deploy site"

## 🖥️ Option 3 : Serveur VPS (Ubuntu)

Pour déployer sur votre propre serveur :

### Prérequis serveur

```bash
# Installer Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Installer PM2 (gestionnaire de processus)
sudo npm install -g pm2
```

### Déploiement

```bash
# Sur votre serveur
git clone https://github.com/VOTRE-USERNAME/management-projet.git
cd management-projet

# Installer les dépendances
npm install

# Build de production
npm run build

# Lancer avec PM2
pm2 start npm --name "formation-gestion-projet" -- start
pm2 save
pm2 startup
```

### Nginx (reverse proxy)

```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer la configuration
sudo ln -s /etc/nginx/sites-available/formation /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 📱 Option 4 : AWS Amplify

1. Aller sur [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. "New app" > "Host web app"
3. Connecter GitHub
4. Sélectionner le repository
5. Build settings détectés automatiquement
6. "Save and deploy"

## 🐳 Option 5 : Docker

### Créer un Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Build et run

```bash
docker build -t formation-gestion-projet .
docker run -p 3000:3000 formation-gestion-projet
```

## 🔒 Sécurité et optimisations

### Headers de sécurité

Ajouter dans `next.config.js` :

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 📊 Analytics (optionnel)

### Google Analytics

1. Installer le package :
```bash
npm install @next/third-parties
```

2. Ajouter dans `app/layout.tsx` :
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}
```

## 🔍 Monitoring

### Vercel Analytics

Déjà inclus si vous utilisez Vercel (gratuit sur le plan Hobby)

### Sentry (erreurs)

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## ✅ Checklist avant déploiement

- [ ] Tests locaux réussis (`npm run dev`)
- [ ] Build de production réussi (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] `.gitignore` configuré
- [ ] README.md à jour
- [ ] Variables d'environnement configurées (si besoin)
- [ ] Domaine personnalisé configuré (optionnel)

## 🆘 Dépannage

### Erreur de build

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Problème de mémoire

```bash
# Augmenter la limite mémoire Node.js
NODE_OPTIONS='--max-old-space-size=4096' npm run build
```

### Pages 404

Vérifier que votre hébergeur supporte le routing Next.js (App Router).

## 📞 Support

Si vous rencontrez des problèmes :

1. Consulter la [documentation Next.js](https://nextjs.org/docs)
2. Vérifier les logs de déploiement
3. Chercher dans les issues GitHub
4. Contacter le support de votre plateforme d'hébergement

---

**Bon déploiement ! 🎉**


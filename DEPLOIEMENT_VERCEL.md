# 🚀 Guide de mise à jour sur Vercel

Votre application est déployée sur Vercel. Voici comment la mettre à jour.

## ✅ Mise à jour automatique (Recommandé)

Vercel se met à jour automatiquement à chaque fois que vous poussez du code sur GitHub !

### Étapes simples :

```bash
# 1. Vérifier les modifications
git status

# 2. Ajouter tous les fichiers modifiés
git add .

# 3. Créer un commit avec un message clair
git commit -m "Amélioration du quiz et du design Ingémedia"

# 4. Pousser sur GitHub
git push
```

**C'est tout !** Vercel détecte automatiquement le push et redéploie en 1-2 minutes.

## 📱 Suivre le déploiement

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet
3. Vous verrez le déploiement en cours :
   - ⏳ Building... (1-2 min)
   - ✅ Ready (déployé !)

## 🔔 Vérifier que c'est en ligne

1. Attendez le badge "Ready" sur Vercel
2. Visitez votre URL : `https://votre-projet.vercel.app`
3. Faites Ctrl+F5 (hard refresh) pour vider le cache

## 🎯 Workflow complet

```bash
# Workflow quotidien
git add .
git commit -m "Description des changements"
git push

# Vercel déploie automatiquement
# Vous recevrez un email de confirmation
```

## 🔧 Déploiement manuel (rare)

Si vous voulez forcer un redéploiement sans changement de code :

1. Allez sur votre projet Vercel
2. Onglet "Deployments"
3. Cliquez sur "..." du dernier déploiement
4. "Redeploy"

## 🌐 Domaine personnalisé (optionnel)

Pour utiliser votre propre domaine (ex: formation.ingemedia.fr) :

1. Sur Vercel, onglet "Settings" > "Domains"
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions Vercel
4. HTTPS automatique inclus

## ⚡ Astuces

### Preview deployments
Chaque push crée aussi un "Preview deployment" pour tester avant que ça soit en prod.

### Branches
- Push sur `main` = déploiement en production
- Push sur autre branche = preview uniquement

### Rollback facile
Si un déploiement pose problème :
1. Vercel > Deployments
2. Cliquez sur le déploiement précédent
3. "Promote to Production"

## 📊 Exemples de messages de commit

```bash
# Bons messages
git commit -m "Ajout de 50 questions au quiz global"
git commit -m "Correction bug affichage logo"
git commit -m "Mise à jour contenu module planification"

# À éviter
git commit -m "fix"
git commit -m "update"
git commit -m "modif"
```

## 🆘 Problèmes courants

### Le site ne se met pas à jour
```bash
# Vider le cache navigateur
Ctrl + F5 (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Erreur de build sur Vercel
1. Vérifiez les logs de build sur Vercel
2. Testez en local : `npm run build`
3. Si ça marche en local mais pas sur Vercel, vérifiez les variables d'environnement

### Modifications non visibles
- Attendez 1-2 minutes (temps de build + CDN)
- Videz le cache du navigateur
- Vérifiez que le bon commit est déployé sur Vercel

## 📞 Support

- [Documentation Vercel](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

---

**C'est aussi simple que ça ! Git push = Site à jour en 2 minutes** 🎉


# Guide de Déploiement - L'Atelier du Sandwich

## Étapes pour déployer le site

### 1. Créer un compte GitHub

1. Aller sur [github.com](https://github.com)
2. Créer un compte avec votre email professionnel
3. Choisir un nom d'utilisateur approprié

### 2. Créer un nouveau repository

1. Cliquer sur "New repository"
2. Nom : `latelier-du-sandwich-website`
3. Description : "Site web officiel de L'Atelier du Sandwich"
4. Public ou Private (au choix)
5. Cliquer "Create repository"

### 3. Uploader le code

1. Télécharger tout le code du projet
2. Suivre les instructions GitHub pour uploader les fichiers
3. Ou utiliser GitHub Desktop pour plus de simplicité

### 4. Configurer Sanity

1. Aller sur [sanity.io](https://sanity.io)
2. Se connecter avec GitHub (utiliser le compte créé)
3. Créer un nouveau projet : "L'Atelier du Sandwich"
4. Noter le Project ID
5. Modifier le fichier `.env.local` avec ce Project ID

### 5. Déployer sur Vercel (Recommandé)

1. Aller sur [vercel.com](https://vercel.com)
2. Se connecter avec GitHub
3. Importer le repository créé
4. Ajouter les variables d'environnement Sanity
5. Déployer !

### 6. Configurer le contenu

1. Lancer `npm run sanity` localement
2. Remplir tous les contenus dans l'interface Sanity
3. Le site se mettra à jour automatiquement

## Résultat

- Site web 100% sous votre contrôle
- Interface d'administration autonome
- Aucune dépendance externe
- Propriété intellectuelle complète

## Coûts

- GitHub : Gratuit
- Sanity : Gratuit (plan de base largement suffisant)
- Vercel : Gratuit (plan hobby)

**Total : 0€/mois**

## Support

Une fois déployé, le site est 100% autonome. Vous pouvez modifier tout le contenu via l'interface Sanity sans compétences techniques.
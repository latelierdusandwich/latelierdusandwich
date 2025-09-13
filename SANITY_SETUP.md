# Configuration Sanity pour L'Atelier du Sandwich

## Étapes pour votre cliente

### 1. Créer un compte Sanity (GRATUIT)
1. Aller sur [sanity.io](https://sanity.io)
2. Cliquer sur "Get started for free"
3. S'inscrire avec son email

### 2. Créer un nouveau projet
1. Une fois connectée, cliquer sur "Create new project"
2. Choisir un nom : "L'Atelier du Sandwich"
3. Sélectionner "Dataset" : production
4. Noter le **Project ID** (important !)

### 3. Configuration du site
1. Copier le fichier `.env.local.example` vers `.env.local`
2. Remplacer `your_project_id_here` par le Project ID obtenu
3. Redémarrer le serveur de développement

### 4. Lancer l'interface d'administration
```bash
npm run sanity
```

### 5. Remplir le contenu initial
L'interface Sanity s'ouvrira sur http://localhost:3333

**Sections à remplir :**
- ✅ Paramètres du Site (logo, nom, menu PDF)
- ✅ Section Accueil (titre, description, image de fond)
- ✅ Section À Propos (textes, images du carousel)
- ✅ Avis Clients (liste des avis)
- ✅ Contact (adresse, téléphone, services)
- ✅ Horaires (planning de la semaine)
- ✅ Pied de Page (textes, liens)

## Avantages pour votre cliente

### 🎯 Autonomie Complète
- Modification des textes en temps réel
- Upload et gestion des images
- Changement du menu PDF en un clic
- Ajout/suppression d'avis clients

### 🔒 Propriété Totale
- Projet sur son compte Sanity
- Contrôle total des données
- Peut inviter d'autres utilisateurs
- Sauvegarde automatique

### 💰 Gratuit
- Plan gratuit Sanity largement suffisant
- 3 utilisateurs inclus
- 10GB de bande passante/mois
- 500k requêtes API/mois

### 🚀 Interface Simple
- Éditeur visuel intuitif
- Prévisualisation en temps réel
- Organisation logique par sections
- Validation automatique des champs

## Support Technique
Une fois configuré, le site sera 100% autonome. Votre cliente pourra :
- Modifier tous les contenus sans développeur
- Ajouter de nouvelles images
- Changer le menu PDF
- Gérer les avis clients
- Mettre à jour les horaires

Le site se mettra à jour automatiquement à chaque modification dans Sanity !
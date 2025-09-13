# L'Atelier du Sandwich - Site Web

Site web officiel de L'Atelier du Sandwich, snack de qualité situé Place Félix Baret à Marseille 6ème.

## Fonctionnalités

- Site web responsive et moderne
- Interface d'administration Sanity CMS
- Gestion autonome du contenu
- Menu PDF modifiable
- Galerie d'images
- Avis clients
- Informations de contact et horaires

## Technologies utilisées

- React 18 avec TypeScript
- Tailwind CSS pour le design
- Sanity CMS pour la gestion de contenu
- Vite pour le build
- Lucide React pour les icônes

## Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
cd latelier-du-sandwich
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer Sanity
```bash
cp .env.local.example .env.local
# Modifier .env.local avec vos clés Sanity
```

4. Lancer le développement
```bash
npm run dev
```

5. Lancer l'interface d'administration Sanity
```bash
npm run sanity
```

## Configuration Sanity

Voir le fichier `SANITY_SETUP.md` pour les instructions détaillées de configuration.

## Déploiement

Le site peut être déployé sur :
- Vercel (recommandé)
- Netlify
- GitHub Pages
- Tout hébergeur supportant les sites statiques

## Support

Pour toute question technique, consulter la documentation Sanity ou React.

---

© 2025 L'Atelier du Sandwich. Tous droits réservés.
# Portfolio Jordan

Portfolio professionnel développé avec Next.js 14 (App Router), TypeScript et Tailwind CSS, dans un style minimal iOS.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations au scroll
- **Inter** - Police Google Fonts

## 📁 Structure du projet

```
portfolio-jordan/
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout global avec Navbar & Footer
│   ├── page.tsx           # Page d'accueil
│   ├── projects/          # Pages projets
│   │   └── medicalia/     # Page projet Medicalia
│   ├── globals.css        # Styles globaux
│   ├── robots.ts          # Configuration robots.txt
│   └── sitemap.ts         # Sitemap XML
├── components/             # Composants React
│   ├── ui/                # Composants UI réutilisables
│   ├── Navbar.tsx         # Navigation principale
│   ├── Footer.tsx          # Footer
│   └── ProofBar.tsx       # Bandeau de réassurance
├── lib/                    # Utilitaires
│   ├── content.ts         # Contenu centralisé
│   ├── theme.ts           # Design system
│   └── utils.ts           # Fonctions utilitaires
└── public/                # Assets statiques
    ├── me.jpg             # Photo de profil
    ├── medicalia-cover.png # Mockup projet
    └── og-image.svg        # Image OpenGraph
```

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Configuration

### Contenu

Tout le contenu texte est centralisé dans `/lib/content.ts` :
- `homeContent` : Contenu de la page d'accueil
- `medicaliaContent` : Contenu de la page projet Medicalia

Modifiez les textes sans toucher au layout.

### Design System

Le design system est défini dans `/lib/theme.ts` :
- Couleurs iOS
- Rayons de bordure (20px pour les cartes)
- Ombres subtiles
- Espacements et largeurs max

## 🎨 Composants UI

Composants réutilisables dans `/components/ui` :
- `Container` - Container responsive
- `Button` - Bouton avec variants primary/secondary
- `Card` - Carte style iOS
- `Chip` - Pastille de tag
- `SectionTitle` - Titre de section
- `Accordion` - Accordéon FAQ
- `FadeInView` - Animation au scroll

## 🚢 Déploiement Vercel

### Déploiement automatique

1. Connectez votre repository GitHub/GitLab à Vercel
2. Vercel détectera automatiquement Next.js
3. Le build se lancera automatiquement

### Configuration requise

- **Framework Preset** : Next.js (détecté automatiquement)
- **Build Command** : `npm run build` (automatique)
- **Output Directory** : `.next` (automatique)
- **Install Command** : `npm install` (automatique)
- **Node.js Version** : 18.x ou supérieur (recommandé 20.x)

### Variables d'environnement

Aucune variable d'environnement requise pour le moment.

### Image OpenGraph

L'image OpenGraph est disponible dans `/public/og-image.svg`. 

**Note** : Pour une meilleure compatibilité avec les réseaux sociaux, vous pouvez convertir le SVG en PNG (1200×630px) :
- Utilisez un outil comme [CloudConvert](https://cloudconvert.com/svg-to-png) ou [SVG to PNG](https://svgtopng.com/)
- Remplacez `og-image.svg` par `og-image.png` dans `app/layout.tsx`

### Domaine personnalisé

1. Allez dans les paramètres du projet Vercel
2. Section "Domains"
3. Ajoutez votre domaine personnalisé
4. Mettez à jour les URLs dans :
   - `app/layout.tsx` (metadataBase, openGraph.url)
   - `app/robots.ts` (sitemap URL)
   - `app/sitemap.ts` (baseUrl)

### Vérification post-déploiement

- ✅ Vérifiez que le site est accessible
- ✅ Testez les métadonnées OG avec [opengraph.xyz](https://www.opengraph.xyz/) ou [metatags.io](https://metatags.io/)
- ✅ Vérifiez le sitemap : `votre-domaine.com/sitemap.xml`
- ✅ Vérifiez robots.txt : `votre-domaine.com/robots.txt`

## 📱 Optimisations

- ✅ Images optimisées avec Next.js Image (AVIF/WebP)
- ✅ Placeholders blur pour toutes les images
- ✅ Lazy loading pour images hors viewport
- ✅ Font optimization avec `next/font`
- ✅ Métadonnées SEO complètes
- ✅ Sitemap et robots.txt
- ✅ Animations performantes avec Framer Motion

## 🔧 Scripts disponibles

- `npm run dev` - Développement local
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Linter ESLint

## 📄 Licence

Tous droits réservés © 2024 Jordan
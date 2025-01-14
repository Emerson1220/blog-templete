# Dieupart Blog v1.0.0

Blog professionnel pour un diagnostiqueur immobilier, développé avec Next.js 15, SCSS, et NextAuth.

## Technologies Utilisées

- Next.js 15.1.3
- SCSS pour le styling
- NextAuth pour l'authentification
- Neon Database (PostgreSQL)
- Drizzle ORM
- Vercel pour le déploiement

## Prérequis

- Node.js 20.x
- npm
- Une base de données Neon (PostgreSQL)
- Comptes développeur Google et/ou GitHub pour l'authentification OAuth

## Installation

1. Cloner le repository :

```bash
git clone [URL_DU_REPO]
cd dieupart-blog-v1.0.0
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer les variables d'environnement :
   Créer un fichier `.env` à la racine du projet avec les variables suivantes :

```env
# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=votre_secret_nextauth

# OAuth Providers
GOOGLE_ID=votre_google_client_id
GOOGLE_SECRET=votre_google_client_secret

# Database
DATABASE_URL=votre_url_neon_database

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Initialiser la base de données :

```bash
# Générer les migrations
npm run db:generate

# Appliquer les migrations
npm run db:migrate

# (Optionnel) Ajouter des données de test
npm run db:seed
```

## Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:3000`

## Structure du Projet

```
src/
├── app/                    # Routes et pages Next.js
│   ├── api/               # API Routes
│   ├── dashboard/         # Interface d'administration
│   └── ...
├── components/            # Composants React réutilisables
├── db/                    # Configuration de la base de données
│   ├── migrations/       # Migrations Drizzle
│   └── schema.ts        # Schéma de la base de données
├── hooks/                 # Custom hooks React
├── styles/               # Fichiers SCSS
└── types/                # Types TypeScript
```

## Fonctionnalités

- 🏠 Page d'accueil avec présentation des services
- 📝 Blog avec gestion des articles
- 🔒 Authentification sécurisée
- 📊 Dashboard administrateur
- 📱 Design responsive
- 🎨 Interface moderne et professionnelle

## Déploiement

Le projet est configuré pour un déploiement automatique sur Vercel via GitHub Actions.

### Configuration du Déploiement

1. Créer un projet sur Vercel
2. Configurer les variables d'environnement sur Vercel
3. Ajouter les secrets suivants dans GitHub Actions :
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `DATABASE_URL`
   - `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`
   - `GOOGLE_ID`
   - `GOOGLE_SECRET`

Le déploiement se fait automatiquement à chaque push sur la branche main.

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

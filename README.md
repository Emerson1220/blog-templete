# Next.js Blog Template 🚀

Un template moderne de blog construit avec Next.js, TypeScript, Prisma et PostgreSQL.

## ✨ Fonctionnalités

- 🔐 Authentification complète avec NextAuth.js
- 📦 Base de données PostgreSQL avec Prisma
- ⚡️ Compatible avec Neon Database en production
- 🎨 Styling avec TailwindCSS et SASS
- 🚀 Optimisations de performance avec Vercel
- 📱 Design responsive
- 🔍 SEO optimisé

## 🛠 Prérequis

- Node.js (v22+)
- PostgreSQL
- npm ou yarn
- Vercel CLI (pour le déploiement)

## 🚀 Démarrage Rapide

1. Cloner le repository :

```bash
git clone https://github.com/Emerson1220/blog-templete.git
cd next-template-blog
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer les variables d'environnement :

```bash
cp .env.example .env
```

4. Configurer la base de données :

```bash
npx prisma generate
npx prisma db push
```

5. Lancer le serveur de développement :

```bash
npm run dev
```

## 📁 Structure du Projet

```
├── prisma/
│   └── schema.prisma    # Schéma de base de données
├── public/             # Assets statiques
├── src/
│   ├── app/           # Pages et routes Next.js
│   ├── components/    # Composants React
│   ├── config/        # Configuration
│   ├── lib/          # Utilitaires et helpers
│   ├── styles/       # Styles globaux
│   └── types/        # Types TypeScript
│       ├── api.ts    # Types pour l'API
│       ├── auth.ts   # Types pour l'authentification
│       ├── database.ts # Types pour la base de données
│       └── index.ts  # Types globaux
```

## 📝 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Build l'application
- `npm run start` - Lance l'application en production
- `npm run lint` - Vérifie le code avec ESLint
- `npm run db:push` - Synchronise le schéma avec la base de données
- `npm run db:studio` - Ouvre Prisma Studio
- `npm run db:seed` - Remplit la base de données avec des données de test
- `npm run deploy` - Déploie l'application
- `npm run deploy:check` - Vérifie le déploiement
- `npm run deploy:prod` - Déploie en production

## 🔒 Variables d'Environnement

```env
# Pour le développement local
DATABASE_URL="postgresql://..."

# Pour Neon en production
# DATABASE_URL="postgres://user:password@ep-example.aws-eu-central-1.neon.tech/neondb?sslmode=require"
# DIRECT_URL="postgres://user:password@ep-example.aws-eu-central-1.neon.tech/neondb?sslmode=require"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret"
```

## 💾 Configuration Base de Données

### Développement Local avec Docker et DBeaver

1. Créez un fichier `docker-compose.yml` à la racine :

```yaml
version: '3.8'
services:
  postgres:
    image: postgres:latest
    container_name: blog_db
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: blog
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

2. Lancez la base de données :

```bash
docker-compose up -d
```

3. Configurez votre fichier `.env` :

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/blog?schema=public"
```

4. Configuration de DBeaver :

   - Ouvrez DBeaver
   - Nouvelle connexion > PostgreSQL
   - Host: localhost
   - Port: 5432
   - Database: blog
   - Username: postgres
   - Password: postgres

5. Initialisez Prisma :

```bash
npx prisma generate  # Génère le client Prisma
npx prisma db push   # Synchronise le schéma
npx prisma studio    # Interface web Prisma (optionnel)
```

### Commandes Prisma Utiles

```bash
# Voir l'état de la base de données
npx prisma db pull

# Créer une migration
npx prisma migrate dev --name nom_migration

# Réinitialiser la base de données
npx prisma db reset

# Visualiser les données (alternative à DBeaver)
npx prisma studio
```

### Utilisation avec DBeaver

1. Explorer les tables :

   - Dans DBeaver, cliquez sur blog > Schemas > public > Tables
   - Vous verrez toutes les tables créées par Prisma

2. Requêtes SQL :

   - Clic droit sur une table > View Data
   - Ou créez une nouvelle requête SQL (Ctrl/Cmd + ]) :

   ```sql
   -- Exemple de requête
   SELECT * FROM "User" WHERE email LIKE '%@example.com';
   ```

3. Fonctionnalités utiles de DBeaver :
   - Éditeur visuel de données
   - Export/Import de données
   - Diagrammes ER
   - Historique des requêtes

### Bonnes Pratiques

1. Développement :

   - Utilisez `prisma studio` pour les modifications rapides
   - DBeaver pour les requêtes complexes et l'analyse

2. Migrations :

   - Créez toujours des migrations pour les changements de schéma
   - Testez les migrations en local avant la production

3. Données sensibles :
   - Ne commitez jamais le fichier `.env`
   - Utilisez des mots de passe différents en production

### Production avec Neon

1. Créez un projet sur [Neon](https://neon.tech)
2. Récupérez deux URLs de connexion :
   - `DATABASE_URL` : URL de connexion pooling pour les requêtes
   - `DIRECT_URL` : URL de connexion directe pour les migrations
   ```
   DATABASE_URL="postgres://user:password@ep-example.region.neon.tech/neondb?sslmode=require"
   DIRECT_URL="postgres://user:password@ep-example.region.neon.tech/neondb?sslmode=require"
   ```
3. Configurez ces URLs dans vos variables d'environnement Vercel

Prisma gère automatiquement :

- Le connection pooling avec Neon
- Les connexions SSL
- Les migrations via DIRECT_URL
- La scalabilité serverless

## 🔄 Système de Types

### Types API

- `ApiError` - Structure des erreurs API
- `ApiHeaders` - Types pour les en-têtes de requête
- `ApiRequestConfig` - Configuration des requêtes
- `ApiEndpoint` - Définition des endpoints

### Types Auth

- `AuthUser` - Structure utilisateur
- `LoginCredentials` - Données de connexion
- `RegisterData` - Données d'inscription
- `AuthToken` - Structure des tokens
- `AuthState` - État d'authentification

### Types Database

- `DatabaseConfig` - Configuration de la base de données
- `DatabaseModel` - Modèle de base
- `DatabaseQuery` - Types pour les requêtes
- `DatabaseTransaction` - Gestion des transactions

## 🚀 Déploiement

Le projet est configuré pour un déploiement sur Vercel :

1. Installer Vercel CLI :

```bash
npm i -g vercel
```

2. Déployer :

```bash
npm run deploy
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT

## 🙏 Remerciements

- Next.js
- Prisma
- TailwindCSS
- Vercel

# Site de Diagnostic Énergétique

![CI/CD Status](https://github.com/Emerson1220/dieupart-expertise/actions/workflows/ci-cd.yml/badge.svg)

## Description

Site professionnel pour un diagnostiqueur énergétique avec authentification NextAuth et déploiement sur Vercel.

## Technologies Utilisées

- Next.js 15
- SCSS pour le styling
- NextAuth pour l'authentification
- Vercel pour le déploiement

## Configuration Requise

### Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=votre_secret_ici

# Pour l'authentification GitHub
GITHUB_ID=votre_github_id
GITHUB_SECRET=votre_github_secret

# Pour l'authentification Google
GOOGLE_ID=votre_google_id
GOOGLE_SECRET=votre_google_secret
```

## Installation

1. Clonez le repository

```bash
git clone [url-du-repo]
```

2. Installez les dépendances

```bash
npm install
```

3. Lancez le serveur de développement

```bash
npm run dev
```

## Déploiement sur Vercel

1. Créez un compte sur [Vercel](https://vercel.com)
2. Connectez votre repository GitHub
3. Configurez les variables d'environnement dans les paramètres du projet Vercel
4. Déployez !

## Structure du Projet

```
src/
  ├── app/
  │   ├── api/
  │   │   └── auth/
  │   ├── page.tsx
  │   └── page.module.scss
  └── styles/
      └── globals.scss
```

## Fonctionnalités

- Page d'accueil avec 5 sections
- Authentification utilisateur
- Design responsive
- Optimisation SEO

export const deployConfig = {
  vercel: {
    // Configuration du projet
    project: {
      framework: 'nextjs',
      buildCommand: 'npm run build',
      outputDirectory: '.next',
      devCommand: 'npm run dev',
      installCommand: 'npm install',
    },

    // Configuration des environnements
    environments: {
      production: {
        url: 'your-production-url.com',
        branch: 'main',
      },
      preview: {
        url: 'your-preview-url.vercel.app',
        branch: 'develop',
      },
    },

    // Configuration des variables d'environnement requises
    requiredEnvVars: [
      {
        key: 'DATABASE_URL',
        description:
          'URL de connexion à la base de données PostgreSQL',
        type: 'encrypted',
      },
      {
        key: 'NEXTAUTH_URL',
        description: "URL de l'application pour NextAuth",
        type: 'plain',
        production: '${URL}',
        preview: '${VERCEL_URL}',
      },
      {
        key: 'NEXTAUTH_SECRET',
        description: 'Clé secrète pour NextAuth',
        type: 'encrypted',
      },
    ],

    // Configuration des intégrations
    integrations: {
      postgresql: {
        type: 'neon',
        required: true,
      },
      analytics: {
        type: 'vercel-analytics',
        required: false,
      },
    },
  },
};

export * from './site';
export * from './api';
export * from './validation';
export * from './navigation';

// Configuration globale de l'application
export const config = {
  environment: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',

  // Versions
  version: process.env.npm_package_version || '1.0.0',
  buildId: process.env.BUILD_ID || 'dev',

  // Fonctionnalités
  features: {
    authentication: true,
    darkMode: true,
    newsletter: true,
    comments: true,
    search: true,
    rss: true,
  },

  // Analytics et tracking
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  },

  // Performance
  performance: {
    imageLazyLoading: true,
    fontDisplay: 'swap' as const,
    prefetch: true,
  },
};

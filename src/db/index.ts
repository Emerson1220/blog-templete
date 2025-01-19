import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import articlesData from '@/data/articles.json';

// Connexion temporairement désactivée
const mockDb = {
  query: async () => [],
  insert: async () => ({
    returning: () => articlesData.articles,
  }),
  select: () => ({
    from: () => ({
      orderBy: () => articlesData.articles,
    }),
  }),
  update: () => ({
    set: () => ({
      where: () => ({
        returning: () => articlesData.articles,
      }),
    }),
  }),
  delete: () => ({
    where: () => ({
      returning: () => [],
    }),
  }),
};

// Export du mock au lieu de la vraie connexion
export const db = process.env.DATABASE_URL
  ? drizzle(neon(process.env.DATABASE_URL), { schema })
  : mockDb;

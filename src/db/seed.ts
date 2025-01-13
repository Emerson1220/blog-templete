import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';
import { articles } from './schema';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

const testArticles = [
  {
    title: 'Les diagnostics obligatoires pour la vente',
    description:
      'Découvrez tous les diagnostics nécessaires pour vendre votre bien immobilier en 2024.',
    content: 'Contenu détaillé sur les diagnostics obligatoires...',
    image: '/images/placeholder.png',
    slug: 'diagnostics-obligatoires-vente',
  },
  {
    title: 'Comprendre le DPE',
    description:
      'Guide complet sur le Diagnostic de Performance Énergétique.',
    content: 'Tout ce que vous devez savoir sur le DPE...',
    image: '/images/placeholder.png',
    slug: 'comprendre-dpe',
  },
  {
    title: 'Audit énergétique : nouvelles obligations',
    description:
      'Les nouvelles réglementations pour les logements énergivores.',
    content:
      "Les changements importants concernant l'audit énergétique...",
    image: '/images/placeholder.png',
    slug: 'audit-energetique-obligations',
  },
];

async function seed() {
  try {
    console.log("🌱 Début de l'insertion des données de test...");

    // Insertion des articles
    for (const article of testArticles) {
      await db.insert(articles).values(article);
      console.log(`✓ Article inséré : ${article.title}`);
    }

    console.log('✅ Données de test insérées avec succès !');
    process.exit(0);
  } catch (error) {
    console.error(
      "❌ Erreur lors de l'insertion des données :",
      error
    );
    process.exit(1);
  }
}

seed();

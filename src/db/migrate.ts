import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { migrate } from 'drizzle-orm/neon-http/migrator';
import * as schema from './schema';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql, { schema });

async function main() {
  try {
    await migrate(db, { migrationsFolder: 'src/db/migrations' });
    console.log('Migrations applied successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error applying migrations:', error);
    process.exit(1);
  }
}

main();

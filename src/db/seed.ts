import { db } from '.';
import { articles } from './schema';

async function seed() {
  try {
    // Delete existing records
    await db.delete(articles);

    // Insert sample articles
    await db.insert(articles).values([
      {
        title: 'Sample Article 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        slug: 'sample-article-1',
        image: '/images/placeholder.png',
      },
      {
        title: 'Sample Article 2',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        content:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        slug: 'sample-article-2',
        image: '/images/placeholder.png',
      },
      {
        title: 'Sample Article 3',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit.',
        content:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        slug: 'sample-article-3',
        image: '/images/placeholder.png',
      },
    ]);

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();

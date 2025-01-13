import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { desc } from 'drizzle-orm';

// GET - Récupérer tous les articles
export async function GET() {
  try {
    const allArticles = await db
      .select()
      .from(articles)
      .orderBy(desc(articles.createdAt));
    return NextResponse.json({ success: true, data: allArticles });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouvel article
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newArticle = await db
      .insert(articles)
      .values({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    return NextResponse.json(
      { success: true, data: newArticle[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create article' },
      { status: 500 }
    );
  }
}

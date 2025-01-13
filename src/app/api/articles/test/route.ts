import { NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const allArticles = await db
      .select()
      .from(articles)
      .orderBy(desc(articles.createdAt));
    return NextResponse.json({
      success: true,
      count: allArticles.length,
      data: allArticles,
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
        details:
          error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

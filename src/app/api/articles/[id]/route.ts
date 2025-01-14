import { NextResponse } from 'next/server';
import { db } from '@/db';
import { articles } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const segments = request.url.split('/');
    const id = parseInt(segments[segments.length - 1]);
    const body = await request.json();

    const updatedArticle = await db
      .update(articles)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(articles.id, id))
      .returning();

    if (!updatedArticle.length) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: updatedArticle[0] });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const segments = request.url.split('/');
    const id = parseInt(segments[segments.length - 1]);

    const deletedArticle = await db
      .delete(articles)
      .where(eq(articles.id, id))
      .returning();

    if (!deletedArticle.length) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

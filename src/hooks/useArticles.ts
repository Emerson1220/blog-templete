import { useState, useEffect } from 'react';
import { articles } from '@/db/schema';
import { InferModel } from 'drizzle-orm';

export type Article = InferModel<typeof articles>;

export interface ArticleData {
  title: string;
  description: string;
  content: string;
  image: string | null;
  slug: string;
}

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error(
            'Erreur lors de la récupération des articles'
          );
        }
        const { data } = await response.json();
        setArticles(data || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Une erreur est survenue'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return { articles, loading, error };
}

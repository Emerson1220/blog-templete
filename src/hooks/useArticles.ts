import { useState, useEffect } from 'react';

export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string | null;
  slug: string;
  created_at: Date;
  updated_at: Date;
}

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

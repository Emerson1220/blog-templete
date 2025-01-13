import { useState } from 'react';
import { Article } from './useArticles';

interface ArticleInput {
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
}

export function useArticlesCrud() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createArticle = async (
    data: ArticleInput
  ): Promise<Article | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'article");
      }

      const { data: createdArticle } = await response.json();
      return createdArticle;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Une erreur est survenue'
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateArticle = async (
    id: number,
    data: ArticleInput
  ): Promise<Article | null> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...data }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour de l'article");
      }

      const { data: updatedArticle } = await response.json();
      return updatedArticle;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Une erreur est survenue'
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de l'article");
      }

      const { success } = await response.json();
      return success;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Une erreur est survenue'
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    createArticle,
    updateArticle,
    deleteArticle,
    loading,
    error,
  };
}

import { useState } from 'react';
import { ArticleData } from './useArticles';

export const useArticlesCrud = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createArticle = async (
    data: Omit<ArticleData, 'image'> & { image?: string | null }
  ) => {
    setLoading(true);
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
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
    data: Partial<
      Omit<ArticleData, 'image'> & { image?: string | null }
    >
  ) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
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

  const deleteArticle = async (id: number) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'DELETE',
      });
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
};

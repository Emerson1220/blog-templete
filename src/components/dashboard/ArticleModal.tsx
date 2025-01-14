'use client';

import { useState, useEffect } from 'react';
import styles from './ArticleModal.module.scss';
import { Article } from '@/hooks/useArticles';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>
  ) => void;
  article?: Article | null;
  loading?: boolean;
}

export default function ArticleModal({
  isOpen,
  onClose,
  onSave,
  article,
  loading,
}: ArticleModalProps) {
  const [formData, setFormData] = useState<
    Omit<Article, 'id' | 'createdAt' | 'updatedAt'>
  >({
    title: '',
    description: '',
    content: '',
    image: null,
    slug: '',
  });

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        description: article.description,
        content: article.content,
        image: article.image,
        slug: article.slug,
      });
    }
  }, [article]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>{article ? "Modifier l'article" : 'Nouvel article'}</h2>
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
        >
          <div className={styles.formGroup}>
            <label htmlFor='title'>Titre</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='description'>Description</label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='content'>Contenu</label>
            <textarea
              id='content'
              name='content'
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='image'>Image URL</label>
            <input
              type='text'
              id='image'
              name='image'
              value={formData.image || ''}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='slug'>Slug</label>
            <input
              type='text'
              id='slug'
              name='slug'
              value={formData.slug}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formActions}>
            <button type='button' onClick={onClose}>
              Annuler
            </button>
            <button type='submit' disabled={loading}>
              {loading ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

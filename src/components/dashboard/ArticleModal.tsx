'use client';

import { useState, useEffect } from 'react';
import styles from './ArticleModal.module.scss';
import { Article } from '@/hooks/useArticles';

interface ArticleModalProps {
  isOpen: boolean;
  article: Article | null;
  onClose: () => void;
  onSave: (
    data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>
  ) => void;
  loading?: boolean;
}

export default function ArticleModal({
  isOpen,
  article,
  onClose,
  onSave,
  loading = false,
}: ArticleModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>{article ? "Modifier l'article" : 'Nouvel article'}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor='title'>Titre</label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              required
              disabled={loading}
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
              disabled={loading}
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
              disabled={loading}
              rows={10}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='image'>Image URL</label>
            <input
              // type='url'
              type='text'
              id='image'
              name='image'
              value={formData.image}
              onChange={handleChange}
              required
              disabled={loading}
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
              disabled={loading}
              pattern='[a-z0-9-]+'
              title='Uniquement des lettres minuscules, des chiffres et des tirets'
            />
          </div>

          <div className={styles.formActions}>
            <button
              type='button'
              onClick={onClose}
              className={styles.cancelButton}
              disabled={loading}
            >
              Annuler
            </button>
            <button
              type='submit'
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Enregistrement...' : 'Enregistrer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

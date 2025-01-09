'use client';

import { useState, useEffect } from 'react';
import styles from './ArticleModal.module.scss';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  createdAt: string;
}

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
  onSave: (article: Article) => void;
}

export default function ArticleModal({
  isOpen,
  onClose,
  article,
  onSave,
}: ArticleModalProps) {
  const [formData, setFormData] = useState<Article>({
    id: 0,
    title: '',
    description: '',
    image: '',
    link: '',
    createdAt: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    if (article) {
      setFormData(article);
    } else {
      setFormData({
        id: Date.now(),
        title: '',
        description: '',
        image: '',
        link: '',
        createdAt: new Date().toISOString().split('T')[0],
      });
    }
  }, [article]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <h2>
          {article ? 'Modifier l&apos;article' : 'Nouvel article'}
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor='title'>Titre*</label>
            <input
              type='text'
              id='title'
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='description'>Description*</label>
            <textarea
              id='description'
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              required
              rows={4}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='image'>URL de l&apos;image*</label>
            <input
              type='text'
              id='image'
              value={formData.image}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  image: e.target.value,
                }))
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor='link'>Lien de l&apos;article*</label>
            <input
              type='text'
              id='link'
              value={formData.link}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  link: e.target.value,
                }))
              }
              required
            />
          </div>

          <button type='submit' className={styles.submitButton}>
            {article ? 'Mettre à jour' : 'Créer'}
          </button>
        </form>
      </div>
    </div>
  );
}

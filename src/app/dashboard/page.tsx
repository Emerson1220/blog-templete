'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import styles from './page.module.scss';
import ArticleModal from '@/components/dashboard/ArticleModal';
import Toast from '@/components/Toast';
import { useArticles, Article } from '@/hooks/useArticles';
import { useArticlesCrud } from '@/hooks/useArticlesCrud';

interface Notification {
  message: string;
  type: 'success' | 'error';
}

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] =
    useState<Article | null>(null);
  const [notification, setNotification] =
    useState<Notification | null>(null);
  const { articles, loading: loadingArticles } = useArticles();
  const {
    createArticle,
    updateArticle,
    deleteArticle,
    loading: loadingCrud,
    error,
  } = useArticlesCrud();

  const showNotificationAndReload = (
    message: string,
    type: 'success' | 'error'
  ) => {
    setNotification({ message, type });
    if (type === 'success') {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  const handleEdit = (article: Article | null) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (
      window.confirm(
        'Êtes-vous sûr de vouloir supprimer cet article ?'
      )
    ) {
      const success = await deleteArticle(id);
      if (success) {
        showNotificationAndReload(
          'Article supprimé avec succès',
          'success'
        );
      } else {
        showNotificationAndReload(
          "Erreur lors de la suppression de l'article",
          'error'
        );
      }
    }
  };

  const handleSave = async (
    data: Omit<Article, 'id' | 'createdAt' | 'updatedAt'>
  ) => {
    let success;
    if (selectedArticle) {
      const result = await updateArticle(selectedArticle.id, data);
      success = !!result;
      if (success) {
        setIsModalOpen(false);
        showNotificationAndReload(
          'Article mis à jour avec succès',
          'success'
        );
      } else {
        showNotificationAndReload(
          "Erreur lors de la mise à jour de l'article",
          'error'
        );
      }
    } else {
      const result = await createArticle(data);
      success = !!result;
      if (success) {
        setIsModalOpen(false);
        showNotificationAndReload(
          'Article créé avec succès',
          'success'
        );
      } else {
        showNotificationAndReload(
          "Erreur lors de la création de l'article",
          'error'
        );
      }
    }
  };

  if (loadingArticles) {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.loading}>
          Chargement des articles...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1>Tableau de bord</h1>
        <div className={styles.headerActions}>
          <button
            className={styles.addButton}
            onClick={() => {
              setSelectedArticle(null);
              setIsModalOpen(true);
            }}
          >
            Nouvel article
          </button>
          <button
            className={styles.logoutButton}
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Se déconnecter
          </button>
        </div>
      </header>

      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Date de création</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>
                    {new Date(article.createdAt).toLocaleDateString(
                      'fr-FR'
                    )}
                  </td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(article)}
                      disabled={loadingCrud}
                    >
                      Modifier
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(article.id)}
                      disabled={loadingCrud}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <ArticleModal
          isOpen={isModalOpen}
          article={selectedArticle}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          loading={loadingCrud}
        />
      )}

      {notification && (
        <Toast
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

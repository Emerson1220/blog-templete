'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './dashboard.module.scss';
import ArticleModal from '@/components/dashboard/ArticleModal';

interface DashboardArticle {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  image: string;
  link: string;
}

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] =
    useState<DashboardArticle | null>(null);

  const mockArticles: DashboardArticle[] = [
    {
      id: 1,
      title: 'Les diagnostics obligatoires pour la vente',
      description:
        'Découvrez tous les diagnostics nécessaires pour vendre votre bien',
      createdAt: '2024-01-15',
      image: '/images/article1.jpg',
      link: '/articles/diagnostics-vente',
    },
    {
      id: 2,
      title: 'La performance énergétique',
      description:
        'Comment améliorer la performance énergétique de votre logement',
      createdAt: '2024-01-16',
      image: '/images/article2.jpg',
      link: '/articles/performance-energetique',
    },
  ];

  const handleEdit = (article: DashboardArticle | null) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    // Logique de suppression à implémenter
    console.log("Suppression de l'article:", id);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <Link href='/' className={styles.backLink}>
          ← Retour au site
        </Link>
        <h1>Gestion des Articles</h1>
      </div>

      <div className={styles.content}>
        <button
          className={styles.addButton}
          onClick={() => handleEdit(null)}
        >
          + Nouvel Article
        </button>

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
              {mockArticles.map((article) => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>{article.createdAt}</td>
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => handleEdit(article)}
                    >
                      Modifier
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDelete(article.id)}
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
          onSave={(data) => {
            console.log('Sauvegarde:', data);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

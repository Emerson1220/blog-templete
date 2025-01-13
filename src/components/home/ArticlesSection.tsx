'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlesSection.module.scss';
import { useArticles } from '@/hooks/useArticles';

export default function ArticlesSection() {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <h2>Nos Articles</h2>
          <div className={styles.loading}>
            Chargement des articles...
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <h2>Nos Articles</h2>
          <div className={styles.error}>
            Une erreur est survenue lors du chargement des articles.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.articlesSection}>
      <div className={styles.container}>
        <h2>Nos Articles</h2>
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <Link
              href={`/articles/${article.slug}`}
              key={article.id}
              className={styles.articleCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}></div>
              </div>
              <div className={styles.content}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span className={styles.readMore}>Lire la suite</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

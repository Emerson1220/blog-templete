'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlesSection.module.scss';
import { useArticles } from '@/hooks/useArticles';
import type { Article } from '@/hooks/useArticles';

export default function ArticlesSection() {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <h2>Our Articles</h2>
          <div className={styles.loading}>Loading articles...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <h2>Our Articles</h2>
          <div className={styles.error}>
            An error occurred while loading articles.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.articlesSection}>
      <div className={styles.container}>
        <h2>Our Articles</h2>
        <div className={styles.articlesGrid}>
          {articles && articles.length > 0 ? (
            articles.map((article: Article) => (
              <Link
                href={`/articles/${article.slug}`}
                key={article.id}
                className={styles.articleCard}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={article.image || '/images/placeholder.png'}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.overlay}></div>
                </div>
                <div className={styles.content}>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className={styles.readMore}>Read more</span>
                </div>
              </Link>
            ))
          ) : (
            <div className={styles.noArticles}>
              No articles available at the moment.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

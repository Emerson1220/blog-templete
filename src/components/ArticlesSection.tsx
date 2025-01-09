'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticlesSection.module.scss';

const articles = [
  {
    title: 'Diagnostic Énergétique',
    description:
      'Comprendre le DPE et son importance pour votre bien immobilier',
    image: '/images/hero-bg.jpg',
    link: '/articles/diagnostic-energetique',
  },
  {
    title: 'Audit Énergétique',
    description:
      'Les nouvelles obligations pour les maisons classées F et G',
    image: '/images/hero-bg.jpg',
    link: '/articles/audit-energetique',
  },
  {
    title: 'Amiante',
    description:
      'Le diagnostic amiante : une obligation pour votre sécurité',
    image: '/images/hero-bg.jpg',
    link: '/articles/amiante',
  },
  {
    title: 'Gaz & Électricité',
    description: 'Les points clés des diagnostics gaz et électricité',
    image: '/images/hero-bg.jpg',
    link: '/articles/gaz-electricite',
  },
  {
    title: 'Location',
    description:
      'Les diagnostics obligatoires pour la mise en location',
    image: '/images/hero-bg.jpg',
    link: '/articles/location',
  },
];

export default function ArticlesSection() {
  return (
    <section className={styles.articlesSection}>
      <div className={styles.container}>
        <h2>Nos Articles</h2>
        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <Link
              href={article.link}
              key={index}
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

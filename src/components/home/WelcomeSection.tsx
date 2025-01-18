'use client';

import Image from 'next/image';
import styles from './WelcomeSection.module.scss';

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Company Name</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui
            officia.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src='/images/placeholder.png'
            alt='Welcome Image'
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </section>
  );
}

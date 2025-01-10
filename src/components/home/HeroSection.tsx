'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src='/images/hero-bg.jpg'
          alt='Diagnostic énergétique background'
          fill
          priority
          sizes='100vw'
          quality={100}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
          }}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src='/images/logo_dieupart-removebg-preview.png'
            alt='Logo Dieupart'
            width={350}
            height={350}
            priority
          />
        </div>
        <h1>Diagnostics et contrôles immobiliers</h1>
        <p>Des solutions durables pour votre habitat</p>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src='/images/placeholder.png'
          alt='Hero background'
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
            src='/images/placeholder.png'
            alt='Company Logo'
            width={350}
            height={350}
            priority
          />
        </div>
        <h1>Lorem Ipsum Dolor Sit Amet</h1>
        <p>Consectetur adipiscing elit sed do eiusmod</p>
      </div>
    </section>
  );
}

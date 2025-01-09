'use client';

import Image from 'next/image';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageContainer}>
        <Image
          src='/images/logo_dieupart-removebg-preview.png'
          alt='Services de diagnostic'
          width={500}
          height={500}
          priority
        />
      </div>
      <h2 className={styles.baseline}>
        L&apos;excellence du diagnostic à votre service
      </h2>
    </div>
  );
}

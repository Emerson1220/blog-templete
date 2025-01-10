'use client';

import Image from 'next/image';
import styles from './WelcomeSection.module.scss';

export default function WelcomeSection() {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>DieuPart</h2>
          <h3>
            Un diagnostiqueur performant pour tous vos projets
            immobiliers en Île-de-France
          </h3>

          <p>
            DieuPart est votre interlocuteur réactif et performant.
            Notre expérience dans le secteur du bâtiment vous garantit
            une réussite totale de vos projets immobiliers.
          </p>

          <p>
            Que ce soit pour une vente, une location, un diagnostic
            technique global (DTG), ou un audit énergétique, notre
            équipe de diagnostiqueurs certifiés est à votre écoute
            pour vous accompagner avec rigueur et professionnalisme.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src='/images/placeholder.png'
            alt='DieuPart Diagnostic'
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.overlay}></div>
        </div>
      </div>
    </section>
  );
}

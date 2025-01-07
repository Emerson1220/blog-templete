import { getServerSession } from 'next-auth/next';
import styles from './page.module.scss';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Expert en Diagnostic Énergétique</h1>
        <p>Des solutions durables pour votre habitat</p>
        {!session ? (
          <a href={'/auth/signin'} className={styles.cta}>
            Connexion
          </a>
        ) : (
          <p>Bienvenue, {session.user?.name}</p>
        )}
      </section>

      <section className={styles.services}>
        <h2>Diagnostic de Performance Énergétique (DPE)</h2>
        <p>
          Évaluation complète de la performance énergétique de votre
          bien immobilier
        </p>
      </section>

      <section className={styles.audit}>
        <h2>Audit Énergétique</h2>
        <p>
          Analyse approfondie et recommandations personnalisées pour
          optimiser votre consommation
        </p>
      </section>

      <section className={styles.thermography}>
        <h2>Thermographie Infrarouge</h2>
        <p>
          Détection des pertes thermiques et des défauts
          d&apos;isolation
        </p>
      </section>

      <section className={styles.consulting}>
        <h2>Conseil et Accompagnement</h2>
        <p>
          Expertise personnalisée pour vos projets de rénovation
          énergétique
        </p>
      </section>
    </main>
  );
}

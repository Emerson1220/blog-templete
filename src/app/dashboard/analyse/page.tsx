'use client';

import styles from './analyse.module.scss';

export default function AnalysePage() {
  return (
    <div className={styles.analysePage}>
      <div className={styles.header}>
        <h1>Analyse des performances</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Visites totales</h3>
            <p className={styles.statValue}>1,234</p>
          </div>
          <div className={styles.statCard}>
            <h3>Articles publiés</h3>
            <p className={styles.statValue}>12</p>
          </div>
          <div className={styles.statCard}>
            <h3>Contacts reçus</h3>
            <p className={styles.statValue}>45</p>
          </div>
        </div>
      </div>
    </div>
  );
}

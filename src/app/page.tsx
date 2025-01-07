import { getServerSession } from 'next-auth/next';
import Image from 'next/image';
import { BiRuler } from 'react-icons/bi';
import { GiChemicalDrop, GiWaterDrop } from 'react-icons/gi';
import { FaGasPump, FaBolt, FaBug, FaToilet } from 'react-icons/fa';
import { MdEnergySavingsLeaf } from 'react-icons/md';
import { TbTemperature } from 'react-icons/tb';
import styles from './page.module.scss';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className={styles.main}>
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
          <h1>Expert en Diagnostic Énergétique</h1>
          <p>Des solutions durables pour votre habitat</p>
          {!session ? (
            <a href={'/auth/signin'} className={styles.cta}>
              Connexion
            </a>
          ) : (
            <p>Bienvenue, {session.user?.name}</p>
          )}
        </div>
      </section>

      <section className={styles.services}>
        <h2>Nos Services de Diagnostic</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <GiChemicalDrop className={styles.icon} />
            <h3>Diagnostic Amiante</h3>
          </div>
          <div className={styles.serviceCard}>
            <GiWaterDrop className={styles.icon} />
            <h3>Diagnostic Plomb</h3>
          </div>
          <div className={styles.serviceCard}>
            <BiRuler className={styles.icon} />
            <h3>Diagnostic Métrage</h3>
          </div>
          <div className={styles.serviceCard}>
            <FaToilet className={styles.icon} />
            <h3>Diagnostic Assainissement</h3>
          </div>
          <div className={styles.serviceCard}>
            <FaGasPump className={styles.icon} />
            <h3>Diagnostic Gaz</h3>
          </div>
          <div className={styles.serviceCard}>
            <FaBolt className={styles.icon} />
            <h3>Diagnostic Électricité</h3>
          </div>
          <div className={styles.serviceCard}>
            <FaBug className={styles.icon} />
            <h3>Diagnostic Termites</h3>
          </div>
          <div className={styles.serviceCard}>
            <MdEnergySavingsLeaf className={styles.icon} />
            <h3>Audit Énergétique</h3>
          </div>
          <div className={styles.serviceCard}>
            <TbTemperature className={styles.icon} />
            <h3>Diagnostic Thermographie</h3>
          </div>
        </div>
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

import styles from './AboutSection.module.scss';
import {
  FaFileAlt,
  FaCheckCircle,
  FaEuroSign,
  FaClock,
  FaHeadset,
  FaCertificate,
} from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaFileAlt />,
      title: 'Rapports',
      description: 'Des rapports conformes aux normes exigées',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Diagnostiques',
      description: 'Des diagnostics assurés par la compagnie AXA',
    },
    {
      icon: <FaEuroSign />,
      title: 'Prix',
      description:
        "Des offres adaptées : renouvellement gratuit des expertises jusqu'à l'acte authentique",
    },
    {
      icon: <FaClock />,
      title: 'Disponibilité',
      description: "Des délais d'intervention sous 48h",
    },
    {
      icon: <FaHeadset />,
      title: 'Services',
      description:
        'Un service après-vente disponible pour vous apporter des explications complémentaires',
    },
    {
      icon: <FaCertificate />,
      title: 'Compétences',
      description:
        'Un contrôle de votre bien par un technicien certifié',
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2>Nos Engagements</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

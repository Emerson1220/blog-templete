'use client';

import styles from './AboutSection.module.scss';
import {
  FaFileAlt,
  FaCheckCircle,
  FaEuroSign,
  FaClock,
  FaHeadset,
  FaCertificate,
} from 'react-icons/fa';

export default function AboutSection() {
  const features = [
    {
      icon: <FaFileAlt />,
      title: 'Feature 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      icon: <FaCheckCircle />,
      title: 'Feature 2',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore',
    },
    {
      icon: <FaEuroSign />,
      title: 'Feature 3',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
    },
    {
      icon: <FaClock />,
      title: 'Feature 4',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate',
    },
    {
      icon: <FaHeadset />,
      title: 'Feature 5',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
    },
    {
      icon: <FaCertificate />,
      title: 'Feature 6',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut',
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2>Our Features</h2>
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
}

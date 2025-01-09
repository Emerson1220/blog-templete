'use client';

import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WelcomeSection from '@/components/WelcomeSection';
import ArticlesSection from '@/components/ArticlesSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ServicesSection />
      <WelcomeSection />
      <AboutSection />
      <ArticlesSection />
    </main>
  );
}

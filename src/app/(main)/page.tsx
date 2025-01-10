'use client';

import styles from './page.module.scss';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import WelcomeSection from '@/components/home/WelcomeSection';
import ArticlesSection from '@/components/home/ArticlesSection';

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

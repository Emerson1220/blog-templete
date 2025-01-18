'use client';

import { navigationConfig } from '@/config/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Footer.module.scss';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <Image
                src='/images/placeholder.png'
                alt='Company Logo'
                width={150}
                height={150}
                priority
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3>Navigation</h3>
            <nav className={styles.nav}>
              {navigationConfig.footer.mainLinks.map(
                (item, index) => (
                  <Link key={index} href={item.href}>
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          <div className={styles.section}>
            <h3>Contact</h3>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className={styles.contactButton}
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()}{' '}
            {navigationConfig.footer.companyName}. All rights
            reserved.
          </p>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

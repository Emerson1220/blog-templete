'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';
import { navigationConfig } from '@/config/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src='/images/placeholder.png'
          alt='Logo Dieupart'
          width={70}
          height={70}
          priority
        />
      </div>

      <button className={styles.menuButton} onClick={toggleMenu}>
        <span
          className={`${styles.hamburger} ${
            isOpen ? styles.open : ''
          }`}
        ></span>
      </button>

      <div
        className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}
      >
        {navigationConfig.navbar.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={toggleMenu}
            className={
              link.href === '/dashboard' ? styles.dashboardLink : ''
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

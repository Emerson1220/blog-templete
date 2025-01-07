'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>DieuPart Expertise</Link>
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
        <Link href='/' onClick={toggleMenu}>
          Accueil
        </Link>
        <Link href='/services' onClick={toggleMenu}>
          Services
        </Link>
        <Link href='/audit' onClick={toggleMenu}>
          Audit
        </Link>
        <Link href='/thermographie' onClick={toggleMenu}>
          Thermographie
        </Link>
        <Link href='/contact' onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

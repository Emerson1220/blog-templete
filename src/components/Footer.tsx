import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Audit', href: '/audit' },
    { name: 'Thermographie', href: '/thermographie' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.logo}>
            <Image
              src='/images/logo_dieupart-removebg-preview.png'
              alt='Logo Dieupart'
              width={150}
              height={150}
              priority
            />
          </div>
        </div>

        <div className={styles.section}>
          <h3>Navigation</h3>
          <nav className={styles.nav}>
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.section}>
          <h3>Contact</h3>
          <Link href='/contact' className={styles.contactButton}>
            Contactez-nous
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} DieuPart Expertise. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}

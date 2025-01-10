'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaNewspaper, FaChartBar, FaArrowLeft } from 'react-icons/fa';
import styles from './dashboardLayout.module.scss';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    {
      icon: <FaNewspaper size={24} />,
      href: '/dashboard',
      label: 'Posts',
    },
    {
      icon: <FaChartBar size={24} />,
      href: '/dashboard/analyse',
      label: 'Analyse',
    },
  ];

  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <Link href='/' className={styles.backLink}>
            <FaArrowLeft size={24} />
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navItem} ${
                pathname === item.href ? styles.active : ''
              }`}
              title={item.label}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  );
}

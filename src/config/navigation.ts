interface NavLink {
  href: string;
  label: string;
}

interface NavigationConfig {
  navbar: NavLink[];
  footer: {
    mainLinks: NavLink[];
    socialLinks: {
      href: string;
      label: string;
      icon: string;
    }[];
    legalLinks: NavLink[];
    companyName: string;
  };
}

export const navigationConfig: NavigationConfig = {
  navbar: [
    { href: '/', label: 'Link 1' },
    { href: '/link2', label: 'Link 2' },
    { href: '/link3', label: 'Link 3' },
    { href: '/link4', label: 'Link 4' },
    { href: '/link5', label: 'Link 5' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
  footer: {
    mainLinks: [
      { href: '/', label: 'Link 1' },
      { href: '/link2', label: 'Link 2' },
      { href: '/link3', label: 'Link 3' },
      { href: '/link4', label: 'Link 4' },
      { href: '/link5', label: 'Link 5' },
    ],
    socialLinks: [
      { href: '#', label: 'Facebook', icon: 'FaFacebook' },
      { href: '#', label: 'Twitter', icon: 'FaTwitter' },
      { href: '#', label: 'LinkedIn', icon: 'FaLinkedin' },
    ],
    legalLinks: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
    companyName: 'Company Name',
  },
};

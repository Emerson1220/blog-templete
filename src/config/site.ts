export const siteConfig = {
  name: 'Blog Template',
  description: 'A modern blog template built with Next.js',
  url: 'https://your-domain.com',
  ogImage: 'https://your-domain.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
  },
  creator: {
    name: 'Your Name',
    email: 'contact@your-domain.com',
  },
  theme: {
    primary: '#007AFF',
    secondary: '#6B7280',
    accent: '#10B981',
    background: '#FFFFFF',
    text: '#1F2937',
  },
  layout: {
    maxWidth: '1200px',
    headerHeight: '80px',
    footerHeight: '60px',
  },
  seo: {
    titleTemplate: '%s | Blog Template',
    defaultTitle: 'Blog Template',
    defaultDescription: 'A modern blog template built with Next.js',
  },
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },
  dates: {
    format: 'DD MMMM YYYY',
    locale: 'en',
  },
  images: {
    domains: ['your-domain.com'],
    placeholder: '/images/placeholder.png',
    avatar: '/images/avatar.png',
    logo: '/images/logo.png',
  },
};

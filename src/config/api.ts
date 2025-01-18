export const apiConfig = {
  endpoints: {
    articles: '/api/articles',
    auth: '/api/auth',
    users: '/api/users',
  },
  limits: {
    maxRequestSize: '10mb',
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // Limit each IP to 100 requests per windowMs
    },
  },
  cors: {
    origin:
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  },
  cache: {
    maxAge: 60 * 60, // 1 hour
    staleWhileRevalidate: 60, // 1 minute
  },
  responses: {
    defaultPageSize: 20,
    maxPageSize: 100,
  },
  validation: {
    article: {
      titleMinLength: 3,
      titleMaxLength: 100,
      contentMinLength: 100,
      contentMaxLength: 50000,
    },
    comment: {
      minLength: 3,
      maxLength: 1000,
    },
  },
};

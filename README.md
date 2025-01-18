# Next.js Blog Template

A modern blog template built with Next.js 14, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- 🚀 Next.js 14 with App Router
- 💻 TypeScript
- 🎨 Tailwind CSS
- 🗃️ PostgreSQL with Drizzle ORM
- 🔐 Authentication ready
- 📱 Fully responsive
- 🎯 SEO optimized

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/next-template-blog.git
cd next-template-blog
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables:

```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`

5. Initialize the database:

```bash
npm run db:push
npm run db:seed
```

6. Start the development server:

```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # React components
│   ├── config/         # Configuration files
│   ├── db/             # Database setup and schema
│   ├── hooks/          # Custom React hooks
│   └── styles/         # Global styles
├── public/             # Static files
└── ...configuration files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:seed` - Seed the database

## License

MIT License

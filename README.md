# Dynamic Portfolio & CMS

A modern, responsive portfolio built with Next.js 16, React 19, and Tailwind CSS. It features a complete custom Admin Panel (CMS) powered by Prisma and SQLite (easily upgradeable to PostgreSQL) for full dynamic control over your content.

## Features

- **Public Landing Page**: A beautiful, highly responsive, and dynamic portfolio interface.
- **Admin Dashboard**: A secure, private dashboard (`/admin`) to manage your portfolio content.
- **Dynamic Content Management**: Add, edit, reorder, and hide Projects, Skills, Experience, and more without touching the code.
- **Secure Authentication**: Custom JWT-based authentication using HTTP-only cookies to protect the admin area.
- **ORM Integration**: Type-safe database queries via Prisma.

## Getting Started

### 1. Environment Variables
Create a `.env` file in the root of the project with the following keys:
```env
# Database configuration
DATABASE_URL="file:./dev.db"

# JWT Secret for Authentication (Use a strong random string in production)
JWT_SECRET="supersecretkey123"

# Admin Login Credentials
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="admin123"
```

### 2. Database Setup
Initialize the Prisma database and run the initial data seed to populate the site with default content:

```bash
# Push the schema to the database
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Seed initial data
npx tsx --env-file=.env prisma/seed.ts
```

### 3. Run the Application
Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the public portfolio.
Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) to access the CMS Dashboard.

## Deployment to Vercel

When deploying to Vercel, SQLite is not recommended as it doesn't persist data across deployments. 

1. Create a **Vercel Postgres** database (or use Supabase/Neon).
2. In `prisma/schema.prisma`, update the provider from `"sqlite"` to `"postgresql"`.
3. Add all environment variables to your Vercel Project settings.
4. Add a `postinstall` script to your `package.json`:
   ```json
   "scripts": {
     "postinstall": "prisma generate"
   }
   ```
5. Deploy the project!

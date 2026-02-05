# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start dev server with Turbopack (port 3000)
npm run build        # Production build
npm run lint         # ESLint
npm run start        # Run production build
```

### Prisma Commands

```bash
npx prisma generate              # Generate Prisma client (outputs to src/generated/prisma)
npx prisma migrate dev           # Run migrations in dev
npx prisma db seed               # Seed database (uses tsx to run prisma/seed.ts)
npx prisma studio                # Open Prisma Studio
```

## Architecture

### Tech Stack
- **Next.js 15** with App Router and Turbopack
- **React 19**
- **Prisma 7** with PostgreSQL (Neon-compatible via pg adapter)
- **Tailwind CSS 4** with tw-animate-css
- **shadcn/ui components** in `src/components/ui/`

### Path Aliases
- `@/*` maps to `./src/*`

### Database Setup
- Prisma schema: `prisma/schema.prisma`
- Generated client: `src/generated/prisma/` (do not edit)
- DB client singleton: `src/lib/prisma.ts` or `src/lib/db.ts`
- Config: `prisma.config.ts` reads `DATABASE_URL` from `.env`

### Project Structure
```
src/
├── app/              # Next.js App Router pages
├── components/ui/    # shadcn/ui components (Radix-based)
├── generated/prisma/ # Auto-generated Prisma client
├── hooks/            # Custom React hooks
└── lib/              # Utilities (cn(), Prisma client)
```

### Key Patterns
- Server Components by default - use `"use client"` only when needed
- CSS utility: `cn()` from `@/lib/utils` for merging Tailwind classes
- Prisma client uses `@prisma/adapter-pg` for direct PostgreSQL connection

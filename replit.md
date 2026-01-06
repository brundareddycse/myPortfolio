# Brunda Reddy Portfolio

## Overview

A modern, responsive personal portfolio website for Brunda Reddy, a Computer Science student. The application showcases projects, skills, certifications, and professional experience with smooth animations and a clean design. Built as a full-stack application with React frontend and Express backend, designed for deployment on Replit, Vercel, or GitHub Pages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming (light/dark mode support)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for page transitions and scroll animations
- **State Management**: TanStack React Query for server state and caching
- **Form Validation**: React Hook Form with Zod schemas

### Backend Architecture
- **Runtime**: Node.js with Express
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Storage**: In-memory storage implementation (`MemStorage` class) with interface for future database integration
- **Server Structure**: Modular design with separate files for routes, storage, and static file serving

### Data Layer
- **Schema Definition**: Zod schemas in `shared/schema.ts` define data types for Projects, Skills, Experience, Certifications, and Contacts
- **Storage Interface**: `IStorage` interface allows swapping between in-memory and database-backed storage
- **Seeding**: Server seeds portfolio data on startup from storage layer

### Build System
- **Bundler**: Vite for frontend development and production builds
- **Server Build**: esbuild for bundling server code with dependency optimization
- **TypeScript**: Strict mode enabled with path aliases (`@/` for client, `@shared/` for shared code)

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route pages (Home, About, Projects, etc.)
│   │   ├── hooks/        # Custom React hooks for data fetching
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Data storage layer
│   └── index.ts      # Server entry point
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Zod schemas and types
│   └── routes.ts     # API route definitions
```

### Design System
- **Typography**: Inter (sans-serif) and Space Grotesk (display headings)
- **Color Palette**: Deep blue/indigo primary with purple accent, supports dark mode
- **Component Style**: Shadcn/ui "new-york" style with custom border radius and shadow utilities

## External Dependencies

### UI Component Libraries
- **Radix UI**: Full suite of accessible, unstyled primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library used throughout the application
- **Embla Carousel**: Carousel component for image galleries
- **Vaul**: Drawer component for mobile-friendly modals

### Data & Forms
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation for API inputs and form data

### Animation
- **Framer Motion**: Page transitions, scroll animations, and micro-interactions

### Build & Development
- **Vite**: Development server with HMR and production bundling
- **esbuild**: Fast server-side bundling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Deployment
- **GitHub Pages**: Static site deployment configured via `gh-pages` package
- **Base Path**: Configured for `/myPortfolio/` subdirectory hosting
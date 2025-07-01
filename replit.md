# replit.md

## Overview

This is a modern full-stack web application built with React on the frontend and Express.js on the backend. The application serves as a professional portfolio website with contact form functionality. It features a responsive design, internationalization support (English/Estonian), theme switching (light/dark), and 3D visual elements.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React Context for theme and language state
- **Data Fetching**: TanStack Query for server state management
- **3D Graphics**: Three.js integration for background animations
- **Routing**: Wouter for client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations
- **Validation**: Zod for runtime type checking
- **Development**: Hot reload with Vite middleware integration

### Build System
- **Development**: Single command starts both frontend and backend
- **Production**: Vite builds frontend to `dist/public`, esbuild bundles backend to `dist/index.js`
- **Type Safety**: Shared TypeScript types between frontend and backend

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Messages Table**: Stores form submissions with fields for personal info, project details, and message content
- **Schema Validation**: Drizzle-Zod integration for runtime validation

### Email Integration
- **EmailJS**: Direct frontend email sending without backend
- **Contact Form**: Sends emails directly to your inbox using EmailJS service
- **No Database Required**: Completely frontend-based solution

### Frontend Features
- **Multi-language Support**: English and Estonian translations
- **Theme System**: Light/dark mode with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **3D Background**: Dynamic Three.js animations in hero section
- **Form Handling**: React Hook Form with Zod validation
- **Toast Notifications**: User feedback for form submissions

### Component Structure
- **Sections**: Hero, About, Experience, Projects, Contact
- **UI Components**: Reusable shadcn/ui components
- **Providers**: Theme and Language context providers
- **Custom Hooks**: Theme, language, mobile detection, and toast management

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form → Form validation → EmailJS service → Direct email delivery → Success/error feedback

2. **Theme Management**:
   - User toggles theme → Context update → CSS class changes → LocalStorage persistence

3. **Language Switching**:
   - User selects language → Context update → Translation key lookup → UI re-render → LocalStorage persistence

4. **3D Background**:
   - Component mounts → Three.js script loads → Scene initialization → Animation loop → Responsive resize handling

## External Dependencies

### Production Dependencies
- **@emailjs/browser**: Frontend email sending service
- **@radix-ui/***: Headless UI component primitives
- **three**: 3D graphics library
- **zod**: Runtime type validation
- **react**: Frontend framework with TypeScript

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tailwindcss**: Utility-first CSS framework
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Environment Setup
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)

### Build Process
1. `npm run build`: Builds frontend assets and bundles backend
2. Frontend assets output to `dist/public`
3. Backend bundle output to `dist/index.js`

### Production Deployment
- Single Node.js process serves both frontend and backend
- Static assets served from `dist/public`
- API routes handled by Express server
- Database migrations run via `npm run db:push`

### Development Workflow
- `npm run dev`: Starts development server with hot reload
- Vite middleware integration for seamless frontend/backend development
- TypeScript type checking across shared modules

## Changelog

```
Changelog:
- July 01, 2025. Initial setup with portfolio framework
- July 01, 2025. Fixed contact form dropdown errors and improved light mode visibility
- July 01, 2025. Removed Twitter icons and enhanced color consistency with green theme
- July 01, 2025. Created custom select component to resolve runtime errors
- July 01, 2025. Replaced Download CV button with Contact Me button that scrolls to contact section
- July 01, 2025. Implemented EmailJS integration for direct email sending without database dependency
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
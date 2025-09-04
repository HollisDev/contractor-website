# Tech Stack Standards for Contractor Website

## Core Framework
- **Next.js**: Version 14.2+ with App Router
  - Use hybrid static/dynamic rendering (SSG + ISR)
  - Implement code-splitting and tree-shaking
  - Target Lighthouse scores 95+ mobile/desktop

## Language & Type Safety
- **TypeScript**: Strict mode enabled
  - All components must be typed
  - Use interface definitions for all props
  - Implement proper error boundaries

## Styling & UI
- **Tailwind CSS**: Version 3.4+
  - Utility-first approach
  - Custom color palette: #F8F8F8, #1A1A1A, #0A2540
  - Responsive design: mobile-first
- **shadcn/ui**: Latest version
  - Pre-built accessible components
  - Customizable design system
  - Form validation with Zod

## Animations & Interactions
- **Framer Motion**: Version 11+
  - GPU-accelerated animations
  - Respect reduced-motion preferences
  - Smooth page transitions and micro-interactions

## Content Management
- **Sanity.io**: Free tier headless CMS
  - Visual studio for non-tech users
  - GROQ queries for data fetching
  - Image optimization via Sanity CDN

## Performance & Optimization
- **next/image**: Auto-format (AVIF/WebP)
- **Bundle analysis**: Regular monitoring
- **Edge caching**: Vercel CDN integration
- **PWA**: Offline support and install prompts

## Deployment
- **Vercel**: Free tier with edge functions
- **Environment Variables**: Secure API key management
- **CI/CD**: Automated builds on git push

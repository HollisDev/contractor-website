# Reputation Builders & Handyman Services - Website Specifications

A professional contractor website built with modern web technologies, featuring interactive components, smooth animations, and a sophisticated design system.

## 🏗️ Project Overview

**Company:** Reputation Builders & Handyman Services  
**Location:** Modesto, CA & Surrounding Areas  
**Phone:** (209) 312-4169  
**Business:** 20+ years of home remodeling and construction services

## 🚀 Technology Stack

### Core Framework
- **Next.js 14.2.32** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and interactions

### Key Dependencies
- **Aceternity UI** - Professional image slider components
- **Lucide React** - Icon library
- **Next.js Image** - Optimized image handling
- **React Hooks** - State management (useState, useEffect, useRef)

### Build Tools
- **PostCSS** - CSS processing
- **TypeScript Config** - Strict type checking
- **Tailwind Config** - Custom design system

## 🎨 Design System

### Color Palette
- **Primary Burgundy:** `#800020` - Main brand color
- **Secondary Grey:** `#58595b` - Accent and footer color
- **Background:** `#f9fafb` (gray-50) - Section backgrounds
- **Text:** Black primary, white on dark backgrounds

### Typography
- **Font Family:** System fonts (default Next.js)
- **Headings:** Bold, large scale (text-4xl to text-7xl)
- **Body:** text-lg to text-xl for readability
- **Accent:** Burgundy for important elements

### Layout
- **Max Width:** Custom breakpoints with full-width elements
- **Spacing:** Consistent py-24, py-48 for sections
- **Grid System:** Responsive CSS Grid and Flexbox
- **Custom Breakpoint:** 1162px for navigation (nav: prefix)

## 📱 Responsive Design

### Breakpoints
- **Mobile:** Default (< 768px)
- **Tablet:** md: (768px+)
- **Desktop:** lg: (1024px+)
- **Custom Nav:** nav: (1162px+) - Custom navbar breakpoint

### Navigation
- **Desktop:** Horizontal layout with centered logo
- **Mobile:** Hamburger menu with overlay
- **Sticky:** Fixed position with backdrop blur

## 🧩 Component Architecture

### Core Sections
1. **Hero Section** - Aceternity image carousel with 5 rotating images
2. **About Us** - Company introduction with professional copy
3. **Before & After** - Interactive drag slider with touch support
4. **Our Services** - Hover-triggered image display system
5. **Why Choose Us** - Interactive cards with muted burgundy hover effects
6. **Our Promise** - Kurt Vonnegut-inspired copy, minimalist design
7. **Contact/CTA** - Google Maps integration with contact details

### Interactive Features
- **Image Carousel:** Auto-rotating hero with fade transitions
- **Before/After Slider:** Drag functionality with clip-path animations
- **Hover States:** Service images and card interactions
- **Smooth Scrolling:** Anchor link navigation with offset handling
- **Wave Text Animation:** Synchronized text reveals in hero

### Navigation System
- **Smooth Scrolling:** CSS scroll-behavior and anchor links
- **Section Anchors:** All sections properly ID'd for navigation
- **Offset Handling:** Navbar height compensation with scroll-margin-top
- **Mobile Menu:** Slide-out navigation with touch gestures

## 🎬 Animation System

### Framer Motion Implementation
- **Entrance Animations:** Staggered reveals with y-axis movement
- **Hover Effects:** Scale, lift, and color transitions
- **Text Animations:** Wave effects with synchronized timing
- **Card Interactions:** Smooth background/text color changes

### Animation Patterns
- **Duration:** 0.5s to 0.8s for smooth feel
- **Easing:** "easeOut" for natural motion
- **Stagger:** 0.15s to 0.2s between elements
- **Hover States:** Instant feedback with smooth transitions

## 📂 File Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx          # Main page with section imports
├── components/
│   ├── layout/
│   │   ├── navbar.tsx     # Fixed navigation with custom breakpoints
│   │   └── footer.tsx     # Site links and company info
│   ├── sections/
│   │   ├── hero.tsx       # Aceternity carousel implementation
│   │   ├── about-us.tsx   # Company introduction
│   │   ├── before-after.tsx # Interactive slider with drag
│   │   ├── our-services.tsx # Hover image system
│   │   ├── why-choose-us.tsx # Interactive feature cards
│   │   ├── our-promise.tsx # Minimalist promise section
│   │   └── call-to-action.tsx # Contact with Google Maps
│   ├── theme-provider.tsx # Theme configuration
│   └── ui/
│       └── toaster.tsx    # Toast notifications
└── lib/
    ├── utils.ts           # Utility functions
    └── sanity.ts          # Sanity CMS configuration
```

### Asset Organization
```
public/
└── image-assets/
    ├── hero-backyard-image.jpg      # Carousel image 1
    ├── hero-backyard-pool-image.jpg # Carousel image 2
    ├── hero-bathroom-image.jpg      # Carousel image 3
    ├── hero-kitchen-image.jpg       # Carousel image 4
    ├── hero-living-room-image.jpg   # Carousel image 5
    ├── before-after/
    │   ├── before.jpg              # Before comparison
    │   └── after.jpg               # After comparison
    └── our-services/
        ├── services-complete-home-remodels.jpg
        ├── services-home-additions.jpg
        ├── services-kitchen-remodels.jpg
        ├── services-primary-suites-and-bathrooms.jpg
        ├── services-attic-and-basements.jpg
        └── services-outdoor-living.jpg
```

## 🔧 Configuration Files

### Tailwind Configuration
- **Custom Colors:** Burgundy (#800020) defined
- **Custom Breakpoint:** 'nav' at 1162px for navigation
- **Typography:** Custom font sizes and line heights
- **Spacing:** Extended padding/margin scale

### TypeScript Configuration
- **Strict Mode:** Enabled for type safety
- **Path Mapping:** @ alias for src directory
- **JSX:** React JSX transform

### PostCSS Configuration
- **Tailwind CSS:** Main utility framework
- **Autoprefixer:** Browser compatibility

## 🌟 Key Features

### User Experience
- **Fast Loading:** Next.js optimization and Image component
- **Smooth Navigation:** Anchor links with proper offset handling
- **Touch Friendly:** Mobile-optimized interactions
- **Accessibility:** Semantic HTML and keyboard navigation

### Performance
- **Image Optimization:** Next.js Image component with lazy loading
- **Code Splitting:** Automatic with Next.js App Router
- **CSS Optimization:** Tailwind purging and minification
- **Bundle Analysis:** Optimized imports and tree shaking

### SEO & Meta
- **Structured Data:** Company information and contact details
- **Meta Tags:** Proper title, description, and Open Graph
- **Local SEO:** Location and service area optimization
- **Schema Markup:** Business and contact information

## 🎯 Business Integration

### Contact Information
- **Primary Phone:** (209) 312-4169 (clickable tel: links)
- **Service Area:** Modesto, CA & Surrounding Areas
- **Business Hours:** Mon-Fri: 7AM-6PM
- **Credentials:** Licensed • Bonded • Insured

### Services Offered
1. Complete Home Remodels
2. Home Additions
3. Kitchen Remodels
4. Primary Suites & Bathrooms
5. Attic & Basements
6. Outdoor Living

### Brand Positioning
- **Experience:** 20+ years in business
- **Quality Focus:** Premium materials and craftsmanship
- **Local Expertise:** Modesto-area specialists
- **Design-Build:** Streamlined process from concept to completion

## 🚀 Deployment & Development

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### Performance Optimizations
- **Static Generation:** Next.js SSG where applicable
- **Image Optimization:** WebP format with fallbacks
- **CSS Purging:** Unused Tailwind classes removed
- **Code Minification:** Automatic in production builds

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge
- **Mobile:** iOS Safari, Chrome Mobile
- **Fallbacks:** Graceful degradation for older browsers

## 📝 Content Strategy

### Writing Style
- **Our Promise Section:** Kurt Vonnegut-inspired voice - conversational, honest, unpretentious
- **Service Descriptions:** Professional but approachable
- **Call-to-Action:** Direct and action-oriented
- **Brand Voice:** Trustworthy, experienced, local expertise

### Imagery Strategy
- **Hero Carousel:** High-quality completed projects
- **Before/After:** Dramatic transformation examples
- **Service Images:** Specific to each service category
- **Professional Quality:** Consistent lighting and composition

---

**Built with ❤️ for Reputation Builders & Handyman Services**  
*A perfect blend of modern web technology and craftsmanship quality*

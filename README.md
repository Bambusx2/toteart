# Tote Art Portfolio

A high-end artist portfolio and blog showcasing original artwork. This project prioritizes design, emotion, and timelessness over trends and complexity.

## Philosophy

This is not a corporate website or a SaaS dashboard. It's a gallery-like digital space designed to let the artwork breathe.

**Design Principles:**
- Calm and emotional
- Museum-quality presentation
- Gallery white space
- Natural rhythm and breathing layouts
- Focus on the art, not the interface

## Tech Stack

**Framework:**
- Angular 21 (standalone components)
- TypeScript (strict mode)
- Modern CSS (handcrafted, no frameworks)

**Key Decisions:**
- No Tailwind, Bootstrap, Material UI, or any CSS framework
- No inline styles or unnecessary animations
- Semantic HTML and WCAG 2.2 accessibility standards
- OnPush change detection for performance

## Project Structure

```
src/
 ├── app/
 │   ├── core/           # Layout components and core services
 │   ├── pages/          # Route pages (arts, about, contact)
 │   ├── shared/         # Shared components and models
 │   └── app.routes.ts   # Application routing
 ├── assets/
 │   ├── images/         # Artwork images (WebP format)
 │   └── fonts/          # Typography assets
 └── styles/             # Global styles and design system
```

## Routes

- `/arts` - Homepage featuring artwork gallery
- `/about` - Artist biography and story
- `/contact` - Contact form (Angular Reactive Forms)

## Design System

**Color Palette:**
```css
--color-background: #f6f6f4;      /* warm gallery white */
--color-surface: #ffffff;         /* canvas white */
--color-text-primary: #1c1c1c;    /* soft black */
--color-text-secondary: #5f5f5f;  /* muted gray */
--color-accent: #2f3a45;          /* deep blue-gray */
--color-accent-soft: #cfd6dc;     /* pale blue-gray */
```

**Typography:**
- Primary: Elegant serif (for artwork titles)
- Secondary: Clean sans-serif (for body text)
- Line height: ≥ 1.6
- Thoughtful use of whitespace

## Getting Started

### Prerequisites

- Node.js (npm 11.6.2)
- Angular CLI 21.0.4

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes to source files.

### Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### Production Build

```bash
npm run build
```

The default configuration is production with optimization enabled.

## Image Guidelines

- Use WebP format exclusively for optimal performance
- Maintain aspect ratios of original artwork
- Provide meaningful alt text for accessibility
- Keep file sizes optimized without compromising quality

## Code Standards

**Angular Best Practices:**
- Standalone components only
- OnPush change detection
- Immutable @Input() properties
- No logic in templates
- Strong typing (no `any`)

**CSS Standards:**
- BEM-inspired naming (lightweight)
- Max nesting: 2 levels
- One responsibility per class
- Prefer composition over deep nesting

**Accessibility:**
- Semantic HTML landmarks
- Keyboard navigation support
- Visible focus styles
- Meaningful alt text

## Motion & Animation

- Respects `prefers-reduced-motion`
- Duration: 200–400ms
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Motion guides, doesn't entertain

## Development Guidelines

**What to avoid:**
- Over-engineering and premature optimization
- Adding features beyond requirements
- Unnecessary abstractions
- Developer convenience at the expense of artistic expression

**What to embrace:**
- Clean, human-readable code
- Clarity over cleverness
- Design as a first-class concern
- Serving the art, not the framework

## SEO & Performance

This site achieves a **100/100 SEO score** with:

**Technical SEO:**
- Semantic HTML5 structure
- Complete meta tags (title, description, keywords)
- Open Graph for social sharing
- Twitter Cards support
- Canonical URLs and hreflang tags
- XML sitemap and robots.txt
- Structured data (Schema.org: Person, WebSite, BreadcrumbList)

**Performance:**
- WebP image format (optimized file sizes)
- Lazy loading for images
- DNS prefetch and preconnect
- Browser caching strategy
- OnPush change detection

**Accessibility:**
- WCAG 2.2 compliance
- Semantic landmarks
- Keyboard navigation
- ARIA labels
- Screen reader support

**Bilingual Support:**
- English and Macedonian content
- Language alternates configured
- Proper hreflang implementation

### Before Deployment

See `SEO-CHECKLIST.md` for complete pre-launch checklist. Key actions:
1. Replace `https://yourwebsite.com/` with actual domain
2. Create OG share image (1200×630px)
3. Configure server (see `SERVER-CONFIG.md`)
4. Submit sitemap to search engines

## License

Private project. All artwork and content are the intellectual property of the artist.

## Contact

For inquiries, please use the contact form on the website.

**Artist:** Metodi Ivanov (Tote)
**Email:** toteiv@yahoo.com
**Phone:** +38978494548
**Social:** [Facebook](https://www.facebook.com/metodi.ivanov.9) | [Instagram](https://www.instagram.com/metodi.ivanov.9/)

**Developer:** [ResolVR](http://resolvr.dev)

---

*This project exists to serve art, not frameworks.*

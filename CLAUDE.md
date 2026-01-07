1. Project Intent & Philosophy

This project is a high-end artist portfolio & blog showcasing original artwork.

Design is as important as functionality.
The website must feel:

Calm

Emotional

Timeless

Gallery-like

Premium (museum / modern art exhibition)

Avoid anything that feels:

Corporate

Over-engineered

Trendy-for-the-sake-of-trends

Developer-centric instead of artist-centric

This is not a SaaS dashboard.

2. Tech Stack Rules (Strict)
✅ Allowed

Angular (standalone components)

TypeScript (strict mode)

HTML (semantic only)

CSS (modern, handcrafted)

Angular Router

Angular Reactive Forms (contact form)

CSS Variables

CSS Grid & Flexbox

Accessibility (WCAG 2.2)

❌ Forbidden

Tailwind

Bootstrap

Material UI

PrimeNG

Any CSS framework

Inline styles

!important (unless justified and documented)

Overuse of animations

Canvas/WebGL effects

3. Angular Architecture (2026 Best Practices)
Structure
src/
 ├── app/
 │   ├── core/
 │   │   ├── layout/
 │   │   │   ├── header/
 │   │   │   └── footer/
 │   │   └── services/
 │   ├── pages/
 │   │   ├── arts/
 │   │   ├── about/
 │   │   └── contact/
 │   ├── shared/
 │   │   ├── components/
 │   │   └── models/
 │   ├── app.routes.ts
 │   └── app.component.ts
 ├── assets/
 │   ├── images/
 │   └── fonts/
 └── styles/
     ├── _variables.css
     ├── _typography.css
     ├── _layout.css
     └── main.css

Angular Rules

Use standalone components only

Prefer OnPush change detection

Use @Input() immutably

No logic in templates

No business logic in components

Strong typing everywhere

No any

No magic strings

4. Routing Rules

Only these routes exist:

/arts
/about
/contact


/arts is the homepage

Lazy-load all pages

Route transitions must be subtle and elegant

No loaders unless needed (skeletons preferred)

5. Design System – Artist-First
Visual Tone

Gallery white space

Natural rhythm

Breathing layouts

Focus on artwork, not UI

Layout Principles

Large margins

Limited max width

Vertical storytelling

Clear visual hierarchy

Typography leads the experience
6. Primary Palette (MANDATORY)
:root {
  /* Backgrounds */
  --color-background: #f6f6f4;   /* warm gallery white */
  --color-surface: #ffffff;     /* canvas white */

  /* Text */
  --color-text-primary: #1c1c1c;     /* soft black */
  --color-text-secondary: #5f5f5f;   /* muted gray */

  /* Accent (cool, elegant, artistic) */
  --color-accent: #2f3a45;       /* deep blue-gray */
  --color-accent-soft: #cfd6dc;  /* pale blue-gray */

  /* UI */
  --color-border: #e2e2df;
  --color-divider: #ededeb;
}

Optional Accent Variant (Use ONE, not both)

If you want a slightly more artistic signature without overpowering:

--color-accent: #3b4f5c; /* slate blue */


or

--color-accent: #2e2e2e; /* charcoal */


7. Typography Rules
Fonts

Primary: Elegant serif (e.g. Playfair, Cormorant, Libre Baskerville)

Secondary: Clean sans-serif (e.g. Inter, Source Sans 3)

Typography Principles

Art titles → serif

Body text → sans-serif

Line height ≥ 1.6

Avoid uppercase blocks

Use letter-spacing sparingly

8. /arts Page Rules

Grid layout (CSS Grid)

Artwork is the hero

Titles subtle, not dominant

Hover effects must be minimal:

opacity

slight transform

No aggressive zooms

No shadows unless extremely soft

9. /about Page Rules

Emotional storytelling

Portrait + text

Calm vertical flow

Focus on authenticity

No marketing language

10. /contact Page Rules

Minimal form

Fields:

Name

Email

Message

Use Angular Reactive Forms

Clear validation messages

No CAPTCHA unless required

Submit feedback must feel human

11. CSS Rules (VERY IMPORTANT)

BEM-inspired naming (lightweight)

One responsibility per class

Prefer composition over nesting

Max nesting: 2 levels

No global resets beyond typography & box-sizing

Example:

.art-card {}
.art-card__image {}
.art-card__title {}

12. Animations & Motion

Use prefers-reduced-motion

Duration: 200–400ms

Easing: cubic-bezier(0.4, 0, 0.2, 1)

Motion must guide, not entertain

13. Accessibility (Non-Negotiable)

Semantic HTML only

Proper landmarks

Keyboard navigation

Focus styles visible

Alt text meaningful (not decorative)

14. Code Quality Bar

Claude must not:

Generate filler components

Over-abstract

Introduce premature optimization

Add unnecessary services

Write comments explaining obvious code

Claude must:

Write clean, human-readable code

Prefer clarity over cleverness

Match professional Angular standards

Treat design as first-class

15. Final Rule

If a decision improves developer convenience but harms artistic expression — reject it.

This project exists to serve art, not frameworks.
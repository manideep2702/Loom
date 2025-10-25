# Loom Technologies — Marketing Site

Fast, accessible marketing site for Loom Technologies built with Next.js 14 (App Router) and Tailwind CSS.

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (no external UI lib)
- ESLint + Prettier + Husky pre-commit
- next-sitemap for sitemap and robots

## Getting Started

- Install dependencies:
  - `npm install`
- Run the dev server:
  - `npm run dev`
- Build for production:
  - `npm run build`
- Start production server:
  - `npm run start`

## Deploy
- Vercel-ready. Connect repo to Vercel and deploy.
- Ensure `site.config.ts` `url` matches your production domain.

## Content
- Pages live under `app/(site)`.
- Longform content placeholders under `content/` (e.g., `terms.md`, `privacy.md`).
- Images under `public/images/`.

## Editing Copy
- Update brand copy and metadata in `site.config.ts`.
- Page-specific metadata via `generateMetadata` in each page.
- Home sections and components in `app/(site)/components/`.

## Accessibility
- Keyboard navigable header, menu, FAQ accordion.
- Visible focus outlines.
- Reduced motion respected via CSS.

## SEO
- Open Graph + Twitter card per page.
- JSON-LD Organization on all pages; Course on Curriculum.
- `next-sitemap` generates `sitemap.xml` + `robots.txt` during build.

## Structure
```
/app
  /(site)
    /components (UI components)
    /data (cohorts, curriculum)
    about, admissions, curriculum, demo-day, faq, contact pages
  layout.tsx (global head + layout)
/content (markdown placeholders)
/lib (analytics, schema, utils)
/public/images (logo, og)
/styles/globals.css
/site.config.ts
/next-sitemap.config.js
```

## QA Checklist
- Lighthouse Performance ≥ 90, Accessibility ≥ 95
- `next build` passes, no console errors
- Keyboard-only navigation works; focus visible
- Mobile friendly at 360px; images optimized
- CTAs present on every page; final CTA section exists


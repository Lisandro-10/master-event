# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

Next.js 14 App Router project (TypeScript + Tailwind CSS) for a DJ/sound equipment rental company in Mendoza, Argentina.

### Key structure

- **[src/app/](src/app/)** — App Router pages and API routes
  - `page.tsx` — Main landing page, composes all sections in order
  - `layout.tsx` — Root layout with metadata, fonts, and FloatingWhatsApp
  - `api/contact/` — Contact form handler using Resend for email
  - `api/lib/` — CDN URL helpers
- **[src/components/sections/](src/components/sections/)** — Page sections (Hero, About, Combos, Events, Contact)
- **[src/components/layout/](src/components/layout/)** — Navbar, Footer
- **[src/components/modals/](src/components/modals/)** — ComboModal, EventGalleryModal
- **[src/components/ui/](src/components/ui/)** — Shared UI primitives (Button, FloatingWhatsApp, SectionLabel)
- **[src/data/index.ts](src/data/index.ts)** — All static content: combos packages and event gallery data
- **[src/data/types.ts](src/data/types.ts)** — TypeScript interfaces (Combo, EventItem, etc.)
- **[src/hooks/useEventMedia.ts](src/hooks/useEventMedia.ts)** — Event media handling hook

### Design system

Tailwind config defines the brand palette:
- `primary`: turquoise `#25F4D1`
- `secondary`: slate `#1E293B`
- `dark`: navy `#10221F`

Path alias `@/*` maps to `src/*`.

### Media / CDN

Images are served from CloudFront (`NEXT_PUBLIC_CDN_URL`). The `api/lib/` utilities build CDN URLs. Next.js is configured to allow that domain for image optimization.

### Environment variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Sends contact form emails via Resend |
| `NEXT_PUBLIC_CDN_URL` | CloudFront base URL for media assets |

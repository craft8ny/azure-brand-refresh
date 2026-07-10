- Goal

Redesign only the Home page (`src/routes/index.tsx`) with a corporate, clean aesthetic built on the VTS logo palette. Other pages (About, Services, Experiences, Contact) are out of scope for this round.

## Color System

Introduce the logo palette as semantic tokens in `src/styles.css` (converted to `oklch`, keeping shadcn's `@theme inline` mapping intact):

- `--primary`: `#0b3a7e` (deep navy — buttons, headings, nav)
- `--accent` / brand mid: `#4b88be` (mid blue — links, highlights, icon accents)
- `--secondary` / brand soft: `#88bbd9` (soft sky — surfaces, subtle backgrounds, dividers)
- `--background`: near-white
- `--foreground`: near-black navy for text
- Add `--gradient-brand` (`#0b3a7e → #4b88be`) and `--shadow-elegant` for hero/CTA polish

All existing shadcn tokens (`--card`, `--muted`, `--border`, `--ring`, sidebar, charts) remap to sit inside this palette so components stay coherent.

## Home Page Composition

A single-column corporate landing with clear hierarchy:

1. **Sticky top nav** — Logo placeholder (VTS mark), links (Home, About, Services, Experiences, Contact), navy "Contact" CTA on the right. Links are placeholders (`#`) since only Home is in scope.
2. **Hero** — Two-column on desktop: left column with eyebrow ("Geospatial Solutions"), H1 "VTS Universe Sdn Bhd", short subhead about aerial mapping / LiDAR / GIS, primary + ghost CTA. Right column with a generated hero image (drone + terrain map overlay feel). Soft brand-gradient background band.
3. **Trusted-by strip** — Muted "Trusted by industry leaders" label above a row of monochrome placeholder client marks (5–6 slots).
4. **Capabilities grid** — 3 cards (Airborne Mapping, Terrestrial Mapping, Underground Utility Mapping) with an outlined icon, title, one-line description, subtle border and brand hover.
5. **About preview** — Two-column: short "The Company" paragraph on the left, small stats block on the right (Founded 2016, projects delivered, etc. as placeholders).
6. **CTA band** — Full-width navy gradient section with headline "Ready to map your next project?" and a single light CTA.
7. **Footer** — Slim, navy-on-soft-sky, three columns (brand blurb, quick links, contact placeholder), copyright line.

Motion is restrained: subtle fade/translate on section reveal only where it aids clarity — no per-element animations.

## Head / SEO

Update the Home route `head()` with real title, description, `og:title`, `og:description`, `og:type`, `twitter:card`, and an `og:image` pointing to the generated hero image (absolute URL requirement acknowledged — will use the generated asset URL).

## Technical Details

- Files touched:
  - `src/styles.css` — rewrite `:root` and `.dark` token values to the new palette; add `--gradient-brand`, `--shadow-elegant`.
  - `src/routes/index.tsx` — replace placeholder with the composed home page and route `head()`.
  - `src/components/home/*` — small presentational components (`SiteNav`, `Hero`, `TrustedBy`, `Capabilities`, `AboutPreview`, `CtaBand`, `SiteFooter`) to keep the route file readable.
  - `src/assets/` — one generated hero image (drone-over-terrain, brand-tinted).
- No new dependencies, no backend, no routing changes, no edits to About/Services/Experiences/Contact.
- All colors go through semantic tokens — no hardcoded hex in components.

## Out of Scope

- About, Services, Experiences, Contact pages (kept as-is; can be tackled in follow-ups).
- Real copy and real client logos (placeholders only per your answer).
- Auth, CMS, or backend wiring.
## Goal

Build out the remaining pages so the site is complete end-to-end, matching the corporate-clean palette and composition already established on the Home page. Add real navigation between them, using the existing `SiteNav` and `SiteFooter` as shared chrome.

## Pages to build

Four new TanStack Start routes, each with its own `head()` (title, description, og:title, og:description, og:type, twitter:card):

1. **`/about` — `src/routes/about.tsx`**
   - Page hero band ("About Us") over a soft gradient.
   - "The Company" section: intro paragraph + supporting image placeholder.
   - "Mission" section: statement + supporting image placeholder.
   - "Team" grid: 4 placeholder members (name, role, short bio) as cards.
   - "Technology Partners" logo strip (6–8 monochrome text placeholders).

2. **`/services` — `src/routes/services.tsx`**
   - Page hero band ("Services").
   - Three alternating (zigzag) service sections with icon + description bullets:
     - Airborne Mapping
     - Terrestrial Mapping
     - Underground Utility Mapping
   - CTA band reused from home.

3. **`/experiences` — `src/routes/experiences.tsx`**
   - Page hero band ("Experiences").
   - "Key Project Experiences" list — 3 project cards (image placeholder + title + year + short outcome bullets), e.g. Petronas Gas Pipeline, MBSA UAV LiDAR, one generic.
   - "Clients" logo strip (8 monochrome text placeholders).

4. **`/contact` — `src/routes/contact.tsx`**
   - Page hero band ("Contact Us").
   - Two-column: contact info (address, phone, email) + a static contact form (name, email, message) with a submit button. Form is presentation-only — no backend wiring (no submissions stored).
   - Optional embedded static map placeholder (a styled `div` with an SVG map icon) — no third-party map SDKs.

## Shared components

Extract page chrome so every route uses the same nav/footer:

- **`src/components/layout/PageShell.tsx`** — renders `SiteNav`, `<main>{children}</main>`, `SiteFooter`. Home and all new pages wrap in it.
- **`src/components/layout/PageHeader.tsx`** — reusable page-hero band (title, optional subtitle) with the brand gradient background.
- Move `SiteNav`/`SiteFooter` from `src/components/home/` into `src/components/layout/` (they're now global, not home-specific). Update imports.

## Navigation

Update `SiteNav` to use TanStack `<Link to="/about">` etc. instead of hash anchors. Highlight the active route via `activeProps={{ className: "text-primary" }}`. Update home hash links (`#services`, `#about`, `#contact`) to route to `/services`, `/about`, `/contact`.

## Content & assets

- Placeholder copy throughout — no real client-provided copy required.
- Team photos and project images use lightweight placeholder tiles (initials on brand-gradient background) — no image generation, keeping the build fast and consistent.
- Client / partner "logos" are monochrome text tiles (as already established on the Home trusted-by strip).

## Head / SEO per route

Each route sets a unique title and description (e.g. "About VTS Universe — Geospatial Team & Mission", "Services — Aerial, Terrestrial & Underground Mapping", etc.) with matching og tags. No `og:image` on any route (hosting injects the social preview).

## Out of scope

- Backend / form submissions / email delivery.
- Real client logos and photography (would need user uploads).
- CMS, blog, or dynamic content.
- Auth, payments, database.

## Files touched

- New: `src/routes/about.tsx`, `src/routes/services.tsx`, `src/routes/experiences.tsx`, `src/routes/contact.tsx`.
- New: `src/components/layout/PageShell.tsx`, `src/components/layout/PageHeader.tsx`.
- Move: `src/components/home/SiteNav.tsx` → `src/components/layout/SiteNav.tsx`, same for `SiteFooter.tsx`.
- Update: `src/routes/index.tsx` (use `PageShell`, update in-page CTAs to real routes).
- Update: nav links to point at real routes with active-state styling.

## Goal

Replace the placeholder "V" gradient tile in the site header (and footer) with the real VTS logo the user uploaded.

## Steps

1. **Add the logo asset** — upload `user-uploads://vtslogo.png` via `lovable-assets` to get a CDN pointer at `src/assets/vtslogo.png.asset.json`. Also use it as the site favicon (`public/favicon.png`, wire into `__root.tsx` `head().links`, delete default `public/favicon.ico`).
2. **SiteNav (`src/components/home/SiteNav.tsx`)** — replace the `<span>V</span>` tile with an `<img>` of the logo. The logo is a wide winged mark (~2:1), so size it at `h-8 w-auto` (32px tall) so it sits comfortably in the 64px header without being cropped. Keep the "VTS Universe Sdn Bhd" wordmark next to it on desktop; hide the wordmark on very small screens so the logo can breathe.
3. **SiteFooter (`src/components/home/SiteFooter.tsx`)** — swap the same gradient tile for the logo at `h-8 w-auto` for consistency.
4. **Alt text** — `alt="VTS Universe Sdn Bhd logo"` on both instances.

No other visual changes, no palette changes, no new dependencies.

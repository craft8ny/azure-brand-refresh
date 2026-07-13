## Goal

Replace the gradient/placeholder tiles and team initials on `/about` with the seven uploaded photos, mapped in the order the user specified.

## Image mapping

| Slot | Upload |
|---|---|
| The Company (right tile) | image-11.png (yellow office building) |
| Mission (left tile) | image-12.png (LiDAR terrain map) |
| Vision (right tile) | image-13.png (team group photo) |
| Ahmad Syuwari Ahmad Shukri | image-14.png |
| Sr. Muhamad Syahiir Bin Ramli | image-15.png |
| Abdul Rauf Hamzah | image-16.png |
| GS. Shajoeril Tajudin | image-17.png |

## Steps

1. Upload each of the 7 images via `lovable-assets create --file /mnt/user-uploads/image-XX.png --filename <slug>.png > src/assets/<slug>.png.asset.json` — no binary copied into the repo.
   - Slugs: `about-company.png`, `about-mission.png`, `about-vision.png`, `team-ahmad-syuwari.png`, `team-syahiir.png`, `team-abdul-rauf.png`, `team-shajoeril.png`.
2. Update `src/routes/about.tsx`:
   - Import the 3 section asset pointers and 4 team asset pointers.
   - Replace the Company/Mission/Vision gradient `<div>`s with `<img>` using `object-cover` inside the existing `aspect-[4/3] rounded-2xl` frame; keep alt text descriptive.
   - Extend the `team` array with a `photo` field; in the card, replace the initials tile with an `<img>` circle (`h-16 w-16 rounded-full object-cover`); drop `initials`.

## Out of scope

- No layout, copy, SEO, or nav changes.
- No other pages touched.

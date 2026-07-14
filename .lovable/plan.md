## Goal

1. Right-size the Company / Mission / Vision images on `/about` so they display at their natural proportions instead of a forced `aspect-[4/3]` crop.
2. Replace the short one-line team bios with the full role histories shown in the uploaded "Executive Key Leadership" reference.

## Image sizing

Current: all three tiles use `aspect-[4/3] object-cover` — this crops the tall office photo and the wide LiDAR map.

Change per image (keep `rounded-2xl`, `shadow-[var(--shadow-elegant)]`, `w-full`, `max-h-[520px]`):
- **Company (`about-company.png`, tall building)** → `object-contain` on a neutral `bg-muted` tile, `aspect-[3/4]` so the portrait building isn't cropped.
- **Mission (`about-mission.png`, LiDAR map, wide)** → `object-cover aspect-[16/10]`.
- **Vision (`about-vision.png`, team group)** → `object-cover aspect-[4/3]` (unchanged ratio, keeps current framing).

## Team bios

Rewrite the `team` array `bio` field for each member using the reference. Keep name/role/photo. Render as a short stack: degree line, then a compact list of past/current roles (comma-separated per line, `<ul>` of `<li>` with `text-sm text-muted-foreground`).

- **Ahmad Syuwari Ahmad Shukri** — CEO & Co-Founder, VTS Universe Sdn Bhd
  - B.Sc Hons. Geoinformatics, UTM
  - Industrial Advisor, Faculty of Geoinformation and Real Estate, UTM
  - LiDAR Consultant, Madinah Development Authority
  - GIS Consultant, GATES Group of Companies
  - LiDAR Manager, RS&GIS Consultancy
  - Spatial Info Specialist, AAM Group

- **Sr. Muhamad Syahiir Bin Ramli** — Managing Director, VTS Universe Sdn Bhd
  - B.Sc Hons. Geomatic Science, UiTM
  - Member, Royal Institution of Surveyors Malaysia
  - Surveyor, Proform Multisupply
  - GIS Analyst, RS & GIS Consultancy Sdn. Bhd.
  - Surveyor, Airborne Informatics

- **Abdul Rauf Hamzah** — Operation Director, VTS Universe Sdn Bhd
  - Dip. Civil Engineering, Polytechnic Sultan Azlan Shah
  - Production Manager, Pro-Forms
  - LiDAR Analyst, RS&GIS Consultancy
  - LiDAR Analyst, AAM Pty Ltd

- **GS. Shajoeril Tajudin** — Co-Founder & Executive Advisor, VTS Universe Sdn Bhd
  - B.Sc Hons. Remote Sensing, UTM
  - Professional Member, Institute of Geospatial & Remote Sensing Malaysia
  - Project Manager, RS&GIS Consultancy
  - Spatial Info Consultant, AAM Pty Ltd
  - Technical Manager, Airborne Informatics
  - Remote Sensing Specialist, Geomatic Science Sdn Bhd
  - Research Officer, Forest Research Institute of Malaysia

## Files

- `src/routes/about.tsx` — update the three `<img>` classNames and rewrite the `team` array bios (change `bio: string` to `credentials: string[]`, render as a `<ul>`).

## Out of scope

Layout, nav, SEO, other pages.

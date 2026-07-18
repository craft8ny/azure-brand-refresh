import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Capabilities } from "@/components/home/Capabilities";
import { AboutPreview } from "@/components/home/AboutPreview";
import { CtaBand } from "@/components/home/CtaBand";
import { ShowcaseReel } from "@/components/home/ShowcaseReel";

const TITLE = "VTS Universe Sdn Bhd — Aerial LiDAR & Geospatial Mapping";
const DESCRIPTION =
  "Malaysian geospatial specialists delivering aerial LiDAR, terrestrial surveys, GIS and GPS solutions for infrastructure, energy and environment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <TrustedBy />
      <Capabilities />
      <ShowcaseReel />
      <AboutPreview />
      <CtaBand />
    </PageShell>
  );
}

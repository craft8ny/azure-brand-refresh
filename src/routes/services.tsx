import { createFileRoute } from "@tanstack/react-router";
import { Plane, Ruler, Radar, Check, Map, Satellite, Drill, GraduationCap } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { CtaBand } from "@/components/home/CtaBand";

const TITLE = "Services — Aerial, Terrestrial & Underground Mapping";
const DESCRIPTION =
  "LiDAR, drone photogrammetry, cadastral surveys, GPS/GIS and subsurface utility detection — geospatial services delivered end-to-end by VTS Universe.";

export const Route = createFileRoute("/services")({
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
  component: ServicesPage,
});

const services = [
  {
    icon: Plane,
    title: "Airborne Mapping",
    lead: "High-precision data capture from the air, at any scale.",
    items: [
      "Aerial photography & videography",
      "Airborne LiDAR survey and mapping",
      "Helicopter, fixed-wing and UAV LiDAR",
      "UAV high-resolution orthophoto",
      "3D airborne survey modelling",
      "Geospatial UAV/UAS training",
      "Precision construction and mining mapping",
      "UAV multi-spectral missions for agriculture",
      "Custom UAV missions for fire and rescue (FLIR)",
    ],
  },
  {
    icon: Ruler,
    title: "Terrestrial Mapping",
    lead: "Ground-based surveys tuned for accuracy and site conditions.",
    items: [
      "Cadastral and land demarcation surveys",
      "High-precision GPS survey and mapping",
      "Terrestrial LiDAR — on-shore and off-shore",
      "Extremely high-detail 3D object modelling",
    ],
  },
  {
    icon: Radar,
    title: "Underground Utility Mapping",
    lead: "Non-intrusive subsurface detection you can build around.",
    items: [
      "3-Dimensional underground utilities detection survey and mapping",
      "GIS mapping for underground utilities",
    ],
  },
  {
    icon: Map,
    title: "Geographical Information Systems",
    lead: "Consultancy, system development and database management services.",
    items: [
      "GIS plantation tree census (using GPS real-time solution)",
      "Plantation planning and design (slope, terrain and drainage mapping)",
      "Environmental risk and hazard mapping",
      "Map digitizing reprography (transferring hardcopy to softcopy plans)",
    ],
  },
  {
    icon: Satellite,
    title: "Satellite-Based Data Mapping",
    lead: "Satellite imagery and remote-sensing data, processed for decision-makers.",
    items: [
      "Satellite image / remote sensing data manipulation and mapping",
      "Analysis for agriculture, environment and urban development",
    ],
  },
  {
    icon: Drill,
    title: "Soil Investigation",
    lead: "Ground-truth investigation for safe, informed engineering design.",
    items: [
      "Borehole drilling",
      "In-situ testing (SPT, CPT, VST)",
      "Laboratory testing",
      "Supporting foundation design, slope stability, soil remediation and risk assessment",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training — Geospatial Services",
    lead: "Hands-on training programs to build in-house geospatial capability.",
    items: [
      "Mapping data viewing & manipulation",
      "GIS / mapping analysis",
      "Product generation",
      "On-site survey and mapping",
      "UAV piloting and mapping",
    ],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="What we do"
        title="Services"
        subtitle="Purpose-built teams and instruments for every scale — from a single site plan to nationwide pipeline corridors."
      />

      <div className="mx-auto max-w-7xl space-y-24 px-6 py-24">
        {services.map(({ icon: Icon, title, lead, items }, idx) => (
          <section
            key={title}
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            <div
              className={
                idx % 2 === 1
                  ? "order-2 md:order-2"
                  : "order-2 md:order-1"
              }
            >
              <div
                className="grid h-12 w-12 place-items-center rounded-lg text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">{lead}</p>
              <ul className="mt-6 space-y-3">
                {items.map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                idx % 2 === 1
                  ? "order-1 aspect-[4/3] rounded-2xl shadow-[var(--shadow-elegant)] md:order-1"
                  : "order-1 aspect-[4/3] rounded-2xl shadow-[var(--shadow-elegant)] md:order-2"
              }
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
          </section>
        ))}
      </div>

      <CtaBand />
    </PageShell>
  );
}
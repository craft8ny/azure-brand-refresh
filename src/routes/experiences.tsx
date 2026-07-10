import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const TITLE = "Experiences — Key Geospatial Projects | VTS Universe";
const DESCRIPTION =
  "Selected VTS Universe projects: pipeline corridor mapping for Petronas, UAV LiDAR for MBSA, and precision surveys across Malaysia.";

export const Route = createFileRoute("/experiences")({
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
  component: ExperiencesPage,
});

const projects = [
  {
    tag: "2023 – 2024",
    title: "Petronas Sabah – Sarawak Gas Pipeline",
    bullets: [
      "QC and processing of LiDAR data through to final deliverables",
      "Geo-hazard mapping across a 500km+ pipeline corridor",
      "Client: Petronas via Technovita",
    ],
  },
  {
    tag: "UAV LiDAR",
    title: "Tek Geo Sdn Bhd & MBSA — Municipal UAV LiDAR",
    bullets: [
      "Non-intrusive, rapid capture for dense urban environments",
      "High-resolution point clouds for planning and asset management",
      "Client: Tek Geo Sdn Bhd for MBSA",
    ],
  },
  {
    tag: "Forestry",
    title: "Rainforest Canopy Mapping",
    bullets: [
      "UAV LiDAR beneath complex canopy conditions",
      "Precise ground and canopy models for biomass estimation",
      "Delivered in partnership with local research institutes",
    ],
  },
];

const clients = [
  "Woolpert",
  "Sky Futures",
  "Tek Geo",
  "Brunei Survey Dept",
  "Uji Teguh",
  "Infotrax",
  "Ingress",
  "SIRIM",
  "FGV",
  "PKPS",
  "Jurupro",
  "Tiemura",
];

function ExperiencesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Track record"
        title="Experiences"
        subtitle="A selection of projects delivered across infrastructure, energy, forestry and municipal sectors."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Key Project Experiences
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Work we're proud of
          </h2>
        </div>
        <div className="mt-12 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-[1fr,1.5fr] md:p-8"
            >
              <div
                className="aspect-[4/3] rounded-xl"
                style={{ background: "var(--gradient-brand)" }}
                aria-hidden
              />
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                  {p.title}
                </h3>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Clients
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <div
                key={c}
                className="flex h-10 items-center justify-center text-sm font-semibold tracking-tight text-muted-foreground/70 grayscale transition hover:text-primary hover:grayscale-0"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
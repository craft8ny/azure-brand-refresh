import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const TITLE = "About VTS Universe — Geospatial Team & Mission";
const DESCRIPTION =
  "Meet the VTS Universe team and learn how our geospatial engineers deliver aerial, terrestrial and underground mapping across Southeast Asia.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const team = [
  {
    initials: "AS",
    name: "Ahmad Syuwari Ahmad Shukri",
    role: "CEO & Co-Founder",
    bio: "B.Sc Hons. Geoinformatics, UTM. Industrial Advisor at the Faculty of Geoinformation and Real Estate, UTM.",
  },
  {
    initials: "MS",
    name: "Sr. Muhamad Syahiir Bin Ramli",
    role: "Managing Director",
    bio: "B.Sc Hons. Geomatic Science, UiTM. Member of the Royal Institution of Surveyors Malaysia.",
  },
  {
    initials: "AR",
    name: "Abdul Rauf Hamzah",
    role: "Operation Director",
    bio: "Dip. Civil Engineering, Polytechnic Sultan Azlan Shah. LiDAR analyst and production lead.",
  },
  {
    initials: "GS",
    name: "GS. Shajoeril Tajudin",
    role: "Co-Founder & Executive Advisor",
    bio: "B.Sc Hons. Remote Sensing, UTM. Professional Member, Institute of Geospatial & Remote Sensing Malaysia.",
  },
];

const partners = [
  "Uji Teguh",
  "Geocomp",
  "NZ Geospatial",
  "Malawati",
  "Triple Axis",
  "Digdat",
  "Examap",
  "Horizon Ukur",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Who we are"
        title="About Us"
        subtitle="Malaysian geospatial specialists shaping how infrastructure, energy and environment projects are surveyed, modelled and understood."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,1fr] md:items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">The Company</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Engineered by surveyors, built for modern industries
          </h2>
          <p className="mt-6 text-muted-foreground">
            Previously known as Vectory Techno Solutions, VTS Universe Sdn Bhd
            was incorporated in January 2016 as a service provider focused on
            technological solutions for survey and mapping, defense, mining,
            agriculture, natural disaster monitoring, and real estate.
          </p>
          <p className="mt-4 text-muted-foreground">
            We have successfully delivered solutions for aerial and space-borne
            mapping — LiDAR mapping, 3D modelling, aerial photography and
            remote sensing — alongside conventional GIS and GPS surveys.
          </p>
        </div>
        <div
          className="aspect-[4/3] rounded-2xl shadow-[var(--shadow-elegant)]"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden
        />
      </section>

      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr,1.1fr] md:items-center">
          <div
            className="order-2 aspect-[4/3] rounded-2xl bg-secondary/50 md:order-1"
            aria-hidden
          />
          <div className="order-1 md:order-2">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Mission</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Providing the best solutions to all clients' geospatial needs
            </h2>
            <p className="mt-6 text-muted-foreground">
              At VTS Universe we believe in nurturing ideas and innovation
              that bring measurable value to our clients — helping contractors
              and service providers better manage their projects with accurate,
              actionable spatial data.
            </p>
            <p className="mt-4 text-muted-foreground">
              Whether you are running a large corridor survey or a single
              precision inspection, we have the building blocks to launch cost
              effective, rapid solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Leadership</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Meet the team
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="grid h-16 w-16 place-items-center rounded-full text-lg font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {m.initials}
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-accent">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Technology Partners
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-10 items-center justify-center text-sm font-semibold tracking-tight text-muted-foreground/70 grayscale transition hover:text-primary hover:grayscale-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
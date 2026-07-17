import { Plane, Ruler, Radar } from "lucide-react";

const items = [
  {
    icon: Plane,
    title: "Airborne Mapping",
    desc: "Helicopter, fixed-wing and UAV LiDAR with high-resolution orthophoto and 3D terrain modelling.",
  },
  {
    icon: Ruler,
    title: "Terrestrial Mapping",
    desc: "Cadastral surveys, high-precision GPS and terrestrial LiDAR for on-shore and off-shore sites.",
  },
  {
    icon: Radar,
    title: "Underground Utility Mapping",
    desc: "Non-intrusive subsurface detection to locate and map buried utilities with confidence.",
  },
];

export function Capabilities() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Capabilities
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          End-to-end geospatial services
        </h2>
        <p className="mt-4 text-muted-foreground">
          Purpose-built teams and instruments for every scale — from a single
          site plan to nationwide pipeline corridors.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-accent hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-secondary/40 text-primary transition-colors group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
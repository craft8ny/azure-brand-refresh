const stats = [
  { value: "2016", label: "Founded" },
  { value: "500km+", label: "Pipeline mapped" },
  { value: "40+", label: "Enterprise clients" },
  { value: "100%", label: "In-house expertise" },
];

export function AboutPreview() {
  return (
    <section id="about" className="bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            The Company
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Providing the best solutions to all clients' geospatial needs
          </h2>
          <p className="mt-6 text-muted-foreground">
            VTS Universe Sdn Bhd is a service provider focused on technological
            solutions for survey and mapping, defense, mining, agriculture,
            natural disaster monitoring and real estate — from aerial and space
            borne mapping to conventional surveys, GIS and GPS.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our engineers progressively introduce and refine technologies to
            meet emerging needs, while our consultancy helps clients turn
            business goals into deployable geospatial applications.
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-background p-6"
            >
              <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-primary">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
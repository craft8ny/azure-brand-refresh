export function CtaBand() {
  return (
    <section id="contact" className="px-6 py-16">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl px-8 py-16 text-center shadow-[var(--shadow-elegant)] md:px-16 md:py-20"
        style={{ background: "var(--gradient-brand)" }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
          Ready to map your next project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Tell us about your site, corridor, or asset. We'll scope the right
          survey approach and deliver actionable geospatial data.
        </p>
        <a
          href="mailto:admin@vectory.com.my"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-background px-6 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
        >
          Request a consultation
        </a>
      </div>
    </section>
  );
}
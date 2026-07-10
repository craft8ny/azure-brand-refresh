const clients = ["Petronas", "Woolpert", "TekGeo", "Ingress", "SIRIM", "FGV"];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center justify-center text-sm font-semibold tracking-tight text-muted-foreground/70 grayscale transition hover:text-primary hover:grayscale-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const clients = [
  { name: "Woolpert",           logo: "/client-woolpert.jpg" },
  { name: "Sky Futures",        logo: "/client-skyfutures.jpg" },
  { name: "Tek Geo",            logo: "/client-tekgeo.jpg" },
  { name: "Ingress",            logo: "/client-ingress.png" },
  { name: "SIRIM",              logo: "/client-sirim.jpg" },
  { name: "FGV",                logo: "/client-fgv.jpg" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
          {clients.map(({ name, logo }) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-lg border border-border bg-background px-3"
            >
              <img
                src={logo}
                alt={`${name} logo`}
                className="max-h-10 max-w-full object-contain grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
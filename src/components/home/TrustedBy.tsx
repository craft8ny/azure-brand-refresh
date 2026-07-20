import { Reveal } from "@/components/ui/Reveal";

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
          {clients.map(({ name, logo }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="flex h-16 items-center justify-center rounded-lg border border-border bg-background px-3 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-card)]">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="max-h-10 max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

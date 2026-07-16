import { LogoPlaceholder } from "@/components/ui/ImagePlaceholder";

const clients = ["Petronas", "Woolpert", "TekGeo", "Ingress", "SIRIM", "FGV"];

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by industry leaders
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-6">
          {clients.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
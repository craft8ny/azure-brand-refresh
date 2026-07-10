import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-drone.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            Geospatial Solutions
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Precision mapping for a{" "}
            <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
              connected world
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Aerial LiDAR, terrestrial surveys, and GIS analytics engineered
            for the industries that build modern infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              Explore services
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center rounded-md border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Talk to our team
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-[image:var(--gradient-brand)] opacity-20 blur-2xl" />
          <img
            src={heroImage}
            alt="Survey drone mapping tropical terrain"
            width={1600}
            height={1200}
            className="w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </div>
    </section>
  );
}
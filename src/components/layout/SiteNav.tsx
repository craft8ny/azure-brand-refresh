import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/vtslogo.png.asset.json";

const links = [
  { label: "Home", to: "/" as const, exact: true },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Experiences", to: "/experiences" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt="VTS Universe Sdn Bhd logo"
            className="h-9 w-auto"
          />
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            VTS Universe <span className="text-muted-foreground font-normal">Sdn Bhd</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
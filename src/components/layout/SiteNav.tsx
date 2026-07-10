import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/vtslogo.png.asset.json";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "#about" },
  { label: "Services", to: "#services" },
  { label: "Experiences", to: "#experiences" },
  { label: "Contact", to: "#contact" },
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
            <a
              key={l.label}
              href={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
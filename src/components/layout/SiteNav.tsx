import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logoAsset from "@/assets/vtslogo.png.asset.json";

const links = [
  { label: "Home", to: "/" as const, exact: true },
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Experiences", to: "/experiences" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0, px: 0, py: 0 });
  const logoRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const aspectRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      posRef.current.tx = e.clientX;
      posRef.current.ty = e.clientY;
      if (!visibleRef.current) {
        posRef.current.x = e.clientX;
        posRef.current.y = e.clientY;
        posRef.current.px = e.clientX;
        posRef.current.py = e.clientY;
        visibleRef.current = true;
        setVisible(true);
      }
    };
    const visibleRef = { current: false };

    const tick = () => {
      const p = posRef.current;
      p.px = p.x;
      p.py = p.y;
      p.x += (p.tx - p.x) * 0.12;
      p.y += (p.ty - p.y) * 0.12;
      const dx = p.x - p.px;
      const dy = p.y - p.py;
      const speed = Math.hypot(dx, dy);
      // Reference dimension grows with speed: 34px idle -> ~74px fast
      const size = Math.min(74, 34 + speed * 1.3);
      // Directional offset from cursor (bottom-right base + drift toward motion)
      const baseGap = 16;
      const driftX = Math.max(-28, Math.min(28, dx * 2.5));
      const driftY = Math.max(-28, Math.min(28, dy * 2.5));
      const offsetX = baseGap + driftX;
      const offsetY = baseGap + driftY;
      const rotY = Math.max(-25, Math.min(25, dx * 4));
      const rotX = Math.max(-25, Math.min(25, -dy * 4));
      const el = logoRef.current;
      if (el) {
        if (el.naturalWidth > 0 && aspectRef.current === null) {
          aspectRef.current = el.naturalWidth / el.naturalHeight;
        }
        const aspect = aspectRef.current;
        if (aspect) {
          el.style.width = `${size}px`;
          el.style.height = `${size / aspect}px`;
        } else {
          // Keep the browser's natural ratio until we know the aspect
          el.style.width = `${size}px`;
          el.style.height = "auto";
        }
        el.style.transform = `translate3d(${p.x + offsetX}px, ${p.y + offsetY}px, 0) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
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
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile sidebar */}
    <div
      className={`fixed inset-0 z-[100] md:hidden ${menuOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!menuOpen}
    >
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-background shadow-xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
          <span className="text-sm font-semibold tracking-tight">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
              activeProps={{ className: "bg-accent text-primary" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get in touch
          </Link>
        </nav>
      </aside>
    </div>

    {visible && (
      <img
        ref={logoRef}
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] select-none will-change-transform transition-[width,height] duration-150 ease-out"
        style={{ perspective: "400px", width: 34, height: "auto" }}
      />
    )}
    </>
  );
}
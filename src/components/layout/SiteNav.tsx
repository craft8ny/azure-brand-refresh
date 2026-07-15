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
      // Reference dimension grows with speed: 28px idle -> ~64px fast
      const size = Math.min(64, 28 + speed * 1.2);
      // Directional offset from cursor (bottom-right base + drift toward motion)
      const baseGap = 14;
      const driftX = Math.max(-24, Math.min(24, dx * 2.5));
      const driftY = Math.max(-24, Math.min(24, dy * 2.5));
      const offsetX = baseGap + driftX;
      const offsetY = baseGap + driftY;
      const rotY = Math.max(-25, Math.min(25, dx * 4));
      const rotX = Math.max(-25, Math.min(25, -dy * 4));
      const el = logoRef.current;
      if (el) {
        if (el.naturalWidth > 0 && aspectRef.current === null) {
          aspectRef.current = el.naturalWidth / el.naturalHeight;
        }
        const aspect = aspectRef.current ?? 1;
        const width = size;
        const height = size / aspect;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
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
        <Link
          to="/contact"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Get in touch
        </Link>
      </div>
    </header>
    {visible && (
      <img
        ref={logoRef}
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] select-none will-change-transform transition-[width,height] duration-150 ease-out"
        style={{ perspective: "400px", width: 28, height: 28 }}
      />
    )}
    </>
  );
}
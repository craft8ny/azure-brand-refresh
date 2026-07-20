import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { raw: 2016, suffix: "",    label: "Founded" },
  { raw: 500,  suffix: "km+", label: "Pipeline mapped" },
  { raw: 40,   suffix: "+",   label: "Enterprise clients" },
  { raw: 100,  suffix: "%",   label: "In-house expertise" },
];

function AnimatedStat({ raw, suffix, label }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 900;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(raw * ease));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, raw]);

  return (
    <div ref={ref} className="rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-elegant)]">
      <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-2 text-3xl font-semibold tracking-tight text-primary">
        {count}{suffix}
      </dd>
    </div>
  );
}

export function AboutPreview() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <Reveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            The Company
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Providing the best solutions to all clients' geospatial needs
          </h2>
          <p className="mt-6 text-muted-foreground">
            VTS Universe Sdn Bhd is a service provider focused on technological
            solutions for survey and mapping, defense, mining, agriculture,
            natural disaster monitoring and real estate — from aerial and space
            borne mapping to conventional surveys, GIS and GPS.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our engineers progressively introduce and refine technologies to
            meet emerging needs, while our consultancy helps clients turn
            business goals into deployable geospatial applications.
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <AnimatedStat {...s} />
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

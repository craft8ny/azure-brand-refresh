export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(1 0 0 / 0.25), transparent 40%), radial-gradient(circle at 80% 60%, oklch(1 0 0 / 0.15), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        {eyebrow ? (
          <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/70">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary-foreground md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
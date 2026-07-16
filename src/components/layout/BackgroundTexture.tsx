export function BackgroundTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(oklch(0.335 0.132 260 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(0.335 0.132 260 / 0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Fine dot texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(oklch(0.607 0.109 245 / 0.07) 0.5px, transparent 0.5px)`,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Soft brand glows */}
      <div
        className="absolute -top-[15%] -left-[10%] h-[55%] w-[55%] rounded-full opacity-40"
        style={{
          background: "oklch(0.767 0.07 236 / 0.35)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute -bottom-[10%] -right-[10%] h-[45%] w-[45%] rounded-full opacity-30"
        style={{
          background: "oklch(0.607 0.109 245 / 0.25)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}

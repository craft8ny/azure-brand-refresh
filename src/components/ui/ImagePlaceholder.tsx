import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";

type ImagePlaceholderProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  style?: CSSProperties;
  rounded?: string;
};

/**
 * Swappable image slot. Pass `src` to render the actual image, otherwise
 * shows a themed placeholder. Designed so any consumer can later drop in a
 * real asset by setting the `src` prop.
 */
export function ImagePlaceholder({
  src,
  alt = "",
  label = "Image placeholder",
  className = "",
  style,
  rounded = "rounded-2xl",
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`${rounded} object-cover ${className}`}
        style={style}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden border border-dashed border-border/70 bg-secondary/40 ${rounded} ${className}`}
      style={style}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
        <ImageIcon className="h-8 w-8 text-primary-foreground/80" />
        <span className="text-xs font-medium uppercase tracking-widest text-primary-foreground/90">
          {label}
        </span>
      </div>
    </div>
  );
}

type LogoPlaceholderProps = {
  name: string;
  src?: string;
};

export function LogoPlaceholder({ name, src }: LogoPlaceholderProps) {
  return (
    <div className="flex h-16 w-full items-center justify-center rounded-lg border border-dashed border-border/70 bg-card px-3 text-center transition hover:border-accent">
      {src ? (
        <img
          src={src}
          alt={`${name} logo`}
          className="max-h-10 max-w-full object-contain grayscale transition hover:grayscale-0"
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <ImageIcon className="h-4 w-4 text-muted-foreground/60" aria-hidden />
          <span className="text-xs font-semibold tracking-tight text-muted-foreground">
            {name}
          </span>
        </div>
      )}
    </div>
  );
}
import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { BackgroundTexture } from "./BackgroundTexture";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundTexture />
      <SiteNav />
      <main className="relative z-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
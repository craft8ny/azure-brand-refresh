import logoAsset from "@/assets/vtslogo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="VTS Universe Sdn Bhd logo"
              className="h-9 w-auto"
            />
            <span className="text-sm font-semibold text-foreground">VTS Universe Sdn Bhd</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Geospatial technology and consultancy for infrastructure, energy
            and environment.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#experiences" className="hover:text-primary">Experiences</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground">Office</p>
          <address className="mt-4 space-y-1 text-sm not-italic text-muted-foreground">
            <div>106-2 Jalan LP 7/4, Taman Lestari Perdana</div>
            <div>43300 Seri Kembangan, Selangor, Malaysia</div>
            <div className="pt-2">+603 8080 1754</div>
            <div>admin@vectory.com.my</div>
          </address>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} VTS Universe Sdn. Bhd. (1172315-H). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
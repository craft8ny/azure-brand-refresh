import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";

const TITLE = "Contact VTS Universe — Get in touch";
const DESCRIPTION =
  "Speak with the VTS Universe team about your next mapping or survey project. Based in Seri Kembangan, Selangor, Malaysia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell>
      <PageHeader
        eyebrow="Talk to us"
        title="Contact Us"
        subtitle="Tell us about your site, corridor, or asset — we'll scope the right survey approach."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr,1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Office
          </h2>
          <p className="mt-2 text-muted-foreground">
            VTS Universe Sdn Bhd (1172315-H)
          </p>

          <dl className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-none text-accent" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Address
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  106-2 Jalan LP 7/4, Taman Lestari Perdana,<br />
                  Bandar Putra Permai, 43300 Seri Kembangan,<br />
                  Selangor, Malaysia
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 flex-none text-accent" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Telephone
                </dt>
                <dd className="mt-1 text-sm text-foreground">+603 8080 1754</dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 flex-none text-accent" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Email
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  <a href="mailto:admin@vectory.com.my" className="hover:text-accent">
                    admin@vectory.com.my
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="mt-1 h-5 w-5 flex-none text-accent" />
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Web
                </dt>
                <dd className="mt-1 text-sm text-foreground">
                  <a
                    href="http://www.vectory.com.my"
                    className="hover:text-accent"
                    rel="noreferrer"
                  >
                    www.vectory.com.my
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <iframe
              title="VTS Universe office location"
              src="https://www.google.com/maps?q=3.008369,101.669594&hl=en&z=17&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Send us a message
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We'll respond within one business day.
          </p>

          {sent ? (
            <div className="mt-8 rounded-lg border border-border bg-secondary/40 p-6 text-sm text-foreground">
              Thanks — your message has been noted. We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" type="text" />
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
                  placeholder="Tell us about your site, timeline, and outputs you need."
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
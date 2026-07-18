import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Globe, CheckCircle2, XCircle, Loader2 } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "Failed to send message.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send message.";
      setErrorMsg(msg);
      setStatus("error");
    }
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

          {status === "sent" ? (
            <div className="mt-8 flex flex-col items-center rounded-xl border border-accent/40 bg-accent/5 p-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Message sent!
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks — we'll respond within one business day.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex h-10 items-center rounded-md border border-border px-5 text-sm font-medium text-foreground hover:border-accent hover:text-accent"
              >
                Send another message
              </button>
            </div>
          ) : status === "error" ? (
            <div className="mt-8 flex flex-col items-center rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center">
              <XCircle className="h-12 w-12 text-destructive" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                Something went wrong
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{errorMsg}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex h-10 items-center rounded-md border border-border px-5 text-sm font-medium text-foreground hover:border-destructive hover:text-destructive"
              >
                Try again
              </button>
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
                disabled={status === "sending"}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                Your message is sent directly to admin@vectory.com.my — no email client required.
              </p>
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
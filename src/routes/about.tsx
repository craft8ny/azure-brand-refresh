import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import companyAsset from "@/assets/about-company.png.asset.json";
import missionAsset from "@/assets/about-mission.png.asset.json";
import visionAsset from "@/assets/about-vision.png.asset.json";
import ahmadSyuwariAsset from "@/assets/team-ahmad-syuwari.png.asset.json";
import syahiirAsset from "@/assets/team-syahiir.png.asset.json";
import abdulRaufAsset from "@/assets/team-abdul-rauf.png.asset.json";
import shajoerilAsset from "@/assets/team-shajoeril.png.asset.json";

const TITLE = "About VTS Universe — Geospatial Team & Mission";
const DESCRIPTION =
  "Meet the VTS Universe team and learn how our geospatial engineers deliver aerial, terrestrial and underground mapping across Southeast Asia.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const team = [
  {
    photo: ahmadSyuwariAsset.url,
    name: "Ahmad Syuwari Ahmad Shukri",
    role: "CEO & Co-Founder",
    bio: "B.Sc Hons. Geoinformatics, UTM. Industrial Advisor at the Faculty of Geoinformation and Real Estate, UTM.",
  },
  {
    photo: syahiirAsset.url,
    name: "Sr. Muhamad Syahiir Bin Ramli",
    role: "Managing Director",
    bio: "B.Sc Hons. Geomatic Science, UiTM. Member of the Royal Institution of Surveyors Malaysia.",
  },
  {
    photo: abdulRaufAsset.url,
    name: "Abdul Rauf Hamzah",
    role: "Operation Director",
    bio: "Dip. Civil Engineering, Polytechnic Sultan Azlan Shah. LiDAR analyst and production lead.",
  },
  {
    photo: shajoerilAsset.url,
    name: "GS. Shajoeril Tajudin",
    role: "Co-Founder & Executive Advisor",
    bio: "B.Sc Hons. Remote Sensing, UTM. Professional Member, Institute of Geospatial & Remote Sensing Malaysia.",
  },
];

const partners = [
  "Uji Teguh",
  "Geocomp",
  "NZ Geospatial",
  "Malawati",
  "Triple Axis",
  "Digdat",
  "Examap",
  "Horizon Ukur",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Who we are"
        title="About Us"
        subtitle="Malaysian geospatial specialists shaping how infrastructure, energy and environment projects are surveyed, modelled and understood."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,1fr] md:items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">The Company</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Engineered by surveyors, built for modern industries
          </h2>
          <p className="mt-6 text-muted-foreground">
            Previously known as Vectory Techno Solutions, VTS Universe Sdn Bhd
            which was incorporated in January 2016, is a service provider that
            focuses on technological solutions for various industries such as
            general survey and mapping, defense, mining, agriculture, natural
            disaster monitoring and real estate/properties. We have successfully
            providing solutions for aerial mapping and space borne mapping
            (LiDAR mapping, 3D modelling, aerial photo, remote sensing) and
            also other geospatial services such as conventional surveys, GIS
            and GPS.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our experts and engineers progressively introduce new technologies
            & improvised current technologies to cater more and more needs from
            other industries as well. While our consultancy services helps our
            clients identify specific business needs, applications and
            processes that are made possible through latest state-of-the-art
            technology.
          </p>
        </div>
        <img
          src={companyAsset.url}
          alt="VTS Universe head office"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
        />
      </section>

      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1fr,1.1fr] md:items-center">
          <img
            src={missionAsset.url}
            alt="LiDAR terrain elevation map produced by VTS Universe"
            className="order-2 aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)] md:order-1"
          />
          <div className="order-1 md:order-2">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Mission</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Providing the Best Solutions to All Clients Geospatial Needs
            </h2>
            <p className="mt-6 text-muted-foreground">
              In VTS UNIVERSE, we believe in nurturing ideas and innovation
              that would bring values to our clients so that they can better
              manage their projects. Whether you are a project contractors or a
              service provider, we have the building blocks to create the
              applications that are only limited by your imagination. You can
              rely on our expertise, to launch your solutions and services with
              very cost effective and rapid solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,1fr] md:items-center">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Vision</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Building the Platform for Tomorrow's Technology
          </h2>
          <p className="mt-6 text-muted-foreground">
            VTS UNIVERSE services/products are built on state of the art
            technologies ensuring the best Geospatial solutions in the
            ever-changing technology world. We have a team of highly skilled
            survey specialists with expertise ranging from professional
            consultancy, data management, GIS solutions, and Remote sensing
            technologies.
          </p>
        </div>
        <img
          src={visionAsset.url}
          alt="The VTS Universe team"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Leadership</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Meet the team
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
            >
              <img
                src={m.photo}
                alt={m.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <h3 className="mt-5 text-base font-semibold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-accent">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Technology Partners
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-10 items-center justify-center text-sm font-semibold tracking-tight text-muted-foreground/70 grayscale transition hover:text-primary hover:grayscale-0"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
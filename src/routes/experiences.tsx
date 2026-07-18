import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { ImagePlaceholder, LogoPlaceholder } from "@/components/ui/ImagePlaceholder";

const TITLE = "Experiences — Key Geospatial Projects | VTS Universe";
const DESCRIPTION =
  "Selected VTS Universe projects: pipeline corridor mapping for Petronas, UAV LiDAR for MBSA, and precision surveys across Malaysia.";

export const Route = createFileRoute("/experiences")({
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
  component: ExperiencesPage,
});

type Project = {
  tag: string;
  title: string;
  bullets: string[];
  /** Drop a real image URL here to replace the placeholder. */
  image?: string;
};

const projects: Project[] = [
  {
    tag: "2023 – 2024",
    title: "Petronas Sabah – Sarawak Gas Pipeline",
    image: "/exp-petronas-sabah-sarawak.jpg",
    bullets: [
      "QC and processing of LiDAR data up to final products",
      "Generated Geo-Hazard Mapping across a 500km+ pipeline stretch",
      "Client: Petronas via Technovita",
    ],
  },
  {
    tag: "2024",
    title: "Tek Geo Sdn Bhd & MBSA — UAV LiDAR",
    image: "/exp-tek-geo-mbsa.jpg",
    bullets: [
      "Capture and processing of LiDAR data up to final products",
      "Support for Setia Alam, Sec. U13 Shah Alam flood mitigation for MBSA",
      "Client: Tek Geo Sdn Bhd for MBSA",
    ],
  },
  {
    tag: "2020 – 2021",
    title: "Petronas Carigali Sdn Bhd",
    image: "/exp-petronas-carigali.jpg",
    bullets: [
      "Sabah–Sarawak Gas Pipeline (SSGP) Airborne LiDAR",
      "GIS and ground survey consultancy service",
    ],
  },
  {
    tag: "2023 – 2024",
    title: "Sky Futures (Malaysia) Sdn Bhd",
    image: "/exp-sky-futures.jpg",
    bullets: [
      "Ultra-high-detail 3-Dimensional Mesh model of Shell Brunei Gas Plant",
      "Generated from a massive volume of UAV photogrammetry data",
    ],
  },
  {
    tag: "2023 – 2024",
    title: "MH Malawati Enterprise & Railway Asset Corporation (RAC)",
    image: "/exp-malawati-rac.jpg",
    bullets: [
      "Vectorising railway and all other RAC assets",
      "Inserting attributes and providing GIS monitoring solutions",
    ],
  },
  {
    tag: "2019 – 2022",
    title: "Brunei Survey Department — LiDAR Project Consultation",
    image: "/exp-brunei-survey.jpg",
    bullets: [
      "Project consultancy for Brunei National Airborne LiDAR & Orthophoto",
    ],
  },
  {
    tag: "2022 – 2023",
    title: "Jabatan Pengairan & Saliran for RS&GIS Consultancy Sdn Bhd",
    image: "/exp-jps-rsgis.jpg",
    bullets: [
      "Terrain mapping using Airborne LiDAR and orthophoto data",
      "Supplied for Jabatan Pengairan dan Saliran (JPS) flood analysis",
    ],
  },
  {
    tag: "2022",
    title: "JENDELA for ZMK Resources",
    image: "/exp-jendela-zmk.jpg",
    bullets: [
      "Soil Investigation (Mackintosh / JKR Probe method) under Government's JENDELA initiative",
      "Topography survey for new telecommunication towers in Peninsular Malaysia",
    ],
  },
  {
    tag: "2020 – 2023",
    title: "Jabatan Ukur dan Pemetaan (JUPEM)",
    image: "/exp-jabatan-ukur.jpg",
    bullets: [
      "Vector Data Editing service for project JUPEM T7, T8 and T10/2020",
      "T2/2021 Sarawak and T1 2022 Sarawak",
    ],
  },
  {
    tag: "2021",
    title: "Lebuhraya Pantai Timur 3 (LPT 3)",
    image: "/exp-lebuhraya-pantai-timur.jpg",
    bullets: [
      "Terrain mapping using Airborne LiDAR and orthophoto data",
      "For road design and land acquisition planning",
    ],
  },
  {
    tag: "2020",
    title: "FGV R&D Sdn Bhd",
    image: "/exp-fgv-rd.jpg",
    bullets: [
      "Supply of agricultural drone with accessories",
      "Customising sprayer for the drone",
      "Training for agri-drone operation",
    ],
  },
  {
    tag: "2019",
    title: "Jabatan Pengairan & Saliran Malaysia",
    image: "/exp-jps-malaysia.jpg",
    bullets: [
      "Detail design of river basin flood mitigation plan for Sungai Pinang",
      "Collected LiDAR & imagery data of Georgetown, Pulau Pinang",
    ],
  },
  {
    tag: "2017 – 2018",
    title: "Jabatan Pengairan & Saliran Malaysia — Tebrau Drainage Study",
    image: "/exp-jps-malaysia-2.jpg",
    bullets: [
      "LiDAR data acquisition and processing",
      "Hydrology map generation and GCP survey",
      "Transfer of technology to JPS",
    ],
  },
  {
    tag: "UAV LiDAR",
    title: "UAV LiDAR Mapping Over PKPS Plantation in Ulu Bernam",
    image: "/exp-pkps-plantation.png",
    bullets: [
      "Detail topographical map derived from UAV LiDAR data",
      "Plantation drainage mapping and replantation mapping",
      "Road network analysis for plantation",
    ],
  },
  {
    tag: "2016 – 2018",
    title: "Petronas Gas 3D Asset Mapping",
    image: "/exp-petronas-3d-asset.png",
    bullets: [
      "Updated drawings for 25 Petronas Gas Malaysia metering stations",
      "Piping & Instrumentation, General Arrangement, Isometric, Civil and Structure",
      "Terrestrial laser scanner with UAV and GPS for a 1:1 scale 3D model",
    ],
  },
  {
    tag: "2016 – 2018",
    title: "Petronas Gas Underground Pipeline Mapping",
    image: "/exp-petronas-underground-pipeline.png",
    bullets: [
      "Route and profile drawings for Shah Alam (163.3km), Seremban (34km), Kuantan (2.1km)",
      "Radio detectors and ground-penetrating radar for buried facilities",
      "Trial-hole verification confirmed accuracy within tolerance",
    ],
  },
  {
    tag: "2016 – 2017",
    title: "Johor National Park",
    image: "/exp-johor-national-park.png",
    bullets: [
      "Mapped Gunung Ledang Johor National Park and RAMSAR sites",
      "Sites: Taman Negara Gunung Ledang, RAMSAR Tanjung Piai, Pulau Kukup, Sg. Pulai",
      "Delivered topographical imagery, IFSAR/UAV surface data, encroachment maps, 3D monuments and GIS portal",
    ],
  },
  {
    tag: "2017",
    title: "Bukit Jugra UAV LiDAR",
    image: "/exp-bukit-jugra.png",
    bullets: [
      "Slope risk study for IKRAM at Bukit Jugra",
      "UAV LiDAR deployed on steep, hazardous terrain unsuitable for conventional survey",
      "Non-intrusive, rapid, thorough representation of the study area",
    ],
  },
];

const clients = [
  "Woolpert",
  "Sky Futures",
  "Tek Geo",
  "Brunei Survey Dept",
  "Uji Teguh",
  "Infotrax",
  "Ingress",
  "SIRIM",
  "FGV",
  "PKPS",
  "Jurupro",
  "Tiemura",
];

function ExperiencesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Track record"
        title="Experiences"
        subtitle="A selection of projects delivered across infrastructure, energy, forestry and municipal sectors."
      />

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Key Project Experiences
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Work we're proud of
          </h2>
        </div>
        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group grid gap-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:border-accent hover:shadow-[var(--shadow-elegant)] sm:gap-8 sm:p-6 md:grid-cols-[0.45fr,1fr] md:p-8"
            >
              <ImagePlaceholder
                src={p.image}
                alt={p.title}
                label="Project image"
                className="h-52 w-full"
                rounded="rounded-xl"
              />
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:mt-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Clients
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <LogoPlaceholder key={c} name={c} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
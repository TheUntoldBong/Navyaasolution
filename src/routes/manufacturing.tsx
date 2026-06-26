import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import manufacturing from "@/assets/manufacturing.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Navyaa Solutions Plant & Process" },
      { name: "description", content: "Inside Navyaa Solutions's modern cleaning chemical manufacturing plant — stainless steel reactors, batch traceability, and quality at every step." },
      { property: "og:title", content: "Manufacturing — Navyaa Solutions" },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: Manufacturing,
});

const steps = [
  ["Research", "Our chemists scan global literature and customer feedback to identify formulation opportunities."],
  ["Development", "Lab-scale trials, accelerated stability and performance benchmarking."],
  ["Manufacturing", "Stainless-steel reactors with controlled temperature, mixing and batch traceability."],
  ["Quality Testing", "Every batch tested for active matter, pH, density, microbial load and performance."],
  ["Packaging", "Automated filling lines with tamper-evident closures and accurate dosing."],
  ["Distribution", "Pan-India dispatch through our distributor and logistics network."],
];

function Manufacturing() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Inside the plant"
        title="Modern manufacturing, traceable at every step"
        subtitle="Our Kolkata facility is built for consistent, large-scale production of high-quality cleaning chemistry."
        crumbs={[{ label: "Home", to: "/" }, { label: "Manufacturing" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={manufacturing} alt="Manufacturing facility" className="rounded-3xl shadow-elegant" loading="lazy" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Built for scale</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Stainless steel, batch control, full traceability</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our plant features dedicated lines for acidic, alkaline and neutral formulations to eliminate cross-contamination. Each batch is digitally logged from raw material weighing through filling, with retention samples archived for compliance.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Dedicated lines per chemistry family","Automated weighing & dosing","Batch-level QC with retention samples","Capacity for 200 L barrels to retail packs"].map(f => (
              <li key={f} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-secondary" /> {f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our six-step process</h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map(([t, d], i) => (
              <div key={t} className="rounded-3xl border bg-card p-7 shadow-soft hover:shadow-elegant transition relative">
                <div className="absolute -top-4 -left-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white font-bold shadow-glow">{i + 1}</div>
                <h3 className="mt-3 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

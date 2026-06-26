import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import quality from "@/assets/quality.jpg";
import { Award, BadgeCheck, FlaskConical, ShieldCheck, Leaf, Microscope } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Certifications — Navyaa Solutions" },
      { name: "description", content: "National Test House certified formulations, in-house QC laboratory and biodegradable, eco-friendly chemistry." },
      { property: "og:title", content: "Quality — Navyaa Solutions" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

function Quality() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality"
        title="Trusted formulations. Tested every batch."
        subtitle="We don't just promise quality — we measure it, document it, and stake our reputation on it."
        crumbs={[{ label: "Home", to: "/" }, { label: "Quality" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">In-house QC laboratory</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Every batch. Every parameter.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our quality control laboratory tests every production batch for active matter, pH, density, viscosity, foam profile and microbial load. Retention samples are archived for traceability, and we provide certificates of analysis on request.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {[
              { Icon: FlaskConical, t: "Chemical Analysis" },
              { Icon: Microscope, t: "Microbial Testing" },
              { Icon: ShieldCheck, t: "Performance Tests" },
              { Icon: Leaf, t: "Eco-Compliance" },
            ].map(({ Icon, t }) => (
              <div key={t} className="rounded-2xl border bg-card p-4 flex items-center gap-3 shadow-soft">
                <Icon className="h-6 w-6 text-primary" />
                <span className="font-semibold text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <img src={quality} alt="Quality control lab" className="rounded-3xl shadow-elegant" loading="lazy" />
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Certifications & approvals</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Award, t: "National Test House", d: "Selected formulations certified by NTH." },
              { Icon: BadgeCheck, t: "Quality Assurance", d: "Batch-traceable QC at every stage." },
              { Icon: Leaf, t: "Eco-Friendly", d: "Biodegradable surfactants, low VOC." },
              { Icon: FlaskConical, t: "Laboratory Tested", d: "In-house and third-party verification." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-3xl border bg-card p-7 shadow-soft hover:shadow-elegant transition text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

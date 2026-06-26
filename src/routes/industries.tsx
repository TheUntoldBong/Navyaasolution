import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { industries } from "@/lib/data";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — Navyaa Solutions" },
      { name: "description", content: "From hospitals to hotels, factories to schools — Navyaa Solutions supplies cleaning and hygiene chemistry across India's industries." },
      { property: "og:title", content: "Industries — Navyaa Solutions" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Industries"
        title="Hygiene programmes for every sector"
        subtitle="Specialised product mixes, dilution protocols and packaging tailored to the realities of each industry."
        crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((i) => {
            const Icon = (Icons as any)[i.icon] ?? Icons.Building;
            return (
              <div key={i.name} className="group rounded-3xl border bg-card p-7 shadow-soft hover:shadow-elegant transition hover:-translate-y-1">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow group-hover:scale-110 transition"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-5 text-xl font-semibold">{i.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {["Floor & surface care","Sanitation & disinfection","Specialty cleaners"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground"><CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px pb-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-10 md:p-14 grid lg:grid-cols-[2fr_1fr] gap-8 items-center shadow-elegant">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Custom hygiene programme for your industry</h2>
            <p className="mt-3 text-white/80">Our specialists design product mixes that meet your compliance, throughput and budget needs.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-primary rounded-full h-12 px-7 justify-self-start lg:justify-self-end"><Link to="/quote">Talk to an expert <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}

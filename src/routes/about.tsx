import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { stats } from "@/lib/data";
import aboutLab from "@/assets/about-lab.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import { Award, Leaf, Target, Eye, Heart, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chemii-Synth — 45+ Years of Cleaning Innovation" },
      { name: "description", content: "Established in 1977, Chemii-Synth is a Kolkata-based manufacturer of eco-friendly industrial and household cleaning chemicals trusted across India." },
      { property: "og:title", content: "About Chemii-Synth" },
      { property: "og:description", content: "Manufacturer of eco-friendly cleaning chemicals since 1977." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="Four decades of cleaning innovation, made in India."
        subtitle="From a small workshop in Kolkata in 1977 to a trusted national supplier — Chemii-Synth's story is one of formulation rigour, customer focus, and an early commitment to eco-friendly chemistry."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={aboutLab} alt="Research lab" className="rounded-3xl shadow-elegant w-full" loading="lazy" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Who we are</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">A family-run manufacturer with a national footprint</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Chemii-Synth was founded in 1977 with a clear conviction: that high-performance cleaning chemistry should not come at the cost of human or environmental health. Over four decades we have grown alongside India's hospitality, healthcare, manufacturing and facility-management industries — formulating, testing and supplying more than 100 cleaning and hygiene products.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today, our products clean operating theatres, five-star kitchens, IT campuses, schools, factory floors and millions of Indian homes. Every formulation begins in our R&D lab and ends only when it has passed batch-level quality control.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Target, t: "Our Mission", d: "Deliver high-performance, eco-friendly cleaning chemistry that's safe for users and the planet." },
              { Icon: Eye, t: "Our Vision", d: "Be India's most trusted partner for hygiene — from corporate facilities to family homes." },
              { Icon: Heart, t: "Our Values", d: "Integrity, scientific rigour, customer empathy, and respect for the environment." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-3xl border bg-card p-8 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">A timeline</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Milestones on our journey</h2>
          <ol className="mt-8 space-y-6 border-l-2 border-primary/20 pl-6">
            {[
              ["1977","Founded in Kolkata with a focus on industrial cleaning."],
              ["1989","Expanded into household range; reached 50+ corporate clients."],
              ["2001","Modernised plant with stainless-steel reactors and batch control."],
              ["2012","Launched biodegradable range; first NTH certifications."],
              ["2019","Crossed 500 corporate clients across India."],
              ["2024","100+ formulations; pan-India distribution; OEM division."],
            ].map(([y, t]) => (
              <li key={y} className="relative">
                <span className="absolute -left-[31px] grid h-5 w-5 place-items-center rounded-full bg-gradient-primary text-white text-[10px] font-bold">•</span>
                <div className="text-sm font-bold text-primary">{y}</div>
                <div className="text-sm text-muted-foreground mt-1">{t}</div>
              </li>
            ))}
          </ol>
        </div>
        <img src={manufacturing} alt="Manufacturing facility" className="order-1 lg:order-2 rounded-3xl shadow-elegant" loading="lazy" />
      </section>

      <section className="mx-auto max-w-7xl container-px pb-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-10 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl container-px pb-20 text-center">
        <ShieldCheck className="h-12 w-12 mx-auto text-secondary" />
        <h2 className="mt-4 text-3xl font-bold">Ready to switch to a smarter cleaning partner?</h2>
        <p className="mt-3 text-muted-foreground">We'd love to show you how our products can elevate your facility's hygiene and reduce cost-per-clean.</p>
        <Button asChild className="mt-6 bg-gradient-primary text-white rounded-full h-11 px-7"><Link to="/quote">Request a quote</Link></Button>
      </section>
    </SiteLayout>
  );
}

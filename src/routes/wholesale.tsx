import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import wholesale from "@/assets/wholesale.jpg";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck, Boxes, TrendingDown, Handshake } from "lucide-react";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Retail & Wholesale — Navyaa Solutions Distribution" },
      { name: "description", content: "Partner with Navyaa Solutions as a distributor, dealer or retailer. Competitive pricing, full marketing support, and pan-India logistics." },
      { property: "og:title", content: "Wholesale — Navyaa Solutions" },
      { property: "og:url", content: "/wholesale" },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: Wholesale,
});

function Wholesale() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Wholesale & Retail"
        title="Become a Navyaa Solutions distribution partner"
        subtitle="From single-state distributors to multi-city dealers — we partner with serious channel players to grow together."
        crumbs={[{ label: "Home", to: "/" }, { label: "Wholesale" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={wholesale} alt="Wholesale warehouse" className="rounded-3xl shadow-elegant" loading="lazy" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why partner with us</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Direct from manufacturer pricing</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            We work with channel partners across India to bring premium cleaning chemistry to corporate, institutional and retail buyers. As a manufacturer, we offer the margins, the lead times and the support that resellers need.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["Direct manufacturer pricing","Marketing & branding support","Reliable lead times","Wide product portfolio","Territorial exclusivity (subject to terms)","Training and technical assistance"].map(f => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> {f}</li>
            ))}
          </ul>
          <Button asChild className="mt-7 bg-gradient-primary text-white rounded-full h-11 px-6"><Link to="/quote">Apply as partner</Link></Button>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Partner with us in three steps</h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { Icon: Handshake, t: "1. Apply", d: "Share your business details and target territory." },
              { Icon: Boxes, t: "2. Onboard", d: "Sign agreement, agree pricing, receive starter stock." },
              { Icon: Truck, t: "3. Grow", d: "Sell with marketing support and timely replenishment." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="rounded-3xl border bg-card p-8 shadow-soft hover:shadow-elegant transition">
                <Icon className="h-9 w-9 text-primary" />
                <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20">
        <div className="rounded-3xl bg-gradient-hero text-white p-10 md:p-14 grid lg:grid-cols-[2fr_1fr] gap-8 items-center shadow-elegant">
          <div>
            <TrendingDown className="h-9 w-9 text-secondary-glow" />
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Better margins. Better service.</h2>
            <p className="mt-3 text-white/80">Talk to our channel team about pricing and territory.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-primary rounded-full h-12 px-7 justify-self-start lg:justify-self-end"><Link to="/contact">Contact channel team</Link></Button>
        </div>
      </section>
    </SiteLayout>
  );
}

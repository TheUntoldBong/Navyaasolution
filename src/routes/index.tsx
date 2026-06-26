import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, ShieldCheck, Leaf, Award, Truck, FlaskConical, PackageCheck, CheckCircle2, Quote, ChevronRight, PlayCircle, Sparkles } from "lucide-react";
import * as Icons from "lucide-react";
import { products, categories, industries, stats, faqs, testimonials, blogPosts } from "@/lib/data";
import hero from "@/assets/hero-factory.jpg";
import aboutLab from "@/assets/about-lab.jpg";
import productsHero from "@/assets/products-hero.jpg";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navyaa Solutions — Kolkata-based manufacturer of cleaning and hygiene solutions" },
      { name: "description", content: "Premium manufacturer of eco-friendly cleaning chemicals for industries, hospitals, hotels and homes. Pan-India delivery, OEM manufacturing, NTH tested." },
      { property: "og:title", content: "Navyaa Solutions — Cleaning & Hygiene Since 1977" },
      { property: "og:description", content: "Eco-friendly industrial and household cleaning products manufactured in India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function useCount(target: string, start: boolean) {
  const [val, setVal] = useState("0");
  useEffect(() => {
    if (!start) return;
    const m = target.match(/(\d+)([\D]*)$/);
    if (!m) { setVal(target); return; }
    const num = parseInt(m[1], 10); const suffix = m[2];
    const prefix = target.slice(0, target.length - m[0].length);
    const dur = 1400; const t0 = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(prefix + Math.round(num * e) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return val;
}

function StatBlock({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const v = useCount(value, seen);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text">{v}</div>
      <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-dark text-white">
        <img src={hero} alt="Modern cleaning chemical manufacturing facility" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1088} />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/75 to-primary/40" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 h-80 w-80 rounded-full bg-primary-glow/40 blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
        </div>

        <div className="relative mx-auto max-w-7xl container-px pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              Trusted by 500+ corporate clients across India
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-up">
              Trusted Cleaning <br />
              <span className="bg-gradient-to-r from-secondary-glow via-secondary to-primary-glow bg-clip-text text-transparent">& Hygiene Solutions</span>
              <br /> Since 1977
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75 animate-fade-up">
              Kolkata-based manufacturer of cleaning and hygiene solutions with a legacy dating back to 1977. The company manufactures a wide range of eco-friendly and biodegradable cleaning products for both industrial/institutional and domestic applications. 
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
              <Button asChild size="lg" className="bg-gradient-primary text-white shadow-elegant h-12 px-7 rounded-full">
                <Link to="/products">Explore Products <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <Link to="/quote">Request a Quote</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/70 animate-fade-up">
              {[["Leaf","Biodegradable"],["ShieldCheck","NTH tested"],["Truck","Pan-India delivery"],["Award","45+ years"]].map(([icon,label]) => {
                const Icon = (Icons as any)[icon];
                return (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-secondary-glow" /> {label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating product badge */}
          <div className="hidden lg:block absolute right-8 bottom-8 animate-float">
            <div className="glass-dark rounded-2xl p-5 shadow-elegant max-w-xs">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary"><FlaskConical className="h-6 w-6" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/55">Now Available</div>
                  <div className="text-base font-semibold">100+ formulations</div>
                </div>
              </div>
              <p className="mt-3 text-xs text-white/70">From kitchen care to industrial degreasers — one trusted partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface border-b">
        <div className="mx-auto max-w-7xl container-px py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => <StatBlock key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary opacity-20 blur-3xl rounded-3xl" />
          <img src={aboutLab} alt="Navyaa Solutions research laboratory" className="relative rounded-3xl shadow-elegant w-full object-cover" loading="lazy" width={1408} height={1008} />
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-elegant hidden md:block">
            <div className="flex items-center gap-3">
              <Award className="h-9 w-9 text-secondary" />
              <div>
                <div className="text-xl font-bold">Since 1977</div>
                <div className="text-xs text-muted-foreground">45+ years of formulation excellence</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">About Navyaa Solutions</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Four decades of <span className="gradient-text">cleaning innovation</span></h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Established in 1977 in Kolkata, Navyaa Solutions has grown into one of eastern India's most trusted manufacturers of cleaning and hygiene chemicals. We combine rigorous research with eco-conscious formulation to serve hospitals, hotels, factories and millions of homes.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {[
              ["Our Mission", "Deliver high-performance, eco-friendly cleaning chemistry that's safe for users and the planet."],
              ["Our Vision", "Be India's most trusted partner for hygiene — from corporate facilities to family homes."],
              ["Research", "Continuous R&D into biodegradable surfactants and concentrated formulations."],
              ["Manufacturing", "Modern plant, batch-traceable production and quality assurance at every step."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border bg-card p-5 shadow-soft">
                <h3 className="text-sm font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8 bg-gradient-primary text-white shadow-elegant rounded-full h-11 px-6">
            <Link to="/about">Read more <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Range</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Product categories for every space</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">View all products <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c, i) => {
              const Icon = (Icons as any)[c.icon] ?? Sparkles;
              return (
                <Link to="/products" key={c.name} className="group relative overflow-hidden rounded-2xl border bg-card p-5 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1" style={{ animationDelay: `${i * 30}ms` }}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition" />
                  <div className="relative">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-white transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{c.name}</h3>
                    <div className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                      Explore <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured Products</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Engineered for performance, formulated for safety</h2>
          <p className="mt-4 text-muted-foreground">Best-selling formulations across our industrial and household range.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.slice(0, 6).map((p) => (
            <Card key={p.slug} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1.5">
              <div className="relative aspect-square bg-gradient-to-br from-surface to-accent overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-8 group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 rounded-full bg-secondary/95 text-white text-[10px] font-semibold px-3 py-1 uppercase tracking-wider">{p.category}</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground"><CheckCircle2 className="h-3.5 w-3.5 text-secondary" /> {f}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-2">
                  <Button asChild size="sm" className="bg-gradient-primary text-white rounded-full"><Link to="/products/$slug" params={{ slug: p.slug }}>View Details</Link></Button>
                  <Button asChild size="sm" variant="outline" className="rounded-full"><Link to="/quote">Request Quote</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative bg-dark text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-primary blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-glow">Industries We Serve</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">From hospitals to housing societies</h2>
            <p className="mt-4 text-white/70">Custom hygiene programmes for the spaces that matter most.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((i) => {
              const Icon = (Icons as any)[i.icon] ?? Sparkles;
              return (
                <div key={i.name} className="group glass-dark rounded-2xl p-5 hover:bg-white/10 transition">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 text-base font-semibold">{i.name}</h3>
                  <p className="mt-1 text-xs text-white/65">{i.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why Choose Us</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Twelve reasons to choose Navyaa Solutions</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            ["Award", "45+ Years Experience", "Decades of formulation know-how."],
            ["Leaf", "Eco-Friendly Products", "Biodegradable, low-impact chemistry."],
            ["FlaskConical", "Biodegradable Formula", "Surfactants chosen for the planet."],
            ["ShieldCheck", "Quality Assured", "Batch-tested QC at every stage."],
            ["BadgeCheck", "NTH Tested", "Independently certified efficacy."],
            ["Users", "Experienced Team", "Chemists, engineers, hygiene experts."],
            ["Factory", "Modern Manufacturing", "Stainless steel reactors, clean lines."],
            ["PackageCheck", "Bulk Supply", "From 1 L bottles to 200 L barrels."],
            ["Boxes", "OEM Manufacturing", "Build under your own brand."],
            ["TrendingDown", "Competitive Pricing", "Direct from manufacturer."],
            ["Truck", "Pan-India Delivery", "Reliable distribution network."],
            ["Headphones", "Customer Support", "Real humans, real help."],
          ].map(([icon, t, d]) => {
            const Icon = (Icons as any)[icon] ?? Sparkles;
            return (
              <div key={t} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-elegant transition group">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-5 text-base font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MANUFACTURING PROCESS TIMELINE */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">From lab to your facility</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Our manufacturing process</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
            <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-px bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />
            {["Research","Development","Manufacturing","Quality Testing","Packaging","Distribution"].map((step, i) => (
              <div key={step} className="relative text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-white font-bold shadow-elegant relative z-10">{i+1}</div>
                <h3 className="mt-4 text-sm font-semibold">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button asChild variant="outline" className="rounded-full h-11 px-6"><Link to="/manufacturing">See our facility <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Voices of trust</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">What our clients say</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border bg-card p-8 shadow-soft hover:shadow-elegant transition relative overflow-hidden">
              <Quote className="absolute -top-2 -left-2 h-24 w-24 text-primary/5" />
              <p className="relative text-foreground/85 leading-relaxed">"{t.quote}"</p>
              <div className="relative mt-6 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-primary text-white font-bold">{t.name.split(" ").map(n=>n[0]).join("")}</div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-3xl container-px">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Frequently Asked</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Questions, answered</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`} className="rounded-2xl border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* BLOG */}
      <section className="mx-auto max-w-7xl container-px py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">From the blog</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Insights & resources</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">All articles <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-7">
          {blogPosts.slice(0, 3).map((b) => (
            <article key={b.slug} className="group rounded-3xl border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition hover:-translate-y-1">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                <img src={productsHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-overlay" loading="lazy" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-wider">{b.category}</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{b.date}</div>
                <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read more <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl container-px pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-10 md:p-16 shadow-elegant">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
          </div>
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <PlayCircle className="h-10 w-10 text-secondary-glow" />
              <h2 className="mt-4 text-3xl md:text-5xl font-bold">Need cleaning solutions for your facility?</h2>
              <p className="mt-4 text-white/80 max-w-xl">Talk to our hygiene experts. We'll recommend the right products, the right dilutions, and the right packaging for your scale.</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-12 px-7"><a href="tel:+919830247883">Call Now</a></Button>
              <Button asChild size="lg" className="bg-secondary text-white rounded-full h-12 px-7"><a href="https://wa.me/919830247883">WhatsApp</a></Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"><Link to="/quote">Request Quote</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

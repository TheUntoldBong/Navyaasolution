import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { products, categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Search } from "lucide-react";
import * as Icons from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Cleaning Products — Navyaa Solutions Industrial & Household Range" },
      { name: "description", content: "Browse 100+ cleaning and hygiene products — floor cleaners, disinfectants, degreasers, dish wash, sanitizers and more, in bulk and retail packs." },
      { property: "og:title", content: "Navyaa Solutions Products" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const filtered = useMemo(() => products.filter(p =>
    (!q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()))
    && (!cat || p.category === cat)
  ), [q, cat]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Products"
        title="100+ cleaning & hygiene formulations"
        subtitle="From industrial degreasers to gentle dish wash — explore our complete range, all manufactured in-house and laboratory tested."
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-14">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products by name or category…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-11 h-12 rounded-full" />
          </div>
          <Button variant={cat ? "outline" : "default"} onClick={() => setCat(null)} className="rounded-full h-12 px-6">All</Button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {Array.from(new Set(products.map(p => p.category))).map((c) => (
            <button key={c} onClick={() => setCat(cat === c ? null : c)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition ${cat === c ? "bg-gradient-primary text-white border-transparent" : "bg-background hover:bg-accent"}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p) => (
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
          {filtered.length === 0 && (
            <div className="md:col-span-2 lg:col-span-3 text-center py-20 text-muted-foreground">No products match your search.</div>
          )}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <h2 className="text-2xl md:text-3xl font-bold">All categories</h2>
          <p className="mt-2 text-muted-foreground">Don't see what you need? We custom-formulate on request.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((c) => {
              const Icon = (Icons as any)[c.icon] ?? Icons.Sparkles;
              return (
                <div key={c.name} className="rounded-2xl border bg-card p-5 shadow-soft hover:shadow-elegant transition hover:-translate-y-1">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                  <h3 className="mt-3 text-sm font-semibold">{c.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import type { Product } from "@/lib/data";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, MessageCircle, Phone, ArrowRight, ChevronRight } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      { title: `${loaderData?.product.name ?? "Product"} — Navyaa Solutions` },
      { name: "description", content: loaderData?.product.description ?? "Navyaa Solutions product" },
      { property: "og:title", content: loaderData?.product.name },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `/products/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org", "@type": "Product",
            name: loaderData.product.name,
            description: loaderData.product.description,
            category: loaderData.product.category,
            brand: { "@type": "Brand", name: "Navyaa Solutions" },
          }),
        }]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl container-px py-32 text-center">
        <h1 className="text-4xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex text-primary font-semibold">Back to products</Link>
      </section>
    </SiteLayout>
  ),
  errorComponent: ({ error, reset }) => (
    <SiteLayout>
      <section className="mx-auto max-w-3xl container-px py-32 text-center">
        <h1 className="text-3xl font-bold">Couldn't load product</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-primary text-primary-foreground px-5 py-2">Retry</button>
      </section>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData() as { product: Product };
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <SiteLayout>
      <div className="bg-surface border-b">
        <div className="mx-auto max-w-7xl container-px py-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link><ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-primary">Products</Link><ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{p.name}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl container-px py-14 grid lg:grid-cols-2 gap-14">
        <div className="relative">
          <div className="rounded-3xl bg-gradient-to-br from-surface to-accent p-10 shadow-soft aspect-square grid place-items-center overflow-hidden">
            <img src={p.image} alt={p.name} className="max-h-full object-contain" />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className="rounded-xl border bg-card p-3 aspect-square grid place-items-center cursor-pointer hover:border-primary transition">
                <img src={p.image} alt="" className="max-h-full object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="rounded-full bg-secondary/15 text-secondary text-[10px] font-bold px-3 py-1 uppercase tracking-wider">{p.category}</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold">{p.name}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{p.tagline}</p>
          <p className="mt-5 leading-relaxed">{p.description}</p>

          <div className="mt-7">
            <h3 className="text-sm font-bold uppercase tracking-wider">Key Features</h3>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="h-4 w-4 mt-0.5 text-secondary" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7">
            <h3 className="text-sm font-bold uppercase tracking-wider">Available Packaging</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.packaging.map((pk) => <span key={pk} className="rounded-full border bg-card px-4 py-1.5 text-xs font-semibold">{pk}</span>)}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-primary text-white rounded-full h-12 px-7"><Link to="/quote">Request Quote <ArrowRight className="ml-1.5 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6"><a href="https://wa.me/919830247883"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-6"><a href="tel:+919830247883"><Phone className="mr-2 h-4 w-4" />Call</a></Button>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl container-px grid md:grid-cols-3 gap-6">
          {[
            { t: "Applications", items: p.applications },
            { t: "Usage Instructions", items: [p.usage] },
            { t: "Benefits", items: p.features },
          ].map((b) => (
            <Card key={b.t} className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-primary">{b.t}</h3>
                <ul className="mt-3 space-y-2">
                  {b.items.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 mt-0.5 text-secondary shrink-0" />{x}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold">Downloads & Documentation</h2>
            <p className="mt-2 text-muted-foreground">Get technical data sheets, MSDS and dilution charts.</p>
            <div className="mt-6 space-y-3">
              {["Technical Data Sheet (PDF)","Material Safety Data Sheet (MSDS)","Dilution Chart"].map((d) => (
                <a key={d} href="#" className="flex items-center justify-between rounded-2xl border bg-card p-5 hover:border-primary transition group">
                  <span className="text-sm font-semibold">{d}</span>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Request a quote</h2>
            <p className="mt-2 text-muted-foreground">Tell us your requirement — we'll get back within one business day.</p>
            <div className="mt-6 rounded-3xl border bg-card p-6 shadow-soft">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl container-px">
          <h2 className="text-2xl md:text-3xl font-bold">Related products</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-7">
            {related.map((r) => (
              <Card key={r.slug} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1.5">
                <div className="relative aspect-square bg-gradient-to-br from-surface to-accent overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-8 group-hover:scale-105 transition" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{r.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.tagline}</p>
                  <Button asChild size="sm" className="mt-4 bg-gradient-primary text-white rounded-full"><Link to="/products/$slug" params={{ slug: r.slug }}>View Details</Link></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

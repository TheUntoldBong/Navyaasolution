import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { blogPosts } from "@/lib/data";
import productsHero from "@/assets/products-hero.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Cleaning, Hygiene & Facility Insights | Chemii-Synth" },
      { name: "description", content: "Industry insights, cleaning tips, and hygiene best-practice from Chemii-Synth's specialists." },
      { property: "og:title", content: "Blog — Chemii-Synth" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  const [first, ...rest] = blogPosts;
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Cleaning & hygiene, demystified"
        subtitle="Practical articles from our R&D and technical service teams — for facility managers, housekeepers and procurement leads."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-16">
        <article className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border bg-card p-6 md:p-10 shadow-soft">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
            <img src={productsHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/40 mix-blend-multiply" />
            <span className="absolute top-4 left-4 rounded-full bg-white/95 text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-wider">Featured · {first.category}</span>
          </div>
          <div>
            <div className="text-xs text-muted-foreground">{first.date}</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold">{first.title}</h2>
            <p className="mt-4 text-muted-foreground">{first.excerpt}</p>
            <Link to="/blog" className="mt-6 inline-flex items-center gap-1.5 text-primary font-semibold">Read article <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </article>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((b) => (
            <article key={b.slug} className="group rounded-3xl border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition hover:-translate-y-1">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary to-secondary relative">
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
    </SiteLayout>
  );
}

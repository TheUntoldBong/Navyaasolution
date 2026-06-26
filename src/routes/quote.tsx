import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Navyaa Solutions" },
      { name: "description", content: "Request a personalised quote for cleaning chemicals — bulk, retail or OEM." },
      { property: "og:title", content: "Request a Quote — Navyaa Solutions" },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us what you need — we'll quote within 24 hours"
        subtitle="Share product, quantity and delivery location. Our team will recommend the right pack size, dilution and pricing."
        crumbs={[{ label: "Home", to: "/" }, { label: "Request Quote" }]}
      />

      <section className="mx-auto max-w-3xl container-px py-16">
        <div className="rounded-3xl border bg-card p-6 md:p-10 shadow-elegant">
          <QuoteForm />
        </div>
      </section>
    </SiteLayout>
  );
}

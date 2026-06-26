import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Navyaa Solutions" },
      { name: "description", content: "Terms and conditions for use of the Navyaa Solutions website and supply of products." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <PageHero title="Terms & Conditions" crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]} />
      <article className="mx-auto max-w-3xl container-px py-16">
        <p className="text-muted-foreground">Last updated: June 26, 2026</p>
        <h2 className="mt-8 text-2xl font-bold">1. Use of website</h2>
        <p className="mt-3 text-muted-foreground">By accessing this website you agree to use it lawfully and not in a way that affects others' use. Content is provided for general information about our products.</p>
        <h2 className="mt-8 text-2xl font-bold">2. Product information</h2>
        <p className="mt-3 text-muted-foreground">Product descriptions, dilutions and packaging are indicative; actual specifications are confirmed at the time of supply via our technical data sheet.</p>
        <h2 className="mt-8 text-2xl font-bold">3. Quotations & orders</h2>
        <p className="mt-3 text-muted-foreground">Quotations are valid for 15 days unless stated otherwise. Orders are subject to acceptance and availability.</p>
        <h2 className="mt-8 text-2xl font-bold">4. Intellectual property</h2>
        <p className="mt-3 text-muted-foreground">All content, logos and product names are property of Navyaa Solutions or used with permission. No reproduction without written consent.</p>
        <h2 className="mt-8 text-2xl font-bold">5. Limitation of liability</h2>
        <p className="mt-3 text-muted-foreground">We are not liable for indirect or consequential losses arising from website use. Always follow the safety instructions on product labels.</p>
        <h2 className="mt-8 text-2xl font-bold">6. Governing law</h2>
        <p className="mt-3 text-muted-foreground">These terms are governed by the laws of India and subject to the jurisdiction of Kolkata courts.</p>
      </article>
    </SiteLayout>
  );
}

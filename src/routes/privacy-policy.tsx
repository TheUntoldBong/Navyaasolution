import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Navyaa Solutions" },
      { name: "description", content: "How Navyaa Solutions collects, uses and protects your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <SiteLayout>
      <PageHero title="Privacy Policy" crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <article className="mx-auto max-w-3xl container-px py-16 prose prose-slate prose-headings:font-bold prose-headings:tracking-tight">
        <p className="text-muted-foreground">Last updated: June 26, 2026</p>
        <h2 className="text-2xl font-bold mt-8">1. Information we collect</h2>
        <p className="mt-3">We collect information you provide via our inquiry and quote forms (name, company, email, phone, location and your requirement), along with anonymised analytics about how visitors use our site.</p>
        <h2 className="text-2xl font-bold mt-8">2. How we use it</h2>
        <p className="mt-3">To respond to your inquiry, prepare quotations, deliver products, and improve our website. We do not sell your data.</p>
        <h2 className="text-2xl font-bold mt-8">3. Cookies</h2>
        <p className="mt-3">We use minimal cookies for site functionality and analytics. You can disable them in your browser.</p>
        <h2 className="text-2xl font-bold mt-8">4. Data sharing</h2>
        <p className="mt-3">We share data only with service providers (e.g. logistics, payment) strictly to fulfil your request, and where required by law.</p>
        <h2 className="text-2xl font-bold mt-8">5. Your rights</h2>
        <p className="mt-3">Contact us at info@Navyaa Solutions.co.in to access, correct, or delete your information.</p>
        <h2 className="text-2xl font-bold mt-8">6. Contact</h2>
        <p className="mt-3">Navyaa Solutions, Kolkata, India — info@Navyaa Solutions.co.in</p>
      </article>
    </SiteLayout>
  );
}

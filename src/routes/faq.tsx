import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Chemii-Synth" },
      { name: "description", content: "Answers to the most common questions about Chemii-Synth cleaning chemicals, supply, OEM, and technical support." },
      { property: "og:title", content: "FAQ — Chemii-Synth" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }})),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Help Center"
        title="Frequently asked questions"
        subtitle="Can't find what you're looking for? Reach out — our team is happy to help."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />

      <section className="mx-auto max-w-3xl container-px py-20">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="rounded-2xl border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chemii-Synth — Kolkata, India" },
      { name: "description", content: "Get in touch with Chemii-Synth. Address, phone, email, WhatsApp and inquiry form." },
      { property: "og:title", content: "Contact — Chemii-Synth" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        subtitle="Quotes, technical questions, distribution enquiries — our team responds within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl container-px py-20 grid lg:grid-cols-3 gap-6">
        {[
          { Icon: Phone, t: "Call us", d: "+91 98302 47883", href: "tel:+919830247883" },
          { Icon: Mail, t: "Email", d: "navyaasolutions@gmail.com", href: "mailto:navyaasolutions@gmail.com" },
          { Icon: MessageCircle, t: "WhatsApp", d: "+91 98302 47883", href: "https://wa.me/919830247883" },
          { Icon: MapPin, t: "Visit us", d: "Kolkata, West Bengal, India" },
          { Icon: Clock, t: "Hours", d: "Mon–Sat · 9:30 AM – 6:30 PM IST" },
        ].map(({ Icon, t, d, href }) => (
          <a key={t} href={href} className="rounded-3xl border bg-card p-7 shadow-soft hover:shadow-elegant transition flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow shrink-0"><Icon className="h-5 w-5" /></div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t}</h3>
              <p className="mt-1.5 text-lg font-semibold">{d}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="mx-auto max-w-7xl container-px pb-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Send us an inquiry</h2>
          <p className="mt-2 text-muted-foreground">Tell us about your requirement and we'll come back with the right recommendation.</p>
          <div className="mt-6 rounded-3xl border bg-card p-6 md:p-8 shadow-soft">
            <QuoteForm />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Find us</h2>
          <p className="mt-2 text-muted-foreground">Kolkata, West Bengal, India</p>
          <div className="mt-6 rounded-3xl overflow-hidden border shadow-soft aspect-[4/5] lg:aspect-auto lg:h-[560px]">
            <iframe
              title="Chemii-Synth Kolkata"
              src="https://www.google.com/maps?q=Kolkata,India&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, subtitle, crumbs }: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: { label: string; to?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-primary-glow blur-3xl animate-blob" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-secondary blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>
      <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary-glow animate-fade-up">{eyebrow}</p>}
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight max-w-3xl animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/75 max-w-2xl animate-fade-up">{subtitle}</p>}
        <nav className="mt-7 flex items-center gap-1.5 text-sm text-white/70 animate-fade-up">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}

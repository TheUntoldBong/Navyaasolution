import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mail, Phone, Menu, X, Sparkles, Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
   
  { to: "/wholesale", label: "Wholesale" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block bg-dark text-white/85 text-xs">
        <div className="mx-auto max-w-7xl container-px flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="mailto:navyaasolutions@gmail.com" className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5" /> navyaasolutions@gmail.com
            </a>
            <a href="tel:+919830247883" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> +91 9830247883
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a aria-label="Facebook" href="#" className="hover:text-white"><Facebook className="h-3.5 w-3.5" /></a>
            <a aria-label="LinkedIn" href="#" className="hover:text-white"><Linkedin className="h-3.5 w-3.5" /></a>
            <a aria-label="Instagram" href="#" className="hover:text-white"><Instagram className="h-3.5 w-3.5" /></a>
            <Link to="/quote" className="ml-2 inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 font-medium text-white hover:opacity-90">
              Request Quote <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-background/90 backdrop-blur"}`}>
        <div className="mx-auto max-w-7xl container-px flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight">Navyaa Solutions</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">DELIVERING TRUST EVERYTIME</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-accent transition"
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary bg-primary/10" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Button asChild className="bg-gradient-primary text-white shadow-elegant hover:opacity-95">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-background">
            <div className="mx-auto max-w-7xl container-px py-3 flex flex-col">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium border-b last:border-0">
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-3 bg-gradient-primary text-white">
                <Link to="/quote" onClick={() => setOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

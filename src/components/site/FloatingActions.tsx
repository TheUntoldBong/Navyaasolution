import { useEffect, useState } from "react";
import { Phone, Mail, ArrowUp, MessageCircle } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const items = [
    { href: "https://wa.me/919830247883", label: "WhatsApp", Icon: MessageCircle, bg: "bg-[oklch(0.66_0.17_145)]" },
    { href: "tel:+919830247883", label: "Call", Icon: Phone, bg: "bg-primary" },
    { href: "mailto:navyaasolutions@gmail.com", label: "Email", Icon: Mail, bg: "bg-dark" },
  ];
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {items.map(({ href, label, Icon, bg }) => (
        <a key={label} href={href} aria-label={label} className={`group grid h-12 w-12 place-items-center rounded-full text-white shadow-elegant hover:scale-110 transition ${bg}`}>
          <Icon className="h-5 w-5" />
        </a>
      ))}
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Top" className="grid h-12 w-12 place-items-center rounded-full bg-foreground text-background shadow-elegant hover:scale-110 transition animate-fade-in">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, Sparkles, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white/85 mt-24">
      <div className="mx-auto max-w-7xl container-px py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">Navyaa Solutions</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">DELIVERING TRUST EVERYTIME</span>
            </span>
          </Link>
          <p className="mt-5 text-sm text-white/65 max-w-md">
            Kolkata-based manufacturer of cleaning and hygiene solutions with a legacy dating back to 1977. The company manufactures a wide range of eco-friendly and biodegradable cleaning products for both industrial/institutional and domestic applications.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram, Twitter].map((I, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition" aria-label="social">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            {[["/about","About"],["/manufacturing","Manufacturing"],["/quality","Quality"],["/wholesale","Wholesale & Retail"],["/blog","Blog"],["/contact","Contact"]].map(([to,label])=>(
              <li key={to}><Link to={to} className="text-white/65 hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
          <ul className="space-y-2.5 text-sm">
            {["Floor Cleaner","Glass Cleaner","Toilet Cleaner","Dish Wash","Industrial Degreaser","Hand Sanitizer"].map(t=>(
              <li key={t}><Link to="/products" className="text-white/65 hover:text-white">{t}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-secondary"/> Kolkata, West Bengal, India</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-secondary"/> <a href="tel:+919830247883">+91 98302 47883</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-secondary"/> <a href="mailto:navyaasolutions@gmail.com">navyaasolutions@gmail.com</a></li>
          </ul>

          <form className="mt-5" onSubmit={(e)=>e.preventDefault()}>
            <label className="text-xs text-white/60">Subscribe to newsletter</label>
            <div className="mt-2 flex rounded-full bg-white/10 p-1">
              <input type="email" required placeholder="you@company.com" className="flex-1 bg-transparent px-3 text-sm placeholder:text-white/40 outline-none"/>
              <button className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary"><ArrowRight className="h-4 w-4"/></button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <p>© {new Date().getFullYear()} Navyaa Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
            <Link to="/faq" className="hover:text-white">FAQ</Link>
          </div>
          <p>Designed & developed by <a href="https://infinitixinfotech.in" target="_blank" rel="noreferrer" className="text-white hover:underline">Infinitix InfoTech</a></p>
        </div>
      </div>
    </footer>
  );
}

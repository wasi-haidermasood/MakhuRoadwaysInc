import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Truck,
  ShieldCheck,
  Clock,
  MapPinned,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const PHONE_DISPLAY = "+1 (705) 255-0270";
  const PHONE_TEL = "+17052550270";
  const ADDRESS = "136 Sunforest Dr Brampton ON L6Z 4B8";
  const EMAIL = "dispatch@makhuroadwaysinc.com";

  const services = [
    { name: "Dry Van", href: "#services" },
    { name: "Reefer (Temperature Controlled)", href: "#services" },
    { name: "Power Only", href: "#services" },
    { name: "USA & Canada Coverage", href: "#services" },
  ];

  const company = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
  ];

  const highlights = [
    { icon: ShieldCheck, title: "Safe & Reliable", desc: "Freight handled with care" },
    { icon: Clock, title: "On-Time Focus", desc: "Proactive updates & planning" },
    { icon: MapPinned, title: "USA & Canada", desc: "Nationwide lane coverage" },
    { icon: Truck, title: "FTL Solutions", desc: "Dry Van • Reefer • Power Only" },
  ];

  return (
    <>
      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={[
          "fixed bottom-24 right-6 z-[60]",
          "h-12 w-12 rounded-full",
          "bg-red-600 hover:bg-red-700 text-white",
          "shadow-[0_18px_45px_rgba(0,0,0,0.35)]",
          "grid place-items-center",
          "transition-all duration-300",
          showTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <footer className="bg-[#071a2f] text-white relative overflow-hidden">
        {/* subtle animated glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-red-600/15 blur-3xl animate-footerGlow" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-footerGlow2" />

        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand + Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-extrabold tracking-wide">
                Makhu RoadWays <span className="text-red-500">Inc</span>
              </h3>
              <p className="mt-4 text-sm text-white/75 leading-relaxed">
                Dependable truckload transportation across the USA & Canada.
                Clear communication, safe operations, and on-time performance.
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-red-400" />
                  {EMAIL}
                </a>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-red-400" />
                  {PHONE_DISPLAY}
                </a>

                <div className="flex items-start gap-3 text-sm text-white/80">
                  <MapPin className="h-4 w-4 text-red-400 mt-0.5" />
                  <span>{ADDRESS}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 grid place-items-center hover:-translate-y-0.5"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-white/75 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold">Need a quick quote?</div>
                <div className="mt-1 text-xs text-white/70">
                  Tell us origin, destination, and service type.
                </div>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white"
                  size="sm"
                >
                  Request a Quote
                </Button>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Company</h4>
              <ul className="space-y-3">
                {company.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-sm text-white/75 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-xs text-white/60">
                Website: <span className="text-white/80">makhuroadwaysinc.com</span>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Why Choose Us</h4>
              <div className="grid gap-4">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.title}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-colors"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-red-500/10 border border-red-500/20">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{h.title}</div>
                        <div className="text-xs text-white/70 mt-1">{h.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 relative z-10">
          <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-white/60">
                © {new Date().getFullYear()} Makhu RoadWays Inc. All rights reserved.
              </div>

              <div className="flex items-center gap-5">
                <Link to="/privacy-policy" className="text-sm text-white/60 hover:text-white transition-colors">
  Privacy Policy
</Link>
                <Link to="/terms-of-service" className="text-sm text-white/60 hover:text-white transition-colors">
  Terms of Service
</Link>
<Link to="/sitemap" className="text-sm text-white/60 hover:text-white transition-colors">
  Sitemap
</Link>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={scrollToTop}
                  className="text-white hover:bg-white/10"
                >
                  <ArrowUp className="h-4 w-4 mr-1" />
                  Top
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Simple footer glow animations */}
        <style>{`
          .animate-footerGlow { animation: footerGlow 9s ease-in-out infinite alternate; }
          .animate-footerGlow2 { animation: footerGlow2 11s ease-in-out infinite alternate; }

          @keyframes footerGlow {
            from { transform: translate(0,0) scale(1); opacity: .65; }
            to   { transform: translate(30px, 18px) scale(1.12); opacity: .9; }
          }
          @keyframes footerGlow2 {
            from { transform: translate(0,0) scale(1); opacity: .4; }
            to   { transform: translate(-26px, -16px) scale(1.15); opacity: .7; }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-footerGlow, .animate-footerGlow2 { animation: none !important; }
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
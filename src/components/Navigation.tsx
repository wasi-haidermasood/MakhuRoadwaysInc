import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Logo import from src/assets (OK for Vercel)
import logo from "@/assets/navlogo.png";

const PHONE_DISPLAY = "+1 (705) 255-0270";
const PHONE_TEL = "+17052550270";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // active can be "#home" (sections) OR "/letterhead" (page)
  const [active, setActive] = useState<string>("#home");

  const location = useLocation();
  const navigate = useNavigate();

  const sectionItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // const pageItems = [{ name: "Letterhead", to: "/letterhead" }];

  const scrollOnHome = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const headerOffset = 88;
    const top =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const goToSection = (href: string) => {
    // If we are not on homepage, navigate to /#section
    if (location.pathname !== "/") {
      navigate(`/${href}`); // e.g. "/#contact"
      setIsOpen(false);
      return;
    }

    // Already on homepage => smooth scroll
    scrollOnHome(href);
    setActive(href);
    setIsOpen(false);
  };

  const goToPage = (to: string) => {
    navigate(to);
    setActive(to);
    setIsOpen(false);
  };

  // Keep active state in sync with route changes
  useEffect(() => {
    if (location.pathname === "/") {
      setActive(location.hash || "#home");
    } else {
      setActive(location.pathname); // e.g. "/letterhead"
    }
  }, [location.pathname, location.hash]);

  // Auto-highlight active section while scrolling (homepage only)
  useEffect(() => {
    if (location.pathname !== "/") return;

    const ids = sectionItems.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.2, 0.3] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#071a2f] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => goToSection("#home")}
            className="flex items-center"
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="Makhu Road Ways"
              className="h-28 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {sectionItems.map((item) => {
              const isActive = active === item.href;
              return (
                <button
                  key={item.name}
                  onClick={() => goToSection(item.href)}
                  className={[
                    "relative text-sm font-semibold transition-colors",
                    isActive ? "text-red-500" : "text-white/85 hover:text-white",
                  ].join(" ")}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-3 mx-auto h-[2px] w-8 bg-red-500" />
                  )}
                </button>
              );
            })}

            {/* Letterhead page link */}
            {/* {pageItems.map((p) => {
              const isActive = active === p.to;
              return (
                <button
                  key={p.name}
                  onClick={() => goToPage(p.to)}
                  className={[
                    "relative text-sm font-semibold transition-colors",
                    isActive ? "text-red-500" : "text-white/85 hover:text-white",
                  ].join(" ")}
                >
                  {p.name}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-3 mx-auto h-[2px] w-8 bg-red-500" />
                  )}
                </button>
              );
            })} */}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-5">
            <Button
              onClick={() => goToSection("#contact")}
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              Get a Quote
            </Button>

            <div className="flex items-center gap-3">
              <div className="grid place-items-center rounded-full bg-white/10 p-2">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="text-xs text-white/70">Call Us</div>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-sm font-semibold hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen((v) => !v)}
              className="text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 pb-5">
            <div className="flex flex-col gap-3 pt-4">
              {sectionItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => goToSection(item.href)}
                    className={[
                      "text-left py-2 text-sm font-semibold",
                      isActive ? "text-red-500" : "text-white/85 hover:text-white",
                    ].join(" ")}
                  >
                    {item.name}
                  </button>
                );
              })}

              {/* Letterhead in mobile */}
              <Link
                to="/letterhead"
                onClick={() => setIsOpen(false)}
                className={[
                  "py-2 text-sm font-semibold",
                  active === "/letterhead"
                    ? "text-red-500"
                    : "text-white/85 hover:text-white",
                ].join(" ")}
              >
                Letterhead
              </Link>

              <div className="mt-2 flex flex-col gap-3">
                <Button
                  onClick={() => goToSection("#contact")}
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  Get a Quote
                </Button>

                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-3 hover:bg-white/10 transition"
                >
                  <div className="grid place-items-center rounded-full bg-white/10 p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs text-white/70">Call Us</div>
                    <div className="text-sm font-semibold">{PHONE_DISPLAY}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
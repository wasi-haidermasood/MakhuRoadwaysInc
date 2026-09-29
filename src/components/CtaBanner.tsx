import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Truck,
  BadgeCheck,
  Headset,
  MapPin,
  Mouse,
} from "lucide-react";

// Add these images to your project (Vercel-safe) and adjust filenames if needed:
import ctaBg from "@/assets/makhuroadways.png"; // big background truck image
import videoThumb from "@/assets/makhuroadways.png"; // small video thumbnail (optional)

const CTASection = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const headerOffset = 88; // fixed navbar offset
    const top =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const features = [
    {
      icon: Truck,
      title: "Reliable Loads",
      desc: "From trusted brokers and shippers",
    },
    {
      icon: BadgeCheck,
      title: "Better Rates",
      desc: "Maximize earnings with our network",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      desc: "We’re here when you need us",
    },
    {
      icon: MapPin,
      title: "Nationwide Coverage",
      desc: "USA & Canada",
    },
  ];

  return (
    <section id="cta" className="relative overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 scale-[1.02] cta-bg"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlays (match your navy + red theme) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a2f]/95 via-[#071a2f]/75 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/15 to-black/20" />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-10">
        <div className="relative grid lg:grid-cols-2 gap-10 items-center min-h-[72vh]">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-white/75">
              <span className="h-px w-10 bg-red-500/80" />
              Truck Dispatch Services
            </div>

            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              More Loads.
              <span className="block text-red-500">Higher Profits.</span>
            </h2>

            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              We connect truck owners with quality loads across the USA and
              Canada. Let us handle the calls, negotiations, and paperwork — so
              you can focus on the road.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-red-600 hover:bg-red-700 text-white px-7 py-6 rounded-md text-base font-semibold shadow-[0_18px_45px_rgba(239,68,68,0.25)] hover:shadow-[0_22px_55px_rgba(239,68,68,0.35)] transition-all"
              >
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("#services")}
                className="px-7 py-6 rounded-md text-base font-semibold border-white/30 text-white bg-white/5 hover:bg-white/10"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-4 text-xs tracking-[0.25em] uppercase text-white/60">
              Fill out our form <span className="mx-2">/</span> Get matched{" "}
              <span className="mx-2">/</span> Start hauling
            </div>
          </div>

          {/* RIGHT SIDE: handwritten callout + video card */}
          <div className="relative">
            {/* Handwritten-style callout */}
            <div className="hidden lg:block absolute -top-4 right-0 text-right">
              <div className="text-white/90 italic text-2xl leading-snug">
                Your Next Load
                <br />
                Is Just a Call Away!
              </div>
              <div className="mt-2 ml-auto h-[2px] w-44 bg-red-500/80" />
            </div>

            {/* Video thumbnail card */}
            <div className="lg:absolute lg:bottom-0 lg:right-0">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#071a2f]/55 backdrop-blur-md px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="relative h-16 w-28 overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={videoThumb}
                    alt="Watch how we work"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-red-600/90 play-pulse">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="pr-2">
                  <div className="text-sm font-semibold">Watch How We Work</div>
                  <div className="text-xs text-white/70">2 min video</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STRIP (bottom) */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-[#071a2f]/65 backdrop-blur-md px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-500/10 border border-red-500/20">
                    <Icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-white/70">{f.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll down indicator */}
          <div className="mt-7 flex items-center justify-center gap-3 text-xs tracking-[0.35em] uppercase text-white/60">
            <Mouse className="h-4 w-4" />
            Scroll Down
            <span className="inline-block h-2 w-2 rotate-45 border-b border-r border-white/50 scroll-caret" />
          </div>
        </div>
      </div>

      {/* Small built-in animations (no Tailwind config needed) */}
      <style>{`
        .cta-bg { animation: ctaZoom 18s ease-in-out infinite alternate; }
        @keyframes ctaZoom {
          from { transform: scale(1.02); }
          to { transform: scale(1.07); }
        }

        .play-pulse { animation: playPulse 1.6s ease-in-out infinite; }
        @keyframes playPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239,68,68,0.45); }
          50% { transform: scale(1.06); box-shadow: 0 0 0 12px rgba(239,68,68,0); }
        }

        .scroll-caret { animation: caretBob 1.1s ease-in-out infinite; }
        @keyframes caretBob {
          0%, 100% { transform: translateY(0) rotate(45deg); opacity: 0.55; }
          50% { transform: translateY(4px) rotate(45deg); opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-bg, .play-pulse, .scroll-caret { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default CTASection;
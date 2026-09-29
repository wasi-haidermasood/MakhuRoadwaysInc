import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Truck, ShieldCheck, Clock, MapPin, Headset } from "lucide-react";

// Import hero background from src/assets (Vercel-safe). Change filename as needed:
import heroBg from "@/assets/heroimage.png";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    // offset for your fixed navbar
    const headerOffset = 88;
    const top =
      (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="home" className="w-full">
      {/* HERO (image + overlay) */}
      <div className="relative pt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlays like the screenshot */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06162a]/95 via-[#06162a]/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/15 to-black/25" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="min-h-[72vh] flex items-center">
            {/* Left content */}
            <div className="max-w-2xl text-white">
              <div className="text-sm md:text-base tracking-[0.35em] uppercase text-white/85">
                Makhu RoadWays Inc
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05]">
                YOUR TRUSTED{" "}
                <span className="block">
                  <span className="text-red-500">TRUCK LOAD</span>{" "}
                  <span className="text-white">CARRIER</span>
                </span>
              </h1>

              <p className="mt-5 text-lg md:text-xl text-white/90">
                On time. Every time. Across every mile.
              </p>

              <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed">
                We specialize in full truckload (FTL) transportation, delivering your freight safely,
                securely, and on schedule.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-red-600 hover:bg-red-700 text-white px-7 py-6 rounded-md text-base font-semibold"
                >
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => scrollToSection("#about")}
                  className="px-7 py-6 rounded-md text-base font-semibold border-white/30 text-white bg-white/5 hover:bg-white/10"
                >
                  Learn More <Play className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom-right script text like screenshot */}
          <div className="pb-10 flex justify-end">
            <div className="text-white/85 italic text-lg md:text-2xl font-medium">
              Moving Your Business Forward
              <div className="mt-2 h-[2px] w-48 bg-red-500/80 ml-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE STRIP (below hero) */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 py-10">
            {[
              {
                icon: Truck,
                title: "Full Truckload (FTL)",
                desc: "Dedicated trucks for your valuable freight.",
              },
              {
                icon: ShieldCheck,
                title: "Safe & Reliable",
                desc: "Your cargo is our priority.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                desc: "We keep your supply chain moving.",
              },
              {
                icon: MapPin,
                title: "Nationwide Coverage",
                desc: "From coast to coast.",
              },
              {
                icon: Headset,
                title: "24/7 Support",
                desc: "Always here when you need us.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={[
                    "px-6 py-6 text-center",
                    "border-slate-200",
                    idx !== 0 ? "lg:border-l" : "",
                    idx !== 0 ? "sm:border-l lg:border-l" : "",
                  ].join(" ")}
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-slate-50">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
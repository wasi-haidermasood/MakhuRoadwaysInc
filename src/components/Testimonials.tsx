import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, Truck, MapPin, Clock, ArrowRight } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

// Background from your src/assets (Vercel-safe). Adjust filename as needed:
import bg from "@/assets/makhuroadways.png";

/**
 * Online driver photos (example Unsplash URLs).
 * Swap with your preferred images anytime.
 */
const driver1 =
  "https://images.unsplash.com/photo-1603575448365-5b8f2b7c9b7b?auto=format&fit=crop&w=300&q=80";
const driver2 =
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80";
const driver3 =
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?auto=format&fit=crop&w=300&q=80";

/** Animated route/map decoration (matches your navy + red theme) */
function AnimatedMapRoute() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
      <div className="mx-auto max-w-7xl px-4 relative">
        <svg
          className="absolute bottom-4 left-0 w-[560px] max-w-[96vw] opacity-75"
          viewBox="0 0 560 240"
          fill="none"
        >
          <defs>
            <linearGradient id="routeGrad" x1="0" y1="0" x2="560" y2="0">
              <stop offset="0" stopColor="rgba(239,68,68,0.15)" />
              <stop offset="0.35" stopColor="rgba(239,68,68,0.95)" />
              <stop offset="1" stopColor="rgba(239,68,68,0.15)" />
            </linearGradient>
          </defs>

          {/* subtle “map lines” */}
          <path
            d="M50 160 C95 120, 130 135, 170 105 C215 70, 255 95, 295 65 C340 32, 400 60, 455 35 C500 15, 525 25, 540 20"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="2"
          />
          <path
            d="M70 195 C130 165, 165 175, 215 150 C265 124, 310 150, 355 120 C405 85, 460 120, 525 95"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />

          {/* animated dotted route */}
          <path
            className="route-dash"
            d="M80 205 C145 165, 185 178, 235 150 C290 120, 330 150, 375 120 C430 88, 475 110, 520 85"
            stroke="url(#routeGrad)"
            strokeWidth="3.5"
            strokeDasharray="6 14"
            strokeLinecap="round"
          />

          {/* pins + pulse */}
          {[
            { cx: 80, cy: 205 },
            { cx: 235, cy: 150 },
            { cx: 375, cy: 120 },
            { cx: 520, cy: 85 },
          ].map((p, i) => (
            <g key={i}>
              <circle className="pin-pulse" cx={p.cx} cy={p.cy} r="14" fill="rgba(239,68,68,1)" />
              <circle cx={p.cx} cy={p.cy} r="6" fill="rgba(239,68,68,1)" />
              <circle cx={p.cx} cy={p.cy} r="2.2" fill="white" opacity="0.9" />
            </g>
          ))}

          {/* Self-contained CSS animations (no Tailwind config needed) */}
          <style>{`
            .route-dash {
              animation: routeMove 6s linear infinite;
            }
            @keyframes routeMove {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -200; }
            }

            .pin-pulse {
              transform-box: fill-box;
              transform-origin: center;
              opacity: 0.18;
              animation: pinPulse 1.8s ease-out infinite;
            }
            @keyframes pinPulse {
              0% { transform: scale(0.65); opacity: 0.22; }
              55% { transform: scale(1.15); opacity: 0.08; }
              100% { transform: scale(1.35); opacity: 0; }
            }

            @media (prefers-reduced-motion: reduce) {
              .route-dash, .pin-pulse { animation: none !important; }
            }
          `}</style>
        </svg>
      </div>
    </div>
  );
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael R",
      role: "Owner Operator",
      image: driver1,
      rating: 5,
      text:
        "Makhu RoadWays keeps everything smooth—clear updates, reliable planning, and quick responses on the road. I stay loaded and moving.",
      tagLeft: "Freight Haulage",
      tagRight: "3+ Years",
    },
    {
      name: "Robert T",
      role: "Owner Operator",
      image: driver2,
      rating: 5,
      text:
        "Professional, consistent, and easy to work with. Great communication and dependable timelines. Best experience I’ve had.",
      tagLeft: "Dry Van",
      tagRight: "2+ Years",
    },
    {
      name: "David L",
      role: "Owner Operator",
      image: driver3,
      rating: 5,
      text:
        "From pickup to delivery everything was organized. Solid support, clear communication, and smooth operations. Highly recommend.",
      tagLeft: "Reefer",
      tagRight: "1+ Year",
    },
  ];

  // Theme-friendly stats (navy + red)
  const { count: onTime, ref: onTimeRef } = useCountUp({ end: 98 });
  const { count: loads, ref: loadsRef } = useCountUp({ end: 1200 });
  const { count: coverage, ref: coverageRef } = useCountUp({ end: 48 });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;

    const headerOffset = 88;
    const top =
      (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlays matching your site theme */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a2f]/95 via-[#071a2f]/75 to-[#071a2f]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/20 to-black/20" />

      {/* Animated map route */}
      <AnimatedMapRoute />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <div className="relative text-center mb-14">
          <div className="flex items-center justify-center gap-4 text-xs tracking-[0.35em] uppercase text-white/70">
            <span className="h-px w-10 bg-red-500/70" />
            What Our Clients Say
            <span className="h-px w-10 bg-red-500/70" />
          </div>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
            Real Drivers. <span className="text-red-500">Real Results.</span>
          </h2>

          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            We’re proud to serve drivers and shippers across the USA & Canada. Here’s what
            they say about our reliability, communication, and support.
          </p>

          {/* Right-side “note” like the reference */}
          <div className="hidden lg:block absolute right-0 top-0 text-right max-w-xs">
            <div className="text-white/90 italic text-2xl leading-snug">
              More loads. <br />
              Less stress. <br />
              That’s our job.
            </div>
            <div className="mt-3 ml-auto h-[2px] w-32 bg-red-500/80" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div
            ref={onTimeRef}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 text-center"
          >
            <div className="text-3xl font-extrabold text-red-500">{onTime}%</div>
            <div className="text-sm text-white/70">On-time focus</div>
          </div>
          <div
            ref={loadsRef}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 text-center"
          >
            <div className="text-3xl font-extrabold text-red-500">{loads}+</div>
            <div className="text-sm text-white/70">Loads moved</div>
          </div>
          <div
            ref={coverageRef}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 text-center"
          >
            <div className="text-3xl font-extrabold text-red-500">{coverage}+</div>
            <div className="text-sm text-white/70">States + Canada coverage</div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="border-0 bg-white text-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.35)] rounded-2xl overflow-hidden"
            >
              <CardContent className="p-7">
                <div className="mb-5 flex items-start justify-between">
                  <Quote className="h-10 w-10 text-red-500" />
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">“{t.text}”</p>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-red-500/40"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.role}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-[#071a2f] px-4 py-3 text-white">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2 text-white/90">
                      <Truck className="h-4 w-4 text-red-500" />
                      {t.tagLeft}
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <Clock className="h-4 w-4 text-red-500" />
                      {t.tagRight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom trust banner */}
        <div className="mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-8 relative">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-500/10 border border-red-500/20">
              <MapPin className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <div className="text-2xl font-extrabold">
                Trusted by truckers <span className="text-red-500">nationwide</span>
              </div>
              <div className="text-white/70">
                Your success is our destination — USA & Canada coverage.
              </div>
            </div>
          </div>

          <Button onClick={scrollToContact} className="bg-red-600 hover:bg-red-700 text-white px-7">
            Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
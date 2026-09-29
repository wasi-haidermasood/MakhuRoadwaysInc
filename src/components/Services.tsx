import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Snowflake, Zap, MapPin, ShieldCheck } from "lucide-react";

// Import images from src/assets (Vercel-safe). Adjust filenames if different:
import dryVanImg from "@/assets/dry-van-sunset.jpg";
import reeferImg from "@/assets/reefer.webp";
import powerOnlyImg from "@/assets/power.jpg";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Dry Van",
      subtitle: "General Freight Transportation",
      image: dryVanImg,
      description:
        "Reliable full truckload (FTL) dry van service for packaged goods and general freight. Built for consistent pickup, safe transit, and on-time delivery.",
      features: [
        "FTL Transportation (USA & Canada)",
        "Dedicated & Spot Trucking",
        "Live Load / Drop & Hook Options",
        "Safe, Secure, On-Time Delivery",
      ],
      badge: "Transportation • Trucking",
    },
    {
      icon: Snowflake,
      title: "Reefer",
      subtitle: "Temperature-Controlled Freight",
      image: reeferImg,
      description:
        "Temperature-controlled reefer service for food, beverage, and sensitive freight—supported by careful handling and cold-chain focus across the US & Canada.",
      features: [
        "Temperature Controlled (USA & Canada)",
        "Refrigerated Truckload Shipping",
        "Cold-Chain Focused Operations",
        "On-Time Delivery with 24/7 Support",
      ],
      badge: "Temperature Controlled",
    },
    {
      icon: Zap,
      title: "Power Only",
      subtitle: "We Pull Your Trailer",
      image: powerOnlyImg,
      description:
        "Need a tractor + driver to move your trailer? Our power-only service helps you cover overflow, repositioning, and time-sensitive moves across North America.",
      features: [
        "Tractor + Driver (You Provide Trailer)",
        "Flexible Scheduling (Dedicated/Spot)",
        "Cross-Border Coverage (USA & Canada)",
        "Fast Dispatch & Reliable Communication",
      ],
      badge: "Trucking • Flexible Capacity",
    },
  ];

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;

    const headerOffset = 88; // match your fixed header height
    const top =
      (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            Our Services
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Truckload Solutions Across{" "}
            <span className="text-red-600">USA & Canada</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Dry Van, Reefer (temperature controlled), and Power Only—built for safe, reliable,
            on-time freight transportation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image header */}
                <div className="relative h-52">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* overlays for stronger visual contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162a]/90 via-[#06162a]/35 to-transparent" />

                  {/* badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/15">
                    <MapPin className="h-4 w-4 text-red-400" />
                    {service.badge}
                  </div>

                  {/* icon + title on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-600/90">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-white">
                        <div className="text-xl font-extrabold leading-tight">
                          {service.title}
                        </div>
                        <div className="text-sm text-white/80">{service.subtitle}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>

                  <div className="mt-5 space-y-3">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-red-50">
                          <ShieldCheck className="h-4 w-4 text-red-600" />
                        </div>
                        <div className="text-sm font-medium text-slate-700">{f}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      onClick={scrollToContact}
                      className="w-full bg-[#071a2f] hover:bg-[#0b2442] text-white"
                    >
                      Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
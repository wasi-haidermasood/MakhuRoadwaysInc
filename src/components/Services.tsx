import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Snowflake, Zap, MapPin, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Import images from src/assets (Vercel-safe). Adjust filenames if different:
import dryVanImg from "@/assets/dry-van-sunset.jpeg";
import reeferImg from "@/assets/reefer.jpeg";
import powerOnlyImg from "@/assets/power.jpeg";

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: premiumEase },
  },
};

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Dry Van",
      subtitle: "General freight",
      image: dryVanImg,
      features: ["FTL • Canada & USA", "Live load / Drop & hook", "On-time, consistent service"],
      badge: "Canada & USA",
    },
    {
      icon: Snowflake,
      title: "Reefer",
      subtitle: "Temp controlled",
      image: reeferImg,
      features: ["FTL • Canada & USA", "Cold-chain focused", "24/7 updates"],
      badge: "Temperature Controlled",
    },
    {
      icon: Zap,
      title: "Power Only",
      subtitle: "We pull your trailer",
      image: powerOnlyImg,
      features: ["Tractor + driver", "Flexible capacity", "Cross-border moves"],
      badge: "Power Only",
    },
  ];

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (!el) return;

    const headerOffset = 88;
    const top = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500"
          >
            Services
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 font-display"
          >
            Dry Van. <span className="text-red-600">Reefer.</span> Power Only.
          </motion.h2>

          <motion.p variants={item} className="mt-4 text-base md:text-lg text-slate-600">
            Truckload coverage across Canada and the USA.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.title} variants={item}>
                <Card className="group overflow-hidden border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Image header */}
                  <div className="relative h-56">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06162a]/90 via-[#06162a]/35 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/15">
                      <MapPin className="h-4 w-4 text-red-400" />
                      {service.badge}
                    </div>

                    {/* Icon + title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-600/90 shadow-lg shadow-red-600/20">
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
                    <div className="space-y-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
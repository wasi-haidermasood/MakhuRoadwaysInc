import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Truck,
  ShieldCheck,
  Clock,
  MapPin,
  Headset,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroBg from "@/assets/heroimage.png";

const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: premiumEase },
  },
};

const Hero = () => {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const headerOffset = 88;
    const top =
      (el as HTMLElement).getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="home" className="w-full font-sans">
      <div className="relative pt-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <motion.div
          className="absolute inset-0 -z-10 opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: premiumEase }}
          style={{
            background:
              "radial-gradient(600px 300px at 15% 30%, rgba(239,68,68,0.28), transparent 65%), radial-gradient(500px 260px at 70% 20%, rgba(59,130,246,0.18), transparent 60%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06162a]/95 via-[#06162a]/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

        <div
          className="absolute inset-0 -z-10 opacity-[0.10] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E)",
          }}
        />

        <div className="mx-auto max-w-7xl px-4">
          <div className="min-h-[72vh] flex items-center">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-2xl text-white"
            >
              <motion.div
                variants={item}
                className="text-sm md:text-base tracking-[0.35em] uppercase text-white/85"
              >
                Makhu RoadWays Inc
              </motion.div>

              <motion.h1
                variants={item}
                className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] font-display"
              >
                Canada & U.S.{" "}
                <span className="block">
                  <span className="text-red-500 drop-shadow-[0_10px_30px_rgba(239,68,68,0.25)]">
                    Truckload
                  </span>{" "}
                  <span className="text-white">Shipping</span>
                </span>
              </motion.h1>

              <motion.p variants={item} className="mt-5 text-lg md:text-xl text-white/90">
                Dry Van • Reefer • Power Only
              </motion.p>

              <motion.p
                variants={item}
                className="mt-4 text-sm md:text-base text-white/80 leading-relaxed"
              >
                We move freight across Canada and the USA with reliable pickup, clear updates, and
                on-time delivery.
              </motion.p>

              <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="bg-red-600 hover:bg-red-700 text-white px-7 py-6 rounded-md text-base font-semibold shadow-premium"
                  >
                    Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("#about")}
                    className="px-7 py-6 rounded-md text-base font-semibold border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur"
                  >
                    Our Services <Play className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="pb-10 flex justify-end"
          >
            <div className="text-white/85 italic text-lg md:text-2xl font-medium">
              Simple. Safe. On time.
              <div className="mt-2 h-[2px] w-48 bg-red-500/80 ml-auto" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* FEATURE STRIP */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 py-10"
          >
            {[
              { icon: Truck, title: "Dry Van", desc: "General freight, full truckload moves." },
              { icon: ShieldCheck, title: "Reefer", desc: "Temperature-controlled shipments." },
              { icon: Clock, title: "Power Only", desc: "We pull your trailer when you need capacity." },
              { icon: MapPin, title: "Canada & USA", desc: "Cross-border and domestic lanes." },
              { icon: Headset, title: "24/7 Support", desc: "Dispatch and updates, anytime." },
            ].map((itemData, idx) => {
              const Icon = itemData.icon;

              return (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  whileHover={{ y: -4, boxShadow: "0 18px 50px rgba(2,8,23,0.10)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={[
                    "px-6 py-6 text-center bg-white",
                    "border-slate-200",
                    idx !== 0 ? "sm:border-l lg:border-l" : "",
                    "will-change-transform",
                  ].join(" ")}
                >
                  <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-slate-50 ring-1 ring-slate-200">
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="font-semibold text-slate-900">{itemData.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{itemData.desc}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
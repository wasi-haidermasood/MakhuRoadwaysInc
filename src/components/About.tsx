import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Clock,
  MapPinned,
  Headset,
  Truck,
  FileCheck2,
} from "lucide-react";

// Add this image in: src/assets/about-truck.jpg (change name if needed)
import aboutTruck from "@/assets/dry-van-sunset.jpg";

const About = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First",
      description:
        "We prioritize safe operations, careful handling, and responsible driving—protecting your freight from pickup to delivery.",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Reliable scheduling and proactive updates to keep your shipments moving and your business on track.",
    },
    {
      icon: MapPinned,
      title: "USA & Canada Coverage",
      description:
        "Cross-border capable transportation solutions with wide lane coverage across North America.",
    },
    {
      icon: Headset,
      title: "Clear Communication",
      description:
        "Fast responses, consistent updates, and support you can count on—before, during, and after transit.",
    },
  ];

  const capabilities = [
    {
      icon: Truck,
      title: "Truckload Transportation",
      description: "FTL solutions built for dependable long-haul freight movement.",
    },
    {
      icon: FileCheck2,
      title: "Professional Handling",
      description:
        "Documentation, coordination, and shipment management handled with attention to detail.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            About Us
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Makhu RoadWays <span className="text-red-600">Inc</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We provide dependable truckload transportation across the USA and Canada—
            focused on safety, communication, and on-time performance.
          </p>
        </div>

        {/* Main about block (image + content) */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
            <img
              src={aboutTruck}
              alt="Makhu RoadWays truck on the road"
              className="h-[420px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2f]/70 via-transparent to-transparent" />

            {/* small label */}
            <div className="absolute bottom-5 left-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-xs font-semibold backdrop-blur-md border border-white/15">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Trusted Freight Partner
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge className="bg-[#071a2f] hover:bg-[#071a2f] text-white">
              Owner: Beant Singh
            </Badge>

            <h3 className="mt-4 text-3xl font-extrabold text-slate-900 leading-tight">
              Built on reliability, powered by service.
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Makhu RoadWays Inc is committed to providing efficient, secure, and
              on-time transportation. Whether you’re shipping general freight or
              time-sensitive temperature-controlled loads, we focus on consistent execution
              and clear communication—so you can plan with confidence.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {capabilities.map((c) => {
                const Icon = c.icon;
                return (
                  <Card
                    key={c.title}
                    className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-50">
                          <Icon className="h-6 w-6 text-red-600" />
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{c.title}</div>
                          <div className="mt-1 text-sm text-slate-600">{c.description}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
              <div className="text-sm font-semibold text-slate-900">
                What you can expect from us:
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                  Consistent updates and fast response times
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                  Safety-minded operations and careful freight handling
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600" />
                  Coverage across the United States and Canada
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values / Why choose us */}
        <div>
          <h3 className="text-3xl font-extrabold text-center text-slate-900 mb-10">
            What Drives <span className="text-red-600">Us</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, index) => {
              const Icon = v.icon;
              return (
                <Card
                  key={index}
                  className="border-0 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-[#071a2f]/5">
                      <Icon className="h-7 w-7 text-red-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{v.title}</div>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {v.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
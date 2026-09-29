import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkjgkovw";

const PHONE_DISPLAY = "+1 (705) 255-0270";
const PHONE_TEL = "+17052550270";
const ADDRESS = "136 Sunforest Dr Brampton ON L6Z 4B8";

// Display-only email (Formspree delivers to the inbox you configured)
const OWNER_EMAIL_DISPLAY = "dispatch@makhuroadwaysinc.com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Dry Van",
    origin: "",
    destination: "",
    message: "",
    company: "", // honeypot anti-spam (keep empty)
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    // Honeypot: bots fill hidden fields
    if (form.company) return;

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Please fill Name, Email and Message." });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        serviceType: form.serviceType,
        origin: form.origin,
        destination: form.destination,
        message: form.message,

        // Formspree extras:
        _subject: `New Quote Request - ${form.serviceType}`,
        _replyto: form.email,
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Form submission failed");
      }

      setStatus({ type: "success", msg: "Quote request sent! We’ll contact you shortly." });

      setForm({
        name: "",
        email: "",
        phone: "",
        serviceType: "Dry Van",
        origin: "",
        destination: "",
        message: "",
        company: "",
      });
    } catch {
      setStatus({ type: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: info */}
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
              Contact
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Get a <span className="text-red-600">Free Quote</span>
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Request a quote for Dry Van, Reefer (temperature controlled), or Power Only
              across the USA & Canada. We’ll get back to you ASAP.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#071a2f]/5">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Call Us</div>
                    <a href={`tel:${PHONE_TEL}`} className="text-slate-600 hover:text-slate-900">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#071a2f]/5">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Address</div>
                    <div className="text-slate-600">{ADDRESS}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#071a2f]/5">
                    <Mail className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email</div>
                    <div className="text-slate-600">{OWNER_EMAIL_DISPLAY}</div>
                    <div className="text-xs text-slate-500 mt-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            <div className="bg-[#071a2f] text-white px-6 py-6">
              <div className="text-lg font-extrabold">Request a Quote</div>
              <div className="text-sm text-white/75">
                Fill the form and we’ll contact you shortly.
              </div>
            </div>

            <form onSubmit={onSubmit} className="p-6">
              {/* Honeypot (hidden) */}
              <input
                name="company"
                value={form.company}
                onChange={onChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                    placeholder="john@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Phone (Optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                    placeholder="+1 (___) ___-____"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Service Type</label>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500 bg-white"
                  >
                    <option>Dry Van</option>
                    <option>Reefer</option>
                    <option>Power Only</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">Origin (Optional)</label>
                  <input
                    name="origin"
                    value={form.origin}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                    placeholder="City, State/Province"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Destination (Optional)
                  </label>
                  <input
                    name="destination"
                    value={form.destination}
                    onChange={onChange}
                    className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                    placeholder="City, State/Province"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:border-red-500"
                  placeholder="Tell us about your load (weight, commodity, pickup date, etc.)"
                  required
                />
              </div>

              {status && (
                <div
                  className={`mt-4 rounded-lg px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <div className="mt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-semibold"
                >
                  {loading ? "Sending..." : "Send Request"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <div className="mt-3 text-xs text-slate-500 text-center">
                  By submitting, you agree to be contacted about your quote request.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <Link to="/" className="text-sm font-semibold text-red-600 hover:text-red-700">
            ← Back to Home
          </Link>
        </div>

        <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-600">
            Makhu Road Ways Inc (“we”, “our”, “us”) respects your privacy. This is a template
            you can customize with your lawyer/compliance needs.
          </p>
          <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toDateString()}</p>
        </header>

        <section className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="mt-2 text-slate-600">
              We may collect information you submit through our forms (name, email, phone,
              origin/destination, and message) to respond to quote requests.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p className="mt-2 text-slate-600">
              We use your information to provide quotes, contact you about services, and improve
              our website experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">3. Form Submissions</h2>
            <p className="mt-2 text-slate-600">
              Our contact form may be processed by Formspree to deliver your message to our inbox.
              Please avoid submitting sensitive information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">4. Cookies</h2>
            <p className="mt-2 text-slate-600">
              We may use cookies/analytics to understand traffic and improve performance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">5. Contact Us</h2>
            <p className="mt-2 text-slate-600">
              Email: dispatch@makhuroadwaysinc.com <br />
              Address: 136 Sunforest Dr Brampton ON L6Z 4B8
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
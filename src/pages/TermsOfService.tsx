import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-6">
          <Link
            to="/"
            className="text-sm font-semibold text-red-600 hover:text-red-700"
          >
            ← Back to Home
          </Link>
        </div>

        <header className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-500">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
            Terms of Service
          </h1>
          <p className="mt-3 text-slate-600">
            These Terms of Service (“Terms”) govern your use of the Makhu Road Ways
            Inc website (“Website”). This is a general template—consider reviewing
            with a legal professional for your specific operations.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {new Date().toDateString()}
          </p>
        </header>

        <section className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-2 text-slate-600">
              By accessing or using this Website, you agree to be bound by these Terms.
              If you do not agree, do not use the Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">2. Services</h2>
            <p className="mt-2 text-slate-600">
              Makhu Road Ways Inc provides trucking/transportation-related information and allows
              users to submit quote requests for services such as Dry Van, Reefer
              (temperature-controlled), and Power Only across the USA and Canada.
              Submitting a form does not guarantee service availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">3. Quotes & Scheduling</h2>
            <p className="mt-2 text-slate-600">
              Quotes are estimates and may change based on lane, timing, fuel costs, load details,
              special requirements, or other operational factors. Final pricing and scheduling are
              confirmed only when agreed in writing (email/text/contract) by Makhu Road Ways Inc.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">4. User Responsibilities</h2>
            <p className="mt-2 text-slate-600">
              You agree to provide accurate information when submitting forms (contact details,
              origin/destination, commodity details, etc.). You are responsible for ensuring you
              have authority to request transportation services for the shipment described.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">5. Prohibited Use</h2>
            <p className="mt-2 text-slate-600">
              You agree not to misuse the Website, including attempting to disrupt services,
              sending spam, submitting false information, or attempting unauthorized access to
              systems or data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">6. Third-Party Services</h2>
            <p className="mt-2 text-slate-600">
              The Website may use third-party services (for example, Formspree for form delivery).
              Your use of those services may be subject to their terms and privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">7. Disclaimer</h2>
            <p className="mt-2 text-slate-600">
              The Website is provided on an “as is” and “as available” basis. We do not warrant
              that the Website will be uninterrupted or error-free, or that content is always
              complete or current.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">8. Limitation of Liability</h2>
            <p className="mt-2 text-slate-600">
              To the maximum extent permitted by law, Makhu Road Ways Inc will not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising from
              your use of the Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">9. Changes to These Terms</h2>
            <p className="mt-2 text-slate-600">
              We may update these Terms from time to time. Continued use of the Website after
              changes means you accept the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">10. Governing Law</h2>
            <p className="mt-2 text-slate-600">
              These Terms are governed by the laws of Ontario, Canada, without regard to conflict
              of law principles.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">11. Contact</h2>
            <p className="mt-2 text-slate-600">
              Makhu Road Ways Inc <br />
              136 Sunforest Dr, Brampton, ON L6Z 4B8 <br />
              Email: dispatch@makhuroadwaysinc.com <br />
              Phone: +1 (705) 255-0270
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
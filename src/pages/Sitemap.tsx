import { useEffect } from "react";
import { Link } from "react-router-dom";


const Sitemap = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const sectionLinks = [
  { label: "Home", to: "/#home" },
  { label: "About Us", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Testimonials", to: "/#testimonials" },
  { label: "Contact", to: "/#contact" },
];

  const pageLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms of Service", to: "/terms-of-service" },
    { label: "Sitemap", to: "/sitemap" },
  ];

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
            Navigation
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">Sitemap</h1>
          <p className="mt-3 text-slate-600">
            Quick links to pages and sections of the Makhu Road Ways Inc website.
          </p>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Website Sections</h2>
            <p className="mt-2 text-sm text-slate-600">
              These links take you to sections on the homepage.
            </p>

            <ul className="mt-5 space-y-3">
  {sectionLinks.map((item) => (
    <li key={item.to}>
      <Link
        to={item.to}
        className="text-slate-700 hover:text-red-600 font-semibold transition-colors"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Pages</h2>
            <p className="mt-2 text-sm text-slate-600">
              Legal and informational pages.
            </p>

            <ul className="mt-5 space-y-3">
              {pageLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-slate-700 hover:text-red-600 font-semibold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sitemap;
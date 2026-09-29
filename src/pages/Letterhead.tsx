import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Letterhead = () => {
  const pdfUrl = "/letterhead.pdf"; // from /public
  const previewImg = "/letterhead-preview.png"; // optional

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="border-slate-300">
              <a href={pdfUrl} target="_blank" rel="noreferrer">
                Open PDF <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <a href={pdfUrl} download>
                Download <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <header className="rounded-2xl bg-[#071a2f] text-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/70">
            Makhu Road Ways Inc
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
            Company Letterhead
          </h1>
          <p className="mt-3 text-white/75 max-w-3xl">
            View and download our official letterhead. Use it for documentation, customer
            requests, and business records.
          </p>
        </header>

        <section className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* Preview image (optional) */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 mb-3">
              Preview
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              {/* If you don't have preview image, remove this img block */}
              <img
                src={previewImg}
                alt="Letterhead preview"
                className="w-full h-auto"
                onError={(e) => {
                  // If preview image missing, hide it gracefully
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="p-3 text-xs text-slate-500">
                If preview is not visible, you can open or download the PDF.
              </div>
            </div>
          </div>

          {/* PDF viewer */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-slate-900 mb-3">
              PDF Viewer
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200">
              <iframe
                title="Makhu Road Ways Inc Letterhead"
                src={`${pdfUrl}#view=FitH`}
                className="w-full h-[650px]"
              />
            </div>

            <p className="mt-3 text-xs text-slate-500">
              If the viewer doesn’t load on your device, click “Open PDF” or “Download”.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Letterhead;
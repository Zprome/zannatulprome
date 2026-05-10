import { Link } from "react-router-dom";
import cvPreview from "../assets/cv-preview.jpg";

const cvUrl = "/Zannatul-Naima-Prome-CV.pdf";

export default function CVPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-16 text-[#F5F1E8] md:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Top Controls */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="text-sm text-white/50 transition hover:text-[#C6A972]"
          >
            ← Back to home
          </Link>

          <div className="flex gap-3">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/70 transition hover:border-[#C6A972]/40 hover:text-[#F5F1E8]"
            >
              View Resume ↗
            </a>

            <a
              href={cvUrl}
              download
              className="rounded-full bg-[#C6A972] px-5 py-2.5 text-sm font-medium text-[#09090B] transition hover:bg-[#D8BD82]"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Resume Preview */}
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/30">
            
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <img
                src={cvPreview}
                alt="CV Preview"
                className="w-full transition duration-700 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
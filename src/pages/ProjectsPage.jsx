import { Link } from "react-router-dom";
import bookPreview from "../assets/projects/WebDevelopment/BB1.png";
import dafPreview from "../assets/projects/business-intelligence/DAF0.jpg";
import growPreview from "../assets/projects/Skill2-GrowKasterlee/GK0.png";
import airbnbPreview from "../assets/projects/Data-Visualisation/air0.png";
import andersonPreview from "../assets/projects/Skill2-Andersons/AH0.png";


const allProjects = [
  {
  title: "Book-A-Bite",
  type: "Web Development",
  description:
    "A full-stack restaurant management application with food ordering, table bookings, user accounts, admin management, analytics, CSV export, and role-based access control.",
  tech: ["Laravel", "Livewire", "Tailwind CSS", "Alpine.js"],
  details: "/projects/book-a-bite",
  demo: "#",
  image: bookPreview,
  },
  {
    title: "DAF Tightening Performance Dashboard",
    type: "Business Intelligence",
    description:
        "A Qlik Sense dashboard analyzing tightening performance, tool stability, and failure patterns to support preventive maintenance decisions.",
    tech: ["Qlik Sense", "Replit", "Business Intelligence", "Data Analysis"],
    details: "/projects/daf-dashboard",
    demo: "https://youtu.be/JU--K3YxSfg",
    image: dafPreview,
  },
  {
  title: "Grow Kasterlee",
  type: "Skills Integration Lab 2",
  description:
    "A full-stack fitness management platform with multi-role scheduling, session booking, progress tracking, and automated reminders.",
  tech: ["Laravel", "Livewire", "Blade", "MySQL"],
  details: "/projects/growkasterlee",
  demo: "https://www.growkasterlee.liam-tm.be/",
  image: growPreview,
  },
  {
  title: "Airbnb Analytics & Insights Dashboard",
  type: "Data Analytics & Visualization",
  description:
    "A Qlik Sense dashboard exploring Airbnb pricing, booking trends, guest satisfaction, and host performance across major Belgian cities.",
  tech: ["Qlik Sense", "Data Visualization", "Data Analytics", "Interactive Dashboards"],
  details: "/projects/airbnb-dashboard",
  demo: "https://youtu.be/h_lOkrqv4Qc",
  image: airbnbPreview,
  },
  {
  title: "Anderson Household System",
  type: "Skills Integration Lab 2",
  description:
    "A collaborative system analysis and Figma UX prototype project focused on role-based household workflows, scheduling, and administrative coordination.",
  tech: ["Figma", "UML", "Use Case Diagrams", "UX Design"],
  details: "/projects/anderson-household-system",
  demo: "#",
  image: andersonPreview,
  },
];

function ProjectPreview({ image, title }) {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0E]">
      <img
        src={image}
        alt={`${title} preview`}
        className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${
          title === "GrowKasterlee" ||
          title === "Book-A-Bite" ||
          title === "Anderson Household System"
            ? "object-top opacity-95 brightness-110 contrast-105"
            : "opacity-80"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-28 text-[#F5F1E8] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
            to="/"
            className="mb-14 inline-flex text-sm text-white/50 transition hover:text-[#C6A972]"
            >
            ← Back to home
        </Link>

        <section className="mb-16 max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#C6A972]">
            My Work
          </p>

          <h1 className="mb-5 text-5xl font-semibold leading-tight md:text-5xl">
            All Projects
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/55">
            A growing collection of projects built through curiosity, problem-solving,
            and hands-on exploration across different areas of computer science.
          </p>
        </section>


        <section className="grid gap-8 md:grid-cols-2">
          {allProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-[#111114]/80 p-5 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#C6A972]/30"
            >
              <ProjectPreview image={project.image} title={project.title} />

              <div className="pt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C6A972]/80">
                  {project.type}
                </p>

                <h2 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h2>

                <p className="mb-5 text-sm leading-relaxed text-white/55">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 transition-all duration-300 hover:-translate-y-[2px] hover:border-[#C6A972]/40 hover:text-[#F5F1E8]"
                    >
                      {/* glow */}
                      <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(198,169,114,0.18),transparent_70%)]" />

                      {/* text */}
                      <span className="relative z-10">
                        {tech}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <Link
                    to={project.details}
                    className="text-sm text-[#C6A972] transition group-hover:translate-x-1"
                    >
                    View Details →
                  </Link>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/45 transition hover:text-white"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bookPreview from "../assets/projects/WebDevelopment/BB0.png";
import dafPreview from "../assets/projects/business-intelligence/DAF0.jpg";
import growPreview from "../assets/projects/Skill2-GrowKasterlee/GK0.png";

const projects = [
  {
  title: "Book-A-Bite",
  type: "Web Development",
  subtitle: "Restaurant Management System",
  description:
    "A full-stack restaurant management application with food ordering, table bookings, user accounts, admin management, analytics, CSV export, and role-based access control.",
  tech: ["Laravel", "Livewire", "Tailwind CSS", "Alpine.js"],
  caseStudy: "/projects/book-a-bite",
  demo: "#",
  image: bookPreview,
  },
  {
    title: "DAF Tightening Performance Dashboard",
    type: "Business Intelligence",
    description:
        "A Qlik Sense dashboard analyzing tightening performance, tool stability, and failure patterns to support preventive maintenance decisions.",
    tech: ["Qlik Sense", "Replit", "Business Intelligence", "Data Analysis"],
    caseStudy: "/projects/daf-dashboard",
    demo: "https://youtu.be/JU--K3YxSfg",
    image: dafPreview,
  },
  {
  title: "GrowKasterlee",
  type: "Skills Lab 2 Project",
  subtitle: "Team Project",
  description:
    "A full-stack fitness management platform with multi-role scheduling, session booking, progress tracking, and automated reminders.",
  tech: ["Laravel", "Livewire", "Blade", "MySQL"],
  caseStudy: "/projects/growkasterlee",
  demo: "https://www.growkasterlee.liam-tm.be/",
  image: growPreview,
  },
];

function ProjectMockup({ title, index }) {
  return (
    <div className="pointer-events-none absolute right-6 top-10 hidden h-[72%] w-[52%] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#09090B]/70 p-4 shadow-2xl backdrop-blur-md lg:block">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,169,114,0.18),transparent_35%)]" />

      <div className="relative h-full rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4">
        <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="ml-4 h-3 w-32 rounded-full bg-white/10" />
        </div>

        <div className="grid h-[78%] grid-cols-12 gap-4">
          <div className="col-span-3 rounded-2xl bg-black/25 p-4">
            <div className="mb-4 h-3 w-16 rounded-full bg-[#C6A972]/40" />
            <div className="space-y-3">
              <div className="h-2 rounded-full bg-white/15" />
              <div className="h-2 w-3/4 rounded-full bg-white/10" />
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
              <div className="h-2 w-4/5 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="col-span-9 rounded-2xl bg-black/25 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="mb-2 h-4 w-44 rounded-full bg-white/20" />
                <div className="h-2 w-32 rounded-full bg-white/10" />
              </div>
              <div className="h-9 w-24 rounded-full bg-[#C6A972]/20" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="h-28 rounded-2xl bg-white/[0.07]" />
              <div className="h-28 rounded-2xl bg-white/[0.07]" />
              <div className="h-28 rounded-2xl bg-white/[0.07]" />
            </div>

            <div className="mt-6 h-3 w-56 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 rounded-full border border-[#C6A972]/25 bg-[#C6A972]/10 px-4 py-1 text-xs text-[#C6A972]">
          {title} Preview
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-visible px-6 pt-36 pb-32 md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(198,169,114,0.08),transparent_35%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#C6A972]/20 bg-[#C6A972]/5 px-5 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A972]" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Featured Projects
            </p>
          </div>

          <h2 className="mb-6 text-4xl font-semibold leading-tight text-[#F5F1E8] md:text-5xl">
            Building systems,
            <br />
            not just interfaces.
          </h2>

          <p className="max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
            A curated collection of projects exploring modern development,
            interactive experiences, scalable systems, and real-world problem
            solving.
          </p>
        </motion.div>

        <div className="relative">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 55, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-140px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ zIndex: index + 1 }}
              className={`sticky top-28 ${
                index !== 0 ? "-mt-8" : ""
              } group`}
            >
              <div className="relative h-[540px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] shadow-[0_30px_100px_rgba(0,0,0,0.45)] transition duration-500 group-hover:border-[#C6A972]/35">
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[radial-gradient(circle_at_18%_20%,rgba(198,169,114,0.24),transparent_32%),radial-gradient(circle_at_78%_60%,rgba(156,105,50,0.16),transparent_34%),linear-gradient(135deg,#17130E,#07070A)]"
                      : index === 1
                      ? "bg-[radial-gradient(circle_at_80%_24%,rgba(198,169,114,0.22),transparent_30%),radial-gradient(circle_at_18%_75%,rgba(255,255,255,0.07),transparent_30%),linear-gradient(135deg,#111116,#07070A)]"
                      : "bg-[radial-gradient(circle_at_30%_70%,rgba(156,105,50,0.22),transparent_34%),radial-gradient(circle_at_75%_22%,rgba(198,169,114,0.16),transparent_28%),linear-gradient(135deg,#15110E,#060608)]"
                  }`}
                />

                <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:64px_64px]" />

                {project.image ? (
                    <div className={`pointer-events-none absolute right-6 hidden overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#09090B]/70 p-3 shadow-2xl backdrop-blur-md lg:block ${
                      project.title === "GrowKasterlee" || project.title === "Book-A-Bite"
                        ? "top-8 h-[76%] w-[56%]"
                        : "top-10 h-[72%] w-[52%]"
                    }`}
                    >
                        <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className={`h-full w-full rounded-[1.25rem] transition duration-700 group-hover:scale-105 ${
                          project.title === "GrowKasterlee" || project.title === "Book-A-Bite"
                            ? "object-cover object-top opacity-100 brightness-110"
                            : "object-cover opacity-80"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 ${
                            project.title === "GrowKasterlee" || project.title === "Book-A-Bite"
                              ? "bg-gradient-to-t from-black/5 via-transparent to-transparent"
                              : "bg-gradient-to-t from-black/45 via-transparent to-black/10"
                          }`}
                        />
                    </div>
                    ) : (
                    <ProjectMockup title={project.title} index={index} />
                )}

                <div
                  className={`absolute inset-0 ${
                    project.title === "Book-A-Bite"
                      ? "bg-gradient-to-r from-black via-black/72 to-transparent"
                      : "bg-gradient-to-r from-black/85 via-black/58 to-black/20"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12">
                  <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
                      {project.type}
                    </p>

                    <h3 className="mb-3 max-w-2xl text-4xl font-semibold leading-tight text-[#F5F1E8] md:text-5xl">
                      {project.title}
                    </h3>

                    {project.subtitle && (
                      <p className="mb-5 text-sm font-medium text-[#C6A972]/80">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="max-w-xl text-base leading-relaxed text-white/62 md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
                    <div className="flex max-w-xl flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-[2px] hover:border-[#C6A972]/40 hover:text-[#F5F1E8]"
                        >
                          {/* subtle glow */}
                          <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(198,169,114,0.25),transparent_70%)]" />
                          
                          {/* text */}
                          <span className="relative z-10">{tech}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            to={project.caseStudy}
                            className="rounded-full bg-[#C6A972] px-6 py-3 text-sm font-medium text-[#09090B] transition duration-300 hover:scale-105 hover:bg-[#D8BD82]"
                        >
                            View Details →
                        </Link>

                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-white/60 transition hover:text-[#F5F1E8]"
                        >
                            Live Demo ↗
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="h-[35vh]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#C6A972]/20 bg-[#C6A972]/5 px-8 py-4 text-sm font-medium text-[#F5F1E8] transition-all duration-300 hover:scale-105 hover:border-[#C6A972] hover:bg-[#C6A972] hover:text-[#09090B]"
          >
            <span className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(198,169,114,0.18),transparent_70%)]" />

            <span className="relative z-10 tracking-wide">
              View all projects
            </span>

            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
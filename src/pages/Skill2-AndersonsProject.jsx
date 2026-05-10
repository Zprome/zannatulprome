import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ah0 from "../assets/projects/Skill2-Andersons/AH0.png";
import ah1 from "../assets/projects/Skill2-Andersons/AH1.png";
import ah2 from "../assets/projects/Skill2-Andersons/AH2.png";
import ah3 from "../assets/projects/Skill2-Andersons/AH3.png";
import ah4 from "../assets/projects/Skill2-Andersons/AH4.png";
import ah5 from "../assets/projects/Skill2-Andersons/AH5.png";
import ah6 from "../assets/projects/Skill2-Andersons/AH6.png";
import ucdImage from "../assets/projects/Skill2-Andersons/UCD.png";


const images = [ah0, ah1, ah2, ah3, ah4, ah5, ah6];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function Skill2AndersonsProject() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const previousImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <main className="min-h-screen px-6 py-28 text-[#F5F1E8] md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/projects"
          className="mb-14 inline-flex text-sm text-white/50 transition hover:text-[#C6A972]"
        >
          ← Back to projects
        </Link>

        {/* Hero */}
        <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Skills Integration Lab 2
            </p>

            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              Anderson Household System
            </h1>

            <p className="mb-6 text-sm font-medium text-[#C6A972]/80">
              Team Project
            </p>

            <p className="mb-8 max-w-xl text-base leading-[1.9] text-white/60">
              A collaborative analysis and design project for a household
              management system. The project focused on translating client
              requirements into use cases, role-based workflows, UML models, and
              a Figma prototype prepared for future development teams.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {["Figma", "UML", "Use Cases", "UX Design", "Requirements Analysis"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,169,114,0.15),transparent_40%)]" />

            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0A0A0C]">
              <div className="flex h-[320px] items-center justify-center">
                <img
                  src={images[current]}
                  alt="Anderson system prototype preview"
                  className="h-full w-full rounded-[1.2rem] object-cover object-top opacity-95 brightness-105 contrast-105 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-[#C6A972]"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-[#C6A972]"
              >
                ›
              </button>

              <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === current
                        ? "w-8 bg-[#C6A972]"
                        : "w-2 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {[
            ["Project Type", "Analysis & design prototype"],
            ["My Focus", "Physiotherapist and admin flows"],
            ["Outcome", "Figma handoff for development"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/30"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C6A972]/80">
                {label}
              </p>
              <p className="text-lg text-white/75">{value}</p>
            </div>
          ))}
        </motion.section>

        {/* Context */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
                Project Context
              </p>

              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                Designing a role-based household management system from client
                requirements.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                The project started by analyzing client requirements and
                expectations for a household management system that supports
                different users, responsibilities, and daily coordination tasks.
              </p>

              <p>
                From there, we translated the requirements into a business case,
                use case diagram, detailed use cases, and a structured prototype
                showing how users would move through the application.
              </p>

              <p>
                My main design focus was the physiotherapist workflow and admin
                screens, including appointment booking, schedule management,
                coordinator access, and administrative control flows.
              </p>
            </div>
          </div>
        </motion.section>



        {/* Use Case Diagram */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28"
        >
        <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            System Analysis
            </p>

            <h2 className="mb-6 text-3xl font-semibold leading-snug">
            We visualized actors, permissions, and workflows using a use case diagram.
            </h2>

            <p className="text-base leading-relaxed text-white/60">
            Before designing the prototype, we mapped the system roles,
            responsibilities, and interactions to understand how each actor
            would navigate and use the household management platform.
            </p>
        </div>

        <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] p-5">
            <a
                href={ucdImage}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block max-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0F1013] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition duration-500 hover:border-[#C6A972]/30"
            >
                <img
                src={ucdImage}
                alt="Use case diagram"
                className="w-full rounded-xl opacity-80 brightness-95 transition duration-500 group-hover:scale-[1.01] group-hover:opacity-95"
                />

                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                UML Use Case Diagram
                </div>
            </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 pl-1">
            <a
                href={ucdImage}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/70 transition hover:border-[#C6A972]/40 hover:text-[#F5F1E8]"
            >
                Open Full Diagram ↗
            </a>

            <a
                href="/AndersonUseCase.mdj"
                download
                className="rounded-full bg-[#C6A972] px-5 py-2.5 text-sm font-medium text-[#09090B] transition hover:bg-[#D8BD82]"
            >
                Download UML
            </a>
            </div>
        </div>
        </motion.section>


        <div className="my-24 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>

        {/* Process */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#101013] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Design Process
            </p>

            <div className="space-y-5">
              {[
                [
                  "01",
                  "Requirement Analysis",
                  "Reviewed the client expectations and identified the main user needs, system roles, and operational workflows.",
                ],
                [
                  "02",
                  "Business Case",
                  "Translated the problem context into a structured business case to clarify the system purpose and value.",
                ],
                [
                  "03",
                  "Use Case Modeling",
                  "Created use cases and actor flows to define what each role needed to do inside the system.",
                ],
                [
                  "04",
                  "Figma Prototype",
                  "Designed role-based screens and interaction flows to show how the application could work in practice.",
                ],
                [
                  "05",
                  "MoSCoW Prioritization",
                  "Prioritized pages and features into Must Have, Should Have, Could Have, and Won’t Have categories.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={title}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:border-[#C6A972]/30 hover:bg-white/[0.055]"
                >
                  <span className="text-sm font-medium text-[#C6A972]">
                    {number}
                  </span>

                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-[#F5F1E8]">
                      {title}
                    </h3>

                    <p className="text-sm leading-relaxed text-white/50">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Solution
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
              We transformed system requirements into a structured development-ready prototype.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                The prototype was designed around multiple household roles, each
                with its own dashboard, navigation, and task-specific workflows.
              </p>

              <p>
                Instead of designing isolated screens, we mapped user paths so
                each role could move through the system logically, from login to
                completing role-specific actions.
              </p>

              <p>
                The final prototype and documentation were prepared so future
                development teams could understand the system behavior, priorities,
                and expected user interactions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              UX Focus Areas
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-3xl">
              The prototype focused on clear workflows for different users and
              responsibilities.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Physiotherapist Workflow",
                desc: "Designed appointment overview pages, booking forms, past appointment views, and confirmation states for managing therapy sessions.",
              },
              {
                title: "Admin Management",
                desc: "Designed admin screens for managing coordinators, invoice access, appointments, meals, availability, and system-level controls.",
              },
              {
                title: "Role-Based Navigation",
                desc: "Structured navigation around each actor’s responsibilities so users only see workflows relevant to their role.",
              },
              {
                title: "Interaction States",
                desc: "Included forms, confirmations, modal states, empty states, and status feedback to make the prototype easier to understand.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:border-[#C6A972]/30 hover:bg-white/[0.045]"
              >
                <h3 className="mb-4 text-xl font-semibold text-[#F5F1E8] transition group-hover:text-[#C6A972]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="my-24 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>

        {/* Contribution */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28"
        >
          <div className="mb-14 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              My Contribution
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
              I contributed to the system analysis and designed key prototype
              flows for physiotherapist and admin users.
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-white/55">
              My work focused on turning functional requirements into practical
              screens and interaction flows. I worked on the Figma prototype,
              contributed to the analysis documentation, and helped shape how
              role-based workflows would be represented visually.
            </p>
          </div>

          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Physiotherapist Appointment Flow",
                desc: "Designed appointment overview screens, booking forms, and confirmation states for creating and managing therapy sessions.",
              },
              {
                number: "02",
                title: "Admin Management Screens",
                desc: "Created admin-facing screens for coordinator management, appointment management, access control, and operational oversight.",
              },
              {
                number: "03",
                title: "Use Case Thinking",
                desc: "Helped connect prototype screens with documented use cases so each screen reflected a real system requirement.",
              },
              {
                number: "04",
                title: "Developer Handoff",
                desc: "Supported a clearer transition from prototype to implementation by organizing screens around prioritized workflows.",
              },
            ].map((item) => (
              <div key={item.number} className="group relative pl-6">
                <div className="absolute left-0 top-2 h-full w-px bg-white/10 transition group-hover:bg-[#C6A972]/40" />
                <div className="absolute left-[-3px] top-2 h-2 w-2 rounded-full bg-white/25 transition group-hover:bg-[#C6A972]" />

                <p className="mb-2 text-xs font-medium text-[#C6A972]">
                  {item.number}
                </p>

                <h3 className="mb-2 text-lg font-semibold text-[#F5F1E8] transition group-hover:text-[#C6A972]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Learnings */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 border-t border-white/10 pt-20"
        >
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
                Learnings & Takeaways
              </p>

              <h2 className="mb-6 max-w-xl text-2xl font-semibold leading-snug md:text-3xl">
                This project strengthened my understanding of analysis-driven
                software design.
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-white/55">
                <p>
                  Working on this project showed me how important it is to start
                  with clear requirements before designing screens or planning
                  implementation.
                </p>

                <p>
                  It also helped me understand how use cases, prioritization, and
                  UX prototypes can reduce uncertainty before development begins.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:pt-10">
              {[
                "Good prototypes are easier to build when the requirements and user roles are clearly defined first.",
                "Use case diagrams help reveal how different actors interact with the same system.",
                "MoSCoW prioritization makes development planning more realistic and helps teams focus on the most important features first.",
                "Designing role-based dashboards requires thinking about permissions, navigation, and user responsibilities.",
                "A well-structured prototype can make the handoff to developers smoother and reduce confusion during implementation.",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A972]" />
                  <p className="text-sm leading-relaxed text-white/65 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
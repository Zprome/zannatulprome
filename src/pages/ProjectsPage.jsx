const allProjects = [
  {
    title: "EduQuest",
    type: "Team Project",
    description:
      "A full-stack platform for managing student training workflows, team formation, submissions, and collaboration.",
    tech: ["Laravel", "Tailwind", "Livewire"],
    details: "/projects/eduquest",
    demo: "#",
  },
  {
    title: "StayScout",
    type: "Individual Project",
    description:
      "A data visualization project for exploring travel stays by price, rating, and location.",
    tech: ["Qlik Sense", "Data Visualization"],
    details: "/projects/stayscout",
    demo: "#",
  },
  {
    title: "Web Scraping",
    type: "Individual Project",
    description:
      "A data science project focused on extracting, cleaning, and analyzing structured web data.",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    details: "/projects/web-scraping",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    description:
      "A premium portfolio website focused on visual polish, clean interactions, and strong presentation.",
    tech: ["React", "Tailwind", "Framer Motion"],
    details: "/projects/portfolio",
    demo: "#",
  },
];

function ProjectPreview() {
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-[#0B0B0E]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(198,169,114,0.22),transparent_35%),linear-gradient(135deg,#17130E,#07070A)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative m-5 h-[calc(100%-40px)] rounded-xl border border-white/10 bg-white/[0.035] p-4">
        <div className="mb-4 flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>

        <div className="grid h-[120px] grid-cols-12 gap-3">
          <div className="col-span-4 rounded-xl bg-black/25" />
          <div className="col-span-8 space-y-3 rounded-xl bg-black/25 p-4">
            <div className="h-3 w-28 rounded-full bg-[#C6A972]/35" />
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-10 rounded-lg bg-white/[0.06]" />
              <div className="h-10 rounded-lg bg-white/[0.06]" />
              <div className="h-10 rounded-lg bg-white/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#09090B] px-6 py-28 text-[#F5F1E8] md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <a
          href="/"
          className="mb-14 inline-flex text-sm text-white/50 transition hover:text-[#C6A972]"
        >
          ← Back to home
        </a>

        <section className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Project Archive
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
            All Projects
          </h1>

          <p className="max-w-2xl text-white/55">
            A complete collection of projects I’ve built across web development,
            data visualization, and software engineering.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          {allProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-[#111114]/80 p-5 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#C6A972]/30"
            >
              <ProjectPreview />

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
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  <a
                    href={project.details}
                    className="text-sm text-[#C6A972] transition group-hover:translate-x-1"
                  >
                    View Details →
                  </a>

                  <a
                    href={project.demo}
                    className="text-sm text-white/45 transition hover:text-white"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
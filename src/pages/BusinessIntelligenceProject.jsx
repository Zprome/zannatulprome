import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import daf0 from "../assets/projects/business-intelligence/DAF0.jpg";
import daf1 from "../assets/projects/business-intelligence/DAF1.png";
import daf2 from "../assets/projects/business-intelligence/DAF2.png";
import daf3 from "../assets/projects/business-intelligence/DAF3.png";
import daf4 from "../assets/projects/business-intelligence/DAF4.png";
import daf5 from "../assets/projects/business-intelligence/DAF5.png";
import daf6 from "../assets/projects/business-intelligence/DAF6.png";
import daf7 from "../assets/projects/business-intelligence/DAF7.png";
import journal1 from "../assets/projects/business-intelligence/Data Journal 1.jpeg";
import journal2 from "../assets/projects/business-intelligence/Data Journal 2.jpeg";
import journal3 from "../assets/projects/business-intelligence/Data Journal 3.jpeg";

const images = [daf0, daf1, daf2, daf3, daf4, daf5, daf6, daf7];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function BusinessIntelligenceProject() {
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

        {/* Premium Hero */}
        <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            
          {/* Left Content */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Business Intelligence
            </p>

            <h1 className="mb-6 text-3xl font-semibold leading-[1.1] md:text-5xl lg:text-[3.2rem]">
              DAF Tightening Performance Dashboard
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
              A Qlik Sense dashboard designed for process and maintenance
              engineers to detect early tightening behaviour patterns, identify
              tool instability, and support preventive maintenance before failures
              disrupt production.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {["Qlik Sense", "Replit", "Business Intelligence", "Data Analysis"].map(
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

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="https://youtu.be/JU--K3YxSfg"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#C6A972] px-6 py-3 text-sm font-medium text-[#09090B] transition duration-300 hover:scale-105 hover:bg-[#D8BD82] hover:shadow-[0_10px_30px_rgba(198,169,114,0.3)]"
              >
                Watch Demo →
              </a>

              
            </div>
          </div>

          {/* Right Carousel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">

            {/* glow effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,169,114,0.15),transparent_40%)]" />

        
            <div className="relative overflow-hidden rounded-[1.5rem] bg-black">
              <img
                src={images[current]}
                alt="DAF dashboard preview"
                className="h-[400px] w-full object-cover opacity-90 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-[#C6A972]"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-2xl text-white/80 backdrop-blur-md transition hover:bg-black/70 hover:text-[#C6A972]"
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

        {/* Quick Overview Cards */}
        <section className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Audience", "Process and maintenance engineers"],
            ["Dataset", "≈42.5k tightening records"],
            ["Goal", "Preventive maintenance decisions"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#C6A972]/80">
                {label}
              </p>
              <p className="text-lg text-white/75">{value}</p>
            </div>
          ))}
        </section>


       
        {/* Challenge */}
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-28"
        >
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            {/* Left */}
            <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
                Challenge
            </p>

            <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                Engineers could see failures — but not where or why they were happening.
            </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-base leading-relaxed text-white/55">
            <p>
                The dataset contained thousands of tightening records, but without a
                structured view, it was difficult to determine whether failures were
                random, tool-related, or linked to specific bolt positions.
            </p>

            <p>
                This made it hard for maintenance teams to prioritise inspections or
                identify early signs of tool instability before issues escalated.
            </p>
            </div>

        </div>
        </motion.section>



        {/* Solution */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
        {/* Left visual flow */}
        <div className="rounded-[2rem] border border-white/10 bg-[#101013] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Solution Flow
            </p>

            <div className="space-y-5">
            {[
                ["01", "Monitor", "Start with overall tightening performance and NOK rates."],
                ["02", "Compare", "Separate Uryu and 5-Spindle tools to identify risk concentration."],
                ["03", "Diagnose", "Drill into time, shift, bolt position, and torque behaviour."],
                ["04", "Act", "Support targeted preventive maintenance decisions."],
            ].map(([number, title, text]) => (
                <div
                key={title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:border-[#C6A972]/30 hover:bg-white/[0.055]"
                >
                <span className="text-sm font-medium text-[#C6A972]">{number}</span>
                <div>
                    <h3 className="mb-1 text-lg font-semibold text-[#F5F1E8]">
                    {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">{text}</p>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Right text */}
        <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Solution
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
            I designed the dashboard as a guided diagnostic journey.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
            <p>
            Instead of presenting isolated charts, I structured the dashboard as a step-by-step diagnostic workflow. It starts with a high-level overview of tightening performance and NOK rates, allowing engineers to quickly identify which tool family contributes most to failures.
            </p>

            <p>
            From there, users can drill into individual tool health pages, where metrics like NOK trends, bolt-level failures, and torque behaviour reveal whether issues are random or systematic. Comparative views highlight where failure risk is concentrated, while deeper diagnostics enable engineers to trace problems across time, shift, and bolt position.
            </p>

            <p>
            This layered approach transforms raw data into actionable insight, helping engineers move from detecting anomalies to understanding their root causes and prioritising targeted maintenance actions.
            </p>
            </div>
        </div>
        </motion.section>


        {/* Key Insights */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28"
        >
        <div className="mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Key Insights
            </p>

            <h2 className="max-w-4xl text-2xl font-semibold leading-snug md:text-3xl">
            The data revealed clear differences in tool behaviour and failure patterns.
            </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
            {[
            {
                number: "01",
                title: "Uryu behaved like a stable baseline",
                desc: "Near-perfect OK rate, tightly clustered torque values, and only isolated NOK events.",
            },
            {
                number: "02",
                title: "5-Spindle carried most of the risk",
                desc: "Higher NOK rates and short failure spikes suggested intermittent instability.",
            },
            {
                number: "03",
                title: "Failures concentrated around specific bolts",
                desc: "Certain bolt positions showed higher failure rates, making inspections more targeted.",
            },
            {
                number: "04",
                title: "Torque deviations acted as warning signals",
                desc: "Higher NOK periods often aligned with shifts in average torque behaviour.",
            },
            ].map((item) => (
            <div
                key={item.number}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/30 hover:bg-white/[0.045]"
            >
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(198,169,114,0.12),transparent_45%)]" />

                <p className="relative mb-5 text-xs font-medium text-[#C6A972]">
                {item.number}
                </p>

                <h3 className="relative mb-3 text-lg font-semibold text-[#F5F1E8]">
                {item.title}
                </h3>

                <p className="relative text-sm leading-relaxed text-white/55">
                {item.desc}
                </p>
            </div>
            ))}
        </div>
        </motion.section>



        {/* Process / Data Journal */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        >
        <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Process
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
            I documented the analysis process before turning it into dashboard views.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
            <p>
            I used Replit as my working environment to explore the tightening dataset,
            document observations, and test which patterns were worth turning into
            dashboard views.
            </p>

            <p>
            Before building the final Qlik Sense dashboard, I created a data journal to
            connect the raw records with possible maintenance questions: which tool family
            fails more, where NOK events concentrate, how torque behaves over time, and
            whether failures relate to shifts or bolt positions.
            </p>

            <p>
            This process helped me decide which dashboard views mattered most — OK/NOK
            rates, torque stability, bolt-level failures, tool-family comparisons, and
            operational patterns across time.
            </p>
            </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {[journal1, journal2, journal3].map((image, index) => (
            <a
            key={index}
            href={image}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#C6A972]/35"
            >
            <div className="mb-4 h-24 overflow-hidden rounded-xl bg-white">
                <img
                src={image}
                alt={`Data journal ${index + 1}`}
                className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-105"
                />
            </div>

            <p className="text-sm font-medium text-[#F5F1E8]">
                Data Journal {index + 1}
            </p>
            <p className="mt-1 text-xs text-white/45">
                Open full analysis →
            </p>
            </a>
        ))}
        </div>
        </motion.section>



        {/* Outcome */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28 border-t border-white/10 pt-20"
        >
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Outcome
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">
            A dashboard that turns failure records into targeted maintenance decisions.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
            "Identified tool families contributing most to NOK events",
            "Highlighted bolt positions and time periods with higher failure risk",
            "Supported faster root-cause analysis and preventive maintenance planning",
            ].map((item) => (
            <div key={item} className="border-l border-[#C6A972]/40 pl-5">
                <p className="text-sm leading-relaxed text-white/60">{item}</p>
            </div>
            ))}
        </div>
        </motion.section>

        {/* Contribution + Learnings */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-24 grid gap-14 md:grid-cols-[0.9fr_1.1fr]"
        >
        <div className="group relative rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:border-[#C6A972]/30">

        {/* subtle glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(198,169,114,0.08),transparent_40%)] pointer-events-none" />

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Contribution
        </p>

        <h3 className="mb-5 text-2xl font-semibold leading-snug">
            Designed and built the full analytical workflow.
        </h3>

        <p className="leading-relaxed text-white/60">
            I developed this project end-to-end, starting from raw data exploration in
            Replit, documenting findings through a data journal, and translating those
            insights into a Qlik Sense dashboard.
        </p>

        <p className="mt-4 leading-relaxed text-white/60">
            I defined the key metrics, designed the diagnostic flow, and implemented
            dashboard views that support real-world maintenance decision-making.
        </p>

        </div>

        <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Learnings
            </p>

            <div className="space-y-6">
            {[
                {
                title: "Data Structuring",
                desc: "Transforming raw industrial data into meaningful analytical flows.",
                },
                {
                title: "Decision-Focused Design",
                desc: "Designing dashboards that support decisions, not just visualization.",
                },
                {
                title: "Pattern Identification",
                desc: "Understanding failure behaviour across time, tools, and bolt positions.",
                },
                {
                title: "Tool Integration",
                desc: "Combining exploratory analysis in Replit with BI development in Qlik Sense.",
                },
            ].map((item) => (
                <div
                key={item.title}
                className="group relative pl-6"
                >
                {/* Accent line */}
                <div className="absolute left-0 top-2 h-full w-[1px] bg-white/10 group-hover:bg-[#C6A972]/40 transition" />

                {/* Dot */}
                <div className="absolute left-[-3px] top-2 h-2 w-2 rounded-full bg-white/30 group-hover:bg-[#C6A972] transition" />

                {/* Content */}
                <h4 className="mb-1 text-sm font-medium text-[#F5F1E8] group-hover:text-[#C6A972] transition">
                    {item.title}
                </h4>

                <p className="text-sm leading-relaxed text-white/60">
                    {item.desc}
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
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import air2 from "../assets/projects/Data-Visualisation/air2.png";
import air3 from "../assets/projects/Data-Visualisation/air3.png";
import air4 from "../assets/projects/Data-Visualisation/air4.png";
import air5 from "../assets/projects/Data-Visualisation/air5.png";
import air6 from "../assets/projects/Data-Visualisation/air6.png";
import air7 from "../assets/projects/Data-Visualisation/air7.png";
import air8 from "../assets/projects/Data-Visualisation/air8.png";
import air9 from "../assets/projects/Data-Visualisation/air9.png";
import air10 from "../assets/projects/Data-Visualisation/air10.png";

const images = [air2, air3, air4, air5, air6, air7, air8, air9, air10];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function DataVisualisationProject() {
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
              Data Analytics & Visualization
            </p>

            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-5xl">
              Airbnb Analytics & Insights Dashboard
            </h1>

            <p className="mb-6 text-sm font-medium text-[#C6A972]/80">
              Qlik Sense Dashboard
            </p>

            <p className="mb-8 max-w-xl text-base leading-[1.9] text-white/60">
              A Qlik Sense dashboard analyzing Airbnb pricing, booking trends,
              guest satisfaction, and host performance across Antwerp, Brussels,
              and Ghent to help hosts make smarter data-informed decisions.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {[
                "Qlik Sense",
                "Data Visualization",
                "Data Analytics",
                "Business Analytics",
                "Dashboard Design",
                "Data Storytelling",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://youtu.be/h_lOkrqv4Qc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#C6A972] px-6 py-3 text-sm font-medium text-[#09090B] transition duration-300 hover:scale-105 hover:bg-[#D8BD82] hover:shadow-[0_10px_30px_rgba(198,169,114,0.3)]"
            >
              Watch Video →
            </a>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,169,114,0.15),transparent_40%)]" />

            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0A0A0C]">
              <div className="flex h-[250px] items-center justify-center">
                <img
                  src={images[current]}
                  alt="Airbnb dashboard preview"
                  className="max-h-full w-full rounded-[1.2rem] object-contain object-top opacity-100 brightness-110 contrast-110 transition duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

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
            ["Target Audience", "Airbnb hosts in Belgian cities"],
            ["Dataset", "9,500+ Airbnb listings"],
            ["Coverage", "Antwerp, Brussels & Ghent"],
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
        </motion.section>

        {/* Challenge */}
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
                Challenge
              </p>

              <h2 className="text-2xl font-semibold leading-snug md:text-3xl">
                Turning Airbnb market data into practical decisions for hosts.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                The project used Airbnb rental data from Antwerp, Brussels, and
                Ghent to create a dashboard that supports data-informed decision
                making for a specific stakeholder audience.
              </p>

              <p>
                Instead of only showing charts, the dashboard needed to guide
                users through a clear story: where to list, how to price, what
                affects guest satisfaction, and how top listings perform.
              </p>

              <p>
                The main challenge was balancing visual appeal with useful
                insight, making sure each sheet helped Airbnb hosts understand
                patterns and take action.
              </p>
            </div>
          </div>
        </motion.section>

        <div className="my-24 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>

        {/* Dashboard Flow */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#101013] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Dashboard Flow
            </p>

            <div className="space-y-5">
              {[
                [
                  "01",
                  "City & Room Insights",
                  "Compare listing volume, room types, and pricing spread across Antwerp, Brussels, and Ghent.",
                ],
                [
                  "02",
                  "Booking & Price Trends",
                  "Analyze monthly booking patterns, average pricing, and weekday versus weekend pricing behavior.",
                ],
                [
                  "03",
                  "Guest & Superhost Insights",
                  "Explore how room type, ratings, reviews, price, and Superhost status relate to guest experience.",
                ],
                [
                  "04",
                  "Top Listings & Host Strategies",
                  "Identify what separates high-performing listings and how hosts can position their properties more competitively.",
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
              I structured the dashboard as a guided story for Airbnb hosts.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                The dashboard is designed for Airbnb hosts who want to improve their listing
                performance across Antwerp, Brussels, and Ghent. Instead of focusing only on
                raw market data, each sheet answers a practical host question: where to list,
                what room type performs well, when prices rise, and what drives better guest
                reviews.
              </p>

              <p>
                The flow starts with city and room-type insights, then moves into booking and
                pricing trends so hosts can understand demand patterns and adjust pricing
                strategies more confidently.
              </p>

              <p>
                It then connects guest satisfaction, Superhost behavior, and top-listing
                performance to show hosts how to improve visibility, reviews, and overall
                competitiveness.
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
          className="mt-32"
        >
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Key Insights
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-3xl">
              The dashboard revealed clear patterns in pricing, demand, and
              listing performance.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Brussels leads the market",
                desc: "Brussels had the highest listing volume, making it both the most competitive and opportunity-rich city in the analysis.",
              },
              {
                title: "Entire homes dominate listings",
                desc: "Entire homes and apartments appeared as the preferred listing type across the analyzed cities.",
              },
              {
                title: "Weekends create pricing opportunity",
                desc: "Friday and Saturday showed stronger pricing potential, helping hosts identify where flat pricing may leave money on the table.",
              },
              {
                title: "Price does not guarantee satisfaction",
                desc: "High ratings appeared across different price levels, showing that guest experience depends on more than price alone.",
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

        {/* Technical Highlights */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28"
        >
          <div className="mb-14 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Technical Highlights
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
              The dashboard combined storytelling, filtering, statistical
              visuals, and Qlik Sense techniques.
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-white/55">
              The assignment required a user-friendly dashboard with multiple
              sheets, meaningful visualizations, set expressions, master items,
              drilldowns, images, context, and statistical chart types.
            </p>
          </div>

          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Dashboard Storytelling",
                desc: "Structured the dashboard around a clear host-focused narrative from market overview to pricing and performance strategy.",
              },
              {
                number: "02",
                title: "Set Expressions",
                desc: "Used Qlik Sense set expressions to calculate focused measures and compare specific subsets of the Airbnb data.",
              },
              {
                number: "03",
                title: "Interactive Filtering",
                desc: "Added selections and filtering to let users explore cities, room types, pricing ranges, ratings, and host behavior.",
              },
              {
                number: "04",
                title: "Statistical Visuals",
                desc: "Used distribution-focused visuals to communicate pricing spread and market positioning across cities.",
              },
              {
                number: "05",
                title: "Reference Lines & Context",
                desc: "Added benchmarks, annotations, and contextual text to help users interpret patterns instead of only viewing charts.",
              },
              {
                number: "06",
                title: "Dashboard UX",
                desc: "Used navigation, sheet structure, visual hierarchy, and consistent styling to make the dashboard easier to follow.",
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
                This project strengthened my ability to turn data into a clear
                visual story.
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-white/55">
                <p>
                  Building the dashboard taught me how to design analytics around
                  a specific audience instead of simply placing charts on a page.
                </p>

                <p>
                  I learned how visual hierarchy, annotations, filtering, and
                  chart selection can guide users toward better decisions.
                </p>
              </div>
            </div>

            <div className="space-y-8 lg:pt-10">
              {[
                "A strong dashboard needs a clear target audience and a focused story.",
                "Different chart types are useful only when they answer a specific business question.",
                "Pricing and booking data becomes more useful when connected to timing, city, and listing type.",
                "Annotations, benchmarks, and reference lines help users interpret patterns faster.",
                "Good dashboard design is not only about visuals, but about guiding users toward action.",
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
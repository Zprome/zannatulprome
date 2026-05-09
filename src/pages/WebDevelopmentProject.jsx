import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bb0 from "../assets/projects/WebDevelopment/BB0.png";
import bb1 from "../assets/projects/WebDevelopment/BB1.png";
import bb2 from "../assets/projects/WebDevelopment/BB2.png";
import bb3 from "../assets/projects/WebDevelopment/BB3.png";
import bb4 from "../assets/projects/WebDevelopment/BB4.png";
import bb5 from "../assets/projects/WebDevelopment/BB5.png";
import bb6 from "../assets/projects/WebDevelopment/BB6.png";
import bb7 from "../assets/projects/WebDevelopment/BB7.png";
import bb8 from "../assets/projects/WebDevelopment/BB8.png";
import bb9 from "../assets/projects/WebDevelopment/BB9.png";
import bb10 from "../assets/projects/WebDevelopment/BB10.png";
import bb11 from "../assets/projects/WebDevelopment/BB11.png";

const images = [bb0, bb1, bb2, bb3, bb4, bb5, bb6, bb7, bb8, bb9, bb10, bb11];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function WebDevelopmentProject() {
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
              Web Development
            </p>

            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">
              Book-A-Bite
            </h1>

            <p className="mb-6 text-sm font-medium text-[#C6A972]/80">
              Restaurant Management System
            </p>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
              A full-stack restaurant management application built with the
              Laravel TALL stack. The system allows customers to browse menu
              items, place food orders, book tables, manage accounts, and
              interact with a responsive customer-facing interface.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {[
                "Laravel",
                "Livewire",
                "Tailwind CSS",
                "Alpine.js",
                "Jetstream",
                "SQLite",
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
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#C6A972] px-6 py-3 text-sm font-medium text-[#09090B] transition duration-300 hover:scale-105 hover:bg-[#D8BD82] hover:shadow-[0_10px_30px_rgba(198,169,114,0.3)]"
            >
              Visit Live Site →
            </a>

           
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(198,169,114,0.15),transparent_40%)]" />

            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0A0A0C]">
              <div className="flex h-[320px] items-center justify-center">
                <img
                  src={images[current]}
                  alt="Book-A-Bite preview"
                  className="max-h-full w-full rounded-[1.2rem] object-contain object-top opacity-95 brightness-110 contrast-105 transition duration-700"
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
            ["Project Type", "Individual course project"],
            ["Focus Area", "Restaurant ordering & booking"],
            ["Architecture", "Role-based Laravel system"],
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
                Creating a complete restaurant system with both customer and
                admin workflows.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                The project needed to go beyond basic CRUD functionality by
                supporting real restaurant workflows such as menu browsing,
                ordering, table booking, user account management, and customer
                reviews.
              </p>

              <p>
                At the same time, administrators needed a dedicated management
                area for foods, categories, gallery content, orders, bookings,
                reviews, exports, and analytics.
              </p>

              <p>
                The main challenge was connecting these features into one
                consistent role-based system while keeping the user interface
                responsive, usable, and easy to navigate.
              </p>
            </div>
          </div>
        </motion.section>

        <div className="my-24 flex justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>

        {/* Solution */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-28 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-[#101013] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              System Flow
            </p>

            <div className="space-y-5">
              {[
                [
                  "01",
                  "Customer Experience",
                  "Browse menu items, filter categories, place orders, book tables, and manage account settings.",
                ],
                [
                  "02",
                  "Admin Management",
                  "Manage categories, foods, gallery items, bookings, orders, reviews, and system content.",
                ],
                [
                  "03",
                  "Livewire Interactivity",
                  "Use reactive search, filters, status updates, and full-page components for smoother workflows.",
                ],
                [
                  "04",
                  "Reporting & Export",
                  "Support CSV exports, analytics overview, and print-friendly reporting for admin users.",
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
              I designed the project as a role-based restaurant management
              platform.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
              <p>
                Book-A-Bite separates the customer and admin experience while
                keeping both sides connected through shared order, booking,
                review, and menu data.
              </p>

              <p>
                Livewire was used to make important pages more interactive,
                including menu filtering, order and booking views, reviews, and
                account settings.
              </p>

              <p>
                The admin area centralizes operational tasks, allowing restaurant
                staff to manage content and monitor activity through statistics,
                exports, and analytics.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32"
        >
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Core Features
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-3xl">
              The application includes both customer-facing functionality and a
              complete admin management panel.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Customer Features",
                desc: "Authentication, responsive homepage, menu browsing, cart ordering, table bookings, my orders, my bookings, review submission, and account settings.",
              },
              {
                title: "Admin Dashboard",
                desc: "System statistics, category management, food management with image upload, booking status updates, order management, and review approval workflow.",
              },
              {
                title: "Interactive UI",
                desc: "Livewire-powered search, category filters, status updates, full-page components, responsive navigation, and custom account settings.",
              },
              {
                title: "Reporting Additions",
                desc: "Filter-aware CSV export for orders and an analytics overview page with print-friendly PDF export support.",
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
              I added features that made the project feel closer to a real
              restaurant management system.
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-white/55">
              Beyond standard CRUD pages, the project includes role-based
              navigation, image handling, status management, review rules, export
              workflows, analytics, and responsive layouts for both desktop and
              mobile users.
            </p>
          </div>

          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {[
              {
                number: "01",
                title: "Role-Based Access",
                desc: "Separated admin and customer experiences through role-based navigation, permissions, and protected management pages.",
              },
              {
                number: "02",
                title: "Livewire Search & Filtering",
                desc: "Built interactive menu browsing with category filtering and search behavior without requiring full page reloads.",
              },
              {
                number: "03",
                title: "Image Upload & Content Management",
                desc: "Implemented image upload and storage for menu items and gallery content managed through the admin panel.",
              },
              {
                number: "04",
                title: "Order & Booking Status Flow",
                desc: "Created admin workflows for viewing and updating order and booking statuses in a structured way.",
              },
              {
                number: "05",
                title: "Review Approval Workflow",
                desc: "Added a one-review-per-user rule with admin approval and rejection before testimonials are displayed.",
              },
              {
                number: "06",
                title: "CSV Export & Analytics",
                desc: "Implemented filter-aware order export and an analytics overview page for aggregated admin reporting.",
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
                Building Book-A-Bite strengthened my full-stack development and
                system design thinking.
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-white/55">
                <p>
                  This project helped me understand how customer-facing features
                  and admin workflows need to connect through consistent data
                  models, validation, and permissions.
                </p>

                <p>
                  It also gave me more practice with Livewire components,
                  Tailwind styling, role-based behavior, uploads, exports, and
                  building a clean application flow from end to end.
                </p>
              </div>
            </div>

            <div className="space-y-7 lg:pt-10">
            {[
                "Building the project strengthened my understanding of Laravel’s MVC architecture and how backend systems are structured in real-world applications.",

                "Working with migrations, factories, and seeders improved my understanding of scalable database design and development workflows.",
                
                "Livewire showed me how to create interactive Laravel applications without relying heavily on frontend frameworks.",
                
                "Role-based workflows helped me understand how permissions and protected routes shape real-world applications.",
                
                "Designing both customer-facing features and admin tools improved my ability to connect frontend experience with backend business logic.",
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
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import gk0 from "../assets/projects/Skill2-GrowKasterlee/GK0.png";
import gk1 from "../assets/projects/Skill2-GrowKasterlee/GK1.png";
import gk2 from "../assets/projects/Skill2-GrowKasterlee/GK2.png";
import gk3 from "../assets/projects/Skill2-GrowKasterlee/GK3.png";
import gk4 from "../assets/projects/Skill2-GrowKasterlee/GK4.png";
import gk5 from "../assets/projects/Skill2-GrowKasterlee/GK5.png";
import gk6 from "../assets/projects/Skill2-GrowKasterlee/GK6.png";
import gk7 from "../assets/projects/Skill2-GrowKasterlee/GK7.png";


const images = [gk0, gk1, gk2, gk3, gk4, gk5, gk6, gk7];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function GrowKasterleeProject() {
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

        <section className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
              Skills Lab 2 Project
            </p>

            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">
              Grow Kasterlee
            </h1>

            <p className="mb-6 text-sm font-medium text-[#C6A972]/80">
              Team Project
            </p>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/60">
              A full-stack fitness management platform that helps members,
              coaches, and administrators manage training sessions, track
              progress, and automate communication through reminders and
              notifications.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              {["Laravel", "Livewire", "Tailwind", "Alpine.js", "Blade", "MySQL", "Laravel Scheduler"].map(
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

            <a
              href="https://www.growkasterlee.liam-tm.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-[#C6A972] px-6 py-3 text-sm font-medium text-[#09090B] transition duration-300 hover:scale-105 hover:bg-[#D8BD82] hover:shadow-[0_10px_30px_rgba(198,169,114,0.3)]"
            >
              Visit Live Site →
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101013] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0A0A0C]">
                <div className="flex h-[320px] items-center justify-center">
                <img
                    src={images[current]}
                    alt="GrowKasterlee preview"
                    className="max-h-full w-full rounded-[1.2rem] object-contain opacity-95 transition duration-700"
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


        {/* Quick Overview Cards */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-16 grid gap-5 md:grid-cols-3"
        >
        {[
            ["Project Type", "Full-stack team platform"],
            ["Focus Area", "Scheduling & session management"],
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
                Building a platform that could support members, coaches, and administrators within one connected fitness system.
            </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
            <p>
            The project required multiple systems to work together seamlessly:
            training session management, booking flows, progress tracking,
            notifications, reminders, and role-based access for different types
            of users.
            </p>

            <p>
            One of the biggest technical challenges was ensuring that scheduling,
            reminders, and user interactions remained reliable across different
            roles and real-world booking scenarios.
            </p>

            <p>
            The platform also needed to balance usability with backend reliability,
            requiring careful handling of validation, automation, and asynchronous
            processes.
            </p>
            </div>
        </div>
        </motion.section>


        <div className="my-24 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>


        {/* Solution Architecture */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        >
        {/* Left visual flow */}
        <div className="rounded-[2rem] border border-white/10 bg-[#101013] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            System Flow
            </p>

            <div className="space-y-5">
            {[
                
                [
                    "01",
                    "Multi-Role Platform",
                    "Separate workflows and permissions for members, coaches, and administrators.",
                ],
                [
                    "02",
                    "Training & Session Management",
                    "Centralized scheduling, bookings, and training organization across the platform.",
                ],
                [
                    "03",
                    "Communication & Notifications",
                    "Automated reminders, invites, and notification handling to improve engagement.",
                ],
                [
                    "04",
                    "Progress & Member Experience",
                    "Tracking activity, training progress, and overall user interaction within the system.",
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

        {/* Right text */}
        <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Solution
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
            The platform was designed around role-based scheduling and automation.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">

            <p>
            GrowKasterlee combined scheduling, training management,
            reminders, and notifications into a centralized system
            for members, coaches, and administrators.
            </p>

            <p>
            The architecture relied on role-based workflows,
            dynamic session handling, and automated background
            processes to keep scheduling and communication reliable.
            </p>

            <p>
            Features such as booking validation, notification delivery,
            and reminder automation were designed to support scalability
            and real-world usage scenarios.
            </p>
            </div>
        </div>
        </motion.section>



        {/* Contribution */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-28"
        >
        {/* Intro */}
        <div className="mb-14 max-w-4xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            My Contribution
            </p>

            <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
            I focused on building the scheduling, session-management, and automation
            systems behind the platform.
            </h2>

            <p className="max-w-3xl text-base leading-relaxed text-white/55">
            My main responsibility centered around the platform’s booking, scheduling,
            and communication workflows. I worked on features that handled dynamic
            calendar behavior, session booking, credit validation, group invitations,
            reminders, notifications, and user interactions across different roles.
            </p>
        </div>

        
        {/* Contribution List */}
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
        {[
            {
            number: "01",
            title: "Calendar & Scheduling",
            desc: "Built dynamic weekly calendar views with role-based behavior, session visualization, overlap handling, and support for both individual and group booking workflows.",
            },
            {
            number: "02",
            title: "Booking & Credit Logic",
            desc: "Integrated the booking flow with the platform’s credit system by validating user balances, displaying required session credits during booking, splitting session costs across invited group members, and redirecting users to purchase credits when their balance was insufficient.",
            },
            {
            number: "03",
            title: "Member Interaction Features",
            desc: "Implemented friends functionality, session-history views, upcoming-session tracking, and detailed session pages to improve member interaction and activity management.",
            },
            {
            number: "04",
            title: "Reminder Automation",
            desc: "Designed scheduler-based reminder logic supporting flexible notification timing and queued email delivery.",
            },
            {
            number: "05",
            title: "Notification System",
            desc: "Built notification workflows for session invites, reminders, booking actions, friend requests, and invitation acceptance handling across the platform.",
            },
            {
            number: "06",
            title: "Training Progress Features",
            desc: "Implemented progress tracking and training-history functionality for monitoring member activity.",
            },
        ].map((item) => (
            <div key={item.number} className="group relative pl-6">
            {/* Line */}
            <div className="absolute left-0 top-2 h-full w-px bg-white/10 transition group-hover:bg-[#C6A972]/40" />

            {/* Dot */}
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


        <div className="my-24 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C6A972] to-transparent opacity-80 shadow-[0_0_12px_rgba(198,169,114,0.35)]" />
        </div>


        {/* Key Technical Insights */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32"
        >
        <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
            Key Technical Insights
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-3xl">
            Building the platform required balancing scheduling complexity,
            automation, and system reliability.
            </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
            {[
            {
                title: "Dynamic Scheduling Logic",
                desc: "The scheduling system needed to handle overlapping bookings, role-specific behavior, availability checks, and real-time session visualization without creating conflicts between users.",
            },
            {
                title: "Flexible Reminder Architecture",
                desc: "Instead of creating multiple fixed cron jobs, the reminder system used a database-driven scheduling approach that allowed users to choose different reminder timings dynamically.",
            },
            {
                title: "Shared Group Session Credits",
                desc: "Group bookings introduced more complex booking logic, where session credits had to be distributed between accepted participants while preserving a centralized booking workflow.",
            },
            {
                title: "Scalable Notification Handling",
                desc: "Notifications, invitations, and email reminders were designed around reusable workflows and queued delivery to avoid blocking user interactions.",
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


        {/* Learnings & Takeaways */}
        <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-32 border-t border-white/10 pt-20"
        >
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            
            {/* Left Intro */}
            <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C6A972]">
                Learnings & Takeaways
            </p>

            <h2 className="mb-6 max-w-xl text-2xl font-semibold leading-snug md:text-3xl">
                Building GrowKasterlee strengthened both my backend architecture
                thinking and my ability to design systems around real-world user
                workflows.
            </h2>

            <div className="space-y-5 text-base leading-relaxed text-white/55">
                <p>
                Working on scheduling, automation, booking validation, reminders,
                and notifications taught me how quickly application complexity grows
                once multiple user roles and real-world constraints are involved.
                </p>

                <p>
                The project pushed me to think beyond UI implementation and focus on
                reliability, maintainability, async processing, and scalable system
                behavior across interconnected features.
                </p>
            </div>
            </div>

            {/* Right Learnings */}
            <div className="space-y-7 lg:pt-10">
            {[
                "Scheduling systems need strong backend rules, not just a clean calendar UI.",
                "Automation becomes easier to maintain when reminder logic is database-driven instead of hardcoded.",
                "Group booking flows require careful handling of credits, invitations, and acceptance states.",
                "Notifications should be reusable because the same structure supports invites, reminders, and user actions.",
                "Real-world features become complex when roles, permissions, and edge cases overlap.",
            ].map((item) => (
                <div key={item} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A972]" />
                <p className="text-sm leading-relaxed text-white/65 md:text-base">{item}</p>
                </div>
            ))}
            </div>
        </div>
        </motion.section>


      </div>
    </main>
  );
}
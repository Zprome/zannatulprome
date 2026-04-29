import { motion } from "framer-motion";
import { skillGroups, softSkills } from "../data/skills";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 pt-16 pb-28 sm:px-8 lg:px-12 lg:pt-20 lg:pb-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* LEFT glow */}
        <div className="absolute left-[8%] top-[22%] h-72 w-72 rounded-full bg-[#C6A972]/10 blur-[170px]" />

        {/* RIGHT glow */}
        <div className="absolute right-[10%] top-[26%] h-72 w-72 rounded-full bg-[#8F6336]/10 blur-[170px]" />

        {/* BOTTOM subtle glow */}
        <div className="absolute left-[50%] bottom-[8%] h-80 w-80 -translate-x-1/2 rounded-full bg-[#C6A972]/6 blur-[200px]" />
      </div>

      {/* NEW layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,9,11,0.68),transparent_72%)]" />


      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-[1120px]"
      >
        {/* HEADER */}
        <motion.div
          variants={itemVariants}
          className="mx-auto max-w-[520px] text-center"
        >
          <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
            Skills
          </p>

          <h2 className="font-heading text-[2rem] font-semibold leading-[1.15] tracking-[-0.03em] text-[#F5F1E8] sm:text-[2.2rem] lg:text-[2.4rem]">
            Skills & Tools
          </h2>

          <p className="mt-4 text-[15px] leading-8 text-[#AFA89B]">
            What I’ve been working with across my studies and projects.
          </p>

          <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#C6A972]/60 to-transparent" />


        </motion.div>

        {/* GRID */}
        <motion.div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[1.8rem] border border-[#232329] bg-[linear-gradient(180deg,rgba(17,17,21,0.90),rgba(11,11,15,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-[#C6A972]/28 hover:shadow-[0_28px_70px_rgba(0,0,0,0.34)] sm:p-7"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,169,114,0.10),transparent_42%)] opacity-70 transition duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-white/5" />

              <div className="relative z-10">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A972]">
                  {group.title}
                </p>

                <p className="mt-4 text-[14.5px] leading-7 text-[#AAA394]">
                  {group.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#2B2B31] bg-[rgba(255,255,255,0.02)] px-3.5 py-2 text-[13.5px] text-[#E7DED0] transition duration-300 hover:-translate-y-[1px] hover:border-[#C6A972]/35 hover:bg-[rgba(198,169,114,0.06)] hover:text-[#F5F1E8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div variants={itemVariants} className="mt-14">
          <div className="group relative overflow-hidden rounded-[1.8rem] border border-[#232329] bg-[rgba(14,14,18,0.64)] p-7 backdrop-blur-xl transition duration-500 hover:border-[#C6A972]/28 hover:shadow-[0_24px_60px_rgba(0,0,0,0.26)]">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.10),transparent_60%)] opacity-70 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
                Soft Skills
              </p>

              <p className="mt-3 text-[14.5px] leading-7 text-[#AFA89B]">
                The qualities I bring alongside the technical side of building.
                </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#2B2B31] bg-[rgba(255,255,255,0.02)] px-4 py-2 text-[14px] text-[#E7DED0] transition duration-300 hover:-translate-y-[1px] hover:border-[#C6A972]/35 hover:bg-[rgba(198,169,114,0.06)] hover:text-[#F5F1E8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills;
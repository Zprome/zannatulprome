import { motion } from "framer-motion";

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

function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[12%] h-64 w-64 rounded-full bg-[#C6A972]/6 blur-[140px]" />
        <div className="absolute right-[12%] bottom-[18%] h-72 w-72 rounded-full bg-[#8F6336]/7 blur-[160px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-[1120px]"
      >
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <motion.div variants={itemVariants} className="max-w-[380px]">
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#C6A972]">
              About Me
            </p>

            <h2 className="font-heading text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-[#F5F1E8] sm:text-[2.2rem] lg:text-[2.5rem]">
              I’m Zannatul Naima Prome.
            </h2>

            <p className="mt-5 text-[15.5px] leading-8 text-[#C8C0B2] sm:text-[16px]">
              An AI student at Thomas More Campus Geel with a growing focus on
              software engineering, frontend development, and thoughtfully built
              digital products.
            </p>

            <div className="mt-10 hidden lg:block">
              <div className="h-px w-20 bg-gradient-to-r from-[#C6A972]/70 to-transparent" />
              <p className="mt-6 text-[15px] leading-8 text-[#A49D91]">
                I’m especially interested in work that combines technical
                clarity, visual care, and strong user experience.
              </p>

              

              <p className="mt-6 text-[13.5px] italic leading-7 text-[#8E877A]">
                I’m still learning, but I care deeply about building things the
                right way.
              </p>

            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[#232329] bg-[linear-gradient(180deg,rgba(17,17,21,0.90),rgba(11,11,15,0.96))] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,169,114,0.11),transparent_42%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#C6A972]/80" />
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A972]">
                    Personal Approach
                  </p>
                </div>

                <p className="mt-7 max-w-[640px] text-[1.02rem] font-medium leading-9 text-[#ECE3D6] sm:text-[1.08rem]">
                  I care about building digital experiences that feel polished,
                  intentional, and technically strong.
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#C6A972]/45 via-white/8 to-transparent" />

                <div className="mt-8 grid gap-6">
                  <p className="text-[15.5px] leading-8 text-[#B7B0A4]">
                    What draws me most to this field is the balance between
                    structure and creativity. I enjoy solving problems through
                    logic, but I also care deeply about how a product feels to
                    use — how clearly it communicates, how naturally it guides
                    the user, and how thoughtfully it is presented.
                  </p>

                  <p className="text-[15.5px] leading-8 text-[#A29A8E]">
                    Although my academic path is in Artificial Intelligence, I’m
                    especially drawn to software engineering and modern frontend
                    development. I want the work I create to reflect both
                    technical care and design sensitivity — clean in structure,
                    refined in detail, and purposeful in execution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        
      </motion.div>
    </section>
  );
}

export default About;
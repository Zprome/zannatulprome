import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";

const words = [
  "Problem Solver",
  "CS Student",
  "Frontend Developer",
  "Aspiring Engineer",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 pt-32 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[18%] top-[16%] h-72 w-72 rounded-full bg-[#C6A972]/8 blur-[160px]" />
        <div className="absolute right-[16%] top-[18%] h-80 w-80 rounded-full bg-[#8F6336]/8 blur-[180px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-[1120px] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]"
      >
        <div className="max-w-[560px] text-center lg:text-left">
          <motion.p
            variants={itemVariants}
            className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#C6A972] sm:text-[11px]"
          >
            Computer Science Student • Aspiring Software Engineer
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-name text-[2.8rem] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[3.3rem] lg:text-[3.9rem]"
          >
            <span className="bg-gradient-to-b from-[#FFF9EE] via-[#EADFC8] to-[#C6A972] bg-clip-text text-transparent">
              Zannatul Naima
              <br />
              Prome
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-7">
            <div className="flex justify-center lg:justify-start">
              <span className="relative inline-block h-[34px] min-w-[240px] overflow-hidden text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-0 text-[1.32rem] font-medium leading-none text-[#E8D6B2]"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </div>

            <div className="mx-auto mt-4 h-px w-32 bg-gradient-to-r from-[#C6A972] via-[#8F6336]/60 to-transparent lg:mx-0" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-heading mt-8 max-w-[520px] text-[1.22rem] font-medium leading-[1.45] tracking-[-0.01em] text-[#F1EBDD] sm:text-[1.34rem] lg:text-[1.52rem]"
          >
            I build polished digital products with clean structure, clear
            logic, and thoughtful design.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-[520px] text-[15px] leading-8 text-[#AFA89B] sm:text-[15.5px]"
          >
            I&apos;m passionate about software engineering, modern web
            development, and building products that are technically strong,
            user-focused, and visually refined.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#projects"
              className="rounded-full border border-[#C6A972]/35 bg-[#C6A972]/10 px-6 py-3 text-sm font-medium text-[#F8F5EE] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C6A972] hover:text-[#09090B]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#2A2A31] bg-[#111113] px-6 py-3 text-sm font-medium text-[#F8F5EE] transition duration-300 hover:-translate-y-0.5 hover:border-[#C6A972]/40 hover:text-[#E3CFA4]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(198,169,114,0.12),transparent_72%)] blur-2xl" />

            <div className="relative rounded-[2rem] border border-[#2A2A31] bg-[rgba(20,20,24,0.65)] p-4 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(198,169,114,0.12),transparent_70%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/5" />

              <div className="relative overflow-hidden rounded-[1.6rem] border border-[#2A2A31]">
                <img
                  src={profile}
                  alt="Zannatul Naima Prome"
                  className="h-[380px] w-full object-cover object-top transition duration-500 hover:scale-[1.02] sm:h-[410px]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
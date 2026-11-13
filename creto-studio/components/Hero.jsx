"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

const headline = ["Digital Products.", "Built for What's Next."];

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.15 + i * 0.08, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 30% 20%, #012468 0%, #011032 55%, #011032 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#79ABCF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute inset-x-0 top-0 h-[55%] opacity-60 pointer-events-none lg:opacity-80 lg:inset-y-0 lg:top-0 lg:h-full lg:right-0 lg:left-[45%]">
        <Hero3D className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-[58vh] sm:pt-40 lg:pt-32 pb-20 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-[#B8D4EA] mb-5 sm:mb-6"
        >
          Creto Studio — Technology · Design · Growth
        </motion.p>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] lg:leading-[1.05] max-w-4xl">
          {headline.map((line, i) => (
            <motion.span
              key={line}
              custom={i}
              initial="hidden"
              animate="show"
              variants={wordVariants}
              className={`block ${i === 1 ? "text-[#79ABCF]" : ""}`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-mono text-[#C7DDF2] text-base sm:text-lg lg:text-xl mt-5 sm:mt-6 max-w-2xl leading-relaxed"
        >
          From high-performing websites and mobile apps to e-commerce,
          AI-powered software, and digital growth — we turn ambitious ideas
          into useful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <a
              href="#contact"
              data-cursor-hover
              className="group inline-flex items-center gap-2 rounded-full bg-[#004ACA] px-6 py-3.5 sm:px-8 sm:py-4 text-white font-mono text-sm hover:bg-[#0185FA] transition-colors duration-300"
            >
              Start a Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 sm:px-8 sm:py-4 text-white font-mono text-sm hover:bg-white/10 transition-colors"
          >
            Explore Our Work
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:flex absolute bottom-8 left-6 items-center gap-2 text-[#B8D4EA] font-mono text-xs tracking-wide"
        >
          <ChevronDown size={16} />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

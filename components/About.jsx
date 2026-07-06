"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollZoom from "./ScrollZoom";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const sectionRef = useRef(null);

  // Background drifts slower than the page scroll — a subtle parallax that
  // only shows up as you scroll through the section, not a decorative loop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const philosophy = [
    {
      n: "01",
      t: "Meaning",
      d: "We chose the name Creto from the Latin idea of natural, compounding growth. Software shouldn't just solve today's problems — it should become a foundation that evolves with tomorrow's opportunities.",
    },
    {
      n: "02",
      t: "Execution",
      d: "Every product we build is designed with scalability, performance, and long-term maintainability in mind — whether it's a startup MVP, an enterprise platform, or an AI-powered solution.",
    },
    {
      n: "03",
      t: "Vision",
      d: "We combine thoughtful design, modern engineering, and strategic thinking to create digital experiences that are intuitive and efficient, built to hold up years after launch.",
    },
  ];

  const principles = [
    { t: "Scalable by design", d: "Every architecture is built with future growth in mind, making expansion seamless instead of costly." },
    { t: "Quality engineering", d: "Clean code, robust testing, and maintainable systems ensure long-term reliability." },
    { t: "Human-centered design", d: "Great software isn't only functional — it feels effortless to use." },
    { t: "Partnership first", d: "We work alongside our clients as long-term partners as they grow." },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative pt-28 pb-24 sm:pt-40 sm:pb-32 bg-[#011032] overflow-hidden">
      <motion.div
        style={{ y: bgY }}
        className="absolute w-64 h-64 sm:w-[32rem] sm:h-[32rem] rounded-full blur-3xl opacity-20 -right-24 sm:-right-40 top-10 sm:top-20 gradient-vibrant"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <motion.div variants={fadeUp} className="mb-14 sm:mb-20 max-w-3xl">
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#B8D4EA] mb-4">Our philosophy</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">Designed to grow, thrive, and multiply.</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          {philosophy.map((p) => (
            <ScrollZoom key={p.n} minScale={0.9}>
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-white/10 bg-[#012468]/30 backdrop-blur-sm p-6 sm:p-8 hover:border-[#0185FA]/50 hover:bg-[#012468]/50 transition-colors duration-300"
              >
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#3DA3FF] mb-3 sm:mb-4">{p.n} / {p.t}</p>
                <p className="font-mono text-sm sm:text-base text-[#C7DDF2] leading-relaxed">{p.d}</p>
              </motion.div>
            </ScrollZoom>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 mb-20 sm:mb-28 border-y border-white/10 py-12 sm:py-16">
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#3DA3FF] mb-3">The focus</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our mission</h3>
            <p className="font-mono text-sm sm:text-base text-[#C7DDF2] leading-relaxed">
              To empower businesses with intelligent software that accelerates innovation, streamlines operations, and enables sustainable digital growth.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#3DA3FF] mb-3">The horizon</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our vision</h3>
            <p className="font-mono text-sm sm:text-base text-[#C7DDF2] leading-relaxed">
              To become a trusted technology partner for ambitious companies by building products that inspire confidence and continuous innovation.
            </p>
          </motion.div>
        </div>

        <motion.h3 variants={fadeUp} className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">What drives us</motion.h3>
        <motion.p variants={fadeUp} className="font-mono text-base sm:text-lg text-[#C7DDF2] mb-8 sm:mb-10">Principles behind every product</motion.p>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {principles.map((p) => (
            <motion.div
              key={p.t}
              variants={fadeUp}
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 hover:bg-[#012468]/30 hover:border-[#0185FA]/40 transition-colors duration-300"
            >
              <h4 className="font-display text-lg font-bold text-white mb-2 sm:mb-3">{p.t}</h4>
              <p className="font-mono text-sm sm:text-base text-[#C7DDF2] leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
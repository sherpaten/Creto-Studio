"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const projects = [
  { image: "/E-learn.png", title: "E-Learn Platform", category: "Education Platform", summary: "A digital learning experience designed to make course content easier to access.", href: "#contact" },
  { image: "/plumbing-Kathmandu.png", title: "Plumbing Kathmandu", category: "Service Business Website", summary: "A service-focused web experience that helps customers explore offerings and make enquiries.", href: "#contact" },
  { image: "/Shamu.png", title: "Shamu Cap Store", category: "E-Commerce Storefront", summary: "A product-led storefront concept for presenting and selling a focused collection.", href: "#contact" },
];

function ProjectCard({ project }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <motion.a
      href={project.href}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      aria-label={`Discuss a project like ${project.title} with Creto Studio`}
      className="group relative block rounded-2xl overflow-hidden border border-white/30 bg-[#011032]/40 backdrop-blur-sm hover:border-white transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="w-full h-56 sm:h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {hovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ position: "absolute", left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
            className="pointer-events-none z-10 rounded-full bg-white text-[#011032] font-mono text-xs font-bold px-4 py-2 whitespace-nowrap shadow-lg"
          >
            Discuss a similar project
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-mono text-xs tracking-[0.16em] uppercase text-[#B8D4EA] mb-2">{project.category}</p>
            <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
          </div>
          <ArrowUpRight size={19} className="text-white/80 group-hover:text-white transition-colors shrink-0 mt-1" />
        </div>
        <p className="font-mono text-sm text-white/85 leading-relaxed">{project.summary}</p>
        <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white">
          Discuss a similar project <span aria-hidden="true">→</span>
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#0185FA] overflow-hidden">
      <div className="absolute w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 -left-40 top-1/3 bg-white animate-pulse-slow" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <motion.div variants={fadeUp} className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-white font-semibold mb-4">Selected work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">Ideas made tangible.</h2>
          <p className="font-mono text-white text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A look at the kinds of digital experiences we create. Want to see
            how we could approach your project? Let’s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

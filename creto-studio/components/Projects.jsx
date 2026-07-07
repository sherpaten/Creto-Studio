"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const projects = [
  { image: "/E-learn.png", title: "E-Learn Platform", category: "E-Commerce & Education", href: "#" },
  { image: "/plumbing-Kathmandu.png", title: "Plumbing Kathmandu", category: "On-Demand Service Web App", href: "#" },
  { image: "/Shamu.png", title: "Shamu Cap Store", category: "E-Commerce Storefront", href: "#" },
];

function ProjectCard({ p }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  return (
    <motion.a
      href={p.href}
      variants={fadeUp}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      className="group relative block rounded-2xl overflow-hidden border border-white/30 bg-[#011032]/40 backdrop-blur-sm hover:border-white transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img src={p.image} alt={p.title} className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm px-3 py-1 text-xs font-mono text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Live on Vercel
        </span>

        {/* Cursor-following label */}
        {hovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ position: "absolute", left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }}
            className="pointer-events-none z-10 rounded-full bg-white text-[#011032] font-mono text-xs font-bold px-4 py-2 whitespace-nowrap shadow-lg"
          >
            View project →
          </motion.div>
        )}
      </div>

      <div className="p-6 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white mb-1">{p.title}</h3>
          <p className="font-mono text-sm text-white/90">{p.category}</p>
        </div>
        <ExternalLink size={18} className="text-white/90 group-hover:text-white transition-colors shrink-0 mt-1" />
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative pt-48 pb-32 bg-[#0185FA] overflow-hidden">
      <div className="absolute w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 -left-40 top-1/3 bg-white animate-pulse-slow" />

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="relative max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="font-mono text-sm tracking-[0.25em] uppercase text-white font-semibold mb-4">Our Portfolio</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">Built for Brands That Aim Higher</h2>
          <p className="font-mono text-white text-lg mt-4 max-w-xl mx-auto">
            Discover our real, high-performance custom applications engineered from scratch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
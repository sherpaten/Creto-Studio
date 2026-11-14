"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const projects = [
  { image: "/E-learn.png", title: "E-Learn Platform", category: "Education Platform", summary: "A digital learning experience designed to make course content easier to access." },
  { image: "/plumbing-Kathmandu.png", title: "Plumbing Kathmandu", category: "Service Business Website", summary: "A service-focused web experience that helps customers explore offerings and make enquiries." },
  { image: "/Shamu.png", title: "Shamu Cap Store", category: "E-Commerce Storefront", summary: "A product-led storefront concept for presenting and selling a focused collection." },
];

function ProjectCard({ project }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -7 }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A2148] shadow-[0_18px_60px_rgba(0,0,0,.18)] transition hover:border-[#36B9FF]/45">
      <Link href="/contact" aria-label={`Discuss a project like ${project.title} with Creto Studio`} className="block">
        <div className="relative overflow-hidden">
          <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-[1.04] sm:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06152F]/55 via-transparent to-transparent" />
          {hovering && <motion.span initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} style={{ position: "absolute", left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }} className="pointer-events-none z-10 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-[#061A3B] shadow-xl">Discuss a similar project</motion.span>}
        </div>
        <div className="p-6 sm:p-7">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#6DCBFF]">{project.category}</p>
          <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold text-white">{project.title}</h3><ArrowUpRight size={19} className="mt-1 shrink-0 text-[#65C9FF] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
          <p className="mt-3 text-sm leading-7 text-blue-100/65">{project.summary}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#81D4FF]">Discuss a similar project <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#061A3B] py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#0759D6]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#168BFF]/50 to-transparent" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#6DCBFF]">Selected work</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Ideas made tangible.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/65 sm:text-lg">A look at the kinds of digital experiences we create. Want to see how we could approach your project? Let’s talk.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3 sm:gap-8">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        <motion.div variants={fadeUp} className="mt-10"><Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#79CEFF] transition hover:text-white">Explore all projects <ArrowUpRight size={16}/></Link></motion.div>
      </motion.div>
    </section>
  );
}

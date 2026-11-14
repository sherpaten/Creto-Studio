"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const projects = [
  {
    image: "/CretoStudio.png",
    title: "Zero Point Meditation Center",
    category: "Non-profit · Wellness & Community",
    summary: "A digital home for a non-profit meditation community, bringing its programmes, teachings, events and community membership together in one accessible experience.",
    scope: ["Community information and teachings", "Class and event discovery", "Membership and visitor journeys"],
    url: "https://www.zeropointmeditationcenter.org/",
    action: "Visit live website",
    featured: true,
  },
  {
    image: "/E-learn.png",
    title: "E-Learn Platform",
    category: "Education Platform",
    summary: "A digital learning experience designed to make educational content easier to discover, navigate and access across devices.",
    scope: ["Learning content structure", "Course-focused browsing", "Responsive interface design"],
  },
  {
    image: "/plumbing-Kathmandu.png",
    title: "Plumbing Kathmandu",
    category: "Service Business Website",
    summary: "A service-focused web experience that presents core offerings clearly and gives local customers a straightforward way to explore services and make enquiries.",
    scope: ["Service and information pages", "Mobile-friendly customer journey", "Enquiry-focused structure"],
  },
  {
    image: "/Shamu.png",
    title: "Shamu Cap Store",
    category: "E-Commerce Storefront",
    summary: "A product-led storefront concept for presenting a focused collection and making it easier for customers to browse products.",
    scope: ["Product presentation", "Storefront browsing experience", "Commerce-ready layout"],
  },
];

function ProjectCard({ project, detailed }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const destination = project.url || "/contact";
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -7 }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }} className={`group relative overflow-hidden rounded-3xl border bg-[#0A2148] shadow-[0_18px_60px_rgba(0,0,0,.18)] transition hover:border-[#36B9FF]/45 ${project.featured ? "border-[#168BFF]/45" : "border-white/10"}`}>
      <Link href={destination} target={project.url ? "_blank" : undefined} rel={project.url ? "noreferrer" : undefined} aria-label={project.url ? "Visit the Zero Point Meditation Center website" : `Discuss a project like ${project.title} with Creto Studio`} className="block">
        <div className="relative overflow-hidden">
          <Image src={project.image} alt={`${project.title} website project preview`} width={900} height={600} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" quality={78} loading="lazy" className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-[1.04] sm:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06152F]/55 via-transparent to-transparent" />
          {project.featured && <span className="absolute left-4 top-4 rounded-full border border-[#8BD8FF]/35 bg-[#061A3B]/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#A9E5FF] backdrop-blur">Featured non-profit project</span>}
          {hovering && <motion.span initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} style={{ position: "absolute", left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }} className="pointer-events-none z-10 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-[#061A3B] shadow-xl">{project.action || "Discuss a similar project"}</motion.span>}
        </div>
        <div className="p-6 sm:p-7">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#6DCBFF]">{project.category}</p>
          <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold text-white">{project.title}</h3>{project.url ? <ExternalLink size={18} className="mt-1 shrink-0 text-[#65C9FF] transition group-hover:-translate-y-1 group-hover:translate-x-1" /> : <ArrowUpRight size={19} className="mt-1 shrink-0 text-[#65C9FF] transition group-hover:-translate-y-1 group-hover:translate-x-1" />}</div>
          <p className="mt-3 text-sm leading-7 text-blue-100/70">{project.summary}</p>
          {detailed && <div className="mt-5 border-t border-white/10 pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#8DD8FF]">Project focus</p>
            <ul className="mt-3 grid gap-2">
              {project.scope.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-6 text-blue-100/65"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#65C9FF]" />{item}</li>)}
            </ul>
          </div>}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#81D4FF]">{project.action || "Discuss a similar project"} <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects({ detailed = false }) {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#061A3B] py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#0759D6]/15 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#168BFF]/50 to-transparent" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#6DCBFF]">Selected work</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Ideas made tangible.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">A selection of digital experiences across community, education, local services and commerce. Each brief brings a different audience and challenge, so we shape the structure, content and technology around what the project needs.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8">{projects.map((project) => <ProjectCard key={project.title} project={project} detailed={detailed} />)}</div>
        {detailed && <motion.div variants={fadeUp} className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[.04] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#6DCBFF]">Your project, next</p>
            <h3 className="mt-3 text-2xl font-bold text-white">A different challenge deserves a considered solution.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/65">Tell us what you want to achieve. We can help define the right experience, scope and next steps for your organisation.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0759D6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0878E8]">Discuss a project <ArrowUpRight size={16} /></Link>
        </motion.div>}
      </motion.div>
    </section>
  );
}

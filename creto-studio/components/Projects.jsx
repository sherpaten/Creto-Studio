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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85",
    title: "RipTides Grill & Bar",
    category: "Hospitality · Restaurant Website & Membership",
    summary: "A digital experience for a restaurant and bar, bringing its online presence and customer membership journey together with a dedicated portal for member registration, secure sign-in and membership management.",
    scope: ["Restaurant website and customer information", "Membership registration and secure member login", "Member account, access and membership management"],
    url: "https://riptidesgrillandbar.com/",
    action: "Visit live website",
  },
  {
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85",
    title: "Customize Ans",
    category: "Custom Fashion · Wearable Art",
    summary: "A creative fashion website for transforming customer-provided garments into unique, personal expressions through hand painting, patchwork, embroidery and other custom techniques.",
    scope: ["Custom garment transformation", "Hand painting, patchwork and embroidery", "A visual showcase for personalised wearable art"],
    url: "https://customizeans.vercel.app/",
    action: "Visit live website",
  },
  {
    image: "/E-learn.png",
    title: "E-Learn Platform",
    category: "Education Platform",
    summary: "A digital learning experience designed to make educational content easier to discover, navigate and access across devices.",
    scope: ["Learning content structure", "Course-focused browsing", "Responsive interface design"],
    url: "https://e-lern.vercel.app/",
    action: "Visit live website",
  },
  {
    image: "/plumbing-Kathmandu.png",
    title: "Plumbing Kathmandu",
    category: "Service Business Website",
    summary: "A service-focused web experience that presents core offerings clearly and gives local customers a straightforward way to explore services and make enquiries.",
    scope: ["Service and information pages", "Mobile-friendly customer journey", "Enquiry-focused structure"],
    url: "https://plumbing-kathmandu.vercel.app/",
    action: "Visit live website",
  },
  {
    image: "/Shamu.png",
    title: "Shamu Cap Store",
    category: "E-Commerce Demo",
    summary: "A product-led storefront concept for presenting a focused collection and making it easier for customers to browse products.",
    scope: ["Product presentation", "Storefront browsing experience", "Commerce-ready layout"],
    status: "Demo coming soon",
    action: "Demo coming soon",
  },
];


const demoProjects = [
  {
    title: "Creto Commerce",
    platform: "Medusa",
    category: "E-commerce platform",
    summary: "A storefront concept for brands that need a polished way to present products, organise collections and guide shoppers from discovery to checkout. The preview includes sample products and a demo shopping journey.",
    focus: "Product catalogue · Shopping bag · Demo checkout",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1100&q=85",
    url: "https://creto-commerce-demo.vercel.app/",
  },
  {
    title: "Creto Commerce Pro",
    platform: "Saleor",
    category: "Headless commerce",
    summary: "A more premium commerce concept focused on product storytelling, considered presentation and a smooth browsing experience. Explore curated sample products and an interactive shopping journey.",
    focus: "Headless storefront concept · Product catalogue · Shopping journey",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1100&q=85",
    url: "https://creto-commerce-pro.vercel.app/",
  },
  {
    title: "Creto Operations",
    platform: "Appsmith",
    category: "Business dashboard",
    summary: "A central workspace concept that brings business information into one view. Explore sample performance indicators, operational records and workflow-focused dashboard layouts.",
    focus: "Operations dashboard · Sample data · Workflow tools",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=85",
    url: "https://creto-operations.vercel.app/",
  },
  {
    title: "Creto Content Studio",
    platform: "Wagtail",
    category: "CMS-powered website",
    summary: "A publishing-focused website concept for teams that need to organise articles, share updates and present information in a consistent editorial experience.",
    focus: "Content presentation · Editorial design · CMS concept",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85",
    url: "https://creto-content-studio.vercel.app/",
  },
];

function ProjectCard({ project, detailed }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const destination = project.url || "/contact";
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -7 }} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); }} className={`group relative overflow-hidden rounded-3xl border bg-white shadow-[0_18px_50px_rgba(15,35,60,.09)] transition hover:-translate-y-1 hover:border-[#168BFF]/45 ${project.featured ? "border-[#168BFF]/45" : "border-[#E5EAF0]"}`}>
      <Link href={destination} target={project.url ? "_blank" : undefined} rel={project.url ? "noreferrer" : undefined} aria-label={project.url ? `Visit the ${project.title} website` : `Discuss a project like ${project.title} with Creto Studio`} className="block">
        <div className="relative overflow-hidden">
          <Image src={project.image} alt={`${project.title} website project preview`} width={900} height={600} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" quality={78} loading="lazy" className="h-56 w-full object-cover object-top transition duration-700 group-hover:scale-[1.04] sm:h-64" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06152F]/55 via-transparent to-transparent" />
          {project.featured && <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#12345A] backdrop-blur">Featured non-profit project</span>}
          {project.status && <span className="absolute right-4 top-4 rounded-full border border-white/70 bg-[#102744]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-white backdrop-blur">{project.status}</span>}
          {hovering && <motion.span initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} style={{ position: "absolute", left: pos.x, top: pos.y, translateX: "-50%", translateY: "-50%" }} className="pointer-events-none z-10 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold text-[#061A3B] shadow-xl">{project.action || "Discuss a similar project"}</motion.span>}
        </div>
        <div className="p-6 sm:p-7">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#0878C8]">{project.category}</p>
          <div className="flex items-start justify-between gap-3"><h3 className="text-xl font-bold text-[#102744]">{project.title}</h3>{project.url ? <ExternalLink size={18} className="mt-1 shrink-0 text-[#0878C8] transition group-hover:-translate-y-1 group-hover:translate-x-1" /> : <ArrowUpRight size={19} className="mt-1 shrink-0 text-[#65C9FF] transition group-hover:-translate-y-1 group-hover:translate-x-1" />}</div>
          <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
          {detailed && <div className="mt-5 border-t border-slate-200 pt-5">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#0878C8]">Project focus</p>
            <ul className="mt-3 grid gap-2">
              {project.scope.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-6 text-slate-600"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#65C9FF]" />{item}</li>)}
            </ul>
          </div>}
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0878C8]">{project.action || "Discuss a similar project"} <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects({ detailed = false }) {
  return (
    <section id="projects" className="relative overflow-hidden bg-[#D8E9F3] py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#DCEBFA]/55 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#A9CBE8]/70 to-transparent" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#0878C8]">Selected work</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#102744] sm:text-5xl">Ideas made tangible.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">A selection of digital experiences across community, education, local services and commerce. Each brief brings a different audience and challenge, so we shape the structure, content and technology around what the project needs.</p>
          {detailed && <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">Some examples are live websites created for real organisations; others are independent concept demos built to explore what a focused digital product can do. Browse the work, see the thinking behind it and open the demos to experience the interfaces.</p>}
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 sm:gap-8">{projects.map((project) => <ProjectCard key={project.title} project={project} detailed={detailed} />)}</div>
        {detailed && (
          <motion.section variants={fadeUp} className="mt-20 grid gap-8 overflow-hidden rounded-3xl border border-[#DDE5EC] bg-white p-7 shadow-sm sm:grid-cols-[1.05fr_.95fr] sm:items-center sm:p-10 lg:p-12">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">The thinking behind the build</p>
              <h3 className="text-2xl leading-tight tracking-tight text-[#102744] sm:text-3xl">Good digital work starts with understanding the people who use it.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">We look beyond the screen to understand the organisation, its audience and the task a website or product needs to make easier. That helps us create experiences that feel clear to visitors and practical for the teams managing them.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="border-l-2 border-[#20B9FF] pl-4"><p className="text-sm font-semibold text-[#102744]">Purpose before pixels</p><p className="mt-1 text-xs leading-6 text-slate-500">Start with goals, audiences and useful content.</p></div>
                <div className="border-l-2 border-[#20B9FF] pl-4"><p className="text-sm font-semibold text-[#102744]">Designed for real use</p><p className="mt-1 text-xs leading-6 text-slate-500">Make journeys intuitive across screens and devices.</p></div>
              </div>
            </div>
            <div className="relative min-h-[250px] overflow-hidden rounded-2xl bg-[#EAF1F7] sm:min-h-[320px]">
              <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85" alt="Bright collaborative workspace representing thoughtful digital project planning" fill sizes="(max-width: 640px) 100vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#06152F]/55 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-semibold text-[#102744]">Strategy · Design · Development</span>
            </div>
          </motion.section>
        )}
        {detailed && (
          <motion.section variants={fadeUp} className="mt-20 border-t border-[#D9E1E8] pt-16">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#0878C8]">Creto demo lab</p>
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-[#102744] sm:text-4xl">Explore our interactive demos.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">Try these Creto-branded concept experiences, each built on an established open-source platform. Explore the interface and sample workflows; backend integrations and live transactions are not connected in these previews.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {demoProjects.map((project) => (
                <article key={project.platform} className="group overflow-hidden rounded-2xl border border-[#E0E6EC] bg-white shadow-[0_12px_38px_rgba(15,35,60,.07)] transition hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(15,35,60,.12)]">
                  <div className="relative h-48 overflow-hidden bg-[#EAF0F5] sm:h-56">
                    <Image src={project.image} alt={`${project.title} demo preview`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-[#12345A]">Interactive demo</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#0878C8]">{project.category}</p>
                    <h4 className="mt-3 text-xl font-bold text-[#102744]">{project.title}</h4>
                    <p className="mt-1 text-xs font-medium text-[#0878C8]">Built with {project.platform}</p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
                    <p className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">{project.focus}</p>
                    <a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0759D6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0878E8]">Open demo <ArrowUpRight size={16} /></a>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>
        )}
        {!detailed && <motion.div variants={fadeUp} className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#DDE5EC] bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#0878C8]">More from Creto Studio</p>
            <h3 className="mt-2 text-2xl font-bold text-[#102744]">Explore all our projects and demos.</h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">See more of our work and try the interactive product demonstrations.</p>
          </div>
          <Link href="/projects" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0759D6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0878E8]">View all projects <ArrowUpRight size={16} /></Link>
        </motion.div>}
                {detailed && <motion.div variants={fadeUp} className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#DDE5EC] bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#0878C8]">Your project, next</p>
            <h3 className="mt-3 text-2xl font-bold text-[#102744]">A different challenge deserves a considered solution.</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Tell us what you want to achieve. We can help define the right experience, scope and next steps for your organisation.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0759D6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0878E8]">Discuss a project <ArrowUpRight size={16} /></Link>
        </motion.div>}
      </motion.div>
    </section>
  );
}

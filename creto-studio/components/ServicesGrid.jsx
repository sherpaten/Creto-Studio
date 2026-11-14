"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, PenTool, ShoppingCart, Smartphone, Search, Cpu, Share2, Palette } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

const services = [
  { slug: "web-development", icon: Code2, title: "Web Development", desc: "Fast, responsive business websites and custom web applications built around your goals." },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", desc: "Thoughtful Android, iOS, and cross-platform experiences that keep customers connected." },
  { slug: "ecommerce", icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Online stores, product experiences, payments, and ordering workflows designed to convert." },
  { slug: "ui-ux-design", icon: PenTool, title: "UI/UX Design", desc: "Clear user journeys, intuitive interfaces, and product design grounded in real user needs." },
  { slug: "ai-software", icon: Cpu, title: "AI & Software Solutions", desc: "Custom software, practical AI integrations, and automation that reduce repetitive work." },
  { slug: "brand-identity", icon: Palette, title: "Brand Identity", desc: "Distinctive visual systems and brand experiences that help businesses stand apart." },
  { slug: "digital-marketing", icon: Search, title: "SEO & Digital Marketing", desc: "Search-focused foundations and digital campaigns that help the right people find you." },
  { slug: "social-media-management", icon: Share2, title: "Social Media Management", desc: "Consistent content planning and channel management that strengthen your online presence." },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#061D46] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#0878E8]/15 blur-[100px]" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#6DCBFF]">What we do</p>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">One partner for your next digital move.</h2>
          <p className="text-base leading-relaxed text-blue-100/70 sm:text-lg">Strategy, design, engineering, and digital growth — connected around the outcomes your business needs.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map(({ slug, icon: Icon, title, desc }) => (
            <motion.div key={slug} variants={fadeUp} className="h-full">
              <Link href={slug === "brand-identity" ? "/services" : `/services/${slug}`} className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20B9FF]">
                <TiltCard className="h-full rounded-2xl border border-white/10 bg-white/[.045] p-6 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#36B9FF]/55 group-hover:bg-[#0A2A58] group-hover:shadow-[0_18px_50px_rgba(0,100,220,.16)] sm:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#36B9FF]/20 bg-[#0878E8]/15 transition group-hover:scale-110 group-hover:bg-[#0878E8]/25"><Icon size={22} className="text-[#70CEFF]" /></div>
                  <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-blue-100/65">{desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#7BD3FF]">Explore service <ArrowUpRight size={15}/></span>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="mt-10 text-center sm:mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#36B9FF]/60 hover:bg-white/[.06]">View all services <ArrowUpRight size={16}/></Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

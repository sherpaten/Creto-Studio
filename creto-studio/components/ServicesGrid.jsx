"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  ShoppingCart,
  Smartphone,
  Search,
  Cpu,
  Share2,
  Palette,
} from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, responsive business websites and custom web applications built around your goals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Thoughtful Android, iOS, and cross-platform experiences that keep customers connected.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Online stores, product experiences, payments, and ordering workflows designed to convert.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Clear user journeys, intuitive interfaces, and product design grounded in real user needs.",
  },
  {
    icon: Cpu,
    title: "AI & Software Solutions",
    desc: "Custom software, practical AI integrations, and automation that reduce repetitive work.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Distinctive visual systems and brand experiences that help businesses stand apart.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Search-focused foundations and digital campaigns that help the right people find you.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    desc: "Consistent content planning and channel management that strengthen your online presence.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-[#012468] overflow-hidden">
      <div className="absolute w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 top-0 left-1/2 -translate-x-1/2 gradient-brand animate-pulse-slow" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase text-[#B8D4EA] mb-4">
            What we do
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-5">
            One partner for your next digital move.
          </h2>
          <p className="font-mono text-[#D6E7F7] text-base sm:text-lg leading-relaxed">
            Strategy, design, engineering, and digital growth — connected
            around the outcomes your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <TiltCard className="group h-full rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-[#3DA3FF] hover:shadow-[0_0_30px_rgba(1,133,250,0.3)] hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
                <p className="font-mono text-sm sm:text-base text-[#D6E7F7] leading-relaxed">{desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="text-center mt-10 sm:mt-12">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white font-mono text-sm hover:bg-white/10 transition-colors"
          >
            Talk through your project <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

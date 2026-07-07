"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, ShoppingCart, Fingerprint, Smartphone, Search, CloudCog, Film } from "lucide-react";
import TiltCard from "./TiltCard";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function ServicesGrid() {
  const services = [
    { icon: Code2, title: "Web Development", desc: "Engineering high-performance custom applications." },
    { icon: PenTool, title: "UI/UX Design", desc: "Crafting user-centric digital products." },
    { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Building secure digital stores and workflows." },
    { icon: Fingerprint, title: "Brand Identity Strategy", desc: "Developing powerful visual directions." },
    { icon: Smartphone, title: "Mobile App Engineering", desc: "Designing cross-platform applications." },
    { icon: Search, title: "SEO Optimization", desc: "Structuring clean site maps for visibility." },
    { icon: CloudCog, title: "Cloud Integration", desc: "Deploying secure backend frameworks." },
    { icon: Film, title: "Video Transformation", desc: "Editing premium corporate animations." },
  ];

  return (
    <section id="services" className="relative pt-48 pb-32 bg-[#012468] overflow-hidden">
      <div className="absolute w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 top-0 left-1/2 -translate-x-1/2 gradient-brand animate-pulse-slow" />

      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="relative max-w-7xl mx-auto px-6">
        <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold text-white mb-16 text-center">
          High-Impact Capabilities
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp}>
              <TiltCard className="group rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-sm p-7 transition-all duration-300 hover:border-[#3DA3FF] hover:shadow-[0_0_30px_rgba(1,133,250,0.3)] hover:-translate-y-2 will-change-transform">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                <p className="font-mono text-base text-[#D6E7F7] leading-relaxed">{desc}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const members = [
  { name: "Tenzing Norkay Sherpa", role: "CEO/Founder & Lead Developer", bio: "Architecting high-performance digital systems and leading team innovation.", photo: "/Tenzing.png" },
  { name: "Dawa Theeng", role: "Co-Founder & Creative Director", bio: "Defining visual identities and crafting immersive user experiences.", photo: "/Dawa.jpeg" },
  { name: "Rekha Bhatarai", role: "CFO & Marketing Head", bio: "Optimizing growth strategies through data-driven market insights.", photo: "/Rekha.jpeg" },
  { name: "Pemba Gelu Sherpa", role: "CTO", bio: "Overseeing technical infrastructure and deployment excellence.", photo: "/Pemba.jpeg" },
];

export default function Team() {
  return (
    <section id="team" className="relative pt-48 pb-32 bg-[#79ABCF]">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 variants={fadeUp} className="font-display text-4xl sm:text-5xl font-bold text-[#011032] mb-4">The Brains Behind the Studio</motion.h2>
        <motion.p variants={fadeUp} className="font-mono text-[#012468] text-lg mb-16 max-w-xl mx-auto">A small, senior team obsessed with craft.</motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m) => (
            <motion.div key={m.name} variants={fadeUp} className="group rounded-2xl overflow-hidden border border-[#011032]/10 bg-white hover:border-[#004ACA]/40 transition-colors duration-300 shadow-lg">
              {/* Flip zone — only the photo flips */}
              <div className="[perspective:1200px] h-64">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front: grayscale photo */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  {/* Back: full color photo */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Text stays fixed below, never flips */}
              <div className="p-6 text-left">
                <h3 className="font-display text-lg font-bold text-[#011032] mb-1">{m.name}</h3>
                <p className="font-mono text-sm font-semibold text-[#004ACA] mb-3">{m.role}</p>
                <p className="font-mono text-sm text-[#012468] leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
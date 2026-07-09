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
    <section id="team" className="relative pt-28 pb-20 sm:pt-48 sm:pb-32 bg-[#79ABCF]">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#011032] mb-4">The Brains Behind the Studio</motion.h2>
        <motion.p variants={fadeUp} className="font-mono text-[#012468] text-base sm:text-lg mb-10 sm:mb-16 max-w-xl mx-auto">A small, senior team obsessed with craft.</motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {members.map((m) => (
            <motion.div key={m.name} variants={fadeUp} className="group rounded-2xl overflow-hidden border border-[#011032]/10 bg-white hover:border-[#004ACA]/40 transition-colors duration-300 shadow-lg">
              {/* Flip zone — only the photo flips. Aspect-ratio keeps the
                  crop proportional at every card width instead of a fixed
                  px height, which was cutting photos off on narrow mobile cards. */}
              <div className="[perspective:1200px] aspect-[3/4]">
                <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front: grayscale photo */}
                  <div className="absolute inset-0 [backface-visibility:hidden]">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-[center_15%] grayscale" />
                  </div>
                  {/* Back: full color photo */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-[center_15%]" />
                  </div>
                </div>
              </div>

              {/* Text stays fixed below, never flips */}
              <div className="p-3 sm:p-6 text-left">
                <h3 className="font-display text-sm sm:text-lg font-bold text-[#011032] mb-1 leading-snug">{m.name}</h3>
                <p className="font-mono text-xs sm:text-sm font-semibold text-[#004ACA] mb-2 sm:mb-3">{m.role}</p>
                <p className="hidden sm:block font-mono text-sm text-[#012468] leading-relaxed">{m.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
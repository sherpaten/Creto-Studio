"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } };

const members = [
  { name: "Tenzing Norkay Sherpa", role: "CEO, Founder & Lead Developer", bio: "Leads the studio's direction and brings business goals, product thinking and software engineering together.", photo: "/Tenzing.png" },
  { name: "Dawa Theeng", role: "Co-Founder & Creative Director", bio: "Guides creative direction and shapes clear visual identities and thoughtful digital experiences.", photo: "/Dawa.jpeg" },
  { name: "Rekha Bhatarai", role: "CFO & Marketing Head", bio: "Supports financial planning and marketing strategy, helping the studio make considered decisions as it grows.", photo: "/Rekha.jpeg" },
  { name: "Pemba Gelu Sherpa", role: "Chief Technology Officer", bio: "Oversees technical direction and helps deliver reliable, maintainable digital solutions.", photo: "/Pemba.jpeg" },
];

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 overflow-hidden bg-[#080F1E] py-24 sm:py-32">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0759D6]/15 blur-[110px]" />
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <motion.p variants={fadeUp} className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#72CFFF]">The people behind the work</motion.p>
          <motion.h2 variants={fadeUp} className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">Meet the people behind Creto.</motion.h2>
          <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">Our leadership team brings together creative direction, technology, business operations and marketing. Different perspectives help us approach each project with care, clarity and a shared focus on the people it serves.</motion.p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {members.map((m) => (
            <motion.article key={m.name} variants={fadeUp} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1A2E] shadow-[0_18px_55px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-[#278FEA]/50">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#102746]">
                <Image src={m.photo} alt={m.name} width={640} height={800} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw" quality={78} loading="lazy" className="h-full w-full object-cover object-[center_15%] grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-base font-bold leading-snug text-white sm:text-lg">{m.name}</h3>
                <p className="mb-3 mt-2 text-xs font-semibold leading-relaxed text-[#68C8FF] sm:text-sm">{m.role}</p>
                <p className="text-sm leading-7 text-slate-400">{m.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

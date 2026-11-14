"use client";
import { motion } from "framer-motion";
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } };
const members = [
  { name: "Tenzing Norkay Sherpa", role: "CEO/Founder & Lead Developer", bio: "Architecting high-performance digital systems and leading team innovation.", photo: "/Tenzing.png" },
  { name: "Dawa Theeng", role: "Co-Founder & Creative Director", bio: "Defining visual identities and crafting immersive user experiences.", photo: "/Dawa.jpeg" },
  { name: "Rekha Bhatarai", role: "CFO & Marketing Head", bio: "Optimizing growth strategies through data-driven market insights.", photo: "/Rekha.jpeg" },
  { name: "Pemba Gelu Sherpa", role: "CTO", bio: "Overseeing technical infrastructure and deployment excellence.", photo: "/Pemba.jpeg" },
];
export default function Team() {
 return <section id="team" className="relative overflow-hidden bg-[#080F1E] py-24 sm:py-32">
  <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0759D6]/15 blur-[110px]"/>
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once:true, amount:.15 }} className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
   <motion.p variants={fadeUp} className="mb-4 text-xs font-bold uppercase tracking-[.24em] text-[#72CFFF]">The people behind the work</motion.p>
   <motion.h2 variants={fadeUp} className="mb-4 text-3xl font-bold text-white sm:text-5xl">The Brains Behind the Studio</motion.h2>
   <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-xl text-base text-slate-400 sm:mb-16 sm:text-lg">A small, senior team obsessed with craft.</motion.p>
   <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
    {members.map(m=><motion.article key={m.name} variants={fadeUp} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0D1A2E] text-left shadow-[0_18px_55px_rgba(0,0,0,.2)] transition duration-300 hover:-translate-y-1 hover:border-[#278FEA]/50">
      <div className="aspect-[3/4] overflow-hidden"><img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover object-[center_15%] grayscale transition duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"/></div>
      <div className="p-3 sm:p-6"><h3 className="text-sm font-bold leading-snug text-white sm:text-lg">{m.name}</h3><p className="mb-2 mt-1 text-xs font-semibold text-[#68C8FF] sm:mb-3 sm:text-sm">{m.role}</p><p className="hidden text-sm leading-relaxed text-slate-400 sm:block">{m.bio}</p></div>
    </motion.article>)}
   </div>
  </motion.div>
 </section>;
}

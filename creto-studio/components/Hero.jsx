"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

const headline = ["Digital Products.", "Built for What's Next."];

const wordVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.16 + i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#04132D] pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_18%,rgba(0,91,220,.30),transparent_45%),radial-gradient(ellipse_at_85%_72%,rgba(0,190,255,.12),transparent_38%),linear-gradient(120deg,#04132D_0%,#061D46_58%,#03112A_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.13]" style={{ backgroundImage: "linear-gradient(rgba(93,177,255,.22) 1px, transparent 1px),linear-gradient(90deg,rgba(93,177,255,.22) 1px,transparent 1px)", backgroundSize: "64px 64px", maskImage: "linear-gradient(to bottom,black,transparent 90%)" }} />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#0759D6]/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-10rem] top-1/4 h-[34rem] w-[34rem] rounded-full border border-[#20A8FF]/20 bg-[radial-gradient(circle,rgba(0,119,255,.13),transparent_68%)]" />
      <div className="pointer-events-none absolute right-[-6rem] top-[18%] h-[30rem] w-[30rem] opacity-60 sm:right-[1%] lg:right-[3%]">
        <Hero3D className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#43B9FF]/25 bg-[#0A2A58]/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[.23em] text-[#8BD8FF] sm:text-xs">
            <Sparkles size={14} className="text-[#16B9FF]" /> Technology · Design · Growth
          </motion.div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-[-.055em] text-white sm:text-6xl lg:text-[5.15rem]">
            {headline.map((line, i) => (
              <motion.span key={line} custom={i} initial="hidden" animate="show" variants={wordVariants} className={i === 1 ? "block bg-gradient-to-r from-[#168BFF] via-[#20B9FF] to-[#A5E8FF] bg-clip-text text-transparent" : "block"}>
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }} className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
            From high-performing websites and mobile apps to e-commerce, AI-powered software and digital growth — we turn ambitious ideas into useful digital experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .55 }} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_34px_rgba(0,111,255,.28)] transition hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(0,160,255,.35)]">
              Start a project <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.04] px-7 py-4 text-sm font-semibold text-white transition hover:border-[#39BFFF]/60 hover:bg-white/[.08]">
              Explore our work <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-blue-100/55">
            <span>Web & Mobile</span><span className="text-[#20B9FF]">/</span><span>AI & Software</span><span className="text-[#20B9FF]">/</span><span>Digital Growth</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .25 }} className="relative hidden min-h-[430px] items-center justify-center lg:flex">
          <div className="absolute h-[360px] w-[360px] rounded-full border border-[#27B7FF]/25 shadow-[0_0_90px_rgba(0,119,255,.12)]" />
          <div className="absolute h-[290px] w-[290px] rounded-full border border-dashed border-[#54C7FF]/30" />
          <div className="absolute h-[220px] w-[220px] rounded-full bg-gradient-to-br from-[#0878E8]/25 to-[#13D4F5]/10 blur-2xl" />
          <div className="relative flex h-52 w-52 items-center justify-center rounded-[2.5rem] border border-[#62CFFF]/30 bg-gradient-to-br from-[#0C4EAA]/55 via-[#061E48]/90 to-[#04132D]/90 shadow-[0_30px_100px_rgba(0,120,255,.25)] backdrop-blur-xl">
            <img src="/logo.png" alt="Creto Studio logo" className="w-40 rounded-xl bg-white p-2 shadow-2xl" />
            <span className="absolute -right-7 top-7 h-3 w-3 rounded-full bg-[#17C7FF] shadow-[0_0_24px_#17C7FF]" />
            <span className="absolute -bottom-4 left-8 h-2 w-2 rounded-full bg-[#0878E8] shadow-[0_0_20px_#0878E8]" />
          </div>
          <div className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-[#071D43]/80 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#6CCEFF]">Our focus</p>
            <p className="mt-1 text-sm font-semibold text-white">Ideas into impact.</p>
          </div>
          <div className="absolute bottom-10 left-0 rounded-2xl border border-white/10 bg-[#071D43]/80 px-4 py-3 shadow-xl backdrop-blur-xl">
            <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#6CCEFF]">Built around you</p>
            <p className="mt-1 text-sm font-semibold text-white">Design · Build · Grow</p>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-wide text-blue-100/55 lg:flex">
        <ChevronDown size={15} /> Scroll to explore
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { number: "01", icon: Compass, title: "Discover", description: "We learn about your business, audience, goals, and the problem your project needs to solve." },
  { number: "02", icon: PenTool, title: "Plan & design", description: "We shape the scope, map the experience, and agree on a clear direction before development." },
  { number: "03", icon: Code2, title: "Build & refine", description: "We develop the solution, share progress, and refine the details with your feedback." },
  { number: "04", icon: Rocket, title: "Launch & support", description: "We prepare your project for launch and can continue supporting its improvement as you grow." },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#011032] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#79ABCF]">How we work</p>
          <h2 className="font-display text-3xl font-bold text-white sm:text-5xl">A clear path from idea to impact.</h2>
          <p className="mt-5 font-mono text-base leading-relaxed text-[#C7DDF2] sm:text-lg">
            A collaborative process keeps the work focused, transparent, and moving forward.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-[#3DA3FF]">{number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#004ACA]/30 text-[#79ABCF]">
                  <Icon size={21} />
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 font-mono text-sm leading-relaxed text-[#C7DDF2]">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

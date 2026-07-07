"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const capabilities = [
  "Custom Web Architecture",
  "User Interface (UI/UX) Design",
  "Custom Software Engineering",
  "Professional Graphic Design",
  "Cinematic Video Editing",
  "Digital Marketing & Brand Growth",
  "SEO Strategy & Core Analytics",
  "Cloud Optimization & DevOps",
];

const inputClasses =
  "peer w-full rounded-xl bg-[#012468]/40 border border-white/10 px-4 pt-6 pb-2 text-white font-mono text-sm placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#0185FA] focus:border-transparent transition-all duration-300";

const labelClasses =
  "absolute left-4 top-4 font-mono text-xs tracking-[0.1em] uppercase text-[#79ABCF]/70 transition-all duration-200 pointer-events-none " +
  "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-[#79ABCF]/50 " +
  "peer-focus:top-2 peer-focus:text-[10px] peer-focus:tracking-[0.15em] peer-focus:uppercase peer-focus:text-[#0185FA]";

function FloatingField({ label, children }) {
  return (
    <div className="relative">
      {children}
      <label className={labelClasses}>{label}</label>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", capability: "", scope: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");

    // simulate submit — swap with real request
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2200);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-32 bg-white">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-[#004ACA]/10 px-4 py-1.5 font-mono text-xs tracking-[0.2em] uppercase text-[#004ACA] mb-6">Get in Touch</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#011032] mb-6 leading-tight">Let&apos;s build something legendary.</h2>
            <p className="font-mono text-[#012468]/70 mb-10 max-w-md leading-relaxed">
              Reach out through our official operating channels. Our strategy desk is standing by.
            </p>

            <div className="rounded-2xl border border-[#011032]/10 bg-[#011032] p-6 mb-6">
              <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#79ABCF]/70 mb-2">Official Communication Vector</p>
              <a href="mailto:idesign4269@gmail.com" className="font-display text-xl font-bold text-white hover:text-[#0185FA] transition-colors duration-300">idesign4269@gmail.com</a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-[#011032]/10 bg-[#011032] p-6">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#79ABCF]/70 mb-2">Primary Vector</p>
                <a href="tel:+9779747457986" className="font-mono text-white hover:text-[#0185FA] transition-colors duration-300">+977 9747457986</a>
              </div>
              <div className="rounded-2xl border border-[#011032]/10 bg-[#011032] p-6">
                <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#79ABCF]/70 mb-2">Secondary Vector</p>
                <a href="tel:+9779818778998" className="font-mono text-white hover:text-[#0185FA] transition-colors duration-300">+977 9818778998</a>
              </div>
            </div>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="rounded-2xl border border-[#011032]/10 bg-[#011032] p-8 space-y-5 shadow-xl">
            <div className="grid sm:grid-cols-2 gap-5">
              <FloatingField label="Name">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                />
              </FloatingField>

              <FloatingField label="Email">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                />
              </FloatingField>
            </div>

            <div>
              <label className="block font-mono text-xs tracking-[0.15em] uppercase text-[#79ABCF]/70 mb-2">Select Requested Capability</label>
              <select
                required
                value={form.capability}
                onChange={(e) => setForm({ ...form, capability: e.target.value })}
                className="w-full rounded-xl bg-[#012468]/40 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#0185FA] focus:border-transparent transition-all duration-300"
              >
                <option value="" disabled>Choose a service channel...</option>
                {capabilities.map((c) => (
                  <option key={c} value={c} className="bg-[#011032]">{c}</option>
                ))}
              </select>
            </div>

            <FloatingField label="Project Scope Description">
              <textarea
                placeholder="Project Scope Description"
                rows={4}
                required
                value={form.scope}
                onChange={(e) => setForm({ ...form, scope: e.target.value })}
                className={inputClasses}
              />
            </FloatingField>

            <motion.button
              type="submit"
              whileHover={status === "idle" ? { scale: 1.02 } : {}}
              whileTap={status === "idle" ? { scale: 0.98 } : {}}
              disabled={status !== "idle"}
              className="relative w-full rounded-xl bg-[#004ACA] py-3 text-white font-mono text-sm tracking-[0.1em] uppercase hover:bg-[#0185FA] hover:shadow-[0_0_25px_rgba(1,133,250,0.6)] transition-all duration-300 disabled:hover:shadow-none flex items-center justify-center gap-2 overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    Submit Proposal
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={16} />
                    Proposal Sent
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
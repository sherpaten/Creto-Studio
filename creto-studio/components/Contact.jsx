"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, User, Mail, Briefcase, MessageSquare, Zap, Award, Lock, Send, ChevronDown } from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", capability: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", "ec609227-9290-48a0-8436-fa5f358ea7d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", capability: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClass = "w-full bg-[#0b0e14] border border-gray-700 rounded-xl p-4 pl-12 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-150 disabled:opacity-50";

  return (
    <section id="contact" className="relative py-32 bg-white">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 font-mono text-xs tracking-[0.2em] uppercase text-blue-600 mb-6 border border-blue-100">
              Get in Touch
            </span>
            <h2 className="text-5xl font-bold text-[#011032] mb-6 leading-tight">Let's build something legendary.</h2>
            <p className="text-gray-600 mb-10 max-w-md leading-relaxed">
              Reach out through our official operating channels. Our strategy desk is standing by to help bring your vision to life.
            </p>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-6 flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-xl text-white"><Mail size={24} /></div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Official Communication</p>
                <a href="mailto:idesign4269@gmail.com" className="text-lg font-bold text-[#011032]">info@cretostudio.com</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Primary", "Secondary"].map((type) => (
                <div key={type} className="border border-gray-100 rounded-2xl p-4">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">{type} Vector</p>
                  <p className="text-sm font-semibold text-[#011032]">+977 9818778998</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-[#0b0e14] rounded-3xl p-10 shadow-2xl border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-1">SEND US A MESSAGE</h2>
            <p className="text-gray-400 text-sm mb-8">We typically respond within 24 hours.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="text" name="name" placeholder="Your Name" required className={inputClass} value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="email" name="email" placeholder="Your Email" required className={inputClass} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
              </div>
            </div>

            <div className="relative mb-6">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <select name="capability" required className={`${inputClass} appearance-none`} value={form.capability} onChange={(e) => setForm({...form, capability: e.target.value})}>
                <option value="">Choose a service channel...</option>
                <option value="Web Design">Web Design</option>
                <option value="Branding">Branding</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
            </div>

            <div className="relative mb-8">
              <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500" />
              <textarea name="message" placeholder="Project Scope Description" rows="4" required className={`${inputClass} pt-4 resize-none`} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} />
            </div>

            <div className="grid grid-cols-3 gap-2 mb-8 border border-gray-800 rounded-2xl p-4 bg-[#111827]">
              {[ {icon: Zap, text: "Quick Response"}, {icon: Award, text: "Trusted Partner"}, {icon: Lock, text: "Secure & Private"} ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <item.icon className="text-blue-500" size={20} />
                  <span className="text-[10px] text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <button type="submit" disabled={status !== "idle"} className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 text-white font-bold py-4 rounded-2xl transition">
              <AnimatePresence mode="wait">
                {status === "idle" && <><Send size={18} /> SUBMIT PROPOSAL</>}
                {status === "sending" && <><Loader2 className="animate-spin" size={18} /> SENDING...</>}
                {status === "sent" && <><Check size={18} /> PROPOSAL SENT</>}
                {status === "error" && <span>ERROR - TRY AGAIN</span>}
              </AnimatePresence>
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
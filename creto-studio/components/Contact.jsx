"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, User, Mail, Briefcase, MessageSquare, Zap, Award, Lock, Send, ChevronDown } from "lucide-react";
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } };
export default function Contact() {
 const [form,setForm]=useState({name:"",email:"",capability:"",message:""}); const [status,setStatus]=useState("idle");
 const handleSubmit=async e=>{e.preventDefault();setStatus("sending");const formData=new FormData(e.target);formData.append("access_key","ec609227-9290-48a0-8436-fa5f358ea7d7");try{const response=await fetch("https://api.web3forms.com/submit",{method:"POST",body:formData});const data=await response.json();if(data.success){setStatus("sent");setForm({name:"",email:"",capability:"",message:""});setTimeout(()=>setStatus("idle"),3000);}else throw new Error(data.message);}catch(error){console.error("Form submission error:",error);setStatus("error");setTimeout(()=>setStatus("idle"),3000);}};
 const inputClass="w-full rounded-xl border border-white/10 bg-[#07111F] p-4 pl-12 text-slate-100 placeholder-slate-500 outline-none transition focus:border-[#248FEA] focus:ring-2 focus:ring-[#0878E8]/25 disabled:opacity-50";
 return <section id="contact" className="relative overflow-hidden bg-[#080F1E] py-24 sm:py-32">
  <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0759D6]/15 blur-[110px]"/>
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}} className="relative mx-auto max-w-7xl px-6">
   <div className="grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
    <motion.div variants={fadeUp}>
     <span className="mb-6 inline-block rounded-full border border-[#2A9EFF]/25 bg-[#0878E8]/10 px-4 py-1.5 text-xs uppercase tracking-[.2em] text-[#79CFFF]">Get in touch</span>
     <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">Let's build something meaningful.</h2>
     <p className="mb-10 max-w-md leading-relaxed text-slate-400">Tell us what you are planning, what you want to improve or where you need a hand. We’ll help you work out a sensible next step.</p>
     <div className="mb-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D1A2E] p-6"><div className="rounded-xl bg-[#0878E8] p-3 text-white"><Mail size={22}/></div><div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</p><a href="mailto:cretostudio115@gmail.com" className="text-lg font-bold text-white hover:text-[#79CFFF]">cretostudio115@gmail.com</a></div></div>
     <div className="rounded-2xl border border-white/10 bg-[#0D1A2E] p-5"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Business phone</p><a href="tel:+9779747457986" className="text-sm font-semibold text-slate-200 hover:text-[#79CFFF]">+977 974-745-7986</a></div>
     <div className="mt-8 grid grid-cols-3 gap-3">{[{icon:Zap,text:"Quick response"},{icon:Award,text:"Trusted partner"},{icon:Lock,text:"Secure & private"}].map(({icon:Icon,text})=><div key={text} className="rounded-xl border border-white/10 bg-white/[.03] p-3 text-center"><Icon className="mx-auto mb-2 text-[#68C8FF]" size={19}/><span className="text-[10px] font-medium text-slate-400">{text}</span></div>)}</div>
    </motion.div>
    <motion.form variants={fadeUp} onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-[#0D1A2E] p-6 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:p-10">
     <h2 className="mb-1 text-2xl font-bold text-white">SEND US A MESSAGE</h2><p className="mb-8 text-sm text-slate-400">We typically respond within 24 hours.</p>
     <div className="mb-6 grid gap-5 md:grid-cols-2"><div className="relative"><User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><input type="text" name="name" placeholder="Your Name" required className={inputClass} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div><div className="relative"><Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><input type="email" name="email" placeholder="Your Email" required className={inputClass} value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div></div>
     <div className="relative mb-6"><Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><select name="capability" required className={`${inputClass} appearance-none`} value={form.capability} onChange={e=>setForm({...form,capability:e.target.value})}><option value="">Choose a service channel...</option><option value="Web Development">Web Development</option><option value="Mobile App Development">Mobile App Development</option><option value="E-Commerce Solutions">E-Commerce Solutions</option><option value="UI/UX Design">UI/UX Design</option><option value="AI & Software Solutions">AI & Software Solutions</option><option value="Brand Identity">Brand Identity</option><option value="SEO & Digital Marketing">SEO & Digital Marketing</option><option value="Social Media Management">Social Media Management</option></select><ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20}/></div>
     <div className="relative mb-8"><MessageSquare className="absolute left-4 top-6 h-5 w-5 text-slate-500"/><textarea name="message" placeholder="Project Scope Description" rows="4" required className={`${inputClass} resize-none pt-4`} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></div>
     <button type="submit" disabled={status!=="idle"} className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0759D6] to-[#0878E8] py-4 font-bold text-white transition hover:shadow-[0_12px_35px_rgba(0,120,232,.3)] disabled:bg-slate-700"><AnimatePresence mode="wait">{status==="idle"&&<><Send size={18}/> SUBMIT PROPOSAL</>}{status==="sending"&&<><Loader2 className="animate-spin" size={18}/> SENDING...</>}{status==="sent"&&<><Check size={18}/> PROPOSAL SENT</>}{status==="error"&&<span>ERROR - TRY AGAIN</span>}</AnimatePresence></button>
    </motion.form>
   </div>
  </motion.div>
 </section>;
}

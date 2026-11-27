"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, User, Mail, Briefcase, MessageSquare, Zap, Award, Lock, Send, ChevronDown, ClipboardList, MessagesSquare, Rocket, Globe2 } from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: "easeOut" } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .12 } } };

const steps = [
  { icon: MessagesSquare, number: "01", title: "Tell us about it", description: "Share your idea, goals, budget range and timeline. A rough outline is absolutely fine." },
  { icon: ClipboardList, number: "02", title: "Explore the right approach", description: "We’ll review your enquiry and discuss a practical scope, priorities and next steps." },
  { icon: Rocket, number: "03", title: "Plan the project", description: "Once the direction is clear, we can agree on deliverables, schedule and how to move forward." },
];

export default function Contact() {
 const [form,setForm]=useState({name:"",email:"",capability:"",country:"",business_location:"",message:""});
 const [status,setStatus]=useState("idle");
 const [packageContext,setPackageContext]=useState("");

 useEffect(()=>{
  const params=new URLSearchParams(window.location.search);
  const selected=params.get("package");
  const market=params.get("market");
  const currency=params.get("currency");
  const price=params.get("price");
  if(selected){
   setPackageContext([selected,market==="nepal"?"Nepal market":"International market",currency&&price?currency+" "+price:""].filter(Boolean).join(" · "));
   const capability=selected.includes("Website")?"Web Development":selected==="Social Media Management"?"Social Media Management":selected==="Video Editing & Content Creation"?"Video Editing & Content Creation":"SEO & Digital Marketing";
   setForm(current=>({...current,capability}));
  }
 },[]);

 const handleSubmit=async e=>{
  e.preventDefault();
  setStatus("sending");
  const formData=new FormData(e.target);
  formData.append("access_key","ec609227-9290-48a0-8436-fa5f358ea7d7");
  try{
   const response=await fetch("https://api.web3forms.com/submit",{method:"POST",body:formData});
   const data=await response.json();
   if(data.success){
    setStatus("sent");
    setForm({name:"",email:"",capability:"",country:"",business_location:"",message:""});
    setTimeout(()=>setStatus("idle"),3000);
   }else throw new Error(data.message);
  }catch(error){
   console.error("Form submission error:",error);
   setStatus("error");
   setTimeout(()=>setStatus("idle"),3000);
  }
 };

 const inputClass="w-full rounded-xl border border-white/10 bg-[#07111F] p-4 pl-12 text-slate-100 placeholder-slate-500 outline-none transition focus:border-[#248FEA] focus:ring-2 focus:ring-[#0878E8]/25 disabled:opacity-50";

 return <section id="contact" className="relative overflow-hidden bg-[#080F1E] py-24 sm:py-32">
  <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#0759D6]/15 blur-[110px]"/>
  <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true}} className="relative mx-auto max-w-7xl px-6">
   <div className="mb-16 text-center">
    <span className="mb-6 inline-block rounded-full border border-[#2A9EFF]/25 bg-[#0878E8]/10 px-4 py-1.5 text-xs uppercase tracking-[.2em] text-[#79CFFF]">Let's talk about your next project</span>
    <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Good work starts with a conversation.</h1>
    <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">Whether you have a detailed brief or just an early idea, tell us what you’re looking to create. We’ll help you find a clear and practical way forward.</p>
   </div>

   <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
    <motion.div variants={fadeUp}>
     <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Let’s build something meaningful.</h2>
     <p className="mb-8 max-w-md leading-relaxed text-slate-400">Get in touch about a new project, an existing website, a digital challenge or a potential collaboration. We’re happy to hear what you have in mind.</p>
     <div className="mb-5 flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0D1A2E] p-6"><div className="rounded-xl bg-[#0878E8] p-3 text-white"><Mail size={22}/></div><div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</p><a href="mailto:info@cretostudio.com" className="break-all text-lg font-bold text-white hover:text-[#79CFFF]">info@cretostudio.com</a><p className="mt-1 text-xs text-slate-500">For project enquiries and general questions</p></div></div>
     <div className="rounded-2xl border border-white/10 bg-[#0D1A2E] p-5"><p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">Business phone</p><a href="tel:+9779747457986" className="text-sm font-semibold text-slate-200 hover:text-[#79CFFF]">+977 974-745-7986</a></div>
     <div className="mt-8 grid grid-cols-3 gap-3">{[{icon:Zap,text:"Quick response"},{icon:Award,text:"Dedicated support"},{icon:Lock,text:"Your details stay private"}].map(({icon:Icon,text})=><div key={text} className="rounded-xl border border-white/10 bg-white/[.03] p-3 text-center"><Icon className="mx-auto mb-2 text-[#68C8FF]" size={19}/><span className="text-[10px] font-medium text-slate-400">{text}</span></div>)}</div>
     <div className="mt-8 rounded-2xl border border-[#248FEA]/20 bg-[#0878E8]/[.06] p-6">
      <div className="mb-3 flex items-center gap-2 text-[#79CFFF]"><Globe2 size={18}/><span className="text-xs font-bold uppercase tracking-widest">What can we help with?</span></div>
      <p className="text-sm leading-relaxed text-slate-300">Website and e-commerce development, mobile apps, UI/UX design, AI and software solutions, SEO and digital marketing, social media management, and content creation.</p>
     </div>
    </motion.div>

    <motion.form variants={fadeUp} onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-[#0D1A2E] p-6 shadow-[0_30px_90px_rgba(0,0,0,.3)] sm:p-10">
     <h2 className="mb-1 text-2xl font-bold text-white">SEND US A MESSAGE</h2><p className="mb-8 text-sm text-slate-400">Share a few details and we’ll get back to you. We typically respond within 24 hours.</p>
     {packageContext&&<div className="mb-6 rounded-xl border border-[#248FEA]/30 bg-[#0878E8]/10 p-4"><p className="text-[10px] font-bold uppercase tracking-widest text-[#79CFFF]">Package enquiry</p><p className="mt-1 text-sm font-semibold text-white">{packageContext}</p><input type="hidden" name="selected_package" value={packageContext}/></div>}
     <div className="mb-6 grid gap-5 md:grid-cols-2"><div className="relative"><User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><input type="text" name="name" placeholder="Your Name" required className={inputClass} value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div><div className="relative"><Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><input type="email" name="email" placeholder="Your Email" required className={inputClass} value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div></div>
     <div className="relative mb-6"><Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"/><select name="capability" required className={`${inputClass} appearance-none`} value={form.capability} onChange={e=>setForm({...form,capability:e.target.value})}><option value="">Choose a service channel...</option><option value="Web Development">Web Development</option><option value="Mobile App Development">Mobile App Development</option><option value="E-Commerce Solutions">E-Commerce Solutions</option><option value="UI/UX Design">UI/UX Design</option><option value="AI & Software Solutions">AI & Software Solutions</option><option value="Brand Identity">Brand Identity</option><option value="SEO & Digital Marketing">SEO & Digital Marketing</option><option value="Social Media Management">Social Media Management</option><option value="Video Editing & Content Creation">Video Editing & Content Creation</option></select><ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" size={20}/></div>
     <div className="mb-6 grid gap-5 md:grid-cols-2"><div><label htmlFor="contact-country" className="mb-2 block text-xs font-semibold text-slate-300">Country of business</label><input id="contact-country" type="text" name="country" autoComplete="country-name" placeholder="e.g. Nepal, United States" required className={inputClass.replace("p-4 pl-12","p-4")} value={form.country} onChange={e=>setForm({...form,country:e.target.value})}/></div><div><label htmlFor="contact-location" className="mb-2 block text-xs font-semibold text-slate-300">Business location</label><input id="contact-location" type="text" name="business_location" placeholder="City / region" required className={inputClass.replace("p-4 pl-12","p-4")} value={form.business_location} onChange={e=>setForm({...form,business_location:e.target.value})}/></div></div>
     <div className="relative mb-8"><MessageSquare className="absolute left-4 top-6 h-5 w-5 text-slate-500"/><textarea name="message" placeholder="Tell us about your project, goals, budget range and timeline..." rows="5" required className={`${inputClass} resize-none pt-4`} value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/></div>
     <button type="submit" disabled={status!=="idle"} className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0759D6] to-[#0878E8] py-4 font-bold text-white transition hover:shadow-[0_12px_35px_rgba(0,120,232,.3)] disabled:bg-slate-700"><AnimatePresence mode="wait">{status==="idle"&&<><Send size={18}/> SEND ENQUIRY</>}{status==="sending"&&<><Loader2 className="animate-spin" size={18}/> SENDING...</>}{status==="sent"&&<><Check size={18}/> MESSAGE SENT</>}{status==="error"&&<span>ERROR - TRY AGAIN</span>}</AnimatePresence></button>
     <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">By submitting this form, you’re sharing your details so we can respond to your enquiry.</p>
    </motion.form>
   </div>

   <motion.div variants={fadeUp} className="mt-24">
    <div className="mb-10 text-center"><span className="mb-3 inline-block text-xs font-bold uppercase tracking-[.2em] text-[#79CFFF]">A straightforward process</span><h2 className="text-3xl font-bold text-white sm:text-4xl">From first message to next steps.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">A good project begins with understanding what you need. Here’s what happens after you get in touch.</p></div>
    <div className="grid gap-5 md:grid-cols-3">{steps.map(({icon:Icon,number,title,description})=><div key={number} className="rounded-2xl border border-white/10 bg-[#0D1A2E] p-7"><div className="mb-6 flex items-center justify-between"><div className="rounded-xl bg-[#0878E8]/15 p-3 text-[#79CFFF]"><Icon size={22}/></div><span className="text-sm font-bold tracking-widest text-slate-600">{number}</span></div><h3 className="mb-3 text-lg font-bold text-white">{title}</h3><p className="text-sm leading-relaxed text-slate-400">{description}</p></div>)}</div>
   </motion.div>

   <motion.div variants={fadeUp} className="mt-20 grid gap-10 rounded-3xl border border-white/10 bg-[#0D1A2E] p-7 sm:p-10 lg:grid-cols-2 lg:gap-16">
    <div><span className="mb-3 inline-block text-xs font-bold uppercase tracking-[.2em] text-[#79CFFF]">Make your enquiry easier</span><h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">What should you include?</h2><p className="mb-6 text-sm leading-relaxed text-slate-400">You don’t need a finished brief. A few details will help us understand your needs and give you a more useful response.</p><ul className="space-y-3 text-sm text-slate-300">{["What you want to build, improve or promote","Who the project is for and what you want to achieve","Any useful examples, websites or design references","Your preferred budget range and target timeline"].map(item=><li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[#68C8FF]"/><span>{item}</span></li>)}</ul></div>
    <div><span className="mb-3 inline-block text-xs font-bold uppercase tracking-[.2em] text-[#79CFFF]">A few helpful answers</span><h2 className="mb-5 text-2xl font-bold text-white sm:text-3xl">Frequently asked questions</h2><div className="space-y-3">
     <details className="group rounded-xl border border-white/10 bg-[#07111F] p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">Do I need a complete project brief?<ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="pt-3 text-sm leading-relaxed text-slate-400">No. Start with the idea or challenge you have. We can help clarify the requirements during the initial discussion.</p></details>
     <details className="group rounded-xl border border-white/10 bg-[#07111F] p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">Can I enquire about more than one service?<ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="pt-3 text-sm leading-relaxed text-slate-400">Yes. Select the closest service in the form and mention any additional requirements in your message.</p></details>
     <details className="group rounded-xl border border-white/10 bg-[#07111F] p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">Do you work with businesses outside Nepal?<ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="pt-3 text-sm leading-relaxed text-slate-400">You can send an enquiry from your country using the form. Include your location and preferred way of working so we can understand your requirements.</p></details>
     <details className="group rounded-xl border border-white/10 bg-[#07111F] p-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">How will you contact me?<ChevronDown size={18} className="shrink-0 text-slate-400 transition group-open:rotate-180"/></summary><p className="pt-3 text-sm leading-relaxed text-slate-400">We’ll use the email address you provide in the enquiry form to follow up about your project.</p></details>
    </div></div>
   </motion.div>

   <div className="mt-16 text-center"><h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Have an idea? Let’s talk.</h2><p className="mb-6 text-sm text-slate-400">The first step is simply telling us what you have in mind.</p><a href="mailto:info@cretostudio.com" className="inline-flex items-center gap-2 rounded-xl border border-[#248FEA]/40 px-6 py-3 text-sm font-semibold text-[#79CFFF] transition hover:bg-[#0878E8]/10">Email Creto Studio <Send size={16}/></a></div>
  </motion.div>
 </section>;
}

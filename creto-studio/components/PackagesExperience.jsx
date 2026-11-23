"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Check, CheckCircle2, ChevronDown, CircleHelp,
  Code2, Globe2, MapPin, MonitorSmartphone, Play, Share2, Sparkles,
  Target, Video, Wallet, Zap
} from "lucide-react";

const markets = {
  nepal: {
    label: "Nepal", currency: "NPR", note: "For eligible Nepal-based clients",
    packages: [
      { id: "starter-website", name: "Starter Website", price: "45,000", unit: "one-time", category: "Website development", intro: "A polished, professional starting point for your business online.", features: ["Up to 3 pages", "Custom modern website design", "Mobile and tablet responsive", "About, Services and Contact pages", "Contact form or WhatsApp integration", "Basic on-page SEO", "Deployment assistance", "2 revision rounds"], best: "New businesses and professionals who need a clear, credible online presence." },
      { id: "business-website", name: "Business Website", price: "50,000", unit: "one-time", category: "Website development", intro: "A more complete digital home for businesses ready to present their services in depth.", features: ["Up to 6 pages", "Premium custom UI/UX design", "Mobile and tablet responsive", "Advanced contact and enquiry forms", "Services and portfolio sections", "SEO optimisation", "Performance optimisation", "Social media integration", "Deployment assistance", "3 revision rounds"], best: "Growing businesses that need a richer website and stronger customer enquiry journey.", popular: true },
      { id: "social-media", name: "Social Media Management", price: "50,000", unit: "per month", category: "Social media", intro: "A consistent, thoughtfully managed presence across your key social channels.", features: ["Facebook and Instagram management", "12 designed posts per month", "8 story designs per month", "Monthly content calendar", "Captions and hashtags", "Content scheduling", "Social page optimisation", "Basic audience engagement", "Monthly performance report"], best: "Businesses that want consistent, professional social content without managing every detail in-house." },
      { id: "video-content", name: "Video Editing & Content Creation", price: "39,999", unit: "package total", category: "Video production", intro: "Short-form video content edited to help your brand communicate with clarity and energy.", features: ["Short-form video editing", "Instagram Reels, Facebook Reels and TikTok formats", "Professional cuts and transitions", "Motion graphics where appropriate", "Captions and subtitles", "Music and sound effects", "Promotional video editing", "2 revisions per video"], note: "Client supplies the original footage and clips. Scope and number of videos are confirmed before work begins.", best: "Brands and creators who already have footage and want polished, platform-ready edits." },
      { id: "digital-growth", name: "Digital Growth", price: "70,000", unit: "per month", category: "Integrated digital marketing", intro: "A coordinated content and digital presence package built around consistent brand visibility.", features: ["8 designed social posts per month", "4 short-form marketing videos per month", "Facebook and Instagram management", "Content strategy and planning", "Captions and hashtags", "Publishing and scheduling", "Basic SEO and website performance review", "Monthly analytics report", "Consultation"], note: "Website development and paid advertising spend are not included.", best: "Businesses looking for a more connected monthly social and digital marketing effort." }
    ]
  },
  international: {
    label: "International", currency: "USD", note: "For clients based outside Nepal",
    packages: [
      { id: "starter-website", name: "Starter Website", price: "400", unit: "one-time", category: "Website development", intro: "A polished, professional starting point for your business online.", features: ["Up to 3 pages", "Custom modern website design", "Mobile and tablet responsive", "About, Services and Contact pages", "Contact form or WhatsApp integration", "Basic on-page SEO", "Social media links", "Deployment", "2 revision rounds"], best: "New businesses and professionals who need a clear, credible online presence." },
      { id: "business-website", name: "Business Website", price: "500", unit: "one-time", category: "Website development", intro: "A more complete digital home for businesses ready to present their services in depth.", features: ["Up to 6 pages", "Premium custom UI/UX design", "Mobile and tablet responsive", "Advanced contact and enquiry forms", "Services and portfolio sections", "SEO optimisation", "Performance optimisation", "Social media integration", "Deployment assistance", "3 revision rounds"], best: "Growing businesses that need a richer website and stronger customer enquiry journey.", popular: true },
      { id: "social-media", name: "Social Media Management", price: "450", unit: "per month", category: "Social media", intro: "A consistent, thoughtfully managed presence across your key social channels.", features: ["Facebook and Instagram management", "12 designed posts per month", "8 story designs per month", "Monthly content calendar", "Captions and hashtags", "Content scheduling", "Social page optimisation", "Basic audience engagement", "Monthly performance report"], best: "Businesses that want consistent, professional social content without managing every detail in-house." },
      { id: "video-content", name: "Video Editing & Content Creation", price: "350", unit: "per month", category: "Video production", intro: "A monthly short-form video editing service to keep your brand moving across social channels.", features: ["8 short-form videos per month", "Instagram Reels, Facebook Reels and TikTok formats", "Professional editing and transitions", "Motion graphics", "Captions and subtitles", "Music and sound effects", "Promotional video editing", "2 revisions per video"], note: "Client supplies the original footage and clips.", best: "Brands and creators who need a reliable flow of edited short-form content." },
      { id: "digital-growth", name: "Digital Growth", price: "550", unit: "per month", category: "Integrated digital marketing", intro: "A coordinated content and digital presence package built around consistent brand visibility.", features: ["8 designed social posts per month", "8 story designs per month", "4 marketing videos per month", "Facebook and Instagram management", "Content strategy and planning", "Captions and hashtags", "Publishing and scheduling", "Basic SEO and website performance review", "Monthly analytics", "Consultation"], note: "Website development and paid advertising are not included.", best: "Businesses looking for a more connected monthly social and digital marketing effort." }
    ]
  }
};

const faqs = [
  ["Can I customise a package?", "Yes. The listed packages provide a clear starting scope. If you need different features, quantities or a combination of services, tell us about your requirements and we can prepare a tailored proposal."],
  ["Are domain and hosting included?", "Domain registration and hosting are not included unless they are specifically listed in your quotation. We can help you select and configure the right options."],
  ["How do monthly packages work?", "Monthly services are billed in advance. Deliverables, publishing schedule and start date are agreed before the service begins. Unused monthly deliverables do not automatically roll over unless agreed in writing."],
  ["Can I combine more than one package?", "Absolutely. For example, a business website can be paired with social media management or video content. We will confirm the combined scope and pricing before you proceed."],
  ["What happens if I need extra revisions or work outside the package?", "The included revision allowance and deliverables are listed in each package. Additional work or requests outside the agreed scope are discussed and quoted separately."],
  ["Which regional price applies to my business?", "Nepal pricing is intended for eligible Nepal-based clients. International pricing applies to clients based outside Nepal. We confirm your business location and project requirements during the enquiry process before issuing a quotation."]
];

function Price({ market, value }) {
  return <div className="flex items-end gap-2"><span className="pb-1 text-sm font-semibold text-[#8DD8FF]">{market.currency}</span><span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{value}</span></div>;
}

export default function PackagesExperience() {
  const [marketKey, setMarketKey] = useState("international");
  const [expanded, setExpanded] = useState("business-website");
  const market = markets[marketKey];
  const comparison = useMemo(() => market.packages, [market]);
  const selectedPackage = market.packages.find((item) => item.id === expanded) || market.packages[0];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#061329] px-6 pb-16 pt-36 text-white sm:pb-24 sm:pt-44">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(8,120,232,.28),transparent_42%),radial-gradient(ellipse_at_10%_90%,rgba(32,185,255,.12),transparent_40%),linear-gradient(120deg,#050B18,#07152B_60%,#061329)]" />
        <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-[#79C9FF]"><Sparkles size={14}/> CRETO STUDIO · PACKAGES & PRICING</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-.04em] sm:text-6xl lg:text-7xl">The right digital partner. <span className="bg-gradient-to-r from-[#62BFFF] via-[#20B9FF] to-[#A5E8FF] bg-clip-text text-transparent">A clearer way forward.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">From your first business website to a more consistent digital presence, explore practical packages designed to help your business look credible, connect with customers and grow with confidence.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#choose-market" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5">Explore packages <ArrowRight size={17}/></a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Discuss a project <ArrowUpRight size={17}/></Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-blue-100/60"><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#64C7FF]"/> Clear deliverables</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#64C7FF]"/> Transparent scope</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={15} className="text-[#64C7FF]"/> Regional pricing</span></div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-8 rounded-full bg-[#0878E8]/15 blur-3xl"/>
            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#102B50] to-[#071426] p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-bold uppercase tracking-[.2em] text-blue-100/60">Digital, made practical</span><Globe2 className="text-[#7DD1FF]" size={21}/></div>
              <div className="grid grid-cols-2 gap-3 pt-6">
                {[{icon:Code2,label:"Websites",sub:"Build your presence"},{icon:Share2,label:"Social media",sub:"Stay connected"},{icon:Video,label:"Video content",sub:"Tell your story"},{icon:Target,label:"Digital growth",sub:"Move with purpose"}].map(({icon:Icon,label,sub})=><div key={label} className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Icon className="mb-7 text-[#79CFFF]" size={22}/><p className="font-semibold text-white">{label}</p><p className="mt-1 text-xs text-blue-100/55">{sub}</p></div>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-blue-100/65">A considered mix of design, technology and ongoing creative support — shaped around what your business needs next.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="choose-market" className="scroll-mt-20 border-b border-white/10 bg-[#08172D] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">One studio · Two regional markets</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Choose your market to view pricing.</h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/65 sm:text-base">We keep regional price lists separate for a clearer experience. Select the market that matches your business location.</p>
          </div>
          <div className="mx-auto mt-9 grid max-w-2xl gap-4 sm:grid-cols-2">
            {[{key:"nepal",flag:"🇳🇵",title:"Nepal",currency:"NPR",detail:"For eligible Nepal-based clients"},{key:"international",flag:"🌍",title:"International",currency:"USD",detail:"For clients based outside Nepal"}].map((option)=><button key={option.key} type="button" onClick={()=>{setMarketKey(option.key);setExpanded("business-website");}} aria-pressed={marketKey===option.key} className={`group rounded-2xl border p-6 text-left transition duration-200 ${marketKey===option.key?"border-[#45BFFF] bg-[#0D2A4C] shadow-[0_0_0_1px_rgba(69,191,255,.2)]":"border-white/10 bg-[#0A1C34] hover:border-white/25"}`}>
              <div className="flex items-center justify-between"><span className="text-3xl">{option.flag}</span><span className={`flex h-6 w-6 items-center justify-center rounded-full border ${marketKey===option.key?"border-[#62C6FF] bg-[#0878E8] text-white":"border-white/25 text-transparent"}`}><Check size={14}/></span></div>
              <p className="mt-5 text-xl font-semibold text-white">{option.title}</p><p className="mt-1 text-sm text-blue-100/60">{option.detail}</p><p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-[#83D2FF]">View prices in {option.currency}</p>
            </button>)}
          </div>
          <p className="mt-5 text-center text-xs text-blue-100/45">Showing {market.label} packages · {market.currency}</p>
        </div>
      </section>

      <section id="package-list" className="scroll-mt-20 bg-[#050B18] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">{market.label} · {market.currency} pricing</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Packages built around real business needs.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100/65">Explore the scope, deliverables and investment for each service. Select a package to see more detail.</p></div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-blue-100/65"><Wallet size={15} className="text-[#72CCFF]"/> {market.currency} · {market.label}</span>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {market.packages.map((item,index)=><article key={item.id} className={`relative flex flex-col rounded-3xl border p-6 transition duration-200 sm:p-7 ${item.popular?"border-[#3AAEFF]/60 bg-gradient-to-b from-[#0C2545] to-[#09172B] shadow-[0_18px_55px_rgba(0,90,190,.14)]":"border-white/10 bg-[#09172B] hover:border-white/20"}`}>
              {item.popular&&<span className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-[#0878E8] to-[#20B9FF] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-white">Most selected</span>}
              <div className="flex items-center justify-between gap-3"><span className="text-[10px] font-bold uppercase tracking-[.17em] text-[#83D2FF]">{item.category}</span><span className="text-xs text-blue-100/40">0{index+1}</span></div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{item.name}</h3><p className="mt-3 min-h-[3.5rem] text-sm leading-7 text-blue-100/65">{item.intro}</p>
              <div className="mt-7 border-y border-white/10 py-5"><Price market={market} value={item.price}/><p className="mt-1 text-xs text-blue-100/45">{item.unit==="one-time"?"One-time project fee":item.unit==="per month"?"Monthly service fee":item.unit==="package total"?"Fixed package total":"Service fee"}</p></div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[.15em] text-white/80">What's included</p>
              <ul className="mt-4 flex-1 space-y-3">{item.features.slice(0,5).map(feature=><li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-blue-100/70"><Check size={16} className="mt-1 shrink-0 text-[#68C8FF]"/>{feature}</li>)}</ul>
              <button type="button" onClick={()=>setExpanded(expanded===item.id?"":item.id)} className="mt-6 inline-flex items-center justify-between border-t border-white/10 pt-5 text-sm font-semibold text-[#9DDEFF] hover:text-white"><span>{expanded===item.id?"Hide package details":"View all deliverables"}</span><ChevronDown size={17} className={`transition-transform ${expanded===item.id?"rotate-180":""}`}/></button>
              {expanded===item.id&&<div className="mt-4 rounded-2xl border border-white/10 bg-black/15 p-4"><ul className="space-y-2.5">{item.features.map(feature=><li key={feature} className="flex items-start gap-2 text-xs leading-5 text-blue-100/75"><Check size={14} className="mt-0.5 shrink-0 text-[#68C8FF]"/>{feature}</li>)}</ul>{item.note&&<p className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-blue-100/55">{item.note}</p>}<p className="mt-4 text-xs leading-6 text-blue-100/65"><strong className="text-white">Ideal for: </strong>{item.best}</p></div>}
              <Link href={`/contact?package=${encodeURIComponent(item.name)}&market=${marketKey}&currency=${market.currency}&price=${item.price}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-950/40">Get started <ArrowUpRight size={16}/></Link>
            </article>)}
          </div>
          <p className="mt-7 text-center text-xs leading-6 text-blue-100/40">Prices are shown in {market.currency}. Final scope and quotation are confirmed after reviewing your business location and project requirements.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#08172D] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Find the right fit</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Compare the packages at a glance.</h2><p className="mt-4 text-sm leading-7 text-blue-100/65">A quick overview of how each option supports a different part of your digital presence.</p></div>
          <div className="mt-9 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-white/[.06]"><tr><th className="p-4 font-semibold text-white">Package</th>{comparison.map(p=><th key={p.id} className="p-4 font-semibold text-white">{p.name}</th>)}</tr></thead>
              <tbody className="divide-y divide-white/10 bg-[#09172B]">
                <tr><th className="p-4 font-medium text-blue-100/60">Price</th>{comparison.map(p=><td key={p.id} className="p-4 font-semibold text-[#8DD8FF]">{market.currency} {p.price}</td>)}</tr>
                <tr><th className="p-4 font-medium text-blue-100/60">Billing</th>{comparison.map(p=><td key={p.id} className="p-4 text-blue-100/70">{p.unit}</td>)}</tr>
                <tr><th className="p-4 font-medium text-blue-100/60">Main focus</th>{comparison.map(p=><td key={p.id} className="p-4 text-blue-100/70">{p.category}</td>)}</tr>
                <tr><th className="p-4 font-medium text-blue-100/60">Best for</th>{comparison.map(p=><td key={p.id} className="max-w-[190px] p-4 text-xs leading-6 text-blue-100/60">{p.best}</td>)}</tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-blue-100/40">Scroll horizontally to compare all five packages on smaller screens.</p>
        </div>
      </section>

      <section className="bg-[#DCEAF3] px-6 py-16 text-[#102744] sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">Why work with Creto</p><h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Good work. Clear communication. A partner invested in your next step.</h2><p className="mt-5 text-sm leading-7 text-slate-600">We bring design, development and creative services together, with a focus on the outcomes that matter to your business.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0759D6] hover:text-[#0878E8]">Get to know Creto Studio <ArrowUpRight size={16}/></Link></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[{icon:MonitorSmartphone,title:"Designed for real use",text:"Responsive experiences that work across devices and make it easier for customers to engage."},{icon:Zap,title:"Practical delivery",text:"A defined scope, clear deliverables and a process that keeps the project moving."},{icon:Sparkles,title:"Creative thinking",text:"Visual direction and content shaped to communicate your brand with consistency."},{icon:MapPin,title:"A collaborative partner",text:"Direct communication to understand your context, priorities and requirements."}].map(({icon:Icon,title,text})=><div key={title} className="rounded-2xl border border-[#C7DCE9] bg-white/80 p-6"><Icon size={22} className="text-[#0878C8]"/><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050B18] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">A straightforward process</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">From first conversation to launch.</h2></div>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[["01","Choose your direction","Explore the packages and identify the service that fits your goals."],["02","Tell us about your business","Share your location, project requirements and the outcomes you have in mind."],["03","Confirm the proposal","We review the scope, confirm the applicable regional pricing and outline next steps."],["04","Create and grow","Once approved, we begin the agreed work and keep you updated as it progresses."]].map(([n,title,text])=><div key={n} className="border-t border-[#248FEA]/50 pt-5"><p className="text-sm font-bold tracking-[.18em] text-[#67C5FF]">{n}</p><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-7 text-blue-100/60">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#08172D] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Good to know</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A clear scope makes a better project.</h2><p className="mt-5 text-sm leading-7 text-blue-100/65">Before work begins, we confirm the deliverables, timeline, payment schedule and any project-specific requirements in writing.</p></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Website packages are one-time project fees; monthly marketing packages are billed in advance.","Domain registration, hosting and third-party subscriptions are excluded unless specifically quoted.","Paid advertising budgets are not included in social media or Digital Growth packages.","Clients provide required brand assets, content and video footage unless otherwise agreed.","Included revisions and monthly deliverables are limited to the package scope.","Additional features, requests or out-of-scope work are quoted separately."].map((text,i)=><div key={i} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.035] p-4 text-sm leading-6 text-blue-100/65"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#67C5FF]"/>{text}</div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#050B18] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl"><div className="text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Frequently asked questions</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A few things you may be wondering.</h2></div><div className="mt-9 space-y-3">{faqs.map(([q,a],i)=><details key={q} className="group rounded-2xl border border-white/10 bg-[#09172B] p-5 open:border-[#258FEA]/40"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white"><span className="flex items-center gap-3"><CircleHelp size={17} className="shrink-0 text-[#78CCFF]"/>{q}</span><ChevronDown size={18} className="shrink-0 text-blue-100/50 transition group-open:rotate-180"/></summary><p className="mt-4 pl-8 text-sm leading-7 text-blue-100/65">{a}</p></details>)}</div></div>
      </section>

      <section className="border-y border-[#258FEA]/20 bg-[#07152B] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Regional pricing policy</p><h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Clear regional pricing. Confirmed before you commit.</h2><p className="mt-5 text-sm leading-7 text-blue-100/65">Creto Studio offers region-based service packages. Nepal pricing is exclusively intended for eligible Nepal-based clients. International pricing applies to clients based outside Nepal. Final pricing is confirmed according to the client's business location and project requirements.</p></div>
          <div className="rounded-3xl border border-white/10 bg-white/[.04] p-7 sm:p-9"><div className="flex items-start gap-4"><div className="rounded-xl bg-[#0878E8]/20 p-3 text-[#80D2FF]"><MapPin size={22}/></div><div><h3 className="text-lg font-semibold text-white">We confirm your business location during enquiry.</h3><p className="mt-3 text-sm leading-7 text-blue-100/65">Selecting a market helps you view the relevant price list, but it does not automatically determine eligibility. Our team confirms your business location and project details before issuing a final quotation.</p></div></div><p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-blue-100/40">The applicable market is based on your business location, not simply the currency or market option selected on this page.</p></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0648B2] via-[#0759D6] to-[#0878E8] px-6 py-16 text-white sm:py-20">
        <div aria-hidden="true" className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/15"/>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">Your next step starts here</p><h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Have a project in mind?</h2><p className="mt-4 text-sm leading-7 text-blue-50/85">Tell us what you want to build, improve or grow. We’ll help you choose the right package or shape a solution around your business.</p></div>
          <Link href="/contact?source=packages" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0759D6] transition hover:-translate-y-0.5 hover:shadow-xl">Talk to our team <ArrowUpRight size={17}/></Link>
        </div>
      </section>
    </>
  );
}

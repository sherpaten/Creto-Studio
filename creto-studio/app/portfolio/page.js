import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight, CheckCircle2, Code2, ShoppingBag, Smartphone,
  Palette, BrainCircuit, TrendingUp, Share2, Compass, Layers3,
  MessageCircle, ShieldCheck, Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Creto Studio | Business Portfolio",
  description: "Explore Creto Studio's digital services, selected projects, capabilities and collaborative process.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Creto Studio | Business Portfolio",
    description: "An independent digital services studio working across web, commerce, mobile, design and digital growth.",
    url: "https://cretostudio.com/portfolio",
  },
};

const services = [
  { title: "Website Development", text: "Responsive business websites and tailored web experiences built around your goals.", Icon: Code2, group: "Digital products" },
  { title: "E-commerce Development", text: "Online storefronts and shopping experiences that help customers discover and purchase products.", Icon: ShoppingBag, group: "Digital products" },
  { title: "Mobile App Development", text: "Mobile product experiences planned around useful features and straightforward user journeys.", Icon: Smartphone, group: "Digital products" },
  { title: "UI/UX Design", text: "User-focused interfaces, thoughtful structure, wireframes and consistent visual systems.", Icon: Palette, group: "Design & technology" },
  { title: "AI & Software Solutions", text: "Custom software, AI-enabled applications and practical workflow automation.", Icon: BrainCircuit, group: "Design & technology" },
  { title: "SEO & Digital Marketing", text: "Search optimisation and digital marketing support to improve online visibility.", Icon: TrendingUp, group: "Digital growth" },
  { title: "Social Media Management", text: "Content planning, creative production and consistent social channel support.", Icon: Share2, group: "Digital growth" },
];

const projects = [
  { name: "Zero Point Meditation Center", category: "Wellness · Community", description: "A digital home for a meditation community, bringing programmes, teachings, events and membership journeys together.", url: "https://www.zeropointmeditationcenter.org/", image: "/CretoStudio.png", type: "Live project" },
  { name: "RipTides Grill & Bar", category: "Hospitality · Membership", description: "A restaurant and bar website with a dedicated customer membership journey and account management experience.", url: "https://riptidesgrillandbar.com/", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85", type: "Live project" },
  { name: "Customize Ans", category: "Custom Fashion · E-commerce", description: "A creative fashion website showcasing personalised garment transformation, hand painting, patchwork and embroidery.", url: "https://customizeans.vercel.app/", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85", type: "Live project" },
  { name: "E-Learn Platform", category: "Education · Digital Platform", description: "A responsive learning experience designed to make educational content easier to discover and navigate.", url: "https://e-lern.vercel.app/", image: "/E-learn.png", type: "Live project" },
  { name: "Plumbing Kathmandu", category: "Local Services · Business Website", description: "A service-focused website that presents offerings clearly and helps local customers make enquiries.", url: "https://plumbing-kathmandu.vercel.app/", image: "/plumbing-Kathmandu.png", type: "Live project" },
  { name: "Shamu Cap Store", category: "Retail · E-commerce Concept", description: "A product-led storefront concept for presenting a focused collection and browsing products.", url: null, image: "/Shamu.png", type: "Concept preview" },
];

const steps = [
  ["01", "Discover", "We learn about your business, audience, goals and practical requirements."],
  ["02", "Define", "We agree the project scope, priorities, deliverables and proposal before work begins."],
  ["03", "Design & build", "We create the experience with clear communication and review points along the way."],
  ["04", "Launch & support", "We prepare the agreed work for handover or launch and outline any ongoing support."],
];

const principles = [
  ["Purpose-led", "Start with the business goal and the people the work needs to serve."],
  ["Clear scope", "Agree deliverables, timing and pricing before a project begins."],
  ["Collaborative", "Keep communication and review part of the process from start to finish."],
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF5] text-[#172033]">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative isolate overflow-hidden bg-[#04132D] px-6 py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute -right-28 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0878E8]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/4 -z-10 h-96 w-96 rounded-full bg-[#20B9FF]/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-[#75C8FF]">Creto Studio · Business portfolio</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">Digital thinking.<br/><span className="text-[#75C8FF]">Made practical.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/80">We bring strategy, design and technology together to help businesses and organisations build a stronger digital presence, create useful products and connect with their audiences.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact?source=portfolio" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30">Discuss a project <ArrowUpRight size={17}/></Link>
                <a href="#selected-work" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">View selected work <ArrowUpRight size={17}/></a>
              </div>
              <p className="mt-7 text-xs leading-6 text-blue-100/55">Independent digital services studio · Operating from Nepal · Open to projects across markets</p>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/[.06] p-7 shadow-2xl backdrop-blur-sm sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-bold uppercase tracking-[.2em] text-blue-100/65">Our capabilities</span><Sparkles className="text-[#7DD1FF]" size={21}/></div>
              <div className="grid grid-cols-2 gap-3 pt-6">
                {[[Layers3,"Digital products"],[Palette,"Creative design"],[BrainCircuit,"Smart technology"],[TrendingUp,"Digital growth"]].map(([Icon,label])=><div key={label} className="rounded-2xl border border-white/10 bg-white/[.05] p-5"><Icon className="mb-8 text-[#79CFFF]" size={22}/><p className="text-sm font-semibold text-white">{label}</p></div>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-blue-100/70">One collaborative studio for connected digital work — with the right scope shaped around each project.</p>
            </div>
          </div>
        </section>

        <nav aria-label="Portfolio sections" className="sticky top-[76px] z-30 border-b border-[#E5EAF0] bg-[#FFFCF5]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 text-xs font-semibold text-slate-600 sm:gap-8">
            {[["Studio","#studio"],["Services","#services"],["Work","#selected-work"],["Approach","#approach"],["Enquire","#enquire"]].map(([label,href])=><a key={href} href={href} className="whitespace-nowrap transition hover:text-[#0759D6]">{label}</a>)}
          </div>
        </nav>

        <section id="studio" className="scroll-mt-32 px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">01 · The studio</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#102744] sm:text-4xl">A flexible digital partner for your next stage.</h2></div>
            <div><p className="text-base leading-8 text-slate-600">Creto Studio is an independently operated digital services studio working with businesses and organisations on their online presence and digital initiatives. We bring different disciplines together, starting with a clear understanding of the requirement and agreeing a realistic scope before delivery.</p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">{principles.map(([title,body])=><div key={title} className="border-t-2 border-[#20B9FF] pt-4"><h3 className="text-base font-bold text-[#102744]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{body}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-32 bg-[#F0F5FA] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">02 · Services & capabilities</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">What we can help you create.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Choose a focused service or combine capabilities into a coordinated project. The final scope is tailored to your requirements.</p></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {services.map(({title,text:body,Icon,group},i)=><article key={title} className="group rounded-2xl border border-[#E0E8F0] bg-white p-6 shadow-[0_8px_28px_rgba(15,35,60,.035)] transition hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(15,35,60,.09)]">
                <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-[#0878C8]">{group}</span><span className="text-xs font-semibold text-slate-300">0{i+1}</span></div>
                <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0759D6]"><Icon size={22}/></div>
                <h3 className="mt-5 text-lg font-bold text-[#102744]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
              </article>)}
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">Explore detailed services <ArrowUpRight size={16}/></Link>
          </div>
        </section>

        <section id="selected-work" className="scroll-mt-32 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">03 · Selected work</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">Work shaped around different needs.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">A selection of websites and digital concepts across community, hospitality, fashion, education, local services and retail.</p></div><Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">Explore all projects <ArrowUpRight size={16}/></Link></div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project,i)=><article key={project.name} className="group overflow-hidden rounded-3xl border border-[#E5EAF0] bg-white shadow-[0_14px_42px_rgba(15,35,60,.06)] transition hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(15,35,60,.12)]">
                <div className="relative overflow-hidden bg-[#EAF1F7]"><Image src={project.image} alt={project.name+" project preview"} width={900} height={600} sizes="(max-width: 768px) 100vw, 33vw" className="h-52 w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"/><span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#102744]">{project.type}</span></div>
                <div className="p-6"><p className="text-[10px] font-bold uppercase tracking-[.17em] text-[#0878C8]">{project.category}</p><h3 className="mt-3 text-xl font-bold text-[#102744]">{project.name}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>{project.url?<a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0878C8]">Visit live project <ArrowUpRight size={16}/></a>:<span className="mt-5 inline-flex text-sm font-semibold text-slate-500">Concept preview · Coming soon</span>}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="approach" className="scroll-mt-32 bg-[#04132D] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#75C8FF]">04 · Our approach</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">A clear process. Thoughtful delivery.</h2><p className="mt-4 text-sm leading-7 text-blue-100/65">Good collaboration starts with shared expectations and a practical plan.</p></div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([n,title,body])=><div key={n} className="border-t border-[#248FEA]/50 pt-5"><p className="text-sm font-bold tracking-[.18em] text-[#67C5FF]">{n}</p><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-blue-100/65">{body}</p></div>)}</div>
          </div>
        </section>

        <section id="enquire" className="scroll-mt-32 px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">05 · Working together</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">Let's make the next step clear.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">Tell us what you want to build, improve or grow. We review each enquiry to understand the requested service, business location, project scope and timeline, then confirm a suitable proposal and applicable pricing before work begins.</p><div className="mt-7 space-y-3 text-sm text-slate-600">{["Project scope and deliverables are agreed in writing before commencement.","Pricing is confirmed according to business location and project requirements.","Payment schedule, timelines and any third-party costs are outlined in the proposal."].map(x=><p key={x} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#0878C8]" size={17}/>{x}</p>)}</div></div>
            <div className="rounded-3xl border border-[#E5EAF0] bg-[#F7FAFC] p-8 sm:p-10"><ShieldCheck size={27} className="text-[#0878C8]"/><h3 className="mt-5 text-xl font-bold text-[#102744]">An independent digital studio</h3><p className="mt-3 text-sm leading-7 text-slate-600">Creto Studio currently operates independently during its initial trial period. This portfolio does not present the studio as an incorporated company or imply certifications, partnerships or endorsements that have not been stated.</p><Link href="/packages" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">View service packages & pricing <ArrowUpRight size={16}/></Link></div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0648B2] via-[#0759D6] to-[#0878E8] px-6 py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">Have a project in mind?</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Let's start with a conversation.</h2><p className="mt-4 text-sm leading-7 text-blue-50/85">Share your idea and we'll help define a practical way forward.</p></div><Link href="/contact?source=portfolio" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0759D6]">Start an enquiry <ArrowUpRight size={17}/></Link></div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

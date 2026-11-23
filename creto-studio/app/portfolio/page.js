import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Globe2, Layers3, Lightbulb, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Business Portfolio",
  description: "Explore Creto Studio's digital services, selected projects, capabilities and collaborative process.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Creto Studio | Business Portfolio",
    description: "An independent digital services studio working across web, commerce, mobile, design and digital growth.",
    url: "https://cretostudio.com/portfolio",
  },
};

const services = [
  ["Web Development", "Responsive business websites and tailored web experiences built around clear goals."],
  ["E-commerce Development", "Online storefronts and commerce experiences that make products easier to discover and buy."],
  ["Mobile App Development", "Mobile product experiences planned around useful features and straightforward journeys."],
  ["UI/UX Design", "User-focused interfaces, thoughtful structure and consistent visual systems."],
  ["AI & Software Solutions", "Custom software and AI-enabled workflows shaped around practical business needs."],
  ["SEO & Digital Marketing", "Search visibility and digital marketing support to help businesses reach the right audience."],
  ["Social Media Management", "Content planning, creative production and consistent social channel support."],
];

const projects = [
  { name: "Zero Point Meditation Center", category: "Non-profit · Wellness & Community", description: "A digital home for a meditation community, bringing programmes, teachings, events and membership journeys together.", url: "https://www.zeropointmeditationcenter.org/", image: "/CretoStudio.png" },
  { name: "RipTides Grill & Bar", category: "Hospitality · Website & Membership", description: "A restaurant and bar website with a dedicated customer membership journey and account management experience.", url: "https://riptidesgrillandbar.com/", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85" },
  { name: "Customize Ans", category: "Custom Fashion · Wearable Art", description: "A creative fashion website showcasing personalised garment transformation, hand painting, patchwork and embroidery.", url: "https://customizeans.vercel.app/", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85" },
  { name: "E-Learn Platform", category: "Education Platform", description: "A responsive learning experience designed to make educational content easier to discover and navigate.", url: "https://e-lern.vercel.app/", image: "/E-learn.png" },
  { name: "Plumbing Kathmandu", category: "Service Business Website", description: "A service-focused website that presents offerings clearly and helps local customers make enquiries.", url: "https://plumbing-kathmandu.vercel.app/", image: "/plumbing-Kathmandu.png" },
  { name: "Shamu Cap Store", category: "E-commerce Demo", description: "A product-led storefront concept for presenting a focused collection and browsing products.", url: null, image: "/Shamu.png", status: "Demo coming soon" },
];

const approach = [
  ["01", "Understand", "We start by learning about your business, audience, goals and practical requirements."],
  ["02", "Plan", "We define the scope, priorities, deliverables and a clear proposal before work begins."],
  ["03", "Create", "Design and development move forward with communication and review points along the way."],
  ["04", "Deliver", "We prepare the agreed work for handover or launch and outline any ongoing support."],
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FFFCF5] text-[#172033]">
      <Navbar />
      <main className="pt-[76px]">
        <section className="relative overflow-hidden bg-[#04132D] px-6 py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#0878E8]/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.24em] text-[#75C8FF]">Business portfolio · Technology · Design · Growth</p>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Digital ideas, shaped into useful experiences.</h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/75">Creto Studio is an independently operated digital services studio working with businesses and organisations on websites, commerce, mobile experiences, software and digital creative services.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact?source=portfolio" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-6 py-3.5 text-sm font-bold text-white">Discuss a project <ArrowUpRight size={17}/></Link>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">Explore projects <ArrowUpRight size={17}/></Link>
              </div>
              <p className="mt-7 text-xs leading-6 text-blue-100/45">Independent digital services studio · Operating from Nepal · Working with clients across markets</p>
            </div>
            <div className="relative rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#102B50] to-[#071426] p-7 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="text-xs font-bold uppercase tracking-[.2em] text-blue-100/60">What we bring together</span><Globe2 className="text-[#7DD1FF]" size={21}/></div>
              <div className="grid grid-cols-2 gap-3 pt-6">
                {[[Layers3,"Digital products"],[Sparkles,"Creative design"],[Lightbulb,"Practical ideas"],[MessageCircle,"Clear collaboration"]].map(([Icon,label])=><div key={label} className="rounded-2xl border border-white/10 bg-white/[.045] p-5"><Icon className="mb-8 text-[#79CFFF]" size={22}/><p className="text-sm font-semibold text-white">{label}</p></div>)}
              </div>
              <p className="mt-6 text-sm leading-7 text-blue-100/65">A considered mix of strategy, design and technology — with the scope shaped around each project.</p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">About the studio</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-[#102744] sm:text-4xl">A flexible digital partner for the next stage of your business.</h2><p className="mt-5 text-base leading-8 text-slate-600">Creto Studio brings digital disciplines together so businesses can work with one collaborative team across their online presence and digital initiatives. We focus on understanding the requirement first, agreeing a realistic scope and delivering work with clear communication.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[["Our focus","Useful, well-considered digital experiences that solve a defined business need."],["Our approach","Collaborative planning, transparent scope and communication throughout delivery."],["Our commitment","A practical process that keeps expectations, deliverables and next steps clear."]].map(([title,body])=><div key={title} className="rounded-2xl border border-[#E5EAF0] bg-white p-7 shadow-[0_12px_35px_rgba(15,35,60,.06)]"><CheckCircle2 className="text-[#0878C8]" size={22}/><h3 className="mt-5 text-lg font-bold text-[#102744]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#F0F5FA] px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">Services & capabilities</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">The capabilities to move your ideas forward.</h2><p className="mt-4 text-sm leading-7 text-slate-600">Services can be delivered individually or combined into a project scope that fits your goals.</p></div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([title,body],i)=><div key={title} className="rounded-2xl border border-[#E0E8F0] bg-white p-6"><p className="text-xs font-bold tracking-[.18em] text-[#0878C8]">0{i+1}</p><h3 className="mt-4 text-lg font-bold text-[#102744]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{body}</p></div>)}
            </div>
            <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">View service details <ArrowUpRight size={16}/></Link>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">Selected work</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">A selection of projects and concepts.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Examples of digital work across different industries and needs. Demo concepts are identified as such.</p></div><Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">See all projects <ArrowUpRight size={16}/></Link></div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project)=><article key={project.name} className="overflow-hidden rounded-3xl border border-[#E5EAF0] bg-white shadow-[0_18px_50px_rgba(15,35,60,.08)]">
                <div className="relative overflow-hidden"><Image src={project.image} alt={project.name+" project preview"} width={900} height={600} sizes="(max-width: 768px) 100vw, 33vw" className="h-52 w-full object-cover object-top" />{project.status&&<span className="absolute right-4 top-4 rounded-full bg-[#102744]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">{project.status}</span>}</div>
                <div className="p-6"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#0878C8]">{project.category}</p><h3 className="mt-3 text-xl font-bold text-[#102744]">{project.name}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>{project.url?<a href={project.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0878C8]">Visit live project <ArrowUpRight size={16}/></a>:<span className="mt-5 inline-flex text-sm font-semibold text-slate-500">Preview coming soon</span>}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="bg-[#04132D] px-6 py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#75C8FF]">How we work</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">A clear process from first conversation to delivery.</h2></div>
            <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{approach.map(([n,title,body])=><div key={n} className="border-t border-[#248FEA]/50 pt-5"><p className="text-sm font-bold tracking-[.18em] text-[#67C5FF]">{n}</p><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-blue-100/65">{body}</p></div>)}</div>
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">Engagement & next steps</p><h2 className="mt-4 text-3xl font-bold text-[#102744] sm:text-4xl">Start with a conversation. Build a clear plan.</h2><p className="mt-5 text-sm leading-7 text-slate-600">Every enquiry is reviewed to understand the requested service, business location, project scope and timeline. We then confirm a suitable proposal and applicable pricing before work begins.</p><div className="mt-6 space-y-3 text-sm text-slate-600">{["Project scope and deliverables are agreed in writing before commencement.","Pricing is confirmed according to business location and project requirements.","Payment schedule, timelines and any third-party costs are outlined in the proposal."] .map(x=><p key={x} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#0878C8]" size={17}/>{x}</p>)}</div></div>
            <div className="rounded-3xl border border-[#E5EAF0] bg-[#F7FAFC] p-8 sm:p-10"><ShieldCheck size={27} className="text-[#0878C8]"/><h3 className="mt-5 text-xl font-bold text-[#102744]">A transparent working relationship</h3><p className="mt-3 text-sm leading-7 text-slate-600">Creto Studio currently operates as an independent digital services studio during its initial trial period. It is not presented here as an incorporated company. Business registration and formal office arrangements may be considered as the studio develops.</p><p className="mt-4 text-xs leading-6 text-slate-500">This portfolio describes services and selected work. It does not imply any certification, partnership, client endorsement or legal status not expressly stated.</p><Link href="/packages" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0759D6]">Explore packages & pricing <ArrowUpRight size={16}/></Link></div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#0648B2] via-[#0759D6] to-[#0878E8] px-6 py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 lg:flex-row lg:items-center"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">Let's work together</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">Have a project in mind?</h2><p className="mt-4 text-sm leading-7 text-blue-50/85">Tell us what you are looking to build, improve or grow. We would be glad to learn more.</p></div><Link href="/contact?source=portfolio" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0759D6]">Start a conversation <ArrowUpRight size={17}/></Link></div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

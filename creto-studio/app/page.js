import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Projects from "../components/Projects";
import MarketingFooter from "../components/MarketingFooter";

export const metadata = {
  title: "Creto Studio | Digital Products Built for What's Next",
  description: "Creto Studio creates websites, mobile apps, e-commerce experiences, custom software and digital growth solutions for ambitious businesses.",
};

function HomeCallout() {
  return (
    <section className="relative overflow-hidden bg-[#04132D] px-6 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full border border-[#36A9FF]/20 bg-[#0878E8]/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#75C8FF]">A better next step starts here</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Have an idea worth building?</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/70">Tell us what you want to create or improve. We’ll help you shape the idea into a practical plan.</p>
        </div>
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[.045] p-7 sm:p-9">
          {["A clear conversation about your goals","A practical view of possible next steps","A solution shaped around your business"].map((item)=><div key={item} className="flex items-start gap-3 text-sm text-blue-100/80"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#67C5FF]"/>{item}</div>)}
          <Link href="/contact" className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">Start a project <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#04132D]">
      <Navbar />
      <main><Hero /><ServicesGrid /><Projects /><HomeCallout /></main>
      <MarketingFooter />
    </div>
  );
}

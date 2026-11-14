import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MarketingHero({ eyebrow = "CRETO STUDIO · TECHNOLOGY · DESIGN · GROWTH", title, accent, description, cta = "Discuss your project", image = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85", imageAlt = "Modern digital workspace with laptop and development tools" }) {
  return <section className="relative isolate overflow-hidden bg-[#050B18] pb-16 pt-32 text-white sm:pb-20 sm:pt-40">
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_10%_20%,rgba(0,91,220,.2),transparent_42%),linear-gradient(120deg,#050B18_0%,#09162B_58%,#050B18_100%)]" />
    <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0878E8]/10 blur-[100px]" />
    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
      <div className="relative z-10">
        <p className="mb-6 text-[10px] font-bold tracking-[.28em] text-[#79C9FF] sm:text-xs">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-.04em] sm:text-6xl lg:text-[4.4rem]">{title}<span className="mt-1 block bg-gradient-to-r from-[#62BFFF] via-[#20B9FF] to-[#A5E8FF] bg-clip-text text-transparent">{accent}</span></h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-7 py-4 text-sm font-bold shadow-[0_12px_34px_rgba(0,93,220,.3)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,160,255,.28)]">{cta}<ArrowUpRight size={17}/></Link>
      </div>
      <div className="group relative min-h-[250px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1A30] shadow-[0_30px_90px_rgba(0,0,0,.35)] sm:min-h-[340px] lg:min-h-[410px]">
        <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B18]/75 via-[#050B18]/10 to-[#050B18]/10" />
        <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-[#050B18]/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#B9E8FF] backdrop-blur-xl">Technology · Design · Growth</div>
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  </section>;
}

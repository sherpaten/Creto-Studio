import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MarketingHero({ eyebrow = "CRETO STUDIO · TECHNOLOGY · DESIGN · GROWTH", title, accent, description, cta = "Discuss your project" }) {
  return <section className="relative overflow-hidden bg-[#061A3B] pb-20 pt-36 text-white sm:pb-24 sm:pt-44">
    <div className="pointer-events-none absolute -right-24 top-20 h-[34rem] w-[34rem] rounded-full border border-[#168BEE]/20 bg-[radial-gradient(circle,rgba(5,106,220,.18),transparent_65%)]" />
    <div className="pointer-events-none absolute right-[8%] top-28 h-[28rem] w-[28rem] rounded-full border border-[#43B9FF]/20 [background-image:radial-gradient(#4bbcff_1px,transparent_1px)] [background-size:18px_18px] opacity-20" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <p className="mb-6 text-[10px] font-bold tracking-[.28em] text-[#79C9FF] sm:text-xs">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-.04em] sm:text-6xl lg:text-7xl">{title}<span className="block bg-gradient-to-r from-[#62BFFF] to-[#9CC9E9] bg-clip-text text-transparent">{accent}</span></h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">{description}</p>
      <Link href="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#0759D6] px-7 py-4 text-sm font-bold shadow-[0_12px_34px_rgba(0,93,220,.3)] transition hover:-translate-y-1 hover:bg-[#0878E8]">{cta}<ArrowUpRight size={17}/></Link>
    </div>
  </section>;
}

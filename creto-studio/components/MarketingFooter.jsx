import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  ["Web Development", "/services/web-development"],
  ["E-commerce", "/services/ecommerce"],
  ["Mobile Apps", "/services/mobile-app-development"],
  ["UI/UX Design", "/services/ui-ux-design"],
  ["AI & Software", "/services/ai-software"],
  ["Digital Marketing", "/services/digital-marketing"],
  ["Social Media", "/services/social-media-management"],
];

export default function MarketingFooter() {
  return <footer className="border-t border-white/10 bg-[#04132D] text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <Link href="/"><img src="/logo.png" alt="Creto Studio" className="mb-6 h-12 w-auto rounded bg-white p-1" /></Link>
        <p className="max-w-sm text-sm leading-7 text-blue-100/70">We design and build thoughtful digital products that help ambitious businesses move forward.</p>
        <a href="https://wa.me/9779747457986" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0759D6] px-5 py-3 text-sm font-semibold transition hover:bg-[#0878E8]">Start a conversation <ArrowUpRight size={16}/></a>
      </div>
      <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#67C5FF]">Explore</h3><div className="grid gap-3 text-sm text-blue-100/75"><Link href="/about" className="hover:text-white">About us</Link><Link href="/services" className="hover:text-white">Services</Link><Link href="/projects" className="hover:text-white">Projects</Link><Link href="/process" className="hover:text-white">Our process</Link><Link href="/team" className="hover:text-white">Our team</Link><Link href="/contact" className="hover:text-white">Contact</Link></div></div>
      <div><h3 className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#67C5FF]">Services</h3><div className="grid gap-3 text-sm text-blue-100/75">{serviceLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</div></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-blue-100/50 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Creto Studio. All rights reserved.</span><span className="inline-flex items-center gap-2"><MapPin size={13}/> Made with care in Nepal <span>·</span><Mail size={13}/> info@cretostudio.com</span></div></div>
  </footer>;
}

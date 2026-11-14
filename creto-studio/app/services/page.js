import Link from "next/link";
import { ArrowUpRight, Code2, ShoppingBag, Smartphone, PanelsTopLeft, BrainCircuit, Search, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = { title: "Digital Services", description: "Explore web development, e-commerce, mobile apps, UI/UX, AI software and digital growth services from Creto Studio." };
const services = [
  { slug:"web-development", icon:Code2, title:"Website Development", text:"Fast, responsive websites and web applications that make your business easier to discover, understand and choose." },
  { slug:"ecommerce", icon:ShoppingBag, title:"E-commerce Development", text:"Online stores with clear product journeys, smooth checkout experiences and room to grow." },
  { slug:"mobile-app-development", icon:Smartphone, title:"Mobile App Development", text:"Useful Android, iOS and cross-platform apps designed around the people who use them." },
  { slug:"ui-ux-design", icon:PanelsTopLeft, title:"UI/UX Design", text:"Intuitive interfaces, thoughtful user journeys and product experiences that feel effortless." },
  { slug:"ai-software", icon:BrainCircuit, title:"AI & Software Solutions", text:"Custom software, practical AI integrations and automation for the work that matters." },
  { slug:"digital-marketing", icon:Search, title:"SEO & Digital Marketing", text:"Search-ready foundations and digital campaigns that help the right customers find you." },
  { slug:"social-media-management", icon:Share2, title:"Social Media Management", text:"Consistent content planning and channel management that build a recognisable online presence." },
];
export default function ServicesPage(){return <div className="min-h-screen bg-[#061A3B]"><Navbar/><MarketingHero eyebrow="WHAT WE DO" title="Everything you need to" accent="move your business forward." description="One connected team for strategy, design, development and digital growth. Explore the capabilities that can help turn your next idea into a real product."/><main className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Our capabilities</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">The right expertise, for the next step.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({slug,icon:Icon,title,text},i)=><Link key={slug} href={`/services/${slug}`} className="group rounded-3xl border border-white/10 bg-white/[.045] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#278FEA]/60 hover:bg-[#0A2A58]"><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0878E8]/15 text-[#71C8FF]"><Icon size={23}/></div><p className="text-xs font-bold tracking-[.18em] text-[#64BFFF]">0{i+1}</p><h3 className="mt-3 text-xl font-bold text-white">{title}</h3><p className="mt-3 min-h-[76px] text-sm leading-7 text-blue-100/65">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#80CEFF]">Explore service <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></span></Link>)}</div></main><MarketingFooter/></div>}

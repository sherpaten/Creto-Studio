import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import About from "@/components/About";
import Process from "@/components/Process";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "About Creto Studio", description: "Get to know Creto Studio, our approach, and how we help businesses build better digital experiences." };
export default function AboutPage() { return <div className="min-h-screen bg-[#050B18]"><Navbar/><MarketingHero eyebrow="A LITTLE ABOUT US" title="A creative technology partner," accent="built around your ambition." description="Creto Studio brings strategy, design and engineering together to turn business ideas into useful digital experiences." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" imageAlt="Creative team collaborating around a table in a modern studio"/><main><About/><Process/></main><MarketingFooter/></div>; }
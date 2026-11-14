import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import Team from "@/components/Team";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "Our Team", description: "Meet the people behind Creto Studio's creative and technical work." };
export default function TeamPage(){return <div className="min-h-screen bg-[#050B18]"><Navbar/><MarketingHero eyebrow="THE PEOPLE BEHIND THE WORK" title="A team built around" accent="curiosity and craft." description="Different perspectives, shared ownership and a practical approach to making good ideas happen." image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85" imageAlt="Team members collaborating in a modern office"/><Team/><MarketingFooter/></div>}
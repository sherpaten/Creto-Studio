import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import Team from "@/components/Team";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "Our Team", description: "Meet the people behind Creto Studio's creative and technical work." };
export default function TeamPage(){return <div className="min-h-screen bg-[#061A3B]"><Navbar/><MarketingHero eyebrow="THE PEOPLE BEHIND THE WORK" title="A team built around" accent="curiosity and craft." description="Different perspectives, shared ownership and a practical approach to making good ideas happen."/><Team/><MarketingFooter/></div>}

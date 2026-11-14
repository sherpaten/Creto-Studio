import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import Projects from "@/components/Projects";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "Our Projects", description: "Explore selected digital work and project examples from Creto Studio." };
export default function ProjectsPage(){return <div className="min-h-screen bg-[#050B18]"><Navbar/><MarketingHero eyebrow="SELECTED WORK" title="Ideas made" accent="tangible." description="A look at the digital experiences and business solutions we create. Explore a few examples of our work and imagine what we could build together." image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85" imageAlt="Analytics dashboard displayed on a computer screen"/><Projects/><MarketingFooter/></div>}
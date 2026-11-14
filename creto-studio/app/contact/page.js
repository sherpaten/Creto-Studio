import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import Contact from "@/components/Contact";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "Contact Creto Studio", description: "Tell Creto Studio about your next website, app, software or digital growth project." };
export default function ContactPage(){return <div className="min-h-screen bg-[#050B18]"><Navbar/><MarketingHero eyebrow="LET'S BUILD SOMETHING USEFUL" title="Have an idea?" accent="Let's talk." description="Tell us what you're planning, what you want to improve or where you need a hand. We'll help you work out a sensible next step." cta="Start an enquiry" image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85" imageAlt="Creative professionals meeting and discussing a project"/><Contact/><MarketingFooter/></div>}
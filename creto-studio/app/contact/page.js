import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Contact from "@/components/Contact";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "Contact Creto Studio", description: "Tell Creto Studio about your next website, app, software or digital growth project." };
export default function ContactPage() {
  return <div className="min-h-screen bg-[#050B18]"><Navbar/><PageIntro eyebrow="LET'S BUILD SOMETHING USEFUL" title="Have an idea?" accent="Let's talk." description="Tell us what you're planning, what you want to improve or where you need a hand. We'll help you work out a sensible next step."/><Contact/><MarketingFooter/></div>;
}
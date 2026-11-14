import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";
import MarketingFooter from "@/components/MarketingFooter";
export const metadata = { title: "About Creto Studio", description: "Get to know Creto Studio, our approach, and how we help businesses build better digital experiences." };
export default function AboutPage() {
  return <div className="min-h-screen bg-[#050B18]"><Navbar/><PageIntro eyebrow="A LITTLE ABOUT US" title="A creative technology partner," accent="built around your ambition." description="Creto Studio brings strategy, design and engineering together to turn business ideas into useful digital experiences."/><main><About/></main><MarketingFooter/></div>;
}
import Navbar from "@/components/Navbar";
import MarketingFooter from "@/components/MarketingFooter";
import PackagesExperience from "@/components/PackagesExperience";

export const metadata = {
  title: "Packages & Pricing",
  description:
    "Explore Creto Studio's website, social media, video content and digital growth packages. Choose regional pricing for Nepal or international clients.",
  alternates: { canonical: "/packages" },
  openGraph: {
    title: "Packages & Pricing | Creto Studio",
    description:
      "Find a digital package that fits your business goals, with clear deliverables and regional pricing.",
    url: "https://cretostudio.com/packages",
  },
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <main>
        <PackagesExperience />
      </main>
      <MarketingFooter />
    </div>
  );
}

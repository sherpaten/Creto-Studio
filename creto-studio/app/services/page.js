import Link from "next/link";
import { ArrowUpRight, Code2, ShoppingBag, Smartphone, PanelsTopLeft, BrainCircuit, Search, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Digital Services",
  description: "Explore web development, e-commerce, mobile apps, UI/UX, AI software and digital growth services from Creto Studio.",
};

const services = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Website Development",
    text: "Fast, responsive websites and web applications that make your business easier to discover, understand and choose.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "ecommerce",
    icon: ShoppingBag,
    title: "E-commerce Development",
    text: "Online stores with clear product journeys, smooth checkout experiences and room to grow.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Useful Android, iOS and cross-platform apps designed around the people who use them.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "ui-ux-design",
    icon: PanelsTopLeft,
    title: "UI/UX Design",
    text: "Intuitive interfaces, thoughtful user journeys and product experiences that feel effortless.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "ai-software",
    icon: BrainCircuit,
    title: "AI & Software Solutions",
    text: "Custom software, practical AI integrations and automation for the work that matters.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "digital-marketing",
    icon: Search,
    title: "SEO & Digital Marketing",
    text: "Search-ready foundations and digital campaigns that help the right customers find you.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    slug: "social-media-management",
    icon: Share2,
    title: "Social Media Management",
    text: "Consistent content planning and channel management that build a recognisable online presence.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <MarketingHero
        eyebrow="WHAT WE DO"
        title="Everything you need to"
        accent="move your business forward."
        description="One connected team for strategy, design, development and digital growth. Explore the capabilities that can help turn your next idea into a real product."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85"
        imageAlt="Team planning digital products and software together"
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Our capabilities</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">The right expertise, for the next step.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, text, image }, i) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              aria-label={`Explore ${title}`}
              className="group relative isolate flex min-h-[350px] flex-col justify-end overflow-hidden rounded-3xl border border-white/15 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#36B9FF]/65 hover:shadow-[0_20px_55px_rgba(0,100,220,.22)] sm:min-h-[380px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${image}")` }}
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041126] via-[#061D46]/85 to-[#061D46]/20 transition-colors group-hover:via-[#061D46]/75" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#0878E8]/35 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#0878E8]/55">
                <Icon size={23} />
              </div>
              <p className="text-xs font-bold tracking-[.18em] text-[#9DDEFF]">0{i + 1}</p>
              <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-blue-50/85">{text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9DDEFF]">
                Explore service <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </main>
      <MarketingFooter />
    </div>
  );
}

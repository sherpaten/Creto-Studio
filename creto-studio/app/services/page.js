import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Code2, ShoppingBag, Smartphone, PanelsTopLeft, BrainCircuit, Search, Share2, Compass, Layers3, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Digital Services",
  description: "Explore web development, e-commerce, mobile apps, UI/UX, AI software and digital growth services from Creto Studio.",
};

const services = [
  { slug: "web-development", icon: Code2, title: "Website Development", text: "Fast, responsive websites and web applications that make your business easier to discover, understand and choose.", detail: "From business websites to custom web applications, we focus on clear content, reliable functionality, responsive layouts and strong technical foundations.", bestFor: "Businesses building or refreshing their digital presence.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ecommerce", icon: ShoppingBag, title: "E-commerce Development", text: "Online stores with clear product journeys, smooth checkout experiences and room to grow.", detail: "We bring product presentation, store structure and purchasing flows together to make online shopping straightforward for customers and manageable for your team.", bestFor: "Brands and retailers ready to sell online.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=75" },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", text: "Useful Android, iOS and cross-platform apps designed around the people who use them.", detail: "We help shape mobile product ideas into practical experiences, considering user flows, interface design, integrations and the needs of everyday use.", bestFor: "Services and products that need a dedicated mobile experience.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ui-ux-design", icon: PanelsTopLeft, title: "UI/UX Design", text: "Intuitive interfaces, thoughtful user journeys and product experiences that feel effortless.", detail: "We organise information, map user journeys and design clear interfaces so people can understand a product and complete important tasks with confidence.", bestFor: "Websites, apps and platforms that need a clearer user experience.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ai-software", icon: BrainCircuit, title: "AI & Software Solutions", text: "Custom software, practical AI integrations and automation for the work that matters.", detail: "We look for useful opportunities to connect systems, reduce repetitive work and build tools around the way your organisation operates.", bestFor: "Teams looking to improve workflows or build custom tools.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=75" },
  { slug: "digital-marketing", icon: Search, title: "SEO & Digital Marketing", text: "Search-ready foundations and digital campaigns that help the right customers find you.", detail: "We help strengthen your online visibility through technical SEO, useful content planning, analytics and campaigns guided by clear objectives.", bestFor: "Businesses aiming to improve discoverability and reach.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=75" },
  { slug: "social-media-management", icon: Share2, title: "Social Media Management", text: "Consistent content planning and channel management that build a recognisable online presence.", detail: "We support a consistent brand voice through content planning, creative direction, publishing and ongoing review of what resonates with your audience.", bestFor: "Brands that want a more consistent social presence.", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=75" },
];

const approach = [
  { icon: Compass, title: "Start with the goal", text: "We learn about your audience, business priorities and the problem the work needs to solve before recommending a direction." },
  { icon: Layers3, title: "Connect the right capabilities", text: "Some projects need one focused service. Others benefit from a connected mix of strategy, design, development and content." },
  { icon: TrendingUp, title: "Build for what comes next", text: "We consider performance, usability and maintainability so your digital presence has a foundation you can continue to improve." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro eyebrow="WHAT WE DO" title="Everything you need to" accent="move your business forward." description="One connected team for strategy, design, development and digital growth. Explore the capabilities that can help turn your next idea into a real product." />
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 sm:py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Our capabilities</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">The right expertise, for the next step.</h2>
            <p className="mt-5 text-base leading-8 text-blue-100/70">Whether you need a stronger website, a new digital product or help reaching the right audience, we can focus on a single priority or bring several capabilities together. Every engagement is shaped around your goals and the people you want to reach.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, text, detail, bestFor, image }, i) => (
              <Link key={slug} href={`/services/${slug}`} aria-label={`Explore ${title}`} className="group relative isolate flex min-h-[470px] flex-col justify-end overflow-hidden rounded-3xl border border-white/15 p-7 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#36B9FF]/65 hover:shadow-[0_20px_55px_rgba(0,100,220,.22)] sm:min-h-[490px]">
                <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={72} loading="lazy" className="absolute inset-0 -z-20 object-cover transition-transform duration-700 group-hover:scale-105" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#041126] via-[#061D46]/90 to-[#061D46]/25" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#0878E8]/40 text-white backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#0878E8]/60"><Icon size={23} /></div>
                <p className="text-xs font-bold tracking-[.18em] text-[#9DDEFF]">0{i + 1} / SERVICE</p>
                <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-50/90">{text}</p>
                <p className="mt-3 text-xs leading-6 text-blue-100/70">{detail}</p>
                <p className="mt-4 border-t border-white/15 pt-4 text-xs leading-6 text-[#B9E6FF]"><span className="font-bold text-white">A good fit for: </span>{bestFor}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9DDEFF]">Explore service <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07152B] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">A connected approach</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">More than a list of services.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">The best solution is not always the biggest one. We help identify what is essential now, what can come later and how each decision supports the wider business. That keeps projects focused, practical and easier to build on.</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {approach.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-[#0A2148]/55 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#58BFFF]/25 bg-[#0759D6]/20 text-[#8DD8FF]"><Icon size={21} /></div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#168BFF]/25 bg-gradient-to-r from-[#0A2148] to-[#0A1428] p-7 sm:flex-row sm:items-center sm:p-9">
              <div>
                <h3 className="text-2xl font-bold text-white">Not sure which service you need?</h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-blue-100/70">Tell us what you want to achieve. We can help you work out a sensible starting point.</p>
              </div>
              <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0878E8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20B9FF]">Talk with us <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

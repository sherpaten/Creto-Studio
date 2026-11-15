import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Code2, ShoppingBag, Smartphone, PanelsTopLeft, BrainCircuit, Search, Share2, Compass, Layers3, TrendingUp, Target, ShieldCheck, Gauge, Headphones } from "lucide-react";
import Navbar from "@/components/Navbar";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Digital Services",
  description: "Explore Creto Studio's website development, e-commerce, mobile apps, UI/UX design, AI software, SEO and social media services.",
};

const services = [
  { slug: "web-development", icon: Code2, title: "Website Development", text: "A clear, credible online presence that helps people understand your business and take the next step.", detail: "We plan and build responsive business websites, landing pages and custom web applications, with thoughtful structure, accessible interfaces and dependable functionality.", includes: ["Business and marketing websites", "Custom web applications", "Responsive development", "Performance and technical foundations"], bestFor: "Businesses launching, refreshing or scaling their digital presence.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ecommerce", icon: ShoppingBag, title: "E-commerce Development", text: "A smoother shopping experience that makes it easier to explore products and complete a purchase.", detail: "From storefront structure to product presentation and checkout journeys, we create online shopping experiences that work for customers and your team.", includes: ["Online store design and development", "Product and category organisation", "Shopping cart and checkout journeys", "Store management foundations"], bestFor: "Retailers, makers and growing brands ready to sell online.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=75" },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", text: "Useful mobile experiences designed around real customer needs and everyday use.", detail: "We help turn product ideas into practical Android, iOS and cross-platform experiences, considering user flows, interface design and integrations.", includes: ["Product and feature planning", "iOS and Android experiences", "Cross-platform application development", "API and service integrations"], bestFor: "Businesses and products that need a dedicated mobile experience.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ui-ux-design", icon: PanelsTopLeft, title: "UI/UX Design", text: "Intuitive interfaces and considered journeys that help people use your product with confidence.", detail: "We organise information, map user journeys and shape visual systems so digital products feel clear, consistent and easy to navigate.", includes: ["User flows and information architecture", "Wireframes and prototypes", "Visual interface design", "Design systems and handoff"], bestFor: "Websites, apps and platforms that need a more useful experience.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1000&q=75" },
  { slug: "ai-software", icon: BrainCircuit, title: "AI & Software Solutions", text: "Practical tools and automation that make complex work simpler and more connected.", detail: "We identify useful opportunities to connect systems, reduce repetitive tasks and build custom software around the way your organisation works.", includes: ["Custom business software", "AI-powered features and assistants", "Workflow automation", "System and API integrations"], bestFor: "Teams improving internal workflows or building new digital tools.", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=75" },
  { slug: "digital-marketing", icon: Search, title: "SEO & Digital Marketing", text: "Stronger search foundations and focused digital activity that help the right people find you.", detail: "We improve discoverability through technical SEO, useful content planning, analytics and campaigns shaped around measurable business objectives.", includes: ["Technical and on-page SEO", "Keyword and content planning", "Analytics and performance review", "Digital campaign support"], bestFor: "Businesses looking to grow qualified traffic and online reach.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=75" },
  { slug: "social-media-management", icon: Share2, title: "Social Media Management", text: "A consistent brand voice and content rhythm across the channels your audience uses.", detail: "We support your social presence with content planning, creative direction, publishing and regular review of what resonates with your audience.", includes: ["Content calendars and planning", "Creative and post design", "Publishing and channel management", "Performance review and refinement"], bestFor: "Brands that want a more consistent and considered social presence.", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1000&q=75" },
];

const principles = [
  { icon: Target, title: "Clear project goals", text: "We agree on the audience, priorities and outcomes before choosing the solution." },
  { icon: ShieldCheck, title: "Thoughtful execution", text: "We pay attention to usability, quality and the details that make a product dependable." },
  { icon: Gauge, title: "Built to perform", text: "Responsive layouts, sensible technical foundations and performance are part of the process." },
  { icon: Headphones, title: "Support beyond launch", text: "We can help you improve, maintain and grow your digital presence as needs change." },
];

const process = [
  { number: "01", title: "Discover", text: "We listen, understand your business and define what success should look like." },
  { number: "02", title: "Plan & design", text: "We shape the scope, user journey and creative direction before development begins." },
  { number: "03", title: "Build & refine", text: "We develop, test and review the work, keeping you informed along the way." },
  { number: "04", title: "Launch & grow", text: "We prepare the launch and identify practical next steps for ongoing improvement." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <header className="relative isolate flex min-h-[590px] items-center overflow-hidden border-b border-white/10 sm:min-h-[650px]">
        <Image src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85" alt="A bright, modern creative workspace" fill priority sizes="100vw" quality={85} className="absolute inset-0 -z-30 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-20 bg-[#041126]/75" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041126] via-[#041126]/85 to-[#041126]/35" />
        <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-[#8DD8FF]">CRETO STUDIO · WHAT WE DO</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">Digital services that move your business <span className="text-[#79CEFF]">forward.</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/85 sm:text-lg">From your first website to a complete digital product, we bring strategy, design and technology together to help your business make its next move.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#our-services" className="inline-flex items-center gap-2 rounded-full bg-[#0878E8] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20B9FF]">Explore our services <ArrowRight size={17} /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15">Discuss your project <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full min-w-0 overflow-hidden">
        <section id="our-services" className="mx-auto box-border w-full max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Our capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">The right expertise, for your next step.</h2>
            <p className="mt-5 text-base leading-8 text-blue-100/70">Every business has a different challenge. Choose a focused service or combine capabilities into one connected project. Each service below outlines what we can help you plan, create and improve.</p>
          </div>
          <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ slug, icon: Icon, title, text, detail, includes, bestFor, image }, i) => (
              <article key={slug} className="group relative isolate flex min-w-0 w-full min-h-[610px] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#09172D] shadow-xl transition duration-300 hover:-translate-y-1 hover:border-[#36B9FF]/65 hover:shadow-[0_20px_55px_rgba(0,100,220,.22)]">
                <div className="relative h-48 overflow-hidden">
                  <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={72} loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09172D] to-transparent" />
                  <span className="absolute left-6 top-5 rounded-full border border-white/20 bg-[#041126]/65 px-3 py-1.5 text-[11px] font-semibold tracking-[.16em] text-[#C3E9FF] backdrop-blur">0{i + 1} / SERVICE</span>
                </div>
                <div className="flex min-w-0 flex-1 flex-col px-6 pb-7 sm:px-7">
                  <div className="-mt-7 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-[#0878E8] text-white shadow-lg shadow-blue-950/40"><Icon size={22} /></div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm font-medium leading-7 text-blue-50/90">{text}</p>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{detail}</p>
                  <div className="mt-5 border-t border-white/10 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#8DD8FF]">What we can deliver</p>
                    <ul className="mt-3 space-y-2">
                      {includes.map((item) => <li key={item} className="flex gap-2 text-xs leading-5 text-blue-100/75"><span className="mt-1 text-[#62C6FF]">•</span><span>{item}</span></li>)}
                    </ul>
                  </div>
                  <p className="mt-5 text-xs leading-6 text-blue-100/65"><span className="font-semibold text-white">A good fit for: </span>{bestFor}</p>
                  <Link href={`/services/${slug}`} className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-[#9DDEFF] transition hover:text-white">Explore service <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#07152B] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">The Creto difference</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Good digital work starts with understanding your business.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">We do not believe in adding complexity for its own sake. We focus on what your customers need, what your team can manage and what will make a meaningful difference to your goals.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-[#0A2148]/55 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#58BFFF]/25 bg-[#0759D6]/20 text-[#8DD8FF]"><Icon size={21} /></div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#C5DCEB] bg-[#D8E9F3] py-20 text-[#102744] sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#0878C8]">What we bring to a project</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#102744] sm:text-4xl">More than a good-looking interface.</h2>
              <p className="mt-5 text-base leading-8 text-slate-700">A successful digital project needs to work for the people using it and the people running it. We consider the full experience, from structure and content to responsive design, performance, maintainability and the actions visitors need to take. The goal is not simply to launch another website; it is to create a useful digital experience that supports the organisation behind it.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Websites & digital platforms", "Responsive, content-rich websites that communicate your value, make information easy to find and guide visitors towards meaningful action."],
                ["E-commerce experiences", "Product-led storefronts with clear collections, considered product presentation and customer journeys designed to make browsing simple."],
                ["Business tools & dashboards", "Practical digital workspaces that bring information, operational views and everyday workflows into a more organised experience."],
                ["Product design & development", "Purpose-built interfaces and applications shaped around the needs of a particular audience, organisation or service."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-[#D5E2EA] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#102744]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#C5DCEB] bg-white p-7 sm:flex-row sm:items-center sm:p-9">
              <div>
                <h3 className="text-xl font-semibold text-[#102744]">Your project could be next.</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Share your idea and let's explore what a useful, well-built solution could look like.</p>
              </div>
              <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0759D6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0878E8]">Discuss your project <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">How we work</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">A clear path from idea to launch.</h2>
            <p className="mt-5 text-base leading-8 text-blue-100/70">You will know what happens next and why. We keep the process collaborative, practical and focused on the result.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ number, title, text }) => (
              <article key={number} className="border-t border-[#258FEA]/50 pt-6">
                <p className="text-sm font-bold tracking-[.18em] text-[#67C5FF]">{number}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100/65">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#07152B] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 lg:flex-row lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Let's talk</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Not sure where to start?</h2>
              <p className="mt-4 text-base leading-8 text-blue-100/70">Tell us what you are trying to achieve. We will help you identify a sensible starting point and the right capabilities for your project.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0878E8] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#20B9FF]">Start a conversation <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

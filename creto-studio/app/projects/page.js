import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Our Projects",
  description: "Explore Creto Studio's selected websites, digital experiences and product concepts across community, education, services and commerce.",
};

const capabilities = [
  { title: "Websites & digital platforms", text: "Clear, responsive websites that explain what you do, make information easy to find and give visitors a useful next step." },
  { title: "E-commerce experiences", text: "Product-focused storefronts that organise collections, communicate value and make browsing straightforward." },
  { title: "Purpose-built applications", text: "Digital tools and platforms shaped around a particular audience, workflow or service." },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro
        eyebrow="SELECTED WORK"
        title="Ideas made"
        accent="tangible."
        description="Explore a selection of digital work and project examples across community, education, local services and commerce. Each project starts with a different goal, audience and set of practical needs."
      />
      <main>
        <Projects detailed />
        <section className="bg-[#050B18] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs tracking-[.22em] text-[#6DCBFF]">WHAT WE BRING TO A PROJECT</p>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">More than a good-looking interface.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">A successful digital project needs to work for the people using it and the people running it. We consider the full experience, from structure and content to performance, maintainability and the actions visitors need to take.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0A1428] p-6 sm:p-8">
                  <h3 className="text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#168BFF]/25 bg-[#0A2148] p-7 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h3 className="text-2xl text-white">Your project could be next.</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100/70">Share your idea and let's explore what a useful, well-built solution could look like.</p>
              </div>
              <Link href="/contact" className="inline-flex shrink-0 rounded-full bg-[#0878E8] px-6 py-3 text-sm text-white transition hover:bg-[#20B9FF]">Discuss a project <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

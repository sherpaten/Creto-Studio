import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Our Projects",
  description: "Explore Creto Studio's website projects, digital products and interactive demos across community, education, local services, commerce and business tools.",
};

const capabilities = [
  { title: "Websites & digital platforms", text: "Responsive, content-rich websites that communicate your value, make information easy to find and guide visitors towards meaningful action." },
  { title: "E-commerce experiences", text: "Product-led storefronts with clear collections, considered product presentation and customer journeys designed to make browsing simple." },
  { title: "Business tools & dashboards", text: "Practical digital workspaces that bring information, operational views and everyday workflows into a more organised experience." },
  { title: "Product design & development", text: "Purpose-built interfaces and applications shaped around the needs of a particular audience, organisation or service." },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro
        eyebrow="SELECTED WORK"
        title="Ideas made"
        accent="tangible."
        description="Explore websites, digital products and interactive demos created around real goals. From community platforms and service websites to commerce and business tools, each example shows a different way thoughtful digital design can make work easier."
      />
      <main>
        <Projects detailed />
        <section className="bg-[#D8E9F3] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs tracking-[.22em] text-[#0878C8]">WHAT WE BRING TO A PROJECT</p>
              <h2 className="text-3xl leading-tight text-[#102744] sm:text-4xl">More than a good-looking interface.</h2>
              <p className="mt-5 text-base leading-8 text-slate-600">A successful digital project needs to work for the people using it and the people running it. We consider the full experience, from structure and content to responsive design, performance, maintainability and the actions visitors need to take. The goal is not simply to launch another website; it is to create a useful digital experience that supports the organisation behind it.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <article key={item.title} className="rounded-2xl border border-[#E0E6EC] bg-white p-6 shadow-sm sm:p-8">
                  <h3 className="text-lg text-[#102744]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#DDE5EC] bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-10">
              <div>
                <h3 className="text-2xl text-[#102744]">Your project could be next.</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">Share your idea and let's explore what a useful, well-built solution could look like.</p>
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

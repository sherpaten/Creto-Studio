import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";
import Team from "@/components/Team";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "About Creto Studio",
  description: "Meet Creto Studio: a digital partner bringing strategy, design and technology together, and get to know the team behind the work.",
};

const commitments = [
  { number: "01", title: "Understand the real need", text: "We begin by learning about your business, your audience and the challenge you want to solve. That context helps us focus on the work that will make a meaningful difference." },
  { number: "02", title: "Plan with purpose", text: "We shape the scope, priorities, user journey and technical direction before moving into delivery. You understand what is being built and why." },
  { number: "03", title: "Create with care", text: "Design and engineering work together to create responsive, accessible and maintainable digital experiences across devices." },
  { number: "04", title: "Support what comes next", text: "Launch is a milestone, not the finish line. We can help refine, maintain and improve your digital presence as your organisation evolves." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro
        eyebrow="ABOUT CRETO STUDIO"
        title="A creative technology partner,"
        accent="built around your ambition."
        description="We bring strategy, design and engineering together to turn business ideas into useful digital experiences. From a first website to a custom platform, we help organisations make thoughtful decisions and move forward with confidence."
      />
      <main>
        <section className="relative overflow-hidden bg-[#050B18] py-16 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:px-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.22em] text-[#6DCBFF]">Who we are</p>
              <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">Good technology starts with understanding people.</h2>
              <p className="mt-6 text-base leading-8 text-blue-100/70">Creto Studio is a digital creative and technology studio based in Nepal. We work across web development, e-commerce, mobile applications, user experience, custom software and digital growth. Our work is grounded in a simple idea: technology should make things clearer, easier and more useful.</p>
              <p className="mt-4 text-base leading-8 text-blue-100/70">Every organisation has its own goals, customers and constraints. We take time to understand those details, then bring the right mix of creative thinking and technical execution to the project. The result is work shaped around a real purpose—not a one-size-fits-all template.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Strategy", "Design", "Engineering", "Digital growth"].map((item) => <span key={item} className="rounded-full border border-[#58BFFF]/25 bg-[#0A2148] px-4 py-2 text-xs font-semibold text-blue-100">{item}</span>)}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] border border-[#38AFFF]/20" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 bg-[#0D1A2E]">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
                  alt="A collaborative team working together around a table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={78}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041126]/65 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#06152F]/80 p-5 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8DD8FF]">Our point of view</p>
                  <p className="mt-2 text-lg font-semibold leading-snug text-white">Thoughtful ideas. Practical technology. Work that moves you forward.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        <section className="relative overflow-hidden bg-[#050B18] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#6DCBFF]">Working with Creto</p>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">A clear process, built around collaboration.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">Good digital work comes from asking the right questions, communicating openly and making considered decisions. We keep you close to the process, explain the choices being made and make the next steps clear.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {commitments.map((item) => (
                <article key={item.number} className="rounded-2xl border border-white/10 bg-[#0A1428] p-6 sm:p-8">
                  <p className="text-sm font-semibold text-[#63C5FF]">{item.number}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Team />

        <section className="bg-[#061A3B] py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#83D4FF]">Let's build something useful</p>
              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Have a project in mind?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/70">Tell us what you are working towards. We can help you explore the right scope, priorities and next steps.</p>
            </div>
            <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0878E8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20B9FF]">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

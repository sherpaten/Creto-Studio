import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import About from "@/components/About";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "About Creto Studio",
  description: "Learn about Creto Studio's approach to strategy, design, software development and long-term digital partnerships.",
};

const commitments = [
  { number: "01", title: "Understand the real need", text: "We start by learning about your goals, audience, existing tools and the problem you want to solve. This helps keep the work focused on what matters." },
  { number: "02", title: "Plan before building", text: "We shape the scope, user journey and technical direction before moving into design and development, so decisions have a clear purpose." },
  { number: "03", title: "Build with care", text: "We bring design and engineering together to create responsive, accessible and maintainable digital products." },
  { number: "04", title: "Keep improving", text: "Launch is an important milestone, not the end of the relationship. We can help refine, maintain and grow your digital presence as needs change." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro
        eyebrow="A LITTLE ABOUT US"
        title="A creative technology partner,"
        accent="built around your ambition."
        description="Creto Studio brings strategy, design and engineering together to turn business ideas into useful digital experiences. We work with organisations at different stages, from shaping an early idea to improving an established digital product."
      />
      <main>
        <About />
        <section className="relative overflow-hidden bg-[#050B18] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs tracking-[.22em] text-[#6DCBFF]">WORKING WITH CRETO</p>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">A thoughtful process, with people at the centre.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">Good digital work comes from asking the right questions, communicating clearly and making considered decisions. Our approach is collaborative and practical: you stay close to the work, understand the choices being made and know what comes next.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {commitments.map((item) => (
                <article key={item.number} className="rounded-2xl border border-white/10 bg-[#0A1428] p-6 sm:p-8">
                  <p className="text-sm text-[#63C5FF]">{item.number}</p>
                  <h3 className="mt-3 text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 rounded-2xl border border-[#168BFF]/25 bg-gradient-to-r from-[#0A2148] to-[#0A1428] p-7 sm:p-10">
              <h3 className="text-2xl text-white">Have an idea taking shape?</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/70">Tell us what you are working towards. We can help you explore the right scope, priorities and next steps.</p>
              <a href="/contact" className="mt-6 inline-flex rounded-full bg-[#0878E8] px-6 py-3 text-sm text-white transition hover:bg-[#20B9FF]">Start a conversation <span className="ml-2" aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

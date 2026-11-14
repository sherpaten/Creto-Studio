import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Team from "@/components/Team";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Our Team",
  description: "Meet the people behind Creto Studio's creative direction, engineering, operations and marketing.",
};

const waysOfWorking = [
  { title: "Shared ownership", text: "Our team brings different areas of expertise to each engagement and works together around the goals of the project." },
  { title: "Clear communication", text: "We value practical conversations, useful updates and making technical decisions understandable." },
  { title: "Flexible collaboration", text: "The right mix of people and skills depends on the work. We shape collaboration around each project's needs and priorities." },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#050B18]">
      <Navbar />
      <PageIntro
        eyebrow="THE PEOPLE BEHIND THE WORK"
        title="A team built around"
        accent="curiosity and craft."
        description="Creto Studio brings together leadership, creative thinking, engineering and business development. We combine our strengths to help turn complex ideas into clear, useful digital experiences."
      />
      <main>
        <Team />
        <section className="bg-[#050B18] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-xs tracking-[.22em] text-[#6DCBFF]">HOW WE WORK TOGETHER</p>
              <h2 className="text-3xl leading-tight text-white sm:text-4xl">Different strengths. One shared direction.</h2>
              <p className="mt-5 text-base leading-8 text-blue-100/70">Strong work is rarely the result of one discipline alone. We connect creative, technical and operational perspectives so that decisions support the whole project, not just one part of it.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {waysOfWorking.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-[#0A1428] p-6 sm:p-8">
                  <h3 className="text-xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-blue-100/65">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <h3 className="text-2xl text-white">Interested in working with us?</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100/70">Whether you have a project in mind or want to explore a collaboration, we'd be glad to hear from you.</p>
              <Link href="/contact" className="mt-6 inline-flex rounded-full bg-[#0878E8] px-6 py-3 text-sm text-white transition hover:bg-[#20B9FF]">Get in touch <span className="ml-2" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

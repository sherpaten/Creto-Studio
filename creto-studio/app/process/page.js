import Navbar from "@/components/Navbar";
import MarketingHero from "@/components/MarketingHero";
import Process from "@/components/Process";
import MarketingFooter from "@/components/MarketingFooter";

export const metadata = {
  title: "Our Process",
  description: "See how Creto Studio takes a project from discovery and planning through design, development, launch and ongoing improvement.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#061A3B]">
      <Navbar />
      <MarketingHero
        eyebrow="HOW WE WORK"
        title="A clear path from idea"
        accent="to something real."
        description="Good work comes from shared understanding, thoughtful planning and steady collaboration. Here is how we move a project forward with you."
        cta="Start a conversation"
      />
      <main>
        <Process />
        <section className="bg-[#061A3B] px-6 pb-24 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#67C5FF]">Ready when you are</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">Let’s make your next idea happen.</h2>
          <a href="/contact" className="mt-8 inline-flex rounded-full bg-[#0759D6] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0878E8]">Discuss your project ↗</a>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}

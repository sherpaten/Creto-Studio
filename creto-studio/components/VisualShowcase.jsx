import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const visuals = [
  {
    number: "01",
    category: "Web & Software",
    title: "Digital foundations that work harder.",
    description: "From business websites to custom platforms, we bring clarity and craft to the experiences people use every day.",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?auto=format&fit=crop&w=800&q=70",
    alt: "Developers collaborating around laptops in a bright modern workspace",
    credit: "Photo by Compagnons on Unsplash",
    source: "https://unsplash.com/photos/people-working-on-laptops-at-a-table-Uywp-JHgVP4",
    layout: "lg:col-span-7",
  },
  {
    number: "02",
    category: "Mobile & Product Design",
    title: "Experiences made for real people.",
    description: "Thoughtful digital products connect beautiful interfaces with useful, everyday functionality.",
    image: "https://images.pexels.com/photos/15549074/pexels-photo-15549074/free-photo-of-computer-laptop-and-a-smartphone-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=800&q=70",
    alt: "Laptop and smartphone arranged on a modern workspace desk",
    credit: "Photo by Rubaitul Azad on Pexels",
    source: "https://www.pexels.com/photo/computer-laptop-and-a-smartphone-on-the-desk-15549074/",
    layout: "lg:col-span-5",
  },
  {
    number: "03",
    category: "Technology & Innovation",
    title: "Ideas moving into what’s next.",
    description: "We help turn complex ideas into clear, capable digital solutions built to grow with your business.",
    image: "https://images.unsplash.com/photo-1758773263238-1989d0cc788c?auto=format&fit=crop&w=800&q=70",
    alt: "Developer working at a laptop in a softly lit city workspace at night",
    credit: "Photo by Chirayu Trivedi on Unsplash",
    source: "https://unsplash.com/photos/person-working-on-laptop-at-night-with-city-view-g_ra59rIXDk",
    layout: "lg:col-span-12",
  },
];

export default function VisualShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#04132D] py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-16 h-96 w-96 rounded-full bg-[#0759D6]/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#6DCBFF]">A little more visual</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Technology should feel <span className="bg-gradient-to-r from-[#168BFF] to-[#8BE1FF] bg-clip-text text-transparent">human.</span></h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100/65 sm:text-lg">A glimpse of the creative energy behind the websites, products and digital experiences we help bring to life.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {visuals.map((item) => (
            <article key={item.number} className={`group relative isolate min-h-[330px] overflow-hidden rounded-3xl border border-white/10 bg-[#0A2148] ${item.layout} ${item.number === "03" ? "lg:min-h-[390px]" : ""}`}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.number === "03" ? "(max-width: 1024px) 100vw, 100vw" : "(max-width: 1024px) 100vw, 60vw"}
                quality={70}
                loading="lazy"
                className="absolute inset-0 -z-20 object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03112A] via-[#03112A]/55 to-[#03112A]/5" />
              <div className="flex h-full min-h-[330px] flex-col justify-between p-6 sm:p-8 lg:min-h-[360px]">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-[#061A3B]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-[#9DDEFF] backdrop-blur">{item.category}</span>
                  <span className="text-sm font-semibold text-white/65">{item.number}</span>
                </div>
                <div className="max-w-xl">
                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-blue-50/75">{item.description}</p>
                  <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#9DDEFF] transition hover:text-white">Talk about your idea <ArrowUpRight size={16}/></Link>
                  <p className="mt-5 text-[10px] text-white/45">Image: <a href={item.source} target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-2 hover:text-white/80">{item.credit}</a></p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

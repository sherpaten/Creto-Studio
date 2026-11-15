import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/share/1HnbfpAnRc/", Icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/creto421?rpxt=MWxkandzenQ5N3pjNw==", Icon: Instagram },
  { name: "X", href: "https://x.com/Cretostudi5iyb", Icon: null },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/creto-studio/", Icon: Linkedin },
];

const serviceLinks = [
  ["Web Development", "/services/web-development"],
  ["E-commerce", "/services/ecommerce"],
  ["Mobile Apps", "/services/mobile-app-development"],
  ["UI/UX Design", "/services/ui-ux-design"],
  ["AI & Software", "/services/ai-software"],
  ["Digital Marketing", "/services/digital-marketing"],
  ["Social Media", "/services/social-media-management"],
];

export default function MarketingFooter() {
  return (
    <footer className="border-t border-[#E7E1D6] bg-[#F8F5EE] text-[#172033]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-9 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Creto Studio" width={144} height={96} sizes="144px" className="mb-4 h-12 w-auto rounded bg-white p-1" />
          </Link>
          <p className="max-w-sm text-base leading-7 text-slate-700">
            We design and build thoughtful digital products that help ambitious businesses move forward.
          </p>
          <a href="https://wa.me/9779747457986" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0759D6] px-5 py-3 text-sm font-semibold transition hover:bg-[#0878E8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67C5FF]">
            Start a conversation <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <div className="mt-5">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#172033]">Follow Creto</p>
            <div className="flex items-center gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Creto Studio on ${name}`} title={name} className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9D4CA] bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:border-[#67C5FF] hover:bg-[#0759D6] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#67C5FF]">
                  {Icon ? <Icon size={19} strokeWidth={2} aria-hidden="true" /> : (
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
                      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 15.2 6.1 22H3l7.3-8.4L2.5 2h6.4l4.5 6.2L18.9 2Zm-1.1 18h1.7L8.1 3.9H6.3L17.8 20Z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#172033]">Explore</h3>
          <div className="grid gap-2.5 text-base text-slate-700">
            <Link href="/about" className="hover:text-[#0759D6]">About us & our team</Link>
            <Link href="/services" className="transition-colors hover:text-[#0759D6]">Services</Link>
            <Link href="/projects" className="transition-colors hover:text-[#0759D6]">Projects</Link>
            <Link href="/#process" className="transition-colors hover:text-[#0759D6]">Our process</Link>
            <Link href="/about#team" className="transition-colors hover:text-[#0759D6]">Meet the team</Link>
            <Link href="/contact" className="transition-colors hover:text-[#0759D6]">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#172033]">Services</h3>
          <div className="grid gap-2.5 text-base text-slate-700">
            {serviceLinks.map(([label, href]) => (
              <Link key={href} href={href} className="transition-colors hover:text-[#0759D6]">{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#E2DCD1]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <span>© {new Date().getFullYear()} Creto Studio. All rights reserved.</span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={13} aria-hidden="true" /> Made with care in Nepal <span>·</span>
            <Mail size={13} aria-hidden="true" /> cretostudio115@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

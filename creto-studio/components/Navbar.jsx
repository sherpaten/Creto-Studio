"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Music, Music2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useSound } from "./SoundProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { musicMuted, toggleMusic } = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-[70] border-b border-[#0B3B75]/10 bg-white/95 backdrop-blur-xl transition-shadow ${scrolled ? "shadow-[0_8px_30px_rgba(1,16,50,.10)]" : ""}`}>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Creto Studio home" onClick={() => setOpen(false)} className="shrink-0">
          <img src="/logo.png" alt="Creto Studio" className="h-12 w-auto object-contain" />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/services" && pathname.startsWith("/services/"));
            return <Link key={link.href} href={link.href} className={`text-sm font-semibold transition-colors ${active ? "text-[#0878E8]" : "text-[#102B54] hover:text-[#0878E8]"}`}>{link.label}</Link>;
          })}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleMusic} aria-label={musicMuted ? "Play background music" : "Pause background music"} className="text-[#12345D] transition hover:text-[#0878E8]">
            {musicMuted ? <Music2 size={19} /> : <Music size={19} />}
          </button>
          <MagneticButton>
            <Link href="/contact" className="hidden rounded-full bg-[#0759D6] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(7,89,214,.22)] transition hover:bg-[#0878E8] lg:inline-flex">Start a project <span className="ml-2">↗</span></Link>
          </MagneticButton>
          <button onClick={() => setOpen(true)} aria-label="Open navigation" className="rounded-lg p-2 text-[#102B54] lg:hidden"><Menu size={25} /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[#061A3B] px-7 py-6 text-white lg:hidden">
          <div className="flex items-center justify-between"><img src="/logo.png" alt="Creto Studio" className="h-12 w-auto rounded bg-white p-1" /><button onClick={() => setOpen(false)} aria-label="Close navigation" className="rounded-full border border-white/20 p-3"><X size={22} /></button></div>
          <motion.div initial="hidden" animate="show" className="mt-20 flex flex-col gap-7">
            {links.map((link, i) => <motion.div key={link.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }}><Link href={link.href} onClick={() => setOpen(false)} className="text-3xl font-semibold tracking-tight">{link.label}<span className="ml-3 text-[#54B8FF]">↗</span></Link></motion.div>)}
          </motion.div>
          <p className="absolute bottom-8 left-7 text-xs tracking-[.2em] text-blue-200/70">TECHNOLOGY · DESIGN · GROWTH</p>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}

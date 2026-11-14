"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Music, Music2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useSound } from "./SoundProvider";

const links = [
  { label: "Home", href: "/" }, { label: "About", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Projects", href: "/projects" },
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
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-[70] border-b border-[#EAE4D8] bg-[#FFFCF5]/95 backdrop-blur-2xl transition-shadow ${scrolled ? "shadow-[0_10px_35px_rgba(5,11,24,.10)]" : ""}`}>
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Creto Studio home" onClick={() => setOpen(false)} className="shrink-0">
          <Image src="/logo.png" alt="Creto Studio" width={144} height={96} priority sizes="144px" className="h-12 w-auto object-contain" />
        </Link>
        <div className="hidden items-center gap-6 xl:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href === "/services" && pathname.startsWith("/services/"));
            return <Link key={link.href} href={link.href} className={`text-sm font-semibold transition-colors ${active ? "text-[#0759D6]" : "text-[#26354A] hover:text-[#0759D6]"}`}>{link.label}</Link>;
          })}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleMusic} aria-label={musicMuted ? "Play background music" : "Pause background music"} className="text-[#26354A] transition hover:text-[#0759D6]">{musicMuted ? <Music2 size={19} /> : <Music size={19} />}</button>
          <MagneticButton><Link href="/contact" className="hidden rounded-full border border-[#3AB8FF]/30 bg-gradient-to-r from-[#0759D6] to-[#0878E8] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(7,89,214,.28)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_34px_rgba(32,185,255,.25)] lg:inline-flex">Start a project <span className="ml-2">↗</span></Link></MagneticButton>
          <button onClick={() => setOpen(true)} aria-label="Open navigation" className="rounded-lg p-2 text-[#17243A] xl:hidden"><Menu size={25} /></button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] bg-[#050B18] px-7 py-6 text-white xl:hidden">
          <div className="flex items-center justify-between"><Image src="/logo.png" alt="Creto Studio" width={144} height={96} priority sizes="144px" className="h-12 w-auto object-contain" /><button onClick={() => setOpen(false)} aria-label="Close navigation" className="rounded-full border border-white/20 p-3"><X size={22} /></button></div>
          <motion.div initial="hidden" animate="show" className="mt-16 flex flex-col gap-5">
            {links.map((link, i) => <motion.div key={link.href} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }}><Link href={link.href} onClick={() => setOpen(false)} className="text-2xl font-semibold tracking-tight">{link.label}<span className="ml-3 text-[#54B8FF]">↗</span></Link></motion.div>)}
          </motion.div>
          <p className="absolute bottom-8 left-7 text-xs tracking-[.2em] text-blue-200/55">TECHNOLOGY · DESIGN · GROWTH</p>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}

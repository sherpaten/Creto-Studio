"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { Menu, X, Music, Music2 } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useSound } from "./SoundProvider";

const links = [
  { label: "Home", href: "/" }, { label: "About", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Projects", href: "/projects" },
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
    <header className={`fixed inset-x-0 top-0 z-[70] border-b border-[#EAE4D8] transition-shadow ${open ? "bg-white" : "bg-[#FFFCF5]/95 backdrop-blur-2xl"} ${scrolled && !open ? "shadow-[0_10px_35px_rgba(5,11,24,.10)]" : ""}`}>
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
        {open && typeof document !== "undefined" && createPortal(<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-[9999] flex h-[100dvh] min-h-[100svh] w-screen flex-col overflow-y-auto bg-white !opacity-100 px-6 pb-8 pt-5 text-[#17243A] shadow-2xl [isolation:isolate] xl:hidden sm:px-8">
          <div className="flex h-[68px] min-h-[68px] shrink-0 items-center justify-between border-b border-[#EAE4D8] pb-4">
            <Image src="/logo.png" alt="Creto Studio" width={144} height={96} priority sizes="144px" className="h-11 w-auto object-contain" />
            <button onClick={() => setOpen(false)} aria-label="Close navigation" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE3EC] bg-white text-[#17243A] transition hover:border-[#54B8FF] hover:bg-[#F2F8FF] hover:text-[#0759D6]"><X size={22} /></button>
          </div>
          <motion.nav initial="hidden" animate="show" aria-label="Mobile navigation" className="flex min-h-0 flex-1 flex-col justify-center gap-4 py-10 sm:gap-5">
            {links.map((link, i) => {
              const active = pathname === link.href || (link.href === "/services" && pathname.startsWith("/services/"));
              return <motion.div key={link.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .055, duration: .24 }}>
                <Link href={link.href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={`flex w-full items-center justify-between border-b border-[#EAEFF5] py-3 text-[clamp(1.65rem,7vw,2.5rem)] font-semibold tracking-tight transition-colors ${active ? "text-[#0759D6]" : "text-[#17243A] hover:text-[#0759D6]"}`}>
                  {link.label}<span aria-hidden="true" className="mr-1 text-xl text-[#0759D6]">↗</span>
                </Link>
              </motion.div>;
            })}
          </motion.nav>
          <div className="mt-auto shrink-0 border-t border-[#EAE4D8] pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#64748B]">Technology · Design · Growth</p>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0759D6]">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </motion.div>, document.body)}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Volume2, VolumeX, Music, Music as MusicOff } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useSound } from "./SoundProvider";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { play, sfxMuted, toggleSfxMuted, musicMuted, toggleMusic } = useSound();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => {
    play("nav");
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-[0_2px_20px_rgba(1,16,50,0.08)] border-b border-[#011032]/10" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0" onClick={() => play("click")}>
          <img src="/logo.png" alt="Creto Studio" className="h-12 sm:h-14 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onMouseEnter={() => play("hover")} onClick={() => play("nav")} className="font-mono text-base text-[#012468] hover:text-[#0185FA] transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleSfxMuted}
            aria-label={sfxMuted ? "Unmute sound effects" : "Mute sound effects"}
            title={sfxMuted ? "Unmute sound effects" : "Mute sound effects"}
            className="text-[#012468] hover:text-[#0185FA] transition-colors duration-200"
          >
            {sfxMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>

          <button
            onClick={toggleMusic}
            aria-label={musicMuted ? "Play background music" : "Pause background music"}
            title={musicMuted ? "Play background music" : "Pause background music"}
            className="text-[#012468] hover:text-[#0185FA] transition-colors duration-200"
          >
            {musicMuted ? <MusicOff size={20} /> : <Music size={20} />}
          </button>

          <MagneticButton>
            <a href="#contact" data-cursor-hover onMouseEnter={() => play("hover")} onClick={() => play("click")} className="hidden lg:inline-flex items-center rounded-full bg-[#004ACA] px-7 py-3 text-white font-mono text-base hover:bg-[#0185FA] hover:shadow-[0_0_25px_rgba(1,133,250,0.4)] transition-all duration-300">
              Get in touch
            </a>
          </MagneticButton>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="lg:hidden text-[#011032] p-2 -mr-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-24">
              <img src="/logo.png" alt="Creto Studio" className="h-12 w-auto" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-[#011032] p-2 -mr-2"
              >
                <X size={28} />
              </button>
            </div>

            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col items-center justify-center gap-8 mt-16"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a href={l.href} onClick={handleLinkClick} className="font-display text-3xl text-[#011032]">
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                <a href="#contact" onClick={handleLinkClick} className="mt-4 inline-flex items-center rounded-full bg-[#004ACA] px-8 py-3 text-white font-mono text-sm">
                  Get in touch
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
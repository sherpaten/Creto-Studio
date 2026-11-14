"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TechWorldIntro() {
  const [stage, setStage] = useState("particles");
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Skip the full-screen intro on phones so the actual page is immediately
    // visible and no animation delays the mobile Largest Contentful Paint.
    if (window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timers = [
      window.setTimeout(() => setStage("logo"), 500),
      window.setTimeout(() => setStage("text"), 1300),
      window.setTimeout(() => setStage("scroll"), 1900),
    ];

    let completed = false;
    let exitTimer;
    let hideTimer;

    const triggerExit = () => {
      if (completed) return;
      completed = true;
      setExiting(true);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", triggerExit);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", triggerExit);
      exitTimer = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow || "";
      }, 250);
      hideTimer = window.setTimeout(() => setHidden(true), 650);
    };

    const onWheel = () => triggerExit();
    const onKeyDown = (event) => {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(event.key)) triggerExit();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", triggerExit, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("click", triggerExit);

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", triggerExit);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("click", triggerExit);
      document.body.style.overflow = previousOverflow || "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-label="Welcome to Creto Studio"
      className={`fixed inset-0 z-[9999] max-md:hidden flex flex-col items-center justify-center overflow-hidden bg-[#011032] transition-opacity duration-500 ${exiting ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(0,119,255,.28),transparent_42%),radial-gradient(ellipse_at_15%_20%,rgba(32,185,255,.15),transparent_35%),linear-gradient(135deg,#011032,#041a40_55%,#010b20)]" />
      <div className="pointer-events-none absolute h-[min(70vw,32rem)] w-[min(70vw,32rem)] rounded-full border border-[#35B9FF]/20 shadow-[0_0_100px_rgba(0,119,255,.15)]" />
      <div className="pointer-events-none absolute h-[min(52vw,24rem)] w-[min(52vw,24rem)] rounded-full border border-dashed border-[#54C7FF]/25 animate-[spin_50s_linear_infinite]" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {(stage === "logo" || stage === "text" || stage === "scroll") && (
          <Image
            src="/logo.png"
            alt="Creto Studio"
            width={176}
            height={176}
            loading="lazy"
            sizes="176px"
            className="mb-6 h-36 w-36 object-contain opacity-100 sm:mb-8 sm:h-44 sm:w-44"
          />
        )}
        {(stage === "text" || stage === "scroll") && (
          <div className="animate-[fade-in-up_.7s_ease-out_both]">
            <p className="mb-3 font-mono text-xs uppercase tracking-[.35em] text-[#9FD1FF]">
              Welcome to
            </p>
            <h1 className="mb-8 px-4 font-display text-3xl font-semibold leading-tight text-white sm:mb-10 sm:text-6xl">
              Creto Studio Tech World
            </h1>
          </div>
        )}
        {stage === "scroll" && (
          <div className="flex animate-bounce flex-col items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[.2em] text-[#9FD1FF]">
              Scroll or tap to explore
            </span>
            <svg width="18" height="24" viewBox="0 0 20 28" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="18" height="26" rx="9" stroke="#9FD1FF" strokeWidth="1.5" />
              <circle cx="10" cy="8" r="2.5" fill="#9FD1FF" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

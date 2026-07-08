"use client";

import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [musicMuted, setMusicMuted] = useState(true);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const ambientRef = useRef(null);
  const startedRef = useRef(false); // guards against starting more than once

  useEffect(() => {
    const savedMusic = localStorage.getItem("creto-music-muted");
    if (savedMusic !== null) setMusicMuted(savedMusic === "true");

    ambientRef.current = new Audio("/sounds/ambient.mp3");
    ambientRef.current.loop = false;
    ambientRef.current.volume = 0.25;
    ambientRef.current.preload = "auto";
    ambientRef.current.load(); // helps iOS Safari register the element early

    ambientRef.current.addEventListener("ended", () => {
      setMusicMuted(true);
      setMusicPlaying(false);
    });

    return () => {
      ambientRef.current?.pause();
    };
  }, []);

  const play = useCallback(() => {}, []);

  const toggleMusic = useCallback(() => {
    if (!ambientRef.current) return;

    if (ambientRef.current.paused) {
      if (ambientRef.current.ended) {
        ambientRef.current.currentTime = 0;
      }
      ambientRef.current
        .play()
        .then(() => {
          setMusicMuted(false);
          setMusicPlaying(true);
          localStorage.setItem("creto-music-muted", "false");
        })
        .catch((err) => console.error("Ambient play failed (toggleMusic):", err));
    } else {
      ambientRef.current.pause();
      setMusicMuted(true);
      setMusicPlaying(false);
      localStorage.setItem("creto-music-muted", "true");
    }
  }, []);

  const startMusic = useCallback(() => {
    if (!ambientRef.current) return;
    if (!ambientRef.current.paused) return; // already actually playing

    const savedMusic = localStorage.getItem("creto-music-muted");
    if (savedMusic === "true") return; // user explicitly muted before, respect that

    if (ambientRef.current.ended) {
      ambientRef.current.currentTime = 0;
    }
    ambientRef.current
      .play()
      .then(() => {
        setMusicMuted(false);
        setMusicPlaying(true);
        localStorage.setItem("creto-music-muted", "false");
      })
      .catch((err) => console.error("Ambient play failed (startMusic):", err));
  }, []);

  // Fire on the very first interaction of ANY kind, anywhere on the page —
  // click, tap, scroll, or keypress — so music starts as close to
  // "automatically" as browser autoplay rules allow. Works the same way
  // on mobile since touchstart/pointerdown count as valid gesture triggers.
  useEffect(() => {
    if (startedRef.current) return;

    const trigger = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      startMusic();
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("wheel", trigger);
      window.removeEventListener("touchstart", trigger);
    };

    window.addEventListener("pointerdown", trigger, { passive: true });
    window.addEventListener("keydown", trigger);
    window.addEventListener("wheel", trigger, { passive: true });
    window.addEventListener("touchstart", trigger, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("wheel", trigger);
      window.removeEventListener("touchstart", trigger);
    };
  }, [startMusic]);

  return (
    <SoundContext.Provider
      value={{ play, musicMuted, musicPlaying, toggleMusic, startMusic }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
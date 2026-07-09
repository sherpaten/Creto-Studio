"use client";

import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [musicMuted, setMusicMuted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const ambientRef = useRef(null);
  const startedRef = useRef(false);
  const userMutedRef = useRef(false); // tracks explicit user mute, separate from auto-pause on tab hide

  useEffect(() => {
    const savedMuted = localStorage.getItem("creto-music-muted");
    const wasMuted = savedMuted === "true";
    userMutedRef.current = wasMuted;
    setMusicMuted(wasMuted);

    const audio = new Audio("/sounds/ambient.mp3");
    audio.loop = true; // seamless loop
    audio.volume = 0.08; // 8%, within your 5-10% target
    audio.preload = "auto";
    ambientRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const startMusic = useCallback(() => {
    const audio = ambientRef.current;
    if (!audio || !audio.paused) return;
    if (userMutedRef.current) return; // respect an explicit prior mute

    audio
      .play()
      .then(() => {
        setMusicPlaying(true);
        setMusicMuted(false);
      })
      .catch(() => {
        // Autoplay blocked — will retry on the next interaction automatically
      });
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = ambientRef.current;
    if (!audio) return;

    if (audio.paused) {
      userMutedRef.current = false;
      localStorage.setItem("creto-music-muted", "false");
      audio
        .play()
        .then(() => {
          setMusicPlaying(true);
          setMusicMuted(false);
        })
        .catch(() => {});
    } else {
      userMutedRef.current = true;
      localStorage.setItem("creto-music-muted", "true");
      audio.pause();
      setMusicPlaying(false);
      setMusicMuted(true);
    }
  }, []);

  // Start on the very first interaction anywhere on the page — this lines up
  // with the moment the user scrolls/clicks/taps to get past TechWorldIntro,
  // so music begins as close to "automatic" as browsers allow.
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

  // Pause when the tab is hidden/backgrounded/closed; resume automatically
  // when the visitor returns, unless they explicitly muted it themselves.
  useEffect(() => {
    const handleVisibility = () => {
      const audio = ambientRef.current;
      if (!audio) return;

      if (document.hidden) {
        if (!audio.paused) audio.pause();
      } else {
        if (audio.paused && !userMutedRef.current && startedRef.current) {
          audio.play().then(() => setMusicPlaying(true)).catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", handleVisibility);
    };
  }, []);

  return (
    <SoundContext.Provider value={{ musicMuted, musicPlaying, toggleMusic, startMusic }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
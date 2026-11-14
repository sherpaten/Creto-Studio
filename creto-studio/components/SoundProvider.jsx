"use client";

import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [musicMuted, setMusicMuted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const ambientRef = useRef(null);
  const userMutedRef = useRef(false);

  useEffect(() => {
    const savedMuted = localStorage.getItem("creto-music-muted");
    const wasMuted = savedMuted === "true";
    userMutedRef.current = wasMuted;
    setMusicMuted(wasMuted);

    const audio = new Audio("/sounds/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.30;
    audio.preload = "none";
    ambientRef.current = audio;

    return () => {
      audio.pause();
    };
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

  useEffect(() => {
    const handleVisibility = () => {
      const audio = ambientRef.current;
      if (!audio) return;

      if (document.hidden) {
        if (!audio.paused) audio.pause();
      } else {
        if (audio.paused && !userMutedRef.current && musicPlaying) {
          audio.play().catch(() => {});
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [musicPlaying]);

  return (
    <SoundContext.Provider value={{ musicMuted, musicPlaying, toggleMusic }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error("useSound must be used within SoundProvider");
  return ctx;
}
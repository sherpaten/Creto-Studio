"use client";

import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [musicMuted, setMusicMuted] = useState(true); // starts muted until user opts in
  const [musicPlaying, setMusicPlaying] = useState(false);

  const ambientRef = useRef(null);

  useEffect(() => {
    const savedMusic = localStorage.getItem("creto-music-muted");
    if (savedMusic !== null) setMusicMuted(savedMusic === "true");

    ambientRef.current = new Audio("/sounds/ambient.mp3");
    ambientRef.current.loop = false; // 4-minute track, plays once then stops
    ambientRef.current.volume = 0.25;
    ambientRef.current.preload = "auto";

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

    if (musicMuted) {
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
        .catch(() => {});
    } else {
      ambientRef.current.pause();
      setMusicMuted(true);
      setMusicPlaying(false);
      localStorage.setItem("creto-music-muted", "true");
    }
  }, [musicMuted]);

  const startMusic = useCallback(() => {
    if (!ambientRef.current) return;
    if (!musicMuted) return;

    const savedMusic = localStorage.getItem("creto-music-muted");
    if (savedMusic === "true") return;

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
      .catch(() => {});
  }, [musicMuted]);

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
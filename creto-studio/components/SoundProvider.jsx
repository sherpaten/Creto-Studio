"use client";

import { createContext, useContext, useRef, useCallback, useEffect, useState } from "react";

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  const [sfxMuted, setSfxMuted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(true); // starts muted until user opts in
  const [musicPlaying, setMusicPlaying] = useState(false);

  const tickRef = useRef(null);
  const ambientRef = useRef(null);

  useEffect(() => {
    const savedSfx = localStorage.getItem("creto-sfx-muted");
    const savedMusic = localStorage.getItem("creto-music-muted");
    if (savedSfx !== null) setSfxMuted(savedSfx === "true");
    if (savedMusic !== null) setMusicMuted(savedMusic === "true");

    tickRef.current = new Audio("/sounds/tick.mp3");
    tickRef.current.preload = "auto";

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

  const play = useCallback(
    (type = "click") => {
      if (sfxMuted || !tickRef.current) return;
      const volumeByType = { hover: 0.08, click: 0.25, nav: 0.15, whoosh: 0.12, success: 0.3 };
      const node = tickRef.current.cloneNode();
      node.volume = volumeByType[type] ?? 0.2;
      node.play().catch(() => {});
    },
    [sfxMuted]
  );

  const toggleSfxMuted = useCallback(() => {
    setSfxMuted((m) => {
      const next = !m;
      localStorage.setItem("creto-sfx-muted", String(next));
      return next;
    });
  }, []);

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

  // Explicitly start music (used by the intro's exit gesture). No-op if
  // already playing, or if the user previously chose to mute it themselves.
  const startMusic = useCallback(() => {
    if (!ambientRef.current) return;
    if (!musicMuted) return; // already playing

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
      .catch(() => {});
  }, [musicMuted]);

  return (
    <SoundContext.Provider
      value={{
        play,
        sfxMuted,
        toggleSfxMuted,
        musicMuted,
        musicPlaying,
        toggleMusic,
        startMusic,
      }}
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
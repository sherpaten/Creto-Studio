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
    audio.volume = 0.22;
    audio.preload = "auto";
    ambientRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const startMusic = useCallback(() => {
    const audio = ambientRef.current;
    if (!audio || !audio.paused) return Promise.resolve(true);
    if (userMutedRef.current) return Promise.resolve(true); // respect prior explicit mute

    return audio
      .play()
      .then(() => {
        setMusicPlaying(true);
        setMusicMuted(false);
        return true;
      })
      .catch(() => false);
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

  // Keep retrying on every qualifying gesture (click, keydown, touchend —
  // the event types browsers actually treat as valid "user activation" for
  // autoplay) until playback genuinely succeeds. Doesn't give up after one
  // failed attempt, since a scroll-only visitor's first gesture (wheel)
  // isn't a valid activation event and would otherwise silently fail forever.
  useEffect(() => {
    let done = false;

    const trigger = () => {
      if (done || userMutedRef.current) return;
      startMusic().then((ok) => {
        if (ok) {
          done = true;
          window.removeEventListener("click", trigger);
          window.removeEventListener("keydown", trigger);
          window.removeEventListener("touchend", trigger);
        }
      });
    };

    window.addEventListener("click", trigger);
    window.addEventListener("keydown", trigger);
    window.addEventListener("touchend", trigger, { passive: true });

    return () => {
      window.removeEventListener("click", trigger);
      window.removeEventListener("keydown", trigger);
      window.removeEventListener("touchend", trigger);
    };
  }, [startMusic]);

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
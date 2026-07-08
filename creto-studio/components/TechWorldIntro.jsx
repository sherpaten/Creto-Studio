"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { useSound } from "./SoundProvider";

const IS_MOBILE_WIDTH = 640;

export default function TechWorldIntro() {
  const mountRef = useRef(null);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [stage, setStage] = useState("particles"); // particles -> logo -> text -> scroll
  const stateRef = useRef({ scattering: false });
  const { startMusic } = useSound();

  useEffect(() => {
    const t1 = setTimeout(() => setStage("logo"), 900);
    const t2 = setTimeout(() => setStage("text"), 2000);
    const t3 = setTimeout(() => setStage("scroll"), 2900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Lower particle density on small screens for performance
    const isMobile = window.innerWidth < IS_MOBILE_WIDTH;
    const STRAND_COUNT = isMobile ? 20 : 40;
    const POINTS_PER_STRAND = isMobile ? 35 : 60;
    const TOTAL_POINTS = STRAND_COUNT * POINTS_PER_STRAND;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    mount.appendChild(renderer.domElement);

    const positions = new Float32Array(TOTAL_POINTS * 3);
    const basePositions = new Float32Array(TOTAL_POINTS * 3);
    const scatterVel = new Float32Array(TOTAL_POINTS * 3);
    const strandSeed = new Float32Array(STRAND_COUNT);

    let idx = 0;
    for (let s = 0; s < STRAND_COUNT; s++) {
      strandSeed[s] = Math.random() * Math.PI * 2;
      const radius = 2.2 + Math.random() * 1.6;
      const angle = (s / STRAND_COUNT) * Math.PI * 2;
      const cx = Math.cos(angle) * radius * 0.6;
      const cy = (Math.random() - 0.5) * 3;
      const cz = Math.sin(angle) * radius * 0.6;

      for (let p = 0; p < POINTS_PER_STRAND; p++) {
        const t = p / POINTS_PER_STRAND;
        const x = cx + Math.sin(t * 4 + strandSeed[s]) * 0.4;
        const y = cy + (t - 0.5) * 4;
        const z = cz + Math.cos(t * 4 + strandSeed[s]) * 0.4;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;
        basePositions[idx * 3] = x;
        basePositions[idx * 3 + 1] = y;
        basePositions[idx * 3 + 2] = z;

        const dir = new THREE.Vector3(x, y, z).normalize();
        scatterVel[idx * 3] = dir.x * (2 + Math.random() * 3);
        scatterVel[idx * 3 + 1] = dir.y * (2 + Math.random() * 3) + (Math.random() - 0.5) * 2;
        scatterVel[idx * 3 + 2] = dir.z * (2 + Math.random() * 3);

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.035,
      color: 0x9fd1ff,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const clock = new THREE.Clock();
    let scatterElapsed = 0;
    let frameId;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const posAttr = geometry.attributes.position;

      if (!stateRef.current.scattering) {
        for (let i = 0; i < TOTAL_POINTS; i++) {
          const bx = basePositions[i * 3];
          const by = basePositions[i * 3 + 1];
          const bz = basePositions[i * 3 + 2];
          posAttr.array[i * 3] = bx + Math.sin(t * 0.6 + i * 0.05) * 0.15;
          posAttr.array[i * 3 + 1] = by + Math.cos(t * 0.5 + i * 0.04) * 0.1;
          posAttr.array[i * 3 + 2] = bz + Math.sin(t * 0.4 + i * 0.06) * 0.15;
        }
        points.rotation.y = t * 0.15;
      } else {
        scatterElapsed += clock.getDelta();
        const ease = Math.min(scatterElapsed / 1.4, 1);
        for (let i = 0; i < TOTAL_POINTS; i++) {
          posAttr.array[i * 3] = basePositions[i * 3] + scatterVel[i * 3] * ease * ease;
          posAttr.array[i * 3 + 1] =
            basePositions[i * 3 + 1] + scatterVel[i * 3 + 1] * ease * ease;
          posAttr.array[i * 3 + 2] =
            basePositions[i * 3 + 2] + scatterVel[i * 3 + 2] * ease * ease;
        }
        material.opacity = 0.85 * (1 - ease);
        points.rotation.y += 0.01;
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    function onWheel(e) {
      e.preventDefault();
      triggerExit();
    }
    function onTouchMove(e) {
      e.preventDefault();
      triggerExit();
    }
    function onTouchStart() {
      // Some users tap once rather than swipe — give them a way through too
      triggerExit();
    }
    function onKeyDown(e) {
      if (["ArrowDown", "PageDown", " ", "Enter"].includes(e.key)) triggerExit();
    }
    function onClick() {
      triggerExit();
    }

    function triggerExit() {
      if (stateRef.current.scattering) return;
      stateRef.current.scattering = true;
      setExiting(true);
      startMusic(); // start ambient music on the same gesture that exits the intro

      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("keydown", onKeyDown);
      mount.removeEventListener("click", onClick);

      setTimeout(() => {
        document.body.style.overflow = prevOverflow || "";
      }, 300);

      setTimeout(() => {
        setHidden(true);
      }, 1600);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    mount.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("keydown", onKeyDown);
      mount.removeEventListener("click", onClick);
      document.body.style.overflow = prevOverflow || "";
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#011032] flex flex-col items-center justify-center transition-opacity duration-700 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div ref={mountRef} className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <AnimatePresence>
          {(stage === "logo" || stage === "text" || stage === "scroll") && (
            <motion.img
              key="logo"
              src="/logo.png"
              alt="Creto Studio"
              initial={{ opacity: 0, scale: 0.4, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain mb-6 sm:mb-8"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(stage === "text" || stage === "scroll") && (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="font-mono text-[10px] sm:text-sm tracking-[0.3em] sm:tracking-[0.35em] uppercase text-[#9FD1FF] mb-2 sm:mb-3">
                Welcome to
              </p>
              <h1 className="font-display text-2xl sm:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight px-4">
                Creto Studio Tech World
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {stage === "scroll" && (
            <motion.div
              key="scroll-cue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-2 animate-bounce"
            >
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#9FD1FF]">
                Scroll or tap to explore
              </span>
              <svg
                width="18"
                height="24"
                viewBox="0 0 20 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-5 sm:h-7"
              >
                <rect x="1" y="1" width="18" height="26" rx="9" stroke="#9FD1FF" strokeWidth="1.5" />
                <circle cx="10" cy="8" r="2.5" fill="#9FD1FF" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
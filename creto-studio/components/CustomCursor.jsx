"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e) => {
      setIsHovering(!!e.target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      animate={{
        width: isHovering ? 48 : 14,
        height: isHovering ? 48 : 14,
        opacity: isHovering ? 0.5 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0185FA] pointer-events-none z-[100] mix-blend-difference"
    />
  );
}
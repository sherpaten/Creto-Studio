"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8; // max 8deg
    const rotateX = -((y - centerY) / centerY) * 8;

    setStyle({ rotateX, rotateY });
  }

  function handleMouseLeave() {
    setStyle({ rotateX: 0, rotateY: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: style.rotateX, rotateY: style.rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
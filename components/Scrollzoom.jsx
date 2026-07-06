"use client";

import { motion } from "framer-motion";

// Slides up + pops in with an overshoot bounce as it enters the viewport,
// and reverses (slides down + shrinks) if it scrolls out of view.
// The upward travel is what makes it readable even on flat, saturated
// backgrounds where a pure scale/opacity change is hard to see.
export default function ScrollZoom({
  children,
  className = "",
  startScale = 0.75,
  travelY = 70,
  amount = 0.3,
}) {
  return (
    <motion.div
      className={className}
      initial={{ scale: startScale, opacity: 0, y: travelY }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
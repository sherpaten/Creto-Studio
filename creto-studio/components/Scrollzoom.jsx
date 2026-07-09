"use client";

import { motion } from "framer-motion";

export default function ScrollZoom({
  children,
  className = "",
  startScale = 0.75,
  travelY = 70,
  amount = 0.3,
  minScale, // accepted for backward compatibility with existing callers
}) {
  const initialScale = minScale ?? startScale;

  return (
    <motion.div
      className={className}
      initial={{ scale: initialScale, opacity: 0, y: travelY }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
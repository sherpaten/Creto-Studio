"use client";

import { motion } from "framer-motion";
import { useSound } from "./SoundProvider";

export default function ScrollZoom({
  children,
  className = "",
  startScale = 0.75,
  travelY = 70,
  amount = 0.3,
  sound = true,
}) {
  const { play } = useSound();

  return (
    <motion.div
      className={className}
      initial={{ scale: startScale, opacity: 0, y: travelY }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ type: "spring", stiffness: 220, damping: 16, mass: 0.8 }}
      onViewportEnter={() => sound && play("whoosh")}
    >
      {children}
    </motion.div>
  );
}
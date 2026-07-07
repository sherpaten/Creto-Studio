"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import TechMesh from "./TechMesh";

export default function Hero3D({ className = "" }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        gl={{ alpha: true, antialias: true }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
      >
        <ambientLight intensity={0.6} />
        <Suspense fallback={null}>
          <TechMesh color="#0185FA" isMobile={isMobile} position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

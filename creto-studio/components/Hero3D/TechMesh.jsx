"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function TechMesh({ color = "#0185FA", isMobile = false, ...groupProps }) {
  const groupRef = useRef();
  const { mouse } = useThree();
  const detail = isMobile ? 1 : 2;
  const size = isMobile ? 1.3 : 1.9;

  const edges = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(size, detail);
    return new THREE.EdgesGeometry(geo);
  }, [size, detail]);

  const points = useMemo(() => new THREE.IcosahedronGeometry(size, detail), [size, detail]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Base auto-rotation, plus a gentle lean toward the cursor position
    groupRef.current.rotation.y += delta * 0.08;
    const targetX = 0.02 + (isMobile ? 0 : mouse.y * 0.25);
    const targetZ = isMobile ? 0 : mouse.x * -0.2;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.04);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetZ, 0.04);
  });

  return (
    <group ref={groupRef} {...groupProps}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={color} transparent opacity={0.55} />
      </lineSegments>
      <points geometry={points}>
        <pointsMaterial color={color} size={0.045} transparent opacity={0.9} sizeAttenuation />
      </points>
    </group>
  );
}
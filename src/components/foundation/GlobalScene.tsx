"use client";

import { Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AdaptiveDpr, Float } from "@react-three/drei";

type GlobalSceneProps = {
  onReady: () => void;
};

function KineticForm() {
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t * 0.18) * 0.6;
    camera.position.y = Math.cos(t * 0.22) * 0.3;
    camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh>
        <torusKnotGeometry args={[1.08, 0.26, 260, 28]} />
        <meshPhysicalMaterial
          color="#7ad7ff"
          roughness={0.25}
          transmission={0.65}
          metalness={0.3}
          thickness={1.2}
          clearcoat={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function GlobalScene({ onReady }: GlobalSceneProps) {
  useEffect(() => {
    const id = window.setTimeout(onReady, 450);
    return () => window.clearTimeout(id);
  }, [onReady]);

  return (
    <div className="global-canvas-wrap" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <AdaptiveDpr pixelated />
        <ambientLight intensity={0.65} />
        <directionalLight position={[3, 5, 4]} intensity={2.8} color="#8bc8ff" />
        <pointLight position={[-4, -3, 1]} intensity={1.6} color="#ffc29a" />
        <Suspense fallback={null}>
          <KineticForm />
        </Suspense>
      </Canvas>
    </div>
  );
}

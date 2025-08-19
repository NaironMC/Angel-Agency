import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";

function WobbleOrb() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.2;
    ref.current.position.y = Math.sin(t * 1.2) * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.2, 24]} />
        <MeshTransmissionMaterial
          thickness={1.2}
          chromaticAberration={0.08}
          anisotropicBlur={0.25}
          distortion={0.25}
          distortionScale={0.6}
          temporalDistortion={0.25}
          ior={1.5}
          samples={2}          // reduced for performance
          resolution={128}     // reduced for performance
          transparent
        />
      </mesh>
    </Float>
  );
}

export default function CanvasHero() {
  return (
    <div className="card" style={{ height: "520px", borderRadius: 18, overflow:"hidden" }}>
      <Canvas camera={{ position:[0,0,4], fov:50 }}>
        <color attach="background" args={["#0b0d12"]} />
        <ambientLight intensity={0.6} />
        <directionalLight intensity={1.2} position={[3,3,2]} />
        <Suspense fallback={null}>
          <WobbleOrb />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

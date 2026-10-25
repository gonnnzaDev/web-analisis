import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

function Particulas({ count = 260 }) {
  const ref = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - 0.5) * 22;

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} sizeAttenuation color="#00ffd5" transparent opacity={0.7} />
    </points>
  );
}

function Nucleo() {
  const group = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.25;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.25;
    group.current.position.x = state.pointer.x * 0.4;
    group.current.position.y = state.pointer.y * 0.3;
  });

  return (
    <group ref={group}>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.9}>
        {/* Carcasa wireframe */}
        <mesh>
          <icosahedronGeometry args={[1.7, 1]} />
          <meshBasicMaterial color="#00ffd5" wireframe transparent opacity={0.5} />
        </mesh>
        {/* Núcleo interior */}
        <mesh>
          <octahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial
            color="#0b1120"
            emissive="#00ffd5"
            emissiveIntensity={0.9}
            metalness={0.7}
            roughness={0.25}
            flatShading
          />
        </mesh>
      </Float>

      {/* Anillos orbitales */}
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.9, 0.02, 8, 64]} />
        <meshBasicMaterial color="#ff2bd6" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[Math.PI / 1.8, 0.4, 0.2]}>
        <torusGeometry args={[3.4, 0.012, 8, 64]} />
        <meshBasicMaterial color="#ffd600" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x += (state.pointer.x * 1.1 - state.camera.position.x) * 0.03;
    state.camera.position.y += (state.pointer.y * 0.7 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-[1]">
      <Canvas
        camera={{ fov: 60, position: [0, 0, 7] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fog attach="fog" args={["#05050b", 9, 26]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} color="#00ffd5" intensity={60} />
        <pointLight position={[-6, -4, 2]} color="#ff2bd6" intensity={40} />
        <Stars radius={80} depth={40} count={2200} factor={3} fade speed={0.8} />
        <Particulas />
        <Nucleo />
        <Rig />
      </Canvas>
    </div>
  );
}

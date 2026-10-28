import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const heroShapes = [
  { type: "torusKnot", position: [-4.6, 1.9, -1.5], scale: 1.1, color: "#c9ccd6", metalness: 0.85, roughness: 0.25, float: 1.6 },
  { type: "sphere", position: [4.4, 1.6, -1], scale: 1.15, color: "#f2a7c3", distort: 0.45, speed: 2.5, float: 2 },
  { type: "icosa", position: [3.4, 3.1, -2.5], scale: 0.7, color: "#a78bfa", metalness: 0.6, roughness: 0.3, float: 2.4 },
  { type: "capsule", position: [-3.9, -2.2, -1.2], scale: 0.9, color: "#f9b487", distort: 0.25, speed: 1.8, float: 1.8 },
  { type: "torus", position: [4.6, -2.4, -1.8], scale: 0.8, color: "#7dd3fc", metalness: 0.7, roughness: 0.3, float: 2.2 },
];

const aboutShapes = [
  { type: "torusKnot", position: [-4.8, 1.6, -1.5], scale: 1.0, color: "#d6d9e0", metalness: 0.9, roughness: 0.2, float: 1.8 },
  { type: "box", position: [4.6, 2.2, -1.8], scale: 0.9, color: "#7dd3fc", metalness: 0.6, roughness: 0.25, float: 2.2 },
  { type: "sphere", position: [4.4, -1.4, -1.2], scale: 0.95, color: "#c084fc", distort: 0.5, speed: 2.2, float: 2 },
  { type: "sphere", position: [-4.5, -1.8, -1.4], scale: 0.8, color: "#f87171", distort: 0.35, speed: 2, float: 1.6 },
];

function Shape({ s }) {
  return (
    <Float speed={s.float ?? 2} rotationIntensity={1.4} floatIntensity={1.8}>
      <mesh position={s.position} scale={s.scale}>
        {s.type === "torusKnot" && <torusKnotGeometry args={[0.5, 0.17, 128, 24]} />}
        {s.type === "sphere" && <sphereGeometry args={[0.7, 64, 64]} />}
        {s.type === "icosa" && <icosahedronGeometry args={[0.65, 0]} />}
        {s.type === "capsule" && <capsuleGeometry args={[0.38, 0.7, 8, 24]} />}
        {s.type === "box" && <boxGeometry args={[0.9, 0.9, 0.9]} />}
        {s.type === "torus" && <torusGeometry args={[0.55, 0.22, 32, 64]} />}
        {s.distort ? (
          <MeshDistortMaterial
            color={s.color}
            distort={s.distort}
            speed={s.speed ?? 2}
            roughness={0.25}
            metalness={0.2}
          />
        ) : (
          <meshStandardMaterial
            color={s.color}
            metalness={s.metalness ?? 0.5}
            roughness={s.roughness ?? 0.3}
          />
        )}
      </mesh>
    </Float>
  );
}

export default function Scene({ variant = "hero" }) {
  const shapes = variant === "about" ? aboutShapes : heroShapes;
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 6, 5]} intensity={1.4} />
      <pointLight position={[-6, -3, 3]} intensity={40} color="#f2a7c3" />
      <pointLight position={[6, -2, 2]} intensity={30} color="#8b7ff0" />
      <pointLight position={[0, 5, 4]} intensity={20} color="#ffffff" />
      {shapes.map((s, i) => (
        <Shape key={i} s={s} />
      ))}
    </Canvas>
  );
}

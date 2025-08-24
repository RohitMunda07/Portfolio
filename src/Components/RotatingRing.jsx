import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Ring() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      {/* TorusGeometry: (radius, tube, radialSegments, tubularSegments) */}
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial color="royalblue" wireframe={false} />
    </mesh>
  );
}

export default function RotatingRing() {
  return (
    <div className="w-screen h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 6] }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} />

        {/* Rotating Ring */}
        <Ring />

        {/* Controls (optional: lets you drag/rotate scene) */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}

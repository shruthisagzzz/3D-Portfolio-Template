import { Canvas, useFrame } from "@react-three/fiber";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";


type Props = { scrollFactor: number };

const CarModelDisassemble = ({ scrollFactor }: Props) => {
  const { scene } = useGLTF("/free_porsche_911_carrera_4s/scene.gltf");
  
  const parts = useMemo(() => {
    const list: any[] = [];
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) { 
        const dir = new THREE.Vector3(
         Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
        list.push({ child, original: child.position.clone(), dir });
      }
    });
    return list;
  }, [scene]);
  useGLTF.preload('/free_porsche_911_carrera_4s/scene.gltf');


  useFrame(() => {
    const factor = Math.min(scrollFactor * 2, 1); // 0 → 0.5
    parts.forEach(({ child, original, dir }) => {
      const target = original.clone().add(dir.clone().multiplyScalar(factor * 5));
      child.position.lerp(target, 0.1);
      // Hide all children once scrollFactor > 0.5
      child.visible = scrollFactor <= 0.5;
    });
  });

  return <primitive object={scene} scale={1.8} position={[0, -1.2, 0]} />;
};

const CarModelAssemble = ({ scrollFactor }: Props) => {
  const { scene } = useGLTF("/free_1975_porsche_911_930_turbo/scene.gltf");
  const initialized = useRef(false);

  const parts = useMemo(() => {
    const list: any[] = [];
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const dir = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
        const original = child.position.clone();
        const start = original.clone().add(dir.multiplyScalar(5));
        list.push({ child, original, start });
      }
    });
    return list;
  }, [scene]);

  useEffect(() => {
    if (!initialized.current) {
      parts.forEach(({ child, start }) => {
        child.position.copy(start);
      });
      initialized.current = true;
    }
  }, [parts]);

  useFrame(() => {
    const factor = Math.max((scrollFactor - 0.5) * 2, 0); // 0.5 → 1
    parts.forEach(({ child, original, start }) => {
      const target = start.clone().lerp(original, factor);
      child.position.lerp(target, 0.1);
      // Only make visible after scrollFactor > 0.5
      child.visible = scrollFactor >= 0.5;
    });
  });

  return <primitive object={scene} scale={1.8} position={[0, -1.2, 0]} />;
};

const CarCanvas = ({ scrollFactor }: Props) => {
  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-2/3 h-full">
      <Canvas camera={{ position: [0, 35, 0], fov: 13}}>
  {/* Dramatic lighting setup */}
  <ambientLight intensity={2} />
  <spotLight position={[10, 30, 20]} angle={0.3} penumbra={1} intensity={20} castShadow />
  <spotLight position={[-10, 30, -20]} angle={0.3} penumbra={1} intensity={15} color="#a0c0ff" castShadow />
  <directionalLight position={[0, 10, 0]} intensity={5} />
  

  
  {/* Rest of your scene */}
  <OrbitControls target={[0, 1, 0]} enableZoom={true} autoRotate={true} autoRotateSpeed={1.5} />
  <CarModelDisassemble scrollFactor={scrollFactor} />
  <CarModelAssemble scrollFactor={scrollFactor} />
</Canvas>
      </div>
      <div className="w-1/3 p-8 flex flex-col justify-center">
  <motion.h1 
    className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-red-600"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    My Portfolio
  </motion.h1>
  
  <motion.div
    className="h-1 w-20 bg-gradient-to-r from-amber-500 to-red-600 mb-6"
    initial={{ width: 0 }}
    animate={{ width: 80 }}
    transition={{ duration: 1.5, delay: 0.5 }}
  />
  
  <motion.p 
    className="text-lg leading-relaxed text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.8 }}
  >
    Witness the transformation between two automotive legends.
    The transition captures decades of engineering evolution in a single fluid motion.
  </motion.p>
  
  <motion.div 
    className="mt-10 flex items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-amber-500 to-red-600"
        style={{ width: `${scrollFactor * 100}%` }}
      />
    </div>
    <span className="ml-4 text-amber-500 font-medium">{Math.round(scrollFactor * 100)}%</span>
  </motion.div>
</div>
    </div>
  );
};

export default CarCanvas;

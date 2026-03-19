import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Stars, Float } from '@react-three/drei';

const Home = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Glass Content */}
      <div className="absolute top-1/2 left-4 md:left-12 lg:left-20 xl:left-32 -translate-y-1/2 z-20 p-8 md:p-12 lg:p-16 rounded-[40px] md:rounded-[50px] backdrop-blur-3xl bg-white/5 animated-border-card max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all">
        {/* Framer Motion Perimeter Border (Corner-Aware) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
          <svg className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="50"
              ry="50"
              fill="transparent"
              stroke="url(#borderGradient)"
              strokeWidth="4"
              strokeDasharray="150 1000"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -1150 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 bg-gradient-to-br from-white via-purple-200 to-purple-500 bg-clip-text text-transparent leading-[1.1] tracking-tighter">
          Creative Architecture
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/60 leading-relaxed mb-8 md:mb-10 font-light">
          We weave digital dreams into 3D realities. Explore our immersive universe built with cutting-edge technology and artistic vision.
        </p>
        <button className="group relative px-8 py-4 md:px-10 md:py-5 overflow-hidden rounded-2xl bg-white/10 border border-white/20 transition-all hover:border-purple-500/50">
          <span className="relative z-10 font-bold text-white group-hover:text-purple-300 transition-colors">Start the Journey</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#8238c7" />
            <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#3d1c56" />
            
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
              <Sphere args={[1, 100, 200]} scale={1.8}>
                <MeshDistortMaterial
                  color="#4b2e83"
                  attach="material"
                  distort={0.4}
                  speed={2.5}
                  roughness={0}
                  metalness={1}
                />
              </Sphere>
            </Float>

            <Float speed={3} rotationIntensity={2} floatIntensity={5}>
              <Sphere args={[0.5, 64, 64]} position={[3, 2, -2]}>
                <MeshWobbleMaterial
                  color="#aa00ff"
                  factor={0.6}
                  speed={3}
                />
              </Sphere>
            </Float>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Home;

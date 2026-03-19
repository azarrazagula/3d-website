import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const Sun = () => {
  const sunRef = useRef();
  const coronaRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    // Pumping/pulsing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    if (sunRef.current) {
      sunRef.current.scale.set(scale, scale, scale);
    }
    if (coronaRef.current) {
      coronaRef.current.scale.set(scale * 1.2, scale * 1.2, scale * 1.2);
      coronaRef.current.rotation.y += 0.002;
      coronaRef.current.rotation.z += 0.001;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Sun */}
      <Sphere ref={sunRef} args={[3.5, 64, 64]}>
        <meshStandardMaterial 
          color="#FDB813"
          emissive="#FF6B00"
          emissiveIntensity={2}
        />
      </Sphere>
      
      {/* Light source */}
      <pointLight intensity={3} distance={200} color="#FDB813" />
      
      {/* Corona / Glow */}
      <Sphere ref={coronaRef} args={[3.5, 64, 64]}>
        <meshStandardMaterial 
          color="#FDB813"
          transparent
          opacity={0.15}
          side={2} // Three.DoubleSide
          emissive="#FF6B00"
          emissiveIntensity={1}
        />
      </Sphere>
    </group>
  );
};

export default Sun;

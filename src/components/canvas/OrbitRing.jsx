import React, { useMemo } from 'react';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const OrbitRing = ({ radius }) => {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2;
      p.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return p;
  }, [radius]);

  return (
    <Line 
      points={points} 
      color="white" 
      lineWidth={0.5} 
      transparent 
      opacity={0.15} 
    />
  );
};

export default React.memo(OrbitRing);

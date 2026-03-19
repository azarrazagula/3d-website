import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { useSelector } from 'react-redux';
import Stars from './Stars';
import Sun from './Sun';
import Planet from './Planet';
import OrbitRing from './OrbitRing';
import { planets } from '../../data/planets';

const SpaceCanvas = () => {
  const { isAutoRotate } = useSelector((state) => state.planets);

  return (
    <div className="w-full h-full bg-[#00000f]">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, 20, 60], fov: 60 }}
      >
        <Suspense fallback={null}>
          <Stars />
          <Sun />
          
          {planets.map((planet) => (
            <React.Fragment key={planet.id}>
              <Planet {...planet} />
              <OrbitRing radius={planet.orbitRadius} />
            </React.Fragment>
          ))}

          <OrbitControls 
            enableDamping 
            autoRotate={isAutoRotate}
            autoRotateSpeed={0.5}
            makeDefault
          />

          <EffectComposer>
            <Bloom 
              intensity={1.5} 
              luminanceThreshold={0.1} 
              luminanceSmoothing={0.9} 
            />
            <ChromaticAberration offset={[0.0005, 0.0005]} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SpaceCanvas;

import React from 'react';
import SpaceCanvas from '../components/canvas/SpaceCanvas';
import PlanetCard from '../components/ui/PlanetCard';
import Loader from '../components/ui/Loader';

const Languages = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#00000f]">
      <Loader />
      <SpaceCanvas />
      <PlanetCard />
      
      {/* Background Ambient Text */}
      <div className="absolute bottom-10 left-10 z-10 pointer-events-none">
        <h2 className="text-white/10 text-8xl font-black font-orbitron uppercase tracking-tighter select-none">
          Cosmos
        </h2>
      </div>
      
      <div className="absolute top-1/2 left-10 -translate-y-1/2 z-10 hidden lg:block pointer-events-none">
        <div className="flex flex-col gap-4">
          <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-transparent rounded-full shadow-[0_0_10px_purple]" />
          <span className="text-[10px] text-white/30 font-mono vertical-text tracking-[0.5em] uppercase" style={{ writingMode: 'vertical-rl' }}>
            Solar Exploration v1.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Languages;

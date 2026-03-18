import React from 'react';

import { motion } from 'framer-motion';

const Languages = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center bg-gradient-to-br from-black via-cyan-900/20 to-black"
  >
    <motion.div 
      initial={{ y: 50, scale: 0.9 }}
      animate={{ y: 0, scale: 1 }}
      className="p-12 rounded-[50px] backdrop-blur-3xl bg-white/5 border-2 border-cyan-500/20 shadow-[0_0_100px_rgba(6,182,212,0.1)] max-w-4xl w-full text-center"
    >
      <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Stack
      </h1>
      <p className="text-xl text-cyan-100/60 font-light tracking-widest uppercase">
        Powering the 3D Web with Modern Tech
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {['React', 'Three.js', 'Tailwind', 'Motion'].map(tech => (
          <div key={tech} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors">
            <span className="text-white font-bold">{tech}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

export default Languages;

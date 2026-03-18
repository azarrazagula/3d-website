import React from 'react';

import { motion } from 'framer-motion';

const About = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center bg-gradient-to-br from-black via-pink-900/20 to-black"
  >
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="p-12 rounded-[50px] backdrop-blur-3xl bg-white/5 border-2 border-pink-500/20 shadow-[0_0_100px_rgba(236,72,153,0.1)] max-w-4xl w-full"
    >
      <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
        Vision
      </h1>
      <p className="text-xl text-pink-100/60 leading-relaxed font-light">
        We are architects of the virtual realm. Our mission is to transform flat screens into deep, immersive experiences that respond to your presence.
      </p>
    </motion.div>
  </motion.div>
);

export default About;

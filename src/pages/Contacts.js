import React from 'react';

import { motion } from 'framer-motion';

const Contacts = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 1.1 }}
    animate={{ opacity: 1, scale: 1 }}
    className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center bg-gradient-to-br from-black via-amber-900/20 to-black"
  >
    <motion.div 
      className="p-12 rounded-[50px] backdrop-blur-3xl bg-white/5 border-2 border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] max-w-4xl w-full text-center"
    >
      <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
        Connect
      </h1>
      <p className="text-xl text-amber-100/60 mb-10 font-light">
        Ready to build your 3D reality? Let's talk.
      </p>
      <button className="px-12 py-5 rounded-full bg-amber-500 text-black font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_30px_#f59e0b]">
        Say Hello
      </button>
    </motion.div>
  </motion.div>
);

export default Contacts;

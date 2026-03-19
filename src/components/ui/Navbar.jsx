import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Planets', href: '/languages' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contacts' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
        isScrolled ? 'py-2 px-4' : 'py-6 px-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass py-3 px-8 rounded-full border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-white font-orbitron hover:text-purple-400 transition-colors cursor-pointer"
        >
          3D<span className="text-purple-500">CREATIVE</span>
        </motion.div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-white/70 hover:text-white transition-colors group"
              whileHover={{ y: -2 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </motion.a>
          ))}
        </div>

        {/* Action Button */}
        <button className="bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 px-6 py-2 rounded-full border border-purple-500/30 text-xs font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          Join Us
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

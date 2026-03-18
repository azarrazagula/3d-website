import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', color: '#a855f7' }, // Purple
    { name: 'Languages', path: '/languages', color: '#06b6d4' }, // Cyan
    { name: 'About', path: '/about', color: '#ec4899' }, // Pink
    { name: 'Contacts', path: '/contacts', color: '#f59e0b' }, // Amber
  ];

  const activeLink = navLinks.find(l => l.path === location.pathname) || navLinks[0];

  return (
    <nav className="fixed top-0 w-full z-[1000] backdrop-blur-xl bg-black/20">
      {/* Animated Glowing Border Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            background: `linear-gradient(90deg, transparent, ${activeLink.color}, transparent)`,
            x: ['-100%', '100%']
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 h-[2px] w-full opacity-50"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-20 flex justify-between items-center relative z-20">
        <Link to="/" className="text-xl md:text-2xl font-black text-white tracking-tighter flex items-center gap-2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-purple-500 rounded-lg"
          />
          3D CREATIVE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-12 h-full items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="relative group py-2"
            >
              <span className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                {link.name}
              </span>
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ backgroundColor: link.color }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-[1001] p-2 text-white hover:bg-white/10 rounded-xl transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-3xl overflow-hidden md:hidden border-b border-white/10 z-[100]"
          >
            {/* Mobile Animated Border */}
            <motion.div 
              animate={{ 
                background: `linear-gradient(90deg, transparent, ${activeLink.color}, transparent)`,
                x: ['-100%', '100%']
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 h-[1px] w-full opacity-30"
            />

            <div className="p-8 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl group transition-all"
                    style={{ 
                      backgroundColor: location.pathname === link.path ? `${link.color}15` : 'transparent',
                      border: location.pathname === link.path ? `1px solid ${link.color}40` : '1px solid transparent'
                    }}
                  >
                    <span className={`text-xl font-bold tracking-widest transition-colors ${location.pathname === link.path ? 'text-white' : 'text-white/40 group-hover:text-white'}`}>
                      {link.name}
                    </span>
                    <motion.div 
                      animate={location.pathname === link.path ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 rounded-full"
                      style={{ 
                        backgroundColor: link.color, 
                        boxShadow: `0 0 15px ${link.color}` 
                      }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

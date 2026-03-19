import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelection } from '../../redux/planetSlice';

const PlanetCard = () => {
  const { selectedPlanet, isCardOpen } = useSelector((state) => state.planets);
  const dispatch = useDispatch();

  if (!selectedPlanet) return null;

  return (
    <AnimatePresence>
      {isCardOpen && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed top-32 right-8 z-[90] w-80 glass p-8 border border-white/20 shadow-2xl rounded-3xl"
        >
          {/* Close Button */}
          <button 
            onClick={() => dispatch(clearSelection())}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          >
            ✕
          </button>

          {/* Icon & Name */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{selectedPlanet.icon || '🪐'}</span>
            <div>
              <h2 className="text-3xl font-black text-white font-orbitron tracking-tight">
                {selectedPlanet.name}
              </h2>
              <div className="h-1 w-12 bg-purple-500 rounded-full mt-1 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-8 font-light italic">
            "{selectedPlanet.description}"
          </p>

          {/* Real Image View */}
        {selectedPlanet.realImage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-video rounded-xl overflow-hidden glass border border-white/10 shadow-2xl">
              <img 
                src={selectedPlanet.realImage} 
                alt={selectedPlanet.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom p-4">
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.3em]">
                  NASA Authenticated View
                </span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Orbit Radius</span>
              <span className="text-white font-mono text-sm">{selectedPlanet.orbitRadius} AU</span>
            </div>
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
              <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Diameter</span>
              <span className="text-white font-mono text-sm">{selectedPlanet.radius * 2} kM</span>
            </div>
          </div>

          {/* Action CTA */}
          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-sm rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_20px_rgba(124,58,237,0.3)] group overflow-hidden relative">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Planet
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlanetCard;

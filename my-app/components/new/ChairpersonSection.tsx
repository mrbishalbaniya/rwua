'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ORG_MEMBERS } from '@/lib/constants';

export const ChairpersonSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % ORG_MEMBERS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + ORG_MEMBERS.length) % ORG_MEMBERS.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const member = ORG_MEMBERS[activeIndex];

  return (
    <section className="relative w-full h-screen min-h-[750px] overflow-hidden bg-black text-white flex items-center">
      
      {/* 1. DYNAMIC BACKGROUND LAYER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${member.id}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            // Dynamically selects bg1.png, bg2.png based on activeIndex
            src={`/images/bg${activeIndex + 1}.png`} 
            className="w-full h-full object-cover grayscale-[20%]" 
            alt="Background" 
            // Fallback to member image if bg file is missing
            onError={(e) => {
              (e.target as HTMLImageElement).src = member.imageUrl;
            }}
          />
          {/* Cinematic Red-Black Gradient Mask */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-red-950/20" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* 2. OVERWRITTEN TEXT STYLE BOX */}
          <div className="w-full lg:w-1/3 pt-20 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${member.id}`}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-7xl lg:text-[110px] font-serif-impact mb-6 tracking-tighter leading-[0.85] drop-shadow-2xl">
                  {member.name.split(' ')[0]}
                </h2>
                
                <div className="max-w-sm">
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-10 opacity-80 font-nepali">
                    {member.quote}
                  </p>
                  
                  <button className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(153,27,27,0.4)]">
                    Explore Story
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. STACKED IMAGE CARDS */}
          <div className="w-full lg:w-2/3 flex items-center justify-center lg:justify-end h-[500px] relative">
            <div className="relative w-[300px] h-[400px]">
              <AnimatePresence mode="popLayout">
                {ORG_MEMBERS.map((m, i) => {
                  const relativeIndex = i - activeIndex;
                  const isVisible = relativeIndex >= 0 && relativeIndex <= 2;
                  
                  if (!isVisible) return null;

                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, x: 150 }}
                      animate={{
                        x: relativeIndex * 50,
                        scale: 1 - relativeIndex * 0.1,
                        opacity: 1 - relativeIndex * 0.4,
                        z: -relativeIndex * 100,
                        borderWidth: relativeIndex === 0 ? '6px' : '0px',
                      }}
                      exit={{ opacity: 0, x: -200, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 150, damping: 22 }}
                      style={{ 
                        zIndex: ORG_MEMBERS.length - i,
                        position: 'absolute'
                      }}
                      className="w-[320px] h-[420px] rounded-[45px] overflow-hidden border-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] bg-stone-900"
                    >
                      <img src={m.imageUrl} className="w-full h-full object-cover" alt={m.name} />
                      
                      {relativeIndex === 0 && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10"
                        >
                          <h4 className="text-xl font-bold font-nepali">{m.nepaliName}</h4>
                          <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">{m.role}</p>
                        </motion.div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM CONTROLS */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6">
          <div className="flex gap-2">
            {ORG_MEMBERS.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeIndex ? 'w-10 bg-white' : 'w-2 bg-white/20'
                }`} 
              />
            ))}
          </div>

          <div className="flex bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <button onClick={prevSlide} className="px-6 py-4 hover:bg-white/10 transition-colors border-r border-white/10 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className="px-6 py-4 hover:bg-white/10 transition-colors border-r border-white/10 text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
            </button>
          
          </div>
        </div>
      </div>
    </section>
  );
};
'use client';

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ORG_MEMBERS } from '@/lib/constants';

interface ShowcaseMember {
  id: string;
  title: string;
  nepaliName: string;
  role: string;
  description: string;
  imageUrl: string;
  themeColor: string;
  buttonColor: string;
}

const MEMBER_SLIDES: ShowcaseMember[] = ORG_MEMBERS.map((member, index) => ({
  id: member.id,
  title: member.name.split(' ')[0],
  nepaliName: member.nepaliName,
  role: member.role,
  description:
    'Leading the transformation of rural communities through women empowerment and sustainable development initiatives. Dedicated to creating lasting change through education, healthcare, and economic opportunities.',
  imageUrl:
    index === 0
      ? 'https://rwua.com.np/wp-content/uploads/2023/03/Bishnu-chalise-scaled.jpg?auto=format&fit=crop&q=80&w=1200'
      : ' https://rwua.com.np/wp-content/uploads/2014/12/goma.jpg?auto=format&fit=crop&q=80&w=1200',
  themeColor: index === 0 ? 'rgba(30, 58, 138, 0.4)' : 'rgba(37, 99, 235, 0.4)',
  buttonColor: index === 0 ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-500',
}));

const BACKGROUND_IMAGES = [
  '/images/bg1.png?auto=format&fit=crop&q=80&w=1200',
  '/images/bg2.png?auto=format&fit=crop&q=80&w=1200',
];

export const ChairpersonSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides] = useState<ShowcaseMember[]>(MEMBER_SLIDES);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = useCallback(() => {
    setIsFlipped(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsFlipped(false);
    }, 300); // flip duration
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setIsFlipped(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsFlipped(false);
    }, 300);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentIndex}`}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${BACKGROUND_IMAGES[currentIndex % BACKGROUND_IMAGES.length]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.35)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 opacity-25"
          animate={{ backgroundColor: currentSlide.themeColor }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* MAIN SHOWCASE */}
      <main className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto px-12 md:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-10">
        {/* TEXT CONTENT */}
        <div className="flex-1 w-full text-left max-w-xl">
          <motion.h1
            key={`title-${currentSlide.id}`}
            className="font-serif text-[80px] md:text-[120px] mb-4 leading-[0.9] tracking-tighter drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {currentSlide.title}
          </motion.h1>

          <motion.h2
            key={`nepali-${currentSlide.id}`}
            className="text-blue-200 text-2xl md:text-3xl font-bold mb-2 font-nepali"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.05 }}
          >
            {currentSlide.nepaliName}
          </motion.h2>

          <motion.p
            key={`role-${currentSlide.id}`}
            className="text-blue-300 text-sm md:text-base font-semibold mb-8 uppercase tracking-wider"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          >
            {currentSlide.role}
          </motion.p>

          <motion.p
            key={`desc-${currentSlide.id}`}
            className="text-zinc-200 text-base md:text-lg leading-relaxed mb-10 max-w-lg opacity-90"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.15 }}
          >
            {currentSlide.description}
          </motion.p>
        </div>

        {/* IMAGE SLIDER */}
        <div className="flex-1 relative w-full h-[400px] md:h-[550px] flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-1000">
            <motion.div
              onClick={handleNext}
              className="w-full h-full rounded-[3.5rem] overflow-hidden cursor-pointer shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border-[8px] border-white"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* FRONT IMAGE */}
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="absolute w-full h-full object-cover rounded-[3rem] backface-hidden"
              />

              {/* BACK IMAGE */}
              <img
                src={nextSlide.imageUrl}
                alt={nextSlide.title}
                className="absolute w-full h-full object-cover rounded-[3rem] rotateY-180 backface-hidden"
              />
            </motion.div>
          </div>
        </div>
      </main>

      {/* FOOTER CONTROLS */}
      <footer className="relative z-50 w-full pb-14 flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

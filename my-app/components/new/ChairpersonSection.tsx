'use client';

import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
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
  title: member.name.split(' ')[0], // First name for large display
  nepaliName: member.nepaliName,
  role: member.role,
  description: 'Leading the transformation of rural communities through women empowerment and sustainable development initiatives. Dedicated to creating lasting change through education, healthcare, and economic opportunities.',
  imageUrl: index === 0 
    ? 'https://rwua.com.np/wp-content/uploads/2014/12/goma.jpg?auto=format&fit=crop&q=80&w=1200' 
    : 'https://rwua.com.np/wp-content/uploads/2023/03/Bishnu-chalise-scaled.jpg?auto=format&fit=crop&q=80&w=1200',
  themeColor: index === 0 ? 'rgba(30, 58, 138, 0.4)' : 'rgba(37, 99, 235, 0.4)', // Blue theme variations
  buttonColor: index === 0 ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-500',
}));

// Background images for the backdrop
const BACKGROUND_IMAGES = [
  '/images/bg1.png?auto=format&fit=crop&q=80&w=1200', // bg1
  '/images/bg2.png?auto=format&fit=crop&q=80&w=1200', // bg2
];

export const ChairpersonSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides] = useState<ShowcaseMember[]>(MEMBER_SLIDES);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleReset = () => {
    setCurrentIndex(0);
  };

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[(currentIndex + 1) % slides.length];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-black text-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGES[currentIndex % BACKGROUND_IMAGES.length]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />
        <div 
          className="absolute inset-0 transition-colors duration-1000 ease-in-out opacity-25"
          style={{ backgroundColor: currentSlide.themeColor }}
        />
      </div>

      {/* MAIN SHOWCASE */}
      <main className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto px-12 md:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-10">
        {/* TEXT CONTENT */}
        <div className="flex-1 w-full text-left max-w-xl">
          <h1 className="font-serif text-[80px] md:text-[120px] mb-4 leading-[0.9] tracking-tighter drop-shadow-2xl animate-slide">
            {currentSlide.title}
          </h1>
          
          {/* Nepali Name */}
          <h2 className="text-blue-200 text-2xl md:text-3xl font-bold mb-2 font-nepali animate-slide [animation-delay:0.05s]">
            {currentSlide.nepaliName}
          </h2>
          
          {/* Role */}
          <p className="text-blue-300 text-sm md:text-base font-semibold mb-8 uppercase tracking-wider animate-slide [animation-delay:0.1s]">
            {currentSlide.role}
          </p>

          <p className="text-zinc-200 text-base md:text-lg leading-relaxed mb-10 max-w-lg opacity-90 animate-slide [animation-delay:0.15s]">
            {currentSlide.description}
          </p>

          <div className="animate-slide [animation-delay:0.2s]">
           
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="flex-1 relative w-full h-[400px] md:h-[550px] flex items-center">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* MAIN IMAGE */}
            <div className="relative z-30 w-full h-full">
              <div className="w-full h-full rounded-[3.5rem] p-1 border-[8px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                <img 
                  key={`main-${currentSlide.id}`}
                  src={currentSlide.imageUrl} 
                  alt={currentSlide.title}
                  className="w-full h-full object-cover rounded-[3rem] animate-slide"
                />
              </div>
            </div>

            {/* SECONDARY IMAGE */}
            {slides.length > 1 && (
              <div 
                onClick={handleNext}
                className="absolute z-20 top-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 opacity-90 hover:opacity-60"
                style={{
                  left: 'calc(100% - 60px)',
                  width: '85%',
                  height: '85%'
                }}
              >
                <div className="w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl bg-zinc-900 border border-white/10">
                  <img 
                    key={`next-${nextSlide.id}`}
                    src={nextSlide.imageUrl} 
                    alt="Next"
                    className="w-full h-full object-cover rounded-[3.5rem]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* FOOTER CONTROLS */}
      <footer className="relative z-50 w-full pb-14 flex flex-col items-center gap-8">
        {/* PAGINATION DOTS */}
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

      <style jsx>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide {
          animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
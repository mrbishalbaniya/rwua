'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { executeQuery } from '@/lib/wordpress/client';
import { ORG_MEMBERS } from '@/lib/constants';

// WordPress query
const GET_ALL_SHOWCASE_MEMBERS = `
  query GetAllShowcaseMembers {
    showcaseMembers {
      nodes {
        id
        title
        showcaseMemberFieldsType {
          members {
            name
            nepaliName
            role
            quote
            phone
            memberUrl {
              node {
                sourceUrl
                mediaItemUrl
              }
            }
            bgImage {
              node {
                sourceUrl
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;

interface ShowcaseMember {
  id: string;
  title: string;
  nepaliName: string;
  role: string;
  description: string;
  imageUrl: string;
  bgImageUrl?: string;
  themeColor: string;
  buttonColor: string;
}

// Fallback data
const MEMBER_SLIDES: ShowcaseMember[] = ORG_MEMBERS.map((member, index) => ({
  id: member.id,
  title: member.name.split(' ')[0],
  nepaliName: member.nepaliName,
  role: member.role,
  description:
    'Leading the transformation of rural communities through women empowerment and sustainable development initiatives. Dedicated to creating lasting change through education, healthcare, and economic opportunities.',
  imageUrl: member.imageUrl,
  bgImageUrl: undefined, // Will use default background images
  themeColor: index === 0 ? 'rgba(30, 58, 138, 0.4)' : 'rgba(37, 99, 235, 0.4)',
  buttonColor: index === 0 ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-500',
}));

const BACKGROUND_IMAGES = [
  '/images/bg1.png?auto=format&fit=crop&q=80&w=1200',
  '/images/bg2.png?auto=format&fit=crop&q=80&w=1200',
];

export const ChairpersonSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState<ShowcaseMember[]>(MEMBER_SLIDES);
  const [isFlipped, setIsFlipped] = useState(false);

  // Fetch WordPress data
  useEffect(() => {
    const fetchShowcaseMembers = async () => {
      try {
        const wpData = await executeQuery(GET_ALL_SHOWCASE_MEMBERS);
        
        if (wpData?.showcaseMembers?.nodes?.[0]?.showcaseMemberFieldsType?.members) {
          const wpMembers = wpData.showcaseMembers.nodes[0].showcaseMemberFieldsType.members
            .filter((member: any) => member?.name && (member?.memberUrl?.node?.sourceUrl || member?.memberUrl?.node?.mediaItemUrl))
            .map((member: any, index: number) => ({
              id: (index + 1).toString(),
              title: member.name.split(' ')[0] || 'Member',
              nepaliName: member.nepaliName || member.name,
              role: member.role || 'Team Member',
              description: member.quote || 'Leading the transformation of rural communities through women empowerment and sustainable development initiatives.',
              imageUrl: member.memberUrl.node.sourceUrl || member.memberUrl.node.mediaItemUrl,
              bgImageUrl: member.bgImage?.node?.sourceUrl || member.bgImage?.node?.mediaItemUrl,
              themeColor: index === 0 ? 'rgba(30, 58, 138, 0.4)' : 'rgba(37, 99, 235, 0.4)',
              buttonColor: index === 0 ? 'bg-blue-800 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-500',
            }));
          
          if (wpMembers.length > 0) {
            setSlides(wpMembers);
          }
        }
      } catch (error) {
        console.error('Error fetching WordPress Showcase Members data:', error);
        // Keep fallback data
      }
    };

    fetchShowcaseMembers();
  }, []);

  const handleNext = useCallback(() => {
    if (isFlipped) return; // Prevent double clicks during animation
    
    setIsFlipped(true);
    
    // The key fix: We update the data exactly when the card is 
    // at 90 degrees (halfway through the flip) so the "new" person 
    // is what appears on the back side.
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setIsFlipped(false);
    }, 300); 
  }, [slides.length, isFlipped]);

  const currentSlide = slides[currentIndex];
  
  // We calculate the "upcoming" person to pre-load on the back of the card
  const nextSlideIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextSlideIndex];
  
  // Use WordPress background image if available, otherwise fallback
  const getCurrentBgImage = (index: number) => {
    const slide = slides[index];
    return slide?.bgImageUrl || BACKGROUND_IMAGES[index % BACKGROUND_IMAGES.length];
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${currentSlide.id}`}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${getCurrentBgImage(currentIndex)})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.35)',
            } as React.CSSProperties}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>

      {/* MAIN SHOWCASE */}
      <main className="relative z-10 flex-1 w-full max-w-[1600px] mx-auto px-12 md:px-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 pt-10">
        {/* TEXT CONTENT */}
        <div className="flex-1 w-full text-left max-w-xl">
          {/* We wrap the text in AnimatePresence to ensure it stays 
              synced with the currentSlide data */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-[80px] md:text-[120px] mb-4 leading-[0.9] tracking-tighter drop-shadow-2xl">
                {currentSlide.title}
              </h1>

              <h2 className="text-blue-200 text-2xl md:text-3xl font-bold mb-2 font-nepali">
                {currentSlide.nepaliName}
              </h2>

              <p className="text-blue-300 text-sm md:text-base font-semibold mb-8 uppercase tracking-wider">
                {currentSlide.role}
              </p>

              <p className="text-zinc-200 text-base md:text-lg leading-relaxed mb-10 max-w-lg opacity-90">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* IMAGE SLIDER (3D FLIP MAINTAINED) */}
        <div className="flex-1 relative w-full h-[400px] md:h-[550px] flex items-center justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-1000">
            <motion.div
              onClick={handleNext}
              className="w-full h-full rounded-[3.5rem] overflow-hidden cursor-pointer shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border-[8px] border-white"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' } as React.CSSProperties}
            >
              {/* FRONT IMAGE (The person whose name is shown) */}
              <img
                src={currentSlide.imageUrl}
                alt={currentSlide.title}
                className="absolute w-full h-full object-cover rounded-[3rem]"
                style={{ backfaceVisibility: 'hidden' } as React.CSSProperties}
              />

              {/* BACK IMAGE (The next person in line) */}
              <img
                src={nextSlide.imageUrl}
                alt={nextSlide.title}
                className="absolute w-full h-full object-cover rounded-[3rem]"
                style={{ 
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                } as React.CSSProperties}
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
              onClick={() => {
                if(!isFlipped) {
                  setCurrentIndex(idx);
                }
              }}
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
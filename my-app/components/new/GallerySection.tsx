'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', alt: 'Women empowerment workshop', title: 'Community Workshop', category: 'Education' },
  { id: 2, src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800', alt: 'Rural development project', title: 'Rural Development', category: 'Infrastructure' },
  { id: 3, src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', alt: 'Healthcare initiative', title: 'Healthcare Program', category: 'Health' },
  { id: 4, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800', alt: 'Agricultural training', title: 'Agricultural Training', category: 'Agriculture' },
  { id: 5, src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800', alt: 'Skills development', title: 'Skills Development', category: 'Education' },
  { id: 6, src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800', alt: 'Community meeting', title: 'Community Meeting', category: 'Community' },
];

const categories = ['All', 'Education', 'Health', 'Infrastructure', 'Agriculture', 'Community'];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const selectedImage = currentIndex !== null ? filteredImages[currentIndex] : null;

  const handleDownload = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNext = () => {
    if (currentIndex !== null) setCurrentIndex((currentIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (currentIndex !== null)
      setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setSelectedCategory(category); setCurrentIndex(null); }}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-impact-red text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-impact-red/10 hover:text-impact-red'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, idx) => (
            <div key={image.id} className="group cursor-pointer" onClick={() => setCurrentIndex(idx)}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Fullscreen Image */}
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />

            {/* Bottom Controls */}
            <div className="absolute bottom-8 flex items-center gap-6 bg-black/40 backdrop-blur-sm rounded-full px-6 py-3">
              {/* Previous */}
              <button
                onClick={handlePrev}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              {/* Download */}
              <button
                onClick={() => handleDownload(selectedImage.src)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <Download size={32} />
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Close Button Top Right */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-5 right-5 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

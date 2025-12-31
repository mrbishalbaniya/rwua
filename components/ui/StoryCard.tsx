import { StoryCardProps } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function StoryCard({ story, className = '' }: StoryCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden 
                        hover:shadow-lg transition-shadow duration-300 
                        ${className}`}>
      {/* Large image at the top */}
      <div className="relative h-64 sm:h-80 w-full bg-gray-100">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm" role="img" aria-label="Image not available">Image not available</span>
          </div>
        ) : (
          <Image
            src={story.image}
            alt={`Success story image: ${story.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority={false}
            onError={handleImageError}
            onLoad={handleImageLoad}
          />
        )}
      </div>

      {/* Content section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-3 leading-tight" id={`story-title-${story.id}`}>
          {story.title}
        </h2>
        
        {/* Author and Date */}
        <div className="flex items-center text-sm text-blue-600 mb-4 space-x-4" aria-label="Story metadata">
          {story.author && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span aria-label={`Author: ${story.author}`}>{story.author}</span>
            </span>
          )}
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <time dateTime={story.date} aria-label={`Published on ${story.date}`}>{story.date}</time>
          </span>
        </div>
        
        {/* Description */}
        <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
          {story.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Read more button */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            className="text-purple-600 hover:text-purple-700 font-medium text-sm 
                     focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                     transition-colors duration-200 touch-target-comfortable rounded px-2 py-1"
            aria-label={`Read more about ${story.title}`}
            aria-describedby={`story-title-${story.id}`}
          >
            थप पढ्नुहोस् →
          </button>
        </div>
      </div>
    </article>
  );
}
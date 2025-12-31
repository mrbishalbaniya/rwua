import { VacancyCardProps } from '@/lib/types';
import Image from 'next/image';
import { useState } from 'react';

export default function VacancyCard({ vacancy, className = '' }: VacancyCardProps) {
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
      {/* Image section */}
      <div className="relative h-48 sm:h-64 w-full bg-gray-100">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a23.946 23.946 0 01-4 2.33M6 20h12a2 2 0 002-2V8a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm" role="img" aria-label="Image not available">Image not available</span>
          </div>
        ) : (
          <Image
            src={vacancy.image}
            alt={`Job vacancy image: ${vacancy.title}`}
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
        <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-3 leading-tight" id={`vacancy-title-${vacancy.id}`}>
          {vacancy.title}
        </h2>
        
        {/* Organization and Date */}
        <div className="flex items-center text-sm text-blue-600 mb-4 space-x-4" aria-label="Job details">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            <span aria-label={`Organization: ${vacancy.organization}`}>{vacancy.organization}</span>
          </span>
          {vacancy.deadline && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={vacancy.deadline} aria-label={`Application deadline: ${vacancy.deadline}`}>{vacancy.deadline}</time>
            </span>
          )}
        </div>
        
        {/* Description */}
        <div className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
          {vacancy.description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* Additional info */}
        {(vacancy.location || vacancy.contactEmail) && (
          <div className="border-t border-gray-200 pt-4 mb-4">
            {vacancy.location && (
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <strong>Location:</strong> <span className="ml-1" aria-label={`Job location: ${vacancy.location}`}>{vacancy.location}</span>
              </div>
            )}
            {vacancy.contactEmail && (
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <strong>Contact:</strong> 
                <a 
                  href={`mailto:${vacancy.contactEmail}`} 
                  className="ml-1 text-purple-600 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                  aria-label={`Send email to ${vacancy.contactEmail}`}
                >
                  {vacancy.contactEmail}
                </a>
              </div>
            )}
          </div>
        )}
        
        {/* Apply button */}
        <div className="pt-4 border-t border-gray-200">
          <button 
            className="w-full bg-purple-600 text-white py-3 px-4 rounded-md 
                     hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
                     transition-colors duration-200 font-medium text-sm sm:text-base
                     focus:outline-none touch-target-comfortable"
            aria-label={`Apply for ${vacancy.title} position`}
            aria-describedby={`vacancy-title-${vacancy.id}`}
          >
            Apply Now
          </button>
        </div>
      </div>
    </article>
  );
}
import { StoryCardProps } from '@/lib/types';

export default function StoryHeading({ story, className = '' }: StoryCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 
                        hover:shadow-md transition-shadow duration-200 
                        ${className}`}>
      {/* Title only */}
      <h2 className="text-lg sm:text-xl font-semibold text-purple-800 leading-tight" id={`story-heading-${story.id}`}>
        {story.title}
      </h2>
      
      {/* Author and Date */}
      <div className="flex items-center text-sm text-blue-600 mt-2 space-x-4" aria-label="Story metadata">
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
      
      {/* Read more button */}
      <div className="mt-3">
        <button
          className="text-purple-600 hover:text-purple-700 font-medium text-sm 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                   transition-colors duration-200 touch-target-comfortable rounded px-2 py-1"
          aria-label={`Read full story: ${story.title}`}
          aria-describedby={`story-heading-${story.id}`}
        >
          पूरा कथा पढ्नुहोस् →
        </button>
      </div>
    </article>
  );
}
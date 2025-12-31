'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2, Heart, MessageCircle } from 'lucide-react';
import { successStories, SuccessStory } from '@/lib/data';

export default function StoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [relatedStories, setRelatedStories] = useState<SuccessStory[]>([]);

  useEffect(() => {
    const loadStory = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const storyId = params.id as string;
      const foundStory = successStories.find(s => s.id === storyId);
      
      if (foundStory) {
        setStory(foundStory);
        
        // Get related stories (same category, excluding current story)
        const related = successStories
          .filter(s => s.id !== storyId && s.category === foundStory.category)
          .slice(0, 3);
        setRelatedStories(related);
      }
      
      setIsLoading(false);
    };

    loadStory();
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      'community': 'bg-blue-100 text-blue-700',
      'education': 'bg-green-100 text-green-700',
      'empowerment': 'bg-purple-100 text-purple-700',
      'women': 'bg-pink-100 text-pink-700',
      'health': 'bg-red-100 text-red-700',
      'economic': 'bg-yellow-100 text-yellow-700',
      'development': 'bg-indigo-100 text-indigo-700',
      'dalit': 'bg-orange-100 text-orange-700',
      'entrepreneurship': 'bg-teal-100 text-teal-700',
      'skills': 'bg-cyan-100 text-cyan-700',
      'children': 'bg-lime-100 text-lime-700',
      'literacy': 'bg-emerald-100 text-emerald-700',
      'maternal': 'bg-rose-100 text-rose-700',
      'rural': 'bg-amber-100 text-amber-700',
      'healthcare': 'bg-violet-100 text-violet-700'
    };
    return colors[tag] || 'bg-gray-100 text-gray-700';
  };

  const handleShare = async () => {
    if (navigator.share && story) {
      try {
        await navigator.share({
          title: story.title,
          text: story.description.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Story Not Found</h1>
            <p className="text-gray-600 mb-8">
              The success story you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/success-story"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Success Stories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/success-story"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Success Stories
        </Link>

        {/* Main Content */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 bg-gradient-to-r from-blue-500 to-purple-500">
            {!imageError ? (
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-10 h-10" />
                  </div>
                  <p className="text-lg font-medium">{story.category}</p>
                </div>
              </div>
            )}
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full font-medium">
                {story.category}
              </span>
            </div>

            {/* Share Button */}
            <div className="absolute top-6 right-6">
              <button
                onClick={handleShare}
                className="p-3 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full hover:bg-white transition-colors"
                aria-label="Share this story"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {story.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{story.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(story.date)}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </span>
              ))}
            </div>

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {story.description.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Inspired by this story?
              </h3>
              <p className="text-gray-600 mb-4">
                Join us in creating more success stories like this. Get involved with RWUA Nepal's programs and make a difference in rural communities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Involved
                </Link>
                <Link
                  href="/vacancy"
                  className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Opportunities
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((relatedStory) => (
                <Link
                  key={relatedStory.id}
                  href={`/success-story/${relatedStory.id}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-32 bg-gradient-to-r from-blue-400 to-purple-400">
                    <Image
                      src={relatedStory.image}
                      alt={relatedStory.title}
                      fill
                      className="object-cover"
                      onError={() => {}}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relatedStory.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedStory.description}
                    </p>
                    <div className="mt-3 text-xs text-gray-500">
                      {formatDate(relatedStory.date)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
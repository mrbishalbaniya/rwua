'use client';

import { NextSeo } from 'next-seo';
import { getBilingualMetaTags } from '@/lib/seo.config';
import { successStories, SuccessStory } from '@/lib/data';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface SuccessStoryPageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to get success story by slug
function getSuccessStoryBySlug(slug: string): SuccessStory | undefined {
  return successStories.find(story => 
    story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
}

export default function SuccessStoryPage({ params }: SuccessStoryPageProps) {
  const { slug } = use(params);
  const story = getSuccessStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  // Generate structured data for success story
  const storyStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: story.title,
    description: story.description,
    image: story.image,
    datePublished: story.date,
    dateModified: story.date,
    author: {
      '@type': 'Organization',
      name: story.author,
      url: 'https://rwua.com.np',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RWUA - Rural Upliftment Women Association',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rwua.com.np/images/logo/rwua-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://rwua.com.np/success-story/${slug}`,
    },
    articleSection: story.category,
    keywords: story.tags.join(', '),
    about: {
      '@type': 'Thing',
      name: 'Women Empowerment',
      description: 'Rural women empowerment and community development in Nepal',
    },
  };

  return (
    <>
      {/* Dynamic SEO configuration for success stories */}
      <NextSeo
        // Dynamic title from success story
        title={`${story.title} - RWUA Success Stories`}
        
        // Dynamic description from story content (first 160 characters)
        description={story.description.substring(0, 157) + '...'}
        
        // Dynamic canonical URL for this success story
        canonical={`https://rwua.com.np/success-story/${slug}`}
        
        // Open Graph configuration with dynamic content
        openGraph={{
          url: `https://rwua.com.np/success-story/${slug}`,
          title: `${story.title} - RWUA Success Stories`,
          description: story.description.substring(0, 157) + '...',
          type: 'article',
          article: {
            publishedTime: story.date,
            modifiedTime: story.date,
            authors: [story.author],
            section: story.category,
            tags: story.tags,
          },
          images: [
            {
              url: story.image,
              width: 1200,
              height: 630,
              alt: story.title,
              type: 'image/jpeg',
            },
            {
              url: 'https://rwua.com.np/images/og/og-success-stories.jpg',
              width: 1200,
              height: 630,
              alt: 'RWUA Success Stories - Empowering rural women in Nepal',
              type: 'image/jpeg',
            },
          ],
        }}
        
        // Twitter Card with dynamic content
        twitter={{
          handle: '@rwuanepal',
          site: '@rwuanepal',
          cardType: 'summary_large_image',
        }}
        
        // Additional meta tags for success stories
        additionalMetaTags={[
          {
            name: 'author',
            content: story.author,
          },
          {
            name: 'keywords',
            content: `${story.tags.join(', ')}, RWUA success stories, women empowerment Nepal, rural development success, community transformation`,
          },
          {
            property: 'article:published_time',
            content: story.date,
          },
          {
            property: 'article:modified_time',
            content: story.date,
          },
          {
            property: 'article:author',
            content: story.author,
          },
          {
            property: 'article:section',
            content: story.category,
          },
          {
            property: 'article:tag',
            content: story.tags.join(', '),
          },
          {
            name: 'story_category',
            content: story.category,
          },
          // Bilingual meta tags for success stories
          ...getBilingualMetaTags(),
        ]}
        
        // JSON-LD structured data for success story
        additionalJsonLd={[
          storyStructuredData,
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://rwua.com.np/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Success Stories',
                item: 'https://rwua.com.np/success-story',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: story.title,
                item: `https://rwua.com.np/success-story/${slug}`,
              },
            ],
          },
        ]}
      />
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Story header */}
            <header className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-flash-yellow text-core-blue px-3 py-1 rounded-full text-sm font-bold">
                  {story.category}
                </span>
                <time className="text-gray-500 text-sm">
                  {new Date(story.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-core-blue mb-4 leading-tight">
                {story.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span>By {story.author}</span>
                <span>•</span>
                <div className="flex gap-2">
                  {story.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            {/* Story image */}
            <div className="mb-8">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Story content */}
            <article className="prose prose-lg max-w-none">
              <div className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {story.description}
              </div>
              
              {/* Call to action */}
              <div className="mt-12 p-8 bg-gradient-to-r from-core-blue/5 to-impact-red/5 rounded-lg border-l-4 border-flash-yellow">
                <h3 className="text-2xl font-bold text-core-blue mb-4">
                  Be Part of More Success Stories
                </h3>
                <p className="text-gray-700 mb-6">
                  Stories like this are possible because of supporters like you. 
                  Join us in empowering more rural women across Nepal.
                </p>
                <div className="flex gap-4">
                  <button className="bg-impact-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-impact-red/90 transition-colors">
                    Support Our Mission
                  </button>
                  <button className="border border-core-blue text-core-blue px-6 py-3 rounded-lg font-semibold hover:bg-core-blue hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </article>
            
            {/* Story footer */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Published on {new Date(story.date).toLocaleDateString()}
                </div>
                <div className="flex gap-4">
                  <button className="text-core-blue hover:text-impact-red transition-colors">
                    Share this Story
                  </button>
                  <button className="text-core-blue hover:text-impact-red transition-colors">
                    Read More Stories
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
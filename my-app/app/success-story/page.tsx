'use client';

import { NextSeo } from 'next-seo';
import { getBilingualMetaTags } from '@/lib/seo.config';
import { successStories } from '@/lib/data';
import Link from 'next/link';

export default function SuccessStoriesPage() {
  return (
    <>
      {/* Success Stories listing page SEO configuration */}
      <NextSeo
        // Success Stories page title emphasizing transformation
        title="Success Stories - Real Impact & Transformation by RWUA"
        
        // Success Stories page description highlighting community change
        description="Discover inspiring success stories of rural women empowered by RWUA. Real stories of transformation through education, entrepreneurship, and community development across Nepal since 1998."
        
        // Canonical URL for Success Stories page
        canonical="https://rwua.com.np/success-story"
        
        // Open Graph configuration for Success Stories page
        openGraph={{
          url: 'https://rwua.com.np/success-story',
          title: 'Success Stories - Real Impact & Transformation by RWUA',
          description: 'Discover inspiring success stories of rural women empowered by RWUA. Real stories of transformation through education and entrepreneurship.',
          type: 'website',
          images: [
            {
              url: 'https://rwua.com.np/images/og/og-success-stories.jpg',
              width: 1200,
              height: 630,
              alt: 'RWUA Success Stories - Women empowerment transformations',
              type: 'image/jpeg',
            },
            {
              url: 'https://rwua.com.np/images/og/og-women-empowerment.jpg',
              width: 1200,
              height: 630,
              alt: 'Rural women empowerment success in Nepal',
              type: 'image/jpeg',
            },
          ],
        }}
        
        // Twitter Card for Success Stories page
        twitter={{
          handle: '@rwuanepal',
          site: '@rwuanepal',
          cardType: 'summary_large_image',
        }}
        
        // Additional meta tags for Success Stories page
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'RWUA success stories, women empowerment Nepal, rural transformation, entrepreneurship stories, education success, community development impact, Nepal NGO success',
          },
          {
            property: 'og:type',
            content: 'website',
          },
          // Bilingual meta tags
          ...getBilingualMetaTags(
            'सफलताका कथाहरू - RWUA द्वारा वास्तविक प्रभाव र रूपान्तरण',
            'RWUA द्वारा सशक्त बनाइएका ग्रामीण महिलाहरूका प्रेरणादायक सफलताका कथाहरू पत्ता लगाउनुहोस्। शिक्षा र उद्यमशीलता मार्फत रूपान्तरणका वास्तविक कथाहरू।'
          ),
        ]}
        
        // JSON-LD structured data for Success Stories page
        additionalJsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'RWUA Success Stories',
            description: 'Inspiring stories of rural women empowered through RWUA\'s programs and initiatives.',
            url: 'https://rwua.com.np/success-story',
            mainEntity: {
              '@type': 'ItemList',
              numberOfItems: successStories.length,
              itemListElement: successStories.map((story, index) => ({
                '@type': 'Article',
                position: index + 1,
                headline: story.title,
                description: story.description.substring(0, 157) + '...',
                image: story.image,
                datePublished: story.date,
                author: {
                  '@type': 'Organization',
                  name: story.author,
                },
                url: `https://rwua.com.np/success-story/${story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
                about: {
                  '@type': 'Thing',
                  name: 'Women Empowerment',
                },
              })),
            },
          },
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
            ],
          },
        ]}
      />
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-8 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Page header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-core-blue mb-4">
                Success Stories
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real stories of transformation and empowerment from rural women 
                across Nepal who have been supported by RWUA's programs.
              </p>
              
              {/* Impact statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-black text-impact-red mb-2">27</div>
                  <div className="text-sm text-gray-600">Years of Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-impact-red mb-2">1,200+</div>
                  <div className="text-sm text-gray-600">Students Educated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-impact-red mb-2">45+</div>
                  <div className="text-sm text-gray-600">Cooperatives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-impact-red mb-2">5,000+</div>
                  <div className="text-sm text-gray-600">Lives Transformed</div>
                </div>
              </div>
            </header>
            
            {/* Success stories grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {successStories.map((story) => {
                const slug = story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                
                return (
                  <article key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-flash-yellow text-core-blue px-3 py-1 rounded-full text-sm font-bold">
                          {story.category}
                        </span>
                        <time className="text-gray-500 text-sm">
                          {new Date(story.date).toLocaleDateString()}
                        </time>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-core-blue mb-4 leading-tight">
                        <Link 
                          href={`/success-story/${slug}`}
                          className="hover:text-impact-red transition-colors"
                        >
                          {story.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                        {story.description.substring(0, 200)}...
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {story.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link 
                          href={`/success-story/${slug}`}
                          className="bg-core-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-impact-red transition-colors text-sm"
                        >
                          Read Full Story →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            
            {/* Call to action */}
            <div className="mt-16 text-center bg-gradient-to-r from-core-blue/5 to-impact-red/5 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-core-blue mb-4">
                Help Create More Success Stories
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Every success story starts with support. Join us in empowering 
                more rural women across Nepal to achieve their dreams.
              </p>
              <div className="flex gap-4 justify-center">
                <button className="bg-impact-red text-white px-8 py-4 rounded-lg font-bold hover:bg-impact-red/90 transition-colors">
                  Support Our Mission
                </button>
                <button className="border-2 border-core-blue text-core-blue px-8 py-4 rounded-lg font-bold hover:bg-core-blue hover:text-white transition-colors">
                  Learn How to Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
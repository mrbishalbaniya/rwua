import type { Metadata } from 'next';
import { newsArticles } from '@/lib/data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'RWUA News & Updates - Latest Stories from Rural Nepal',
  description: 'Stay updated with RWUA\'s latest news, community stories, program updates, and impact reports from rural Nepal. Discover our ongoing work in women empowerment, education, and community development.',
  keywords: 'RWUA news, Nepal NGO updates, rural development news, women empowerment stories, community development, program updates, impact reports',
  openGraph: {
    title: 'RWUA News & Updates - Latest Stories from Rural Nepal',
    description: 'Stay updated with RWUA\'s latest news, community stories, program updates, and impact reports from rural Nepal.',
    url: 'https://rwua.com.np/news',
    type: 'website',
    images: [
      {
        url: 'https://rwua.com.np/images/og/og-news.jpg',
        width: 1200,
        height: 630,
        alt: 'RWUA News - Latest updates and community stories',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rwuanepal',
    creator: '@rwuanepal',
    title: 'RWUA News & Updates - Latest Stories from Rural Nepal',
    description: 'Stay updated with RWUA\'s latest news, community stories, program updates, and impact reports from rural Nepal.',
    images: ['https://rwua.com.np/images/og/og-news.jpg'],
  },
  alternates: {
    canonical: 'https://rwua.com.np/news',
  },
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-core-blue mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Stay informed about RWUA's latest initiatives, community impact stories, 
              and program developments across rural Nepal.
            </p>
          </header>
          
          {/* News articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              const slug = article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              
              return (
                <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-impact-red text-white px-2 py-1 rounded text-xs font-semibold">
                        {article.category}
                      </span>
                      <time className="text-gray-500 text-xs">
                        {new Date(article.date).toLocaleDateString()}
                      </time>
                    </div>
                    
                    <h2 className="text-xl font-bold text-core-blue mb-3 line-clamp-2">
                      <Link 
                        href={`/news/${slug}`}
                        className="hover:text-impact-red transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={`/news/${slug}`}
                        className="text-core-blue hover:text-impact-red font-semibold text-sm transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
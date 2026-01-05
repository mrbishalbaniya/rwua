import type { Metadata } from 'next';
import { newsArticles, NewsArticle } from '@/lib/data';
import { notFound } from 'next/navigation';

interface NewsPageProps {
  params: { slug: string };
}

// Helper function to get news article by slug
function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => 
    article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const article = getNewsArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found - RWUA News',
      description: 'The requested news article could not be found.',
    };
  }

  return {
    title: `${article.title} - RWUA News`,
    description: article.excerpt || article.description,
    keywords: `${article.tags.join(', ')}, RWUA news, Nepal NGO news, rural development news, women empowerment news`,
    openGraph: {
      title: `${article.title} - RWUA News`,
      description: article.excerpt || article.description,
      url: `https://rwua.com.np/news/${params.slug}`,
      type: 'article',
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@rwuanepal',
      creator: '@rwuanepal',
      title: `${article.title} - RWUA News`,
      description: article.excerpt || article.description,
      images: [article.image],
    },
    alternates: {
      canonical: `https://rwua.com.np/news/${params.slug}`,
    },
  };
}

export default function NewsPage({ params }: NewsPageProps) {
  const article = getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-impact-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <time className="text-gray-500 text-sm">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-core-blue mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {article.description}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {article.author}</span>
              <span>•</span>
              <div className="flex gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          {/* Article image */}
          <div className="mb-8">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed text-gray-700">
              {article.excerpt && (
                <p className="text-xl font-medium text-gray-800 mb-6 border-l-4 border-flash-yellow pl-6 italic">
                  {article.excerpt}
                </p>
              )}
              
              {/* Article body would be rendered here */}
              <p>
                This is where the full article content would be displayed. 
                The content would be fetched from your CMS or database and rendered here.
              </p>
              
              <p>
                RWUA continues its mission to empower rural women through various programs 
                and initiatives across Nepal, focusing on education, skill development, 
                and sustainable livelihoods.
              </p>
            </div>
          </article>
          
          {/* Article footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Published on {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex gap-4">
                <button className="text-core-blue hover:text-impact-red transition-colors">
                  Share on Facebook
                </button>
                <button className="text-core-blue hover:text-impact-red transition-colors">
                  Share on Twitter
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
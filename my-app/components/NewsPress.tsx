'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import TopSearch from './TopSearch';
import { newsArticles } from '@/lib/data';

export default function NewsPressPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter news based on search query
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) {
      return newsArticles;
    }

    const query = searchQuery.toLowerCase();
    return newsArticles.filter(news =>
      news.title.toLowerCase().includes(query) ||
      news.excerpt.toLowerCase().includes(query) ||
      news.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get featured article
  const featuredArticle = filteredNews[0];

  // Get other articles (excluding featured)
  const otherArticles = filteredNews.filter(news => news.id !== featuredArticle?.id);
  const subMainPosts = otherArticles.slice(0, 2);
  const latestNews = otherArticles.slice(0, 3);
  const popularNews = otherArticles.slice(3, 6);

  return (
    <div className="min-h-screen" style={{
      backgroundColor: '#ffffff'
    }}>
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 pt-[15px]" style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-end">
            <nav className="flex items-center text-sm text-gray-600 font-sans">
              <Link href="/" className="hover:text-purple-800 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                मुख्य पृष्ठ
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600 font-medium">News & Press</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Search Section */}
        <TopSearch onSearch={setSearchQuery} />

        <main className="mt-12">
          {/* Show search results count */}
          {searchQuery && (
            <div className="mb-6 text-gray-600">
              <p className="text-sm">
                Showing {filteredNews.length} result{filteredNews.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            </div>
          )}

          {/* No results message */}
          {searchQuery && filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found for "{searchQuery}"</p>
              <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
            </div>
          )}

          {/* Featured Section */}
          {featuredArticle && (
            <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-6 mb-16">
              {/* Main Post */}
              <div className="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block cursor-pointer">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  width={900}
                  height={400}
                  className="rounded-md object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
                />
                <span className="text-green-700 text-sm hidden md:block mt-4">{featuredArticle.category}</span>
                <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight cursor-pointer hover:text-blue-800 transition-colors duration-200">
                  <Link href="/news" className="hover:text-blue-800 transition-colors duration-200">
                    {featuredArticle.title}
                  </Link>
                </h1>
                <p className="text-gray-600 mb-4">
                  {featuredArticle.excerpt}
                </p>
                <Link href="/news" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm mt-4 transition-colors duration-200 group">
                  Read more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Sub-main Posts - Using Success Story Card Design */}
              <div className="w-full md:w-4/7">
                <div className="grid grid-cols-1 gap-4">
                  {subMainPosts.map((post) => (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                      {/* Image Section - Smaller */}
                      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content Section - More compact */}
                      <div className="p-3">
                        {/* Header */}
                        <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
                          {post.title}
                        </h3>

                        {/* Description - Much shorter */}
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                          {post.excerpt.length > 80 ? post.excerpt.substring(0, 80) + '...' : post.excerpt}
                        </p>

                        {/* Footer - Inline Read More */}
                        <div className="flex justify-between items-center">
                          {/* Date */}
                          <div className="flex items-center text-xs text-gray-500">
                            <span>{post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Recent'}</span>
                          </div>

                          {/* Read More Button - Better design */}
                          <Link
                            href="/news"
                            className="inline-flex items-center text-blue-600 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:border-blue-600 group hover:shadow-md cursor-pointer"
                          >
                            <span>Read More</span>
                            <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Latest News Section - Using Success Story Card Design */}
          {latestNews.length > 0 && (
            <>
              <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                <h2 className="font-bold text-3xl text-gray-800 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                  Latest News
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestNews.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                    {/* Image Section - Smaller */}
                    <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section - More compact */}
                    <div className="p-3">
                      {/* Header */}
                      <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
                        {news.title}
                      </h3>

                      {/* Description - Much shorter */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                        {news.excerpt.length > 80 ? news.excerpt.substring(0, 80) + '...' : news.excerpt}
                      </p>

                      {/* Footer - Inline Read More */}
                      <div className="flex justify-between items-center">
                        {/* Date */}
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{news.date ? new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Recent'}</span>
                        </div>

                        {/* Read More Button - Better design */}
                        <Link
                          href="/news"
                          className="inline-flex items-center text-blue-600 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:border-blue-600 group hover:shadow-md cursor-pointer"
                        >
                          <span>Read More</span>
                          <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Newsletter Subscribe Section */}
          <div className="rounded-lg flex md:shadow-lg mt-12 border border-gray-100 overflow-hidden" style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}>
            <Image
              src="https://rwua.com.np/wp-content/uploads/2021/10/1.jpg"
              alt="Newsletter"
              width={300}
              height={200}
              className="w-0 md:w-1/4 object-cover"
            />
            <div className="px-6 py-6 flex-1">
              <h3 className="text-3xl text-gray-800 font-bold mb-2">समाचार सदस्यता लिनुहोस्</h3>
              <p className="text-lg text-gray-600 mb-6">
                हामी हरेक हप्ता नवीनतम समाचार र पोस्टहरू पठाउँछौं
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="flex-1 rounded-lg bg-gray-50 px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                  placeholder="your@email.com"
                />
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-2 px-4">
                  Subscribe
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
              <p className="text-green-700 opacity-70 text-sm mt-3">No spam. We promise</p>
            </div>
          </div>

          {/* Popular News Section - Using Success Story Card Design */}
          {popularNews.length > 0 && (
            <>
              <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                <h2 className="font-bold text-3xl text-gray-800 cursor-pointer hover:text-blue-800 transition-colors duration-200">
                  Popular News
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularNews.map((news) => (
                  <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                    {/* Image Section - Smaller */}
                    <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Category Badge */}
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section - More compact */}
                    <div className="p-3">
                      {/* Header */}
                      <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
                        {news.title}
                      </h3>

                      {/* Description - Much shorter */}
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                        {news.excerpt.length > 80 ? news.excerpt.substring(0, 80) + '...' : news.excerpt}
                      </p>

                      {/* Footer - Inline Read More */}
                      <div className="flex justify-between items-center">
                        {/* Date */}
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{news.date ? new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Recent'}</span>
                        </div>

                        {/* Read More Button - Better design */}
                        <Link
                          href="/news"
                          className="inline-flex items-center text-blue-600 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:border-blue-600 group hover:shadow-md cursor-pointer"
                        >
                          <span>Read More</span>
                          <svg className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      <div className="pb-24"></div>
    </div>
  );
}
'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import TopSearch from '../../../components/TopSearch';

// Facebook News data
const facebookNewsData = [
    {
        id: 1,
        title: "फेसबुक: हरिपुर नगरपालिकामा न्यानो कम्बल वितरण",
        excerpt: "आजको फेसबुकमा हरिपुर नगरपालिकामा सञ्चालित न्यानो कम्बल वितरण कार्यक्रमको जानकारी साझा गरिएको थियो। यस कार्यक्रममा स्थानीय जनप्रतिनिधिहरूको उपस्थिति रहेको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png",
        category: "Facebook",
        featured: true,
        publishDate: "२०२५ जनवरी १५"
    },
    {
        id: 2,
        title: "फेसबुक: बालक्लब गठन कार्यक्रम",
        excerpt: "बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन कार्यक्रमको फेसबुक पोस्ट। यस कार्यक्रममा बालबालिकाहरूको सक्रिय सहभागिता रहेको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg",
        category: "Facebook",
        featured: false,
        publishDate: "२०२५ जनवरी १०"
    },
    {
        id: 3,
        title: "फेसबुक: महिला सशक्तिकरण तालिम",
        excerpt: "ग्रामीण महिलाहरूको आर्थिक सशक्तिकरणका लागि सञ्चालित तालिम कार्यक्रमको फेसबुक अपडेट। तालिममा स्वरोजगारका विभिन्न विषयहरूमा छलफल भएको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
        category: "Facebook",
        featured: false,
        publishDate: "२०२५ जनवरी ५"
    },
    {
        id: 4,
        title: "फेसबुक: खानेपानी सुविधा उद्घाटन",
        excerpt: "समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रमको उद्घाटन समारोहको फेसबुक पोस्ट। यस अवसरमा स्थानीय समुदायका प्रतिनिधिहरूले खुशी व्यक्त गरेका थिए।",
        image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
        category: "Facebook",
        featured: false,
        publishDate: "२०२४ डिसेम्बर २८"
    },
    {
        id: 5,
        title: "फेसबुक: वार्षिक साधारण सभा",
        excerpt: "ग्रामिण नारी उत्थान संघको २९ औं वार्षिक साधारण सभाको फेसबुक अपडेट। सभामा संस्थाको वार्षिक प्रगति प्रतिवेदन प्रस्तुत गरिएको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
        category: "Facebook",
        featured: false,
        publishDate: "२०२४ डिसेम्बर २०"
    }
];

export default function FacebookPage() {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
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
                            <Link href="/news" className="hover:text-purple-800">
                                News & Press
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-600 font-medium">फेसबुक समाचार</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="max-w-screen-lg mx-auto px-4">
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">फेसबुक समाचार</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        हाम्रो फेसबुक पेजबाट साझा गरिएका कार्यक्रमहरू र सामाजिक सञ्जालका समाचारहरू
                    </p>
                </div>

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
                            <p className="text-gray-500 text-lg">No Facebook news found for "{searchQuery}"</p>
                            <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
                        </div>
                    )}

                    {/* Facebook News Grid - Using Latest News Card Design */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((news) => (
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
                                            <span>{news.publishDate}</span>
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

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-3 px-6">
                            Load More Facebook News
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
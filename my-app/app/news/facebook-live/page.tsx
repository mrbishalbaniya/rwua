'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import TopSearch from '../../../components/TopSearch';

// Facebook Live News data
const facebookNewsData = [
    {
        id: 1,
        title: "फेसबुक लाइभ: हरिपुर नगरपालिकामा न्यानो कम्बल वितरण",
        excerpt: "आजको फेसबुक लाइभमा हरिपुर नगरपालिकामा सञ्चालित न्यानो कम्बल वितरण कार्यक्रमको प्रत्यक्ष प्रसारण गरिएको थियो। यस कार्यक्रममा स्थानीय जनप्रतिनिधिहरूको उपस्थिति रहेको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png",
        category: "Facebook Live",
        featured: true,
        liveDate: "२०२५ जनवरी १५"
    },
    {
        id: 2,
        title: "फेसबुक लाइभ: बालक्लब गठन कार्यक्रम",
        excerpt: "बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन कार्यक्रमको फेसबुक लाइभ प्रसारण। यस कार्यक्रममा बालबालिकाहरूको सक्रिय सहभागिता रहेको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg",
        category: "Facebook Live",
        featured: false,
        liveDate: "२०२५ जनवरी १०"
    },
    {
        id: 3,
        title: "फेसबुक लाइभ: महिला सशक्तिकरण तालिम",
        excerpt: "ग्रामीण महिलाहरूको आर्थिक सशक्तिकरणका लागि सञ्चालित तालिम कार्यक्रमको फेसबुक लाइभ प्रसारण। तालिममा स्वरोजगारका विभिन्न विषयहरूमा छलफल भएको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
        category: "Facebook Live",
        featured: false,
        liveDate: "२०२५ जनवरी ५"
    },
    {
        id: 4,
        title: "फेसबुक लाइभ: खानेपानी सुविधा उद्घाटन",
        excerpt: "समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रमको उद्घाटन समारोहको फेसबुक लाइभ प्रसारण। यस अवसरमा स्थानीय समुदायका प्रतिनिधिहरूले खुशी व्यक्त गरेका थिए।",
        image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
        category: "Facebook Live",
        featured: false,
        liveDate: "२०२४ डिसेम्बर २८"
    },
    {
        id: 5,
        title: "फेसबुक लाइभ: वार्षिक साधारण सभा",
        excerpt: "ग्रामिण नारी उत्थान संघको २९ औं वार्षिक साधारण सभाको फेसबुक लाइभ प्रसारण। सभामा संस्थाको वार्षिक प्रगति प्रतिवेदन प्रस्तुत गरिएको थियो।",
        image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
        category: "Facebook Live",
        featured: false,
        liveDate: "२०२४ डिसेम्बर २०"
    }
];

export default function FacebookLivePage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter news based on search query
    const filteredNews = useMemo(() => {
        if (!searchQuery.trim()) {
            return facebookNewsData;
        }

        const query = searchQuery.toLowerCase();
        return facebookNewsData.filter(news =>
            news.title.toLowerCase().includes(query) ||
            news.excerpt.toLowerCase().includes(query) ||
            news.category.toLowerCase().includes(query)
        );
    }, [searchQuery]);

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
                            <span className="text-gray-600 font-medium">फेस्बूक बाट ल्याइेका समाचार</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="max-w-screen-lg mx-auto px-4">
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">फेस्बूक बाट ल्याइेका समाचार</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        हाम्रो फेसबुक पेजबाट प्रत्यक्ष प्रसारण गरिएका कार्यक्रमहरू र सामाजिक सञ्जालका समाचारहरू
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

                    {/* Facebook News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredNews.map((news) => (
                            <div key={news.id} className="rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                                background: '#ffffff',
                                border: '1px solid rgba(0, 0, 0, 0.08)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
                            }}>
                                <div className="h-64 overflow-hidden relative">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Facebook Live Badge */}
                                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                        <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                        LIVE
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col bg-white">
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                            Facebook Live
                                        </span>
                                        <span className="text-xs text-gray-500">{news.liveDate}</span>
                                    </div>
                                    <h2 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                                        <Link href="/article" className="hover:text-blue-800 transition-colors duration-200">
                                            {news.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 text-sm flex-1 line-clamp-3 mb-4">
                                        {news.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between">
                                        <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                                            Watch Replay
                                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                                            </svg>
                                        </Link>
                                        <div className="flex items-center text-gray-500 text-xs">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            Facebook
                                        </div>
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

            <div className="pb-24"></div>
        </div>
    );
}
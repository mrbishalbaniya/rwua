'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';
import TopSearch from '../../../components/TopSearch';

// Success Stories data
const successStoriesData = [
    {
        id: 1,
        title: "हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम",
        excerpt: "सर्लाहीको हरिपुर नगरपालिकामा सिमान्तकृत दलित तथा मुसहर समुदायलाई लक्षित गरी न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यस कार्यक्रमले ५०० भन्दा बढी परिवारलाई फाइदा पुर्याएको छ।",
        image: "https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png",
        category: "Community Support",
        featured: true
    },
    {
        id: 2,
        title: "ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा सफल",
        excerpt: "ग्रामीण महिलाहरूको सशक्तिकरणका लागि आयोजित वार्षिक साधारण सभामा ५०० भन्दा बढी सदस्यहरूको सहभागिता रह्यो। सभाले आगामी वर्षका लागि महत्वाकांक्षी योजनाहरू पारित गर्यो।",
        image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
        category: "General Assembly",
        featured: false
    },
    {
        id: 3,
        title: "समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम सफल",
        excerpt: "स्वच्छ खानेपानी पहुँचका लागि सञ्चालित कार्यक्रमले १०० घरपरिवारलाई सुरक्षित खानेपानी उपलब्ध गराएको छ। यो कार्यक्रमले समुदायिक सहभागितालाई प्रोत्साहन दिएको छ।",
        image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
        category: "Water & Sanitation",
        featured: false
    },
    {
        id: 4,
        title: "बालबालिकाको अधिकार संरक्षण कार्यक्रम सफल",
        excerpt: "बालबालिकाको अधिकार संरक्षणका लागि बालक्लब गठन र सचेतना कार्यक्रमहरू सञ्चालन गरिएको छ। यस कार्यक्रमले २०० बालबालिकालाई प्रत्यक्ष फाइदा पुर्याएको छ।",
        image: "https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg",
        category: "Child Rights",
        featured: false
    },
    {
        id: 5,
        title: "महिला सशक्तिकरण तालिम कार्यक्रम सम्पन्न",
        excerpt: "ग्रामीण महिलाहरूको आर्थिक सशक्तिकरणका लागि सञ्चालित तालिम कार्यक्रममा १५० महिलाहरूले सहभागिता जनाएका छिन्। तालिमले उनीहरूलाई स्वरोजगारका अवसरहरू प्रदान गरेको छ।",
        image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
        category: "Women Empowerment",
        featured: false
    }
];

export default function SuccessStoriesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter stories based on search query
    const filteredStories = useMemo(() => {
        if (!searchQuery.trim()) {
            return successStoriesData;
        }

        const query = searchQuery.toLowerCase();
        return successStoriesData.filter(story =>
            story.title.toLowerCase().includes(query) ||
            story.excerpt.toLowerCase().includes(query) ||
            story.category.toLowerCase().includes(query)
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
                            <span className="text-gray-600 font-medium">सफलताको कथा</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="max-w-screen-lg mx-auto px-4">
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">सफलताको कथा</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        हाम्रो संस्थाका उपलब्धिहरू र सफलताका कथाहरू जसले समुदायमा सकारात्मक परिवर्तन ल्याएको छ
                    </p>
                </div>

                {/* Search Section */}
                <TopSearch onSearch={setSearchQuery} />

                <main className="mt-12">
                    {/* Show search results count */}
                    {searchQuery && (
                        <div className="mb-6 text-gray-600">
                            <p className="text-sm">
                                Showing {filteredStories.length} result{filteredStories.length !== 1 ? 's' : ''} for "{searchQuery}"
                            </p>
                        </div>
                    )}

                    {/* No results message */}
                    {searchQuery && filteredStories.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No success stories found for "{searchQuery}"</p>
                            <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
                        </div>
                    )}

                    {/* Success Stories Grid - Using Latest News Card Design */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStories.map((story) => (
                            <div key={story.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                                {/* Image Section - Smaller */}
                                <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-2 left-2">
                                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                                            {story.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section - More compact */}
                                <div className="p-3">
                                    {/* Header */}
                                    <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
                                        {story.title}
                                    </h3>

                                    {/* Description - Much shorter */}
                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                                        {story.excerpt.length > 80 ? story.excerpt.substring(0, 80) + '...' : story.excerpt}
                                    </p>

                                    {/* Footer - Inline Read More */}
                                    <div className="flex justify-between items-center">
                                        {/* Date */}
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span>Recent</span>
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
                            Load More Stories
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
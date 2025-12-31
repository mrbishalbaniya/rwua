'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Clock } from 'lucide-react';
import TopSearch from '../../../components/TopSearch';

// Latest Updates data
const latestUpdatesData = [
    {
        id: 1,
        title: "हरिपुर नगरपालिकामा नयाँ स्वास्थ्य चौकी स्थापना",
        excerpt: "हरिपुर नगरपालिकाको वडा नं. ५ मा नयाँ स्वास्थ्य चौकी स्थापना गरिएको छ। यस स्वास्थ्य चौकीले स्थानीय बासिन्दाहरूलाई आधारभूत स्वास्थ्य सेवा प्रदान गर्नेछ।",
        image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
        category: "Health",
        featured: true,
        publishDate: "२०२५ जनवरी २०",
        isNew: true
    },
    {
        id: 2,
        title: "शिक्षा सामग्री वितरण कार्यक्रम सुरु",
        excerpt: "विद्यालयमा पढ्ने गरिब परिवारका बालबालिकाहरूलाई निःशुल्क शिक्षा सामग्री वितरण कार्यक्रम सुरु गरिएको छ। यस कार्यक्रमले ५०० बालबालिकालाई फाइदा पुर्याउनेछ।",
        image: "https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg",
        category: "Education",
        featured: false,
        publishDate: "२०२५ जनवरी १८",
        isNew: true
    },
    {
        id: 3,
        title: "कृषि तालिम कार्यक्रम घोषणा",
        excerpt: "आधुनिक कृषि प्रविधिका बारेमा किसानहरूलाई तालिम दिने कार्यक्रम घोषणा गरिएको छ। यस तालिममा जैविक खेती र बीउ उत्पादनका विषयहरू समावेश छन्।",
        image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg",
        category: "Agriculture",
        featured: false,
        publishDate: "२०२५ जनवरी १६",
        isNew: true
    },
    {
        id: 4,
        title: "महिला उद्यमी विकास कार्यक्रम",
        excerpt: "ग्रामीण महिलाहरूलाई उद्यमशीलता विकासका लागि विशेष कार्यक्रम सञ्चालन गरिने भएको छ। यस कार्यक्रममा व्यवसायिक सीप विकास र ऋण सुविधाका विषयहरू समावेश छन्।",
        image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg",
        category: "Women Empowerment",
        featured: false,
        publishDate: "२०२५ जनवरी १४",
        isNew: false
    },
    {
        id: 5,
        title: "सामुदायिक वन संरक्षण अभियान",
        excerpt: "वातावरण संरक्षणका लागि सामुदायिक वन संरक्षण अभियान सुरु गरिएको छ। यस अभियानमा स्थानीय युवाहरूको सक्रिय सहभागिता रहेको छ।",
        image: "https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png",
        category: "Environment",
        featured: false,
        publishDate: "२०२५ जनवरी १२",
        isNew: false
    },
    {
        id: 6,
        title: "डिजिटल साक्षरता कार्यक्रम विस्तार",
        excerpt: "ग्रामीण क्षेत्रमा डिजिटल साक्षरता बढाउनका लागि कम्प्युटर तालिम कार्यक्रम विस्तार गरिएको छ। यस कार्यक्रममा आधारभूत कम्प्युटर सीप सिकाइन्छ।",
        image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg",
        category: "Technology",
        featured: false,
        publishDate: "२०२५ जनवरी १०",
        isNew: false
    }
];

export default function LatestUpdatesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter updates based on search query
    const filteredUpdates = useMemo(() => {
        if (!searchQuery.trim()) {
            return latestUpdatesData;
        }

        const query = searchQuery.toLowerCase();
        return latestUpdatesData.filter(update =>
            update.title.toLowerCase().includes(query) ||
            update.excerpt.toLowerCase().includes(query) ||
            update.category.toLowerCase().includes(query)
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
                            <span className="text-gray-600 font-medium">ताजा अपडेट</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <div className="max-w-screen-lg mx-auto px-4">
                {/* Page Header */}
                <div className="text-center py-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">ताजा अपडेट</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        नवीनतम समाचार र जानकारीहरू जसले हाम्रो समुदायमा भइरहेका गतिविधिहरूको जानकारी दिन्छ
                    </p>
                </div>

                {/* Search Section */}
                <TopSearch onSearch={setSearchQuery} />

                <main className="mt-12">
                    {/* Show search results count */}
                    {searchQuery && (
                        <div className="mb-6 text-gray-600">
                            <p className="text-sm">
                                Showing {filteredUpdates.length} result{filteredUpdates.length !== 1 ? 's' : ''} for "{searchQuery}"
                            </p>
                        </div>
                    )}

                    {/* No results message */}
                    {searchQuery && filteredUpdates.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No updates found for "{searchQuery}"</p>
                            <p className="text-gray-400 text-sm mt-2">Try searching with different keywords</p>
                        </div>
                    )}

                    {/* Latest Updates List */}
                    <div className="space-y-8">
                        {filteredUpdates.map((update) => (
                            <div key={update.id} className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer" style={{
                                background: '#ffffff',
                                border: '1px solid rgba(0, 0, 0, 0.08)',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
                            }}>
                                <div className="md:flex">
                                    <div className="md:w-1/3">
                                        <div className="h-64 md:h-full overflow-hidden relative">
                                            <Image
                                                src={update.image}
                                                alt={update.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                            {update.isNew && (
                                                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                    NEW
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                                        <div>
                                            <div className="mb-3 flex items-center justify-between">
                                                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                                    {update.category}
                                                </span>
                                                <div className="flex items-center text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {update.publishDate}
                                                </div>
                                            </div>
                                            <h2 className="font-bold text-2xl text-gray-800 mb-3 hover:text-blue-800 transition-colors duration-200 cursor-pointer">
                                                <Link href="/article" className="hover:text-blue-800 transition-colors duration-200">
                                                    {update.title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-600 text-base mb-4 line-clamp-3">
                                                {update.excerpt}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Link href="/article" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group">
                                                Read Full Update
                                                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                            <div className="flex items-center space-x-4 text-gray-400">
                                                <button className="hover:text-blue-600 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                    </svg>
                                                </button>
                                                <button className="hover:text-red-600 transition-colors">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group bg-transparent border-2 border-blue-600 hover:border-blue-800 rounded-lg py-3 px-6">
                            Load More Updates
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
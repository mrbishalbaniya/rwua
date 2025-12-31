'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';
import { NewsArticle } from '@/lib/data';

interface ModernNewsCardProps {
    article: NewsArticle;
}

export default function ModernNewsCard({ article }: ModernNewsCardProps) {
    const [imageError, setImageError] = useState(false);

    const getTagColor = (tag: string) => {
        const colors: { [key: string]: string } = {
            'community': 'bg-blue-100 text-blue-700',
            'support': 'bg-green-100 text-green-700',
            'winter': 'bg-purple-100 text-purple-700',
            'relief': 'bg-pink-100 text-pink-700',
            'children': 'bg-red-100 text-red-700',
            'rights': 'bg-yellow-100 text-yellow-700',
            'education': 'bg-indigo-100 text-indigo-700',
            'disability': 'bg-orange-100 text-orange-700',
            'partnership': 'bg-teal-100 text-teal-700',
            'water': 'bg-cyan-100 text-cyan-700',
            'sanitation': 'bg-lime-100 text-lime-700',
            'rural': 'bg-emerald-100 text-emerald-700',
            'sustainability': 'bg-rose-100 text-rose-700',
            'assembly': 'bg-amber-100 text-amber-700',
            'women': 'bg-violet-100 text-violet-700',
            'empowerment': 'bg-fuchsia-100 text-fuchsia-700',
            'leadership': 'bg-sky-100 text-sky-700',
            'protection': 'bg-slate-100 text-slate-700',
            'awareness': 'bg-stone-100 text-stone-700'
        };
        return colors[tag] || 'bg-gray-100 text-gray-700';
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
            {/* Image Section - Smaller */}
            <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                {!imageError ? (
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <div className="text-white text-center">
                            <div className="w-10 h-10 mx-auto mb-1 bg-white/20 rounded-full flex items-center justify-center">
                                <Tag className="w-5 h-5" />
                            </div>
                            <p className="text-xs font-medium">{article.category}</p>
                        </div>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Content Section - More compact */}
            <div className="p-3">
                {/* Header */}
                <h3 className="text-base font-bold text-gray-800 line-clamp-2 mb-2">
                    {article.title}
                </h3>

                {/* Description - Much shorter */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {article.excerpt.length > 80 ? article.excerpt.substring(0, 80) + '...' : article.excerpt}
                </p>

                {/* Tags - Only 2 tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                        <span
                            key={tag}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                        >
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </span>
                    ))}
                </div>

                {/* Footer - Inline Read More */}
                <div className="flex justify-between items-center">
                    {/* Date */}
                    <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{formatDate(article.date).split(',')[0]}</span>
                    </div>

                    {/* Read More Button - Better design */}
                    <Link
                        href={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-blue-600 px-3 py-1.5 rounded-full border border-blue-200 hover:border-blue-600 group hover:shadow-md cursor-pointer"
                    >
                        <span>Read More</span>
                        <ChevronRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilter: (category: string) => void;
  categories: string[];
  activeCategory: string;
  placeholder?: string;
  resultsCount?: number;
  pageType?: 'stories' | 'vacancies';
}

export default function SearchAndFilter({
  onSearch,
  onFilter,
  categories,
  activeCategory,
  placeholder = "Search...",
  resultsCount,
  pageType = 'stories'
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Debounced search function
  const debounceSearch = useCallback(
    (query: string) => {
      const timeoutId = setTimeout(() => {
        onSearch(query);
      }, 300);
      return () => clearTimeout(timeoutId);
    },
    [onSearch]
  );

  useEffect(() => {
    const cleanup = debounceSearch(searchQuery);
    return cleanup;
  }, [searchQuery, debounceSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleCategoryClick = (category: string) => {
    onFilter(category);
    setIsFilterOpen(false);
  };

  const getPageContent = () => {
    if (pageType === 'vacancies') {
      return {
        title: 'Career Opportunities',
        subtitle: 'Join our mission to empower rural communities across Nepal'
      };
    }
    return {
      title: 'Success Stories',
      subtitle: 'Inspiring tales of transformation and community empowerment'
    };
  };

  const { title, subtitle } = getPageContent();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all duration-200"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>

          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <div className="md:hidden bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Counter */}
      {resultsCount !== undefined && (
        <div className="text-gray-600">
          <p>
            Showing <span className="font-semibold">{resultsCount}</span> results
          </p>
        </div>
      )}
    </div>
  );
}
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
  const [isFocused, setIsFocused] = useState(false);

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

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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

      {/* Search and Filter Controls - CSS Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center">
        {/* Left Side: Filter Controls */}
        <div className="order-2 md:order-1">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300 ease-out cursor-pointer"
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
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ease-out cursor-pointer ${
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

        {/* Right Side: Search Input */}
        <div className="relative w-full order-1 md:order-2">
          <div className={`relative transition-all duration-300 ease-out ${
            isFocused ? 'md:w-96' : 'md:w-80'
          } w-full`}>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              className={`w-full pl-10 pr-4 py-3 rounded-lg border shadow-sm transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isFocused 
                  ? 'border-blue-500 focus:border-transparent' 
                  : 'border-gray-300 focus:border-transparent'
              }`}
            />
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ease-out ${
              isFocused ? 'text-blue-500' : 'text-gray-400'
            }`} />
          </div>
        </div>
      </div>

      {/* Mobile Filter Dropdown */}
      {isFilterOpen && (
        <div className="md:hidden bg-white border border-gray-200 rounded-lg shadow-lg p-4 transition-all duration-300 ease-out">
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors duration-300 ease-out cursor-pointer ${
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
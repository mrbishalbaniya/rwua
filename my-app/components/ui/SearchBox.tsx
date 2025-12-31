import { useState, useEffect, useCallback } from 'react';
import { SearchBoxProps } from '@/lib/types';

export default function SearchBox({ 
  onSearch, 
  placeholder = "खोज्नुहोस्...", 
  debounceMs = 300 
}: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceMs, onSearch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm('');
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Search</h3>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-md 
                   focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                   outline-none transition-all duration-200 text-sm"
          aria-label={placeholder}
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 
                     text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Clear search"
            type="button"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-purple-600 hover:bg-purple-700 text-white p-1.5 rounded"
          aria-label="Search"
          type="button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
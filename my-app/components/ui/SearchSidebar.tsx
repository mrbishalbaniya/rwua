import SearchBox from './SearchBox';

interface SearchSidebarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchSidebar({ onSearch, placeholder }: SearchSidebarProps) {
  return (
    <div className="w-full">
      {/* Search Section Only - Recent Posts handled separately in page */}
      <SearchBox onSearch={onSearch} placeholder={placeholder} />
    </div>
  );
}
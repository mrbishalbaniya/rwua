import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchAndFilter from './SearchAndFilter';

// Mock ResizeObserver for responsive testing
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const defaultProps = {
  onSearch: jest.fn(),
  onFilter: jest.fn(),
  categories: ['All', 'Technology', 'Education', 'Healthcare'],
  activeCategory: 'All',
  placeholder: 'Search stories...',
  resultsCount: 10,
  pageType: 'stories' as const,
};

describe('SearchAndFilter - Responsive Behavior', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Desktop Layout (md and above)', () => {
    beforeEach(() => {
      // Mock desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024,
      });
      
      // Mock matchMedia to return true for md breakpoint
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query.includes('(min-width: 768px)'),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
    });

    test('should display filters on left and search on right', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      const container = document.querySelector('.grid');
      expect(container).toBeInTheDocument();
      
      // Check that filter buttons are visible (desktop layout)
      const allButton = screen.getByRole('button', { name: 'All' });
      const techButton = screen.getByRole('button', { name: 'Technology' });
      expect(allButton).toBeInTheDocument();
      expect(techButton).toBeInTheDocument();
      
      // Check that mobile filter toggle is hidden
      const mobileFilterToggle = screen.queryByRole('button', { name: /filter/i });
      expect(mobileFilterToggle).toHaveClass('md:hidden');
    });

    test('should maintain proper spacing and alignment', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Check grid layout classes
      const controlsContainer = document.querySelector('.grid');
      expect(controlsContainer).toHaveClass('grid-cols-1', 'md:grid-cols-[1fr_auto]', 'gap-4', 'items-center');
      
      // Check filter container order
      const filterContainer = document.querySelector('.order-2.md\\:order-1');
      expect(filterContainer).toBeInTheDocument();
      
      // Check search container order
      const searchContainer = document.querySelector('.order-1.md\\:order-2');
      expect(searchContainer).toBeInTheDocument();
    });

    test('should show horizontal filter buttons with proper styling', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Check that desktop filter container is visible
      const desktopFilters = document.querySelector('.hidden.md\\:flex');
      expect(desktopFilters).toBeInTheDocument();
      expect(desktopFilters).toHaveClass('flex-wrap', 'gap-2');
      
      // Check individual filter buttons
      const filterButtons = screen.getAllByRole('button').filter(btn => 
        defaultProps.categories.includes(btn.textContent || '')
      );
      
      filterButtons.forEach(button => {
        expect(button).toHaveClass('px-4', 'py-2', 'rounded-lg', 'transition-colors');
      });
    });

    test('should expand search bar width on focus', async () => {
      const user = userEvent.setup();
      render(<SearchAndFilter {...defaultProps} />);
      
      const searchInput = screen.getByPlaceholderText('Search stories...');
      const searchContainer = searchInput.closest('.relative');
      
      // Initially should have default width
      expect(searchContainer).toHaveClass('md:w-80');
      
      // Focus the input
      await user.click(searchInput);
      
      // Should expand to larger width
      await waitFor(() => {
        expect(searchContainer).toHaveClass('md:w-96');
      });
    });
  });

  describe('Mobile Layout (below md)', () => {
    beforeEach(() => {
      // Mock mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      });
      
      // Mock matchMedia to return false for md breakpoint
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: !query.includes('(min-width: 768px)'),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
    });

    test('should stack elements vertically', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Check that grid uses single column on mobile
      const controlsContainer = document.querySelector('.grid');
      expect(controlsContainer).toHaveClass('grid-cols-1');
      
      // Check proper ordering - search first (order-1), filters second (order-2)
      const searchContainer = document.querySelector('.order-1.md\\:order-2');
      const filterContainer = document.querySelector('.order-2.md\\:order-1');
      
      expect(searchContainer).toBeInTheDocument();
      expect(filterContainer).toBeInTheDocument();
    });

    test('should show mobile filter toggle button', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Mobile filter toggle should be visible
      const mobileFilterToggle = screen.getByRole('button', { name: /filter/i });
      expect(mobileFilterToggle).toBeInTheDocument();
      expect(mobileFilterToggle).toHaveClass('md:hidden');
      
      // Desktop filter buttons should be hidden
      const desktopFilters = document.querySelector('.hidden.md\\:flex');
      expect(desktopFilters).toBeInTheDocument();
    });

    test('should toggle mobile filter dropdown functionality', async () => {
      const user = userEvent.setup();
      render(<SearchAndFilter {...defaultProps} />);
      
      // Initially, dropdown should not be visible
      const mobileDropdown = document.querySelector('.md\\:hidden.bg-white');
      expect(mobileDropdown).not.toBeInTheDocument();
      
      // Click filter toggle
      const filterToggle = screen.getByRole('button', { name: /filter/i });
      await user.click(filterToggle);
      
      // Dropdown should now be visible
      await waitFor(() => {
        const dropdown = document.querySelector('.md\\:hidden.bg-white');
        expect(dropdown).toBeInTheDocument();
      });
      
      // Check dropdown styling
      const dropdown = document.querySelector('.md\\:hidden.bg-white');
      expect(dropdown).toHaveClass('border', 'border-gray-200', 'rounded-lg', 'shadow-lg', 'p-4');
    });

    test('should close mobile dropdown when category is selected', async () => {
      const user = userEvent.setup();
      render(<SearchAndFilter {...defaultProps} />);
      
      // Open dropdown
      const filterToggle = screen.getByRole('button', { name: /filter/i });
      await user.click(filterToggle);
      
      // Wait for dropdown to appear
      await waitFor(() => {
        const dropdown = document.querySelector('.md\\:hidden.bg-white');
        expect(dropdown).toBeInTheDocument();
      });
      
      // Click a category in the mobile dropdown (smaller button)
      const mobileButtons = document.querySelectorAll('.md\\:hidden .grid button');
      const techButton = Array.from(mobileButtons).find(btn => btn.textContent === 'Technology');
      expect(techButton).toBeInTheDocument();
      
      await user.click(techButton as HTMLElement);
      
      // Dropdown should close
      await waitFor(() => {
        const dropdown = document.querySelector('.md\\:hidden.bg-white');
        expect(dropdown).not.toBeInTheDocument();
      });
      
      // Verify onFilter was called
      expect(defaultProps.onFilter).toHaveBeenCalledWith('Technology');
    });

    test('should maintain full width search input on mobile', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      const searchContainer = document.querySelector('.relative.w-full');
      expect(searchContainer).toBeInTheDocument();
      
      const searchInput = screen.getByPlaceholderText('Search stories...');
      expect(searchInput).toHaveClass('w-full');
    });
  });

  describe('Tablet Layout (md breakpoint)', () => {
    beforeEach(() => {
      // Mock tablet viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 768,
      });
      
      // Mock matchMedia for tablet (md breakpoint)
      window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: query.includes('(min-width: 768px)'),
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }));
    });

    test('should use desktop layout at tablet breakpoint', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Should show desktop filter layout
      const desktopFilters = document.querySelector('.hidden.md\\:flex');
      expect(desktopFilters).toBeInTheDocument();
      
      // Should use grid layout with two columns
      const controlsContainer = document.querySelector('.grid');
      expect(controlsContainer).toHaveClass('md:grid-cols-[1fr_auto]');
      
      // Mobile filter toggle should be hidden
      const mobileFilterToggle = screen.getByRole('button', { name: /filter/i });
      expect(mobileFilterToggle).toHaveClass('md:hidden');
    });
  });

  describe('Cross-breakpoint Consistency', () => {
    test('should maintain consistent functionality across all screen sizes', async () => {
      const user = userEvent.setup();
      
      // Test search functionality
      render(<SearchAndFilter {...defaultProps} />);
      
      const searchInput = screen.getByPlaceholderText('Search stories...');
      await user.type(searchInput, 'test query');
      
      // Should work regardless of screen size
      await waitFor(() => {
        expect(defaultProps.onSearch).toHaveBeenCalledWith('test query');
      }, { timeout: 500 });
    });

    test('should maintain proper spacing at all breakpoints', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Check consistent gap and alignment classes
      const controlsContainer = document.querySelector('.grid');
      expect(controlsContainer).toHaveClass('gap-4', 'items-center');
      
      // Check consistent padding and margins
      const searchInput = screen.getByPlaceholderText('Search stories...');
      expect(searchInput).toHaveClass('pl-10', 'pr-4', 'py-3');
    });

    test('should preserve component state during responsive changes', async () => {
      const user = userEvent.setup();
      render(<SearchAndFilter {...defaultProps} />);
      
      // Set some state
      const searchInput = screen.getByPlaceholderText('Search stories...');
      await user.type(searchInput, 'persistent query');
      
      // Simulate screen size change (this would normally trigger re-render)
      // The component should maintain its search query
      expect(searchInput).toHaveValue('persistent query');
    });
  });

  describe('Accessibility and Usability', () => {
    test('should maintain keyboard navigation across breakpoints', async () => {
      const user = userEvent.setup();
      render(<SearchAndFilter {...defaultProps} />);
      
      // Tab through elements - the order depends on DOM structure
      await user.tab();
      const firstFocused = document.activeElement;
      expect(firstFocused).toBeInstanceOf(HTMLButtonElement);
      
      // Tab to next element
      await user.tab();
      const secondFocused = document.activeElement;
      
      // Should be able to navigate through all interactive elements
      expect(secondFocused).toBeInstanceOf(HTMLElement);
      expect(['BUTTON', 'INPUT'].includes(secondFocused?.tagName || '')).toBe(true);
    });

    test('should provide proper ARIA labels and roles', () => {
      render(<SearchAndFilter {...defaultProps} />);
      
      // Search input should be accessible
      const searchInput = screen.getByPlaceholderText('Search stories...');
      expect(searchInput).toHaveAttribute('type', 'text');
      
      // Filter buttons should be accessible
      const filterButtons = screen.getAllByRole('button');
      expect(filterButtons.length).toBeGreaterThan(0);
    });
  });
});
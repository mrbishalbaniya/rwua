'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Newspaper, Trophy, Users, Clock, Archive, FileText, MessageCircle, Download } from 'lucide-react';

export default function ModernNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    const handleDropdownToggle = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeAllMenus = () => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-white text-gray-700 py-2 px-4 text-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <span>✉</span>
                                <span>rwua.haripur@rwua.org</span>
                            </div>
                            <div className="hidden md:flex items-center space-x-2">
                                <span>☎</span>
                                <span>046-411109</span>
                            </div>
                            <div className="hidden lg:block">Sun-Fri 10am – 5pm</div>
                        </div>
                        <a
                            href="tel:046-411109"
                            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded-full flex items-center space-x-2 transition-colors text-white"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">046-411109</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="relative w-14 h-14">
                                <Image
                                    src="https://rwua.com.np/wp-content/uploads/2023/02/cropped-RWUA-Logo-Approval-2.jpg"
                                    alt="RWUA Logo"
                                    fill
                                    className="rounded-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-blue-900">RWUA</h1>
                                <p className="text-xs text-gray-600">Rural Women Upliftment Association</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-2">

                            {/* Home */}
                            <Link
                                href="/"
                                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname === '/'
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                Home
                                {pathname === '/' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                )}
                            </Link>

                            {/* Gallery */}
                            <Link
                                href="/gallery"
                                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname === '/gallery'
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                Gallery
                                {pathname === '/gallery' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                )}
                            </Link>

                            {/* News & Press Mega Menu */}
                            <div className="relative group">
                                <button
                                    className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname?.startsWith('/news')
                                        ? 'text-red-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                        }`}
                                >
                                    <span>News & Press</span>
                                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    {pathname?.startsWith('/news') && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                    )}
                                </button>

                                {/* Full Width Mega Menu */}
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="w-screen max-w-6xl bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
                                        {/* Arrow */}
                                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>

                                        <div className="p-8">
                                            {/* Grid Layout */}
                                            <div className="grid grid-cols-3 gap-8">
                                                {/* Column 1: Main News */}
                                                <div className="space-y-4">
                                                    <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">Latest News</h4>
                                                    <Link
                                                        href="/news"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Newspaper className="w-5 h-5 text-blue-600 mr-2" />
                                                            <span className="font-medium text-gray-900">सम्पूर्ण समाचारहरू</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">सबै समाचार र अपडेटहरू एकै ठाउँमा</p>
                                                    </Link>

                                                    <Link
                                                        href="/news/latest-updates"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Clock className="w-5 h-5 text-green-600 mr-2" />
                                                            <span className="font-medium text-gray-900">ताजा अपडेट</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">नवीनतम समाचार र जानकारी</p>
                                                    </Link>
                                                </div>

                                                {/* Column 2: Success Stories */}
                                                <div className="space-y-4">
                                                    <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">Success Stories</h4>
                                                    <Link
                                                        href="/news/success-stories"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Trophy className="w-5 h-5 text-orange-600 mr-2" />
                                                            <span className="font-medium text-gray-900">सफलताको कथा</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">उपलब्धि र सफलताका कथाहरू</p>
                                                    </Link>

                                                    <Link
                                                        href="/success-story"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Users className="w-5 h-5 text-purple-600 mr-2" />
                                                            <span className="font-medium text-gray-900">Community Impact</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">समुदायमा हाम्रो प्रभाव</p>
                                                    </Link>
                                                </div>

                                                {/* Column 3: Social Media & Archives */}
                                                <div className="space-y-4">
                                                    <h4 className="font-semibold text-gray-900 text-lg border-b border-gray-200 pb-2">Social Media</h4>
                                                    <Link
                                                        href="/news/facebook"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Users className="w-5 h-5 text-blue-600 mr-2" />
                                                            <span className="font-medium text-gray-900">फेस्बूक समाचार</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">सामाजिक सञ्जालका समाचारहरू</p>
                                                    </Link>

                                                    <Link
                                                        href="/news/archive"
                                                        className="block p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                                                    >
                                                        <div className="flex items-center mb-2">
                                                            <Archive className="w-5 h-5 text-purple-600 mr-2" />
                                                            <span className="font-medium text-gray-900">अभिलेख</span>
                                                        </div>
                                                        <p className="text-sm text-gray-600">पुराना र नयाँ जानकारी</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Success Story */}
                            <Link
                                href="/success-story"
                                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname === '/success-story'
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                Success Story
                                {pathname === '/success-story' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                )}
                            </Link>

                            {/* Vacancy */}
                            <Link
                                href="/vacancy"
                                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname === '/vacancy'
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                Vacancy
                                {pathname === '/vacancy' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                )}
                            </Link>

                            {/* Contact */}
                            <Link
                                href="/contact"
                                className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap relative ${pathname === '/contact'
                                    ? 'text-red-600'
                                    : 'text-gray-700 hover:text-blue-600'
                                    }`}
                            >
                                Contact
                                {pathname === '/contact' && (
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full"></div>
                                )}
                            </Link>
                        </div>

                        {/* Download Button */}
                        <div className="hidden lg:block">
                            <Link
                                href="/downloads"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors shadow-md hover:shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                <span>Downloads</span>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-white border-t border-gray-200 px-4 py-6 space-y-4">

                        {/* Mobile Menu Items */}
                        <Link
                            href="/"
                            onClick={closeAllMenus}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Home
                        </Link>

                        <Link
                            href="/gallery"
                            onClick={closeAllMenus}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Gallery
                        </Link>

                        {/* Mobile News Dropdown */}
                        <div>
                            <button
                                onClick={() => handleDropdownToggle('news')}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium">News & Press</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'news' ? 'rotate-180' : ''
                                    }`} />
                            </button>

                            <div className={`ml-8 mt-2 space-y-2 transition-all duration-300 ${activeDropdown === 'news' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}>
                                <Link
                                    href="/news"
                                    onClick={closeAllMenus}
                                    className="block p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    सम्पूर्ण समाचारहरू
                                </Link>
                                <Link
                                    href="/news/success-stories"
                                    onClick={closeAllMenus}
                                    className="block p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    सफलताको कथा
                                </Link>
                                <Link
                                    href="/news/facebook"
                                    onClick={closeAllMenus}
                                    className="block p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    फेस्बूक समाचार
                                </Link>
                                <Link
                                    href="/news/latest-updates"
                                    onClick={closeAllMenus}
                                    className="block p-2 text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    ताजा अपडेट
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/success-story"
                            onClick={closeAllMenus}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Success Story
                        </Link>

                        <Link
                            href="/vacancy"
                            onClick={closeAllMenus}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Vacancy
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeAllMenus}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/downloads"
                            onClick={closeAllMenus}
                            className="flex items-center space-x-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            <Download className="w-5 h-5" />
                            <span>Downloads</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
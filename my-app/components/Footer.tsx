'use client';

import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Heart
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white py-10 px-4 sm:px-6 lg:px-20" style={{
      background: '#1e3a8a',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 pb-8 border-b border-white border-opacity-10 md:grid-cols-2 lg:grid-cols-3">

          {/* Contact/Access Section */}
          <div className="text-white">
            {/* Logo */}
            <div className="flex-shrink-0 mb-4">
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-white">RWUA</div>
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start mb-3">
              <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-gray-200" />
              <address className="text-sm not-italic text-gray-200">
                Haripur Municipality-2<br />
                Sarlahi, Nepal
              </address>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-3">
              <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-gray-200" />
              <span className="text-sm text-gray-200">046-411109</span>
            </div>

            {/* Email */}
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mt-1 mr-3 text-gray-200 flex-shrink-0" />
              <span className="text-sm text-gray-200">rwua.haripur@rwua.org</span>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-white bg-opacity-15 rounded hover:bg-opacity-25"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-white bg-opacity-15 rounded hover:bg-opacity-25"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-white bg-opacity-15 rounded hover:bg-opacity-25"
              >
                <Youtube className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-white bg-opacity-15 rounded hover:bg-opacity-25"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Our Mission/Ethics */}
          <div className="text-center relative">
            <h3 className="mb-3 text-lg font-semibold text-white">Our Mission</h3>
            <p className="mb-4 text-sm text-center leading-relaxed text-gray-200">
              ग्रामीण नारी उत्थान संघ हरिपुरले विपन्न समुदाय र ग्रामीण भेगका नागरिकहरुको सशक्तिकरण एवं शिक्षण सम्बन्धि विविध किसिमका कार्यक्रमहरूलाई अगाडि बढाउदै आएको छ। हाम्रो मिशन सत्यनिष्ठा, उत्कृष्टता र जिम्मेवारीमा आधारित छ।
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Newsletter <sup className="text-red-400">*</sup>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-200">
              हाम्रो न्यूजलेटरमा सदस्यता लिएर तपाईंले हाम्रा नवीनतम कार्यक्रमहरू र गतिविधिहरूको बारेमा जानकारी प्राप्त गर्न सक्नुहुन्छ।
            </p>

            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-white focus:ring-blue-400 focus:border-blue-400 text-gray-900 text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full text-white hover:text-gray-100 focus:text-white active:text-gray-200 font-medium text-sm transition-all duration-200 group bg-blue-700 hover:bg-blue-800 focus:bg-blue-800 active:bg-blue-900 border border-blue-600 hover:border-blue-700 focus:border-blue-700 active:border-blue-800 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95"
                >
                  SUBSCRIBE
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center">
          <p className="mb-2 text-xs text-gray-300">
            ©2025 Rural Women Upliftment Association, Sarlahi. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-xs">
            <Link href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
              Cookie Policy
            </Link>
            <Link href="#" className="text-gray-300 transition-colors duration-300 hover:text-white">
              Legal Notices
            </Link>
          </div>
          <p className="mt-2 text-xs text-gray-300">
            Made with <Heart className="inline w-3 h-3 text-red-400 mx-1" /> by <strong>Sarbatra Inc</strong>
          </p>
        </div>
      </div>



      <style jsx>{`
        /* Removed unused gallery button styles since we're now using styled links */
      `}</style>
    </footer>
  );
}
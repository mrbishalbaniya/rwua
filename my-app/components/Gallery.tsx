'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा",
    description: "ग्रामीण नारी उत्थान संघको २९ औं साधारण सभामा सहभागी सदस्यहरूको तस्बिर र कार्यक्रमका मुख्य बिन्दुहरू।",
    image: "https://rwua.com.np/wp-content/uploads/2021/10/1.jpg"
  },
  {
    id: 2,
    title: "वियोन द फिनिस लाईन समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्याक्रम",
    description: "ग्रामीण क्षेत्रमा खानेपानी सुविधा विस्तार गर्ने कार्यक्रमका तस्बिरहरू र सामुदायिक सहभागिता।",
    image: "https://rwua.com.np/wp-content/uploads/2021/04/11.jpg"
  },
  {
    id: 3,
    title: "न्यानो कम्मल बितरण",
    description: "जाडोको मौसममा आवश्यकतामा परेका परिवारहरूलाई न्यानो कम्बल वितरण कार्यक्रम।",
    image: "https://rwua.com.np/wp-content/uploads/2020/01/13.jpg"
  },
  {
    id: 4,
    title: "LCRC र स्थानीय सरोकारवालाहरु लाइ स्थानीय तहमा बाल भेला सञ्चालन सम्बन्धि दुई दिने तालिम",
    description: "बाल अधिकार र बाल संरक्षणका विषयमा स्थानीय तहका प्रतिनिधिहरूलाई दिइएको तालिम कार्यक्रम।",
    image: "https://rwua.com.np/wp-content/uploads/2025/02/%E0%A4%AC%E0%A4%B2%E0%A5%8D%E0%A4%AD%E0%A5%87%E0%A4%B2%E0%A4%BE.jpg"
  }
];

export default function Gallery() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="gallery-wrapper">
      {/* Breadcrumb Section */}
      <section className="py-4 px-0 pt-[15px] relative z-10" style={{
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
              <span className="text-gray-900">Gallery</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">फोटो ग्यालरी</h1>
            <p className="text-lg text-gray-600">हाम्रा गतिविधिहरू र कार्यक्रमहरूका तस्बिरहरू</p>
          </div>

          <div className="flex justify-center">
            <div className="card-container">
              {galleryData.map((item, index) => {
                let cardClass = 'card';
                let cardStyle: React.CSSProperties = {};

                // Position cards in 4 corners
                if (index === 0) {
                  // Top Left
                  cardStyle = {
                    top: '0px',
                    left: '0px',
                    width: '250px',
                    height: '250px',
                    backgroundImage: `url(${item.image})`
                  };
                } else if (index === 1) {
                  // Top Right
                  cardClass = 'card-d3';
                  cardStyle = {
                    top: '0px',
                    right: '0px',
                    width: '250px',
                    height: '250px',
                    backgroundImage: `url(${item.image})`
                  };
                } else if (index === 2) {
                  // Bottom Left
                  cardStyle = {
                    bottom: '0px',
                    left: '0px',
                    width: '250px',
                    height: '250px',
                    backgroundImage: `url(${item.image})`
                  };
                } else if (index === 3) {
                  // Bottom Right
                  cardClass = 'card-d3';
                  cardStyle = {
                    bottom: '0px',
                    right: '0px',
                    width: '250px',
                    height: '250px',
                    backgroundImage: `url(${item.image})`
                  };
                }

                return (
                  <div
                    key={item.id}
                    className={cardClass}
                    style={cardStyle}
                    onMouseEnter={() => setHoveredCard(item.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="card-content">
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="/gallery/all"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              सबै तस्बिरहरू हेर्नुहोस्
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
        }

        .card-container {
          position: relative;
          height: 505px;
          width: 512px;
          overflow: hidden;
          border-radius: 16px;
        }

        .card {
          position: absolute;
          transition: all 0.5s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 1.5rem;
          color: white;
          z-index: 1;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }

        .card:hover {
          height: 512px !important;
          width: 512px !important;
          top: 0 !important;
          left: 0 !important;
          right: auto !important;
          bottom: auto !important;
          z-index: 10;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }

        .card-d3 {
          position: absolute;
          transition: all 0.5s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          font-size: 1.5rem;
          color: white;
          z-index: 1;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
        }

        .card-d3:hover {
          height: 512px !important;
          width: 512px !important;
          top: auto !important;
          left: auto !important;
          right: 0 !important;
          bottom: 0 !important;
          z-index: 10;
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          transition: all 0.3s ease;
        }

        .card:hover .card-content,
        .card-d3:hover .card-content {
          padding-bottom: 2.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .card-description {
          font-size: 0.875rem;
          opacity: 0;
          max-height: 0;
          transition: all 0.3s ease;
          line-height: 1.4;
        }

        .card:hover .card-description,
        .card-d3:hover .card-description {
          opacity: 1;
          max-height: 100px;
        }

        @media (max-width: 768px) {
          .card-container {
            height: 400px;
            width: 350px;
          }

          .card:hover {
            height: 400px !important;
            width: 350px !important;
          }

          .card-d3:hover {
            height: 400px !important;
            width: 350px !important;
          }

          .card-title {
            font-size: 1rem;
          }

          .card-description {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
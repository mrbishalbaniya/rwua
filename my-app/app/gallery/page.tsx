'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function GalleryPage() {
  useEffect(() => {
    // Dynamically import Flip to avoid build issues
    import('gsap/dist/Flip').then(({ Flip }) => {
      gsap.registerPlugin(Flip);

      const items = gsap.utils.toArray(".gallery-item");
      const details = document.querySelector('.gallery-detail');
      const detailContent = document.querySelector('.gallery-content');
      const detailImage = document.querySelector('.gallery-detail img');
      const detailTitle = document.querySelector('.gallery-detail .gallery-title');
      const detailSecondary = document.querySelector('.gallery-detail .gallery-secondary');
      const detailDescription = document.querySelector('.gallery-detail .gallery-description');

      let activeItem: any;

      gsap.set(detailContent, { yPercent: -100 });

      function showDetails(item: any) {
        if (activeItem) {
          return hideDetails();
        }

        // Prevent background scrolling
        document.body.style.overflow = 'hidden';

        let onLoad = () => {
          Flip.fit(details, item, { scale: true, fitChild: detailImage });
          const state = Flip.getState(details);
          gsap.set(details, { clearProps: true });
          gsap.set(details, { xPercent: -50, top: "50%", yPercent: -50, visibility: "visible", overflow: "hidden" });

          Flip.from(state, {
            duration: 0.5,
            ease: "power2.inOut",
            scale: true,
            onComplete: () => { gsap.set(details, { overflow: "auto" }); }
          }).to(detailContent, { yPercent: 0 }, 0.2);

          (detailImage as HTMLImageElement)?.removeEventListener("load", onLoad);
          document.addEventListener('click', hideDetails);
        };

        const data = item.dataset;
        if (detailImage && detailTitle && detailSecondary && detailDescription) {
          (detailImage as HTMLImageElement).addEventListener("load", onLoad);
          (detailImage as HTMLImageElement).src = (item.querySelector('img') as HTMLImageElement)?.src || '';
          (detailTitle as HTMLElement).innerText = data.title || '';
          (detailSecondary as HTMLElement).innerText = data.secondary || '';
          (detailDescription as HTMLElement).innerText = data.text || '';
        }

        gsap.to(items, {
          opacity: 0.3,
          stagger: { amount: 0.7, from: items.indexOf(item), grid: "auto" }
        }).kill(item);

        gsap.to(".gallery-app", { backgroundColor: "#64748b", duration: 1, delay: 0.3 });
        activeItem = item;
      }

      function hideDetails() {
        document.removeEventListener('click', hideDetails);
        gsap.set(details, { overflow: "hidden" });

        // Restore background scrolling
        document.body.style.overflow = '';

        const state = Flip.getState(details);
        Flip.fit(details, activeItem, { scale: true, fitChild: detailImage });

        const tl = gsap.timeline();
        tl.set(details, { overflow: "hidden" })
          .to(detailContent, { yPercent: -100 })
          .to(items, { opacity: 1, stagger: { amount: 0.7, from: items.indexOf(activeItem), grid: "auto" } })
          .to(".gallery-app", { backgroundColor: "#fff" }, "<");

        Flip.from(state, {
          scale: true,
          duration: 0.5,
          delay: 0.2,
          onInterrupt: () => { tl.kill(); }
        }).set(details, { visibility: "hidden" });

        activeItem = null;
      }

      gsap.utils.toArray('.gallery-item').forEach((item: any) =>
        item.addEventListener('click', () => showDetails(item))
      );
    });

    return () => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode?.replaceChild(newItem, item);
      });
    };
  }, []);

  return (
    <div className="gallery-page-container">
      <style jsx>{`
        .gallery-page-container {
          min-height: 100vh;
          background: white;
          color: #1e293b;
          font-size: 14px;
          font-family: 'Lato', sans-serif;
          padding: 0;
        }
        
        .gallery-app {
          width: 100vw;
          min-height: 100vh;
          background: white;
          position: relative;
          overflow: auto;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 40px 60px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .gallery-item {
          cursor: pointer;
          font-size: 0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
        }
        
        .gallery-item img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        
        .gallery-detail {
          position: fixed;
          top: 10px;
          left: 50%;
          width: 90vw;
          max-width: 1000px;
          cursor: pointer;
          font-size: 0;
          display: flex;
          flex-direction: column;
          visibility: hidden;
          max-height: 90vh;
          overflow: auto;
          z-index: 1000;
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .gallery-detail > img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
        }
        
        .gallery-content {
          background: white;
          padding: 2rem 1.5rem;
          font-size: 1rem;
          box-sizing: border-box;
          flex-grow: 1;
          border-top: 1px solid #e2e8f0;
        }
        
        .gallery-content > * {
          margin-bottom: 1rem;
        }
        
        .gallery-title {
          font-size: 2rem;
          text-transform: uppercase;
          color: #1e293b;
          font-weight: bold;
        }
        
        .gallery-secondary {
          color: #64748b;
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        .gallery-description {
          line-height: 1.6;
          color: #475569;
          font-size: 1rem;
        }
        
        .gallery-header {
          background: white;
          color: #1e293b;
          padding: 60px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .gallery-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(30,41,59,0.05)"/><circle cx="75" cy="75" r="1" fill="rgba(30,41,59,0.05)"/><circle cx="50" cy="10" r="0.5" fill="rgba(30,41,59,0.03)"/><circle cx="20" cy="80" r="0.5" fill="rgba(30,41,59,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }
        
        .gallery-header-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .gallery-main-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #1e293b;
          text-shadow: none;
        }
        
        .gallery-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 0;
          color: #64748b;
          font-family: 'Devanagari', serif;
        }
        
        @media (max-width: 768px) {
          .gallery-header {
            padding: 40px 20px;
          }
          
          .gallery-main-title {
            font-size: 2.2rem;
          }
          
          .gallery-subtitle {
            font-size: 1.4rem;
          }
          
          .gallery-grid {
            padding: 40px 30px;
          }
        }
        
        @media (max-width: 480px) {
          .gallery-grid {
            padding: 40px 20px;
          }
        }
      `}</style>

      <div className="gallery-app">
        {/* Gallery Header Section - Title Only */}
        <div className="gallery-header">
          <div className="gallery-header-content">
            <h1 className="gallery-main-title">Our Gallery</h1>
            <h2 className="gallery-subtitle">हाम्रो ग्यालरी</h2>
          </div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item" data-title="Women Empowerment Program" data-secondary="सशक्तिकरण कार्यक्रम" data-text="ग्रामीण नारी उत्थान संघ हरिपुरले महिलाहरूको सशक्तिकरणका लागि विभिन्न कार्यक्रमहरू सञ्चालन गर्दै आएको छ। यी कार्यक्रमहरूले महिलाहरूलाई आर्थिक रूपमा स्वावलम्बी बनाउन मद्दत गर्छ।">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop" alt="Women Empowerment" />
          </div>
          <div className="gallery-item" data-title="Skill Development Training" data-secondary="सीप विकास तालिम" data-text="हाम्रो संस्थाले ग्रामीण महिलाहरूलाई विभिन्न सीपहरू सिकाउने कार्यक्रम सञ्चालन गर्छ। यसमा सिलाई, बुनाई, कृषि र व्यवसायिक सीपहरू समावेश छन्।">
            <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop" alt="Skill Training" />
          </div>
          <div className="gallery-item" data-title="Community Development" data-secondary="समुदायिक विकास" data-text="समुदायिक विकासका लागि हामीले स्थानीय समुदायसँग मिलेर काम गर्छौं। यसले समुदायमा सकारात्मक परिवर्तन ल्याउन मद्दत गर्छ।">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop" alt="Community Development" />
          </div>
          <div className="gallery-item" data-title="Education Programs" data-secondary="शिक्षा कार्यक्रम" data-text="शिक्षाको क्षेत्रमा हामीले साक्षरता कक्षा, बाल शिक्षा र वयस्क शिक्षाका कार्यक्रमहरू सञ्चालन गर्छौं। यसले समुदायमा शिक्षाको स्तर बढाउँछ।">
            <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop" alt="Education Programs" />
          </div>
          <div className="gallery-item" data-title="Health Awareness" data-secondary="स्वास्थ्य चेतना" data-text="स्वास्थ्य चेतना कार्यक्रमअन्तर्गत हामीले मातृ स्वास्थ्य, बाल स्वास्थ्य र सामान्य स्वास्थ्य सम्बन्धी जानकारी प्रदान गर्छौं।">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop" alt="Health Awareness" />
          </div>
          <div className="gallery-item" data-title="Agricultural Support" data-secondary="कृषि सहयोग" data-text="कृषि क्षेत्रमा आधुनिक प्रविधि र उन्नत बीउ बिजनका बारेमा जानकारी दिएर किसानहरूलाई सहयोग गर्छौं।">
            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop" alt="Agricultural Support" />
          </div>
          <div className="gallery-item" data-title="Microfinance Program" data-secondary="लघुवित्त कार्यक्रम" data-text="महिलाहरूको आर्थिक सशक्तिकरणका लागि लघुवित्त कार्यक्रम सञ्चालन गर्छौं। यसले उनीहरूलाई सानो व्यवसाय सुरु गर्न मद्दत गर्छ।">
            <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop" alt="Microfinance" />
          </div>
          <div className="gallery-item" data-title="Cooperative Formation" data-secondary="सहकारी गठन" data-text="महिला सहकारी संस्थाहरूको गठन र सञ्चालनमा सहयोग गर्छौं। यसले सामूहिक रूपमा काम गर्न प्रेरणा दिन्छ।">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop" alt="Cooperative" />
          </div>
          <div className="gallery-item" data-title="Leadership Training" data-secondary="नेतृत्व विकास" data-text="महिला नेतृत्व विकासका लागि विशेष तालिम कार्यक्रम सञ्चालन गर्छौं। यसले महिलाहरूलाई नेतृत्व क्षमता विकास गर्न मद्दत गर्छ।">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Leadership Training" />
          </div>
          <div className="gallery-item" data-title="Digital Literacy" data-secondary="डिजिटल साक्षरता" data-text="आजको डिजिटल युगमा महिलाहरूलाई कम्प्युटर र इन्टरनेटको प्रयोग सिकाउने कार्यक्रम सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" alt="Digital Literacy" />
          </div>
          <div className="gallery-item" data-title="Nutrition Program" data-secondary="पोषण कार्यक्रम" data-text="मातृ र शिशु पोषणका बारेमा जानकारी दिने र पोषणयुक्त खाना पकाउने तरिका सिकाउने कार्यक्रम सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop" alt="Nutrition Program" />
          </div>
          <div className="gallery-item" data-title="Environmental Conservation" data-secondary="वातावरण संरक्षण" data-text="वातावरण संरक्षणका लागि वृक्षारोपण, फोहोर व्यवस्थापन र सफाई अभियान जस्ता कार्यक्रमहरू सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop" alt="Environment" />
          </div>
          <div className="gallery-item" data-title="Youth Development" data-secondary="युवा विकास" data-text="युवाहरूको क्षमता विकास र रोजगारीका अवसर सिर्जना गर्ने कार्यक्रमहरू सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop" alt="Youth Development" />
          </div>
          <div className="gallery-item" data-title="Disaster Preparedness" data-secondary="विपद् तयारी" data-text="प्राकृतिक विपदका समयमा समुदायलाई तयार राख्न र राहत कार्यमा सहयोग गर्ने कार्यक्रम सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop" alt="Disaster Preparedness" />
          </div>
          <div className="gallery-item" data-title="Cultural Preservation" data-secondary="संस्कृति संरक्षण" data-text="स्थानीय संस्कृति, भाषा र परम्पराको संरक्षण र प्रवर्धनका लागि विभिन्न कार्यक्रमहरू आयोजना गर्छौं।">
            <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop" alt="Cultural Preservation" />
          </div>
          <div className="gallery-item" data-title="Legal Awareness" data-secondary="कानुनी चेतना" data-text="महिला अधिकार र कानुनी जानकारीका बारेमा चेतना फैलाउने कार्यक्रम सञ्चालन गर्छौं।">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop" alt="Legal Awareness" />
          </div>
          <div className="gallery-item" data-title="Handicraft Training" data-secondary="हस्तकला तालिम" data-text="परम्परागत हस्तकला र आधुनिक डिजाइनको तालिम दिएर महिलाहरूलाई आर्थिक रूपमा सशक्त बनाउँछौं।">
            <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop" alt="Handicraft" />
          </div>
          <div className="gallery-item" data-title="Water & Sanitation" data-secondary="पानी र सरसफाइ" data-text="स्वच्छ खानेपानी र सरसफाइका बारेमा जानकारी दिने र सम्बन्धित पूर्वाधार निर्माणमा सहयोग गर्छौं।">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop" alt="Water Sanitation" />
          </div>
          <div className="gallery-item" data-title="Community Events" data-secondary="सामुदायिक कार्यक्रम" data-text="समुदायिक एकताका लागि विभिन्न सांस्कृतिक र सामाजिक कार्यक्रमहरू आयोजना गर्छौं।">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop" alt="Community Events" />
          </div>
          <div className="gallery-item" data-title="Success Stories" data-secondary="सफलताका कथा" data-text="हाम्रा कार्यक्रमबाट लाभान्वित भएका महिलाहरूका प्रेरणादायक सफलताका कथाहरू साझा गर्छौं।">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop" alt="Success Stories" />
          </div>
          <div className="gallery-item" data-title="Partnership Programs" data-secondary="साझेदारी कार्यक्रम" data-text="अन्य संस्थाहरूसँग साझेदारी गरेर सञ्चालन गरिने विभिन्न विकास कार्यक्रमहरूको तस्बिरहरू।">
            <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop" alt="Partnership" />
          </div>
          <div className="gallery-item" data-title="Volunteer Activities" data-secondary="स्वयंसेवक गतिविधि" data-text="स्वयंसेवकहरूको सहयोगमा सञ्चालन हुने विभिन्न सामुदायिक सेवाका गतिविधिहरू।">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop" alt="Volunteer Activities" />
          </div>
          <div className="gallery-item" data-title="Training Workshops" data-secondary="तालिम कार्यशाला" data-text="विभिन्न विषयहरूमा आयोजना गरिने तालिम कार्यशालाहरूका तस्बिरहरू र सहभागीहरूका अनुभवहरू।">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop" alt="Training Workshops" />
          </div>
          <div className="gallery-item" data-title="Annual Programs" data-secondary="वार्षिक कार्यक्रम" data-text="हरेक वर्ष आयोजना गरिने विशेष कार्यक्रमहरू र उत्सवहरूका यादगार क्षणहरू।">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop" alt="Annual Programs" />
          </div>
        </div>
      </div>

      <div className="gallery-detail">
        <img alt="" />
        <div className="gallery-content">
          <div className="gallery-title">Placeholder title</div>
          <div className="gallery-secondary">Placeholder secondary</div>
          <div className="gallery-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </div>
    </div>
  );
}
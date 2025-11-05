import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import oneimg from '../assets/HOME/6691895968bbd612d571a566_66574b85211fe13a5f88dbf9_Resources – shifting paradigm -banner (1) (1).avif';
import twoimg from '../assets/HOME/665691bd6db48663245503c1_Resources - rethink your approach - thumb.avif';
import threeimg from '../assets/HOME/665690b4f13ba521b118f6d1_Resources - kinship - thumb.avif';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  TEAL: '#00D4AA',
  LIGHT_TEAL: '#E8F4F3'
};

const WalmartTechSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Walmart's Retail Rewired Report India 2025",
      date: 'Sept. 23, 2025',
      description: 'Read on to learn how Indian shoppers are adapting to an increasingly digital retail landscape.',
      bgColor: '#A8D5F0',
      image: oneimg
    },
    {
      title: "Inside the network powering Walmart",
      date: 'Sept 15, 2025',
      description: "Learn more about the digital backbone supporting Walmart's operations.",
      bgColor: '#7BA7D4',
      image: twoimg
    },
    {
      title: "From models to agents: A new era of intelligent systems at Walmart",
      date: 'Aug. 29, 2025',
      description: "New agentic capabilities represent a key step in our ongoing transformation.",
      bgColor: '#0A4B9E',
      image: threeimg
    }
  ];

  const logos = [
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600%20(1).svg", alt: "coursera logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893d1_Layer_1%20(2).svg", alt: "mastercard logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893fa_ViacomCBS%20(2).svg", alt: "viacom cbs logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec8940e_github-2%20(1).svg", alt: "github logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89435_Casper_Sleep_logo%20(2).svg", alt: "casper logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89474_Cloudflare_Logo%20(2).svg", alt: "cloudflare logo" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <>
      {/* Walmart Tech Cards Section */}
      <div style={{ 
        backgroundColor: '#F5F5F5',
        padding: '40px 20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }} className="sm:p-16 lg:p-20">
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="w-full lg:flex-shrink-0 lg:w-96">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight mb-6 sm:mb-8" style={{ 
                color: UI_CONSTANTS.DARK,
                letterSpacing: '-0.5px'
              }}>
                Future-ready digital transformation starts here
              </h1>
              
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ 
                color: UI_CONSTANTS.DARK
              }}>
                At Walmart Global Tech, we work at the forefront of cutting-edge technologies inspired by the vision of transforming retail tech. As a people-led and tech-powered organization, we drive innovations that impact millions of lives globally. Our associates empower us with innovative solutions that power the world's leading retailer, driving digital solutions that keep us resilient and future-ready.
              </p>

              <a href="#" style={{ 
                color: '#0071DC',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Learn more
              </a>
            </div>

            {/* Right Cards Section */}
            <div className="w-full lg:flex-1 relative">
              <div className="flex gap-4 sm:gap-5 overflow-hidden">
                {cards.map((card, index) => {
                  const position = (index - currentSlide + cards.length) % cards.length;
                  const isVisible = position < 3;
                  
                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="flex-shrink-0 w-full sm:w-80 lg:w-72"
                      style={{
                        backgroundColor: hoveredCard === index ? UI_CONSTANTS.DARK : UI_CONSTANTS.WHITE,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        opacity: isVisible ? 1 : 0,
                        transform: `translateX(${-currentSlide * 100}%)`,
                        display: isVisible ? 'flex' : 'none',
                        flexDirection: 'column',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                        color: hoveredCard === index ? UI_CONSTANTS.WHITE : UI_CONSTANTS.DARK
                      }}
                    >
                      {/* Card Image */}
                      <div style={{
                        width: '100%',
                        height: '200px',
                        overflow: 'hidden'
                      }}>
                        <img
                          src={card.image}
                          alt={card.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                            transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div style={{ 
                        padding: '24px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'transparent'
                      }}>
                        <h3 style={{ 
                          fontSize: '20px',
                          fontWeight: '600',
                          margin: '0 0 12px 0',
                          lineHeight: '1.3'
                        }}>
                          {card.title}
                        </h3>
                        
                        <p style={{ 
                          fontSize: '14px',
                          margin: '0 0 20px 0',
                          lineHeight: '1.6'
                        }}>
                          <span style={{ fontWeight: '600' }}>{card.date}</span> - {card.description}
                        </p>

                        <button style={{ 
                          marginTop: 'auto',
                          padding: '10px 28px',
                          border: '2px solid ' + (hoveredCard === index ? UI_CONSTANTS.WHITE : UI_CONSTANTS.DARK),
                          backgroundColor: 'transparent',
                          borderRadius: '30px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: hoveredCard === index ? UI_CONSTANTS.WHITE : UI_CONSTANTS.DARK,
                          cursor: 'pointer',
                          alignSelf: 'flex-start',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = hoveredCard === index ? UI_CONSTANTS.WHITE : UI_CONSTANTS.DARK;
                          e.currentTarget.style.color = hoveredCard === index ? UI_CONSTANTS.DARK : UI_CONSTANTS.WHITE;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = hoveredCard === index ? UI_CONSTANTS.WHITE : UI_CONSTANTS.DARK;
                        }}>
                          See more
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div style={{ 
                display: 'flex',
                gap: '12px',
                justifyContent: 'flex-end',
                marginTop: '32px'
              }}>
                <button
                  onClick={prevSlide}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid ' + UI_CONSTANTS.DARK,
                    backgroundColor: UI_CONSTANTS.WHITE,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = UI_CONSTANTS.DARK;
                    e.currentTarget.style.color = UI_CONSTANTS.WHITE;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = UI_CONSTANTS.WHITE;
                    e.currentTarget.style.color = UI_CONSTANTS.DARK;
                  }}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid ' + UI_CONSTANTS.DARK,
                    backgroundColor: UI_CONSTANTS.WHITE,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = UI_CONSTANTS.DARK;
                    e.currentTarget.style.color = UI_CONSTANTS.WHITE;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = UI_CONSTANTS.WHITE;
                    e.currentTarget.style.color = UI_CONSTANTS.DARK;
                  }}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Carousel Section */}
      <section style={{ 
        backgroundColor: UI_CONSTANTS.WHITE,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }} className="py-12 sm:py-14 lg:py-16">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            
            {/* LEFT SIDE - TEXT */}
            <div className="w-full sm:flex-shrink-0 sm:w-72 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug" style={{ 
                color: '#6B7280',
                letterSpacing: '-0.3px'
              }}>
                Tech leaders trust <span style={{ fontWeight: '700', color: '#374151' }}>KIAQ</span> to quickly<br />
                source qualified talent
              </h2>
            </div>

            {/* RIGHT SIDE - LOGO CAROUSEL */}
            <div className="w-full sm:flex-1 relative overflow-hidden flex items-center">
              {/* Left Gradient */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '64px',
                height: '100%',
                background: 'linear-gradient(to right, white, transparent)',
                zIndex: 10
              }}></div>

              {/* Scrolling Logos */}
              <div className="flex animate-scroll">
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0 mx-6 sm:mx-8 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-5 sm:h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                      onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
                    />
                  </div>
                ))}
              </div>

              {/* Right Gradient */}
              <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '64px',
                height: '100%',
                background: 'linear-gradient(to left, white, transparent)',
                zIndex: 10
              }}></div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 9s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default WalmartTechSection;

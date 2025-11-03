import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  TEAL: '#00D4AA',
  LIGHT_TEAL: '#E8F4F3'
};

const WalmartTechSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    {
      title: "Walmart's Retail Rewired Report India 2025",
      date: 'Sept. 23, 2025',
      description: 'Read on to learn how Indian shoppers are adapting to an increasingly digital retail landscape.',
      bgColor: '#A8D5F0'
    },
    {
      title: "Inside the network powering Walmart",
      date: 'Sept 15, 2025',
      description: "Learn more about the digital backbone supporting Walmart's operations.",
      bgColor: '#7BA7D4'
    },
    {
      title: "From models to agents: A new era of intelligent systems at Walmart",
      date: 'Aug. 29, 2025',
      description: "New agentic capabilities represent a key step in our ongoing transformation.",
      bgColor: '#0A4B9E'
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
        padding: '80px 60px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
            {/* Left Content */}
            <div style={{ flex: '0 0 380px' }}>
              <h1 style={{ 
                fontSize: '42px',
                lineHeight: '1.2',
                color: UI_CONSTANTS.DARK,
                fontWeight: '400',
                margin: '0 0 32px 0',
                letterSpacing: '-0.5px'
              }}>
                Future-ready digital transformation starts here
              </h1>
              
              <p style={{ 
                fontSize: '16px',
                lineHeight: '1.7',
                color: UI_CONSTANTS.DARK,
                margin: '0 0 32px 0',
                fontWeight: '400'
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
            <div style={{ flex: '1', position: 'relative' }}>
              <div style={{ 
                display: 'flex',
                gap: '20px',
                overflow: 'hidden'
              }}>
                {cards.map((card, index) => {
                  const position = (index - currentSlide + cards.length) % cards.length;
                  const isVisible = position < 3;
                  
                  return (
                    <div
                      key={index}
                      style={{
                        flex: '0 0 calc(33.333% - 14px)',
                        backgroundColor: UI_CONSTANTS.WHITE,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease',
                        opacity: isVisible ? 1 : 0,
                        transform: `translateX(${-currentSlide * 100}%)`,
                        display: isVisible ? 'flex' : 'none',
                        flexDirection: 'column',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                      }}
                    >
                      {/* Image Container with Colored Background */}
                      <div style={{
                        backgroundColor: card.bgColor,
                        padding: '32px 24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '180px',
                        borderRadius: '12px 12px 0 0'
                      }}>
                        {/* Laptop Illustration */}
                        <div style={{
                          width: '200px',
                          position: 'relative'
                        }}>
                          {/* Laptop Screen */}
                          <div style={{
                            backgroundColor: '#2C2C2C',
                            borderRadius: '8px 8px 0 0',
                            padding: '12px',
                            border: '8px solid #404040',
                            borderBottom: 'none',
                            position: 'relative'
                          }}>
                            {/* Screen Content */}
                            <div style={{
                              backgroundColor: '#0066FF',
                              borderRadius: '4px',
                              padding: '16px',
                              height: '110px',
                              position: 'relative',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between'
                            }}>
                              {/* Close button */}
                              <div style={{
                                position: 'absolute',
                                top: '8px',
                                right: '8px',
                                width: '16px',
                                height: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                <div style={{
                                  width: '12px',
                                  height: '2px',
                                  backgroundColor: 'rgba(255,255,255,0.6)',
                                  transform: 'rotate(45deg)',
                                  position: 'absolute'
                                }}></div>
                                <div style={{
                                  width: '12px',
                                  height: '2px',
                                  backgroundColor: 'rgba(255,255,255,0.6)',
                                  transform: 'rotate(-45deg)',
                                  position: 'absolute'
                                }}></div>
                              </div>

                              {/* Title */}
                              <div style={{
                                color: 'rgba(255,255,255,0.9)',
                                fontSize: '14px',
                                fontWeight: '600',
                                lineHeight: '1.3',
                                letterSpacing: '-0.3px'
                              }}>
                                Retail Rewired<br/>Report India
                              </div>

                              {/* Chart Bars */}
                              <div style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '6px',
                                height: '48px'
                              }}>
                                <div style={{
                                  width: '20px',
                                  height: '24px',
                                  backgroundColor: 'rgba(255,255,255,0.95)',
                                  borderRadius: '2px'
                                }}></div>
                                <div style={{
                                  width: '20px',
                                  height: '34px',
                                  backgroundColor: '#87CEEB',
                                  borderRadius: '2px'
                                }}></div>
                                <div style={{
                                  width: '20px',
                                  height: '46px',
                                  backgroundColor: '#1E90FF',
                                  borderRadius: '2px'
                                }}></div>
                              </div>
                            </div>
                          </div>

                          {/* Laptop Base */}
                          <div style={{
                            backgroundColor: '#B8B8B8',
                            height: '8px',
                            borderRadius: '0 0 12px 12px',
                            position: 'relative',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                          }}>
                            {/* Trackpad indicator */}
                            <div style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: '20px',
                              height: '2px',
                              backgroundColor: '#999',
                              borderRadius: '1px'
                            }}></div>
                          </div>

                          {/* Laptop Stand/Bottom */}
                          <div style={{
                            backgroundColor: '#999',
                            height: '4px',
                            width: '220px',
                            marginLeft: '-10px',
                            borderRadius: '0 0 8px 8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                          }}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ 
                        padding: '24px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: UI_CONSTANTS.WHITE
                      }}>
                        <h3 style={{ 
                          fontSize: '20px',
                          fontWeight: '600',
                          color: UI_CONSTANTS.DARK,
                          margin: '0 0 12px 0',
                          lineHeight: '1.3'
                        }}>
                          {card.title}
                        </h3>
                        
                        <p style={{ 
                          fontSize: '14px',
                          color: '#6B7280',
                          margin: '0 0 20px 0',
                          lineHeight: '1.6'
                        }}>
                          <span style={{ fontWeight: '600', color: UI_CONSTANTS.DARK }}>{card.date}</span> - {card.description}
                        </p>

                        <button style={{ 
                          marginTop: 'auto',
                          padding: '10px 28px',
                          border: '2px solid ' + UI_CONSTANTS.DARK,
                          backgroundColor: 'transparent',
                          borderRadius: '30px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: UI_CONSTANTS.DARK,
                          cursor: 'pointer',
                          alignSelf: 'flex-start',
                          transition: 'all 0.2s'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = UI_CONSTANTS.DARK;
                          e.currentTarget.style.color = UI_CONSTANTS.WHITE;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = UI_CONSTANTS.DARK;
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
        padding: '56px 0',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            
            {/* LEFT SIDE - TEXT */}
            <div style={{ flex: '0 0 300px' }}>
              <h2 style={{ 
                fontSize: '24px',
                fontWeight: '600',
                color: '#6B7280',
                lineHeight: '1.4',
                letterSpacing: '-0.3px'
              }}>
                Tech leaders trust <span style={{ fontWeight: '700', color: '#374151' }}>KIAQ</span> to quickly<br />
                source qualified talent
              </h2>
            </div>

            {/* RIGHT SIDE - LOGO CAROUSEL */}
            <div style={{ 
              flex: '1',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center'
            }}>
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
              <div style={{
                display: 'flex',
                animation: 'scroll 25s linear infinite'
              }}>
                {[...logos, ...logos].map((logo, index) => (
                  <div key={index} style={{
                    flexShrink: 0,
                    margin: '0 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{
                        height: '24px',
                        width: 'auto',
                        opacity: 0.7,
                        transition: 'opacity 0.3s'
                      }}
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
        `}</style>
      </section>
    </>
  );
};

export default WalmartTechSection;
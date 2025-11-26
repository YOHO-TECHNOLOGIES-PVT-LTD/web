// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import oneimg from '../assets/HOME/6691895968bbd612d571a566_66574b85211fe13a5f88dbf9_Resources – shifting paradigm -banner (1) (1).avif';
// import twoimg from '../assets/HOME/665691bd6db48663245503c1_Resources - rethink your approach - thumb.avif';
// import threeimg from '../assets/HOME/665690b4f13ba521b118f6d1_Resources - kinship - thumb.avif';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  orange: '#00D4AA',
  LIGHT_orange: '#E8F4F3'
};

const WalmartTechSection = () => {
  // const [ setCurrentSlide] = useState(0);
  // const [] = useState<number | null>(null);

  // const cards = [
  //   {
  //     title: "KIAQ Talent Intelligence Report 2025",
  //     date: 'Sept. 23, 2025',
  //     description: 'Read on to learn how Indian shoppers are adapting to an increasingly digital retail landscape.',
  //     bgColor: '#A8D5F0',
  //     image: oneimg
  //   },
  //   {
  //     title: "Inside KIAQ's Global Talent Network",
  //     date: 'Sept 15, 2025',
  //     description: "Discover how global companies are leveraging emerging market engineering talent to accelerate innovation and scale efficiently.",
  //     bgColor: '#7BA7D4',
  //     image: twoimg
  //   },
  //   {
  //     title: "The Future of Engineering: Intelligent, Distributed, Global",
  //     date: 'Aug. 29, 2025',
  //     description: "New agentic capabilities represent a key step in our ongoing transformation.",
  //     bgColor: '#0A4B9E',
  //     image: threeimg
  //   },
  //    {
  //     title: "KIAQ Talent Intelligence Report 2025",
  //     date: 'Sept. 23, 2025',
  //     description: 'Read on to learn how Indian shoppers are adapting to an increasingly digital retail landscape.',
  //     bgColor: '#A8D5F0',
  //     image: oneimg
  //   },
  // ];

  const logos = [
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600%20(1).svg", alt: "coursera logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893d1_Layer_1%20(2).svg", alt: "mastercard logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893fa_ViacomCBS%20(2).svg", alt: "viacom cbs logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec8940e_github-2%20(1).svg", alt: "github logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89435_Casper_Sleep_logo%20(2).svg", alt: "casper logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89474_Cloudflare_Logo%20(2).svg", alt: "cloudflare logo" }
  ];

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % cards.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  // };

  return (
    <>
      

      {/* Logo Carousel Section */}
      <section style={{ 
        backgroundColor: UI_CONSTANTS.WHITE,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }} className="py-8 sm:py-12 md:py-14 lg:py-16">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            
            {/* LEFT SIDE - TEXT */}
            <div className="w-full sm:flex-shrink-0 sm:w-72 md:w-80 lg:w-96 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug" style={{ 
                color: '#6B7280',
                letterSpacing: '-0.3px',
                lineHeight: '1.4'
              }}>
                Tech leaders trust <span style={{ fontWeight: '700', color: '#374151' }}>KIAQ</span> to quickly
                <br className="hidden sm:block" />
                <span className="sm:inline"> source qualified talent</span>
              </h2>
            </div>

            {/* RIGHT SIDE - LOGO CAROUSEL */}
            <div className="w-full sm:flex-1 relative overflow-hidden flex items-center" style={{ minHeight: '56px' }}>
              {/* Left Gradient */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '48px',
                height: '100%',
                background: 'linear-gradient(to right, white, transparent)',
                zIndex: 10
              }} className="sm:w-16"></div>

              {/* Scrolling Logos */}
              <div className="flex animate-scroll" style={{ 
                display: 'flex',
                alignItems: 'center',
                willChange: 'transform'
              }}>
                {[...logos, ...logos].map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      marginLeft: '2rem',
                      marginRight: '2rem',
                      minWidth: '100px'
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-auto opacity-70 hover:opacity-100 transition-opacity"
                      style={{
                        height: '28px',
                        maxWidth: '120px',
                        objectFit: 'contain'
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
                width: '48px',
                height: '100%',
                background: 'linear-gradient(to left, white, transparent)',
                zIndex: 10
              }} className="sm:w-16"></div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          @media (min-width: 640px) {
            .animate-scroll {
              animation: scroll 15s linear infinite;
            }
          }

          @media (min-width: 1024px) {
            .animate-scroll {
              animation: scroll 12s linear infinite;
            }
          }

          /* Pause animation on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>
    </>
  );
};

export default WalmartTechSection;
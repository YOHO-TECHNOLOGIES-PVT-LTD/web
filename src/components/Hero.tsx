import { useEffect, useState } from 'react';
import vd1 from "../assets/Home1/hv.mp4";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="section_image-hero">
      <div className="z-index-20">
        <div className="padding-global">
          <div className="spacer-small sm:spacer-medium"></div>
          <div className="spacer-large sm:spacer-huge"></div>
          <div className="spacer-medium sm:spacer-xlarge"></div>

          <div className="container-large">
            <div className="block sm:hidden">
              <div className="spacer-medium"></div>
              <div className="spacer-medium"></div>
              <div className="spacer-medium"></div>
              <div className="spacer-medium"></div>
              <div className="spacer-medium"></div>
            </div>

            <div className="max-width-large">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white ${isLoaded ? 'animate-in' : ''}`}>
                Scaling with Confidence<br className="hidden sm:block" />Through Future-Ready Tech
              </h1>

              <div className="spacer-small"></div>

              <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white max-w-3xl ${isLoaded ? 'animate-in delay-300' : ''}`}>
                KIAQ connects global companies with top engineering talent from emerging markets. Our flexible hiring model helps you scale fast, cut costs, and build future-ready teams across AI, Data, Cloud, and Software Engineering.
              </p>

              <div>
                <div className="spacer-large"></div>
                <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isLoaded ? 'animate-in delay-600' : ''}`}>
                  <a href="/contact" className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-lg font-semibold text-sm sm:text-base text-center hover:bg-orange-600 transition-colors">
                    Build Your Team Faster
                  </a>
                  <a href="/about" className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-base text-center hover:bg-white hover:text-gray-900 transition-colors">
                    Explore KIAQ
                  </a>
                </div>
              </div>

              <div className="spacer-large"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND VIDEO + DARK OVERLAY */}
      <div className="image-hero_background-wrapper">
        <div className="hero-dark-overlay"></div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover image-hero_video"
        >
          <source src={vd1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* CUSTOM CSS */}
      <style>{`

        .section_image-hero {
          margin: 0 !important;
          padding: 0 !important;
          width: 100vw !important;
          margin-left: calc(-50vw + 50%) !important;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px !important;
          overflow: hidden;
        }

        /* Mobile specific adjustments */
        @media (max-width: 640px) {
          .section_image-hero {
            padding-top: 60px !important;
            min-height: 100svh;
            align-items: flex-start;
            padding-bottom: 40px !important;
          }
        }

        /* Tablet adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          .section_image-hero {
            padding-top: 70px !important;
            min-height: 100vh;
          }
        }

        .z-index-20 {
          position: relative;
          z-index: 20;
          width: 100%;
        }

        .padding-global {
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

        @media (min-width: 640px) {
          .padding-global {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .padding-global {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        @media (min-width: 1280px) {
          .padding-global {
            padding-left: 4rem;
            padding-right: 4rem;
          }
        }

        .container-large {
          max-width: 1280px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }

        .max-width-large {
          max-width: 960px;
        }

        @media (max-width: 640px) {
          .max-width-large {
            max-width: 100%;
          }
        }

        .image-hero_background-wrapper {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        /* Dark overlay */
        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: rgba(0,0,0,0.35);
          pointer-events: none;
        }

        @media (max-width: 640px) {
          .hero-dark-overlay {
            background: rgba(0,0,0,0.55);
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .hero-dark-overlay {
            background: rgba(0,0,0,0.45);
          }
        }

        .image-hero_video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          object-fit: cover;
          z-index: 1;
        }

        /* Mobile video optimization */
        @media (max-width: 640px) {
          .image-hero_video {
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }

        /* Tablet video optimization */
        @media (min-width: 641px) and (max-width: 1024px) {
          .image-hero_video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        }

        /* Portrait mode specific */
        @media (max-width: 640px) and (orientation: portrait) {
          .image-hero_video {
            width: auto;
            height: 100%;
            min-width: 100%;
          }
        }

        /* Landscape mode specific */
        @media (max-width: 896px) and (orientation: landscape) {
          .image-hero_video {
            width: 100%;
            height: auto;
            min-height: 100%;
          }
          .section_image-hero {
            min-height: 100vh;
          }
        }

        /* Spacers */
        .spacer-small { height: 1rem; }
        .spacer-medium { height: 2rem; }
        .spacer-large { height: 3rem; }

        @media (min-width: 640px) {
          .sm\\:spacer-medium { height: 2rem; }
          .sm\\:spacer-xlarge { height: 4rem; }
          .sm\\:spacer-huge { height: 5rem; }
        }

        @media (max-width: 639px) {
          .spacer-small { height: 0.75rem; }
          .spacer-medium { height: 1.5rem; }
          .spacer-large { height: 2rem; }
        }

        /* Animations */
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-300 { animation-delay: 0.3s; }
        .delay-600 { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Better text readability on mobile */
        @media (max-width: 640px) {
          h1 {
            line-height: 1.2;
            text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          }
          p {
            line-height: 1.6;
            text-shadow: 0 1px 4px rgba(0,0,0,0.3);
          }
        }

        /* Tablet text adjustments */
        @media (min-width: 641px) and (max-width: 1024px) {
          h1 {
            line-height: 1.3;
          }
          p {
            line-height: 1.7;
          }
        }

        /* Prevent horizontal overflow */
        * {
          box-sizing: border-box;
        }

        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          .section_image-hero {
            min-height: -webkit-fill-available;
          }
        }

      `}</style>
    </div>
  );
}
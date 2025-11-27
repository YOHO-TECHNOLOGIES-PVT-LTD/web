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
        <div className="padding-global" style={{paddingLeft: 0, paddingRight: 0}}>
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
            <div className="max-width-large" style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
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
                  <a href="/contact" className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-lg font-semibold text-sm sm:text-base text-center hover:bg-orange-600 transition-colors">Build Your Team Faster</a>
                  <a href="/about" className="px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-base text-center hover:bg-white hover:text-gray-900 transition-colors">Explore KIAQ</a>
                </div>
              </div>
              <div className="spacer-large"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-hero_background-wrapper">
        <div className="image-hero_background-image-wrapper">
          <div className="image-hero_bg-image-wrapper">
            <div className="image-hero_bg-image-gradient-group">
              <img 
                width="2876" 
                height="1366" 
                alt="Global team collaborating" 
                src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign.avif" 
                className={`image-hero_bg-image-is-right ${isLoaded ? 'bg-animate' : ''}`}
                loading="eager"
                sizes="(max-width: 2876px) 100vw, 2876px"
                srcSet="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-500.avif 500w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-800.avif 800w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-1080.avif 1080w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-1600.avif 1600w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign.avif 2876w"
              />
            </div>
          </div>
          <div className="image-hero_bg-video">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover'
              }}
            >
              <source src={vd1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      <style>{`
        .section_image-hero {
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
          border: none !important;
          width: 100vw !important;
          margin-left: calc(-50vw + 50%) !important;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px !important;
        }

        @media (max-width: 640px) {
          .section_image-hero {
            min-height: 100vh;
            padding-top: 64px !important;
          }
        }

        .z-index-20 {
          position: relative;
          z-index: 20;
          width: 100%;
        }

        .image-hero_background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          overflow: hidden;
        }

        .image-hero_background-image-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .image-hero_bg-image-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .image-hero_bg-image-gradient-group {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .image-hero_bg-image-is-right {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 640px) {
          .image-hero_bg-image-is-right {
            object-position: 60% center;
          }
        }

        .image-hero_bg-video {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .section_image-hero::before,
        .section_image-hero::after,
        .image-hero_background-wrapper::before,
        .image-hero_background-wrapper::after,
        .image-hero_background-image-wrapper::before,
        .image-hero_background-image-wrapper::after,
        .image-hero_bg-image-wrapper::before,
        .image-hero_bg-image-wrapper::after,
        .image-hero_bg-image-gradient-group::before,
        .image-hero_bg-image-gradient-group::after,
        .image-hero_bg-video::before,
        .image-hero_bg-video::after {
          display: none !important;
          content: none !important;
        }
        .image-hero_background-wrapper,
        .image-hero_background-image-wrapper,
        .image-hero_bg-image-wrapper,
        .image-hero_bg-image-gradient-group {
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
          border: none !important;
        }

        .max-width-large {
          max-width: 1200px;
          width: 100%;
        }

        @media (min-width: 1024px) {
          .max-width-large {
            padding-left: 3rem !important;
            padding-right: 3rem !important;
          }
        }

        @media (min-width: 1280px) {
          .max-width-large {
            padding-left: 4rem !important;
            padding-right: 4rem !important;
          }
        }

        .container-large {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding-left: 0;
          padding-right: 0;
        }

        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-animate {
          animation: zoomIn 1.2s ease-out;
        }

        @keyframes zoomIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        .spacer-small {
          height: 1rem;
        }

        .spacer-medium {
          height: 2rem;
        }

        .spacer-large {
          height: 3rem;
        }

        @media (min-width: 640px) {
          .sm\\:spacer-medium {
            height: 2rem;
          }

          .sm\\:spacer-huge {
            height: 5rem;
          }

          .sm\\:spacer-xlarge {
            height: 4rem;
          }
        }

        @media (max-width: 640px) {
          .spacer-small {
            height: 0.75rem;
          }

          .spacer-medium {
            height: 1.5rem;
          }

          .spacer-large {
            height: 2rem;
          }
        }

        /* Ensure content is readable on all devices */
        @media (max-width: 768px) {
          .max-width-large {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1023px) {
          .max-width-large {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
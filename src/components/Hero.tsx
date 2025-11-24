import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="section_image-hero">
      <div className="z-index-20">
        <div className="padding-global mt-20" style={{paddingLeft: 0, paddingRight: 0}}>
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
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white ${isLoaded ? 'animate-in' : ''}`}>
                Accelerate Your Business with<br className="hidden sm:block" /> Smarter Tech Talent
              </h1>
              <div className="spacer-small"></div>
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed text-white ${isLoaded ? 'animate-in delay-300' : ''}`}>
               KIAQ connects global companies with top engineering talent from emerging markets. Our flexible hiring model helps you scale fast, cut costs, and build future-ready teams across AI, Data, Cloud, and Software Engineering.
              </p>
              <div>
                <div className="spacer-large"></div>
                <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'animate-in delay-600' : ''}`}>
                  <a href="/contact" className="px-6 py-3 sm:px-8 sm:py-4 bg-teal-500 text-white rounded-lg font-semibold text-center hover:bg-teal-600 transition-colors">Build Your Team Faster</a>
                  <a href="/about" className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-white text-white rounded-lg font-semibold text-center hover:bg-white hover:text-gray-900 transition-colors">Explore KIAQ</a>
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
          <div className="image-hero_bg-video w-embed w-iframe">
            <iframe 
              src="https://play.vidyard.com/TrGTy95HjNi21m7LAtH5e8?autoplay=1&embed_button=0&viral_sharing=0&loop=1" 
              scrolling="no" 
              frameBorder="0" 
              allowTransparency={true} 
              allowFullScreen 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '177.77777778vh',
                height: '56.25vw',
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover'
              }}
            />
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
      `}</style>
    </div>
  );
}

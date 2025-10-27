import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="section_image-hero">
      <div className="z-index-20">
        <div className="padding-global" style={{paddingLeft: 0, paddingRight: 0}}>
          <div className="spacer-medium"></div>
          <div className="spacer-huge"></div>
          <div className="spacer-xlarge"></div>
          <div className="container-large">
            <div className="is-show-mobile">
              <div className="spacer-huge"></div>
              <div className="spacer-huge"></div>
              <div className="spacer-huge"></div>
              <div className="spacer-huge"></div>
              <div className="spacer-huge"></div>
            </div>
            <div className="max-width-large">
              <h1 className={`heading-style-h1 ${isLoaded ? 'animate-in' : ''}`}>
                Build better DevOps, Data,<br />and AI solutions faster
              </h1>
              <div className="spacer-small"></div>
              <p className={`text-size-large ${isLoaded ? 'animate-in delay-300' : ''}`}>
                There are more than 150000 highly skilled tech professionals on our roster. Most in largely untapped markets. Ready to be placed quickly and effectively.
              </p>
              <div>
                <div className="spacer-large"></div>
                <div className={`button-group ${isLoaded ? 'animate-in delay-600' : ''}`}>
                  <a href="/request-demo" className="button w-button">Request a Consultation</a>
                  <a href="/adaptive-hiring" className="button is-link is-alternate w-button">What is Adaptive Nim?</a>
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
                alt="headshot of a smiling woman" 
                src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign.avif" 
                className={`image-hero_bg-image-is-right ${isLoaded ? 'bg-animate' : ''}`}
                loading="eager"
                sizes="(max-width: 2876px) 100vw, 2876px"
                srcSet="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-500.avif 500w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-800.avif 800w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-1080.avif 1080w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign-p-1600.avif 1600w, https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/67070a24904046b992c7fc3d_Brand%20Campaign.avif 2876w"
              />
              {/* Gradient overlay removed */}
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
          {/* Video overlay removed */}
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
import { useState, useEffect, useRef } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

import imgfocus from '../assets/HOME/Gemini_Generated_Image_x9vr37x9vr37x9vr.png';

export default function FocusScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
    {
      title: "Connect with Africa's finest tech minds.",
      description: "Access a curated network of highly skilled African professionals specializing in DevOps, Data Science, and AI. Our talent is rigorously vetted and ready to drive your technology initiatives forward."
    },
    {
      title: "Bridge continents, build solutions.",
      description: "KIAQ connects global companies with Africa's top tech talent, creating partnerships that transcend geographical boundaries and deliver exceptional results."
    },
    {
      title: "Expertise that scales with your vision.",
      description: "Whether you need DevOps automation, data insights, or AI implementation, our African specialists bring world-class expertise to your most challenging projects."
    },
    {
      title: "Seamless collaboration across time zones.",
      description: "Our professionals are experienced in global collaboration, ensuring smooth communication and project delivery regardless of geographical distance."
    },
    {
      title: "Innovation powered by diversity.",
      description: "Tap into Africa's rich pool of technical talent and bring fresh perspectives to your technology challenges. Experience innovation through global collaboration."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetHeight = ref.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveIndex(index);
          }
        }
      });
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Left Content Column - Scrollable */}
          <div className="w-full lg:w-1/2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                ref={el => { contentRefs.current[index] = el }}
                className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh] flex items-center py-4"
              >
                <div className="w-full max-w-xl">
                  <h3 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-all duration-500"
                    style={{ 
                      color: UI_CONSTANTS.DARK,
                      opacity: activeIndex === index ? 1 : 0.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="text-base sm:text-lg leading-relaxed transition-all duration-500"
                    style={{ 
                      color: UI_CONSTANTS.GRAY,
                      opacity: activeIndex === index ? 1 : 0.3,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Fixed Image Column */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-16 sm:top-24 lg:top-32 h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <img 
                src={imgfocus}
                alt="Global Tech Talent Connection"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16 sm:mt-24 lg:mt-32">
          <button 
            className="px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
            style={{ 
              backgroundColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.WHITE
            }}
          >
            <span className="hidden sm:inline">Connect with African Tech Talent</span><span className="sm:hidden">Connect with Talent</span>
          </button>
        </div>
      </div>
    </section>
  );
}
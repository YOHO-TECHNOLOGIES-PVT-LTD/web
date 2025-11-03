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

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:flex lg:gap-16">
          {/* Left Content Column - Scrollable */}
          <div className="lg:w-1/2">
            {features.map((feature, index) => (
              <div 
                key={index} 
                ref={el => { contentRefs.current[index] = el }}
                className="min-h-[75vh] flex items-center py-4"
              >
                <div className="w-full max-w-xl">
                  <h3 
                    className="text-4xl lg:text-5xl font-bold mb-4 leading-tight transition-all duration-500"
                    style={{ 
                      color: UI_CONSTANTS.DARK,
                      opacity: activeIndex === index ? 1 : 0.3,
                    }}
                  >
                    {feature.title}
                  </h3>
                  
                  <p 
                    className="text-lg leading-relaxed transition-all duration-500"
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
            <div className="sticky top-32 h-[600px] flex items-center justify-center">
              <img 
                src={imgfocus}
                alt="Global Tech Talent Connection"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-32">
          <button 
            className="px-12 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
            style={{ 
              backgroundColor: UI_CONSTANTS.PRIMARY,
              color: UI_CONSTANTS.WHITE
            }}
          >
            Connect with African Tech Talent
          </button>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect, useRef } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

// import imgfocus from '../assets/HOME/Gemini_Generated_Image_x9vr37x9vr37x9vr.png';
import imgfocus from "../assets/660dcc7f45ad8881324199b5_665edf960bfc2a8fb317836a_Make_work_happen_fast-transcode.webm";

export default function FocusScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
    {
      title: "Advanced AI-Powered Systems Designed to Transform Customer Interaction",
      description: "Our advanced AI-driven chatbots and automation tools are designed to simplify operations, automate routine workflows, and enhance customer engagement."
    },
    {
      title: "Custom Software Built for Real-World Performance",
      description: "We design, develop, and deploy tailored software solutions that solve real business challenges. Whether it’s a web app, mobile app, or enterprise platform, our development process ensures reliability, scalability, and seamless performance."
    },
    {
      title: "Transforming Data Into Intelligent Decisions",
      description: "Leveraging the power of AI, we help businesses unlock smarter decision-making, automate complex processes, and predict future trends with precision."
    },
    {
      title: "Scalable, Secure & Cost-Efficient Cloud Infrastructure.",
      description: "We design and manage cloud environments that support business innovation, ensure seamless scalability, and reduce operational costs."
    },
    {
      title: "Strategic Technology Guidance for Sustainable Growth.",
      description: "From system optimization to long-term digital strategy, we help you make informed technology decisions that maximize efficiency and future-proof your operations."
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
          {/* Mobile/Tablet Video - Shows First on Mobile */}
          <div className="lg:hidden w-full mb-8 sm:mb-12">
            <div className="w-full max-w-md mx-auto">
              <video 
                src={imgfocus}
                className="w-full h-auto object-contain rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

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
          
          {/* Right Fixed Image Column - Desktop Only */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="sticky top-16 sm:top-24 lg:top-32 h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <video 
                src={imgfocus}
                className="max-w-full max-h-full object-contain"
                autoPlay
                loop
                muted
                playsInline
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
            <span className="hidden sm:inline">Connect with Global Tech Talent</span><span className="sm:hidden">Connect with Talent</span>
          </button>
        </div>
      </div>
    </section>
  );
}
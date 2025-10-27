import { useState, useEffect, useRef } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

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

  const WorldMapVisualization = () => {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 animate-pulse" />
        </div>
        
        <svg viewBox="0 0 800 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="dotGradient">
              <stop offset="0%" stopColor={UI_CONSTANTS.PRIMARY} stopOpacity="1"/>
              <stop offset="100%" stopColor={UI_CONSTANTS.PRIMARY} stopOpacity="0.4"/>
            </radialGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* North America */}
          <g transform="translate(120, 120)">
            {[...Array(40)].map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <circle
                  key={`na-${i}`}
                  cx={col * 12}
                  cy={row * 12}
                  r="2"
                  fill="url(#dotGradient)"
                  opacity={activeIndex === 0 ? 0.9 : 0.3}
                  className="transition-all duration-700"
                />
              );
            })}
          </g>

          {/* Europe */}
          <g transform="translate(380, 100)">
            {[...Array(35)].map((_, i) => {
              const row = Math.floor(i / 7);
              const col = i % 7;
              return (
                <circle
                  key={`eu-${i}`}
                  cx={col * 11}
                  cy={row * 11}
                  r="2"
                  fill="url(#dotGradient)"
                  opacity={activeIndex === 1 ? 0.9 : 0.3}
                  className="transition-all duration-700"
                />
              );
            })}
          </g>

          {/* Asia */}
          <g transform="translate(480, 130)">
            {[...Array(60)].map((_, i) => {
              const row = Math.floor(i / 10);
              const col = i % 10;
              return (
                <circle
                  key={`as-${i}`}
                  cx={col * 11}
                  cy={row * 11}
                  r="2"
                  fill="url(#dotGradient)"
                  opacity={activeIndex === 2 ? 0.9 : 0.3}
                  className="transition-all duration-700"
                />
              );
            })}
          </g>

          {/* Africa */}
          <g transform="translate(370, 260)">
            {[...Array(40)].map((_, i) => {
              const row = Math.floor(i / 8);
              const col = i % 8;
              return (
                <circle
                  key={`af-${i}`}
                  cx={col * 11}
                  cy={row * 12}
                  r="2"
                  fill="url(#dotGradient)"
                  opacity={activeIndex === 3 ? 0.9 : 0.3}
                  className="transition-all duration-700"
                />
              );
            })}
          </g>

          {/* South America */}
          <g transform="translate(200, 280)">
            {[...Array(30)].map((_, i) => {
              const row = Math.floor(i / 6);
              const col = i % 6;
              return (
                <circle
                  key={`sa-${i}`}
                  cx={col * 11}
                  cy={row * 13}
                  r="2"
                  fill="url(#dotGradient)"
                  opacity={activeIndex === 4 ? 0.9 : 0.3}
                  className="transition-all duration-700"
                />
              );
            })}
          </g>

          {/* Connection Lines */}
          <g opacity="0.4" stroke={UI_CONSTANTS.PRIMARY} strokeWidth="1.5" fill="none">
            <line x1="180" y1="150" x2="410" y2="135">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="410" y1="135" x2="530" y2="170">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="3.5s" repeatCount="indefinite"/>
            </line>
            <line x1="230" y1="320" x2="410" y2="300">
              <animate attributeName="stroke-dasharray" values="0,300;300,0" dur="4s" repeatCount="indefinite"/>
            </line>
          </g>

          {/* Main Location Markers */}
          <g filter="url(#glow)">
            <circle cx="180" cy="150" r="10" fill={UI_CONSTANTS.PRIMARY}>
              <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="150" r="20" fill="none" stroke={UI_CONSTANTS.PRIMARY} strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="15;30;15" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
            </circle>

            <circle cx="410" cy="135" r="10" fill={UI_CONSTANTS.PRIMARY}>
              <animate attributeName="r" values="10;14;10" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.5;1" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="410" cy="135" r="20" fill="none" stroke={UI_CONSTANTS.PRIMARY} strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="15;30;15" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            <circle cx="530" cy="170" r="10" fill={UI_CONSTANTS.PRIMARY}>
              <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.5;1" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="530" cy="170" r="20" fill="none" stroke={UI_CONSTANTS.PRIMARY} strokeWidth="2" opacity="0.3">
              <animate attributeName="r" values="15;30;15" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite"/>
            </circle>

            <circle cx="410" cy="300" r="10" fill={UI_CONSTANTS.PRIMARY}>
              <animate attributeName="r" values="10;14;10" dur="3.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.5;1" dur="3.5s" repeatCount="indefinite"/>
            </circle>

            <circle cx="230" cy="320" r="10" fill={UI_CONSTANTS.PRIMARY}>
              <animate attributeName="r" values="10;14;10" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;0.5;1" dur="4s" repeatCount="indefinite"/>
            </circle>
          </g>
        </svg>

        {/* Overlay stats */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold" style={{ color: UI_CONSTANTS.PRIMARY }}>25+</div>
            <div className="text-sm text-white/70 mt-1">African Countries</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 border border-white/20">
            <div className="text-3xl font-bold" style={{ color: UI_CONSTANTS.PRIMARY }}>5k+</div>
            <div className="text-sm text-white/70 mt-1">Tech Specialists</div>
          </div>
        </div>
      </div>
    );
  };

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
                className="min-h-screen flex items-center"
              >
                <div className="w-full max-w-xl">
                  <h3 
                    className="text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-500"
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
          <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
            <div 
              className="w-full transition-all duration-700 ease-out"
              style={{ 
                height: '600px'
              }}
            >
              <WorldMapVisualization />
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
// import React from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function UseCasesCarousel() {
  const useCases = [
    {
      title: "AI-Powered Virtual Assistants for Seamless Customer Experiences",
      description: "AI-driven virtual assistants built to simplify, automate, and enhance customer engagement.",
      category: "Chatbot & Automation",
      bgColor: "#2C4A4D",
      patternColor: "#3D5F63",
      patternOpacity: "0.6"
    },
    {
      title: "Custom Software Built for Real-World Performance", 
      description: "Custom-built software, from ideation to deployment, engineered for real-world performance.",
      category: "Software Development",
      bgColor: "#D5E8EC",
      patternColor: "#BDD9DE",
      patternOpacity: "0.5"
    },
    {
      title: "Implementing AI Solutions with South African Specialists",
      description: "KIAQ facilitated the connection between a healthcare company and AI specialists from Cape Town who developed intelligent diagnostic tools, improving accuracy by 40% and reducing diagnosis time.",
      category: "AI & Machine Learning",
      bgColor: "#C8E4D4",
      patternColor: "#B0D6BE",
      patternOpacity: "0.5"
    },
    {
      title: "Transforming Data Into Intelligent Decisions.",
      description: "Leveraging AI, we empower businesses with intelligent decision-making and forecasting abilities.",
      category: "Artificial Intelligence", 
      bgColor: "#F5F1E8",
      patternColor: "#E3DCC9",
      patternOpacity: "0.5"
    },
    {
      title: "Scalable, Secure & Cost-Efficient Cloud Infrastructure",
      description: "Harness the power of scalable, secure, and budget-friendly cloud solutions tailored to drive business innovation.",
      category: "Cloud Solutions",
      bgColor: "#F5F1E8",
      patternColor: "#E3DCC9",
      patternOpacity: "0.5"
    },
    {
      title: "Strategic Technology Guidance for Sustainable Growth",
      description: "Delivering expert tech insights and strategic IT consulting to align your systems with business goals.",
      category: "IT Consulting",
      bgColor: "#C8E4D4",
      patternColor: "#B0D6BE",
      patternOpacity: "0.5"
    },
    {
      title: "Advanced Analytics with Tanzanian Data Scientists",
      description: "A logistics company partnered with KIAQ to find data scientists from Dar es Salaam who developed route optimization algorithms, reducing delivery times by 30% and fuel costs by 25%.",
      category: "Data Science",
      bgColor: "#E5E5E5",
      patternColor: "#CFCFCF",
      patternOpacity: "0.5"
    },
    {
      title: "Advanced Protection for Your Digital Infrastructure",
      description: "Our advanced cybersecurity solutions safeguard your digital assets with cutting-edge tools and proactive defense strategies.",
      category: "Cybersecurity",
      bgColor: "#E5E5E5",
      patternColor: "#CFCFCF",
      patternOpacity: "0.5"
    }
  ];

  const topRowUseCases = useCases.slice(0, 4);
  const bottomRowUseCases = useCases.slice(4);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4" style={{ backgroundColor: UI_CONSTANTS.WHITE }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: UI_CONSTANTS.DARK }}>
           Driven by Our IT Excellence, Powered by Your Success
          </h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4 md:space-y-6 overflow-hidden">
          {/* Top row - scrolls left */}
          <div className="relative">
            <div className="flex animate-scroll-left hover:pause-animation gap-3 sm:gap-4 md:gap-6">
              {[...topRowUseCases, ...topRowUseCases, ...topRowUseCases].map((useCase, index) => (
                <UseCaseCard key={index} useCase={useCase} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls right */}
          <div className="relative">
            <div className="flex animate-scroll-right hover:pause-animation gap-3 sm:gap-4 md:gap-6">
              {[...bottomRowUseCases, ...bottomRowUseCases, ...bottomRowUseCases].map((useCase, index) => (
                <UseCaseCard key={index} useCase={useCase} index={index + 100} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 sm:mt-12 md:mt-16 px-4">
          <button 
            style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
            className="px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto max-w-sm sm:max-w-none"
          >
            <span className="hidden sm:inline">Explore More Success Stories</span>
            <span className="sm:hidden">Explore Success Stories</span>
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

interface UseCase {
  title: string;
  description: string;
  category: string;
  bgColor: string;
  patternColor: string;
  patternOpacity: string;
}

interface UseCaseCardProps {
  useCase: UseCase;
  index: number;
}

function UseCaseCard({ useCase, index }: UseCaseCardProps) {
  const isDark = useCase.bgColor === "#2C4A4D";
  const textColor = isDark ? "#FFFFFF" : UI_CONSTANTS.DARK;
  const uniqueId = `pattern-${index}`;

  const handleClick = () => {
    window.location.href = '/case-study';
  };

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px] h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] group cursor-pointer" onClick={handleClick}>
      <div 
        className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl h-full relative overflow-hidden transition-all duration-500"
        style={{ backgroundColor: useCase.bgColor }}
      >
        {/* Hover background overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-3xl"
          style={{ backgroundColor: '#011123' }}
        />
        {/* Pattern SVG - always visible, becomes hidden on hover */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-500"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <pattern id={uniqueId} x="0" y="0" width="90" height="78" patternUnits="userSpaceOnUse">
              <g fill="none" stroke={useCase.patternColor} strokeWidth="1.5" opacity={useCase.patternOpacity}>
                {/* Hexagon pattern */}
                <path d="M45,0 L67.5,13 L67.5,39 L45,52 L22.5,39 L22.5,13 Z" />
                <path d="M0,26 L22.5,39 L22.5,65 L0,78 L-22.5,65 L-22.5,39 Z" />
                <path d="M90,26 L112.5,39 L112.5,65 L90,78 L67.5,65 L67.5,39 Z" />
                
                {/* Four-pointed star in center */}
                <path d="M45,20 L47,26 L53,26 L48,30 L50,36 L45,32 L40,36 L42,30 L37,26 L43,26 Z" 
                      fill={useCase.patternColor} 
                      opacity={useCase.patternOpacity} 
                      stroke="none" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${uniqueId})`} />
        </svg>

        {/* Content overlay on hover - shows ALL content */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col"
        >
          <div className="flex items-center mb-3 sm:mb-4 md:mb-6 flex-shrink-0">
            <div className="mr-2 sm:mr-3">
              <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                <path d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z" fill="#FFFFFF"/>
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>
              {useCase.category}
            </div>
          </div>
          
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4 flex-shrink-0" style={{ color: '#FFFFFF' }}>
            {useCase.title}
          </h3>
          
          <p className="text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden" style={{ color: '#FFFFFF', opacity: 0.95 }}>
            {useCase.description}
          </p>
        </div>

        {/* Default Content - hides on hover */}
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
          <div className="flex items-center mb-3 sm:mb-4 md:mb-6">
            <div className="mr-2 sm:mr-3">
              <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                <path d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z" fill={textColor}/>
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: textColor, letterSpacing: '0.05em' }}>
              {useCase.category}
            </div>
          </div>
          
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight" style={{ color: textColor }}>
            {useCase.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
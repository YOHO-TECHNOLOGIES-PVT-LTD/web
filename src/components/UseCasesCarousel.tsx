// import React from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function UseCasesCarousel() {
  const useCases = [
    {
      title: "Scaling DevOps Operations with Nigerian Engineers",
      description: "KIAQ connected TechFlow with senior DevOps engineers from Lagos who implemented CI/CD pipelines and automated infrastructure management, reducing deployment time by 75% and improving system reliability.",
      category: "DevOps Engineering",
      bgColor: "#2C4A4D",
      patternColor: "#3D5F63",
      patternOpacity: "0.6"
    },
    {
      title: "Building ML Models with Kenyan Data Scientists", 
      description: "A fintech startup partnered with KIAQ to find data scientists from Nairobi who developed predictive models for fraud detection, reducing false positives by 60% and saving millions in potential losses.",
      category: "Data Science",
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
      title: "Cloud Migration Success with Ghanaian DevOps Team",
      description: "A retail company worked with KIAQ to connect with DevOps engineers from Accra who successfully migrated their entire infrastructure to AWS, reducing costs by 45% while improving performance.",
      category: "Cloud Engineering", 
      bgColor: "#F5F1E8",
      patternColor: "#E3DCC9",
      patternOpacity: "0.5"
    },
    {
      title: "Data Pipeline Optimization with Ethiopian Engineers",
      description: "Through KIAQ, a media company found data engineers from Addis Ababa who built scalable data pipelines processing 10TB daily, enabling real-time analytics and business intelligence.",
      category: "Data Engineering",
      bgColor: "#F5F1E8",
      patternColor: "#E3DCC9",
      patternOpacity: "0.5"
    },
    {
      title: "Kubernetes Expertise from Moroccan DevOps Engineers",
      description: "KIAQ connected an e-commerce platform with Kubernetes specialists from Casablanca who containerized their applications, improving scalability and reducing infrastructure costs by 35%.",
      category: "Container Orchestration",
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
      title: "AI-Powered Automation with Ugandan Specialists",
      description: "Through KIAQ, a manufacturing company connected with AI specialists from Kampala who implemented intelligent automation systems, increasing production efficiency by 50%.",
      category: "AI Automation",
      bgColor: "#E5E5E5",
      patternColor: "#CFCFCF",
      patternOpacity: "0.5"
    }
  ];

  const topRowUseCases = useCases.slice(0, 4);
  const bottomRowUseCases = useCases.slice(4);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4" style={{ backgroundColor: UI_CONSTANTS.WHITE }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: UI_CONSTANTS.DARK }}>
            Success Stories: African Talent Driving Global Innovation
          </h2>
        </div>
        
        <div className="space-y-4 sm:space-y-6 overflow-hidden">
          {/* Top row - scrolls left */}
          <div className="relative">
            <div className="flex animate-scroll-left hover:pause-animation gap-6">
              {[...topRowUseCases, ...topRowUseCases, ...topRowUseCases].map((useCase, index) => (
                <UseCaseCard key={index} useCase={useCase} index={index} />
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls right */}
          <div className="relative">
            <div className="flex animate-scroll-right hover:pause-animation gap-6">
              {[...bottomRowUseCases, ...bottomRowUseCases, ...bottomRowUseCases].map((useCase, index) => (
                <UseCaseCard key={index} useCase={useCase} index={index + 100} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <button 
            style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore More Success Stories
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
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
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

  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[450px] h-[280px] sm:h-[300px] lg:h-[320px] group cursor-pointer">
      <div 
        className="p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl h-full relative overflow-hidden transition-all duration-500"
        style={{ backgroundColor: useCase.bgColor }}
      >
        {/* Hover background overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
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
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="mr-3">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z" fill="#FFFFFF"/>
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: '#FFFFFF', letterSpacing: '0.05em' }}>
              {useCase.category}
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight mb-3 sm:mb-4" style={{ color: '#FFFFFF' }}>
            {useCase.title}
          </h3>
          
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#FFFFFF', opacity: 0.95 }}>
            {useCase.description}
          </p>
        </div>

        {/* Default Content - hides on hover */}
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="mr-3">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                <path d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z" fill={textColor}/>
              </svg>
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase" style={{ color: textColor, letterSpacing: '0.05em' }}>
              {useCase.category}
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight" style={{ color: textColor }}>
            {useCase.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
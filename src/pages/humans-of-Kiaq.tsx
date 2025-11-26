import kiaqimag from '../assets/6643e549495270ffe8edb1e8_ForCompanies_AdaptiveHiring_5-steps-to-building-a-successful-global-team_InteriorPageHero-p-2000.avif'
import fvimg from '../assets/whykiaq/case5-1.webp';
import sximg from '../assets/whykiaq/case4-1.webp';
import svnimg from '../assets/whykiaq/665f017906055188a91e32cb_Talent Decision Engine@2x.webp';
import ethimg from '../assets/whykiaq/665f02ad1a0373467ab3c7cf_Integrations@2x.webp';
import ninth from '../assets/whykiaq/6674b5009b8b21f1393a29a4_tei hero image.webp';

import { UI_CONSTANTS } from '../constants/colors';

const useCases = [
  {
    title: "Digital Transformation in Oil & Gas Energy Sector",
    description: "Kiaq Technologies brings deep technological expertise to the oil and gas energy sector, delivering digital solutions that enhance operational efficiency, safety, and sustainability. Our services include real-time data monitoring, predictive maintenance systems, asset management platforms, and automation of field operations. By integrating IoT, cloud infrastructure, and advanced analytics, we help energy companies optimize resource utilization, reduce downtime, and drive intelligent decision-making. With a focus on innovation and reliability.",
    category: "Oil &Gas Energy",
    bgColor: "#2C4A4D",
    patternColor: "#3D5F63",
    patternOpacity: "0.6"
  },
  {
    title: "Smart Manufacturing & Industrial Automation Solutions", 
    description: "At Kiaq Technologies, we specialize in delivering smart IT solutions tailored for the manufacturing industry. Our expertise helps manufacturers modernize operations through automation, IoT integration, real-time data analytics, and custom ERP systems. We streamline production workflows, enhance supply chain visibility, and enable predictive maintenance—driving efficiency, reducing downtime, and increasing output quality. With a focus on digital transformation, we equip manufacturing businesses with the tools to stay competitive, agile, and future-ready in an evolving industrial landscape.",
    category: "Manufacturing",
    bgColor: "#D5E8EC",
    patternColor: "#BDD9DE",
    patternOpacity: "0.5"
  },
  {
    title: "Digital Commerce & Supply Chain Optimization",
    description: "At Kiaq Technologies, we bring deep technological expertise to the consumer goods sector, helping brands stay competitive in an increasingly digital marketplace. Our solutions are designed to optimize supply chains, enhance customer engagement, and enable real-time decision-making through data analytics and automation. From developing robust inventory management systems to delivering personalized e-commerce platforms and integrating AI-driven insights, we empower consumer goods companies to streamline operations and adapt quickly to market demands. With a focus on innovation and efficiency.",
    category: "Consumer Goods",
    bgColor: "#C8E4D4",
    patternColor: "#B0D6BE",
    patternOpacity: "0.5"
  },
  {
    title: "Renewable Energy Management & Grid Optimization",
    description: "At Kiaq Technologies, we bring cutting-edge digital solutions to the renewable energy sector, enabling smarter, more efficient, and sustainable energy management. Our expertise spans IoT-based monitoring systems, energy data analytics, grid automation, and AI-powered forecasting tools. We help renewable energy companies optimize performance, reduce downtime, and make data-driven decisions through custom-built software and integrated platforms. Whether it's solar, wind, or hybrid energy systems, our technology solutions are designed to support operational efficiency, compliance, and long-term scalability—paving the way for a cleaner, tech-driven energy future.",
    category: "Renewable Energy", 
    bgColor: "#F5F1E8",
    patternColor: "#E3DCC9",
    patternOpacity: "0.5"
  },
  {
    title: "Digital Governance & Public Service Transformation",
    description: "At Kiaq Technologies, we specialize in delivering secure, scalable, and citizen-centric digital solutions tailored for the public sector. Our expertise spans e-governance platforms, data-driven decision systems, cloud infrastructure, and automation tools designed to modernize government operations. We understand the unique challenges of public institutions — from compliance and transparency to performance and accessibility — and craft technology that enhances service delivery, improves efficiency, and fosters trust. By aligning with government digital transformation goals, we help build smarter, more connected communities through innovative IT solutions.",
    category: "Public Sector",
    bgColor: "#F5F1E8",
    patternColor: "#E3DCC9",
    patternOpacity: "0.5"
  },
  {
    title: "Healthcare Digital Transformation & Telemedicine Platforms",
    description: "At Kiaq Technologies, we specialize in delivering advanced IT solutions tailored for the healthcare sector. Our expertise includes developing secure, HIPAA-compliant software, telemedicine platforms, patient management systems, and data-driven health analytics tools. We help healthcare providers enhance operational efficiency, ensure data security, and deliver seamless patient experiences through intuitive digital interfaces and automated workflows. By combining innovation with industry compliance, we enable healthcare organizations to modernize their infrastructure, improve care delivery, and make informed, real-time decisions that positively impact patient outcomes.",
    category: "Healthcare",
    bgColor: "#C8E4D4",
    patternColor: "#B0D6BE",
    patternOpacity: "0.5"
  },
  {
    title: "HSSE Compliance & Risk Management Systems",
    description: "At Kiaq Technologies, we integrate Health, Safety, Security, and Environmental (HSSE) standards into every layer of our operations and solutions. Our expertise ensures that all technology deployments, infrastructure implementations, and digital transformations adhere to the highest safety protocols and regulatory compliance. From secure data environments and cyber risk mitigation to workplace safety in tech-driven projects, we prioritize a culture of responsibility and sustainability. Our commitment to HSSE not only protects people and systems but also enhances operational reliability and long-term trust with our clients.",
    category: "HSSE",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  },
  {
    title: "FinTech Innovation & Digital Banking Solutions",
    description: "At Kiaq Technologies, we specialize in delivering secure, high-performance IT solutions tailored for the financial services industry. From developing custom fintech applications and digital payment platforms to implementing robust cybersecurity frameworks and data analytics tools, we help financial institutions streamline operations, enhance customer experiences, and ensure regulatory compliance. Our deep understanding of banking, insurance, and investment sectors allows us to build scalable, agile systems that drive innovation while maintaining the highest standards of security and reliability. Partner with us to transform your financial services through technology that’s built for trust and performance.",
    category: "Financial Services",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  },
  {
    title: "Telecom Infrastructure & Network Modernization",
    description: "At Kiaq Technologies, we deliver advanced IT solutions tailored for the telecommunications industry, enabling seamless connectivity, infrastructure optimization, and service innovation. Our expertise spans network management systems, VoIP integration, real-time data processing, and scalable cloud platforms that support high-demand environments. With a focus on performance, security, and customer experience, we help telecom providers modernize their operations, accelerate digital transformation, and stay ahead in a rapidly evolving landscape.",
    category: "Telecommunications",
    bgColor: "#E5E5E5",
    patternColor: "#CFCFCF",
    patternOpacity: "0.5"
  }
];

const topRowUseCases = useCases.slice(0, 4);
const bottomRowUseCases = useCases.slice(4);

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
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] lg:w-[450px] h-[380px] sm:h-[420px] lg:h-[450px] group cursor-pointer" onClick={handleClick}>
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
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 sm:p-8 lg:p-10 flex flex-col"
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
          
          <p className="text-sm sm:text-base leading-relaxed flex-grow overflow-y-auto" style={{ color: '#FFFFFF', opacity: 0.95 }}>
            {useCase.description}
          </p>
        </div>

        {/* Default Content - hides on hover */}
        <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-500 h-full flex flex-col">
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
          
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight flex-grow" style={{ color: textColor }}>
            {useCase.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function WhyKiaq() {
  return (
    <>
      <section
  className="relative min-h-screen flex items-center bg-black text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${kiaqimag})` }}
>
  {/* Dark gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
    <div className="flex flex-col md:flex-row items-start md:items-center">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4 sm:space-y-5">
        <p className="text-orange-400 font-semibold uppercase tracking-wider text-sm sm:text-base">
          KIAQ
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug">
          Our <br />
          Expertise
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Kiaq Technologies excels in delivering innovative, scalable tech solutions that drive digital transformation and business growth.
        </p>

        <button className="mt-4 sm:mt-5 bg-orange-500 text-black font-semibold px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-md hover:bg-orange-400 transition w-full sm:w-auto">
          Book a discovery call
        </button>
      </div>

      {/* Spacer for layout balance */}
      <div className="hidden md:block md:flex-1" />
    </div>
  </div>
</section>

      {/* Fourth Section */}
      <section className="w-full bg-gray-50 text-black py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
  {/* Background Pattern (optional subtle circles) */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.andela.com/_next/static/media/circle-pattern.1c4b7dc2.svg')] opacity-10 bg-no-repeat bg-right" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
    
    {/* Left Image */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
      <img
        src={fvimg}
        alt="Project Completion"
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl sm:rounded-2xl shadow-lg object-contain"
      />
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 lg:space-y-6">
      <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase">
        ✦ What We're Great At
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight sm:leading-snug text-gray-900">
        Scalable Tech Built for Industry-Focused Digital Execution
      </h2>
      
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
        At Kiaq Technologies, we specialize in delivering scalable technology solutions tailored to the unique digital demands of diverse industries. Whether it's manufacturing, healthcare, finance, or retail, our expert team crafts agile, high-performance systems designed to streamline operations, enhance user experience, and accelerate digital growth. With a deep understanding of sector-specific challenges, we align technology with business goals—ensuring every solution is both future-ready and impact-driven.
      </p>
    </div>
  </div>
</section>

      {/* Fifth Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: UI_CONSTANTS.WHITE }}>
  <div className="max-w-[1400px] mx-auto">
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight" style={{ color: UI_CONSTANTS.DARK }}>
        Fueling Industrial Transformation Through Smart IT Solutions
      </h2>

      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-4xl mx-auto">
        At Kiaq Technologies, we empower industries to evolve and thrive in the digital era through intelligent, future-ready IT solutions. By leveraging cutting-edge technologies such as cloud computing, automation, data analytics, and custom software development, we address the unique operational needs of various sectors. Our industry-specific approach ensures seamless integration, optimized workflows, and enhanced productivity. From manufacturing to retail, logistics to healthcare, we deliver scalable, secure, and agile tech solutions that drive real impact—transforming traditional processes into smart, efficient systems that fuel sustainable growth.
      </p>
    </div>
    
    <div className="space-y-3 sm:space-y-4 lg:space-y-6 overflow-hidden">
      {/* Top row - scrolls left */}
      <div className="relative">
        <div className="flex animate-scroll-left hover:pause-animation gap-3 sm:gap-4 lg:gap-6">
          {[...topRowUseCases, ...topRowUseCases, ...topRowUseCases].map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom row - scrolls right */}
      <div className="relative">
        <div className="flex animate-scroll-right hover:pause-animation gap-3 sm:gap-4 lg:gap-6">
          {[...bottomRowUseCases, ...bottomRowUseCases, ...bottomRowUseCases].map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index + 100} />
          ))}
        </div>
      </div>
    </div>
    
    <div className="text-center mt-8 sm:mt-12 lg:mt-16">
      <button 
        style={{ backgroundColor: UI_CONSTANTS.PRIMARY, color: UI_CONSTANTS.WHITE }}
        className="px-6 py-2.5 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto max-w-xs sm:max-w-none"
      >
        Expertise
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
  `}</style>
</section>

      {/* Fifth Section */}
     <section className="w-full bg-white text-black py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
  {/* Diagonal Grid Pattern - Background */}
  <svg
    className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] opacity-10 pointer-events-none translate-x-12 sm:translate-x-24 -translate-y-6 sm:-translate-y-12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    aria-hidden="true"
  >
    <defs>
      <pattern id="diagonalGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path
          d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
          stroke="#00b3a4"
          strokeWidth="0.8"
          opacity="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
  </svg>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 sm:mb-12 lg:mb-16 leading-tight">
      AI-Powered Technology Ensures Success
    </h2>

    {/* 3 Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {/* Card 1 */}
      <div className="bg-[#ffe8dc] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">KIAQ Talent Cloud</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
          Create job postings and receive instant AI-driven candidate recommendations. Schedule interviews and hire faster with intelligent automation.
        </p>
        <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <img src={sximg} alt="KIAQ Talent Cloud" className="w-full max-w-xs sm:max-w-sm mx-auto rounded-lg shadow-md" />
      </div>

      {/* Card 2 */}
      <div className="bg-[#ffe8dc] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">Talent Decision Engine™</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
          Our AI-powered matching engine analyzes thousands of data points to connect you with the most qualified talent for your requirements—quickly and accurately.
        </p>
        <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <img src={svnimg} alt="Talent Decision Engine" className="w-full max-w-xs sm:max-w-sm mx-auto rounded-lg shadow-md" />
      </div>

      {/* Card 3 */}
      <div className="bg-[#ffe8dc] rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3">KIAQ Connect</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
         Instantly sync with your preferred platforms and tools. Get highly qualified matches for your open roles in seconds.
        </p>
        <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-xs sm:text-sm mb-4 sm:mb-6">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
        <img src={ethimg} alt="KIAQ Connect" className="w-full max-w-xs sm:max-w-sm mx-auto rounded-lg shadow-md" />
      </div>
    </div>

    {/* Proof Section */}
    <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#fff2eb' }}>
      {/* Pattern inside Proof Section */}
      <svg
        className="absolute top-0 right-0 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] opacity-10 pointer-events-none translate-x-6 sm:translate-x-10 -translate-y-6 sm:-translate-y-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern id="diagonalGrid2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
              stroke="#008080"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalGrid2)" />
      </svg>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
        {/* Left Text */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">Expertise That Powers Digital Excellence Book a Free Consultation</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
           At Kiaq Technologies, our expertise is the foundation of every solution we deliver. With a deep understanding of emerging technologies and industry-specific demands, we craft intelligent, scalable, and secure systems that solve real business challenges. Our team of experienced professionals brings together innovation, precision, and strategic thinking to drive digital transformation across sectors. From concept to execution, we ensure each project reflects our commitment to quality, performance, and long-term value—positioning your business for sustainable success in a rapidly evolving tech landscape.
          </p>
          <button className="bg-orange-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-semibold hover:bg-[#006666] transition-all w-full sm:w-auto">
            Shedule Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img src={ninth} alt="KIAQ TEI Report" className="w-full max-w-xs sm:max-w-sm rounded-lg shadow-lg object-contain" />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sixth Section */}
      

      {/* Seventh Section */}
     

      {/* Eighth Section */}
      <section className="dual-action-button-cta">
  <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[350px] sm:min-h-[400px]">
    
    {/* LEFT SECTION */}
    <div
      className="dual-action-button-cta-left-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <path d="M100 50 Q300 150 500 50 T900 50" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none"/>
          <path d="M0 100 Q200 200 400 100 T800 100" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
          <path d="M150 200 Q350 300 550 200 T950 200" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none"/>
          <path d="M50 300 Q250 400 450 300 T850 300" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none"/>
          <circle cx="200" cy="80" r="3" fill="white" opacity="0.5"/>
          <circle cx="600" cy="120" r="2.5" fill="white" opacity="0.4"/>
          <circle cx="400" cy="250" r="3" fill="white" opacity="0.3"/>
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-20">
        <div className="dual-action-button-cta-tag-wrapper flex items-center mb-6 sm:mb-8">
          <div className="dual-action-button-cta-left-div-img mr-2.5 sm:mr-3">
            <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
              <path
                d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                fill="white"
              />
            </svg>
          </div>
          <p
            className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
            style={{ color: UI_CONSTANTS.WHITE }}
          >
            GET STARTED
          </p>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
          style={{ color: UI_CONSTANTS.WHITE }}
        >
          Build the tech team of the future with KIAQ
        </h2>

        <button
          style={{
            backgroundColor: UI_CONSTANTS.DARK,
            color: UI_CONSTANTS.WHITE,
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          Request a consultation
        </button>
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div
      className="dual-action-button-cta-right-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: UI_CONSTANTS.WHITE }}
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <path d="M100 50 Q300 150 500 50 T900 50" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.4" fill="none"/>
          <path d="M0 100 Q200 200 400 100 T800 100" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.3" fill="none"/>
          <path d="M150 200 Q350 300 550 200 T950 200" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.25" fill="none"/>
          <path d="M50 300 Q250 400 450 300 T850 300" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.2" fill="none"/>
          <circle cx="200" cy="80" r="3" fill="#0D2A2C" opacity="0.5"/>
          <circle cx="600" cy="120" r="2.5" fill="#0D2A2C" opacity="0.4"/>
          <circle cx="400" cy="250" r="3" fill="#0D2A2C" opacity="0.3"/>
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-20">
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="mr-2.5 sm:mr-3">
            <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
              <path
                d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                fill="#173B3F"
              />
            </svg>
          </div>
          <p
            className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
            style={{ color: '#173B3F' }}
          >
            SCHEDULE A CALL
          </p>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
          style={{ color: '#173B3F' }}
        >
          Let us know how we can help
        </h2>

        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: '#173B3F',
            border: '2px solid rgba(23, 59, 63, 0.2)',
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
        >
          Schedule Now
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
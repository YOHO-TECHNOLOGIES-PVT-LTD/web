import { useState, useEffect, useRef } from 'react';
import webimg from "../assets/solutions/how-andela-works-hero-image-768.webp";
import webimg1 from "../assets/solutions/trans-person-working-office-with-colleagues (1).jpg";
import webimg21 from "../assets/solutions/business-people-working-using-technology-connect-with-others.jpg";
import webimg22 from "../assets/solutions/businessman-holding-tablet-with-virtual-application.jpg";
import webimg23 from "../assets/solutions/standard-quality-control-concept-m.jpg";
import webimg24 from "../assets/solutions/person-office-analyzing-checking-finance-graphs.jpg";
import webimg25 from "../assets/solutions/businesspeople-planning-tasks-with-sticky-notes.jpg";
import imgfocus from "../assets/660dcc7f45ad8881324199b5_665edf960bfc2a8fb317836a_Make_work_happen_fast-transcode.webm";
import webimg26 from "../assets/solutions/network-graphic-overlay-banner-background.jpg";
import webimg27 from "../assets/solutions/two-factor-authentication-concept.jpg";
import webimg28 from "../assets/solutions/colleagues-discussing-work-project.jpg";

// import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";


export default function WebAppDevelopmentHero() {

  const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

const steps = [
  {
    title: "Candidate Qualification Screening",
    desc: "All applications undergo comprehensive review to verify qualification standards, validate professional experience, and complete necessary background verification processes.",
    img: webimg24,
  },
  {
    title: "Technical Competency Assessment",
    desc: "We evaluate technical proficiency through specialized assessments that measure core engineering capabilities and problem-solving skills.",
    img: webimg23,
  },
  {
    title: "Advanced Technical Evaluation",
    desc: "Candidates complete sophisticated technical challenges designed to demonstrate engineering expertise and practical application skills.",
    img: webimg25,
  },
  {
    title: "Expert Technical Interview",
    desc: "A comprehensive technical interview conducted by our specialist team to validate problem-solving methodologies and professional experience.",
    img: webimg22,
  },
  {
    title: "Profile Verification and Onboarding",
    desc: "Following certification, candidates complete profile establishment and final verification procedures for platform integration.",
    img: webimg21,
  },
];

  const [openIndex, setOpenIndex] = useState<number>(0);

 const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
    {
  title: "Access Elite Global Technology Talent",
  description: "Connect with a curated network of specialized engineers across DevOps, Data Science, and Artificial Intelligence—thoroughly vetted and prepared to accelerate your strategic initiatives."
},
{
  title: "Build Without Geographical Constraints",
  description: "KIAQ delivers world-class engineering expertise to international teams, enabling seamless collaboration and scalable project outcomes across global operations."
},
{
  title: "Specialized Expertise for Evolving Requirements",
  description: "From DevOps infrastructure to AI implementation, our technical specialists provide high-quality solutions customized to your dynamic business objectives and growth trajectory."
},
{
  title: "Streamlined Global Collaboration Framework",
  description: "Operate efficiently across multiple time zones with professionals experienced in remote-first execution methodologies and international project delivery."
},
{
  title: "Innovation Through Global Technical Excellence",
  description: "Leverage diverse engineering expertise that introduces fresh perspectives and drives continuous technological innovation within your organization."
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
    <>
   <section
  className="relative w-full min-h-[75vh] sm:min-h-[90vh] flex items-center justify-start overflow-hidden"
  style={{ backgroundColor: UI_CONSTANTS.DARK }}
>
  {/* Background image */}
  <img
    src={webimg}
    alt="AI and Data Science Solutions"
    className="absolute inset-0 w-full h-full object-cover object-center sm:object-right z-0"
  />

  {/* Dark gradient overlay */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.1) 100%)",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-10 sm:py-0">
    <div className="max-w-full sm:max-w-[520px] mt-6 sm:mt-[10vh] md:mt-[12vh] lg:mt-[14vh]">

      {/* Title */}
      <h1
        className="text-white font-bold leading-snug mb-4 sm:mb-5"
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.7rem)",
          lineHeight: 1.22,
        }}
      >
        Accelerate Your AI & Data Science
        <br className="hidden sm:inline" />
        Initiatives with Expert Teams
      </h1>

      {/* Description */}
      <p
        className="text-gray-200 font-light mb-6 sm:mb-8"
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        KIAQ connects organizations with premier AI and Data Science expertise to deliver
        actionable intelligence, scalable analytical models, and intelligent automation
        solutions—driving measurable business impact and competitive advantage.
      </p>

      {/* CTA Button */}
      <button
        className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
        style={{
          backgroundColor: UI_CONSTANTS.WHITE,
          color: UI_CONSTANTS.DARK,
        }}
      >
        Initiate AI Transformation
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-14 text-gray-200">

      <div className="text-center sm:text-left min-w-[140px]">
        <p className="text-lg sm:text-2xl font-semibold text-white mb-1">95%</p>
        <p className="text-xs sm:text-sm opacity-90">
          Client satisfaction with AI implementation
        </p>
      </div>

      <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 md:pl-8 text-center sm:text-left min-w-[140px]">
        <p className="text-lg sm:text-2xl font-semibold text-white mb-1">500+</p>
        <p className="text-xs sm:text-sm opacity-90">
          AI & Data Science specialists
        </p>
      </div>

      <div className="border-t sm:border-t-0 sm:border-l border-white/20 pt-4 sm:pt-0 sm:pl-6 md:pl-8 text-center sm:text-left min-w-[140px]">
        <p className="text-lg sm:text-2xl font-semibold text-white mb-1">24+</p>
        <p className="text-xs sm:text-sm opacity-90">
          Average engagement duration (months)
        </p>
      </div>

    </div>
  </div>
</section>




  {/* {second section} */}
    <section className="w-full bg-[#f7faf9] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden">
  {/* Decorative faint circle pattern on the right (SVG) */}
  <svg
    className="absolute right-0 top-0 h-full w-[50%] opacity-10 pointer-events-none hidden md:block"
    viewBox="0 0 1200 800"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <defs>
      <pattern id="circlePattern" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="40" cy="40" r="18" stroke="#cfeae6" strokeWidth="2" fill="none" />
      </pattern>
    </defs>
    <rect width="1200" height="800" fill="url(#circlePattern)" />
  </svg>

  <div className="relative max-w-7xl mx-auto">
    {/* Top heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 max-w-3xl mb-8 sm:mb-10 md:mb-12">
      Experience the KIAQ Advantage
    </h1>

    {/* Two-column main area: left image (with patterned rounded panel), right text */}
    <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 md:gap-12 lg:gap-20">
      {/* Left: patterned rounded panel with image inset */}
      <div className="w-full lg:w-1/2 flex justify-start">
        <div className="relative w-full">
          {/* Rounded patterned panel */}
          <div
            className="rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(230,249,246,1) 0%, rgba(236,251,249,1) 100%)",
              boxShadow: "0 6px 30px rgba(14,30,23,0.06)",
              width: "100%",
              maxWidth: "680px",
            }}
          >
            {/* subtle circle SVG overlay inside the panel (top-left) */}
            <svg
              className="absolute left-4 sm:left-6 top-4 sm:top-6 pointer-events-none opacity-30 hidden sm:block"
              width="200"
              height="120"
              viewBox="0 0 260 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <pattern id="panelCircles" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="9" stroke="#d7eee9" strokeWidth="1.6" fill="none" />
                </pattern>
              </defs>
              <rect width="260" height="160" fill="url(#panelCircles)" rx="12" />
            </svg>

            {/* Inner white card that visually contains the screenshot */}
            <div
              className="rounded-lg overflow-hidden bg-white"
              style={{
                marginTop: "10px",
              }}
            >
              <img
                src={webimg1}
                alt="KIAQ platform dashboard"
                className="w-full h-auto block object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right text block */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
          Access Premium Talent with
          <br className="hidden sm:inline" />
          Exceptional Efficiency
        </h2>

        <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
          Our integrated methodology combines AI-powered technology platforms with experienced recruitment professionals to deliver optimal talent solutions.
        </p>
      </div>
    </div>

    {/* Bottom four-column features */}
    <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 border-t border-gray-200 pt-8 sm:pt-10 md:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <div className="pr-0 sm:pr-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Streamlined Recruitment Process</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          KIAQ Talent Platform facilitates intelligent and efficient processes throughout the complete recruitment lifecycle.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 sm:border-l lg:border-l border-gray-200 sm:pl-6 pt-6 sm:pt-0 border-t sm:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Certified Elite Professionals</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          We provide industry-leading professional development, continuous education, and strategic networking opportunities.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 lg:border-l border-gray-200 lg:pl-6 pt-6 sm:pt-0 lg:pt-0 border-t sm:border-t lg:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Comprehensive Support Services</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          End-to-end assistance through recruitment, acquisition, training, qualification, matching, and project delivery phases.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 sm:border-l lg:border-l border-gray-200 sm:pl-6 pt-6 sm:pt-0 border-t sm:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Premium Client Experience</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          Comprehensive service delivery from dedicated customer success and talent management teams.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* {third section} */}

  <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
  {/* TOP PATTERN */}
  <svg
    className="absolute right-0 top-0 w-[55%] opacity-20 pointer-events-none hidden md:block"
    viewBox="0 0 800 800"
    fill="none"
  >
    <defs>
      <pattern id="patternGrid" width="85" height="85" patternUnits="userSpaceOnUse">
        <path
          d="M42.5 2 L83 42.5 L42.5 83 L2 42.5 Z"
          stroke="#d8e8e4"
          strokeWidth="2"
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="800" height="800" fill="url(#patternGrid)" />
  </svg>

  <div className="relative max-w-7xl mx-auto">
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl">
      Access the World's Premier Certified Global Talent Network
    </h1>

    <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl leading-relaxed">
      Highly skilled digital professionals undergo comprehensive multi-stage certification processes. This rigorous approach ensures KIAQ clients report 98% satisfaction rates.
    </p>

    {/* MAIN LAYOUT */}
    <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start">
      {/* RIGHT SIDE PANEL → Shows first on mobile */}
      <div className="w-full lg:w-[52%] flex justify-center lg:justify-end order-1 lg:order-2">
        <div
          className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 w-full"
          style={{
            background:
              "linear-gradient(180deg, #d3ebe7 0%, #d9efeb 100%)",
            maxWidth: "680px",
            boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
          }}
        >
          {/* CIRCLE PATTERN */}
          <svg
            className="absolute inset-0 w-full h-full opacity-25 pointer-events-none hidden sm:block"
            viewBox="0 0 800 800"
            fill="none"
          >
            <defs>
              <pattern
                id="innerCircles"
                width="85"
                height="85"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="42.5" cy="42.5" r="28" stroke="#cde3dd" strokeWidth="2" />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#innerCircles)" />
          </svg>

          {/* DYNAMIC IMAGE */}
          <img
            src={steps[openIndex].img}
            alt="Professional Assessment"
            className="relative rounded-lg sm:rounded-xl w-full h-auto shadow-lg z-10"
          />
        </div>
      </div>

      {/* LEFT SIDE ACCORDION → Shows second on mobile */}
      <div className="w-full lg:w-[48%] space-y-3 sm:space-y-4 order-2 lg:order-1">
        {steps.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setOpenIndex(idx)}
            className={`border rounded-lg sm:rounded-xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 cursor-pointer bg-white transition-all ${
              openIndex === idx
                ? "border-[#bcd7d1] shadow-md"
                : "border-[#bcd7d1]"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-semibold text-gray-900 pr-3">{item.title}</p>
              <span className="text-gray-600 text-xl sm:text-2xl flex-shrink-0">
                {openIndex === idx ? "▲" : "▼"}
              </span>
            </div>

            {openIndex === idx && (
              <p className="text-gray-600 text-sm sm:text-[15px] mt-2 sm:mt-3 leading-relaxed">
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<style>
{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 25s linear infinite;
  }
`}
</style>




        {/* {fourth section} */}
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
            <span className="hidden sm:inline">Connect with Global Technology Experts</span><span className="sm:hidden">Connect with Experts</span>
          </button>
        </div>
      </div>
    </section>
  
    {/* fourth.one section */}

   <section className="relative w-full bg-white py-20 px-6 lg:px-20 overflow-hidden">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900">
        KIAQ Talent Platform Delivers Superior Matching
      </h2>

      {/* Cards Wrapper */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-[#e3efec] transition-all duration-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src={webimg26}
              alt="Global Talent Network"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Extensive Global Network
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            KIAQ Talent Platform accesses our exclusive marketplace spanning more than 135 countries with diverse technical expertise.
          </p>

          <button className="mt-4 text-[#0b3b37] font-semibold flex gap-2 items-center hover:gap-3 transition-all">
            Learn More →
          </button>
        </div>

        {/* CARD 2 */}
        <div className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-[#e3efec] transition-all duration-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src={webimg27}
              alt="Intelligent Matching Platform"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Advanced Matching Technology
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            Sophisticated AI matching algorithms analyze our global talent marketplace with exceptional speed and precision.
          </p>

          <button className="mt-4 text-[#0b3b37] font-semibold flex gap-2 items-center hover:gap-3 transition-all">
            Learn More →
          </button>
        </div>

        {/* CARD 3 */}
        <div className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-[#e3efec] transition-all duration-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src={webimg28}
              alt="Certified Technical Professionals"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Certified Technical Specialists
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            KIAQ technology professionals demonstrate expertise in the most in-demand technical skill sets and methodologies.
          </p>

          <button className="mt-4 text-[#0b3b37] font-semibold flex gap-2 items-center hover:gap-3 transition-all">
            Explore Our Talent →
          </button>
        </div>

      </div>
    </section>



        {/* {fifth section} */}

  


          {/* {6th Section} */}

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
                   Build Your Future Technology Team with KIAQ
                 </h2>
         
                 <button
                   style={{
                     backgroundColor: UI_CONSTANTS.DARK,
                     color: UI_CONSTANTS.WHITE,
                   }}
                   className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
                 >
                   Request Strategic Consultation
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
                     CONNECT WITH US
                   </p>
                 </div>
         
                 <h2
                   className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
                   style={{ color: '#173B3F' }}
                 >
                   Let Us Understand Your Technology Requirements
                 </h2>
         
                 <button
                   style={{
                     backgroundColor: 'rgba(255, 255, 255, 0.8)',
                     color: '#173B3F',
                     border: '2px solid rgba(23, 59, 63, 0.2)',
                   }}
                   className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
                 >
                   Schedule Strategic Meeting
                 </button>
               </div>
             </div>
           </div>
         </section>

    </>
  );
}

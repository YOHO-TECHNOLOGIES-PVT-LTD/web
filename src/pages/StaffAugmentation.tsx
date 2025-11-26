
import { useState, useEffect, useRef } from 'react';
import webimg from "../assets/solutions/how-andela-works-hero-image-768.webp";
import webimg1 from "../assets/solutions/frame 1073714193 (8).webp";
import webimg21 from "../assets/solutions/p1.webp";
import webimg22 from "../assets/solutions/p2.webp";
import webimg23 from "../assets/solutions/p3.webp";
import webimg24 from "../assets/solutions/Profile.webp";
import webimg25 from "../assets/solutions/Verification@2x.webp";
import imgfocus from "../assets/660dcc7f45ad8881324199b5_665edf960bfc2a8fb317836a_Make_work_happen_fast-transcode.webm";
import webimg26 from "../assets/solutions/Group 290084.webp";
import webimg27 from "../assets/solutions/Group.webp";
import webimg28 from "../assets/solutions/roup 290193.webp";



// import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';

export default function WebAppDevelopmentHero() {

  const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

const steps = [
  {
    title: "Applicant Screening",
    desc: "All applications are reviewed to ensure they meet our qualification standards, have the right professional experience, and pass background checks.",
    img: webimg24,
  },
  {
    title: "English Language Proficiency",
    desc: "We test your English level based on your listening and conversation skills and your vocabulary.",
    img: webimg23,
  },
  {
    title: "Technical Coding Challenges",
    desc: "You will complete technical coding assessments to demonstrate your core engineering skills.",
    img: webimg25,
  },
  {
    title: "Live Technical Interview",
    desc: "A final technical interview with our expert team to validate your problem-solving and experience.",
    img: webimg22,
  },
  {
    title: "Profile Setup and Verification",
    desc: "Once certified, you finish setting up your profile and complete final verifications.",
    img: webimg21,
  },
];

  const [openIndex, setOpenIndex] = useState<number>(0);

 const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
    {
  title: "Connect with top global tech talent.",
  description: "Access a curated network of skilled engineers across DevOps, Data, and AI—vetted and ready to accelerate your projects."
},
{
  title: "Build without borders.",
  description: "KIAQ brings world-class engineering talent to global teams, enabling seamless collaboration and scalable results."
},
{
  title: "Expertise that grows with you.",
  description: "From DevOps to AI, our specialists deliver high-quality solutions tailored to your evolving business needs."
},
{
  title: "Global collaboration made simple.",
  description: "Work smoothly across time zones with professionals experienced in remote-first execution and delivery."
},
{
  title: "Innovation through global talent.",
  description: "Tap into diverse engineering expertise that brings fresh ideas and drives continuous innovation."
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
  className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-start overflow-hidden"
  style={{ backgroundColor: UI_CONSTANTS.DARK }}
>
  {/* Background image */}
  <img
    src={webimg}
    alt="Data Science and AI"
    className="absolute inset-0 w-full h-full object-cover object-center sm:object-right z-0"
  />

  {/* Dark gradient overlay */}
  <div
    className="absolute inset-0 z-10"
    style={{
      background:
        "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.1) 100%)",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-8 sm:py-0">
    <div className="max-w-full sm:max-w-[520px] mt-8 sm:mt-[10vh] md:mt-[12vh] lg:mt-[14vh]">
      {/* Title */}
      <h1
        className="text-white font-bold leading-snug mb-4 sm:mb-5"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
          lineHeight: 1.2,
        }}
      >
        Accelerate Your AI & Data Science
        <br className="hidden sm:inline" />
        Projects with Expert Teams
      </h1>

      {/* Description */}
      <p
        className="text-gray-200 font-light mb-6 sm:mb-8"
        style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        KIAQ connects you with top-tier AI and Data Science talent to deliver
        actionable insights, scalable models, and intelligent automation —
        driving measurable impact for your business.
      </p>

      {/* CTA Button */}
      <button
        className="px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
        style={{
          backgroundColor: UI_CONSTANTS.WHITE,
          color: UI_CONSTANTS.DARK,
        }}
      >
        Start Your AI Journey
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-12 md:mt-14 text-gray-200">
      <div className="text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">95%</p>
        <p className="text-xs sm:text-sm opacity-90">Client satisfaction with AI solutions</p>
      </div>

      <div className="sm:border-l border-white/20 sm:pl-6 md:pl-8 text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">500+</p>
        <p className="text-xs sm:text-sm opacity-90">AI & Data Science experts</p>
      </div>

      <div className="sm:border-l border-white/20 sm:pl-6 md:pl-8 text-center sm:text-left">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">24+</p>
        <p className="text-xs sm:text-sm opacity-90">Months of average engagement</p>
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
      Discover the Andela difference
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
                alt="Andela dashboard"
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
          Get quality talent in a fraction
          <br className="hidden sm:inline" />
          of the time
        </h2>

        <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
          Our proprietary approach brings together an AI-powered platform and seasoned hiring
          professionals.
        </p>
      </div>
    </div>

    {/* Bottom four-column features */}
    <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 border-t border-gray-200 pt-8 sm:pt-10 md:pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <div className="pr-0 sm:pr-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Make hiring easier</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          Andela Talent Cloud drives an intelligent and frictionless process throughout the
          hiring lifecycle.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 sm:border-l lg:border-l border-gray-200 sm:pl-6 pt-6 sm:pt-0 border-t sm:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Count on certified top talent</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          We provide industry leading upskilling, education, and networking.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 lg:border-l border-gray-200 lg:pl-6 pt-6 sm:pt-0 lg:pt-0 border-t sm:border-t lg:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Get the support you need</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          Through recruitment, acquisition, training, qualification, matching, and delivery.
        </p>
      </div>

      <div className="pr-0 sm:pr-6 sm:border-l lg:border-l border-gray-200 sm:pl-6 pt-6 sm:pt-0 border-t sm:border-t-0">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Enjoy premium service</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
          You get all-inclusive service from customer and talent success teams.
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
      Tap into the world's largest, certified, global talent pool
    </h1>

    <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4 max-w-2xl leading-relaxed">
      Highly skilled digital talent is vetted by a multi-step certification process. That's why
      Andela clients report 98% satisfaction.
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
            alt="Assessment"
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
            <span className="hidden sm:inline">Connect with Global Tech Talent</span><span className="sm:hidden">Connect with Talent</span>
          </button>
        </div>
      </div>
    </section>
  
    {/* fourth.one section */}

   <section className="relative w-full bg-white py-20 px-6 lg:px-20 overflow-hidden">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Andela Talent Cloud makes better matches
      </h2>

      {/* Cards Wrapper */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* CARD 1 */}
        <div className="group bg-white shadow-md hover:shadow-xl rounded-2xl p-6 border border-[#e3efec] transition-all duration-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src={webimg26}
              alt="Global Reach"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Diverse Global Reach
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            Andela Talent Cloud accesses our private marketplace spanning more than 135 countries.
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
              alt="Decision Engine"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Talent Decision Engine
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            Powerful AI matching algorithms scan our global talent marketplace in seconds.
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
              alt="Certified Talent"
              className="w-full rounded-xl transform transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-6">
            Certified Technical Talent
          </h3>

          <p className="text-gray-600 mt-2 leading-relaxed">
            Andela technologists are experts in the most sought-after skill sets.
          </p>

          <button className="mt-4 text-[#0b3b37] font-semibold flex gap-2 items-center hover:gap-3 transition-all">
            Meet The Talent →
          </button>
        </div>

      </div>
    </section>



        {/* {fifth section} */}

    <section className="relative w-full bg-[#f8fafc] text-black py-24 overflow-hidden">
  {/* Flower Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(104,179,157,0.4) 1px, transparent 0),
        radial-gradient(circle at 75px 75px, rgba(104,179,157,0.4) 1px, transparent 0)
      `,
      backgroundSize: "100px 100px",
    }}
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Put Adaptive Hiring to work for you
      </h2>
      <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
        View All Resources
      </button>
    </div>

    {/* Cards Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={tenimg}
            alt="The Future of Hiring"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            White Paper
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            The Future of Hiring is Borderless
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={eleimg}
            alt="Diversifying Skillsets"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Diversifying Skillsets With The Weather Company
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Watch Now <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Global Remote Tech Talent"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Infographic
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Andela Research Finds Increasing Demand for Global Remote Tech Talent
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


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



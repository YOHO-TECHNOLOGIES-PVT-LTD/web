import { useState, useEffect, useRef } from "react";
import img1 from "../assets/solutions/cn-001.svg";
import img2 from "../assets/solutions/cn-002.svg";
import img3 from "../assets/solutions/cn-003.svg";
import img4 from "../assets/solutions/cn-004.svg";
import img5 from "../assets/solutions/icn-005.svg";
import img6 from "../assets/solutions/cn-006.svg";
import img7 from "../assets/solutions/Cloud and DevOps.avif";
import imgfocus from "../assets/solutions/adaptive-4.webp";
import img8 from "../assets/solutions/head-h.svg";
import img9 from "../assets/solutions/hire-h.svg";
import img10 from "../assets/solutions/icn-005.svg";
import img11 from "../assets/solutions/succ-h.svg";
import img12 from "../assets/solutions/Quality, Global Talent@2x.webp";
import img13 from "../assets/solutions/Rapid Scalability@2x.webp";
import img14 from "../assets/solutions/_Cost Optimization@2x.webp";
import img15 from "../assets/solutions/Agile Deployment@2x.webp";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';

import { Check, X } from "lucide-react";

const tabs = [
  {
    label: "Quality Global Talent",
    icon: img8,
    image: img12,
    title: "Quality, Global Talent",
    desc: "Access a curated network of pre-vetted technical professionals across 135+ countries. KIAQ's rigorous screening process ensures you connect with top-tier engineers, data scientists, and cloud specialists who deliver exceptional results from day one.",
  },
  {
    label: "Cost Optimization",
    icon: img9,
    image: img14,
    title: "Strategic Cost Optimization",
    desc: "Reduce technical hiring costs by up to 40% while maintaining enterprise-grade quality. Our global talent model eliminates geographical compensation barriers while ensuring fair market rates and sustainable partnerships.",
  },
  {
    label: "Agile Deployment",
    icon: img10,
    image: img15,
    title: "Agile Talent Deployment",
    desc: "Deploy fully vetted technical teams within 48 hours, not weeks. Our streamlined onboarding process and ready-to-work professionals ensure immediate project impact and accelerated time-to-value for your critical initiatives.",
  },
  {
    label: "Rapid Scalability",
    icon: img11,
    image: img13,
    title: "Enterprise Scalability",
    desc: "Scale your technical capacity dynamically across multiple time zones and skill sets. From individual specialists to complete project teams, KIAQ provides the flexibility to align resources with evolving business demands.",
  },
];

const data = [
  {
    title: "Location",
    traditional: {
      icon: <X className="w-5 h-5 text-[#A7B1A9]" />,
      heading: "GEOGRAPHICALLY LIMITED",
      desc: "Constrained by local talent pools and limited diversity",
    },
    adaptive: {
      icon: <Check className="w-5 h-5 text-[#0A3A36]" />,
      heading: "GLOBALLY DISTRIBUTED",
      desc: "Access to 135+ countries with diverse technical expertise",
    },
  },
  {
    title: "Hiring Time",
    traditional: {
      icon: <X className="w-5 h-5 text-[#A7B1A9]" />,
      heading: "12+ WEEKS AVERAGE",
      desc: "Extended recruitment cycles delay critical projects",
    },
    adaptive: {
      icon: <Check className="w-5 h-5 text-[#0A3A36]" />,
      heading: "48 HOURS DEPLOYMENT",
      desc: "Rapid matching and deployment of pre-vetted talent",
    },
  },
  {
    title: "Deployment",
    traditional: {
      icon: <X className="w-5 h-5 text-[#A7B1A9]" />,
      heading: "SLOW TIME-TO-PRODUCTIVITY",
      desc: "Extended onboarding and ramp-up periods",
    },
    adaptive: {
      icon: <Check className="w-5 h-5 text-[#0A3A36]" />,
      heading: "IMMEDIATE IMPACT",
      desc: "Ready-to-work professionals delivering value from day one",
    },
  },
  {
    title: "Scalability",
    traditional: {
      icon: <X className="w-5 h-5 text-[#A7B1A9]" />,
      heading: "RIGID CAPACITY",
      desc: "Fixed team sizes limit adaptability to changing demands",
    },
    adaptive: {
      icon: <Check className="w-5 h-5 text-[#0A3A36]" />,
      heading: "DYNAMIC SCALING",
      desc: "Flexible team composition aligned with project requirements",
    },
  },
  {
    title: "Turnover",
    traditional: {
      icon: <X className="w-5 h-5 text-[#A7B1A9]" />,
      heading: "HIGH ATTRITION RISK",
      desc: "30% higher turnover rates in competitive markets",
    },
    adaptive: {
      icon: <Check className="w-5 h-5 text-[#0A3A36]" />,
      heading: "ENHANCED RETENTION",
      desc: "25% higher retention through meaningful global opportunities",
    },
  },
];

const UI_CONSTANTS = {
  PRIMARY: "#ff4600",
  DARK: "#011123",
  WHITE: "#ffffff",
  GRAY: "#64748b",
};

const checkItems = [
  "Scale development capacity with pre-vetted technical talent",
  "Reduce recruitment complexity and accelerate project timelines",
  "Deliver critical business initiatives with predictable outcomes",
];

const dropdowns = [
  "Data Science and Artificial Intelligence",
  "Data Engineering and Analytics",
  "Cloud and DevOps",
  "Cybersecurity & Infrastructure",
];

const features = [
  {
    title: "Connect with elite global technical talent.",
    description:
      "Access a rigorously screened network of specialized engineers across DevOps, Data Science, AI, and Cloud technologies.",
  },
  {
    title: "Build without geographical constraints.",
    description:
      "KIAQ delivers world-class engineering expertise to distributed teams, breaking down traditional hiring barriers.",
  },
  {
    title: "Expertise that evolves with your needs.",
    description:
      "From initial prototypes to enterprise-scale solutions, our specialists provide scalable technical leadership.",
  },
  {
    title: "Seamless global collaboration.",
    description: "Advanced remote work infrastructure enables productive cross-timezone partnerships.",
  },
  {
    title: "Innovation through diverse perspectives.",
    description: "Leverage global engineering talent to drive creative problem-solving and technical excellence.",
  },
];

export default function AdaptiveHiring() {
  const [openFirst, setOpenFirst] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;

      contentRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const top = ref.offsetTop;
        const height = ref.offsetHeight;

        if (mid >= top && mid < top + height) {
          setActiveIndex(index);
        }
      });
    };

    const onScroll = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleAccordion = (i: number) =>
    setActiveIndex((prev) => (prev === i ? -1 : i));

  return (
    <>
      {/* FIRST SECTION */}
      <section className="relative w-full bg-[#062C2C] text-white py-24 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/mnt/data/d629bbbb-541e-423e-82c6-129bbddad2a5.png')",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold leading-tight">
            What is <br /> Adaptive Hiring?
          </h2>

          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-gray-200">
            Adaptive Hiring applies agile methodology to technical recruitment, enabling organizations 
            to rapidly scale engineering capacity with pre-vetted global talent. This modern approach 
            transforms how enterprises access specialized skills and deliver digital innovation.
          </p>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="w-full bg-[#F2FBF9] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-16">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              The Technical Talent<br />Challenge is Real<br />and Growing
            </h1>
            <p className="text-gray-600 text-lg">
              Organizations face increasing pressure to deliver digital transformation 
              while constrained by traditional hiring limitations. KIAQ's Adaptive Hiring 
              model provides the strategic solution for sustainable technical capacity.
            </p>
          </div>

          <div className="hidden md:block border-l border-gray-300"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
            {[img1, img2, img3, img4, img5, img6].map((img, i) => (
              <div key={i} className="flex gap-4">
                <img src={img} className="w-12 h-12" alt="" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {[
                      "Critical Skill Gaps",
                      "Limited Engineering Capacity",
                      "Escalating Talent Costs",
                      "Extended Recruitment Cycles",
                      "Slow Team Deployment",
                      "High Technical Turnover",
                    ][i]}
                  </h3>
                  <p className="text-gray-600 text-[15px">
                    {[
                      "Specialized roles remain unfilled for months",
                      "Insufficient bandwidth for innovation projects",
                      "Competitive markets drive compensation inflation",
                      "Traditional hiring processes delay project starts",
                      "Lengthy onboarding reduces immediate impact",
                      "Top talent seeks dynamic global opportunities",
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12">
      Strategic Applications for Adaptive Hiring
    </h2>

    <div className="grid md:grid-cols-[auto_1fr] gap-6 sm:gap-8 md:gap-10">
      <img
        src={img7}
        className="w-full md:w-[260px] lg:w-[300px] h-[200px] sm:h-[220px] md:h-[180px] lg:h-[200px] rounded-xl sm:rounded-2xl shadow-md object-cover"
        alt="Strategic Talent Solutions"
      />

      <div className="bg-gradient-to-br from-white to-gray-50 shadow-xl border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:shadow-2xl transition-shadow duration-300">
        <div
          className="flex justify-between items-start cursor-pointer group"
          onClick={() => setOpenFirst(!openFirst)}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 pr-4 group-hover:text-[#0fddcc] transition-colors">
            Enterprise Application Development
          </h3>

          <span
            className={`transition-all duration-300 flex-shrink-0 text-lg sm:text-xl text-[#0fddcc] ${
              openFirst ? "rotate-180" : ""
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            openFirst ? "max-h-[600px] mt-4 sm:mt-5 md:mt-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {checkItems.map((item, i) => (
            <div key={i} className="flex gap-2 sm:gap-3 mb-3 sm:mb-4 items-start">
              <span className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0fddcc] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs sm:text-sm mt-0.5">
                ✓
              </span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
      {dropdowns.map((label, i) => {
        const isOpen = activeIndex === i;

        return (
          <div
            key={i}
            className={`bg-white border-2 rounded-xl sm:rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
              isOpen 
                ? "border-[#0fddcc] shadow-md" 
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => toggleAccordion(i)}
          >
            <div className={`p-4 sm:p-5 md:p-6 ${isOpen ? "bg-[#0fddcc]/5" : ""} transition-colors duration-300`}>
              <div className="flex justify-between items-center">
                <span className={`text-base sm:text-lg md:text-xl font-semibold pr-4 transition-colors ${
                  isOpen ? "text-[#0fddcc]" : "text-gray-900"
                }`}>
                  {label}
                </span>
                <span
                  className={`transition-all duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-[#0fddcc]" : "text-gray-400"
                  }`}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  KIAQ delivers specialized {label.toLowerCase()} expertise through pre-vetted professionals 
                  who integrate seamlessly with your teams to drive innovation and deliver measurable business outcomes.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* SCROLL SECTION WITH IMAGE */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
    {/* Image Section - Shows first on mobile */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2">
      <div className="lg:sticky lg:top-28 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
        <img
          src={imgfocus}
          className="max-w-full max-h-full object-contain"
          alt="Strategic Global Talent"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1">
      {features.map((feature, i) => (
        <div
          key={i}
          ref={(el) => {
            contentRefs.current[i] = el;
          }}
          className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[75vh] flex items-center py-6 sm:py-8"
        >
          <div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 transition-all leading-tight"
              style={{
                opacity: activeIndex === i ? 1 : 0.3,
                color: UI_CONSTANTS.DARK,
              }}
            >
              {feature.title}
            </h3>

            <p
              className="text-base sm:text-lg transition-all leading-relaxed"
              style={{
                opacity: activeIndex === i ? 1 : 0.3,
                color: UI_CONSTANTS.GRAY,
              }}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="text-center mt-12 sm:mt-16 md:mt-20 px-4">
    <button
      className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full font-semibold hover:shadow-xl transition-shadow text-sm sm:text-base w-full sm:w-auto"
      style={{
        backgroundColor: UI_CONSTANTS.PRIMARY,
        color: UI_CONSTANTS.WHITE,
      }}
    >
      Connect with Global Tech Talent
    </button>
  </div>
</section>

      {/* COMPARISON TABLE SECTION */}
      <section className="bg-[#EAF4F1] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A3A36] leading-tight mb-6 sm:mb-8 md:mb-10">
      Transform Your Technical Hiring Strategy with KIAQ
    </h2>

    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-[#DCE7E4]">
      {/* Desktop Header */}
      <div className="hidden md:grid grid-cols-3 bg-[#D5E8E1]">
        <div className="py-4 md:py-5 px-4 md:px-6"></div>
        <div className="py-4 md:py-5 px-4 md:px-6 font-semibold text-[#0A3A36] text-sm md:text-base">
          Traditional Hiring
        </div>
        <div className="py-4 md:py-5 px-4 md:px-6 font-semibold text-white bg-[#0A3A36] text-sm md:text-base">
          Adaptive Hiring
        </div>
      </div>

      {data.map((row, index) => (
        <div
          key={index}
          className="border-t border-[#E4EBE8] flex flex-col md:grid md:grid-cols-3"
        >
          {/* Title - Full width on mobile */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 md:py-6 font-semibold text-[#0A3A36] text-base sm:text-lg md:text-base bg-[#F8FAF9] md:bg-transparent">
            {row.title}
          </div>

          {/* Traditional Hiring */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 md:py-6 border-t md:border-t-0 border-[#E4EBE8]">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0">{row.traditional.icon}</div>
              <div>
                <p className="font-semibold text-[#0A3A36] uppercase text-xs sm:text-sm mb-1">
                  Traditional Hiring
                </p>
                <p className="font-semibold text-[#0A3A36] text-xs sm:text-sm mb-1">
                  {row.traditional.heading}
                </p>
                <p className="text-[#5A6F68] text-xs sm:text-sm leading-relaxed">
                  {row.traditional.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Adaptive Hiring */}
          <div className="px-4 sm:px-6 py-4 sm:py-5 md:py-6 bg-[#F4FAF8] border-t md:border-t-0 border-[#E4EBE8]">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="flex-shrink-0">{row.adaptive.icon}</div>
              <div>
                <p className="font-semibold text-[#0A3A36] uppercase text-xs sm:text-sm mb-1">
                  Adaptive Hiring
                </p>
                <p className="font-semibold text-[#0A3A36] text-xs sm:text-sm mb-1">
                  {row.adaptive.heading}
                </p>
                <p className="text-[#5A6F68] text-xs sm:text-sm leading-relaxed">
                  {row.adaptive.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* TABS SECTION */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10 text-[#0A3A36] px-4">
    KIAQ Makes Adaptive Hiring Accessible
  </h2>

  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 border-b border-gray-200 pb-6 sm:pb-8 px-4 sm:px-6">
    {tabs.map((tab, index) => (
      <div
        key={index}
        onClick={() => setSelected(index)}
        className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full cursor-pointer transition-all border ${
          selected === index
            ? "bg-gradient-to-r from-[#0A3A36] to-[#00695C] text-white shadow-md border-transparent"
            : "bg-white border-gray-200 text-[#0A3A36] hover:shadow-sm"
        }`}
      >
        <img src={tab.icon} className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" alt="" />
        <span className="font-medium text-xs sm:text-sm whitespace-nowrap">{tab.label}</span>
      </div>
    ))}
  </div>

  <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">
    <div className="relative bg-[#C8E0D8] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg overflow-hidden min-h-[280px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] flex items-center justify-center order-1 lg:order-1">
      <img
        src={tabs[selected].image}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>

    <div className="flex flex-col justify-center px-2 sm:px-4 lg:px-0 order-2 lg:order-2">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A3A36] mb-3 sm:mb-4 leading-tight">
        {tabs[selected].title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
        {tabs[selected].desc}
      </p>
    </div>
  </div>
</section>

      {/* KIAQ ROI METRICS SECTION */}
      <section className="w-full bg-slate-950 relative overflow-hidden">
  {/* Background Pattern - Circular Grid */}
  <div className="absolute inset-0 opacity-5">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="circles"
          x="0"
          y="0"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="rgb(20, 184, 166)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circles)" />
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
    {/* Header */}
    <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight px-2">
        Adaptive Hiring Delivers Measurable Business Outcomes
      </h2>
      <p className="text-gray-400 text-sm sm:text-base max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2">
        Independent analysis demonstrates the significant economic impact of KIAQ's Adaptive Hiring model, 
        based on comprehensive customer interviews, enterprise surveys, and multi-year financial modeling.
      </p>
      <button className="bg-orange-400 hover:bg-orange-300 text-slate-950 font-semibold px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 rounded-lg transition-all shadow-lg shadow-orange-500/20 text-sm sm:text-base w-full sm:w-auto">
        Calculate Your ROI
      </button>
    </div>

    {/* Metrics Cards Grid */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {/* Hiring Efficiency Card */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-orange-700/60 transition-all">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8">
          Hiring Efficiency
        </h3>
        <div className="text-orange-400 mb-6 sm:mb-8 md:mb-10">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">106+</span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ml-2">hours</span>
        </div>
        <div className="border-t border-orange-900/40 pt-4 sm:pt-5 md:pt-6">
          <p className="text-gray-300 text-base sm:text-lg">Recruitment time saved per technical hire</p>
        </div>
      </div>

      {/* Project Productivity Card */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-orange-700/60 transition-all">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8">
          Project Velocity
        </h3>
        <div className="text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10">33%</div>
        <div className="border-t border-orange-900/40 pt-4 sm:pt-5 md:pt-6">
          <p className="text-gray-300 text-base sm:text-lg">Accelerated project completion timelines</p>
        </div>
      </div>

      {/* Talent Compliance Risk Card */}
      <div className="bg-slate-900/40 backdrop-blur-sm border border-orange-900/40 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:border-orange-700/60 transition-all sm:col-span-2 md:col-span-1">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8">
          Risk Mitigation
        </h3>
        <div className="text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-10">
          $640K
        </div>
        <div className="border-t border-orange-900/40 pt-4 sm:pt-5 md:pt-6">
          <p className="text-gray-300 text-base sm:text-lg">
            Avoided compliance and operational risks
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


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
        Strategic Resources for Modern Talent Acquisition
      </h2>
      <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
        Access All Resources
      </button>
    </div>

    {/* Cards Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={tenimg}
            alt="Future of Technical Hiring"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Industry Report
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            The Future of Technical Talent is Borderless
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Download Report <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={eleimg}
            alt="Enterprise Talent Strategy"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Enterprise Digital Transformation Through Global Talent
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read Analysis <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Global Talent Trends"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Market Research
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Global Technical Talent: Market Trends & Strategic Insights
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Access Research <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState, useRef } from 'react';
import webimg from "../assets/solutions/Data engineering and analytics hero.avif";
import { UI_CONSTANTS } from "../constants/colors";
import webimg2 from "../assets/66592e243ff567c6d20bf458_shutterstock_1903260658.avif";
import webimg3 from "../assets/665931b9c3884b006d99aea7_shutterstock_2178995507 1.avif";
import webimg4 from "../assets/6659318549edab4cae8985df_v617-bb-18-technology 1.webp";

import webimg8 from "../assets/usecase/6626c1bf2f6333755ec893d1_Layer_1 (2).svg";
import webimg9 from "../assets/usecase/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600 (1).svg";
import webimg10 from "../assets/usecase/6626c1bf2f6333755ec893fa_ViacomCBS (2).svg";
import webimg11 from "../assets/usecase/6626c1c02f6333755ec89435_Casper_Sleep_logo (2).svg";
import webimg12 from "../assets/usecase/6626c1c02f6333755ec89474_Cloudflare_Logo (2).svg";
import webimg13 from "../assets/usecase/66347e6ccfb7ada3bdf3ce34_Vector (3).svg";
import webimg14 from "../assets/usecase/665e67458fbe05d52c24cf21_groupm-logo.svg";
// import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import sol13 from '../assets/solutions/66551e33b51a48a01a04b49e_TWC _ 370 x 442.avif';
import sol14 from '../assets/solutions/66551e5ea419e51fd8602370_Mindshare.avif';
import sol15 from '../assets/solutions/66551df754960be0f32df34b_Frame 1073714194.avif';
import sol16 from '../assets/solutions/6655d8d4de6e142a88be6431_Nebula _ 370 x 446.avif';
import sol17 from '../assets/solutions/6657c42407afdd44de5fd97b_github logo.webp';
import sol18 from '../assets/solutions/6657c45988183db22b904624_TWC logo.webp';
import sol19 from '../assets/solutions/6657c49b629db5fe891a5454_mindshare logo.webp';
import sol20 from '../assets/solutions/6657c518ad72fe6656c7b9d6_nebula logo (1).webp';
import sol21 from '../assets/solutions/66343fa7e9d0576bd06f8b42_master-card-img.webp';
export default function WebAppDevelopmentHero() {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const testimonials = [
    {
      title: "Scalable data infrastructure processing 50TB+ daily with 99.99% uptime",
      quote: "KIAQ engineered a robust data pipeline that transformed our analytics capabilities. Their expertise in cloud data platforms and real-time processing enabled us to handle massive data volumes while maintaining exceptional performance and reliability for our enterprise operations.",
      name: "Dr. Michael Rodriguez",
      role: "Chief Data Officer, Financial Services Corp",
      image: sol15,
      logo: sol17
    },
    {
      title: "Real-time data platform reducing processing time from hours to seconds",
      quote: "The KIAQ team delivered a cutting-edge data engineering solution that revolutionized our data processing workflows. Their implementation of streaming data architecture and optimized ETL processes eliminated our data latency issues, enabling real-time business intelligence across the organization.",
      name: "Sarah Chen",
      role: "VP of Data Engineering, E-commerce Platform",
      image: sol13,
      logo: sol18
    },
    {
      title: "Cloud data migration achieving 40% cost reduction with enhanced performance",
      quote: "KIAQ's data engineering expertise enabled us to successfully migrate our on-premise data infrastructure to the cloud. Their solution not only reduced our operational costs significantly but also improved data accessibility and processing speed for our analytics teams.",
      name: "David Thompson",
      role: "CTO, Retail Analytics Group",
      image: sol14,
      logo: sol19
    },
    {
      title: "Enterprise data lake implementation unifying 15+ data sources",
      quote: "The data engineering team from KIAQ created a comprehensive data lake that consolidated our disparate data sources into a single source of truth. Their solution has dramatically improved data quality and enabled advanced analytics that were previously impossible.",
      name: "Jennifer Martinez",
      role: "Head of Data Strategy, Healthcare Solutions Inc",
      image: sol16,
      logo: sol20
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 720;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const logos = [webimg10, webimg8, webimg9, webimg12, webimg11, webimg14, webimg13];

  const [activeTab, setActiveTab] = useState<
  "Data Pipeline Engineering" | "Cloud Data Solutions" | "Real-time Analytics"
>("Real-time Analytics");

const tabs = [
  "Data Pipeline Engineering",
  "Cloud Data Solutions", 
  "Real-time Analytics",
];

const images = {
  "Data Pipeline Engineering": webimg2,
  "Cloud Data Solutions": webimg3,
  "Real-time Analytics": webimg4,
};

  return (
    <>
   <section
      className="relative w-full min-h-[90vh] flex items-center justify-start overflow-hidden"
      style={{ backgroundColor: UI_CONSTANTS.DARK }}
    >
      {/* Background image */}
      <img
        src={webimg}
        alt="Data Engineering and Analytics"
        className="absolute inset-0 w-full h-full object-cover object-center md:object-right z-0"
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
        <div className="max-w-[520px] mt-[8vh] sm:mt-[14vh]">
          {/* Title */}
          <h1
            className="text-white font-bold leading-snug mb-4 sm:mb-5"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
              lineHeight: 1.2,
            }}
          >
            Enterprise Data Engineering & Analytics Solutions
            <br />
            Building Foundations for Data-Driven Success
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
            KIAQ designs and implements robust data infrastructure, scalable pipelines, 
            and advanced analytics platforms that empower organizations to harness 
            the full potential of their data assets.
          </p>

          {/* CTA Button */}
          <button
            className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
            style={{
              backgroundColor: UI_CONSTANTS.WHITE,
              color: UI_CONSTANTS.DARK,
            }}
          >
            Explore Data Solutions
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-14 text-gray-200">
          <div>
            <p className="text-xl sm:text-2xl font-semibold text-white mb-1">98%</p>
            <p className="text-xs sm:text-sm opacity-90">Data pipeline reliability</p>
          </div>

          <div className="border-l border-white/20 pl-6 sm:pl-8">
            <p className="text-xl sm:text-2xl font-semibold text-white mb-1">200+</p>
            <p className="text-xs sm:text-sm opacity-90">Data engineering experts</p>
          </div>

          <div className="border-l border-white/20 pl-6 sm:pl-8">
            <p className="text-xl sm:text-2xl font-semibold text-white mb-1">32+</p>
            <p className="text-xs sm:text-sm opacity-90">Months average partnership</p>
          </div>
        </div>
      </div>
    </section>

  {/* {second section} */}
   <section className="relative w-full bg-white overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">

      {/* STAR PATTERN TOP-RIGHT */}
      <div
        aria-hidden
        className="absolute top-4 sm:top-8 right-4 sm:right-8 pointer-events-none"
        style={{ opacity: 0.12 }}
      >
        <svg width="180" height="100" viewBox="0 0 280 160" className="w-[180px] sm:w-[280px] h-auto">
          <defs>
            <g id="star">
              <path
                d="M8 0 L10.2 5.6 L16 6.4 L11.6 10.2 L12.8 16 L8 13 L3.2 16 L4.4 10.2 L0 6.4 L5.8 5.6 Z"
                fill="#FF6600"
              />
            </g>
          </defs>
          <g opacity="0.5">
            <use href="#star" x="0" y="0" />
            <use href="#star" x="36" y="0" />
            <use href="#star" x="72" y="0" />
            <use href="#star" x="108" y="0" />
            <use href="#star" x="144" y="0" />
            <use href="#star" x="180" y="0" />
            <use href="#star" x="18" y="28" />
            <use href="#star" x="54" y="28" />
            <use href="#star" x="90" y="28" />
            <use href="#star" x="126" y="28" />
            <use href="#star" x="162" y="28" />
            <use href="#star" x="198" y="28" />
            <use href="#star" x="36" y="56" />
            <use href="#star" x="72" y="56" />
            <use href="#star" x="108" y="56" />
            <use href="#star" x="144" y="56" />
          </g>
        </svg>
      </div>

      {/* STAR PATTERN BOTTOM-LEFT */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{ opacity: 0.10 }}
      >
        <svg width="220" height="180" viewBox="0 0 340 260" className="w-[220px] sm:w-[340px] h-auto">
          <defs>
            <g id="starB">
              <path
                d="M8 0 L10.2 5.6 L16 6.4 L11.6 10.2 L12.8 16 L8 13 L3.2 16 L4.4 10.2 L0 6.4 L5.8 5.6 Z"
                fill="#FF6600"
              />
            </g>
          </defs>
          <g opacity="0.5">
            {Array.from({ length: 6 }).map((_, row) =>
              Array.from({ length: 6 }).map((__, col) => (
                <use
                  key={`b-${row}-${col}`}
                  href="#starB"
                  x={col * 40 + (row % 2 === 0 ? 0 : 20)}
                  y={row * 36}
                />
              ))
            )}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="max-w-[980px] pr-0 sm:pr-12">
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-semibold text-[#011123] leading-tight">
            Comprehensive Data Engineering Services for Modern Enterprises
          </h2>

          <p className="text-gray-600 mt-3 max-w-[720px] text-[0.95rem] sm:text-[1.03rem] leading-[1.65]">
            From data pipeline development to cloud migration and real-time analytics, 
            we build scalable data infrastructure that drives business intelligence 
            and operational excellence.
          </p>
        </div>

        {/* TABS */}
        <div className="mt-6 sm:mt-8">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 max-w-[720px] pb-3">
            {tabs.map((tab, idx) => {
              const isActive = tab === activeTab;
              return (
                <div key={tab} className="flex items-center">
                  <button
                    onClick={() =>
                      setActiveTab(
                        tab as
                          | "Data Pipeline Engineering"
                          | "Cloud Data Solutions"
                          | "Real-time Analytics"
                      )
                    }
                    className="relative text-xs sm:text-sm md:text-base font-medium pb-2 transition-colors whitespace-nowrap"
                    style={{
                      color: isActive
                        ? "#011123"
                        : "rgba(1,17,35,0.6)",
                    }}
                  >
                    {tab}

                    {isActive && (
                      <span
                        className="absolute left-0 right-0"
                        style={{
                          height: 3,
                          bottom: -8,
                          background: "#FF6600",
                          borderRadius: 2,
                        }}
                      />
                    )}
                  </button>

                  {idx < tabs.length - 1 && (
                    <div
                      className="mx-2 sm:mx-4 hidden sm:block"
                      style={{
                        width: 36,
                        height: 1,
                        background: "rgba(1,17,35,0.06)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="max-w-[720px] border-b border-gray-200" />
        </div>

        {/* CONTENT + IMAGE */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-5">
            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#011123] mb-3">
              Expert Data Engineering Teams
            </h3>

            <p className="text-gray-600 text-[0.95rem] sm:text-base leading-[1.7] mb-4 sm:mb-5">
              KIAQ provides specialized data engineers, architects, and platform 
              specialists with deep expertise in modern data technologies, cloud 
              platforms, and scalable infrastructure design.
            </p>

            <button className="text-sm font-semibold border-b border-current text-[#011123] hover:text-[#00d4aa] transition">
              View Our Expertise
            </button>
          </div>

          <div className="md:col-span-7 flex justify-center md:justify-end">
            <div className="w-full max-w-[520px]">
              <img
                src={images[activeTab]}
                alt={activeTab}
                className="w-full h-auto rounded-lg sm:rounded-xl shadow-[0_10px_30px_rgba(2,6,23,0.12)] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* {third section} */}

   <section className="relative w-full bg-[#edf6f5] overflow-hidden py-20 px-6 lg:px-12">
  {/* Scrollable SVG Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20px 20px, rgba(0, 0, 0, 0.15) 1px, transparent 1px),
        radial-gradient(circle at 60px 60px, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "80px 80px",
      backgroundAttachment: "scroll",
    }}
  ></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-[#011123] mb-14">
      Comprehensive Data Engineering Service Portfolio
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 justify-items-center items-stretch">
      {[
        {
          title: "Data Pipeline Development",
          desc: "Design and implementation of scalable ETL/ELT pipelines for efficient data processing and transformation",
          gradient: "from-[#e3f3e9] to-[#f1faf4]",
          pattern:
            "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
        },
        {
          title: "Cloud Data Migration",
          desc: "Seamless migration of on-premise data infrastructure to cloud platforms with optimized performance",
          gradient: "from-[#b6d9d2] to-[#d3efea]",
          pattern:
            "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
        },
        {
          title: "Real-time Data Streaming",
          desc: "Implementation of streaming architectures for immediate data processing and analytics",
          gradient: "from-[#f2f5f6] to-[#f7fbfb]",
          pattern:
            "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
        },
        {
          title: "Data Warehouse Solutions",
          desc: "Building optimized data warehouses for business intelligence and advanced analytics",
          gradient: "from-[#e7f6dc] to-[#f1fbef]",
          pattern:
            "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
        },
        {
          title: "Data Governance & Quality",
          desc: "Establishing data governance frameworks and quality assurance processes",
          gradient: "from-[#b6d9d2] to-[#d3efea]",
          pattern:
            "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
        },
      ].map((card, idx) => (
        <div
          key={idx}
          className={`relative w-full max-w-[230px] min-h-[240px] p-6 rounded-xl shadow-sm bg-gradient-to-b ${card.gradient} transition-all duration-300 hover:scale-[1.03] hover:shadow-md flex flex-col justify-between`}
        >
          <div>
            <h3 className="text-[15px] font-semibold text-[#011123] mb-2 leading-snug">
              {card.title}
            </h3>
            <p className="text-sm text-[#011123b3] leading-snug">{card.desc}</p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-14 rounded-b-xl"
            style={{
              backgroundImage: card.pattern,
              backgroundSize: "24px 24px",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "bottom",
              opacity: 0.6,
            }}
          ></div>
        </div>
      ))}
    </div>

    {/* Auto Scrolling Logos Row */}
    <div className="relative overflow-hidden mt-20">
      <div className="flex items-center justify-start gap-16 md:gap-20 opacity-70 animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="client logo"
            className="h-6 md:h-7 w-auto grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
          />
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
             <section className="relative w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-8 sm:mb-10 md:mb-14">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-2">
      Trusted by Industry Leaders for Data Engineering Excellence
    </h2>
  </div>

  {/* Scrollable Cards Container */}
  <div className="relative">
    {/* Left Arrow */}
    {showLeftArrow && (
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-100 transition-all"
      >
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
      </button>
    )}

    {/* Right Arrow */}
    {showRightArrow && (
      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-100 transition-all"
      >
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
      </button>
    )}

    {/* Horizontal Scroll Section */}
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="overflow-x-auto scrollbar-hide scroll-smooth pb-4 sm:pb-6"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4 sm:px-6 md:px-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden w-[320px] sm:w-[600px] md:w-[700px] lg:w-[800px] min-h-[450px] sm:h-[380px] md:h-[420px] flex-shrink-0 hover:shadow-2xl transition-all duration-300"
          >
            {/* Text Section */}
            <div className="flex flex-col justify-between p-6 sm:p-8 md:p-10 w-full sm:w-[55%]">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-snug">
                  {testimonial.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 md:mb-8">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-sm sm:text-base font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative w-full sm:w-[45%] h-[200px] sm:h-auto bg-gray-200">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Company Logos */}
  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-20 opacity-60 px-4">
    <img src={sol17} alt="GitHub" className="h-4 sm:h-5 md:h-7 object-contain" />
    <img src={sol18} alt="The Weather Company" className="h-4 sm:h-5 md:h-7 object-contain" />
    <img src={sol19} alt="Mindshare" className="h-4 sm:h-5 md:h-7 object-contain" />
    <img src={sol20} alt="Nebula" className="h-4 sm:h-5 md:h-7 object-contain" />
  </div>

  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `}</style>
</section>
  
    {/* fourth.one section */}

    {/* Enterprise Data Solutions Section */}
<section className="relative w-full bg-white py-16 px-4 lg:px-10 overflow-hidden">
  {/* Background Pattern */}
  <div
    className="absolute inset-0 opacity-15 pointer-events-none"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 1px, transparent 1px),
        radial-gradient(circle at 60px 60px, rgba(0,0,0,0.1) 1px, transparent 1px)
      `,
      backgroundSize: "70px 70px",
    }}
  />

  <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    {/* Left Image */}
    <div className="relative w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={sol21}
          alt="Enterprise Data Solutions"
          className="w-full h-[380px] object-cover"
        />
      </div>

      {/* Data Solutions Logo Overlay */}
      <div className="absolute bottom-5 left-5">
        <div className="bg-white px-4 py-2 rounded-lg shadow-md">
          <span className="text-sm font-semibold text-gray-900">Data Solutions</span>
        </div>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
        Enterprise Data Infrastructure Driving Digital Transformation
      </h2>
      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
        KIAQ partners with global enterprises to build scalable data infrastructure 
        that transforms business operations. Our data engineering expertise combined 
        with industry-specific knowledge delivers measurable ROI through improved 
        data accessibility, enhanced analytics capabilities, and optimized operational efficiency.
      </p>
      <button className="px-5 py-2.5 border border-gray-800 text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-all">
        View Data Engineering Case Studies
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
        Data Engineering Insights & Resources
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
            alt="Modern Data Architecture"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            White Paper
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Modern Data Architecture: Best Practices & Implementation
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
            alt="Cloud Data Migration"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Successful Cloud Data Migration: Strategies & Lessons Learned
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Read Case Study <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Real-time Data Processing"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Technical Guide
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Real-time Data Processing: Architecture & Implementation Guide
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Download Guide <span className="ml-2">→</span>
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
          Transform Your Business with Advanced Data Engineering
        </h2>

        <button
          style={{
            backgroundColor: UI_CONSTANTS.DARK,
            color: UI_CONSTANTS.WHITE,
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          Start Your Data Journey
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
            CONSULT OUR EXPERTS
          </p>
        </div>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
          style={{ color: '#173B3F' }}
        >
          Discuss Your Data Engineering Requirements
        </h2>

        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: '#173B3F',
            border: '2px solid rgba(23, 59, 63, 0.2)',
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
        >
          Schedule Data Consultation
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
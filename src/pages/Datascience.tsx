import { useState } from 'react';
import webimg from "../assets/solutions/ds3.jpg";
import { UI_CONSTANTS } from "../constants/colors";
import webimg2 from "../assets/freelancer-woman-comparing-graphics-from-clipboard-with-grafics-from-computer-business-office.jpg";
import webimg3 from "../assets/data-center-programmers-collaborating-working-neural-networks-ai-databases.jpg";
import webimg4 from "../assets/3d-rendering-biorobots-concept.jpg";

import webimg8 from "../assets/dslogo/ChatGPT_Image_Nov_29__2025__12_07_06_PM-removebg-preview.png";
import webimg9 from "../assets/dslogo/python_logo-removebg-preview.png";
import webimg10 from "../assets/dslogo/ML-removebg-preview.png";
import webimg11 from "../assets/dslogo/big_data-removebg-preview (1).png";
import webimg12 from "../assets/dslogo/data_visuali-removebg-preview.png";
import webimg13 from "../assets/dslogo/hdytujk-removebg-preview.png";
import webimg14 from "../assets/dslogo/Deep_learning-removebg-preview.png";
// import webimg15 from "../assets/usecase/66561ebf26b4d7de96e4e0ed_Wendy TWC.avif";
import tenimg from '../assets/whykiaq/1.jpg';
import eleimg from '../assets/whykiaq/2.jpg';
import twlimg from '../assets/whykiaq/3.jpg';

import sol21 from '../assets/solutions/male-suit-with-virtual-reality-glasses-his-head-working-virtual-financial-world.jpg';
export default function WebAppDevelopmentHero() {

 

  const logos = [webimg10, webimg8, webimg9, webimg12, webimg11, webimg14, webimg13];

  const [activeTab, setActiveTab] = useState<
  "Predictive Analytics" | "Machine Learning" | "AI Solutions"
>("AI Solutions");

const tabs = [
  "Predictive Analytics",
  "Machine Learning",
  "AI Solutions",
];

const images = {
  "Predictive Analytics": webimg2,
  "Machine Learning": webimg3,
  "AI Solutions": webimg4,
};

  return (
    <div className="font-['Inter_Variable',_sans-serif]">
    <section
  className="relative w-full min-h-[90vh] flex items-center justify-start overflow-hidden font-['Inter_Variable',_sans-serif]"
  style={{ backgroundColor: UI_CONSTANTS.DARK }}
>
  {/* Background image */}
  <img
    src={webimg}
    alt="Data Science and AI"
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
  <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-10 sm:py-0">
    <div className="max-w-[520px] mt-[12vh] sm:mt-[14vh] text-left sm:text-left">
      {/* Title */}
      <h1
        className="text-white font-bold leading-snug mb-4 sm:mb-5 text-justify sm:text-left"
        style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.7rem)",
          lineHeight: 1.2,
        }}
      >
        Advanced Data Science & AI Solutions
        <br />
        Driving Business Transformation
      </h1>

      {/* Description */}
      <p
        className="text-gray-200 font-light mb-6 sm:mb-8 text-justify"
        style={{
          fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
          lineHeight: 1.65,
          color: "rgba(255,255,255,0.85)",
        }}
      >
        KIAQ delivers cutting-edge data science and AI solutions that unlock
        actionable insights, automate complex processes, and create sustainable
        competitive advantages for forward-thinking enterprises.
      </p>

      {/* CTA Button */}
      <button
        className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm md:text-base font-semibold rounded-md shadow-md transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
        style={{
          backgroundColor: UI_CONSTANTS.PRIMARY,
          color: UI_CONSTANTS.WHITE,
        }}
      >
        Learn More
      </button>
    </div>

    {/* Stats Section */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-14 text-gray-200 text-left sm:text-left">
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">97%</p>
        <p className="text-xs sm:text-sm opacity-90">Project success rate</p>
      </div>

      <div className="sm:border-l border-white/20 sm:pl-8">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">300+</p>
        <p className="text-xs sm:text-sm opacity-90">AI & Data Science experts</p>
      </div>

      <div className="sm:border-l border-white/20 sm:pl-8">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-1">28+</p>
        <p className="text-xs sm:text-sm opacity-90">Months average partnership</p>
      </div>
    </div>
  </div>
</section>


  {/* {second section} */}
<section className="relative w-full bg-white overflow-hidden py-7 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 font-['Inter_Variable',_sans-serif]">
  {/* STAR PATTERN TOP-RIGHT */}
  <div
    aria-hidden
    className="absolute top-3 sm:top-5 right-4 sm:right-8 pointer-events-none"
    style={{ opacity: 0.12 }}
  >
    <svg width="180" height="100" viewBox="0 0 280 160" className="w-[130px] sm:w-[230px] h-auto">
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
      </g>
    </svg>
  </div>

  {/* STAR PATTERN BOTTOM-LEFT */}
  <div
    aria-hidden
    className="absolute bottom-0 left-0 pointer-events-none"
    style={{ opacity: 0.10 }}
  >
    <svg width="220" height="180" viewBox="0 0 340 260" className="w-[170px] sm:w-[300px] h-auto">
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
              x={col * 38 + (row % 2 === 0 ? 0 : 18)}
              y={row * 34}
            />
          ))
        )}
      </g>
    </svg>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* HEADING */}
    <div className="max-w-[900px] pr-0 sm:pr-10">
      <h2 className="text-[20px] sm:text-[26px] md:text-[32px] font-semibold text-[#011123] leading-tight">
        Comprehensive Data Science & AI Services for Enterprise Excellence
      </h2>

      <p className="text-gray-600 mt-2 max-w-[700px] text-[0.9rem] sm:text-[1rem] leading-[1.55] text-justify">
        From predictive analytics to enterprise AI implementation, we deliver 
        data-driven solutions that solve complex business challenges and drive 
        measurable results.
      </p>
    </div>

    {/* TABS */}
    <div className="mt-3 sm:mt-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-5 max-w-[700px] pb-1 sm:pb-2">
        {tabs.map((tab, idx) => {
          const isActive = tab === activeTab;
          return (
            <div key={tab} className="flex items-center">
              <button
                onClick={() =>
                  setActiveTab(
                    tab as "Predictive Analytics" | "Machine Learning" | "AI Solutions"
                  )
                }
                className="relative text-xs sm:text-sm md:text-base font-medium pb-1 transition-colors whitespace-nowrap"
                style={{
                  color: isActive ? "#011123" : "rgba(1,17,35,0.6)",
                }}
              >
                {tab}

                {isActive && (
                  <span
                    className="absolute left-0 right-0"
                    style={{
                      height: 2.5,
                      bottom: -5,
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
                    width: 28,
                    height: 1,
                    background: "rgba(1,17,35,0.06)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="max-w-[700px] border-b border-gray-200" />
    </div>

    {/* CONTENT + IMAGE */}
    <div className="mt-5 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
      <div className="md:col-span-5">
        <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#011123] mb-2">
          Expert Data Science & AI Teams
        </h3>

        <p className="text-gray-600 text-[0.9rem] sm:text-base leading-[1.6] mb-3 text-justify">
          KIAQ provides specialized data scientists, ML engineers, and AI 
          specialists with deep expertise in modern frameworks, cloud platforms, 
          and industry-specific applications to deliver transformative solutions.
        </p>

        <button className="text-sm font-semibold border-b border-current text-[#011123] hover:text-[#00d4aa] transition">
          Learn More
        </button>
      </div>

      <div className="md:col-span-7 flex justify-center md:justify-end">
        <div className="w-full max-w-[430px]">
          <img
            src={images[activeTab]}
            alt={activeTab}
            className="w-full h-auto rounded-lg sm:rounded-xl shadow-[0_8px_22px_rgba(2,6,23,0.09)] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>




    {/* {third section} */}

   <section className="relative w-full bg-[#edf6f5] overflow-hidden py-20 px-6 lg:px-12 font-['Inter_Variable',_sans-serif]">
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
      Comprehensive Data Science & AI Service Portfolio
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 justify-items-center items-stretch">
      {[
        {
  title: "Predictive Analytics",
  desc: "Advanced statistical modeling and forecasting to anticipate market trends and customer behavior with precision-driven insights",
  gradient: "from-[#e3f3e9] to-[#f1faf4]",
  pattern:
    "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
},
{
  title: "Machine Learning Solutions",
  desc: "Custom ML models for classification, regression, and pattern recognition applications with scalable deployment frameworks",
  gradient: "from-[#b6d9d2] to-[#d3efea]",
  pattern:
    "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
},
{
  title: "Natural Language Processing",
  desc: "Text analysis, sentiment analysis, and language understanding for unstructured data with contextual intelligence capabilities",
  gradient: "from-[#f2f5f6] to-[#f7fbfb]",
  pattern:
    "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
},
{
  title: "Computer Vision Systems",
  desc: "Image and video analysis for quality control, surveillance, and automation with real-time processing algorithms",
  gradient: "from-[#e7f6dc] to-[#f1fbef]",
  pattern:
    "radial-gradient(circle at center, rgba(156,175,136,0.25) 8%, transparent 8%)",
},
{
  title: "AI Strategy & Consulting",
  desc: "End-to-end AI implementation roadmap and digital transformation advisory with measurable business impact assessment",
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
            <p className="text-sm text-[#011123b3] leading-snug text-justify">{card.desc}</p>
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
      <div className="flex items-center justify-start gap-16 md:gap-22 opacity-70 animate-scroll">
        {[...logos, ...logos].map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="client logo"
            className="h-22 md:h-26 w-auto grayscale hover:grayscale-0 transition duration-300 flex-shrink-0"
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
           
  
    {/* fourth.one section */}

    {/* Enterprise AI Solutions Section */}
<section className="relative w-full bg-white py-12 px-4 sm:px-6 lg:px-10 overflow-hidden font-['Inter_Variable',_sans-serif]">
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

  <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
    {/* Left Image */}
    <div className="relative w-full lg:w-1/2">
      <div className="rounded-2xl overflow-hidden shadow-md">
        <img
          src={sol21}
          alt="Enterprise AI Solutions"
          className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover"
        />
      </div>

      {/* AI Solutions Logo Overlay */}
      <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5">
        <div className="bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md">
          <span className="text-xs sm:text-sm font-semibold text-gray-900">AI Solutions</span>
        </div>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3 sm:mb-4 text-justify">
        Enterprise AI Implementation Driving Digital Transformation
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-justify">
        KIAQ partners with global enterprises to implement scalable AI solutions 
        that transform business operations. Our data science expertise combined 
        with industry-specific knowledge delivers measurable ROI through improved 
        efficiency, enhanced decision-making, and innovative product development.
      </p>
      <button className="px-4 sm:px-5 py-2 border border-gray-800 text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-all">
        Learn AI Case Studies
      </button>
    </div>
  </div>
</section>

        {/* {fifth section} */}

    <section className="relative w-full bg-[#f8fafc] text-black py-24 overflow-hidden font-['Inter_Variable',_sans-serif]">
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
        Data Science & AI Insights & Resources
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
            alt="AI Implementation Guide"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            AI Strategy
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Implementing AI Solutions: From Concept to Production
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
            alt="Machine Learning Trends"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            ML Research
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Advanced Machine Learning Techniques for Real-World Applications
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Learn More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-500 hover:bg-[#011123] hover:text-white">
        <div className="overflow-hidden">
          <img
            src={twlimg}
            alt="Data Science ROI"
            className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide group-hover:text-gray-300">
            Data Analytics
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-white">
            Data-Driven Decision Making: Analytics for Business Growth
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline group-hover:text-[#68b39d]"
          >
            Learn More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
          {/* {6th Section} */}

         <section className="dual-action-button-cta font-['Inter_Variable',_sans-serif]">
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
          Transform Your Business with Advanced Data Science & AI
        </h2>

        <button
          style={{
            backgroundColor: UI_CONSTANTS.DARK,
            color: UI_CONSTANTS.WHITE,
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
        >
          Start Your AI Journey
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
          Discuss Your Data Science & AI Requirements
        </h2>

        <button
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: '#173B3F',
            border: '2px solid rgba(23, 59, 63, 0.2)',
          }}
          className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
        >
          Schedule AI Consultation
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
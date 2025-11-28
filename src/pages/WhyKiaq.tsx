import kiaqimag from '../assets/whykiaq/665a571d3afa925ba1844fcd_Why Join Andela - Hero.avif'

import imgwh from "../assets/Home1/image.png";
import { FaGlobe, FaChalkboardTeacher, FaSmile, FaUsers, FaHandshake, FaShareAlt } from "react-icons/fa";
import ourimg from '../assets/Home1/our-team01.webp';
import { Heart, TrendingUp, Shield, Briefcase, ArrowUpRight,Globe2, Users,  Smile } from 'lucide-react';
import { useEffect, useState } from "react";

interface StatBoxProps {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  Icon: any;
}

const StatBox = ({ label, value, suffix = "", description, Icon }: StatBoxProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-[#002b38] rounded-2xl p-8 text-center shadow-lg w-full transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <Icon size={48} strokeWidth={1.5} className="text-[#ff5500]" />
      </div>

      <h3 className="text-[#ffffff] text-lg font-semibold mb-3">{label}</h3>

      <p className="text-[#ff5500] text-5xl font-bold leading-tight">
        {count}{suffix}
      </p>

      <p className="text-gray-300 text-sm mt-3 leading-relaxed">{description}</p>
    </div>
  );
};



export default function WhyKiaq() {
 
  return (
    <>
     
     {/* First Section */}
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
    KIAQ TECHNOLOGIES
  </p>

  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-snug">
    Strategic Tech Partner for Business Transformation
  </h1>

  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
    Beyond IT Services - From IT Support to Strategic Tech Partnership. At Kiaq Technologies, we go beyond traditional IT support to become your strategic technology partner. Our mission is to align innovative software solutions with your long-term business goals, ensuring seamless operations, enhanced efficiency, and sustainable growth.
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

      {/* Second Section */}
   
    <section className="w-full bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto bg-[#fff2eb] rounded-2xl shadow-sm overflow-hidden">
    <div className="flex flex-col md:flex-row">

  {/* LEFT SIDE — Explore More Heading with Pattern */}
  <div className="relative flex flex-col justify-center items-start p-16 md:w-[32%] bg-[#fff2eb] border-b md:border-b-0 md:border-r border-[#D7E0D2]">
    <h2 className="text-4xl font-extrabold text-[#0F3E40] leading-snug mb-2">
      Why Choose Kiaq ?
    </h2>
  </div>

  {/* RIGHT SIDE — Paragraph + Bullet Points */}
  <div className="p-12 flex flex-col justify-start items-start bg-[#fff2eb]">
    {/* Paragraph */}
    <h1 className="text-xl text-gray-700 mb-6 leading-relaxed">
      With a 05-year track record in IT, we create reliable, forward-thinking technology solutions designed to help businesses scale and excel in the evolving digital era. Excellence is the cornerstone of our work.
    </h1>

    {/* Bullet Points */}
    <ul className="list-disc pl-5 space-y-4 text-sm text-gray-700">
      <li>Trusted Tech Professionals for Your Most Demanding IT Needs</li>
      <li>Tech-Driven Plans, Perfectly Aligned with Your Business Needs</li>
      <li>Innovative Technologies That Drive Business Success</li>
    </ul>
  </div>

</div>

  </div>
</section>





    {/* Third Section */}
  


 <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12">
            <button className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition whitespace-nowrap">
              Why Choose Us
            </button>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
              From Vision to Execution, Building Tomorrow's Technology Today
            </h1>
          </div>
          <p className="text-slate-700 max-w-xs text-justify leading-relaxed">
            <span className="font-semibold">Kiaq</span> is built on a foundation of relentless improvement. We sharpen our technical skills daily and pursue excellence in all our solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Image/Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
            <img
              src={ourimg}
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          
          </div>

          {/* Right Values Grid */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 relative shadow-2xl min-h-[500px] lg:min-h-[600px]">
            <div className="grid grid-cols-2 gap-6 sm:gap-8 h-full">
              {[ 
                { icon: <Heart className="w-7 h-7 text-purple-300" />, title: 'Empathy', desc: 'We prioritize deep understanding and empathy to deliver tech solutions tailored to each client\'s unique needs.' },
                { icon: <TrendingUp className="w-7 h-7 text-purple-300" />, title: 'Performance Driven', desc: "We're dedicated to delivering top-tier solutions while continuously enhancing performance to surpass expectations." },
                { icon: <Shield className="w-7 h-7 text-purple-300" />, title: 'Honest & Integrity', desc: 'Our tech foundation is built on trust and transparency, driving ethical innovation in every project.' },
                { icon: <Briefcase className="w-7 h-7 text-purple-300" />, title: 'Teamwork & Collaboration', desc: 'Our commitment to collaborative innovation creates a teamwork-driven environment that propels us toward shared success.' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="bg-slate-700/50 rounded-full p-5 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Center Circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-200 rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-xl z-10">
              <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-800 mb-1" />
              <p className="text-slate-800 font-semibold text-xs sm:text-sm text-center leading-tight px-2">
                Commitment To<br />Growth!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Fourth Section */}

     

    {/* Fifth Section */}
  
<section className="relative w-full bg-[#fff2eb] text-black py-24 overflow-hidden">
      {/* Background Flower Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(104, 179, 157, 0.4) 1px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(104, 179, 157, 0.4) 1px, transparent 0)
          `,
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Leave the groundwork to us
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We provide premium customer and talent support services so you can focus on optimizing the
          success of each and every project.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {/* Item 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaGlobe size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Talent Success</h4>
              <p className="text-gray-700 text-sm mt-1">
                Manage project kickoff, onboarding, payment, and talent administration.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaChalkboardTeacher size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Training and Upskilling</h4>
              <p className="text-gray-700 text-sm mt-1">
                Our Learning Community offers numerous skill development programs.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaSmile size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Customer Success</h4>
              <p className="text-gray-700 text-sm mt-1">
                Your customer success partner is your primary point of contact.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaUsers size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Extensive Resources</h4>
              <p className="text-gray-700 text-sm mt-1">
                Hiring in untapped markets requires experience. You can leverage ours.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaHandshake size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                Flexible Engagement Models
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Bring talent on board for as long or little as you require.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaShareAlt size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                Strategic Support Services
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Get the help you need with every conceivable engagement activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Fifth Section */}
       <section className="w-full py-20 bg-white flex flex-col items-center px-6">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#011123]">
       KIAQ At A Glance
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
        
        <StatBox
          label="Clients Worldwide"
          value={120}
          suffix="+"
          description="Global clients trust KIAQ for reliable solutions."
          Icon={Globe2}
        />

        <StatBox
          label="Experience Engineers"
          value={60}
          suffix="+"
          description="Skilled engineers delivering high-quality work worldwide."
          Icon={Users}
        />

        <StatBox
          label="Completed Projects"
          value={70}
          suffix="+"
          description="Successfully completed projects across multiple industries."
          Icon={Briefcase}
        />

        <StatBox
          label="Satisfaction"
          value={120}
          suffix="%"
          description="Customers consistently rate KIAQ with top satisfaction scores."
          Icon={Smile}
        />

      </div>
    </section>

    {/* Sixth Section */}

     

    {/* Seventh Section */}

        
<section className="w-full py-20 px-6 bg-white flex justify-center">
<div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 items-center gap-0">


{/* LEFT IMAGE */}
<div className="w-full h-[520px] rounded-l-2xl overflow-hidden">
<img src={imgwh} alt="Tech" className="w-full h-full object-cover" />
</div>


{/* RIGHT CONTENT */}
<div className="bg-[#032C33] text-white p-14 rounded-r-2xl h-full flex flex-col justify-center">
<h2 className="text-[32px] font-semibold leading-snug text-center mb-8">
Strategic Tech Partner, Not Just <br /> Another IT Provider
</h2>


<p className="text-gray-200 text-[15px] leading-relaxed mb-6 text-justify">
Kiaq Technologies brings deep technical expertise across modern software development, cloud computing,
cybersecurity, and enterprise IT solutions. Our skilled team leverages cutting-edge technologies to design,
develop, and deploy scalable systems tailored to your unique business needs. With a focus on innovation,
quality, and performance, we help businesses embrace digital transformation and stay ahead in a rapidly
evolving tech landscape.
</p>


<p className="text-gray-200 text-[15px] leading-relaxed text-justify">
At Kiaq Technologies, our strength lies in delivering advanced, end-to-end technology solutions that solve
real business challenges. From custom software development and cloud integration to data analytics and
automation, we combine technical depth with industry insight. Our team stays ahead of the curve with the
latest tools and frameworks to ensure secure, agile, and future-ready solutions for enterprises of all sizes.
</p>
</div>
</div>
</section>

        {/* {8th Section} */}

        
    </>




  );
}
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from "../assets/Home1/h1.jpg";
import img2 from "../assets/Home1/c1.jpg";
import img3 from "../assets/Home1/d1.jpg";
import img4 from "../assets/Home1/u1.jpg";
import img5 from "../assets/Home1/af1.jpg";
import img6 from "../assets/Home1/bc1.jpg";
import img7 from "../assets/Home1/ioy1.jpg";


export default function ConsultingServices() {
  const testimonials = [
    {
      quote: "KIAQ connected us with exceptional talent",
      text: "The engineers we hired through KIAQ delivered outstanding results. Their technical depth and collaborative approach significantly improved our infrastructure.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions"
    },
    {
      quote: "Impressive data expertise",
      text: "KIAQ helped us onboard a highly skilled data specialist who elevated our analytics performance. The impact was immediate and beyond expectations.",
      name: "Michael Chen",
      position: "Head of Data",
      company: "DataDriven Inc"
    },
    {
      quote: "AI talent that drives real outcomes",
      text: "Through KIAQ, we found an AI expert who built models that boosted our operational efficiency by 40%. Truly exceptional capability and dedication.",
      name: "Emma Rodriguez",
      position: "VP of Innovation",
      company: "FutureTech Corp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {}, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-3 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Technology that drives your business forward.
            </h1>
            <button className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">
              View All Resources
            </button>
          </div>

          {/* Featured Card (now uses img1) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-5 sm:mb-6 lg:mb-8 bg-white rounded-lg shadow-sm overflow-hidden group hover:bg-[#011123] transition-all duration-500">
            
            {/* Text Section */}
            <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 group-hover:text-white order-2 lg:order-1">
              <div>
                <p className="text-xs sm:text-xs font-semibold text-gray-500 tracking-wider mb-3 sm:mb-4 group-hover:text-gray-300">
                  AI-Driven Security Monitoring
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-white leading-tight">
                  Real-Time Threat Detection
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 lg:mb-8 group-hover:text-gray-300">
                  Monitor, detect, and mitigate cybersecurity threats in real time with intelligent AI-powered systems.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white text-sm sm:text-base">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Image Section (replaced gradient with img1) */}
            <div
              className="relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] bg-cover bg-center order-1 lg:order-2 transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${img1})` }}
            ></div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img5})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  AI & Machine Learning Solutions
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Artificial Intelligence
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img6})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  Blockchain & Web3 Development
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Blockchain Technology
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img7})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  IoT & Edge Computing
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Internet of Things
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 lg:mt-12">

            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img2})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  Cloud Native & Microservices
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Cloud Solutions
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img3})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  Data Science & Analytics
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Big Data Analytics
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div
                className="relative h-40 sm:h-44 lg:h-65 bg-cover bg-center"
                style={{ backgroundImage: `url(${img4})` }}
              ></div>
              <div className="p-4 sm:p-5 lg:p-6 group-hover:text-white">
                <p className="text-xs font-semibold text-gray-500 group-hover:text-gray-300 tracking-wider mb-2">
                  Cybersecurity & DevSecOps
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 leading-tight">
                  Cybersecurity
                </h3>
                <a href="#" className="inline-flex items-center text-gray-900 group-hover:text-white font-semibold hover:gap-2 transition-all text-sm">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    const interval = setInterval(() => {
      // setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Adaptive Hiring Resources Section */}
      <div className="min-h-screen bg-gray-50 p-3 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Put Adaptive Hiring to work for you
            </h1>
            <button className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 border-2 border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base whitespace-nowrap">
              View All Resources
            </button>
          </div>

          {/* Featured Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-5 sm:mb-6 lg:mb-8 bg-white rounded-lg shadow-sm overflow-hidden group hover:bg-[#011123] transition-all duration-500">
            <div className="p-5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-500 group-hover:text-white order-2 lg:order-1">
              <div>
                <p className="text-xs sm:text-xs font-semibold text-gray-500 tracking-wider mb-3 sm:mb-4 group-hover:text-gray-300">
                  DIGITAL TRANSFORMATION
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-white leading-tight">
                  Building an AI-Ready Workforce
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 lg:mb-8 group-hover:text-gray-300">
                  AI is reshaping how companies operate and build their teams. This guide explores the essential steps to develop a workforce equipped for modern AI-driven environments and future-ready innovation.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white text-sm sm:text-base"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] bg-gradient-to-br from-orange-500 via-purple-800 to-purple-900 overflow-hidden order-1 lg:order-2">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                <div className="relative w-full h-full">
                  <div className="absolute bottom-0 left-0 w-3/5 h-4/5 bg-orange-500"></div>
                  <div className="absolute bottom-0 left-[20%] w-8 sm:w-10 lg:w-12 h-[70%] bg-purple-800"></div>
                  <div className="absolute bottom-0 left-[35%] w-8 sm:w-10 lg:w-12 h-[55%] bg-purple-800"></div>
                  <div className="absolute bottom-0 left-[50%] w-8 sm:w-10 lg:w-12 h-[40%] bg-purple-800"></div>
                  <div className="absolute top-4 sm:top-6 lg:top-8 right-6 sm:right-8 lg:right-12 w-0 h-0 border-l-[40px] sm:border-l-[50px] lg:border-l-[60px] border-l-transparent border-r-[40px] sm:border-r-[50px] lg:border-r-[60px] border-r-transparent border-b-[70px] sm:border-b-[85px] lg:border-b-[100px] border-b-amber-400 rotate-12"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Column Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute top-1/4 left-1/4 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 bg-purple-300 opacity-60 blur-2xl"></div>
                  <div className="absolute top-1/3 right-1/4 w-32 sm:w-36 lg:w-40 h-32 sm:h-36 lg:h-40 bg-pink-400 opacity-50 blur-3xl"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-28 sm:w-32 lg:w-36 h-28 sm:h-32 lg:h-36 bg-indigo-400 opacity-40 blur-2xl"></div>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 transition-all duration-500 group-hover:text-white">
                <p className="text-xs sm:text-xs font-semibold text-gray-500 tracking-wider mb-2 sm:mb-3 group-hover:text-gray-300">
                  DIGITAL TRANSFORMATION
                </p>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-white leading-tight">
                  Simplify cloud migration with the right talent
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-orange-900 via-slate-900 to-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                  <div className="absolute top-1/4 right-1/3 w-1 h-24 sm:h-28 lg:h-32 bg-gradient-to-b from-orange-300 to-transparent rotate-45 blur-sm"></div>
                  <div className="absolute top-1/2 right-1/2 w-1 h-20 sm:h-22 lg:h-24 bg-gradient-to-b from-emerald-300 to-transparent -rotate-12 blur-sm"></div>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 transition-all duration-500 group-hover:text-white">
                <p className="text-xs sm:text-xs font-semibold text-gray-500 tracking-wider mb-2 sm:mb-3 group-hover:text-gray-300">
                  UPSKILL / RESKILL
                </p>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-white leading-tight">
                  Building modern apps with real-time capabilities
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
              <div className="relative h-40 sm:h-44 lg:h-48 bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-center px-3 sm:px-4 pb-3 sm:pb-4 transition-transform duration-700 group-hover:scale-110">
                  <div className="grid grid-cols-6 gap-1 sm:gap-1.5 lg:gap-2 w-full">
                    {[...Array(18)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-full bg-gradient-to-br from-amber-600 to-orange-700 shadow-md"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6 transition-all duration-500 group-hover:text-white">
                <p className="text-xs sm:text-xs font-semibold text-gray-500 tracking-wider mb-2 sm:mb-3 group-hover:text-gray-300">
                  ABOUT KIAQ
                </p>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-white leading-tight">
                  A quick introduction to KIAQ
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white text-sm sm:text-base"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
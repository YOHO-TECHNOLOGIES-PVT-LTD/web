import { useState } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

// Placeholder images
const img1 = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
const img2 = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=600&fit=crop';
const img3 = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop';

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      company: "CloudTech Solutions",
      title: "Your IT Challenges, Met with Precision and Thoughtful Solutions",
      description: "KIAQ connected us with highly skilled DevOps engineers who modernized our cloud environment. Their expertise in AWS and Kubernetes improved system uptime and reduced deployment cycles by 70%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    },
    {
      company: "DataFlow Analytics",
      title: "From Vision to Execution, Building Tomorrow’s Technology Today",
      description: "Through KIAQ, we partnered with exceptional data scientists who elevated our analytics operations. Their advanced machine learning solutions increased model accuracy by 45% and unlocked new business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <section className="relative py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides */}
          <div className="relative px-8 sm:px-10 lg:px-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="py-6 sm:py-8 lg:py-12">
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: UI_CONSTANTS.WHITE }}>
                        {testimonial.title}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed opacity-90" style={{ color: UI_CONSTANTS.WHITE }}>
                        {testimonial.description}
                      </p>
                    </div>
                    
                    {/* Right Media */}
                    <div className="relative mt-4 lg:mt-0">
                      <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.company}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 sm:w-12 bg-white' 
                    : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 flex flex-col items-center px-4 sm:px-6">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={img1}
              alt="Work Network"
              className="rounded-2xl sm:rounded-3xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>

          {/* Right Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Work the way that <br className="hidden sm:block" /> works for you
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-gray-600">
              Andela's Adaptive Hiring approach offers a flexible engagement model that
              lets you create and manage teams in any configuration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Hire Individuals</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Fill a critical gap or place a highly skilled problem solver. Have someone
                  cover maternity leave. Or put a full-time, project‑driven technologist in
                  place.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">Create Managed Projects</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  We ensure on‑time, on‑budget delivery for the most demanding projects, like
                  custom application development and AI rapid prototyping.
                </p>
              </div>
            </div>

            <button className="bg-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium hover:bg-teal-600 transition-all text-sm sm:text-base">
              Get Started
            </button>
          </div>
        </div>
      </section>
    
      <section className="w-full mx-auto max-w-6xl bg-[#B7D6CE] py-8 sm:py-10 rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 px-4 sm:px-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              We're recognized as a leader by G2
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-gray-700 max-w-md mx-auto lg:mx-0">
              The world's best brands trust Andela, including GitHub, Mastercard Foundry,
              ViacomCBS, and Mindshare.
            </p>

            <button className="bg-white text-gray-800 font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow hover:shadow-md transition-all border border-gray-200 text-sm sm:text-base">
              Request A Demo
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={img2}
              alt="G2 Recognition"
              className="w-full max-w-xs sm:max-w-sm rounded-2xl sm:rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0F5C57] py-10 sm:py-14 rounded-2xl sm:rounded-3xl mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 flex flex-col items-center relative overflow-hidden max-w-6xl mx-auto">
        {/* Content Container */}
        <div className="max-w-3xl w-full mx-auto text-center mb-8 sm:mb-10 z-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
            Harness the power of people + AI
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-white/80 px-2">
            Andela Talent Cloud automates and streamlines the complete global hiring lifecycle.
            The Talent Decision Engine uses proprietary AI matching algorithms to identify
            best-fit candidates at speed and scale. Expert technical hiring managers and
            talent and client success partners support the entire process to ensure a seamless experience.
          </p>

          <button className="mt-5 sm:mt-6 bg-teal-400 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-teal-500 transition-all text-sm sm:text-base">
            Learn More About Andela Talent Cloud
          </button>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center z-10 px-2">
          <img
            src={img3}
            alt="People + AI Powered"
            className="w-full max-w-4xl object-contain rounded-lg sm:rounded-xl"
          />
        </div>
      </section>
    </> 
  );
}
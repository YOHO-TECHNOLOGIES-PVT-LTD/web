import { useState } from 'react';
import img1 from '../assets/whykiaq/layerwrk.webp';
import img2 from '../assets/whykiaq/G2 Falll 2024.svg';
import img3 from '../assets/whykiaq/People and AI-Powered  Technology Ensure Success.webp';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
  {
  company: "CloudTech Solutions",
  title: "Scaling Infrastructure with Expert DevOps Talent",
  description: "KIAQ connected us with highly skilled DevOps engineers who modernized our cloud environment. Their expertise in AWS and Kubernetes improved system uptime and reduced deployment cycles by 70%.",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
},
{
  company: "DataFlow Analytics",
  title: "Enhancing Analytics with Top Data Science Talent",
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

    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slides */}
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="py-8 sm:py-12">
                {/* Logo */}
                {/* <img 
                  src={testimonial.logo} 
                  alt={testimonial.company}
                  className="h-8 sm:h-10 w-auto mb-8 sm:mb-12"
                /> */}
                
                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                  {/* Left Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: UI_CONSTANTS.WHITE }}>
                      {testimonial.title}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90" style={{ color: UI_CONSTANTS.WHITE }}>
                      {testimonial.description}
                    </p>
                  </div>
                  
                  {/* Right Media */}
                  <div className="relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.company}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      
                      {/* Play Button
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center group hover:scale-110 duration-300">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 ml-1" style={{ color: UI_CONSTANTS.DARK }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
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

      <section className="w-full bg-white py-20 flex flex-col items-center">
<div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16 px-6">
{/* Left Image Side */}
<div className="w-full lg:w-1/2 flex justify-center relative">
<img
src={img1}
alt="Work Network"
className="rounded-3xl shadow-lg w-full max-w-lg object-cover"
/>
</div>


{/* Right Text Side */}
<div className="w-full lg:w-1/2">
<h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
Work the way that <br /> works for you
</h2>


<p className="text-gray-600 text-lg leading-relaxed mb-10">
Andela’s Adaptive Hiring approach offers a flexible engagement model that
lets you create and manage teams in any configuration.
</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
<div>
<h3 className="text-xl font-semibold text-gray-800 mb-3">Hire Individuals</h3>
<p className="text-gray-600 text-sm leading-relaxed">
Fill a critical gap or place a highly skilled problem solver. Have someone
cover maternity leave. Or put a full-time, project‑driven technologist in
place.
</p>
</div>


<div>
<h3 className="text-xl font-semibold text-gray-800 mb-3">Create Managed Projects</h3>
<p className="text-gray-600 text-sm leading-relaxed">
We ensure on‑time, on‑budget delivery for the most demanding projects, like
custom application development and AI rapid prototyping.
</p>
</div>
</div>


<button className="bg-teal-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-teal-600 transition-all">
Get Started
</button>
</div>
</div>
</section>
    
    <section className="w-full mx-auto max-w-6xl bg-[#B7D6CE] py-10 rounded-3xl mt-16 px-6">
  <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        We’re recognized as a leader by G2
      </h2>
      <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-md">
        The world’s best brands trust Andela, including GitHub, Mastercard Foundry,
        ViacomCBS, and Mindshare.
      </p>

      <button className="bg-white text-gray-800 font-semibold px-6 py-2.5 rounded-xl shadow hover:shadow-md transition-all border border-gray-200">
        Request A Demo
      </button>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2 flex justify-center relative">
      <img
        src={img2}
        alt="G2 Recognition"
        className="w-full max-w-sm rounded-3xl shadow-lg object-cover"
      />
    </div>
  </div>
</section>


    <section className="bg-[#0F5C57] py-14 rounded-3xl mt-20 px-6 flex flex-col items-center relative overflow-hidden max-w-6xl mx-auto">
  {/* Content Container */}
  <div className="max-w-3xl w-full mx-auto text-center mb-10 z-10">
    <h2 className="text-3xl font-bold text-white mb-4">
      Harness the power of people + AI
    </h2>
    <p className="text-white/80 text-base leading-relaxed">
      Andela Talent Cloud automates and streamlines the complete global hiring lifecycle.
      The Talent Decision Engine uses proprietary AI matching algorithms to identify
      best-fit candidates at speed and scale. Expert technical hiring managers and
      talent and client success partners support the entire process to ensure a seamless experience.
    </p>

    <button className="mt-6 bg-teal-400 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-teal-500 transition-all">
      Learn More About Andela Talent Cloud
    </button>
  </div>

  {/* Image */}
  <div className="w-full flex justify-center z-10">
    <img
      src={img3}
      alt="People + AI Powered"
      className="w-full max-w-4xl object-contain"
    />
  </div>
</section>



   </> 

  );
}
import { useState } from 'react';

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
      logo: "https://via.placeholder.com/200x60/ffffff/000000?text=CloudTech",
      title: "Scaling Infrastructure with African DevOps Expertise",
      description: "KIAQ connected us with exceptional DevOps engineers from Nigeria and Kenya who transformed our cloud infrastructure. Their expertise in AWS and Kubernetes helped us achieve 99.9% uptime and reduce deployment time by 70%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center"
    },
    {
      company: "DataFlow Analytics",
      logo: "https://via.placeholder.com/200x60/ffffff/000000?text=DataFlow",
      title: "Unlocking Data Insights with African Data Scientists",
      description: "Through KIAQ, we found brilliant data scientists from Ghana and South Africa who revolutionized our analytics capabilities. Their innovative approaches to machine learning increased our prediction accuracy by 45% and drove significant business growth.",
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
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: UI_CONSTANTS.DARK }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="py-12">
                {/* Logo */}
                <img 
                  src={testimonial.logo} 
                  alt={testimonial.company}
                  className="h-10 w-auto mb-12"
                />
                
                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Left Content */}
                  <div className="space-y-6">
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: UI_CONSTANTS.WHITE }}>
                      {testimonial.title}
                    </h2>
                    <p className="text-lg lg:text-xl leading-relaxed opacity-90" style={{ color: UI_CONSTANTS.WHITE }}>
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
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center group hover:scale-110 duration-300">
                          <svg className="w-8 h-8 ml-1" style={{ color: UI_CONSTANTS.DARK }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-white' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
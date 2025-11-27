import { useState } from 'react';
import img1 from "../assets/Home1/t1.jpg";
import img2 from "../assets/Home1/t2.jpg";
import img3 from "../assets/Home1/t4.jpg";
import img5 from "../assets/Home1/t5.jpg";
import img4 from "../assets/Home1/t3.jpg";

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
      title: "Your IT Challenges, Met with Precision and Thoughtful Solutions",
      description:
        "KIAQ delivered experts who transformed our cloud operations with strategic automation. Their deep technical expertise improved reliability, increased deployment efficiency, and ensured our systems scaled effortlessly with demand.",
      image: img1,
    },
    {
      company: "DataFlow Analytics",
      title: "From Vision to Execution, Building Tomorrow’s Technology Today",
      description:
        "Our analytics capabilities grew exponentially after working with highly skilled engineers from KIAQ. Their advanced approach to data architecture strengthened performance, enhanced decision-making, and unlocked measurable business value.",
      image: img2, // SAME IMAGE
    },
    {
      company: "NextGen Innovations",
      title: "Smart Solutions Engineered to Accelerate Your Digital Growth",
      description:
        "KIAQ empowered our tech initiatives with exceptional developers who elevated our digital infrastructure. Their seamless integration, strong technical planning, and performance-driven mindset improved efficiency across our entire ecosystem.",
      image: img3, // SAME IMAGE
    },
    {
      company: "NextGen Innovations",
      title: "Smart Solutions Engineered to Accelerate Your Digital Growth",
      description:
        "KIAQ empowered our tech initiatives with exceptional developers who elevated our digital infrastructure. Their seamless integration, strong technical planning, and performance-driven mindset improved efficiency across our entire ecosystem.",
      image: img4, // SAME IMAGE
    },
    {
      company: "NextGen Innovations",
      title: "Smart Solutions Engineered to Accelerate Your Digital Growth",
      description:
        "KIAQ empowered our tech initiatives with exceptional developers who elevated our digital infrastructure. Their seamless integration, strong technical planning, and performance-driven mindset improved efficiency across our entire ecosystem.",
      image: img5, // SAME IMAGE
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
      <section
        className="relative py-8 sm:py-12 lg:py-16 xl:py-20 overflow-hidden"
        style={{ backgroundColor: UI_CONSTANTS.DARK }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slides */}
          <div className="relative px-8 sm:px-10 lg:px-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-10 pointer-events-none"
                }`}
              >
                <div className="py-6 sm:py-8 lg:py-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Text */}
                    <div className="space-y-6">
                      <h2
                        className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
                      >
                        {testimonial.title}
                      </h2>

                      <p className="text-lg xl:text-xl text-white/90 leading-relaxed">
                        {testimonial.description}
                      </p>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-4 lg:mt-0">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.company}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Your Other Sections Below — Unchanged */}
      {/* ------------------------------------------------------------ */}
      {/* EVERYTHING BELOW IS EXACTLY THE SAME AS YOUR ORIGINAL CODE */}
      {/* ------------------------------------------------------------ */}

      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 flex flex-col items-center px-4 sm:px-6">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

          <div className="w-full lg:w-1/2 flex justify-center relative">
            <img
              src={img3}
              alt="Work Network"
              className="rounded-2xl sm:rounded-3xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Work the way that <br className="hidden sm:block" /> works for you
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-600">
              We start by gaining a deep understanding of your business goals, challenges, and target audience. This discovery phase ensures that every solution we propose aligns with your objectives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10">

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Design Tailored Solutions</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Using gathered insights, our team creates strategic, scalable, and customized solutions crafted to match your vision.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Deliver and Support</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  We ensure smooth delivery with strong support, helping your solution evolve as your business grows.
                </p>
              </div>

            </div>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-orange-600 transition-all text-sm sm:text-base">
              Get Started
            </button>

          </div>
        </div>
      </section>

      <section className="w-full mx-auto max-w-6xl bg-[#B7D6CE] py-10 rounded-3xl mt-16 px-4 sm:px-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Questions, Answered – Clarity Starts Here.
            </h2>

            <p className="text-base leading-relaxed mb-8 text-gray-700 max-w-md mx-auto lg:mx-0">
              We simplify complex technology with clear, insightful answers that help you make confident decisions.
            </p>

            <button className="bg-white text-gray-800 font-semibold px-6 py-2.5 rounded-xl shadow hover:shadow-md transition-all border border-gray-200 text-sm sm:text-base">
              FAQ's
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={img5}
              alt="FAQ"
              className="w-full max-w-sm rounded-3xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      <section className="bg-[#0F5C57] py-14 rounded-3xl mt-16 px-4 sm:px-6 flex flex-col items-center max-w-6xl mx-auto">
        <div className="max-w-3xl w-full mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empowering Innovation, Leading with Expertise.
          </h2>

          <p className="text-base leading-relaxed text-white/80">
            We deliver innovation powered by technology and expertise, helping businesses grow in a fast-changing digital landscape.
          </p>

          <button className="mt-6 bg-orange-400 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-orange-500 transition-all text-sm sm:text-base">
            Lead The Team
          </button>
        </div>

        <div className="w-full flex justify-center">
          <img
            src={img4}
            alt="People + AI Powered"
            className="w-full max-w-4xl object-contain rounded-xl"
          />
        </div>
      </section>
    </>
  );
}

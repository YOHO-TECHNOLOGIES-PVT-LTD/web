import { useState, useEffect, useRef } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

// import imgfocus from '../assets/HOME/Gemini_Generated_Image_x9vr37x9vr37x9vr.png';
import imgfocus from "../assets/660dcc7f45ad8881324199b5_665edf960bfc2a8fb317836a_Make_work_happen_fast-transcode.webm";
import img4 from "../assets/698.jpg";


export default function FocusScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
  {
    title: "AI-Powered Solutions That Elevate Customer Engagement",
    description:
     "We deliver advanced AI development services that enhance customer engagement through intelligent chatbots and automation. Powered by machine learning and NLP, our solutions offer personalized responses, reduce manual workload, and improve service consistency. With scalable workflows and automation, businesses gain higher efficiency, lower operational costs, and long-term digital growth while delivering superior customer experiences."
  },
  {
    title: "Custom Software Engineered for High-Performance Results",
    description:
      "As a trusted software development company, we create custom applications built for speed, scalability, and real-world performance. From mobile apps to enterprise systems, our solutions integrate seamlessly with existing processes, boosting operational efficiency and flexibility. With strong full-stack capabilities, we deliver reliable software that enhances productivity and gives your business a competitive advantage."
  },
  {
    title: " Turning Data Into Strategic Intelligence",
    description:
      "Our data engineering and analytics services transform raw data into actionable intelligence. Using AI, automation, and predictive analytics, we streamline complex workflows and deliver insights that improve decision-making. Businesses gain enhanced productivity, reduced risk, and long-term growth through data-backed strategies designed to increase efficiency and uncover new opportunities."
  },
  {
    title: "Secure, Scalable & Affordable Cloud Architecture",
    description:
      "We provide end-to-end cloud and DevOps services that strengthen security, scalability, and operational reliability. Our cloud solutions ensure seamless performance, regulatory compliance, and cost efficiency. With cloud migration, infrastructure optimization, and automation, we help businesses achieve agility, stability, and long-term digital transformation while reducing operational overhead."
  },
  {
    title: "Strategic Technology Guidance for Sustainable Growth",
    description:
      "Our technology consulting and development services help businesses make informed decisions that support long-term growth. We analyze your current systems, identify improvement opportunities, and ensure seamless integration of new technologies. By aligning IT strategy with business goals, we enhance performance, reduce costs, and deliver scalable, future-ready solutions that drive sustainable success"
  }
];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      contentRefs.current.forEach((ref, index) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          const offsetHeight = ref.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveIndex(index);
          }
        }
      });
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
   <section className="py-4 sm:py-7 md:py-8 lg:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10">
    <div className="flex flex-col lg:flex-row lg:gap-8">

      {/* Mobile/Tablet Video */}
      <div className="lg:hidden w-full mb-3 sm:mb-5">
        <div className="w-full max-w-md mx-auto">
          <video
            src={imgfocus}
            className="w-full h-auto object-contain rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* Left Column */}
      <div className="w-full lg:w-1/2">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => { contentRefs.current[index] = el }}
            className="min-h-[28vh] sm:min-h-[36vh] lg:min-h-[52vh]"
          >
            <div className="w-full max-w-xl py-2 sm:py-3">
              <h3
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 leading-tight transition-all duration-500"
                style={{
                  color: UI_CONSTANTS.DARK,
                  opacity: activeIndex === index ? 1 : 0.3,
                }}
              >
                {feature.title}
              </h3>

              <p
                className="text-base sm:text-lg leading-relaxed transition-all duration-500 text-justify "
                style={{
                  color: UI_CONSTANTS.GRAY,
                  opacity: activeIndex === index ? 1 : 0.3,
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Fixed Image */}
      <div className="hidden lg:block lg:w-1/2">
        <div className="sticky top-14 sm:top-16 lg:top-20 h-[520px] sm:h-[560px] lg:h-[600px] flex items-center justify-center">
          <video
            src={imgfocus}
            className="max-w-full max-h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-6 sm:mt-10 lg:mt-14">
  <a
    className="inline-block px-8 py-3 sm:px-12 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
    
  >
    <span
  className="hidden sm:inline text-image-mask text-8xl"
  style={{ backgroundImage: `url(${img4})` }}
>
  Advanced AI
</span>

<h1
  className="sm:hidden sm: text-5xl font-bold text-image-mask"
  style={{ backgroundImage: `url(${img4})` }}
>
  Advanced AI
</h1>


    {/* <span
      className="sm:hidden text-image-mask"
      style={{ backgroundImage: `url(${img4})` }}
    >
      Advanced AI
    </span> */}
  </a>
</div>

  </div>
</section>
  );
}
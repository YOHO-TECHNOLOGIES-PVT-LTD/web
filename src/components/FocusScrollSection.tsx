import { useState, useEffect, useRef } from 'react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff',
  GRAY: '#64748b'
};

// import imgfocus from '../assets/HOME/Gemini_Generated_Image_x9vr37x9vr37x9vr.png';
import imgfocus from "../assets/660dcc7f45ad8881324199b5_665edf960bfc2a8fb317836a_Make_work_happen_fast-transcode.webm";

export default function FocusScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const features = [
  {
    title: "Advanced AI-Powered Systems Designed to Transform Customer Interaction",
    description:
      "Our advanced AI-driven chatbots and automation tools revolutionize how businesses engage with customers. Using cutting-edge machine learning and natural language processing, they deliver smarter, more personalized support. These systems streamline operations by automating routine workflows and reducing manual effort, enhance customer satisfaction through consistent, high-quality interactions, and enable greater efficiency and sustainable growth through scalable, intelligent automation."
  },
  {
    title: "Custom Software Built for Real-World Performance",
    description:
      "We design, develop, and deploy tailored software solutions that solve real business challenges. Whether it's a web app, mobile application, or enterprise platform, we deliver reliable and scalable products built for long-term performance. Our development approach ensures seamless integration into your operations, resulting in improved efficiency, enhanced flexibility, and a strong competitive edge."
  },
  {
    title: "Transforming Data Into Intelligent Decisions",
    description:
      "Leveraging the power of AI, we help businesses convert data into actionable insights. Our solutions enable smarter decision-making, automate complex processes, and provide predictive analytics that anticipate future trends with accuracy. With intelligent data-driven strategies, companies can optimize operations, reduce risk, and drive sustained business growth."
  },
  {
    title: "Scalable, Secure & Cost-Efficient Cloud Infrastructure",
    description:
      "We design and manage cloud environments that foster innovation and support growth at any pace. Our solutions ensure seamless scalability, strong data security, and full compliance. By optimizing cloud resources, we reduce operational costs and enhance overall efficiency, enabling businesses to operate with agility, reliability, and long-term success."
  },
  {
    title: "Strategic Technology Guidance for Sustainable Growth",
    description:
      "From system optimization to long-term digital strategy, we help you make informed technology decisions that maximize efficiency and future-proof your operations. We assess your current technology landscape to identify improvement and cost-saving opportunities, ensuring seamless integration of new solutions while enhancing performance and scalability. By aligning technology with your business goals, we enable sustainable growth and long-term success."
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
   <section className="py-5 sm:py-7 md:py-8 lg:py-10 bg-white">
  <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-10">
    <div className="flex flex-col lg:flex-row lg:gap-8">

      {/* Mobile/Tablet Video */}
      <div className="lg:hidden w-full mb-4 sm:mb-6">
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
            className="min-h-[35vh] sm:min-h-[42vh] lg:min-h-[52vh] flex items-center py-1"
          >
            <div className="w-full max-w-xl">
              <h3
                className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight transition-all duration-500"
                style={{
                  color: UI_CONSTANTS.DARK,
                  opacity: activeIndex === index ? 1 : 0.3,
                }}
              >
                {feature.title}
              </h3>

              <p
                className="text-base sm:text-lg leading-relaxed transition-all duration-500 text-justify"
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
    <div className="text-center mt-8 sm:mt-12 lg:mt-14">
      <button
        className="px-8 py-3 sm:px-12 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
        style={{
          backgroundColor: UI_CONSTANTS.PRIMARY,
          color: UI_CONSTANTS.WHITE,
        }}
      >
        <span className="hidden sm:inline">Learn More</span>
        <span className="sm:hidden">Learn More</span>
      </button>
    </div>
  </div>
</section>




  );
}
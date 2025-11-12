import { useState, useEffect } from 'react';
import { Cpu, PieChart, Users, Shield, Grid, Code, Globe, FileText, Star, ArrowRight } from 'lucide-react';

const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function ConsultingServices() {
  const [activeTab, setActiveTab] = useState('technology');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = [
    { id: 'devops', label: 'DevOps Engineering', icon: Cpu },
    { id: 'data', label: 'Data Science', icon: PieChart },
    { id: 'ai', label: 'AI & Machine Learning', icon: Users }
  ];

  const services = [
    {
      icon: Cpu,
      title: 'Cloud Infrastructure',
      description: 'Expert DevOps engineers who design, deploy, and manage scalable cloud infrastructure on AWS, Azure, and GCP.'
    },
    {
      icon: PieChart,
      title: 'Data Analytics & BI',
      description: 'Skilled data scientists who transform raw data into actionable insights using advanced analytics and visualization tools.'
    },
    {
      icon: Grid,
      title: 'CI/CD Automation',
      description: 'DevOps specialists who implement robust continuous integration and deployment pipelines for faster, reliable releases.'
    },
    {
      icon: Shield,
      title: 'Machine Learning Models',
      description: 'AI experts who develop and deploy machine learning models that automate processes and drive intelligent decision-making.'
    },
    {
      icon: Grid,
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker specialists who modernize applications with containerization and orchestration strategies.'
    },
    {
      icon: Code,
      title: 'Big Data Processing',
      description: 'Data engineers who build scalable data pipelines and processing systems using Spark, Hadoop, and modern data stacks.'
    }
  ];

  const testimonials = [
    {
      quote: "KIAQ connected us with exceptional African talent",
      text: "The DevOps engineers we found through KIAQ have been outstanding. They brought fresh perspectives and deep technical expertise that transformed our infrastructure. The collaboration has been seamless despite the geographical distance.",
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFlow Solutions"
    },
    {
      quote: "Outstanding data science expertise from Africa",
      text: "KIAQ helped us connect with a brilliant data scientist from Nigeria who revolutionized our analytics capabilities. The quality of work and innovative approaches exceeded our expectations.",
      name: "Michael Chen",
      position: "Head of Data",
      company: "DataDriven Inc"
    },
    {
      quote: "AI talent that delivers results",
      text: "Through KIAQ, we found an AI specialist from Kenya who developed machine learning models that increased our operational efficiency by 40%. The expertise and dedication were remarkable.",
      name: "Emma Rodriguez",
      position: "VP of Innovation",
      company: "FutureTech Corp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: UI_CONSTANTS.DARK }}>
              African Tech Expertise Areas
            </h2>
            <p className="text-sm sm:text-base max-w-3xl mx-auto" style={{ color: '#666' }}>
              Connect with Africa's most skilled technology professionals across key specializations that drive modern business innovation.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-6 sm:mb-8">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-4 sm:py-6 transition-all relative ${
                    index === 0 ? '' : 'sm:border-l border-gray-200'
                  }`}
                  style={{
                    backgroundColor: isActive ? UI_CONSTANTS.WHITE : '#f3f4f6',
                    color: UI_CONSTANTS.DARK
                  }}
                >
                  {isActive && (
                    <div 
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}
                    />
                  )}
                  <div 
                    className="p-2 rounded"
                    style={{ 
                      backgroundColor: isActive ? `${UI_CONSTANTS.PRIMARY}20` : 'transparent'
                    }}
                  >
                    <Icon 
                      size={24} 
                      style={{ color: isActive ? UI_CONSTANTS.PRIMARY : '#9ca3af' }} 
                    />
                  </div>
                  <span className="font-semibold text-base">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              const patternStyles = [
                {
                  backgroundImage: `radial-gradient(${UI_CONSTANTS.WHITE} 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                },
                {
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q15 10 30 30 T60 30' stroke='%23ffffff' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
                  backgroundSize: '60px 60px',
                },
                {
                  backgroundImage: `linear-gradient(45deg, ${UI_CONSTANTS.WHITE} 1px, transparent 1px),
                                    linear-gradient(-45deg, ${UI_CONSTANTS.WHITE} 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                },
              ];

              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded cursor-pointer transition-all duration-300 group relative overflow-hidden"
                  style={{ backgroundColor: '#f9fafb' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = UI_CONSTANTS.DARK;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(1, 17, 35, 0.3)';
                    const title = e.currentTarget.querySelector('h3') as HTMLElement | null;
                    const desc = e.currentTarget.querySelector('p') as HTMLElement | null;
                    const pattern = e.currentTarget.querySelector('.pattern-overlay') as HTMLElement | null;
                    if (title) title.style.color = UI_CONSTANTS.WHITE;
                    if (desc) desc.style.color = UI_CONSTANTS.WHITE;
                    if (pattern) {
                      pattern.style.opacity = '0.15';
                      pattern.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    const title = e.currentTarget.querySelector('h3') as HTMLElement | null;
                    const desc = e.currentTarget.querySelector('p') as HTMLElement | null;
                    const pattern = e.currentTarget.querySelector('.pattern-overlay') as HTMLElement | null;
                    if (title) title.style.color = UI_CONSTANTS.DARK;
                    if (desc) desc.style.color = '#4b5563';
                    if (pattern) {
                      pattern.style.opacity = '0';
                      pattern.style.transform = 'scale(1)';
                    }
                  }}
                >
                  {/* Pattern Overlay */}
                  <div
                    className="pattern-overlay absolute inset-0 opacity-0 transition-all duration-500 transform pointer-events-none"
                    style={{
                      ...patternStyles[index % patternStyles.length],
                    }}
                  />

                  {ServiceIcon && (
                    <div className="mb-4 relative z-10">
                      <ServiceIcon size={40} color={UI_CONSTANTS.PRIMARY} />
                    </div>
                  )}

                  <h3
                    className="text-xl font-bold mb-4 relative z-10 transition-colors duration-300"
                    style={{ color: UI_CONSTANTS.DARK }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed relative z-10 transition-colors duration-300"
                    style={{ color: '#4b5563' }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button 
              className="px-8 py-3 rounded font-medium transition-all border"
              style={{ 
                backgroundColor: UI_CONSTANTS.WHITE,
                borderColor: '#d1d5db',
                color: UI_CONSTANTS.DARK
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = UI_CONSTANTS.DARK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              Explore All Specializations
            </button>
          </div>
        </div>
      </section>

      {/* Adaptive Hiring Resources Section */}
     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Put Adaptive Hiring to work for you
          </h1>
          <button className="px-4 py-2 sm:px-6 sm:py-2.5 border-2 border-gray-900 text-gray-900 font-semibold rounded hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base">
            View All Resources
          </button>
        </div>

        {/* Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-6 sm:mb-8 bg-white rounded-lg shadow-sm overflow-hidden group hover:bg-[#011123] transition-all duration-500">
          <div className="p-8 flex flex-col justify-between transition-all duration-500 group-hover:text-white">
            <div>
              <p className="text-xs font-semibold text-gray-500 tracking-wider mb-4 group-hover:text-gray-300">
                DIGITAL TRANSFORMATION
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-white">
                How to build an AI-ready workforce
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-300">
                The rise of AI has created a paradigm shift in organizations and how they build their teams. Andela community member Oladimeji Samuel explores how businesses can stay competitive with AI-ready workforces.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white"
            >
              Read More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="relative min-h-[300px] bg-gradient-to-br from-orange-500 via-purple-800 to-purple-900 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
              <div className="relative w-full h-full">
                <div className="absolute bottom-0 left-0 w-3/5 h-4/5 bg-orange-500"></div>
                <div className="absolute bottom-0 left-[20%] w-12 h-[70%] bg-purple-800"></div>
                <div className="absolute bottom-0 left-[35%] w-12 h-[55%] bg-purple-800"></div>
                <div className="absolute bottom-0 left-[50%] w-12 h-[40%] bg-purple-800"></div>
                <div className="absolute top-8 right-12 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-amber-400 rotate-12"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
            <div className="relative h-48 bg-gradient-to-br from-purple-400 via-purple-600 to-indigo-900 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-300 opacity-60 blur-2xl"></div>
                <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-400 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-indigo-400 opacity-40 blur-2xl"></div>
              </div>
            </div>
            <div className="p-6 transition-all duration-500 group-hover:text-white">
              <p className="text-xs font-semibold text-gray-500 tracking-wider mb-3 group-hover:text-gray-300">
                DIGITAL TRANSFORMATION
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
                Tackle cloud migration complexity & skills gap
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
            <div className="relative h-48 bg-gradient-to-br from-orange-900 via-slate-900 to-black overflow-hidden">
              <div className="absolute inset-0 overflow-hidden transition-transform duration-700 group-hover:scale-110">
                <div className="absolute top-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-orange-300 to-transparent rotate-45 blur-sm"></div>
                <div className="absolute top-1/2 right-1/2 w-1 h-24 bg-gradient-to-b from-emerald-300 to-transparent -rotate-12 blur-sm"></div>
              </div>
            </div>
            <div className="p-6 transition-all duration-500 group-hover:text-white">
              <p className="text-xs font-semibold text-gray-500 tracking-wider mb-3 group-hover:text-gray-300">
                UPSKILL/RESKILL
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
                Real-Time Chat App: Node.js, GraphQL, React - Pt. 1
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-500 group hover:bg-[#011123]">
            <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-200 overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center px-4 pb-4 transition-transform duration-700 group-hover:scale-110">
                <div className="grid grid-cols-6 gap-2 w-full">
                  {[...Array(18)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-full bg-gradient-to-br from-amber-600 to-orange-700 shadow-md"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 transition-all duration-500 group-hover:text-white">
              <p className="text-xs font-semibold text-gray-500 tracking-wider mb-3 group-hover:text-gray-300">
                THIS IS ANDELA
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
                This is Andela: A quick introduction
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 font-semibold hover:gap-2 transition-all group-hover:text-white"
              >
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Client Satisfaction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4" style={{ color: UI_CONSTANTS.DARK }}>
              Global Companies Trust KIAQ
            </h2>
            <p className="text-base" style={{ color: '#6b7280' }}>
              Companies worldwide rely on KIAQ to connect them with Africa's top tech talent for their most critical projects
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-24 mb-6 pb-12 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e0f2fe' }}>
                <Globe size={26} style={{ color: '#0284c7' }} />
              </div>
              <div>
                <div className="text-l font-bold" style={{ color: UI_CONSTANTS.DARK }}>25+</div>
                <div className="text-sm" style={{ color: '#6b7280' }}>African Countries</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dbeafe' }}>
                <FileText size={26} style={{ color: '#2563eb' }} />
              </div>
              <div>
                <div className="text-l font-bold" style={{ color: UI_CONSTANTS.DARK }}>200+</div>
                <div className="text-sm" style={{ color: '#6b7280' }}>Global Companies</div>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base font-medium" style={{ color: UI_CONSTANTS.DARK }}>
                Clients rate KIAQ
              </span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} fill="#fbbf24" stroke="#fbbf24" />
                ))}
              </div>
              <span className="text-base font-bold" style={{ color: UI_CONSTANTS.DARK }}>4.9 out of 5</span>
            </div>
            <p className="text-sm" style={{ color: '#6b7280' }}>
              on average based on 1,200+ reviews.
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-3"
                >
                  <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
                    <div className="mb-6">
                      <div className="text-4xl mb-4" style={{ color: '#3b82f6' }}>❝</div>
                      <h3 className="text-base font-bold mb-4" style={{ color: UI_CONSTANTS.DARK }}>
                        {testimonial.quote}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#4b5563' }}>
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} fill="#fbbf24" stroke="#fbbf24" />
                      ))}
                    </div>

                    <div className="border-t pt-6" style={{ borderColor: '#e5e7eb' }}>
                      <div className="font-bold mb-1" style={{ color: UI_CONSTANTS.DARK }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm mb-3" style={{ color: '#6b7280' }}>
                        {testimonial.position}
                      </div>
                      <div className="text-2xl font-bold tracking-tight" style={{ color: UI_CONSTANTS.DARK }}>
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: currentSlide === index ? UI_CONSTANTS.PRIMARY : '#d1d5db'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
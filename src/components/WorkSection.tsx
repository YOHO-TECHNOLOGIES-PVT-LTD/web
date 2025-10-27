import { useState, useEffect } from 'react';
import { Cpu, PieChart, Users, Shield, Grid, Code, Globe, FileText, Star } from 'lucide-react';

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

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4" style={{ color: UI_CONSTANTS.DARK }}>
              African Tech Expertise Areas
            </h2>
            <p className="text-base max-w-3xl mx-auto" style={{ color: '#666' }}>
              Connect with Africa's most skilled technology professionals across key specializations that drive modern business innovation.
            </p>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 gap-0 mb-8">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-6 transition-all relative ${
                    index === 0 ? '' : 'border-l border-gray-200'
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
          <div className="grid md:grid-cols-3 gap-6 mb-10">
  {services.map((service, index) => {
    const ServiceIcon = service.icon;

    // Assign different pattern based on card index
    const patternStyles = [
      // Pattern 1: Dots
      {
        backgroundImage: `radial-gradient(${UI_CONSTANTS.WHITE} 1px, transparent 1px)`,
        backgroundSize: '16px 16px',
      },
      // Pattern 2: Wavy lines
      {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q15 10 30 30 T60 30' stroke='%23ffffff' stroke-width='1' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      },
      // Pattern 3: Diagonal grid
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
          e.currentTarget.style.backgroundColor = UI_CONSTANTS.PRIMARY;
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 70, 0, 0.2)';
          const title = e.currentTarget.querySelector('h3') as HTMLElement | null;
          const desc = e.currentTarget.querySelector('p') as HTMLElement | null;
          const pattern = e.currentTarget.querySelector('.pattern-overlay') as HTMLElement | null;
          if (title) title.style.color = UI_CONSTANTS.WHITE;
          if (desc) desc.style.color = UI_CONSTANTS.WHITE;
          if (pattern) pattern.style.opacity = '0.1';
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
          if (pattern) pattern.style.opacity = '0';
        }}
      >
        {/* Pattern Overlay */}
        <div
          className="pattern-overlay absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            ...patternStyles[index % patternStyles.length],
          }}
        />

        {/* Icon (optional, if you display it) */}
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
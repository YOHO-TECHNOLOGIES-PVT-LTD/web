import {  useEffect } from 'react';
import {  ArrowRight } from 'lucide-react';

// const UI_CONSTANTS = {
//   PRIMARY: '#ff4600',
//   DARK: '#011123', 
//   WHITE: '#ffffff'
// };

export default function ConsultingServices() {
  // const [activeTab, setActiveTab] = useState('technology');
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const tabs = [
  //   { id: 'devops', label: 'DevOps Engineering', icon: Cpu },
  //   { id: 'data', label: 'Data Science', icon: PieChart },
  //   { id: 'ai', label: 'AI & Machine Learning', icon: Users }
  // ];

  // const services = [
  //   {
  //     icon: Cpu,
  //     title: 'Cloud Infrastructure',
  //     description: 'Expert DevOps engineers who design, deploy, and manage scalable cloud infrastructure on AWS, Azure, and GCP.'
  //   },
  //   {
  //     icon: PieChart,
  //     title: 'Data Analytics & BI',
  //     description: 'Skilled data scientists who transform raw data into actionable insights using advanced analytics and visualization tools.'
  //   },
  //   {
  //     icon: Grid,
  //     title: 'CI/CD Automation',
  //     description: 'DevOps specialists who implement robust continuous integration and deployment pipelines for faster, reliable releases.'
  //   },
  //   {
  //     icon: Shield,
  //     title: 'Machine Learning Models',
  //     description: 'AI experts who develop and deploy machine learning models that automate processes and drive intelligent decision-making.'
  //   },
  //   {
  //     icon: Grid,
  //     title: 'Container Orchestration',
  //     description: 'Kubernetes and Docker specialists who modernize applications with containerization and orchestration strategies.'
  //   },
  //   {
  //     icon: Code,
  //     title: 'Big Data Processing',
  //     description: 'Data engineers who build scalable data pipelines and processing systems using Spark, Hadoop, and modern data stacks.'
  //   }
  // ];

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
  Building an AI-Ready Workforce
</h2>
<p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-300">
  AI is reshaping how companies operate and build their teams. This guide explores the essential steps to develop a workforce equipped for modern AI-driven environments and future-ready innovation.
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
  Simplify cloud migration with the right talent
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
  UPSKILL / RESKILL
</p>
<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
  Building modern apps with real-time capabilities
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
  ABOUT KIAQ
</p>
<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
  A quick introduction to KIAQ
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

     

    </>
  );
}
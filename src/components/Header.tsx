import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
// import { UI_CONSTANTS } from '../constants/colors';
import image from '../assets/kIAQ_.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const getActiveMenu = (path: string) => {
    if (path.startsWith('/why-kiaq') || path.startsWith('/customer-stories') || path.startsWith('/insights') || path.startsWith('/talent-community') || path.startsWith('/untapped-markets')) return 'why-kiaq';
    if (path.startsWith('/startup-scaling') || path.startsWith('/enterprise-projects') || path.startsWith('/digital-transformation') || path.startsWith('/use-cases')) return 'use-cases';
    if (path.startsWith('/dedicated-teams') || path.startsWith('/staff-augmentation') || path.startsWith('/project-based') || path.startsWith('/solutions') || path.startsWith('/cloud-devops') || path.startsWith('/adaptive-hiring') || path.startsWith('/how-it-works') || path.startsWith('/manage-remote-teams')) return 'solutions';
    if (path.startsWith('/talent-matching') || path.startsWith('/project-management') || path.startsWith('/collaboration-tools') || path.startsWith('/platform')) return 'platform';
    if (path.startsWith('/blog') || path.startsWith('/case-studies') || path.startsWith('/whitepapers') || path.startsWith('/resources')) return 'resources';
    if (path.startsWith('/apply') || path.startsWith('/talent-success') || path.startsWith('/skill-development') || path.startsWith('/talent')) return 'talent';
    if (path.startsWith('/mission') || path.startsWith('/team') || path.startsWith('/careers') || path.startsWith('/about')) return 'about';
    return null;
  };

  const activeMenu = getActiveMenu(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm backdrop-blur-sm' : ''
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.3)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-12 sm:h-14">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 mr-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke={isScrolled ? '#374151' : '#ffffff'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex items-center">
              <img src={image} alt="KIAQ Logo" className="h-6 sm:h-8" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button onClick={() => handleDropdownToggle('why-kiaq')} className={`${activeDropdown === 'why-kiaq' || activeMenu === 'why-kiaq' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Why KIAQ?</button>
            <button onClick={() => handleDropdownToggle('use-cases')} className={`${activeDropdown === 'use-cases' || activeMenu === 'use-cases' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Use Cases</button>
            <button onClick={() => handleDropdownToggle('solutions')} className={`${activeDropdown === 'solutions' || activeMenu === 'solutions' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Solutions</button>
            {/* <button onClick={() => handleDropdownToggle('platform')} className={`${activeDropdown === 'platform' || activeMenu === 'platform' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors pb-1`}>Platform</button> */}
            <button onClick={() => handleDropdownToggle('resources')} className={`${activeDropdown === 'resources' || activeMenu === 'resources' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Resources</button>
            <button onClick={() => handleDropdownToggle('talent')} className={`${activeDropdown === 'talent' || activeMenu === 'talent' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Talent</button>
            <button onClick={() => handleDropdownToggle('about')} className={`${activeDropdown === 'about' || activeMenu === 'about' ? 'text-teal-400 border-b-2 border-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>About</button>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 p-2 transition-colors`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 p-2 transition-colors`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link 
              to="/request-consultation"
              className="px-3 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-101"
              style={{ backgroundColor: '#ff4600', color: '#ffffff' }}
            >
            <span className="hidden sm:inline">GET IN TOUCH</span><span className="sm:hidden">CONTACT</span>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              <button onClick={() => {setActiveDropdown(activeDropdown === 'why-kiaq' ? null : 'why-kiaq');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">Why KIAQ?</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'use-cases' ? null : 'use-cases');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">Use Cases</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">Solutions</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'resources' ? null : 'resources');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">Resources</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'talent' ? null : 'talent');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">Talent</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'about' ? null : 'about');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-400 font-medium rounded-lg transition-colors">About</button>
            </div>
          </div>
        )}
      </nav>
      
       {activeDropdown === 'why-kiaq' && (
        <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-40 max-h-screen overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
              {/* Left Column */}
              <div>
                <h2 className="text-4xl font-bold mb-4 text-primary">Why KIAQ</h2>
                <p className="text-base mb-6 text-gray-600 leading-relaxed">
                  Our vast network of technologists and AI-driven matching help you hire the world's best.
                </p>
                <Link 
                  to="/why-kiaq" 
                  onClick={closeDropdown}
                  className="inline-flex items-center text-sm font-semibold hover:opacity-70 transition-opacity" 
                  style={{color: '#1e3a3a'}}
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=240&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              
              {/* Middle Column */}
              <div>
                <div className="space-y-6">
                  <Link to="/talent-community" onClick={closeDropdown} className="block hover:opacity-70 transition-opacity">
                    <h3 className="font-semibold mb-2 text-base" style={{color: '#1e3a3a'}}>Our Talent Community</h3>
                    <p className="text-sm" style={{color: '#6b7280', lineHeight: '1.6'}}>
                      We don't just find the best talent — we cultivate it.
                    </p>
                  </Link>
                  <Link to="/untapped-markets" onClick={closeDropdown} className="block hover:opacity-70 transition-opacity">
                    <h3 className="font-semibold mb-2 text-base" style={{color: '#1e3a3a'}}>Untapped Talent Markets</h3>
                    <p className="text-sm" style={{color: '#6b7280', lineHeight: '1.6'}}>
                      The talent you need is in untapped emerging markets.
                    </p>
                  </Link>
                  <Link to="/mission" onClick={closeDropdown} className="block hover:opacity-70 transition-opacity">
                    <h3 className="font-semibold mb-2 text-base" style={{color: '#1e3a3a'}}>Mission Focused</h3>
                    <p className="text-sm" style={{color: '#6b7280', lineHeight: '1.6'}}>
                      KIAQ talent improves their career trajectories and quality of life.
                    </p>
                  </Link>
                  <div className="mt-8">
                    <h4 className="text-xs font-bold tracking-wider mb-4" style={{color: '#9ca3af'}}>IMPACT</h4>
                    <div className="space-y-3">
                      <Link to="/customer-stories" onClick={closeDropdown} className="flex items-center text-sm hover:opacity-70 transition-opacity" style={{color: '#6b7280'}}>
                        <svg className="w-3 h-3 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Customer Stories
                      </Link>
                      <Link to="/case-studies" onClick={closeDropdown} className="flex items-center text-sm hover:opacity-70 transition-opacity" style={{color: '#6b7280'}}>
                        <svg className="w-3 h-3 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Forrester Total Economic Impact (TEI) Study
                      </Link>
                      <Link to="/blog" onClick={closeDropdown} className="flex items-center text-sm hover:opacity-70 transition-opacity" style={{color: '#6b7280'}}>
                        <svg className="w-3 h-3 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Humans of KIAQ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="relative" style={{
                backgroundColor: '#ff4600',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1' stroke-opacity='0.2'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
                borderRadius: '12px',
                padding: '20px'
              }}>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=200&fit=crop" 
                    alt="Global team" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-xs font-bold tracking-wider mb-4" style={{color: '#9ca3af'}}>INSIGHTS</div>
                    <h3 className="text-xl font-bold mb-6" style={{color: '#1e3a3a', lineHeight: '1.2'}}>
                      5 Steps To Building A Successful Global Team
                    </h3>
                    <Link to="/insights" onClick={closeDropdown} className="inline-flex items-center text-sm font-semibold hover:opacity-70 transition-opacity" style={{color: '#1e3a3a'}}>
                      Learn More 
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Use Cases Dropdown */}
      {activeDropdown === 'use-cases' && (
        <div className="absolute top-full left-0 w-screen bg-white shadow-lg z-40 max-h-screen overflow-y-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
              {/* Left Column */}
              <div className="flex flex-col">
                <h2 className="text-4xl font-bold mb-4" style={{color: '#1e3a3a', lineHeight: '1.2'}}>Custom Software Development</h2>
                <p className="text-base mb-8" style={{color: '#6b7280', lineHeight: '1.6'}}>
                  Take a flexible, scalable, and borderless approach to building tech teams prioritizing quality and skills over location.
                </p>
                <Link 
                  to="/use-cases" 
                  onClick={closeDropdown}
                  className="inline-flex items-center text-sm font-semibold hover:opacity-70 transition-opacity mb-12" 
                  style={{color: '#1e3a3a'}}
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <div className="border-l-4 pl-6" style={{borderColor: '#e5e7eb'}}>
                  <h3 className="text-xl font-bold mb-3" style={{color: '#1e3a3a'}}>GenAI Engagement Model</h3>
                  <p className="text-base" style={{color: '#6b7280', lineHeight: '1.6'}}>
                    An AI-powered platform finds your perfect matches quickly, getting your projects started fast.
                  </p>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="relative" style={{
                backgroundColor: '#e8f4f2',
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300D4AA' stroke-width='1' stroke-opacity='0.15'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
                borderRadius: '12px',
                padding: '48px 40px'
              }}>
                <h3 className="text-sm font-bold tracking-wider mb-8" style={{color: '#5a6c6c'}}>OUR TECHNICAL TALENT CAN HELP YOU</h3>
                <div className="space-y-6">
                  <Link to="/startup-scaling" onClick={closeDropdown} className="flex items-start hover:opacity-70 transition-opacity group">
                    <svg className="w-5 h-5 mr-4 mt-0.5 shrink-0" style={{color: '#5a6c6c'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-base font-medium group-hover:underline" style={{color: '#2d4a4a'}}>Web Application Development</span>
                  </Link>
                  <Link to="/enterprise-projects" onClick={closeDropdown} className="flex items-start hover:opacity-70 transition-opacity group">
                    <svg className="w-5 h-5 mr-4 mt-0.5 flex-shrink-0" style={{color: '#5a6c6c'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-base font-medium group-hover:underline" style={{color: '#2d4a4a'}}>Modernize Outdated Systems</span>
                  </Link>
                  <Link to="/digital-transformation" onClick={closeDropdown} className="flex items-start hover:opacity-70 transition-opacity group">
                    <svg className="w-5 h-5 mr-4 mt-0.5 flex-shrink-0" style={{color: '#5a6c6c'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-base font-medium group-hover:underline" style={{color: '#2d4a4a'}}>Seamless Cloud Migrations</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* solutions Dropdown */}

     {activeDropdown === 'solutions' && (
  <div
    className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
    style={{
      borderBottomLeftRadius: '16px',
      borderBottomRightRadius: '36px',
    }}
  >
    {/* Subtle Pattern Background */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circlePatternSolutions"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="40"
              cy="40"
              r="30"
              fill="none"
              stroke="rgba(30, 58, 58, 0.15)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circlePatternSolutions)" />
      </svg>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16 py-8 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12">
      
      {/* Left Column */}
      <div>
        <h2
          className="text-4xl font-extrabold mb-4"
          style={{ color: '#1e3a3a', lineHeight: '1.2' }}
        >
          Flexible Engagement <br /> Models
        </h2>
        <p
          className="text-base mb-6"
          style={{ color: '#6b7280', lineHeight: '1.7' }}
        >
          Build, manage, and pay teams in whatever configuration helps you deliver
          projects faster.
        </p>

        <Link
          to="/solutions"
          onClick={closeDropdown}
          className="inline-flex items-center text-sm font-semibold hover:opacity-70 transition-opacity"
          style={{ color: '#1e3a3a' }}
        >
          Learn More{' '}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        <hr className="my-8 border-gray-200" />

        
      </div>

      {/* Middle Column — FUNCTIONS */}
      <div>
        <h4
          className="text-xs font-bold tracking-widest mb-5"
          style={{ color: '#1e3a3a', letterSpacing: '0.08em' }}
        >
          FUNCTIONS
        </h4>
        <div className="space-y-5">
          <Link
            to="/dedicated-teams"
            onClick={closeDropdown}
            className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all"
          >
            <svg
              className="w-3 h-3 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            Application Development
          </Link>

          <Link to="/staff-augmentation" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Data Science & AI
          </Link>

          <Link to="/project-based" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Data Engineering & Analytics
          </Link>

          <Link to="/cloud-devops" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Cloud & DevOps
          </Link>
        </div>
      </div>

      {/* Right Column — ADAPTIVE HIRING */}
      <div>
        <h4
          className="text-xs font-bold tracking-widest mb-5"
          style={{ color: '#1e3a3a', letterSpacing: '0.08em' }}
        >
          ADAPTIVE HIRING
        </h4>
        <div className="space-y-5">
          <Link to="/adaptive-hiring" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Adaptive Hiring Overview
          </Link>

          <Link to="/how-it-works" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            How KIAQ Works
          </Link>

          <Link to="/manage-remote-teams" onClick={closeDropdown} className="flex items-center text-gray-600 hover:text-[#1e3a3a] transition-all">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Successfully Manage Remote Teams
          </Link>
        </div>
      </div>
    </div>
  </div>
)}


      

      {/* Resources Dropdown */}
      {activeDropdown === "resources" && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={{
            height: "56vh",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "36px",
            overflow: "hidden",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-6 sm:py-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-12">

              {/* Left Section */}
              <div
                className="flex-1 flex flex-col justify-center"
                style={{ maxWidth: "360px" }}
              >
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  Resource Center
                </h2>

                <p
                  className="text-sm md:text-base mb-6"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Discover how to put Adaptive Hiring to work for your business.
                </p>

                <Link
                  to="/resources"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  View All Resources
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              {/* Middle Section (links) */}
              <div className="flex-1 max-w-xl">
                {/* center the grid vertically and horizontally */}
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3 w-full">
                    {[
                      { path: "/blog", label: "Blog" },
                      { path: "/case-studies", label: "Case Studies" },
                      { path: "/webinars", label: "Webinars" },
                      { path: "/videos", label: "Videos" },
                      { path: "/ebooks", label: "eBooks" },
                      { path: "/white-papers", label: "White Papers" },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={closeDropdown}
                        className="flex items-center text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
                        style={{ color: "#2d4a4a" }}
                      >
                        <svg
                          className="w-4 h-4 mr-3 shrink-0"
                          style={{ color: "#5a6c6c" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Section (visual card) */}
              <div
                className="flex-1 max-w-[360px] flex items-center justify-center"
                style={{
                  // decorative background / subtle pattern
                  backgroundColor: "#e8f4f2",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300D4AA' stroke-width='1' stroke-opacity='0.12'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: "60px 60px",
                  padding: "28px",
                  borderRadius: "12px",
                  height: "100%",
                }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full">
                  <img
                    src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60"
                    alt="Webinar Preview"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5 md:p-6">
                    <p
                      className="uppercase text-xs font-semibold mb-2"
                      style={{ color: "#5a6c6c" }}
                    >
                      Webinar
                    </p>
                    <h4
                      className="text-base md:text-lg font-semibold mb-3"
                      style={{ color: "#1e3a3a" }}
                    >
                      Navigating Remote Work Challenges With Expert Insights
                    </h4>
                    <Link
                      to="/webinars"
                      onClick={closeDropdown}
                      className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "#1e3a3a" }}
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

            </div> {/* end row */}
          </div>
        </div>
      )}

      {/* Talent Dropdown */}
      {activeDropdown === "talent" && (
  <div
    className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
    style={{
      height: "56vh",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "36px",
      overflow: "hidden",
    }}
  >
    <div className="max-w-7xl mx-auto px-12 md:px-16 py-8 w-full">
      <div className="flex justify-between items-center gap-12">

        {/* Left Section */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ maxWidth: "340px" }}
        >
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "#1e3a3a", lineHeight: "1.2" }}
          >
            Talent
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "#6b7280", lineHeight: "1.7" }}
          >
            Join our community of exceptional African tech talent.
          </p>
          <Link
            to="/talent"
            onClick={closeDropdown}
            className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#1e3a3a", fontSize: "15px" }}
          >
            Join KIAQ
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex-1 max-w-2xl border-l border-gray-200 pl-12">
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <Link
                to="/apply"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Apply as Talent
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Join our talent community
                </p>
              </Link>
            </div>

            <div>
              <Link
                to="/talent-success"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Success Stories
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Career growth with KIAQ
                </p>
              </Link>
            </div>

            <div>
              <Link
                to="/skill-development"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Skill Development
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Continuous learning opportunities
                </p>
              </Link>
            </div>

            {/* <div>
              <Link
                to="/perks"
                onClick={closeDropdown}
                className="flex items-center hover:opacity-80 transition-opacity"
                style={{ color: "#1e3a3a", fontWeight: "500" }}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Perks
              </Link>
            </div> */}
          </div>
        </div>

        {/* Right Section (Card) */}
        <div
          className="flex-1 max-w-[360px] flex items-center justify-center"
          style={{
            backgroundColor: "#e8f4f2",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300D4AA' stroke-width='1' stroke-opacity='0.12'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
            padding: "28px",
            borderRadius: "12px",
            height: "100%",
          }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
              alt="Ebook Preview"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <p
                className="uppercase text-xs font-semibold mb-2"
                style={{ color: "#5a6c6c" }}
              >
                eBook
              </p>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "#1e3a3a" }}
              >
                The Shifting Paradigm of the CIO
              </h4>
              <Link
                to="/ebooks"
                onClick={closeDropdown}
                className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#1e3a3a" }}
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


      {/* About Dropdown */}
     {activeDropdown === "about" && (
  <div
    className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
    style={{
      height: "56vh",
      borderBottomLeftRadius: "16px",
      borderBottomRightRadius: "36px",
      overflow: "hidden",
    }}
  >
    <div className="max-w-7xl mx-auto px-12 md:px-16 py-8 w-full">
      <div className="flex justify-between items-center gap-12">

        {/* Left Section */}
        <div className="flex-1" style={{ maxWidth: "340px" }}>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "#1e3a3a", lineHeight: "1.2" }}
          >
            About KIAQ
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "#6b7280", lineHeight: "1.7" }}
          >
            Learn about our mission to connect Africa's best tech talent with global opportunities.
          </p>
          <Link
            to="/about"
            onClick={closeDropdown}
            className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#1e3a3a", fontSize: "15px" }}
          >
            Our Story
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex-1 max-w-2xl border-l border-gray-200 pl-12">
          <div className="grid grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <Link
                to="/mission"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Contact Us
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Get in touch with our team
                </p>
              </Link>
            </div>

            <div>
              <Link
                to="/team"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Leadership Team
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Meet the people behind KIAQ
                </p>
              </Link>
            </div>

            <div>
              <Link
                to="/careers"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Careers
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Join our growing team
                </p>
              </Link>
            </div>

            {/* <div>
              <Link
                to="/contact"
                onClick={closeDropdown}
                className="block hover:opacity-80 transition-opacity"
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "#1e3a3a" }}
                >
                  Contact Us
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b7280", lineHeight: "1.6" }}
                >
                  Get in touch with our team
                </p>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Right Section (Card) */}
        <div
          className="flex-1 max-w-[360px] flex items-center justify-center"
          style={{
            backgroundColor: "#e8f4f2",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300D4AA' stroke-width='1' stroke-opacity='0.12'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
            padding: "28px",
            borderRadius: "12px",
            height: "100%",
          }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60"
              alt="Whitepaper Preview"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <p
                className="uppercase text-xs font-semibold mb-2"
                style={{ color: "#5a6c6c" }}
              >
                Whitepaper
              </p>
              <h4
                className="text-lg font-semibold mb-4"
                style={{ color: "#1e3a3a" }}
              >
                The Future of Hiring is Borderless
              </h4>
              <Link
                to="/whitepaper"
                onClick={closeDropdown}
                className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "#1e3a3a" }}
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </header>
  );
}
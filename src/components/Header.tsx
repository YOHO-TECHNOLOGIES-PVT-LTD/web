import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
// import { UI_CONSTANTS } from '../constants/colors';
import image from '../assets/kIAQ_.png';
import img2 from "../assets/resources_sub_menu.webp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const getActiveMenu = (path: string) => {
    if (path.startsWith('/why-kiaq') || path.startsWith('/customer-stories') || path.startsWith('/insights') || path.startsWith('/talent-community') || path.startsWith('/untapped-markets') || path.startsWith('/mission-focused') || path.startsWith('/forrester-tei') || path.startsWith('/impact')) return 'why-kiaq';
    if (path.startsWith('/startup-scaling') || path.startsWith('/enterprise-projects') || path.startsWith('/digital-transformation') || path.startsWith('/use-cases') || path.startsWith('/custom-software-development') || path.startsWith('/legacy-system-modernization') || path.startsWith('/web-app-development') || path.startsWith('/genai-engagement') || path.startsWith('/cloud-migrations')) return 'use-cases';
    if (path.startsWith('/dedicated-teams') || path.startsWith('/staff-augmentation') || path.startsWith('/project-based') || path.startsWith('/solutions') || path.startsWith('/cloud-devops') || path.startsWith('/adaptive-hiring') || path.startsWith('/how-it-works') || path.startsWith('/manage-remote-teams') || path.startsWith('/flexible-engagement') || path.startsWith('/browse-talent') || path.startsWith('/application-development') || path.startsWith('/data-science-ai') || path.startsWith('/data-engineering-analytics') || path.startsWith('/skills')) return 'solutions';
    if (path.startsWith('/platform') || path.startsWith('/platform-overview') || path.startsWith('/integrations') || path.startsWith('/andela-pay') || path.startsWith('/qualified-by-andela')) return 'platform';
    if (path.startsWith('/blog') || path.startsWith('/case-studies') || path.startsWith('/whitepapers') || path.startsWith('/resources') || path.startsWith('/resource-center') || path.startsWith('/ebooks') || path.startsWith('/humans-of-andela') || path.startsWith('/profiles-in-brilliance') || path.startsWith('/infographics') || path.startsWith('/videos') || path.startsWith('/webinars')) return 'resources';
    if (path.startsWith('/apply') || path.startsWith('/talent-success') || path.startsWith('/skill-development') || path.startsWith('/talent') || path.startsWith('/why-join-andela') || path.startsWith('/our-process') || path.startsWith('/find-opportunities') || path.startsWith('/talent-experience') || path.startsWith('/perks') || path.startsWith('/codewars') || path.startsWith('/help-center')) return 'talent';
    if (path.startsWith('/mission') || path.startsWith('/team') || path.startsWith('/careers') || path.startsWith('/about') || path.startsWith('/leadership') || path.startsWith('/sustainability') || path.startsWith('/press-media') || path.startsWith('/contact-us')) return 'about';
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

  // Common dropdown container styles
  const dropdownContainerStyle = {
    height: "56vh",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "36px",
    overflow: "hidden" as const
  };

  // Common orange background style
  // const orangeCardStyle = {
  //   backgroundColor: "#ff6b35",
  //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23FFFFFF' stroke-width='1' stroke-opacity='0.18'%3E%3Ccircle cx='20' cy='20' r='19'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  //   backgroundSize: "60px 60px",
  // };

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm backdrop-blur-sm' : ''
      }`}
      style={{ 
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.90)'   // Light white shade when scrolled
          : 'rgba(255, 255, 255, 0.40)', // Light transparent white when not scrolled
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <button 
              className="md:hidden p-2 mr-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke={isScrolled ? '#374151' : '#ffffff'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="flex items-center ">
              <img src={image} alt="KIAQ Logo" className="h-8 sm:h-10" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button onClick={() => handleDropdownToggle('why-kiaq')} className={`${activeDropdown === 'why-kiaq' || activeMenu === 'why-kiaq' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Why KIAQ?</button>
            <button onClick={() => handleDropdownToggle('solutions')} className={`${activeDropdown === 'solutions' || activeMenu === 'solutions' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Solutions</button>
            <button onClick={() => handleDropdownToggle('use-cases')} className={`${activeDropdown === 'use-cases' || activeMenu === 'use-cases' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Use Cases</button>
            <button onClick={() => handleDropdownToggle('resources')} className={`${activeDropdown === 'resources' || activeMenu === 'resources' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>Resources</button>
            <button onClick={() => handleDropdownToggle('talent')} className={`${activeDropdown === 'talent' || activeMenu === 'talent' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>For Talent</button>
            <button onClick={() => handleDropdownToggle('about')} className={`${activeDropdown === 'about' || activeMenu === 'about' ? 'text-orange-400 border-b-2 border-orange-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1`}>About</button>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 p-2 transition-colors`}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            <button className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-400 p-2 transition-colors`}>
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
              <button onClick={() => {setActiveDropdown(activeDropdown === 'why-kiaq' ? null : 'why-kiaq');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">Why KIAQ?</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">Solutions</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'use-cases' ? null : 'use-cases');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">Use Cases</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'resources' ? null : 'resources');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">Resources</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'talent' ? null : 'talent');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">For Talent</button>
              <button onClick={() => {setActiveDropdown(activeDropdown === 'about' ? null : 'about');}} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-orange-400 font-medium rounded-lg transition-colors">About</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Why KIAQ Dropdown */}
      {activeDropdown === 'why-kiaq' && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  Why<br />KIAQ
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Our vast network of technologists and AI-driven matching help you hire the world's best.
                </p>

                <Link
                  to="/why-kiaq"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  Learn More →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/mission-focused"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Mission Focused
                      </Link>
                      <Link
                        to="/untapped-markets"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Untapped Markets
                      </Link>
                      <Link
                        to="/talent-community"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Talent Community
                      </Link>
                      <Link
                        to="/customer-stories"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Customer Stories
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/forrester-tei"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Forrester TEI
                      </Link>
                      <Link
                        to="/insights"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Insights
                      </Link>
                      <Link
                        to="/impact"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Impact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="Why KIAQ" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
                        style={{ color: "#1e3a3a" }}
                      >
                        5 Steps To Building A Successful Global Team
                      </h4>
                      <Link
                        to="/insights"
                        onClick={closeDropdown}
                        className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#1e3a3a" }}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Dropdown */}
      {activeDropdown === 'solutions' && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  Solutions
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Flexible engagement models to build, manage, and pay teams in any configuration.
                </p>

                <Link
                  to="/solutions"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  Browse Solutions →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/adaptive-hiring"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Adaptive Hiring
                      </Link>
                      <Link
                        to="/dedicated-teams"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Dedicated Teams
                      </Link>
                      <Link
                        to="/staff-augmentation"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Staff Augmentation
                      </Link>
                      <Link
                        to="/project-based"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Project Based
                      </Link>
                      <Link
                        to="/application-development"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Application Development
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/data-science-ai"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Data Science & AI
                      </Link>
                      <Link
                        to="/data-engineering-analytics"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Data Engineering
                      </Link>
                      <Link
                        to="/cloud-devops"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Cloud & DevOps
                      </Link>
                      <Link
                        to="/platform-overview"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Platform Overview
                      </Link>
                      <Link
                        to="/integrations"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Integrations
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="Solutions" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
                        style={{ color: "#1e3a3a" }}
                      >
                        How Adaptive Hiring Transformed Our Team
                      </h4>
                      <Link
                        to="/case-studies"
                        onClick={closeDropdown}
                        className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#1e3a3a" }}
                      >
                        Read Story →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Use Cases Dropdown */}
      {activeDropdown === 'use-cases' && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  Use<br />Cases
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Custom software development solutions for your specific business needs.
                </p>

                <Link
                  to="/use-cases"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  View All Use Cases →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/custom-software-development"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Custom Software
                      </Link>
                      <Link
                        to="/legacy-system-modernization"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Legacy Modernization
                      </Link>
                      <Link
                        to="/web-app-development"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Web App Development
                      </Link>
                      <Link
                        to="/genai-engagement"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › GenAI Engagement
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/cloud-migrations"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Cloud Migrations
                      </Link>
                      <Link
                        to="/startup-scaling"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Startup Scaling
                      </Link>
                      <Link
                        to="/enterprise-projects"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Enterprise Projects
                      </Link>
                      <Link
                        to="/digital-transformation"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Digital Transformation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="Use Cases" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
                        style={{ color: "#1e3a3a" }}
                      >
                        Modernizing Legacy Systems Successfully
                      </h4>
                      <Link
                        to="/webinars"
                        onClick={closeDropdown}
                        className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#1e3a3a" }}
                      >
                        Watch Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Dropdown */}
      {activeDropdown === "resources" && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  Resource<br />Center
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Discover how to put Adaptive Hiring to work for your business.
                </p>

                <Link
                  to="/resource-center"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  View All Resources →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/blog"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Blog
                      </Link>
                      <Link
                        to="/infographics"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Infographics
                      </Link>
                      <Link
                        to="/webinars"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Webinars
                      </Link>
                      <Link
                        to="/ebooks"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › eBooks
                      </Link>
                      <Link
                        to="/white-papers"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › White Papers
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/case-studies"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Case Studies
                      </Link>
                      <Link
                        to="/customer-stories"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Customer Stories
                      </Link>
                      <Link
                        to="/videos"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Videos
                      </Link>
                      <Link
                        to="/humans-of-andela"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Humans of KIAQ
                      </Link>
                      <Link
                        to="/profiles-in-brilliance"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Profiles in Brilliance
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="Resources" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
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
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Talent Dropdown */}
      {activeDropdown === "talent" && (
        <div
          className="absolute top-full left-0 w-screen bg-white shadow-xl z-40 max-h-screen overflow-y-auto"
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  For<br />Talent
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Join our community of exceptional African tech talent.
                </p>

                <Link
                  to="/why-join-andela"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  Why Join KIAQ →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/our-process"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Our Process
                      </Link>
                      <Link
                        to="/find-opportunities"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Find Opportunities
                      </Link>
                      <Link
                        to="/talent-experience"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Talent Experience
                      </Link>
                      <Link
                        to="/perks"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Perks
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/codewars"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Codewars
                      </Link>
                      <Link
                        to="/help-center"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Help Center
                      </Link>
                      <Link
                        to="/skill-development"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Skill Development
                      </Link>
                      <Link
                        to="/talent-success"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Talent Success
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="For Talent" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
                        style={{ color: "#1e3a3a" }}
                      >
                        From Local Talent to Global Impact
                      </h4>
                      <Link
                        to="/talent-success"
                        onClick={closeDropdown}
                        className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#1e3a3a" }}
                      >
                        Read Story →
                      </Link>
                    </div>
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
          style={dropdownContainerStyle}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-16 py-8 w-full h-full">
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8">
              
              {/* Left Section */}
              <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: "320px" }}>
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  style={{ color: "#1e3a3a", lineHeight: "1.15" }}
                >
                  About<br />KIAQ
                </h2>

                <p
                  className="text-sm md:text-base mb-6 leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  Learn about our mission to connect Africa's best tech talent with global opportunities.
                </p>

                <Link
                  to="/about"
                  onClick={closeDropdown}
                  className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity mb-2"
                  style={{ color: "#1e3a3a", fontSize: "15px" }}
                >
                  Our Story →
                </Link>
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/leadership"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Leadership
                      </Link>
                      <Link
                        to="/sustainability"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Sustainability
                      </Link>
                      <Link
                        to="/careers"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Careers
                      </Link>
                      <Link
                        to="/press-media"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Press & Media
                      </Link>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-1">
                      <Link
                        to="/contact-us"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Contact Us
                      </Link>
                      <Link
                        to="/mission"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Our Mission
                      </Link>
                      <Link
                        to="/team"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Featured Card with Image */}
              <div className="flex-1 max-w-[360px] flex items-center justify-center">
                <div
                  className="w-full rounded-xl overflow-hidden shadow-lg h-64"
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                    position: 'relative'
                  }}
                >
                  <img 
                    src={img2} 
                    alt="About KIAQ" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
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
                        Learn More →
                      </Link>
                    </div>
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
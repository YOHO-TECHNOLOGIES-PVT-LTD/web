import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import image from '../assets/kIAQ_.png';
import img2 from "../assets/resources_sub_menu.webp";
import img3 from "../assets/kqwhite-removebg-preview.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  
  const navigate = useNavigate();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
    setIsMobileMenuOpen(false);
  };

  // Desktop dropdown container styles
  const dropdownContainerStyle = {
    height: "56vh",
    borderRadius: "16px",
    overflow: "hidden" as const,
    position: "absolute" as const,
    margin: "20px auto",
    width: "calc(100% - 40px)",
    left: "0px",
    top: "45px",
    right: "0px",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(0, 0, 0, 0.08)",
  };

  const dropdownInnerStyle = {
    padding: "70px 88px",
    display: "flex",
    gap: "100px",
    height: "400px",
    boxSizing: "border-box" as const,
    justifyContent: "space-between",
    alignItems: "stretch",
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-sm backdrop-blur-sm" : ""
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.90)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <div className="flex items-center">

            {/* Mobile Menu Icon */}
            <button
              className="md:hidden p-2 mr-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke={isScrolled ? "#374151" : "#ffffff"}
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={isScrolled ? image : img3}
                alt="KIAQ Logo"
                className="h-auto w-24 sm:w-28 md:w-32 object-contain transition-all duration-300"
              />
            </Link>

            {/* Vertical Line */}
            <div
              className="hidden sm:block transition-all duration-300"
              style={{
                width: "1px",
                height: "40px",
                backgroundColor: isScrolled ? "#00000020" : "#fff3",
                marginLeft: "20px",
                marginRight: "15px",
                opacity: 1,
              }}
            ></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-start space-x-3 lg:space-x-6 xl:space-x-8 flex-1">
            <button
              onClick={() => {
                navigate('/');
              }}
              className={`${
                location.pathname === '/'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Home
            </button>

            <button
              onClick={() => navigate('/why-kiaq')}
              className={`${
                location.pathname === '/why-kiaq'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              }  hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Who We Are
            </button>

            <button
              onClick={() => handleDropdownToggle('solutions')}
              className={`${
                activeDropdown === 'solutions' || activeMenu === 'solutions'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              What We Do
            </button>

            <button
              onClick={() => navigate('/humans-of-Kiaq')}
              className={`${
                location.pathname === '/humans-of-Kiaq'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Our Expertise
            </button>

            {/* <button
              className={`${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Portfolio
            </button> */}

           <button
              onClick={() => {
                navigate('#');
              }}
              className={`${
                location.pathname === '#'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Careers
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              className={`hidden sm:block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-orange-400 p-2 transition-colors`}
              aria-label="User profile"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              className={`hidden sm:block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-orange-400 p-2 transition-colors`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              to="/request-consultation"
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: '#0fddcc', color: '#ffffff' }}
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">

              {/* Home */}
              <button
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
                  hover:bg-gray-50 hover:text-orange-400`}
              >
                Home
              </button>

              {/* Why KIAQ */}
              <button
                onClick={() => {
                  navigate('/why-kiaq');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/why-kiaq' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
                  hover:bg-gray-50 hover:text-orange-400`}
              >
                Who We Are
              </button>

              {/* What We Do (Expandable) */}
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')
                  }
                  className={`flex justify-between items-center w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                    ${activeDropdown === 'solutions' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
                    hover:bg-gray-50 hover:text-orange-400`}
                >
                  <span>What We Do</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Dropdown Content */}
                {activeDropdown === 'solutions' && (
                  <div className="mt-2 ml-4 pl-4 border-l-2 border-gray-200 space-y-2">
                    <Link
                      to="/application-development"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Application Development
                    </Link>
                    <Link
                      to="/data-science-ai"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Data Science & AI
                    </Link>
                    <Link
                      to="/data-engineering-analytics"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Data Engineering
                    </Link>
                    <Link
                      to="/cloud-devops"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Cloud & DevOps
                    </Link>
                    <Link
                      to="/adaptive-hiring"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Adaptive Hiring
                    </Link>
                    <Link
                      to="/staff-augmentation"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      How Kiaq Works
                    </Link>
                    <Link
                      to="/project-based"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      Successfully Manage Remote Teams
                    </Link>
                  </div>
                )}
              </div>

              {/* Our Expertise */}
              <button
                onClick={() => {
                  navigate('/humans-of-Kiaq');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/humans-of-Kiaq' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
                  hover:bg-gray-50 hover:text-orange-400`}
              >
                Our Expertise
              </button>

              {/* Portfolio */}
              {/* <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-400"
              >
                Portfolio
              </button> */}

              {/* Careers */}
              <button
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-400"
              >
                Careers
              </button>

            </div>
          </div>
        )}

      </nav>

      {/* Desktop Solutions Dropdown */}
      {activeDropdown === 'solutions' && (
        <div
          className="hidden md:block absolute bg-white shadow-xl z-40"
          style={dropdownContainerStyle}
        >
          <div style={dropdownInnerStyle}>
            <div className="flex flex-col md:flex-row justify-between items-start h-full gap-8 w-full">

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
              </div>

              {/* Middle Section - Two Column Links */}
              <div className="flex-1 max-w-xl">
                <div className="h-full flex items-center">
                  <div className="grid grid-cols-2 gap-x-16 gap-y-1 w-full">
                    {/* Left Column */}
                    <div className="space-y-1">
                      <Link
                        to="/application-development"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Application Development
                      </Link>
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
                    </div>

                    {/* Right Column */}
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
                        to="/staff-augmentation"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › How Kiaq Works
                      </Link>
                      <Link
                        to="/project-based"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › Successfully Manage Remote Teams
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
                  <div className="absolute inset-0 bg-opacity-20 flex flex-col justify-end p-6">
                    <div className="bg-white rounded-lg p-4">
                      <h4
                        className="text-lg font-semibold mb-2 leading-tight"
                        style={{ color: "#1e3a3a" }}
                      >
                        How Adaptive Hiring Transformed Our Team
                      </h4>
                      <Link
                        to="/insights"
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

    </header>
  );
}
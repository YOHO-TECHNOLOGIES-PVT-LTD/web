import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import image from '../assets/kIAQ_.png';
import img2 from "../assets/resources_sub_menu.webp";
import img3 from "../assets/kqwhite-removebg-preview.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{name: string, path: string}>>([]);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const navigate = useNavigate();

  // All searchable pages
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'Customer Stories', path: '/customer-stories' },
    { name: 'Insights', path: '/insights' },
    { name: 'Talent Community', path: '/talent-community' },
    { name: 'Untapped Markets', path: '/untapped-markets' },
    { name: 'Mission Focused', path: '/mission-focused' },
    { name: 'Forrester TEI', path: '/forrester-tei' },
    { name: 'Impact', path: '/impact' },
    { name: 'Application Development', path: '/application-development' },
    { name: 'Data Science & AI', path: '/data-science-ai' },
    { name: 'Data Engineering', path: '/data-engineering-analytics' },
    { name: 'Cloud & DevOps', path: '/cloud-devops' },
    { name: 'Adaptive Hiring', path: '/adaptive-hiring' },
    { name: 'How KIAQ Works', path: '/how-kiaq-works' },
    { name: 'Successfully Manage Remote Teams', path: '/successfully-manage-remote' },
    { name: 'Our Expertise', path: '/our-expertise' },
    { name: 'Contact Us', path: '/Contact-us' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Custom Software Development', path: '/custom-software-development' },
    { name: 'Legacy System Modernization', path: '/legacy-system-modernization' },
    { name: 'Web App Development', path: '/web-app-development' },
    { name: 'GenAI Engagement', path: '/genai-engagement' },
    { name: 'Cloud Migrations', path: '/cloud-migrations' },
  ];

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = pages.filter(page =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  }, [searchQuery]);

  const getActiveMenu = (path: string) => {
    if (path.startsWith('/who-we-are') || path.startsWith('/customer-stories') || path.startsWith('/insights') || path.startsWith('/talent-community') || path.startsWith('/untapped-markets') || path.startsWith('/mission-focused') || path.startsWith('/forrester-tei') || path.startsWith('/impact')) return 'who-we-are';
    if (path.startsWith('/startup-scaling') || path.startsWith('/enterprise-projects') || path.startsWith('/digital-transformation') || path.startsWith('/use-cases') || path.startsWith('/custom-software-development') || path.startsWith('/legacy-system-modernization') || path.startsWith('/web-app-development') || path.startsWith('/genai-engagement') || path.startsWith('/cloud-migrations')) return 'use-cases';
    if (path.startsWith('/dedicated-teams') || path.startsWith('/how-kiaq-works') || path.startsWith('/successfully-manage-remote') || path.startsWith('/solutions') || path.startsWith('/cloud-devops') || path.startsWith('/adaptive-hiring') || path.startsWith('/how-it-works') || path.startsWith('/manage-remote-teams') || path.startsWith('/flexible-engagement') || path.startsWith('/browse-talent') || path.startsWith('/application-development') || path.startsWith('/data-science-ai') || path.startsWith('/data-engineering-analytics') || path.startsWith('/skills')) return 'solutions';
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
        setIsSearchOpen(false);
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

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery('');
    setSearchResults([]);
    setActiveDropdown(null);
  };

  const handleSearchResultClick = (path: string) => {
    navigate(path);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
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
              onClick={() => navigate('/who-we-are')}
              className={`${
                location.pathname === '/who-we-are'
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
              onClick={() => navigate('/our-expertise')}
              className={`${
                location.pathname === '/our-expertise'
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
              } hover:text-orange-400 text-xs lg:text-sm font-medium transition-colors pb-1 whitespace-nowrap`}
            >
              Our Expertise
            </button>

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
            {/* Mobile Search Icon - Visible on all screens */}
            <button
              onClick={handleSearchClick}
              className={`sm:hidden ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-orange-400 p-2 transition-colors`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Desktop Search Icon - Hidden on mobile */}
            <button
              onClick={handleSearchClick}
              className={`hidden sm:block ${
                isScrolled ? 'text-gray-700' : 'text-white'
              } hover:text-orange-400 p-2 transition-colors`}
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

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
            
            <Link
              to="/Contact-us"
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 whitespace-nowrap"
              style={{ backgroundColor: '#ff5500', color: '#ffffff' }}
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200 absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">

              {/* Search Bar in Mobile Menu */}
              <div className="px-4 py-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for pages..."
                    className="w-full px-4 py-3 pr-10 rounded-lg focus:outline-none text-gray-700 border border-gray-300 focus:border-orange-400 transition-colors"
                  />
                  <svg
                    className="absolute right-3 top-3.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Search Results in Mobile Menu */}
                {searchQuery && (
                  <div className="mt-2 max-h-48 overflow-y-auto">
                    {searchResults.length > 0 ? (
                      <div className="space-y-1">
                        {searchResults.map((result, index) => (
                          <button
                            key={index}
                            onClick={() => handleSearchResultClick(result.path)}
                            className="w-full text-left px-3 py-2 rounded-lg transition-all bg-gray-50 border border-gray-200 hover:bg-orange-50 hover:border-orange-200"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700 font-medium text-sm">{result.name}</span>
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500 text-sm">
                        No pages found matching "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>

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
                  navigate('/who-we-are');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/who-we-are' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
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
                      to="/how-kiaq-works"
                      onClick={closeDropdown}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded transition-colors"
                    >
                      How Kiaq Works
                    </Link>
                    <Link
                      to="/successfully-manage-remote"
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
                  navigate('/our-expertise');
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors text-sm
                  ${location.pathname === '/our-expertise' ? 'text-orange-400 bg-gray-50' : 'text-gray-700'}
                  hover:bg-gray-50 hover:text-orange-400`}
              >
                Our Expertise
              </button>

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

      {/* Search Bar Dropdown - For both desktop and mobile */}
      {isSearchOpen && (
        <div className="absolute left-0 right-0 top-16 z-40 bg-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for pages..."
                className="w-full px-4 py-3 pr-10 rounded-lg focus:outline-none text-white border border-gray-300 focus:border-orange-400 transition-colors placeholder-gray-300"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              />
              <svg
                className="absolute right-3 top-3.5 w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Search Results */}
            {searchQuery && (
              <div className="mt-4 max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result.path)}
                        className="w-full text-left px-4 py-3 rounded-lg transition-all border border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{result.name}</span>
                          <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">{result.path}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-300">
                    No pages found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

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
                        to="/how-kiaq-works"
                        onClick={closeDropdown}
                        className="flex items-center text-sm font-medium hover:opacity-70 transition-opacity py-1"
                        style={{ color: "#2d4a4a" }}
                      >
                        › How Kiaq Works
                      </Link>
                      <Link
                        to="/successfully-manage-remote"
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
                      {/* <Link
                        to="/insights"
                        onClick={closeDropdown}
                        className="inline-flex items-center text-sm font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#1e3a3a" }}
                      >
                        Read Story →
                      </Link> */}
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
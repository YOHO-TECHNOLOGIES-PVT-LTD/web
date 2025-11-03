import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { UI_CONSTANTS } from '../constants/colors';
import image from '../assets/kIAQ_.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm backdrop-blur-sm' : ''
      }`}
      style={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.3)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none'
      }}
    >
      <nav className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={image} alt="KIAQ Logo" className="h-8" />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleDropdownToggle('why-kiaq')} className={`${activeDropdown === 'why-kiaq' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Why KIAQ?</button>
            <button onClick={() => handleDropdownToggle('use-cases')} className={`${activeDropdown === 'use-cases' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Use Cases</button>
            <button onClick={() => handleDropdownToggle('solutions')} className={`${activeDropdown === 'solutions' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Solutions</button>
            <button onClick={() => handleDropdownToggle('platform')} className={`${activeDropdown === 'platform' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Platform</button>
            <button onClick={() => handleDropdownToggle('resources')} className={`${activeDropdown === 'resources' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Resources</button>
            <button onClick={() => handleDropdownToggle('talent')} className={`${activeDropdown === 'talent' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>Talent</button>
            <button onClick={() => handleDropdownToggle('about')} className={`${activeDropdown === 'about' ? 'text-teal-400' : isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-400 text-sm font-medium transition-colors`}>About</button>
          </div>
          
          <div className="flex items-center space-x-3">
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
              className="px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-101"
              style={{ backgroundColor: '#00D4AA', color: '#000000' }}
            >
            GET IN TOUCH
            </Link>
          </div>
        </div>
      </nav>
      
      {activeDropdown === 'why-kiaq' && (
        <div className="absolute top-full left-0 w-screen bg-white shadow-xl z-40" style={{height: '80vh', borderBottomLeftRadius: '16px', borderBottomRightRadius: '36px', overflow: 'hidden'}}>
          <div className="h-full flex items-center">
            <div className="max-w-7xl mx-auto px-16 w-full">
              <div className="flex gap-16 justify-center items-start">
                {/* Left Column */}
                <div className="flex-1" style={{maxWidth: '380px'}}>
                  <h2 className="text-5xl font-bold mb-8" style={{color: '#1e3a3a', lineHeight: '1.1'}}>Why KIAQ</h2>
                  <p className="text-base mb-10" style={{color: '#6b7280', lineHeight: '1.7'}}>
                    Our vast network of technologists and AI-driven matching help you hire the world's best.
                  </p>
                  <Link to="/why-kiaq" className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity" style={{color: '#1e3a3a', fontSize: '15px'}}>
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="mt-10">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=420&h=260&fit=crop&crop=faces" 
                      alt="Team collaboration" 
                      className="w-full rounded-lg"
                      style={{height: '260px', objectFit: 'cover'}}
                    />
                  </div>
                </div>
                
                {/* Middle Column */}
                <div className="flex-1" style={{maxWidth: '340px'}}>
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#1e3a3a'}}>Our Talent Community</h3>
                      <p style={{color: '#6b7280', lineHeight: '1.7', fontSize: '15px'}}>
                        We don't just find the best talent — we cultivate it.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#1e3a3a'}}>Untapped Talent Markets</h3>
                      <p style={{color: '#6b7280', lineHeight: '1.7', fontSize: '15px'}}>
                        The talent you need is in untapped emerging markets.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3" style={{color: '#1e3a3a'}}>Mission Focused</h3>
                      <p style={{color: '#6b7280', lineHeight: '1.7', fontSize: '15px'}}>
                        KIAQ talent improves their career trajectories and quality of life.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest mb-5" style={{color: '#9ca3af', letterSpacing: '0.12em'}}>IMPACT</h4>
                      <div className="space-y-3.5">
                        <Link to="/customer-stories" className="flex items-center hover:opacity-70 transition-opacity group" style={{color: '#6b7280', fontSize: '15px'}}>
                          <svg className="w-3 h-3 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Customer Stories
                        </Link>
                        <Link to="/economic-impact" className="flex items-center hover:opacity-70 transition-opacity group" style={{color: '#6b7280', fontSize: '15px'}}>
                          <svg className="w-3 h-3 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Forrester Total Economic Impact (TEI) Study
                        </Link>
                        <Link to="/humans-of-kiaq" className="flex items-center hover:opacity-70 transition-opacity group" style={{color: '#6b7280', fontSize: '15px'}}>
                          <svg className="w-3 h-3 mr-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Humans of KIAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="flex-1" style={{maxWidth: '380px'}}>
                  <div className="rounded-lg relative overflow-hidden" style={{background: 'linear-gradient(135deg, #e0f2f1 0%, #f0fdf4 100%)'}}>
                    <div className="absolute top-4 right-4 opacity-10">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        {[...Array(6)].map((_, i) => (
                          <circle key={i} cx={15 + (i % 3) * 35} cy={15 + Math.floor(i / 3) * 35} r="12" stroke="#10b981" strokeWidth="1" />
                        ))}
                      </svg>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=220&fit=crop&crop=faces" 
                      alt="Global team" 
                      className="w-full"
                      style={{height: '220px', objectFit: 'cover'}}
                    />
                    <div className="p-7">
                      <div className="text-xs font-bold tracking-widest mb-4" style={{color: '#9ca3af', letterSpacing: '0.12em'}}>INSIGHTS</div>
                      <h3 className="text-xl font-bold mb-5" style={{color: '#1e3a3a', lineHeight: '1.3'}}>
                        5 Steps To Building A Successful Global Team
                      </h3>
                      <Link to="/insights" className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity" style={{color: '#1e3a3a', fontSize: '15px'}}>
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
          
          {/* Decorative Pattern Bottom Right */}
          <div className="absolute bottom-0 right-0 opacity-15 pointer-events-none" style={{width: '280px', height: '280px'}}>
            <svg width="100%" height="100%" viewBox="0 0 280 280" fill="none">
              {[...Array(20)].map((_, i) => {
                const row = Math.floor(i / 5);
                const col = i % 5;
                return (
                  <circle 
                    key={i} 
                    cx={25 + col * 60} 
                    cy={25 + row * 60} 
                    r="24" 
                    stroke="#10b981" 
                    strokeWidth="0.5" 
                    fill="none"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      )}
      
      {activeDropdown && (
        <div className="fixed inset-0 bg-opacity-40 z-30" style={{top: 'calc(64px + 50vh)'}} onClick={() => setActiveDropdown(null)}></div>
      )}
    </header>
  );
}
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
        <div className="absolute top-full left-0 w-screen bg-white shadow-xl z-40" style={{height: '80vh', borderBottomLeftRadius: '16px', borderBottomRightRadius: '36px', overflow: 'auto'}}>
          <div className="max-w-7xl mx-auto px-16 py-8">
            <div className="flex gap-16 justify-center">
              {/* Left Column */}
              <div className="flex-1" style={{maxWidth: '380px'}}>
                <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">Why KIAQ</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Our vast network of technologists and AI-driven matching help you hire the world's best.
                </p>
                <Link to="/why-kiaq" className="inline-flex items-center text-slate-800 font-semibold hover:text-teal-600 transition-colors">
                  Learn More 
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <div className="mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=380&h=240&fit=crop&crop=faces" 
                    alt="Team collaboration" 
                    className="w-full rounded-2xl"
                    style={{height: '240px', objectFit: 'cover'}}
                  />
                </div>
              </div>
              
              {/* Middle Column */}
              <div className="flex-1" style={{maxWidth: '320px'}}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Our Talent Community</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We don't just find the best talent — we cultivate it.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Untapped Talent Markets</h3>
                    <p className="text-slate-600 leading-relaxed">
                      The talent you need is in untapped emerging markets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Mission Focused</h3>
                    <p className="text-slate-600 leading-relaxed">
                      KIAQ talent improves their career trajectories and quality of life.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="flex-1" style={{maxWidth: '380px'}}>
                <div className="bg-slate-50 rounded-2xl p-8 mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=320&h=180&fit=crop&crop=faces" 
                    alt="Global team" 
                    className="w-full rounded-xl mb-6"
                    style={{height: '180px', objectFit: 'cover'}}
                  />
                  <div className="text-xs font-semibold text-slate-500 tracking-wider mb-4">INSIGHTS</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6 leading-tight">
                    5 Steps To Building A Successful Global Team
                  </h3>
                  <Link to="/insights" className="inline-flex items-center text-slate-800 font-semibold hover:text-teal-600 transition-colors">
                    Learn More 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-500 tracking-wider mb-6">IMPACT</h4>
                  <div className="space-y-4">
                    <Link to="/customer-stories" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Customer Stories
                    </Link>
                    <Link to="/economic-impact" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Forrester Total Economic Impact (TEI) Study
                    </Link>
                    <Link to="/humans-of-kiaq" className="flex items-center text-slate-600 hover:text-teal-600 transition-colors">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      Humans of KIAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeDropdown && (
        <div className="fixed inset-0  bg-opacity-40 z-30" style={{top: 'calc(64px + 50vh)'}} onClick={() => setActiveDropdown(null)}></div>
      )}
    </header>
  );
}
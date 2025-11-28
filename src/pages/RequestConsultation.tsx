import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import tecki from "../assets/teccipark3.jpeg";
import tech1 from "../assets/tech.webp";
import tech2 from "../assets/Olympia Technology Park (Chennai).jpg";
import tech3 from "../assets/teccipark3.jpeg";   
import teck4 from "../assets/central.png";

const UI_CONSTANTS = {
  PRIMARY: "#ff4600",
  DARK: "#011123",
  WHITE: "#ffffff",
};

// Define types for office data
interface OfficeInfo {
  title: string;
  address: string[];
  mobile: string;
  email: string;
  hours: string;
  image: string;
  mapsLink: string;
}

interface OfficeData {
  Chennai: OfficeInfo;
  Bangalore: OfficeInfo;
  Mumbai: OfficeInfo;
}

type OfficeLocation = keyof OfficeData;

const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] =
    useState<OfficeLocation>("Chennai");

  useEffect(() => {
    const savedLocation =
      localStorage.getItem("selectedOfficeLocation") as OfficeLocation | null;
    if (savedLocation && officeData[savedLocation]) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocation = event.target.value as OfficeLocation;
    setSelectedLocation(newLocation);
    localStorage.setItem("selectedOfficeLocation", newLocation);
  };

  const officeData: OfficeData = {
    Chennai: {
      title: "Chennai",
      address: [
        "M181, Cactus Corporate, G Floor, Block B",
        "Tecci Park, OMR, Sholinganallur",
        "Chennai 600 119",
      ],
      mobile: "+91 8925 92 1401",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#",
    },
    Bangalore: {
      title: "Bangalore",
      address: [
        "Tech Park, 3rd Floor, Tower B",
        "Whitefield Road",
        "Bangalore 560 066",
      ],
      mobile: "+91 8925 92 1402",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#",
    },
    Mumbai: {
      title: "Mumbai",
      address: [
        "Business Bay, 5th Floor",
        "Bandra Kurla Complex",
        "Mumbai 400 051",
      ],
      mobile: "+91 8925 92 1403",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#",
    },
  };

  const currentOffice = officeData[selectedLocation];

  /* -------------------------------------------------------------
        🔥 MANUAL SLIDER - SMOOTH SLIDE TRANSITION
  ------------------------------------------------------------- */
  const images = [tech1, tech2, tech3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  /* ------------------------------------------------------------- */

  return (
    <>
      {/* Contact Section */}
      <section
        className="relative w-full overflow-hidden pb-8 sm:pb-10 md:pb-12 lg:pb-14 pt-16 sm:pt-20 md:pt-24 lg:pt-28 min-h-auto"
        style={{
          // backgroundImage: `url(${bgGif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0d2e2f",
        }}
      >
        <div className="absolute inset-0 bg-[#0d2e2f] opacity-90"></div>

        {/* Header - Moved further down */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 sm:px-6 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-200">
            We're a dedicated team of IT professionals, committed to delivering
            innovative solutions that fuel your business success.
          </p>
        </div>

        {/* Contact Card - Moved further down */}
        <div className="relative z-10 flex justify-center px-4 sm:px-6 mt-10 sm:mt-14">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-6xl p-6 sm:p-8 lg:p-10 border border-gray-200 backdrop-blur-sm bg-white/95">
            <div className="max-w-6xl mx-auto">
              {/* Title Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-5">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
                    Our Offices
                  </h1>
                  <p className="text-gray-700 max-w-2xl leading-relaxed text-sm sm:text-base">
                    Explore our modern offices around the world—where innovation
                    meets collaboration and support is always available.
                  </p>
                </div>

                {/* Dropdown */}
                <div className="w-full lg:w-auto relative">
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={handleLocationChange}
                      className="appearance-none border border-gray-300 rounded-lg px-4 py-2.5 text-sm sm:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] cursor-pointer transition-all duration-200 w-full lg:w-44 pr-10 hover:border-gray-400 bg-gradient-to-b from-white to-gray-50"
                    >
                      <option value="Chennai">Chennai</option>
                      {/* <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option> */}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Info + Image Block */}
              <div className="border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 shadow-sm bg-white">
                {/* Info Left - Increased spacing and font sizes */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <img 
                      src={teck4} 
                      alt="Location" 
                      className="w-6 h-6 sm:w-7 sm:h-7 mr-3 sm:mr-4"
                    />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900">
                      {currentOffice.title}
                    </h2>
                  </div>

                  <div className="space-y-5 sm:space-y-6 text-base text-gray-800">
                    <div>
                      <p className="font-semibold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">
                        Address:
                      </p>
                      {currentOffice.address.map((line, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-base mb-2">
                          {line}
                        </p>
                      ))}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Mobile:</p>
                      <p className="text-gray-700 text-base">{currentOffice.mobile}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Mail ID:</p>
                      <p className="text-gray-700 text-base">{currentOffice.email}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                        Working Hours:
                      </p>
                      <p className="text-gray-700 text-base">{currentOffice.hours}</p>
                    </div>
                  </div>

                  <a
                    href={currentOffice.mapsLink}
                    className="inline-flex items-center gap-3 text-base mt-8 sm:mt-10 font-medium text-[#003049] border-b-2 border-[#003049] pb-2 hover:text-black hover:border-black transition-colors duration-200 group"
                  >
                    Open in Google Maps
                    <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>

                {/* RIGHT → MANUAL SLIDER WITH CONTROLS */}
                <div className="flex-1 min-w-0">
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-lg sm:rounded-xl overflow-hidden shadow-md relative">
                    <img
                      src={images[currentIndex]}
                      alt="Office Slide"
                      className="w-full h-full object-cover rounded-lg sm:rounded-xl transition-transform duration-500 ease-in-out"
                    />
                    
                    {/* Navigation Buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pattern - Further Reduced Height */}
        <div className="absolute bottom-0 left-0 w-full h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] bg-white overflow-hidden">
          <svg
            className="w-full h-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id="whitePattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={UI_CONSTANTS.PRIMARY}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#whitePattern)" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
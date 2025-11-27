import { useState, useEffect,  } from "react";
import type {ChangeEvent} from "react";
import tecki from "../assets/teccipark3.jpeg";
import bgGif from "../assets/Home1/red dots world map.gif";

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
  const [selectedLocation, setSelectedLocation] = useState<OfficeLocation>("Chennai");

  // Load saved location from localStorage on component mount
  useEffect(() => {
    const savedLocation = localStorage.getItem("selectedOfficeLocation") as OfficeLocation | null;
    if (savedLocation && officeData[savedLocation]) {
      setSelectedLocation(savedLocation);
    }
  }, []);

  // Handle location change and save to localStorage
  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLocation = event.target.value as OfficeLocation;
    setSelectedLocation(newLocation);
    localStorage.setItem("selectedOfficeLocation", newLocation);
  };

  // Office data
  const officeData: OfficeData = {
    Chennai: {
      title: "Chennai",
      address: ["M181, Cactus Corporate, G Floor, Block B", "Tecci Park, OMR, Sholinganallur", "Chennai 600 119"],
      mobile: "+91 8925 92 1401",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#"
    },
    Bangalore: {
      title: "Bangalore",
      address: ["Tech Park, 3rd Floor, Tower B", "Whitefield Road", "Bangalore 560 066"],
      mobile: "+91 8925 92 1402",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#"
    },
    Mumbai: {
      title: "Mumbai",
      address: ["Business Bay, 5th Floor", "Bandra Kurla Complex", "Mumbai 400 051"],
      mobile: "+91 8925 92 1403",
      email: "Info@kiaq.in",
      hours: "09:30 AM – 06:30 PM GMT +5:30",
      image: tecki,
      mapsLink: "#"
    }
  };

  const currentOffice = officeData[selectedLocation];

  return (
    <>
      {/* Contact Section */}
      <section
        className="relative w-full overflow-hidden pb-16 sm:pb-20 md:pb-24 lg:pb-28 pt-12 sm:pt-16 md:pt-20 lg:pt-24 min-h-screen"
        style={{
          backgroundImage: `url(${bgGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0d2e2f'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0d2e2f] opacity-90"></div>

        {/* Header content */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Contact Us</h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-200">
            We're a dedicated team of IT professionals, committed to delivering
            innovative solutions that fuel your business success.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative z-10 mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex justify-center px-4 sm:px-6">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-7xl p-6 sm:p-8 lg:p-10 border border-gray-200 backdrop-blur-sm bg-white/95">
            <div className="max-w-7xl mx-auto">

              {/* Title Row */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-8 sm:mb-10 lg:mb-12 gap-4 sm:gap-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3">Our Offices</h1>
                  <p className="text-gray-700 max-w-3xl leading-relaxed text-sm sm:text-base">
                    Explore our modern offices around the world—where innovation
                    meets collaboration and support is always available.
                  </p>
                </div>

                {/* Custom Styled Dropdown */}
                <div className="w-full lg:w-auto relative">
                  <div className="relative">
                    <select 
                      value={selectedLocation}
                      onChange={handleLocationChange}
                      className="appearance-none border border-gray-300 rounded-xl px-5 py-3.5 text-sm sm:text-base bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#003049] focus:border-[#003049] cursor-pointer transition-all duration-200 w-full lg:w-48 pr-10 hover:border-gray-400 bg-gradient-to-b from-white to-gray-50"
                    >
                      <option value="Chennai">Chennai</option>
                      <option value="Bangalore">Bangalore</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Info + Image Block */}
              <div className="border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 shadow-sm bg-white">

                {/* Left Section */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 text-gray-900">{currentOffice.title}</h2>

                  <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-800">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Address:</p>
                      {currentOffice.address.map((line: string, index: number) => (
                        <p key={index} className="text-gray-700 leading-relaxed">{line}</p>
                      ))}
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Mobile:</p>
                      <p className="text-gray-700">{currentOffice.mobile}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Mail ID:</p>
                      <p className="text-gray-700">{currentOffice.email}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Working Hours:</p>
                      <p className="text-gray-700">{currentOffice.hours}</p>
                    </div>
                  </div>

                  <a
                    href={currentOffice.mapsLink}
                    className="inline-flex items-center gap-2 text-sm sm:text-base mt-6 sm:mt-8 font-medium text-[#003049] border-b border-[#003049] pb-1 hover:text-black hover:border-black transition-colors duration-200 group"
                  >
                    Open in Google Maps 
                    <span className="text-base sm:text-lg transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>

                {/* Right Image */}
                <div className="flex-1 min-w-0">
                  <img
                    src={currentOffice.image}
                    alt={`${currentOffice.title} Office`}
                    className="w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-xl sm:rounded-2xl object-cover shadow-md"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-white overflow-hidden">
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
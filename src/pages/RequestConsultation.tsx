import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import tecki from "../assets/teccipark3.jpeg";
import tech1 from "../assets/teccipark3.jpeg";
import tech2 from "../assets/Olympia Technology Park (Chennai).jpg";
import tech3 from "../assets/tech.webp";
import teck4 from "../assets/central.png";

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

      // ✅ UPDATED ONLY THIS LINE
      mapsLink:
        "https://www.google.com/maps/dir//Cactus,G+Floor,+Block+B,+TECCI+PARK,+M181,+Rajiv+Gandhi+Salai,+Elcot+Sez,+Sholinganallur,+Chennai,+Tamil+Nadu+600119/@13.008896,80.2029568,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a525d352c30ef65:0x5e68ff80778d5be4!2m2!1d80.2264068!2d12.910766?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
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

  const images = [tech1, tech2, tech3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <section
        className="relative w-full overflow-hidden pb-16 pt-24 sm:pt-28 md:pt-36 bg-[#002b38]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#002b38] opacity-95"></div>

        {/* Header */}
        <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-gray-200 opacity-90">
            We're a dedicated team of IT professionals, committed to delivering
            innovative solutions that fuel your business success.
          </p>
        </div>

        {/* Contact Card */}
        <div className="relative z-10 flex justify-center px-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-6xl p-6 sm:p-10 md:p-12 border border-gray-200/80">

            {/* Title row */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full mb-12 gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
                  Our Offices
                </h1>
                <p className="text-gray-700 max-w-xl leading-relaxed text-base sm:text-lg opacity-90">
                  Explore our modern offices around the world—where innovation meets
                  collaboration and support is always available.
                </p>
              </div>

              {/* Dropdown */}
              <div className="w-full lg:w-auto">
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="appearance-none border border-gray-300/80 rounded-xl px-5 py-3.5 text-base sm:text-lg w-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#005f73] cursor-pointer transition-all pr-12 font-medium"
                  >
                    <option value="Chennai">Chennai</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 bg-white shadow-xl">

              {/* LEFT INFO */}
              <div className="flex-1">
                <div className="flex items-center mb-10">
                  <img src={teck4} alt="Location" className="w-8 h-8 mr-4 opacity-90" />
                  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
                    {currentOffice.title}
                  </h2>
                </div>

                <div className="space-y-8 text-base sm:text-lg text-gray-800">
                  <div>
                    <p className="font-semibold text-lg sm:text-xl mb-3">Address:</p>
                    {currentOffice.address.map((line, index) => (
                      <p
                        key={index}
                        className="text-gray-700 leading-relaxed mb-1 text-base sm:text-lg opacity-90"
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-lg sm:text-xl mb-3">Mobile:</p>
                    <a
                      href={`tel:${currentOffice.mobile}`}
                      className="text-[#002b38] hover:text-[#ff5500] transition font-medium"
                    >
                      {currentOffice.mobile}
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-lg sm:text-xl mb-3">Mail ID:</p>
                    <a
                      href={`mailto:${currentOffice.email}`}
                      className="text-[#002b38] hover:text-[#ff5500] transition font-medium"
                    >
                      {currentOffice.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-lg sm:text-xl mb-3">
                      Working Hours:
                    </p>
                    <p className="text-gray-700 opacity-90">{currentOffice.hours}</p>
                  </div>
                </div>

                <a
                  href={currentOffice.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg mt-12 font-medium text-[#002b38] border-b-2 border-[#ff5500] pb-1 hover:text-[#ff5500] hover:border-[#002b38] transition-all"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* RIGHT SLIDER */}
              <div className="flex-1">
                <div className="w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img
                    src={images[currentIndex]}
                    alt="Office Slide"
                    className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Prev */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-md transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next */}
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-md transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition ${
                          index === currentIndex
                            ? "bg-white shadow-md scale-125"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

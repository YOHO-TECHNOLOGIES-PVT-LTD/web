import tecki from "../assets/teccipark3.jpeg";
import bgimg from "../assets/6629fd78866b27e9bf8e99bf_Frame201073714906.png"

const UI_CONSTANTS = {
  PRIMARY: "#ff4600",
  DARK: "#011123",
  WHITE: "#ffffff",
};

const ContactUs = () => {
  return (
    <>
      {/* Contact Section */}
      <section
  className="relative w-full overflow-hidden pb-16 sm:pb-20 md:pb-24 lg:pb-28 pt-12 sm:pt-16 md:pt-20 lg:pt-24 bg-[#0d2e2f]"
>
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-500 mt-10 sm:mt-14 md:mt-16 lg:mt-20"
    style={{
      backgroundImage: `url(${bgimg})`,
    }}
  ></div>
  
  {/* Background Circular Pattern */}
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="circlePattern"
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
    <rect width="100%" height="100%" fill="url(#circlePattern)" />
  </svg>

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
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl w-full max-w-7xl p-6 sm:p-8 lg:p-10 border border-gray-200">
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

          {/* Dropdown */}
          <div className="w-full lg:w-auto">
            <select className="border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white shadow-sm focus:outline-none cursor-pointer w-full lg:w-auto min-w-[180px]">
              <option>Location</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Mumbai</option>
            </select>
          </div>
        </div>

        {/* Main Info + Image Block */}
        <div className="border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 shadow-sm">

          {/* Left Section */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8">Chennai</h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-800">
              <div>
                <p className="font-semibold">Address:</p>
                <p>M181, Cactus Corporate, G Floor, Block B</p>
                <p>Tecci Park, OMR, Sholinganallur</p>
                <p>Chennai 600 119</p>
              </div>

              <div>
                <p className="font-semibold">Mobile:</p>
                <p>+91 8925 92 1401</p>
              </div>

              <div>
                <p className="font-semibold">Mail ID:</p>
                <p>Info@kiaq.in</p>
              </div>

              <div>
                <p className="font-semibold">Working Hours:</p>
                <p>09:30 AM – 06:30 PM GMT +5:30</p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm sm:text-base mt-5 sm:mt-6 font-medium text-[#003049] border-b border-black pb-1 hover:text-black"
            >
              Open in Google Maps <span className="text-base sm:text-lg">→</span>
            </a>
          </div>

          {/* Right Image */}
          <div className="flex-1 min-w-0">
            <img
              src={tecki}
              alt="Chennai Office"
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
      className="w-full h-full opacity-25"
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

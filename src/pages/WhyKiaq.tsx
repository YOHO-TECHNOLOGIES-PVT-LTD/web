import kiaqimag from '../assets/whykiaq/665a571d3afa925ba1844fcd_Why Join Andela - Hero.avif'
import secimg from '../assets/whykiaq/6662ffb0eb1555ee15a857a0_Top Global Talent@2x.webp'
import videoThumbnail from '../assets/whykiaq/665a571d3afa925ba1844fcd_Why Join Andela - Hero.avif';
import frimg from '../assets/whykiaq/home-01-001.webp';
import fvimg from '../assets/whykiaq/case5-1.webp';
import sximg from '../assets/whykiaq/case4-1.webp';
import svnimg from '../assets/whykiaq/665f017906055188a91e32cb_Talent Decision Engine@2x.webp';
import ethimg from '../assets/whykiaq/665f02ad1a0373467ab3c7cf_Integrations@2x.webp';
import ninth from '../assets/whykiaq/6674b5009b8b21f1393a29a4_tei hero image.webp';
import tenimg from '../assets/whykiaq/66918974aa12c13b860ad1ee_6656923d82650c83f2ebfe15_Resources - future is borderless - thumb (1).avif';
import eleimg from '../assets/whykiaq/665690116a49a409e7a60488_wim-van-t-einde-uj7eb7CgqRk-unsplash 3.png';
import twlimg from '../assets/whykiaq/66568ede5d15566626a2c37b_Resources – research finds – thumb.png';
import { FaGlobe, FaChalkboardTeacher, FaSmile, FaUsers, FaHandshake, FaShareAlt } from "react-icons/fa";
import { UI_CONSTANTS } from '../constants/colors';


export default function WhyKiaq() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center bg-black text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${kiaqimag})` }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-20">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            
            {/* Left Content */}
           <div className="w-full md:w-1/2 max-w-xl space-y-5">
  <p className="text-orange-400 font-semibold uppercase tracking-wider text-base">
    WHY KIAQ?
  </p>

  <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
    Connecting Global Teams <br />
    with Exceptional Talent
  </h1>

  <p className="text-gray-300 text-lg leading-relaxed">
    Finding reliable digital talent is tough — but KIAQ makes it simple. Through our
    global talent network and intelligent matching, we help companies hire skilled
    engineers faster, smarter, and more efficiently.
  </p>

  <button className="mt-5 bg-orange-500 text-black font-semibold px-6 py-3 text-base rounded-md hover:bg-orange-400 transition">
    Book a discovery call
  </button>
</div>


            {/* Spacer for layout balance */}
            <div className="hidden md:block md:flex-1" />
          </div>
        </div>
      </section>

      {/* Second Section */}
       <section className="bg-white text-gray-900 py-24 px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto">

    {/* Main Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Hire world-class talent from high-growth markets
      </h2>
    </div>

    {/* Tabs */}
    <div className="flex justify-center gap-10 border-b border-gray-200 mb-16">
      <button className="pb-3 border-b-4 border-orange-500 text-orange-600 font-semibold">
        Top Global Talent
      </button>
      <button className="pb-3 text-gray-500 hover:text-orange-600 transition font-medium">
        High-Growth Regions
      </button>
      <button className="pb-3 text-gray-500 hover:text-orange-600 transition font-medium">
        Verified & Skilled
      </button>
    </div>

    {/* Main Flex Layout */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

      {/* Left - Image */}
      <div className="w-full lg:w-[48%] flex justify-center">
        <img
          src={secimg}
          alt="Top Global Talent"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-[48%] space-y-8">
        <div>
          <p className="uppercase text-sm font-semibold text-orange-600 tracking-wider">
            Top Global Talent
          </p>

          <h3 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            Build stronger teams with elite digital talent
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            KIAQ gives companies access to a private network of highly skilled technologists from emerging markets, enabling faster, smarter, and more scalable hiring.
          </p>

          <a
            href="#"
            className="inline-flex items-center mt-4 text-orange-600 font-semibold hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 pt-6 border-t border-gray-200">

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Accelerate hiring speed
            </h4>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Hire up to 66% faster with AI-powered talent matching and pre-vetted experts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Reduce hiring costs
            </h4>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Cut recruitment costs by up to 60% without compromising quality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Scale with confidence
            </h4>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              A flexible talent model that grows as your project needs evolve.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-lg">
              Deliver projects faster
            </h4>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
              Speed up development cycles with globally distributed specialists.
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>



    {/* Third Section */}
  <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black text-white overflow-hidden">
  {/* Background Image */}
  <img
    src={videoThumbnail}
    alt="Breaking barriers"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto w-full px-6 md:px-12 lg:px-16 py-20 flex flex-col justify-center gap-16">
    {/* Top Section */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
      {/* Left Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
        <h2 className="text-4xl md:text-5xl font-semibold leading-snug tracking-tight">
          Redefining access to talent <br />
          and shaping the future <br />
          of global work
        </h2>
      </div>
    </div>

    {/* Bottom Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 border-t border-white/20 pt-10 text-center lg:text-left">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">150K</h3>
        <p className="text-orange-300 text-xs leading-relaxed">
          Verified, highly skilled <br /> global talent
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">135+</h3>
        <p className="text-orange-300 text-xs leading-relaxed">
          Countries represented in <br /> our marketplace
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">93%</h3>
        <p className="text-orange-300 text-xs leading-relaxed">
          Satisfaction with value <br /> & partnership
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold">97%</h3>
        <p className="text-orange-300 text-xs leading-relaxed">
          Satisfaction with overall <br /> talent quality
        </p>
      </div>
    </div>
  </div>
</section>


    {/* Fourth Section */}

        <section className="w-full bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            ✦ Flexible Engagements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Engage the talent you need, <br className="hidden sm:block" /> however you need them
          </h2>
          <h3 className="text-xl font-semibold text-gray-900">
            Fill out teams or get individual contributors — all with the specific skills you need.
          </h3>
          <p className="text-gray-600">
            KIAQ technologists can drive your most pressing projects efficiently and effectively.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 pt-10 border-t border-gray-200">
            <div>
              <h4 className="font-semibold text-gray-900">They’re certified</h4>
              <p className="text-gray-600 text-sm mt-1">
                Every KIAQ talent is fully tested and verified for skills and expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">They’re experts</h4>
              <p className="text-gray-600 text-sm mt-1">
                You can count on KIAQ professionals to bring deep technical experience.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">They’re fluent in English</h4>
              <p className="text-gray-600 text-sm mt-1">
                English fluency is a prerequisite — many are multilingual too.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">They’re committed</h4>
              <p className="text-gray-600 text-sm mt-1">
                KIAQ talent average engagement with clients exceeds 18 months.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={frimg}
            alt="Flexible Engagements"
            className="w-full max-w-lg rounded-2xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>

    {/* Fifth Section */}
     <section className="w-full bg-gray-50 text-black py-24 relative overflow-hidden">
      {/* Background Pattern (optional subtle circles) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.andela.com/_next/static/media/circle-pattern.1c4b7dc2.svg')] opacity-10 bg-no-repeat bg-right" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={fvimg}
            alt="Project Completion"
            className="w-full max-w-lg rounded-2xl shadow-lg object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            ✦ Get Your Projects Completed
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
            Clear backlog and drive new initiatives
          </h2>
          <h3 className="text-xl font-semibold text-gray-900">
            KIAQ can form a team on your behalf and take full accountability for project completion.
          </h3>
          <p className="text-gray-600">
            Provide your project requirements, and we’ll assemble a functional team and dedicated project managers in days.
          </p>

          <a
            href="#"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 pt-10 border-t border-gray-200">
            <div>
              <h4 className="font-semibold text-gray-900">Depend on full accountability</h4>
              <p className="text-gray-600 text-sm mt-1">
                Once your project is in our docket, you can be sure about meeting every milestone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Count on world-class skill</h4>
              <p className="text-gray-600 text-sm mt-1">
                KIAQ talent is the best of the best, ensuring top-tier execution.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Get the best project managers</h4>
              <p className="text-gray-600 text-sm mt-1">
                It all happens on time and within budget. We make sure of it.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">See results</h4>
              <p className="text-gray-600 text-sm mt-1">
                Complete projects up to 33% faster with our expert-managed workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Fifth Section */}
    <section className="w-full bg-white text-black py-24 relative overflow-hidden">
      {/* Diagonal Grid Pattern - Background */}
      <svg
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-10 pointer-events-none translate-x-24 -translate-y-12"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <defs>
          <pattern id="diagonalGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
              stroke="#00b3a4"
              strokeWidth="0.8"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
          AI-powered technology ensures success
        </h2>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-[#ffe8dc] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 text-lg mb-3">KIAQ Talent Cloud</h3>
            <p className="text-gray-600 text-sm mb-6">
              Create jobs and receive instant AI-driven recommendations. Schedule interviews and hire quickly.
            </p>
            <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-sm mb-6">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <img src={sximg} alt="KIAQ Talent Cloud" className="w-full max-w-sm mx-auto rounded-lg shadow-md" />
          </div>

          {/* Card 2 */}
          <div className="bg-[#ffe8dc] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Talent Decision Engine™</h3>
            <p className="text-gray-600 text-sm mb-6">
              AI matching algorithms use thousands of data points to match you with ideal talent for your needs.
            </p>
            <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-sm mb-6">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <img src={svnimg} alt="Talent Decision Engine" className="w-full max-w-sm mx-auto rounded-lg shadow-md" />
          </div>

          {/* Card 3 */}
          <div className="bg-[#ffe8dc] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-gray-900 text-lg mb-3">KIAQ Connect</h3>
            <p className="text-gray-600 text-sm mb-6">
              Instantly sync with your favorite tools and platforms. Get qualified matches to your open roles in seconds.
            </p>
            <a href="#" className="inline-flex items-center text-[#008080] font-semibold text-sm mb-6">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <img src={ethimg} alt="KIAQ Connect" className="w-full max-w-sm mx-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Proof Section */}
        <div className="mt-24 rounded-2xl p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: '#fff2eb' }}>
          {/* Pattern inside Proof Section */}
          <svg
            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none translate-x-10 -translate-y-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <defs>
              <pattern id="diagonalGrid2" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M0 20 L20 0 M-5 5 L5 -5 M15 25 L25 15"
                  stroke="#008080"
                  strokeWidth="0.8"
                  opacity="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalGrid2)" />
          </svg>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            {/* Left Text */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Here's our proof</h3>
              <p className="text-gray-700 mb-6">
                Forrester recently conducted a Total Economic Impact (TEI) study and found KIAQ delivers 97% ROI,
                $80K in cost savings per talent hired, 33% faster project delivery, and 66% faster time to hire.
              </p>
              <button className="bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-[#006666] transition-all">
                Download the report
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <img src={ninth} alt="KIAQ TEI Report" className="w-full max-w-sm rounded-lg shadow-lg object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
    

    {/* Sixth Section */}

     <section className="relative w-full bg-[#fff2eb] text-black py-24 overflow-hidden">
      {/* Background Flower Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25px 25px, rgba(104, 179, 157, 0.4) 1px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(104, 179, 157, 0.4) 1px, transparent 0)
          `,
          backgroundSize: "100px 100px",
        }}
      ></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Leave the groundwork to us
        </h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We provide premium customer and talent support services so you can focus on optimizing the
          success of each and every project.
        </p>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {/* Item 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaGlobe size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Talent Success</h4>
              <p className="text-gray-700 text-sm mt-1">
                Manage project kickoff, onboarding, payment, and talent administration.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaChalkboardTeacher size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Training and Upskilling</h4>
              <p className="text-gray-700 text-sm mt-1">
                Our Learning Community offers numerous skill development programs.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaSmile size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Customer Success</h4>
              <p className="text-gray-700 text-sm mt-1">
                Your customer success partner is your primary point of contact.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaUsers size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Extensive Resources</h4>
              <p className="text-gray-700 text-sm mt-1">
                Hiring in untapped markets requires experience. You can leverage ours.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaHandshake size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                Flexible Engagement Models
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Bring talent on board for as long or little as you require.
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 bg-[#0c7262] text-white p-4 rounded-xl shadow-md">
              <FaShareAlt size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">
                Strategic Support Services
              </h4>
              <p className="text-gray-700 text-sm mt-1">
                Get the help you need with every conceivable engagement activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Seventh Section */}

        <section className="relative w-full bg-[#f8fafc] text-black py-24 overflow-hidden">
  {/* Flower Pattern Background */}
  <div
    className="absolute inset-0 opacity-15"
    style={{
      backgroundImage: `
        radial-gradient(circle at 25px 25px, rgba(104,179,157,0.4) 1px, transparent 0),
        radial-gradient(circle at 75px 75px, rgba(104,179,157,0.4) 1px, transparent 0)
      `,
      backgroundSize: "100px 100px",
    }}
  ></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Empower your teams with Adaptive Hiring
      </h2>
      <button className="mt-6 md:mt-0 border border-gray-800 text-gray-800 font-medium px-5 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300">
        View All Resources
      </button>
    </div>

    {/* Cards Grid */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Card 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <img src={tenimg} alt="The Future of Hiring" className="w-full h-56 object-cover" />
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            White Paper
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">
            The Future of Hiring Is Global
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <img src={eleimg} alt="Diversifying Skillsets" className="w-full h-56 object-cover" />
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            Case Study
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">
            Expanding Digital Skillsets Through KIAQ
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline"
          >
            Watch Now <span className="ml-2">→</span>
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
        <img src={twlimg} alt="Global Remote Tech Talent" className="w-full h-56 object-cover" />
        <div className="p-6">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            Insight Report
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-2">
            Demand for Global Tech Talent Continues to Rise
          </h3>
          <a
            href="#"
            className="mt-4 inline-flex items-center text-[#0c7262] font-semibold text-sm hover:underline"
          >
            Read More <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* {8th Section} */}

         <section className="dual-action-button-cta">
              <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[400px]">
                
                {/* LEFT SECTION */}
                <div
                  className="dual-action-button-cta-left-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: UI_CONSTANTS.PRIMARY }}
                >
                  {/* Pattern Background */}
                  <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100 50 Q300 150 500 50 T900 50" stroke="white" strokeWidth="1.5" opacity="0.4" fill="none"/>
                      <path d="M0 100 Q200 200 400 100 T800 100" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
                      <path d="M150 200 Q350 300 550 200 T950 200" stroke="white" strokeWidth="1.5" opacity="0.25" fill="none"/>
                      <path d="M50 300 Q250 400 450 300 T850 300" stroke="white" strokeWidth="1.5" opacity="0.2" fill="none"/>
                      <circle cx="200" cy="80" r="3" fill="white" opacity="0.5"/>
                      <circle cx="600" cy="120" r="2.5" fill="white" opacity="0.4"/>
                      <circle cx="400" cy="250" r="3" fill="white" opacity="0.3"/>
                    </svg>
                  </div>
        
                  {/* Text Content */}
                  <div className="relative z-20">
                    <div className="dual-action-button-cta-tag-wrapper flex items-center mb-8">
                      <div className="dual-action-button-cta-left-div-img mr-3">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path
                            d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-sm font-semibold tracking-[0.2em] uppercase"
                        style={{ color: UI_CONSTANTS.WHITE }}
                      >
                        GET STARTED
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: UI_CONSTANTS.WHITE }}
                    >
                      Build the tech team of the future with KIAQ
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: UI_CONSTANTS.DARK,
                        color: UI_CONSTANTS.WHITE,
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
                    >
                      Request a consultation
                    </button>
                  </div>
                </div>
        
                {/* RIGHT SECTION */}
                <div
                  className="dual-action-button-cta-right-div relative px-12 py-16 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
                  style={{ backgroundColor: UI_CONSTANTS.WHITE }}
                >
                  {/* Pattern Background */}
                  <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                      <path d="M100 50 Q300 150 500 50 T900 50" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.4" fill="none"/>
                      <path d="M0 100 Q200 200 400 100 T800 100" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.3" fill="none"/>
                      <path d="M150 200 Q350 300 550 200 T950 200" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.25" fill="none"/>
                      <path d="M50 300 Q250 400 450 300 T850 300" stroke="#0D2A2C" strokeWidth="1.5" opacity="0.2" fill="none"/>
                      <circle cx="200" cy="80" r="3" fill="#0D2A2C" opacity="0.5"/>
                      <circle cx="600" cy="120" r="2.5" fill="#0D2A2C" opacity="0.4"/>
                      <circle cx="400" cy="250" r="3" fill="#0D2A2C" opacity="0.3"/>
                    </svg>
                  </div>
        
                  {/* Text Content */}
                  <div className="relative z-20">
                    <div className="flex items-center mb-8">
                      <div className="mr-3">
                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                          <path
                            d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                            fill="#173B3F"
                          />
                        </svg>
                      </div>
                      <p
                        className="text-sm font-semibold tracking-[0.2em] uppercase"
                        style={{ color: '#173B3F' }}
                      >
                        SCHEDULE A CALL
                      </p>
                    </div>
        
                    <h2
                      className="text-4xl lg:text-5xl font-bold mb-12 leading-tight"
                      style={{ color: '#173B3F' }}
                    >
                      Let us know how we can help
                    </h2>
        
                    <button
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        color: '#173B3F',
                        border: '2px solid rgba(23, 59, 63, 0.2)',
                      }}
                      className="px-8 py-4 rounded-lg text-lg font-bold hover:bg-white transition-colors"
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
    </>




  );
}
    
import { UI_CONSTANTS } from '../constants/colors';

export default function LogoCarousel() {
  const logos = [
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893f5_Coursera-Logo_600x600%20(1).svg", alt: "coursera logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893d1_Layer_1%20(2).svg", alt: "mastercard logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1bf2f6333755ec893fa_ViacomCBS%20(2).svg", alt: "viacom cbs logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec8940e_github-2%20(1).svg", alt: "github logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89435_Casper_Sleep_logo%20(2).svg", alt: "casper logo" },
    { src: "https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5/6626c1c02f6333755ec89474_Cloudflare_Logo%20(2).svg", alt: "cloudflare logo" }
  ];

  return (
    <section
      className="logo-carousel-moving-text py-14 flex items-center justify-center"
      style={{ backgroundColor: UI_CONSTANTS.WHITE }}
    >
      <div className="max-w-6xl mx-auto px-0 lg:px-0 flex flex-col lg:flex-row items-center justify-start gap-8">
  
  {/* LEFT SIDE - TEXT */}
  <div className="w-full lg:w-[26%] text-left -ml-10">
    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-600 leading-snug">
      Tech leaders trust <span className="font-bold text-gray-700">KIAQ</span> to quickly<br />source qualified talent
    </h2>
  </div>


        {/* RIGHT SIDE - LOGO CAROUSEL */}
        <div className="w-full lg:w-[90%]relative overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>

          <div className="flex animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 9s linear infinite;
        }
      `}</style>
    </section>
  );
}

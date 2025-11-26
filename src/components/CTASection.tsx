
const UI_CONSTANTS = {
  PRIMARY: '#ff4600',
  DARK: '#011123', 
  WHITE: '#ffffff'
};

export default function CTASection() {
  return (
   <section className="dual-action-button-cta">
     <div className="dual-action-button-cta-wrapper grid lg:grid-cols-2 gap-0 min-h-[350px] sm:min-h-[400px]">
       
       {/* LEFT SECTION */}
       <div
         className="dual-action-button-cta-left-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
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
           <div className="dual-action-button-cta-tag-wrapper flex items-center mb-6 sm:mb-8">
             <div className="dual-action-button-cta-left-div-img mr-2.5 sm:mr-3">
               <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
                 <path
                   d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                   fill="white"
                 />
               </svg>
             </div>
             <p
               className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
               style={{ color: UI_CONSTANTS.WHITE }}
             >
               GET STARTED
             </p>
           </div>
   
           <h2
             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
             style={{ color: UI_CONSTANTS.WHITE }}
           >
             Build the tech team of the future with KIAQ
           </h2>
   
           <button
             style={{
               backgroundColor: UI_CONSTANTS.DARK,
               color: UI_CONSTANTS.WHITE,
             }}
             className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
           >
             Request a consultation
           </button>
         </div>
       </div>
   
       {/* RIGHT SECTION */}
       <div
         className="dual-action-button-cta-right-div relative px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20 flex flex-col justify-center overflow-hidden"
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
           <div className="flex items-center mb-6 sm:mb-8">
             <div className="mr-2.5 sm:mr-3">
               <svg width="12" height="13" viewBox="0 0 14 15" fill="none" className="sm:w-[14px] sm:h-[15px]">
                 <path
                   d="M13.9132 7.97465H13.8846C10.1376 7.98898 7.08558 11.0555 7.08558 14.8027C7.08558 14.8528 7.04259 14.8887 6.99961 14.8887C6.94946 14.8887 6.91363 14.8457 6.91363 14.8027V14.774C6.89931 11.0268 3.83295 7.97465 0.0859726 7.97465C0.0358219 7.97465 0 7.93166 0 7.88867C0 7.83852 0.0429862 7.80269 0.0859726 7.80269H0.11463C3.86161 7.78836 6.91363 4.72183 6.91363 0.974649C6.91363 0.924496 6.95662 0.888672 6.99961 0.888672C7.04976 0.888672 7.08558 0.93166 7.08558 0.974649C7.08558 4.73616 10.1448 7.80269 13.9132 7.80269C13.9634 7.80269 13.9992 7.84568 13.9992 7.88867C14.0064 7.93882 13.9634 7.97465 13.9132 7.97465Z"
                   fill="#173B3F"
                 />
               </svg>
             </div>
             <p
               className="text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
               style={{ color: '#173B3F' }}
             >
               SCHEDULE A CALL
             </p>
           </div>
   
           <h2
             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12 leading-tight"
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
             className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-white transition-colors w-full sm:w-auto"
           >
             Schedule Now
           </button>
         </div>
       </div>
     </div>
   </section>
  );
}
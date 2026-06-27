import React from 'react';

const CookHero = ({ onOpenInquiry }) => {
  return (
<section
  id="home"
  className="relative min-h-[90vh] lg:min-h-screen bg-[#F9F9F8] py-10 lg:py-14 flex items-center overflow-hidden"
>      {/* <div className="absolute inset-0 pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 " 
          viewBox="0 0 1440 320" 
          fill="none" 
          src="Group 9.png"
        >
          <path 
            d="M0,160 C240,280 480,300 720,240 C960,180 1200,40 1440,80 L1440,320 L0,320 Z" 
            fill="#EFEFEF"
          />
        </svg>
      </div> */}

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-6 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
          {/* Social Proof Tag */}
          <div className="inline-flex items-center self-start bg-emerald-900/10 text-xs font-medium px-3 py-1 rounded-full border border-stone-300/40">
            <span className="mr-1.5 ">✦ Trusted by 12,000+ households</span>
            </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.15]">
            Hire a <span className="text-[#D97706] font-semibold">Professional Cook</span> for Your Home
          </h1>

          {/* Description */}
          <p className=" text-[15px] sm:text-lg leading-relaxed font-sans">
            From daily tiffin to grand celebrations — find vetted, skilled cooks who bring authentic flavours right to your kitchen.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] text-white font-medium px-6 py-3 rounded-full shadow-sm transition-all duration-200 text-sm sm:text-base"
            >
              Find Cooks
            </button>
            <button className="w-full sm:w-auto border border-stone-400 hover:bg-stone-100 text-stone-700 font-medium px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base">
              Watch how it works
            </button>
          </div>

          {/* Region Trust Metric */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3 overflow-hidden">
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9F8] object-cover" src="img-circle1.png" alt="Cook 1" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9F8] object-cover" src="img-circle2.png" alt="Cook 2" />
              <img className="inline-block h-9 w-9 rounded-full ring-2 ring-[#F9F9F8] object-cover" src="img-circle3.png" alt="Cook 3" />
            </div>
            <p className="text-xs sm:text-sm font-medium">
              200+ verified cooks across Tamil Nadu
            </p>
          </div>
        </div>

        {/* Right Column: Imagery */}
        <div className="relative justify-self-center w-full max-w-[310px] sm:max-w-[430px] lg:max-w-md xl:max-w-lg aspect-[4/5] mx-auto">          
          {/* Floating Tag: Top Left */}
          <div className="absolute top-3 left-3 sm:-top-4 sm:-left-4 bg-white rounded-full px-3 py-2 shadow-md border border-stone-200 text-[10px] sm:text-xs font-semibold z-20">
            <span>🧑🏻‍🍳 Professional cook in kitchen</span>
          </div>

          {/* Floating Tag: Right Side */}
          <div className="absolute top-16 right-3 sm:top-1/4 sm:-right-8 lg:-right-5 bg-white rounded-full px-3 py-2 shadow-md border border-stone-200 text-[10px] sm:text-xs font-semibold z-20">
            <span className="text-[12px] p-0.5">✅ Verified & Trusted</span>
          </div>

          {/* Main Image Container */}
<div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">  
            <img 
              src="chef.png" 
              alt="Professional Chef" 
className="w-full h-full object-cover object-center lg:object-top opacity-90 transition duration-500 hover:mix-blend-normal"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
            
            {/* Text Overlay inside Image */}
            <div className="absolute bottom-8 left-0 right-0 text-center px-6 space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                Home Cooks & Event Chefs
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm tracking-wide">
                Experienced, background-verified professionals
              </p>
            </div>
          </div>

          {/* Floating CTA Button: Bottom Left */}
          <div id="cuisines" className="absolute -bottom-4 left-0 sm:-left-4 z-20 w-full flex justify-center sm:justify-start px-4">
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="bg-[#D97706] hover:bg-[#B45309] rounded-[27.5px] text-white text-[12px] px-4 py-2.5 shadow-lg flex items-center justify-center space-x-1 transition-all duration-200 w-full sm:w-auto"
            >
              <span>⚡ Quick Matching</span>
            </button>
          </div>

        </div>
        <div  className="mt-10 col-span-full w-screen relative left-1/2 -ml-[50vw]">
          <div className="w-full px-0 sm:px-0">
            <div className="flex items-stretch overflow-hidden rounded-none shadow-md border-y border-stone-200/80 bg-[#0A231C]">
              <div className="bg-[#D35411] text-white font-serif text-lg md:text-xl font-medium pl-10 md:pl-16 lg:pl-32 pr-6 flex items-center justify-center shrink-0 tracking-wide select-none">
                Cuisines
              </div>

              <ul className="bg-[#1B4B3F] text-gray-300 flex items-center gap-6 md:gap-8 px-6 overflow-x-auto no-scrollbar w-full whitespace-nowrap text-sm md:text-base font-sans py-4 list-disc list-inside m-0 p-0">
                <li className="shrink-0 list-none">
                  <a href="#" className="hover:text-white transition-colors duration-200">Cuisine</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">Continental</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">Chinese</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">South Indian</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">North Indian</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">Bengali</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">Mughlai</a>
                </li>

                <li className="shrink-0">
                  <a href="#" className="hover:text-white transition-colors duration-200">Gujarati</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default CookHero;
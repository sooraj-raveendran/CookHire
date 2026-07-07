import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const CookHero = ({ onOpenInquiry }) => {
  return (
<section
  id="home"
  className="relative min-h-[90vh] lg:min-h-screen bg-[#1B5C52] py-10 lg:py-14 flex items-center overflow-hidden"
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

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">        
        {/* Left Column: Content */}
        <div className="flex flex-col space-y-6 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
          {/* Social Proof Tag */}
          <div className="inline-flex items-center self-start bg-[#F28C282E] text-xs font-medium px-3 py-1 rounded-full border border-[#F28C28]">
            <span className="mr-1.5 text-[#F28C28] ">✦ Trusted by 12,000+ households</span>
            </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-serif text-white leading-[1.15]">
             Chennai's #1 Platform to Hire <span className="text-[#D97706] font-semibold">Trusted Home Cooks</span>
          </h2>

          {/* Description */}
          <p className=" text-[15px] text-white sm:text-lg leading-relaxed font-sans">
            From morning tiffin to family feasts find police verified cooks in your neighbourhood. South Indian, Chettinad, Jain, and 35+cuisines available today.
          </p>

          {/* Call to Actions */}
          {/* Search Bar */}
          {/* Search Bar */}
<div className="mt-6 w-full">
  <div className="lg:bg-white/10 lg:backdrop-blur-md lg:border lg:border-white/20 rounded-2xl lg:p-3">

    {/* First Row */}
    <div className="grid grid-cols-2 lg:flex gap-3 items-center">

      {/* Location */}
      <div className="flex items-center h-12 px-4 rounded-xl border border-white/15 bg-white/5 lg:flex-1">
        <FaSearch className="text-white/70 mr-3 text-sm flex-shrink-0" />

        <input
          type="text"
          placeholder="Location"
          className="w-full bg-transparent outline-none text-white placeholder:text-white/60 text-sm"
        />
      </div>

      {/* Divider (Desktop Only) */}
      <div className="hidden lg:block w-px h-8 bg-white/20"></div>

      {/* Cuisine */}
      <div className="relative h-12 rounded-xl border border-white/15 bg-white/5 lg:w-52">
        <select
          className="appearance-none w-full h-full bg-transparent px-4 text-white outline-none cursor-pointer text-sm"
        >
          <option className="text-black">Any Cuisine</option>
          <option className="text-black">South Indian</option>
          <option className="text-black">North Indian</option>
          <option className="text-black">Continental</option>
          <option className="text-black">Chinese</option>
          <option className="text-black">Bengali</option>
          <option className="text-black">Mughalai</option>
          <option className="text-black">Gujarati</option>
        </select>

        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
      </div>

      {/* Desktop Button */}
      <button
        className="hidden lg:block bg-[#F28C28] hover:bg-[#dc7f27]
        text-white font-semibold px-7 py-3 rounded-xl whitespace-nowrap transition"
      >
        Find Cooks
      </button>

    </div>

    {/* Mobile Button */}
    <button
      className="mt-3 lg:hidden w-full h-12 rounded-xl
      bg-[#F28C28] hover:bg-[#dc7f27]
      text-white font-semibold transition"
    >
      Find Cooks
    </button>

  </div>
</div>

        </div>

        {/* Right Column: Imagery */}
        <div className="relative justify-self-center w-full max-w-[310px] sm:max-w-[430px] lg:max-w-md xl:max-w-lg aspect-[4/5] mx-auto">          
          {/* Floating Tag: Top Left */}
          <div className="hidden lg:block absolute -top-4 -left-4 bg-white rounded-full px-3 py-2 shadow-md border border-stone-200 text-xs font-semibold z-20">
          <span>🧑🏻‍🍳 Professional cook in kitchen</span>
        </div>

          {/* Floating Tag: Right Side */}
          <div className="hidden lg:block absolute top-1/4 -right-5 bg-white rounded-full px-3 py-2 shadow-md border border-stone-200 text-xs font-semibold z-20">
          <span>✅ Verified & Trusted</span>
        </div>

          {/* Main Image Container */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-stone-200">  
            <img 
              src="testimonial2.png" 
              alt="Professional Chef" 
              className="w-full h-full] object-cover object-center lg:object-top opacity-90 transition duration-500 hover:mix-blend-normal"
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
              <span className="hidden lg:flex bg-white hover:bg-[#B45309] rounded-[27.5px]  text-[12px] px-4 py-2.5 shadow-lg  items-center justify-center space-x-1 transition-all duration-200 w-full sm:w-auto"
                >⚡ Quick Matching</span>
          </div>

        </div>
<div className="mt-10 col-span-full w-screen relative left-1/2 -ml-[50vw]">

  {/* Top Green Bar */}
  <div className="flex overflow-x-auto no-scrollbar bg-[#18493F] whitespace-nowrap">

    {/* Orange Label */}
    <div className="bg-[#F28C28] text-white font-serif text-xl font-semibold px-10 py-5 shrink-0 flex items-center justify-center">
      Cuisines
    </div>

    {/* Cuisine List */}
    <div className="flex items-center gap-10 px-8 text-white text-sm lg:text-base shrink-0">

      <span className="py-5">Cuisine</span>
      <span className="py-5">• Continental</span>
      <span className="py-5">• Chinese</span>
      <span className="py-5">• South Indian</span>
      <span className="py-5">• North Indian</span>
      <span className="py-5">• Bengali</span>
      <span className="py-5">• Mughlai</span>
      <span className="py-5">• Gujarati</span>
      <span className="py-5">• Italian</span>

    </div>

  </div>

  {/* White Feature Bar */}
  <div className="bg-white border-y border-stone-200 overflow-x-auto no-scrollbar">

    <div className="flex items-center gap-8 px-6 py-3 text-sm text-black whitespace-nowrap min-w-max lg:justify-center">

<div className="flex items-center gap-1">
      <img src="Shield-Star--Streamline-Solar.png" alt="" />
      <span>Police Verified Cooks</span>
</div>

      <span className="text-black">|</span>

<div className="flex items-center gap-1">
      <img src="Shield-Star--Streamline-Solar.png" alt="" />
      <span>Aadhaar & Document Check</span>
</div>

      <span className="text-black">|</span>

<div className="flex items-center gap-1">
      <img src="Shield-Star--Streamline-Solar.png" alt="" />
      <span>Book in Under 2 Hours</span>
</div>

      <span className="text-black">|</span>
<div className="flex items-center gap-1">
      <img src="Shield-Star--Streamline-Solar.png" alt="" />
      <span>Free Replacement Guarantee</span>
</div>

      <span className="text-black">|</span>

<div className="flex items-center gap-1">
        <img src="Shield-Star--Streamline-Solar.png" alt="" />
        <span>No Hidden Charges</span>
      </div>

    </div>

  </div>

</div>
      </div>

      
    </section>
  );
};

export default CookHero;
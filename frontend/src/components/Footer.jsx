import React from 'react'

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-[#114232] text-white font-sans selection:bg-[#F28C28]/30">
  
  <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center border-b border-white/10">
    <span className="text-xs font-semibold tracking-widest uppercase text-white/70 block mb-3">
      Get Started
    </span>
    <h2 className="text-3xl md:text-5xl font-serif text-white max-w-2xl mx-auto leading-tight mb-4">
      Ready to have <span className="text-[#E87617] italic font-normal">delicious food</span> cooked at home?
    </h2>
    <p className="text-sm md:text-base text-white/80 max-w-lg mx-auto mb-8 font-light leading-relaxed">
      Join 12,000+ families who eat better every day with CookHire. We'll connect you with a trusted, skilled cook fast.
    </p>
    <button className="bg-[#E87617] hover:bg-[#d97706] text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 duration-200 text-sm md:text-base"
    onClick={() => onOpenInquiry?.()}
    type="button"
    >
      Hire a Cook Now
    </button>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
      
      <div className="space-y-3">
        <div className="text-2xl font-bold tracking-tight">
          Cook<span className="text-[#F28C28]">Hire</span>
        </div>
        <p className="text-xs md:text-sm text-white/70 font-light max-w-xs">
          Trusted cooks for every home & event.
        </p>
      </div>

      <div>
        <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
          Company
        </h3>
        <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
          Service
        </h3>
        <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
          <li><a href="#" className="hover:text-white transition-colors">Home Cooking</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Part-Time Cook</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Full-Time Cook</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Event Cook</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-bold tracking-wider uppercase text-white mb-4">
          Legal
        </h3>
        <ul className="space-y-2.5 text-xs md:text-sm text-white/70">
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
        </ul>
      </div>

    </div>
  </div>

  <div className="border-t border-white/10 bg-[#0d3326]">
    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
      <div>
        &copy; 2026 CookHire. All rights reserved.
      </div>
      <div className="flex items-center gap-1 font-light">
        Made with 
        <span className="text-red-500 animate-pulse">❤️</span> 
        <span>Geekstack</span>
      </div>
    </div>
  </div>

</footer>
  );
}
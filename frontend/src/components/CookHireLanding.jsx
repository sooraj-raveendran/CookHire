import React from 'react';

export default function CookHireLanding({ onOpenInquiry, onOpenRegistration }) {
  return (
    <div className="bg-[#f8f9fa] text-[#2d3748] font-sans min-h-screen">
      
      {/* SECTION 1: WHY COOKHIRE */}
      <section className="max-w-6xl mx-auto px-2 py-16 md:py-24">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-3">
          WHY COOKHIRE
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif text-slate-900 mb-12 max-w-2xl leading-tight">
          Cooking You Can Trust,<br />Every Single Day
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Card 1 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="/Medal-Star-Square--Streamline-Solar.png" alt="Verified cooks" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Police Verified Cooks</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every cook on our platform goes through background checks, document verification, and a cooking trial before listing.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="/Ranking--Streamline-Solar.png" alt="Rated and reviewed" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Rated & Reviewed</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real reviews from real households. See ratings, photos, and detailed feedback before you hire.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="/Clock-Square--Streamline-Solar.png" alt="Flexible scheduling" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Daily, weekly, or one-time. Morning tiffin, lunch, dinner, or full-day event catering your choice.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="Shield-Check--Streamline-Solar.png" alt="Secure payments" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Secure Payments</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pay only after the cook confirms. Full refund if they don't show. Zero hidden charges.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="/Hourglass-Line--Streamline-Solar.png" alt="24/7 support" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real humans available round the clock to resolve any issue quickly. Not bots, not forms.
            </p>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col border border-slate-300 shadow-sm p-6 rounded-2xl items-start">
            <div className="p-3 bg-slate-100 rounded-xl mb-4 text-slate-700">
              <img src="/Refresh-Circle--Streamline-Solar.png" alt="Free replacement" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Free Replacement</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cook unavailable last minute? We send a replacement within 2 hours at no extra cost.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section id="how-it-works" className="bg-[#F0EDE6] border-t border-b border-slate-200 py-16 md:py-15">
        <div className="max-w-6xl mx-auto px-4">
          
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-3">
            THE PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-serif text-slate-900 mb-3 max-w-2xl leading-tight">
            How It Works
          </h2>
          <p className="text-sm text-slate-600 mb-16 max-w-xl">
            Three simple steps to get a trusted cook at your doorstep.
          </p>

          
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-6 mb-16">
            
            
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] border-t border-dashed border-slate-400 z-0" />

            {/* Step 1 */}
            <div className="flex flex-col items-center relative z-10 max-w-xs flex-1">
              <div className="w-20 h-20 bg-[#1B4B3F] rounded-full flex items-center justify-center text-white mb-6 shadow-md">
                <img src="/🧑🏻_🍳.png" alt="Share requirement" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:hidden">Step 1</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Tell us what type of cook you need, your preferred timing, cuisine, and location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center relative z-10 max-w-xs flex-1">
              <div className="w-20 h-20 bg-[#1B4B3F] rounded-full flex items-center justify-center text-white mb-6 shadow-md">
                <img src="/lightning.png" alt="Get matched" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:hidden">Step 2</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-center">
                We connect you with suitable, verified cooks available in your area.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center relative z-10 max-w-xs flex-1">
              <div className="w-20 h-20 bg-[#1B4B3F] rounded-full flex items-center justify-center mb-6 shadow-md">
                <img src="/🥘.png" alt="Confirm and start" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 sm:hidden">Step 3</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-center">
                Choose the cook that fits your need and begin the service right away.
              </p>
            </div>

          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenInquiry?.()}
              className="w-full sm:w-auto bg-[#E87617] hover:bg-[#b3662f] text-white font-medium text-sm py-3 px-8 rounded-full transition duration-200 shadow-sm"
            >
              Find a Cook
            </button>
            <button
              type="button"
              onClick={() => onOpenRegistration?.()}
              className="w-full sm:w-auto bg-transparent hover:bg-slate-200 text-slate-800 font-medium text-sm py-3 px-8 rounded-full border border-slate-400 transition duration-200"
            >
              Become a Cook
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";


const Started = ({ onOpenInquiry,onOpenRegistration}) => {
  return (
    <section className="bg-[#F8F8F5] px-4 py-8">
      <div className="mx-auto w-full max-w-[382px] lg:max-w-5xl rounded-[24px] bg-[#0D4A3D] px-6 py-8 lg:px-16 lg:py-14 text-center">

        {/* Label */}
        <p className="text-[#FF9D1B] text-[13px] font-bold tracking-[0.18em] uppercase">
          Get Started
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-[25px] lg:text-[52px] font-bold leading-[1.15] text-white">
          Ready to eat{" "}
          <span className="text-[#FF9D1B]">
            home cooked meals
          </span>{" "}
          every single day?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 sm:text-[12px] lg:max-w-2xl text-[14px] lg:text-[18px] leading-7 text-[#E4E4E4]">
          Join 12,200+ Chennai families. Find your perfect cook in under 2
          hours. No lock-in. Cancel anytime. First booking assistance is free.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-3">
  <button
    onClick={onOpenInquiry}
    className="flex-1 max-w-[150px] h-[50px] rounded-xl bg-[#FF9D1B]
               text-white text-[14px] font-semibold flex items-center
               justify-center gap-1"
  >
    Find My Cook
    <ArrowRight size={16} />
  </button>

  <button
  onClick={onOpenRegistration}
    className="flex-1 max-w-[150px] h-[50px] rounded-xl border border-white
               text-white text-[14px] font-semibold flex items-center
               justify-center"
  >
    Register as a Cook
  </button>
</div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-center gap-2 text-[12px] text-[#D3D3D3]">
          <ShieldCheck size={15} />
          Trusted across 38 Chennai localities
        </div>
      </div>
    </section>
  );
};

export default Started;
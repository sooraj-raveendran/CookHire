import React from "react";
import needIcon from "../assets/icons/Square.png";
import browseIcon from "../assets/icons/Browse.png";
import walletIcon from "../assets/icons/Wallet.png";
import houseIcon from "../assets/icons/Home.png";



const steps = [
  {
    icon: needIcon,
    title: "Tell us your Need",
    description:
      "Share your cuisine preference, schedule, number of people, and budget through our quick form.",
  },
  {
    icon: browseIcon,
    title: "Browse Matched Cooks",
    description:
      "We show you verified cooks in your neighbourhood with ratings, specialties, and live availability.",
  },
  {
    icon: walletIcon,
    title: "Confirm & Pay Safely",
    description:
      "Secure UPI or card payment. Money held safely released only after your cook shows up.",
  },
  {
    icon: houseIcon,
    title: "Enjoy Home Cooking",
    description:
      "Your cook arrives on time, prepares fresh meals in your kitchen, and cleans up before leaving.",
  },
];

const stats = [
  {
    number: "4,800+",
    label: "Verified Cooks",
    sub: "Across Chennai",
  },
  {
    number: "38",
    label: "Localities",
    sub: "Covered",
  },
  {
    number: "12,200+",
    label: "Happy Families",
    sub: "Served",
  },
  {
    number: "98%",
    label: "Customer",
    sub: "Satisfaction",
  },
  {
    number: "35+",
    label: "Cuisine Styles",
    sub: "Available",
  },
];

export default function ProcessSection({onOpenInquiry, onOpenRegistration}) {
  return (
    <section id="how-it-works" className="bg-[#145C52] py-10 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#F59E0B] text-xs font-semibold">
              Simple Process
            </p>

            <h2 className="text-white text-[34px] sm:text-[42px] lg:text-[48px] font-bold leading-tight mt-2">
              Hire a Cook in 4 Easy Steps
            </h2>
          </div>

          <p className="text-white/70 text-sm sm:text-base max-w-md leading-7">
            No long-term contracts. No upfront deposits. Book a skilled cook for a day, a week, or permanently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="rounded-2xl bg-white/[0.12] border border-white/15 p-5 sm:p-6 transition-all hover:bg-white/[0.16]">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center mb-4">
                  <img
                      src={step.icon}
                      alt={step.title}
                      className="w-5 h-5 object-contain"
                  />
              </div>

                <h3 className="text-white text-[30px] sm:text-[24px] font-semibold mb-2 leading-tight">
                    {step.title}
                </h3>

                <p className="text-white/65 text-sm leading-6">
                    {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="text-center mt-24">

          <p className="uppercase tracking-[0.25em] text-[#F59E0B] text-xs font-semibold">
            Live on Platform
          </p>

          <h2 className="text-white text-4xl font-bold mt-3">
            Chennai's Most Active Home
            <br />
            Cook Network
          </h2>

<div className="mt-14">
  {/* Mobile */}
  <div className="flex flex-wrap justify-center lg:hidden">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="relative w-1/3 text-center py-5 px-3"
      >
        <h3 className="text-[#FF9D1B] text-2xl font-bold">
          {stat.number}
        </h3>

        <p className="mt-2 text-white/70 text-[11px] leading-4">
          {stat.label}
          <br />
          {stat.sub}
        </p>

        {/* Divider */}
        {index !== 2 && index !== 4 && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1.5px] bg-white/15"></span>
        )}
      </div>
    ))}
  </div>

  {/* Desktop */}
  <div className="hidden lg:grid lg:grid-cols-5">
    {stats.map((stat, index) => (
      <div key={index} className="relative text-center py-5 px-3">
        <h3 className="text-[#FF9D1B] text-5xl font-bold">
          {stat.number}
        </h3>

        <p className="mt-2 text-white/70 text-[11px] leading-4">
          {stat.label}
          <br />
          {stat.sub}
        </p>

        {index !== 4 && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1.5px] bg-white/15"></span>
        )}
      </div>
    ))}
  </div>
</div>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-12">
            <button 
            onClick={onOpenInquiry}
            className="bg-[#F59E0B] px-6 py-3 rounded-lg text-white font-semibold text-sm hover:bg-[#E88D00] transition">
                Hire Cook
            </button>

            <button
             onClick={onOpenRegistration}
             className="border border-white text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-white hover:text-[#145C52] transition">
                Become a Cook
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
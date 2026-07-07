import React from "react";
import { Star } from "lucide-react";

import Medal_Star from "../assets/icons/Medal-Star-Square--Streamline-Solar.png";
import Ranking_streamline from "../assets/icons/Ranking--Streamline-Solar.png";
import Clock_Square from "../assets/icons/Clock-Square--Streamline-Solar.png";
import Shield_Check from "../assets/icons/Shield-Check--Streamline-Solar.png";
import Hourglass_Line from "../assets/icons/Hourglass-Line--Streamline-Solar.png";
import Refresh_Circle from "../assets/icons/Refresh-Circle--Streamline-Solar.png";

const features = [
  {
    icon: Medal_Star,
    title: "Police Verified Cooks",
    desc: "Background check, Aadhaar verification, and a live cooking trial before any cook is listed on our platform.",
  },
  {
    icon: Ranking_streamline,
    title: "Rated & Reviewed",
    desc: "Real reviews from real Chennai families. See detailed ratings, dish photos, and feedback before you hire.",
  },
  {
    icon: Clock_Square,
    title: "Flexible Scheduling",
    desc: "Daily morning tiffin, weekend feasts, Pongal celebrations, or a one-time dinner completely your choice.",
  },
  {
    icon: Shield_Check,
    title: "Secure Escrow Payment",
    desc: "Money is held safely. Released to the cook only after you confirm the meal. Full refund if no-show.",
  },
  {
    icon: Hourglass_Line,
    title: "24 / 7 Tamil Support",
    desc: "Our Chennai-based team speaks Tamil, English and Hindi. Call, WhatsApp or chat always answered.",
  },
  {
    icon: Refresh_Circle,
    title: "2-Hour Replacement",
    desc: "Cook cancelled last minute? We send a verified replacement within 2 hours at no extra cost.",
  },
];

const reviews = [
  {
    name: "Sridharan Raman",
    loc: "T. Nagar, Chennai",
    cook: "Priya Mehta",
    img: "profile2.png",
    text: "Priya amma is simply amazing. She arrives at 6 AM sharp, prepares idli, sambar, and kozhambhu exactly how my mother used to make. My kids absolutely love her cooking.",
  },
  {
    name: "Kavitha Prasad",
    loc: "T. Nagar, Chennai",
    cook: "Priya Mehta",
    img: "profile2.png",
    text: "We hired Viji for our daughter's 1st birthday 80 guests. The Chettinad spread was extraordinary. Everyone asked for the cook's contact! She managed setup and cleanup too.",
  },
  {
    name: "Murugesan Natarajan",
    loc: "T. Nagar, Chennai",
    cook: "Priya Mehta",
    img: "profile2.png",
    text: "As a diabetic patient I needed someone who understood low-glycemic cooking. Anita knows exactly what she's doing—even plans the weekly menu and handles groceries. My sugar levels improved.",
  },
];

export default function WhyCookHire() {
  return (
    <section className="bg-[#1F665B] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <p className="text-[#F5A623] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">
          Why CookHire
        </p>

        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-2 mb-8 md:mb-10">
          Cooking You Can Trust,
          <br />
          Every Single Day
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 p-2">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="font-bold text-xl lg:text-2xl mb-3">
                {f.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm sm:text-base">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews Heading */}
        <p className="text-[#F28C28] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mt-14 md:mt-16">
          What Chennai Families Say
        </p>

        <h2 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-2 mb-8 md:mb-10">
          12,200+ Families Can't Be Wrong
        </h2>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#4E786F] rounded-2xl p-6 text-white"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={14}
                    className="fill-[#F28C28] text-[#F28C28]"
                  />
                ))}
              </div>

              <p className="text-sm leading-7 mb-6">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />

                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {r.name}
                  </h4>

                  <p className="text-xs text-gray-200">{r.loc}</p>

                  <p className="text-xs text-[#F28C28]">
                    Cook: {r.cook}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";

const locations = [
  { name: "T. Nagar", cooks: 142 },
  { name: "Adyar", cooks: 118 },
  { name: "Anna Nagar", cooks: 205 },
  { name: "Velachery", cooks: 96 },
  { name: "OMR", cooks: 183 },
  { name: "Nungambakkam", cooks: 87 },
  { name: "Kilpauk", cooks: 74 },
  { name: "Porur", cooks: 112 },
  { name: "Tambaram", cooks: 89 },
  { name: "Perambur", cooks: 67 },
  { name: "Sholinganallur", cooks: 121 },
  { name: "Mylapore", cooks: 93 },
  { name: "Chromepet", cooks: 78 },
  { name: "Guindy", cooks: 65 },
  { name: "Besant Nagar", cooks: 84 },
];

export default function CoverageMap() {
  return (
    <section id="areas-we-serve" className="bg-[#F9F8F5] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10 lg:mb-12">

          <div>
            <p className="uppercase tracking-[0.22em] text-[#F59E0B] text-xs font-semibold">
              COVERAGE MAP
            </p>

            <h2 className="mt-3 text-[#145C52] text-[34px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.05]">
              We Serve All
              <br />
              Major Chennai Localities
            </h2>
          </div>

          <p className="text-[#5F6368] text-[15px] leading-7 max-w-md lg:mt-6">
            From OMR tech corridors to Anna Nagar avenues every
            neighbourhood is covered.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">

          {locations.map((location, index) => (
            <div
              key={index}
              className="
                h-[82px]
                sm:h-[88px]
                lg:h-[92px]
                bg-white
                border
                border-[#D7D7D7]
                rounded-2xl
                flex
                flex-col
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                hover:border-[#145C52]
              "
            >
              <h3 className="text-[16px] lg:text-[20px] font-bold text-[#171717] leading-none">
                {location.name}
              </h3>

              <p className="mt-2 text-[12px] text-[#666666]">
                {location.cooks} Cooks
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const CookHiringPlatform = () => {
  // State for active cuisine filter
  const [activeTab, setActiveTab] = useState('All');

  const features = [
    {
      icon: "🛡️",
      title: "Verified Cooks",
      description: "Every cook is background-checked and skill verified before joining our platform."
    },
    {
      icon: "📅",
      title: "Flexible Booking",
      description: "Daily, part-time, full-time, or event basis you choose what works for your schedule."
    },
    {
      icon: "🫱🏼‍🫲🏻",
      title: "Easy Hiring",
      description: "Tell us your requirement and we match you with the right cook fast and simple."
    }
  ];

  const categories = ['All', 'South Indian', 'North Indian', 'Mughlai', 'Bengali'];

  const cooks = [
    {
      id: 1,
      name: "Priya Mehta",
      image: "profile1.png",
      specialty: "South Indian Specialist",
      location: "Chennai",
      rating: 4.9,
      reviews: 284,
      cuisine: "South Indian",
      tags: ["Idli-Dosa", "Sambar", "Chettinad"],
      price: "₹1500",
      priceUnit: "Meal"
    },
    {
      id: 2,
      name: "Rajan kumar",
      image: "profile2.png",
      specialty: "Mughlai & Awadhi Expert",
      location: "Delhi",
      rating: 4.8,
      reviews: 196,
      cuisine: "Mughlai",
      tags: ["Biryani", "Kebab", "Nihari"],
      price: "₹1700",
      priceUnit: "Meal"
    },
    {
      id: 3,
      name: "Anita Sharma",
      image: "profile3.png",
      specialty: "Punjabi & Continental",
      location: "Mumbai",
      rating: 4.7,
      reviews: 139,
      cuisine: "North Indian",
      tags: ["Idli-Dosa", "Sambar", "Chettinad"], // Replicated tags from your screenshot
      price: "₹1500",
      priceUnit: "Meal"
    }
  ];

  // Filter cooks based on selection
  const filteredCooks = activeTab === 'All' 
    ? cooks 
    : cooks.filter(cook => cook.cuisine === activeTab);

  return (
    <div className="w-full bg-[#FAF9F5] font-sans antialiased text-gray-800">
      
      {/* --- Section 1: Process / Features --- */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1B4B3F] mt-2 font-bold">
            Hire a Cook in 4 Easy Steps
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl text-sm sm:text-base">
            No hassle, no long commitments. Book a skilled cook for a day, a week, or an ongoing arrangement.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A2E26] mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Featured Cooks --- */}
      <section className="bg-[#1B4B3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-white uppercase">Top Rated</span>
              <h2 className="text-3xl font-serif mt-1 font-bold">Featured Cooks</h2>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-full text-sm font-medium hover:bg-white hover:text-[#0A2219] transition-colors self-start sm:self-auto">
              View all cooks <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-[#153427] text-gray-300 hover:bg-[#1C4232]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cook Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCooks.map((cook) => (
              <div 
                key={cook.id} 
                className="bg-[#112E22] rounded-2xl p-6 border border-[#1C4232] flex flex-col justify-between h-full"
              >
                <div>
                  {/* Cook Profile Header */}
                  <div className="flex items-start gap-4">
                    {/* Profile Avatar */}
                    <img
                      src={cook.image}
                      alt={cook.name}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-gray-500"
                    />
                    <div>
                      <h4 className="text-lg font-bold tracking-wide">{cook.name}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{cook.specialty} · {cook.location}</p>
                      
                      {/* Ratings */}
                      <div className="flex items-center gap-1 mt-1.5">
                        <div className="flex text-orange-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-white ml-1">{cook.rating}</span>
                        <span className="text-xs text-gray-400">({cook.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {cook.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-[#194030] text-emerald-300 text-xs px-3 py-1 rounded-md border border-[#225440]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Pricing & CTAs */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#1C4232]">
                  <div>
                    <p className="text-xs text-gray-400">Starting from</p>
                    <p className="text-lg font-bold text-white">
                      {cook.price} <span className="text-xs font-normal text-gray-400">/ {cook.priceUnit}</span>
                    </p>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-orange-900/20 transition-all">
                    Hire Now
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State if no cooks found for a category */}
          {filteredCooks.length === 0 && (
            <div className="text-center py-12 text-gray-400 bg-[#112E22] rounded-2xl border border-[#1C4232]">
              No cooks found in this category right now.
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default CookHiringPlatform;

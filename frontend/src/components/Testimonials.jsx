import React from 'react';

const Testimonials = () => {
  // Placeholder data based on your image
  const testimonialsData = [
    {
      id: 1,
      image: "/testimonial1.png",
      text: "Cook Hire made it so easy to find a reliable cook for our family. The whole process took less than a day!",
      author: "Anand Kumar",
      location: "Coimbatore",
      rating: 5,
      avatar: "testimonial-profile.png" // Chef profile placeholder
    },
    {
      id: 2,
      image: "testimonial2.png",
      text: "We hired an event cook for our daughter's birthday. Excellent food, great presentation.",
      author: "Anand Kumar",
      location: "Coimbatore",
      rating: 5,
      avatar: "testimonial-profile.png"
    },
    {
      id: 3,
      image: "testimonial3.png", 
      text: "The cook they matched us with is fantastic punctual, clean, and makes amazing South Indian food every day.",
      author: "Anand Kumar",
      location: "Coimbatore",
      rating: 5,
      avatar: "testimonial-profile.png"
    },
    {
      id: 4,
      image: "testimonial4.png", 
      text: "Cook Hire made it so easy to find a reliable cook for our family. The whole process took less than a day!",
      author: "Anand Kumar",
      location: "Coimbatore",
      rating: 5,
      avatar: "testimonial-profile.png"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-left">
          <span className="text-xs font-semibold tracking-widest text-orange-400 uppercase block mb-1">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 font-normal">
            What Customers Say
          </h2>
        </div>

        {/* Responsive Grid Setup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#F9F6F1] rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-md"
            >
              <div>
                {/* Food/Cooking Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt="Cooking service showcase" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Content */}
                <div className="p-5 relative">
                  {/* Subtle quote mark layout */}
                  <span className="text-2xl text-gray-400 font-serif leading-none absolute top-4 left-4 block">
                    “
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mt-4 pl-1">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Author Footer info */}
              <div className="p-5 pt-0 border-t border-gray-50 flex items-center space-x-3">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-10 h-10 rounded-full object-cover bg-gray-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">
                    {item.author}
                  </h4>
                  <div className="flex items-center space-x-2 mt-0.5">
                    {/* Render Star Ratings */}
                    <div className="flex text-amber-500 text-xs">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
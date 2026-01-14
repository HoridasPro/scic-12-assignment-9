import React from "react";

const services = [
  {
    title: "Fresh Vegetable",
    desc: "Inspections to ensure compliance with organic standards.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
    icon: "🥬",
  },
  {
    title: "Organic Fertilizer",
    desc: "Inspections to ensure compliance with organic standards.",
    image: "https://i.postimg.cc/T2Zqw2kF/fruits1.jpg",
    icon: "🍍",
  },
  {
    title: "Natural Fruits",
    desc: "Inspections to ensure compliance with organic standards.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600",
    icon: "🍎",
  },
];

const Services = () => {
  return (
    <section className="bg-[#F5F7EB] py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-orange-500">🌼</span>
            <span className="text-orange-400 font-medium italic">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e24]">
            Our Organic Farming Service <br /> For You!
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-10">
          {services.map((item, index) => (
            <div key={index} className="relative">
              {/* Image Part */}
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* White Card Part (Overlapping) */}
              <div className="relative -mt-24 mx-auto w-[85%] bg-white rounded-[50px] pt-14 pb-8 px-6 shadow-xl border border-gray-100 flex flex-col items-center text-center">
                {/* Floating Icon Wrapper */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-green-50">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-1">{item.icon}</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* Orange Button */}
                <button className="w-12 h-12 bg-[#ffa415] hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all shadow-md">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Up Button (Bottom Right) */}
      <div className="fixed bottom-10 right-10">
        <div className="w-10 h-10 border-2 border-green-600 rounded-full flex items-center justify-center text-green-600 cursor-pointer hover:bg-green-600 hover:text-white transition-all">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Services;

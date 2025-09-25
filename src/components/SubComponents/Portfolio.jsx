import React, { useState } from "react";

const portfolioData = [
  {
    title: "Modern Living Room",
    img: "/images/8f1c2aae-646e-4e8b-8783-1f6a69621b44.jpeg",
    description: "Elegant and cozy living space.",
  },
  {
    title: "Luxury Bedroom",
    img: "/images/35 Colorful Modern Bedroom Designs Ideas »….jpeg",
    description: "Comfort meets style.",
  },
  {
    title: "Kitchen Design",
    img: "/images/modern sleek white and yellow kitchen.jpeg",
    description: "Sleek and functional kitchen.",
  },
  {
    title: "Office Setup",
    img: "/images/30 Intriguing Home Office Ideas for Small Spaces.jpeg",
    description: "Productive workspace design.",
  },
];

const Portfolio = () => {
  const [bgImage, setBgImage] = useState(null);

  return (
    <div
      className="relative w-full py-20 bg-gray-900 overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Portfolio content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Our Work
        </h2>

        <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onMouseEnter={() => setBgImage(item.img)} // hover pe bg badlega
              onClick={() => setBgImage(item.img)} // click pe bhi bg set hoga
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
};

export default Portfolio;

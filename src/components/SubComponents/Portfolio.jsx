import React, { useState, useEffect } from "react";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const portfolioData = [
  {
    title: "Modern Living Room",
    img: "/images/8f1c2aae-646e-4e8b-8783-1f6a69621b44.jpeg",
    description: "Elegant and cozy living space.",
    fullDescription:
      "This living room combines modern design with comfort, featuring minimalistic furniture, ambient lighting, and warm tones for a cozy atmosphere.",
  },
  {
    title: "Luxury Bedroom",
    img: "/images/35 Colorful Modern Bedroom Designs Ideas »….jpeg",
    description: "Comfort meets style.",
    fullDescription:
      "A luxurious bedroom with plush bedding, smart storage, and decorative elements that enhance relaxation and aesthetic appeal.",
  },
  {
    title: "Kitchen Design",
    img: "/images/modern sleek white and yellow kitchen.jpeg",
    description: "Sleek and functional kitchen.",
    fullDescription:
      "Modern kitchen with clean lines, efficient storage, bright color accents, and high-end appliances for maximum functionality.",
  },
  {
    title: "Office Setup",
    img: "/images/30 Intriguing Home Office Ideas for Small Spaces.jpeg",
    description: "Productive workspace design.",
    fullDescription:
      "An office setup optimized for productivity with ergonomic furniture, organized storage, and sufficient lighting for long work hours.",
  },
];

const Portfolio = () => {
  const [bgImage, setBgImage] = useState(portfolioData[0].img); // Initial background
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextCard = () => {
    const nextIndex = (currentIndex + 1) % portfolioData.length;
    setCurrentIndex(nextIndex);
    setBgImage(portfolioData[nextIndex].img);
  };

  const prevCard = () => {
    const prevIndex = currentIndex === 0 ? portfolioData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setBgImage(portfolioData[prevIndex].img);
  };

  return (
    <div
      className="relative w-full py-20 overflow-hidden transition-all duration-500"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">
          Our Work
        </h2>

        {/* Desktop view */}
        <div className="hidden md:flex space-x-6 overflow-x-auto scrollbar-hide py-4">
          {portfolioData.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 "
              onMouseEnter={() => setBgImage(item.img)} // Hover pe background
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button
                  onClick={() => openModal(index)}
                  className="mt-3 px-5 py-2 bg-[#172D20] text-[#D99021] font-semibold rounded-md hover:bg-[#D99021] hover:text-[#171512] transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden relative flex items-center justify-center">
          <button
            onClick={prevCard}
            className="absolute left-2 text-3xl cursor-pointer text-white z-20 hover:text-[#D99021]"
          >
            <FaArrowLeft />
          </button>
          <div className="w-[250px] bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 cursor-pointer">
            <img
              src={portfolioData[currentIndex].img}
              alt={portfolioData[currentIndex].title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">
                {portfolioData[currentIndex].title}
              </h3>
              <p className="text-gray-600">
                {portfolioData[currentIndex].description}
              </p>
              <button
                onClick={() => openModal(currentIndex)}
                className="mt-3 px-5 py-2 bg-[#172D20] text-[#D99021] font-semibold rounded-md hover:bg-[#D99021] hover:text-[#171512] transition cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
          <button
            onClick={nextCard}
            className="absolute cursor-pointer right-2 text-3xl text-white z-20 hover:text-[#D99021]"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-gray-800 hover:text-[#D99021]"
            >
              <FaTimes />
            </button>

            <img
              src={portfolioData[currentIndex].img}
              alt={portfolioData[currentIndex].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">
                {portfolioData[currentIndex].title}
              </h3>
              <p className="text-gray-700">
                {portfolioData[currentIndex].fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}

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

import React from "react";
import { FaPaintBrush, FaCouch, FaHome, FaRulerCombined } from "react-icons/fa";
import { Link } from "react-router-dom";

const aboutCards = [
  {
    icon: <FaPaintBrush className="text-yellow-400 text-3xl" />,
    title: "Creative Designs",
    description: "We craft unique and modern interior designs for your dream spaces.",
  },
  {
    icon: <FaCouch className="text-yellow-400 text-3xl" />,
    title: "Comfortable Spaces",
    description: "Our designs combine aesthetics with maximum comfort for your home.",
  },
  {
    icon: <FaHome className="text-yellow-400 text-3xl" />,
    title: "Functional Layouts",
    description: "Layouts that are both visually appealing and highly functional.",
  },
  {
    icon: <FaRulerCombined className="text-yellow-400 text-3xl" />,
    title: "Precision Planning",
    description: "Every detail is measured and planned for perfection.",
  },
];

export default function AboutCards() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src="/images/Azam_Decor_Signage_in_3D_Design[1].png"
            alt="About Us"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            Azam Decor Interior Design Studio is a creative and innovative interior design firm dedicated to transforming spaces into functional, elegant, and personalized environments. We specialize in residential, commercial, and office interiors, blending aesthetics with practicality to create spaces that reflect our clients’ unique style and vision. Our team of experienced designers focuses on every detail—from concept development and space planning to material selection and finishing touches—ensuring a seamless and inspiring design experience. At Azam Decor, we don’t just design interiors; we craft lifestyles.
            Azam Decor Interior Design Studio is a premier interior design firm committed to transforming ordinary spaces into extraordinary experiences. With a perfect blend of creativity, functionality, and elegance, we craft interiors that reflect the personality, lifestyle, and aspirations of our clients. Our expertise spans residential, commercial, and office interiors, offering customized solutions that balance aesthetics with practicality.

            


          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-700 hover:text-yellow-300 w-max">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
        {aboutCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer hover:bg-[#D99021]  hover:text-[#000000] "
          >
            {card.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

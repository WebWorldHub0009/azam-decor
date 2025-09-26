import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20 px-6"
      style={{ backgroundImage: "url('/images/about-bg.jpg')" }} // apna image path daalna
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#D99021] animate-pulse">
          Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-[#ffffff]/90 rounded-xl text-black shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-[#D99021]/90 hover:text-[#171512]">
            <FaBullseye className="text-5xl mb-4 text-[#D99021] hover:text-[#171512]" />
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-base leading-relaxed">
              To craft unique, functional, and stylish interior spaces that bring comfort, beauty,
              and value to our clients’ lives.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#ffffff]/90 rounded-xl  text-black shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:bg-[#D99021]/90 hover:text-[#171512]">
            <FaEye className="text-5xl mb-4 text-[#D99021] hover:text-[#171512]" />
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-base leading-relaxed">
              To be a leading interior design studio, known for innovation, sustainable solutions,
              and transforming dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

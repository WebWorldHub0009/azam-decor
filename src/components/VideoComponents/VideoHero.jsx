import React from "react";
import { Link } from "react-router-dom";

export default function VideoHero() {
  const backgroundFile = "/images/Autocollants de lignes fines dorées et de points….jpeg"; // Apni image ka path yahan do
  

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundFile}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black/70"></div>
      {/* bg-opacity-40 ko adjust karke image ki darkness ya transparency badha ya kam kar sakte ho */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#D99021] mb-6 drop-shadow-lg">
          Welcome to Azam Decor
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Transforming your spaces with modern, elegant, and durable interior
          designs that stand the test of time.
        </p>

        <div className="flex space-x-4">
          <a href="#videogallery"><button className="px-6 py-3 bg-[#D99021] text-white font-semibold rounded-lg shadow-lg hover:bg-transparent hover:text-[#ffffff] transition duration-300 cursor-pointer hover:border-1 hover:border-[#D99021] hover:">
            Show More
          </button></a>
         <Link to="/contact"> <button className="px-6 py-3 border border-[#D99021] text-white font-semibold rounded-lg shadow-lg hover:bg-[#D99021] hover:text-white transition duration-300 cursor-pointer">
            Contact Us
          </button></Link>
        </div>
      </div>
    </section>
  );
}

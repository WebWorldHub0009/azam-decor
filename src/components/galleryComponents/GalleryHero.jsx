import React from "react";
import { motion } from "framer-motion";

const GalleryHero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/Photo of a glass house exterior from the….jpeg')", // apni background image ka path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-[#D99021] mb-6"
        >
          Explore Our Stunning Gallery
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-[#ffffff] mb-8"
        >
          Discover our portfolio of projects showcasing creativity, innovation,
          and design excellence. Every space tells a story.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
        <a href="#gallery">  <button
            className="px-6 py-3 rounded-full font-semibold shadow-md transition"
            style={{ backgroundColor: "#D99021", color: "#171512" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c7801b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D99021")
            }
          >
            Learn More
          </button></a>
         <a href="/services"> <button
            className="px-6 py-3 rounded-full border-2 font-semibold shadow-md transition"
            style={{
              borderColor: "#D99021",
              color: "#D99021",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#D99021";
              e.currentTarget.style.color = "#171512";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#D99021";
            }}
          >
            Explore Services
          </button></a>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;

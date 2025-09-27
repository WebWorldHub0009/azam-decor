import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // agar routing use kar rahe ho

const ContactHero = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/40abf88d1f9b4ee94b05a677d0224d48.jpg')", // apni background image ka path daalna
      }}
    >
      {/* Overlay with dark shade */}
      <div className="absolute inset-0 bg-[#171512]/80"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center max-w-3xl px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: "#D99021" }}
        >
          Get in Touch With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: "#EDEDED" }}
        >
          We’d love to hear about your project ideas. Our team is always ready
          to bring your vision to life with creative design solutions.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <Link to="/">
            <button
              className="px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 cursor-pointer bg-white text-[#D99021] hover:text-white hover:bg-[#D99021]"
              style={{
                // backgroundColor: "#ffffff",
                // color: "#D99021",
              }}
            >
              Go to Home
            </button>
          </Link>

          <Link to="/gallery">
            <button
              className="px-6 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 cursor-pointer bg-[#D99021] text-[#ffffff] hover:text-[#D99021] hover:bg-white"
              style={{
                // backgroundColor: "#D99021",
                // color: "#171512",
              }}
            >
              Go to Gallery
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;

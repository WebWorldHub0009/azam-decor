import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CertificatePage = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/images/dde71a1a-c7d7-49ad-8c9b-3db199784964.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171512]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold mb-6"
          style={{ color: "#D99021" }}
        >
          Our Certificates & Recognition
        </motion.h1>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl mb-8"
          style={{ color: "#ffffff" }}
        >
          We are proud to be recognized for our dedication to design excellence,
          innovation, and customer satisfaction. Our certificates reflect the
          trust and confidence our clients place in us.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
         <a href="#certificate"> <button
            className="px-6 py-3 cursor-pointer rounded-full font-semibold shadow-md transition"
            style={{
              backgroundColor: "#D99021",
              color: "#171512",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#c7801b")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D99021")
            }
          >
            Learn More
          </button></a>
        <Link to="/contact">  <button
            className="px-6 py-3 cursor-pointer rounded-full border-2 font-semibold shadow-md transition"
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
            Contact Us
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatePage;

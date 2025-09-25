import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-fixed bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/Azam_Decor_Studio_Interior_Design[2].png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171512]/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-12">
        {/* Animated Heading */}
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-[#D99021] mb-6 ml-7"
        >
          About Us
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg leading-relaxed text-white p-6"
        >
          At <span className="text-[#D99021] font-semibold">Azam Decor</span>,
          we specialize in creating interiors that reflect elegance, comfort,
          and functionality. Our passion is to design spaces that not only look
          stunning but also feel like home. With a team of creative designers
          and years of expertise, we bring your dream spaces to life — blending
          modern aesthetics with timeless design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 ml-6 flex space-x-4"
        >
          <a href="#about"><button
            onClick={() => scrollToSection("mission-vision")} // 👈 niche ke section ka id daalna
            className="bg-[#D99021] text-[#171512] px-6 py-3 rounded-lg font-semibold hover:bg-[#172D20] hover:text-white transition-all duration-300 shadow-md"
          >
            Learn More
          </button></a>
          <Link to="/contact"><button
            onClick={() => scrollToSection("contact")}
            className="bg-transparent border-2 border-[#D99021] text-[#D99021] px-6 py-3 rounded-lg font-semibold hover:bg-[#D99021] hover:text-[#171512] transition-all duration-300"
          >
            Contact Us
          </button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "/images/Tears of Joy_ Illuminate Your Space with the….jpeg",
  "/images/9c174b35-e886-4979-bd76-7938a9b205f7.jpeg",
  "/images/cb0d57ad-d293-4307-a420-bebb976a90e5.jpeg",
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden mt-25">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="Background"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Animated Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to <span className="text-[#D99021] ">Azam Decor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-6"
        >
          We create modern, stylish and elegant designs for your dream spaces.
        </motion.p>

        <div className="flex gap-4">
          <Link to="/services"><motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-[#D99021] hover:text-[#D99021]  hover:border-[#D99021] border-2 border-[#D99021] hover:bg-transparent  text-black px-6 py-3 rounded-xl font-semibold shadow-lg cursor-pointer"
          >
            Our Services
          </motion.button></Link>
          <Link to="/contact"><motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-transparent border-2 border-[#D99021] text-[#D99021] hover:bg-[#D99021] hover:text-black  px-6 py-3 rounded-xl font-semibold cursor-pointer"
          >
            Contact Us
          </motion.button></Link>
        </div>
      </div>
    </section>
  );
}

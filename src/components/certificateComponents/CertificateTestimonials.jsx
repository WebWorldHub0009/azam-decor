import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, XYZ Company",
    image: "/images/15 Classic Old Money Hairstyles For Men That Give….jpeg",
    feedback:
      "Amazing service! Their attention to detail and creativity transformed our office space beyond expectations.",
  },
  {
    id: 2,
    name: "Sarah Khan",
    role: "Founder, ABC Startup",
    image: "/images/I Photographed Women In 60 Countries To Change The….jpeg",
    feedback:
      "Highly professional team. Delivered our project on time with outstanding quality and design.",
  },
  {
    id: 3,
    name: "Ravi Sharma",
    role: "Project Manager, LMN Corp",
    image: "/images/2b82bf4c-17c6-4a89-9b72-77bd13ac9a85.jpeg",
    feedback:
      "Their innovative approach and client-focused mindset made the entire process seamless and enjoyable.",
  },
];

const CertificateTestimonials = () => {
  return (
    <section
      className="py-16 text-white bg-cover bg-center bg-fixed "
      style={{
        backgroundImage:
          "url('/images/Ready to elevate your online shopping game_ From….jpeg') ", // yahan apni fixed background image ka path daalna
        backgroundColor: "#171512",
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              className="bg-[#172D20]/90 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: test.id * 0.2 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#D99021] text-2xl mb-4" />

              {/* Feedback */}
              <p className="text-gray-200 mb-6">{test.feedback}</p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#D99021]"
                />
                <div>
                  <h3 className="text-[#D99021] font-semibold">{test.name}</h3>
                  <p className="text-gray-300 text-sm">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateTestimonials;

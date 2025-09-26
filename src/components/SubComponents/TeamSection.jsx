import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Azam Khan",
    role: "Founder & Designer",
    image: "/images/↑↑↑ Larger size on website 🔸 A man with short….jpeg",
    bio: "Creative head with a passion for modern interior design and client satisfaction.",
  },
  {
    name: "Ayan Khan",
    role: "Project Manager",
    image: "/images/e21beaf3-460d-4c83-8d3d-b3a853657d83.jpeg",
    bio: "Expert in managing projects efficiently while ensuring top-notch quality.",
  },
  {
    name: "Arman khan",
    role: "Lead Architect",
    image: "/images/Your body can achieve anything -if your ego takes….jpeg",
    bio: "Specializes in architecture with innovative and sustainable designs.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Team
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-200 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

import React from "react";
import { FaStar, FaShieldAlt, FaThumbsUp } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: FaStar,
    title: "Quality Assurance",
    description:
      "We ensure top-quality materials and workmanship in every project for long-lasting results.",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Reliability",
    description:
      "Our team delivers on time and maintains complete transparency throughout the process.",
  },
  {
    id: 3,
    icon: FaThumbsUp,
    title: "Customer Satisfaction",
    description:
      "We prioritize our clients' needs and provide exceptional service to exceed expectations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="py-16 bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?interior,design')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171512]/80"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#D99021] mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-200 mb-12 max-w-3xl mx-auto">
          Our commitment to quality, reliability, and customer satisfaction sets us apart.
          We combine innovative design with exceptional service to deliver spaces that truly impress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#172D20] hover:bg-[#D99021] text-[#D99021] hover:text-[#171512] rounded-lg p-8 shadow-lg transform hover:scale-105 transition duration-500 cursor-pointer"
            >
              <feature.icon className="text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

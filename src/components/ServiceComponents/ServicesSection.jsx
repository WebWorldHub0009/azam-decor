import React from "react";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "PVC WALL PANEL", img: "/images/High Quality Factory Direct Waterproof Interior….jpeg" },
  { id: 2, title: "CEILING PANEL", img: "/images/1dfbdb8e-17c6-41a5-863b-9f677d7e9313.jpeg" },
  { id: 3, title: "CHARCOL PANEL", img: "/images/Panel Size _ 1ft x 9_5ft , New Star Pattern, The….jpeg" },
  { id: 4, title: "WPC LOUVERS", img: "/images/Cheap Wall Cladding Pvc Wpc House Hight Quality….jpeg" },
  { id: 5, title: "FLUTED PANEL", img: "/images/What is the Advantages of WPC materials for FLUTED….jpeg" },
  { id: 6, title: "PVC DOOR", img: "/images/中国工厂预挂设计实心芯板现代内饰木门 - Buy Door,Wood Door,China Wood….jpeg" },
  { id: 7, title: "UV MARBLE SHEET", img: "/images/Waterproof Seamless Flexible Plastic Wall Panel….jpeg" },
  { id: 8, title: "WALL PAPER", img: "/images/Love art deco_ Take a look at this custom-made….jpeg" },
  { id: 9, title: "Kitchen Design Wall", img: "/images/Thrilled to announce my first NFT collection “The….jpeg" },
];

export default function ServicesSection() {
  return (
    <section
      className="py-12 bg-fixed bg-center bg-cover relative" id="services"
      style={{
        backgroundImage:
          "url('/images/WhatsApp Image 2025-09-22 at 10.29.46_776b371a.jpg')", // background image
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-[#171512]/70"></div>

      <div className="relative max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#D99021]">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay Title on Hover */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>

              {/* Learn More Button */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <Link
                  to={`/services/${service.id}`}
                  className="px-5 py-2 bg-[#172D20] text-[#D99021] font-semibold rounded-md opacity-90 group-hover:opacity-100 transition duration-300 hover:bg-[#D99021] hover:text-[#171512]"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

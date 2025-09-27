import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function GalleryFooter() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/WhatsApp Image 2025-09-22 at 10.29.51_ebc7cbb7.jpg",
    "/images/WhatsApp Image 2025-09-22 at 10.29.52_8714a5bb.jpg",
    "/images/WhatsApp Image 2025-09-22 at 10.29.52_1be8808d.jpg",
    "/images/WhatsApp Image 2025-09-22 at 10.29.53_e5deb37b.jpg",
    "/images/WhatsApp Image 2025-09-22 at 10.29.46_050cf3a8.jpg",
    "/images/WhatsApp Image 2025-09-22 at 10.29.46_2ecd17d0.jpg",
  ];

  return (
    <section className="py-16 bg-white text-[#171512]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          Our Gallery
        </h2>

        {/* 4 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {images.slice(0, 4).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Full Width Images */}
        <div className="space-y-6">
          {images.slice(4).map((src, i) => (
            <img
              key={i + 4}
              src={src}
              alt={`Gallery ${i + 5}`}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#D99021] transition"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>

            {/* Selected Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}

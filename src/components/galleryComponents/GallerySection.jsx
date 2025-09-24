import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const galleryImages = [
  { id: 1, src: "/images/Embracing the beauty of the purple hue….jpeg", title: "Living Room Design" },
  { id: 2, src: "/images/modern sleek white and yellow kitchen.jpeg", title: "Kitchen Interior" },
  { id: 3, src: "/images/08b19d2e-ab17-4d1d-a3d5-f193201f74e9.jpeg", title: "Bedroom Decor" },
  { id: 4, src: "/images/30 Intriguing Home Office Ideas for Small Spaces.jpeg", title: "Office Space" },
  { id: 5, src: "/images/e3f3e30b-abc1-47f7-894b-2a3df6636a7d.jpeg", title: "Modern Bathroom" },
  { id: 6, src: "/images/Luxury outdoor living is just a step away! Explore….jpeg", title: "Outdoor Patio" },
  { id: 7, src: "/images/80f001a4-78fd-4462-b558-aeef42124d41.jpeg", title: "Dining Area" },
  { id: 8, src: "/images/A Contemporary Art Deco Hallway revives the bold….jpeg", title: "Hallway Design" },
  { id: 9, src: "/images/aabbef6f-fc2d-4141-9d6a-a9ff8d95141a.jpeg", title: "Workspace" },
  { id: 10, src: "/images/b2eed0b4-c13d-4aa4-a271-c2a860db063a.jpeg", title: "Lobby Design" },
  { id: 11, src: "/images/35 Colorful Modern Bedroom Designs Ideas »….jpeg", title: "Minimalist Room" },
  { id: 12, src: "/images/8f1c2aae-646e-4e8b-8783-1f6a69621b44.jpeg", title: "Luxury Living" },
];

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="relative py-16 text-white bg-cover bg-center bg-fixed"
      id="gallery"
      style={{
        backgroundImage: "url('/images/e1c83e58d6fe2fa7b67df224e9ac1468.jpg')", // yahan apni background image ka path
      }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          Our Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={img.id}
              className="relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => openModal(index)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 mt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-white text-3xl z-50"
              >
                <FaTimes />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-3xl z-50"
              >
                <FaArrowLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-3xl z-50"
              >
                <FaArrowRight />
              </button>

              {/* Image */}
              <motion.img
                key={galleryImages[currentIndex].id}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].title}
                className="max-h-[90vh] max-w-[90vw] rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;

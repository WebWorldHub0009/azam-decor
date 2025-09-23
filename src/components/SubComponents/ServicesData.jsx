// ServicePage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const serviceData = {
  1: {
    title: "Living Room Design",
    description: "Detailed description about living room designs...",
    images: [
      "https://picsum.photos/id/1011/600/400",
      "https://picsum.photos/id/1012/600/400",
      "https://picsum.photos/id/1013/600/400",
      "https://picsum.photos/id/1014/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1016/600/400",
    ],
  },
  2: {
    title: "Bedroom Design",
    description: "Detailed description about bedroom designs...",
    images: [
      "https://picsum.photos/id/1012/600/400",
      "https://picsum.photos/id/1013/600/400",
      "https://picsum.photos/id/1014/600/400",
      "https://picsum.photos/id/1015/600/400",
      "https://picsum.photos/id/1016/600/400",
      "https://picsum.photos/id/1017/600/400",
    ],
  },
  // Add remaining services here
};

export default function serviceData() {
  const { id } = useParams();
  const service = serviceData[id];
  const [popupImage, setPopupImage] = useState(null);

  if (!service) return <p className="p-8">Service not found.</p>;

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
      <p className="mb-8 text-gray-700">{service.description}</p>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {service.images.map((img, idx) => (
          <div key={idx} className="relative">
            <img src={img} alt={service.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
            <button
              onClick={() => setPopupImage(img)}
              className="absolute bottom-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-400"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative">
            <img src={popupImage} alt="Popup" className="max-h-[90vh] rounded-lg shadow-2xl" />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold"
              onClick={() => setPopupImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Link to="/#services" className="mt-8 inline-block text-yellow-500 hover:underline">
        &larr; Back to Services
      </Link>
    </div>
  );
}

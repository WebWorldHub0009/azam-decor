import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "Luxury Living Room",
    description: "Modern interior design with premium finish.",
    url: "https://www.youtube.com/embed/kJybu7MjERY" 
  },
  {
    id: 2,
    title: "PVC WALL PANEL",
    description: "Cozy and stylish bedroom decoration.",
    url: "https://www.youtube.com/embed/CyT0lTzGxA0",
  
  },
  {
    id: 3,
    title: "KITCHEN DESIGN WALL",
    description: "Smart and modular kitchen ideas.",
    url: "https://www.youtube.com/embed/MWhkRALzroY",
    
  },
  {
    id: 4,
    title: "PVC DOOR",
    description: "Professional and creative office space.",
    url: "https://www.youtube.com/embed/idVo67D_VhU",
    
  },
  {
    id: 5,
    title: "WALL PAPER",
    description: "Spacious and well-lit hall interiors.",
    url: "https://www.youtube.com/embed/n0o-IWjSA4E",
  },
  {
    id: 6,
    title: "UV MARBLE SHEET",
    description: "Relaxing and modern balcony setup.",
    url: "https://www.youtube.com/embed/mU6fsz2_ZNQ",
    
  },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-16 bg-white text-[#171512]" id="videogallery">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          Our Video Gallery
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-48 overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Title + Description */}
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-700">{video.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{video.description}</p>
                {/* Show Video Button */}
                <button
                  onClick={() => setSelectedVideo(video.url)}
                  className="px-6 py-2 bg-[#D99021] text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-[#171512] transition duration-300 cursor-pointer"
                >
                  Show Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[60%]">
            {/* Close button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setSelectedVideo(null)}
            >
              <FaTimes />
            </button>
            {/* Video */}
            <iframe
              className="w-full h-[300px] md:h-[500px] rounded-lg shadow-lg"
              src={selectedVideo + "?autoplay=1"}
              title="Selected Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

import React from "react";

export default function VideoHero() {
  // Apna background file ka path yahan do
  const backgroundFile = "/videos/videoframe_7435.png"; // ye .png hai to image chalega

  // File extension nikaalna
  const isVideo = backgroundFile.endsWith(".mp4") || backgroundFile.endsWith(".webm") || backgroundFile.endsWith(".ogg");

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Render */}
      {isVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={backgroundFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={backgroundFile}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to Azam Decor
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          Transforming your spaces with modern, elegant, and durable interior
          designs that stand the test of time.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-[#D99021] text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-[#171512] transition duration-300">
            Show More
          </button>
          <button className="px-6 py-3 border border-[#D99021] text-white font-semibold rounded-lg shadow-lg hover:bg-[#D99021] hover:text-white transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-fixed bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage:
          "url('/images/3bc534bb-6155-4115-be75-b30744246806.jpeg')", // apni image ka path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#171512]/80"></div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
        {/* Left: Contact Form */}
        <div className="bg-[#f2ffcd]/50 rounded-2xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-[#D99021]">Send us a Message</h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#D99021] transition"
            />
            <button
              type="submit"
              className="p-3 rounded-lg font-semibold shadow-lg bg-[#D99021] text-[#171512] hover:bg-[#ffffff] hover:text-[#D99021] transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col justify-center text-white px-4">
          <h2 className="text-4xl font-bold mb-4 text-[#D99021]">Contact Information</h2>
          <p className="mb-6 text-lg text-gray-200">
            We are here to help and answer any question you might have. We look
            forward to hearing from you. Reach out to us anytime!
          </p>

          {/* Contact Details */}
          <a
            href="tel:+919259648796"
            className="flex items-center gap-4 mb-4 hover:scale-105 transition"
          >
            <FaPhoneAlt className="text-[#D99021] text-2xl" />
            <span>+91 9259648796</span>
          </a>

          <a
            href="mailto:azamdecoraligarh@gmail.com"
            className="flex items-center gap-4 mb-4 hover:scale-105 transition"
          >
            <FaEnvelope className="text-[#D99021] text-2xl" />
            <span>azamdecoraligarh@gmail.com</span>
          </a>

          <a
            href="https://maps.google.com/?q=Lucknow, Uttar Pradesh, India"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 mb-8 hover:scale-105 transition"
          >
            <FaMapMarkerAlt className="text-[#D99021] text-2xl" />
            <span>Plot No. 4/1126 Ground Floor Street No.1 Hamdard Nagar B Jamalpur Aligarh Bypass Road Opposite Dipti Hospital Aligarh Uttar Pradesh 202001 India</span>
          </a>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
            <a
              href="https://wa.me/9690008555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="cursor-pointer hover:scale-125 transition text-[#D99021] hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

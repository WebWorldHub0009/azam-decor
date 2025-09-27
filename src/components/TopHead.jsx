import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TopHead() {
  return (
    <header className="bg-[#D99021] text-[#ffffff] text-sm px-4 py-3 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Desktop: Left Side Phone */}
        <div className="hidden md:flex items-center space-x-6">
          <p className="flex items-center hover:text-yellow-400">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:+919259648796">+919259648796</a>
          </p>
        </div>

        {/* Desktop: Center Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <p className="text-center">
            Welcome to <span className="font-semibold">Azam Decor</span> – Interior Design Studio
          </p>
        </div>

        {/* Mobile View: Left Text */}
        <p className="block md:hidden hover:text-yellow-400">
          <a href="tel:+919259648796">Call us: +919259648796</a>
        </p>

        {/* Mobile View: Right Text */}
        <p className="block md:hidden hover:text-yellow-400">
          <a href="mailto:info@azamdecor.com">Email: info@azamdecor.com</a>
        </p>

        {/* Desktop: Social Icons + Email Right */}
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <p className="flex items-center hover:text-yellow-400 ml-4 text-sm">
            <FaEnvelope className="mr-2" />
            <a href="mailto:info@azamdecor.com">info@azamdecor.com</a>
          </p>
          <a href="https://www.facebook.com/" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="https://x.com/" className="hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
          <a href="https://www.youtube.com/" className="hover:text-yellow-400">
            <FaYoutube />
          </a>
          <a href="https://wa.me/+919259648796" className="hover:text-yellow-400">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}

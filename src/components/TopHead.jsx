import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function TopHead() {
  return (
    <header className="bg-[#172D20] text-[#D99021] text-sm px-4 py-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile View: Left Text */}
        <p className="block md:hidden hover:text-yellow-400"><a href="#">Call us: +91 9876543210</a></p>

        {/* Desktop: Center Text */}
        <p className="hidden md:block text-center flex-1">
          Welcome to <span className="font-semibold">Azam Decor</span> – Interior
          Design Studio
        </p>

        {/* Mobile View: Right Text */}
        <p className="block md:hidden hover:text-yellow-400"><a href="#">Email: info@azamdecor.com</a></p>

        {/* Desktop: Social Icons Right */}
        <div className="hidden md:flex space-x-4 text-lg">
          <a href="#" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
}


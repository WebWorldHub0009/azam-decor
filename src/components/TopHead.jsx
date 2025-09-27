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
    <header className="bg-[#D99021] text-[#ffffff] text-sm px-4 py-2 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile View: Left Text */}
        <p className="block md:hidden hover:text-yellow-400"><a href="tel:+919259648796">Call us: +919259648796</a></p>

        {/* Desktop: Center Text */}
        <p className="hidden md:block text-center flex-1">
          Welcome to <span className="font-semibold">Azam Decor</span> – Interior
          Design Studio
        </p>

        {/* Mobile View: Right Text */}
        <p className="block md:hidden hover:text-yellow-400"><a href="https://info@azamdecor.com">Email: info@azamdecor.com</a></p>

        {/* Desktop: Social Icons Right */}
        <div className="hidden md:flex space-x-4 text-lg">
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


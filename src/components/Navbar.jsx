import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tabs = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Certificate", link: "/certificate" },
    { name: "Gallery", link: "/gallery" },
    { name: "Video", link: "/video" },
    { name: "Contact", link: "/contact" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "https://facebook.com" },
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaYoutube />, link: "https://youtube.com" },
    { icon: <FaWhatsapp />, link: "https://wa.me/9690008555" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-9 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div className="flex items-center ">
          <a href="/#home" className="flex items-center">
            <img
              src="/images/image.png"
              alt="Company Logo"
              className="h-16 w-16 mr-2 "
            />
            <p className="font-bold text-1xl m-2">
              AZAM DECOR <br />
              <span className=" font-medium">
                INTERIOR DESIGN STUDIO
              </span>
            </p>
          </a>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex space-x-6 font-medium">
          {tabs.map((tab) => (
            <a
              href={tab.link}
              key={tab.name}
              className="hover:text-[#D99021]"
            >
              {tab.name}
            </a>
          ))}
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b bg-[#172D20]">
          <span className="font-bold text-xl text-[#D99021]">AZAM DECOR</span>
          <button
            className="text-[#D99021]"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col mt-6 space-y-4 px-4">
          {tabs.map((tab) => (
            <a
              href={tab.link}
              key={tab.name}
              className="text-[#171512] hover:text-[#D99021] font-medium"
              onClick={() => setSidebarOpen(false)}
            >
              {tab.name}
            </a>
          ))}
        </div>

        <div className="absolute bottom-1 left-0 h-9 w-full flex justify-around bg-[#172D20] text-[#D99021]">
          {socialIcons.map((social, idx) => (
            <a
              href={social.link}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 mt-3"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#172D20] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* About Section */}
        <div>
          <img
            src="/images/image.png"
            alt="Company Logo"
            className="mb-4"
          />
          <p className="text-sm">
            We are committed to providing the best interior design services to
            transform your spaces into something truly special.
          </p>
        </div>

        {/* Quick Links + Services */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#D99021] font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-[#D99021]">Home</a></li>
              <li><a href="/about" className="hover:text-[#D99021]">About</a></li>
              <li><a href="/Services" className="hover:text-[#D99021]">Services</a></li>
              <li><a href="/Certificate" className="hover:text-[#D99021]">Certificate</a></li>
              <li><a href="/gallery" className="hover:text-[#D99021]">Gallery</a></li>
              <li><a href="/contact" className="hover:text-[#D99021]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#D99021] font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/1" className="hover:text-[#D99021]">PVC WALL PANEL</a></li>
              <li><a href="/services/2" className="hover:text-[#D99021]">CLINILG PANEL</a></li>
              <li><a href="/services/3" className="hover:text-[#D99021]">CHARCOL PANEL</a></li>
              <li><a href="/services/4" className="hover:text-[#D99021]">WPC LOUVERS</a></li>
              <li><a href="/services/5" className="hover:text-[#D99021]">FLUTED PANEL</a></li>
              <li><a href="/services/6" className="hover:text-[#D99021]">PVC DOOR</a></li>
              <li><a href="/services/7" className="hover:text-[#D99021]">UV MARBLE SHEET</a></li>
              <li><a href="/services/8" className="hover:text-[#D99021]">WALL PAPER</a></li>
              <li><a href="/services/9" className="hover:text-[#D99021]">KITCHEN DESIGN WALL</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-[#D99021] font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>123 Main Street, New Delhi</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>info@company.com</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-[#D99021]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#D99021]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#D99021]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#D99021]"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

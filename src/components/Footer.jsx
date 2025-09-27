import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Translator from "./Translator";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showTranslator, setShowTranslator] = useState(false);
  return (
    <footer className="bg-[#ffffff] text-gray-800 py-10">
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
             {/* Translator & Webmail Buttons */}
          <div className="mt-6 flex flex-col gap-4 items-start"> {/* items-start keeps them aligned left */}
            {/* Translator Button */}
            <button
              onClick={() => setShowTranslator(!showTranslator)}
              className="bg-[#001806] hover:bg-[#D99021] hover:text-black text-white px-3 py-2 rounded-lg min-w-[20px]"
            >
              🌍 Translator
            </button>
            {showTranslator && <Translator />}

             <Link
              to="https://md-in-82.webhostbox.net:2096/cpsess3927650103/3rdparty/roundcube/?_task=mail&_mbox=INBOX"
              className="bg-[#D99021] hover:bg-[#ff7f3d] text-white px-2 py-2 rounded-lg text-center font-medium transition transform hover:scale-105 duration-300 min-w-[120px]"
            >
              ✉️ Webmail
            </Link>
          </div>
            
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
          <ul className="space-y-3 text-sm ">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>Plot No. 4/1126 Ground Floor Street No.1 Hamdard Nagar B Jamalpur Aligarh Bypass Road Opposite Dipti Hospital Aligarh Uttar Pradesh 202001 India</span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#D99021]">
              <FaPhone /> <span><a href="tel:+919259648796">+91 9259648796</a></span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#D99021]">
              <FaPhone /> <span><a href="tel:+91781955700">+91 781955700</a></span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#D99021]">
              <FaEnvelope /> <span><a href="https://azamdecoraligarh@gmail.com">azamdecoraligarh@gmail.com</a></span>
            </li>
            <li className="flex items-center gap-2 hover:text-[#D99021]">
              <FaEnvelope /> <span><a href="https://Info@azamdecor.in">Info@azamdecor.in</a></span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/" className="hover:text-[#D99021]"><FaFacebookF /></a>
            <a href="https://www.instagram.com/" className="hover:text-[#D99021]"><FaInstagram /></a>
            <a href="https://x.com/" className="hover:text-[#D99021]"><FaTwitter /></a>
            <a href="https://www.linkedin.com/" className="hover:text-[#D99021]"><FaLinkedin /></a>
            <a href="https://www.youtube.com/" className="hover:text-[#D99021]"><FaYoutube /></a>
            <a href="https://wa.me/+919259648796" className="hover:text-[#D99021]"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
        

      {/* Bottom Bar */}
      <div className="text-center text-[15px] text-gray-800 mt-10 border-t border-gray-700 pt-4">
        <span>© {new Date().getFullYear()} Your Company. All rights reserved.</span> <br /><span>Design and Developed by </span><a className="hover:text-[#D99021]" href="https://webworldhub.co.in/">Web World Hub</a>
        
      </div>
      

    </footer>
  );
}

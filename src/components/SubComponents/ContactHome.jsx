import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactHome = () => {
  return (
    <section
      className="bg-[#171512] bg-fixed bg-cover bg-center py-20 px-4 relative"
      style={{ backgroundImage: "url('/images/cd5d400c39e3891914066593b96d610c.jpg')" }} // <-- apni image ka path dalna
    >
      {/* Overlay for dark effect */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}

      <div className="relative max-w-6xl mx-auto text-white z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#D99021]">
          Contact Us
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Contact Form (Left Side) */}
          <div className="flex-1 bg-[#172D20] text-white rounded-xl shadow-lg p-8 order-1 md:order-none">
            <h3 className="text-2xl font-semibold mb-6 text-[#D99021]">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-[#D99021] rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D99021]"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-[#D99021] rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D99021]"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full border border-[#D99021] rounded-lg px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D99021]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D99021] text-[#171512] font-semibold py-3 rounded-lg hover:bg-[#172D20] hover:text-white hover:scale-105 transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media + Contact Info (Right Side) */}
          <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 space-y-8">
            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#D99021]">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map(
                  (Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-12 h-12 flex items-center justify-center bg-[#D99021] text-[#171512] rounded-full hover:bg-[#172D20] hover:text-white transition-all duration-300 shadow-lg"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-white">
              <p className="flex items-center space-x-3">
                <FaPhone className="text-[#D99021]" /> <span>+91 12345 67890</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaEnvelope className="text-[#D99021]" /> <span>info@azamdecor.com</span>
              </p>
              <p className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#D99021]" />{" "}
                <span>123 Interior St, Design City</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaWhatsapp, FaTimes, FaCommentDots } from "react-icons/fa";

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
      {/* WhatsApp Icon */}
      <AnimatePresence>
        {open && (
          <motion.a
            href="https://wa.me/9690008555" // apna WhatsApp number daal dena
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: -70 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-1 p-4 rounded-full bg-green-500 text-white shadow-lg cursor-pointer hover:bg-green-400"
          >
            <FaWhatsapp size={20} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Call Icon */}
      <AnimatePresence>
        {open && (
          <motion.a
            href="tel:+911234567890" // apna call number daal dena
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -70 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-1 p-4 rounded-full bg-[#D99021] text-white shadow-lg cursor-pointer hover:bg-yellow-500"
          >
            <FaPhone size={20} />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-5 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-all"
      >
        {open ? <FaTimes size={22} /> : <FaCommentDots size={22} />}
      </button>
    </div>
  );
};

export default FloatingActionButton;

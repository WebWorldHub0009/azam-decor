import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is PVC Wall Panel?",
    answer:
      "PVC wall panels are lightweight, durable, and waterproof wall coverings that enhance interiors with stylish designs while being low-maintenance.",
  },
  {
    question: "How long does it take to install a Ceiling Panel?",
    answer:
      "Installation time depends on the area size, but generally small rooms can be completed in a few hours, and larger spaces in a day.",
  },
  {
    question: "Are Charcoal Panels termite resistant?",
    answer:
      "Yes, charcoal panels are designed to be moisture and termite resistant, making them durable for long-term use.",
  },
  {
    question: "Do WPC Louvers require maintenance?",
    answer:
      "WPC Louvers are low-maintenance. They are resistant to moisture, termites, and decay. Regular cleaning with water is enough.",
  },
  {
    question: "Can I customize the color of Fluted Panels?",
    answer:
      "Yes, fluted panels come in a variety of colors and finishes, and custom options may be available depending on your supplier.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 text-white relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/🌟 Transform Your Living Area into a Happy Haven….jpeg')",
      }}
    >
      {/* Overlay to reduce background brightness */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border  border-[#D99021]/50 rounded-lg overflow-hidden"
            >
              <button
                className="w-full cursor-pointer px-6 py-4 flex justify-between items-center bg-[#171512]/80 hover:bg-[#D99021]/10 transition"
                onClick={() => toggleIndex(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <FaMinus className="text-[#D99021]" />
                ) : (
                  <FaPlus className="text-[#D99021]" />
                )}
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 bg-[#171512]/80 text-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

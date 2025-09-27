import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Home Owner",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg", // dummy avatar
    review:
      "Azam Decor completely transformed my living room with their PVC panels. Amazing quality, professional work, and timely delivery. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    role: "Interior Designer",
    image:
      "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "Their fluted panels and wallpaper collection is absolutely stunning. My clients are super happy with the results. Will definitely work with them again!",
    rating: 5,
  },
  {
    name: "Imran Sheikh",
    role: "Business Owner",
    image:
      "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Professional team, high-quality products, and competitive prices. Azam Decor is my go-to for all interior solutions.",
    rating: 4,
  },
];

export default function TestimonialsAbout() {
  return (
    <section className="py-16 bg-white text-[#171512]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#D99021] mb-12">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-[#D99021]/30 rounded-2xl p-6 text-center shadow-md transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Client Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#D99021] object-cover"
              />

              {/* Client Name & Role */}
              <h3 className="text-xl font-semibold text-[#D99021]">
                {t.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{t.role}</p>

              {/* Review */}
              <p className="text-gray-800 mb-4">“{t.review}”</p>

              {/* Rating Stars */}
              <div className="flex justify-center text-[#D99021]">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

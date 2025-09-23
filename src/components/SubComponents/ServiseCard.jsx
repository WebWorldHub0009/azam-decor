// Services.jsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Living Room Design",
    image: "https://picsum.photos/id/1011/400/300",
    description: "Modern and stylish living room designs.",
  },
  {
    id: 2,
    title: "Bedroom Design",
    image: "https://picsum.photos/id/1012/400/300",
    description: "Elegant and cozy bedroom designs.",
  },
  {
    id: 3,
    title: "Kitchen Design",
    image: "https://picsum.photos/id/1013/400/300",
    description: "Functional and modern kitchens.",
  },
  {
    id: 4,
    title: "Bathroom Design",
    image: "https://picsum.photos/id/1014/400/300",
    description: "Luxury and clean bathroom spaces.",
  },
  {
    id: 5,
    title: "Office Design",
    image: "https://picsum.photos/id/1015/400/300",
    description: "Professional and creative office spaces.",
  },
  {
    id: 6,
    title: "Outdoor Spaces",
    image: "https://picsum.photos/id/1016/400/300",
    description: "Beautiful gardens and terraces.",
  },
  {
    id: 7,
    title: "Dining Room",
    image: "https://picsum.photos/id/1017/400/300",
    description: "Modern dining room concepts.",
  },
  {
    id: 8,
    title: "Kids Room",
    image: "https://picsum.photos/id/1018/400/300",
    description: "Fun and colorful kids rooms.",
  },
];

export default function ServiceCard() {
  return (
    <section
      id="services"
      className="relative bg-fixed bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/id/1010/1920/1080')" }}
    >
      <div className="bg-black/50 w-full h-full absolute inset-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="max-w-2xl mx-auto mb-12">
          Explore our wide range of interior design services to transform your
          space into a dream home.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm flex-1">{service.description}</p>
                <Link
                  to={`/service/${service.id}`}
                  className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-xl hover:bg-yellow-400 w-max"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

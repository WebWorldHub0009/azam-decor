import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "./servicesData";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <h2 className="text-center text-2xl mt-10">Service Not Found</h2>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full md:w-2/3 mx-auto rounded-2xl shadow-lg mb-8"
        />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {service.title}
        </h2>
        <p className="text-lg text-gray-600 mb-6">{service.details}</p>
        <Link
          to="/services"
          className="px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          Back to Services
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetail;

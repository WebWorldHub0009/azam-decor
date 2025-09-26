import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Interior Design Excellence",
    file: "/images/FullStack_Developer_Resume_Template.pdf", // PDF file path
  },
  {
    id: 2,
    title: "Architecture Innovation Award",
    file: "/images/Discrete_Mathematics_Important_QA.pdf",
  },
];

const CertificateSection = () => {
  return (
    <section className="py-16 bg-[#171512] text-white" id="certificate">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-[#D99021]">
          Our Certificates
        </h2>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#fff596] rounded-2xl shadow-lg overflow-hidden"
            >
              {/* PDF Preview */}
              <embed
                src={cert.file}
                type="application/pdf"
                className="w-full h-64"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#D99021] mb-4">
                  {cert.title}
                </h3>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                  {/* View Button */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#D99021] text-[#171512] font-semibold hover:bg-[#c7801b] transition"
                  >
                    <FaEye /> View
                  </a>

                  {/* Download Button */}
                  <a
                    href={cert.file}
                    download
                    className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#D99021] text-[#D99021] font-semibold hover:bg-[#D99021] hover:text-[#171512] transition"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;

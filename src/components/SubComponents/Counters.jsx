import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaProjectDiagram, FaSmile, FaAward, FaHome } from "react-icons/fa";

const statsData = [
  { icon: FaProjectDiagram, number: 150, label: "Projects Completed" },
  { icon: FaSmile, number: 120, label: "Happy Clients" },
  { icon: FaAward, number: 15, label: "Awards Won" },
  { icon: FaHome, number: 50, label: "Luxury Homes Designed" },
  { icon: FaHome, number: 200, label: "Interiors Delivered" },
];

const Counters = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4 flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: `url("/images/e6dfe5d171630e764b73a0c1192d1265.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Makes background fixed while scrolling
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <h2 className="text-4xl font-bold mb-12 text-[#D99021] text-center relative z-10">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 text-white sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl w-full relative z-10">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="relative rounded-xl p-8 flex flex-col items-center justify-center  bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#D99021] hover:text-[#111111] hover:scale-105"
            >
              <Icon className="text-5xl mb-4 transition-colors duration-300 hover:text-white" />
              <h3 className="text-3xl font-bold mb-2">
                {inView ? <CountUp end={stat.number} duration={2} /> : 0}
              </h3>
              <p className="text-center">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Counters;

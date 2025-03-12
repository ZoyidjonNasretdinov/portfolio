import React from "react";
import { FaBolt, FaWrench } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { BsCalendarEvent } from "react-icons/bs";

const services = [
  {
    title: "SEO Optimization",
    description: "For Boosting your Traffic",
    experience: "5+ Years",
    completed: "30+",
    rate: "$150",
    icon: <FaBolt className="text-xl text-purple-500" />,
  },
  {
    title: "Webflow Partner",
    description: "For Responsive websites",
    experience: "4+ Years",
    completed: "20+",
    rate: "$100",
    icon: <SiWebflow className="text-xl text-purple-500" />,
  },
  {
    title: "Framer Partner",
    description: "For Innovative Websites",
    experience: "3+ Years",
    completed: "15+",
    rate: "$120",
    icon: <FaWrench className="text-xl text-purple-500" />,
  },
];

const ServicesCards = () => {
  return (
    <section className="flex gap-2 p-[0.5vw]">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-[full] flex-1 bg-[#111] p-6 rounded-2xl text-white shadow-md"
        >
          <div className="flex items-center gap-2 text-lg font-bold">
            <span className="p-2 bg-[#222] rounded-lg">{service.icon}</span>
            {service.title}
          </div>
          <p className="text-gray-400 mt-1">{service.description}</p>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">Experience</span>
              <span className="font-semibold">{service.experience}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">Completed Works</span>
              <span className="font-semibold">{service.completed}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-1">
              <span className="text-gray-500">Hourly Rate</span>
              <span className="font-semibold">{service.rate}</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-[#222] mt-4 py-2 rounded-lg text-white hover:bg-[#333] transition">
            <BsCalendarEvent className="text-purple-400" />
            Schedule Call
          </button>
        </div>
      ))}
    </section>
  );
};

export default ServicesCards;

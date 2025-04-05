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
    icon: <FaBolt className="text-[2vw] text-purple-500" />,
  },
  {
    title: "Webflow Partner",
    description: "For Responsive websites",
    experience: "4+ Years",
    completed: "20+",
    rate: "$100",
    icon: <SiWebflow className="text-[2vw] text-purple-500" />,
  },
  {
    title: "Framer Partner",
    description: "For Innovative Websites",
    experience: "3+ Years",
    completed: "15+",
    rate: "$120",
    icon: <FaWrench className="text-[2vw] text-purple-500" />,
  },
];

const ServicesCards = () => {
  return (
    <section className="flex gap-[0.5vw] py-[0.5vw]">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-[full] flex-1 bg-[#111] p-[1.5vw] rounded-[1vw] text-white shadow-md"
        >
          <div className="flex items-center gap-[1vw] text-[1.2vw] font-bold">
            <span className="p-[0.3vw] bg-[#222] rounded-[0.5vw] ">{service.icon}</span>
            {service.title}
          </div>
          <p className="text-gray-400 mt-[0.8vw] text-[1vw]">{service.description}</p>

          <div className="mt-4 space-y-[1vw] text-[0.9vw]">
            <div className="flex justify-between border-b border-gray-700 pb-[0.5vw]">
              <span className="text-gray-500">Experience</span>
              <span className="font-semibold">{service.experience}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-[0.5vw]">
              <span className="text-gray-500">Completed Works</span>
              <span className="font-semibold">{service.completed}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-[0.5vw]">
              <span className="text-gray-500">Hourly Rate</span>
              <span className="font-semibold">{service.rate}</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-[0.5vw] bg-[#222] mt-[0.8vw] py-[0.6vw] rounded-[0.5vw] text-white hover:bg-[#333] transition text-[1vw]">
            <BsCalendarEvent className="text-purple-400" />
            Schedule Call
          </button>
        </div>
      ))}
    </section>
  );
};

export default ServicesCards;

"use client";

import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaStarAndCrescent } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { SiProtondrive } from "react-icons/si";

const Workflow: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const steps = [
    {
      title: "Goals & Objectives",
      description: "Defining project aims and target outcomes to guide design.",
      Icon: GoGoal,
    },
    {
      title: "Research",
      description: "Delving into user needs and market trends for informed decisions.",
      Icon: IoIosSearch,
    },
    {
      title: "Wireframe",
      description: "Translating ideas into rough visuals and structural outlines.",
      Icon: GiWireframeGlobe,
    },
    {
      title: "Prototyping",
      description: "Crafting interactive models to visualize and refine design concepts.",
      Icon: SiProtondrive,
    },
    {
      title: "Finalize Design",
      description: "Incorporating feedback and polishing design for launch.",
      Icon: MdDesignServices,
    },
  ];

  return (
    <section className="bg-primary w-[22vw] mobile:w-full mx-auto rounded-[1vw] mobile:rounded-[4vw] p-[2vw] text-textPrimary shadow-lg relative">
      {/* Header */}
      <div className="mb-[2vh] text-center">
        <h2 className="text-[1vw] mobile:text-[4vw] font-bold flex items-center justify-center gap-[0.5vw] mb-[1vh]">
          <FaStarAndCrescent className="text-[0.8vw] mobile:text-[4.5vw] text-textSecondary" />
          Work Process
        </h2>
        <p className="text-[1.3vw] mobile:text-[6vw]">Workflow Highlights</p>
      </div>

      {/* Workflow Steps */}
      <ul className="space-y-[1vh]">
        {steps.map(({ title, description, Icon }, index) => (
          <li
            key={index}
            className="relative border border-transparent bg-secondary rounded-[0.8vw] mobile:rounded-[2vw] px-[1vw] py-[1vh] mobile:px-[3vw] mobile:py-[3vw] transition-all duration-300 hover:border hover:border-textSecondary shadow-md"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Step Title */}
            <div
              className="relative flex items-center gap-[0.5vw] mobile:gap-[3vw] text-[0.9vw] mobile:text-[4.5vw] font-medium cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="p-[0.5vw] mobile:p-[2vw] bg-[#282828] rounded-[0.5vw] mobile:rounded-[2vw] flex items-center justify-center">
                <Icon className="text-textSecondary text-[1.2vw] mobile:text-[6.8vw]" />
              </span>
              <p>{title}</p>

              {/* Arrow icon */}
              <span className="absolute hidden right-2 p-[0.5vw] mobile:p-[2vw] bg-[#282828] rounded-[0.5vw] mobile:rounded-[2vw] mobile:flex tablet:flex items-center justify-center">
                <FaArrowDown
                  className={`text-textSecondary text-[1.2vw] mobile:text-[6.8vw] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>

            {/* Description (Hover - faqat desktopda) */}
            <p
              className={`absolute left-[-16vw] top-1/2 transform -translate-y-1/2 bg-secondary shadow-lg rounded-[0.8vw] p-[1vw] text-[0.8vw] w-[15vw] opacity-0 transition-opacity duration-300
              ${hoverIndex === index ? "opacity-100" : ""} 
              hidden md:block`}
            >
              <b className="font-semibold block">{title}</b> {description}
            </p>

            {/* Description (Bosganda - mobil */}
            <p
              className={`text-textPrimary bg-secondary shadow-lg rounded-[0.8vw] p-[1vw] mobile:py-[5vh] text-[0.8vw] mobile:text-[5vw] transition-opacity duration-300 ${
                openIndex === index ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <b className="font-semibold hidden">{title}</b> {description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Workflow;

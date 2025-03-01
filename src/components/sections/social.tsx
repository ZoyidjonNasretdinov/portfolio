import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";

const Social = () => {
  const socialLinks = [
    { icon: <BiLogoTelegram className="text-[1.2vw] mobile:text-[3vw]" />, title: "Telegram", url: "https://telegram.org" },
    { icon: <FaInstagram className="text-[1.2vw] mobile:text-[3vw]" />, title: "Instagram", url: "https://instagram.com" },
    { icon: <FaLinkedinIn className="text-[1.2vw] mobile:text-[3vw]" />, title: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
    <section className="bg-primary w-[18vw] rounded-[1vw] px-[1vw] py-[1vh] text-textPrimary shadow-lg mobile:w-full mobile:p-[4vw]">
      {/* Header */}
      <div className="mb-[1vh]">
        <h2 className="flex items-center justify-center gap-[0.5vw] text-[0.8vw] mobile:text-[2vw] font-medium uppercase">
          <FiSun className="text-textSecondary text-[1vw] mobile:text-[2.5vw]" />
          Follow me
        </h2>
        <p className="text-[1.2vw] font-bold text-center mobile:text-[4vw]">Online Presence</p>
      </div>

      {/* Social Links */}
      <ol className="flex flex-col gap-[1.2vh]">
        {socialLinks.map((social, index) => (
          <li
            key={index}
            className="group border border-transparent flex items-center justify-between gap-[1vw] px-[1vw] py-[1vh] bg-secondary rounded-[0.8vw] 
              transition-all duration-300  hover:border hover:border-textSecondary shadow-md"
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-[0.5vw]">
                <span className="flex items-center justify-center p-[0.5vw] bg-[#282828] rounded-[0.5vw]">
                  {social.icon}
                </span>
                <span className="text-[0.9vw] mobile:text-[2.5vw]">{social.title}</span>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                <MdOutlineArrowOutward className="text-[1vw] mobile:text-[2.5vw]" />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Social;

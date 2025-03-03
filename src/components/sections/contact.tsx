import React from "react";
import { GiImperialCrown } from "react-icons/gi";
import { MdOutlineArrowOutward, MdOutlineEmail } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";

const Contact = () => {
  const contacts = [
    {
      icon: <MdOutlineEmail className="text-[1vw] tablet:text-[1.5vw] mobile:text-[2vw]" />,
      title: "Email Me",
      url: "zoyidjonnasretdinovcoder@gmail.com",
    },
    {
      icon: <RiCalendarScheduleLine className="text-[1vw] tablet:text-[1.5vw] mobile:text-[2vw]" />,
      title: "Schedule a Call",
      url: "https://calendly.com/zoyidjonnasretdinovcoder",
    },
  ];

  return (
    <section className="bg-primary w-full rounded-[0.8vw] px-[1.5vw] py-[2vh] text-white shadow-lg
      h-auto tablet:px-[3vw] mobile:px-[4vw] mobile:py-[4vh]">
      
      {/* Header */}
      <div className="mb-[1vh] text-center">
        <span className="flex p-[0.8vw] w-[3vw] h-[3vw] tablet:w-[6vw] mobile:w-[8vw]
          items-center justify-center mx-auto mb-[1.5vh] bg-secondary rounded-full">
          <GiImperialCrown
            className="text-[2.8vw] tablet:text-[2vw] mobile:text-[3vw] text-textSecondary"
          />
        </span>
        <h2 className="text-[0.9vw] font-bold tablet:text-[2vw] mobile:text-[3vw]">
          Let’s Work Together
        </h2>
        <p className="text-[0.8vw] text-textPrimary tablet:text-[1.5vw] mobile:text-[2vw]">
          Let’s Make Magic Happen Together
        </p>
      </div>

      {/* Contact List */}
      <ol className="flex flex-col gap-[1vh] text-textPrimary">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="group border border-transparent flex items-center justify-between gap-[1vw] px-[1vw] py-[0.8vh] bg-secondary rounded-[0.6vw]
              transition-all duration-300 hover:border-textSecondary hover:border shadow-md"
          >
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-[0.5vw]">
                <span className="flex items-center justify-center p-[0.4vw] bg-[#282828] rounded-[0.4vw]">
                  {contact.icon}
                </span>
                <span className="text-[0.8vw] tablet:text-[1.2vw] mobile:text-[1.8vw]">
                  {contact.title}
                </span>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-[0.5vw]">
                <MdOutlineArrowOutward
                  className="text-[0.9vw] tablet:text-[1.5vw] mobile:text-[2vw]"
                />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Contact;

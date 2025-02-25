import React from 'react'
import { GiImperialCrown } from "react-icons/gi"
import { MdOutlineArrowOutward, MdOutlineEmail } from "react-icons/md"
import { RiCalendarScheduleLine } from "react-icons/ri"

const Contact = () => {
  const contacts = [
    {
      icon: <MdOutlineEmail className="text-[1.2vw] desktop:text-[1.5vw] tablet:text-[2vw] mobile:text-[3vw]" />,
      title: 'Email Me',
      url: 'mailto:your-email@example.com'
    },
    {
      icon: <RiCalendarScheduleLine className="text-[1.2vw] desktop:text-[1.5vw] tablet:text-[2vw] mobile:text-[3vw]" />,
      title: 'Schedule a Call',
      url: 'https://calendly.com/your-calendly'
    }
  ]

  return (
    <section className="bg-primary w-full rounded-[1vw] px-[2vw] py-[2vh] text-white shadow-lg
      h-auto desktop:px-[1.5vw] desktop:py-[2vh] tablet:px-[4vw] mobile:px-[5vw] mobile:py-[5vh]">
      {/* Header qismi */}
      <div className="mb-[2vh] text-center">
        <span className="flex p-[1vw] w-[4vw] h-[4vw] desktop:w-[5vw] desktop:h-[5vw] tablet:w-[7vw] mobile:w-[12vw]
          items-center justify-center mx-auto mb-[2vh] bg-secondary rounded-full">
          <GiImperialCrown
            className="text-[2vw] desktop:text-[2.5vw] tablet:text-[3vw] mobile:text-[5vw] text-textSecondary"
          />
        </span>
        <h2 className="text-[1.8vw] font-bold desktop:text-[2vw] tablet:text-[2.5vw] mobile:text-[5vw]">
          Let’s Work Together
        </h2>
        <p className="text-[1vw] text-textPrimary desktop:text-[1.2vw] tablet:text-[1.8vw] mobile:text-[3vw]">
          Let’s Make Magic Happen Together
        </p>
      </div>

      {/* Kontaktlar */}
      <ol className="flex flex-col gap-[1.5vh] text-textPrimary">
        {contacts.map((contact, index) => (
          <li
            key={index}
            className="group flex items-center justify-between gap-[1vw] px-[1.5vw] py-[1vh] bg-secondary rounded-[0.8vw]
              transition-transform transform hover:scale-105"
          >
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-[1vw]">
                <span className="flex items-center justify-center p-[0.5vw] bg-[#282828] rounded-[0.5vw]">
                  {contact.icon}
                </span>
                <span className="text-[1.2vw] desktop:text-[1vw] tablet:text-[1.5vw] mobile:text-[2.5vw]">
                  {contact.title}
                </span>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                <MdOutlineArrowOutward
                  className="text-[1vw] desktop:text-[1.5vw] tablet:text-[2vw] mobile:text-[3vw]"
                />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Contact

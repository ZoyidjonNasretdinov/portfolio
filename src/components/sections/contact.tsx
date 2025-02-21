import React from 'react'
import { GiImperialCrown } from "react-icons/gi"
import { MdOutlineArrowOutward, MdOutlineEmail } from "react-icons/md"
import { RiCalendarScheduleLine } from "react-icons/ri"

const Contact = () => {
  const contacts = [
    {
      icon: <MdOutlineEmail size={20} />,
      title: 'Email Me',
      url: 'mailto:your-email@example.com'
    },
    {
      icon: <RiCalendarScheduleLine size={20} />,
      title: 'Schedule a Call',
      url: 'https://calendly.com/your-calendly'
    }
  ]

  return (
    <section className='bg-primary w-full rounded-[17px] px-4 py-5 text-white shadow-md'>
      <div className='mb-3 text-center'>
        <span className='flex p-1 w-[60px] h-[60px] items-center justify-center mx-auto mb-4 bg-secondary rounded-full'>
          <GiImperialCrown size={30} className='text-textSecondary' />
        </span> 
        <h2 className='text-xl font-bold'>Lets Work Together</h2>
        <p className='text-[16px] text-textPrimary'>Lets Make Magic Happen Together</p>
      </div>
      <ol className='flex flex-col gap-3 text-textPrimary'>
        {contacts.map((contact, index) => (
          <li
            key={index}
            className='group flex items-center justify-between gap-2 px-3 py-2 bg-secondary rounded-[13px] transition-transform transform hover:scale-105'
          >
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-full relative'
            >
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center p-1 bg-[#282828] rounded-[5px]'>
                  {contact.icon}
                </span>
                <span>{contact.title}</span>
              </div>
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1500 transform group-hover:rotate-0 absolute right-3">
                <MdOutlineArrowOutward size={16} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Contact

import React from 'react'
import { BiLogoTelegram } from "react-icons/bi"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import { FiSun } from "react-icons/fi"
import { MdOutlineArrowOutward } from 'react-icons/md'

const Social = () => {
  const socialLinks = [
    { icon: <BiLogoTelegram size={20} />, title: 'Telegram', url: 'https://telegram.org' },
    { icon: <FaInstagram size={20} />, title: 'Instagram', url: 'https://instagram.com' },
    { icon: <FaLinkedinIn size={20} />, title: 'Linkedin', url: 'https://linkedin.com' },
  ]

  return (
    <section className='bg-primary w-[250px] rounded-[17px] p-4 text-textPrimary shadow-md'>
      <div className='mb-4'>
        <p className='flex items-center justify-center gap-2 text-sm font-medium uppercase'>
          <FiSun /> Follow me
        </p>
        <h2 className='text-2xl font-bold text-center'>Online Presence</h2>
      </div>
      <ol className='flex flex-col gap-3'>
        {socialLinks.map((social, index) => (
          <li
            key={index}
            className='group flex items-center justify-between gap-2 px-3 py-2 bg-secondary rounded-[13px] transition-transform transform hover:scale-105'
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-between w-full'
            >
              <div className='flex items-center gap-2'>
                <span className='flex items-center justify-center p-1 bg-[#282828] rounded-[5px]'>
                  {social.icon}
                </span>
                <span>{social.title}</span>
              </div>
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1500 transform group-hover:rotate-0">
                <MdOutlineArrowOutward />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Social

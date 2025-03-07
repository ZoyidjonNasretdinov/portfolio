"use client"

import { author } from '@/assets'
import Image from 'next/image'
import React, { useEffect, useState, useMemo } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaChess, FaUniversity } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import { HiOutlineDocumentDownload, HiOutlineEmojiHappy } from 'react-icons/hi'
import { IoMdTime } from 'react-icons/io'
import { PiTelegramLogo } from 'react-icons/pi'
import { TbSchool } from 'react-icons/tb'
import packageJson from '../../../package.json'

const Hero = () => {
  const roles = useMemo(() => ['Software Engineer', 'AI Engineer', 'Chess Player'], [])
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // 🔤 Typewriter effect
  useEffect(() => {
    const role = roles[currentRole]
    const typingSpeed = isDeleting ? 100 : 200

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(role.substring(0, displayedText.length + 1))
        if (displayedText === role) {
          setIsDeleting(true)
        }
      } else {
        setDisplayedText(role.substring(0, displayedText.length - 1))
        if (displayedText === '') {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole, roles])

  return (
    <section className="bg-primary p-[1vw] rounded-[1vw] mobile:rounded-[4vw] tablet:rounded-[2vw] w-full shadow-lg mx-auto mobile:p-[3vw]">
      {/* Header with image and personal info */}
      <div className="flex items-center gap-[1vw] mb-[1.5vh]">
      <Image
         src={author}
         alt="Author"
         className="rounded-[0.5vw] mobile:rounded-[100vw] w-[6vw] aspect-square object-cover tablet:rounded-[2vw]
         desktop:w-[6vw] tablet:w-[15vw] mobile:w-[25vw] tablet:mr-[2vw]"
       />

        <div className="flex-1 mobile:pl-[4vw] tablet:pr-[4vw]">
          <div className="flex items-center justify-between gap-[0.5vw] mb-[0.5vh] tablet:py-[1.5vw]">
            <p className="flex items-center  gap-[0.3vw] mobile:gap-[1vw]  rounded-full bg-secondary text-[1vw] px-[0.8vw] mobile:px-[2vw] py-[0.3vh] mobile:text-[3vw] tablet:text-[1.5vw]">
              <span className="w-[0.4vw] h-[0.4vw] mobile:w-[2vw] mobile:h-[2vw] rounded-full bg-green-400 shadow-md tablet:w-[1.5vw] tablet:h-[1.5vw] tablet:mr-[1vw] "></span>
              Available To Work
            </p>
            <div className="flex items-center gap-[0.5vw] mobile:hidden">
              <p className='text-[0.7vw] tablet:hidden'>{packageJson.version} v</p>
              <p className="text-[1vw] mobile:text-[2vw] tablet:text-[1.4vw]">Resume</p>
              <a
                href="/assets/Zoyidjon.pdf"
                download="Zoyidjon_Nasretdinov_Resume.pdf"
                className="btn bg-secondary rounded-[0.3vw] p-[0.3vw] flex items-center justify-center mobile:p-[1.5vw]"
              >
                <HiOutlineDocumentDownload className="text-[1.5vw] mobile:text-[2.5vw] tablet:text-[3.5vw]" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-[1.4vw] font-bold text-textSecondary mobile:text-[5vw] tablet:text-[2.4vw]">
              Zoyidjon Nasretdinov
            </h2>
            <p className="text-[0.8vw] mobile:text-[4vw] tablet:text-[1.4vw]" aria-label="Hi! I'm a developer">
              I’m a &nbsp;
              <span className="font-medium text-[#ffd700]">
                {displayedText}
                <span className="blinking-caret">|</span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Info tags */}
      <ul className="flex flex-wrap gap-[0.8vw] mobile:gap-[1.5vw] tablet:gap-[1.2vw]  mb-[1.5vh] bg-secondary rounded-[0.3vw] mobile:rounded-[3vw] tablet:rounded-[2vw] p-[0.8vw] mobile:py-[3vw] mobile:px-[1.5vw]">
        {[
          { icon: <CiLocationOn />, text: 'Uzbekistan' },
          { icon: <GrLanguage />, text: 'English & Uzbek' },
          { icon: <TbSchool />, text: 'Software Engineer' },
          { icon: <IoMdTime />, text: 'IST' },
          { icon: <FaUniversity />, text: 'PDP University' },
          { icon: <HiOutlineEmojiHappy />, text: 'Good Boy' },
          { icon: <FaChess />, text: 'Chess player' },
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-[0.3vw] mobile:gap-[1.4vw] tablet:text-[1vw] border border-[#212121] rounded-full px-[0.8vw] py-[0.4vh] text-[0.7vw] mobile:text-[2.8vw]"
          >
            {React.cloneElement(item.icon, {
              className: 'text-textSecondary mobile:text-[3.2vw] tablet:text-[2vw]',
            })}
            {item.text}
          </li>
        ))}
      </ul>

      {/* Social / Contact links */}
      <ul className="grid grid-cols-2 gap-[1vw] mobile:gap-[3vw]">
        {/* Telegram Button */}
        <li className="btn flex items-center justify-center bg-secondary rounded-[0.5vw] mobile:rounded-[3vw] px-[1.5vw] py-[1.5vh] mobile:px-[3vw] mobile:py-[2vh] border-2 border-transparent hover:border-textSecondary transition-all duration-300 ease-in-out hover:scale-105 tablet:rounded-[1.5vw]">
          <a
            href="https://t.me/zoyidjonnasretdinov"
            className="flex items-center gap-[0.5vw] text-[1vw] text-textPrimary mobile:text-[4.5vw] font-medium tablet:text-[2.2vw] "
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTelegramLogo className="text-[1.5vw] text-textSecondary mobile:text-[6vw] tablet:text-[3vw]" />
            Telegram me
          </a>
        </li>

        {/* Phone Button */}
        <li className="btn flex items-center justify-center bg-secondary rounded-[0.5vw] mobile:rounded-[3vw] px-[1vw] py-[1.5vh] mobile:px-[3vw] mobile:py-[2vh] border-2 border-transparent hover:border-textSecondary transition-all duration-300 ease-in-out hover:scale-105 tablet:rounded-[1.5vw]">
          <a
            href="tel:+998950124501"
            className="flex items-center gap-[0.5vw] text-[1vw] text-textPrimary mobile:text-[4.5vw] font-medium tablet:text-[2.2vw]"
          >
            <FiPhone className="text-[1.5vw] text-textSecondary mobile:text-[6vw] tablet:text-[3vw]" />
            Phone me
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Hero

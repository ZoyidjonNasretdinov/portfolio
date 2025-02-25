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

const Hero = () => {
  const roles = useMemo(() => ['Developer', 'AI Engineer', 'Chess Player'], [])
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
    <section className="bg-primary p-[1vw] rounded-[1vw] w-full shadow-lg mx-auto mobile:p-[3vw]">
      {/* Header with image and personal info */}
      <div className="flex items-center gap-[1vw] mb-[1.5vh]">
      <Image
         src={author}
         alt="Author"
         className="rounded-[0.5vw] w-[6vw] aspect-square object-cover 
         desktop:w-[6vw] tablet:w-[15vw] mobile:w-[20vw]"
       />

        <div className="flex-1">
          <div className="flex items-center justify-between gap-[0.5vw] mb-[0.5vh]">
            <p className="flex items-center gap-[0.3vw] rounded-full bg-secondary text-[1vw] px-[0.8vw] py-[0.3vh] mobile:text-[2vw]">
              <span className="w-[0.4vw] h-[0.4vw] mobile:w-[1vw] mobile:h-[1vw] rounded-full bg-green-400 shadow-md"></span>
              Available To Work
            </p>
            <div className="flex items-center gap-[0.5vw]">
              <p className="text-[1vw] mobile:text-[2vw]">Resume</p>
              <a
                href="/assets/Zoyidjon.pdf"
                download="Zoyidjon_Nasretdinov_Resume.pdf"
                className="btn bg-secondary rounded-[0.3vw] p-[0.3vw] flex items-center justify-center mobile:p-[1.5vw]"
              >
                <HiOutlineDocumentDownload className="text-[1.5vw] mobile:text-[2.5vw]" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-[1.4vw] font-bold text-textSecondary mobile:text-[3vw]">
              Zoyidjon Nasretdinov
            </h2>
            <p className="text-[0.8vw] mobile:text-[2vw]" aria-label="Hi! I'm a developer">
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
      <ul className="flex flex-wrap gap-[0.8vw] mb-[1.5vh] bg-secondary rounded-[0.3vw] p-[0.8vw]">
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
            className="flex items-center gap-[0.3vw] border border-[#212121] rounded-full px-[0.8vw] py-[0.4vh] text-[0.7vw] mobile:text-[1.8vw]"
          >
            {React.cloneElement(item.icon, {
              size: '1vw',
              className: 'text-textSecondary mobile:text-[2.2vw]',
            })}
            {item.text}
          </li>
        ))}
      </ul>

      {/* Social / Contact links */}
      <ul className="grid grid-cols-2 gap-[1vw]">
        {/* Telegram Button */}
        <li className="btn flex items-center justify-center bg-secondary rounded-[0.5vw] px-[1.5vw] py-[1.5vh] mobile:px-[3vw] mobile:py-[3vh] border-2 border-transparent hover:border-textSecondary transition-all duration-300 ease-in-out hover:scale-105">
          <a
            href="https://t.me/yourusername"
            className="flex items-center gap-[0.5vw] text-[1vw] text-textPrimary mobile:text-[2.5vw] font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTelegramLogo className="text-[1.5vw] text-textSecondary mobile:text-[3vw]" />
            Telegram me
          </a>
        </li>

        {/* Phone Button */}
        <li className="btn flex items-center justify-center bg-secondary rounded-[0.5vw] px-[1.5vw] py-[1.5vh] mobile:px-[3vw] mobile:py-[3vh] border-2 border-transparent hover:border-textSecondary transition-all duration-300 ease-in-out hover:scale-105">
          <a
            href="tel:+998901234567"
            className="flex items-center gap-[0.5vw] text-[1vw] text-textPrimary mobile:text-[2.5vw] font-medium"
          >
            <FiPhone className="text-[1.5vw] text-textSecondary mobile:text-[3vw]" />
            Phone me
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Hero

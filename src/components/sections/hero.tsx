import { author } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaChess, FaUniversity } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { GrLanguage } from 'react-icons/gr'
import { HiOutlineDocumentDownload, HiOutlineEmojiHappy } from 'react-icons/hi'
import { IoMdTime } from 'react-icons/io'
import { PiTelegramLogo } from 'react-icons/pi'
import { TbSchool } from 'react-icons/tb'

const Hero = () => {
  return (
    <section className="bg-primary p-4 rounded-[17px] w-full shadow-md mx-auto">
      {/* Header with image and personal info */}
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={author}
          alt="Author"
          width={100}
          height={100}
          objectFit="cover"
          className="rounded-[10px]"
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <p className="flex items-center gap-2 rounded-full bg-secondary text-[12px] px-3 py-1">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-md"></span>
              Available To Work
            </p>
            <div className="flex items-center gap-2">
              <p className="text-sm">Resume</p>
              <a
               href="../../../public/assets/Zoyidjon.pdf" // bu yerga faylning URL manzilini yozing
               download="Zoyidjon_Nasretdinov_Resume.pdf"
               className="btn bg-secondary rounded-[5px] p-2 flex items-center justify-center"
              >
                <HiOutlineDocumentDownload size={20} />
              </a>
            </div>

          </div>
          <div>
            <h2 className="text-xl font-bold text-textSecondary">Zoyidjon Nasretdinov</h2>
            <p className="text-sm">
              Im a <span className="font-medium">Developer</span>
            </p>
          </div>
        </div>
      </div>
      {/* Info tags */}
      <ul className="flex flex-wrap gap-2 mb-4 bg-secondary rounded-[5px] p-2">
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <CiLocationOn size={16} className='text-textSecondary' /> Uzbekistan
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <GrLanguage size={16} className='text-textSecondary'  /> English & Uzbek
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <TbSchool size={16} className='text-textSecondary' /> Software Engineer
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <IoMdTime size={16} className='text-textSecondary' /> IST
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <FaUniversity size={16} className='text-textSecondary' /> PDP University
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <HiOutlineEmojiHappy size={16} className='text-textSecondary' /> Good Boy
        </li>
        <li className="flex items-center gap-1 border border-[#212121] rounded-full px-2 py-1 text-[12px]">
          <FaChess size={16} className='text-textSecondary' /> Chess player
        </li>
      </ul>
      {/* Social / Contact links */}
      <ul className="grid grid-cols-2 gap-2">
        <li className="btn flex items-center justify-center bg-secondary rounded-[5px] px-2 py-3">
          <a
            href=""
            className="flex items-center gap-1 text-[16px] text-textPrimary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiTelegramLogo size={22} className='text-textSecondary' /> Telegram me
          </a>
        </li>
        <li className="btn flex items-center justify-center bg-secondary rounded-[5px] p-2">
          <a
            href=""
            className="flex items-center gap-1 text-[16px] text-textPrimary "
            target="_blank"
            rel="noopener noreferrer"
          >
           <FiPhone size={22} className='text-textSecondary' /> Phone me
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Hero

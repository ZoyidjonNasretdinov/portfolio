import React from 'react'
import { GoStack } from 'react-icons/go'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiNestjs, SiNuxtdotjs } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

const TechStacks = () => {
  return (
    <section className="bg-primary w-full h-[34vh] rounded-[1vw] px-[0.8vw] py-[2vh] text-textPrimary shadow-lg mobile:p-[4vw] relative">
      {/* Header */}
      <div className="mb-[2vh] text-center">
        <h2 className="flex gap-[0.5vw] text-[0.8vw] justify-center items-center font-medium mobile:text-[2.5vw]">
          <GoStack className="text-textSecondary text-[1.2vw] mobile:text-[3vw]" /> My Stacks
        </h2>
        <p className="text-[1.6vw] font-bold mobile:text-[4vw]">Tech Arsenal</p>
      </div>

      {/* Tech list with 2x2 grid */}
      <ol className="grid grid-cols-2 gap-[0.7vw] justify-center">
        {[
          { icon: <TbBrandNextjs />, title: 'Next JS' },
          { icon: <SiNuxtdotjs />, title: 'Nuxt JS' },
          { icon: <SiNestjs />, title: 'Nest JS' },
          { icon: <TbBrandReactNative />, title: 'React Native' },
        ].map((tech, index) => (
          <li
            key={index}
            className="relative flex items-center justify-between gap-[0.5vw] w-full h-[8vh] px-[0.8vw] py-[1vh] bg-secondary rounded-[0.8vw]
              group shadow-md transition-transform duration-300 transform hover:scale-105 hover:border hover:border-textSecondary"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-[0.5vw] whitespace-nowrap overflow-hidden text-ellipsis">
              <span className="flex items-center justify-center p-[0.5vw] bg-[#282828] rounded-[0.5vw]">
                {React.cloneElement(tech.icon, {
                  size: '1.5vw',
                  className: 'text-textSecondary mobile:text-[2.5vw]',
                })}
              </span>
              <span className="text-[0.8vw] font-medium mobile:text-[2.2vw]">{tech.title}</span>
            </div>

            {/* Hover Arrow Icon */}
            <span className="text-[1vw] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
              <MdOutlineArrowOutward className="text-textSecondary mobile:text-[2.5vw]" />
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default TechStacks

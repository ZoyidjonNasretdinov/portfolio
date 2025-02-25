import React from 'react'
import { GoStack } from 'react-icons/go'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiNestjs, SiNuxtdotjs } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

const TechStacks = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] p-[2vw] text-textPrimary shadow-lg mobile:p-[4vw]">
      {/* Header */}
      <div className="mb-[2vh] text-center">
        <p className="flex gap-[0.5vw] text-[1vw] justify-center items-center font-medium mobile:text-[2.5vw]">
          <GoStack className="text-textSecondary text-[1.5vw] mobile:text-[3vw]" /> My Stacks
        </p>
        <h2 className="text-[2vw] font-bold mobile:text-[4vw]">Tech Arsenal</h2>
      </div>

      {/* Tech list */}
      <ol className="flex flex-wrap gap-[1vw] justify-center">
        {[
          { icon: <TbBrandNextjs />, title: 'Next JS' },
          { icon: <SiNuxtdotjs />, title: 'Nuxt JS' },
          { icon: <SiNestjs />, title: 'Nest JS' },
          { icon: <TbBrandReactNative />, title: 'React Native' },
        ].map((tech, index) => (
          <li
            key={index}
            className="relative flex items-center justify-between gap-[0.5vw] w-[calc(50%-0.5vw)] px-[1vw] py-[1vh] bg-secondary rounded-[0.8vw] 
              transition-transform duration-300 transform hover:scale-110 hover:border hover:border-textSecondary group shadow-md"
          >
            {/* Icon & Title */}
            <div className="flex items-center gap-[0.5vw]">
              <span className="flex items-center justify-center p-[0.5vw] bg-[#282828] rounded-[0.5vw]">
                {React.cloneElement(tech.icon, {
                  size: '1.5vw',
                  className: 'text-textSecondary mobile:text-[3vw]',
                })}
              </span>
              <span className="text-[0.9vw] mobile:text-[2.5vw]">{tech.title}</span>
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

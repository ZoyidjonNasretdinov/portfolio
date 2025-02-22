import React from 'react'
import { GoStack } from 'react-icons/go'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { SiNestjs, SiNuxtdotjs } from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

const TechStacks = () => {
  return (
    <section className='bg-primary w-full rounded-[17px] p-4 text-textPrimary shadow-md'>
      <div className='mb-4 text-center'>
        <p className='flex gap-2 text-sm justify-center items-center font-medium'>
          <GoStack className='text-textSecondary' /> My Stacks
        </p>
        <h2 className='text-2xl font-bold'>Tech Arsenal</h2>
      </div>
      <ol className='flex flex-wrap gap-3'>
        {[
          { icon: <TbBrandNextjs size={20} />, title: 'Next JS' },
          { icon: <SiNuxtdotjs size={20} />, title: 'Nuxt JS' },
          { icon: <SiNestjs size={20} />, title: 'Nest JS' },
          { icon: <TbBrandReactNative size={20} />, title: 'React Native' },
        ].map((tech, index) => (
          <li
            key={index}
            className='flex items-center justify-between gap-2 w-[calc(50%-0.375rem)] px-3 py-2 bg-secondary rounded-[13px] transition-transform transform hover:scale-105 group'
          >
            <div className='flex items-center gap-2'>
              <span className='flex items-center justify-center p-1 bg-[#282828] rounded-[5px]'>
                {tech.icon}
              </span>
              <span className='text-[10px]'>{tech.title}</span>
            </div>
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-1500 transform group-hover:rotate-0">
              <MdOutlineArrowOutward />
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default TechStacks

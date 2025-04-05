import React from 'react'
import { MdOutlineWbSunny, MdOutlineSpeed } from 'react-icons/md'
import { TbRepeat } from 'react-icons/tb'
import { BsBarChart } from 'react-icons/bs'
import { LuPaintbrush } from 'react-icons/lu'

const benefits = [
  { icon: <MdOutlineSpeed className='text-[1.2vw]' />, text: 'Speed Delivery' },
  { icon: <TbRepeat className='text-[1.2vw]' />, text: 'Quick Turnaround' },
  { icon: <BsBarChart className='text-[1.2vw]' />, text: 'Success Tracking' },
  { icon: <LuPaintbrush className='text-[1.2vw]' />, text: 'Unique Design' }
]
const ServiceBenefits = () => {
  return (
    <section className='bg-primary rounded-[1vw] p-[1vw] text-textPrimary shadow-md w-full'>
      <article className='flex flex-col gap-[0.6vw] items-center border-b-[1px] border-textPrimary pb-[0.5vw]'>
        <h2 className='flex gap-[0.2vw] items-center text-[1vw]'>
          <MdOutlineWbSunny className='text-[1.2vw]' /> Benefits
        </h2>
        <p className='text-[1.4vw]'>Service Benefits</p>
      </article> 
      
      <ul className='flex flex-col gap-[0.5vw] mt-[1vw]'>
        {benefits.map((benefit, index) => (
          <li key={index} className='flex items-center gap-[0.5vw] bg-[#1c1c1c]  px-[1vw] py-[0.5vw] rounded-[0.5vw] text-[1.2vw]'>
            <span className='text-[1vw] p-[0.5vw] rounded-[0.5vw] bg-primary'>{benefit.icon}</span>
            {benefit.text}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ServiceBenefits

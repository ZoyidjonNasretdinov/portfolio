import React from 'react'
import { BsPersonWorkspace } from 'react-icons/bs'
import { RiCalendarScheduleLine } from 'react-icons/ri'

const ServiceAvailable = () => {
  return (
    <section className="rounded-[1vw] bg-primary p-[1vw] text-white shadow-md">
      <div className=' rounded-[1vw] p-[0.5vw] text-textPrimary shadow-md'>
        <p className='bg-secondary flex mb-[1vw] p-[0.5vw] items-center justify-center rounded-full gap-[0.5vw]'><span className='flex w-[1vw] h-[1vw] bg-green-600 rounded-full shadow-lg'></span> Available to work</p>
        <p className='bg-secondary flex mb-[1vw] p-[0.5vw] items-center justify-center rounded-full gap-[0.5vw]'><BsPersonWorkspace />Freelancing</p>
        <a className='bg-secondary flex mb-[1vw] p-[0.5vw] items-center justify-center rounded-[1vw] gap-[0.5vw]' href=""><RiCalendarScheduleLine />Schedule</a>
      </div>
    </section>
  )
}

export default ServiceAvailable
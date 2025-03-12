import React from 'react'
import { MdOutlineWbSunny } from 'react-icons/md'

const ServiceBenefits = () => {
  return (
    <section className='bg-primary rounded-[1vw] p-[1vw] text-textPrimary shadow-md'>
      <article className='flex flex-col gap-[0.5vw] items-center border-b-[1px] border-textPrimary pb-[1vw]'>
        <h2 className='flex gap-[0.2vw] items-center text-[1vw]'><MdOutlineWbSunny className='text-[1.2vw]'/>Benefits</h2>
        <p className='text-[1.4vw]'>Service Benefits</p>
      </article> 
      
    </section>
  )
}

export default ServiceBenefits
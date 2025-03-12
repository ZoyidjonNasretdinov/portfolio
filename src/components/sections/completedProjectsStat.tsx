import React from 'react'
import { BsFlag } from 'react-icons/bs'

const CompletedProjectsStatistics = () => {
  return (
    <section className='bg-primary rounded-[1vw] p-[1vw] text-textPrimary shadow-md'>
      <article>
        <h2 className='flex items-center text-[1vw] gap-[0.5vw]'><BsFlag className='text-[1.4vw] text-textSecondary'/> Completed Projects</h2>
        <p className='text-[6vw] text-textSecondary font-bold'>56+</p>
      </article>
    </section>
  )
}

export default CompletedProjectsStatistics
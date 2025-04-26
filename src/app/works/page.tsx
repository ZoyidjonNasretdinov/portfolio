import { Layout } from '@/components'
import ServiceAbout from '@/components/sections/serviceAbout'
import Services from '@/components/sections/services'
import WorkStatistics from '@/components/sections/work-stats'
import React from 'react'


const Works = () => {
  return (
    <Layout>
      <div className="flex gap-[0.5vw] p-[1vw]">
        <div className='w-[20vw] gap-[0.5vw] flex flex-col'>
          <WorkStatistics/>
          <ServiceAbout />
          <Services/>
        </div>
        <div className='w-[56vw]'></div>
        <div className='w-[20vw]'></div>
      </div>
    </Layout>
  )
}

export default Works
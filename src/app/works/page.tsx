import { Layout } from '@/components'
import React from 'react'
import WorkStatistics from '@/components/sections/work-stats'

const Works = () => {
  return (
    <Layout>
      <div className="flex gap-[1vw] p-[1vw]">
        <div className='w-[20vw]'>
          <WorkStatistics />
        </div>
        <div className='w-[56vw]'></div>
        <div className='w-[20vw]'></div>
      </div>
    </Layout>
  )
}

export default Works
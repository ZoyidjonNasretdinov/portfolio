import { Layout } from '@/components'
import Projects from '@/components/sections/projects'
import ServiceAbout from '@/components/sections/serviceAbout'
import ServiceStatistics from '@/components/sections/serviceStats'
import React from 'react'

const Services = () => {
  return (
    <Layout>
      <div className="flex gap-3">
        <div className="flex flex-col w-[330px] gap-3">
          <ServiceStatistics />
          <ServiceAbout />
          <Projects />
        </div>
        <div className="col"></div>
        <div className="flex flex-col w-[270px] gap-3"></div>
      </div>
    </Layout>
  )
}

export default Services 
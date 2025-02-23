import { Layout } from '@/components'
import ServiceAbout from '@/components/sections/serviceAbout'
import ServiceStatistics from '@/components/sections/serviceStats'
import React from 'react'

const Services = () => {
  return (
    <Layout>
      <div className="container">
        <div className="flex flex-col w-[330px] gap-3">
          <ServiceStatistics />
          <ServiceAbout />
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </Layout>
  )
}

export default Services
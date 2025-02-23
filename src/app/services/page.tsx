import { Layout } from '@/components'
import ServiceStatistics from '@/components/sections/serviceStats'
import React from 'react'

const Services = () => {
  return (
    <Layout>
      <div className="container">
        <div className="col w-[330px]">
          <ServiceStatistics />
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </Layout>
  )
}

export default Services
import { Layout } from '@/components'
import CompletedProjects from '@/components/sections/completedprojects'
import CompletedProjectsStatistics from '@/components/sections/completedProjectsStat'
import Projects from '@/components/sections/projects'
import ServiceAbout from '@/components/sections/serviceAbout'
import ServiceAvailable from '@/components/sections/serviceAvailable'
import ServiceBenefits from '@/components/sections/serviceBenefits'
import ServicesCards from '@/components/sections/servicesCards'
import ServiceStatistics from '@/components/sections/serviceStats'
import React from 'react'

const Services = () => {
  return (
    <Layout>
      <div className="flex gap-[0.5vw] p-[1vw] h-[100vh] ">
        <div className="flex flex-col w-[20vw] gap-[0.5vw]">
          <ServiceStatistics />
          <ServiceAbout />
          <Projects />
        </div>
        <div className="col w-[60vw] gap-[0.5vw]">
          <CompletedProjects />
          <ServicesCards />
        </div>
        <div className="flex flex-col w-[18vw] gap-[0.5vw]">
          <ServiceAvailable />
          <CompletedProjectsStatistics />
          <ServiceBenefits/>
        </div>
      </div>
    </Layout>
  )
}

export default Services 
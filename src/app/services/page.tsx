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
      <div className="hidden desktop:flex gap-[0.5vw] p-[1vw] h-[100vh] ">
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

      {/* Tablet (810px - 1439px) */}
      <div className='hidden tablet:flex desktop:hidden flex-row gap-[1vw] p-[2vw]'>
        <div className="w-[38%] flex flex-col gap-[1vw]">
               
        </div>
        <div className="w-[60%] flex flex-col gap-[1vw]">
               
        </div>
      </div>
      
      {/* Mobile (809px dan kichik) */}
      <div className="flex mobile:flex tablet:hidden desktop:hidden flex-col px-[3vw] gap-[2vh]">
        <CompletedProjects />
        <ServicesCards />
      </div>
    </Layout>
  )
}

export default Services 
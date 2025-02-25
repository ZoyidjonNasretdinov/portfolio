import React from 'react'
import { FaStarAndCrescent } from 'react-icons/fa6'
import { GiWireframeGlobe } from 'react-icons/gi'
import { GoGoal } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import { SiProtondrive } from 'react-icons/si'

const Workflow = () => {
  return (
    <section className="bg-primary w-[22vw] mobile:w-full mx-auto rounded-[1vw] p-[2vw] text-textPrimary shadow-lg relative overflow-hidden">
      {/* Header */}
      <div className="mb-[2vh] text-center">
        <h2 className="text-[1vw] mobile:text-[3vw] font-bold flex items-center justify-center gap-[0.5vw] mb-[1vh]">
          <FaStarAndCrescent className="text-[1.5vw] mobile:text-[3.5vw]" />
          Work Process
        </h2>
        <p className="text-[1.5vw] mobile:text-[4vw]">Workflow Highlights</p>
      </div>

      {/* Workflow Steps */}
      <dl className="space-y-[1vh] relative">
        {[
          {
            term: 'Goals & Objectives',
            description: 'Defining project aims and target outcomes to guide design.',
            Icon: GoGoal,
          },
          {
            term: 'Research',
            description: 'Delving into user needs and market trends for informed decisions.',
            Icon: IoIosSearch,
          },
          {
            term: 'Wireframe',
            description: 'Translating ideas into rough visuals and structural outlines.',
            Icon: GiWireframeGlobe,
          },
          {
            term: 'Prototyping',
            description: 'Crafting interactive models to visualize and refine design concepts.',
            Icon: SiProtondrive,
          },
          {
            term: 'Finalize Design',
            description: 'Incorporating feedback and polishing design for launch.',
            Icon: MdDesignServices,
          },
        ].map(({ term, description, Icon }, index) => (
          <div
            key={index}
            className="relative group bg-secondary rounded-[0.8vw] px-[1vw] py-[1vh] transition-transform duration-300 transform hover:scale-105 hover:border hover:border-textSecondary shadow-md"
          >
            {/* Step Title */}
            <dt className="flex items-center gap-[0.5vw] text-[0.9vw] mobile:text-[2.5vw] font-medium">
              <span className="p-[0.5vw] bg-[#282828] rounded-[0.5vw] flex items-center justify-center">
                <Icon className="text-textSecondary text-[1.2vw] mobile:text-[2.8vw]" />
              </span>
              {term}
            </dt>

            {/* Tooltip Description */}
            <dd
              className="absolute left-full top-0 ml-[1vw] p-[1vw] bg-secondary rounded-[0.8vw] text-[0.8vw] mobile:text-[2vw] text-textPrimary opacity-0 transform -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 z-10 shadow-lg"
            >
              <dfn className="font-semibold">{term}:</dfn> {description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Workflow

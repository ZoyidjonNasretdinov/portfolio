import React from 'react'
import { FaStarAndCrescent } from 'react-icons/fa6'
import { GiWireframeGlobe } from 'react-icons/gi'
import { GoGoal } from 'react-icons/go'
import { IoIosSearch } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import { SiProtondrive } from 'react-icons/si'

const Workflow = () => {
  return (
    <section className="bg-primary w-[350px] mx-auto rounded-[17px] p-4 text-textPrimary shadow-md relative overflow-hidden">
      <div className="mb-4 text-center">
        <h2 className="text-sm font-bold flex items-center justify-center gap-2 mb-2">
          <FaStarAndCrescent size={20} /> Work Process
        </h2>
        <p className="text-2xl">Workflow Highlights</p>
      </div>
      <dl className="space-y-4 relative">
        {[
          {
            term: 'Goals & Objectives',
            description:
              'Defining project aims and target outcomes to guide design.',
            Icon: GoGoal,
          },
          {
            term: 'Research',
            description:
              'Delving into user needs and market trends for informed decisions.',
            Icon: IoIosSearch,
          },
          {
            term: 'Wireframe',
            description:
              'Translating ideas into rough visuals and structural outlines.',
            Icon: GiWireframeGlobe,
          },
          {
            term: 'Prototyping',
            description:
              'Crafting interactive models to visualize and refine design concepts.',
            Icon: SiProtondrive,
          },
          {
            term: 'Finalize Design',
            description:
              'Incorporating feedback and polishing design for launch.',
            Icon: MdDesignServices,
          },
        ].map(({ term, description, Icon }, index) => (
          <div
            key={index}
            className="relative group bg-secondary rounded-[13px] px-4 py-3 transition-transform transform hover:scale-105"
          >
            <dt className="flex items-center gap-2 text-lg font-medium">
              <span className="p-2 bg-[#282828] rounded-[5px] flex items-center justify-center">
                <Icon size={20} />
              </span>
              {term}
            </dt>
            <dd
              className="absolute left-full top-0 ml-2 p-2 bg-secondary rounded-[13px] text-[12px] text-textPrimary opacity-0 transform -translate-x-2 transition-all duration-1500 group-hover:opacity-100 group-hover:translate-x-0 z-10"
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

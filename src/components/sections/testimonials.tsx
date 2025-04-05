import React from 'react'
import { GoCommentDiscussion } from 'react-icons/go'

const Testimonials = () => {
  return (
    <section className="bg-primary rounded-[1vw] w-[20vw] tablet:h-[65.5vw] mobile:h-[140vw] mobile:w-full tablet:w-full  tablet:rounded-[2vw] overflow-hidden  mobile:rounded-[3vw] ">
      {/* Header */}
      <div className="px-[1.5vw] py-[2vh]">
        {/* Icon va sarlavha */}
        <h2 className="flex items-center justify-center gap-[0.5vw] text-white mb-[1.5vh] text-[1.5vw] mobile:text-[4vw] tablet:text-[2vw]">
          <GoCommentDiscussion className="text-textSecondary text-[2vw] mobile:text-[4.5vw] tablet:text-[2.5vw]" />
          Testimonials
        </h2>

        {/* Subtitle */}
        <p className="text-[1vw] mobile:text-[6vw] tablet:text-[2.5vw] text-white flex justify-center mb-[2vh]">
          Rave Reviews Showcase
        </p>
      </div>
    </section>
  )
}

export default Testimonials

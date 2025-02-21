import React from 'react'
import { GoCommentDiscussion } from 'react-icons/go'

const Testimonials = () => {
  return (
    <section className="bg-primary rounded-[17px] w-[340px] overflow-hidden relative shadow-lg">
      <div className="px-6 py-4">
        <h2 className="flex items-center justify-center gap-1 text-white mb-2">
          <GoCommentDiscussion size={25} className="text-textSecondary" /> Testimonials
        </h2>
        <p className="text-[18px] text-white flex justify-center mb-4">Rave Reviews Showcase</p>
      </div>
    </section>
  )
}

export default Testimonials

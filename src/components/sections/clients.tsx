import React from 'react'
import { HiClipboardDocumentList } from 'react-icons/hi2'

const Clients = () => {
  return (
    <section className="bg-primary rounded-[1.5vw] w-full overflow-hidden relative shadow-lg 
      h-[30vh] desktop-lg:h-[25vh] desktop:h-[30vh] tablet:h-[35vh] mobile:h-[40vh]">
      <div className="px-[2vw] py-[2vh]">
        {/* Sarlavha va Ikona */}
        <h2 className="flex items-center justify-center gap-2 text-white mb-[1vh] 
          text-[1.5vw] desktop-lg:text-[1.2vw] desktop:text-[1.5vw] tablet:text-[2vw] mobile:text-[4vw]">
          <HiClipboardDocumentList
            size="1.8vw"
            className="text-textSecondary desktop-lg:size-[1.5vw] desktop:size-[2vw] tablet:size-[3vw] mobile:size-[5vw]"
          />
          My Clients
        </h2>

        {/* Qo'shimcha matn */}
        <p className="text-white flex justify-center mb-[2vh]
          text-[1.2vw] desktop-lg:text-[1vw] desktop:text-[1.2vw] tablet:text-[1.8vw] mobile:text-[3.5vw]">
          Satisfied Partners
        </p>
      </div>
    </section>
  )
}

export default Clients

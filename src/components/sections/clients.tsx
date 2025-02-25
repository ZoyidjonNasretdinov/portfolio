import React from 'react'
import { HiClipboardDocumentList } from 'react-icons/hi2'

const Clients = () => {
  return (
    <section className="bg-primary rounded-2xl w-full overflow-hidden relative shadow-lg 
      h-[30vh] desktop-lg:h-[25vh] desktop:h-[30vh] tablet:h-[35vh] mobile:h-[40vh]">
      <div className="px-6 py-1">
        {/* Sarlavha va Ikona */}
        <h2 className="flex items-center justify-center gap-2 text-white my-3 
          text-[1vw] desktop-lg:text-[1vw] desktop:text-[1vw] tablet:text-2xl mobile:text-3xl">
          <HiClipboardDocumentList size="1.2vw" className="text-textSecondary" />
          My Clients
        </h2>

        {/* Qo'shimcha matn */}
        <p className="text-white flex justify-center mb-1 text-sm desktop-lg:text-sm desktop:text-base tablet:text-lg mobile:text-xl">
          Satisfied Partners
        </p>
      </div>

      {/* Karusel */}
      <div className="overflow-hidden w-full  rounded-xl p-2">
        {/* O‘ngga harakat qiluvchi karusel */}
        <ul className="flex animate-carousel-right space-x-4">
          {['Google', 'Amazon', 'Facebook', 'Apple', 'Microsoft'].map((client, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[20%] bg-white text-primary font-bold rounded-lg shadow-md p-3 text-center text-sm tablet:text-base"
            >
              {client}
            </li>
          ))}
        </ul>

        {/* Chapga harakat qiluvchi karusel */}
        <ul className="flex animate-carousel-left space-x-4 mt-4">
          {['Tesla', 'Netflix', 'Adobe', 'Intel', 'Samsung'].map((client, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[20%] bg-secondary text-white font-bold rounded-lg shadow-md p-3 text-center text-sm tablet:text-base"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Clients

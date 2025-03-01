import React from "react";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Clients = () => {
  return (
    <section className="bg-primary rounded-[1vw] w-full overflow-hidden relative shadow-lg h-[30vh] tablet:h-[35vh] mobile:h-[40vh]">
      {/* Header */}
      <div className="px-[2vw] py-[2vh]">
        <h2 className="flex items-center justify-center gap-[0.5vw] text-white mb-[1vh] text-[1.2vw] mobile:text-[3vw]">
          <HiClipboardDocumentList className="text-textSecondary text-[1.5vw] mobile:text-[4vw]" />
          My Clients
        </h2>
        <p className="text-[0.9vw] text-white flex justify-center mb-[2vh] mobile:text-[2.5vw]">
          Satisfied Partners
        </p>
      </div>

      {/* Karusel */}
      <div className="overflow-hidden w-full relative">
        {/* O‘ngga harakat qiluvchi qator */}
        <div className="w-full overflow-hidden">
          <ul className="flex animate-carousel-right space-x-[2vw]">
            {["Google", "Amazon", "Facebook", "Apple", "Microsoft"].map((client, index) => (
              <li
                key={index}
                className="flex-shrink-0 w-[10vw] h-[6vh] bg-white text-primary font-bold rounded-lg shadow-md flex items-center justify-center text-[1vw] mobile:text-[2.5vw]"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>

        {/* Chapga harakat qiluvchi qator */}
        <div className="w-full overflow-hidden mt-[1.5vh]">
          <ul className="flex animate-carousel-left space-x-[2vw]">
            {["Tesla", "Netflix", "Adobe", "Intel", "Samsung"].map((client, index) => (
              <li
                key={index}
                className="flex-shrink-0 w-[10vw] h-[6vh] bg-secondary text-white font-bold rounded-lg shadow-md flex items-center justify-center text-[1vw] mobile:text-[2.5vw]"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;

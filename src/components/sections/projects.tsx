import { project1, project2, project3, project4, project5, project6 } from "@/assets";
import Image from "next/image";
import { PiProjectorScreenChart } from "react-icons/pi";

const Projects = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] mobile:rounded-[4vw] h-[28.5vh] mobile:h-[28vh] overflow-hidden relative shadow-lg">
      {/* Absolute Header */}
      <div className="absolute insert-0 w-full px-[1.5vw] py-[2vh] z-10">
        {/* Header with icon */}
        <h2 className="flex items-center justify-center gap-[0.5vw] text-white mb-[1vh] text-[1vw] mobile:text-[4vw]">
          <PiProjectorScreenChart className="text-textSecondary text-[1.5vw] mobile:text-[6vw]" />
          Projects
        </h2>

        {/* Subtitle */}
        <p className="text-[1.2vw] text-white flex justify-center mb-[3vh] mobile:text-[4.5vw]">
          Works Gallery
        </p>

        {/* View Works Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="btn relative border-2 border-textSecondary text-textSecondary 
              px-[1.2vw] py-[0.6vh] rounded-[0.5vw] mobile:rounded-[3vw] text-[0.9vw] mobile:text-[4.5vw] mobile:px-[3vw] mobile:py-[1.5vh]
              hover:bg-textSecondary hover:text-primary transition-all duration-300 
              hover:scale-110 overflow-hidden group"
          > 
            {/* Border hover effekti */}
            <span className="absolute inset-0 rounded-[0.5vw] border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
            View Works
          </a>
        </div>
      </div>

      {/* Scrolling Images (Background) */}
      <div className="relative top-[-8vh] left-0 w-full h-full flex items-end overflow-hidden">
        <ul className="flex gap-[2vw] absolute w-[300vw] animate-carousel-right-project">
          {[project1, project2, project3, project4, project5, project6].map((image, index) => (
            <li key={index} className="w-[20vw] h-[15vh] mobile:w-[55vw] mobile:h-[15vh]">
              <Image
                src={image}
                alt={`Project ${index + 1}`}
                width={150}
                height={150}
                className="w-full h-full object-cover rounded-[0.5vw] shadow-md opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

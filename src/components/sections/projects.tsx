import { PiProjectorScreenChart } from "react-icons/pi"

const Projects = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] h-[22vh] overflow-hidden relative shadow-lg mobile:h-[28vh]">
      <div className="px-[1.5vw] py-[2vh]">
        {/* Header with icon */}
        <h2 className="flex items-center justify-center gap-[0.5vw] text-white mb-[1vh] text-[1.2vw] mobile:text-[3vw]">
          <PiProjectorScreenChart className="text-textSecondary text-[1.5vw] mobile:text-[4vw]" />
          Projects
        </h2>

        {/* Subtitle */}
        <p className="text-[0.9vw] text-white flex justify-center mb-[1.5vh] mobile:text-[2.5vw]">
          Works Gallery
        </p>

        {/* View Works Button */}
        <div className="flex justify-center">
          <a
            href="#"
            className="btn relative border-2 border-textSecondary text-textSecondary 
              px-[1.2vw] py-[0.6vh] rounded-[0.5vw] text-[0.9vw] mobile:text-[2.5vw] mobile:px-[3vw] mobile:py-[1.5vh]
              hover:bg-textSecondary hover:text-primary transition-all duration-300 
              hover:scale-110 overflow-hidden group"
          >
            {/* Border hover effekti */}
            <span className="absolute inset-0 rounded-[0.5vw] border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
            View Works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

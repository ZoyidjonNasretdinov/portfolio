import { PiProjectorScreenChart } from "react-icons/pi"

const Projects = () => {
  return (
    <section className="bg-primary rounded-[17px] w-[250px] overflow-hidden relative shadow-lg">
      <div className="px-6 py-4">
        <h2 className="flex items-center justify-center gap-1 text-white mb-2">
          <PiProjectorScreenChart size={25} className="text-textSecondary" /> 
          Projects
        </h2>
        <p className="text-xl text-white flex justify-center mb-4">Works Gallery</p>
        <div className="flex justify-center">
          <a
            href="#"
            className="btn border border-textSecondary text-textSecondary px-4 py-2 rounded-[5px] hover:bg-textSecondary hover:text-primary transition-colors duration-300"
          >
            View Works
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

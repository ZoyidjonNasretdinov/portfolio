import { GrServices } from "react-icons/gr";

const Services = () => {
  return (
    <section className="bg-primary w-[340px] rounded-[17px] h-[200px] relative shadow-lg">
      <div className="px-6 py-4">
        <h2 className="flex items-center justify-center gap-1 text-white mb-2">
        <GrServices size={25} className="text-textSecondary" />
          Services
        </h2>
        <p className="text-xl text-white flex justify-center mb-4">Solution Suite</p>
        <div className="flex justify-center">
          <a
            href="#"
            className="btn border border-textSecondary text-textSecondary px-4 py-2 rounded-[5px] hover:bg-textSecondary hover:text-primary transition-colors duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services;

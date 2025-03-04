import { GrServices } from "react-icons/gr";

const Services = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] mobile:rounded-[4vw] h-[30vh] mobile:h-[30vh] overflow-hidden relative shadow-lg">
      {/* Absolute Header */}
      <div className="absolute top-0 left-0 w-full px-[1.5vw] py-[2vh] z-10">
        {/* Header */}
        <h2 className="flex items-center justify-center gap-[0.5vw] text-white mb-[1vh] text-[1vw] mobile:text-[4vw]">
          <GrServices className="text-textSecondary text-[1vw] mobile:text-[4.5vw]" />
          Services
        </h2>
        <p className="text-[1.2vw] text-white flex justify-center mb-[3vh] mobile:text-[6vw]">
          Solution Suite
        </p>

        {/* View All Services Button */}
        <div className="flex justify-center absolute bottom-[-5vh] left-1/2 transform -translate-x-1/2">
          <a
            href="#"
            className="btn relative border-2 border-textSecondary text-textSecondary 
              px-[1.2vw] py-[0.6vh] rounded-[0.5vw] mobile:rounded-[3vw] text-[0.8vw] mobile:text-[4vw] mobile:px-[4.5vw] mobile:py-[2vh]
              hover:bg-textSecondary hover:text-primary transition-all duration-300 
              hover:scale-110 overflow-hidden group"
          >
            {/* Hover border effect */}
            <span className="absolute inset-0 rounded-[0.5vw] border-2 border-transparent group-hover:border-white transition-all duration-300"></span>
            View All Services
          </a>
        </div>
      </div>

      {/* Scrolling Services List */}
      <div className="relative w-full mt-[5.8vh] h-full overflow-hidden flex flex-col justify-center">
        {/* O‘ngga harakat qiluvchi qator */}
        <ul className="flex animate-carousel-right space-x-[1.5vw]">
          {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'UI/UX Design', 'SEO'].map((service, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[8vw] mobile:w-[36vw] h-[6vh] bg-white text-primary font-bold rounded-lg shadow-md flex items-center justify-center text-[0.8vw] mobile:text-[4vw] mobile:rounded-[3vw]"
            >
              {service}
            </li>
          ))}
        </ul>

        {/* Chapga harakat qiluvchi qator */}
        <ul className="flex animate-carousel-left space-x-[1.5vw] mt-[2vh]">
          {['AI Solutions', 'E-commerce', 'API Dev', 'Cyber Security', 'Testing'].map((service, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[8vw] mobile:w-[36vw] h-[6vh] bg-secondary text-white font-bold rounded-lg shadow-md flex items-center justify-center text-[0.8vw] mobile:text-[4vw] mobile:rounded-[3vw]"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { FaLaptopCode, FaBrain } from 'react-icons/fa';
import { GrSchedule } from 'react-icons/gr';
import { MdWorkOutline } from 'react-icons/md';

const CompletedProjects = () => {
  const projects = [
    { title: 'Portfolio', count: 10 },
    { title: 'AI Models', count: 8 },
    { title: 'Web Apps', count: 15 },
    { title: 'Machine Learning', count: 5 },
  ];

  const services = [
    {
      title: 'Web Development',
      icon: <FaLaptopCode className='text-[2vw]' />,
      desc: 'Crafting high-performance and scalable websites with modern technologies. We focus on clean, responsive UI/UX design , Crafting high-performance and scalable websites with modern technologies. We focus on clean, responsive UI/UX design  We focus on clean,',
    },
    {
      title: 'AI Engineering',
      icon: <FaBrain className='text-[2vw]' />,
      desc: 'Designing and deploying intelligent AI-driven solutions such as predictive models, natural language processing, and computer Designing and deploying intelligent AI-driven solutions such as predictive models, natural language processing,Designing and    ',
    },
  ];
  

  return (
    <section className=' text-textPrimary'>
      <ul className='flex justify-center gap-[0.5vw] rounded-[1vw] px-[0.25vw] shadow-lg'>
        {services.map((service, index) => (
          <li
            key={index}
            className='w-[50%] bg-primary p-[1vw]  rounded-[1vw] border border-secondary shadow-md'
          >
            {/* Service Info */}
            <article className='flex flex-col gap-[0.5vw] mb-[1vw]'>
              <h2 className='flex items-center gap-[1vw] text-[1.2vw] text-white font-semibold'>
                <span className='p-[0.5vw] bg-secondary rounded-[0.6vw]'>{service.icon}</span>
                {service.title}
              </h2>
              <p className='text-[1.1vw] leading-tight text-gray-200'>{service.desc}</p>
            </article>

            {/* Schedule Button */}
            <a
              href='#'
              className='flex items-center justify-center gap-[1vw] bg-secondary text-white p-[1vw] rounded-[0.6vw] text-[1vw] font-medium hover:opacity-80 transition mb-[1vw]'
            >
              <GrSchedule className='text-[1.5vw]' />
              Schedule Call
            </a>

            {/* Completed Projects Header */}
            <div className='flex justify-between items-center text-[1vw] text-white font-medium mb-[1vw]'>
              <span>Completed Projects</span>
              <a href='#' className='hover:text-white'>View Projects</a>
            </div>

            {/* Project List (Carousel style) */}
            <div className='w-full overflow-hidden bg-secondary/30 rounded-[1vw]'>
              <ul className='flex animate-carousel-left gap-[1vw] p-[1vw] w-max'>
                {projects.map((project, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-[0.8vw] bg-primary text-white px-[1vw] py-[0.8vw] rounded-[0.8vw] whitespace-nowrap text-[1vw]'
                  >
                    <span className='p-[0.8vw] bg-secondary rounded-[0.6vw]'>
                      <MdWorkOutline className='text-[1.5vw]' />
                    </span>
                    {project.title}
                    <span className='w-[2vw] h-[2vw] flex items-center justify-center bg-secondary rounded-full text-[0.9vw] font-bold'>
                      {project.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedProjects;

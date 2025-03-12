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

  return (
    <section className='p-[1vw] bg-primary rounded-[1vw] text-textPrimary shadow-md'>
      <ul className='flex flex-wrap gap-[1vw] justify-center'>
        {[{ title: 'Web Development', icon: <FaLaptopCode className='text-[2vw]' />, desc: 'Creating functional websites with clean and responsive design.' },
          { title: 'AI Engineering', icon: <FaBrain className='text-[2vw]' />, desc: 'Developing AI-driven solutions for business automation.' }].map((service, index) => (
          <li key={index} className='flex-1 min-w-[40%] max-w-[50%]'>
            <article className='flex flex-col gap-[0.5vw] mb-[1vw]'>
              <h2 className='flex items-center gap-[1vw] text-[1.2vw] text-white'>
                <span className='p-[0.7vw] bg-secondary rounded-[0.5vw]'>{service.icon}</span>
                {service.title}
              </h2>
              <p className='text-[1vw] leading-tight'>{service.desc}</p>
            </article>
            <a href='' className='flex w-full bg-secondary justify-center p-[1vw] rounded-[0.5vw] gap-[1vw] mb-[1vw]'>
              <GrSchedule className='text-[1.5vw]' />Schedule Call
            </a>
            <div className='flex justify-between mb-[1vw] text-[1vw]'>
              <p>Completed Projects</p>
              <a href='' className='text-[1vw]'>View Project</a>
            </div>
            <div className='w-full overflow-hidden bg-secondary rounded-[1vw] relative'>
             <ul className='flex animate-carousel-left w-[200%] p-[0.5vw] gap-[1vw] '>
               {projects.map((project, i) => (
                  <li key={i} className='flex items-center bg-primary p-[0.5vw] gap-[0.5vw] rounded-[0.8vw]  whitespace-nowrap'>
                   <span className='p-[0.7vw] bg-secondary rounded-[0.6vw]'>
                     <MdWorkOutline className='text-[1.5vw]' />
                   </span>
                   {project.title}
                   <span className='flex items-center justify-center bg-secondary text-[1vw] rounded-[0.3vw] w-[2vw] h-[2vw]'>
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
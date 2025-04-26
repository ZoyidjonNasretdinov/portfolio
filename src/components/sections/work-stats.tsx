import React from 'react';
import { FaCertificate, FaPalette, FaHandshake, FaUsers } from 'react-icons/fa';

const stats = [
  { number: '08+', label: 'Certifications', icon: <FaCertificate /> },
  { number: '250+', label: 'Designs', icon: <FaPalette /> },
  { number: '07+', label: 'Collaborations', icon: <FaHandshake /> },
  { number: '32+', label: 'Clients', icon: <FaUsers /> },
];

const WorkStatistics = () => {
  return (
    <section className="grid grid-cols-2 gap-[0.5vw] p-[0.5vw] bg-primary text-white rounded-[1vw] ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-[#1e1e1e] rounded-[0.5vw] p-[0.5vw] flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text text-[3vw] font-extrabold mobile:text-[15vw] tablet:text-[6vw]">
            {stat.number}
            <span className="text-textSecondary">+</span>
          </p>
          <div className="flex items-center gap-[0.5vw] text-[0.6vw] tablet:text-[1vw] text-white bg-[#141414] px-[1vw] py-[0.5vh] rounded-[0.5vw] mobile:text-[3vw] mobile:rounded-[3vw] mobile:px-[3vw]">
            <span className="text-purple-400 text-5xl md:text-xl">{stat.icon}</span>
            <span>{stat.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkStatistics;

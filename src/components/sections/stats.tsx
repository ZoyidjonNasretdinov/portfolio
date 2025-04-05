import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const statsData = [
  {
    count: '10',
    label: 'Projects',
    Icon: AiOutlineFundProjectionScreen,
  },
  {
    count: '02',
    label: 'Happy Clients',
    Icon: BiHappyBeaming,
  },
  {
    count: '01',
    label: 'Years Expertise',
    Icon: GrUserExpert,
  },
];

const Statistics = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] p-[1.25vw] text-textPrimary shadow-lg mobile:p-[4vw]  relative overflow-hidden mobile:rounded-[3vw] tablet:rounded-[2vw]">
      {/* Statistics list */}
      <ul className="grid grid-cols-3 gap-[1vw] justify-center mobile:grid-cols-2 mobile:grid-rows-2 mobile:gap-[3vw] tablet:gap-[2vw]">
        {statsData.map(({ count, label, Icon }, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center gap-[0.5vw] px-[0.5vw] py-[2vh] bg-secondary rounded-[0.8vw] 
              transition-all duration-300 shadow-md hover:shadow-lg hover:ring-2 hover:ring-textSecondary mobile:rounded-[3vw] tablet:rounded-[2vw]"
          >
            {/* Count number with gradient text */}
            <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text 
              text-[3vw] font-extrabold mobile:text-[15vw] tablet:text-[6vw]">
              {count}
              <span className="text-textSecondary">+</span>
            </p>

            {/* Label with icon */}
            <span className="flex items-center gap-[0.5vw] text-[0.6vw] tablet:text-[1vw] text-white bg-[#141414] px-[1vw] py-[0.5vh] rounded-[0.5vw] mobile:text-[3vw] mobile:rounded-[3vw] mobile:px-[3vw]">
              <Icon className="text-textSecondary text-[1.2vw] mobile:text-[5.5vw] tablet:text-[2vw]" />
              {label}
            </span>
          </li>
        ))}
        <li className="hidden relative mobile:flex flex-col items-center justify-center gap-[0.5vw] px-[0.5vw] py-[2vh] bg-secondary rounded-[0.8vw] 
              transition-all duration-300 shadow-md hover:shadow-lg hover:ring-2 hover:ring-textSecondary mobile:rounded-[3vw]"
          > 
          <p className='text-[6vw] text-textSecondary'>Resume</p>
            <a href="/assets/Zoyidjon.pdf" download="Zoyidjon_Nasretdinov_Resume.pdf" className="btn bg-primary rounded-[2vw] p-[0.3vw] flex items-center justify-center mobile:p-[1.5vw]">
              <HiOutlineDocumentDownload className="text-[1.5vw] mobile:text-[10.5vw]" />
            </a>
          </li>
      </ul>
    </section>
  );
};

export default Statistics;

import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';

const statsData = [
  {
    count: '56',
    label: 'Projects',
    Icon: AiOutlineFundProjectionScreen,
  },
  {
    count: '23',
    label: 'Happy Clients',
    Icon: BiHappyBeaming,
  },
  {
    count: '06',
    label: 'Years Expertise',
    Icon: GrUserExpert,
  },
];

const Statistics = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] p-[2vw] text-textPrimary shadow-lg mobile:p-[4vw] relative">
      {/* Statistics list */}
      <ul className="flex gap-[2vw] justify-center">
        {statsData.map(({ count, label, Icon }, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center gap-[0.5vw] px-[2vw] py-[1.5vh] bg-secondary rounded-[0.8vw] 
              transition-transform duration-300 transform hover:scale-110 hover:border-2 hover:border-textSecondary shadow-md"
            style={{ willChange: 'transform' }} // Optimallik uchun
          >
            {/* Count number with gradient text */}
            <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text 
              text-[3vw] font-extrabold mobile:text-[6vw]">
              {count}
              <span className="text-textSecondary">+</span>
            </p>

            {/* Label with icon */}
            <span className="flex items-center gap-[0.5vw] text-[1vw] mobile:text-[2.5vw] text-white bg-[#141414] px-[1vw] py-[0.5vh] rounded-[0.5vw]">
              <Icon className="text-textSecondary text-[1.5vw] mobile:text-[3vw]" />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

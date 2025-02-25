import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiHappyBeaming } from 'react-icons/bi';
import { GrUserExpert } from 'react-icons/gr';

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
    <section className="bg-primary w-full rounded-[1vw] p-[1vw] text-textPrimary shadow-lg mobile:p-[4vw] relative overflow-hidden">
      {/* Statistics list */}
      <ul className="grid grid-cols-3 gap-[1vw] justify-center mobile:grid-cols-1">
        {statsData.map(({ count, label, Icon }, index) => (
          <li
            key={index}
            className="relative flex flex-col items-center gap-[0.5vw] px-[0.5vw] py-[2vh] bg-secondary rounded-[0.8vw] 
              transition-all duration-300 shadow-md hover:shadow-lg hover:ring-2 hover:ring-textSecondary"
          >
            {/* Count number with gradient text */}
            <p className="bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text 
              text-[3vw] font-extrabold mobile:text-[5vw]">
              {count}
              <span className="text-textSecondary">+</span>
            </p>

            {/* Label with icon */}
            <span className="flex items-center gap-[0.5vw] text-[0.6vw] mobile:text-[2.2vw] text-white bg-[#141414] px-[1vw] py-[0.5vh] rounded-[0.5vw]">
              <Icon className="text-textSecondary text-[1.2vw] mobile:text-[2.5vw]" />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

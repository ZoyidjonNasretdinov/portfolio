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
    <section className="bg-primary w-full rounded-[17px] p-4 text-textPrimary shadow-md">
      <ul className="flex gap-4 justify-center">
        {statsData.map(({ count, label, Icon}, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-1 px-3 py-2 bg-secondary rounded-[13px]"
          >
            <p className="bg-gradient-to-b from-white to-black text-transparent bg-clip-text text-[50px] font-bold">
              {count}<span className='text-textSecondary'>+</span>
            </p>
            <span className="flex w-full mx-2 items-center justify-center gap-2 text-[8px] text-white  bg-[#141414] p-1 rounded-[5px]">
              <Icon size={16}  className='text-textSecondary'/>
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

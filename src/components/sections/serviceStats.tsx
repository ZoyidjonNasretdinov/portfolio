import React from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { GrUserExpert } from 'react-icons/gr';
import { MdDesignServices, MdOutlineStarOutline } from 'react-icons/md';

const statsData = [
  {
    count: '99',
    label: 'Satisfaction',
    Icon: MdOutlineStarOutline,
  },
  {
    count: '08',
    label: 'Partnerships',
    Icon: AiOutlineLike,
  },
  {
    count: '12',
    label: 'Services Suite',
    Icon: MdDesignServices,
  },
  {
    count: '14',
    label: 'Accolades',
    Icon: GrUserExpert,
  },
];

const ServiceStatistics = () => {
  return (
    <section className="bg-primary w-full rounded-[1vw] p-[0.5vw] text-textPrimary shadow-md">
      {/* Grid o‘rnida flex o‘rniga grid qo‘llash */}
      <ul className="grid grid-cols-2 gap-[0.5vw] justify-center">
        {statsData.map(({ count, label, Icon }, index) => (
          <li
            key={index}
            className="flex flex-col items-center px-[0.5vw] py-[0.5vw] bg-secondary rounded-[1vw] shadow-md"
          >
            <p className="bg-gradient-to-b from-white to-black text-transparent bg-clip-text text-[3.5vw] font-bold">
              {count}
              <span className="text-textSecondary">+</span>
            </p>
            <span className="flex w-full mx-2 items-center justify-center gap-[0.5vw] text-[0.6vw] text-white bg-[#141414] p-[0.5vw] rounded-[1vw]">
              <Icon  className="text-textSecondary text-[1.2vw]" />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceStatistics;

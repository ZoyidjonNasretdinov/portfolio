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
    <section className="bg-primary w-full rounded-[17px] p-4 text-textPrimary shadow-md">
      {/* Grid o‘rnida flex o‘rniga grid qo‘llash */}
      <ul className="grid grid-cols-2 gap-4 justify-center">
        {statsData.map(({ count, label, Icon }, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-1 px-3 py-2 bg-secondary rounded-[13px]"
          >
            <p className="bg-gradient-to-b from-white to-black text-transparent bg-clip-text text-[50px] font-bold">
              {count}
              <span className="text-textSecondary">+</span>
            </p>
            <span className="flex w-full mx-2 items-center justify-center gap-2 text-[8px] text-white bg-[#141414] p-1 rounded-[5px]">
              <Icon size={16} className="text-textSecondary" />
              {label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceStatistics;

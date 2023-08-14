import React from 'react';

export const Card = ({ title, content,color,size,icon}) => {
  return (
    <div className={`flex p-4 shadow-md rounded-lg ${color} justify-center md:justify-between `}>
      <div className="items-center mb-2 hidden md:block">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={`m-4 ${size} `}>{content}</p>
      </div>
      <div className={`m-4 ${size}`}>
          {icon}
      </div>
    </div>
  );
};


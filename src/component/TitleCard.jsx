import React from 'react';

export const TitleCard = ({ title, content,color,size,photo}) => {
  return (
    <div className={`p-4 m-6 shadow-md rounded-xl ${color} justify-center md:justify-between `}>
      <div className="flex items-center mb-2 ">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className={`m-4 ${size} `}>{content}</p>
      </div>
      <div className={`m-4 ${size}`}>
          {photo}
      </div>
    </div>
  );
};

